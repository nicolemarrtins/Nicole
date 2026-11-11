/* Cielo 2.1 — relationships in depth and dynamic questions (English). */
(function () {
  var X = TXT.en, U = I18N.en;
  X.synRole = { sun: ["your identity", "their identity"], moon: ["your feelings", "their feelings"], mercury: ["your way of thinking", "their way of thinking"], venus: ["your way of loving", "their way of loving"], mars: ["your desire and energy", "their desire and energy"], asc: ["the way you come across", "the way they come across"] };
  X.synPairs = {
    "sun-sun": ["Two identities face to face: how each of you shines.", "You recognise and respect each other: each can be who they are.", "Two wills competing for centre stage; taking turns in the spotlight saves you."],
    "sun-moon": ["The classic couple bond: what one is and what the other needs.", "One shines, the other shelters: you feel at home together.", "What one shows doesn’t always soothe the other; listening to each other’s needs prevents hurt."],
    "sun-mercury": ["One’s identity and the other’s mind.", "You understand each other and trade ideas; conversation energises you.", "One may feel judged by the other’s words; tone matters."],
    "sun-venus": ["Admiration and affection.", "You like each other as you are: tenderness and mutual pride.", "The affection is real but can turn people-pleasing or vain; be honest."],
    "sun-mars": ["Will and desire: the couple’s engine.", "You push each other to act, and there’s physical attraction.", "Ego clashes and competition; the passion is real, the respect must be too."],
    "moon-moon": ["Two emotional worlds and their habits.", "You feel at home: similar rhythms and needs.", "You need different things to feel good; naming them prevents misunderstandings."],
    "moon-mercury": ["Feeling and words: talking about emotions.", "One can put into words what the other feels.", "One rationalises what the other feels; sometimes less explaining and more hugging."],
    "moon-venus": ["Tenderness and care.", "So much sweetness: you look after each other and enjoy yourselves.", "One gives love in a way the other doesn’t always register; learn each other’s language."],
    "moon-mars": ["Emotion and impulse.", "Passion and protection: one sparks the other.", "One may unintentionally hurt the other’s sensitivity; haste and anger weigh."],
    "mercury-mercury": ["Two minds: how you think and how you talk.", "Easy conversations; you understand each other in half a sentence.", "You think differently and argue over details; listening to the end changes a lot."],
    "mercury-venus": ["Words and affection.", "You say lovely things and enjoy talking.", "What one says and what the other values don’t quite match; kindness helps."],
    "mercury-mars": ["Ideas and action: debate.", "You stimulate each other and decide quickly together.", "Heated arguments; agree on pauses before replying."],
    "venus-venus": ["Two ways of loving and enjoying.", "Similar tastes: shared pleasure and aesthetics.", "You love differently; what delights one bores the other."],
    "venus-mars": ["Chemistry: love and desire.", "Natural attraction and a balance of giving and taking.", "Intense desire with friction: it attracts and unsettles at once."],
    "mars-mars": ["Two energies: rhythm, desire and conflict.", "You move at the same pace and make a team.", "You clash over who sets the pace; channel the energy into shared projects."]
  };
  X.synOuter = {
    jupiter: { mine: ["Your Jupiter touches {their}: you bring generosity, optimism and growth.", "You give them confidence and the wish to grow; with you, that part of their life expands.", "At times you promise more than you give, or overdo it; measure brings credibility."],
      theirs: ["Their Jupiter touches {yours}: they bring generosity and growth.", "You feel more confident and luckier by their side.", "There may be too many promises or indulgence; deeds before words."] },
    saturn: { mine: ["Your Saturn touches {their}: you bring commitment, structure and sometimes limits.", "You give them stability; with you that part of their life matures and feels safe.", "They may feel your demands or coldness; make sure care doesn’t turn into control."],
      theirs: ["Their Saturn touches {yours}: they bring commitment and limits.", "They give you stability and a sense of building something serious.", "At times you may feel judged or met with coldness; talking about it stops it from weighing."] },
    uranus: { mine: ["Your Uranus touches {their}: you bring novelty, freedom and surprise.", "You wake them up and make them feel free and original.", "Your unpredictability can unsettle them; freedom needs agreements."],
      theirs: ["Their Uranus touches {yours}: they bring electricity and change.", "They wake you up and make you feel more yourself, freer.", "The relationship may be on-and-off or restless; agree on what feels safe for both."] },
    neptune: { mine: ["Your Neptune touches {their}: you bring magic, idealisation and sensitivity.", "You inspire them: an almost spiritual bond.", "They may idealise you or feel confused with you; clarity protects you both."],
      theirs: ["Their Neptune touches {yours}: they bring magic and sensitivity.", "They inspire you and make you feel a deep, compassionate love.", "Risk of idealising or confusion; look at the facts kindly — but do look."] },
    pluto: { mine: ["Your Pluto touches {their}: you bring intensity and transformation.", "You transform them: with you something changes deeply.", "The intensity can turn into control or jealousy; shared power heals."],
      theirs: ["Their Pluto touches {yours}: they bring intensity and transformation.", "They transform you and connect you with your strength.", "There may be obsession, jealousy or power struggles; trust is built, not demanded."] }
  };
  X.synAsc = {
    mine: { sun: "Your Sun touches their Ascendant: you give them light and confidence to show themselves.", moon: "Your Moon touches their Ascendant: you feel familiar to them, as if you’d always known each other.", mercury: "Your Mercury touches their Ascendant: talking is easy from the very start.", venus: "Your Venus touches their Ascendant: you find the way they are very attractive, and vice versa.", mars: "Your Mars touches their Ascendant: there’s an instant physical spark." },
    theirs: { sun: "Their Sun touches your Ascendant: by their side you feel more visible.", moon: "Their Moon touches your Ascendant: there’s instant familiarity.", mercury: "Their Mercury touches your Ascendant: you talk naturally from the start.", venus: "Their Venus touches your Ascendant: they’re drawn to the way you are.", mars: "Their Mars touches your Ascendant: there’s direct physical attraction." },
    nature: { h: "It flows easily.", t: "With spark and some friction.", c: "It’s very obvious between you." }
  };
  X.housesSu = ["their presence and body", "their money and what they value", "their ideas and close surroundings", "their home and family", "their creativity, romance and play", "their routine, work and health", "their partnerships", "their intimacy and transformations", "their travels, studies and beliefs", "their career and public image", "their friendships and future plans", "their inner world"];
  X.overlay = {
    key: {
      "sun-1": "Their Sun in your 1st house: they make you feel more yourself; by their side you shine.", "sun-5": "Their Sun in your 5th house: they bring play, romance and joy into your life.", "sun-7": "Their Sun in your 7th house: they feel like a natural partner; they light up your relationships.", "sun-8": "Their Sun in your 8th house: an intense bond that transforms you.",
      "moon-1": "Their Moon in your 1st house: they feel an instant emotional connection with you.", "moon-5": "Their Moon in your 5th house: playful tenderness and a wish to enjoy life together.", "moon-7": "Their Moon in your 7th house: they seek emotional security and commitment with you.", "moon-8": "Their Moon in your 8th house: deep intimacy; you show each other what you hide from others.",
      "venus-1": "Their Venus in your 1st house: they love who you are and how you look.", "venus-5": "Their Venus in your 5th house: romance, flirting and pleasure — one of the classic signs of falling in love.", "venus-7": "Their Venus in your 7th house: they see you as a partner; they want harmony and commitment with you.", "venus-8": "Their Venus in your 8th house: deep, sensual attraction.",
      "mars-1": "Their Mars in your 1st house: they activate and challenge you; lots of energy and some clashes.", "mars-5": "Their Mars in your 5th house: passion, desire and a taste for adventure together.", "mars-7": "Their Mars in your 7th house: a dynamic relationship, with arguments that also move you forward.", "mars-8": "Their Mars in your 8th house: intense sexual chemistry."
    },
    theirs: "Their {P} falls in your house {n}: they activate {dom} in your life.",
    mine: "Your {P} falls in their house {n}: you activate {dom} in their life."
  };
  X.composite = {
    intro: "The composite chart is the chart of the relationship itself: the midpoint between both people’s planets. It describes what the bond is for and how it works as “us”.",
    sun: [
      "A relationship for daring: together you start things, compete and push each other to be brave.",
      "A relationship for building: stability, pleasure and something that lasts.",
      "A relationship of conversation: together you learn, laugh and move.",
      "A relationship of home: care, family and mutual shelter.",
      "A relationship for shining: creating, celebrating and showing up together.",
      "A relationship of service and improvement: you help each other grow in concrete ways.",
      "A relationship of balance: the bond itself is the centre.",
      "An intense, transformative relationship: nothing stays the same.",
      "A relationship of adventure and meaning: travel, ideas and growth.",
      "A relationship with purpose: goals, commitment and the long term.",
      "A relationship of friendship and freedom: you respect each other as individuals.",
      "A soul relationship: sensitivity, compassion and a touch of mystery."
    ],
    moon: [
      "Emotionally, the bond needs action and spontaneity.",
      "Emotionally, the bond needs calm, routine and touch.",
      "Emotionally, the bond needs to talk about everything.",
      "Emotionally, the bond needs intimacy and protection.",
      "Emotionally, the bond needs recognition and play.",
      "Emotionally, the bond needs order and practical care.",
      "Emotionally, the bond needs harmony and beauty.",
      "Emotionally, the bond needs depth and complete trust.",
      "Emotionally, the bond needs air, laughter and freedom.",
      "Emotionally, the bond needs structure and security.",
      "Emotionally, the bond needs space and friendship.",
      "Emotionally, the bond needs tenderness, music and shared silence."
    ],
    venus: [
      "You love each other with passion and frankness.", "You love each other with loyalty and sensuality.", "You love each other with words, humour and curiosity.", "You love each other by taking care of each other.",
      "You love each other with generosity and grand gestures.", "You love each other with details and concrete acts.", "You love each other with harmony, beauty and diplomacy.", "You love each other with intensity and fusion.",
      "You love each other with freedom and adventure.", "You love each other with commitment and constancy.", "You love each other as friends, with originality.", "You love each other romantically and compassionately."
    ],
    areas: { sun: "the relationship’s purpose", moon: "the relationship’s emotional intimacy", venus: "the love and pleasure you share" }
  };
  X.dims = {
    names: { attraction: "Attraction", emotion: "Emotion", communication: "Communication", commitment: "Commitment", growth: "Growth" },
    level: {
      attraction: { flow: "The chemistry flows: desire and affection go together.", intense: "Strong attraction with a spark: exciting and sometimes exhausting.", challenge: "Desire takes work: different rhythms.", soft: "The attraction is calm: it builds over time." },
      emotion: { flow: "You feel at home with each other.", intense: "Intense emotions: deep connection and some storms.", challenge: "You need different things to feel safe.", soft: "The emotional side is quiet: it needs more expressing." },
      communication: { flow: "You talk easily and understand each other.", intense: "Stimulating conversations, with heated debates.", challenge: "You misread each other easily; listening is key.", soft: "Communication is fine but isn’t the engine of the bond." },
      commitment: { flow: "There’s a foundation for something lasting.", intense: "Strong commitment, with tests that help you mature.", challenge: "Commitment feels like weight or limitation.", soft: "The long term isn’t written: it depends on what you choose." },
      growth: { flow: "You push each other to grow and have fun together.", intense: "Lots of change and stimulation: you grow, but you get shaken.", challenge: "What one wants to explore unsettles the other.", soft: "Growing together is gentle." }
    },
    q: {
      attraction: { flow: ["What attracts you most about each other today?", "How can you keep the spark alive through routine?"], challenge: ["How does each of you like to express desire?", "What does each of you need to feel desired?"] },
      emotion: { flow: ["Which small gesture makes you feel at home?", "When did you feel closest?"], challenge: ["What does each of you need when you’re feeling low?", "Which phrase helps you calm down in an argument?"] },
      communication: { flow: ["What topic could you talk about for hours?", "Which pending conversation would do you good?"], challenge: ["How could you signal when you feel misunderstood?", "Which tone helps you hear each other?"] },
      commitment: { flow: ["What do you want to build together in the coming years?", "Which promise do you already keep without saying it?"], challenge: ["What does commitment mean to each of you?", "What boundary does each of you need to feel free within the relationship?"] },
      growth: { flow: ["Which adventure would you like to live together?", "How has each of you grown thanks to the other?"], challenge: ["What change does each of you want, even if it’s scary?", "How can you support each other’s individual paths?"] }
    }
  };
  X.dsc = [
    "Your Descendant in Aries: you’re drawn to someone direct, brave and full of initiative who pulls you out of doubt.",
    "Your Descendant in Taurus: you’re drawn to someone stable, sensual and patient who gives you solid ground.",
    "Your Descendant in Gemini: you’re drawn to someone curious and talkative who makes you laugh and think.",
    "Your Descendant in Cancer: you’re drawn to someone tender and protective who makes you feel at home.",
    "Your Descendant in Leo: you’re drawn to someone warm, generous and present who celebrates life with you.",
    "Your Descendant in Virgo: you’re drawn to someone attentive and practical who shows love through deeds.",
    "Your Descendant in Libra: you’re drawn to someone kind, elegant and balanced, with whom everything is harmony.",
    "Your Descendant in Scorpio: you’re drawn to someone intense and deep, with whom intimacy is total.",
    "Your Descendant in Sagittarius: you’re drawn to someone free, optimistic and adventurous who widens your world.",
    "Your Descendant in Capricorn: you’re drawn to someone mature and committed who builds with you.",
    "Your Descendant in Aquarius: you’re drawn to someone original and independent who is your friend first.",
    "Your Descendant in Pisces: you’re drawn to someone sensitive and romantic, connecting beyond words."
  ];
  X.loveUI = {
    title: "Your love profile", cta: "Your love profile", ctaSub: "What you seek, what you give, your shadow and your windows for love this year.",
    seek: "What you seek", give: "What you give", desire: "Your desire", partner: "The partner your chart describes", shadow: "Your shadow in love", care: "How to look after yourself in love", windows: "Windows for love (next 12 months)",
    ruler7: "Your 7th house is ruled by {P}, in {S}{house}: love reaches you or plays out through {dom}.", in7: "Planets in your 7th house: {list}. They strongly colour how you live partnership.", in5: "Planets in your 5th house: {list}. They shape how you live romance and play.",
    noShadow: "Your Venus and Mars make no tense aspects to slow planets: your shadow in love is subtler; look at your Lilith.",
    careBy: { fire: "You need passion and freedom: don’t stay where the spark has completely gone.", earth: "You need deeds and constancy: value the one who delivers, not just the one who promises.", air: "You need conversation and space: choose someone who listens and lets you be.", water: "You need depth and care: protect your sensitivity from those who don’t value it." },
    venusRetro: "Venus retrograde from {a} to {b}: a time to review relationships, not to rush into commitments.",
    eclipse: "Eclipse on {d} in your house {n}: a turning point in {dom}.",
    noWindows: "No major slow transits to your Venus or 7th house this year: a stable period in love.",
    targets: { venus: "your Venus", dsc: "your Descendant", r7: "the ruler of your 7th house" },
    areas: { venus: "the way you love", dsc: "your partnerships", r7: "your love life" }
  };
  X.loveTest = {
    title: "How you love", intro: "Six questions about how you love. After each answer, Cielo compares it with your chart: sometimes they match and sometimes they don’t — and that says something too.",
    qs: [
      { q: "What makes you fall for someone first?", p: "venus", o: { air: "Their mind and conversation", fire: "Their passion and energy", water: "Their tenderness and sensitivity", earth: "Their stability and presence" } },
      { q: "In an argument with a partner, you…", p: "mars", o: { fire: "Say everything right away", water: "Need silence and time", earth: "Look for a practical solution", air: "Analyse it and debate" } },
      { q: "What makes you feel truly loved?", p: "moon", o: { air: "Words and conversations", fire: "Gestures, surprises and plans", water: "Care and presence", earth: "Deeds and constancy" } },
      { q: "What do you need in a relationship?", p: "venus", o: { air: "Freedom and space of my own", fire: "Adventure and intensity", water: "Fusion and depth", earth: "Security and commitment" } },
      { q: "What scares you most in love?", p: "moon", o: { air: "Losing my freedom", fire: "Getting bored", water: "Being abandoned", earth: "Choosing the wrong person" } },
      { q: "What kind of person attracts you?", p: "dsc", o: { fire: "Someone brave and spontaneous", earth: "Someone stable and hard-working", air: "Someone clever and original", water: "Someone sensitive and deep" } }
    ],
    match: "It matches your chart: your {P} is in {S}, a {E} sign.",
    other: "Your {P} is in {S} ({E}), but your choice is {E2}. That may be your {P2} in {S2} speaking: that part of you loves too.",
    none: "Your {P} is in {S} ({E}); you chose something {E2}, an element almost absent from your chart: perhaps something you seek outside yourself.",
    result: "You and your chart agree on {n} of {t} answers.", resultHigh: "The way you love closely resembles what your chart describes.", resultMid: "Matches and surprises: you love in more registers than your chart marks.", resultLow: "The way you love doesn’t match your chart much: a good clue for the experiment.",
    p: { venus: "Venus", mars: "Mars", moon: "Moon", dsc: "Descendant" }
  };
  X.horary2 = {
    kw: {
      love: ["love", "partner", "boyfriend", "girlfriend", "my ex", "ex ", "loves me", "come back", "relationship", "marry", "wedding", "date", "like me", "crush", "feel about", "feelings", "think of me", "jealous", "cheat"],
      work: ["job", "work", "position", "boss", "interview", "promotion", "company", "offer", "career", "business", "client", "contract", "fired", "project", "hire"],
      money: ["money", "payment", "loan", "debt", "salary", "pay ", "invest", "buy", "sell", "sale", "price", "inheritance", "savings", "paid"],
      home: ["house", "flat", "apartment", "move", "moving", "rent", "family", "mother", "mum", "mom", "father", "dad", "home"],
      travel: ["trip", "travel", "visa", "abroad", "study", "university", "master", "course", "exam", "scholarship", "emigrate", "country"],
      health: ["health", "doctor", "illness", "surgery", "operation", "treatment", "diet", "symptom", "pet", "dog", "cat"],
      friends: ["friend", "friendship", "group", "community", "followers", "network"],
      creative: ["son", "daughter", "pregnan", "baby", "art", "book", "create", "music", "child"],
      contact: ["message", "reply", "answer", "write", "text me", "call", "whatsapp", "email", "paperwork", "papers", "sign", "news", "brother", "sister", "neighbour"]
    },
    rx: { when: "\\bwhen\\b", feel: "feel about|love me|like me|think of me|thinking about me|have feelings|in love with", should: "should i|is it worth|do i accept|good idea|am i right to" },
    types: { yesno: "Yes-or-no question", when: "A “when” question", feel: "A question about someone’s feelings", should: "A “should I?” question" },
    detected: "Topic detected: {cat}.",
    levels: { vhigh: "Very likely", high: "Likely", mid: "Uncertain", low: "Unlikely", vlow: "Very unlikely" },
    hard: ", but with effort",
    t: {
      perfect: "{A} and {B} meet by {asp} on {date}: there is a clear meeting.",
      perfectHard: "{A} and {B} meet by {asp} on {date}: it happens, but with obstacles.",
      late: "The meeting comes late, after a change of sign: it may happen in another form.",
      none: "There’s no exact meeting between {A} and {B} in the coming weeks.",
      refrain: "{P} turns retrograde before the meeting: someone may back out.",
      translation: "The Moon connects {A} with {B}: someone or something will act as a bridge.",
      digGood: "{P} is strong in {S} ({d}): the matter has resources.",
      digBad: "{P} is weak in {S} ({d}): the matter is in a fragile position.",
      youGood: "Your significator, {P}, is strong in {S}: you have the strength to make it happen.",
      youBad: "Your significator, {P}, is weak in {S}: perhaps you doubt yourself or lack support.",
      angular: "{P} is in an angular house: the matter has weight and is moving.",
      cadent: "{P} is in a cadent house: the matter has little strength right now.",
      retro: "{P} is retrograde: delays, going back, or something from the past returning.",
      combust: "{P} is burned by the Sun (combust): something is hidden or lacks strength.",
      cazimi: "{P} is in the heart of the Sun (cazimi): special protection.",
      moonGood: "The Moon is heading for {asp} with {B}: the climate is favourable.",
      moonBad: "The Moon is heading for {asp} with {B}: the climate brings friction.",
      voidMoon: "The Moon is void of course: probably not much will change.",
      benefic: "{P} sits in house {n}, the house of your question: a good omen.",
      malefic: "{P} sits in house {n}, the house of your question: there are difficulties in that area.",
      fortune: "The Part of Fortune touches what you ask about: luck is in play.",
      reception: "{A} and {B} are in mutual reception: there is goodwill between the parties."
    },
    pro: "For", con: "Against",
    feelTitle: "What the other person feels", feelState: "Their significator ({P}) is in {S}, house {n}: the other person is {desc}.", feelRetro: " They’re looking back or have doubts.", feelWeak: " They’re in a vulnerable position.", feelStrong: " They feel strong and confident.",
    feelAsp: { trine: "They feel interest and affinity towards you.", sextile: "There’s warmth and an open door.", conj: "They are very involved with you.", square: "There’s attraction, but with tension or doubts.", opp: "There’s something strong, but with distance or clashes.", none: "Right now the chart shows no clear bond towards you." },
    feelRec: "Their significator also “receives” you: they take you into account and value you.",
    whenTitle: "When", whenDate: "The exact meeting in the sky is on {date}.", whenSym: "By the traditional rule ({deg}° to the meeting, {mode}), it would be in about {n} {unit}.", whenNone: "The chart shows no clear moment.",
    units: { days: "days", weeks: "weeks", months: "months" }, modes: { cardinal: "cardinal sign", fixed: "fixed sign", mutable: "mutable sign" },
    shouldTitle: "Should you?", should: { pos: "The chart leans towards yes: more for than against.", mid: "With caution: the arguments for and against are similar.", neg: "The chart doesn’t see it as wise right now: the difficulties weigh more." },
    adviceTitle: "Advice",
    advice: {
      love: { pos: "Let the bond move at its own pace and look after communication.", mid: "Watch the deeds more than the promises.", neg: "Protect your energy: perhaps now isn’t the moment." },
      work: { pos: "Prepare and show up: the door is open.", mid: "Keep a plan B while you wait.", neg: "Look at other options; this one may not be yours." },
      money: { pos: "Go ahead, but check the numbers.", mid: "Don’t decide in a hurry: compare.", neg: "Careful with risk: wait or renegotiate." },
      home: { pos: "A good moment to move things at home.", mid: "Talk with your family before deciding.", neg: "Better not to force changes now." },
      travel: { pos: "Go for it: prepare the paperwork in good time.", mid: "Stay flexible with dates and plans.", neg: "There may be delays: consider another date." },
      health: { pos: "Keep looking after yourself: you’re on track.", mid: "Get a second opinion if in doubt.", neg: "See a professional and don’t sit with the doubt." },
      friends: { pos: "Lean on your people: they add up.", mid: "Clarify expectations with the group.", neg: "Check whether that circle really nourishes you." },
      creative: { pos: "Create without fear: the energy is good.", mid: "Give the process time.", neg: "Don’t demand results of yourself now." },
      contact: { pos: "Write or call: the answer may come.", mid: "Wait a little before insisting.", neg: "Don’t depend on that answer to move on." }
    },
    desc: ["impulsive, direct and perhaps impatient", "stable, calm and a little stubborn", "curious, changeable and full of ideas", "sensitive, protective and emotional", "proud, warm and wanting to stand out", "analytical, cautious and focused on details", "torn between options and seeking harmony", "intense, reserved and deeply emotional", "optimistic, free and wanting to expand", "serious, cautious and thinking long-term", "independent, distant and unpredictable", "sensitive, idealistic and a little confused"],
    repeat: "You asked about {cat} {n} minutes ago. In so little time the chart barely changes, which is why the answer looks similar: horary tradition asks you to put each question only once.",
    moment: "This is the chart for {time}. Each question is answered with the sky of the moment you ask it.",
    claude: "Continue with Claude", claudeNote: "Opens claude.ai with the horary chart, the arguments and your question so you can talk it through.",
    promptIntro: "Act as a horary astrologer in William Lilly’s tradition, warm and rigorous. This is the horary chart for my question, calculated with astronomical ephemerides (tropical zodiac, Regiomontanus houses). Use it as given; don’t recalculate it.",
    promptClose: "Answer in English, concretely and thoughtfully: what the chart says, why, what I could do and when. Avoid fatalism and don’t give medical, legal or financial advice."
  };
  U.loveUI = X.loveUI;
  U.syn2 = { dims: "Your dynamic", strengths: "What binds you", challenges: "What takes work", aspects: "Aspects between your charts (one by one)", overlays: "Their planets in your houses", overlaysMine: "Your planets in their houses", composite: "The composite chart", compTiming: "Cycles of the relationship (next 12 months)", talk: "To talk about as a couple", noTimeOverlay: "House overlays need the birth time of the person receiving them.", flowWord: "flow", tensionWord: "tension", claude: "Continue with Claude about this relationship", none: "Not enough data." };
  U.askHub.love = ["How you love", "Six questions about how you love, compared with your chart answer by answer."];
  U.quizUI.q_partnerSun = "Which sign is {name}’s Sun in?"; U.quizUI.q_todayMoon = "Which sign is the Moon in today?"; U.quizUI.q_retroNow = "Which planet is retrograde right now?"; U.quizUI.q_synTop = "What is the strongest aspect between your chart and {name}’s?"; U.quizUI.noneRetro = "None";
  U.quizUI.ex_partnerSun = "{name} has the Sun in {S}."; U.quizUI.ex_todayMoon = "Today the Moon is moving through {S}."; U.quizUI.ex_retroNow = "Right now: {list}."; U.quizUI.ex_synTop = "{t}.";
})();
