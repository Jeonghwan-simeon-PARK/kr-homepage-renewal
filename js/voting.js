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

function initVoting() {
  const container = document.getElementById('vote-section');
  if (!container) return;

  const stored = getStoredVote();
  if (stored) {
    renderConfirmation(container, stored);
  } else {
    renderForm(container);
  }
}

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

function submitVote() {
  if (selectedVersions.length === 0) return;

  const voteData = {
    timestamp: new Date().toISOString(),
    votes: [...selectedVersions],
    comment: document.getElementById('vote-comment').value.trim()
  };

  storeVote(voteData);
  renderConfirmation(document.getElementById('vote-section'), voteData);
}

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
        <button class="vote-copy-btn" id="vote-copy-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
            <path d="M11 5V3.5A1.5 1.5 0 009.5 2h-6A1.5 1.5 0 002 3.5v6A1.5 1.5 0 003.5 11H5" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <span>투표 JSON 복사</span>
        </button>
        <button class="vote-reset-btn" id="vote-reset-btn">다시 투표하기</button>
      </div>
    </div>
  `;

  document.getElementById('vote-copy-btn').addEventListener('click', () => copyVoteJson(voteData));
  document.getElementById('vote-reset-btn').addEventListener('click', resetVote);
}

function copyVoteJson(voteData) {
  const json = JSON.stringify(voteData);
  navigator.clipboard.writeText(json).then(() => {
    const btn = document.getElementById('vote-copy-btn');
    const orig = btn.innerHTML;
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 8l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>복사됨!</span>`;
    btn.classList.add('vote-copy-btn--copied');
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.classList.remove('vote-copy-btn--copied');
    }, 2000);
  });
}

function resetVote() {
  localStorage.removeItem(STORAGE_KEY);
  renderForm(document.getElementById('vote-section'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVoting);
} else {
  initVoting();
}
