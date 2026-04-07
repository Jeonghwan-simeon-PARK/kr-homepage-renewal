/* =============================================
   HicareNet Overview — Fullscreen Scroll Logic
   ============================================= */

(function () {
  'use strict';

  // --- i18n Translations ---
  const translations = {
    en: {
      'hero.eyebrow': 'Healthcare Technology Company',
      'hero.headline': 'Healthcare Technology,<br>Proven Globally',
      'hero.desc': 'HH-800A and HH-930 gateway devices with 120+ sensor integrations.<br>10,000+ units exported to US VA. RPM/CCM solutions serving 40+ hospitals.',
      'rpm.eyebrow': 'Solution 01',
      'rpm.title': 'Remote Patient<br>Monitoring',
      'rpm.desc': 'Powered by Hicare Hub\'s 120+ device integrations and gateway expertise from HH-800A and HH-930, our RPM solution delivers reliable continuous vital sign monitoring.',
      'rpm.f1': '120+ medical device types supported',
      'rpm.f2': 'Real-time vital sign tracking',
      'rpm.f3': 'Automated alerts and clinical thresholds',
      'rpm.outcome': 'Reduction in Hospital Readmissions',
      'ccm.eyebrow': 'Solution 02',
      'ccm.title': 'Chronic Care<br>Management',
      'ccm.desc': 'Powered by the Hicare platform\'s real-time data connectivity, our CCM solution coordinates chronic condition care with multilingual engagement in English, Korean, and Spanish.',
      'ccm.f1': 'Multilingual care coordination',
      'ccm.f2': 'Personalized care plans',
      'ccm.f3': 'Monthly patient engagement',
      'ccm.outcome': 'Languages Supported: EN, KO, ES',
      'awv.eyebrow': 'Solution 03',
      'awv.title': 'Annual<br>Wellness Visits',
      'awv.desc': 'Leverage the Hicare platform\'s proven infrastructure for automated Health Risk Assessments, streamlined preventive care delivery, and Medicare compliance support.',
      'awv.f1': 'Automated Health Risk Assessments',
      'awv.f2': 'Streamlined preventive care delivery',
      'awv.f3': 'Medicare compliance support',
      'awv.outcome': 'Medicare AWV Compliance',
      'vbc.eyebrow': 'Solution 04',
      'vbc.title': 'Value-Based<br>Care',
      'vbc.desc': 'Backed by 120+ device integrations and continuous monitoring data, our VBC solution provides quality measure dashboards and outcomes-based reporting.',
      'vbc.f1': 'Quality measure dashboards',
      'vbc.f2': 'Outcomes-based reporting',
      'vbc.f3': 'Value-based payment model support',
      'vbc.outcome': 'Device Integrations for Data-Driven Care',
      'tech.eyebrow': 'Technology Platform',
      'tech.title': 'Built on 20+ Years of<br>Medical Device Innovation',
      'tech.device_title': 'HH-800A / HH-930',
      'tech.device_desc': 'Gateway devices with 120+ sensor integrations. 10,000+ units exported to US VA.',
      'tech.hub_title': 'Hicare Hub',
      'tech.hub_desc': 'IoT gateway connecting 120+ medical device types via USB, Bluetooth, and BLE.',
      'tech.mobile_title': 'Hicare M',
      'tech.mobile_desc': 'Mobile health monitoring app connecting patients to care teams.',
      'tech.devices_title': '120+ Devices',
      'tech.devices_desc': 'Comprehensive medical device connectivity validated across global markets.',
      'stats.eyebrow': 'Technology at Scale',
      'stats.title': 'Proven Across Global<br>Healthcare Markets',
      'stats.hospitals': 'Contracted Hospitals',
      'stats.patients': 'Enrolled Patients',
      'stats.exported': 'Units Exported to US VA',
      'stats.devices': 'Device Integrations',
      'cta.headline': 'Ready to Experience<br>Proven Healthcare Technology?',
      'cta.desc': 'From HH-800A/HH-930 gateway devices to 120+ device integrations \u2014 discover the technology platform trusted by US VA projects and 40+ hospitals.',
      'cta.primary': 'Schedule a Demo',
      'cta.secondary': 'Contact Sales'
    },
    ko: {
      'hero.eyebrow': '\uD5EC\uC2A4\uCF00\uC5B4 \uD14C\uD06C\uB180\uB85C\uC9C0 \uAE30\uC5C5',
      'hero.headline': '\uC138\uACC4\uAC00 \uAC80\uC99D\uD55C<br>\uD5EC\uC2A4\uCF00\uC5B4 \uAE30\uC220',
      'hero.desc': 'HH-800A / HH-930 \uAC8C\uC774\uD2B8\uC6E8\uC774 \uB514\uBC14\uC774\uC2A4\uC640 120\uC885 \uC774\uC0C1\uC758 \uC13C\uC11C \uC5F0\uB3D9.<br>\uBBF8\uAD6D VA\uC5D0 10,000\uB300 \uC774\uC0C1 \uC218\uCD9C. 40\uAC1C \uC774\uC0C1\uC758 \uBBF8\uAD6D \uBCD1\uC6D0\uC5D0 RPM/CCM \uC194\uB8E8\uC158 \uACF5\uAE09.',
      'rpm.eyebrow': '\uC194\uB8E8\uC158 01',
      'rpm.title': '\uC6D0\uACA9\uD658\uC790<br>\uBAA8\uB2C8\uD130\uB9C1 (RPM)',
      'rpm.desc': 'Hicare Hub\uC758 120\uC885 \uC774\uC0C1 \uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9 \uC5ED\uB7C9\uACFC HH-800A / HH-930 \uAC8C\uC774\uD2B8\uC6E8\uC774 \uB514\uBC14\uC774\uC2A4 \uC804\uBB38\uC131\uC744 \uBC14\uD0D5\uC73C\uB85C, \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uC9C0\uC18D\uC801 \uBC14\uC774\uD0C8 \uC0AC\uC778 \uBAA8\uB2C8\uD130\uB9C1\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.',
      'rpm.f1': '120\uC885 \uC774\uC0C1 \uC758\uB8CC\uAE30\uAE30 \uC9C0\uC6D0',
      'rpm.f2': '\uC2E4\uC2DC\uAC04 \uBC14\uC774\uD0C8 \uC0AC\uC778 \uCD94\uC801',
      'rpm.f3': '\uC790\uB3D9\uD654\uB41C \uC54C\uB9BC \uBC0F \uC784\uC0C1 \uAE30\uC900\uCE58',
      'rpm.outcome': '\uC7AC\uC785\uC6D0\uC728 \uAC10\uC18C',
      'ccm.eyebrow': '\uC194\uB8E8\uC158 02',
      'ccm.title': '\uB9CC\uC131\uC9C8\uD658<br>\uAD00\uB9AC (CCM)',
      'ccm.desc': '\uD558\uC774\uCF00\uC5B4 \uD50C\uB7AB\uD3FC\uC758 \uC2E4\uC2DC\uAC04 \uB370\uC774\uD130 \uC5F0\uB3D9 \uAE30\uC220\uC744 \uAE30\uBC18\uC73C\uB85C, \uC601\uC5B4, \uD55C\uAD6D\uC5B4, \uC2A4\uD398\uC778\uC5B4 \uB2E4\uAD6D\uC5B4 \uC9C0\uC6D0\uACFC \uB9DE\uCDA4\uD615 \uCF00\uC5B4 \uD50C\uB79C\uC73C\uB85C \uB9CC\uC131\uC9C8\uD658 \uD658\uC790\uC758 \uCF00\uC5B4\uB97C \uC870\uC728\uD569\uB2C8\uB2E4.',
      'ccm.f1': '\uB2E4\uAD6D\uC5B4 \uCF00\uC5B4 \uC870\uC728',
      'ccm.f2': '\uB9DE\uCDA4\uD615 \uCF00\uC5B4 \uD50C\uB79C',
      'ccm.f3': '\uC6D4\uBCC4 \uD658\uC790 \uCC38\uC5EC \uD65C\uB3D9',
      'ccm.outcome': '\uC9C0\uC6D0 \uC5B8\uC5B4: \uC601\uC5B4, \uD55C\uAD6D\uC5B4, \uC2A4\uD398\uC778\uC5B4',
      'awv.eyebrow': '\uC194\uB8E8\uC158 03',
      'awv.title': '\uC5F0\uAC04<br>\uAC74\uAC15\uAC80\uC9C4 (AWV)',
      'awv.desc': '\uD558\uC774\uCF00\uC5B4 \uD50C\uB7AB\uD3FC\uC758 \uAC80\uC99D\uB41C \uC778\uD504\uB77C\uB97C \uD65C\uC6A9\uD558\uC5EC \uC790\uB3D9\uD654\uB41C \uAC74\uAC15\uC704\uD5D8\uD3C9\uAC00(HRA), \uC608\uBC29 \uCF00\uC5B4 \uAC04\uC18C\uD654, \uBA54\uB514\uCF00\uC5B4 \uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.',
      'awv.f1': '\uC790\uB3D9\uD654\uB41C \uAC74\uAC15\uC704\uD5D8\uD3C9\uAC00',
      'awv.f2': '\uC608\uBC29 \uCF00\uC5B4 \uAC04\uC18C\uD654',
      'awv.f3': '\uBA54\uB514\uCF00\uC5B4 \uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4 \uC9C0\uC6D0',
      'awv.outcome': '\uBA54\uB514\uCF00\uC5B4 AWV \uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4',
      'vbc.eyebrow': '\uC194\uB8E8\uC158 04',
      'vbc.title': '\uAC00\uCE58\uAE30\uBC18<br>\uC9C4\uB8CC (VBC)',
      'vbc.desc': '120\uC885 \uC774\uC0C1\uC758 \uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9\uACFC \uC9C0\uC18D\uC801 \uBAA8\uB2C8\uD130\uB9C1 \uB370\uC774\uD130\uB97C \uAE30\uBC18\uC73C\uB85C \uD488\uC9C8 \uC9C0\uD45C \uB300\uC2DC\uBCF4\uB4DC\uC640 \uC131\uACFC \uAE30\uBC18 \uB9AC\uD3EC\uD305\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.',
      'vbc.f1': '\uD488\uC9C8 \uC9C0\uD45C \uB300\uC2DC\uBCF4\uB4DC',
      'vbc.f2': '\uC131\uACFC \uAE30\uBC18 \uB9AC\uD3EC\uD305',
      'vbc.f3': '\uAC00\uCE58\uAE30\uBC18 \uC9C0\uBD88 \uBAA8\uB378 \uC9C0\uC6D0',
      'vbc.outcome': '\uB370\uC774\uD130 \uAE30\uBC18 \uCF00\uC5B4\uB97C \uC704\uD55C \uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9',
      'tech.eyebrow': '\uAE30\uC220 \uD50C\uB7AB\uD3FC',
      'tech.title': '20\uB144 \uC774\uC0C1\uC758 \uC758\uB8CC\uAE30\uAE30<br>\uD601\uC2E0 \uC704\uC5D0 \uAD6C\uCD95\uB418\uC5C8\uC2B5\uB2C8\uB2E4',
      'tech.device_title': 'HH-800A / HH-930',
      'tech.device_desc': '120\uC885 \uC774\uC0C1\uC758 \uC13C\uC11C \uC5F0\uB3D9 \uAC8C\uC774\uD2B8\uC6E8\uC774 \uB514\uBC14\uC774\uC2A4. \uBBF8\uAD6D VA\uC5D0 10,000\uB300 \uC774\uC0C1 \uC218\uCD9C.',
      'tech.hub_title': '\uD558\uC774\uCF00\uC5B4 \uD5C8\uBE0C',
      'tech.hub_desc': 'USB, \uBE14\uB8E8\uD22C\uC2A4, BLE \uD504\uB85C\uD1A0\uCF5C\uC744 \uD1B5\uD55C 120\uC885 \uC774\uC0C1 \uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9 IoT \uAC8C\uC774\uD2B8\uC6E8\uC774.',
      'tech.mobile_title': '\uD558\uC774\uCF00\uC5B4 M',
      'tech.mobile_desc': '\uD658\uC790\uC640 \uC758\uB8CC\uD300\uC744 \uC5F0\uACB0\uD558\uB294 \uBAA8\uBC14\uC77C \uAC74\uAC15 \uBAA8\uB2C8\uD130\uB9C1 \uC571.',
      'tech.devices_title': '120\uC885+ \uC758\uB8CC\uAE30\uAE30',
      'tech.devices_desc': '\uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC5D0\uC11C \uAC80\uC99D\uB41C \uC885\uD569 \uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9 \uC5ED\uB7C9.',
      'stats.eyebrow': '\uAE30\uC220 \uADDC\uBAA8',
      'stats.title': '\uAE00\uB85C\uBC8C \uD5EC\uC2A4\uCF00\uC5B4 \uC2DC\uC7A5\uC5D0\uC11C<br>\uAC80\uC99D\uB41C \uAE30\uC220',
      'stats.hospitals': '\uACC4\uC57D \uBCD1\uC6D0',
      'stats.patients': '\uB4F1\uB85D \uD658\uC790',
      'stats.exported': '\uBBF8\uAD6D VA \uC218\uCD9C \uB300\uC218',
      'stats.devices': '\uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9',
      'cta.headline': '\uAC80\uC99D\uB41C \uD5EC\uC2A4\uCF00\uC5B4 \uAE30\uC220\uC744<br>\uACBD\uD5D8\uD560 \uC900\uBE44\uAC00 \uB418\uC168\uB098\uC694?',
      'cta.desc': 'HH-800A/HH-930 \uAC8C\uC774\uD2B8\uC6E8\uC774 \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C 120\uC885 \uC774\uC0C1\uC758 \uC758\uB8CC\uAE30\uAE30 \uC5F0\uB3D9\uAE4C\uC9C0 \u2014 \uBBF8\uAD6D VA \uD504\uB85C\uC81D\uD2B8\uC640 40\uAC1C \uC774\uC0C1\uC758 \uBCD1\uC6D0\uC774 \uC2E0\uB8B0\uD558\uB294 \uAE30\uC220 \uD50C\uB7AB\uD3FC\uC744 \uB9CC\uB098\uBCF4\uC138\uC694.',
      'cta.primary': '\uB370\uBAA8 \uC2E0\uCCAD\uD558\uAE30',
      'cta.secondary': '\uC601\uC5C5\uD300 \uBB38\uC758'
    }
  };

  let currentLang = localStorage.getItem('hicarenet-lang') || 'en';

  // --- Apply Translations ---
  function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('hicarenet-lang', lang);
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
    document.body.setAttribute('data-lang', lang);

    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // Use innerHTML for keys that contain <br>
        if (dict[key].indexOf('<br>') !== -1 || dict[key].indexOf('<') !== -1) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update lang toggle active state
    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
  }

  // --- Language Toggle ---
  document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyTranslations(this.getAttribute('data-lang'));
    });
  });

  // --- Section Visibility & Animations ---
  var sections = document.querySelectorAll('.fp-section');
  var dots = document.querySelectorAll('.section-dots__dot');
  var scrollIndicator = document.getElementById('scroll-indicator');

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var section = entry.target;
        var index = parseInt(section.getAttribute('data-section'), 10);

        // Mark section visible
        section.classList.add('is-visible');

        // Trigger animations within this section
        section.querySelectorAll('[data-animate]').forEach(function (el) {
          el.classList.add('is-animated');
        });

        // Update dots
        dots.forEach(function (dot, i) {
          dot.classList.toggle('is-active', i === index);
        });

        // Hide scroll indicator after first section
        if (index > 0 && scrollIndicator) {
          scrollIndicator.classList.add('is-hidden');
        } else if (index === 0 && scrollIndicator) {
          scrollIndicator.classList.remove('is-hidden');
        }

        // Trigger counter animation for stats section
        if (index === 6) {
          animateCounters();
        }
      }
    });
  }, {
    threshold: 0.4
  });

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  // --- Dot Navigation ---
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var index = parseInt(this.getAttribute('data-index'), 10);
      sections[index].scrollIntoView({ behavior: 'smooth' });
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

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease out cubic
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.round(eased * target);

        // Format with commas
        el.textContent = current.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    });
  }

  // --- Nav Scroll Effect ---
  var nav = document.getElementById('nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // --- Keyboard Navigation ---
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      navigateSection(1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      navigateSection(-1);
    }
  });

  function navigateSection(direction) {
    var currentIndex = getCurrentSectionIndex();
    var nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < sections.length) {
      sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }

  function getCurrentSectionIndex() {
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    var index = 0;

    sections.forEach(function (section, i) {
      if (section.offsetTop <= scrollTop + windowHeight * 0.5) {
        index = i;
      }
    });

    return index;
  }

  // --- Initialize ---
  applyTranslations(currentLang);

})();
