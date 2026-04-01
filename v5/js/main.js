(function () {
  'use strict';

  let translations = {};
  let currentLang = 'en';

  function detectLanguage() {
    const saved = localStorage.getItem('hicarenet-lang');
    if (saved && ['en', 'ko'].includes(saved)) return saved;
    return navigator.language?.startsWith('ko') ? 'ko' : 'en';
  }

  async function loadTranslations(lang) {
    try {
      const res = await fetch('data/i18n/' + lang + '.json');
      translations = await res.json();
    } catch (e) {
      console.warn('Failed to load translations for', lang);
      translations = {};
    }
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce(function (o, k) { return o && o[k]; }, obj);
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = getNestedValue(translations, key);
      if (val) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = getNestedValue(translations, key);
      if (val) el.placeholder = val;
    });
    // Update lang toggle button styles
    ['en', 'ko'].forEach(function (lang) {
      var btn = document.getElementById('lang-' + lang);
      if (btn) {
        btn.style.color = lang === currentLang ? '#1676F3' : '';
        btn.style.fontWeight = lang === currentLang ? '700' : '';
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

  // Mobile nav toggle
  function initNav() {
    var menuBtn = document.getElementById('menuBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }

  // Back to top
  function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initI18n();
    initBackToTop();
  });
})();
