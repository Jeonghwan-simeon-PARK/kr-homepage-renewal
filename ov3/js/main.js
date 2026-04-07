/* =============================================
   HicareNet OV3 — Alternating Layout JS
   Nav brightness detection + scroll animations
   ============================================= */
(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var scrollIndicator = document.getElementById('scroll-indicator');

  // --- Scroll Animation (IntersectionObserver) ---
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

  // --- Nav Dark/Light Mode ---
  // Detect which section the nav overlaps and switch nav color
  var imageSections = document.querySelectorAll('.section-image');
  var navMode = 'dark'; // default for hero

  var navObserver = new IntersectionObserver(function (entries) {
    // Find topmost visible section
    var topSection = null;
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        if (!topSection || entry.boundingClientRect.top < topSection.boundingClientRect.top) {
          topSection = entry;
        }
      }
    });
    // Also check by scroll position
    updateNavMode();
  }, { threshold: 0, rootMargin: '-70px 0px -90% 0px' });

  document.querySelectorAll('.section-image, .section-text').forEach(function (s) {
    navObserver.observe(s);
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

  // Initial + scroll update
  updateNavMode();
  window.addEventListener('scroll', function () {
    updateNavMode();
    nav.classList.toggle('is-scrolled', window.scrollY > 50);
    if (scrollIndicator) {
      scrollIndicator.classList.toggle('is-hidden', window.scrollY > 200);
    }
  }, { passive: true });

  // --- Counter Animation ---
  var countersAnimated = false;
  var statsSection = document.querySelector('[data-role="stats"]');
  if (statsSection) {
    var statsObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !countersAnimated) {
        countersAnimated = true;
        document.querySelectorAll('[data-count]').forEach(function (el) {
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

  // --- Hamburger Menu ---
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

  // --- Smooth anchor scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.querySelector(this.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

})();
