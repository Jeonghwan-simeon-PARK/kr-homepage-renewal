(function () {
  'use strict';

  let translations = {};
  let currentLang = 'en';

  function detectLanguage() {
    const saved = localStorage.getItem('hicarenet-lang');
    if (saved && ['en', 'ko'].includes(saved)) return saved;
    return (navigator.language || 'en').startsWith('ko') ? 'ko' : 'en';
  }

  async function loadTranslations(lang) {
    try {
      const res = await fetch('data/i18n/' + lang + '.json');
      if (!res.ok) throw new Error('Failed to load');
      translations = await res.json();
    } catch (e) {
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
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      var val = getNestedValue(translations, key);
      if (val) el.title = val;
    });
    // HTML content (supports <br> and inline markup)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var val = getNestedValue(translations, key);
      if (val) el.innerHTML = val;
    });
    // Update language toggle styles
    ['en', 'ko'].forEach(function (lang) {
      var btn = document.getElementById('lang-' + lang);
      if (btn) {
        if (lang === currentLang) {
          btn.style.color = '#1676F3';
          btn.style.fontWeight = '700';
        } else {
          btn.style.color = '';
          btn.style.fontWeight = '';
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

  function initNav() {
    var menuBtn = document.getElementById('menuBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }

  async function initI18n() {
    currentLang = detectLanguage();
    await loadTranslations(currentLang);
    applyTranslations();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initI18n();
  });
})();
