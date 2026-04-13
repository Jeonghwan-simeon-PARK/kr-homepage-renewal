/**
 * HicareNet NEW — Unified Main JavaScript
 * Merges ov3 home page logic + v6 sub-page logic
 */

// ============================================================
// 1. Home Page: Nav dark/light mode + scroll indicator
//    Only runs if .section-image exists (home page)
// ============================================================
function initHomeNav() {
  var nav = document.getElementById('nav');
  var scrollIndicator = document.getElementById('scroll-indicator');
  if (!nav || !document.querySelector('.section-image')) return;

  var navMode = 'dark';

  // Scroll animation for home sections
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

  function updateNavMode() {
    var navBottom = 72;
    var sections = document.querySelectorAll('.section-image, .section-text');
    var mode = 'light';

    for (var i = sections.length - 1; i >= 0; i--) {
      var rect = sections[i].getBoundingClientRect();
      if (rect.top <= navBottom) {
        mode = sections[i].classList.contains('section-image') ? 'dark' : 'light';
        break;
      }
    }

    if (mode !== navMode) {
      navMode = mode;
      nav.classList.remove('nav--dark', 'nav--light');
      nav.classList.add('nav--' + mode);
    }
  }

  updateNavMode();
  window.addEventListener('scroll', function () {
    updateNavMode();
    nav.classList.toggle('is-scrolled', window.scrollY > 50);
    if (scrollIndicator) {
      scrollIndicator.classList.toggle('is-hidden', window.scrollY > 200);
    }
  }, { passive: true });

  // Home page counter animation (data-count based)
  var countersAnimated = false;
  var statsSection = document.querySelector('[data-role="stats"]');
  if (statsSection) {
    var statsObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !countersAnimated) {
        countersAnimated = true;
        // Only animate visible counters (respect lang toggle)
        document.querySelectorAll('[data-count]').forEach(function (el) {
          if (el.offsetParent === null) return; // skip hidden elements
          var target = parseInt(el.getAttribute('data-count'), 10);
          var duration = 2000, startTime = null;
          function step(ts) {
            if (!startTime) startTime = ts;
            var p = Math.min((ts - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(eased * target).toLocaleString();
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      }
    }, { threshold: 0.4 });
    statsObserver.observe(statsSection);
  }

  // Hamburger menu for home nav
  var hamburger = document.getElementById('nav-hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var open = hamburger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open', open);
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
      });
    });
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
          el.textContent = target.toLocaleString();
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

    el.textContent = current.toLocaleString();

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
        el.textContent = target.toLocaleString();
      });
    }
    document.documentElement.lang = lang;
  }

  // Sub-pages: apply i18n translations
  if (document.querySelector('[data-i18n]')) {
    await loadTranslations(lang);
    applyTranslations();
  }
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
}

// ============================================================
// Initialize all modules on DOM ready
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Home page modules (gated on .section-image)
  initHomeNav();

  // Sub-page modules (gated on #gnb)
  initGNB();
  initMobileMenu();
  initCounters();
  initScrollReveal();
  initBackToTop();

  // i18n (both home and sub-pages)
  initI18n();
});
