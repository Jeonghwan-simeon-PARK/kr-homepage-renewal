/**
 * HicareNet v3 — Main JavaScript
 * Vanilla ES6, no frameworks
 */

(function () {
  'use strict';

  // ── Mobile Navigation ──
  function initNav() {
    const hamburger = document.querySelector('.topbar__hamburger');
    const menu = document.getElementById('mobile-menu');
    if (!hamburger || !menu) return;

    hamburger.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      const icon = hamburger.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = isOpen ? 'close' : 'menu';
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        const icon = hamburger.querySelector('.material-symbols-outlined');
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
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getNestedValue(translations, key);
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = getNestedValue(translations, key);
      if (val) el.placeholder = val;
    });

    // HTML content (supports <br> and inline markup)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = getNestedValue(translations, key);
      if (val) el.innerHTML = val;
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

  // ── Back to Top ──
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Form Handling ──
  function initForms() {
    const forms = document.querySelectorAll('.contact-form, .newsletter-form');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = form.querySelector('input[type="email"]');
        if (!emailInput || !emailInput.value.trim()) return;

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
          emailInput.style.borderColor = 'var(--error, #dc2626)';
          return;
        }

        const subject = encodeURIComponent('HicareNet Contact Inquiry');
        const body = encodeURIComponent(
          `I would like to learn more about HicareNet services.\n\nEmail: ${emailInput.value}`
        );
        window.location.href = `mailto:info@hicare.net?subject=${subject}&body=${body}`;

        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
          const originalText = btn.textContent;
          btn.textContent = '\u2713 Sent!';
          btn.disabled = true;
          emailInput.value = '';
          setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
          }, 3000);
        }
      });

      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput) {
        emailInput.addEventListener('input', () => {
          emailInput.style.borderColor = '';
        });
      }
    });
  }

  // ── FAQ Accordion ──
  function initFAQ() {
    const details = document.querySelectorAll('.faq details');
    details.forEach(detail => {
      detail.addEventListener('toggle', () => {
        if (detail.open) {
          details.forEach(d => {
            if (d !== detail) d.open = false;
          });
        }
      });
    });
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initAnimations();
    initI18n();
    initForms();
    initFAQ();
    initBackToTop();
  });
})();
