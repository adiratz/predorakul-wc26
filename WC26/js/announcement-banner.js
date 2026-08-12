/* ============================================================
   ANNOUNCEMENT-BANNER.JS
   Self-contained, zero-dependency site-wide announcement banner.
   Does NOT touch any existing HTML, CSS, or JS files.
   Add <script src="js/announcement-banner.js"></script> once
   near the top of <body> on every page — that is the ONLY
   one-time setup step required.

   TO ACTIVATE AN ANNOUNCEMENT LATER:
   Just flip the `active` flag + fill in the fields below,
   then push this ONE file to GitHub. Nothing else needs touching.
   ============================================================ */

const ANNOUNCE_CONFIG = {

  // ── 1. MYSTERY PLAYER + JOKER REVEAL ──────────────────────
  // Flip active to true once ready to reveal. Fill in both names.
  mpJokerReveal: {
    active: true,                 // ← set to true when ready
    mpName: 'Kshitij (KJ)',                    // e.g. 'Rohit'
    jokerName: 'Yash (YK)',                 // e.g. 'Chaitanya M'
    jokerWasAI: false,             // true if Joker turns out to be AI-assisted
  },

  // ── 2. TOURNAMENT WINNER DECLARATION ──────────────────────
  // Flip active to true once the Final is scored and confirmed.
  winnerDeclared: {
    active: true,                 // ← set to true when ready
    winnerName: 'Tejasva (TT)',                // e.g. 'Mystery Player'
    winnerScore: '464',                // e.g. '187'
  },

};

/* ============================================================
   Implementation — no need to touch anything below this line
   ============================================================ */
(function () {
  const STYLE_ID = 'poc-announce-styles';
  const NAVY = '#0D1B35';
  const GOLD = '#F5C842';
  const GOLD_DARK = '#B8860B';
  const PURPLE = '#7C3AED';
  const PURPLE_DARK = '#5B21B6';

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const css = `
      .poc-banner-stack {
        position: relative;
        z-index: 9999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      }
      .poc-banner {
        position: relative;
        overflow: hidden;
        padding: 14px 44px 14px 20px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: #fff;
        font-size: 14px;
        line-height: 1.4;
        animation: poc-slide-down 0.5s ease-out;
        box-shadow: 0 2px 12px rgba(0,0,0,0.25);
      }
      .poc-banner + .poc-banner { border-top: 1px solid rgba(255,255,255,0.15); }
      @keyframes poc-slide-down {
        from { transform: translateY(-100%); opacity: 0; }
        to   { transform: translateY(0);      opacity: 1; }
      }
      .poc-banner--winner {
        background: linear-gradient(90deg, ${NAVY} 0%, ${GOLD_DARK} 55%, ${NAVY} 100%);
        background-size: 200% 100%;
        animation: poc-slide-down 0.5s ease-out, poc-shimmer 6s linear infinite;
      }
      @keyframes poc-shimmer {
        0%   { background-position: 0% 0%; }
        100% { background-position: 200% 0%; }
      }
      .poc-banner--reveal {
        background: linear-gradient(90deg, ${NAVY} 0%, ${PURPLE_DARK} 55%, ${NAVY} 100%);
        background-size: 200% 100%;
        animation: poc-slide-down 0.5s ease-out, poc-shimmer 7s linear infinite;
      }
      .poc-banner-icon {
        font-size: 22px;
        flex-shrink: 0;
        animation: poc-bounce 2s ease-in-out infinite;
      }
      @keyframes poc-bounce {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(-3px); }
      }
      .poc-banner-text b {
        color: ${GOLD};
        font-weight: 700;
      }
      .poc-banner--reveal .poc-banner-text b { color: #E9D5FF; }
      .poc-banner-close {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255,255,255,0.15);
        border: none;
        color: #fff;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 14px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
      }
      .poc-banner-close:hover { background: rgba(255,255,255,0.3); }
      .poc-confetti-canvas {
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        pointer-events: none;
        z-index: 9998;
      }
      @media (max-width: 600px) {
        .poc-banner { font-size: 12.5px; padding: 12px 40px 12px 14px; }
        .poc-banner-icon { font-size: 18px; }
      }
    `;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  function wasDismissed(key) {
    try { return sessionStorage.getItem('poc_dismissed_' + key) === '1'; }
    catch (e) { return false; }
  }
  function markDismissed(key) {
    try { sessionStorage.setItem('poc_dismissed_' + key, '1'); }
    catch (e) {}
  }

  function fireConfetti() {
    const canvas = document.createElement('canvas');
    canvas.className = 'poc-confetti-canvas';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#F5C842', '#B8860B', '#FFFFFF', '#E9D5FF', '#7C3AED'];
    const pieces = [];
    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * canvas.height * 0.5,
        r: 4 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: 2 + Math.random() * 3,
        speedX: -1.5 + Math.random() * 3,
        rotation: Math.random() * 360,
        rotSpeed: -6 + Math.random() * 12,
      });
    }

    let frame = 0;
    const maxFrames = 260;
    function animate() {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.6);
        ctx.restore();
      });
      if (frame < maxFrames) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
        window.removeEventListener('resize', resize);
      }
    }
    requestAnimationFrame(animate);
  }

  function buildWinnerBanner(cfg) {
    const key = 'winner_' + cfg.winnerName;
    if (wasDismissed(key)) return null;

    const el = document.createElement('div');
    el.className = 'poc-banner poc-banner--winner';
    const scoreText = cfg.winnerScore ? ` with <b>${cfg.winnerScore} pts</b>` : '';
    el.innerHTML = `
      <span class="poc-banner-icon">🏆</span>
      <span class="poc-banner-text">
        Tournament champion crowned — <b>${cfg.winnerName}</b>${scoreText} takes the PredOrakul title!
      </span>
      <button class="poc-banner-close" aria-label="Dismiss">✕</button>
    `;
    el.querySelector('.poc-banner-close').addEventListener('click', () => {
      markDismissed(key);
      el.remove();
    });
    return el;
  }

  function buildRevealBanner(cfg) {
    const key = 'reveal_' + cfg.mpName + '_' + cfg.jokerName;
    if (wasDismissed(key)) return null;

    const el = document.createElement('div');
    el.className = 'poc-banner poc-banner--reveal';
    const jokerSuffix = cfg.jokerWasAI ? ' 🤖' : ' 🃏';
    el.innerHTML = `
      <span class="poc-banner-icon">🎭</span>
      <span class="poc-banner-text">
        The masks are off — Mystery Player was <b>${cfg.mpName}</b>,
        and Joker was <b>${cfg.jokerName}</b>${jokerSuffix}!
      </span>
      <button class="poc-banner-close" aria-label="Dismiss">✕</button>
    `;
    el.querySelector('.poc-banner-close').addEventListener('click', () => {
      markDismissed(key);
      el.remove();
    });
    return el;
  }

  function init() {
    const anyActive = ANNOUNCE_CONFIG.winnerDeclared.active || ANNOUNCE_CONFIG.mpJokerReveal.active;
    if (!anyActive) return;

    injectStyles();

    const stack = document.createElement('div');
    stack.className = 'poc-banner-stack';

    let addedAny = false;

    if (ANNOUNCE_CONFIG.winnerDeclared.active) {
      const b = buildWinnerBanner(ANNOUNCE_CONFIG.winnerDeclared);
      if (b) { stack.appendChild(b); addedAny = true; }
    }
    if (ANNOUNCE_CONFIG.mpJokerReveal.active) {
      const b = buildRevealBanner(ANNOUNCE_CONFIG.mpJokerReveal);
      if (b) { stack.appendChild(b); addedAny = true; }
    }

    if (!addedAny) return;

    document.body.insertBefore(stack, document.body.firstChild);

    // Fire confetti once per page load if either banner is showing
    fireConfetti();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
