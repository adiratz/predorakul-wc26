// ============================================================
// APP.JS — Shared logic for Fantasy Prediction League WC26
// ============================================================

// ── Config — REPLACE with your deployed Apps Script URL ─────
const API_URL = 'https://script.google.com/macros/s/AKfycbz1MqpU253WAu-Otu1BQjX1vOY3oORWDsYTFlZS_ta3I1sC1ftV2lbWGlJBXHtyhmfbIA/exec';

// ── Player session ───────────────────────────────────────────
const Session = {
  getCode() {
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

// ── API calls (JSONP — bypasses CORS) ────────────────────────
const API = {
  async get(params) {
    const code = Session.getCode();
    if (code) params.code = code;

    return new Promise((resolve, reject) => {
      const callbackName = 'jsonp_' + Math.random().toString(36).slice(2);
      params.callback = callbackName;

      const script = document.createElement('script');
      script.src = API_URL + '?' + new URLSearchParams(params).toString();

      const timeout = setTimeout(() => {
        delete window[callbackName];
        if (document.body.contains(script)) document.body.removeChild(script);
        reject(new Error('Request timed out'));
      }, 15000);

      window[callbackName] = (data) => {
        clearTimeout(timeout);
        delete window[callbackName];
        if (document.body.contains(script)) document.body.removeChild(script);
        resolve(data);
      };

      script.onerror = () => {
        clearTimeout(timeout);
        delete window[callbackName];
        if (document.body.contains(script)) document.body.removeChild(script);
        reject(new Error('Script load error'));
      };

      document.body.appendChild(script);
    });
  },

  async post(body) {
    const code = Session.getCode();
    if (code) body.code = code;

    return new Promise((resolve, reject) => {
      const callbackName = 'jsonp_' + Math.random().toString(36).slice(2);

      const script = document.createElement('script');
      const params = new URLSearchParams({
        callback: callbackName,
        payload: JSON.stringify(body)
      });
      script.src = API_URL + '?' + params.toString();

      const timeout = setTimeout(() => {
        delete window[callbackName];
        if (document.body.contains(script)) document.body.removeChild(script);
        reject(new Error('Request timed out'));
      }, 15000);

      window[callbackName] = (data) => {
        clearTimeout(timeout);
        delete window[callbackName];
        if (document.body.contains(script)) document.body.removeChild(script);
        resolve(data);
      };

      script.onerror = () => {
        clearTimeout(timeout);
        delete window[callbackName];
        if (document.body.contains(script)) document.body.removeChild(script);
        reject(new Error('Script load error'));
      };

      document.body.appendChild(script);
    });
  }
};

// ── Fixtures — uses hardcoded data + API for dynamic matches ─
const Fixtures = {
  async getAll() {
    const now = new Date();

    // Add locked status to hardcoded fixtures
    const hardcoded = HARDCODED_FIXTURES.map(f => ({
      ...f,
      locked: now >= new Date(f.kickoffUTC.replace(' ', 'T') + 'Z')
    }));

    // Fetch dynamic fixtures (semi finals, 3rd place, final)
    // from API if any exist above the threshold
    let dynamic = [];
    try {
      const res = await API.get({ action: 'getFixtures', dynamicOnly: 'true' });
      if (res.success && res.fixtures) {
        dynamic = res.fixtures.filter(f => f.matchId >= DYNAMIC_FROM_MATCH_ID);
      }
    } catch (e) {
      console.warn('Could not load dynamic fixtures:', e.message);
    }

    // Combine: hardcoded + dynamic, sort by kickoff time
    const all = [...hardcoded, ...dynamic];
    all.sort((a, b) => new Date(a.kickoffUTC.replace(' ', 'T') + 'Z') - new Date(b.kickoffUTC.replace(' ', 'T') + 'Z'));
    return all;
  },

  getSquad(home, away) {
    // Use hardcoded squad data — instant, no API call
    const homePlayers = getSquadForTeam(home);
    const awayPlayers = getSquadForTeam(away);

    if (homePlayers.length === 0 || awayPlayers.length === 0) {
      return null; // TBD teams in knockout rounds
    }

    return {
      home: { team: home, players: homePlayers },
      away: { team: away, players: awayPlayers }
    };
  }
};

// ── Standalone getSquad — used by predict.html ───────────────
async function getSquad(home, away) {
  // Use hardcoded squad data — no API call needed
  const squad = Fixtures.getSquad(home, away);
  if (squad) {
    return { success: true, home: squad.home, away: squad.away };
  }
  // Fallback to API for TBD knockout teams
  try {
    const res = await API.get({ action: 'getSquad', home, away });
    return res;
  } catch (e) {
    return { success: false, error: 'Could not load squad' };
  }
}

// ── Auth guard ────────────────────────────────────────────────
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
    { id: 'predict',     label: 'Predict',      icon: '⚽', href: `predict.html${codeParam}` },
    { id: 'leaderboard', label: 'Leaderboard',  icon: '🏆', href: `leaderboard.html${codeParam}` },
    { id: 'matches',     label: 'Match Centre', icon: '📊', href: `match.html${codeParam}` },
    { id: 'picks',       label: 'Winner Pick',  icon: '🔮', href: `picks.html${codeParam}` }
  ];

  const navLinks = document.getElementById('nav-links');
  if (navLinks) {
    navLinks.innerHTML = pages.map(p =>
      `<a href="${p.href}" class="nav__link${activePage === p.id ? ' active' : ''}">${p.label}</a>`
    ).join('');
  }

  const navPlayer = document.getElementById('nav-player');
  if (navPlayer && player) {
    navPlayer.innerHTML = `Playing as <span>${player.name}</span>`;
  }

  const mobileNavLinks = document.getElementById('mobile-nav-links');
  if (mobileNavLinks) {
    mobileNavLinks.innerHTML = pages.map(p =>
      `<a href="${p.href}" class="mobile-nav__link${activePage === p.id ? ' active' : ''}">
        <span class="mobile-nav__icon">${p.icon}</span>${p.label}
      </a>`
    ).join('');
  }
}

// ── Toast notifications ───────────────────────────────────────
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3100);
}

// ── Time helpers ──────────────────────────────────────────────
function formatKickoff(utcString) {
  const date = new Date(utcString.replace(' ', 'T') + 'Z');
  return date.toLocaleString(undefined, {
    weekday: 'short', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
  });
}

function formatKickoffShort(utcString) {
  const date = new Date(utcString.replace(' ', 'T') + 'Z');
  return date.toLocaleString(undefined, {
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
  });
}

function formatDate(utcString) {
  const date = new Date(utcString.replace(' ', 'T') + 'Z');
  return date.toLocaleDateString(undefined, {
    weekday: 'long', month: 'long', day: 'numeric'
  });
}

function getLocalDateKey(utcString) {
  const date = new Date(utcString.replace(' ', 'T') + 'Z');
  return date.toLocaleDateString(undefined, {
    year: 'numeric', month: '2-digit', day: '2-digit'
  });
}

function isLocked(kickoffUtcString) {
  return new Date() >= new Date(kickoffUtcString.replace(' ', 'T') + 'Z');
}

function groupByDate(fixtures) {
  const groups = {};
  fixtures.forEach(f => {
    const key = getLocalDateKey(f.kickoffUTC);
    if (!groups[key]) groups[key] = [];
    groups[key].push(f);
  });
  return groups;
}

// ── Countdown timer ───────────────────────────────────────────
function startCountdown(targetUtcString, elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const target = new Date(targetUtcString.replace(' ', 'T') + 'Z');

  function update() {
    const diff = target - new Date();
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
      </div>`;
  }
  update();
  setInterval(update, 1000);
}

// ── HTML escape ───────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Scorer dropdown options ───────────────────────────────────
function buildScorerOptions(players, includeOwnGoal = true) {
  let html = '<option value="">— Select scorer —</option>';
  if (includeOwnGoal) {
    html += '<option value="Own Goal">Own Goal</option>';
    html += '<option disabled>──────────</option>';
  }
  players.sort().forEach(p => {
    html += `<option value="${escHtml(p)}">${escHtml(p)}</option>`;
  });
  return html;
}
