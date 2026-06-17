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
      },
      ""Rohit"": {
        ""winner"": ""Mexico"",
        ""score"": ""2-1"",
        ""scorers"": ""JIMENEZ RAUL, QUINONES JULIAN, APPOLLIS OSWIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 7,
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
      },
      ""Rohit"": {
        ""winner"": ""South Korea"",
        ""score"": ""2-1"",
        ""scorers"": ""SON HEUNGMIN, LEE KANGIN, SCHICK PATRIK"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 8,
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
      },
      ""Rohit"": {
        ""winner"": ""Canada"",
        ""score"": ""2-1"",
        ""scorers"": ""DAVID JONATHAN, BUCHANAN TAJON, DZEKO EDIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
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
      },
      ""Rohit"": {
        ""winner"": ""United States"",
        ""score"": ""2-0"",
        ""scorers"": ""PULISIC CHRISTIAN, BALOGUN FOLARIN"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
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
      },
      ""Rohit"": {
        ""winner"": ""Scotland"",
        ""score"": ""0-2"",
        ""scorers"": ""MCTOMINAY SCOTT, ADAMS CHE"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
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
      },
      ""Rohit"": {
        ""winner"": ""Türkiye"",
        ""score"": ""1-2"",
        ""scorers"": ""YENGI TETE, GULER ARDA, CALHANOGLU HAKAN"",
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
      },
      ""Rohit"": {
        ""winner"": ""Draw"",
        ""score"": ""1-1"",
        ""scorers"": ""VINICIUS JUNIOR, DIAZ BRAHIM"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 10,
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
      },
      ""Rohit"": {
        ""winner"": ""Switzerland"",
        ""score"": ""0-2"",
        ""scorers"": ""NDOYE DAN, OKAFOR NOAH"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 0,
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
      },
      ""Rohit"": {
        ""winner"": ""Germany"",
        ""score"": ""4-0"",
        ""scorers"": ""MUSIALA JAMAL, WOLTEMADE NICK, HAVERTZ KAI, WIRTZ FLORIAN"",
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
      },
      ""Rohit"": {
        ""winner"": ""Uruguay"",
        ""score"": ""0-2"",
        ""scorers"": ""NUNEZ DARWIN, VALVERDE FEDERICO"",
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
      },
      ""Rohit"": {
        ""winner"": ""Iran"",
        ""score"": ""3-0"",
        ""scorers"": ""TAREMI MEHDI, GHODDOS SAMAN, JAHANBAKHSH ALIREZA"",
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
      },
      ""Rohit"": {
        ""winner"": ""Belgium"",
        ""score"": ""2-0"",
        ""scorers"": ""LUKAKU ROMELU, DE BRUYNE KEVIN"",
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
      },
      ""Rohit"": {
        ""winner"": ""France"",
        ""score"": ""2-1"",
        ""scorers"": ""MBAPPE KYLIAN, DEMBELE OUSMANE, MANE SADIO"",
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
      },
      ""Rohit"": {
        ""winner"": ""Norway"",
        ""score"": ""0-2"",
        ""scorers"": ""HAALAND ERLING, SORLOTH ALEXANDER"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 5,
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
      },
      ""Rohit"": {
        ""winner"": ""Argentina"",
        ""score"": ""2-0"",
        ""scorers"": ""MESSI LIONEL, ALVAREZ JULIAN"",
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
      },
      ""Rohit"": {
        ""winner"": ""Austria"",
        ""score"": ""2-0"",
        ""scorers"": ""GREGORITSCH MICHAEL, SABITZER MARCEL"",
        ""aetScore"": """",
        ""etScorers"": """",
        ""pensScore"": """",
        ""points"": 3,
        ""ppTier"": """"
      }
    }
  }
};
