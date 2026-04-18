(function () {
  'use strict';

  var DATA_URL = 'data/news.json';
  var DISMISS_PREFIX = 'hicare-popup-dismissed:';
  var LANG_KEY = 'hicarenet-lang';

  function getLang() {
    try {
      var l = localStorage.getItem(LANG_KEY);
      if (l === 'en' || l === 'ko') return l;
    } catch (e) {}
    return (document.documentElement.lang || 'ko').toLowerCase().indexOf('en') === 0 ? 'en' : 'ko';
  }

  function pick(item, field) {
    var lang = getLang();
    return item[field + '_' + lang] || item[field + '_ko'] || item[field + '_en'] || '';
  }

  function todayStr() {
    var d = new Date();
    return d.toISOString().slice(0, 10);
  }

  function inDateRange(start, end, today) {
    if (start && today < start) return false;
    if (end && today > end) return false;
    return true;
  }

  function isDismissed(id) {
    try { return !!localStorage.getItem(DISMISS_PREFIX + id); } catch (e) { return false; }
  }

  function dismiss(id) {
    try { localStorage.setItem(DISMISS_PREFIX + id, '1'); } catch (e) {}
  }

  function fetchNews() {
    return fetch(DATA_URL, { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : { items: [] }; })
      .then(function (data) { return (data && data.items) || []; })
      .catch(function () { return []; });
  }

  // ===== Newsroom rendering (ir.html) =====
  function formatYearBadge(dateStr) {
    if (!dateStr) return '';
    var y = dateStr.slice(0, 4);
    var m = dateStr.slice(5, 7);
    var half = parseInt(m, 10) <= 6 ? 'H1' : 'H2';
    return y + '.' + half;
  }

  function groupByYear(items) {
    var buckets = {};
    items.forEach(function (it) {
      var y = (it.date || '').slice(0, 4) || 'Other';
      (buckets[y] = buckets[y] || []).push(it);
    });
    return Object.keys(buckets)
      .sort(function (a, b) { return b.localeCompare(a); })
      .map(function (y) { return { year: y, items: buckets[y] }; });
  }

  function renderNewsroom(container, items) {
    if (!container) return;
    // Sort newest first
    var sorted = items.slice().sort(function (a, b) {
      return (b.date || '').localeCompare(a.date || '');
    });
    var groups = groupByYear(sorted);
    var thisYear = new Date().getFullYear().toString();
    var lang = getLang();

    var html = groups.map(function (g, gi) {
      var isLatest = gi === 0;
      var headerClass = isLatest
        ? 'pb-3 mb-6 border-b-2 border-primary-600'
        : (g.year === thisYear ? 'pb-3 mb-6 border-b-2 border-neutral-400' : 'pb-3 mb-6 border-b-2 border-neutral-300');
      var titleClass = isLatest ? 'text-lg font-semibold text-primary-700'
        : 'text-lg font-semibold text-neutral-' + (g.year === thisYear ? '600' : '500');

      var articles = g.items.map(function (it, i) {
        var tag = pick(it, 'tag') || g.year;
        var title = pick(it, 'title');
        var summary = pick(it, 'summary');
        var delay = (i % 3) * 50;
        var badgeClass = isLatest
          ? 'inline-flex items-center px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded shrink-0'
          : 'inline-flex items-center px-2.5 py-1 bg-neutral-100 text-neutral-' + (g.year === thisYear ? '600' : '500') + ' text-xs font-semibold rounded shrink-0';
        var sourceLine = it.source_url
          ? '<a href="' + it.source_url + '" target="_blank" rel="noopener" class="inline-flex items-center gap-1 mt-3 text-xs font-medium text-primary-600 hover:text-primary-700">' +
              (lang === 'en' ? 'View original notice' : '원문 보기') +
              ' <span class="material-symbols-outlined text-[14px]">open_in_new</span></a>'
          : '';
        return (
          '<article class="bg-white rounded-xl border border-neutral-100 shadow-sm p-6 mb-4 hover:shadow-md transition-shadow" data-animate="fade-up"' +
          (delay ? ' data-animate-delay="' + delay + '"' : '') + '>' +
            '<div class="flex items-start gap-4">' +
              '<span class="' + badgeClass + '">' + escapeHtml(tag) + '</span>' +
              '<div class="min-w-0 flex-1">' +
                '<h4 class="text-base font-semibold text-neutral-900 mb-2">' + escapeHtml(title) + '</h4>' +
                '<p class="text-sm text-neutral-600 leading-relaxed">' + escapeHtml(summary) + '</p>' +
                sourceLine +
              '</div>' +
            '</div>' +
          '</article>'
        );
      }).join('');

      return (
        '<div class="' + headerClass + '">' +
          '<h3 class="' + titleClass + '">' + g.year + '</h3>' +
        '</div>' + articles
      );
    }).join('');

    container.innerHTML = html;
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ===== Popup rendering (all pages) =====
  function selectPopupItem(items) {
    var today = todayStr();
    var candidates = items.filter(function (it) {
      if (!it.popup || !it.popup.enabled) return false;
      if (!inDateRange(it.popup.start_date, it.popup.end_date, today)) return false;
      if (it.popup.dismissible !== false && isDismissed(it.id)) return false;
      return true;
    });
    candidates.sort(function (a, b) {
      return (b.popup.priority || 0) - (a.popup.priority || 0);
    });
    return candidates[0] || null;
  }

  function renderPopup(item) {
    if (document.getElementById('hicare-popup-modal')) return;
    var lang = getLang();
    var closeLabel = lang === 'en' ? 'Close' : '닫기';
    var dontShowLabel = lang === 'en' ? "Don't show again" : '다시 보지 않기';
    var viewLabel = lang === 'en' ? 'View details' : '자세히 보기';

    var title = pick(item, 'title');
    var body = pick(item, 'body') || pick(item, 'summary');
    var tag = pick(item, 'tag');

    var overlay = document.createElement('div');
    overlay.id = 'hicare-popup-modal';
    overlay.className = 'hicare-popup-backdrop';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'hicare-popup-title');

    var sourceBtn = item.source_url
      ? '<a href="' + item.source_url + '" target="_blank" rel="noopener" class="hicare-popup-btn hicare-popup-btn--primary">' + viewLabel + '</a>'
      : '';

    overlay.innerHTML =
      '<div class="hicare-popup-card" role="document">' +
        '<div class="hicare-popup-header">' +
          (tag ? '<span class="hicare-popup-tag">' + escapeHtml(tag) + '</span>' : '') +
          '<span class="hicare-popup-date">' + escapeHtml(item.date || '') + '</span>' +
          '<button type="button" class="hicare-popup-close" aria-label="' + closeLabel + '">&times;</button>' +
        '</div>' +
        '<h3 id="hicare-popup-title" class="hicare-popup-title">' + escapeHtml(title) + '</h3>' +
        '<div class="hicare-popup-body">' + escapeHtml(body).replace(/\n/g, '<br>') + '</div>' +
        '<div class="hicare-popup-actions">' +
          sourceBtn +
          (item.popup && item.popup.dismissible !== false
            ? '<button type="button" class="hicare-popup-btn hicare-popup-btn--ghost hicare-popup-dismiss">' + dontShowLabel + '</button>'
            : '') +
        '</div>' +
      '</div>';

    function close() {
      overlay.classList.add('is-closing');
      setTimeout(function () { overlay.remove(); }, 180);
    }

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    overlay.querySelector('.hicare-popup-close').addEventListener('click', close);
    var dismissBtn = overlay.querySelector('.hicare-popup-dismiss');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', function () {
        dismiss(item.id);
        close();
      });
    }
    document.addEventListener('keydown', function onKey(e) {
      if (e.key === 'Escape') {
        close();
        document.removeEventListener('keydown', onKey);
      }
    });

    document.body.appendChild(overlay);
    requestAnimationFrame(function () { overlay.classList.add('is-open'); });
  }

  // ===== Public API =====
  window.HicareNews = {
    fetch: fetchNews,
    renderNewsroom: function (selector) {
      var el = typeof selector === 'string' ? document.querySelector(selector) : selector;
      if (!el) return;
      fetchNews().then(function (items) { renderNewsroom(el, items); });
    },
    showPopup: function () {
      fetchNews().then(function (items) {
        var pick = selectPopupItem(items);
        if (pick) renderPopup(pick);
      });
    }
  };

  // Auto-trigger popup after DOMContentLoaded (unless explicitly disabled)
  function autoPopup() {
    if (document.body && document.body.hasAttribute('data-no-popup')) return;
    window.HicareNews.showPopup();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoPopup);
  } else {
    autoPopup();
  }
})();
