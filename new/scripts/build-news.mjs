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

function paragraphify(text) {
  if (!text) return '';
  return text
    .split(/\n{2,}/)
    .map((p) => `<p>${escapeHtml(p.trim()).replace(/\n/g, '<br>')}</p>`)
    .join('\n');
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
      source_url: item.source_url || null,
      popup: item.popup || { enabled: false },
    });

    const url = `https://www.hicare.co.kr/new/news/${slug}/`;

    const sourceLinkBlock = item.source_url
      ? `<div class="mt-10 p-5 bg-neutral-50 border border-neutral-200 rounded-xl">
        <p class="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
          <span class="lang-ko-only">원문</span><span class="lang-en-only">Original source</span>
        </p>
        <a href="${escapeHtml(item.source_url)}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 break-all">
          <span class="material-symbols-outlined text-[18px]" aria-hidden="true">link</span>
          <span>${escapeHtml(item.source_url)}</span>
          <span class="material-symbols-outlined text-[16px]" aria-hidden="true">open_in_new</span>
        </a>
      </div>`
      : '';

    const vars = {
      SLUG: slug,
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
      SOURCE_LINK_BLOCK: sourceLinkBlock,
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
