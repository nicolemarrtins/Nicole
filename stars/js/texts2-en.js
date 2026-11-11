/* Cielo 2 — deep content (English): planet pairs, new points, patterns, your year, questions. */
(function () {
  var X = TXT.en, U = I18N.en;
  X.art = { sun: "the Sun", moon: "the Moon" };
  X.planets.chiron = { n: "Chiron", role: "your wound and your gift for healing", area: "your wound and the way you heal", d: "Chiron is a minor body orbiting between Saturn and Uranus. In astrology it stands for the wound that becomes wisdom: where it hurts, you also learn to help.", house: "It’s where the wound shows most — and where, with time, you can help most." };
  X.planets.lilith = { n: "Lilith", role: "your untamed desire", area: "your desire and rebellion", d: "Lilith (mean Black Moon) is the apogee of the Moon’s orbit: an abstract point, not a body. It stands for what refuses to be tamed — desire, rebellion — and what you learned to hide.", house: "It’s where you won’t accept being told how to be." };
  X.planets.fortune = { n: "Fortune", role: "your well-being", area: "your well-being", d: "The Part of Fortune is a calculated point (Ascendant + Moon − Sun in day charts; reversed at night). It shows where well-being and everyday luck flow most easily.", house: "That’s where life tends to feel lighter." };
  X.natal.chiron = [
    "Your wound touches identity and the right to exist boldly; healing it, you learn to give others courage.",
    "Your wound touches self-worth and material security; healing it, you help others feel valuable.",
    "Your wound touches your voice: perhaps you felt it didn’t count; healing it, you listen and teach like few others.",
    "Your wound touches home and belonging; healing it, you become a refuge for others.",
    "Your wound touches shine and recognition; healing it, you encourage others to show themselves.",
    "Your wound touches the body, usefulness or perfectionism; healing it, you develop a gift for care.",
    "Your wound touches relationships and fairness; healing it, you become a bridge between people.",
    "Your wound touches trust and intimacy; healing it, you can walk with others through their crises.",
    "Your wound touches meaning and belief; healing it, you guide those looking for their way.",
    "Your wound touches authority and success; healing it, you lead with humanity.",
    "Your wound touches belonging and feeling different; healing it, you bring very different people together.",
    "Your wound touches sensitivity and boundaries; healing it, your compassion becomes medicine."
  ];
  X.natal.lilith = [
    "Your untamed force is independence: you won’t tolerate anyone curbing your drive.",
    "Your untamed force is pleasure: you claim the right to enjoy your body and your life without guilt.",
    "Your untamed force is speech: you say what others keep quiet.",
    "Your untamed force is feeling: you refuse to care out of mere obligation.",
    "Your untamed force is radiance: you won’t make yourself smaller to fit in.",
    "Your untamed force is everyday autonomy: you reject imposed service.",
    "Your untamed force lives in relationships: you won’t accept unequal bonds.",
    "Your untamed force is intensity: you don’t fear depth or taboo.",
    "Your untamed force is your own truth: you reject other people’s dogmas.",
    "Your untamed force is ambition: you accept no ceilings and ask no permission.",
    "Your untamed force is freedom: you rebel against every mould.",
    "Your untamed force is intuition: you refuse a life without mystery."
  ];
  X.pairs = {
    "sun-moon": ["Who you are and what you need: will and heart.", "They go hand in hand: you know what you want and feel good going after it; you come across as coherent.", "What you want and what you need don’t always agree; learning to listen to both gives you rare emotional maturity."],
    "sun-mercury": ["Your identity and your mind are joined: you think the way you are.", "You speak with conviction and your ideas carry your personal stamp.", "It can be hard to separate your ideas from yourself: criticism of what you think feels personal."],
    "sun-venus": ["Your identity and the way you love touch: charm is part of who you are.", "You radiate warmth and good taste; people feel at ease with you.", "You may try too hard to please; your challenge is liking yourself without needing approval."],
    "sun-mars": ["Your identity and your drive: the will to act.", "You have energy, initiative and the courage to stand up for who you are.", "Energy bursts out — impatience, clashes, haste; channelled, it’s an unstoppable force."],
    "sun-jupiter": ["Your identity and your faith: optimism, generosity, the wish to grow.", "You trust life and life tends to answer: openings, protection, good spirits.", "Overconfidence can lead you to promise or take on too much; measure is your ally."],
    "sun-saturn": ["Your identity and your sense of duty: the weight of responsibility.", "Natural discipline: you build patiently and your achievements are solid.", "Perhaps you felt early that you had to earn your place; over the years that pressure becomes calm authority."],
    "sun-uranus": ["Your identity and your freedom: being different.", "Effortless originality: you innovate and your unique way of seeing is valued.", "Routine suffocates you and sudden changes find you; your challenge is being free without burning bridges."],
    "sun-neptune": ["Your identity and your imagination: sensitivity, ideals, art.", "Inspiration, empathy and creative talent; you perceive the subtle.", "Defining yourself or setting limits can be hard; ground your dreams and check before idealising."],
    "sun-pluto": ["Your identity and your power: intensity and transformation.", "You have enormous inner strength: you reinvent yourself and know how to go deep.", "Power struggles and crises that transform you; you learn that true power doesn’t need control."],
    "moon-mercury": ["What you feel and what you think: the voice of emotion.", "You can put your feelings into words: emotional intelligence.", "Head and heart argue: sometimes you rationalise feelings or speak from the emotion of the moment."],
    "moon-venus": ["Tenderness and affection: your need for love and the way you give it.", "Natural sweetness, good taste and a gift for creating welcoming spaces.", "You may seek affection to soothe insecurity; your challenge is giving yourself the love you ask for."],
    "moon-mars": ["Emotion and impulse: feeling and reacting.", "Emotional courage: you defend your people and act on what you feel.", "Quick reactions and anger born of a wound; breathing before you reply changes everything."],
    "moon-jupiter": ["Emotion and generosity: a big heart.", "Optimism, warmth and protection: people feel cared for around you.", "You may amplify feelings or give everything until you’re empty; measure is love too."],
    "moon-saturn": ["Emotion and duty: caring and holding back.", "Emotional maturity and loyalty: you are a steady support for others.", "Perhaps you learned to keep feelings to yourself or to care before being cared for; with time you learn to ask without guilt."],
    "moon-uranus": ["Emotion and freedom: feeling unpredictably.", "You adapt quickly to change and need space without drama.", "Sudden ups and downs and a fear of depending on anyone; your challenge is allowing closeness without feeling caged."],
    "moon-neptune": ["Emotion and imagination: an oceanic inner world.", "Deep empathy, intuition and artistic sensitivity.", "You absorb other people’s feelings and may idealise or escape; boundaries protect you."],
    "moon-pluto": ["Emotion and depth: feeling all the way down.", "An intensity that transforms: you can stay with crises and be reborn.", "Intense feelings and fear of loss; releasing emotional control sets you free."],
    "mercury-venus": ["Mind and charm: kind words and an eye for beauty.", "You speak with grace, diplomacy and a sense of beauty.", "You may say what pleases instead of what you think; honesty can be kind too."],
    "mercury-mars": ["Mind and action: quick thinking, sharp words.", "You decide fast, debate nimbly and defend your ideas with energy.", "Arguments, mental impatience or words that wound; thinking before you reply gives you power."],
    "mercury-jupiter": ["Mind and vision: big ideas.", "A gift for learning, teaching and seeing the whole picture.", "Too many ideas or promises, and details slipping away; choosing and going deep is your key."],
    "mercury-saturn": ["Mind and structure: serious, rigorous thinking.", "Focus, method and a trustworthy word; you think long-term.", "Doubts about your intelligence or fear of mistakes; practice turns that pressure into mastery."],
    "mercury-uranus": ["Mind and genius: sudden, original ideas.", "Intellectual intuition, inventiveness and quick connections.", "Mental restlessness, jumping ideas or rebellious communication; writing things down and pausing help."],
    "mercury-neptune": ["Mind and imagination: thinking in images.", "Verbal creativity, intuition and poetic sensitivity.", "Confusion, forgetfulness or misunderstandings; checking the facts protects your good faith."],
    "mercury-pluto": ["Mind and depth: investigating and persuading.", "A penetrating mind with great powers of analysis and persuasion.", "Mental obsessions or words used as weapons; your mind is powerful when you use it to understand."],
    "venus-mars": ["Love and desire: attraction, the receptive and the active in you.", "Natural chemistry, sensuality and a balance of giving and taking.", "Intense passion with friction: desire and affection sometimes go different ways."],
    "venus-jupiter": ["Love and abundance: generous affection.", "Charm, luck in love and a taste for enjoying life.", "Too much pleasure, spending or idealisation in love; enough is abundance too."],
    "venus-saturn": ["Love and commitment: loving seriously.", "Loyalty, lasting relationships and a taste for the classic and well made.", "Fear of rejection or feeling undeserving of love; with time, love arrives more solid."],
    "venus-uranus": ["Love and freedom: attraction to the different.", "Original relationships, friendships that turn into love and a unique style.", "On-off loves or fear of being tied down; you need a bond that respects your freedom."],
    "venus-neptune": ["Love and ideal: romance.", "Compassionate love, artistic sensitivity and boundless tenderness.", "Idealising the one you love or losing yourself in them; seeing the other as they are protects love."],
    "venus-pluto": ["Love and power: total passion.", "Deep love, magnetism and the ability to be transformed through a bond.", "Jealousy, obsession or intense, difficult relationships; trust is built, not controlled."],
    "mars-jupiter": ["Action and expansion: enthusiasm.", "Energy with purpose: you take initiative and risks with good instinct.", "Too much risk or confidence; choosing your battles multiplies your wins."],
    "mars-saturn": ["Action and restraint: accelerator and brake at once.", "Physical and mental discipline: perseverance and strategy.", "Frustration, pent-up energy or fear of acting; step by step it becomes admirable endurance."],
    "mars-uranus": ["Action and rebellion: electric energy.", "Courage, quick reflexes and a love of innovation.", "Impulsiveness, rushing or abrupt rebellion; channel that electricity into something new and it becomes genius."],
    "mars-neptune": ["Action and ideal: acting from inspiration.", "Energy in service of an ideal, of art or of helping others.", "Diffuse energy, doubts or avoiding conflict; clear goals and boundaries give you back your strength."],
    "mars-pluto": ["Action and power: an iron will.", "Strength, determination and the capacity to regenerate.", "An intensity that can turn into power struggles; use your strength to transform, not to dominate."],
    "jupiter-saturn": ["Expansion and structure: growing with order.", "Balance between vision and realism: you build big, solid things.", "Tension between leaping and braking; knowing when to grow and when to consolidate is your wisdom."],
    "jupiter-uranus": ["Expansion and freedom: sudden opportunities.", "Unexpected luck, visionary ideas and freedom to grow.", "Abrupt changes of direction or constant restlessness; freedom needs a plan."],
    "jupiter-neptune": ["Faith and imagination: spiritual idealism.", "Compassion, faith and inspiration; great sensitivity to art and spirit.", "Illusions, vague promises or escapism; feet on the ground protect your dreams."],
    "jupiter-pluto": ["Expansion and power: deep ambition.", "The capacity to generate big transformations and resources.", "Extreme ambition or power struggles; your growth is healthy when it also benefits others."],
    "saturn-uranus": ["Old and new: tradition and change.", "You innovate responsibly and give structure to new ideas.", "Tension between security and freedom; you learn to change without tearing everything down."],
    "saturn-neptune": ["Reality and dream: giving shape to the ideal.", "The ability to make dreams concrete and give structure to inspiration.", "Vague fears or disillusionment; dreams come true through concrete steps."],
    "saturn-pluto": ["Structure and power: endurance.", "Determination and the ability to rebuild patiently.", "Strong pressures and tests of endurance from which enormous strength emerges."],
    "uranus-neptune": ["A generational aspect: change and dream, new collective ideals.", "Your generation joins innovation and idealism.", "Your generation lives the tension between progress and disillusionment."],
    "uranus-pluto": ["A generational aspect: revolution and transformation.", "Your generation transforms structures creatively.", "Your generation lives radical change and great pressures of its time."],
    "neptune-pluto": ["A generational aspect shared by several generations: spiritual transformation.", "A collective sensitivity to deep transformation.", "A collective tension between ideals and power."]
  };
  X.angleAsp = {
    asc: { sun: "Your identity shows at first glance: a clear presence.", moon: "Your feelings show: you come across as sensitive and approachable.", mercury: "Your mind shows: you seem quick and curious.", venus: "Your charm is visible: kindness and good taste.", mars: "Your energy shows: a direct, dynamic presence.", jupiter: "You radiate optimism and generosity.", saturn: "You come across as serious and self-possessed.", uranus: "You come across as original and unpredictable.", neptune: "You give a sensitive, hard-to-define impression.", pluto: "You radiate intensity and magnetism.", node: "Your path runs through how you show yourself to the world.", chiron: "Your wound and your gift for healing show in the way you are." },
    mc: { sun: "Your identity asks for a visible place in the world.", moon: "Your vocation has to do with caring or with the public.", mercury: "Your career runs through communicating, writing or teaching.", venus: "Your vocation seeks beauty, art or relationships.", mars: "Your career asks for action, initiative and competition.", jupiter: "A lucky professional star: growth and recognition.", saturn: "A career built with effort and long-term authority.", uranus: "An unconventional career, with twists and innovation.", neptune: "A creative, spiritual or service vocation; watch for vagueness.", pluto: "Deep ambition and power in your career.", node: "Your path and your vocation meet.", chiron: "Your vocation may run through healing or accompanying others." },
    nature: { h: "It flows: easy to express.", t: "With tension: it asks to be integrated consciously.", c: "It’s strongly marked in you." }
  };
  X.dignity = {
    names: { domicile: "Domicile", exaltation: "Exaltation", detriment: "Detriment", fall: "Fall" },
    text: {
      domicile: "{P} is in its own sign: {role} expresses itself naturally, with resources and strength.",
      exaltation: "In {S}, {P} is exalted: {role} shines in its highest version.",
      detriment: "In {S}, {P} is in detriment: {role} works on foreign ground; it takes more effort but builds uncommon skills.",
      fall: "In {S}, {P} is in fall: {role} needs more patience and care; it matures with the years."
    }
  };
  X.patterns = {
    stelliumSign: "Stellium in {where}: {n} planets together ({list}). That energy weighs heavily in you: it’s your focus and, at times, your excess.",
    stelliumHouse: "Stellium in house {where}: {n} planets ({list}) concentrate your life on {dom}.",
    grandTrine: "Grand trine ({list}): a circuit of natural talent in {el}. Your ease there is huge; the challenge is not to fall asleep on it.",
    tSquare: "T-square with {apex} at the apex ({list}): a tension that pushes you to act. It drives achievement when you channel it.",
    grandCross: "Grand cross ({list}): four forces pulling in different directions. Lots of energy and stamina: you hold tensions that would paralyse others.",
    yod: "Yod ({list}) pointing at {apex}: a sense of mission or constant adjustment at that point. Something in you asks to be refined until it finds its unique form.",
    kite: "Kite ({list}): a grand trine with a concrete outlet towards {apex}. Your talent has a channel.",
    none: "No major configurations: your chart reads planet by planet, with more freedom and less script."
  };
  X.sect = {
    day: "Day chart: you were born with the Sun above the horizon. Your energy tends to be visible and outward-facing; clarity and goals suit you.",
    night: "Night chart: you were born with the Sun below the horizon. Your strength tends to be inward — intuition, a private world — and your processes ripen quietly."
  };
  X.hemis = {
    above: "Most of your planets are above the horizon: a life oriented to the world, the public and the visible.",
    below: "Most of your planets are below the horizon: a life oriented to the intimate, to roots and to building from within.",
    east: "The eastern hemisphere dominates: you have your own initiative and create your own opportunities.",
    west: "The western hemisphere dominates: other people are key to your path; you grow through encounters."
  };
  X.ruler = {
    line: "Your chart ruler is {P}, because it rules your Ascendant in {asc}. It sits in {S}{house}: {flavor}",
    houseBit: ", in house {n}",
    where: "Wherever your ruler sits, much of your story plays out: {dom}.",
    modern: "Its modern co-ruler is {P}.",
    flavor: { sun: "your life revolves around shining and finding purpose.", moon: "your life is guided by emotion, care and intuition.", mercury: "your life is driven by curiosity, words and learning.", venus: "your life seeks beauty, bonds and harmony.", mars: "your life asks for action, courage and challenge.", jupiter: "your life seeks growth, exploration and meaning.", saturn: "your life is built with discipline, patience and responsibility." }
  };
  X.profection = [
    "A year about you: your body, your image and the chance to start again.",
    "Money, resources and self-worth come to the fore.",
    "Learning, communicating and moving around: siblings, neighbours, short courses.",
    "Home, family and roots: perhaps moves, renovations or family endings.",
    "Creativity, pleasure, romance and children or projects of your own.",
    "Routines, health and daily work: a year to adjust your habits.",
    "Relationships and agreements: the other as a mirror.",
    "Intimacy, shared resources and deep transformations.",
    "Travel, study and beliefs: a year to widen your horizons.",
    "Career, visibility and achievement: the public sphere moves.",
    "Friendships, community and plans for the future.",
    "Rest, the end of a cycle and inner work before starting again."
  ];
  X.progMoon = [
    "A chapter of beginnings: emotional drive to start and assert yourself.",
    "A chapter of settling: a need for calm, stability and pleasure.",
    "A chapter of curiosity: learning, talking, moving, connecting.",
    "A chapter of roots: home, family and emotional care.",
    "A chapter of expression: creating, shining, playing, showing your heart.",
    "A chapter of order: habits, health and work done well.",
    "A chapter of relationships: partnerships, agreements and balance.",
    "A chapter of depth: transformation, intimacy and letting go.",
    "A chapter of horizons: travel, study and meaning.",
    "A chapter of building: responsibility, goals and maturity.",
    "A chapter of freedom: friendships, new ideas and independence.",
    "A chapter of closure: sensitivity, inner life and letting go of the old."
  ];
  X.prompts = {
    transit: {
      sun: { h: ["Which part of you wants more room today?", "Which recent achievement haven’t you acknowledged?"], t: ["Where are you forcing things?", "Which battle could you drop today?"], c: ["What would you like this year to say about you?", "If you started from scratch today, what would you keep?"] },
      moon: { h: ["Who makes you feel at home?", "What do you need to feel good tonight?"], t: ["Which feeling are you avoiding naming?", "What weighs on you more than you admit?"], c: ["What do you feel right now, without judging it?", "What is your body asking for today?"] },
      mercury: { h: ["Which conversation would you like to have?", "Which idea deserves to be written down today?"], t: ["Which misunderstanding could you clear up?", "Are you listening to understand or to reply?"], c: ["What are you learning right now?", "Which question keeps circling your mind?"] },
      venus: { h: ["What makes you feel good in your own skin?", "Who would you like to thank for something?"], t: ["Are you giving in order to receive?", "What do you really want, beyond what’s expected?"], c: ["Which simple pleasure have you denied yourself?", "What do you value more today than a year ago?"] },
      mars: { h: ["Which small action would bring you closer to your goal?", "What is worth fighting for right now?"], t: ["What makes you angry, and what’s underneath?", "Where are you spending energy that never comes back?"], c: ["What would you start today if you weren’t afraid?", "Which desire are you postponing?"] },
      jupiter: { h: ["Which opportunity is in front of you?", "Where would you like to grow this year?"], t: ["Where are you exaggerating or overpromising?", "What is enough for you?"], c: ["Which door would you like to open?", "What do you believe now that you didn’t before?"] },
      saturn: { h: ["Which commitment makes you proud?", "What are you building for the long term?"], t: ["Which boundary do you need to set?", "Which responsibility isn’t yours?"], c: ["Which structure in your life needs reviewing?", "What maturity are you gaining?"] },
      uranus: { h: ["Which small change would give you air?", "Which original part of you do you hide?"], t: ["What unsettles you without a name?", "What do you need to let go of to feel free?"], c: ["Which rule no longer makes sense to you?", "What would your life look like if it were a little more yours?"] },
      neptune: { h: ["What has been inspiring you lately?", "What is your intuition telling you?"], t: ["What are you idealising?", "What information do you need before deciding?"], c: ["Which dream deserves your attention?", "Where do you need more compassion, including for yourself?"] },
      pluto: { h: ["Which power do you have and not use?", "Which transformation has already begun in you?"], t: ["What are you trying to control?", "What would you need to release to be reborn?"], c: ["Which chapter is ending?", "Which deep truth do you recognise today?"] }
    },
    natal: {
      sun: ["When do you feel most yourself?", "What gives your life meaning right now?"],
      moon: ["What do you need to feel safe?", "How do you look after yourself when nobody’s watching?"],
      asc: ["What impression do you give without meaning to?", "Does how people see you match who you are inside?"],
      mercury: ["How do you learn best?", "What is hard for you to say out loud?"],
      venus: ["What makes you fall for someone?", "What do you value more than money?"],
      mars: ["What gets you into action?", "How do you express anger?"],
      jupiter: ["Where have you been lucky in life?", "What makes you grow?"],
      saturn: ["What was hard for you and is now yours to command?", "Which fear has taught you something?"],
      mc: ["What would you like to be remembered for?", "What work would you do even unpaid?"],
      chiron: ["Which wound has become your way of helping?", "Which kind of pain in others do you connect with instantly?"],
      node: ["What scares you but draws you in?", "Which comfort zone no longer nourishes you?"]
    },
    moon: ["What do you want to start?", "What gives you calm?", "What are you curious about today?", "Who takes care of you?", "What makes you proud?", "Which small bit of order would do you good?", "Which relationship needs balance?", "Which truth do you need to look at?", "What excites you?", "Which goal deserves your effort?", "What makes you feel free?", "What do you need to let go of?"]
  };
  X.horary = {
    cats: {
      love: { n: "Love and partners", h: 7 }, work: { n: "Work and career", h: 10 }, money: { n: "Money and resources", h: 2 }, home: { n: "Home and family", h: 4 },
      travel: { n: "Travel and study", h: 9 }, health: { n: "Health and routine", h: 6 }, friends: { n: "Friends and projects", h: 11 }, creative: { n: "Creativity and children", h: 5 }, contact: { n: "Messages and paperwork", h: 3 }
    },
    verdict: { yes: "Yes, quite likely.", yesHard: "Yes, but with effort.", help: "Yes, with someone’s help.", late: "It may happen, but late or in another form.", notNow: "Not for now.", voidMoon: "Probably not much will change.", early: "It’s too early to ask.", lateAsc: "The matter is practically decided already." },
    you: "You are represented by {P}, ruler of your Ascendant in {S}, placed in {S2}, house {n}; the Moon, in {S3}, is your co-significator.",
    quesited: "What you ask about belongs to house {h} ({dom}) and is represented by {Q}, in {S}, house {n}.",
    same: "You and the matter share the same ruler ({P}): the answer depends mostly on you.",
    perfect: "{A} and {B} form {asp} on {date} {how}.",
    aspExact: { conj: "an exact conjunction", sextile: "an exact sextile", square: "an exact square", trine: "an exact trine", opp: "an exact opposition" },
    aspA: { conj: "a conjunction", sextile: "a sextile", square: "a square", trine: "a trine", opp: "an opposition" },
    how: { trine: "smoothly", sextile: "easily, if you take a step", conj: "directly", square: "with obstacles and effort", opp: "with tension or after a negotiation" },
    afterSign: "But the meeting happens after one of them changes sign: the situation will look different by then.",
    none: "{A} and {B} form no exact aspect in the coming weeks: there’s no clear meeting.",
    refrain: "Note: {P} turns retrograde before the meeting; someone may back out.",
    translation: "The Moon carries the light from {A} to {B}: someone or something will act as a bridge.",
    moonNext: "The Moon, your co-significator, is heading for {asp} with {B} on {date}.",
    voidMoon: "The Moon is void of course: it makes no more aspects before leaving {S}.",
    early: "The Ascendant is in its first degrees ({d}°): the situation hasn’t matured yet.",
    lateAsc: "The Ascendant is in its last degrees ({d}°): the matter is nearly settled.",
    disclaimer: "Horary astrology is a traditional technique (William Lilly, 1647): you cast the chart for the moment of the question and read its rulers. Use it to think, not to decide for you.",
    timing: "If it happens, the chart points to around {date}."
  };
  X.quiz = [
    ["Which planet rules Libra?", ["Venus", "Mars", "Saturn", "Mercury"], "Venus rules Taurus and Libra: beauty, bonds and what you value."],
    ["How many degrees make a trine?", ["120°", "90°", "60°", "180°"], "A trine is a third of the circle: the most flowing aspect."],
    ["Which element is Cancer?", ["Water", "Earth", "Fire", "Air"], "Cancer, Scorpio and Pisces are the water signs: emotion and intuition."],
    ["Which sign is opposite Aries?", ["Libra", "Scorpio", "Cancer", "Capricorn"], "Opposites complete each other: the “I” of Aries and the “we” of Libra."],
    ["Which house is about vocation and reputation?", ["The 10th house", "The 4th house", "The 6th house", "The 2nd house"], "The 10th house begins at the Midheaven, the highest point of the chart."],
    ["What does it mean when a planet is retrograde?", ["From Earth it seems to move backwards", "It moves away from the Sun", "It really stops in the sky", "It changes orbit"], "It’s an optical illusion: Earth overtakes the planet (or is overtaken) in its orbit."],
    ["What does the Ascendant mark?", ["The sign rising in the east at birth", "The Sun sign", "The Moon sign", "The highest planet"], "That’s why it depends on the exact time: it changes roughly every two hours."],
    ["How long does the Moon take to travel the whole zodiac?", ["About 27 days", "A year", "A week", "About two and a half years"], "The Moon moves about 13° a day and spends roughly two and a half days in each sign."],
    ["Which planet takes about 29 years to return to its position?", ["Saturn", "Jupiter", "Uranus", "Mars"], "The famous “Saturn return” arrives around age 29."],
    ["Which mode do Gemini, Virgo, Sagittarius and Pisces share?", ["Mutable", "Fixed", "Cardinal", "None"], "Mutable signs close each season: adaptation and change."],
    ["Which planet rules Scorpio in traditional astrology?", ["Mars", "Pluto", "Saturn", "Venus"], "Traditionally Mars; modern astrology adds Pluto as co-ruler."],
    ["Which aspect do two planets form at 90°?", ["Square", "Sextile", "Trine", "Opposition"], "A square is tension that pushes you to act."],
    ["What is the tropical zodiac?", ["The one that puts 0° Aries at the March equinox", "The one that follows today’s constellations", "The Chinese zodiac", "One that uses only fixed stars"], "It’s the one Western astrology uses: based on the seasons, not the constellations."],
    ["What does the 7th house represent?", ["Partners and close relationships", "Your own money", "Health", "Siblings"], "The 7th house begins at the Descendant, opposite the Ascendant: the other."],
    ["How often is there a new Moon?", ["About every 29.5 days", "Every 7 days", "Every 15 days", "Every 3 months"], "That’s the synodic month: from one new Moon to the next."],
    ["Which planet rules Aquarius in traditional astrology?", ["Saturn", "Uranus", "Jupiter", "Mercury"], "Traditionally Saturn; modern astrology adds Uranus."],
    ["What is the Midheaven?", ["The highest point of the chart", "The centre of the wheel", "The Moon sign", "The 1st house"], "It’s where the ecliptic crosses the meridian: vocation and public direction."],
    ["Which of these is an earth sign?", ["Capricorn", "Aquarius", "Leo", "Scorpio"], "Taurus, Virgo and Capricorn are the earth signs: realism and constancy."],
    ["How many times a year is Mercury usually retrograde?", ["About 3", "Once every two years", "12", "Once a century"], "Mercury goes retrograde about three times a year, for about three weeks each time."],
    ["What is a planet’s exaltation?", ["A sign where it expresses itself especially well", "Being retrograde", "Being in the 10th house", "Making many aspects"], "For example, the Sun is exalted in Aries and the Moon in Taurus."]
  ];
  U.tabs.ask = "Ask";
  U.chart.system.koch = "Koch"; U.chart.system.regio = "Regiomontanus"; U.chart.system.equal = "Equal houses";
  U.deep = { title: "Deep reading", cta: "Read your chart in depth", ctaSub: "Chart ruler, dignities, configurations, aspects one by one and questions for you.",
    s: { arch: "Your architecture", essence: "Your essence", emotion: "Your emotional world", presence: "How others see you", mind: "Mind and voice", love: "Love and values", drive: "Energy and desire", growth: "Growth and limits", vocation: "Vocation", wound: "Wound and healing", path: "Your path" },
    think: "To reflect on", answerPh: "Your answer…", save: "Save", saved: "Saved ✓", noTime: "Without a birth time, this section reads by sign only.", mostAspected: "{P} is your most connected planet ({n} aspects): a thread running through your whole chart." };
  U.extra = { dignity: "Dignity", points: "Sensitive points", precision: "How precise your time is", sens: "Ten minutes either way would put your Ascendant between {a} and {b}; thirty minutes, between {c} and {d}.", sensSame: "Your Ascendant is stable: even with a 30-minute error it stays in {s}.", sensEdge: "Your Ascendant is close to a sign change: double-check your birth time.", lilithNote: "Mean Lilith after Meeus; other programs may differ by a few arcminutes." };
  U.tr2 = { window: "Active from {a} to {b}", exacts: "Exact: {list}", house: "It moves through your house {n} ({dom})." };
  U.daily = { title: "Question of the day", ph: "Write your answer…", save: "Save to journal", saved: "Saved to your journal ✓" };
  U.year = { title: "Your year", sub: "Timing techniques: what this year activates in your chart.", prof: "Year of house {n}", lord: "Lord of the year: {P}", profText: "{theme} The lord of the year is {P}: its place in your chart ({S}, {house}) and its transits set the tone.", profHouse: "house {n}",
    sr: "Solar return {y}", srText: "The Sun returns to its natal position on {date} at {time}. For that year, the return’s Ascendant falls in {asc} and the Sun in house {n}: {dom}.", srPlace: "Calculated for {place}.",
    prog: "Progressed Moon", progText: "Your progressed Moon is in {S}{house}. {text}", progNext: "It moves into {S} around {date}.",
    big: "Major transits over the next 12 months", none: "No major slow transits this year: a stable period.", noTime: "Timing techniques need your birth time for houses and the Ascendant." };
  U.askHub = { title: "Ask", sub: "Ask the sky, put your chart to the test and get to know yourself.",
    horary: ["Ask the sky", "Ask a concrete question: the chart of that moment is cast (horary astrology)."], quiz: ["Know your chart", "An 8-question game about your chart and astrology."],
    blind: ["Do you recognise yourself blind?", "Choose which description fits you without knowing its sign."], prompts: ["Questions for you", "Reflection questions from your chart and your day."] };
  U.horary = { title: "Ask the sky", cat: "What is your question about?", q: "Your question", ph: "For example: will they offer me the job?", where: "Asking from", change: "Change", go: "Cast the chart", tip: "It works best with concrete yes-or-no questions, asked sincerely and only once.",
    result: "Answer", why: "Why", sigs: "Significators", chart: "The chart of the moment", track: "Did it happen?", yes: "Yes", no: "No", pending: "Not yet", history: "Your questions", score: "Hits: {h} of {n} resolved questions.", scoreNone: "Once you know how each question turned out, mark it: you’ll see whether the technique works for you.", empty: "You haven’t asked anything yet.", asked: "{date} · {place}", del: "Delete" };
  U.here = { title: "Your current location", use: "Use my location", search: "Search city", note: "Used for horary questions and your solar return.", denied: "Couldn’t get your location; search for your city.", current: "Current location", birthDefault: "For now your birthplace is used." };
  U.quizUI = { title: "Know your chart", start: "Start", q: "Question {i} of {n}", right: "Correct!", wrong: "Not quite.", next: "Next", finish: "See result", result: "{s} of {n}", again: "Play again", best: "Best: {b} of {n}", msgs: ["You’re starting to know your sky.", "Very good: your chart is getting familiar.", "You know your chart by heart!"],
    q_sun: "Which sign is your Sun in?", q_moon: "Which sign is your Moon in?", q_asc: "What is your Ascendant?", q_venus: "Which sign is your Venus in?", q_mars: "Which sign is your Mars in?", q_mercury: "Which sign is your Mercury in?", q_mc: "Which sign is your Midheaven in?",
    q_house: "Which house is your {P} in?", q_ruler: "Which planet rules your chart?", q_element: "Which element dominates your chart?", q_retro: "Which of these planets is retrograde in your chart?", q_sunmoon: "Which aspect do your Sun and Moon form?", noAspect: "No major aspect",
    ex_sign: "Your {P} is at {d} {S}.", ex_house: "Your {P} is in house {n}: {dom}.", ex_ruler: "Your Ascendant is in {S}, ruled by {P}.", ex_element: "Counting the personal planets and the Ascendant, {E} dominates.", ex_retro: "{P} was retrograde when you were born.", ex_sunmoon: "Your Sun and Moon are {d} apart." };
  U.blindUI = { title: "Do you recognise yourself blind?", intro: "Each round shows 3 descriptions: one comes from your chart and two from random signs. Pick the one that describes you best without thinking about signs. At the end you’ll see whether you beat chance (1 in 3).", start: "Start", round: "Round {i} of {n} · {P}", pick: "This one is me", reveal: "It was your {P} in {S}.", missed: "You chose {S}; your {P} is in {S2}.", result: "You chose your own description {h} of {n} times. Chance alone would give about {e}.", p: "Probability of doing this well or better by pure chance: {p}.", again: "Try again with other descriptions", history: "Previous attempts", fine: "A good test is blind: if you already know your texts, the result is biased." };
  U.promptsUI = { title: "Questions for you", today: "Today", chart: "From your chart", saved: "Your answers", empty: "You haven’t answered any yet." };
})();
