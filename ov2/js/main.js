/* =============================================
   HicareNet OV2 — Shared JS
   No i18n swap — each page has its own content
   ============================================= */
(function () {
  'use strict';

  // --- Section Visibility & Animations ---
  var sections = document.querySelectorAll('.fp-section');
  var dots = document.querySelectorAll('.section-dots__dot');
  var scrollIndicator = document.getElementById('scroll-indicator');
  var sectionDots = document.getElementById('section-dots');
  var footer = document.getElementById('footer');
  var statsSection = document.querySelector('[data-section-role="stats"]');

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var section = entry.target;
        var index = parseInt(section.getAttribute('data-section'), 10);

        section.classList.add('is-visible');

        section.querySelectorAll('[data-animate]').forEach(function (el) {
          el.classList.add('is-animated');
        });

        dots.forEach(function (dot, i) {
          dot.classList.toggle('is-active', i === index);
        });

        if (index > 0 && scrollIndicator) {
          scrollIndicator.classList.add('is-hidden');
        } else if (index === 0 && scrollIndicator) {
          scrollIndicator.classList.remove('is-hidden');
        }

        if (section === statsSection) {
          animateCounters();
        }
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(function (s) { sectionObserver.observe(s); });

  // --- Hide dots when footer visible ---
  if (footer && sectionDots) {
    var footerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        sectionDots.style.opacity = entry.isIntersecting ? '0' : '1';
        if (entry.isIntersecting && scrollIndicator) scrollIndicator.classList.add('is-hidden');
      });
    }, { threshold: 0.1 });
    footerObserver.observe(footer);
  }

  // --- Dot Navigation ---
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var i = parseInt(this.getAttribute('data-index'), 10);
      if (sections[i]) sections[i].scrollIntoView({ behavior: 'smooth' });
    });
  });

  // --- Counter Animation ---
  var countersAnimated = false;
  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    document.querySelectorAll('[data-count]').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var duration = 2000;
      var startTime = null;
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

  // --- Nav Scroll Effect ---
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('is-scrolled', window.scrollY > 50);
  }, { passive: true });

  // --- Hamburger Menu ---
  var hamburger = document.getElementById('nav-hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var open = hamburger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Keyboard Navigation ---
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); navSection(1); }
    if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); navSection(-1); }
  });
  function navSection(dir) {
    var idx = currentIdx() + dir;
    if (idx >= 0 && idx < sections.length) sections[idx].scrollIntoView({ behavior: 'smooth' });
  }
  function currentIdx() {
    var st = window.scrollY, wh = window.innerHeight, idx = 0;
    sections.forEach(function (s, i) { if (s.offsetTop <= st + wh * 0.5) idx = i; });
    return idx;
  }

  // --- Smooth anchor scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.querySelector(this.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

})();
