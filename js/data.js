// ============================================================
// DATA.JS — Hardcoded fixtures and squads for FPL WC26
// This file eliminates API calls for static data
//
// HOW TO UPDATE KNOCKOUT FIXTURES:
// ─────────────────────────────────
// After group stage (June 28): Update ROUND_OF_16 section
// After Round of 16 (July 4-5): Update QUARTER_FINALS section
// Semi finals + Final stay dynamic (fetched from Sheet via API)
//
// DYNAMIC_FROM_MATCH_ID controls the cutoff:
// Matches >= this ID are fetched from the API
// Currently set to 97 (semi finals onwards)
// ============================================================

const DYNAMIC_FROM_MATCH_ID = 97;

// ── Group Stage Fixtures (Matches 1-72) ──────────────────────
// DO NOT EDIT — these are final and correct
const GROUP_STAGE_FIXTURES = [
  { matchId: 1,  home: "Mexico",                  away: "South Africa",          kickoffUTC: "2026-06-11 19:00:00" },
  { matchId: 2,  home: "South Korea",             away: "Czechia",               kickoffUTC: "2026-06-12 02:00:00" },
  { matchId: 3,  home: "Canada",                  away: "Bosnia And Herzegovina", kickoffUTC: "2026-06-12 19:00:00" },
  { matchId: 4,  home: "United States",           away: "Paraguay",              kickoffUTC: "2026-06-13 01:00:00" },
  { matchId: 5,  home: "Haiti",                   away: "Scotland",              kickoffUTC: "2026-06-14 01:00:00" },
  { matchId: 6,  home: "Australia",               away: "Türkiye",               kickoffUTC: "2026-06-14 04:00:00" },
  { matchId: 7,  home: "Brazil",                  away: "Morocco",               kickoffUTC: "2026-06-13 22:00:00" },
  { matchId: 8,  home: "Qatar",                   away: "Switzerland",           kickoffUTC: "2026-06-13 19:00:00" },
  { matchId: 9,  home: "Ivory Coast",             away: "Ecuador",               kickoffUTC: "2026-06-14 23:00:00" },
  { matchId: 10, home: "Germany",                 away: "Curacao",               kickoffUTC: "2026-06-14 17:00:00" },
  { matchId: 11, home: "Netherlands",             away: "Japan",                 kickoffUTC: "2026-06-14 20:00:00" },
  { matchId: 12, home: "Sweden",                  away: "Tunisia",               kickoffUTC: "2026-06-15 02:00:00" },
  { matchId: 13, home: "Saudi Arabia",            away: "Uruguay",               kickoffUTC: "2026-06-15 22:00:00" },
  { matchId: 14, home: "Spain",                   away: "Cape Verde",            kickoffUTC: "2026-06-15 16:00:00" },
  { matchId: 15, home: "Iran",                    away: "New Zealand",           kickoffUTC: "2026-06-16 01:00:00" },
  { matchId: 16, home: "Belgium",                 away: "Egypt",                 kickoffUTC: "2026-06-15 19:00:00" },
  { matchId: 17, home: "France",                  away: "Senegal",               kickoffUTC: "2026-06-16 19:00:00" },
  { matchId: 18, home: "Iraq",                    away: "Norway",                kickoffUTC: "2026-06-16 22:00:00" },
  { matchId: 19, home: "Argentina",               away: "Algeria",               kickoffUTC: "2026-06-17 01:00:00" },
  { matchId: 20, home: "Austria",                 away: "Jordan",                kickoffUTC: "2026-06-17 04:00:00" },
  { matchId: 21, home: "England",                 away: "Croatia",               kickoffUTC: "2026-06-17 20:00:00" },
  { matchId: 22, home: "Ghana",                   away: "Panama",                kickoffUTC: "2026-06-17 23:00:00" },
  { matchId: 23, home: "Portugal",                away: "Congo DR",              kickoffUTC: "2026-06-17 17:00:00" },
  { matchId: 24, home: "Uzbekistan",              away: "Colombia",              kickoffUTC: "2026-06-18 02:00:00" },
  { matchId: 25, home: "Czechia",                 away: "South Africa",          kickoffUTC: "2026-06-18 16:00:00" },
  { matchId: 26, home: "Switzerland",             away: "Bosnia And Herzegovina", kickoffUTC: "2026-06-18 19:00:00" },
  { matchId: 27, home: "Canada",                  away: "Qatar",                 kickoffUTC: "2026-06-18 22:00:00" },
  { matchId: 28, home: "Mexico",                  away: "South Korea",           kickoffUTC: "2026-06-19 01:00:00" },
  { matchId: 29, home: "Brazil",                  away: "Haiti",                 kickoffUTC: "2026-06-20 01:00:00" },
  { matchId: 30, home: "Scotland",                away: "Morocco",               kickoffUTC: "2026-06-19 22:00:00" },
  { matchId: 31, home: "Türkiye",                 away: "Paraguay",              kickoffUTC: "2026-06-20 04:00:00" },
  { matchId: 32, home: "United States",           away: "Australia",             kickoffUTC: "2026-06-19 19:00:00" },
  { matchId: 33, home: "Germany",                 away: "Ivory Coast",           kickoffUTC: "2026-06-20 20:00:00" },
  { matchId: 34, home: "Ecuador",                 away: "Curacao",               kickoffUTC: "2026-06-21 00:00:00" },
  { matchId: 35, home: "Netherlands",             away: "Sweden",                kickoffUTC: "2026-06-20 17:00:00" },
  { matchId: 36, home: "Tunisia",                 away: "Japan",                 kickoffUTC: "2026-06-21 04:00:00" },
  { matchId: 37, home: "Uruguay",                 away: "Cape Verde",            kickoffUTC: "2026-06-21 22:00:00" },
  { matchId: 38, home: "Spain",                   away: "Saudi Arabia",          kickoffUTC: "2026-06-21 16:00:00" },
  { matchId: 39, home: "Belgium",                 away: "Iran",                  kickoffUTC: "2026-06-21 19:00:00" },
  { matchId: 40, home: "New Zealand",             away: "Egypt",                 kickoffUTC: "2026-06-22 01:00:00" },
  { matchId: 41, home: "Norway",                  away: "Senegal",               kickoffUTC: "2026-06-23 00:00:00" },
  { matchId: 42, home: "France",                  away: "Iraq",                  kickoffUTC: "2026-06-22 21:00:00" },
  { matchId: 43, home: "Argentina",               away: "Austria",               kickoffUTC: "2026-06-22 17:00:00" },
  { matchId: 44, home: "Jordan",                  away: "Algeria",               kickoffUTC: "2026-06-23 03:00:00" },
  { matchId: 45, home: "England",                 away: "Ghana",                 kickoffUTC: "2026-06-23 20:00:00" },
  { matchId: 46, home: "Panama",                  away: "Croatia",               kickoffUTC: "2026-06-23 23:00:00" },
  { matchId: 47, home: "Portugal",                away: "Uzbekistan",            kickoffUTC: "2026-06-23 17:00:00" },
  { matchId: 48, home: "Colombia",                away: "Congo DR",              kickoffUTC: "2026-06-24 02:00:00" },
  { matchId: 49, home: "Scotland",                away: "Brazil",                kickoffUTC: "2026-06-24 22:00:00" },
  { matchId: 50, home: "Morocco",                 away: "Haiti",                 kickoffUTC: "2026-06-24 22:00:00" },
  { matchId: 51, home: "Switzerland",             away: "Canada",                kickoffUTC: "2026-06-24 19:00:00" },
  { matchId: 52, home: "Bosnia And Herzegovina",  away: "Qatar",                 kickoffUTC: "2026-06-24 19:00:00" },
  { matchId: 53, home: "Czechia",                 away: "Mexico",                kickoffUTC: "2026-06-25 01:00:00" },
  { matchId: 54, home: "South Africa",            away: "South Korea",           kickoffUTC: "2026-06-25 01:00:00" },
  { matchId: 55, home: "Curacao",                 away: "Ivory Coast",           kickoffUTC: "2026-06-25 20:00:00" },
  { matchId: 56, home: "Ecuador",                 away: "Germany",               kickoffUTC: "2026-06-25 20:00:00" },
  { matchId: 57, home: "Japan",                   away: "Sweden",                kickoffUTC: "2026-06-25 23:00:00" },
  { matchId: 58, home: "Tunisia",                 away: "Netherlands",           kickoffUTC: "2026-06-25 23:00:00" },
  { matchId: 59, home: "Türkiye",                 away: "United States",         kickoffUTC: "2026-06-26 02:00:00" },
  { matchId: 60, home: "Paraguay",                away: "Australia",             kickoffUTC: "2026-06-26 02:00:00" },
  { matchId: 61, home: "Norway",                  away: "France",                kickoffUTC: "2026-06-26 19:00:00" },
  { matchId: 62, home: "Senegal",                 away: "Iraq",                  kickoffUTC: "2026-06-26 19:00:00" },
  { matchId: 63, home: "Egypt",                   away: "Iran",                  kickoffUTC: "2026-06-27 03:00:00" },
  { matchId: 64, home: "New Zealand",             away: "Belgium",               kickoffUTC: "2026-06-27 03:00:00" },
  { matchId: 65, home: "Cape Verde",              away: "Saudi Arabia",          kickoffUTC: "2026-06-27 00:00:00" },
  { matchId: 66, home: "Uruguay",                 away: "Spain",                 kickoffUTC: "2026-06-27 00:00:00" },
  { matchId: 67, home: "Panama",                  away: "England",               kickoffUTC: "2026-06-27 21:00:00" },
  { matchId: 68, home: "Croatia",                 away: "Ghana",                 kickoffUTC: "2026-06-27 21:00:00" },
  { matchId: 69, home: "Algeria",                 away: "Austria",               kickoffUTC: "2026-06-28 02:00:00" },
  { matchId: 70, home: "Jordan",                  away: "Argentina",             kickoffUTC: "2026-06-28 02:00:00" },
  { matchId: 71, home: "Colombia",                away: "Portugal",              kickoffUTC: "2026-06-27 23:30:00" },
  { matchId: 72, home: "Congo DR",                away: "Uzbekistan",            kickoffUTC: "2026-06-27 23:30:00" },
];

// ── Round of 16 (Matches 73-88) ──────────────────────────────
// UPDATE AFTER GROUP STAGE ENDS (June 28)
// Replace "TBD" placeholders with actual qualified team names
// Example: change { matchId: 73, home: "TBD", away: "TBD" }
//      to: { matchId: 73, home: "France", away: "Argentina" }
const ROUND_OF_16_FIXTURES = [
  { matchId: 73,  home: "TBD", away: "TBD", kickoffUTC: "2026-06-28 19:00:00" },
  { matchId: 74,  home: "TBD", away: "TBD", kickoffUTC: "2026-06-29 20:30:00" },
  { matchId: 75,  home: "TBD", away: "TBD", kickoffUTC: "2026-06-30 01:00:00" },
  { matchId: 76,  home: "TBD", away: "TBD", kickoffUTC: "2026-06-29 17:00:00" },
  { matchId: 77,  home: "TBD", away: "TBD", kickoffUTC: "2026-06-30 21:00:00" },
  { matchId: 78,  home: "TBD", away: "TBD", kickoffUTC: "2026-06-30 18:00:00" },
  { matchId: 79,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-01 01:00:00" },
  { matchId: 80,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-01 16:00:00" },
  { matchId: 81,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-02 00:00:00" },
  { matchId: 82,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-01 20:00:00" },
  { matchId: 83,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-02 23:00:00" },
  { matchId: 84,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-02 19:00:00" },
  { matchId: 85,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-03 03:00:00" },
  { matchId: 86,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-03 22:00:00" },
  { matchId: 87,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-04 01:30:00" },
  { matchId: 88,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-03 18:00:00" },
];

// ── Quarter Finals (Matches 89-96) ───────────────────────────
// UPDATE AFTER ROUND OF 16 ENDS (July 4-5)
const QUARTER_FINAL_FIXTURES = [
  { matchId: 89,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-04 17:00:00" },
  { matchId: 90,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-04 21:00:00" },
  { matchId: 91,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-05 20:00:00" },
  { matchId: 92,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-06 00:00:00" },
  { matchId: 93,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-06 19:00:00" },
  { matchId: 94,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-07 00:00:00" },
  { matchId: 95,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-07 16:00:00" },
  { matchId: 96,  home: "TBD", away: "TBD", kickoffUTC: "2026-07-07 20:00:00" },
];

// ── All hardcoded fixtures combined ──────────────────────────
const HARDCODED_FIXTURES = [
  ...GROUP_STAGE_FIXTURES,
  ...ROUND_OF_16_FIXTURES,
  ...QUARTER_FINAL_FIXTURES,
];

// ── Squad Data ───────────────────────────────────────────────
// 48 teams — all players listed by NAME ON SHIRT
// To update a player: find their team, find their name, change it
const SQUADS = {
  "Algeria": ["MASTIL","MANDI","ABADA","TOUGAI","BELAID","ZERROUKI","MAHREZ","AOUAR","GOUIRI","CHAIBI","HADJ MOUSSA","BENBOUALI","HADJAM","BOUDAOUI","AIT-NOURI","BENBOT","BELGHALI","AMOURA","BENTALEB","BOULBINA","BENSEBAINI","MAZA","ZIDANE","TITRAOUI","GHEDJEMIS","CHERGUI"],
  "Argentina": ["MUSSO","BALERDI","TAGLIAFICO","MONTIEL","PAREDES","MARTINEZ","DE PAUL","BARCO","ALVAREZ","MESSI","LO CELSO","RULLI","ROMERO","PALACIOS","GONZALEZ","ALMADA","SIMEONE","NICO PAZ","OTAMENDI","MAC ALLISTER","LOPEZ","L. MARTINEZ","E. MARTINEZ","E. FERNANDEZ","MEDINA","MOLINA"],
  "Australia": ["RYAN","DEGENEK","CIRCATI","ITALIANO","BOS","GERIA","LECKIE","METCALFE","TOURE","HRUSTIC","MABIL","IZZO","O'NEILL","DEVLIN","TREWIN","BEHICH","IRANKUNDA","BEACH","SOUTTAR","VOLPATO","BURGESS","IRVINE","VELUPILLAY","OKON-ENGSTLER","HERRINGTON","YENGI"],
  "Austria": ["SCHLAGER","AFFENGRUBER","DANSO","XAVER","POSCH","SEIWALD","ARNAUTOVIC","ALABA","SABITZER","GRILLITSCH","GREGORITSCH","WIEGELE","PENTZ","KALAJDZIC","LIENHART","MWENE","CHUKWUEMEKA","SCHMID","BAUMGARTNER","LAIMER","WIMMER","PRASS","FRIEDL","WANNER","SVOBODA","SCHÖPF"],
  "Belgium": ["COURTOIS","DEBAST","THEATE","MECHELE","DE CUYPER","WITSEL","DE BRUYNE","TIELEMANS","LUKAKU","TROSSARD","DOKU","LAMMENS","PENDERS","LUKEBAKIO","MEUNIER","DE WINTER","DE KETELAERE","SEYS","MOREIRA","VANAKEN","CASTAGNE","SAELEMAEKERS","RASKIN","ONANA","NGOY","FERNANDEZ-PARDO"],
  "Bosnia And Herzegovina": ["VASILJ","MUJAKIC","HADZIKADUNIC","MUHAREMOVIC","KOLASINAC","TAHIROVIC","DEDIC","GIGOVIC","BAZDAR","DEMIROVIC","DZEKO","JURKAS","BASIC","SUNJIC","MEMIC","HADZIAHMETOVIC","BURNIC","KATIC","ALAJBEGOVIC","BAJRAKTAREVIC","RADELJIC","ZLOMISLIC","TABAKOVIC","CELIK","LUKIC","MAHMIC"],
  "Brazil": ["A. BECKER","WESLEY","GABRIEL","MARQUINHOS","CASEMIRO","ALEX SANDRO","VINI JR.","BRUNO G.","CUNHA","NEYMAR JR","RAPHINHA","WEVERTON","DANILO","BREMER","LÉO PEREIRA","DOUGLAS S.","FABINHO","DANILO S.","ENDRICK","L. PAQUETÁ","L. HENRIQUE","MARTINELLI","EDERSON","IBAÑEZ","THIAGO","RAYAN"],
  "Cape Verde": ["VOZINHA","STOPIRA","DINEY BORGES","PICO LOPES","LOGAN COSTA","KEVIN L.","JOVANE","JOÃO PAULO","BENCHIMOL","MONTEIRO","RODRIGUES","MARCIO","LOPES CABRAL","D. DUARTE","L. DUARTE","Y. SEMEDO","SEMEDO","ARCANJO","LIVRAMENTO","RYAN","DA COSTA","MOREIRA","DOS SANTOS","WAGNER P.","KELVIN","HÉLIO"],
  "Canada": ["ST. CLAIR","JOHNSTON","JONES","DE FOUGEROLLES","WATERMAN","CHOINIÈRE","EUSTÀQUIO","KONÉ","LARIN","J. DAVID","MILLAR","OLUWASEYI","CORNELIUS","SHAFFELBURG","BOMBITO","CRÉPEAU","BUCHANAN","GOODMAN","DAVIES","AHMED","OSORIO","LARYEA","SIGUR","PROMISE","SALIBA","MARCELO"],
  "Colombia": ["OSPINA","D. MUÑOZ","J. LUCUMI","ARIAS","K. CASTAÑO","RICHARD RIOS","LUIS DIAZ","CARRASCAL","CORDOBA","JAMES","J. ARIAS","C. VARGAS","Y. MINA","PUERTA","PORTILLA","J. LERMA","J. MOJICA","W. DITTA","C. HERNANDEZ","QUINTERO","CAMPAZ","MACHADO","SANCHEZ","MONTERO","SUAREZ","A. GOMEZ"],
  "Congo DR": ["MPASI","WAN BISSAKA","KAPUADI","TUANZEBE","BATUBINSIKA","MUKAU","MBUKU","MOUTOUSSAMY","CIPENGA","BONGONDA","KAKUTA","J. KAYEMBE","ELIA","SADIKI","AARON TSHIBOLA","FAYULU","BAKAMBU","PICKEL","MAYELE","WISSA","EPOLO","MBEMBA","BANZA","G. KALULU","KAYEMBE","MASUAKU"],
  "Croatia": ["LIVAKOVIĆ","STANIŠIĆ","PONGRAČIĆ","GVARDIOL","ĆALETA-CAR","ŠUTALO","MORO","KOVAČIĆ","KRAMARIĆ","MODRIĆ","BUDIMIR","PANDUR","VLAŠIĆ","PERIŠIĆ","PAŠALIĆ","BATURINA","P. SUČIĆ","JAKIĆ","FRUK","MATANOVIĆ","SUČIĆ","VUŠKOVIĆ","KOTARSKI","M. PAŠALIĆ","ERLIĆ","MUSA"],
  "Curacao": ["ROOM","SAMBO","GAARI","VAN EIJMA","FLORANUS","ROEMERATOE","J. BACUNA","COMENENCIA","LOCADIA","L. BACUNA","ANTONISSE","HANSEN","NOSLIN","GORRE","MARTHA","MARGARITHA","KUWAS","OBISPO","KASTANEER","BRENET","CHONG","FELIDA","BAZOER","FONVILLE","BODAK","DOORNBUSCH"],
  "Czechia": ["KOVÁŘ","ZIMA","HOLEŠ","HRANÁČ","COUFAL","CHALOUPEK","KREJČÍ","DARIDA","HLOŽEK","SCHICK","KUCHTA","ČERV","CHYTIL","JURÁSEK","ŠULC","STANĚK","PROVOD","SADÍLEK","CHORÝ","ZELENÝ","DOUDĚRA","SOUČEK","HORNÍČEK","SOJKA","SOCHŮREK","VIŠINSKÝ"],
  "Ecuador": ["GALINDEZ","TORRES","HINCAPIE","ORDÓÑEZ","ALCIVAR","PACHO","ESTUPIÑÁN","A. VALENCIA","YEBOAH ZAMORA","PAEZ","RODRIGUEZ","RAMÍREZ","E. VALENCIA","MINDA","VITE","J. CAICEDO","PRECIADO","CASTILLO","PLATA","ANGULO","FRANCO","VALLE","M. CAICEDO","AREVALO","POROZO","MEDINA"],
  "Egypt": ["M. ELSHENAWY","YASSER","M. HANY","HOSSAM","R. RABIAA","M. ABDELMONIEM","M. TREZEGUET","E. ASHOUR","ABDELKARIM","M. SALAH","ZICO","H. HASSAN","A. FATOUH","H. FATHY","K. HAFEZ","M. SOLIMAN","M. LASHIN","DONGA","M. ATTIA","I. ADEL","M. SABER","MARMOUSH","SHOUBIR","T. ALAA","ZIZO","M. ALAA"],
  "England": ["PICKFORD","KONSA","O'REILLY","RICE","STONES","GUEHI","SAKA","ANDERSON","KANE","BELLINGHAM","RASHFORD","LIVRAMENTO","D. HENDERSON","J. HENDERSON","BURN","MAINOO","ROGERS","GORDON","WATKINS","MADUEKE","EZE","TONEY","TRAFFORD","JAMES","SPENCE","QUANSAH"],
  "France": ["SAMBA","GUSTO","DIGNE","UPAMECANO","KOUNDE","KONE","DEMBELE","TCHOUAMENI","THURAM","MBAPPE","OLISE","BARCOLA","KANTE","RABIOT","KONATE","MAIGNAN","SALIBA","ZAIRE EMERY","T. HERNANDEZ","DOUE","L. HERNANDEZ","MATETA","RISSER","CHERKI","AKLIOUCHE","LACROIX"],
  "Germany": ["NEUER","RÜDIGER","ANTON","TAH","PAVLOVIĆ","KIMMICH","HAVERTZ","GORETZKA","LEWELING","MUSIALA","WOLTEMADE","BAUMANN","GROß","BEIER","SCHLOTTERBECK","STILLER","WIRTZ","BROWN","SANÉ","AMIRI","NÜBEL","RAUM","NMECHA","THIAW","KARL","UNDAV"],
  "Ghana": ["ZIGI","SEIDU","CALEB","ADJETEY","THOMAS","SULEMAN","FATAWU","SIBO","AYEW","ASANTE","SEMENYO","ANANG","BAAH","MENSAH","OWUSU","ASARE","BABA","OPOKU","WILLIAMS","BOAKYE","PEPRAH","KAMALDEEN","LUCKASSEN","NUAMAH","ADU","SENEYA"],
  "Haiti": ["PLACIDE","ARCUS","THERMONCY","ADE","DELCROIX","SAINTE","ETIENNE JR","EXPERIENCE","NAZON","BELLEGARDE","DEEDSON","A. PIERRE","LACROIX","L. PIERRE","PROVIDENCE","JOSEPH","JEAN JACQUES","ISIDOR","FORTUNE","PIERROT","CASIMIR","DUVERNE","DUVERGER","PAUGIN","SIMON","W. PIERRE"],
  "Iran": ["BEIRANVAND","SALEH","E. HAJISAFI","SHOJA","M. MOHAMMADI","S. EZATOLAHI","A. JAHANBAKHSH","M. MOHEBBI","TAREMI","MEHDI GHAYEDI","A. ALIPOUR","PAYAM","KANANI","GHODDOS","ROOZBEH","M. TORABI","ARYA","AMIRHOSSEIN","ALI","SHAHRIYAR","MOHAMMAD","HOSSEINI","RAMIN","DARGAHI","DANIAL","RAZAGH"],
  "Iraq": ["FAHAD","REBIN","HUSSEIN","ZAID T.","AKAM","MUNAF","YOUSSEF","IBRAHIM","AL-HAMADI","MOHANAD","AHMED Q.","JALAL","ALI Y.","Z.IQBAL","AHMED","AL-AMMARI","ALI J.","AYMEN","K. YAKOB","AIMAR","MARKO","AHMED B.","DOSKI","ZAID I.","MUSTAFA","FRANS"],
  "Ivory Coast": ["Y. FOFANA","O. DIOMANDE","G. KONAN","SERI","SINGO","FOFANA","KOSSOUNOU","KESSIE","BONNY","ADINGRA","YAN DIOMANDE","WAHI","OPERI","DIAKITE","AMAD","KONE","G. DOUE","SANGARE","PEPE","AGBADOU","NDICKA","GUESSAND","LAFONT","TOURE","GUIAGON","INAO"],
  "Japan": ["SUZUKI","SUGAWARA","TANIGUCHI","ITAKURA","NAGATOMO","ENDO","TANAKA","KUBO","GOTO","DOAN","DAIZEN","OSAKO","NAKAMURA","ITO","KAMADA","WATANABE","Y. SUZUKI","AYASE","OGAWA","SEKO","H. ITO","TOMIYASU","HAYAKAWA","SANO","J. SUZUKI","SHIOGAI"],
  "Jordan": ["YAZEED","ABU HASHEESH","NASIB","ABU DAHAB","ALARAB","JAMOUS","ABU ZRAIQ","ALRAWABDEH","OLWAN","ALTAMARI","ODEH","BANI ATEYAH","ALMARDI","RAJA'EI","SA'DEH","ABU ALNADI","SALEEM","SABRA","SA'ED","ABU TAHA","NIZAR","ALFAKHORI","EHSAN","AZAIZEH","ALDAOUD","BADAWI"],
  "Mexico": ["R. RANGEL","J. SÁNCHEZ","C. MONTES","E. ÁLVAREZ","J. VÁSQUEZ","E. LIRA","L. ROMO","FIDALGO","RAÚL","A. VEGA","S. GIMENEZ","C. ACEVEDO","G. OCHOA","A. GONZÁLEZ","I. REYES","J. QUIÑONES","ORBELÍN","O. VARGAS","G. MORA","M. CHÁVEZ","C. HUERTA","G. MARTÍNEZ","J. GALLARDO","L. CHÁVEZ","R. ALVARADO","B. GUTIÉRREZ"],
  "Morocco": ["BONO","HAKIMI","MAZRAOUI","AMRABAT","AGUERD","BOUADDI","TALBI","OUNAHI","RAHIMI","BRAHIM","SAIBARI","EL KAJOUI","EL OUAHDI","ISSA","EL MOURABET","YASSINE","EZZALZOULI","RIAD","BELAMMARI","EL KAABI","AMAIMOUNI","TAGNAOUTI","EL KHANNOUSS","EL AYNAOUI","HALHAL","SALAH-EDDINE"],
  "Netherlands": ["VERBRUGGEN","J. TIMBER","DE ROON","VIRGIL","AKÉ","VAN HECKE","KLUIVERT","GRAVENBERCH","WEGHORST","MEMPHIS","GAKPO","WIEFFER","ROEFS","REIJNDERS","VAN DE VEN","TIL","LANG","MALEN","BROBBEY","KOOPMEINERS","F. DE JONG","DUMFRIES","FLEKKEN","SUMMERVILLE","HATO","Q. TIMBER"],
  "New Zealand": ["CROCOMBE","PAYNE","DE VRIES","BINDON","BOXALL","BELL","GARBETT","STAMENIC","WOOD","SINGH","JUST","PAULSEN","CACACE","RUFER","PIJNAKER","SURMAN","BARBAROUSES","WAINE","OLD","MCCOWATT","RANDALL","WOUD","THOMAS","ELLIOT","BAYLISS","SMITH"],
  "Norway": ["NYLAND","THORSBY","VASSBAKK AJER","ØSTIGÅRD","MØLLER WOLFE","BERG","SØRLOTH","BERGE","BRAUT HAALAND","ØDEGAARD","STRAND LARSEN","TANGVIK","SELVIK","AURSNES","BJØRKAN","HOLMGREN","HEGGEM","THORSTVEDT","AASGAARD","NUSA","SCHJELDERUP","BOBB","HAUGE","LANGÅS","FALCHENER","RYERSON"],
  "Panama": ["MEJÍA","BLACKMAN","CORDOBA","F. ESCOBAR","FARIÑA","MARTÍNEZ","J.L. RODRÍGUEZ","CARRASQUILLA","T. RODRÍGUEZ","ISMAEL","BÁRCENAS","SAMUDIO","RAMOS","HARVEY","DAVIS","ANDRADE","FAJARDO","WATERMAN","QUINTERO","GODOY","YANIS","MOSQUERA","A. MURILLO","LONDOÑO","MILLER","GUTIÉRREZ"],
  "Paraguay": ["FERNANDEZ","VELAZQUEZ","ALDERETE","CACERES","BALBUENA","ALONSO","SOSA","D. GOMEZ","SANABRIA","M. ALMIRON","MAURICIO","O. GILL","CANALE","CUBAS","G. GOMEZ","BOBADILLA","R. GAMARRA","ARCE","ENCISO","OJEDA","AVALOS","OLVEIRA","GALARZA","CABALLERO","PITTA","MAIDANA"],
  "Portugal": ["DIOGO COSTA","N. SEMEDO","RÚBEN DIAS","TOMÁS A.","DALOT","MATHEUS N.","RONALDO","B. FERNANDES","G. RAMOS","BERNARDO","JOÃO FÉLIX","JOSÉ SÁ","RENATO VEIGA","G. INÁCIO","JOÃO NEVES","TRINCÃO","RAFA LEÃO","NETO","G. GUEDES","JOÃO CANCELO","R. NEVES","RUI SILVA","VITINHA","SAMÚ","N. MENDES","F. CONCEIÇÃO"],
  "Qatar": ["ABUNADA","PEDRO","L.MENDES","GUEYE","JASSEM","A. AZIZ","ALAAELDIN","EDMILSON JR.","MUNTARI","ALHAYDOS","AFIF","KARIM","AYOUB","HOMAM","YUSUF","KHOUKHI","A. ALGANEHI","SULTAN","ALMOEZ","A. FATHY","SALAH","BARSHAM","MADIBO","TAHSIN","ALHASHMI","MANAI"],
  "Saudi Arabia": ["ALAQIDI","MAJRASHI","LAJAMI","ALAMRI","ALTAMBAKTI","NASSER","MUSAB","AIMAN","FERAS","SALEM","ALSHEHRI","SAUD","NAWAF","KADISH","ALKHAIBARI","ZIYAD","KHALID","ALHAJJI","ALHAMDDAN","MANDASH","ALOWAIS","ALKASSAR","KANNO","MOTEB","JEHAD","MOHAMMED"],
  "Scotland": ["GUNN","HICKEY","ROBERTSON","MCTOMINAY","HANLEY","TIERNEY","MCGINN","FLETCHER","DYKES","ADAMS","CHRISTIE","KELLY","HENDRY","STEWART","SOUTTAR","HYAM","GANNON DOAK","HIRST","FERGUSON","SHANKLAND","GORDON","PATTERSON","MCLEAN","RALSTON","CURTIS","MCKENNA"],
  "Senegal": ["Y. DIOUF","SARR","KOULIBALY","SECK","GANA","P.I. CISS","DIAO","LAMINE","B. DIENG","MANÉ","JACKSON","CHERIF","NDIAYE","JAKOBS","KRÉPIN","MENDY","P.M. SARR","SARR","NIAKHATE","MBAYE","H. DIARRA","BARA","DIAW","A. MENDY","DIOUF","GUEYE"],
  "South Africa": ["WILLIAMS","MATULUDI","NDAMANE","MOKOENA","MBATHA","MODIBA","APPOLLIS","MOREMI","FOSTER","MOFOKENG","ZWANE","MASEKO","SITHOLE","MBOKAZI","RAYNERS","CHAINE","MAKGOPA","KABINI","SIBISI","MUDAU","OKON","GOSS","ADAMS","MAKHANYA","SEBELEBELE","CROSS"],
  "South Korea": ["SEUNGGYU","HANBEOM","GIHYUK","MINJAE","TAEHYEON","INBEOM","HEUNGMIN","SEUNGHO","GUESUNG","JAESUNG","HEECHAN","BUMKEUN","TAESEOK","WIJE","MOONHWAN","JINSEOB","JUNHO","HYEONGYU","KANGIN","HYUNJUN","HYEONWOO","YOUNGWOO","JENS","JINGYU","JISUNG","DONGGYEONG"],
  "Spain": ["RAYA","MARC PUBILL","GRIMALDO","ERIC","M. LLORENTE","MERINO","FERRAN","FABIÁN","GAVI","OLMO","YEREMY","PEDRO PORRO","JOAN GARCIA","LAPORTE","ALEX B.","RODRIGO","WILLIAMS JR","ZUBIMENDI","LAMINE YAMAL","PEDRI","OYARZABAL","CUBARSÍ","UNAI SIMÓN","CUCURELLA","VICTOR M.V.","B. IGLESIAS"],
  "Sweden": ["ZETTERSTRÖM","LAGERBIELKE","LINDELÖF","HIEN","GUDMUNDSSON","H. JOHANSSON","BERGVALL","SVENSSON","ISAK","NYGREN","ELANGA","V. JOHANSSON","SEMA","EKDAL","STARFELT","KARLSTRÖM","GYÖKERES","AYARI","SVANBERG","SMITH","BERNHARDSSON","ZENELI","NORDFELDT","STROUD","NILSSON","ALI"],
  "Switzerland": ["KOBEL","MUHEIM","WIDMER","ELVEDI","AKANJI","ZAKARIA","EMBOLO","FREULER","MANZAMBI","XHAKA","NDOYE","MVOGO","RODRIGUEZ","JASHARI","SOW","FASSNACHT","VARGAS","CÖMERT","OKAFOR","AEBISCHER","KELLER","RIEDER","AMDOUNI","AMENDA","JAQUEZ","ITTEN"],
  "Tunisia": ["CHAMAKH","ABDI","TALBI","REKIK","AROUS","BRONN","ACHOURI","SAAD","MASTOURI","MEJBRI","GHARBI","BEN OUANES","KHEDIRA","AYARI","BELHADJ MAHMOUD","DAHMEN","SKHIRI","ELLOUMI","CHAOUAT","VALERY","BEN HMIDA","BEN HSAN","NEFFATI","CHIKHAOUI","SLIMANE","TOUNEKTI"],
  "Türkiye": ["MERT","ZEKİ ÇELİK","DEMİRAL","ÇAĞLAR","ÖZCAN","ORKUN KÖKÇÜ","AKTÜRKOĞLU","ARDA GÜLER","DENİZ GÜL","ÇALHANOĞLU","YILDIZ","ALTAY","EREN ELMALI","ABDÜLKERİM","OZAN KABAK","İSMAİL","KAHVECİ","MERT MÜLDÜR","YUNUS","F. KADIOĞLU","BARIŞ","KAAN","UĞURCAN","OĞUZ","SAMET AKAYDIN","CAN UZUN"],
  "United States": ["TURNER","DEST","RICHARDS","ADAMS","A. ROBINSON","TRUSTY","REYNA","MCKENNIE","PEPI","PULISIC","AARONSON","M. ROBINSON","REAM","BERHALTER","ROLDAN","FREEMAN","TILLMAN","ARFSTEN","WRIGHT","BALOGUN","WEAH","MCKENZIE","SCALLY","FREESE","BRADY","ZENDEJAS"],
  "Uruguay": ["S. ROCHET","J.M. GIMÉNEZ","S. CACERES","R. ARAUJO","M. UGARTE","R. BENTANCUR","N. DE LA CRUZ","F. VALVERDE","D. NUÑEZ","G. DE ARRASCAETA","F. PELLISTRI","S. MELE","G. VARELA","A. CANOBBIO","E. MARTINEZ","M. OLIVERA","M. VIÑA","B. RODRIGUEZ","R. AGUIRRE","M. ARAUJO","F. VIÑAS","J. PIQUEREZ","F. MUSLERA","S. BUENO","J.M. SANABRIA","R. ZALAZAR"],
  "Uzbekistan": ["YUSUPOV","KHUSANOV","ALIJONOV","SAYFIEV","ASHURMATOV","MOZGOVOY","SHUKUROV","ISKANDEROV","XAMROBEKOV","MASHARIPOV","URUNOV","NEMATOV","NASRULLAEV","SHOMURODOV","ESHMURODOV","ERGASHEV","KHAMDAMOV","ABDULLAEV","GANIEV","AMONOV","SERGEEV","FAYZULLAEV","ESANOV","KARIMOV","ULMASALIYEV","UROZOV"],
};

// ── Helper: get fixture by matchId ───────────────────────────
function getHardcodedFixture(matchId) {
  return HARDCODED_FIXTURES.find(f => f.matchId == matchId) || null;
}

// ── Helper: get squad for a team ─────────────────────────────
function getSquadForTeam(teamName) {
  return SQUADS[teamName] || [];
}

// ── Helper: get all teams sorted ─────────────────────────────
function getAllTeams() {
  return Object.keys(SQUADS).sort();
}
