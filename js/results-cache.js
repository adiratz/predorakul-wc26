// ============================================================
// RESULTS-CACHE.JS
// Frozen match data — populated matchday by matchday
// by running exportMatchdayCache() in Apps Script
// and pasting the output here.
//
// HOW TO UPDATE:
// 1. Enter results in Sheet
// 2. Run calculateAllScores() and updateScoreboard()
// 3. Run exportMatchdayCache() in Scoring.gs
// 4. Copy the JSON from the execution log
// 5. Replace the RESULTS_CACHE value below with the new JSON
// 6. Commit to GitHub
//
// Format:
// RESULTS_CACHE[matchId] = {
//   result: { winner, homeScore, awayScore, scorers, aetScore, etScorers, pensScore },
//   players: { playerName: { winner, homeScore, awayScore, scorers, aetScore, etScorers, pensScore, points } }
// }
// ============================================================

const RESULTS_CACHE = {};
