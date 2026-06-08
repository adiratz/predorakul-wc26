// ============================================================
// APP.JS — Shared logic for Fantasy Prediction League WC26
// ============================================================

// ── Config — REPLACE with your deployed Apps Script URL ─────
const API_URL = 'https://script.google.com/macros/s/AKfycbz1MqpU253WAu-Otu1BQjX1vOY3oORWDsYTFlZS_ta3I1sC1ftV2lbWGlJBXHtyhmfbIA/exec';

// ── Player session ───────────────────────────────────────────
const Session = {
  getCode() {
    // Check URL param first, then localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const urlCode = urlParams.get('code');
    if (urlCode) {
      localStorage.setItem('predorakul_code', urlCode);
      return urlCode;
    }
    return localStorage.getItem('predorakul_code');
  },

  getPlayer() {
    try {
      return JSON.parse(localStorage.getItem('predorakul_player') || 'null');
    } catch { return null; }
  },

  setPlayer(player) {
    localStorage.setItem('predorakul_player', JSON.stringify(player));
  },

  clear() {
    localStorage.removeItem('predorakul_code');
    localStorage.removeItem('predorakul_player');
  },

  isLoggedIn() {
    return !!this.getCode() && !!this.getPlayer();
  }
};

// ── API calls ────────────────────────────────────────────────
const API = {
  async get(params) {
    const code = Session.getCode();
    if (code) params.code = code;
    const url = API_URL + '?' + new URLSearchParams(params).toString();
    const res = await fetch(url);
    return res.json();
  },

  async post(body) {
    const code = Session.getCode();
    if (code) body.code = code;
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    return res.json();
  }
};

// ── Auth guard — redirect to login if not authenticated ──────
async function requireAuth() {
  const code = Session.getCode();
  if (!code) {
    window.location.href = 'index.html';
    return false;
  }

  let player = Session.getPlayer();
  if (!player) {
    try {
      const res = await API.get({ action: 'getPlayerInfo' });
      if (!res.success) {
        Session.clear();
        window.location.href = 'index.html';
        return false;
      }
      Session.setPlayer(res.player);
      player = res.player;
    } catch (e) {
      window.location.href = 'index.html';
      return false;
    }
  }

  return player;
}

// ── Navigation setup ─────────────────────────────────────────
function setupNav(activePage) {
  const player = Session.getPlayer();
  const code = Session.getCode();
  const codeParam = code ? `?code=${code}` : '';

  const pages = [
    { id: 'predict', label: 'Predict', icon: '⚽', href: `predict.html${codeParam}` },
    { id: 'leaderboard', label: 'Leaderboard', icon: '🏆', href: `leaderboard.html${codeParam}` },
    { id: 'picks', label: 'Picks', icon: '🔮', href: `picks.html${codeParam}` }
  ];

  // Desktop nav links
  const navLinks = document.getElementById('nav-links');
  if (navLinks) {
    navLinks.innerHTML = pages.map(p => `
      <a href="${p.href}" class="nav__link${activePage === p.id ? ' active' : ''}">${p.label}</a>
    `).join('');
  }

  // Player name in nav
  const navPlayer = document.getElementById('nav-player');
  if (navPlayer && player) {
    navPlayer.innerHTML = `Playing as <span>${player.name}</span>`;
  }

  // Mobile nav
  const mobileNavLinks = document.getElementById('mobile-nav-links');
  if (mobileNavLinks) {
    mobileNavLinks.innerHTML = pages.map(p => `
      <a href="${p.href}" class="mobile-nav__link${activePage === p.id ? ' active' : ''}">
        <span class="mobile-nav__icon">${p.icon}</span>
        ${p.label}
      </a>
    `).join('');
  }
}

// ── Toast notifications ──────────────────────────────────────
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3100);
}

// ── Format kickoff time in user's local timezone ─────────────
function formatKickoff(utcString) {
  const date = new Date(utcString.replace(' ', 'T') + 'Z');
  return date.toLocaleString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });
}

function formatKickoffShort(utcString) {
  const date = new Date(utcString.replace(' ', 'T') + 'Z');
  return date.toLocaleString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });
}

function formatDate(utcString) {
  const date = new Date(utcString.replace(' ', 'T') + 'Z');
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
}

// ── Get local date key for grouping ─────────────────────────
function getLocalDateKey(utcString) {
  const date = new Date(utcString.replace(' ', 'T') + 'Z');
  return date.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
}

// ── Countdown timer ──────────────────────────────────────────
function startCountdown(targetUtcString, elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const target = new Date(targetUtcString.replace(' ', 'T') + 'Z');

  function update() {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      el.innerHTML = '<span style="color:var(--red)">Deadline passed</span>';
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    el.innerHTML = `
      <div class="countdown">
        ${days > 0 ? `<div class="countdown-unit"><div class="countdown-num">${days}</div><div class="countdown-label">days</div></div><div class="countdown-sep">:</div>` : ''}
        <div class="countdown-unit"><div class="countdown-num">${String(hours).padStart(2,'0')}</div><div class="countdown-label">hrs</div></div>
        <div class="countdown-sep">:</div>
        <div class="countdown-unit"><div class="countdown-num">${String(mins).padStart(2,'0')}</div><div class="countdown-label">min</div></div>
        <div class="countdown-sep">:</div>
        <div class="countdown-unit"><div class="countdown-num">${String(secs).padStart(2,'0')}</div><div class="countdown-label">sec</div></div>
      </div>
    `;
  }

  update();
  setInterval(update, 1000);
}

// ── Check if a match is locked ───────────────────────────────
function isLocked(kickoffUtcString) {
  return new Date() >= new Date(kickoffUtcString.replace(' ', 'T') + 'Z');
}

// ── Group fixtures by local date ─────────────────────────────
function groupByDate(fixtures) {
  const groups = {};
  fixtures.forEach(f => {
    const key = getLocalDateKey(f.kickoffUTC);
    if (!groups[key]) groups[key] = [];
    groups[key].push(f);
  });
  return groups;
}

// ── Squad cache ──────────────────────────────────────────────
const squadCache = {};

async function getSquad(home, away) {
  const key = `${home}__${away}`;
  if (squadCache[key]) return squadCache[key];

  const res = await API.get({ action: 'getSquad', home, away });
  if (res.success) {
    squadCache[key] = res;
  }
  return res;
}

// ── Build scorer dropdown options ────────────────────────────
function buildScorerOptions(players, includeOwnGoal = true) {
  let html = '<option value="">— Select scorer —</option>';
  if (includeOwnGoal) {
    html += '<option value="Own Goal">Own Goal</option>';
    html += '<option disabled>──────────</option>';
  }
  players.forEach(p => {
    html += `<option value="${escHtml(p)}">${escHtml(p)}</option>`;
  });
  return html;
}

// ── HTML escape ───────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Number validation for scores ─────────────────────────────
function clampScore(val) {
  const n = parseInt(val);
  if (isNaN(n) || n < 0) return 0;
  if (n > 20) return 20;
  return n;
}