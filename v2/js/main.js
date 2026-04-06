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

  // ── Filter Pills (News page) ──
  function initFilters() {
    const pills = document.querySelectorAll('.filter-pill');
    const cards = document.querySelectorAll('[data-category]');
    if (!pills.length || !cards.length) return;

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => {
          p.classList.remove('filter-pill--active');
          p.classList.add('filter-pill--inactive');
        });
        pill.classList.remove('filter-pill--inactive');
        pill.classList.add('filter-pill--active');

        const filter = pill.getAttribute('data-filter');
        let visibleCount = 0;
        cards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // Update count text
        const countEl = document.querySelector('[data-i18n="news.newsroom.count"]');
        if (countEl) {
          countEl.textContent = `Showing ${visibleCount} of 52 articles`;
        }
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

      // Create error span if it doesn't exist
      let errorSpan = form.querySelector('.form-error');
      if (!errorSpan) {
        errorSpan = document.createElement('span');
        errorSpan.className = 'form-error';
        errorSpan.textContent = 'Please enter a valid email address';
        form.appendChild(errorSpan);
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = form.querySelector('input[type="email"]');
        if (!emailInput || !emailInput.value.trim()) return;

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
          emailInput.style.borderColor = 'var(--error, #dc2626)';
          errorSpan.classList.add('is-visible');
          emailInput.classList.add('shake');
          setTimeout(() => emailInput.classList.remove('shake'), 400);
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
          errorSpan.classList.remove('is-visible');
        });
      }
    });
  }

  // ── Article Detail ──
  function initArticle() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    if (!slug) return;

    loadArticle(slug);
  }

  async function loadArticle(slug) {
    try {
      const newsRes = await fetch('data/news.json');
      const newsData = await newsRes.json();
      const article = newsData.articles.find(a => a.slug === slug);

      if (!article) {
        window.location.href = 'news.html';
        return;
      }

      const lang = localStorage.getItem('hicarenet-lang') || 'en';
      const i18nRes = await fetch(`data/i18n/${lang}.json`);
      const i18n = await i18nRes.json();

      const i18nKey = article.i18nKey || `c${article.id}`;
      const cardData = article.featured
        ? i18n.news?.hero
        : i18n.news?.cards?.[i18nKey];

      if (!cardData) return;

      // Set hero background image
      const hero = document.getElementById('article-hero');
      if (hero && article.image) {
        hero.style.backgroundImage = `url(${article.image})`;
      }

      document.getElementById('article-title').textContent = cardData.title;
      document.getElementById('article-tag').textContent = cardData.tag || article.category;
      document.getElementById('article-date').textContent = article.date;
      document.getElementById('article-readtime').textContent = '5 min read';
      document.title = `${cardData.title} | HicareNet`;

      // Article body from i18n
      const articleContent = i18n.articles?.[i18nKey];
      const bodyEl = document.getElementById('article-body');
      if (articleContent && bodyEl) {
        bodyEl.innerHTML = articleContent.body;
      } else if (bodyEl) {
        bodyEl.innerHTML = `<p style="font-size: 1.125rem; color: var(--on-surface-variant);">${cardData.desc || ''}</p><p style="margin-top: 2rem; color: var(--on-surface-variant); font-style: italic;">${i18n.article?.comingSoon || 'Full article content coming soon.'}</p>`;
      }
    } catch (err) {
      console.error('Failed to load article:', err);
    }
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initAnimations();
    initI18n();
    initFilters();
    initGallery();
    initForms();
    initArticle();
    initBackToTop();
  });
})();
