// ============================================================
// Google Apps Script URL - 배포 후 아래에 URL 붙여넣기
// 설정 방법: docs/gas-setup.js 참조
// ============================================================
const GAS_URL = 'https://script.google.com/macros/s/AKfycbzd92HWGY6j18PrEoTycFy_rkFqtd16rvAgapg6qM3FZ94ZrzlJ3QUMvnVJlPmYJOYA/exec';

const STORAGE_KEY = 'hicarenet-design-vote';
const MAX_SELECTIONS = 2;
const VERSIONS = [
  { id: 'v1', title: 'Technology Leadership', accent: 'blue' },
  { id: 'v2', title: 'Clinical Curator', accent: 'blue' },
  { id: 'v3', title: 'Clinical Editorial', accent: 'blue' },
  { id: 'v4', title: 'Dark Navy Leadership', accent: 'blue' },
  { id: 'v5', title: 'Clean Light RPM/CCM', accent: 'blue' },
  { id: 'v6', title: 'Korean Corporate Site', accent: 'green' }
];

let selectedVersions = [];

function getStoredVote() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch { return null; }
}

function storeVote(voteData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(voteData));
}

function escapeHtml(text) {
  const el = document.createElement('span');
  el.textContent = text;
  return el.innerHTML;
}

// ── Init ──────────────────────────────────────────────────

function initVoting() {
  const container = document.getElementById('vote-section');
  if (!container) return;

  const stored = getStoredVote();
  if (stored) {
    renderConfirmation(container, stored);
  } else {
    renderForm(container);
  }

  fetchAndRenderResults();
}

// ── Vote Form ─────────────────────────────────────────────

function renderForm(container) {
  selectedVersions = [];

  const tiles = VERSIONS.map(v => `
    <button class="vote-tile" data-version="${v.id}" data-accent="${v.accent}" type="button">
      <span class="vote-tile__check">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 9l3.5 3.5L14 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="vote-tile__version">${v.id.toUpperCase()}</span>
      <span class="vote-tile__title">${v.title}</span>
    </button>
  `).join('');

  container.innerHTML = `
    <div class="vote-form">
      <p class="vote-form__hint">마음에 드는 디자인을 최대 <strong>${MAX_SELECTIONS}개</strong> 선택하세요</p>
      <div class="vote-tiles">${tiles}</div>
      <div class="vote-form__warning" id="vote-warning" hidden>최대 ${MAX_SELECTIONS}개까지 선택 가능합니다</div>
      <textarea class="vote-textarea" id="vote-comment" placeholder="의견을 남겨주세요 (선택사항)" rows="3"></textarea>
      <button class="vote-submit" id="vote-submit-btn" disabled>투표하기</button>
    </div>
  `;

  container.querySelectorAll('.vote-tile').forEach(tile => {
    tile.addEventListener('click', () => handleTileClick(tile));
  });
  document.getElementById('vote-submit-btn').addEventListener('click', submitVote);
}

function handleTileClick(tile) {
  const vid = tile.dataset.version;
  const selected = tile.classList.contains('vote-tile--selected');
  const warning = document.getElementById('vote-warning');

  if (selected) {
    tile.classList.remove('vote-tile--selected');
    selectedVersions = selectedVersions.filter(v => v !== vid);
    warning.hidden = true;
  } else {
    if (selectedVersions.length >= MAX_SELECTIONS) {
      tile.classList.add('vote-tile--shake');
      tile.addEventListener('animationend', () => tile.classList.remove('vote-tile--shake'), { once: true });
      warning.hidden = false;
      return;
    }
    tile.classList.add('vote-tile--selected');
    selectedVersions.push(vid);
    warning.hidden = true;
  }

  document.querySelectorAll('.vote-tile').forEach(t => {
    if (!t.classList.contains('vote-tile--selected')) {
      t.classList.toggle('vote-tile--disabled', selectedVersions.length >= MAX_SELECTIONS);
    }
  });

  document.getElementById('vote-submit-btn').disabled = selectedVersions.length === 0;
}

// ── Submit (GET 방식 - GAS CORS 이슈 해결) ──────────────

async function submitVote() {
  if (selectedVersions.length === 0) return;

  const btn = document.getElementById('vote-submit-btn');
  btn.disabled = true;
  btn.textContent = '제출 중...';

  const oldVote = getStoredVote();
  const voteData = {
    id: 'vote_' + Date.now(),
    timestamp: new Date().toISOString(),
    votes: [...selectedVersions],
    comment: document.getElementById('vote-comment').value.trim(),
    oldId: oldVote ? oldVote.id : ''
  };

  if (GAS_URL) {
    try {
      const params = new URLSearchParams({
        action: 'vote',
        data: JSON.stringify(voteData)
      });
      await fetch(`${GAS_URL}?${params}`);
    } catch {
      // vote is still saved locally
    }
  }

  storeVote(voteData);
  const container = document.getElementById('vote-section');
  renderConfirmation(container, voteData);
  fetchAndRenderResults();
}

// ── Confirmation ───────────────────────────────────────────

function renderConfirmation(container, voteData) {
  const badges = voteData.votes.map(v => {
    const ver = VERSIONS.find(x => x.id === v);
    const cls = ver?.accent === 'green' ? ' vote-badge--green' : '';
    return `<span class="vote-badge${cls}">${v.toUpperCase()} ${ver?.title || ''}</span>`;
  }).join('');

  const commentHtml = voteData.comment
    ? `<blockquote class="vote-confirm__comment">${escapeHtml(voteData.comment)}</blockquote>`
    : '';

  const d = new Date(voteData.timestamp);
  const pad = n => String(n).padStart(2, '0');
  const dateStr = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;

  container.innerHTML = `
    <div class="vote-confirm">
      <div class="vote-confirm__icon">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="rgba(46,190,116,0.15)"/>
          <path d="M15 24l6 6 12-12" stroke="#2EBE74" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h3 class="vote-confirm__title">투표가 완료되었습니다</h3>
      <p class="vote-confirm__date">${dateStr}</p>
      <div class="vote-confirm__badges">${badges}</div>
      ${commentHtml}
      <div class="vote-confirm__actions">
        <button class="vote-reset-btn" id="vote-reset-btn">다시 투표하기</button>
      </div>
    </div>
  `;

  document.getElementById('vote-reset-btn').addEventListener('click', resetVote);
}

function resetVote() {
  localStorage.removeItem(STORAGE_KEY);
  renderForm(document.getElementById('vote-section'));
}

// ── Results ────────────────────────────────────────────────

async function fetchAndRenderResults() {
  const resultsEl = document.getElementById('vote-results');
  if (!resultsEl) return;

  if (!GAS_URL) {
    resultsEl.innerHTML = `
      <div class="vote-results__empty">
        <p>GAS_URL이 설정되지 않았습니다.</p>
        <p style="font-size:0.75rem; color:#475569;">docs/gas-setup.js를 참고하여 Google Apps Script를 배포한 뒤,<br>js/voting.js 상단의 GAS_URL에 배포 URL을 입력하세요.</p>
      </div>`;
    return;
  }

  resultsEl.innerHTML = '<div class="vote-results__loading">결과 불러오는 중...</div>';

  try {
    const res = await fetch(GAS_URL);
    const data = await res.json();
    renderResults(resultsEl, data);
  } catch {
    resultsEl.innerHTML = '<div class="vote-results__empty">결과를 불러올 수 없습니다. 잠시 후 새로고침 해주세요.</div>';
  }
}

function renderResults(el, data) {
  const { totals, totalVoters, votes } = data;

  if (totalVoters === 0) {
    el.innerHTML = '<div class="vote-results__empty">아직 투표가 없습니다. 첫 번째 투표자가 되어주세요!</div>';
    return;
  }

  const sorted = VERSIONS.map(v => ({
    ...v,
    count: totals[v.id] || 0
  })).sort((a, b) => b.count - a.count);

  const maxCount = Math.max(...sorted.map(s => s.count), 1);

  const barsHtml = sorted.map(v => {
    const pct = totalVoters > 0 ? Math.round((v.count / totalVoters) * 100) : 0;
    const width = Math.round((v.count / maxCount) * 100);
    const color = v.accent === 'green' ? '#2EBE74' : '#1A8FD8';
    return `
      <div class="vote-bar">
        <div class="vote-bar__label">
          <span class="vote-bar__version">${v.id.toUpperCase()}</span>
          <span class="vote-bar__title">${v.title}</span>
        </div>
        <div class="vote-bar__track">
          <div class="vote-bar__fill" style="width:${width}%;background:${color}"></div>
        </div>
        <div class="vote-bar__count">${v.count}표 <span class="vote-bar__pct">(${pct}%)</span></div>
      </div>`;
  }).join('');

  const commentsHtml = votes
    .filter(v => v.comment)
    .map(v => {
      const vBadges = v.votes.map(vid => {
        const ver = VERSIONS.find(x => x.id === vid);
        const cls = ver?.accent === 'green' ? ' vote-badge--green' : '';
        return `<span class="vote-badge vote-badge--sm${cls}">${vid.toUpperCase()}</span>`;
      }).join('');
      const ago = timeAgo(v.timestamp);
      return `
        <div class="vote-comment-card">
          <div class="vote-comment-card__header">
            <div class="vote-comment-card__badges">${vBadges}</div>
            <span class="vote-comment-card__time">${ago}</span>
          </div>
          <p class="vote-comment-card__text">${escapeHtml(v.comment)}</p>
        </div>`;
    }).join('');

  el.innerHTML = `
    <div class="vote-results__header">
      <h3 class="vote-results__title">투표 현황</h3>
      <span class="vote-results__count">${totalVoters}명 참여</span>
    </div>
    <div class="vote-results__bars">${barsHtml}</div>
  `;

  // Render comments into separate section
  const commentsEl = document.getElementById('vote-comments');
  if (commentsEl) {
    const commentCount = votes.filter(v => v.comment).length;
    if (commentCount > 0) {
      commentsEl.innerHTML = `
        <div class="vote-results__comments-header">
          <h4>의견</h4>
          <span>${commentCount}건</span>
        </div>
        <div class="vote-results__comments">${commentsHtml}</div>
      `;
    } else {
      commentsEl.innerHTML = '<div class="vote-results__empty">아직 의견이 없습니다.</div>';
    }
  }
}

function timeAgo(ts) {
  const diff = Date.now() - new Date(ts).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return '방금 전';
  if (min < 60) return `${min}분 전`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}시간 전`;
  const day = Math.floor(hr / 24);
  return `${day}일 전`;
}

// ── Boot ───────────────────────────────────────────────────

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVoting);
} else {
  initVoting();
}
