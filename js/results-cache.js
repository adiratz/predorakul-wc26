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

// const RESULTS_CACHE = {};

const RESULTS_CACHE = {
  "1": {
    "result": {
      "winner": "Mexico",
      "score": "3-0",
      "scorers": "RANGEL RAUL, SANCHEZ JORGE, FIDALGO ALVARO",
      "aetScore": "",
      "etScorers": "",
      "pensScore": ""
    },
    "players": {
      "Joker": {
        "winner": "South Africa",
        "score": "2-2",
        "scorers": "CHAVEZ LUIS, GIMENEZ SANTIAGO, MAKHANYA OLWETHU, OWN GOAL",
        "aetScore": "",
        "etScorers": "",
        "pensScore": "",
        "points": 0,
        "ppTier": ""
      },
      "Test1": {
        "winner": "Mexico",
        "score": "2-1",
        "scorers": "OWN GOAL, RANGEL RAUL, WILLIAMS RONWEN",
        "aetScore": "",
        "etScorers": "",
        "pensScore": "",
        "points": 5,
        "ppTier": ""
      },
      "Test2": {
        "winner": "Draw",
        "score": "1-1",
        "scorers": "OCHOA GUILLERMO, MODIBA AUBREY",
        "aetScore": "",
        "etScorers": "",
        "pensScore": "",
        "points": 0,
        "ppTier": ""
      }
    }
  },
  "2": {
    "result": {
      "winner": "Czechia",
      "score": "1-2",
      "scorers": "KIM SEUNGGYU, ZIMA DAVID, KREJCI LADISLAV",
      "aetScore": "",
      "etScorers": "",
      "pensScore": ""
    },
    "players": {
      "Joker": {
        "winner": "Czechia",
        "score": "1-0",
        "scorers": "CASTROP JENS",
        "aetScore": "",
        "etScorers": "",
        "pensScore": "",
        "points": 3,
        "ppTier": ""
      },
      "Test1": {
        "winner": "South Korea",
        "score": "",
        "scorers": "SON HEUNGMIN",
        "aetScore": "",
        "etScorers": "",
        "pensScore": "",
        "points": 0,
        "ppTier": ""
      },
      "Test2": {
        "winner": "Draw",
        "score": "3-3",
        "scorers": "KIM MINJAE, LEE GIHYUK, LEE HANBEOM, CHORY TOMAS, VISINSKY DENIS, ZELENY JAROSLAV",
        "aetScore": "",
        "etScorers": "",
        "pensScore": "",
        "points": 0,
        "ppTier": ""
      }
    }
  },
  "3": {
    "result": {
      "winner": "Canada",
      "score": "2-0",
      "scorers": "JOHNSTON ALISTAIR, LARIN CYLE",
      "aetScore": "",
      "etScorers": "",
      "pensScore": ""
    },
    "players": {
      "Test1": {
        "winner": "Draw",
        "score": "",
        "scorers": "",
        "aetScore": "",
        "etScorers": "",
        "pensScore": "",
        "points": 0,
        "ppTier": ""
      },
      "Test2": {
        "winner": "Canada",
        "score": "1-0",
        "scorers": "LARIN CYLE",
        "aetScore": "",
        "etScorers": "",
        "pensScore": "",
        "points": 5,
        "ppTier": ""
      }
    }
  },
  "4": {
    "result": {
      "winner": "Draw",
      "score": "1-1",
      "scorers": "RICHARDS CHRIS, FERNANDEZ GATITO",
      "aetScore": "",
      "etScorers": "",
      "pensScore": ""
    },
    "players": {
      "Test1": {
        "winner": "Draw",
        "score": "4-4",
        "scorers": "SCALLY JOE, BRADY CHRIS, BERHALTER SEBASTIAN, BALOGUN FOLARIN, OWN GOAL, PITTA ISIDRO, ARCE ALEX, SOSA RAMON",
        "aetScore": "",
        "etScorers": "",
        "pensScore": "",
        "points": 3,
        "ppTier": ""
      },
      "Test2": {
        "winner": "United States",
        "score": "",
        "scorers": "REYNA GIOVANNI, ROBINSON ANTONEE, MCKENNIE WESTON",
        "aetScore": "",
        "etScorers": "",
        "pensScore": "",
        "points": 0,
        "ppTier": ""
      }
    }
  },
  "8": {
    "result": {
      "winner": "Switzerland",
      "score": "1-3",
      "scorers": "ABDULAZIZ HATEM, XHAKA GRANIT, XHAKA GRANIT, XHAKA GRANIT",
      "aetScore": "",
      "etScorers": "",
      "pensScore": ""
    },
    "players": {
      "Test1": {
        "winner": "Switzerland",
        "score": "1-3",
        "scorers": "ABDULAZIZ HATEM, XHAKA GRANIT, XHAKA GRANIT, XHAKA GRANIT",
        "aetScore": "",
        "etScorers": "",
        "pensScore": "",
        "points": 21,
        "ppTier": "Silver"
      },
      "Test2": {
        "winner": "Switzerland",
        "score": "3-1",
        "scorers": "KARIM BOUDIAF, LUCAS MENDES, KELLER MARVIN",
        "aetScore": "",
        "etScorers": "",
        "pensScore": "",
        "points": 3,
        "ppTier": ""
      }
    }
  },
  "73": {
    "result": {
      "winner": "2A",
      "score": "1-1",
      "scorers": "OWN GOAL, OWN GOAL",
      "aetScore": "2-1",
      "etScorers": "OWN GOAL",
      "pensScore": ""
    },
    "players": {
      "Test1": {
        "winner": "2A",
        "score": "1-1",
        "scorers": "OWN GOAL, OWN GOAL",
        "aetScore": "2-1",
        "etScorers": "OWN GOAL",
        "pensScore": "",
        "points": 26,
        "ppTier": "Golden"
      }
    }
  }
};
