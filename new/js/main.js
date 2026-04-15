/**
 * HicareNet NEW — Unified Main JavaScript
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

async function loadTranslations(lang) {
  try {
    const res = await fetch('data/i18n/' + lang + '.json');
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
      #gnb .gnb-link{transition:padding 260ms ease,color 140ms ease,background-color 140ms ease;}
      #gnb ul[role="menubar"]{transition:gap 260ms ease;}
      #gnb.gnb-mega-open ul[role="menubar"]{gap:3rem;}
      #gnb.gnb-mega-open .gnb-link{padding-left:18px;padding-right:18px;}
      #gnb ul[role="menubar"] > li{position:relative;}
      #gnb::after{content:'';position:absolute;top:100%;left:0;right:0;height:0;background:#fff;box-shadow:none;transition:height 240ms ease,box-shadow 240ms ease;pointer-events:none;z-index:1;}
      #gnb.gnb-mega-open::after{height:220px;box-shadow:0 10px 24px rgba(0,0,0,.06);pointer-events:auto;}
      .gnb-sub{position:absolute;top:calc(100% + var(--gnb-sub-gap,18px));left:0;min-width:100%;padding:22px 0 24px;margin:0;list-style:none;opacity:0;pointer-events:none;transform:translateY(-4px);transition:opacity 200ms ease,transform 200ms ease;z-index:5;}
      #gnb.gnb-mega-open .gnb-sub{opacity:1;pointer-events:auto;transform:translateY(0);}
      .gnb-sub li{list-style:none;}
      .gnb-sub__link{display:block;padding:7px 18px;font-family:'Pretendard Variable','Pretendard','Inter','Apple SD Gothic Neo','Noto Sans KR',sans-serif;font-size:13px;font-weight:400;color:#4B5563;white-space:nowrap;text-decoration:none;transition:color 140ms ease;}
      .gnb-sub__link:hover,.gnb-sub__link:focus-visible{color:#1578B8;outline:none;}
      @media (max-width:1023px){.gnb-sub,#gnb::after{display:none !important;}}
      #gnb.gnb-at-top.gnb-mega-open{background-color:rgba(255,255,255,.98) !important;backdrop-filter:blur(8px);box-shadow:0 1px 0 rgba(0,0,0,.04);}
      #gnb.gnb-at-top.gnb-mega-open .gnb-link{color:#374151 !important;}
      #gnb.gnb-at-top.gnb-mega-open .gnb-link:hover{color:#1578B8 !important;background-color:transparent !important;}
      #gnb.gnb-at-top.gnb-mega-open img[alt*="로고"]{filter:none !important;}
      #gnb.gnb-at-top.gnb-mega-open #lang-ko,#gnb.gnb-at-top.gnb-mega-open #lang-en{color:#6B7280 !important;}
      #gnb.gnb-at-top.gnb-mega-open .bg-primary-600{background:#1578B8 !important;}
      #gnb.gnb-at-top.gnb-mega-open .bg-primary-600 span{color:#fff !important;}
    `;
    document.head.appendChild(style);
  }

  // Submenu map keyed by top-level link href (relative).
  // Source of truth: data/navigation.json children[]. Kept in sync
  // with those ids + labels; href uses page-local anchors.
  const megaData = {
    'about.html': [
      { l: '회사 개요', h: 'about.html#overview' },
      { l: '미션', h: 'about.html#mission' },
      { l: '연혁', h: 'about.html#history' },
      { l: '조직 구성', h: 'about.html#organization' }
    ],
    'business.html': [
      { l: 'Care Portal', h: 'business.html#care-portal' },
      { l: '서비스 확장 로드맵', h: 'business.html#expansion' },
      { l: '의료기기/게이트웨이', h: 'business.html#devices' },
      { l: '시장 및 경쟁 환경', h: 'business.html#market' }
    ],
    'technology.html': [
      { l: '플랫폼 아키텍처', h: 'technology.html#architecture' },
      { l: 'AI 기술', h: 'technology.html#ai' },
      { l: '보안 및 인증', h: 'technology.html#security' },
      { l: '의료 도메인 축적 기술', h: 'technology.html#heritage' }
    ],
    'global.html': [
      { l: '미국 Care Portal 실적', h: 'global.html#us-service' },
      { l: '의료기기 수출 실적', h: 'global.html#device-export' },
      { l: '파트너십', h: 'global.html#partnerships' }
    ],
    'careers.html': [
      { l: '왜 하이케어넷인가', h: 'careers.html#why-hicarenet' },
      { l: '팀 소개', h: 'careers.html#teams' },
      { l: '기술적 도전', h: 'careers.html#challenges' },
      { l: '채용 공고', h: 'careers.html#positions' }
    ],
    'ir.html': [
      { l: 'IR', h: 'ir.html#ir' },
      { l: '뉴스룸', h: 'ir.html#newsroom' }
    ]
  };

  const topItems = Array.from(menubar.querySelectorAll(':scope > li'));
  if (!topItems.length) return;

  topItems.forEach((li) => {
    const a = li.querySelector(':scope > a');
    if (!a) return;
    const subs = megaData[a.getAttribute('href')] || [];
    if (!subs.length) return;
    const ul = document.createElement('ul');
    ul.className = 'gnb-sub';
    ul.setAttribute('role', 'menu');
    subs.forEach((sub) => {
      const subLi = document.createElement('li');
      const subA = document.createElement('a');
      subA.href = sub.h;
      subA.textContent = sub.l;
      subA.className = 'gnb-sub__link';
      subA.setAttribute('role', 'menuitem');
      subLi.appendChild(subA);
      ul.appendChild(subLi);
    });
    li.appendChild(ul);
  });

  const topLinks = topItems.map((li) => li.querySelector(':scope > a')).filter(Boolean);
  const subLinks = Array.from(gnb.querySelectorAll('.gnb-sub__link'));

  // Keep the submenu top aligned with the header bottom edge regardless
  // of theme height changes (h-16 on small, h-20 on large).
  const syncSubGap = () => {
    const firstLi = topItems.find((li) => li.querySelector(':scope > ul.gnb-sub'));
    if (!firstLi) return;
    const liRect = firstLi.getBoundingClientRect();
    const gnbRect = gnb.getBoundingClientRect();
    const gap = Math.max(0, Math.round(gnbRect.bottom - liRect.bottom));
    gnb.style.setProperty('--gnb-sub-gap', `${gap}px`);
  };
  syncSubGap();
  window.addEventListener('resize', syncSubGap);

  // Desktop-only hover (>=1024px); skip on coarse pointers.
  const mq = window.matchMedia('(min-width: 1024px)');
  const isCoarse = window.matchMedia('(hover: none)').matches;
  if (isCoarse) return;

  let closeTimer = null;
  const open = () => {
    if (!mq.matches) return;
    clearTimeout(closeTimer);
    gnb.classList.add('gnb-mega-open');
  };
  const close = () => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      gnb.classList.remove('gnb-mega-open');
    }, 150);
  };
  const closeImmediate = () => {
    clearTimeout(closeTimer);
    gnb.classList.remove('gnb-mega-open');
  };

  gnb.addEventListener('mouseenter', open);
  gnb.addEventListener('mouseleave', close);

  // Keyboard: focus on a top-level link opens; Escape closes.
  topLinks.forEach((a) => a.addEventListener('focus', open));
  subLinks.forEach((a) => {
    a.addEventListener('focus', open);
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

  // i18n (both home and sub-pages)
  initI18n();
});
