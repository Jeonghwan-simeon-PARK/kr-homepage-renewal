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
        var body = pick(it, 'body');
        var delay = (i % 3) * 50;
        var badgeClass = isLatest
          ? 'inline-flex items-center px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded shrink-0'
          : 'inline-flex items-center px-2.5 py-1 bg-neutral-100 text-neutral-' + (g.year === thisYear ? '600' : '500') + ' text-xs font-semibold rounded shrink-0';

        // Decide whether the "원문 보기" expansion is meaningful:
        // - Body provides info beyond summary, OR
        // - A source_url is present (offer inline expansion with link)
        var extraBody = body && body.trim() && body.trim() !== summary.trim() ? body : '';
        var hasExpansion = !!(extraBody || it.source_url);

        var panelId = 'news-panel-' + (it.id || (g.year + '-' + i));
        var expandLabel = lang === 'en' ? 'View details' : '원문 보기';
        var collapseLabel = lang === 'en' ? 'Collapse' : '접기';
        var sourceLinkLabel = lang === 'en' ? 'Open original notice' : '원문 페이지로 이동';

        var panelHtml = '';
        if (hasExpansion) {
          panelHtml =
            '<div class="news-panel" id="' + panelId + '" hidden>' +
              (extraBody
                ? '<div class="news-panel__body">' + escapeHtml(extraBody).replace(/\n/g, '<br>') + '</div>'
                : '') +
              (it.source_url
                ? '<a href="' + it.source_url + '" target="_blank" rel="noopener" class="news-panel__source">' +
                    sourceLinkLabel +
                    ' <span class="material-symbols-outlined text-[14px]" aria-hidden="true">open_in_new</span>' +
                  '</a>'
                : '') +
            '</div>';
        }

        var toggleBtn = hasExpansion
          ? '<button type="button" class="news-toggle" aria-expanded="false" aria-controls="' + panelId + '" ' +
              'data-expand="' + escapeHtml(expandLabel) + '" data-collapse="' + escapeHtml(collapseLabel) + '">' +
              '<span class="news-toggle__label">' + escapeHtml(expandLabel) + '</span>' +
              '<span class="material-symbols-outlined news-toggle__chevron" aria-hidden="true">expand_more</span>' +
            '</button>'
          : '';

        return (
          '<article class="news-card bg-white rounded-xl border border-neutral-100 shadow-sm p-6 mb-4 hover:shadow-md transition-shadow" data-animate="fade-up"' +
          (delay ? ' data-animate-delay="' + delay + '"' : '') + '>' +
            '<div class="flex items-start gap-4">' +
              '<span class="' + badgeClass + '">' + escapeHtml(tag) + '</span>' +
              '<div class="min-w-0 flex-1">' +
                '<h4 class="text-base font-semibold text-neutral-900 mb-2">' + escapeHtml(title) + '</h4>' +
                '<p class="text-sm text-neutral-600 leading-relaxed">' + escapeHtml(summary) + '</p>' +
                toggleBtn +
                panelHtml +
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
    bindToggles(container);
  }

  function bindToggles(root) {
    root.querySelectorAll('.news-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        var panelId = btn.getAttribute('aria-controls');
        var panel = document.getElementById(panelId);
        var label = btn.querySelector('.news-toggle__label');
        if (!panel) return;
        if (expanded) {
          panel.hidden = true;
          btn.setAttribute('aria-expanded', 'false');
          if (label) label.textContent = btn.getAttribute('data-expand') || '';
          btn.classList.remove('is-open');
        } else {
          panel.hidden = false;
          btn.setAttribute('aria-expanded', 'true');
          if (label) label.textContent = btn.getAttribute('data-collapse') || '';
          btn.classList.add('is-open');
        }
      });
    });
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
    var expandLabel = lang === 'en' ? 'View details' : '자세히 보기';
    var collapseLabel = lang === 'en' ? 'Collapse' : '접기';
    var sourceLinkLabel = lang === 'en' ? 'Open original notice' : '원문 페이지로 이동';

    var title = pick(item, 'title');
    var summary = pick(item, 'summary');
    var body = pick(item, 'body');
    var tag = pick(item, 'tag');

    // Short view = summary (falls back to body). Expanded view = body + source link.
    var shortText = summary || body || '';
    var extraBody = body && body.trim() && body.trim() !== (summary || '').trim() ? body : '';
    var hasExpansion = !!(extraBody || item.source_url);

    var overlay = document.createElement('div');
    overlay.id = 'hicare-popup-modal';
    overlay.className = 'hicare-popup-backdrop';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'hicare-popup-title');

    var panelHtml = '';
    if (hasExpansion) {
      panelHtml =
        '<div class="hicare-popup-panel" id="hicare-popup-panel" hidden>' +
          (extraBody
            ? '<div class="hicare-popup-panel__body">' + escapeHtml(extraBody).replace(/\n/g, '<br>') + '</div>'
            : '') +
          (item.source_url
            ? '<a href="' + item.source_url + '" target="_blank" rel="noopener" class="hicare-popup-panel__source">' +
                sourceLinkLabel +
                ' <span class="material-symbols-outlined text-[14px]" aria-hidden="true">open_in_new</span>' +
              '</a>'
            : '') +
        '</div>';
    }

    var toggleBtn = hasExpansion
      ? '<button type="button" class="hicare-popup-btn hicare-popup-btn--primary hicare-popup-toggle" ' +
          'aria-expanded="false" aria-controls="hicare-popup-panel" ' +
          'data-expand="' + escapeHtml(expandLabel) + '" data-collapse="' + escapeHtml(collapseLabel) + '">' +
          '<span class="hicare-popup-toggle__label">' + escapeHtml(expandLabel) + '</span>' +
        '</button>'
      : '';

    overlay.innerHTML =
      '<div class="hicare-popup-card" role="document">' +
        '<div class="hicare-popup-header">' +
          (tag ? '<span class="hicare-popup-tag">' + escapeHtml(tag) + '</span>' : '') +
          '<span class="hicare-popup-date">' + escapeHtml(item.date || '') + '</span>' +
          '<button type="button" class="hicare-popup-close" aria-label="' + closeLabel + '">&times;</button>' +
        '</div>' +
        '<h3 id="hicare-popup-title" class="hicare-popup-title">' + escapeHtml(title) + '</h3>' +
        '<div class="hicare-popup-body">' + escapeHtml(shortText).replace(/\n/g, '<br>') + '</div>' +
        panelHtml +
        '<div class="hicare-popup-actions">' +
          toggleBtn +
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
    var toggleBtnEl = overlay.querySelector('.hicare-popup-toggle');
    if (toggleBtnEl) {
      toggleBtnEl.addEventListener('click', function () {
        var expanded = toggleBtnEl.getAttribute('aria-expanded') === 'true';
        var panel = overlay.querySelector('#hicare-popup-panel');
        var label = toggleBtnEl.querySelector('.hicare-popup-toggle__label');
        if (!panel) return;
        if (expanded) {
          panel.hidden = true;
          toggleBtnEl.setAttribute('aria-expanded', 'false');
          toggleBtnEl.classList.remove('is-open');
          if (label) label.textContent = toggleBtnEl.getAttribute('data-expand') || '';
        } else {
          panel.hidden = false;
          toggleBtnEl.setAttribute('aria-expanded', 'true');
          toggleBtnEl.classList.add('is-open');
          if (label) label.textContent = toggleBtnEl.getAttribute('data-collapse') || '';
        }
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
