#!/usr/bin/env node
/**
 * Build script: generates new/news/{slug}/index.html for each
 * new/data/news/{slug}.json file, using new/templates/news-detail.html.
 *
 * Usage:
 *   node new/scripts/build-news.mjs
 * Or:
 *   npm run build:news
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data', 'news');
const OUT_DIR = path.join(ROOT, 'news');
const TEMPLATE = path.join(ROOT, 'templates', 'news-detail.html');

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeJsonStr(s) {
  return String(s ?? '').replace(/[\\"]/g, '\\$&').replace(/\n/g, '\\n').replace(/\r/g, '');
}

/**
 * Convert raw body text into HTML. Supports inline layout markers so a
 * plain Korean notice can render with the same visual hierarchy as the
 * original disclosure document:
 *
 *   ::CENTER::   line is centered (useful for sub-headings, "아 래" divider)
 *   ::RIGHT::    line is right-aligned (signature, date)
 *   ::DIVIDER::  renders the "--------- 아   래 ---------" horizontal divider
 *   ::SIGNATURE-START::
 *   ...          right-aligned signature block (company name, title, CEO)
 *   ::SIGNATURE-END::
 *
 * Any line starting with "::" but not matching a known marker is kept verbatim.
 * Blank line separates paragraphs (standard Markdown-like behavior).
 */
function paragraphify(text) {
  if (!text) return '';
  const lines = text.split('\n');
  const out = [];
  let para = [];
  let inSig = false;

  const flushPara = () => {
    if (!para.length) return;
    // Preserve leading whitespace per line (indentation) by converting
    // runs of leading spaces to &nbsp; after HTML escaping.
    const lines2 = para.map((ln) => {
      const m = ln.match(/^(\s*)(.*)$/);
      const indent = (m[1] || '').replace(/ /g, '&nbsp;').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
      return indent + escapeHtml(m[2]);
    });
    para = [];
    out.push(`<p>${lines2.join('<br>')}</p>`);
  };

  for (const rawLine of lines) {
    const line = rawLine.replace(/\r$/, '');
    const trimmed = line.trim();

    if (trimmed === '') {
      flushPara();
      continue;
    }

    if (trimmed === '::SIGNATURE-START::') {
      flushPara();
      out.push('<div class="news-signature">');
      inSig = true;
      continue;
    }
    if (trimmed === '::SIGNATURE-END::') {
      flushPara();
      out.push('</div>');
      inSig = false;
      continue;
    }
    if (trimmed === '::DIVIDER::') {
      flushPara();
      out.push('<div class="news-divider"><span class="news-divider__line"></span><span class="news-divider__label">아&nbsp;&nbsp;&nbsp;&nbsp;래</span><span class="news-divider__line"></span></div>');
      continue;
    }
    if (trimmed.startsWith('::CENTER::')) {
      flushPara();
      const content = trimmed.substring('::CENTER::'.length).trim();
      out.push(`<p class="text-center">${escapeHtml(content)}</p>`);
      continue;
    }
    if (trimmed.startsWith('::RIGHT::')) {
      flushPara();
      const content = trimmed.substring('::RIGHT::'.length).trim();
      out.push(`<p class="text-right">${escapeHtml(content)}</p>`);
      continue;
    }

    para.push(line);
  }
  flushPara();
  if (inSig) out.push('</div>');
  return out.join('\n');
}

function formatDate(iso, lang) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  if (lang === 'en') {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[parseInt(m,10)-1]} ${parseInt(d,10)}, ${y}`;
  }
  return `${y}년 ${parseInt(m,10)}월 ${parseInt(d,10)}일`;
}

function buildJsonLd(item, url) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: item.title_ko,
    alternateName: item.title_en,
    datePublished: item.date,
    inLanguage: ['ko-KR', 'en-US'],
    description: item.summary_ko || '',
    url,
    mainEntityOfPage: url,
    publisher: {
      '@type': 'Organization',
      name: 'HicareNet Inc.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.hicare.co.kr/assets/images/hicare-logo.png',
      },
    },
    image: 'https://www.hicare.co.kr/assets/images/hicare-logo.png',
  };
  return JSON.stringify(schema);
}

function render(template, vars) {
  let out = template;
  for (const [k, v] of Object.entries(vars)) {
    out = out.replace(new RegExp(`{{${k}}}`, 'g'), v ?? '');
  }
  return out;
}

async function main() {
  const template = await fs.readFile(TEMPLATE, 'utf8');
  const files = (await fs.readdir(DATA_DIR)).filter((f) => f.endsWith('.json'));

  const indexItems = [];
  let built = 0;
  for (const file of files) {
    const raw = await fs.readFile(path.join(DATA_DIR, file), 'utf8');
    let item;
    try {
      item = JSON.parse(raw);
    } catch (e) {
      console.error(`[build-news] Failed to parse ${file}: ${e.message}`);
      process.exitCode = 1;
      continue;
    }

    const slug = item.slug || item.id;
    if (!slug) {
      console.error(`[build-news] ${file}: missing slug/id`);
      process.exitCode = 1;
      continue;
    }

    indexItems.push({
      id: item.id,
      slug,
      date: item.date,
      category: item.category,
      tag_ko: item.tag_ko || '',
      tag_en: item.tag_en || '',
      title_ko: item.title_ko,
      title_en: item.title_en,
      summary_ko: item.summary_ko || '',
      summary_en: item.summary_en || '',
      popup: item.popup || { enabled: false },
    });

    const url = `https://www.hicare.co.kr/new/news/${slug}/`;

    const vars = {
      SLUG: slug,
      CATEGORY: item.category || 'news',
      DATE: item.date,
      DATE_FORMATTED: formatDate(item.date, 'ko'),
      TAG_KO: escapeHtml(item.tag_ko || ''),
      TAG_EN: escapeHtml(item.tag_en || ''),
      TITLE_KO: escapeHtml(item.title_ko || ''),
      TITLE_EN: escapeHtml(item.title_en || item.title_ko || ''),
      TITLE_KO_ESC: escapeJsonStr(item.title_ko || ''),
      TITLE_EN_ESC: escapeJsonStr(item.title_en || ''),
      SUMMARY_KO: escapeHtml(item.summary_ko || ''),
      SUMMARY_EN: escapeHtml(item.summary_en || ''),
      BODY_KO_HTML: paragraphify(item.body_ko || item.summary_ko || ''),
      BODY_EN_HTML: paragraphify(item.body_en || item.summary_en || ''),
      META_TITLE: `${item.title_ko} | 하이케어`,
      META_DESCRIPTION: (item.summary_ko || item.title_ko || '').slice(0, 160),
      JSONLD_ARTICLE: buildJsonLd(item, url),
    };

    const html = render(template, vars);
    const outPath = path.join(OUT_DIR, slug, 'index.html');
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, html, 'utf8');
    built++;
    console.log(`[build-news] ${slug}`);
  }

  // Regenerate lightweight index
  indexItems.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const indexOut = {
    _comment: 'Auto-generated by scripts/build-news.mjs. Edit data/news/{slug}.json, then run `npm run build:news`. Do not edit this file directly.',
    items: indexItems,
  };
  await fs.writeFile(
    path.join(ROOT, 'data', 'news.json'),
    JSON.stringify(indexOut, null, 2),
    'utf8'
  );

  console.log(`\n[build-news] Built ${built} detail page(s) -> ${OUT_DIR}`);
  console.log(`[build-news] Regenerated index -> ${path.join(ROOT, 'data', 'news.json')}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
