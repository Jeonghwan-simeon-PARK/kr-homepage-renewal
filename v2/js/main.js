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

  // ── Form Handling ──
  function initForms() {
    const forms = document.querySelectorAll('.newsletter-form');
    forms.forEach(form => {
      form.removeAttribute('onsubmit');
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = form.querySelector('input[type="email"]');
        if (!emailInput || !emailInput.value.trim()) return;

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
          emailInput.style.borderColor = 'var(--error, #dc2626)';
          return;
        }

        const isContact = form.closest('[aria-label]')?.getAttribute('aria-label')?.includes('contact') ||
                          form.querySelector('button')?.textContent?.toLowerCase().includes('connect');

        const subject = encodeURIComponent(isContact ? 'HicareNet Contact Inquiry' : 'HicareNet Newsletter Subscription');
        const body = encodeURIComponent(
          isContact
            ? `I would like to learn more about HicareNet services.\n\nEmail: ${emailInput.value}`
            : `I would like to subscribe to the HicareNet newsletter.\n\nEmail: ${emailInput.value}`
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

      // Clear error on input
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput) {
        emailInput.addEventListener('input', () => {
          emailInput.style.borderColor = '';
        });
      }
    });
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initAnimations();
    initI18n();
    initFilters();
    initGallery();
    initForms();
  });
})();
