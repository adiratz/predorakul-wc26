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
  { matchId: 29, home: "Brazil",                  away: "Haiti",                 kickoffUTC: "2026-06-20 00:30:00" },
  { matchId: 30, home: "Scotland",                away: "Morocco",               kickoffUTC: "2026-06-19 22:00:00" },
  { matchId: 31, home: "Türkiye",                 away: "Paraguay",              kickoffUTC: "2026-06-20 03:00:00" },
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
  { matchId: 73,  home: "South Africa", away: "Canada", kickoffUTC: "2026-06-28 19:00:00" },
  { matchId: 74,  home: "Germany", away: "Paraguay", kickoffUTC: "2026-06-29 20:30:00" },
  { matchId: 75,  home: "Netherlands", away: "Morocco", kickoffUTC: "2026-06-30 01:00:00" },
  { matchId: 76,  home: "Brazil", away: "Japan", kickoffUTC: "2026-06-29 17:00:00" },
  { matchId: 77,  home: "France", away: "Sweden", kickoffUTC: "2026-06-30 21:00:00" },
  { matchId: 78,  home: "Ivory Coast", away: "Norway", kickoffUTC: "2026-06-30 17:00:00" },
  { matchId: 79,  home: "Mexico", away: "Ecuador", kickoffUTC: "2026-07-01 01:00:00" },
  { matchId: 80,  home: "England", away: "Congo DR", kickoffUTC: "2026-07-01 16:00:00" },
  { matchId: 81,  home: "United States", away: "Bosnia And Herzegovina", kickoffUTC: "2026-07-02 00:00:00" },
  { matchId: 82,  home: "Belgium", away: "Senegal", kickoffUTC: "2026-07-01 20:00:00" },
  { matchId: 83,  home: "Portugal", away: "Croatia", kickoffUTC: "2026-07-02 23:00:00" },
  { matchId: 84,  home: "Spain", away: "Austria", kickoffUTC: "2026-07-02 19:00:00" },
  { matchId: 85,  home: "Switzerland", away: "Algeria", kickoffUTC: "2026-07-03 03:00:00" },
  { matchId: 86,  home: "Argentina", away: "Cape Verde", kickoffUTC: "2026-07-03 22:00:00" },
  { matchId: 87,  home: "Colombia", away: "Ghana", kickoffUTC: "2026-07-04 01:30:00" },
  { matchId: 88,  home: "Australia", away: "Egypt", kickoffUTC: "2026-07-03 18:00:00" },
];

// ── Quarter Finals (Matches 89-96) ───────────────────────────
// UPDATE AFTER ROUND OF 16 ENDS (July 4-5)
const QUARTER_FINAL_FIXTURES = [
  { matchId: 89,  home: "Canada", away: "Morocco", kickoffUTC: "2026-07-04 17:00:00" },
  { matchId: 90,  home: "Paraguay", away: "France", kickoffUTC: "2026-07-04 21:00:00" },
  { matchId: 91,  home: "Brazil", away: "Norway", kickoffUTC: "2026-07-05 20:00:00" },
  { matchId: 92,  home: "Mexico", away: "England", kickoffUTC: "2026-07-06 00:00:00" },
  { matchId: 93,  home: "Portugal", away: "Spain", kickoffUTC: "2026-07-06 19:00:00" },
  { matchId: 94,  home: "United States", away: "Belgium", kickoffUTC: "2026-07-07 00:00:00" },
  { matchId: 95,  home: "W86", away: "W88", kickoffUTC: "2026-07-07 16:00:00" },
  { matchId: 96,  home: "W85", away: "W87", kickoffUTC: "2026-07-07 20:00:00" },
];

// ── All hardcoded fixtures combined ──────────────────────────
const HARDCODED_FIXTURES = [
  ...GROUP_STAGE_FIXTURES,
  ...ROUND_OF_16_FIXTURES,
  ...QUARTER_FINAL_FIXTURES,
];

// ── Squad Data ───────────────────────────────────────────────
// 48 teams — all players listed by PLAYER NAME (LASTNAME Firstname)
// To update a player: find their team, find their name, change it
const SQUADS = {
  "Algeria": ["MASTIL Melvin", "MANDI Aissa", "ABADA Achraf", "TOUGAI Mohamed Amine", "BELAID Zineddine", "ZERROUKI Ramiz", "MAHREZ Riyad", "AOUAR Houssem", "GOUIRI Amine", "CHAIBI Fares", "HADJ MOUSSA Anis", "BENBOUALI Nadhir", "HADJAM Jaouen", "BOUDAOUI Hicham", "AIT-NOURI Rayan", "BENBOT Oussama", "BELGHALI Rafik", "AMOURA Mohamed", "BENTALEB Nabil", "BOULBINA Adil", "BENSEBAINI Ramy", "MAZA Ibrahim", "ZIDANE Luca", "TITRAOUI Yassine", "GHEDJEMIS Fares", "CHERGUI Samir"],
  "Argentina": ["MUSSO Juan", "BALERDI Leonardo", "TAGLIAFICO Nicolas", "MONTIEL Gonzalo", "PAREDES Leandro", "MARTINEZ Lisandro", "DE PAUL Rodrigo", "BARCO Valentin", "ALVAREZ Julian", "MESSI Lionel", "LO CELSO Giovani", "RULLI Geronimo", "ROMERO Cristian", "PALACIOS Exequiel", "GONZALEZ Nico", "ALMADA Thiago", "SIMEONE Giuliano", "PAZ Nico", "OTAMENDI Nicolas", "MAC ALLISTER Alexis", "LOPEZ Jose Manuel", "MARTINEZ Lautaro", "MARTINEZ Emiliano", "FERNANDEZ Enzo", "MEDINA Facundo", "MOLINA Nahuel"],
  "Australia": ["RYAN Mathew", "DEGENEK Milos", "CIRCATI Alessandro", "ITALIANO Jacob", "BOS Jordan", "GERIA Jason", "LECKIE Mathew", "METCALFE Connor", "TOURE Mohamed", "HRUSTIC Ajdin", "MABIL Awer", "IZZO Paul", "ONEILL Aiden", "DEVLIN Cameron", "TREWIN Kai", "BEHICH Aziz", "IRANKUNDA Nestory", "BEACH Patrick", "SOUTTAR Harry", "VOLPATO Cristian", "BURGESS Cameron", "IRVINE Jackson", "VELUPILLAY Nishan", "OKON-ENGSTLER Paul", "HERRINGTON Lucas", "YENGI Tete"],
  "Austria": ["SCHLAGER Alexander", "AFFENGRUBER David", "DANSO Kevin", "SCHLAGER Xaver", "POSCH Stefan", "SEIWALD Nicolas", "ARNAUTOVIC Marko", "ALABA David", "SABITZER Marcel", "GRILLITSCH Florian", "GREGORITSCH Michael", "WIEGELE Florian", "PENTZ Patrick", "KALAJDZIC Sasa", "LIENHART Philipp", "MWENE Phillip", "CHUKWUEMEKA Carney", "SCHMID Romano", "BAUMGARTNER Christoph", "LAIMER Konrad", "WIMMER Patrick", "PRASS Alexander", "FRIEDL Marco", "WANNER Paul", "SVOBODA Michael", "SCHOEPF Alessandro"],
  "Belgium": ["COURTOIS Thibaut", "DEBAST Zeno", "THEATE Arthur", "MECHELE Brandon", "DE CUYPER Maxim", "WITSEL Axel", "DE BRUYNE Kevin", "TIELEMANS Youri", "LUKAKU Romelu", "TROSSARD Leandro", "DOKU Jeremy", "LAMMENS Senne", "PENDERS Mike", "LUKEBAKIO Dodi", "MEUNIER Thomas", "DE WINTER Koni", "DE KETELAERE Charles", "SEYS Joaquin", "MOREIRA Diego", "VANAKEN Hans", "CASTAGNE Timothy", "SAELEMAEKERS Alexis", "RASKIN Nicolas", "ONANA Amadou", "NGOY Nathan", "FERNANDEZ-PARDO Matias"],
  "Bosnia And Herzegovina": ["VASILJ Nikola", "MUJAKIC Nihad", "HADZIKADUNIC Dennis", "MUHAREMOVIC Tarik", "KOLASINAC Sead", "TAHIROVIC Benjamin", "DEDIC Amar", "GIGOVIC Armin", "BAZDAR Samed", "DEMIROVIC Ermedin", "DZEKO Edin", "JURKAS Mladen", "BASIC Ivan", "SUNJIC Ivan", "MEMIC Amar", "HADZIAHMETOVIC Amir", "BURNIC Dzenis", "KATIC Nikola", "ALAJBEGOVIC Kerim", "BAJRAKTAREVIC Esmir", "RADELJIC Stjepan", "ZLOMISLIC Martin", "TABAKOVIC Haris", "CELIK Nidal", "LUKIC Jovo", "MAHMIC Ermin"],
  "Brazil": ["ALISSON", "WESLEY", "GABRIEL MAGALHAES", "MARQUINHOS", "CASEMIRO", "ALEX SANDRO", "VINICIUS JUNIOR", "BRUNO GUIMARAES", "MATHEUS CUNHA", "NEYMAR JR", "RAPHINHA", "WEVERTON", "DANILO", "BREMER", "LEO PEREIRA", "DOUGLAS SANTOS", "FABINHO", "DANILO SANTOS", "ENDRICK", "LUCAS PAQUETA", "LUIZ HENRIQUE", "GABRIEL MARTINELLI", "EDERSON", "ROGER IBANEZ", "IGOR THIAGO", "RAYAN"],
  "Cape Verde": ["VOZINHA", "STOPIRA", "DINEY BORGES", "PICO LOPES", "LOGAN COSTA", "KEVIN PINA", "JOVANE CABRAL", "JOAO PAULO", "GILSON BENCHIMOL", "JAMIRO MONTEIRO", "GARRY RODRIGUES", "MARCIO ROSA", "SIDNY LOPES CABRAL", "DEROY DUARTE", "LAROS DUARTE", "YANNICK SEMEDO", "WILLY SEMEDO", "TELMO ARCANJO", "DAILON LIVRAMENTO", "RYAN MENDES", "NUNO DA COSTA", "STEVEN MOREIRA", "CJ DOS SANTOS", "WAGNER PIΝΑ", "KELVIN PIRES", "HELIO VARELA"],
  "Canada": ["ST. CLAIR Dayne", "JOHNSTON Alistair", "JONES Alfie", "DE FOUGEROLLES Luc", "WATERMAN Joel", "CHOINIERE Mathieu", "EUSTAQUIO Stephen", "KONE Ismael", "LARIN Cyle", "DAVID Jonathan", "MILLAR Liam", "OLUWASEYI Tani", "CORNELIUS Derek", "SHAFFELBURG Jacob", "BOMBITO Moise", "CREPEAU Maxime", "BUCHANAN Tajon", "GOODMAN Owen", "DAVIES Alphonso", "AHMED Ali", "OSORIO Jonathan", "LARYEA Richie", "SIGUR Niko", "DAVID Promise", "SALIBA Nathan", "FLORES Marcelo"],
  "Colombia": ["OSPINA David", "MUNOZ Daniel", "LUCUMI Jhon", "ARIAS Santiago", "CASTANO Kevin", "RIOS Richard", "DIAZ Luis", "CARRASCAL Jorge", "CORDOBA Jhon", "RODRIGUEZ James", "ARIAS Jhon", "VARGAS Camilo", "MINA Yerry", "PUERTA Gustavo", "PORTILLA Juan", "LERMA Jefferson", "MOJICA Johan", "DITTA Willer", "HERNANDEZ Cucho", "QUINTERO Juan", "CAMPAZ Jaminton", "MACHADO Deiver", "SANCHEZ Davinson", "MONTERO Alvaro", "SUAREZ Luis", "GOMEZ Andres"],
  "Congo DR": ["MPASI Lionel", "WAN-BISSAKA Aaron", "KAPUADI Steve", "TUANZEBE Axel", "BATUBINSIKA Dylan", "MUKAU Ngalayel", "MBUKU Nathanael", "MOUTOUSSAMY Samuel", "CIPENGA Brian", "BONGONDA Theo", "KAKUTA Gael", "KAYEMBE Joris", "ELIA Meschack", "SADIKI Noah", "TSHIBOLA Aaron", "FAYULU Timothy", "BAKAMBU Cedric", "PICKEL Charles", "MAYELE Fiston", "WISSA Yoane", "EPOLO Matthieu", "MBEMBA Chancel", "BANZA Simon", "KALULU Gedeon", "KAYEMBE Edo", "MASUAKU Arthur"],
  "Ivory Coast": ["FOFANA Yahia", "DIOMANDE Ousmane", "KONAN Ghislain", "SERI Jean Michael", "SINGO Wilfried", "FOFANA Seko", "KOSSOUNOU Odilon", "KESSIE Franck", "BONNY Ange-Yoan", "ADINGRA Simon", "DIOMANDE Yan", "WAHI Elye", "OPERI Christopher", "DIAKITE Oumar", "DIALLO Amad", "KONE Mohamed", "DOUE Guela", "SANGARE Ibrahim", "PEPE Nicolas", "AGBADOU Emmanuel", "NDICKA Evan", "GUESSAND Evann", "LAFONT Alban", "TOURE Bazoumana", "GUIAGON Parfait", "OULAI Christ Inao"],
  "Croatia": ["LIVAKOVIC Dominik", "STANISIC Josip", "PONGRACIC Marin", "GVARDIOL Josko", "CALETA-CAR Duje", "SUTALO Josip", "MORO Nikola", "KOVACIC Mateo", "KRAMARIC Andrej", "MODRIC Luka", "BUDIMIR Ante", "PANDUR Ivor", "VLASIC Nikola", "PERISIC Ivan", "PASALIC Mario", "BATURINA Martin", "SUCIC Petar", "JAKIC Kristijan", "FRUK Toni", "MATANOVIC Igor", "SUCIC Luka", "VUSKOVIC Luka", "KOTARSKI Dominik", "PASALIC Marco", "ERLIC Martin", "MUSA Petar"],
  "Curacao": ["ROOM Eloy", "SAMBO Shurandy", "GAARI Jurien", "VAN EIJMA Roshon", "FLORANUS Sherel", "ROEMERATOE Godfried", "BACUNA Juninho", "COMENENCIA Livano", "LOCADIA Juergen", "BACUNA Leandro", "ANTONISSE Jeremy", "HANSEN Sontje", "NOSLIN Tyrese", "GORRE Kenji", "MARTHA Arjany", "MARGARITHA Jearl", "KUWAS Brandley", "OBISPO Armando", "KASTANEER Gervane", "BRENET Joshua", "CHONG Tahith", "FELIDA Kevin", "BAZOER Riechedly", "FONVILLE Deveron", "BODAK Tyrick", "DOORNBUSCH Trevor"],
  "Czechia": ["KOVAR Matej", "ZIMA David", "HOLES Tomas", "HRANAC Robin", "COUFAL Vladimir", "CHALOUPEK Stepan", "KREJCI Ladislav", "DARIDA Vladimir", "HLOZEK Adam", "SCHICK Patrik", "KUCHTA Jan", "CERV Lukas", "CHYTIL Mojmir", "JURASEK David", "SULC Pavel", "STANEK Jindrich", "PROVOD Lukas", "SADILEK Michal", "CHORY Tomas", "ZELENY Jaroslav", "DOUDERA David", "SOUCEK Tomas", "HORNICEK Lukas", "SOJKA Alexandr", "SOCHUREK Hugo", "VISINSKY Denis"],
  "Ecuador": ["GALINDEZ Hernan", "TORRES Felix", "HINCAPIE Piero", "ORDONEZ Joel", "ALCIVAR Jordy", "PACHO Willian", "ESTUPINAN Pervis", "VALENCIA Anthony", "YEBOAH John", "PAEZ Kendry", "RODRIGUEZ Kevin", "RAMIREZ Moises", "VALENCIA Enner", "MINDA Alan", "VITE Pedro", "CAICEDO Jordy", "PRECIADO Angelo", "CASTILLO Denil", "PLATA Gonzalo", "ANGULO Nilson", "FRANCO Alan", "VALLE Gonzalo", "CAICEDO Moises", "AREVALO Jeremy", "POROZO Jackson", "MEDINA Yaimar"],
  "Egypt": ["MOHAMED ELSHENAWY", "YASSER IBRAHIM", "MOHAMED HANY", "HOSSAM ABDELMAGUID", "RAMY RABIA", "MOHAMED ABDELMONEIM", "TREZEGUET", "EMAM ASHOUR", "HAMZA ABDELKARIM", "MOHAMED SALAH", "MOSTAFA ZICO", "HAISSEM HASSAN", "AHMED FATOUH", "HAMDY FATHY", "KARIM HAFEZ", "MAHDY SOLIMAN", "MOHANAD LASHIN", "NABIL DONGA", "MARAWAN ATTIA", "IBRAHIM ADEL", "MAHMOUD SABER", "OMAR MARMOUSH", "MOSTAFA SHOUBIR", "TAREK ALAA", "ZIZO", "MOHAMED ALAA"],
  "England": ["PICKFORD Jordan", "KONSA Ezri", "OREILLY Nico", "RICE Declan", "STONES John", "GUEHI Marc", "SAKA Bukayo", "ANDERSON Elliot", "KANE Harry", "BELLINGHAM Jude", "RASHFORD Marcus", "LIVRAMENTO Tino", "HENDERSON Dean", "HENDERSON Jordan", "BURN Dan", "MAINOO Kobbie", "ROGERS Morgan", "GORDON Anthony", "WATKINS Ollie", "MADUEKE Noni", "EZE Eberechi", "TONEY Ivan", "TRAFFORD James", "JAMES Reece", "SPENCE Djed", "QUANSAH Jarell", "CHALOBAH Trevor"],
  "France": ["SAMBA Brice", "GUSTO Malo", "DIGNE Lucas", "UPAMECANO Dayot", "KOUNDE Jules", "KONE Manu", "DEMBELE Ousmane", "TCHOUAMENI Aurelien", "THURAM Marcus", "MBAPPE Kylian", "OLISE Michael", "BARCOLA Bradley", "KANTE Ngolo", "RABIOT Adrien", "KONATE Ibrahima", "MAIGNAN Mike", "SALIBA William", "ZAIRE-EMERY Warren", "HERNANDEZ Theo", "DOUE Desire", "HERNANDEZ Lucas", "MATETA Jean-Philippe", "RISSER Robin", "CHERKI Rayan", "AKLIOUCHE Maghnes", "LACROIX Maxence"],
  "Germany": ["NEUER Manuel", "RUEDIGER Antonio", "ANTON Waldemar", "TAH Jonathan", "PAVLOVIC Aleksandar", "KIMMICH Joshua", "HAVERTZ Kai", "GORETZKA Leon", "LEWELING Jamie", "MUSIALA Jamal", "WOLTEMADE Nick", "BAUMANN Oliver", "GROSS Pascal", "BEIER Maximilian", "SCHLOTTERBECK Nico", "STILLER Angelo", "WIRTZ Florian", "BROWN Nathaniel", "SANE Leroy", "AMIRI Nadiem", "NUEBEL Alexander", "RAUM David", "NMECHA Felix", "THIAW Malick", "KARL Lennart", "UNDAV Deniz"],
  "Ghana": ["ZIGI Lawrence Ati", "SEIDU Alidu", "YIRENKYI Caleb", "ADJETEY Jonas", "PARTEY Thomas", "MUMIN Abdul", "ISSAHAKU Fatawu", "SIBO Kwasi", "AYEW Jordan", "THOMAS-ASANTE Brandon", "SEMENYO Antoine", "ANANG Joseph", "BAAH Christopher Bonsu", "MENSAH Gideon", "OWUSU Elisha", "ASARE Benjamin", "RAHMAN Baba", "OPOKU Jerome", "WILLIAMS Inaki", "BOAKYE Augustine", "OPPONG Kojo Peprah", "SULEMANA Kamaldeen", "LUCKASSEN Derrick", "NUAMAH Ernest", "ADU Prince", "SENAYA Marvin"],
  "Haiti": ["PLACIDE Johny", "ARCUS Carlens", "THERMONCY Keeto", "ADE Ricardo", "DELCROIX Hannes", "SAINTE Carl", "ETIENNE Derrick", "EXPERIENCE Martin", "NAZON Duckens", "BELLEGARDE Jean-Ricner", "DEEDSON Louicius", "PIERRE Alexandre", "LACROIX Markhus", "PIERRE Leverton", "PROVIDENCE Ruben", "JOSEPH Lenny", "JEAN JACQUES Danley", "ISIDOR Wilson", "FORTUNE Yassin", "PIERROT Frantzdy", "CASIMIR Josue", "DUVERNE Jean-Kevin", "DUVERGER Josue", "PAUGAIN Wilguens", "SIMON Dominique", "PIERRE Woodensky"],
  "Iran": ["BEIRANVAND Alireza", "HARDANI Saleh", "HAJISAFI Ehsan", "KHALILZADEH Shoja", "MOHAMMADI Milad", "EZATOLAHI Saeid", "JAHANBAKHSH Alireza", "MOHEBBI Mohammad", "TAREMI Mehdi", "GHAYEDI Mehdi", "ALIPOUR Ali", "NIAZMAND Payam", "KANANI Hossein", "GHODDOS Saman", "CHESHMI Roozbeh", "TORABI Mehdi", "YOUSEFI Arya", "HOSSEINZADEH Amirhossein", "NEMATI Ali", "MOGHANLOO Shahriyar", "GHORBANI Mohammad", "HOSSEINI Hossein", "REZAEIAN Ramin", "DARGAHI Dennis", "IRI Danial", "RAZAGHINIA Amirmohammad"],
  "Iraq": ["FAHAD TALIB", "REBIN GHAREEB", "HUSSEIN ALI", "ZAID TAHSEEN", "AKAM HASHIM", "MUNAF YOUNUS", "YOUSSEF AMYN", "IBRAHIM BAYESH", "ALI ALHAMADI", "MOHANAD ALI", "AHMED QASIM", "JALAL HASSAN", "ALI YOUSIF", "ZIDANE IQBAL", "AHMED YAHYA", "AMIR ALAMMARI", "ALI JASIM", "AYMEN HUSSEIN", "KEVIN YAKOB", "AIMAR SHER", "MARKO FARJI", "AHMED BASIL", "MERCHAS DOSKI", "ZAID ISMAEL", "MUSTAFA SAADOON", "FRANS PUTROS"],
  "Japan": ["SUZUKI Zion", "SUGAWARA Yukinari", "TANIGUCHI Shogo", "ITAKURA Kou", "NAGATOMO Yuto", "ENDO Wataru", "TANAKA Ao", "KUBO Takefusa", "GOTO Keisuke", "DOAN Ritsu", "MAEDA Daizen", "OSAKO Keisuke", "NAKAMURA Keito", "ITO Junya", "KAMADA Daichi", "WATANABE Tsuyoshi", "SUZUKI Yuito", "UEDA Ayase", "OGAWA Koki", "SEKO Ayumu", "ITO Hiroki", "TOMIYASU Takehiro", "HAYAKAWA Tomoki", "SANO Kaishu", "SUZUKI Junnosuke", "SHIOGAI Kento"],
  "Jordan": ["YAZEED ABULAILA", "MOHAMMAD ABUHASHEESH", "ABDALLAH NASIB", "HUSAM ABUDAHAB", "YAZAN ALARAB", "AMER JAMOUS", "MOHAMMAD ABUZRAIQ", "NOOR ALRAWABDEH", "ALI OLWAN", "MOUSA ALTAMARI", "ODEH FAKHOURY", "NOUR BANIATEYAH", "MAHMOUD ALMARDI", "RAJAEI AYED", "IBRAHIM SADEH", "MOHAMMAD ABUALNADI", "SALEEM OBAID", "IBRAHIM SABRA", "SAED ALROSAN", "MOHANNAD ABUTAHA", "NIZAR ALRASHDAN", "ABDALLAH ALFAKHORI", "EHSAN HADDAD", "ALI AZAIZEH", "MOHAMMAD ALDAOUD", "ANAS BADAWI"],
  "South Korea": ["KIM Seunggyu", "LEE Hanbeom", "LEE Gihyuk", "KIM Minjae", "KIM Taehyeon", "HWANG Inbeom", "SON Heungmin", "PAIK Seungho", "CHO Guesung", "LEE Jaesung", "HWANG Heechan", "SONG Bumkeun", "LEE Taeseok", "CHO Wije", "KIM Moonhwan", "PARK Jinseob", "BAE Junho", "OH Hyeongyu", "LEE Kangin", "YANG Hyunjun", "JO Hyeonwoo", "SEOL Youngwoo", "CASTROP Jens", "KIM Jingyu", "EOM Jisung", "LEE Donggyeong"],
  "Mexico": ["RANGEL Raul", "SANCHEZ Jorge", "MONTES Cesar", "ALVAREZ Edson", "VASQUEZ Johan", "LIRA Erik", "ROMO Luis", "FIDALGO Alvaro", "JIMENEZ Raul", "VEGA Alexis", "GIMENEZ Santiago", "ACEVEDO Carlos", "OCHOA Guillermo", "GONZALEZ Armando", "REYES Israel", "QUINONES Julian", "PINEDA Orbelin", "VARGAS Obed", "MORA Gilberto", "CHAVEZ Mateo", "HUERTA Cesar", "MARTINEZ Guillermo", "GALLARDO Jesus", "CHAVEZ Luis", "ALVARADO Roberto", "GUTIERREZ Brian"],
  "Morocco": ["BOUNOU Yassine", "HAKIMI Achraf", "MAZRAOUI Noussair", "AMRABAT Sofyan", "AGUERD Nayef", "BOUADDI Ayyoub", "TALBI Chemsdine", "OUNAHI Azzedine", "RAHIMI Soufiane", "DIAZ Brahim", "SAIBARI Ismael", "EL KAJOUI Munir", "EL OUAHDI Zakaria", "DIOP Issa", "EL MOURABET Samir", "YASSINE Gessime", "EZZALZOULI Abde", "RIAD Chadi", "BELAMMARI Youssef", "EL KAABI Ayoub", "AMAIMOUNI Ayoube", "TAGNAOUTI Ahmed Reda", "EL KHANNOUSS Bilal", "EL AYNAOUI Neil", "HALHAL Redouane", "SALAH EDDINE Anass"],
  "Netherlands": ["VERBRUGGEN Bart", "TIMBER Jurrien", "DE ROON Marten", "VAN DIJK Virgil", "AKE Nathan", "VAN HECKE Jan Paul", "KLUIVERT Justin", "GRAVENBERCH Ryan", "WEGHORST Wout", "DEPAY Memphis", "GAKPO Cody", "WIEFFER Mats", "ROEFS Robin", "REIJNDERS Tijjani", "VAN DE VEN Micky", "TIL Guus", "LANG Noa", "MALEN Donyell", "BROBBEY Brian", "KOOPMEINERS Teun", "DE JONG Frenkie", "DUMFRIES Denzel", "FLEKKEN Mark", "SUMMERVILLE Crysencio", "HATO Jorrel", "TIMBER Quinten"],
  "New Zealand": ["CROCOMBE Max", "PAYNE Tim", "DE VRIES Francis", "BINDON Tyler", "BOXALL Michael", "BELL Joe", "GARBETT Matthew", "STAMENIC Marko", "WOOD Chris", "SINGH Sarpreet", "JUST Elijah", "PAULSEN Alex", "CACACE Liberato", "RUFER Alex", "PIJNAKER Nando", "SURMAN Finn", "BARBAROUSES Kosta", "WAINE Ben", "OLD Ben", "McCOWATT Callum", "RANDALL Jesse", "WOUD Michael", "THOMAS Ryan", "ELLIOT Callan", "BAYLISS Lachlan", "SMITH Tommy"],
  "Norway": ["NYLAND Orjan", "THORSBY Morten", "AJER Kristoffer", "OSTIGARD Leo", "MOLLER WOLFE David", "BERG Patrick", "SORLOTH Alexander", "BERGE Sander", "HAALAND Erling", "ODEGAARD Martin", "STRAND LARSEN Jorgen", "TANGVIK Sander", "SELVIK Egil", "AURSNES Fredrik", "BJORKAN Fredrik Andre", "HOLMGREN PEDERSEN Marcus", "HEGGEM Torbjorn", "THORSTVEDT Kristian", "AASGAARD Thelo", "NUSA Antonio", "SCHJELDERUP Andreas", "BOBB Oscar", "HAUGE Jens Petter", "LANGAS Sondre", "FALCHENER Henrik", "RYERSON Julian"],
  "Panama": ["MEJIA Luis", "BLACKMAN Cesar", "CORDOBA Jose", "ESCOBAR Fidel", "FARINA Edgardo", "MARTINEZ Cristian", "RODRIGUEZ Jose Luis", "CARRASQUILLA Adalberto", "RODRIGUEZ Tomas", "DIAZ Ismael", "BARCENAS Edgar Yoel", "SAMUDIO Cesar", "RAMOS Jiovany", "HARVEY Carlos", "DAVIS Eric", "ANDRADE Andres", "FAJARDO Jose", "WATERMAN Cecilio", "QUINTERO Alberto", "GODOY Anibal", "YANIS Cesar", "MOSQUERA Orlando", "MURILLO Amir", "LONDONO Azarias", "MILLER Roderick", "GUTIERREZ Jorge"],
  "Paraguay": ["FERNANDEZ Gatito", "VELAZQUEZ Gustavo", "ALDERETE Omar", "CACERES Juan Jose", "BALBUENA Fabian", "ALONSO Junior", "SOSA Ramon", "GOMEZ Diego", "SANABRIA Antonio", "ALMIRON Miguel", "MAURICIO", "GILL Orlando", "CANALE Jose", "CUBAS Andres", "GOMEZ Gustavo", "BOBADILLA Damian", "ROMERO GAMARRA Alejandro", "ARCE Alex", "ENCISO Julio", "OJEDA Braian", "AVALOS Gabriel", "OLVEIRA Gaston", "GALARZA Matias", "CABALLERO Gustavo", "PITTA Isidro", "MAIDANA Alexandro"],
  "Portugal": ["DIOGO COSTA", "NELSON SEMEDO", "RUBEN DIAS", "TOMAS ARAUJO", "DIOGO DALOT", "MATHEUS NUNES", "CRISTIANO RONALDO", "BRUNO FERNANDES", "GONCALO RAMOS", "BERNARDO SILVA", "JOAO FELIX", "JOSE SA", "RENATO VEIGA", "GONCALO INACIO", "JOAO NEVES", "FRANCISCO TRINCAO", "RAFAEL LEAO", "PEDRO NETO", "GONCALO GUEDES", "JOAO CANCELO", "RUBEN NEVES", "RUI SILVA", "VITINHA", "SAMU COSTA", "NUNO MENDES", "FRANCISCO CONCEICAO"],
  "Qatar": ["MAHMOUD ABUNADA", "PEDRO MIGUEL", "LUCAS MENDES", "ISSA LAYE", "JASSEM GABER", "ABDULAZIZ HATEM", "AHMED ALAAELDIN", "EDMILSON JUNIOR", "MOHAMMED MUNTARI", "HASSAN ALHAYDOS", "AKRAM AFIF", "KARIM BOUDIAF", "AYOUB ALOUI", "HOMAM AHMED", "YUSUF ABDURISAG", "BOUALEM KHOUKHI", "AHMED ALGANEHI", "SULTAN ALBRAKE", "ALMOEZ ALI", "AHMED FATHY", "SALAH ZAKARIA", "MESHAAL BARSHAM", "ASSIM MADIBO", "TAHSIN JAMSHID", "ALHASHMI ALHUSSEIN", "MOHAMED MANAI"],
  "Saudi Arabia": ["NAWAF ALAQIDI", "ALI MAJRASHI", "ALI LAJAMI", "ABDULELAH ALAMRI", "HASSAN ALTAMBAKTI", "NASSER ALDAWSARI", "MUSAB ALJUWAYR", "AIMAN YAHYA", "FERAS ALBRIKAN", "SALEM ALDAWSARI", "SALEH ALSHEHRI", "SAUD ABDULHAMID", "NAWAF BU WASHL", "HASSAN KADISH", "ABDULLAH ALKHAIBARI", "ZIYAD ALJOHANI", "KHALID ALGHANNAM", "ALA ALHAJJI", "ABDULLAH ALHAMDDAN", "SULTAN MANDASH", "MOHAMMED ALOWAIS", "AHMED ALKASSAR", "MOHAMED KANNO", "MOTEB ALHARBI", "JEHAD THIKRI", "MOHAMMED ABU ALSHAMAT"],
  "Scotland": ["GUNN Angus", "HICKEY Aaron", "ROBERTSON Andy", "McTOMINAY Scott", "HANLEY Grant", "TIERNEY Kieran", "McGINN John", "FLETCHER Tyler", "DYKES Lyndon", "ADAMS Che", "CHRISTIE Ryan", "KELLY Liam", "HENDRY Jack", "STEWART Ross", "SOUTTAR John", "HYAM Dominic", "GANNON-DOAK Ben", "HIRST George", "FERGUSON Lewis", "SHANKLAND Lawrence", "GORDON Craig", "PATTERSON Nathan", "McLEAN Kenny", "RALSTON Anthony", "CURTIS Findlay", "McKENNA Scott"],
  "Senegal": ["DIOUF Yehvann", "SARR Mamadou", "KOULIBALY Kalidou", "SECK Abdoulaye", "GUEYE Idrissa Gana", "CISS Pathe", "DIAO Assane", "CAMARA Lamine", "DIENG Bamba", "MANE Sadio", "JACKSON Nicolas", "NDIAYE Cherif", "NDIAYE Iliman", "JAKOBS Ismail", "DIATTA Krepin", "MENDY Edouard", "SARR Pape Matar", "SARR Ismaila", "NIAKHATE Moussa", "MBAYE Ibrahim", "DIARRA Habib", "NDIAYE Bara Sapoko", "DIAW Mory", "MENDY Antoine", "DIOUF El Hadji Malick", "GUEYE Pape"],
  "South Africa": ["WILLIAMS Ronwen", "MATULUDI Thabang", "NDAMANE Khulumani", "MOKOENA Teboho", "MBATHA Thalente", "MODIBA Aubrey", "APPOLLIS Oswin", "MOREMI Tshepang", "FOSTER Lyle", "MOFOKENG Relebohile", "ZWANE Themba", "MASEKO Thapelo", "SITHOLE Sphephelo", "MBOKAZI Mbekezeli", "RAYNERS Iqraam", "CHAINE Sipho", "MAKGOPA Evidence", "KABINI Samukele", "SIBISI Nkosinathi", "MUDAU Khuliso", "OKON Ime", "GOSS Ricardo", "ADAMS Jayden", "MAKHANYA Olwethu", "SEBELEBELE Kamogelo", "CROSS Bradley"],
  "Spain": ["RAYA David", "PUBILL Marc", "GRIMALDO Alex", "GARCIA Eric", "LLORENTE Marcos", "MERINO Mikel", "TORRES Ferran", "RUIZ Fabian", "GAVI", "OLMO Dani", "PINO Yeremy", "PORRO Pedro", "GARCIA Joan", "LAPORTE Aymeric", "BAENA Alex", "RODRI", "WILLIAMS Nico", "ZUBIMENDI Martin", "YAMAL Lamine", "PEDRI", "OYARZABAL Mikel", "CUBARSI Pau", "SIMON Unai", "CUCURELLA Marc", "MUNOZ Victor", "IGLESIAS Borja"],
  "Sweden": ["WIDELL ZETTERSTROM Jacob", "LAGERBIELKE Gustaf", "LINDELOF Victor", "HIEN Isak", "GUDMUNDSSON Gabriel", "JOHANSSON Herman", "BERGVALL Lucas", "SVENSSON Daniel", "ISAK Alexander", "NYGREN Benjamin", "ELANGA Anthony", "JOHANSSON Viktor", "SEMA Ken", "EKDAL Hjalmar", "STARFELT Carl", "KARLSTROM Jesper", "GYOKERES Viktor", "AYARI Yasin", "SVANBERG Mattias", "SMITH Eric", "BERNHARDSSON Alexander", "ZENELI Besfort", "NORDFELDT Kristoffer", "STROUD Elliot", "NILSSON Gustaf", "ALI Taha"],
  "Switzerland": ["KOBEL Gregor", "MUHEIM Miro", "WIDMER Silvan", "ELVEDI Nico", "AKANJI Manuel", "ZAKARIA Denis", "EMBOLO Breel", "FREULER Remo", "MANZAMBI Johan", "XHAKA Granit", "NDOYE Dan", "MVOGO Yvon", "RODRIGUEZ Ricardo", "JASHARI Ardon", "SOW Djibril", "FASSNACHT Christian", "VARGAS Ruben", "COEMERT Eray", "OKAFOR Noah", "AEBISCHER Michel", "KELLER Marvin", "RIEDER Fabian", "AMDOUNI Zeki", "AMENDA Aurele", "JAQUEZ Luca", "ITTEN Cedric"],
  "Tunisia": ["CHAMAKH Mouhib", "ABDI Ali", "TALBI Montassar", "REKIK Omar", "AROUS Adam", "BRONN Dylan", "ACHOURI Elias", "SAAD Elias", "MASTOURI Hazem", "MEJBRI Hannibal", "GHARBI Ismael", "BEN OUANES Mortadha", "KHEDIRA Rani", "AYARI Khalil", "HADJ MAHMOUD Mohamed", "DAHMEN Aymen", "SKHIRI Ellyes", "ELLOUMI Rayan", "CHAOUAT Firas", "VALERY Yan", "BEN HMIDA Mohamed Amine", "BEN HESSEN Sabri", "NEFFATI Moutaz", "CHIKHAOUI Raed", "SLIMANE Anis", "TOUNEKTI Sebastian"],
  "Türkiye": ["GUNOK Mert", "CELIK Zeki", "DEMIRAL Merih", "SOYUNCU Caglar", "OZCAN Salih", "KOKCU Orkun", "AKTURKOGLU Kerem", "GULER Arda", "GUL Deniz", "CALHANOGLU Hakan", "YILDIZ Kenan", "BAYINDIR Altay", "ELMALI Eren", "BARDAKCI Abdulkerim", "KABAK Ozan", "YUKSEK Ismail", "KAHVECI Irfan Can", "MULDUR Mert", "AKGUN Yunus", "KADIOGLU Ferdi", "YILMAZ Baris Alper", "AYHAN Kaan", "CAKIR Ugurcan", "AYDIN Oguz", "AKAYDIN Samet", "UZUN Can"],
  "United States": ["TURNER Matt", "DEST Sergino", "RICHARDS Chris", "ADAMS Tyler", "ROBINSON Antonee", "TRUSTY Auston", "REYNA Giovanni", "McKENNIE Weston", "PEPI Ricardo", "PULISIC Christian", "AARONSON Brenden", "ROBINSON Miles", "REAM Tim", "BERHALTER Sebastian", "ROLDAN Cristian", "FREEMAN Alex", "TILLMAN Malik", "ARFSTEN Max", "WRIGHT Haji", "BALOGUN Folarin", "WEAH Timothy", "McKENZIE Mark", "SCALLY Joe", "FREESE Matt", "BRADY Chris", "ZENDEJAS Alex"],
  "Uruguay": ["ROCHET Sergio", "GIMENEZ Jose Maria", "CACERES Sebastian", "ARAUJO Ronald", "UGARTE Manuel", "BENTANCUR Rodrigo", "DE LA CRUZ Nicolas", "VALVERDE Federico", "NUNEZ Darwin", "DE ARRASCAETA Giorgian", "PELLISTRI Facundo", "MELE Santiago", "VARELA Guillermo", "CANOBBIO Agustin", "MARTINEZ Emiliano", "OLIVERA Mathias", "VINA Matias", "RODRIGUEZ Brian", "AGUIRRE Rodrigo", "ARAUJO Maxi", "VINAS Federico", "PIQUEREZ Joaquin", "MUSLERA Fernando", "BUENO Santiago", "SANABRIA Juan Manuel", "ZALAZAR Rodrigo"],
  "Uzbekistan": ["YUSUPOV Utkir", "KHUSANOV Abdukodir", "ALIJONOV Khojiakbar", "SAYFIEV Farrukh", "ASHURMATOV Rustam", "MOZGOVOY Akmal", "SHUKUROV Otabek", "ISKANDEROV Jamshid", "XAMROBEKOV Odiljon", "MASHARIPOV Jaloliddin", "URUNOV Oston", "NEMATOV Abduvohid", "NASRULLAEV Sherzod", "SHOMURODOV Eldor", "ESHMURODOV Umar", "ERGASHEV Botirali", "KHAMDAMOV Dostonbek", "ABDULLAEV Abdulla", "GANIEV Azizjon", "AMONOV Azizbek", "SERGEEV Igor", "FAYZULLAEV Abbosbek", "ESANOV Sherzod", "KARIMOV Behruzjon", "ULMASALIYEV Avazbek", "UROZOV Jakhongir"],
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
