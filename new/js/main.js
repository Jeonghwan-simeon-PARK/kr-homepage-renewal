/**
 * Hicare NEW — Unified Main JavaScript
 * Merges ov3 home page logic + v6 sub-page logic
 */

// ============================================================
// 1. Home Page: Scroll animations, counter, scroll indicator
//    Only runs if .section-image exists (home page)
// ============================================================
function initHomeEffects() {
  var scrollIndicator = document.getElementById('scroll-indicator');
  if (!document.querySelector('.section-image')) return;

  // Scroll animation for home sections (IntersectionObserver)
  var animObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        entry.target.querySelectorAll('[data-animate]').forEach(function (el) {
          el.classList.add('is-animated');
        });
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section-image, .section-text').forEach(function (s) {
    animObserver.observe(s);
  });

  // Scroll indicator hide on scroll
  if (scrollIndicator) {
    window.addEventListener('scroll', function () {
      scrollIndicator.classList.toggle('is-hidden', window.scrollY > 200);
    }, { passive: true });
  }

  // Home page counter animation (data-count based)
  var countersAnimated = false;
  var statsSection = document.querySelector('[data-role="stats"]');
  if (statsSection) {
    var statsObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !countersAnimated) {
        countersAnimated = true;
        document.querySelectorAll('[data-count]').forEach(function (el) {
          if (el.offsetParent === null) return;
          var target = parseInt(el.getAttribute('data-count'), 10);
          var duration = 2000, startTime = null;
          function step(ts) {
            if (!startTime) startTime = ts;
            var p = Math.min((ts - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            var cur = Math.round(eased * target);
            el.textContent = target >= 1000 ? Math.floor(cur / 1000) + 'K' : String(cur);
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      }
    }, { threshold: 0.4 });
    statsObserver.observe(statsSection);
  }
}

// ============================================================
// 2. GNB: Scroll-based sticky header (v6 sub-pages)
//    Only runs if #gnb exists
// ============================================================
function initGNB() {
  const gnb = document.getElementById('gnb');
  if (!gnb) return;

  const threshold = 10;
  const hasDarkHero = !!document.querySelector('section[aria-label="히어로"], section[aria-label="페이지 헤더"]');

  if (hasDarkHero) {
    const style = document.createElement('style');
    style.textContent = `
      #gnb.gnb-at-top .gnb-link { color: rgba(255,255,255,0.9) !important; }
      #gnb.gnb-at-top .gnb-link:hover { background: rgba(255,255,255,0.1) !important; color: #fff !important; }
      #gnb.gnb-at-top .gnb-link.bg-primary-50 { background: rgba(255,255,255,0.15) !important; }
      #gnb.gnb-at-top #mobile-toggle { color: #fff !important; }
      #gnb.gnb-at-top img[alt*="로고"] { filter: brightness(0) invert(1); }
      #gnb.gnb-at-top #lang-ko,
      #gnb.gnb-at-top #lang-en { color: rgba(255,255,255,0.8) !important; }
      #gnb.gnb-at-top .text-neutral-300 { color: rgba(255,255,255,0.4) !important; }
      #gnb.gnb-at-top .bg-primary-600 { background: rgba(255,255,255,0.2) !important; }
      #gnb.gnb-at-top .bg-primary-600 span { color: #fff !important; }
    `;
    document.head.appendChild(style);
  }

  function updateGNB() {
    const scrollY = window.scrollY;
    if (scrollY > threshold) {
      gnb.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
      gnb.classList.remove('bg-transparent', 'gnb-at-top');
    } else {
      gnb.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
      gnb.classList.add('bg-transparent');
      if (hasDarkHero) gnb.classList.add('gnb-at-top');
    }
  }

  updateGNB();
  window.addEventListener('scroll', updateGNB, { passive: true });
}

// ============================================================
// 3. Mobile Menu Toggle (v6 sub-pages)
// ============================================================
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const icon = toggle.querySelector('.material-symbols-outlined');

  toggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    if (isOpen) {
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', '메뉴 열기');
      if (icon) icon.textContent = 'menu';
    } else {
      menu.classList.remove('hidden');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', '메뉴 닫기');
      if (icon) icon.textContent = 'close';
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      if (icon) icon.textContent = 'menu';
    }
  });
}

// ============================================================
// 4. Counter Animation (v6 sub-pages)
// ============================================================
function initCounters() {
  const counters = document.querySelectorAll('[data-animate="counter"]');
  if (counters.length === 0) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        if (isNaN(target)) return;

        if (prefersReducedMotion) {
          el.textContent = target >= 1000 ? Math.floor(target / 1000) + 'K' : String(target);
          observer.unobserve(el);
          return;
        }

        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(el, target) {
  const duration = 1500;
  const startTime = performance.now();

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);
    const current = Math.round(easedProgress * target);

    el.textContent = target >= 1000 ? Math.floor(current / 1000) + 'K' : String(current);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ============================================================
// 5. Scroll Reveal Animation (v6 sub-pages)
// ============================================================
function initScrollReveal() {
  const elements = document.querySelectorAll('[data-animate="fade-up"], [data-animate="fade-in"], [data-animate="stagger"]');
  if (elements.length === 0) return;

  // Skip if home page (home uses its own animation system)
  if (document.querySelector('.section-image')) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    elements.forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      if (el.getAttribute('data-animate') === 'stagger') {
        Array.from(el.children).forEach((child) => {
          child.style.opacity = '1';
          child.style.transform = 'none';
        });
      }
    });
    return;
  }

  elements.forEach((el) => {
    const type = el.getAttribute('data-animate');
    if (type === 'stagger') return;
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    if (type === 'fade-up') {
      el.style.transform = 'translateY(30px)';
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.getAttribute('data-animate-delay') || '0', 10);
        const type = el.getAttribute('data-animate');

        if (type === 'stagger') {
          Array.from(el.children).forEach((child, i) => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(20px)';
            child.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, delay + (i * 120));
          });
        } else {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
        }

        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach((el) => observer.observe(el));
}

// ============================================================
// 6. Back to Top Button
// ============================================================
// ============================================================
// Latin-run tracking override on KO pages.
//   common.css applies tight Korean-tuned tracking (-4px on section
//   titles, -1.5px on the careers h1 etc.) that cramps Latin glyphs
//   when the heading mixes English. For any H1/H2/H3 that contains
//   a Latin word, override letter-spacing to -1px — the same value
//   used for the EN page baseline. Runs again whenever <html lang>
//   flips so EN toggles restore the stylesheet-driven tracking.
// ============================================================
function initLatinTracking() {
  const LATIN_RUN = /[A-Za-z]{2,}/;
  const apply = () => {
    // Clear prior overrides first
    document.querySelectorAll('[data-latin-tracked]').forEach((el) => {
      el.style.removeProperty('letter-spacing');
      delete el.dataset.latinTracked;
    });
    const lang = document.documentElement.lang || 'ko';
    if (lang !== 'ko') return;
    document.querySelectorAll('h1, h2, h3').forEach((el) => {
      if (!LATIN_RUN.test(el.innerText || '')) return;
      el.style.setProperty('letter-spacing', '-1px', 'important');
      el.dataset.latinTracked = '1';
    });
  };
  apply();
  new MutationObserver(apply).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang']
  });
}

// ============================================================
// Home: Right-side section navigator (Hanwha Ocean-style)
//   Lists the page's sections with numeric indices on the right;
//   highlights the currently visible section. Only on home page.
// ============================================================
function initSectionNav() {
  if (!document.querySelector('.section-image')) return; // home only
  const sections = [
    { id: 'hero', en: 'Home', ko: 'Home' },
    { id: 'solutions', en: 'Solutions', ko: '사업영역' },
    { id: 'about', en: 'About', ko: '회사소개' },
    { id: 'technology', en: 'Technology', ko: '기술' },
    { id: 'stats', en: 'Track Record', ko: '실적' },
    { id: 'compliance', en: 'Compliance', ko: '인증' },
    { id: 'resources', en: 'Resources', ko: '리소스' }
  ].filter((s) => document.getElementById(s.id));
  if (!sections.length) return;

  // Inject styles
  if (!document.getElementById('section-nav-style')) {
    const style = document.createElement('style');
    style.id = 'section-nav-style';
    style.textContent = `
      #section-nav{position:fixed;top:50%;right:24px;transform:translateY(-50%);z-index:25;display:flex;flex-direction:column;gap:6px;opacity:0;pointer-events:none;transition:opacity 220ms ease;font-family:'Pretendard Variable','Pretendard','Inter',sans-serif;}
      #section-nav.is-visible{opacity:1;pointer-events:auto;}
      .section-nav__item{display:flex;align-items:center;justify-content:flex-end;gap:14px;padding:6px 12px;color:#9CA3AF;font-size:14px;text-decoration:none;transition:color 160ms ease;border-radius:8px;min-width:170px;}
      .section-nav__item:hover{color:#374151;}
      .section-nav__item.is-active{color:#111827;font-weight:700;}
      .section-nav__item.is-active .section-nav__num{color:#111827;}
      .section-nav__num{display:inline-block;min-width:24px;text-align:right;color:#9CA3AF;font-variant-numeric:tabular-nums;}
      @media (max-width:1023px){#section-nav{display:none !important;}}
    `;
    document.head.appendChild(style);
  }

  const nav = document.createElement('nav');
  nav.id = 'section-nav';
  nav.setAttribute('aria-label', '페이지 섹션 네비게이션');
  sections.forEach((s, i) => {
    const a = document.createElement('a');
    a.className = 'section-nav__item';
    a.href = `#${s.id}`;
    a.dataset.section = s.id;
    a.innerHTML = `<span class="section-nav__label" data-i18n="section_nav.${s.id}">${s.ko}</span><span class="section-nav__num">${String(i + 1).padStart(2, '0')}</span>`;
    nav.appendChild(a);
  });
  document.body.appendChild(nav);

  const items = Array.from(nav.querySelectorAll('.section-nav__item'));
  const sectionEls = sections.map((s) => document.getElementById(s.id));

  // Smooth scroll on click (account for fixed header height)
  const headerH = document.getElementById('gnb')?.getBoundingClientRect().height || 80;
  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(item.dataset.section);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Visibility + active state
  const update = () => {
    const y = window.scrollY;
    nav.classList.toggle('is-visible', y > 100);
    let activeIdx = 0;
    const offset = headerH + 80;
    sectionEls.forEach((el, i) => {
      if (el.getBoundingClientRect().top + window.scrollY <= y + offset) activeIdx = i;
    });
    items.forEach((it, i) => it.classList.toggle('is-active', i === activeIdx));
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  function toggleVisibility() {
    if (window.scrollY > 400) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
    }
  }

  toggleVisibility();
  window.addEventListener('scroll', toggleVisibility, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================================
// 7. i18n System (for sub-pages with data-i18n attributes)
// ============================================================
let translations = {};
let currentLang = 'ko';

function detectLanguage() {
  const saved = localStorage.getItem('hicarenet-lang');
  if (saved && ['en', 'ko'].includes(saved)) return saved;
  return 'ko';
}

// Resolve a base URL from the <script> tag's own src so that sub-paths
// like "data/i18n/ko.json" work from any directory depth (e.g. flat
// top-level pages AND /news/{slug}/ detail pages).
function resolveSiteBase() {
  try {
    const scripts = document.getElementsByTagName('script');
    for (let i = scripts.length - 1; i >= 0; i--) {
      const src = scripts[i].src || '';
      const m = src.match(/^(.*\/)js\/main\.js(\?.*)?$/);
      if (m) return m[1];
    }
  } catch (e) {}
  return '';
}
const SITE_BASE = resolveSiteBase();

async function loadTranslations(lang) {
  try {
    const res = await fetch(SITE_BASE + 'data/i18n/' + lang + '.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    translations = await res.json();
  } catch (e) {
    console.warn('Failed to load translations for', lang);
    translations = {};
  }
}

function getNestedValue(obj, path) {
  if (obj.hasOwnProperty(path)) return obj[path];
  return path.split('.').reduce(function (o, k) { return o && o[k]; }, obj);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var val = getNestedValue(translations, key);
    if (!val) return;
    if (el.children.length > 0) {
      var replaced = false;
      for (var i = 0; i < el.childNodes.length; i++) {
        var node = el.childNodes[i];
        if (node.nodeType === 3 && node.textContent.trim()) {
          node.textContent = val + ' ';
          replaced = true;
          break;
        }
      }
      if (!replaced) el.textContent = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    var val = getNestedValue(translations, key);
    if (val) el.placeholder = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    var val = getNestedValue(translations, key);
    if (val) el.innerHTML = val;
  });
  // data-i18n-content: set the `content` attribute (meta tags, og:/twitter:)
  document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-content');
    var val = getNestedValue(translations, key);
    if (val) el.setAttribute('content', val);
  });
  // Update language toggle button states (v6 GNB)
  ['en', 'ko'].forEach(function (lang) {
    var btn = document.getElementById('lang-' + lang);
    if (btn) {
      if (lang === currentLang) {
        btn.classList.add('font-semibold', 'text-primary-600');
        btn.classList.remove('text-neutral-500');
      } else {
        btn.classList.remove('font-semibold', 'text-primary-600');
        btn.classList.add('text-neutral-500');
      }
    }
    var mobileBtn = document.getElementById('lang-' + lang + '-mobile');
    if (mobileBtn) {
      if (lang === currentLang) {
        mobileBtn.classList.add('font-semibold', 'text-primary-600');
        mobileBtn.classList.remove('text-neutral-500');
      } else {
        mobileBtn.classList.remove('font-semibold', 'text-primary-600');
        mobileBtn.classList.add('text-neutral-500');
      }
    }
  });
  document.documentElement.lang = currentLang;

  // Expose translations globally + notify listeners (e.g., Leaflet map popups,
  // custom meta-tag updaters) that content has been re-translated.
  window.__i18nTranslations = translations;
  window.dispatchEvent(new CustomEvent('hicarenet:langchange', { detail: { lang: currentLang } }));
}

// Global setLanguage — works for both home page and sub-pages
window.setLanguage = async function (lang) {
  currentLang = lang;
  localStorage.setItem('hicarenet-lang', lang);

  // Home page: toggle body class for lang-*-only sections
  if (document.querySelector('.section-image')) {
    document.body.classList.toggle('lang-ko', lang === 'ko');
    document.body.classList.toggle('lang-en', lang === 'en');
    // Update home nav lang toggle buttons
    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      var btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
    // Re-trigger counter animation for newly visible stats
    var statsSection = document.querySelector('[data-role="stats"]');
    if (statsSection) {
      document.querySelectorAll('[data-count]').forEach(function (el) {
        if (el.offsetParent === null) return;
        var target = parseInt(el.getAttribute('data-count'), 10);
        el.textContent = target >= 1000 ? Math.floor(target / 1000) + 'K' : String(target);
      });
    }
    document.documentElement.lang = lang;
  }

  // Always reflect the active language on the <html> tag so CSS
  // selectors like :lang(en) and KO/EN-conditional body blocks work
  // on every page, not just the home.
  document.documentElement.lang = lang;

  // Sub-pages: apply i18n translations
  if (document.querySelector('[data-i18n]')) {
    await loadTranslations(lang);
    applyTranslations();
  }

  // Reveal page after translations applied (Issue #8 anti-flicker)
  document.documentElement.classList.remove('i18n-pending');
};

async function initI18n() {
  currentLang = detectLanguage();

  // Home page: set initial body class
  if (document.querySelector('.section-image')) {
    document.body.classList.toggle('lang-ko', currentLang === 'ko');
    document.body.classList.toggle('lang-en', currentLang === 'en');
    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      var btnLang = btn.getAttribute('data-lang');
      if (btnLang === currentLang) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
    document.documentElement.lang = currentLang;
  }

  // Sub-pages: load and apply translations
  if (document.querySelector('[data-i18n]')) {
    await loadTranslations(currentLang);
    applyTranslations();
  }

  // Reveal page after initial translations applied (Issue #8 anti-flicker)
  document.documentElement.classList.remove('i18n-pending');
}

// ============================================================
// GNB Mega Menu (Hanwha Ocean-style hover panel)
//   Hovering the header reveals one full-width dropdown that
//   shows every top-level item's children as columns aligned
//   to their parent. Mouseleave closes with a short grace.
// ============================================================
function initMegaMenu() {
  const gnb = document.getElementById('gnb');
  if (!gnb) return;
  if (gnb.dataset.megaInited === '1') return; // idempotent
  gnb.dataset.megaInited = '1';

  const menubar = gnb.querySelector('ul[role="menubar"]');
  if (!menubar) return;

  // Hanwha Ocean-style mega menu:
  //   - Header hover expands a continuous white panel downward
  //   - Each top-level link's padding widens (items spread apart)
  //   - Font size stays the same (matches hanwhaocean behavior)
  //   - Submenus sit on that white panel, left-aligned under each parent
  // Styles are injected from JS so it works on pages that load only
  // home.css (e.g., index.html).
  if (!document.getElementById('gnb-mega-style')) {
    const style = document.createElement('style');
    style.id = 'gnb-mega-style';
    style.textContent = `
      @media (min-width:1280px){#gnb > nav{max-width:85rem !important;padding-left:2rem !important;padding-right:2rem !important;}}
      /* Font: rolled back to original size, kept bold per prior round. */
      #gnb .gnb-link{position:relative;font-size:14px !important;font-weight:700 !important;transition:padding 260ms ease,color 140ms ease,background-color 140ms ease;}
      #gnb ul[role="menubar"]{transition:gap 260ms ease;}
      #gnb.gnb-mega-open ul[role="menubar"]{gap:3rem;}
      #gnb.gnb-mega-open .gnb-link{padding-left:18px;padding-right:18px;}
      #gnb ul[role="menubar"] > li{position:relative;}
      /* Underline anchored to header's bottom edge (uses runtime gap). */
      #gnb ul[role="menubar"] > li > a.gnb-link::after{content:'';position:absolute;left:18px;right:18px;bottom:calc(-1 * var(--gnb-sub-gap,18px));height:2px;background:#111827;transform:scaleX(0);transform-origin:center;transition:transform 200ms ease;pointer-events:none;}
      #gnb.gnb-mega-open ul[role="menubar"] > li:hover > a.gnb-link::after,
      #gnb.gnb-mega-open ul[role="menubar"] > li:focus-within > a.gnb-link::after{transform:scaleX(1);}
      /* Frosted-glass panel — 93% white + heavy blur: bg tints through but text is invisible. */
      #gnb::after{content:'';position:absolute;top:100%;left:0;right:0;height:0;background:rgba(255,255,255,.93);backdrop-filter:blur(40px) saturate(180%);-webkit-backdrop-filter:blur(40px) saturate(180%);box-shadow:none;transition:height 240ms ease,box-shadow 240ms ease;pointer-events:none;z-index:1;}
      #gnb.gnb-mega-open::after{height:240px;box-shadow:0 10px 24px rgba(0,0,0,.04);pointer-events:auto;}
      /* Dim overlay sits ONLY below the panel area (top set via --gnb-panel-bottom). */
      #gnb-dim{position:fixed;left:0;right:0;bottom:0;top:0;background:rgba(17,24,39,.5);opacity:0;pointer-events:none;transition:opacity 220ms ease,top 240ms ease;z-index:30;}
      #gnb-dim.is-open{opacity:1;top:var(--gnb-panel-bottom,320px);}
      .gnb-sub{position:absolute;top:calc(100% + var(--gnb-sub-gap,18px));left:0;min-width:100%;padding:22px 0 24px;margin:0;list-style:none;opacity:0;pointer-events:none;transform:translateY(-4px);transition:opacity 200ms ease,transform 200ms ease;z-index:5;}
      #gnb.gnb-mega-open .gnb-sub{opacity:1;pointer-events:auto;transform:translateY(0);}
      .gnb-sub li{list-style:none;}
      .gnb-sub__link{display:block;padding:7px 18px;font-family:'Pretendard Variable','Pretendard','Inter','Apple SD Gothic Neo','Noto Sans KR',sans-serif;font-size:13px;font-weight:700;letter-spacing:-0.01em;color:#1F2937;white-space:nowrap;text-decoration:none;transition:color 140ms ease;}
      .gnb-sub__link:hover,.gnb-sub__link:focus-visible{color:#1578B8;outline:none;}
      @media (max-width:1023px){.gnb-sub,#gnb::after,#gnb-dim{display:none !important;}}
      /* When mega is open over a dark hero, frosted-glass header bar. */
      #gnb.gnb-at-top.gnb-mega-open{background-color:rgba(255,255,255,.93) !important;backdrop-filter:blur(40px) saturate(180%) !important;-webkit-backdrop-filter:blur(40px) saturate(180%) !important;box-shadow:none !important;}
      #gnb.gnb-at-top.gnb-mega-open .gnb-link{color:#111827 !important;}
      #gnb.gnb-at-top.gnb-mega-open .gnb-link:hover{color:#1578B8 !important;background-color:transparent !important;}
      #gnb.gnb-at-top.gnb-mega-open img[alt*="로고"]{filter:none !important;}
      #gnb.gnb-at-top.gnb-mega-open #lang-ko,#gnb.gnb-at-top.gnb-mega-open #lang-en{color:#6B7280 !important;}
      #gnb.gnb-at-top.gnb-mega-open .bg-primary-600{background:#1578B8 !important;}
      #gnb.gnb-at-top.gnb-mega-open .bg-primary-600 span{color:#fff !important;}
    `;
    document.head.appendChild(style);
  }

  // Submenu map keyed by top-level link href (relative).
  // `l` = KO label, `le` = EN label. We pick based on current <html lang>
  // so we don't flash Korean text when the user is already on EN mode.
  // data-i18n (`k`) still drives post-load i18n updates via applyTranslations.
  const megaData = {
    'about.html': [
      { k: 'gnb.sub.about.overview', l: '회사 개요', le: 'Overview', h: 'about.html#overview' },
      { k: 'gnb.sub.about.mission', l: '미션', le: 'Mission', h: 'about.html#mission' },
      { k: 'gnb.sub.about.history', l: '연혁', le: 'History', h: 'about.html#history' },
      { k: 'gnb.sub.about.organization', l: '조직 구성', le: 'Organization', h: 'about.html#organization' }
    ],
    'business.html': [
      { k: 'gnb.sub.business.care_portal', l: 'Care Portal', le: 'Hicare Care Portal', h: 'business.html#care-portal' },
      { k: 'gnb.sub.business.expansion', l: '서비스 확장 로드맵', le: 'Service Roadmap', h: 'business.html#expansion' },
      { k: 'gnb.sub.business.devices', l: '의료기기/게이트웨이', le: 'Devices / Gateway', h: 'business.html#devices' },
      { k: 'gnb.sub.business.market', l: '시장 및 경쟁 환경', le: 'Market & Competition', h: 'business.html#market' }
    ],
    'technology.html': [
      { k: 'gnb.sub.technology.architecture', l: '플랫폼 아키텍처', le: 'Platform Architecture', h: 'technology.html#architecture' },
      { k: 'gnb.sub.technology.ai', l: 'AI 기술', le: 'AI Technology', h: 'technology.html#ai' },
      { k: 'gnb.sub.technology.security', l: '보안 및 인증', le: 'Security & Compliance', h: 'technology.html#security' },
      { k: 'gnb.sub.technology.heritage', l: '의료 도메인 축적 기술', le: 'Healthcare Domain Heritage', h: 'technology.html#heritage' }
    ],
    'global.html': [
      { k: 'gnb.sub.global.us_service', l: '미국 Care Portal 실적', le: 'US Hicare Care Portal Results', h: 'global.html#us-service' },
      { k: 'gnb.sub.global.device_export', l: '의료기기 수출 실적', le: 'Medical Device Exports', h: 'global.html#device-export' },
      { k: 'gnb.sub.global.partnerships', l: '파트너십', le: 'Partnerships', h: 'global.html#partnerships' }
    ],
    'careers.html': [
      { k: 'gnb.sub.careers.why_hicarenet', l: '왜 하이케어인가', le: 'Why Hicare', h: 'careers.html#why-hicarenet' },
      { k: 'gnb.sub.careers.teams', l: '팀 소개', le: 'Our Teams', h: 'careers.html#teams' },
      { k: 'gnb.sub.careers.challenges', l: '기술적 도전', le: 'Technical Challenges', h: 'careers.html#challenges' },
      { k: 'gnb.sub.careers.positions', l: '채용 공고', le: 'Open Positions', h: 'careers.html#positions' }
    ],
    'ir.html': [
      { k: 'gnb.sub.ir.ir', l: 'IR', le: 'IR', h: 'ir.html#ir' },
      { k: 'gnb.sub.ir.newsroom', l: '뉴스룸', le: 'Newsroom', h: 'ir.html#newsroom' }
    ]
  };
  const initialLang = document.documentElement.lang || 'ko';

  const topItems = Array.from(menubar.querySelectorAll(':scope > li'));
  if (!topItems.length) return;

  // megaData keys are the bare top-level file names (e.g. "about.html").
  // Top-level links may be served from a deeper directory (e.g. news/{slug}/
  // uses href="../../about.html"), so match by the final path segment and
  // preserve any prefix so submenu hrefs resolve relative to the current page.
  const splitHref = (href) => {
    const q = href.indexOf('?');
    const h = href.indexOf('#');
    const stop = [q, h].filter((n) => n !== -1);
    const base = stop.length ? href.slice(0, Math.min(...stop)) : href;
    const lastSlash = base.lastIndexOf('/');
    const prefix = lastSlash === -1 ? '' : base.slice(0, lastSlash + 1);
    const file = lastSlash === -1 ? base : base.slice(lastSlash + 1);
    return { prefix, file };
  };

  topItems.forEach((li) => {
    const a = li.querySelector(':scope > a');
    if (!a) return;
    const { prefix, file } = splitHref(a.getAttribute('href') || '');
    const subs = megaData[file] || [];
    if (!subs.length) return;
    const ul = document.createElement('ul');
    ul.className = 'gnb-sub';
    ul.setAttribute('role', 'menu');
    subs.forEach((sub) => {
      const subLi = document.createElement('li');
      const subA = document.createElement('a');
      // sub.h is already the top-level relative form ("about.html#overview");
      // re-prefix so it works from deeper pages too.
      subA.href = prefix + sub.h;
      subA.textContent = initialLang === 'en' && sub.le ? sub.le : sub.l;
      subA.className = 'gnb-sub__link';
      subA.setAttribute('role', 'menuitem');
      if (sub.k) subA.setAttribute('data-i18n', sub.k);
      subLi.appendChild(subA);
      ul.appendChild(subLi);
    });
    li.appendChild(ul);
  });

  // Dim overlay (hanwhaocean-style) — covers page behind the panel.
  if (!document.getElementById('gnb-dim')) {
    const dim = document.createElement('div');
    dim.id = 'gnb-dim';
    dim.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dim);
  }
  const dim = document.getElementById('gnb-dim');

  const topLinks = topItems.map((li) => li.querySelector(':scope > a')).filter(Boolean);
  const subLinks = Array.from(gnb.querySelectorAll('.gnb-sub__link'));

  // Keep the submenu top aligned with the header bottom edge regardless
  // of theme height changes (h-16 on small, h-20 on large). Also export
  // header-bottom + panel-height so the dim overlay can sit below it.
  const PANEL_H = 240;
  const syncSubGap = () => {
    const firstLi = topItems.find((li) => li.querySelector(':scope > ul.gnb-sub'));
    if (!firstLi) return;
    const liRect = firstLi.getBoundingClientRect();
    const gnbRect = gnb.getBoundingClientRect();
    const gap = Math.max(0, Math.round(gnbRect.bottom - liRect.bottom));
    gnb.style.setProperty('--gnb-sub-gap', `${gap}px`);
    document.documentElement.style.setProperty('--gnb-panel-bottom', `${Math.round(gnbRect.bottom + PANEL_H)}px`);
  };
  syncSubGap();
  window.addEventListener('resize', syncSubGap);

  // Desktop-only hover (>=1024px); skip on coarse pointers.
  const mq = window.matchMedia('(min-width: 1024px)');
  const isCoarse = window.matchMedia('(hover: none)').matches;
  if (isCoarse) return;

  let closeTimer = null;
  const applyOpen = () => {
    syncSubGap();
    gnb.classList.add('gnb-mega-open');
    dim.classList.add('is-open');
  };
  const applyClose = () => {
    gnb.classList.remove('gnb-mega-open');
    dim.classList.remove('is-open');
  };
  const close = () => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(applyClose, 180);
  };
  const closeImmediate = () => {
    clearTimeout(closeTimer);
    applyClose();
  };

  // Open requires an actual mousemove inside the menubar — mouseenter
  // alone fires from layout shifts (e.g., the page settling, scroll
  // changing element-under-cursor), and we don't want a passive scroll
  // to pop the panel. Listener is attached on enter, removed on leave.
  let mmListener = null;
  const onMenubarEnter = () => {
    if (!mq.matches) return;
    clearTimeout(closeTimer);
    if (mmListener) return;
    mmListener = () => {
      menubar.removeEventListener('mousemove', mmListener);
      mmListener = null;
      applyOpen();
    };
    menubar.addEventListener('mousemove', mmListener);
  };
  const onMenubarLeave = () => {
    if (mmListener) {
      menubar.removeEventListener('mousemove', mmListener);
      mmListener = null;
    }
  };
  menubar.addEventListener('mouseenter', onMenubarEnter);
  menubar.addEventListener('mouseleave', onMenubarLeave);
  gnb.addEventListener('mouseleave', close);

  // Keyboard: focus on a top-level link opens; Escape closes.
  topLinks.forEach((a) => a.addEventListener('focus', applyOpen));
  subLinks.forEach((a) => {
    a.addEventListener('focus', applyOpen);
    a.addEventListener('blur', close);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeImmediate();
  });
}

// ============================================================
// Initialize all modules on DOM ready
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Home page modules (gated on .section-image)
  initHomeEffects();

  // Sub-page modules (gated on #gnb)
  initGNB();
  initMobileMenu();
  initMegaMenu();
  initCounters();
  initScrollReveal();
  initBackToTop();
  initSectionNav();

  // i18n (both home and sub-pages)
  initI18n();
  initLatinTracking();
});
