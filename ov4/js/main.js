/* OV4 — Nav dark/light + scroll animations + counters */
(function () {
  'use strict';
  var nav = document.getElementById('nav');
  var indicator = document.getElementById('scroll-indicator');
  var allSections = document.querySelectorAll('.photo, .clean');

  // Scroll-triggered animations
  var animObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        e.target.querySelectorAll('[data-animate]').forEach(function (el) { el.classList.add('is-animated'); });
      }
    });
  }, { threshold: 0.12 });
  allSections.forEach(function (s) { animObs.observe(s); });

  // Nav mode: detect section under nav bar
  function updateNav() {
    var y = 72;
    var mode = 'dark';
    for (var i = allSections.length - 1; i >= 0; i--) {
      if (allSections[i].getBoundingClientRect().top <= y) {
        mode = allSections[i].classList.contains('photo') ? 'dark' : 'light';
        break;
      }
    }
    nav.classList.remove('nav--dark', 'nav--light');
    nav.classList.add('nav--' + mode);
    nav.classList.toggle('is-scrolled', window.scrollY > 60);
    if (indicator) indicator.classList.toggle('is-hidden', window.scrollY > 300);
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  // Counter animation
  var counted = false;
  var statsEl = document.querySelector('[data-role="stats"]');
  if (statsEl) {
    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !counted) {
        counted = true;
        document.querySelectorAll('[data-count]').forEach(function (el) {
          var t = +el.getAttribute('data-count'), s = null;
          (function step(ts) {
            if (!s) s = ts;
            var p = Math.min((ts - s) / 2000, 1);
            el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * t).toLocaleString();
            if (p < 1) requestAnimationFrame(step);
          })(performance.now());
        });
      }
    }, { threshold: 0.35 }).observe(statsEl);
  }

  // Hamburger
  var hb = document.getElementById('nav-hamburger'), mm = document.getElementById('mobile-menu');
  if (hb && mm) {
    hb.addEventListener('click', function () { var o = hb.classList.toggle('is-open'); mm.classList.toggle('is-open', o); });
    mm.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { hb.classList.remove('is-open'); mm.classList.remove('is-open'); }); });
  }

  // Smooth anchor
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) { var t = document.querySelector(this.getAttribute('href')); if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); } });
  });
})();
