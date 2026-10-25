/* Days 8–14, fully written. */
(function () {
const V = TAW.V;

TAW.lessons[8] = {
  day: 8, title: "Virginia Woolf", kicker: "Literature · Feminism · Freedom",
  cats: ["literature", "culture"], skills: ["culture", "thinking", "articulation"], difficulty: "Intermediate", minutes: 32,
  why: "Woolf is referenced constantly — in conversations about women, creativity, money, work and mental life. After today you’ll be able to say something real about her, not just recognise the name.",
  learn: {
    body: [
      "In 1928 Virginia Woolf gave two lectures at women’s colleges in Cambridge. They became <em>A Room of One’s Own</em> (1929), and its central claim is surprisingly material: <strong>“a woman must have money and a room of her own if she is to write fiction.”</strong>",
      "Woolf’s point was not that women lacked talent. It was that talent needs conditions: time, privacy, income, education, and permission to fail. Without them, genius goes nowhere.",
      "To make this vivid she invents <strong>Judith Shakespeare</strong>, William’s equally gifted imaginary sister. Judith is not sent to school, is pressured to marry, runs away to London to act, is laughed at, and comes to a tragic end. The thought experiment asks: how many Judiths has history lost?",
      "As a novelist, Woolf is associated with <strong>stream of consciousness</strong> — writing that follows the flow of a character’s thoughts. <em>Mrs Dalloway</em> (1925) takes place in a single day in London, as Clarissa Dalloway prepares a party; most of the drama happens inside people’s heads.",
      "Why she still matters: she connected creativity to economics, gave literary form to inner life, and asked who gets to make culture — a question we still ask about film, tech and publishing."
    ],
    phrases: [
      { en: "Woolf’s argument was surprisingly practical…", tone: "Insightful", note: "Shows you understand it’s about money and space, not just ideals." },
      { en: "It’s a question of conditions, not talent.", tone: "Analytical", note: "The core idea in seven words." },
      { en: "There’s a Judith Shakespeare in every generation.", tone: "Allusive", note: "A cultural reference you can now use." },
      { en: "What I find striking about her writing is…", tone: "Personal, cultured", note: "Lets you give an opinion rather than recite facts." }
    ],
    tip: "To talk about an author: one fact, one idea, one reason it still matters, one personal reaction."
  },
  vocab: [
    V("constraint", "kun-STRAYNT", "noun", "A limitation or restriction.", "Neutral and analytical — useful for talking about circumstances without sounding like you’re complaining.", ["limitation", "restriction", "obstacle"], "A “restriction” is imposed by rules. An “obstacle” is something in your way. A “constraint” is a condition that limits what is possible — financial, social, time constraints.", "Woolf showed how financial constraints shaped what women could write.", "— Why didn’t you study abroad?\n— Financial constraints, mostly. It wasn’t a question of wanting to.", "Describe a constraint that shaped a choice you made."),
    V("autonomy", "aw-TON-uh-mee", "noun", "The freedom to make your own decisions.", "Stronger and more precise than “freedom” in personal and professional contexts.", ["independence", "self-determination", "freedom"], "“Independence” often means not relying on others (financially). “Freedom” is broad. “Autonomy” is the right to govern yourself — very common in discussions about work and psychology.", "What I value most in a job is autonomy — being trusted to decide how I work.", "— Why do you like freelancing?\n— Autonomy. Nobody tells me when to have lunch.", "Write about an area of your life where you want more autonomy."),
    V("overlooked", "oh-ver-LOOKT", "adjective", "Not noticed or not given the attention or credit deserved.", "Implies an injustice or an opportunity — a thing worth discovering.", ["neglected", "underrated", "ignored"], "“Ignored” can be deliberate. “Neglected” suggests lack of care. “Underrated” means valued less than it should be. “Overlooked” means simply not noticed.", "Many women painters of the Renaissance were overlooked for centuries.", "— Have you heard of Sofonisba Anguissola?\n— No — she must be one of those overlooked artists.", "Name something or someone you think is overlooked."),
    V("stream of consciousness", "streem uv KON-shus-ness", "noun", "A writing style that presents a character’s continuous flow of thoughts and feelings.", "A literary term worth knowing; also used playfully about speaking (“Sorry, that was a bit stream of consciousness”).", ["interior monologue"], "“Interior monologue” is a related technique — a character’s thoughts presented directly. “Stream of consciousness” emphasises the unedited flow, jumping between memory, perception and feeling.", "Mrs Dalloway uses stream of consciousness to move between characters’ minds.", "— Sorry, that email was very long.\n— It was a bit stream of consciousness, but I got the point!", "Describe your morning in two stream-of-consciousness sentences."),
    V("introspective", "in-truh-SPEK-tiv", "adjective", "Tending to examine your own thoughts and feelings.", "Positive or neutral; suggests depth. Too much becomes “self-absorbed”.", ["reflective", "contemplative", "self-aware"], "“Reflective” is calm thinking about experience. “Contemplative” is quiet, almost spiritual. “Introspective” looks inward specifically.", "Woolf’s novels are deeply introspective — the action happens in people’s minds.", "— You’ve been quiet today.\n— Just introspective. Big birthday next week.", "Are you introspective? Write one honest sentence.")
  ],
  culture: "woolf",
  cultureNote: "A Room of One’s Own connects literature, economics, education and feminism. That’s why Woolf appears in so many conversations — and on your Intellectual Map.",
  sayBetter: {
    basic: "Virginia Woolf was a feminist writer and she was important.",
    levels: [
      ["Level 1", "Virginia Woolf was an important feminist writer.", "Correct but forgettable."],
      ["Level 2", "Woolf was a modernist writer who argued that women needed money and space to write.", "Now there’s an idea."],
      ["Level 3", "Woolf’s argument in A Room of One’s Own was surprisingly practical: women didn’t lack talent, they lacked money, time and privacy.", "An idea + why it’s interesting."],
      ["Level 4", "What I find striking about Woolf is how practical she was. She didn’t say women lacked genius; she said genius needs a room, an income and time — which is still true for anyone trying to make art without money.", "Personal reaction + idea + modern relevance. This is how cultured people actually talk."]
    ],
    prompt: "Say something about Woolf at Level 4 — in your own words."
  },
  exercise: {
    title: "Talk about it in conversation",
    instructions: "Respond naturally to each conversational moment using what you learned.",
    items: [
      { q: "A friend says: “I’ve never read Woolf. Is she worth it?”", a: "I’d start with A Room of One’s Own — it’s short and surprisingly funny. Her novels are harder, but Mrs Dalloway is beautiful once you get used to the style." },
      { q: "Someone says: “Women just weren’t great writers before the 20th century.”", a: "Woolf’s answer would be: they didn’t have the conditions. No education, no money, no privacy. It’s a question of conditions, not talent." },
      { q: "At work: “We want more diverse voices, but nobody applies.”", a: "Maybe it’s a Woolf problem — the talent exists, but the conditions don’t. Who can afford an unpaid internship?" },
      { q: "“What is stream of consciousness?”", a: "It’s when the writing follows a character’s thoughts as they actually happen — jumping between memory, perception and feeling." }
    ]
  },
  think: {
    q: "What is a “room of one’s own” today? Is the argument still about money and space — or has it become about time, attention, or something else?",
    angles: ["Who today lacks the conditions to create?", "Is a phone the opposite of a room of one’s own?", "Does Woolf’s argument apply to men too?"]
  },
  express: { prompt: "Write 5–6 sentences explaining why Virginia Woolf matters to someone who has never heard of her. Include one fact, one idea, one modern connection, and your own reaction." },
  speak: {
    prompt: "What does “a room of one’s own” mean today?", seconds: 90,
    structure: ["Explain Woolf’s original claim briefly", "Your modern interpretation", "One example", "Your opinion — calibrated"]
  },
  recall: [
    { q: "Day 6: Loewenstein’s theory of curiosity is called…", a: "the information-gap theory" },
    { q: "Day 4: What does “compelling” add that “convincing” doesn’t?", a: "Interest and force — it grabs attention and is hard to resist." },
    { q: "Woolf’s famous claim: a woman must have ___ and ___ if she is to write fiction.", a: "money and a room of her own" }
  ],
  reflect: "What conditions do you need to think clearly and do your best work? Do you have them?",
  deep: {
    title: "Read: A Room of One’s Own, Chapter 3",
    body: "The Judith Shakespeare passage is in Chapter 3 — about 20 pages. It’s free on Project Gutenberg Australia and many other sites.",
    prompt: "Write a modern “Judith” — an imaginary gifted person today who never gets the chance. What stops her?"
  }
};

TAW.lessons[9] = {
  day: 9, title: "The Renaissance", kicker: "History · Art",
  cats: ["history", "art"], skills: ["culture", "english"], difficulty: "Intermediate", minutes: 30,
  why: "“Renaissance” is used everywhere — a renaissance man, a city’s renaissance, a renaissance of vinyl. Knowing what actually happened lets you use the word precisely, and understand half the art in Europe’s museums.",
  learn: {
    body: [
      "The Renaissance (French for “rebirth”) was a cultural movement that began in Italy in the 14th century and spread across Europe until roughly the 17th century. Its centre was <strong>Florence</strong>.",
      "What was being “reborn”? Interest in the art and ideas of ancient Greece and Rome. Scholars called <strong>humanists</strong> studied classical texts and placed new value on human potential, experience and education — not in opposition to religion, but alongside it.",
      "Several things made it possible: wealthy merchant and banking families like the <strong>Medici</strong> acted as <strong>patrons</strong>, paying artists; trade brought money and ideas; after 1453, Greek scholars fleeing Constantinople brought texts to Italy; and Gutenberg’s printing press (c. 1440s) spread ideas fast.",
      "In art, the big innovation was <strong>linear perspective</strong> — demonstrated by Filippo Brunelleschi in Florence in the early 1400s — which made flat paintings look three-dimensional. Then came Leonardo da Vinci (<em>Mona Lisa</em>), Michelangelo (the Sistine Chapel ceiling, <em>David</em>), Raphael, and in Venice, Titian.",
      "Overlooked: Sofonisba Anguissola (c. 1532–1625) served as a painter at the Spanish court of Philip II and was encouraged by Michelangelo; and historians now debate the very idea of a sudden “rebirth” — medieval Europe, and the Islamic world which preserved and developed Greek learning, were far from “dark”."
    ],
    phrases: [
      { en: "It was less a rebirth than a rediscovery…", tone: "Nuanced", note: "Shows you know the term is debated." },
      { en: "It was made possible by…", tone: "Analytical", note: "Explains conditions — very useful for history." },
      { en: "What’s remarkable is that…", tone: "Engaged", note: "Introduces something you find impressive." },
      { en: "A kind of renaissance", tone: "Figurative", note: "Use for a revival: “Vinyl is having a kind of renaissance.”" }
    ],
    tip: "History becomes conversation when you explain why something happened, not only what."
  },
  vocab: [
    V("revival", "ri-VY-vul", "noun", "A return to popularity, strength or activity.", "The everyday word for what “renaissance” means figuratively.", ["resurgence", "comeback", "renaissance"], "“Comeback” is informal (a person or brand). “Resurgence” is a strong return, often of a trend or problem. “Renaissance” suggests a cultural flourishing.", "There’s been a revival of interest in handwritten letters.", "— Everyone’s knitting again!\n— It’s a full revival. My grandmother is thrilled.", "Name something having a revival right now."),
    V("patron", "PAY-trun", "noun", "A person who gives financial support to artists or causes.", "Historical and modern: patrons of the arts, Patreon creators. (Also: a regular customer.)", ["sponsor", "benefactor", "backer"], "A “sponsor” expects publicity in return. A “benefactor” gives generously, often to institutions. A “patron” supports art or artists — the relationship can shape the work.", "Without the Medici as patrons, Florence’s art would look very different.", "— Who funds independent podcasts?\n— Listeners, mostly — modern patrons.", "Who are the patrons of art today?"),
    V("humanism", "HYOO-muh-niz-um", "noun", "A Renaissance movement focusing on classical learning and human potential; more broadly, a view emphasising human values and reason.", "Careful: in modern use it often means a non-religious ethical outlook. In history, Renaissance humanists were usually religious.", ["classicism", "secularism"], "“Classicism” is about imitating ancient style. “Secularism” is about separating religion from public life. Renaissance “humanism” was about education and human dignity.", "Renaissance humanism put human experience at the centre of art.", "— Was the Renaissance anti-religious?\n— Not really. Humanism was about valuing human potential, often within faith.", "Explain humanism in one simple sentence."),
    V("perspective (art)", "per-SPEK-tiv", "noun", "A technique for representing three-dimensional depth on a flat surface.", "Same word as Day 2 — a different meaning. In art, it’s technical.", ["depth", "foreshortening"], "“Foreshortening” is making an object look shorter because it points towards the viewer. “Linear perspective” uses lines that meet at a vanishing point.", "Brunelleschi’s experiments with perspective changed painting forever.", "— Why does medieval art look so flat?\n— Painters weren’t yet using linear perspective systematically.", "Connect both meanings of “perspective” in one sentence."),
    V("masterpiece", "MAS-ter-peece", "noun", "A work of outstanding artistry or skill; a person’s best work.", "Overused — reserve it, or it loses force. Precise alternatives often work better.", ["masterwork", "tour de force", "classic"], "“Classic” suggests lasting value. “Tour de force” highlights an impressive display of skill. “Masterpiece” is the very best — use it sparingly.", "The Sistine Chapel ceiling is a masterpiece of ambition as much as of skill.", "— Is it his masterpiece?\n— People say so, but I prefer his early work.", "What would you call a masterpiece — in any field?")
  ],
  culture: "renaissance",
  cultureNote: "When people say “a renaissance man (or woman)”, they mean someone with many talents, like Leonardo. You now know the history behind the phrase — and the debate about whether “rebirth” is fair to the centuries before.",
  sayBetter: {
    basic: "The Renaissance was a time with lots of good art.",
    levels: [
      ["Level 1", "The Renaissance was a period of great art in Europe.", "True, but tells us little."],
      ["Level 2", "The Renaissance was a cultural movement that started in Italy and revived interest in ancient Greece and Rome.", "Accurate and informative."],
      ["Level 3", "The Renaissance began in Florence, partly because rich families like the Medici paid artists — art needs money as much as genius.", "A cause + an idea."],
      ["Level 4", "What I find interesting about the Renaissance is that it was as much about money and technology as genius — bankers paying artists, the printing press spreading ideas. It makes me wonder what our equivalent is.", "Insight + connection to today + curiosity."]
    ],
    prompt: "Say something about the Renaissance at Level 4 — connect it to today."
  },
  exercise: {
    title: "Make the connection",
    instructions: "Explain each modern use of “renaissance”, then say whether it’s a good comparison.",
    items: [
      { q: "“Detroit is having a renaissance.”", a: "The city is reviving after decline — new investment and culture. Good comparison if it includes cultural life, not just property prices." },
      { q: "“She’s a real renaissance woman.”", a: "She has many talents across different fields, like Leonardo." },
      { q: "“We’re living through a renaissance of AI.”", a: "A burst of rapid development. Partly fair — new tools, money, patrons — but “rebirth” implies something old returning, which isn’t quite right." },
      { q: "“The Harlem Renaissance.”", a: "A flourishing of African American art, literature and music in 1920s New York — Langston Hughes, Zora Neale Hurston. A genuine cultural flowering." }
    ]
  },
  think: {
    q: "Who are the “Medici” of today — the people and companies funding culture? Does who pays shape what gets made?",
    angles: ["Tech billionaires, streaming platforms, governments, crowdfunding…", "Did the Medici shape Renaissance art’s subjects?", "Is an algorithm a kind of patron?"]
  },
  express: { prompt: "Write a 5-sentence explanation of the Renaissance for a curious teenager: what, where, when, why it happened, and why it still matters." },
  speak: {
    prompt: "Is there a “renaissance” happening in any field today? Make the case.", seconds: 90,
    structure: ["Name the field", "What is being revived or reinvented", "What makes it possible (money, technology, people)", "Your calibrated opinion"]
  },
  recall: [
    { q: "Day 8: What is the Judith Shakespeare thought experiment about?", a: "William’s equally gifted imaginary sister, who never gets the chance to develop her talent — conditions, not talent." },
    { q: "Day 8: More precise than “freedom” at work?", a: "autonomy" },
    { q: "Day 3: What does “I’m not entirely convinced” really mean?", a: "I disagree — politely." }
  ],
  reflect: "If you could live in any period of history for a month, which would you choose — and why?",
  deep: {
    title: "Look closely: Botticelli or Anguissola",
    body: "Find a high-resolution image of Sofonisba Anguissola’s “The Chess Game” (1555). Spend five minutes looking before reading anything about it.",
    prompt: "Describe what you see, what you notice about the relationships between the figures, and what it tells you about the painter."
  }
};

TAW.lessons[10] = {
  day: 10, title: "Confirmation bias", kicker: "Psychology · Thinking",
  cats: ["psychology", "thinking"], skills: ["thinking", "culture", "articulation"], difficulty: "Intermediate", minutes: 28,
  why: "Confirmation bias is one of the most referenced ideas in modern conversation — about politics, relationships, social media, investing. Understanding it helps you think better and makes you a sharper conversational partner.",
  learn: {
    body: [
      "<strong>Confirmation bias</strong> is our tendency to search for, notice, interpret and remember information in a way that confirms what we already believe.",
      "In 1960 the psychologist Peter Wason gave people a sequence — 2, 4, 6 — and told them it followed a rule. They could test other sequences to discover it. Most people guessed “even numbers going up by two” and tested sequences like 8, 10, 12 — which confirmed their guess. Few tested sequences that might prove them wrong. The real rule was simply “any three ascending numbers”.",
      "The lesson: we naturally look for evidence that we’re right, not evidence that we’re wrong. It shows up everywhere — in the news we choose, the friends we listen to, the reviews we read after buying something.",
      "Social media can amplify it: if algorithms show us more of what we engage with, our feeds can become “echo chambers”. (Researchers still debate how strong this effect is.)",
      "The antidote is not to have no opinions. It’s to ask, <strong>“What would change my mind?”</strong> — and to actually look for that evidence."
    ],
    phrases: [
      { en: "Isn’t that a bit of confirmation bias?", tone: "Light, challenging", note: "Use playfully — never as an insult." },
      { en: "To be fair, I might only be noticing the cases that fit.", tone: "Self-aware", note: "Applying the concept to yourself makes you more credible." },
      { en: "What would change your mind?", tone: "Curious, Socratic", note: "The most powerful question in any debate." },
      { en: "I’d want to see evidence on the other side.", tone: "Measured", note: "Shows intellectual honesty." }
    ],
    tip: "Use the concept on yourself first. Then on others."
  },
  vocab: [
    V("bias", "BY-us", "noun", "A tendency to favour one side or view, often unfairly or unconsciously.", "Not always moral — cognitive biases are systematic errors everyone makes.", ["prejudice", "partiality", "slant"], "“Prejudice” is a negative judgement about a group. “Partiality” means favouritism. “Bias” is broader — any systematic leaning.", "We all have biases; the question is whether we notice them.", "— The article seemed very one-sided.\n— Yes, the bias was obvious from the headline.", "Name a bias you suspect you have."),
    V("evidence", "EV-ih-dence", "noun (uncountable)", "Facts or information that show whether something is true.", "Uncountable: “a piece of evidence”, not “an evidence”.", ["proof", "data", "support"], "“Proof” means certainty. “Data” are raw measurements. “Evidence” supports a conclusion without necessarily proving it.", "There’s some evidence that reading fiction improves empathy, but it’s not conclusive.", "— Coffee is bad for you.\n— Is it? The evidence seems pretty mixed.", "Write a sentence with “a piece of evidence”."),
    V("dismiss", "dis-MISS", "verb", "To decide something is not important or worth considering.", "Often a criticism: you dismiss an idea too quickly.", ["reject", "disregard", "brush aside"], "“Reject” is a clear decision against. “Disregard” is ignoring. “Brush aside” is informal and suggests arrogance. “Dismiss” means treating as unworthy of attention.", "It’s easy to dismiss evidence that doesn’t fit our view.", "— His idea is ridiculous.\n— Don’t dismiss it so fast — what if he’s partly right?", "Write about a time you dismissed something too quickly."),
    V("selective", "suh-LEK-tiv", "adjective", "Choosing only certain things; not complete.", "“Selective memory” and “selective attention” are great phrases for bias.", ["partial", "choosy", "cherry-picked"], "“Choosy” is about personal taste. “Cherry-picked” means deliberately choosing only favourable evidence. “Selective” can be neutral or critical.", "He has a very selective memory — he only remembers his successes.", "— The report only mentions the good results.\n— Very selective. Where are the failures?", "Use “selective” to describe how people consume news."),
    V("open-minded", "oh-pen-MYN-did", "adjective", "Willing to consider new ideas and opinions.", "Positive — but genuine open-mindedness includes the ability to be convinced, not just to listen politely.", ["receptive", "tolerant", "unbiased"], "“Tolerant” means accepting others’ differences. “Receptive” means ready to receive ideas. “Open-minded” means willing to change your view.", "Being open-minded doesn’t mean having no opinions — it means holding them loosely.", "— Would you try living abroad?\n— I’m open-minded about it. It depends on the job.", "Describe what open-mindedness looks like in practice.")
  ],
  culture: "confirmation-bias",
  cultureNote: "Every time someone says “echo chamber”, “filter bubble” or “I only see what I want to see”, they’re talking about confirmation bias. Now you can name it precisely.",
  sayBetter: {
    basic: "People only believe what they want to believe.",
    levels: [
      ["Level 1", "People usually believe what they already think.", "Clearer, still generic."],
      ["Level 2", "People tend to look for information that confirms what they already believe.", "Accurate — this is the definition."],
      ["Level 3", "We all have confirmation bias — we notice evidence that supports us and ignore what doesn’t.", "Uses the term, includes yourself (“we”)."],
      ["Level 4", "I think confirmation bias is less about stupidity than comfort — it’s simply more pleasant to be right. The real test is whether you ever go looking for evidence that you’re wrong.", "A distinction (stupidity vs comfort) + a practical test."]
    ],
    prompt: "Make a point about confirmation bias at Level 4 — ideally about yourself."
  },
  exercise: {
    title: "Spot the bias",
    instructions: "Explain how confirmation bias might be at work, and what question would help.",
    items: [
      { q: "After buying a car, Ana only reads positive reviews of it.", a: "She wants to confirm her decision was right. Question: “What are the most common complaints about this car?”" },
      { q: "Paulo believes his colleague is lazy and notices every time she arrives late.", a: "He notices evidence that fits and ignores the days she stays late. Question: “When has she worked harder than me?”" },
      { q: "A manager hires people who “feel like a good fit”.", a: "She looks for signs that confirm a first impression — often similarity to herself. Question: “What evidence would make this candidate a bad fit?”" },
      { q: "You think a horoscope describes you perfectly.", a: "We remember the parts that fit (and they’re vague enough to fit anyone). Question: “Would it fit if I read a different sign?”" }
    ]
  },
  think: {
    q: "Name one belief you hold strongly. What evidence would genuinely change your mind? Have you ever looked for it?",
    angles: ["Be specific about the evidence.", "Is there any belief where no evidence would change your mind?", "Is that a problem, or a value?"]
  },
  express: { prompt: "Write a paragraph about a time you (or someone you know) fell for confirmation bias. What happened, and what would you do differently?" },
  speak: {
    prompt: "Describe a time you only looked for evidence that agreed with you. What happened?", seconds: 90,
    structure: ["The belief", "How you looked only for confirming evidence", "What eventually happened", "What you learned — use “in hindsight”"]
  },
  recall: [
    { q: "Day 9: Who were the Medici?", a: "A Florentine banking family who acted as patrons of Renaissance art." },
    { q: "Day 9: What innovation did Brunelleschi demonstrate?", a: "Linear perspective." },
    { q: "Day 5: Phrase for reflecting after the event?", a: "In hindsight… / Looking back…" }
  ],
  reflect: "Where in your life might you be seeing only what you want to see?",
  deep: {
    title: "Steelman exercise",
    body: "A “steelman” is the opposite of a straw man: the strongest version of an argument you disagree with. It is the most direct antidote to confirmation bias.",
    prompt: "Choose a view you disagree with. Write the strongest possible case for it — so well that someone who holds it would say “Yes, exactly.”"
  }
};

TAW.lessons[11] = {
  day: 11, title: "Success and fulfilment", kicker: "Philosophy · Vocabulary",
  cats: ["philosophy", "english"], skills: ["thinking", "english", "articulation"], difficulty: "Intermediate", minutes: 30,
  why: "This is one of the great conversational themes — and one of the great life questions. Having a precise distinction (success ≠ fulfilment) and a philosophical framework (eudaimonia) lets you discuss it with depth instead of clichés.",
  learn: {
    body: [
      "<strong>Success</strong> usually refers to achieving goals that others can see and measure: a title, money, recognition, results. <strong>Fulfilment</strong> is internal: the sense that your life is meaningful, that you’re using your capacities, that what you do matters to you.",
      "They can overlap — but they can also separate. Someone can be successful without feeling fulfilled (the executive who feels empty), or fulfilled without being conventionally successful (the teacher who loves her work).",
      "Aristotle (384–322 BCE) offered a framework that still shapes this conversation: <strong>eudaimonia</strong>, often translated as “happiness” but better rendered as “flourishing” or “living well”. For Aristotle it wasn’t a feeling but an activity — living according to virtue and fully realising your human capacities over a whole life.",
      "Modern psychology echoes this distinction: researchers separate <em>hedonic</em> wellbeing (pleasure, positive feelings) from <em>eudaimonic</em> wellbeing (meaning, purpose, growth)."
    ],
    phrases: [
      { en: "Someone can be successful without necessarily feeling fulfilled.", tone: "Nuanced", note: "The key sentence of the day — use it." },
      { en: "It depends on how you define success.", tone: "Analytical", note: "Moves the conversation to definitions — often where the real disagreement is." },
      { en: "By conventional standards…", tone: "Precise", note: "“By conventional standards she’s successful, but…”" },
      { en: "What matters more to me is…", tone: "Personal", note: "Gives your own value clearly." }
    ],
    tip: "Many disagreements are really about definitions. Define your terms."
  },
  vocab: [
    V("fulfilled", "ful-FILD", "adjective", "Satisfied because you are using your abilities and your life has meaning.", "Deeper than “happy” or “satisfied” — about meaning, not mood.", ["satisfied", "content", "happy"], "“Happy” is a feeling that comes and goes. “Content” is calm acceptance. “Satisfied” means a need has been met. “Fulfilled” means your potential and values are being realised.", "She earns less now, but she feels much more fulfilled.", "— Do you miss your old job?\n— The money, yes. But I never felt fulfilled there.", "What makes you feel fulfilled — not just happy?"),
    V("accomplished", "uh-KOM-plisht", "adjective", "Highly skilled; having achieved a lot.", "Can describe a person (an accomplished pianist) or a feeling (I felt accomplished).", ["skilled", "successful", "proficient"], "“Skilled” is about ability. “Successful” is about results. “Accomplished” combines both and sounds elegant.", "She’s an accomplished architect, but she’s happiest in her garden.", "— How was your day?\n— I finally finished the report. I feel weirdly accomplished.", "Describe someone accomplished you admire."),
    V("meaningful", "MEE-ning-ful", "adjective", "Important, serious, or worth doing; having a clear purpose.", "Overused in corporate language (“meaningful impact”). Use it about genuine things.", ["significant", "purposeful", "worthwhile"], "“Worthwhile” means worth the time or effort. “Purposeful” means having a clear aim. “Meaningful” means it matters on a deeper level.", "I want work that feels meaningful, not just busy.", "— Why do you volunteer?\n— It’s the most meaningful part of my week.", "What’s the most meaningful thing you did this month?"),
    V("hollow", "HOL-oh", "adjective", "Empty inside; without real value or meaning.", "Powerful metaphor: a hollow victory, hollow promises, a hollow success.", ["empty", "meaningless", "insincere"], "“Empty” is general. “Insincere” is about intentions. “Hollow” suggests something that looks solid from outside but is empty within.", "The promotion felt hollow — I had stopped caring about the work.", "— You must be thrilled with the award!\n— Honestly, it feels a bit hollow. The team did the work.", "Describe something that felt hollow — a victory, a purchase, a promise."),
    V("recognition", "rek-ug-NISH-un", "noun", "Public acknowledgement and appreciation of someone’s achievements.", "One of the main external measures of success — and a deep human need.", ["acknowledgement", "appreciation", "credit"], "“Credit” is recognition for a specific contribution. “Appreciation” is gratitude. “Recognition” is public acknowledgement of value.", "Many people want recognition more than they want money.", "— Why did she leave?\n— She did the work, he got the recognition.", "How important is recognition to you? Be honest.")
  ],
  culture: "eudaimonia",
  cultureNote: "Whenever someone says “success isn’t everything”, they’re repeating — loosely — an idea Aristotle developed 2,300 years ago. You can now say what he actually meant.",
  sayBetter: {
    basic: "Money doesn’t make you happy.",
    levels: [
      ["Level 1", "Money isn’t everything.", "A cliché."],
      ["Level 2", "Being successful doesn’t always make people happy.", "Better, still vague."],
      ["Level 3", "Someone can be successful without necessarily feeling fulfilled.", "A precise distinction."],
      ["Level 4", "I think success and fulfilment overlap less than we assume. Success is usually measured by other people; fulfilment is something only you can judge — which is why it’s possible to have one without the other.", "A distinction + an explanation of why they separate."]
    ],
    prompt: "Express your own view on success and fulfilment at Level 4."
  },
  exercise: {
    title: "Success or fulfilment?",
    instructions: "Decide whether each describes success, fulfilment, both, or neither — and explain in one sentence.",
    items: [
      { q: "A surgeon earning a high salary who loves her work.", a: "Both — external achievement and internal meaning." },
      { q: "A famous actor who says he feels like a fraud.", a: "Success without fulfilment — recognition without inner satisfaction." },
      { q: "A grandfather who spends his days teaching children to fish.", a: "Fulfilment — possibly invisible by conventional standards of success." },
      { q: "Someone who got the promotion they wanted, but feels nothing.", a: "Success that feels hollow — a goal achieved without meaning." }
    ]
  },
  think: {
    q: "Can someone be successful without being fulfilled — and fulfilled without being successful? Which would you choose if you couldn’t have both?",
    angles: ["Whose definition of success are you using?", "Is fulfilment possible without any recognition?", "What would Aristotle say?"]
  },
  express: { prompt: "Write your own definitions of success and fulfilment (one sentence each), then a paragraph on how they relate in your life." },
  speak: {
    prompt: "Can someone be successful without being fulfilled? Use an example.", seconds: 90,
    structure: ["Define both terms", "Your answer — calibrated", "An example (real or imagined)", "Connect to Aristotle’s eudaimonia", "Conclusion"]
  },
  recall: [
    { q: "Day 10: Define confirmation bias.", a: "The tendency to seek, notice and remember information that confirms what we already believe." },
    { q: "Day 10: The most powerful question against bias?", a: "What would change my mind?" },
    { q: "Day 8: Woolf’s novel set in a single day in London?", a: "Mrs Dalloway (1925)" }
  ],
  reflect: "If no one could ever see your achievements, what would you still want to do with your life?",
  deep: {
    title: "Read: Aristotle, Nicomachean Ethics, Book I",
    body: "Book I introduces eudaimonia. It’s dense; try a modern translation and read sections 7–8, or read a good summary first (the Stanford Encyclopedia of Philosophy entry on Aristotle’s Ethics is reliable).",
    prompt: "Aristotle says eudaimonia is judged over a whole life. Write about what you would want people to say your life was “for”."
  }
};

TAW.lessons[12] = {
  day: 12, title: "Explaining a complex idea simply", kicker: "Communication · Clarity",
  cats: ["communication", "science"], skills: ["articulation", "thinking", "english"], difficulty: "Intermediate", minutes: 30,
  why: "The ability to explain something complex in simple words is the clearest sign of understanding — and one of the most valuable professional skills there is. It’s also how knowledge becomes conversation.",
  learn: {
    body: [
      "The physicist Richard Feynman (1918–1988) was famous for explaining difficult physics in plain language. A popular method named after him — the “Feynman technique” — distils his approach into four steps (the name was coined later by others, but the spirit is his):",
      "<strong>1. Choose the concept.</strong> <strong>2. Explain it as if to a 12-year-old</strong> — no jargon. <strong>3. Notice where you get stuck</strong> — that’s where your understanding has gaps. <strong>4. Go back, learn, and simplify again</strong>, ideally with an analogy.",
      "Three tools make explanations work: an <strong>analogy</strong> (“Your immune system is like a security team…”), a <strong>concrete example</strong> (“Imagine you buy a new phone…”), and a <strong>one-sentence summary</strong> at the start or end (“In short, …”).",
      "Simple is not the same as simplistic. Simple keeps the essential truth; simplistic distorts it. A good explainer says “roughly speaking” or “this is a simplification, but…” when needed."
    ],
    phrases: [
      { en: "Essentially, …", tone: "Clarifying", note: "Introduces the core idea." },
      { en: "Think of it like…", tone: "Explanatory", note: "Introduces an analogy." },
      { en: "In other words, …", tone: "Clarifying", note: "Rephrases more simply." },
      { en: "Let me put it another way.", tone: "Patient", note: "When you see confusion." },
      { en: "It’s a simplification, but…", tone: "Honest", note: "Protects accuracy while staying simple." },
      { en: "The key thing to understand is…", tone: "Focused", note: "Directs attention to what matters." }
    ],
    tip: "If you can’t explain it simply, find where you’re stuck. That’s where learning happens."
  },
  vocab: [
    V("essentially", "ih-SEN-shuh-lee", "adverb", "Used to emphasise the most important or basic aspect of something.", "Signals: here is the core idea. Don’t overuse it as a filler.", ["basically", "fundamentally", "in essence"], "“Basically” is informal and often a filler. “Fundamentally” is more analytical. “Essentially” is precise and slightly elevated.", "Essentially, inflation means your money buys less than it used to.", "— So what is blockchain?\n— Essentially, a shared record that nobody can secretly change.", "Explain something from your work starting with “Essentially, …”"),
    V("analogy", "uh-NAL-uh-jee", "noun", "A comparison between two things to explain or clarify.", "One of the most powerful tools in explanation — and in argument.", ["comparison", "parallel", "metaphor"], "A “metaphor” says one thing is another (“time is money”). A “comparison” just compares. An “analogy” uses a familiar thing to explain how an unfamiliar one works.", "The best teachers explain new ideas through analogy.", "— How does a vaccine work?\n— Here’s an analogy: it’s like showing security guards a photo of a thief.", "Create an analogy for something you know well."),
    V("break down", "brayk DOWN", "phrasal verb", "To divide something complex into smaller, simpler parts.", "Essential for explanation and problem-solving.", ["simplify", "analyse", "unpack"], "“Simplify” makes it easier. “Analyse” examines in detail. “Unpack” is modern and conversational — to explore the meaning of something. “Break down” means divide into parts.", "Let me break it down into three steps.", "— The tax system is so confusing.\n— Let me break it down — it’s really just three questions.", "Break down a process you know into three steps."),
    V("jargon", "JAR-gun", "noun", "Special words used by a profession that are hard for others to understand.", "Usually negative — it excludes people.", ["technical language", "terminology", "buzzwords"], "“Terminology” is neutral and necessary. “Buzzwords” are fashionable, often empty. “Jargon” is technical language used where plain words would do.", "Good explanations avoid jargon — or explain it immediately.", "— We need to leverage our synergies.\n— Can we try that without the jargon?", "Name a piece of jargon from your field and translate it."),
    V("in a nutshell", "in uh NUT-shel", "phrase", "In a few words; very briefly.", "Friendly and informal — great for summaries.", ["in short", "briefly", "to sum up"], "“In short” is neutral. “To sum up” is formal and used at the end. “In a nutshell” is warm and conversational.", "In a nutshell, the plan is to do less, but better.", "— What’s the book about?\n— In a nutshell? A family that refuses to talk about its secrets.", "Summarise your job in a nutshell.")
  ],
  culture: "feynman",
  cultureNote: "Feynman was also known for his curiosity and playfulness — he picked locks, played bongo drums and painted. His explanations worked because he was genuinely curious about how things work.",
  sayBetter: {
    basic: "Inflation is when the economy has problems and prices change.",
    levels: [
      ["Level 1", "Inflation is when prices go up.", "Simple — but incomplete."],
      ["Level 2", "Inflation is when prices across the economy rise over time, so money buys less.", "Accurate and simple."],
      ["Level 3", "Essentially, inflation means your money loses value. The same €10 buys less bread this year than last.", "Core idea + concrete example."],
      ["Level 4", "Think of money as a measuring stick that slowly shrinks. Inflation is the rate at which it shrinks — which is why savings that earn nothing quietly lose value.", "Analogy + definition + a consequence people care about."]
    ],
    prompt: "Choose a concept you understand well and explain it at Level 4."
  },
  exercise: {
    title: "Explain it to a 12-year-old",
    instructions: "Explain each concept in two simple sentences, using an analogy or example.",
    items: [
      { q: "Confirmation bias", a: "It’s when your brain only notices things that prove you’re right. Like if you think your sister is annoying, you notice every annoying thing she does and forget the nice things." },
      { q: "Interest rates", a: "It’s the price of borrowing money. If you borrow €100 and pay back €105, the €5 is the interest — like rent for money." },
      { q: "The Renaissance", a: "It was a time in Italy, about 600 years ago, when people got really excited about old Greek and Roman ideas again. Rich families paid artists, and art suddenly started to look real and three-dimensional." },
      { q: "Supply and demand", a: "When lots of people want something and there isn’t much of it, the price goes up. Think of concert tickets for a famous singer." }
    ]
  },
  think: {
    q: "Why do experts so often explain things badly? Is it a lack of skill, a lack of empathy — or something else?",
    angles: ["The “curse of knowledge”: once you know something, it’s hard to imagine not knowing it.", "Does jargon protect status?", "Who is the best explainer you know — and what do they do?"]
  },
  express: { prompt: "Choose something from your job or a hobby. Explain it in 5 sentences to a 12-year-old: one-sentence summary, an analogy, an example, and what’s most important to understand." },
  speak: {
    prompt: "Explain confirmation bias to a 12-year-old in 60 seconds.", seconds: 60,
    structure: ["One-sentence summary", "An analogy or example from a child’s life", "Why it matters", "“In a nutshell, …”"]
  },
  recall: [
    { q: "Day 11: What does eudaimonia mean?", a: "Flourishing / living well — Aristotle’s idea of a good life as an activity, not a feeling." },
    { q: "Day 11: Difference between success and fulfilment?", a: "Success is measured externally; fulfilment is an internal sense of meaning." },
    { q: "Day 10: Who designed the 2-4-6 task?", a: "Peter Wason, 1960." }
  ],
  reflect: "What do you understand well enough to explain simply? What do you only think you understand?",
  deep: {
    title: "Watch: Feynman’s “Fun to Imagine” (BBC, 1983)",
    body: "Clips are freely available online. Notice how he uses everyday objects (a rubber band, a cup of tea) to explain physics.",
    prompt: "Pick an everyday object and use it to explain an idea from this week."
  }
};

TAW.lessons[13] = {
  day: 13, title: "Beauty and culture", kicker: "Art · Psychology · Society",
  cats: ["art", "psychology", "society"], skills: ["culture", "thinking", "articulation"], difficulty: "Intermediate", minutes: 32,
  why: "Conversations about beauty — in art, faces, fashion, cities — are everywhere, and they’re often shallow. Today you get the ideas and vocabulary to talk about beauty as a cultural, psychological and historical question.",
  learn: {
    body: [
      "Is beauty universal or cultural? The honest answer is: <strong>both</strong>, and the interesting part is where the line falls.",
      "Some preferences appear widely across cultures: psychologists have found that people tend to rate more symmetrical and more “average” faces as attractive, and that we often prefer landscapes with water, open views and trees. Evolutionary explanations are popular, but contested.",
      "Much else changes dramatically with time and place. The ideal body has shifted again and again — compare the full figures in Rubens’s 17th-century paintings with the very thin ideal of 1990s fashion. Botticelli’s <em>The Birth of Venus</em> (c. 1484–86) shows a Renaissance ideal of beauty borrowed from classical sculpture.",
      "Other traditions value different qualities altogether. The Japanese aesthetic of <strong>wabi-sabi</strong> finds beauty in imperfection, impermanence and simplicity — a cracked bowl repaired with gold (<em>kintsugi</em>) can be more beautiful than a perfect one.",
      "Beauty standards are also about power: who gets to define them, who profits from them (advertising, cosmetics, social media filters), and who is excluded."
    ],
    phrases: [
      { en: "It’s partly universal and partly cultural.", tone: "Nuanced", note: "A balanced starting position." },
      { en: "Beauty standards are historically specific.", tone: "Analytical", note: "Means: they belong to a particular time." },
      { en: "Who gets to decide what’s beautiful?", tone: "Critical", note: "Moves the question to power." },
      { en: "There’s a kind of beauty in…", tone: "Reflective", note: "Lets you find beauty in unexpected things." }
    ],
    tip: "Good answer. Now add nuance: where does the universal end and the cultural begin?"
  },
  vocab: [
    V("aesthetic", "es-THET-ik (UK: ees-THET-ik)", "noun / adjective", "A set of principles about beauty or style; relating to beauty.", "Now overused online (“the aesthetic”). Use precisely: “a minimalist aesthetic”.", ["style", "look", "taste"], "“Style” is a way of doing things. “Taste” is personal judgement. An “aesthetic” is a coherent set of visual or artistic principles.", "Her flat has a very calm, Scandinavian aesthetic.", "— Why do you like that café?\n— Partly the coffee, partly the aesthetic. It feels like a library.", "Describe your personal aesthetic in one sentence."),
    V("standard", "STAN-durd", "noun", "A level of quality or a model that people are expected to follow.", "“Beauty standards” implies social pressure — a norm, not a fact.", ["norm", "ideal", "benchmark"], "A “norm” is what is typical or expected. An “ideal” is a perfect model. A “standard” is the measure people are judged against.", "Social media has made beauty standards more uniform and more extreme.", "— Do you feel pressure to look a certain way?\n— Less than before. I’ve stopped following accounts that set impossible standards.", "Describe a standard you were judged against growing up."),
    V("symmetry", "SIM-uh-tree", "noun", "The quality of having matching parts on each side.", "Used in art, architecture, biology and psychology.", ["balance", "proportion", "harmony"], "“Balance” is about visual weight. “Proportion” is about relative sizes. “Symmetry” means mirror-like correspondence.", "Classical architecture loves symmetry; Gothic architecture loves height.", "— Why is this building so calming?\n— The symmetry, I think. Everything is balanced.", "Describe something whose symmetry — or asymmetry — you find beautiful."),
    V("subjective", "sub-JEK-tiv", "adjective", "Based on personal feelings or opinions rather than facts.", "Saying “it’s subjective” can end a conversation. Better: “It’s partly subjective, but…”", ["personal", "relative", "biased"], "“Personal” is neutral. “Relative” means it depends on context. “Subjective” means it exists in the mind of the perceiver. Opposite: “objective”.", "Taste is subjective, but craft is something you can judge.", "— That painting is ugly.\n— That’s subjective — but I agree the colours clash.", "Name something people say is subjective — and argue it’s partly objective."),
    V("ideal", "eye-DEE-ul", "noun / adjective", "A standard of perfection; the best possible.", "In culture, “the ideal” is always someone’s ideal — historically specific.", ["model", "paragon", "standard"], "A “model” is an example to copy. A “paragon” is a perfect example of a quality (formal). An “ideal” is an imagined perfection.", "Every era has its ideal of beauty, and every ideal excludes someone.", "— What’s your ideal holiday?\n— Somewhere with books and no Wi-Fi.", "Describe the beauty ideal of your grandmother’s generation.")
  ],
  culture: "birth-of-venus",
  cultureNote: "Botticelli’s Venus is beautiful by the standards of 15th-century Florence — which borrowed them from ancient Greece. Ask “beautiful according to whom?” and art history becomes a conversation about power, culture and change.",
  sayBetter: {
    basic: "Beauty is different for everyone.",
    levels: [
      ["Level 1", "Beauty is subjective.", "A conversation-ender."],
      ["Level 2", "Beauty is partly subjective, and it changes between cultures.", "Some nuance."],
      ["Level 3", "Some preferences seem universal, like symmetry, but most beauty standards are cultural and change over time.", "A distinction with an example."],
      ["Level 4", "I’d say beauty is partly universal and partly cultural — and the cultural part is where it gets interesting, because standards are rarely neutral. Someone usually benefits from them.", "Nuance + a move to power + an implied question."]
    ],
    prompt: "Give your view on beauty at Level 4."
  },
  exercise: {
    title: "Universal or cultural?",
    instructions: "Decide whether each preference is likely more universal or more cultural, and explain why.",
    items: [
      { q: "Preferring tanned skin.", a: "Cultural — in 19th-century Europe pale skin signalled wealth; after the 1920s, a tan did. In many places today, lighter skin is still promoted." },
      { q: "Finding a calm lake view beautiful.", a: "Possibly more universal — many studies find preferences for water and open views, though culture shapes it too." },
      { q: "Valuing a cracked, repaired bowl.", a: "Cultural — wabi-sabi and kintsugi reflect specific Japanese aesthetic values." },
      { q: "Liking symmetrical faces.", a: "Widely found across cultures in studies, though the effect is modest and debated." }
    ]
  },
  think: {
    q: "Is beauty universal or cultural? And who benefits from the beauty standards of our time?",
    angles: ["Think of filters and cosmetic surgery trends.", "Have your own standards changed since childhood?", "Can you find beauty in something you once found ugly?"]
  },
  express: { prompt: "Describe something you find beautiful that most people wouldn’t. Explain why, using at least two of today’s words." },
  speak: {
    prompt: "Is beauty universal or cultural? Give a balanced answer.", seconds: 120,
    structure: ["Your position: “It’s partly…”", "Evidence for the universal side", "Evidence for the cultural side (an example from art or history)", "The power question", "Conclusion"]
  },
  recall: [
    { q: "Day 12: The four steps of the Feynman technique?", a: "Choose a concept; explain it simply; find where you get stuck; go back and simplify, with an analogy." },
    { q: "Day 12: Difference between simple and simplistic?", a: "Simple keeps the essential truth; simplistic distorts it." },
    { q: "Day 9: What does “renaissance” mean literally?", a: "Rebirth." }
  ],
  reflect: "When did you first become aware of a beauty standard? How has your relationship with it changed?",
  deep: {
    title: "Read: John Berger, Ways of Seeing (1972), Essay 3",
    body: "Berger’s famous line: “men act and women appear”. The essay on the nude in European painting is short and provocative. The BBC series is also available online.",
    prompt: "Do you agree with Berger’s claim today? Write a balanced response."
  }
};

TAW.lessons[14] = {
  day: 14, type: "review", title: "Weekly review & speaking challenge", kicker: "Week 2 · Review",
  cats: ["review"], skills: ["english", "culture", "thinking", "articulation"], difficulty: "Intermediate", minutes: 35,
  why: "Two weeks in. This week you met Woolf, the Renaissance, confirmation bias, eudaimonia, Feynman and the culture of beauty. Today you weave them together — because the goal isn’t to know them separately, but to think with them.",
  learn: {
    body: [
      "Notice how this week’s ideas connect: Woolf’s “conditions, not talent” echoes the Medici’s patronage — art needs money. Confirmation bias affects how we judge beauty and success. Aristotle’s eudaimonia gives you a way to question both.",
      "Connections like these are what make someone sound well read: not knowing many facts, but moving between them."
    ],
    phrases: [
      { en: "It’s a question of conditions, not talent.", tone: "Day 8", note: "Woolf." },
      { en: "It was less a rebirth than a rediscovery.", tone: "Day 9", note: "Renaissance." },
      { en: "What would change your mind?", tone: "Day 10", note: "Bias." },
      { en: "Someone can be successful without necessarily feeling fulfilled.", tone: "Day 11", note: "Eudaimonia." },
      { en: "Think of it like…", tone: "Day 12", note: "Analogy." },
      { en: "It’s partly universal and partly cultural.", tone: "Day 13", note: "Beauty." }
    ],
    tip: "Being well read is not knowing facts. It is moving between them."
  },
  vocab: [],
  recall: [
    { q: "What did Woolf mean by “a room of one’s own”?", a: "Money, privacy and time — the material conditions needed to create." },
    { q: "Name a woman painter of the Renaissance.", a: "Sofonisba Anguissola." },
    { q: "Describe the 2-4-6 task in one sentence.", a: "People tested only sequences that confirmed their guess, instead of trying to disprove it." },
    { q: "Hedonic vs eudaimonic wellbeing?", a: "Hedonic = pleasure; eudaimonic = meaning, purpose, growth." },
    { q: "What is “jargon”?", a: "Specialist language used where plain words would do." },
    { q: "What is wabi-sabi?", a: "A Japanese aesthetic finding beauty in imperfection, impermanence and simplicity." },
    { q: "Who painted The Birth of Venus?", a: "Sandro Botticelli, c. 1484–86." },
    { q: "Week 1: An elegant replacement for “It was interesting”?", a: "What struck me was…" }
  ],
  speak: {
    prompt: "Two-week challenge: “What does a successful life mean to you?” Speak for 2 minutes. Use at least five words from Weeks 1–2 and one cultural reference.", seconds: 120,
    structure: ["Define success — and distinguish it from fulfilment", "A cultural reference (Aristotle, Woolf…)", "A personal example or short story", "A counterpoint: “That said, …”", "Conclusion"]
  },
  weekly: true,
  reflect: "Which idea from these two weeks has stayed with you the most — and why?"
};
})();
