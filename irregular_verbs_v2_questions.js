let questions =
[
{"question":"arise","answer":"arose","choices":["arise","arisen","arose","ariseed","ariseought"]},
{"question":"awake","answer":"awoke","choices":["awake","awoken","awoke","awakeed","awakeought"]},
{"question":"bear","answer":"bore","choices":["bear","born(e)","bore","beared","bearought"]},
{"question":"beat","answer":"beat","choices":["beat","beaten","beating","beated","beatought"]},
{"question":"become","answer":"became","choices":["become","becoming","became","becomeed","becomeought"]},
{"question":"begin","answer":"began","choices":["begin","begun","began","begined","beginought"]},
{"question":"bend","answer":"bent","choices":["bend","bent","bending","bended","bendought"]},
{"question":"bet","answer":"bet","choices":["bet","beting","bets","beted","betought"]},
{"question":"bind","answer":"bound","choices":["bind","bound","bounding","binded","bindought"]},
{"question":"bite","answer":"bit","choices":["bite","bitten","bit","biteed","biteought"]},
{"question":"bleed","answer":"bled","choices":["bleed","bled","bleding","bleeded","bleedought"]},
{"question":"blow","answer":"blew","choices":["blow","blown","blew","blowed","blowought"]},
{"question":"break","answer":"broke","choices":["break","broken","broke","breaked","breakought"]},
{"question":"breed","answer":"bred","choices":["breed","bred","breding","breeded","breedought"]},
{"question":"bring","answer":"brought","choices":["bring","brought","bringing","bringed","bringought"]},
{"question":"broadcast","answer":"broadcast","choices":["broadcast","broadcasting","broadcastes","broadcasted","broadcastought"]},
{"question":"build","answer":"built","choices":["build","built","building","builded","buildought"]},
{"question":"burn","answer":"burnt/burned","choices":["burn","burnt/burned","burning","burnen","burnought"]},
{"question":"burst","answer":"burst","choices":["burst","bursten","bursting","bursted","burstought"]},
{"question":"buy","answer":"bought","choices":["buy","bought","buying","buyed","buyought"]},
{"question":"catch","answer":"caught","choices":["catch","caught","catching","catched","catchought"]},
{"question":"choose","answer":"chose","choices":["choose","chosen","chose","chooseed","chooseought"]},
{"question":"cling","answer":"clung","choices":["cling","clung","clinging","clinged","clingought"]},
{"question":"come","answer":"came","choices":["come","come","coming","comeed","comeought"]},
{"question":"cost","answer":"cost","choices":["cost","costing","costen","costed","costought"]},
{"question":"creep","answer":"crept","choices":["creep","crept","creeping","creeped","creepought"]},
{"question":"cut","answer":"cut","choices":["cut","cutten","cuting","cuted","cutought"]},
{"question":"deal","answer":"dealt","choices":["deal","dealt","dealing","dealed","dealought"]},
{"question":"dig","answer":"dug","choices":["dig","dug","digging","diged","digought"]},
{"question":"do","answer":"did","choices":["do","done","did","doed","doought"]},
{"question":"draw","answer":"drew","choices":["draw","drawn","drew","drawed","drawought"]},
{"question":"dream","answer":"dreamt/dreamed","choices":["dream","dreamt/dreamed","dreaming","dreamed","dreamought"]},
{"question":"drink","answer":"drank","choices":["drink","drunk","drank","drinked","drinkought"]},
{"question":"drive","answer":"drove","choices":["drive","driven","drove","driveed","driveought"]},
{"question":"eat","answer":"ate","choices":["eat","eaten","ate","eated","eatought"]},
{"question":"fall","answer":"fell","choices":["fall","fallen","fell","falled","fallought"]},
{"question":"feed","answer":"fed","choices":["feed","fed","feeding","feeded","feedought"]},
{"question":"feel","answer":"felt","choices":["feel","felt","feeling","feeled","feelought"]},
{"question":"fight","answer":"fought","choices":["fight","fought","fighting","fighted","fightought"]},
{"question":"find","answer":"found","choices":["find","found","finding","finded","findought"]},
{"question":"fly","answer":"flew","choices":["fly","flown","flew","flyed","flyought"]},
{"question":"forbid","answer":"forbade","choices":["forbid","forbidden","forbade","forbided","forbidought"]},
{"question":"forget","answer":"forgot","choices":["forget","forgotten","forgot","forgeted","forgetought"]},
{"question":"forgive","answer":"forgave","choices":["forgive","forgiven","forgave","forgiveed","forgiveought"]},
{"question":"freeze","answer":"froze","choices":["freeze","frozen","froze","freezeed","freezeought"]},
{"question":"get","answer":"got","choices":["get","got","getting","geted","getought"]},
{"question":"give","answer":"gave","choices":["give","given","gave","giveed","giveought"]},
{"question":"go","answer":"went","choices":["go","gone","went","goed","goought"]},
{"question":"grind","answer":"ground","choices":["grind","ground","grinding","grinded","grindought"]},
{"question":"grow","answer":"grew","choices":["grow","grown","grew","growed","growought"]},
{"question":"hang","answer":"hung","choices":["hang","hung","handing","hanged","hangought"]},
{"question":"have","answer":"had","choices":["have","had","had","haveed","haveought"]},
{"question":"hear","answer":"heard","choices":["hear","heard","hearing","heared","hearought"]},
{"question":"hide","answer":"hid","choices":["hide","hidden","hid","hideed","hideought"]},
{"question":"hit","answer":"hit","choices":["hit","hitting","hitten","hited","hitought"]},
{"question":"hold","answer":"held","choices":["hold","held","held","holded","holdought"]},
{"question":"hurt","answer":"hurt","choices":["hurt","hurten","hurting","hurted","hurtought"]},
{"question":"keep","answer":"kept","choices":["keep","kept","keeping","keeped","keepought"]},
{"question":"kneel","answer":"knelt","choices":["kneel","knelt","kneeling","kneeled","kneelought"]},
{"question":"know","answer":"knew","choices":["know","known","knew","knowed","knowought"]},
{"question":"lay","answer":"laid","choices":["lay","laid","laying","layed","layought"]},
{"question":"lead","answer":"led","choices":["lead","led","leeading","leaded","leadought"]},
{"question":"lean","answer":"leant/leaned","choices":["lean","leant/leaned","leaning","leanes","leanought"]},
{"question":"learn","answer":"learnt/learned","choices":["learn","learnt/learned","learning","learnes","learnought"]},
{"question":"leave","answer":"left","choices":["leave","left","leaving","leaveed","leaveought"]},
{"question":"lend","answer":"lent","choices":["lend","lent","lending","lended","lendought"]},
{"question":"light","answer":"lit/lighted","choices":["light","lit/lighted","lighting","lighten","lightought"]},
{"question":"lose","answer":"lost","choices":["lose","lost","losing","loseed","loseought"]},
{"question":"make","answer":"made","choices":["make","made","making","makeed","makeought"]},
{"question":"mean","answer":"meant","choices":["mean","meant","meaning","meaned","meanought"]},
{"question":"meet","answer":"met","choices":["meet","met","meting","meeted","meetought"]},
{"question":"mow","answer":"mowed","choices":["mow","mown/mowed","mowing","mowen","mowought"]},
{"question":"overtake","answer":"overtook","choices":["overtake","overtaken","overtook","overtakeed","overtakeought"]},
{"question":"pay","answer":"paid","choices":["pay","paid","paying","payed","payought"]},
{"question":"put","answer":"put","choices":["put","puts","putting","puted","putought"]},
{"question":"read","answer":"read","choices":["read","reads","reading","readed","readought"]},
{"question":"ride","answer":"rode","choices":["ride","ridden","rode","rideed","rideought"]},
{"question":"ring","answer":"rang","choices":["ring","rung","rang","ringed","ringought"]},
{"question":"rise","answer":"rose","choices":["rise","risen","rose","riseed","riseought"]},
{"question":"run","answer":"ran","choices":["run","runnig","ran","runed","runought"]},
{"question":"saw","answer":"sawed","choices":["saw","sawn/sawed","sawing","sawen","sawought"]},
{"question":"say","answer":"said","choices":["say","said","sayig","sayed","sayought"]},
{"question":"see","answer":"saw","choices":["see","seen","saw","seeed","seeought"]},
{"question":"sell","answer":"sold","choices":["sell","sold","selling","selled","sellought"]},
{"question":"send","answer":"sent","choices":["send","sent","sending","sended","sendought"]},
{"question":"set","answer":"set","choices":["set","sets","setting","seted","setought"]},
{"question":"sew","answer":"sewed","choices":["sew","sewn/sewed","sewig","sewes","sewought"]},
{"question":"shake","answer":"shook","choices":["shake","shaken","shook","shakeed","shakeought"]},
{"question":"shed","answer":"shed","choices":["shed","sheds","shedding","sheded","shedought"]},
{"question":"shine","answer":"shone","choices":["shine","shone","shone","shineed","shineought"]},
{"question":"shoot","answer":"shot","choices":["shoot","shot","shooting","shooted","shootought"]},
{"question":"show","answer":"showed","choices":["show","shown","showed","showed","showought"]},
{"question":"shrink","answer":"shrank","choices":["shrink","shrunk","shrank","shrinked","shrinkought"]},
{"question":"shut","answer":"shut","choices":["shut","shuting","shuts","shuted","shutought"]},
{"question":"sing","answer":"sang","choices":["sing","sung","sang","singed","singought"]},
{"question":"sink","answer":"sank","choices":["sink","sunk","sank","sinked","sinkought"]},
{"question":"sit","answer":"sat","choices":["sit","sat","sitting","sited","sitought"]},
{"question":"sleep","answer":"slept","choices":["sleep","slept","sleeping","sleeped","sleepought"]},
{"question":"slide","answer":"slid","choices":["slide","slid","slidding","slideed","slideought"]},
{"question":"smell","answer":"smelt","choices":["smell","smelt","smeling","smelled","smellought"]},
{"question":"sow","answer":"sowed","choices":["sow","sown/sowed","soweing","sowes","sowought"]},
{"question":"speak","answer":"spoke","choices":["speak","spoken","spoke","speaked","speakought"]},
{"question":"spell","answer":"spelt/spelled","choices":["spell","spelt/spelled","spelling","spells","spellought"]},
{"question":"spend","answer":"spent","choices":["spend","spent","spending","spended","spendought"]},
{"question":"spill","answer":"spilt/spilled","choices":["spill","spilt/spilled","spilling","spills","spillought"]},
{"question":"spit","answer":"spat","choices":["spit","spat","spitting","spited","spitought"]},
{"question":"spread","answer":"spread","choices":["spread","spreads","spreading","spreaded","spreadought"]},
{"question":"stand","answer":"stood","choices":["stand","stood","standing","standed","standought"]},
{"question":"steal","answer":"stole","choices":["steal","stolen","stoling","stealed","stealought"]},
{"question":"stick","answer":"stuck","choices":["stick","stuck","sticking","sticked","stickought"]},
{"question":"sting","answer":"stung","choices":["sting","stung","stinging","stinged","stingought"]},
{"question":"stink","answer":"stank","choices":["stink","stunk","stank","stinked","stinkought"]},
{"question":"strike","answer":"struck","choices":["strike","struck","striking","strikeed","strikeought"]},
{"question":"swear","answer":"swore","choices":["swear","sworn","swore","sweared","swearought"]},
{"question":"sweep","answer":"swept","choices":["sweep","swept","sweeping","sweeped","sweepought"]},
{"question":"swell","answer":"swelled","choices":["swell","swollen/swelled","swelling","swelled","swellought"]},
{"question":"swim","answer":"swam","choices":["swim","swum","swam","swimed","swimought"]},
{"question":"swing","answer":"swung","choices":["swing","swung","swinging","swinged","swingought"]},
{"question":"take","answer":"took","choices":["take","taken","took","takeed","takeought"]},
{"question":"teach","answer":"taught","choices":["teach","taught","teaching","teached","teachought"]},
{"question":"tear","answer":"tore","choices":["tear","torn","tore","teared","tearought"]},
{"question":"tell","answer":"told","choices":["tell","told","telling","telled","tellought"]},
{"question":"think","answer":"thought","choices":["think","thought","thinking","thinked","thinkought"]},
{"question":"throw","answer":"threw","choices":["throw","thrown","threw","throwed","throwought"]},
{"question":"understand","answer":"understood","choices":["understand","understood","understanding","understanded","understandought"]},
{"question":"wake","answer":"woke","choices":["wake","woken","woke","wakeed","wakeought"]},
{"question":"wear","answer":"wore","choices":["wear","worn","wore","weared","wearought"]},
{"question":"weep","answer":"wept","choices":["weep","wept","weeping","weeped","weepought"]},
{"question":"win","answer":"won","choices":["win","won","won","wined","winought"]},
{"question":"wind","answer":"wound","choices":["wind","wound","winding","winded","windought"]},
{"question":"write","answer":"wrote","choices":["write","written","wrote","writed","wrought"]}
]
