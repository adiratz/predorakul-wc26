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
  ""1"": {
    ""result"": {
      ""winner"": ""Mexico"",
      ""score"": ""2-0"",
      ""scorers"": ""QUINONES JULIAN, JIMENEZ RAUL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-1"",
        ""scorers"": ""JIMENEZ RAUL, VASQUEZ JOHAN, FOSTER LYLE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-0"",
        ""scorers"": ""JIMENEZ RAUL, GIMENEZ SANTIAGO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-0"",
        ""scorers"": ""JIMENEZ RAUL, QUINONES JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 17,
        ""ppTier"": ""Silver""
      },
      ""Tejasva"": {
        ""winner"": ""Mexico"",
        ""score"": ""1-0"",
        ""scorers"": ""JIMENEZ RAUL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-0"",
        ""scorers"": ""JIMENEZ RAUL, VASQUEZ JOHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-0"",
        ""scorers"": ""VASQUEZ JOHAN, JIMENEZ RAUL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-0"",
        ""scorers"": ""JIMENEZ RAUL, CHAVEZ MATEO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-0"",
        ""scorers"": ""JIMENEZ RAUL, MONTES CESAR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      }
    }
  },
  ""2"": {
    ""result"": {
      ""winner"": ""South Korea"",
      ""score"": ""2-1"",
      ""scorers"": ""HWANG INBEOM, OH HYEONGYU, KREJCI LADISLAV"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""SON HEUNGMIN, SCHICK PATRIK"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""HWANG HEECHAN, SON HEUNGMIN, CHORY TOMAS, SCHICK PATRIK"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""LEE KANGIN, SON HEUNGMIN, SULC PAVEL, SCHICK PATRIK"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""SON HEUNGMIN, SCHICK PATRIK"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""SON HEUNGMIN, SCHICK PATRIK"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""South Korea"",
        ""score"": ""1-0"",
        ""scorers"": ""SON HEUNGMIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""South Korea"",
        ""score"": ""3-1"",
        ""scorers"": ""SON HEUNGMIN, LEE KANGIN, LEE KANGIN, SCHICK PATRIK"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""HWANG HEECHAN, KREJCI LADISLAV"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      }
    }
  },
  ""3"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""1-1"",
      ""scorers"": ""LARIN CYLE, LUKIC JOVO"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Canada"",
        ""score"": ""2-0"",
        ""scorers"": ""DAVID JONATHAN, BUCHANAN TAJON"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Canada"",
        ""score"": ""2-1"",
        ""scorers"": ""OLUWASEYI TANI, DAVID JONATHAN, DEMIROVIC ERMEDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Canada"",
        ""score"": ""2-1"",
        ""scorers"": ""DAVID JONATHAN, BUCHANAN TAJON, DEMIROVIC ERMEDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Canada"",
        ""score"": ""2-0"",
        ""scorers"": ""DAVID JONATHAN, LARIN CYLE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Canada"",
        ""score"": ""1-0"",
        ""scorers"": ""DAVID JONATHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Bosnia And Herzegovina"",
        ""score"": ""0-1"",
        ""scorers"": ""DZEKO EDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Canada"",
        ""score"": ""3-0"",
        ""scorers"": ""DAVID JONATHAN, LARIN CYLE, LARIN CYLE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Canada"",
        ""score"": ""2-1"",
        ""scorers"": ""DAVID JONATHAN, LARIN CYLE, DZEKO EDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      }
    }
  },
  ""4"": {
    ""result"": {
      ""winner"": ""United States"",
      ""score"": ""4-1"",
      ""scorers"": ""OWN GOAL, BALOGUN FOLARIN, BALOGUN FOLARIN, REYNA GIOVANNI, MAURICIO"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""United States"",
        ""score"": ""3-1"",
        ""scorers"": ""MCKENNIE WESTON, BALOGUN FOLARIN, DEST SERGINO, ENCISO JULIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""United States"",
        ""score"": ""3-1"",
        ""scorers"": ""DEST SERGINO, BALOGUN FOLARIN, PULISIC CHRISTIAN, ENCISO JULIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""United States"",
        ""score"": ""4-2"",
        ""scorers"": ""BALOGUN FOLARIN, MCKENNIE WESTON, PEPI RICARDO, PULISIC CHRISTIAN, ENCISO JULIO, ALMIRON MIGUEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""United States"",
        ""score"": ""1-0"",
        ""scorers"": ""PULISIC CHRISTIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""United States"",
        ""score"": ""2-0"",
        ""scorers"": ""PULISIC CHRISTIAN, PEPI RICARDO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""United States"",
        ""score"": ""2-1"",
        ""scorers"": ""BALOGUN FOLARIN, DEST SERGINO, SANABRIA ANTONIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""United States"",
        ""score"": ""2-1"",
        ""scorers"": ""PULISIC CHRISTIAN, PEPI RICARDO, ALMIRON MIGUEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""United States"",
        ""score"": ""2-0"",
        ""scorers"": ""PEPI RICARDO, PULISIC CHRISTIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""5"": {
    ""result"": {
      ""winner"": ""Scotland"",
      ""score"": ""0-1"",
      ""scorers"": ""MCGINN JOHN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Scotland"",
        ""score"": ""0-3"",
        ""scorers"": ""ADAMS CHE, MCTOMINAY SCOTT, SHANKLAND LAWRENCE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Scotland"",
        ""score"": ""0-3"",
        ""scorers"": ""MCTOMINAY SCOTT, SHANKLAND LAWRENCE, ADAMS CHE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Scotland"",
        ""score"": ""0-3"",
        ""scorers"": ""MCGINN JOHN, ADAMS CHE, SHANKLAND LAWRENCE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""NAZON DUCKENS, MCTOMINAY SCOTT"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Scotland"",
        ""score"": ""0-4"",
        ""scorers"": ""ADAMS CHE, ADAMS CHE, HIRST GEORGE, MCTOMINAY SCOTT"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Scotland"",
        ""score"": ""0-3"",
        ""scorers"": ""ADAMS CHE, SHANKLAND LAWRENCE, MCTOMINAY SCOTT"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Scotland"",
        ""score"": ""0-1"",
        ""scorers"": ""MCTOMINAY SCOTT"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Scotland"",
        ""score"": ""0-1"",
        ""scorers"": ""SHANKLAND LAWRENCE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      }
    }
  },
  ""6"": {
    ""result"": {
      ""winner"": ""Australia"",
      ""score"": ""2-0"",
      ""scorers"": ""IRANKUNDA NESTORY, METCALFE CONNOR"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""METCALFE CONNOR, AKTURKOGLU KEREM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Türkiye"",
        ""score"": ""0-1"",
        ""scorers"": ""GULER ARDA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Türkiye"",
        ""score"": ""0-2"",
        ""scorers"": ""CALHANOGLU HAKAN, AKTURKOGLU KEREM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""VOLPATO CRISTIAN, GULER ARDA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Türkiye"",
        ""score"": ""0-2"",
        ""scorers"": ""AKTURKOGLU KEREM, GUL DENIZ"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Türkiye"",
        ""score"": ""0-1"",
        ""scorers"": ""SOYUNCU CAGLAR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Türkiye"",
        ""score"": ""1-2"",
        ""scorers"": ""YENGI TETE, GULER ARDA, GULER ARDA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""7"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""1-1"",
      ""scorers"": ""VINICIUS JUNIOR, SAIBARI ISMAEL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-1"",
        ""scorers"": ""VINICIUS JUNIOR, IGOR THIAGO, DIAZ BRAHIM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Brazil"",
        ""score"": ""3-1"",
        ""scorers"": ""GABRIEL MAGALHAES, VINICIUS JUNIOR, VINICIUS JUNIOR, AMRABAT SOFYAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Brazil"",
        ""score"": ""3-1"",
        ""scorers"": ""VINICIUS JUNIOR, ENDRICK, IGOR THIAGO, SAIBARI ISMAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 4,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-1"",
        ""scorers"": ""VINICIUS JUNIOR, IGOR THIAGO, DIAZ BRAHIM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-1"",
        ""scorers"": ""VINICIUS JUNIOR, CASEMIRO, DIAZ BRAHIM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Brazil"",
        ""score"": ""3-1"",
        ""scorers"": ""IGOR THIAGO, VINICIUS JUNIOR, BRUNO GUIMARAES, EL KAABI AYOUB"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Brazil"",
        ""score"": ""3-0"",
        ""scorers"": ""VINICIUS JUNIOR, NEYMAR JR, CASEMIRO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Brazil"",
        ""score"": ""3-1"",
        ""scorers"": ""VINICIUS JUNIOR, RAPHINHA, MATHEUS CUNHA, DIAZ BRAHIM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      }
    }
  },
  ""8"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""1-1"",
      ""scorers"": ""OWN GOAL, EMBOLO BREEL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Switzerland"",
        ""score"": ""0-2"",
        ""scorers"": ""NDOYE DAN, EMBOLO BREEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Switzerland"",
        ""score"": ""0-3"",
        ""scorers"": ""NDOYE DAN, EMBOLO BREEL, XHAKA GRANIT"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Switzerland"",
        ""score"": ""0-3"",
        ""scorers"": ""EMBOLO BREEL, NDOYE DAN, EMBOLO BREEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Switzerland"",
        ""score"": ""0-2"",
        ""scorers"": ""EMBOLO BREEL, AMDOUNI ZEKI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Switzerland"",
        ""score"": ""0-3"",
        ""scorers"": ""EMBOLO BREEL, XHAKA GRANIT, NDOYE DAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Switzerland"",
        ""score"": ""0-3"",
        ""scorers"": ""EMBOLO BREEL, NDOYE DAN, NDOYE DAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Switzerland"",
        ""score"": ""1-2"",
        ""scorers"": ""ALMOEZ ALI, AMDOUNI ZEKI, EMBOLO BREEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Switzerland"",
        ""score"": ""0-3"",
        ""scorers"": ""EMBOLO BREEL, NDOYE DAN, XHAKA GRANIT"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      }
    }
  },
  ""9"": {
    ""result"": {
      ""winner"": ""Ivory Coast"",
      ""score"": ""1-0"",
      ""scorers"": ""DIALLO AMAD"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""WAHI ELYE, YEBOAH JOHN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Draw"",
        ""score"": ""0-0"",
        ""scorers"": """",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Draw"",
        ""score"": ""0-0"",
        ""scorers"": """",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Ecuador"",
        ""score"": ""0-1"",
        ""scorers"": ""VALENCIA ENNER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Ecuador"",
        ""score"": ""1-2"",
        ""scorers"": ""GUESSAND EVANN, VALENCIA ENNER, PAEZ KENDRY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""PEPE NICOLAS, VALENCIA ENNER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""ADINGRA SIMON, VALENCIA ENNER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""DIOMANDE YAN, VALENCIA ENNER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""10"": {
    ""result"": {
      ""winner"": ""Germany"",
      ""score"": ""7-1"",
      ""scorers"": ""NMECHA FELIX, SCHLOTTERBECK NICO, HAVERTZ KAI, MUSIALA JAMAL, BROWN NATHANIEL, UNDAV DENIZ, HAVERTZ KAI, COMENENCIA LIVANO"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Germany"",
        ""score"": ""4-0"",
        ""scorers"": ""HAVERTZ KAI, WIRTZ FLORIAN, UNDAV DENIZ, SANE LEROY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Germany"",
        ""score"": ""2-0"",
        ""scorers"": ""WIRTZ FLORIAN, HAVERTZ KAI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Germany"",
        ""score"": ""3-0"",
        ""scorers"": ""HAVERTZ KAI, SANE LEROY, WIRTZ FLORIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Germany"",
        ""score"": ""3-0"",
        ""scorers"": ""HAVERTZ KAI, WIRTZ FLORIAN, MUSIALA JAMAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Germany"",
        ""score"": ""5-0"",
        ""scorers"": ""UNDAV DENIZ, UNDAV DENIZ, KARL LENNART, WIRTZ FLORIAN, MUSIALA JAMAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Germany"",
        ""score"": ""6-0"",
        ""scorers"": ""HAVERTZ KAI, RUEDIGER ANTONIO, WIRTZ FLORIAN, MUSIALA JAMAL, BEIER MAXIMILIAN, HAVERTZ KAI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Germany"",
        ""score"": ""3-0"",
        ""scorers"": ""WIRTZ FLORIAN, WIRTZ FLORIAN, WIRTZ FLORIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Germany"",
        ""score"": ""4-0"",
        ""scorers"": ""HAVERTZ KAI, WIRTZ FLORIAN, MUSIALA JAMAL, SANE LEROY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""11"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""2-2"",
      ""scorers"": ""VAN DIJK VIRGIL, SUMMERVILLE CRYSENCIO, NAKAMURA KEITO, KAMADA DAICHI"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Netherlands"",
        ""score"": ""2-1"",
        ""scorers"": ""GAKPO CODY, MALEN DONYELL, KUBO TAKEFUSA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Netherlands"",
        ""score"": ""2-1"",
        ""scorers"": ""MALEN DONYELL, VAN DIJK VIRGIL, KUBO TAKEFUSA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""GAKPO CODY, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""GAKPO CODY, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""GAKPO CODY, KUBO TAKEFUSA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Netherlands"",
        ""score"": ""2-0"",
        ""scorers"": ""DEPAY MEMPHIS, VAN DIJK VIRGIL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Japan"",
        ""score"": ""0-1"",
        ""scorers"": ""MAEDA DAIZEN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""GAKPO CODY, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""12"": {
    ""result"": {
      ""winner"": ""Sweden"",
      ""score"": ""5-1"",
      ""scorers"": ""AYARI YASIN, ISAK ALEXANDER, GYOKERES VIKTOR, SVANBERG MATTIAS, AYARI YASIN, REKIK OMAR"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Sweden"",
        ""score"": ""2-0"",
        ""scorers"": ""GYOKERES VIKTOR, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Sweden"",
        ""score"": ""2-0"",
        ""scorers"": ""GYOKERES VIKTOR, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Sweden"",
        ""score"": ""3-1"",
        ""scorers"": ""GYOKERES VIKTOR, ELANGA ANTHONY, GYOKERES VIKTOR, SAAD ELIAS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Sweden"",
        ""score"": ""2-1"",
        ""scorers"": ""ISAK ALEXANDER, GYOKERES VIKTOR, MEJBRI HANNIBAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Sweden"",
        ""score"": ""1-0"",
        ""scorers"": ""GYOKERES VIKTOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Sweden"",
        ""score"": ""2-0"",
        ""scorers"": ""GYOKERES VIKTOR, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Sweden"",
        ""score"": ""2-0"",
        ""scorers"": ""ISAK ALEXANDER, GYOKERES VIKTOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Sweden"",
        ""score"": ""2-1"",
        ""scorers"": ""GYOKERES VIKTOR, ISAK ALEXANDER, ACHOURI ELIAS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""13"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""1-1"",
      ""scorers"": ""ABDULELAH ALAMRI, ARAUJO MAXI"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Uruguay"",
        ""score"": ""0-2"",
        ""scorers"": ""VINAS FEDERICO, NUNEZ DARWIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Uruguay"",
        ""score"": ""0-1"",
        ""scorers"": ""NUNEZ DARWIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Saudi Arabia"",
        ""score"": ""2-1"",
        ""scorers"": ""NASSER ALDAWSARI, FERAS ALBRIKAN, NUNEZ DARWIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Uruguay"",
        ""score"": ""1-2"",
        ""scorers"": ""SALEM ALDAWSARI, NUNEZ DARWIN, VALVERDE FEDERICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Uruguay"",
        ""score"": ""0-2"",
        ""scorers"": ""DE ARRASCAETA GIORGIAN, NUNEZ DARWIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Uruguay"",
        ""score"": ""0-4"",
        ""scorers"": ""NUNEZ DARWIN, UGARTE MANUEL, VALVERDE FEDERICO, VINAS FEDERICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Uruguay"",
        ""score"": ""0-2"",
        ""scorers"": ""NUNEZ DARWIN, VALVERDE FEDERICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Uruguay"",
        ""score"": ""0-1"",
        ""scorers"": ""NUNEZ DARWIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""14"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""0-0"",
      ""scorers"": """",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Spain"",
        ""score"": ""4-0"",
        ""scorers"": ""RUIZ FABIAN, TORRES FERRAN, OYARZABAL MIKEL, GAVI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Spain"",
        ""score"": ""5-1"",
        ""scorers"": ""TORRES FERRAN, GAVI, OYARZABAL MIKEL, RUIZ FABIAN, OLMO DANI, KEVIN PINA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Spain"",
        ""score"": ""6-0"",
        ""scorers"": ""OYARZABAL MIKEL, TORRES FERRAN, TORRES FERRAN, GAVI, OLMO DANI, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Spain"",
        ""score"": ""3-0"",
        ""scorers"": ""OYARZABAL MIKEL, YAMAL LAMINE, OYARZABAL MIKEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Spain"",
        ""score"": ""6-0"",
        ""scorers"": ""OYARZABAL MIKEL, OYARZABAL MIKEL, YAMAL LAMINE, OWN GOAL, TORRES FERRAN, MUNOZ VICTOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Spain"",
        ""score"": ""5-0"",
        ""scorers"": ""PEDRI, TORRES FERRAN, OYARZABAL MIKEL, WILLIAMS NICO, PEDRI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Spain"",
        ""score"": ""3-0"",
        ""scorers"": ""TORRES FERRAN, YAMAL LAMINE, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Spain"",
        ""score"": ""4-0"",
        ""scorers"": ""OYARZABAL MIKEL, OYARZABAL MIKEL, TORRES FERRAN, PEDRI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""15"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""2-2"",
      ""scorers"": ""REZAEIAN RAMIN, MOHEBBI MOHAMMAD, JUST ELIJAH, JUST ELIJAH"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Iran"",
        ""score"": ""1-0"",
        ""scorers"": ""TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Iran"",
        ""score"": ""2-0"",
        ""scorers"": ""TAREMI MEHDI, MOHEBBI MOHAMMAD"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Iran"",
        ""score"": ""2-0"",
        ""scorers"": ""YOUSEFI ARYA, TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Iran"",
        ""score"": ""2-1"",
        ""scorers"": ""TAREMI MEHDI, MOGHANLOO SHAHRIYAR, WOOD CHRIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Iran"",
        ""score"": ""1-0"",
        ""scorers"": ""TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Iran"",
        ""score"": ""2-0"",
        ""scorers"": ""TAREMI MEHDI, YOUSEFI ARYA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Iran"",
        ""score"": ""1-0"",
        ""scorers"": ""TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Iran"",
        ""score"": ""1-0"",
        ""scorers"": ""TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""16"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""1-1"",
      ""scorers"": ""OWN GOAL, EMAM ASHOUR"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-1"",
        ""scorers"": ""TROSSARD LEANDRO, DE KETELAERE CHARLES, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Belgium"",
        ""score"": ""3-1"",
        ""scorers"": ""DE KETELAERE CHARLES, TROSSARD LEANDRO, DOKU JEREMY, MOSTAFA ZICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Belgium"",
        ""score"": ""3-1"",
        ""scorers"": ""DE KETELAERE CHARLES, DOKU JEREMY, LUKAKU ROMELU, MOSTAFA ZICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-1"",
        ""scorers"": ""LUKAKU ROMELU, DE BRUYNE KEVIN, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Belgium"",
        ""score"": ""3-1"",
        ""scorers"": ""LUKAKU ROMELU, LUKEBAKIO DODI, DE BRUYNE KEVIN, OMAR MARMOUSH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Belgium"",
        ""score"": ""3-1"",
        ""scorers"": ""DOKU JEREMY, TROSSARD LEANDRO, TIELEMANS YOURI, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-1"",
        ""scorers"": ""LUKAKU ROMELU, DE BRUYNE KEVIN, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-1"",
        ""scorers"": ""DOKU JEREMY, DOKU JEREMY, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""17"": {
    ""result"": {
      ""winner"": ""France"",
      ""score"": ""3-1"",
      ""scorers"": ""MBAPPE KYLIAN, MBAPPE KYLIAN, BARCOLA BRADLEY, MBAYE IBRAHIM"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""France"",
        ""score"": ""3-1"",
        ""scorers"": ""MBAPPE KYLIAN, OLISE MICHAEL, DEMBELE OUSMANE, MANE SADIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""France"",
        ""score"": ""4-2"",
        ""scorers"": ""MBAPPE KYLIAN, DEMBELE OUSMANE, DOUE DESIRE, OLISE MICHAEL, JACKSON NICOLAS, MANE SADIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""France"",
        ""score"": ""4-2"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN, CHERKI RAYAN, OLISE MICHAEL, JACKSON NICOLAS, MANE SADIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""France"",
        ""score"": ""3-1"",
        ""scorers"": ""MBAPPE KYLIAN, DEMBELE OUSMANE, CHERKI RAYAN, MANE SADIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""France"",
        ""score"": ""3-0"",
        ""scorers"": ""MBAPPE KYLIAN, MBAPPE KYLIAN, DEMBELE OUSMANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""France"",
        ""score"": ""3-0"",
        ""scorers"": ""MBAPPE KYLIAN, MBAPPE KYLIAN, SALIBA WILLIAM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""France"",
        ""score"": ""4-0"",
        ""scorers"": ""MBAPPE KYLIAN, MBAPPE KYLIAN, DEMBELE OUSMANE, TCHOUAMENI AURELIEN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""France"",
        ""score"": ""2-1"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN, MANE SADIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""18"": {
    ""result"": {
      ""winner"": ""Norway"",
      ""score"": ""1-4"",
      ""scorers"": ""AYMEN HUSSEIN, HAALAND ERLING, HAALAND ERLING, OSTIGARD LEO, OWN GOAL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Norway"",
        ""score"": ""1-2"",
        ""scorers"": ""ALI ALHAMADI, HAALAND ERLING, NUSA ANTONIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Norway"",
        ""score"": ""1-4"",
        ""scorers"": ""YOUSSEF AMYN, HAALAND ERLING, HAALAND ERLING, ODEGAARD MARTIN, SORLOTH ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Norway"",
        ""score"": ""1-3"",
        ""scorers"": ""AYMEN HUSSEIN, HAALAND ERLING, HAALAND ERLING, SORLOTH ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Norway"",
        ""score"": ""1-2"",
        ""scorers"": ""AYMEN HUSSEIN, HAALAND ERLING, HAALAND ERLING"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Norway"",
        ""score"": ""0-2"",
        ""scorers"": ""STRAND LARSEN JORGEN, SORLOTH ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Norway"",
        ""score"": ""0-5"",
        ""scorers"": ""HAALAND ERLING, HAALAND ERLING, SORLOTH ALEXANDER, STRAND LARSEN JORGEN, NUSA ANTONIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Norway"",
        ""score"": ""0-4"",
        ""scorers"": ""HAALAND ERLING, HAALAND ERLING, SORLOTH ALEXANDER, ODEGAARD MARTIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Norway"",
        ""score"": ""0-3"",
        ""scorers"": ""HAALAND ERLING, HAALAND ERLING, SORLOTH ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""19"": {
    ""result"": {
      ""winner"": ""Argentina"",
      ""score"": ""3-0"",
      ""scorers"": ""MESSI LIONEL, MESSI LIONEL, MESSI LIONEL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-0"",
        ""scorers"": ""MESSI LIONEL, MARTINEZ LAUTARO, ALVAREZ JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-1"",
        ""scorers"": ""MARTINEZ LAUTARO, MESSI LIONEL, MAC ALLISTER ALEXIS, CHAIBI FARES"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Argentina"",
        ""score"": ""4-0"",
        ""scorers"": ""MESSI LIONEL, MARTINEZ LAUTARO, SIMEONE GIULIANO, ALVAREZ JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-1"",
        ""scorers"": ""MARTINEZ LAUTARO, MESSI LIONEL, ALVAREZ JULIAN, HADJ MOUSSA ANIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-0"",
        ""scorers"": ""SIMEONE GIULIANO, MESSI LIONEL, ALVAREZ JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-0"",
        ""scorers"": ""MESSI LIONEL, MARTINEZ LAUTARO, ALVAREZ JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-0"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, ALVAREZ JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Argentina"",
        ""score"": ""2-0"",
        ""scorers"": ""MESSI LIONEL, MARTINEZ LAUTARO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""20"": {
    ""result"": {
      ""winner"": ""Austria"",
      ""score"": ""3-1"",
      ""scorers"": ""SCHMID ROMANO, OWN GOAL, ARNAUTOVIC MARKO, ALI OLWAN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Austria"",
        ""score"": ""2-0"",
        ""scorers"": ""KALAJDZIC SASA, SABITZER MARCEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Draw"",
        ""score"": ""0-0"",
        ""scorers"": """",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Austria"",
        ""score"": ""2-1"",
        ""scorers"": ""KALAJDZIC SASA, ARNAUTOVIC MARKO, MOUSA ALTAMARI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Austria"",
        ""score"": ""2-1"",
        ""scorers"": ""SCHMID ROMANO, SABITZER MARCEL, MOUSA ALTAMARI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Austria"",
        ""score"": ""1-0"",
        ""scorers"": ""SABITZER MARCEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Austria"",
        ""score"": ""2-0"",
        ""scorers"": ""KALAJDZIC SASA, SABITZER MARCEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Austria"",
        ""score"": ""1-0"",
        ""scorers"": ""ARNAUTOVIC MARKO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Austria"",
        ""score"": ""2-0"",
        ""scorers"": ""BAUMGARTNER CHRISTOPH, ARNAUTOVIC MARKO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""21"": {
    ""result"": {
      ""winner"": ""England"",
      ""score"": ""4-2"",
      ""scorers"": ""KANE HARRY, KANE HARRY, BELLINGHAM JUDE, RASHFORD MARCUS, BATURINA MARTIN, MUSA PETAR"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""England"",
        ""score"": ""3-1"",
        ""scorers"": ""KANE HARRY, BELLINGHAM JUDE, KANE HARRY, MODRIC LUKA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""England"",
        ""score"": ""3-1"",
        ""scorers"": ""KANE HARRY, GORDON ANTHONY, MADUEKE NONI, PERISIC IVAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""GORDON ANTHONY, SUCIC PETAR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""England"",
        ""score"": ""2-1"",
        ""scorers"": ""KANE HARRY, GORDON ANTHONY, MUSA PETAR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""England"",
        ""score"": ""2-1"",
        ""scorers"": ""KANE HARRY, STONES JOHN, MODRIC LUKA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""England"",
        ""score"": ""3-0"",
        ""scorers"": ""KANE HARRY, KANE HARRY, BELLINGHAM JUDE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""KANE HARRY, KRAMARIC ANDREJ"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""England"",
        ""score"": ""2-1"",
        ""scorers"": ""KANE HARRY, BELLINGHAM JUDE, PERISIC IVAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""22"": {
    ""result"": {
      ""winner"": ""Ghana"",
      ""score"": ""1-0"",
      ""scorers"": ""YIRENKYI CALEB"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Panama"",
        ""score"": ""1-2"",
        ""scorers"": ""SEMENYO ANTOINE, WATERMAN CECILIO, RODRIGUEZ JOSE LUIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Panama"",
        ""score"": ""2-3"",
        ""scorers"": ""SEMENYO ANTOINE, AYEW JORDAN, RODRIGUEZ JOSE LUIS, OWN GOAL, FAJARDO JOSE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Ghana"",
        ""score"": ""3-1"",
        ""scorers"": ""SEMENYO ANTOINE, AYEW JORDAN, WILLIAMS INAKI, BARCENAS EDGAR YOEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""SEMENYO ANTOINE, WATERMAN CECILIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Ghana"",
        ""score"": ""1-0"",
        ""scorers"": ""SEMENYO ANTOINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""AYEW JORDAN, BARCENAS EDGAR YOEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Ghana"",
        ""score"": ""2-1"",
        ""scorers"": ""SEMENYO ANTOINE, AYEW JORDAN, DIAZ ISMAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Ghana"",
        ""score"": ""2-1"",
        ""scorers"": ""SEMENYO ANTOINE, AYEW JORDAN, RODRIGUEZ JOSE LUIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""23"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""1-1"",
      ""scorers"": ""JOAO NEVES, WISSA YOANE"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Portugal"",
        ""score"": ""2-0"",
        ""scorers"": ""BRUNO FERNANDES, CRISTIANO RONALDO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Portugal"",
        ""score"": ""5-1"",
        ""scorers"": ""BERNARDO SILVA, BRUNO FERNANDES, CRISTIANO RONALDO, CRISTIANO RONALDO, JOAO FELIX, WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Portugal"",
        ""score"": ""4-2"",
        ""scorers"": ""CRISTIANO RONALDO, BRUNO FERNANDES, FRANCISCO CONCEICAO, PEDRO NETO, WISSA YOANE, MBEMBA CHANCEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Portugal"",
        ""score"": ""3-1"",
        ""scorers"": ""CRISTIANO RONALDO, BRUNO FERNANDES, CRISTIANO RONALDO, WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Portugal"",
        ""score"": ""3-1"",
        ""scorers"": ""BRUNO FERNANDES, CRISTIANO RONALDO, CRISTIANO RONALDO, WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Portugal"",
        ""score"": ""3-0"",
        ""scorers"": ""BRUNO FERNANDES, CRISTIANO RONALDO, RAFAEL LEAO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Portugal"",
        ""score"": ""3-0"",
        ""scorers"": ""CRISTIANO RONALDO, CRISTIANO RONALDO, BERNARDO SILVA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Portugal"",
        ""score"": ""2-0"",
        ""scorers"": ""CRISTIANO RONALDO, BRUNO FERNANDES"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""24"": {
    ""result"": {
      ""winner"": ""Colombia"",
      ""score"": ""1-3"",
      ""scorers"": ""FAYZULLAEV ABBOSBEK, MUNOZ DANIEL, DIAZ LUIS, CAMPAZ JAMINTON"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-3"",
        ""scorers"": ""URUNOV OSTON, DIAZ LUIS, ARIAS JHON, SUAREZ LUIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Colombia"",
        ""score"": ""0-2"",
        ""scorers"": ""DIAZ LUIS, SUAREZ LUIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Colombia"",
        ""score"": ""0-3"",
        ""scorers"": ""ARIAS JHON, DIAZ LUIS, SUAREZ LUIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-2"",
        ""scorers"": ""SHOMURODOV ELDOR, RODRIGUEZ JAMES, DIAZ LUIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Colombia"",
        ""score"": ""0-3"",
        ""scorers"": ""SUAREZ LUIS, RODRIGUEZ JAMES, DIAZ LUIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-3"",
        ""scorers"": ""SHOMURODOV ELDOR, SUAREZ LUIS, DIAZ LUIS, RODRIGUEZ JAMES"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Colombia"",
        ""score"": ""0-2"",
        ""scorers"": ""DIAZ LUIS, RODRIGUEZ JAMES"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-2"",
        ""scorers"": ""SHOMURODOV ELDOR, DIAZ LUIS, RODRIGUEZ JAMES"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""25"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""1-1"",
      ""scorers"": ""SADILEK MICHAL, MOKOENA TEBOHO"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Czechia"",
        ""score"": ""1-0"",
        ""scorers"": ""SCHICK PATRIK"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Czechia"",
        ""score"": ""2-0"",
        ""scorers"": ""SCHICK PATRIK, SOUCEK TOMAS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Czechia"",
        ""score"": ""2-0"",
        ""scorers"": ""SCHICK PATRIK, KREJCI LADISLAV"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Czechia"",
        ""score"": ""2-1"",
        ""scorers"": ""SCHICK PATRIK, HLOZEK ADAM, MASEKO THAPELO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Czechia"",
        ""score"": ""2-0"",
        ""scorers"": ""SCHICK PATRIK, SCHICK PATRIK"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Czechia"",
        ""score"": ""3-0"",
        ""scorers"": ""KREJCI LADISLAV, SCHICK PATRIK, OWN GOAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Czechia"",
        ""score"": ""1-0"",
        ""scorers"": ""SCHICK PATRIK"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Czechia"",
        ""score"": ""2-1"",
        ""scorers"": ""KREJCI LADISLAV, SCHICK PATRIK, FOSTER LYLE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""26"": {
    ""result"": {
      ""winner"": ""Switzerland"",
      ""score"": ""4-1"",
      ""scorers"": ""MANZAMBI JOHAN, VARGAS RUBEN, MANZAMBI JOHAN, XHAKA GRANIT, MAHMIC ERMIN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""EMBOLO BREEL, NDOYE DAN, DZEKO EDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""EMBOLO BREEL, NDOYE DAN, DEMIROVIC ERMEDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""EMBOLO BREEL, NDOYE DAN, DZEKO EDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""EMBOLO BREEL, AMDOUNI ZEKI, DZEKO EDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-0"",
        ""scorers"": ""EMBOLO BREEL, XHAKA GRANIT"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""EMBOLO BREEL, OWN GOAL, LUKIC JOVO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-0"",
        ""scorers"": ""EMBOLO BREEL, AMDOUNI ZEKI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""NDOYE DAN, EMBOLO BREEL, LUKIC JOVO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""27"": {
    ""result"": {
      ""winner"": ""Canada"",
      ""score"": ""6-0"",
      ""scorers"": ""LARIN CYLE, DAVID JONATHAN, DAVID JONATHAN, SALIBA NATHAN, OWN GOAL, DAVID JONATHAN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Canada"",
        ""score"": ""2-1"",
        ""scorers"": ""LARIN CYLE, DAVID JONATHAN, YUSUF ABDURISAG"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Canada"",
        ""score"": ""2-0"",
        ""scorers"": ""OLUWASEYI TANI, BUCHANAN TAJON"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Canada"",
        ""score"": ""3-1"",
        ""scorers"": ""DAVID JONATHAN, LARIN CYLE, BUCHANAN TAJON, AKRAM AFIF"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Canada"",
        ""score"": ""3-1"",
        ""scorers"": ""DAVID JONATHAN, LARIN CYLE, BUCHANAN TAJON, AKRAM AFIF"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Canada"",
        ""score"": ""3-0"",
        ""scorers"": ""LARIN CYLE, DAVID JONATHAN, DAVID JONATHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Canada"",
        ""score"": ""3-1"",
        ""scorers"": ""LARIN CYLE, DAVID JONATHAN, OWN GOAL, OWN GOAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Qatar"",
        ""score"": ""0-1"",
        ""scorers"": ""AKRAM AFIF"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Canada"",
        ""score"": ""2-0"",
        ""scorers"": ""DAVID JONATHAN, LARIN CYLE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""28"": {
    ""result"": {
      ""winner"": ""Mexico"",
      ""score"": ""1-0"",
      ""scorers"": ""ROMO LUIS"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Mexico"",
        ""score"": ""3-2"",
        ""scorers"": ""JIMENEZ RAUL, QUINONES JULIAN, ALVARADO ROBERTO, SON HEUNGMIN, LEE KANGIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""JIMENEZ RAUL, QUINONES JULIAN, LEE JAESUNG, SON HEUNGMIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-0"",
        ""scorers"": ""QUINONES JULIAN, JIMENEZ RAUL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-1"",
        ""scorers"": ""JIMENEZ RAUL, QUINONES JULIAN, SON HEUNGMIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""JIMENEZ RAUL, QUINONES JULIAN, SON HEUNGMIN, SON HEUNGMIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""QUINONES JULIAN, JIMENEZ RAUL, HWANG INBEOM, SON HEUNGMIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-1"",
        ""scorers"": ""JIMENEZ RAUL, CHAVEZ LUIS, HWANG INBEOM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""JIMENEZ RAUL, SON HEUNGMIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""29"": {
    ""result"": {
      ""winner"": ""Brazil"",
      ""score"": ""3-0"",
      ""scorers"": ""MATHEUS CUNHA, MATHEUS CUNHA, VINICIUS JUNIOR"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Brazil"",
        ""score"": ""4-0"",
        ""scorers"": ""VINICIUS JUNIOR, MATHEUS CUNHA, RAPHINHA, CASEMIRO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Brazil"",
        ""score"": ""6-0"",
        ""scorers"": ""VINICIUS JUNIOR, RAPHINHA, LUCAS PAQUETA, CASEMIRO, MATHEUS CUNHA, GABRIEL MARTINELLI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Brazil"",
        ""score"": ""4-0"",
        ""scorers"": ""OWN GOAL, VINICIUS JUNIOR, MATHEUS CUNHA, RAPHINHA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Brazil"",
        ""score"": ""4-0"",
        ""scorers"": ""RAPHINHA, VINICIUS JUNIOR, VINICIUS JUNIOR, MATHEUS CUNHA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Brazil"",
        ""score"": ""5-1"",
        ""scorers"": ""OWN GOAL, VINICIUS JUNIOR, VINICIUS JUNIOR, CASEMIRO, MATHEUS CUNHA, ISIDOR WILSON"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Brazil"",
        ""score"": ""4-0"",
        ""scorers"": ""VINICIUS JUNIOR, LUCAS PAQUETA, IGOR THIAGO, MATHEUS CUNHA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-0"",
        ""scorers"": ""NEYMAR JR, VINICIUS JUNIOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Brazil"",
        ""score"": ""3-0"",
        ""scorers"": ""VINICIUS JUNIOR, RAPHINHA, VINICIUS JUNIOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      }
    }
  },
  ""30"": {
    ""result"": {
      ""winner"": ""Morocco"",
      ""score"": ""0-1"",
      ""scorers"": ""SAIBARI ISMAEL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Morocco"",
        ""score"": ""1-3"",
        ""scorers"": ""MCTOMINAY SCOTT, DIAZ BRAHIM, OUNAHI AZZEDINE, SAIBARI ISMAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Morocco"",
        ""score"": ""1-3"",
        ""scorers"": ""MCTOMINAY SCOTT, DIAZ BRAHIM, SAIBARI ISMAEL, BOUADDI AYYOUB"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Morocco"",
        ""score"": ""1-3"",
        ""scorers"": ""MCTOMINAY SCOTT, SAIBARI ISMAEL, EL KHANNOUSS BILAL, DIAZ BRAHIM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Morocco"",
        ""score"": ""0-2"",
        ""scorers"": ""DIAZ BRAHIM, EL KAABI AYOUB"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Morocco"",
        ""score"": ""0-2"",
        ""scorers"": ""SAIBARI ISMAEL, DIAZ BRAHIM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Morocco"",
        ""score"": ""1-2"",
        ""scorers"": ""ADAMS CHE, SAIBARI ISMAEL, DIAZ BRAHIM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Morocco"",
        ""score"": ""0-2"",
        ""scorers"": ""RAHIMI SOUFIANE, OUNAHI AZZEDINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Morocco"",
        ""score"": ""1-2"",
        ""scorers"": ""MCGINN JOHN, DIAZ BRAHIM, EL KAABI AYOUB"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""31"": {
    ""result"": {
      ""winner"": ""Paraguay"",
      ""score"": ""0-1"",
      ""scorers"": ""GALARZA MATIAS"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Türkiye"",
        ""score"": ""2-1"",
        ""scorers"": ""AKTURKOGLU KEREM, AKGUN YUNUS, ENCISO JULIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Türkiye"",
        ""score"": ""2-1"",
        ""scorers"": ""AKTURKOGLU KEREM, GULER ARDA, ENCISO JULIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Türkiye"",
        ""score"": ""3-1"",
        ""scorers"": ""GULER ARDA, AKTURKOGLU KEREM, YILDIZ KENAN, PITTA ISIDRO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""GULER ARDA, ENCISO JULIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Türkiye"",
        ""score"": ""2-0"",
        ""scorers"": ""GUL DENIZ, GULER ARDA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Türkiye"",
        ""score"": ""2-1"",
        ""scorers"": ""YILMAZ BARIS ALPER, AKTURKOGLU KEREM, MAURICIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Türkiye"",
        ""score"": ""2-0"",
        ""scorers"": ""AKTURKOGLU KEREM, YILDIZ KENAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Türkiye"",
        ""score"": ""2-1"",
        ""scorers"": ""GULER ARDA, CALHANOGLU HAKAN, ENCISO JULIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""32"": {
    ""result"": {
      ""winner"": ""United States"",
      ""score"": ""2-0"",
      ""scorers"": ""OWN GOAL, FREEMAN ALEX"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""United States"",
        ""score"": ""2-1"",
        ""scorers"": ""PEPI RICARDO, BALOGUN FOLARIN, TOURE MOHAMED"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""United States"",
        ""score"": ""3-1"",
        ""scorers"": ""BALOGUN FOLARIN, DEST SERGINO, MCKENNIE WESTON, LECKIE MATHEW"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""United States"",
        ""score"": ""3-1"",
        ""scorers"": ""DEST SERGINO, BALOGUN FOLARIN, MCKENNIE WESTON, VOLPATO CRISTIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""BALOGUN FOLARIN, PEPI RICARDO, TOURE MOHAMED, OKON-ENGSTLER PAUL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""United States"",
        ""score"": ""2-1"",
        ""scorers"": ""BALOGUN FOLARIN, PEPI RICARDO, TOURE MOHAMED"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""United States"",
        ""score"": ""2-1"",
        ""scorers"": ""BALOGUN FOLARIN, DEST SERGINO, IRANKUNDA NESTORY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""United States"",
        ""score"": ""3-1"",
        ""scorers"": ""BALOGUN FOLARIN, PULISIC CHRISTIAN, REYNA GIOVANNI, IRANKUNDA NESTORY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""United States"",
        ""score"": ""2-1"",
        ""scorers"": ""BALOGUN FOLARIN, TILLMAN MALIK, IRANKUNDA NESTORY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""33"": {
    ""result"": {
      ""winner"": ""Germany"",
      ""score"": ""2-1"",
      ""scorers"": ""UNDAV DENIZ, UNDAV DENIZ, KESSIE FRANCK"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Germany"",
        ""score"": ""3-1"",
        ""scorers"": ""HAVERTZ KAI, MUSIALA JAMAL, SANE LEROY, BONNY ANGE-YOAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Germany"",
        ""score"": ""5-2"",
        ""scorers"": ""HAVERTZ KAI, SANE LEROY, WIRTZ FLORIAN, UNDAV DENIZ, HAVERTZ KAI, DIOMANDE OUSMANE, KESSIE FRANCK"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Germany"",
        ""score"": ""4-2"",
        ""scorers"": ""HAVERTZ KAI, HAVERTZ KAI, MUSIALA JAMAL, SANE LEROY, DIOMANDE YAN, DIALLO AMAD"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Germany"",
        ""score"": ""2-0"",
        ""scorers"": ""HAVERTZ KAI, MUSIALA JAMAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Germany"",
        ""score"": ""4-0"",
        ""scorers"": ""HAVERTZ KAI, HAVERTZ KAI, SANE LEROY, MUSIALA JAMAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Germany"",
        ""score"": ""3-1"",
        ""scorers"": ""HAVERTZ KAI, WIRTZ FLORIAN, UNDAV DENIZ, DIOMANDE YAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Germany"",
        ""score"": ""4-0"",
        ""scorers"": ""HAVERTZ KAI, NMECHA FELIX, MUSIALA JAMAL, HAVERTZ KAI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Germany"",
        ""score"": ""3-1"",
        ""scorers"": ""HAVERTZ KAI, WIRTZ FLORIAN, MUSIALA JAMAL, DIALLO AMAD"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""34"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""0-0"",
      ""scorers"": """",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Ecuador"",
        ""score"": ""2-0"",
        ""scorers"": ""VALENCIA ENNER, YEBOAH JOHN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Ecuador"",
        ""score"": ""3-1"",
        ""scorers"": ""VALENCIA ENNER, ESTUPINAN PERVIS, PLATA GONZALO, BACUNA JUNINHO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Ecuador"",
        ""score"": ""4-1"",
        ""scorers"": ""VALENCIA ENNER, CAICEDO MOISES, PLATA GONZALO, YEBOAH JOHN, BACUNA JUNINHO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Ecuador"",
        ""score"": ""2-0"",
        ""scorers"": ""VALENCIA ENNER, PLATA GONZALO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Ecuador"",
        ""score"": ""2-0"",
        ""scorers"": ""VALENCIA ENNER, RODRIGUEZ KEVIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Ecuador"",
        ""score"": ""3-1"",
        ""scorers"": ""VALENCIA ENNER, ESTUPINAN PERVIS, CAICEDO MOISES, COMENENCIA LIVANO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Ecuador"",
        ""score"": ""2-0"",
        ""scorers"": ""VALENCIA ENNER, RODRIGUEZ KEVIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Ecuador"",
        ""score"": ""2-0"",
        ""scorers"": ""PAEZ KENDRY, VALENCIA ENNER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""35"": {
    ""result"": {
      ""winner"": ""Netherlands"",
      ""score"": ""5-1"",
      ""scorers"": ""BROBBEY BRIAN, BROBBEY BRIAN, GAKPO CODY, GAKPO CODY, SUMMERVILLE CRYSENCIO, ELANGA ANTHONY"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Netherlands"",
        ""score"": ""2-1"",
        ""scorers"": ""GAKPO CODY, MALEN DONYELL, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Netherlands"",
        ""score"": ""4-2"",
        ""scorers"": ""BROBBEY BRIAN, REIJNDERS TIJJANI, GAKPO CODY, MALEN DONYELL, ISAK ALEXANDER, GYOKERES VIKTOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Netherlands"",
        ""score"": ""3-2"",
        ""scorers"": ""GAKPO CODY, MALEN DONYELL, BROBBEY BRIAN, ISAK ALEXANDER, GYOKERES VIKTOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Netherlands"",
        ""score"": ""3-2"",
        ""scorers"": ""GAKPO CODY, DEPAY MEMPHIS, GAKPO CODY, ISAK ALEXANDER, GYOKERES VIKTOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Netherlands"",
        ""score"": ""3-1"",
        ""scorers"": ""GAKPO CODY, REIJNDERS TIJJANI, VAN DIJK VIRGIL, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""SUMMERVILLE CRYSENCIO, GAKPO CODY, GYOKERES VIKTOR, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 4,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""DEPAY MEMPHIS, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""DEPAY MEMPHIS, GAKPO CODY, ISAK ALEXANDER, GYOKERES VIKTOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      }
    }
  },
  ""36"": {
    ""result"": {
      ""winner"": ""Japan"",
      ""score"": ""0-4"",
      ""scorers"": ""KAMADA DAICHI, UEDA AYASE, UEDA AYASE, ITO JUNYA"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Japan"",
        ""score"": ""0-3"",
        ""scorers"": ""NAKAMURA KEITO, KAMADA DAICHI, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Japan"",
        ""score"": ""0-2"",
        ""scorers"": ""DOAN RITSU, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Japan"",
        ""score"": ""1-3"",
        ""scorers"": ""SAAD ELIAS, KAMADA DAICHI, UEDA AYASE, NAKAMURA KEITO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Japan"",
        ""score"": ""1-2"",
        ""scorers"": ""MEJBRI HANNIBAL, UEDA AYASE, KUBO TAKEFUSA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Japan"",
        ""score"": ""0-2"",
        ""scorers"": ""NAKAMURA KEITO, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Japan"",
        ""score"": ""0-2"",
        ""scorers"": ""MAEDA DAIZEN, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Japan"",
        ""score"": ""1-3"",
        ""scorers"": ""ACHOURI ELIAS, MAEDA DAIZEN, KUBO TAKEFUSA, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Japan"",
        ""score"": ""1-3"",
        ""scorers"": ""SAAD ELIAS, UEDA AYASE, DOAN RITSU, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""37"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""2-2"",
      ""scorers"": ""ARAUJO MAXI, CANOBBIO AGUSTIN, KEVIN PINA, HELIO VARELA"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Uruguay"",
        ""score"": ""2-0"",
        ""scorers"": ""VALVERDE FEDERICO, VINAS FEDERICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Cape Verde"",
        ""score"": ""0-1"",
        ""scorers"": ""GILSON BENCHIMOL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Uruguay"",
        ""score"": ""3-0"",
        ""scorers"": ""VALVERDE FEDERICO, ARAUJO MAXI, VINAS FEDERICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Uruguay"",
        ""score"": ""2-1"",
        ""scorers"": ""VALVERDE FEDERICO, VINAS FEDERICO, RYAN MENDES"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Uruguay"",
        ""score"": ""1-0"",
        ""scorers"": ""VINAS FEDERICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Uruguay"",
        ""score"": ""3-0"",
        ""scorers"": ""VALVERDE FEDERICO, ARAUJO MAXI, VINAS FEDERICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Uruguay"",
        ""score"": ""1-0"",
        ""scorers"": ""ARAUJO MAXI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Uruguay"",
        ""score"": ""2-0"",
        ""scorers"": ""NUNEZ DARWIN, VALVERDE FEDERICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""38"": {
    ""result"": {
      ""winner"": ""Spain"",
      ""score"": ""4-0"",
      ""scorers"": ""YAMAL LAMINE, OYARZABAL MIKEL, OYARZABAL MIKEL, OWN GOAL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Spain"",
        ""score"": ""4-0"",
        ""scorers"": ""YAMAL LAMINE, OYARZABAL MIKEL, OLMO DANI, BAENA ALEX"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Spain"",
        ""score"": ""4-0"",
        ""scorers"": ""OYARZABAL MIKEL, YAMAL LAMINE, YAMAL LAMINE, MERINO MIKEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Spain"",
        ""score"": ""3-0"",
        ""scorers"": ""OLMO DANI, OYARZABAL MIKEL, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Spain"",
        ""score"": ""3-0"",
        ""scorers"": ""YAMAL LAMINE, OYARZABAL MIKEL, OLMO DANI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Spain"",
        ""score"": ""3-0"",
        ""scorers"": ""YAMAL LAMINE, YAMAL LAMINE, RODRI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Spain"",
        ""score"": ""3-0"",
        ""scorers"": ""PEDRI, OYARZABAL MIKEL, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Spain"",
        ""score"": ""2-0"",
        ""scorers"": ""GAVI, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Spain"",
        ""score"": ""3-0"",
        ""scorers"": ""OYARZABAL MIKEL, OYARZABAL MIKEL, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      }
    }
  },
  ""39"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""0-0"",
      ""scorers"": """",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Belgium"",
        ""score"": ""3-1"",
        ""scorers"": ""DE BRUYNE KEVIN, LUKAKU ROMELU, TROSSARD LEANDRO, TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Belgium"",
        ""score"": ""3-1"",
        ""scorers"": ""SAELEMAEKERS ALEXIS, LUKAKU ROMELU, TROSSARD LEANDRO, TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Belgium"",
        ""score"": ""4-1"",
        ""scorers"": ""DE BRUYNE KEVIN, LUKAKU ROMELU, TROSSARD LEANDRO, SAELEMAEKERS ALEXIS, TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-1"",
        ""scorers"": ""LUKAKU ROMELU, DE BRUYNE KEVIN, TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Belgium"",
        ""score"": ""3-0"",
        ""scorers"": ""LUKAKU ROMELU, TROSSARD LEANDRO, FERNANDEZ-PARDO MATIAS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Belgium"",
        ""score"": ""3-0"",
        ""scorers"": ""LUKAKU ROMELU, DOKU JEREMY, TROSSARD LEANDRO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-1"",
        ""scorers"": ""LUKAKU ROMELU, DE BRUYNE KEVIN, TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-1"",
        ""scorers"": ""LUKAKU ROMELU, DE BRUYNE KEVIN, TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""40"": {
    ""result"": {
      ""winner"": ""Egypt"",
      ""score"": ""1-3"",
      ""scorers"": ""SURMAN FINN, MOHAMED SALAH, MOSTAFA ZICO, TREZEGUET"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Egypt"",
        ""score"": ""1-2"",
        ""scorers"": ""WOOD CHRIS, OMAR MARMOUSH, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Egypt"",
        ""score"": ""2-3"",
        ""scorers"": ""WOOD CHRIS, JUST ELIJAH, MOHAMED SALAH, OMAR MARMOUSH, MOSTAFA ZICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Egypt"",
        ""score"": ""1-3"",
        ""scorers"": ""JUST ELIJAH, MOSTAFA ZICO, OMAR MARMOUSH, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Egypt"",
        ""score"": ""0-1"",
        ""scorers"": ""MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Egypt"",
        ""score"": ""1-2"",
        ""scorers"": ""WOOD CHRIS, MOHAMED SALAH, OMAR MARMOUSH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Egypt"",
        ""score"": ""1-2"",
        ""scorers"": ""WOOD CHRIS, OMAR MARMOUSH, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Egypt"",
        ""score"": ""0-2"",
        ""scorers"": ""MOHAMED SALAH, MOHANAD LASHIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Egypt"",
        ""score"": ""1-2"",
        ""scorers"": ""WOOD CHRIS, MOHAMED SALAH, OMAR MARMOUSH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""41"": {
    ""result"": {
      ""winner"": ""Norway"",
      ""score"": ""3-2"",
      ""scorers"": ""HOLMGREN PEDERSEN MARCUS, HAALAND ERLING, HAALAND ERLING, SARR ISMAILA, SARR ISMAILA"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Norway"",
        ""score"": ""3-2"",
        ""scorers"": ""HAALAND ERLING, HAALAND ERLING, NUSA ANTONIO, JACKSON NICOLAS, MANE SADIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Draw"",
        ""score"": ""3-3"",
        ""scorers"": ""HAALAND ERLING, HAALAND ERLING, SORLOTH ALEXANDER, MANE SADIO, JACKSON NICOLAS, SARR ISMAILA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 6,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Norway"",
        ""score"": ""3-2"",
        ""scorers"": ""HAALAND ERLING, HAALAND ERLING, ODEGAARD MARTIN, JACKSON NICOLAS, SARR ISMAILA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 14,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Norway"",
        ""score"": ""2-1"",
        ""scorers"": ""HAALAND ERLING, HAALAND ERLING, MANE SADIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Norway"",
        ""score"": ""1-0"",
        ""scorers"": ""HAALAND ERLING"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Norway"",
        ""score"": ""3-1"",
        ""scorers"": ""NUSA ANTONIO, HAALAND ERLING, HAALAND ERLING, MANE SADIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Norway"",
        ""score"": ""2-1"",
        ""scorers"": ""ODEGAARD MARTIN, HAALAND ERLING, SARR ISMAILA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Norway"",
        ""score"": ""2-1"",
        ""scorers"": ""HAALAND ERLING, HAALAND ERLING, MANE SADIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""42"": {
    ""result"": {
      ""winner"": ""France"",
      ""score"": ""3-0"",
      ""scorers"": ""MBAPPE KYLIAN, MBAPPE KYLIAN, DEMBELE OUSMANE"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""France"",
        ""score"": ""5-0"",
        ""scorers"": ""MBAPPE KYLIAN, OLISE MICHAEL, DEMBELE OUSMANE, MBAPPE KYLIAN, BARCOLA BRADLEY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""France"",
        ""score"": ""6-1"",
        ""scorers"": ""MBAPPE KYLIAN, MBAPPE KYLIAN, MBAPPE KYLIAN, DEMBELE OUSMANE, OLISE MICHAEL, BARCOLA BRADLEY, AYMEN HUSSEIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""France"",
        ""score"": ""5-1"",
        ""scorers"": ""MBAPPE KYLIAN, BARCOLA BRADLEY, MBAPPE KYLIAN, MBAPPE KYLIAN, OLISE MICHAEL, AYMEN HUSSEIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""France"",
        ""score"": ""5-0"",
        ""scorers"": ""MBAPPE KYLIAN, MBAPPE KYLIAN, MBAPPE KYLIAN, OLISE MICHAEL, DEMBELE OUSMANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""France"",
        ""score"": ""3-0"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN, MBAPPE KYLIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 19,
        ""ppTier"": ""Silver""
      },
      ""Joker"": {
        ""winner"": ""France"",
        ""score"": ""5-0"",
        ""scorers"": ""MBAPPE KYLIAN, MBAPPE KYLIAN, DEMBELE OUSMANE, SALIBA WILLIAM, BARCOLA BRADLEY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""France"",
        ""score"": ""3-0"",
        ""scorers"": ""MBAPPE KYLIAN, MBAPPE KYLIAN, MBAPPE KYLIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""France"",
        ""score"": ""3-0"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN, OLISE MICHAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      }
    }
  },
  ""43"": {
    ""result"": {
      ""winner"": ""Argentina"",
      ""score"": ""2-0"",
      ""scorers"": ""MESSI LIONEL, MESSI LIONEL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-1"",
        ""scorers"": ""MESSI LIONEL, MARTINEZ LAUTARO, ALVAREZ JULIAN, GREGORITSCH MICHAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-1"",
        ""scorers"": ""MESSI LIONEL, MARTINEZ LAUTARO, ALMADA THIAGO, SABITZER MARCEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-1"",
        ""scorers"": ""ALMADA THIAGO, MESSI LIONEL, ALVAREZ JULIAN, SABITZER MARCEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Argentina"",
        ""score"": ""2-1"",
        ""scorers"": ""MESSI LIONEL, MARTINEZ LAUTARO, SCHMID ROMANO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Argentina"",
        ""score"": ""2-0"",
        ""scorers"": ""MESSI LIONEL, MARTINEZ LAUTARO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-1"",
        ""scorers"": ""MESSI LIONEL, MARTINEZ LAUTARO, DE PAUL RODRIGO, ARNAUTOVIC MARKO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-0"",
        ""scorers"": ""DE PAUL RODRIGO, MESSI LIONEL, MESSI LIONEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-0"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, ALVAREZ JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""44"": {
    ""result"": {
      ""winner"": ""Algeria"",
      ""score"": ""1-2"",
      ""scorers"": ""NIZAR ALRASHDAN, BENBOUALI NADHIR, GOUIRI AMINE"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""ALI OLWAN, GOUIRI AMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Algeria"",
        ""score"": ""1-2"",
        ""scorers"": ""ALI OLWAN, CHAIBI FARES, GOUIRI AMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Algeria"",
        ""score"": ""1-3"",
        ""scorers"": ""ALI OLWAN, GOUIRI AMINE, GOUIRI AMINE, HADJ MOUSSA ANIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Algeria"",
        ""score"": ""1-2"",
        ""scorers"": ""MOUSA ALTAMARI, AMOURA MOHAMED, GOUIRI AMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Algeria"",
        ""score"": ""0-1"",
        ""scorers"": ""MAHREZ RIYAD"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Algeria"",
        ""score"": ""0-2"",
        ""scorers"": ""GOUIRI AMINE, CHAIBI FARES"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Algeria"",
        ""score"": ""0-1"",
        ""scorers"": ""AMOURA MOHAMED"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""45"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""0-0"",
      ""scorers"": """",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""England"",
        ""score"": ""4-1"",
        ""scorers"": ""KANE HARRY, KANE HARRY, BELLINGHAM JUDE, GORDON ANTHONY, AYEW JORDAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""England"",
        ""score"": ""6-1"",
        ""scorers"": ""KANE HARRY, KANE HARRY, BELLINGHAM JUDE, MADUEKE NONI, OREILLY NICO, SAKA BUKAYO, SEMENYO ANTOINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""England"",
        ""score"": ""4-1"",
        ""scorers"": ""KANE HARRY, KANE HARRY, BELLINGHAM JUDE, MADUEKE NONI, WILLIAMS INAKI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""England"",
        ""score"": ""4-1"",
        ""scorers"": ""KANE HARRY, KANE HARRY, MADUEKE NONI, OWN GOAL, SEMENYO ANTOINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""England"",
        ""score"": ""3-1"",
        ""scorers"": ""KANE HARRY, RASHFORD MARCUS, KANE HARRY, WILLIAMS INAKI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""England"",
        ""score"": ""3-0"",
        ""scorers"": ""KANE HARRY, KANE HARRY, RASHFORD MARCUS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""England"",
        ""score"": ""3-0"",
        ""scorers"": ""BELLINGHAM JUDE, KANE HARRY, KANE HARRY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""England"",
        ""score"": ""3-1"",
        ""scorers"": ""BELLINGHAM JUDE, KANE HARRY, KANE HARRY, SEMENYO ANTOINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""46"": {
    ""result"": {
      ""winner"": ""Croatia"",
      ""score"": ""0-1"",
      ""scorers"": ""BUDIMIR ANTE"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Croatia"",
        ""score"": ""0-2"",
        ""scorers"": ""MUSA PETAR, PERISIC IVAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Croatia"",
        ""score"": ""0-2"",
        ""scorers"": ""MODRIC LUKA, MUSA PETAR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Croatia"",
        ""score"": ""0-3"",
        ""scorers"": ""MUSA PETAR, PERISIC IVAN, PASALIC MARCO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Croatia"",
        ""score"": ""0-2"",
        ""scorers"": ""MUSA PETAR, BATURINA MARTIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Croatia"",
        ""score"": ""1-2"",
        ""scorers"": ""MARTINEZ CRISTIAN, MUSA PETAR, KRAMARIC ANDREJ"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Croatia"",
        ""score"": ""0-3"",
        ""scorers"": ""MUSA PETAR, BATURINA MARTIN, KOVACIC MATEO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Croatia"",
        ""score"": ""0-2"",
        ""scorers"": ""BATURINA MARTIN, MUSA PETAR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Croatia"",
        ""score"": ""1-2"",
        ""scorers"": ""WATERMAN CECILIO, KRAMARIC ANDREJ, MUSA PETAR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""47"": {
    ""result"": {
      ""winner"": ""Portugal"",
      ""score"": ""5-0"",
      ""scorers"": ""CRISTIANO RONALDO, NUNO MENDES, CRISTIANO RONALDO, OWN GOAL, RAFAEL LEAO"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Portugal"",
        ""score"": ""3-0"",
        ""scorers"": ""BRUNO FERNANDES, CRISTIANO RONALDO, PEDRO NETO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Portugal"",
        ""score"": ""2-0"",
        ""scorers"": ""JOAO FELIX, CRISTIANO RONALDO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Portugal"",
        ""score"": ""4-0"",
        ""scorers"": ""CRISTIANO RONALDO, BRUNO FERNANDES, JOAO FELIX, GONCALO RAMOS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Portugal"",
        ""score"": ""3-0"",
        ""scorers"": ""JOAO FELIX, CRISTIANO RONALDO, PEDRO NETO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Portugal"",
        ""score"": ""4-1"",
        ""scorers"": ""CRISTIANO RONALDO, CRISTIANO RONALDO, CRISTIANO RONALDO, JOAO FELIX, SHOMURODOV ELDOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Portugal"",
        ""score"": ""2-1"",
        ""scorers"": ""NUNO MENDES, CRISTIANO RONALDO, URUNOV OSTON"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Portugal"",
        ""score"": ""3-0"",
        ""scorers"": ""BRUNO FERNANDES, CRISTIANO RONALDO, JOAO FELIX"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Portugal"",
        ""score"": ""3-1"",
        ""scorers"": ""CRISTIANO RONALDO, BRUNO FERNANDES, RAFAEL LEAO, SHOMURODOV ELDOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""48"": {
    ""result"": {
      ""winner"": ""Colombia"",
      ""score"": ""1-0"",
      ""scorers"": ""MUNOZ DANIEL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Colombia"",
        ""score"": ""3-1"",
        ""scorers"": ""DIAZ LUIS, SUAREZ LUIS, ARIAS SANTIAGO, WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Colombia"",
        ""score"": ""2-1"",
        ""scorers"": ""DIAZ LUIS, SUAREZ LUIS, WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Colombia"",
        ""score"": ""3-1"",
        ""scorers"": ""DIAZ LUIS, ARIAS JHON, HERNANDEZ CUCHO, WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Colombia"",
        ""score"": ""2-1"",
        ""scorers"": ""DIAZ LUIS, RODRIGUEZ JAMES, WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-0"",
        ""scorers"": ""DIAZ LUIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Colombia"",
        ""score"": ""3-1"",
        ""scorers"": ""SUAREZ LUIS, DIAZ LUIS, ARIAS JHON, WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Colombia"",
        ""score"": ""2-1"",
        ""scorers"": ""DIAZ LUIS, RODRIGUEZ JAMES, WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Colombia"",
        ""score"": ""2-0"",
        ""scorers"": ""DIAZ LUIS, RODRIGUEZ JAMES"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""49"": {
    ""result"": {
      ""winner"": ""Brazil"",
      ""score"": ""0-3"",
      ""scorers"": ""VINICIUS JUNIOR, VINICIUS JUNIOR, MATHEUS CUNHA"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Brazil"",
        ""score"": ""1-3"",
        ""scorers"": ""SHANKLAND LAWRENCE, VINICIUS JUNIOR, MATHEUS CUNHA, VINICIUS JUNIOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Brazil"",
        ""score"": ""0-2"",
        ""scorers"": ""VINICIUS JUNIOR, MATHEUS CUNHA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Brazil"",
        ""score"": ""1-4"",
        ""scorers"": ""MCGINN JOHN, VINICIUS JUNIOR, MATHEUS CUNHA, VINICIUS JUNIOR, ENDRICK"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Brazil"",
        ""score"": ""0-3"",
        ""scorers"": ""VINICIUS JUNIOR, VINICIUS JUNIOR, RAYAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Brazil"",
        ""score"": ""0-3"",
        ""scorers"": ""VINICIUS JUNIOR, VINICIUS JUNIOR, MATHEUS CUNHA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 19,
        ""ppTier"": ""Silver""
      },
      ""Joker"": {
        ""winner"": ""Brazil"",
        ""score"": ""0-4"",
        ""scorers"": ""VINICIUS JUNIOR, MATHEUS CUNHA, RAYAN, MATHEUS CUNHA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Brazil"",
        ""score"": ""0-2"",
        ""scorers"": ""VINICIUS JUNIOR, MATHEUS CUNHA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Brazil"",
        ""score"": ""0-3"",
        ""scorers"": ""VINICIUS JUNIOR, RAPHINHA, MATHEUS CUNHA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      }
    }
  },
  ""50"": {
    ""result"": {
      ""winner"": ""Morocco"",
      ""score"": ""4-2"",
      ""scorers"": ""HAKIMI ACHRAF, SAIBARI ISMAEL, RAHIMI SOUFIANE, YASSINE GESSIME, ISIDOR WILSON, OWN GOAL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Morocco"",
        ""score"": ""2-0"",
        ""scorers"": ""EL KAABI AYOUB, SAIBARI ISMAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Morocco"",
        ""score"": ""2-0"",
        ""scorers"": ""SAIBARI ISMAEL, EL KAABI AYOUB"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Morocco"",
        ""score"": ""4-0"",
        ""scorers"": ""SAIBARI ISMAEL, SAIBARI ISMAEL, DIAZ BRAHIM, EL KHANNOUSS BILAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Morocco"",
        ""score"": ""2-0"",
        ""scorers"": ""DIAZ BRAHIM, EL KAABI AYOUB"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Morocco"",
        ""score"": ""3-0"",
        ""scorers"": ""TALBI CHEMSDINE, HAKIMI ACHRAF, SAIBARI ISMAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Morocco"",
        ""score"": ""3-0"",
        ""scorers"": ""SAIBARI ISMAEL, DIAZ BRAHIM, EL KAABI AYOUB"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Morocco"",
        ""score"": ""1-0"",
        ""scorers"": ""SAIBARI ISMAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Morocco"",
        ""score"": ""2-1"",
        ""scorers"": ""SAIBARI ISMAEL, EL KAABI AYOUB, NAZON DUCKENS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""51"": {
    ""result"": {
      ""winner"": ""Switzerland"",
      ""score"": ""2-1"",
      ""scorers"": ""VARGAS RUBEN, MANZAMBI JOHAN, DAVID PROMISE"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""EMBOLO BREEL, MANZAMBI JOHAN, DAVID JONATHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""MANZAMBI JOHAN, EMBOLO BREEL, LARIN CYLE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""EMBOLO BREEL, VARGAS RUBEN, DAVID JONATHAN, LARIN CYLE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""EMBOLO BREEL, MANZAMBI JOHAN, LARIN CYLE, DAVID JONATHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Switzerland"",
        ""score"": ""3-1"",
        ""scorers"": ""EMBOLO BREEL, MANZAMBI JOHAN, XHAKA GRANIT, DAVID JONATHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Draw"",
        ""score"": ""3-3"",
        ""scorers"": ""OWN GOAL, EMBOLO BREEL, MANZAMBI JOHAN, OWN GOAL, LARIN CYLE, DAVID JONATHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Canada"",
        ""score"": ""0-1"",
        ""scorers"": ""DAVID JONATHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""EMBOLO BREEL, NDOYE DAN, DAVID JONATHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      }
    }
  },
  ""52"": {
    ""result"": {
      ""winner"": ""Bosnia And Herzegovina"",
      ""score"": ""3-1"",
      ""scorers"": ""ALAJBEGOVIC KERIM, OWN GOAL, MAHMIC ERMIN, HASSAN ALHAYDOS"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""DEMIROVIC ERMEDIN, AKRAM AFIF"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Bosnia And Herzegovina"",
        ""score"": ""3-0"",
        ""scorers"": ""DEMIROVIC ERMEDIN, DZEKO EDIN, DZEKO EDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Bosnia And Herzegovina"",
        ""score"": ""3-1"",
        ""scorers"": ""DZEKO EDIN, DEMIROVIC ERMEDIN, BAJRAKTAREVIC ESMIR, AKRAM AFIF"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Bosnia And Herzegovina"",
        ""score"": ""2-1"",
        ""scorers"": ""DZEKO EDIN, DEMIROVIC ERMEDIN, AKRAM AFIF"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Bosnia And Herzegovina"",
        ""score"": ""2-0"",
        ""scorers"": ""BAJRAKTAREVIC ESMIR, DZEKO EDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Bosnia And Herzegovina"",
        ""score"": ""3-2"",
        ""scorers"": ""OWN GOAL, VASILJ NIKOLA, LUKIC JOVO, OWN GOAL, AKRAM AFIF"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Bosnia And Herzegovina"",
        ""score"": ""2-0"",
        ""scorers"": ""DZEKO EDIN, DEMIROVIC ERMEDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Bosnia And Herzegovina"",
        ""score"": ""2-0"",
        ""scorers"": ""DZEKO EDIN, DEMIROVIC ERMEDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""53"": {
    ""result"": {
      ""winner"": ""Mexico"",
      ""score"": ""0-3"",
      ""scorers"": ""CHAVEZ MATEO, QUINONES JULIAN, FIDALGO ALVARO"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""SULC PAVEL, QUINONES JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-3"",
        ""scorers"": ""COUFAL VLADIMIR, HLOZEK ADAM, MARTINEZ GUILLERMO, QUINONES JULIAN, JIMENEZ RAUL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Mexico"",
        ""score"": ""1-2"",
        ""scorers"": ""KREJCI LADISLAV, QUINONES JULIAN, MORA GILBERTO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Mexico"",
        ""score"": ""1-2"",
        ""scorers"": ""HLOZEK ADAM, QUINONES JULIAN, ALVARADO ROBERTO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Mexico"",
        ""score"": ""1-2"",
        ""scorers"": ""HLOZEK ADAM, MARTINEZ GUILLERMO, QUINONES JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Mexico"",
        ""score"": ""1-3"",
        ""scorers"": ""HLOZEK ADAM, MARTINEZ GUILLERMO, ALVARADO ROBERTO, ROMO LUIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Mexico"",
        ""score"": ""1-2"",
        ""scorers"": ""SADILEK MICHAL, ROMO LUIS, GIMENEZ SANTIAGO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Czechia"",
        ""score"": ""2-1"",
        ""scorers"": ""SOUCEK TOMAS, SCHICK PATRIK, JIMENEZ RAUL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""54"": {
    ""result"": {
      ""winner"": ""South Africa"",
      ""score"": ""1-0"",
      ""scorers"": ""MASEKO THAPELO"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""South Korea"",
        ""score"": ""1-2"",
        ""scorers"": ""MAKGOPA EVIDENCE, HWANG HEECHAN, OH HYEONGYU"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""South Korea"",
        ""score"": ""0-2"",
        ""scorers"": ""LEE KANGIN, OH HYEONGYU"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""South Korea"",
        ""score"": ""0-3"",
        ""scorers"": ""HWANG HEECHAN, SON HEUNGMIN, OH HYEONGYU"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""South Korea"",
        ""score"": ""1-2"",
        ""scorers"": ""MAKGOPA EVIDENCE, OH HYEONGYU, LEE KANGIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""South Korea"",
        ""score"": ""0-1"",
        ""scorers"": ""OH HYEONGYU"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""South Korea"",
        ""score"": ""1-3"",
        ""scorers"": ""OWN GOAL, OWN GOAL, HWANG INBEOM, HWANG HEECHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""South Korea"",
        ""score"": ""0-2"",
        ""scorers"": ""HWANG INBEOM, HWANG INBEOM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""South Korea"",
        ""score"": ""1-2"",
        ""scorers"": ""FOSTER LYLE, HWANG HEECHAN, SON HEUNGMIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""55"": {
    ""result"": {
      ""winner"": ""Ivory Coast"",
      ""score"": ""0-2"",
      ""scorers"": ""PEPE NICOLAS, PEPE NICOLAS"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Ivory Coast"",
        ""score"": ""0-2"",
        ""scorers"": ""BONNY ANGE-YOAN, PEPE NICOLAS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Ivory Coast"",
        ""score"": ""1-4"",
        ""scorers"": ""BACUNA JUNINHO, DIOMANDE YAN, PEPE NICOLAS, DIALLO AMAD, OWN GOAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Ivory Coast"",
        ""score"": ""0-3"",
        ""scorers"": ""DIOMANDE YAN, DIALLO AMAD, PEPE NICOLAS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Ivory Coast"",
        ""score"": ""1-2"",
        ""scorers"": ""LOCADIA JUERGEN, DIALLO AMAD, BONNY ANGE-YOAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Ivory Coast"",
        ""score"": ""1-3"",
        ""scorers"": ""LOCADIA JUERGEN, DIOMANDE YAN, PEPE NICOLAS, BONNY ANGE-YOAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Ivory Coast"",
        ""score"": ""0-2"",
        ""scorers"": ""BONNY ANGE-YOAN, PEPE NICOLAS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Ivory Coast"",
        ""score"": ""0-1"",
        ""scorers"": ""ADINGRA SIMON"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Ivory Coast"",
        ""score"": ""1-3"",
        ""scorers"": ""KASTANEER GERVANE, DIOMANDE OUSMANE, DIALLO AMAD, BONNY ANGE-YOAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""56"": {
    ""result"": {
      ""winner"": ""Ecuador"",
      ""score"": ""2-1"",
      ""scorers"": ""ANGULO NILSON, PLATA GONZALO, SANE LEROY"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Germany"",
        ""score"": ""0-3"",
        ""scorers"": ""HAVERTZ KAI, MUSIALA JAMAL, WIRTZ FLORIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Germany"",
        ""score"": ""0-1"",
        ""scorers"": ""HAVERTZ KAI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Germany"",
        ""score"": ""0-4"",
        ""scorers"": ""HAVERTZ KAI, UNDAV DENIZ, WIRTZ FLORIAN, MUSIALA JAMAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Germany"",
        ""score"": ""1-2"",
        ""scorers"": ""VALENCIA ENNER, HAVERTZ KAI, WIRTZ FLORIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Germany"",
        ""score"": ""1-3"",
        ""scorers"": ""VALENCIA ENNER, MUSIALA JAMAL, HAVERTZ KAI, LEWELING JAMIE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Germany"",
        ""score"": ""0-3"",
        ""scorers"": ""HAVERTZ KAI, HAVERTZ KAI, WIRTZ FLORIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Germany"",
        ""score"": ""1-3"",
        ""scorers"": ""ESTUPINAN PERVIS, UNDAV DENIZ, UNDAV DENIZ, SANE LEROY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Germany"",
        ""score"": ""1-2"",
        ""scorers"": ""VALENCIA ENNER, HAVERTZ KAI, UNDAV DENIZ"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""57"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""1-1"",
      ""scorers"": ""MAEDA DAIZEN, ELANGA ANTHONY"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""UEDA AYASE, MAEDA DAIZEN, GYOKERES VIKTOR, ELANGA ANTHONY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Japan"",
        ""score"": ""3-1"",
        ""scorers"": ""DOAN RITSU, UEDA AYASE, KAMADA DAICHI, GYOKERES VIKTOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Japan"",
        ""score"": ""4-2"",
        ""scorers"": ""UEDA AYASE, MAEDA DAIZEN, NAKAMURA KEITO, MAEDA DAIZEN, ISAK ALEXANDER, ELANGA ANTHONY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 4,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""UEDA AYASE, DOAN RITSU, GYOKERES VIKTOR, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""UEDA AYASE, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""UEDA AYASE, KAMADA DAICHI, GYOKERES VIKTOR, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Japan"",
        ""score"": ""2-1"",
        ""scorers"": ""KAMADA DAICHI, ITO JUNYA, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""UEDA AYASE, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      }
    }
  },
  ""58"": {
    ""result"": {
      ""winner"": ""Netherlands"",
      ""score"": ""1-3"",
      ""scorers"": ""MASTOURI HAZEM, OWN GOAL, BROBBEY BRIAN, VAN HECKE JAN PAUL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Netherlands"",
        ""score"": ""0-4"",
        ""scorers"": ""GAKPO CODY, BROBBEY BRIAN, VAN DIJK VIRGIL, MALEN DONYELL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Netherlands"",
        ""score"": ""0-5"",
        ""scorers"": ""GAKPO CODY, BROBBEY BRIAN, BROBBEY BRIAN, DUMFRIES DENZEL, VAN DIJK VIRGIL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Netherlands"",
        ""score"": ""0-5"",
        ""scorers"": ""BROBBEY BRIAN, GAKPO CODY, GAKPO CODY, MALEN DONYELL, VAN DIJK VIRGIL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Netherlands"",
        ""score"": ""0-4"",
        ""scorers"": ""GAKPO CODY, GAKPO CODY, MALEN DONYELL, BROBBEY BRIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Netherlands"",
        ""score"": ""0-3"",
        ""scorers"": ""BROBBEY BRIAN, GAKPO CODY, DEPAY MEMPHIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Netherlands"",
        ""score"": ""0-5"",
        ""scorers"": ""GAKPO CODY, GAKPO CODY, DEPAY MEMPHIS, BROBBEY BRIAN, AKE NATHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Netherlands"",
        ""score"": ""0-4"",
        ""scorers"": ""GAKPO CODY, DE JONG FRENKIE, BROBBEY BRIAN, BROBBEY BRIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Netherlands"",
        ""score"": ""0-3"",
        ""scorers"": ""GAKPO CODY, DEPAY MEMPHIS, BROBBEY BRIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""59"": {
    ""result"": {
      ""winner"": ""Türkiye"",
      ""score"": ""3-2"",
      ""scorers"": ""GULER ARDA, YILMAZ BARIS ALPER, AYHAN KAAN, TRUSTY AUSTON, BERHALTER SEBASTIAN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""United States"",
        ""score"": ""0-2"",
        ""scorers"": ""REYNA GIOVANNI, PEPI RICARDO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""United States"",
        ""score"": ""1-2"",
        ""scorers"": ""YILMAZ BARIS ALPER, WEAH TIMOTHY, REYNA GIOVANNI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""United States"",
        ""score"": ""1-3"",
        ""scorers"": ""YILMAZ BARIS ALPER, WEAH TIMOTHY, PEPI RICARDO, REYNA GIOVANNI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""United States"",
        ""score"": ""1-2"",
        ""scorers"": ""GULER ARDA, REYNA GIOVANNI, PEPI RICARDO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""United States"",
        ""score"": ""0-2"",
        ""scorers"": ""PEPI RICARDO, BALOGUN FOLARIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""United States"",
        ""score"": ""0-4"",
        ""scorers"": ""PEPI RICARDO, REYNA GIOVANNI, MCKENNIE WESTON, AARONSON BRENDEN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""United States"",
        ""score"": ""0-2"",
        ""scorers"": ""BALOGUN FOLARIN, PULISIC CHRISTIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""United States"",
        ""score"": ""1-2"",
        ""scorers"": ""GULER ARDA, BALOGUN FOLARIN, PULISIC CHRISTIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      }
    }
  },
  ""60"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""0-0"",
      ""scorers"": """",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Australia"",
        ""score"": ""1-2"",
        ""scorers"": ""AVALOS GABRIEL, IRANKUNDA NESTORY, VOLPATO CRISTIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Australia"",
        ""score"": ""0-1"",
        ""scorers"": ""SOUTTAR HARRY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""AVALOS GABRIEL, VOLPATO CRISTIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""AVALOS GABRIEL, IRANKUNDA NESTORY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Australia"",
        ""score"": ""0-1"",
        ""scorers"": ""IRANKUNDA NESTORY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Australia"",
        ""score"": ""1-2"",
        ""scorers"": ""AVALOS GABRIEL, IRANKUNDA NESTORY, METCALFE CONNOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Australia"",
        ""score"": ""1-2"",
        ""scorers"": ""ENCISO JULIO, METCALFE CONNOR, ONEILL AIDEN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""SANABRIA ANTONIO, IRANKUNDA NESTORY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""61"": {
    ""result"": {
      ""winner"": ""France"",
      ""score"": ""1-4"",
      ""scorers"": ""AASGAARD THELO, DEMBELE OUSMANE, DEMBELE OUSMANE, DEMBELE OUSMANE, DOUE DESIRE"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""France"",
        ""score"": ""1-4"",
        ""scorers"": ""STRAND LARSEN JORGEN, MBAPPE KYLIAN, MBAPPE KYLIAN, OLISE MICHAEL, DEMBELE OUSMANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""France"",
        ""score"": ""1-3"",
        ""scorers"": ""STRAND LARSEN JORGEN, MBAPPE KYLIAN, DEMBELE OUSMANE, DEMBELE OUSMANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""France"",
        ""score"": ""0-4"",
        ""scorers"": ""MBAPPE KYLIAN, MBAPPE KYLIAN, DEMBELE OUSMANE, OLISE MICHAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""France"",
        ""score"": ""1-3"",
        ""scorers"": ""STRAND LARSEN JORGEN, DEMBELE OUSMANE, MBAPPE KYLIAN, MBAPPE KYLIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""France"",
        ""score"": ""2-3"",
        ""scorers"": ""HAALAND ERLING, STRAND LARSEN JORGEN, MBAPPE KYLIAN, MBAPPE KYLIAN, DOUE DESIRE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""France"",
        ""score"": ""1-3"",
        ""scorers"": ""HAALAND ERLING, MBAPPE KYLIAN, MBAPPE KYLIAN, DEMBELE OUSMANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""France"",
        ""score"": ""1-4"",
        ""scorers"": ""HAALAND ERLING, MBAPPE KYLIAN, MBAPPE KYLIAN, MBAPPE KYLIAN, DEMBELE OUSMANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""France"",
        ""score"": ""1-2"",
        ""scorers"": ""HAALAND ERLING, MBAPPE KYLIAN, MBAPPE KYLIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""62"": {
    ""result"": {
      ""winner"": ""Senegal"",
      ""score"": ""5-0"",
      ""scorers"": ""DIARRA HABIB, SARR ISMAILA, GUEYE PAPE, GUEYE PAPE, NDIAYE ILIMAN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Senegal"",
        ""score"": ""3-1"",
        ""scorers"": ""SARR ISMAILA, MBAYE IBRAHIM, MANE SADIO, ALI ALHAMADI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Senegal"",
        ""score"": ""3-0"",
        ""scorers"": ""SARR ISMAILA, MBAYE IBRAHIM, MANE SADIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Senegal"",
        ""score"": ""3-1"",
        ""scorers"": ""SARR ISMAILA, MBAYE IBRAHIM, MANE SADIO, ZIDANE IQBAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Senegal"",
        ""score"": ""2-1"",
        ""scorers"": ""MANE SADIO, JACKSON NICOLAS, AYMEN HUSSEIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Senegal"",
        ""score"": ""3-0"",
        ""scorers"": ""MANE SADIO, SARR ISMAILA, MBAYE IBRAHIM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Senegal"",
        ""score"": ""3-2"",
        ""scorers"": ""OWN GOAL, SARR ISMAILA, MANE SADIO, OWN GOAL, AYMEN HUSSEIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Senegal"",
        ""score"": ""1-0"",
        ""scorers"": ""SARR ISMAILA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Senegal"",
        ""score"": ""2-0"",
        ""scorers"": ""JACKSON NICOLAS, MANE SADIO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""63"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""1-1"",
      ""scorers"": ""MAHMOUD SABER, REZAEIAN RAMIN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Egypt"",
        ""score"": ""2-1"",
        ""scorers"": ""MOHAMED SALAH, TREZEGUET, TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Egypt"",
        ""score"": ""2-1"",
        ""scorers"": ""MOHAMED SALAH, TREZEGUET, TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Egypt"",
        ""score"": ""2-1"",
        ""scorers"": ""MOSTAFA ZICO, MOHAMED SALAH, TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""MOHAMED SALAH, TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Egypt"",
        ""score"": ""1-0"",
        ""scorers"": ""MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Egypt"",
        ""score"": ""3-2"",
        ""scorers"": ""OWN GOAL, MOSTAFA ZICO, MOHAMED SALAH, OWN GOAL, MOHEBBI MOHAMMAD"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Egypt"",
        ""score"": ""3-0"",
        ""scorers"": ""MOHAMED SALAH, MOHAMED SALAH, MOSTAFA ZICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Egypt"",
        ""score"": ""2-1"",
        ""scorers"": ""OMAR MARMOUSH, MOHAMED SALAH, TAREMI MEHDI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""64"": {
    ""result"": {
      ""winner"": ""Belgium"",
      ""score"": ""1-5"",
      ""scorers"": ""JUST ELIJAH, TROSSARD LEANDRO, TROSSARD LEANDRO, DE BRUYNE KEVIN, LUKAKU ROMELU, SAELEMAEKERS ALEXIS"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Belgium"",
        ""score"": ""1-2"",
        ""scorers"": ""WOOD CHRIS, DOKU JEREMY, DE BRUYNE KEVIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Belgium"",
        ""score"": ""0-2"",
        ""scorers"": ""TROSSARD LEANDRO, DOKU JEREMY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Belgium"",
        ""score"": ""0-3"",
        ""scorers"": ""DE BRUYNE KEVIN, DOKU JEREMY, TIELEMANS YOURI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Belgium"",
        ""score"": ""0-2"",
        ""scorers"": ""LUKAKU ROMELU, LUKAKU ROMELU"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Belgium"",
        ""score"": ""0-2"",
        ""scorers"": ""DE BRUYNE KEVIN, LUKAKU ROMELU"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Belgium"",
        ""score"": ""1-3"",
        ""scorers"": ""OWN GOAL, OWN GOAL, DE KETELAERE CHARLES, DOKU JEREMY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Belgium"",
        ""score"": ""0-1"",
        ""scorers"": ""DE BRUYNE KEVIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Belgium"",
        ""score"": ""1-3"",
        ""scorers"": ""WOOD CHRIS, DE BRUYNE KEVIN, DOKU JEREMY, LUKAKU ROMELU"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""65"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""0-0"",
      ""scorers"": """",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Cape Verde"",
        ""score"": ""2-1"",
        ""scorers"": ""WILLY SEMEDO, DAILON LIVRAMENTO, FERAS ALBRIKAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Cape Verde"",
        ""score"": ""2-0"",
        ""scorers"": ""JAMIRO MONTEIRO, DAILON LIVRAMENTO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Cape Verde"",
        ""score"": ""2-1"",
        ""scorers"": ""DAILON LIVRAMENTO, RYAN MENDES, SALEM ALDAWSARI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""RYAN MENDES, SALEM ALDAWSARI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Cape Verde"",
        ""score"": ""1-0"",
        ""scorers"": ""RYAN MENDES"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Cape Verde"",
        ""score"": ""2-1"",
        ""scorers"": ""OWN GOAL, KEVIN PINA, OWN GOAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Cape Verde"",
        ""score"": ""1-0"",
        ""scorers"": ""HELIO VARELA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Cape Verde"",
        ""score"": ""2-1"",
        ""scorers"": ""RYAN MENDES, RYAN MENDES, NASSER ALDAWSARI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""66"": {
    ""result"": {
      ""winner"": ""Spain"",
      ""score"": ""0-1"",
      ""scorers"": ""BAENA ALEX"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Spain"",
        ""score"": ""1-3"",
        ""scorers"": ""NUNEZ DARWIN, YAMAL LAMINE, OYARZABAL MIKEL, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Spain"",
        ""score"": ""1-4"",
        ""scorers"": ""CANOBBIO AGUSTIN, OYARZABAL MIKEL, YAMAL LAMINE, YAMAL LAMINE, MERINO MIKEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Spain"",
        ""score"": ""0-3"",
        ""scorers"": ""YAMAL LAMINE, OYARZABAL MIKEL, CUCURELLA MARC"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Spain"",
        ""score"": ""0-1"",
        ""scorers"": ""PEDRI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Spain"",
        ""score"": ""0-2"",
        ""scorers"": ""YAMAL LAMINE, OYARZABAL MIKEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Spain"",
        ""score"": ""1-3"",
        ""scorers"": ""VINAS FEDERICO, YAMAL LAMINE, OYARZABAL MIKEL, PEDRI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Spain"",
        ""score"": ""1-2"",
        ""scorers"": ""CANOBBIO AGUSTIN, OYARZABAL MIKEL, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Spain"",
        ""score"": ""1-2"",
        ""scorers"": ""NUNEZ DARWIN, OYARZABAL MIKEL, OYARZABAL MIKEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""67"": {
    ""result"": {
      ""winner"": ""England"",
      ""score"": ""0-2"",
      ""scorers"": ""KANE HARRY, BELLINGHAM JUDE"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""England"",
        ""score"": ""0-3"",
        ""scorers"": ""KANE HARRY, RASHFORD MARCUS, ROGERS MORGAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""England"",
        ""score"": ""0-2"",
        ""scorers"": ""KANE HARRY, SAKA BUKAYO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""England"",
        ""score"": ""0-5"",
        ""scorers"": ""KANE HARRY, KANE HARRY, OREILLY NICO, SAKA BUKAYO, RASHFORD MARCUS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""England"",
        ""score"": ""0-2"",
        ""scorers"": ""KANE HARRY, SAKA BUKAYO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""England"",
        ""score"": ""0-4"",
        ""scorers"": ""KANE HARRY, KANE HARRY, RASHFORD MARCUS, ROGERS MORGAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""England"",
        ""score"": ""0-4"",
        ""scorers"": ""KANE HARRY, KANE HARRY, SAKA BUKAYO, BELLINGHAM JUDE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""England"",
        ""score"": ""0-4"",
        ""scorers"": ""KANE HARRY, RASHFORD MARCUS, BELLINGHAM JUDE, BELLINGHAM JUDE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""England"",
        ""score"": ""0-2"",
        ""scorers"": ""KANE HARRY, RASHFORD MARCUS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      }
    }
  },
  ""68"": {
    ""result"": {
      ""winner"": ""Croatia"",
      ""score"": ""2-1"",
      ""scorers"": ""SUCIC PETAR, VLASIC NIKOLA, LUCKASSEN DERRICK"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Croatia"",
        ""score"": ""2-1"",
        ""scorers"": ""BATURINA MARTIN, BUDIMIR ANTE, AYEW JORDAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Croatia"",
        ""score"": ""2-0"",
        ""scorers"": ""BUDIMIR ANTE, SUCIC PETAR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Croatia"",
        ""score"": ""2-1"",
        ""scorers"": ""BUDIMIR ANTE, VLASIC NIKOLA, SULEMANA KAMALDEEN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Croatia"",
        ""score"": ""2-0"",
        ""scorers"": ""BUDIMIR ANTE, BATURINA MARTIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Croatia"",
        ""score"": ""1-0"",
        ""scorers"": ""BUDIMIR ANTE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""MUSA PETAR, YIRENKYI CALEB"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Croatia"",
        ""score"": ""1-0"",
        ""scorers"": ""MUSA PETAR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Croatia"",
        ""score"": ""1-0"",
        ""scorers"": ""KRAMARIC ANDREJ"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""69"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""3-3"",
      ""scorers"": ""BELGHALI RAFIK, MAHREZ RIYAD, MAHREZ RIYAD, ARNAUTOVIC MARKO, SABITZER MARCEL, KALAJDZIC SASA"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""MAHREZ RIYAD, ARNAUTOVIC MARKO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""CHAIBI FARES, ARNAUTOVIC MARKO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Austria"",
        ""score"": ""1-3"",
        ""scorers"": ""GOUIRI AMINE, OWN GOAL, ARNAUTOVIC MARKO, ALABA DAVID"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""MAHREZ RIYAD, LAIMER KONRAD"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Austria"",
        ""score"": ""0-1"",
        ""scorers"": ""ARNAUTOVIC MARKO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Austria"",
        ""score"": ""0-2"",
        ""scorers"": ""ARNAUTOVIC MARKO, SABITZER MARCEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 4,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Austria"",
        ""score"": ""0-1"",
        ""scorers"": ""SABITZER MARCEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""AMOURA MOHAMED, ARNAUTOVIC MARKO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""70"": {
    ""result"": {
      ""winner"": ""Argentina"",
      ""score"": ""1-3"",
      ""scorers"": ""MOUSA ALTAMARI, MARTINEZ LAUTARO, LO CELSO GIOVANI, MESSI LIONEL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Argentina"",
        ""score"": ""0-2"",
        ""scorers"": ""MARTINEZ LAUTARO, ALVAREZ JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Argentina"",
        ""score"": ""0-3"",
        ""scorers"": ""MARTINEZ LAUTARO, ALVAREZ JULIAN, MESSI LIONEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Argentina"",
        ""score"": ""0-3"",
        ""scorers"": ""ALVAREZ JULIAN, MARTINEZ LAUTARO, LO CELSO GIOVANI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Argentina"",
        ""score"": ""0-3"",
        ""scorers"": ""ALVAREZ JULIAN, DE PAUL RODRIGO, MARTINEZ LAUTARO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Argentina"",
        ""score"": ""0-3"",
        ""scorers"": ""ALVAREZ JULIAN, MESSI LIONEL, MARTINEZ LAUTARO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Argentina"",
        ""score"": ""0-5"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, MESSI LIONEL, MARTINEZ LAUTARO, DE PAUL RODRIGO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Argentina"",
        ""score"": ""0-3"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, ALVAREZ JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Argentina"",
        ""score"": ""0-3"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, ALVAREZ JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""71"": {
    ""result"": {
      ""winner"": ""Draw"",
      ""score"": ""0-0"",
      ""scorers"": """",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Portugal"",
        ""score"": ""2-3"",
        ""scorers"": ""DIAZ LUIS, CORDOBA JHON, CRISTIANO RONALDO, BRUNO FERNANDES, PEDRO NETO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Portugal"",
        ""score"": ""2-3"",
        ""scorers"": ""CORDOBA JHON, DIAZ LUIS, CRISTIANO RONALDO, CRISTIANO RONALDO, BRUNO FERNANDES"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Draw"",
        ""score"": ""2-2"",
        ""scorers"": ""DIAZ LUIS, RODRIGUEZ JAMES, CRISTIANO RONALDO, FRANCISCO CONCEICAO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Portugal"",
        ""score"": ""1-2"",
        ""scorers"": ""CORDOBA JHON, CRISTIANO RONALDO, CRISTIANO RONALDO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Portugal"",
        ""score"": ""1-2"",
        ""scorers"": ""RODRIGUEZ JAMES, CRISTIANO RONALDO, CRISTIANO RONALDO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Portugal"",
        ""score"": ""1-3"",
        ""scorers"": ""MUNOZ DANIEL, CRISTIANO RONALDO, BRUNO FERNANDES, NUNO MENDES"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Portugal"",
        ""score"": ""1-2"",
        ""scorers"": ""RODRIGUEZ JAMES, CRISTIANO RONALDO, BERNARDO SILVA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Portugal"",
        ""score"": ""1-3"",
        ""scorers"": ""DIAZ LUIS, CRISTIANO RONALDO, CRISTIANO RONALDO, BRUNO FERNANDES"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""72"": {
    ""result"": {
      ""winner"": ""Congo DR"",
      ""score"": ""3-1"",
      ""scorers"": ""WISSA YOANE, WISSA YOANE, MAYELE FISTON, SHOMURODOV ELDOR"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Congo DR"",
        ""score"": ""1-0"",
        ""scorers"": ""WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Congo DR"",
        ""score"": ""2-0"",
        ""scorers"": ""WISSA YOANE, BAKAMBU CEDRIC"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Congo DR"",
        ""score"": ""2-1"",
        ""scorers"": ""WISSA YOANE, BAKAMBU CEDRIC, SHOMURODOV ELDOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Congo DR"",
        ""score"": ""1-0"",
        ""scorers"": ""BAKAMBU CEDRIC"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Congo DR"",
        ""score"": ""1-0"",
        ""scorers"": ""WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Draw"",
        ""score"": ""0-0"",
        ""scorers"": """",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Congo DR"",
        ""score"": ""1-0"",
        ""scorers"": ""KAKUTA GAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Congo DR"",
        ""score"": ""2-0"",
        ""scorers"": ""BAKAMBU CEDRIC, WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""73"": {
    ""result"": {
      ""winner"": ""Canada"",
      ""score"": ""0-1"",
      ""scorers"": ""EUSTAQUIO STEPHEN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Canada"",
        ""score"": ""1-1"",
        ""scorers"": ""MAKGOPA EVIDENCE, DAVID JONATHAN"",
        ""aetScore"": ""1-2"",
        ""etScorers"": ""LARIN CYLE"",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Canada"",
        ""score"": ""0-1"",
        ""scorers"": ""LARIN CYLE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Canada"",
        ""score"": ""0-0"",
        ""scorers"": """",
        ""aetScore"": """",
        ""etScorers"": ""LARIN CYLE"",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Canada"",
        ""score"": ""0-1"",
        ""scorers"": ""LARIN CYLE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Canada"",
        ""score"": ""1-2"",
        ""scorers"": ""MAKGOPA EVIDENCE, OLUWASEYI TANI, DAVID JONATHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Canada"",
        ""score"": ""1-1"",
        ""scorers"": ""OWN GOAL, OWN GOAL"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""2-3"",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Canada"",
        ""score"": ""0-2"",
        ""scorers"": ""LARIN CYLE, DAVID JONATHAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""74"": {
    ""result"": {
      ""winner"": ""Paraguay"",
      ""score"": ""1-1"",
      ""scorers"": ""HAVERTZ KAI, ENCISO JULIO"",
      ""aetScore"": ""1-1"",
      ""etScorers"": """",
      ""pensScore"": ""3-4""
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Germany"",
        ""score"": ""2-0"",
        ""scorers"": ""HAVERTZ KAI, UNDAV DENIZ"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Germany"",
        ""score"": ""3-0"",
        ""scorers"": ""HAVERTZ KAI, SANE LEROY, UNDAV DENIZ"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Germany"",
        ""score"": ""3-0"",
        ""scorers"": ""UNDAV DENIZ, NMECHA FELIX, HAVERTZ KAI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Germany"",
        ""score"": ""3-0"",
        ""scorers"": ""SANE LEROY, WIRTZ FLORIAN, HAVERTZ KAI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Germany"",
        ""score"": ""2-0"",
        ""scorers"": ""SANE LEROY, HAVERTZ KAI"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Germany"",
        ""score"": ""2-0"",
        ""scorers"": ""HAVERTZ KAI, UNDAV DENIZ"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Germany"",
        ""score"": ""3-0"",
        ""scorers"": ""HAVERTZ KAI, MUSIALA JAMAL, UNDAV DENIZ"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      }
    }
  },
  ""75"": {
    ""result"": {
      ""winner"": ""Morocco"",
      ""score"": ""1-1"",
      ""scorers"": ""GAKPO CODY, DIOP ISSA"",
      ""aetScore"": ""1-1"",
      ""etScorers"": """",
      ""pensScore"": ""2-3""
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Netherlands"",
        ""score"": ""2-1"",
        ""scorers"": ""BROBBEY BRIAN, GAKPO CODY, SAIBARI ISMAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Netherlands"",
        ""score"": ""1-1"",
        ""scorers"": ""BROBBEY BRIAN, SAIBARI ISMAEL"",
        ""aetScore"": ""2-1"",
        ""etScorers"": ""SUMMERVILLE CRYSENCIO"",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Netherlands"",
        ""score"": ""2-2"",
        ""scorers"": ""VAN DIJK VIRGIL, SUMMERVILLE CRYSENCIO, SAIBARI ISMAEL, DIAZ BRAHIM"",
        ""aetScore"": ""3-2"",
        ""etScorers"": ""WEGHORST WOUT"",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Morocco"",
        ""score"": ""1-1"",
        ""scorers"": ""SUMMERVILLE CRYSENCIO, SAIBARI ISMAEL"",
        ""aetScore"": ""1-2"",
        ""etScorers"": ""DIAZ BRAHIM"",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Netherlands"",
        ""score"": ""1-1"",
        ""scorers"": ""GAKPO CODY, SAIBARI ISMAEL"",
        ""aetScore"": ""2-1"",
        ""etScorers"": ""VAN DIJK VIRGIL"",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Morocco"",
        ""score"": ""1-1"",
        ""scorers"": ""GAKPO CODY, SAIBARI ISMAEL"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""4-5"",
        ""points"": 17,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Netherlands"",
        ""score"": ""1-0"",
        ""scorers"": ""VAN DIJK VIRGIL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Morocco"",
        ""score"": ""1-1"",
        ""scorers"": ""GAKPO CODY, SAIBARI ISMAEL"",
        ""aetScore"": ""3-4"",
        ""etScorers"": ""BROBBEY BRIAN, GAKPO CODY, HAKIMI ACHRAF, DIAZ BRAHIM, BOUNOU YASSINE"",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      }
    }
  },
  ""76"": {
    ""result"": {
      ""winner"": ""Brazil"",
      ""score"": ""2-1"",
      ""scorers"": ""CASEMIRO, GABRIEL MAGALHAES, SANO KAISHU"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-1"",
        ""scorers"": ""VINICIUS JUNIOR, MATHEUS CUNHA, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-1"",
        ""scorers"": ""VINICIUS JUNIOR, MATHEUS CUNHA, MAEDA DAIZEN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Brazil"",
        ""score"": ""3-1"",
        ""scorers"": ""VINICIUS JUNIOR, MATHEUS CUNHA, VINICIUS JUNIOR, MAEDA DAIZEN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-1"",
        ""scorers"": ""VINICIUS JUNIOR, MATHEUS CUNHA, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-1"",
        ""scorers"": ""NEYMAR JR, VINICIUS JUNIOR, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-0"",
        ""scorers"": ""VINICIUS JUNIOR, VINICIUS JUNIOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-1"",
        ""scorers"": ""VINICIUS JUNIOR, MATHEUS CUNHA, ITO JUNYA"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-1"",
        ""scorers"": ""VINICIUS JUNIOR, MATHEUS CUNHA, UEDA AYASE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      }
    }
  },
  ""77"": {
    ""result"": {
      ""winner"": ""France"",
      ""score"": ""3-0"",
      ""scorers"": ""MBAPPE KYLIAN, BARCOLA BRADLEY, MBAPPE KYLIAN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""France"",
        ""score"": ""3-1"",
        ""scorers"": ""MBAPPE KYLIAN, DEMBELE OUSMANE, MBAPPE KYLIAN, GYOKERES VIKTOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""France"",
        ""score"": ""3-1"",
        ""scorers"": ""MBAPPE KYLIAN, DEMBELE OUSMANE, DEMBELE OUSMANE, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""France"",
        ""score"": ""3-1"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN, BARCOLA BRADLEY, ELANGA ANTHONY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""France"",
        ""score"": ""2-1"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN, GYOKERES VIKTOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""France"",
        ""score"": ""3-1"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN, DOUE DESIRE, ISAK ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""France"",
        ""score"": ""2-1"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN, GYOKERES VIKTOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""France"",
        ""score"": ""4-1"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN, MBAPPE KYLIAN, MBAPPE KYLIAN, ELANGA ANTHONY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""France"",
        ""score"": ""4-1"",
        ""scorers"": ""DEMBELE OUSMANE, OLISE MICHAEL, MBAPPE KYLIAN, MBAPPE KYLIAN, GYOKERES VIKTOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""78"": {
    ""result"": {
      ""winner"": ""Norway"",
      ""score"": ""1-2"",
      ""scorers"": ""DIALLO AMAD, NUSA ANTONIO, HAALAND ERLING"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Norway"",
        ""score"": ""1-2"",
        ""scorers"": ""PEPE NICOLAS, HAALAND ERLING, HAALAND ERLING"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Norway"",
        ""score"": ""1-3"",
        ""scorers"": ""PEPE NICOLAS, HAALAND ERLING, HAALAND ERLING, ODEGAARD MARTIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Norway"",
        ""score"": ""1-1"",
        ""scorers"": ""PEPE NICOLAS, HAALAND ERLING"",
        ""aetScore"": ""1-3"",
        ""etScorers"": ""HAALAND ERLING, STRAND LARSEN JORGEN"",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Norway"",
        ""score"": ""1-2"",
        ""scorers"": ""BONNY ANGE-YOAN, HAALAND ERLING, HAALAND ERLING"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Norway"",
        ""score"": ""0-2"",
        ""scorers"": ""HAALAND ERLING, HAALAND ERLING"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Norway"",
        ""score"": ""2-2"",
        ""scorers"": ""PEPE NICOLAS, DIALLO AMAD, HAALAND ERLING, HAALAND ERLING"",
        ""aetScore"": ""2-3"",
        ""etScorers"": ""HAALAND ERLING"",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Norway"",
        ""score"": ""1-2"",
        ""scorers"": ""DIALLO AMAD, HAALAND ERLING, ODEGAARD MARTIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      }
// ,
//       ""Chaitanya M"": {
//         ""winner"": ""Norway"",
//         ""score"": ""2-3"",
//         ""scorers"": ""DIOMANDE YAN, PEPE NICOLAS, HAALAND ERLING, SORLOTH ALEXANDER, ODEGAARD MARTIN"",
//         ""aetScore"": """",
//         ""etScorers"": """",
//         ""pensScore"": """",
//         ""points"": 5,
//         ""ppTier"": """"
//       }
    }
  },
  ""79"": {
    ""result"": {
      ""winner"": ""Mexico"",
      ""score"": ""2-0"",
      ""scorers"": ""JIMENEZ RAUL, QUINONES JULIAN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Ecuador"",
        ""score"": ""1-1"",
        ""scorers"": ""JIMENEZ RAUL, PLATA GONZALO"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""2-3"",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Mexico"",
        ""score"": ""0-0"",
        ""scorers"": """",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": ""4-3"",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Mexico"",
        ""score"": ""1-1"",
        ""scorers"": ""JIMENEZ RAUL, ESTUPINAN PERVIS"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""4-2"",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Mexico"",
        ""score"": ""1-1"",
        ""scorers"": ""JIMENEZ RAUL, VALENCIA ENNER"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""5-4"",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Mexico"",
        ""score"": ""1-1"",
        ""scorers"": ""JIMENEZ RAUL, PLATA GONZALO"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""4-3"",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-0"",
        ""scorers"": ""ROMO LUIS, JIMENEZ RAUL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Mexico"",
        ""score"": ""1-0"",
        ""scorers"": ""GIMENEZ SANTIAGO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Mexico"",
        ""score"": ""1-1"",
        ""scorers"": ""JIMENEZ RAUL, VALENCIA ENNER"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""4-3"",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""80"": {
    ""result"": {
      ""winner"": ""England"",
      ""score"": ""2-1"",
      ""scorers"": ""KANE HARRY, KANE HARRY, CIPENGA BRIAN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""England"",
        ""score"": ""2-1"",
        ""scorers"": ""KANE HARRY, RASHFORD MARCUS, WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""England"",
        ""score"": ""2-0"",
        ""scorers"": ""BELLINGHAM JUDE, SAKA BUKAYO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""England"",
        ""score"": ""3-1"",
        ""scorers"": ""BELLINGHAM JUDE, OREILLY NICO, KANE HARRY, WISSA YOANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""England"",
        ""score"": ""2-0"",
        ""scorers"": ""KANE HARRY, BELLINGHAM JUDE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""England"",
        ""score"": ""1-1"",
        ""scorers"": ""KANE HARRY, WISSA YOANE"",
        ""aetScore"": ""2-1"",
        ""etScorers"": ""BELLINGHAM JUDE"",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""England"",
        ""score"": ""2-0"",
        ""scorers"": ""BELLINGHAM JUDE, KANE HARRY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""England"",
        ""score"": ""3-0"",
        ""scorers"": ""BELLINGHAM JUDE, KANE HARRY, RASHFORD MARCUS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""England"",
        ""score"": ""2-0"",
        ""scorers"": ""KANE HARRY, BELLINGHAM JUDE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""81"": {
    ""result"": {
      ""winner"": ""United States"",
      ""score"": ""2-0"",
      ""scorers"": ""BALOGUN FOLARIN, TILLMAN MALIK"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""United States"",
        ""score"": ""2-1"",
        ""scorers"": ""BALOGUN FOLARIN, PULISIC CHRISTIAN, DEMIROVIC ERMEDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""United States"",
        ""score"": ""3-1"",
        ""scorers"": ""BALOGUN FOLARIN, PULISIC CHRISTIAN, REYNA GIOVANNI, MAHMIC ERMIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""United States"",
        ""score"": ""2-1"",
        ""scorers"": ""BALOGUN FOLARIN, REYNA GIOVANNI, DEMIROVIC ERMEDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""United States"",
        ""score"": ""3-1"",
        ""scorers"": ""BALOGUN FOLARIN, PULISIC CHRISTIAN, OWN GOAL, DEMIROVIC ERMEDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""United States"",
        ""score"": ""2-1"",
        ""scorers"": ""BALOGUN FOLARIN, PULISIC CHRISTIAN, DEMIROVIC ERMEDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""United States"",
        ""score"": ""2-2"",
        ""scorers"": ""BALOGUN FOLARIN, PULISIC CHRISTIAN, DEMIROVIC ERMEDIN, DZEKO EDIN"",
        ""aetScore"": ""2-2"",
        ""etScorers"": """",
        ""pensScore"": ""4-3"",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""United States"",
        ""score"": ""2-1"",
        ""scorers"": ""BERHALTER SEBASTIAN, PEPI RICARDO, DEMIROVIC ERMEDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""United States"",
        ""score"": ""2-1"",
        ""scorers"": ""BALOGUN FOLARIN, PULISIC CHRISTIAN, DZEKO EDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""82"": {
    ""result"": {
      ""winner"": ""Belgium"",
      ""score"": ""2-2"",
      ""scorers"": ""LUKAKU ROMELU, TIELEMANS YOURI, DIARRA HABIB, SARR ISMAILA"",
      ""aetScore"": ""3-2"",
      ""etScorers"": ""TIELEMANS YOURI"",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Belgium"",
        ""score"": ""1-1"",
        ""scorers"": ""DOKU JEREMY, SARR ISMAILA"",
        ""aetScore"": ""2-1"",
        ""etScorers"": ""LUKAKU ROMELU"",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-2"",
        ""scorers"": ""DOKU JEREMY, TROSSARD LEANDRO, SARR ISMAILA, MANE SADIO"",
        ""aetScore"": ""2-2"",
        ""etScorers"": """",
        ""pensScore"": ""4-3"",
        ""points"": 12,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-2"",
        ""scorers"": ""TROSSARD LEANDRO, DE BRUYNE KEVIN, SARR ISMAILA, GUEYE PAPE"",
        ""aetScore"": ""2-2"",
        ""etScorers"": """",
        ""pensScore"": ""4-2"",
        ""points"": 12,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-2"",
        ""scorers"": ""DE KETELAERE CHARLES, DOKU JEREMY, SARR ISMAILA, MANE SADIO"",
        ""aetScore"": ""3-2"",
        ""etScorers"": ""LUKAKU ROMELU"",
        ""pensScore"": """",
        ""points"": 15,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-2"",
        ""scorers"": ""DE BRUYNE KEVIN, LUKAKU ROMELU, SARR ISMAILA, MANE SADIO"",
        ""aetScore"": ""3-2"",
        ""etScorers"": ""DOKU JEREMY"",
        ""pensScore"": """",
        ""points"": 17,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Senegal"",
        ""score"": ""0-0"",
        ""scorers"": """",
        ""aetScore"": """",
        ""etScorers"": ""SARR ISMAILA"",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Belgium"",
        ""score"": ""3-0"",
        ""scorers"": ""DE BRUYNE KEVIN, LUKAKU ROMELU, TROSSARD LEANDRO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Belgium"",
        ""score"": ""1-1"",
        ""scorers"": ""DOKU JEREMY, MANE SADIO"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""4-3"",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""83"": {
    ""result"": {
      ""winner"": ""Portugal"",
      ""score"": ""2-1"",
      ""scorers"": ""CRISTIANO RONALDO, GONCALO RAMOS, PERISIC IVAN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Portugal"",
        ""score"": ""2-1"",
        ""scorers"": ""BRUNO FERNANDES, CRISTIANO RONALDO, BATURINA MARTIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Portugal"",
        ""score"": ""2-1"",
        ""scorers"": ""CRISTIANO RONALDO, BRUNO FERNANDES, BUDIMIR ANTE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Croatia"",
        ""score"": ""1-1"",
        ""scorers"": ""BRUNO FERNANDES, VLASIC NIKOLA"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""3-4"",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Portugal"",
        ""score"": ""2-1"",
        ""scorers"": ""CRISTIANO RONALDO, PEDRO NETO, BUDIMIR ANTE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Portugal"",
        ""score"": ""3-2"",
        ""scorers"": ""CRISTIANO RONALDO, JOAO FELIX, BRUNO FERNANDES, MODRIC LUKA, BUDIMIR ANTE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Portugal"",
        ""score"": ""1-1"",
        ""scorers"": ""CRISTIANO RONALDO, BUDIMIR ANTE"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""4-3"",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Portugal"",
        ""score"": ""1-0"",
        ""scorers"": ""CRISTIANO RONALDO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Portugal"",
        ""score"": ""1-1"",
        ""scorers"": ""CRISTIANO RONALDO, KRAMARIC ANDREJ"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""4-3"",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""84"": {
    ""result"": {
      ""winner"": ""Spain"",
      ""score"": ""3-0"",
      ""scorers"": ""OYARZABAL MIKEL, PORRO PEDRO, OYARZABAL MIKEL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Spain"",
        ""score"": ""2-0"",
        ""scorers"": ""OYARZABAL MIKEL, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Spain"",
        ""score"": ""3-0"",
        ""scorers"": ""YAMAL LAMINE, OLMO DANI, MERINO MIKEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Spain"",
        ""score"": ""3-0"",
        ""scorers"": ""OYARZABAL MIKEL, OLMO DANI, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Spain"",
        ""score"": ""2-0"",
        ""scorers"": ""OYARZABAL MIKEL, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Spain"",
        ""score"": ""2-1"",
        ""scorers"": ""OYARZABAL MIKEL, YAMAL LAMINE, ARNAUTOVIC MARKO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Spain"",
        ""score"": ""3-0"",
        ""scorers"": ""OYARZABAL MIKEL, YAMAL LAMINE, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Spain"",
        ""score"": ""2-0"",
        ""scorers"": ""YAMAL LAMINE, BAENA ALEX"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Spain"",
        ""score"": ""3-1"",
        ""scorers"": ""OYARZABAL MIKEL, RODRI, YAMAL LAMINE, ARNAUTOVIC MARKO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""85"": {
    ""result"": {
      ""winner"": ""Switzerland"",
      ""score"": ""2-0"",
      ""scorers"": ""EMBOLO BREEL, NDOYE DAN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Switzerland"",
        ""score"": ""1-1"",
        ""scorers"": ""MANZAMBI JOHAN, MAHREZ RIYAD"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""3-2"",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Switzerland"",
        ""score"": ""3-1"",
        ""scorers"": ""MANZAMBI JOHAN, MANZAMBI JOHAN, EMBOLO BREEL, MAHREZ RIYAD"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""MANZAMBI JOHAN, VARGAS RUBEN, MAHREZ RIYAD"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""EMBOLO BREEL, MANZAMBI JOHAN, MAHREZ RIYAD"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""EMBOLO BREEL, MANZAMBI JOHAN, MAHREZ RIYAD"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Switzerland"",
        ""score"": ""3-1"",
        ""scorers"": ""EMBOLO BREEL, NDOYE DAN, EMBOLO BREEL, MAHREZ RIYAD"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-1"",
        ""scorers"": ""NDOYE DAN, EMBOLO BREEL, AMOURA MOHAMED"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""86"": {
    ""result"": {
      ""winner"": ""Argentina"",
      ""score"": ""1-1"",
      ""scorers"": ""MESSI LIONEL, DEROY DUARTE"",
      ""aetScore"": ""3-2"",
      ""etScorers"": ""MARTINEZ LISANDRO, OWN GOAL, SIDNY LOPES CABRAL"",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-0"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, MARTINEZ LAUTARO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-0"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, ALMADA THIAGO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-0"",
        ""scorers"": ""MESSI LIONEL, MARTINEZ LAUTARO, MESSI LIONEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Argentina"",
        ""score"": ""4-0"",
        ""scorers"": ""MARTINEZ LAUTARO, MESSI LIONEL, MESSI LIONEL, ALVAREZ JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-0"",
        ""scorers"": ""MESSI LIONEL, ALVAREZ JULIAN, MESSI LIONEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Argentina"",
        ""score"": ""4-0"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, MARTINEZ LAUTARO, ALVAREZ JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Argentina"",
        ""score"": ""4-0"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, MARTINEZ LAUTARO, ALVAREZ JULIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""87"": {
    ""result"": {
      ""winner"": ""Colombia"",
      ""score"": ""1-0"",
      ""scorers"": ""ARIAS JHON"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Colombia"",
        ""score"": ""2-0"",
        ""scorers"": ""DIAZ LUIS, MUNOZ DANIEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-1"",
        ""scorers"": ""DIAZ LUIS, AYEW JORDAN"",
        ""aetScore"": ""2-1"",
        ""etScorers"": ""MUNOZ DANIEL"",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-0"",
        ""scorers"": ""DIAZ LUIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Colombia"",
        ""score"": ""2-1"",
        ""scorers"": ""DIAZ LUIS, RODRIGUEZ JAMES, SEMENYO ANTOINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-1"",
        ""scorers"": ""DIAZ LUIS, WILLIAMS INAKI"",
        ""aetScore"": ""2-1"",
        ""etScorers"": ""RODRIGUEZ JAMES"",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-1"",
        ""scorers"": ""MUNOZ DANIEL, OWN GOAL"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""3-2"",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-1"",
        ""scorers"": ""DIAZ LUIS, SEMENYO ANTOINE"",
        ""aetScore"": ""2-2"",
        ""etScorers"": ""MUNOZ DANIEL, SEMENYO ANTOINE"",
        ""pensScore"": ""3-2"",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""88"": {
    ""result"": {
      ""winner"": ""Egypt"",
      ""score"": ""1-1"",
      ""scorers"": ""OWN GOAL, EMAM ASHOUR"",
      ""aetScore"": ""1-1"",
      ""etScorers"": """",
      ""pensScore"": ""2-4""
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Egypt"",
        ""score"": ""0-1"",
        ""scorers"": ""MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Egypt"",
        ""score"": ""1-1"",
        ""scorers"": ""SOUTTAR HARRY, OMAR MARMOUSH"",
        ""aetScore"": ""1-2"",
        ""etScorers"": ""MOSTAFA ZICO"",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Egypt"",
        ""score"": ""1-2"",
        ""scorers"": ""IRANKUNDA NESTORY, MOHAMED SALAH, TREZEGUET"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Egypt"",
        ""score"": ""1-1"",
        ""scorers"": ""IRANKUNDA NESTORY, OMAR MARMOUSH"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""3-4"",
        ""points"": 15,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Egypt"",
        ""score"": ""1-1"",
        ""scorers"": ""OWN GOAL, MOHAMED SALAH"",
        ""aetScore"": ""1-2"",
        ""etScorers"": ""OMAR MARMOUSH"",
        ""pensScore"": """",
        ""points"": 12,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Egypt"",
        ""score"": ""1-2"",
        ""scorers"": ""IRANKUNDA NESTORY, MOHAMED SALAH, OWN GOAL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Egypt"",
        ""score"": ""1-2"",
        ""scorers"": ""IRANKUNDA NESTORY, MOHAMED SALAH, OMAR MARMOUSH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""89"": {
    ""result"": {
      ""winner"": ""France"",
      ""score"": ""0-1"",
      ""scorers"": ""MBAPPE KYLIAN"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""France"",
        ""score"": ""0-4"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN, MBAPPE KYLIAN, BARCOLA BRADLEY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""France"",
        ""score"": ""1-4"",
        ""scorers"": ""ENCISO JULIO, DEMBELE OUSMANE, BARCOLA BRADLEY, OLISE MICHAEL, MBAPPE KYLIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""France"",
        ""score"": ""0-3"",
        ""scorers"": ""MBAPPE KYLIAN, DEMBELE OUSMANE, OLISE MICHAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""France"",
        ""score"": ""0-4"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN, MBAPPE KYLIAN, OLISE MICHAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""France"",
        ""score"": ""1-2"",
        ""scorers"": ""ENCISO JULIO, MBAPPE KYLIAN, OLISE MICHAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""France"",
        ""score"": ""0-3"",
        ""scorers"": ""MBAPPE KYLIAN, MBAPPE KYLIAN, DEMBELE OUSMANE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""France"",
        ""score"": ""0-3"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN, MBAPPE KYLIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""France"",
        ""score"": ""0-2"",
        ""scorers"": ""DEMBELE OUSMANE, MBAPPE KYLIAN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      }
    }
  },
  ""90"": {
    ""result"": {
      ""winner"": ""Morocco"",
      ""score"": ""0-3"",
      ""scorers"": ""OUNAHI AZZEDINE, OUNAHI AZZEDINE, RAHIMI SOUFIANE"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Morocco"",
        ""score"": ""0-2"",
        ""scorers"": ""SAIBARI ISMAEL, OUNAHI AZZEDINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Morocco"",
        ""score"": ""0-2"",
        ""scorers"": ""SAIBARI ISMAEL, DIAZ BRAHIM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Morocco"",
        ""score"": ""0-1"",
        ""scorers"": ""SAIBARI ISMAEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Morocco"",
        ""score"": ""0-2"",
        ""scorers"": ""SAIBARI ISMAEL, DIAZ BRAHIM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Morocco"",
        ""score"": ""2-2"",
        ""scorers"": ""DAVID JONATHAN, DAVIES ALPHONSO, DIAZ BRAHIM, SAIBARI ISMAEL"",
        ""aetScore"": ""2-2"",
        ""etScorers"": """",
        ""pensScore"": ""3-4"",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Morocco"",
        ""score"": ""1-1"",
        ""scorers"": ""DAVID JONATHAN, SAIBARI ISMAEL"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""2-3"",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Morocco"",
        ""score"": ""1-1"",
        ""scorers"": ""DAVID JONATHAN, SAIBARI ISMAEL"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""3-4"",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""91"": {
    ""result"": {
      ""winner"": ""Norway"",
      ""score"": ""1-2"",
      ""scorers"": ""NEYMAR JR, HAALAND ERLING, HAALAND ERLING"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-2"",
        ""scorers"": ""MATHEUS CUNHA, VINICIUS JUNIOR, HAALAND ERLING, HAALAND ERLING"",
        ""aetScore"": ""3-2"",
        ""etScorers"": ""VINICIUS JUNIOR"",
        ""pensScore"": """",
        ""points"": 4,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-2"",
        ""scorers"": ""VINICIUS JUNIOR, GABRIEL MARTINELLI, HAALAND ERLING, HAALAND ERLING"",
        ""aetScore"": ""3-3"",
        ""etScorers"": ""GABRIEL MAGALHAES, HAALAND ERLING"",
        ""pensScore"": ""4-2"",
        ""points"": 4,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-2"",
        ""scorers"": ""VINICIUS JUNIOR, MATHEUS CUNHA, HAALAND ERLING, ODEGAARD MARTIN"",
        ""aetScore"": ""4-2"",
        ""etScorers"": ""RAPHINHA, ENDRICK"",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-2"",
        ""scorers"": ""MATHEUS CUNHA, VINICIUS JUNIOR, HAALAND ERLING, HAALAND ERLING"",
        ""aetScore"": ""2-2"",
        ""etScorers"": """",
        ""pensScore"": ""5-4"",
        ""points"": 4,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Brazil"",
        ""score"": ""2-2"",
        ""scorers"": ""VINICIUS JUNIOR, MATHEUS CUNHA, HAALAND ERLING, HAALAND ERLING"",
        ""aetScore"": ""3-2"",
        ""etScorers"": ""NEYMAR JR"",
        ""pensScore"": """",
        ""points"": 4,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Brazil"",
        ""score"": ""1-1"",
        ""scorers"": ""VINICIUS JUNIOR, HAALAND ERLING"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""3-2"",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Brazil"",
        ""score"": ""1-0"",
        ""scorers"": ""VINICIUS JUNIOR"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Brazil"",
        ""score"": ""3-2"",
        ""scorers"": ""MATHEUS CUNHA, VINICIUS JUNIOR, CASEMIRO, HAALAND ERLING, ODEGAARD MARTIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      }
    }
  },
  ""92"": {
    ""result"": {
      ""winner"": ""England"",
      ""score"": ""2-3"",
      ""scorers"": ""QUINONES JULIAN, JIMENEZ RAUL, BELLINGHAM JUDE, BELLINGHAM JUDE, KANE HARRY"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""England"",
        ""score"": ""2-2"",
        ""scorers"": ""JIMENEZ RAUL, QUINONES JULIAN, BELLINGHAM JUDE, KANE HARRY"",
        ""aetScore"": ""2-3"",
        ""etScorers"": ""RASHFORD MARCUS"",
        ""pensScore"": """",
        ""points"": 11,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""England"",
        ""score"": ""3-3"",
        ""scorers"": ""QUINONES JULIAN, JIMENEZ RAUL, GIMENEZ SANTIAGO, KANE HARRY, OREILLY NICO, SAKA BUKAYO"",
        ""aetScore"": ""3-4"",
        ""etScorers"": ""EZE EBERECHI"",
        ""pensScore"": """",
        ""points"": 9,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""England"",
        ""score"": ""1-1"",
        ""scorers"": ""QUINONES JULIAN, KANE HARRY"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""4-3"",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-2"",
        ""scorers"": ""QUINONES JULIAN, JIMENEZ RAUL, KANE HARRY, SAKA BUKAYO"",
        ""aetScore"": ""3-3"",
        ""etScorers"": ""JIMENEZ RAUL, KANE HARRY"",
        ""pensScore"": ""4-3"",
        ""points"": 6,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""England"",
        ""score"": ""1-1"",
        ""scorers"": ""JIMENEZ RAUL, KANE HARRY"",
        ""aetScore"": ""2-2"",
        ""etScorers"": ""GIMENEZ SANTIAGO, RASHFORD MARCUS"",
        ""pensScore"": ""3-4"",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-2"",
        ""scorers"": ""JIMENEZ RAUL, QUINONES JULIAN, KANE HARRY, BELLINGHAM JUDE"",
        ""aetScore"": ""2-2"",
        ""etScorers"": """",
        ""pensScore"": ""5-4"",
        ""points"": 8,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""England"",
        ""score"": ""1-2"",
        ""scorers"": ""CHAVEZ LUIS, RASHFORD MARCUS, KANE HARRY"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""England"",
        ""score"": ""1-1"",
        ""scorers"": ""JIMENEZ RAUL, KANE HARRY"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""3-4"",
        ""points"": 7,
        ""ppTier"": """"
      }
    }
  },
  ""93"": {
    ""result"": {
      ""winner"": ""Spain"",
      ""score"": ""0-1"",
      ""scorers"": ""MERINO MIKEL"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Spain"",
        ""score"": ""2-2"",
        ""scorers"": ""CRISTIANO RONALDO, NUNO MENDES, YAMAL LAMINE, OYARZABAL MIKEL"",
        ""aetScore"": ""2-2"",
        ""etScorers"": """",
        ""pensScore"": ""3-4"",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Spain"",
        ""score"": ""1-1"",
        ""scorers"": ""CRISTIANO RONALDO, OYARZABAL MIKEL"",
        ""aetScore"": ""2-2"",
        ""etScorers"": ""NUNO MENDES, MERINO MIKEL"",
        ""pensScore"": ""2-4"",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Spain"",
        ""score"": ""1-3"",
        ""scorers"": ""CRISTIANO RONALDO, OYARZABAL MIKEL, OYARZABAL MIKEL, CUCURELLA MARC"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Spain"",
        ""score"": ""1-3"",
        ""scorers"": ""CRISTIANO RONALDO, OYARZABAL MIKEL, YAMAL LAMINE, YAMAL LAMINE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Spain"",
        ""score"": ""1-1"",
        ""scorers"": ""CRISTIANO RONALDO, OYARZABAL MIKEL"",
        ""aetScore"": ""2-2"",
        ""etScorers"": ""CRISTIANO RONALDO, TORRES FERRAN"",
        ""pensScore"": ""3-4"",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Spain"",
        ""score"": ""1-1"",
        ""scorers"": ""NUNO MENDES, OYARZABAL MIKEL"",
        ""aetScore"": ""2-2"",
        ""etScorers"": ""RUBEN NEVES, YAMAL LAMINE"",
        ""pensScore"": ""4-5"",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Spain"",
        ""score"": ""1-1"",
        ""scorers"": ""CRISTIANO RONALDO, YAMAL LAMINE"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Spain"",
        ""score"": ""1-3"",
        ""scorers"": ""CRISTIANO RONALDO, OYARZABAL MIKEL, YAMAL LAMINE, OYARZABAL MIKEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  },
  ""94"": {
    ""result"": {
      ""winner"": ""Belgium"",
      ""score"": ""1-4"",
      ""scorers"": ""TILLMAN MALIK, DE KETELAERE CHARLES, DE KETELAERE CHARLES, VANAKEN HANS, LUKAKU ROMELU"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""United States"",
        ""score"": ""3-2"",
        ""scorers"": ""BALOGUN FOLARIN, PULISIC CHRISTIAN, DEST SERGINO, DE KETELAERE CHARLES, TROSSARD LEANDRO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-2"",
        ""scorers"": ""BALOGUN FOLARIN, PULISIC CHRISTIAN, LUKEBAKIO DODI, TROSSARD LEANDRO"",
        ""aetScore"": ""2-2"",
        ""etScorers"": """",
        ""pensScore"": ""3-4"",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-2"",
        ""scorers"": ""BALOGUN FOLARIN, MCKENNIE WESTON, LUKEBAKIO DODI, LUKAKU ROMELU"",
        ""aetScore"": ""2-4"",
        ""etScorers"": ""DE BRUYNE KEVIN, LUKAKU ROMELU"",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-2"",
        ""scorers"": ""BALOGUN FOLARIN, BALOGUN FOLARIN, DOKU JEREMY, TIELEMANS YOURI"",
        ""aetScore"": ""3-3"",
        ""etScorers"": ""PULISIC CHRISTIAN, LUKAKU ROMELU"",
        ""pensScore"": ""3-4"",
        ""points"": 3,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-2"",
        ""scorers"": ""PEPI RICARDO, PULISIC CHRISTIAN, LUKAKU ROMELU, TROSSARD LEANDRO"",
        ""aetScore"": ""2-2"",
        ""etScorers"": """",
        ""pensScore"": ""3-4"",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""United States"",
        ""score"": ""1-1"",
        ""scorers"": ""BALOGUN FOLARIN, LUKAKU ROMELU"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""5-4"",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Belgium"",
        ""score"": ""1-2"",
        ""scorers"": ""PULISIC CHRISTIAN, DE BRUYNE KEVIN, LUKAKU ROMELU"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""United States"",
        ""score"": ""1-1"",
        ""scorers"": ""BALOGUN FOLARIN, DE BRUYNE KEVIN"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""4-3"",
        ""points"": 0,
        ""ppTier"": """"
      }
    }
  },
  ""95"": {
    ""result"": {
      ""winner"": ""Argentina"",
      ""score"": ""3-2"",
      ""scorers"": ""ROMERO CRISTIAN, MESSI LIONEL, FERNANDEZ ENZO, YASSER IBRAHIM, MOSTAFA ZICO"",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": """"
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-1"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, ALVAREZ JULIAN, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-1"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, PAZ NICO, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-1"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, ALVAREZ JULIAN, MOSTAFA ZICO"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-1"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, ALVAREZ JULIAN, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-1"",
        ""scorers"": ""MARTINEZ LAUTARO, MESSI LIONEL, MESSI LIONEL, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Argentina"",
        ""score"": ""1-1"",
        ""scorers"": ""MESSI LIONEL, MOHAMED SALAH"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""5-4"",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Sagar"": {
        ""winner"": ""Argentina"",
        ""score"": ""2-1"",
        ""scorers"": ""MESSI LIONEL, ALVAREZ JULIAN, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Argentina"",
        ""score"": ""3-2"",
        ""scorers"": ""MESSI LIONEL, MESSI LIONEL, MESSI LIONEL, EMAM ASHOUR, MOHAMED SALAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
        ""ppTier"": """"
      }
    }
  },
  ""96"": {
    ""result"": {
      ""winner"": ""Switzerland"",
      ""score"": ""0-0"",
      ""scorers"": """",
      ""aetScore"": """",
      ""etScorers"": """",
      ""pensScore"": ""4-3""
    },
    ""players"": {
      ""Chaitanya P"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-2"",
        ""scorers"": ""EMBOLO BREEL, DIAZ LUIS, SUAREZ LUIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Aditya"": {
        ""winner"": ""Colombia"",
        ""score"": ""2-2"",
        ""scorers"": ""NDOYE DAN, EMBOLO BREEL, DIAZ LUIS, DIAZ LUIS"",
        ""aetScore"": ""2-2"",
        ""etScorers"": """",
        ""pensScore"": ""2-4"",
        ""points"": 4,
        ""ppTier"": """"
      },
      ""Mystery Player"": {
        ""winner"": ""Switzerland"",
        ""score"": ""2-2"",
        ""scorers"": ""EMBOLO BREEL, VARGAS RUBEN, DIAZ LUIS, MUNOZ DANIEL"",
        ""aetScore"": ""2-2"",
        ""etScorers"": """",
        ""pensScore"": ""5-4"",
        ""points"": 7,
        ""ppTier"": """"
      },
      ""Tejasva"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-2"",
        ""scorers"": ""EMBOLO BREEL, DIAZ LUIS, SUAREZ LUIS"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
        ""ppTier"": """"
      },
      ""Varun"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-1"",
        ""scorers"": ""EMBOLO BREEL, DIAZ LUIS"",
        ""aetScore"": ""1-2"",
        ""etScorers"": ""CORDOBA JHON"",
        ""pensScore"": """",
        ""points"": 2,
        ""ppTier"": """"
      },
      ""Joker"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-1"",
        ""scorers"": ""EMBOLO BREEL, MUNOZ DANIEL"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""4-5"",
        ""points"": 4,
        ""ppTier"": """"
      },
      ""Chaitanya M"": {
        ""winner"": ""Colombia"",
        ""score"": ""1-1"",
        ""scorers"": ""EMBOLO BREEL, DIAZ LUIS"",
        ""aetScore"": ""1-1"",
        ""etScorers"": """",
        ""pensScore"": ""3-4"",
        ""points"": 4,
        ""ppTier"": """"
      }
    }
  }
};
