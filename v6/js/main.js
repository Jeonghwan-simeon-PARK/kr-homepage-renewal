/**
 * HicareNet v6 - Main JavaScript
 * Vanilla ES6, no frameworks
 */

// ============================================================
// 1. GNB: Scroll-based sticky header with background change
// ============================================================
function initGNB() {
  const gnb = document.getElementById('gnb');
  if (!gnb) return;

  let lastScroll = 0;
  const threshold = 10;

  // Detect if page has a dark hero section
  const hasDarkHero = !!document.querySelector('section[aria-label="히어로"], section[aria-label="페이지 헤더"]');

  // Inject CSS for dark hero nav states (uses !important to override Tailwind utilities)
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
      // Scrolled: white background, dark text (Tailwind classes restored)
      gnb.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
      gnb.classList.remove('bg-transparent', 'gnb-at-top');
    } else {
      // Top: transparent background, white text on dark hero
      gnb.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
      gnb.classList.add('bg-transparent');
      if (hasDarkHero) gnb.classList.add('gnb-at-top');
    }

    lastScroll = scrollY;
  }

  // Set initial state
  updateGNB();
  window.addEventListener('scroll', updateGNB, { passive: true });
}

// ============================================================
// 2. Mobile Menu Toggle
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

  // Close menu on window resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      if (icon) icon.textContent = 'menu';
    }
  });
}

// ============================================================
// 3. Counter Animation (IntersectionObserver)
// ============================================================
function initCounters() {
  const counters = document.querySelectorAll('[data-animate="counter"]');
  if (counters.length === 0) return;

  // Respect reduced motion preference
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
// 4. Scroll Reveal Animation (fade-up, fade-in, etc.)
// ============================================================
function initScrollReveal() {
  const elements = document.querySelectorAll('[data-animate="fade-up"], [data-animate="fade-in"], [data-animate="stagger"]');
  if (elements.length === 0) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Show all elements immediately
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

  // Set initial hidden state
  elements.forEach((el) => {
    const type = el.getAttribute('data-animate');
    if (type === 'stagger') {
      // Stagger: children will be animated individually
      return;
    }
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
          // Stagger children with sequential delay
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
// 5. Back to Top Button
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
// 6. i18n (Internationalization) System
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
  // Flat key lookup first (handles "kr.main.hero.headline" as literal key)
  if (obj.hasOwnProperty(path)) return obj[path];
  // Fallback to nested object traversal
  return path.split('.').reduce(function (o, k) { return o && o[k]; }, obj);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var val = getNestedValue(translations, key);
    if (!val) return;
    // If element has child elements, only replace text nodes to preserve HTML structure
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
  // Update language toggle button states
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
    // Mobile language toggle buttons
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

window.setLanguage = async function (lang) {
  currentLang = lang;
  localStorage.setItem('hicarenet-lang', lang);
  await loadTranslations(lang);
  applyTranslations();
};

async function initI18n() {
  currentLang = detectLanguage();
  await loadTranslations(currentLang);
  applyTranslations();
}

// ============================================================
// Initialize all modules on DOM ready
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initGNB();
  initMobileMenu();
  initCounters();
  initScrollReveal();
  initBackToTop();
  initI18n();
});
