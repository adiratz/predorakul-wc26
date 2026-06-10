// ============================================================
// PREDICT-KNOCKOUT.JS
// Overrides buildPredictionForm() for knockout matches (ID > 72)
// Key difference from group stage:
//   - No Draw option in winner selector
//   - AET fields appear automatically when 90 min score is level
//   - Pens fields appear automatically when AET score is still level
//   - AET (Y/N) and Pens (Y/N) are derived and written automatically
//   - No Y/N toggles shown to the player
//
// Load AFTER app.js and predict.html scripts.
// Group stage logic in predict.html is completely untouched.
// ============================================================

// ── Override buildPredictionForm for knockout matches ─────────
// predict.html calls buildPredictionForm(matchId, home, away, squad, pred, locked, isKnockout)
// When isKnockout is true this file's version takes over

const _originalBuildPredictionForm = buildPredictionForm;

const buildPredictionForm = function(matchId, home, away, squad, pred, locked, isKnockout) {
  if (!isKnockout) {
    return _originalBuildPredictionForm(matchId, home, away, squad, pred, locked, false);
  }

  // ── Knockout form ─────────────────────────────────────────
  const homePlayers = squad?.home?.players || [];
  const awayPlayers = squad?.away?.players || [];
  const dis = locked ? 'disabled' : '';

  const homeScore   = pred.homeScore   !== undefined && pred.homeScore   !== '' ? pred.homeScore   : '';
  const awayScore   = pred.awayScore   !== undefined && pred.awayScore   !== '' ? pred.awayScore   : '';
  const winner      = pred.winner || '';
  const homeScoreAET = pred.homeScoreAET !== undefined && pred.homeScoreAET !== '' ? pred.homeScoreAET : '';
  const awayScoreAET = pred.awayScoreAET !== undefined && pred.awayScoreAET !== '' ? pred.awayScoreAET : '';
  const homePensScore = pred.homePensScore !== undefined && pred.homePensScore !== '' ? pred.homePensScore : '';
  const awayPensScore = pred.awayPensScore !== undefined && pred.awayPensScore !== '' ? pred.awayPensScore : '';

  // Derive AET and Pens visibility from existing saved predictions
  const aetVisible  = ko_isLevelScore(homeScore, awayScore);
  const pensVisible = aetVisible && ko_isLevelScore(homeScoreAET, awayScoreAET) &&
                      homeScoreAET !== '' && awayScoreAET !== '';

  // ── Section: Winner (who goes through overall) ────────────
  const winnerHtml = `
    <div class="pred-section">
      <div class="pred-section-title">Who goes through?</div>
      <p style="font-size:0.78rem;color:var(--text3);margin-bottom:10px;margin-top:-4px;">
        Pick the team that advances — regardless of whether it takes 90 mins, extra time or penalties.
      </p>
      <div class="winner-selector" style="grid-template-columns:1fr 1fr;">
        <input type="radio" class="winner-option" name="winner-${matchId}"
          id="w-home-${matchId}" value="${escHtml(home)}"
          ${winner === home ? 'checked' : ''} ${dis}
          onchange="ko_onWinnerChange(${matchId})">
        <label for="w-home-${matchId}">${escHtml(home)}</label>
        <input type="radio" class="winner-option" name="winner-${matchId}"
          id="w-away-${matchId}" value="${escHtml(away)}"
          ${winner === away ? 'checked' : ''} ${dis}
          onchange="ko_onWinnerChange(${matchId})">
        <label for="w-away-${matchId}">${escHtml(away)}</label>
      </div>
    </div>`;

  // ── Section: 90 min scoreline ─────────────────────────────
  const scoreHtml = `
    <div class="pred-section">
      <div class="pred-section-title">Scoreline at 90 mins</div>
      <p style="font-size:0.78rem;color:var(--text3);margin-bottom:8px;margin-top:-4px;">
        A level score (1-1, 2-2 etc.) means you predict the game goes to extra time.
      </p>
      <div class="score-inputs">
        <input type="number" class="form-input score-input" id="hs-${matchId}"
          min="0" max="20" value="${homeScore}" placeholder="0" ${dis}
          oninput="ko_onScoreChange(${matchId})">
        <span class="score-separator">–</span>
        <input type="number" class="form-input score-input" id="as-${matchId}"
          min="0" max="20" value="${awayScore}" placeholder="0" ${dis}
          oninput="ko_onScoreChange(${matchId})">
      </div>
      <div style="font-size:0.78rem;color:var(--text3);margin-top:6px;">
        ${escHtml(home)} &nbsp;–&nbsp; ${escHtml(away)}
      </div>
    </div>`;

  // ── Section: 90 min goalscorers ───────────────────────────
  const goalscorerHtml = `
    <div class="pred-section">
      <div class="pred-section-title">Goalscorers at 90 mins</div>
      <div class="goalscorer-grid">
        <div>
          <div class="goalscorer-team-label">${escHtml(home)}</div>
          <div class="goalscorer-slots" id="home-slots-${matchId}">
            ${buildGoalscorerSlots(matchId, 'home', homeScore, homePlayers, pred.homeGoalscorers || [], locked)}
          </div>
        </div>
        <div>
          <div class="goalscorer-team-label">${escHtml(away)}</div>
          <div class="goalscorer-slots" id="away-slots-${matchId}">
            ${buildGoalscorerSlots(matchId, 'away', awayScore, awayPlayers, pred.awayGoalscorers || [], locked)}
          </div>
        </div>
      </div>
    </div>`;

  // ── Section: AET (auto-shown when 90 min score is level) ──
  const aetHtml = `
    <div class="pred-section pred-section--aet${aetVisible ? '' : ' hidden'}"
         id="ko-aet-section-${matchId}">
      <div class="pred-section-title pred-section-title--aet">
        ⏱ Extra Time — Score at 120 mins (cumulative)
      </div>
      <p style="font-size:0.78rem;color:var(--text3);margin-bottom:8px;margin-top:-4px;">
        If the game is still level at 120 mins you predict it goes to penalties.
      </p>
      <div class="score-inputs">
        <input type="number" class="form-input score-input" id="haet-${matchId}"
          min="0" max="20" value="${homeScoreAET}" placeholder="0" ${dis}
          oninput="ko_onAETScoreChange(${matchId})">
        <span class="score-separator">–</span>
        <input type="number" class="form-input score-input" id="aaet-${matchId}"
          min="0" max="20" value="${awayScoreAET}" placeholder="0" ${dis}
          oninput="ko_onAETScoreChange(${matchId})">
      </div>
      <div style="font-size:0.78rem;color:var(--text3);margin-top:6px;">
        ${escHtml(home)} &nbsp;–&nbsp; ${escHtml(away)} &nbsp;at 120 mins
      </div>
      <div class="goalscorer-grid" style="margin-top:14px;">
        <div>
          <div class="goalscorer-team-label">${escHtml(home)} ET scorers</div>
          <div class="goalscorer-slots" id="home-aet-slots-${matchId}">
            ${ko_buildAETSlots(matchId, 'home', homeScoreAET, awayScoreAET, homeScore, awayScore, homePlayers, pred.homeGoalscorersAET || [], locked)}
          </div>
        </div>
        <div>
          <div class="goalscorer-team-label">${escHtml(away)} ET scorers</div>
          <div class="goalscorer-slots" id="away-aet-slots-${matchId}">
            ${ko_buildAETSlots(matchId, 'away', homeScoreAET, awayScoreAET, homeScore, awayScore, awayPlayers, pred.awayGoalscorersAET || [], locked)}
          </div>
        </div>
      </div>
    </div>`;

  // ── Section: Penalties (auto-shown when AET score is level) ──
  const pensHtml = `
    <div class="pred-section pred-section--pens${pensVisible ? '' : ' hidden'}"
         id="ko-pens-section-${matchId}">
      <div class="pred-section-title pred-section-title--pens">
        🥅 Penalty Shootout Score
      </div>
      <p style="font-size:0.78rem;color:var(--text3);margin-bottom:8px;margin-top:-4px;">
        Shootout score only, e.g. 5-4.
      </p>
      <div class="score-inputs">
        <input type="number" class="form-input score-input" id="hpens-${matchId}"
          min="0" max="20" value="${homePensScore}" placeholder="4" ${dis}>
        <span class="score-separator">–</span>
        <input type="number" class="form-input score-input" id="apens-${matchId}"
          min="0" max="20" value="${awayPensScore}" placeholder="3" ${dis}>
      </div>
      <div style="font-size:0.75rem;color:var(--text3);margin-top:6px;">
        ${escHtml(home)} &nbsp;–&nbsp; ${escHtml(away)}
      </div>
    </div>`;

  // ── Save bar ──────────────────────────────────────────────
  const saveBar = locked ? `
    <div class="match-save-bar">
      <span class="save-status" style="color:var(--red)">🔒 Match locked — no more changes allowed</span>
    </div>` : `
    <div class="match-save-bar">
      <span class="save-status" id="status-${matchId}"></span>
      <button class="btn btn--primary" onclick="savePrediction(${matchId})">
        Save Prediction
      </button>
    </div>`;

  return winnerHtml + scoreHtml + goalscorerHtml + aetHtml + pensHtml + saveBar;
}

// ── Knockout: AET goalscorer slots ────────────────────────────
// Shows slots for goals scored specifically in ET
// (AET cumulative score minus 90 min score = ET goals per team)
function ko_buildAETSlots(matchId, side, homeAET, awayAET, home90, away90, players, existing, locked) {
  const aetHome = parseInt(homeAET) || 0;
  const aetAway = parseInt(awayAET) || 0;
  const reg90Home = parseInt(home90) || 0;
  const reg90Away = parseInt(away90) || 0;

  const count = side === 'home'
    ? Math.max(0, aetHome - reg90Home)
    : Math.max(0, aetAway - reg90Away);

  if (count === 0) {
    return `<div style="color:var(--text3);font-size:0.82rem;">
      ${homeAET !== '' && awayAET !== '' ? 'No ET goals for this team' : 'Enter AET score above'}
    </div>`;
  }

  const dis = locked ? 'disabled' : '';
  let html = '';
  for (let i = 0; i < count && i < 4; i++) {
    html += `
      <div class="goalscorer-slot">
        <span class="slot-number">${i + 1}</span>
        <select class="form-select" id="${side}-aet-scorer-${matchId}-${i}" ${dis}>
          ${buildScorerOptions(players)}
        </select>
      </div>`;
  }

  // Restore existing values after render
  setTimeout(() => {
    for (let i = 0; i < count && i < 4; i++) {
      const el = document.getElementById(`${side}-aet-scorer-${matchId}-${i}`);
      if (el && existing[i]) el.value = existing[i];
    }
  }, 0);

  return html;
}

// ── Knockout: derive AET/Pens from scores ─────────────────────
function ko_isLevelScore(hs, as) {
  if (hs === '' || as === '' || hs === undefined || as === undefined) return false;
  const h = parseInt(hs);
  const a = parseInt(as);
  return !isNaN(h) && !isNaN(a) && h === a;
}

function ko_deriveAET(matchId) {
  const hs = document.getElementById(`hs-${matchId}`)?.value ?? '';
  const as = document.getElementById(`as-${matchId}`)?.value ?? '';
  return ko_isLevelScore(hs, as) ? 'Y' : 'N';
}

function ko_derivePens(matchId) {
  if (ko_deriveAET(matchId) !== 'Y') return 'N';
  const haet = document.getElementById(`haet-${matchId}`)?.value ?? '';
  const aaet = document.getElementById(`aaet-${matchId}`)?.value ?? '';
  if (haet === '' || aaet === '') return 'N';
  return ko_isLevelScore(haet, aaet) ? 'Y' : 'N';
}

// ── Knockout: score change handler ───────────────────────────
function ko_onScoreChange(matchId) {
  const hs = document.getElementById(`hs-${matchId}`)?.value || '';
  const as = document.getElementById(`as-${matchId}`)?.value || '';
  const fixture = allFixtures.find(f => f.matchId == matchId);
  const locked = fixture ? isLocked(fixture.kickoffUTC) : true;
  const homePlayers = getPlayersForMatch(matchId, 'home');
  const awayPlayers = getPlayersForMatch(matchId, 'away');

  // Rebuild 90 min goalscorer slots
  const homeSlots = document.getElementById(`home-slots-${matchId}`);
  const awaySlots = document.getElementById(`away-slots-${matchId}`);
  if (homeSlots) homeSlots.innerHTML = buildGoalscorerSlots(matchId, 'home', hs, homePlayers, [], locked);
  if (awaySlots) awaySlots.innerHTML = buildGoalscorerSlots(matchId, 'away', as, awayPlayers, [], locked);

  // Show/hide AET section based on level score
  const aetSection = document.getElementById(`ko-aet-section-${matchId}`);
  if (aetSection) {
    const isLevel = ko_isLevelScore(hs, as);
    aetSection.classList.toggle('hidden', !isLevel);
    if (!isLevel) {
      // Clear AET values when score is no longer level
      const haet = document.getElementById(`haet-${matchId}`);
      const aaet = document.getElementById(`aaet-${matchId}`);
      if (haet) haet.value = '';
      if (aaet) aaet.value = '';
      // Hide pens too
      const pensSection = document.getElementById(`ko-pens-section-${matchId}`);
      if (pensSection) pensSection.classList.add('hidden');
    }
  }
}

// ── Knockout: AET score change handler ───────────────────────
function ko_onAETScoreChange(matchId) {
  const haet = document.getElementById(`haet-${matchId}`)?.value || '';
  const aaet = document.getElementById(`aaet-${matchId}`)?.value || '';
  const hs = document.getElementById(`hs-${matchId}`)?.value || '0';
  const as = document.getElementById(`as-${matchId}`)?.value || '0';
  const fixture = allFixtures.find(f => f.matchId == matchId);
  const locked = fixture ? isLocked(fixture.kickoffUTC) : true;
  const homePlayers = getPlayersForMatch(matchId, 'home');
  const awayPlayers = getPlayersForMatch(matchId, 'away');

  // Rebuild AET goalscorer slots
  const homeAETSlots = document.getElementById(`home-aet-slots-${matchId}`);
  const awayAETSlots = document.getElementById(`away-aet-slots-${matchId}`);
  if (homeAETSlots) homeAETSlots.innerHTML = ko_buildAETSlots(matchId, 'home', haet, aaet, hs, as, homePlayers, [], locked);
  if (awayAETSlots) awayAETSlots.innerHTML = ko_buildAETSlots(matchId, 'away', haet, aaet, hs, as, awayPlayers, [], locked);

  // Show/hide pens based on level AET score
  const pensSection = document.getElementById(`ko-pens-section-${matchId}`);
  if (pensSection) {
    const goesPens = ko_isLevelScore(haet, aaet) && haet !== '' && aaet !== '';
    pensSection.classList.toggle('hidden', !goesPens);
    if (!goesPens) {
      const hp = document.getElementById(`hpens-${matchId}`);
      const ap = document.getElementById(`apens-${matchId}`);
      if (hp) hp.value = '';
      if (ap) ap.value = '';
    }
  }
}

// ── Knockout: winner change handler ──────────────────────────
function ko_onWinnerChange(matchId) {
  // No UI changes needed — winner selection is independent
  // Just clear status message
  const statusEl = document.getElementById(`status-${matchId}`);
  if (statusEl) statusEl.textContent = '';
}

// ── Override savePrediction for knockout matches ──────────────
// Wraps the original savePrediction to auto-derive AET/Pens
const _originalSavePrediction = savePrediction;

const savePrediction = function(matchId) {
  const fixture = allFixtures.find(f => f.matchId == matchId);
  const isKnockout = matchId > 72;

  if (!isKnockout) {
    return _originalSavePrediction(matchId);
  }

  // ── Knockout save flow ────────────────────────────────────
  if (fixture && isLocked(fixture.kickoffUTC)) {
    showToast('Match has kicked off — no changes allowed', 'error');
    return;
  }

  // Gather winner
  const winnerRadios = document.querySelectorAll(`input[name="winner-${matchId}"]`);
  let winner = '';
  winnerRadios.forEach(r => { if (r.checked) winner = r.value; });

  if (!winner) {
    showToast('Please select who goes through', 'error');
    return;
  }

  // Gather 90 min scores
  const homeScore = document.getElementById(`hs-${matchId}`)?.value || '';
  const awayScore = document.getElementById(`as-${matchId}`)?.value || '';

  // Gather 90 min goalscorers
  const homeScoreNum = parseInt(homeScore) || 0;
  const awayScoreNum = parseInt(awayScore) || 0;
  const homeGoalscorers = [];
  const awayGoalscorers = [];
  for (let i = 0; i < homeScoreNum; i++) {
    const el = document.getElementById(`home-scorer-${matchId}-${i}`);
    homeGoalscorers.push(el ? el.value : '');
  }
  for (let i = 0; i < awayScoreNum; i++) {
    const el = document.getElementById(`away-scorer-${matchId}-${i}`);
    awayGoalscorers.push(el ? el.value : '');
  }

  // Derive AET and Pens from scorelines
  const aet = ko_deriveAET(matchId);
  const pens = ko_derivePens(matchId);

  // Gather AET fields
  let homeScoreAET = '', awayScoreAET = '';
  let homeGoalscorersAET = [], awayGoalscorersAET = [];
  let homePensScore = '', awayPensScore = '';

  if (aet === 'Y') {
    homeScoreAET = document.getElementById(`haet-${matchId}`)?.value || '';
    awayScoreAET = document.getElementById(`aaet-${matchId}`)?.value || '';

    const homeAETCount = Math.max(0, (parseInt(homeScoreAET) || 0) - homeScoreNum);
    const awayAETCount = Math.max(0, (parseInt(awayScoreAET) || 0) - awayScoreNum);

    for (let i = 0; i < homeAETCount && i < 4; i++) {
      const el = document.getElementById(`home-aet-scorer-${matchId}-${i}`);
      homeGoalscorersAET.push(el ? el.value : '');
    }
    for (let i = 0; i < awayAETCount && i < 4; i++) {
      const el = document.getElementById(`away-aet-scorer-${matchId}-${i}`);
      awayGoalscorersAET.push(el ? el.value : '');
    }

    if (pens === 'Y') {
      homePensScore = document.getElementById(`hpens-${matchId}`)?.value || '';
      awayPensScore = document.getElementById(`apens-${matchId}`)?.value || '';
    }
  }

  // Validation
  if (homeScore === '' || awayScore === '') {
    showToast('Please enter a scoreline', 'error');
    return;
  }

  // Goalscorers must match predicted score
  const expectedHome = parseInt(homeScore) || 0;
  const expectedAway = parseInt(awayScore) || 0;
  const filledHome = homeGoalscorers.filter(s => s !== '').length;
  const filledAway = awayGoalscorers.filter(s => s !== '').length;

  if (filledHome < expectedHome) {
    showToast(`Please select all ${expectedHome} ${escHtml(fixture.home)} goalscorer${expectedHome > 1 ? 's' : ''}`, 'error');
    return;
  }
  if (filledAway < expectedAway) {
    showToast(`Please select all ${expectedAway} ${escHtml(fixture.away)} goalscorer${expectedAway > 1 ? 's' : ''}`, 'error');
    return;
  }

  // Penalty score validation — check directly if fields are filled
  if (homePensScore !== '' && awayPensScore !== '') {
    const hp = parseInt(homePensScore);
    const ap = parseInt(awayPensScore);

    // Scores must be different — draws impossible in shootout
    if (hp === ap) {
      showToast('Penalty shootout cannot end level — one team must win', 'error');
      return;
    }

    // Winning team in shootout must match overall winner
    if (fixture) {
      const homeWins = hp > ap;
      if (winner === fixture.home && !homeWins) {
        showToast(`Penalty score must favour ${escHtml(fixture.home)} to match your predicted winner`, 'error');
        return;
      }
      if (winner === fixture.away && homeWins) {
        showToast(`Penalty score must favour ${escHtml(fixture.away)} to match your predicted winner`, 'error');
        return;
      }
    }
  }

  const statusEl = document.getElementById(`status-${matchId}`);
  if (statusEl) { statusEl.textContent = 'Saving...'; statusEl.className = 'save-status'; }

  API.post({
    action: 'savePrediction',
    matchId,
    prediction: {
      winner, homeScore, awayScore,
      homeGoalscorers, awayGoalscorers,
      aet,                  // auto-derived: 'Y' if level score, 'N' otherwise
      homeScoreAET, awayScoreAET,
      homeGoalscorersAET, awayGoalscorersAET,
      pens,                 // auto-derived: 'Y' if AET also level, 'N' otherwise
      homePensScore, awayPensScore
    }
  }).then(res => {
    if (res.success) {
      showToast('Prediction saved! ⚽', 'success');
      if (statusEl) { statusEl.textContent = '✓ Saved'; statusEl.className = 'save-status save-status--success'; }

      // Update local cache
      allPredictions[matchId] = {
        winner, homeScore, awayScore, homeGoalscorers, awayGoalscorers,
        aet, homeScoreAET, awayScoreAET,
        homeGoalscorersAET, awayGoalscorersAET,
        pens, homePensScore, awayPensScore
      };

      // Update card visual
      const card = document.getElementById(`match-${matchId}`);
      if (card) card.classList.add('match-card--saved');
      const badge = card?.querySelector('.match-status');
      if (badge) { badge.textContent = '✓ Saved'; badge.className = 'match-status match-status--saved'; }

    } else {
      if (res.locked) {
        showToast('Match has kicked off — no changes allowed', 'error');
      } else {
        showToast(res.error || 'Failed to save', 'error');
      }
      if (statusEl) { statusEl.textContent = '✗ Error'; statusEl.className = 'save-status save-status--error'; }
    }
  }).catch(() => {
    showToast('Connection error. Please try again.', 'error');
    if (statusEl) { statusEl.textContent = '✗ Connection error'; statusEl.className = 'save-status save-status--error'; }
  });
}
