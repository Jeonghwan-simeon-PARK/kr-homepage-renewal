/**
 * HicareNet v2 — Main JavaScript
 * Vanilla ES6, no frameworks
 */

(function () {
  'use strict';

  // ── Mobile Navigation ──
  function initNav() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      const icon = toggle.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = isOpen ? 'close' : 'menu';
    });

    // Close on link click
    menu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        const icon = toggle.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = 'menu';
      });
    });
  }

  // ── Scroll Animations (IntersectionObserver) ──
  function initAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = document.querySelectorAll('[data-animate]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));
  }

  // ── i18n ──
  let translations = {};
  let currentLang = 'en';

  function detectLanguage() {
    const saved = localStorage.getItem('hicarenet-lang');
    if (saved) return saved;
    const nav = navigator.language || navigator.userLanguage || 'en';
    return nav.startsWith('ko') ? 'ko' : 'en';
  }

  async function loadTranslations(lang) {
    try {
      const res = await fetch(`data/i18n/${lang}.json`);
      if (!res.ok) return {};
      return await res.json();
    } catch {
      return {};
    }
  }

  function applyTranslations() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getNestedValue(translations, key);
      if (val) el.textContent = val;
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = getNestedValue(translations, key);
      if (val) el.placeholder = val;
    });
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  async function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('hicarenet-lang', lang);
    translations = await loadTranslations(lang);
    if (Object.keys(translations).length > 0) {
      applyTranslations();
    }
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';

    // Update toggle button text
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) toggleBtn.textContent = lang === 'ko' ? 'KR/EN' : 'EN/KR';
  }

  function initI18n() {
    const lang = detectLanguage();

    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const next = currentLang === 'en' ? 'ko' : 'en';
        setLanguage(next);
      });
    }

    setLanguage(lang);
  }

  // ── Filter Pills (News page) ──
  function initFilters() {
    const pills = document.querySelectorAll('.filter-pill');
    if (!pills.length) return;

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => {
          p.classList.remove('filter-pill--active');
          p.classList.add('filter-pill--inactive');
        });
        pill.classList.remove('filter-pill--inactive');
        pill.classList.add('filter-pill--active');
      });
    });
  }

  // ── Gallery Navigation (News page) ──
  function initGallery() {
    const btns = document.querySelectorAll('.gallery-nav-btn');
    const container = btns.length ? btns[0].closest('section')?.querySelector('.flex.gap-8') : null;
    if (!container || btns.length < 2) return;

    btns[0].addEventListener('click', () => {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    });
    btns[1].addEventListener('click', () => {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    });
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initAnimations();
    initI18n();
    initFilters();
    initGallery();
  });
})();
