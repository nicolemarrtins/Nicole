/* The 180-day curriculum map.
   Days 1–14 are fully written in lessons-a/b.js. Every 7th day is a weekly review,
   Days 30/60/90/120/150/180 are milestones; both are generated from this map. */
window.TAW = window.TAW || {};

TAW.months = [
  { n: 1, title: "Find Your Voice", theme: "English foundations & self-expression", shift: "“I know English” → “I can express myself.”" },
  { n: 2, title: "Become Interesting", theme: "Conversation, curiosity & social intelligence", shift: "“I can answer” → “I can hold a conversation.”" },
  { n: 3, title: "Become Well Read", theme: "History, art & literature", shift: "“I’ve heard of it” → “I can say why it matters.”" },
  { n: 4, title: "Learn to Think", theme: "Philosophy, psychology, economics & society", shift: "“I have opinions” → “I have frameworks.”" },
  { n: 5, title: "Master Articulation", theme: "Rhetoric, argument & sophisticated communication", shift: "“I can explain” → “I can persuade, with nuance.”" },
  { n: 6, title: "Become Her", theme: "Integration & real-world simulations", shift: "“I’ve practised” → “I can do it anywhere.”" }
];

TAW.categoryLabels = {
  english: "English", conversation: "Conversation", communication: "Communication", culture: "Culture",
  history: "History", art: "Art", literature: "Literature", philosophy: "Philosophy", psychology: "Psychology",
  economics: "Economics", society: "Society", science: "Science", rhetoric: "Rhetoric", thinking: "Thinking",
  cinema: "Cinema", music: "Music", architecture: "Architecture", fashion: "Fashion", simulation: "Simulation",
  review: "Review", milestone: "Milestone"
};

/* which progress strands each category feeds */
TAW.categorySkills = {
  english: ["english", "articulation"], conversation: ["conversation", "english"], communication: ["articulation", "conversation"],
  culture: ["culture"], history: ["culture", "thinking"], art: ["culture"], literature: ["culture", "articulation"],
  philosophy: ["thinking", "culture"], psychology: ["thinking", "culture"], economics: ["thinking", "culture"],
  society: ["thinking", "culture"], science: ["thinking", "culture"], rhetoric: ["articulation", "thinking"],
  thinking: ["thinking"], cinema: ["culture", "conversation"], music: ["culture", "conversation"],
  architecture: ["culture"], fashion: ["culture"], simulation: ["conversation", "articulation", "english"],
  review: ["english", "conversation"], milestone: ["articulation"]
};

TAW.map = {};
(function () {
  const D = { F: "Foundation", I: "Intermediate", A: "Advanced" };
  function d(day, title, cat, diff, focus, words, ref, think, speak, seconds, phrases) {
    TAW.map[day] = {
      day, title, cat, difficulty: D[diff], focus,
      words: words ? words.split("|").map(function (w) { const i = w.indexOf("="); return { word: w.slice(0, i).trim(), definition: w.slice(i + 1).trim() }; }) : [],
      ref, think, speak, seconds: seconds || 90,
      phrases: phrases ? phrases.split("|") : []
    };
  }
  function sim(day, title, scenario, speak, seconds, prep, ref) {
    d(day, title, "simulation", "A", scenario, "", ref || "", prep, speak, seconds);
    TAW.map[day].type = "sim";
  }

  /* ───────── MONTH 1 — FIND YOUR VOICE ───────── */
  const w1 = [
    [1, "Who am I when I speak?", "english"], [2, "The language of opinions", "english"], [3, "How to disagree", "conversation"],
    [4, "Precision", "english"], [5, "Storytelling", "communication"], [6, "Curiosity", "psychology"],
    [8, "Virginia Woolf", "literature"], [9, "The Renaissance", "history"], [10, "Confirmation bias", "psychology"],
    [11, "Success and fulfilment", "philosophy"], [12, "Explaining a complex idea simply", "communication"], [13, "Beauty and culture", "art"]
  ];
  w1.forEach(function (x) { TAW.map[x[0]] = { day: x[0], title: x[1], cat: x[2], written: true }; });

  d(15, "Talking about work without sounding like a CV", "english", "F",
    "Describe what you actually do, what it demands and what you contribute — instead of reciting a job title. Move from role → problem → contribution → what you enjoy.",
    "responsibility=a duty you are trusted with|contribute=to give something that helps a result|demanding=needing a lot of effort or skill|rewarding=giving satisfaction, even if not money|day-to-day=ordinary, routine",
    "Studs Terkel, Working (1974) — an oral history in which 130+ Americans describe their jobs; a classic on the dignity and frustration of work.",
    "Is your job part of your identity — or just something you do? Should it be?",
    "Describe your work to someone outside your field — what you do, what’s hard about it, and what you’d miss if you left.", 90,
    "What I actually spend my day doing is…|The part people don’t see is…|What I find most rewarding is…");
  d(16, "Describing emotions precisely", "english", "F",
    "“Good”, “bad” and “stressed” hide a world of feeling. Psychologists call the ability to name emotions precisely “emotional granularity” — and link it to better emotion regulation.",
    "apprehensive=slightly worried about something in the future|exasperated=very annoyed after repeated frustration|wistful=gently sad when remembering something|content=quietly satisfied|overwhelmed=having too much to deal with emotionally",
    "barrett",
    "Do you think having more words for feelings changes what you feel — or only how you describe it?",
    "Describe how you felt during an important moment in your life — use at least three precise emotion words.", 90,
    "I felt a mixture of… and…|It wasn’t so much X as Y.|If I’m honest, I was…");
  d(17, "Explaining a decision", "english", "F",
    "A decision explained well has a rationale, a trade-off and an outcome. Learn to say what you weighed, what you gave up and why — without over-justifying.",
    "weigh up=to consider the advantages and disadvantages|trade-off=accepting a loss in one thing to gain another|rationale=the reasons behind a decision|ultimately=in the end, after considering everything",
    "Robert Frost, “The Road Not Taken” (1916) — often read as praise for nonconformity, but the poem says both roads were “really about the same”; the speaker will later tell the story as if it made “all the difference”.",
    "Do we make decisions for reasons — or invent the reasons afterwards?",
    "Explain an important decision you made: what you weighed up, the trade-off, and whether you’d make it again.", 90,
    "I weighed up… against…|The trade-off was…|Ultimately, what tipped the balance was…");
  d(18, "Talking about ambition", "english", "F",
    "Ambition can sound arrogant or vague. Learn to describe what you aspire to with honesty and specificity — including ambivalence.",
    "aspire=to hope to achieve something important|drive=strong determination to achieve|ambivalent=having mixed feelings|long-term=over a long period of time",
    "angelou",
    "Is ambition a virtue, a vice, or neither? Does it mean something different for women?",
    "What do you aspire to in the next five years — and what are you ambivalent about?", 90,
    "What I’d really like to do is…|I’m ambitious about… but not about…|Part of me wants…, and part of me…");
  d(19, "Describing places", "english", "F",
    "Places come alive through sensory detail and atmosphere, not adjectives like “nice”. Use sound, light, texture, rhythm.",
    "bustling=full of busy activity|understated=elegant in a quiet way|atmospheric=creating a strong mood|run-down=in poor condition|tucked away=hidden in a quiet place",
    "calvino",
    "Can a city have a personality? What would yours be?",
    "Describe the city or neighbourhood where you grew up so that I can see, hear and smell it.", 90,
    "What strikes you first is…|It has a slightly… atmosphere.|Tucked away behind… there’s…");
  d(20, "Pronunciation: stress, rhythm and pause", "english", "F",
    "Clarity in English depends less on individual sounds than on word stress, sentence stress and pausing in “thought groups”. The goal is intelligibility, not a native accent.",
    "intonation=the rise and fall of the voice|emphasis=special importance given to a word|pause=a short stop in speaking|intelligible=able to be understood",
    "English as a lingua franca — most English conversations worldwide now take place between non-native speakers; researchers such as Jennifer Jenkins argue intelligibility, not native-likeness, should be the goal.",
    "Do you feel judged for your accent? Do you judge others for theirs?",
    "Read a paragraph you wrote this week aloud, slowly, marking the pauses. Then say it again without reading.", 60,
    "What I mean is… (pause)…|The key word here is…");
  d(22, "Talking about relationships", "english", "F",
    "Friendship, love and family need a vocabulary of closeness, distance and change. Learn to talk about relationships with warmth and discretion.",
    "rapport=a friendly relationship where people understand each other|drift apart=to become less close gradually|mutual=felt or done by both sides|devoted=very loving and loyal",
    "Aristotle on friendship — in the Nicomachean Ethics he distinguishes friendships of utility, of pleasure, and of virtue (the rarest and most lasting).",
    "Which of your friendships are of utility, pleasure, or virtue — in Aristotle’s terms? Is that a fair way to see them?",
    "Describe a friendship that has changed over time — what brought you together and what changed.", 90,
    "We clicked straight away.|We’ve drifted apart a little.|There’s a mutual respect…");
  d(23, "Past experiences: narrative tenses", "english", "F",
    "Control the past: past simple for events, continuous for background, perfect for what came before, and “used to / would” for habits.",
    "vivid=producing clear, strong images in the mind|recall=to remember deliberately|used to=describes past habits or states no longer true|vaguely=not clearly",
    "proust",
    "Are memories records of the past — or stories we keep rewriting?",
    "Tell me about a childhood memory using “used to”, “would”, and the past perfect at least once.", 90,
    "I used to…|By the time I…, I had already…|I vaguely remember…");
  d(24, "Hypotheticals: “If I had…”", "english", "F",
    "Conditionals let you imagine, regret and speculate. Master the second and third conditionals and mixed forms.",
    "regret=a feeling of sadness about something you did or didn’t do|plausible=seeming reasonable or probable|conceivably=possibly|alternative=another possibility",
    "Counterfactual thinking — psychologists find that imagining “what might have been” shapes regret and learning; famously, Olympic bronze medallists often appear happier than silver medallists (Medvec, Madey & Gilovich, 1995).",
    "Is it useful to think about the roads not taken — or only painful?",
    "If you had made one different choice ten years ago, how might your life be different now?", 90,
    "If I had…, I would probably…|Conceivably, I could have…|I don’t regret it, but I wonder…");
  d(25, "Preferences, with nuance", "english", "F",
    "Move beyond “I like / I don’t like”. Express tendencies, degrees and conditions — and wonder where your tastes come from.",
    "inclined=tending to behave or think in a certain way|appeal=the quality of being attractive or interesting|lean towards=to prefer slightly|acquired taste=something you learn to like over time",
    "bourdieu",
    "Are your tastes in music, food and clothes really yours — or a sign of where you come from?",
    "Describe your taste in one area (music, food, design) — and where you think it came from.", 90,
    "I tend to prefer…|What appeals to me is…|It’s an acquired taste.");
  d(26, "Sentence variety", "english", "I",
    "Short sentences hit. Longer ones, which carry clauses and qualifications, explain. Learn to combine sentences with relative clauses, participles and contrast connectors.",
    "whereas=used to compare two contrasting facts|despite=without being affected by|which=introduces extra information about something|having done=a participle showing one action came before another",
    "didion",
    "Does the way someone writes reveal how they think?",
    "Describe your week in six sentences: two short, two long, and two that start with something other than “I”.", 90,
    "Having…, I…|Despite…, …|…, which meant that…");
  d(27, "Small talk that isn’t small", "conversation", "F",
    "Small talk builds trust. Learn to start with the ordinary and move — gently — to the interesting.",
    "genuinely=truly, sincerely|relate to=to understand and feel sympathy|break the ice=to make people feel relaxed|bond over=to become closer through a shared interest",
    "Dale Carnegie, How to Win Friends and Influence People (1936) — one of the best-selling self-help books ever; its core advice is to be genuinely interested in other people.",
    "Is small talk superficial — or a necessary social ritual?",
    "Start a conversation with a stranger at a party about something you can both see, and move it to something interesting in three steps.", 60,
    "I couldn’t help noticing…|How do you know the host?|That’s fascinating — how did you…?");
  d(29, "Your story in three minutes", "communication", "I",
    "Tell the story of who you are — not your CV — with an arc, two or three formative moments and a clear sense of what you’re moving towards.",
    "formative=having a strong influence on development|pivotal=extremely important to the outcome|shaped=influenced the development of|to this day=still now",
    "adichie",
    "What is the “single story” people might tell about you? What does it leave out?",
    "Tell me the story of your life so far in three minutes — two formative moments and where you’re heading.", 180,
    "One of the most formative experiences was…|That shaped the way I…|To this day, I…");

  /* ───────── MONTH 2 — BECOME INTERESTING ───────── */
  d(31, "The art of asking questions", "conversation", "F",
    "Open questions invite stories; closed questions collect facts. Learn the follow-up, the “why” without aggression, and the question that shows you listened.",
    "probe=to ask questions to discover more|elaborate=to add more detail|underlying=real but not immediately obvious|intriguing=very interesting because unusual",
    "Terry Gross — host of NPR’s Fresh Air since 1975, renowned for questions that are curious, prepared and unafraid of silence.",
    "What’s the best question anyone has ever asked you?",
    "Interview me for 90 seconds about my job — use at least two follow-up questions.", 90,
    "What drew you to…?|Could you say more about…?|What’s the part that surprised you?");
  d(32, "Active listening", "conversation", "F",
    "Listening is visible. Paraphrase, reflect feelings, and ask before advising.",
    "paraphrase=to express the same meaning in different words|acknowledge=to accept or show you have noticed|attentive=paying close attention|validate=to recognise that someone’s feelings are reasonable",
    "rogers",
    "Why is it so hard to listen without preparing your answer?",
    "A friend tells you they are thinking of quitting their job. Respond for 60 seconds using only listening techniques — no advice.", 60,
    "So what you’re saying is…|It sounds like you felt…|What would you like to happen?");
  d(33, "Keeping a conversation going", "conversation", "F",
    "Every answer contains threads you can pick up. Offer threads in your own answers, too.",
    "segue=a smooth transition from one topic to another|tangent=a sudden change to a slightly related topic|pick up on=to notice and respond to|thread=a line of conversation",
    "Conversational threading — the idea that each statement contains several “threads” a listener can follow; good conversationalists offer and pick up threads.",
    "Who do you find easy to talk to — and what do they do?",
    "Answer “How was your weekend?” in a way that offers at least three threads someone could pick up.", 60,
    "Speaking of…|That reminds me…|Going back to what you said about…");
  d(34, "The art of disagreement", "conversation", "I",
    "Disagreement is a communication skill. Practise the tonal difference between “I see your point, but…”, “I’m not entirely convinced…” and “I’d look at it slightly differently…”.",
    "perspective=a particular way of seeing something|assumption=something accepted as true without proof|nuance=a subtle difference in meaning|compelling=very convincing|dismissive=showing that you think something is unworthy of attention",
    "mill",
    "Is it possible to disagree with someone while still respecting their position?",
    "Should people avoid discussing politics with friends? Speak for 90 seconds — and include one disagreement with your own position.", 90,
    "I see your point, but…|I’m not entirely convinced…|I would look at it slightly differently…|There is some truth to that, although…");
  d(36, "Agreeing without repeating", "conversation", "F",
    "“Me too” and “I agree” stop a conversation. Agree by adding: a reason, an example, an extension or a new angle.",
    "build on=to use something as a base for further development|reinforce=to strengthen|echo=to repeat or express the same idea|concur=to agree (formal)",
    "“Yes, and…” — the core principle of improvisational theatre: accept what your partner offers and add something new.",
    "Is agreeing too easily a form of politeness, or of laziness?",
    "Someone says “Cities are getting too expensive for young people.” Agree — but add three different things.", 60,
    "Absolutely — and on top of that…|That’s exactly it. I’d add…|Yes, and what strikes me is…");
  d(37, "Anecdotes", "communication", "F",
    "An anecdote is a short, true story with a point. Keep it under a minute, make the point land, and link it back to the conversation.",
    "anecdote=a short, interesting story about a real event|digress=to move away from the main subject|telling=revealing something important (adj.)|punchline=the final, funny or surprising part",
    "scheherazade",
    "Why do some people tell stories brilliantly and others don’t?",
    "Tell an anecdote that illustrates something about your country or family.", 60,
    "That reminds me of a time…|The funny thing is…|Which goes to show…");
  d(38, "Humour and lightness", "conversation", "I",
    "Humour in a second language is a sign of fluency. Start with understatement, self-deprecation and observation — the safest, most international forms.",
    "wry=dry and slightly mocking humour|self-deprecating=making fun of yourself modestly|understatement=presenting something as smaller than it is|deadpan=telling a joke with a serious face",
    "Nora Ephron (1941–2012) — essayist and screenwriter (When Harry Met Sally…, 1989) famous for turning embarrassing personal details into wry, warm essays: “Everything is copy.”",
    "Does humour translate across languages and cultures?",
    "Tell a short story about a small disaster in your life — with understatement.", 60,
    "It wasn’t my finest moment.|Let’s just say…|Things didn’t go entirely to plan.");
  d(39, "Observation: noticing details", "conversation", "I",
    "Interesting people notice. Practise describing what most people walk past — and drawing an idea from it.",
    "striking=very noticeable or unusual|peculiar=strange, unusual|telling=revealing something significant|notice=to become aware of",
    "jacobs",
    "What does your street tell you about the people who live there?",
    "Describe something you noticed today that most people wouldn’t have — and what it might mean.", 60,
    "What struck me was…|It’s telling that…|I couldn’t help noticing…");
  d(40, "Interrupting and changing the subject", "conversation", "I",
    "Interrupting politely and steering the conversation are high-level social skills. Learn the phrases and the timing.",
    "interject=to say something that interrupts|steer=to guide in a direction|briefly=for a short time|on a different note=used to change the subject",
    "Deborah Tannen — linguist whose research on “conversational style” shows that some groups treat overlapping speech as enthusiasm, others as rudeness.",
    "Is interrupting always rude? When is it a sign of engagement?",
    "Practise: interrupt politely, add a point, then steer the conversation to a new topic — in 60 seconds.", 60,
    "Sorry to jump in, but…|Can I just add something?|On a slightly different note…");
  d(41, "Giving examples", "communication", "F",
    "An abstract claim without an example is hard to believe and hard to remember. Learn to illustrate.",
    "illustrate=to explain by using examples|instance=a particular example|case in point=a good example of what is being discussed|typical=having the usual qualities",
    "Aesop’s Fables — Greek fables (traditionally dated to the 6th century BCE) that teach abstract lessons through concrete stories: “slow and steady wins the race”.",
    "Do examples clarify thinking — or can they mislead us?",
    "Make a claim about modern life and support it with two concrete examples.", 90,
    "Take… for instance.|A case in point is…|To give you an example…");
  d(43, "Making comparisons", "communication", "F",
    "Comparisons make your point sharper. Learn structures for similarity, difference and degree.",
    "analogous=similar in some ways|comparable=similar enough to be compared|whereas=used to contrast two facts|by comparison=when compared with something else",
    "Plutarch’s Parallel Lives — paired biographies of Greeks and Romans (written c. 100 CE), one of the earliest uses of comparison to understand character; a major source for Shakespeare.",
    "Is comparing yourself to others ever useful?",
    "Compare two cities, jobs or generations — similarities and differences.", 90,
    "Whereas X…, Y…|By comparison,…|They’re similar in that…, but…");
  d(44, "Expressing uncertainty", "communication", "I",
    "Saying you don’t know — elegantly — is a mark of intelligence. Learn hedging without sounding weak.",
    "tentative=not certain or fixed|presumably=used to say what you think is likely|arguably=used when you believe something can be argued|as far as I know=according to my knowledge",
    "szymborska",
    "Why do confident people often sound more convincing than accurate people?",
    "Discuss something you’re unsure about (e.g. the future of work) — expressing uncertainty clearly but confidently.", 90,
    "I could be wrong, but…|As far as I know…|I’m genuinely not sure, but my guess is…");
  d(45, "Expressing nuance", "communication", "I",
    "Nuance is the space between yes and no. Use qualification, conditions and “it depends — on what?”",
    "to some extent=partly|caveat=a warning or limitation|depend on=to be decided by|it’s not black and white=it’s complicated",
    "F. Scott Fitzgerald, “The Crack-Up” (1936): “The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function.”",
    "Is nuance always a virtue? When is it a way of avoiding a position?",
    "Is social media good or bad for friendships? Answer with nuance — but still take a position.", 90,
    "To some extent…|It depends on…|One caveat is…|It’s not black and white.");
  d(46, "Elaborating", "communication", "F",
    "Short answers stall conversations. Learn to expand: reason, example, consequence, feeling.",
    "expand on=to give more details|specifically=exactly, in detail|in other words=to say it differently|what I mean is=used to clarify",
    "Plato’s dialogues — philosophy written as conversations (c. 4th century BCE), in which ideas develop through elaboration, objection and example.",
    "Do you tend to say too little or too much?",
    "Answer “Do you like where you live?” — and keep elaborating for 90 seconds.", 90,
    "What I mean is…|More specifically…|To expand on that…");
  d(47, "Talking about books you haven’t finished", "literature", "I",
    "Honesty is more interesting than pretending. Talk about premise, ideas and reactions — even to books you only started.",
    "premise=the basic idea of a story|gist=the main point|skim=to read quickly|resonate=to feel meaningful or familiar",
    "Pierre Bayard, How to Talk About Books You Haven’t Read (2007) — a playful essay by a French literature professor arguing that our relationship to books is always partial.",
    "Is it dishonest to talk about a book you haven’t read?",
    "Talk about a book you started but didn’t finish: its premise, what you liked and why you stopped.", 90,
    "I only got halfway, but…|The premise is…|What resonated with me was…");
  d(48, "Talking about films", "cinema", "I",
    "Describe films beyond plot: performance, pacing, cinematography, what the director is saying.",
    "cinematography=the art of camera work and lighting|pacing=the speed at which a story develops|protagonist=the main character|understated=done in a quiet, restrained way",
    "varda",
    "What makes a film stay with you for years?",
    "Talk about a film you love — without summarising the plot.", 90,
    "What I love about it is…|The pacing is…|It’s really about…");
  d(50, "Talking about music", "music", "I",
    "Music is emotional — and therefore hard to describe. Learn a vocabulary of mood, texture and meaning.",
    "melancholic=sad in a thoughtful way|evocative=bringing strong images or feelings to mind|rhythm=a regular pattern of sounds|lyrics=the words of a song",
    "simone",
    "Can music be political?",
    "Describe a song that matters to you — the music, the lyrics, and what it evokes.", 90,
    "It has a… quality.|It evokes…|What gets me is…");
  d(51, "Status and social signals", "society", "I",
    "Much of social life is about status — signalled through clothes, words, tastes and possessions. Understanding it makes you a sharper observer.",
    "status=social position or rank|signal=to communicate indirectly|aspirational=showing a desire for higher status|inconspicuous=not attracting attention",
    "veblen",
    "Why do people care so much about status?",
    "Why do people care so much about status? Give two examples from modern life.", 60,
    "It’s a way of signalling…|What’s really being communicated is…");
  d(52, "Warmth and competence", "psychology", "I",
    "Research by Susan Fiske and colleagues suggests we judge others on two main dimensions: warmth and competence. Charisma is usually both.",
    "warmth=friendliness and kindness|competence=the ability to do something well|composed=calm and in control|engaging=charming and attractive",
    "Susan Fiske’s Stereotype Content Model (2002, with Cuddy, Glick and Xu) — people are perceived along two axes, warmth and competence, which shape whether we admire, pity, envy or dismiss them.",
    "Is it harder for women to be seen as both warm and competent?",
    "Describe someone you find charismatic — what exactly do they do?", 90,
    "What makes her so engaging is…|She’s both warm and…");
  d(53, "Networking without awkwardness", "conversation", "I",
    "Networking is just conversation with a future. Learn to introduce yourself, find common ground and follow up.",
    "reciprocal=given and received by both sides|follow up=to contact again after a first meeting|common ground=shared interests or views|introduce=to present one person to another",
    "The Benjamin Franklin effect — Franklin wrote that asking a rival to lend him a rare book turned the rival into a friend; psychologists suggest we come to like people we have done favours for.",
    "Is networking manipulative — or just how humans cooperate?",
    "Introduce yourself at a professional event, find common ground, and suggest following up — in 60 seconds.", 60,
    "I’ve heard great things about…|We should continue this conversation…|It would be lovely to…");
  d(54, "Compliments and gratitude", "conversation", "F",
    "Specific compliments and real gratitude are rare and memorable. Learn to give and receive them gracefully.",
    "thoughtful=showing consideration for others|considerate=careful not to upset others|gracious=kind and polite|appreciate=to be grateful for",
    "ubuntu",
    "Why do many people find it hard to receive a compliment?",
    "Thank someone who has influenced you — specifically, as if they were in front of you.", 90,
    "I really appreciated the way you…|It meant a lot that…|That’s very kind of you.");
  d(55, "Talking about difficult topics", "conversation", "A",
    "Grief, illness, injustice, politics: learn to approach sensitive topics with tact, honesty and care.",
    "sensitive=needing to be dealt with carefully|tactful=careful not to offend|frame=to present in a particular way|acknowledge=to accept the truth of something",
    "lorde",
    "Is silence ever the right response?",
    "A colleague’s parent has died. What do you say — and what do you avoid saying?", 60,
    "I’m so sorry — I can’t imagine…|If you ever want to talk…|I don’t know what to say, but I’m here.");
  d(57, "Stories with tension", "communication", "I",
    "Tension is what makes us lean in. Learn to set up stakes, delay the resolution and use suspense.",
    "suspense=a feeling of excitement about what will happen|stakes=what could be won or lost|unfold=to develop gradually|twist=an unexpected development",
    "hitchcock",
    "Why do we enjoy feeling tense in stories?",
    "Tell a story where you didn’t know how things would turn out — build the tension.", 90,
    "What I didn’t know was…|And then, just as…|For a moment, I thought…");
  d(58, "Conversation across cultures", "conversation", "I",
    "Directness, silence, interruptions and politeness differ across cultures. Learn to notice and adapt.",
    "high-context=communication relying on shared understanding|direct=saying exactly what you mean|courteous=polite and respectful|misinterpret=to understand wrongly",
    "hall",
    "Is your culture high-context or low-context? How has that affected you abroad?",
    "Describe a misunderstanding caused by cultural differences in communication.", 90,
    "Where I come from…|I didn’t realise that…|It was a cultural thing.");
  d(59, "Being memorable", "rhetoric", "I",
    "Aristotle said persuasion relies on ethos (character), pathos (emotion) and logos (reason). Memorable speakers combine all three.",
    "distinctive=easy to recognise because different|resonate=to have a meaning that people feel|takeaway=the main point to remember|credible=able to be believed",
    "rhetoric-aristotle",
    "Who is the most memorable speaker you’ve heard — and why?",
    "Persuade me to read your favourite book — use ethos, pathos and logos.", 90,
    "Here’s why it matters…|Imagine…|The evidence is clear:…");

  /* ───────── MONTH 3 — BECOME WELL READ ───────── */
  d(61, "Why history matters", "history", "F",
    "History isn’t a list of dates; it’s the study of how things came to be the way they are — and how people interpreted them.",
    "hindsight=understanding after the event|legacy=something left from the past|era=a period of history|precedent=an earlier event used as an example",
    "herodotus",
    "Do we learn from history — or only use it to justify what we already think?",
    "Choose one historical event that you think still shapes your country today. Explain how.", 90);
  d(62, "The first civilisations", "history", "F",
    "Mesopotamia and Egypt invented cities, writing, law and monumental architecture. Writing began with accounting.",
    "civilisation=an advanced human society|cuneiform=wedge-shaped writing of Mesopotamia|monumental=very large and impressive|dynasty=a series of rulers from one family",
    "gilgamesh",
    "Why do you think the first writing was used for accounting rather than poetry?",
    "Explain what Gilgamesh learns at the end of his journey — and whether it’s still relevant.", 90);
  d(64, "Ancient Greece", "history", "I",
    "Athens gave us democracy (for male citizens), tragedy, philosophy and history-writing — and also slavery and exclusion. Holding both is the nuanced view.",
    "democracy=government by the people|tragedy=a drama with a sad ending caused by a flaw or conflict|hubris=excessive pride|citizen=a legal member of a state",
    "antigone",
    "Antigone must choose between the law of the state and her conscience. When should we disobey the law?",
    "Explain the conflict in Antigone and say whose side you’re on.", 90);
  d(65, "Rome", "history", "I",
    "From republic to empire: Rome’s law, roads, language and politics shaped Europe — and the phrase “decline and fall” still haunts modern debates.",
    "republic=a state without a monarch, run by elected representatives|empire=a group of territories ruled by one power|decline=a gradual loss of strength|pragmatic=practical rather than idealistic",
    "rome",
    "People often compare modern powers to Rome. Is that comparison useful or lazy?",
    "What is one Roman legacy you use every day? Explain it.", 60);
  d(66, "Classical China and India", "history", "I",
    "Confucius and the Buddha lived around the same century. Their ideas about harmony, duty and suffering shaped billions of lives.",
    "harmony=a pleasing agreement of parts|filial piety=respect and care for one’s parents|virtue=moral goodness|ritual=a ceremony done the same way each time",
    "confucius",
    "Is a good society built on rules, on relationships, or on individual rights?",
    "Explain one idea of Confucius and whether it fits modern life.", 90);
  d(67, "The Islamic Golden Age", "history", "I",
    "From the 8th to the 13th centuries, scholars in Baghdad, Cordoba and Cairo translated, preserved and advanced Greek, Persian and Indian knowledge.",
    "scholarship=serious academic study|preserve=to keep safe from loss|algorithm=a set of steps to solve a problem|translate=to express in another language",
    "house-of-wisdom",
    "Why is this period so often missing from Western history lessons?",
    "Explain where the word “algorithm” comes from — and why it matters.", 60);
  d(68, "Africa’s medieval empires", "history", "I",
    "The Mali Empire, Timbuktu’s manuscripts and Great Zimbabwe challenge the myth that Africa had “no history”.",
    "prosperity=wealth and success|manuscript=a handwritten document|pilgrimage=a religious journey|trade route=a path used for commerce",
    "mansa-musa",
    "Who decides which histories are told and which are forgotten?",
    "Tell the story of Mansa Musa’s pilgrimage in 60 seconds.", 60);
  d(69, "Shakespeare", "literature", "I",
    "Shakespeare invented or first recorded hundreds of words and phrases still in use. His plays are about power, love, jealousy, ambition — and language itself.",
    "soliloquy=a speech alone on stage revealing thoughts|tragic flaw=a weakness that leads to downfall|wit=clever humour|eloquent=expressing ideas fluently",
    "shakespeare",
    "Why is Shakespeare still performed everywhere, 400 years later?",
    "Explain what “To be, or not to be” is about — in your own words.", 90);
  d(71, "The Enlightenment", "history", "I",
    "18th-century thinkers championed reason, science, tolerance and individual rights — ideas behind modern democracy, and also criticised for their blind spots.",
    "reason=the power to think logically|tolerance=willingness to accept different views|empirical=based on observation|sceptical=doubting that something is true",
    "enlightenment",
    "Kant’s motto: “Dare to know.” What would it mean to live by it today?",
    "Explain the Enlightenment to a teenager — and name one blind spot.", 90);
  d(72, "The age of revolutions", "history", "I",
    "American (1776), French (1789), Haitian (1791–1804): three revolutions about liberty — and who counted as free.",
    "liberty=freedom|sovereignty=supreme power or authority|uprising=a rebellion|radical=wanting complete change",
    "haiti",
    "Why is the Haitian Revolution less famous than the French one?",
    "Compare two of the revolutions — what they promised and who was left out.", 90);
  d(73, "Jane Austen", "literature", "I",
    "Austen’s novels are funny, sharp analyses of money, marriage and social intelligence. Her irony is the key.",
    "irony=saying the opposite of what you mean for effect|propriety=correct social behaviour|wit=clever, quick humour|prejudice=a preconceived opinion",
    "austen",
    "Is Austen a romantic novelist — or an economist of marriage?",
    "Explain the famous first sentence of Pride and Prejudice and why it’s ironic.", 60);
  d(74, "The Industrial Revolution", "history", "I",
    "Steam, factories and cities transformed work, family and time itself — beginning in Britain around 1760.",
    "mechanisation=the use of machines to replace human work|urbanisation=the movement of people to cities|labour=work, especially physical|disrupt=to change radically",
    "industrial-revolution",
    "Is the AI revolution comparable to the Industrial Revolution?",
    "How did the Industrial Revolution change ordinary life? Give three examples.", 90);
  d(75, "Romanticism", "art", "I",
    "A reaction against reason and industry: Romantic artists celebrated emotion, nature, the individual and the sublime.",
    "sublime=so great it inspires awe|nostalgia=a sentimental longing for the past|imagination=the ability to form new ideas|longing=a strong desire",
    "friedrich",
    "Are we still Romantics? (Think of travel photos and “authenticity”.)",
    "Describe Friedrich’s Wanderer above the Sea of Fog and what it says about the individual.", 60);
  d(76, "Colonialism and its legacies", "history", "A",
    "European empires reshaped borders, economies and identities across Africa, Asia and the Americas. Their legacies remain contested.",
    "exploitation=using something unfairly for profit|independence=freedom from control|legacy=consequences from the past|post-colonial=after the end of colonial rule",
    "achebe",
    "How do colonial legacies still shape the world — and your country?",
    "Explain why Achebe wrote Things Fall Apart and what it changed.", 90);
  d(78, "Impressionism", "art", "I",
    "Monet, Morisot and others painted light, movement and modern life — and were mocked for it. The name began as an insult.",
    "fleeting=lasting a very short time|brushstroke=a mark made by a brush|perception=the way we see|en plein air=painting outdoors",
    "impressionism",
    "Why are revolutionary artists so often mocked at first?",
    "Describe an Impressionist painting and what it captures that a photograph doesn’t.", 60);
  d(79, "Dostoevsky", "literature", "A",
    "Dostoevsky explored guilt, faith, freedom and the psychology of the mind under pressure.",
    "conscience=the inner sense of right and wrong|redemption=being saved from sin or error|torment=great suffering|psychological=relating to the mind",
    "dostoevsky",
    "Can a person justify a terrible act by a greater good?",
    "Explain Raskolnikov’s theory in Crime and Punishment, and why it fails.", 90);
  d(80, "World War I", "history", "I",
    "1914–1918: industrial war, ten million military dead, empires collapsed — and a generation lost faith in progress.",
    "attrition=wearing down an enemy gradually|alliance=an agreement between countries|disillusionment=disappointment after losing belief|trench=a long ditch for soldiers",
    "owen",
    "Why did so many people welcome war in 1914?",
    "Explain why WWI is often called a turning point in modern culture.", 90);
  d(81, "Modernism", "art", "A",
    "Early 20th-century artists broke traditional forms — fragmentation, abstraction, stream of consciousness — to capture a fractured modern world.",
    "fragmented=broken into pieces|experimental=trying new methods|avant-garde=new and unusual ideas in art|abstract=not representing real objects",
    "modernism",
    "Why does modern art provoke the reaction “a child could do that”?",
    "Respond to someone who says “Modern art is a joke.”", 90);
  d(82, "Franz Kafka", "literature", "A",
    "Kafka’s nightmares of bureaucracy, guilt and alienation gave us the word “Kafkaesque”.",
    "Kafkaesque=nightmarishly complex and illogical|absurd=wildly unreasonable|alienation=feeling isolated|bureaucratic=relating to complicated official rules",
    "kafka",
    "Describe a “Kafkaesque” experience you’ve had.",
    "Describe a Kafkaesque experience — and explain the word to someone.", 90);
  d(83, "World War II and the Holocaust", "history", "A",
    "The deadliest conflict in history and the systematic murder of six million Jews. Remembering it requires precision and care.",
    "totalitarian=a system where the state controls everything|atrocity=an extremely cruel act|complicity=involvement in wrongdoing|remembrance=the act of remembering the dead",
    "arendt",
    "What did Arendt mean by “the banality of evil” — and why was it controversial?",
    "Explain Arendt’s idea of the banality of evil in your own words.", 90);
  d(85, "The Cold War", "history", "I",
    "1947–1991: two superpowers, nuclear deterrence, proxy wars and a world divided by an ideological wall.",
    "ideology=a system of ideas and beliefs|deterrence=preventing action through fear of consequences|proxy war=a war fought indirectly|détente=easing of tension",
    "cold-war",
    "Are we in a new Cold War?",
    "Explain what the fall of the Berlin Wall meant.", 60);
  d(86, "Gabriel García Márquez", "literature", "I",
    "Magical realism: extraordinary events told in a matter-of-fact tone, rooted in Latin American history.",
    "magical realism=a style mixing the magical with the everyday|solitude=being alone|lineage=line of descent from ancestors|matter-of-fact=unemotional",
    "garcia-marquez",
    "Why might magical realism capture Latin American history better than realism?",
    "Explain magical realism with an example.", 60);
  d(87, "James Baldwin and civil rights", "literature", "A",
    "Baldwin wrote with moral clarity and extraordinary eloquence about race, love and America.",
    "eloquent=fluent and persuasive|dignity=self-respect|injustice=lack of fairness|witness=to see and testify",
    "baldwin",
    "Baldwin: “Not everything that is faced can be changed, but nothing can be changed until it is faced.” Do you agree?",
    "Explain why Baldwin still matters.", 90);
  d(88, "Toni Morrison", "literature", "A",
    "The first Black woman to win the Nobel Prize in Literature (1993), Morrison gave voice to histories left out of the record.",
    "haunting=beautiful but sad, hard to forget|lyrical=expressing emotion beautifully|voice=a distinctive way of expressing|memory=the faculty of remembering",
    "morrison",
    "What does it mean to write the stories that weren’t written?",
    "Explain why Beloved is considered a masterpiece.", 90);
  d(89, "Globalisation and the modern world", "society", "I",
    "Trade, migration and technology have connected the world — creating wealth, inequality, diaspora and cultural mixing.",
    "interconnected=connected with each other|homogenise=to make similar|diaspora=people living outside their homeland|outsourcing=moving work to external companies",
    "globalization",
    "Is globalisation making cultures richer or more alike?",
    "Is globalisation good for your country? Give a balanced answer.", 120);

  /* ───────── MONTH 4 — LEARN TO THINK ───────── */
  d(92, "What is philosophy for?", "philosophy", "I",
    "Philosophy asks questions that can’t be answered by experiment alone: what is real, what is right, what can we know.",
    "premise=a statement an argument is based on|inquiry=an investigation|examine=to look at closely|argument=reasons supporting a view",
    "plato-cave",
    "What are the “shadows on the wall” in modern life?",
    "Explain Plato’s cave and apply it to something modern.", 90);
  d(93, "Ethics: right and wrong", "philosophy", "I",
    "Moral dilemmas reveal our principles. The trolley problem exposes the tension between outcomes and rules.",
    "moral=relating to right and wrong|dilemma=a difficult choice|principle=a fundamental rule|consequence=a result",
    "trolley",
    "Would you pull the lever? Would you push the man? Why the difference?",
    "Present the trolley problem and your answer.", 90);
  d(94, "Utilitarianism", "philosophy", "I",
    "The greatest happiness for the greatest number — Bentham and Mill’s powerful, controversial idea.",
    "utility=usefulness or happiness|greater good=the benefit of most people|calculate=to work out|sacrifice=to give up something valuable",
    "utilitarianism",
    "Should a government always choose the option that helps the most people?",
    "Argue for and against utilitarianism using one example.", 90);
  d(95, "Stoicism", "philosophy", "I",
    "Focus on what you control; accept what you don’t. Stoicism is having a modern revival — sometimes in diluted form.",
    "equanimity=calmness in difficulty|resilience=the ability to recover|adversity=difficulty|dichotomy of control=separating what you can and cannot control",
    "stoicism",
    "Is Stoicism wisdom — or a way of accepting injustice?",
    "Apply the dichotomy of control to a problem in your life.", 90);
  d(96, "Existentialism", "philosophy", "A",
    "We are “condemned to be free”: existentialists argue we create meaning through choices and must take responsibility for them.",
    "authenticity=being true to yourself|absurd=lacking meaning|anguish=severe distress|bad faith=self-deception to avoid freedom",
    "existentialism",
    "Do you create your meaning — or discover it?",
    "Explain existentialism simply and connect it to modern life.", 90);
  d(97, "Simone de Beauvoir", "philosophy", "A",
    "“One is not born, but rather becomes, a woman.” Beauvoir’s The Second Sex (1949) founded modern feminist philosophy.",
    "the Other=someone defined as different from the norm|construct=an idea created by society|emancipation=being set free|ambiguity=uncertainty of meaning",
    "beauvoir",
    "What does “becoming” a woman mean to you — given the theme of this program?",
    "Explain Beauvoir’s famous sentence and whether it still holds.", 90);
  d(99, "Free will and determinism", "philosophy", "A",
    "If every event has a cause, are our choices really free? And if not, can we be responsible?",
    "determinism=the view that all events are caused|agency=the capacity to act|predetermined=decided in advance|accountable=responsible",
    "free-will",
    "If free will is an illusion, should we still punish people?",
    "Do you believe in free will? Give a nuanced answer.", 120);
  d(100, "Identity: what makes you you?", "philosophy", "I",
    "If every plank of a ship is replaced, is it the same ship? And are you the same person you were ten years ago?",
    "identity=who or what someone is|continuity=the state of continuing|essence=the basic nature|self=a person’s individual being",
    "theseus",
    "Are you the same person you were at 15?",
    "Explain the Ship of Theseus and apply it to yourself.", 90);
  d(101, "How do we know?", "philosophy", "A",
    "Epistemology studies knowledge: what we can be certain of, and how belief becomes knowledge.",
    "certainty=being completely sure|justify=to show something is right|belief=acceptance that something is true|sceptic=a person who questions accepted ideas",
    "descartes",
    "What is something you know for certain?",
    "Explain Descartes’ “I think, therefore I am.”", 60);
  d(102, "Nihilism and meaning", "philosophy", "A",
    "Nietzsche’s “God is dead” was a diagnosis, not a celebration: what happens to meaning when old foundations collapse?",
    "nihilism=the belief that life is meaningless|void=emptiness|purpose=the reason for which something exists|revaluation=reassessing values",
    "nietzsche",
    "Where do people find meaning today?",
    "Explain what Nietzsche meant by “God is dead.”", 90);
  d(103, "Cognitive dissonance", "psychology", "I",
    "When beliefs and actions conflict, we feel discomfort — and often change the belief rather than the action.",
    "dissonance=a lack of agreement|rationalise=to justify with logical-sounding reasons|inconsistent=not in agreement|justify=to give reasons for",
    "dissonance",
    "When did you rationalise something you knew was wrong?",
    "Explain cognitive dissonance with an everyday example.", 60);
  d(104, "Heuristics: anchoring and availability", "psychology", "I",
    "Mental shortcuts make us fast — and systematically wrong. We judge by what comes to mind and by the first number we hear.",
    "heuristic=a mental shortcut|anchor=an initial reference point|estimate=a rough calculation|vivid=producing strong mental images",
    "kahneman",
    "Why do people fear plane crashes more than car accidents?",
    "Explain the availability heuristic and anchoring with examples.", 90);
  d(106, "Conformity and social proof", "psychology", "I",
    "Solomon Asch found people often agreed with an obviously wrong majority. We look to others to decide what’s right.",
    "conform=to follow the group|consensus=general agreement|dissent=disagreement with the majority|peer pressure=influence from people like you",
    "asch",
    "When is conformity wise, and when is it dangerous?",
    "Describe a time you conformed — or refused to.", 90);
  d(107, "Memory and perception", "psychology", "I",
    "Memory reconstructs rather than records. Elizabeth Loftus showed how easily memories can be altered.",
    "reconstruct=to build again|distort=to change the shape or meaning|unreliable=not able to be trusted|suggestion=an idea put into someone’s mind",
    "loftus",
    "If memory is unreliable, what does that mean for who we are?",
    "Explain Loftus’s car-crash experiment and its implications.", 90);
  d(108, "Attachment", "psychology", "I",
    "How we bonded as children may shape how we love as adults — though attachment styles are less fixed than pop psychology suggests.",
    "secure=feeling safe|attachment=an emotional bond|anxious=worried|avoidant=keeping distance",
    "attachment",
    "Is attachment theory useful — or overused on social media?",
    "Explain attachment theory — and its limits.", 90);
  d(109, "Motivation and habits", "psychology", "I",
    "Intrinsic motivation (doing something for its own sake) tends to last longer than rewards. Habits form through cue, routine and reward.",
    "intrinsic=coming from within|extrinsic=coming from outside|cue=a signal for action|autonomy=independence",
    "sdt",
    "What motivates you intrinsically?",
    "Explain intrinsic vs extrinsic motivation using your own life.", 90);
  d(110, "Persuasion", "psychology", "I",
    "Reciprocity, scarcity, authority, consistency, liking and social proof: Cialdini’s principles explain why we say yes.",
    "persuade=to convince|reciprocity=exchanging things for mutual benefit|scarcity=being in short supply|authority=the power to influence",
    "cialdini",
    "Where is the line between persuasion and manipulation?",
    "Analyse an advert you’ve seen using Cialdini’s principles.", 90);
  d(111, "Economics: scarcity and opportunity cost", "economics", "I",
    "Every choice has a cost: what you give up. Economics starts with scarcity — and incentives.",
    "scarcity=limited resources|opportunity cost=the value of the best alternative given up|incentive=something that motivates|trade-off=a compromise",
    "adam-smith",
    "What’s the opportunity cost of this program for you?",
    "Explain opportunity cost with an example from your life.", 60);
  d(113, "Inflation and interest rates", "economics", "I",
    "Why prices rise, why central banks raise rates, and why it matters to your savings and your rent.",
    "inflation=a general rise in prices|purchasing power=what money can buy|interest rate=the cost of borrowing|central bank=the bank that manages a country’s money",
    "inflation",
    "Who wins and who loses from inflation?",
    "Explain why central banks raise interest rates to fight inflation.", 90);
  d(114, "Capitalism and its critics", "economics", "A",
    "Markets create wealth and innovation; critics point to inequality, instability and alienation. Know both arguments.",
    "market=a system of buying and selling|profit=financial gain|critique=a detailed analysis and judgement|regulation=rules set by authority",
    "marx",
    "Is capitalism the worst system except all the others?",
    "Give the strongest argument for and against capitalism.", 120);
  d(115, "Inequality and meritocracy", "society", "A",
    "Is success earned? The word “meritocracy” was coined as satire — and the debate is still alive.",
    "inequality=unequal distribution|mobility=the ability to move between social levels|privilege=an advantage only some have|meritocracy=a system rewarding ability and effort",
    "meritocracy",
    "Do we live in a meritocracy?",
    "Is meritocracy a fair ideal? Give a nuanced answer.", 120);
  d(116, "Consumerism and fashion", "fashion", "I",
    "From Chanel’s liberation of the female silhouette to fast fashion’s environmental cost — clothes are culture, economics and identity.",
    "consumerism=the culture of buying goods|disposable=intended to be thrown away|status symbol=a possession showing social position|sustainable=able to continue without damage",
    "chanel",
    "Can fashion be both art and a problem?",
    "What do your clothes say about you — and what do you want them to say?", 90);
  d(117, "Social media and attention", "society", "I",
    "“A wealth of information creates a poverty of attention.” Attention is the scarce resource platforms compete for.",
    "algorithm=a set of rules a computer follows|attention economy=an economy where attention is the scarce resource|curated=carefully selected|compulsive=difficult to control",
    "attention",
    "Who owns your attention?",
    "Has social media improved or damaged friendship? Argue with nuance.", 120);
  d(118, "Gender and identity", "society", "A",
    "How gender, class, race and culture intersect — and why one-dimensional analysis misses lived experience.",
    "norm=standard expected behaviour|representation=being shown or included|stereotype=an oversimplified idea|intersectional=considering overlapping identities",
    "crenshaw",
    "Which parts of your identity matter most in different situations?",
    "Explain intersectionality using a concrete example.", 90);

  /* ───────── MONTH 5 — MASTER ARTICULATION ───────── */
  d(121, "Simple, precise, nuanced", "rhetoric", "I",
    "The articulate speaker isn’t the one with the biggest words. Orwell’s rules: never use a long word where a short one will do.",
    "concise=giving information clearly in few words|plain=simple and clear|precise=exact|jargon=specialist language",
    "orwell",
    "Why do people use complicated language when simple language would do?",
    "Explain your job in plain English — no jargon at all.", 90);
  d(122, "Structuring an argument", "rhetoric", "I",
    "Claim → Reason → Evidence → Example → Counterargument → Nuance → Conclusion. The backbone of persuasive speech.",
    "claim=a statement that something is true|reasoning=the process of thinking logically|evidence=facts supporting a claim|substantiate=to provide evidence for",
    "Stephen Toulmin, The Uses of Argument (1958) — modelled everyday arguments as claim, data (evidence), warrant (the reasoning that connects them), backing, qualifier and rebuttal.",
    "Which part of an argument do you usually skip?",
    "Should university be free? Use the full argument structure.", 120);
  d(123, "Counterarguments and steelmanning", "rhetoric", "A",
    "Anticipating objections makes you more persuasive. Steelman: state the other side so well its supporters would agree.",
    "concede=to admit a point|steelman=the strongest version of an opposing view|objection=a reason against|rebut=to argue against",
    "steelman",
    "Can you state the view you most disagree with in a way its supporters would accept?",
    "Steelman a view you disagree with, then respond to it.", 120);
  d(124, "Qualifying statements", "rhetoric", "I",
    "Absolute claims are easy to attack. Qualified claims are harder to dismiss: “largely”, “in most cases”, “by and large”.",
    "qualify=to limit the meaning of a statement|largely=mostly|by and large=on the whole|tend to=to usually do",
    "Bertrand Russell, “The Triumph of Stupidity” (1933): “The fundamental cause of the trouble is that in the modern world the stupid are cocksure while the intelligent are full of doubt.”",
    "Is it possible to qualify too much?",
    "Make three bold claims, then qualify each one.", 60);
  d(125, "Transitions", "rhetoric", "I",
    "Transitions are road signs: they tell the listener where your argument is going.",
    "furthermore=in addition|that said=despite what was just said|consequently=as a result|in contrast=showing a difference",
    "mlk",
    "Why does a well-structured talk feel easier to follow?",
    "Give a 2-minute argument using at least six different transitions.", 120);
  d(127, "Analogy and metaphor", "rhetoric", "I",
    "We think in metaphors (“time is money”, “argument is war”). Choosing a metaphor frames the whole debate.",
    "analogy=a comparison to explain|metaphor=describing one thing as another|illuminate=to clarify|frame=to shape how something is understood",
    "George Lakoff & Mark Johnson, Metaphors We Live By (1980) — argued that metaphor is not decoration but the basic structure of human thought.",
    "What metaphor do you use for your life — a journey, a battle, a game?",
    "Explain a complex topic using an extended analogy.", 90);
  d(128, "Contrast and antithesis", "rhetoric", "I",
    "“It was the best of times, it was the worst of times.” Balanced opposites make sentences memorable.",
    "antithesis=a contrast of ideas in balanced phrases|juxtapose=to place side by side|balance=equal weight|rhythm=a regular pattern",
    "Charles Dickens, A Tale of Two Cities (1859) — opens with one of literature’s most famous antitheses.",
    "Why do balanced sentences sound wise?",
    "Write and say three antitheses about modern life.", 60);
  d(129, "Repetition and rhythm", "rhetoric", "I",
    "Repetition — used deliberately — creates emphasis and emotion. Anaphora repeats words at the start of phrases.",
    "anaphora=repetition at the start of successive phrases|cadence=the rhythm of speech|emphasis=special importance|refrain=a repeated line",
    "mlk",
    "When does repetition become annoying?",
    "Give a 90-second speech about something you care about using anaphora.", 90);
  d(130, "Framing", "rhetoric", "A",
    "The same facts, framed differently, produce different decisions. Learn to notice and reframe.",
    "frame=to present in a particular way|loaded=having hidden implications|reframe=to change the way something is seen|connotation=an associated feeling or idea",
    "Framing effect — Tversky & Kahneman (1981) showed people choose differently when the same outcome is described as “200 saved” versus “400 die”.",
    "How is a current issue framed in the news you read?",
    "Take one issue and present it from two different frames.", 90);
  d(131, "Wit and epigram", "rhetoric", "A",
    "Oscar Wilde turned paradox into an art form. Learn the short, surprising sentence.",
    "epigram=a short, clever saying|paradox=a statement that seems contradictory but contains truth|wit=clever humour|quip=a witty remark",
    "wilde",
    "Is wit a form of intelligence?",
    "Invent two epigrams about modern life and explain them.", 60);
  d(132, "Explaining complex ideas simply II", "communication", "A",
    "Carl Sagan made the cosmos accessible without dumbing it down. Practise distilling a complex topic for a general audience.",
    "distil=to extract the essential meaning|accessible=easy to understand|convey=to communicate|awe=a feeling of wonder",
    "sagan",
    "Should experts simplify — or should audiences rise to complexity?",
    "Explain something from Month 4 (e.g. opportunity cost) in two minutes for a general audience.", 120);
  d(134, "Debate: technology and connection", "society", "A",
    "Is technology making us more connected or more isolated? Hold the tension.",
    "isolated=alone, separated|mediated=happening through a medium|paradox=a contradictory situation|solitude=being alone, often positively",
    "Sherry Turkle, Alone Together (2011) — an MIT researcher’s argument that we expect more from technology and less from each other.",
    "Do you feel more or less connected than ten years ago?",
    "Is technology making us more connected or more isolated? 3-minute argument.", 180);
  d(135, "Debate: AI and work", "society", "A",
    "Automation, augmentation, displacement — the most important economic question of the decade.",
    "automate=to make a process work automatically|augment=to increase or enhance|displace=to take the place of|obsolete=no longer used",
    "turing",
    "What part of your work could never be automated — and why?",
    "What will AI do to work? Give a structured 2-minute answer.", 120);
  d(136, "Debate: education", "society", "A",
    "What is education for — jobs, citizenship, curiosity, or freedom?",
    "curriculum=the subjects studied|rote learning=memorising by repetition|critical thinking=analysing objectively|equitable=fair",
    "freire",
    "What did school teach you that wasn’t on the curriculum?",
    "What should schools teach that they don’t? Argue your case.", 120);
  d(137, "Talking about art critically", "art", "A",
    "Move from “I like it” to composition, colour, intention, context and response.",
    "composition=the arrangement of elements|evoke=to bring to mind|interpret=to explain the meaning|intention=what the artist meant",
    "kahlo",
    "Does knowing an artist’s life change how you see their work?",
    "Describe a painting by Frida Kahlo: what you see, what it means, how it makes you feel.", 90);
  d(138, "Talking about architecture", "architecture", "A",
    "Buildings shape how we live. Learn to describe form, function, material and feeling.",
    "form=shape and structure|function=purpose|brutalist=a style of raw, massive concrete|proportion=the relationship of size between parts",
    "hadid",
    "Which building in your city would you protect — and which would you demolish?",
    "Describe a building you love or hate, and why.", 90);
  d(139, "Presenting an idea in two minutes", "communication", "A",
    "Hook → signpost → three points → takeaway. The structure of every great short talk.",
    "hook=an opening that grabs attention|signpost=a phrase that tells listeners what’s coming|takeaway=the main message|concise=short and clear",
    "Steve Jobs’s Stanford commencement address (2005) — built on a simple, explicit structure: “Today I want to tell you three stories from my life.”",
    "What makes you stop listening to a presentation?",
    "Present an idea you believe in — hook, three points, takeaway — in two minutes.", 120);
  d(141, "Persuasive storytelling", "rhetoric", "A",
    "Stories persuade where statistics fail. The hero’s journey, and its critics.",
    "narrative=a story|stakes=what could be lost|empathy=understanding others’ feelings|resolution=how a story ends",
    "Joseph Campbell, The Hero with a Thousand Faces (1949) — proposed a shared “monomyth” structure across world myths; influential (Star Wars) but criticised as overgeneralising.",
    "What story does your company, country or family tell about itself?",
    "Persuade me of something through a story, not statistics.", 120);
  d(142, "Staying composed under pressure", "communication", "A",
    "Hostile questions, interruptions and criticism: stay composed, clarify, and redirect.",
    "composed=calm and in control|defensive=reacting as if attacked|clarify=to make clear|redirect=to change direction",
    "mandela",
    "How do you react when you feel attacked in conversation?",
    "Someone says your idea is naive. Respond calmly and redirect in 60 seconds.", 60);
  d(143, "Talking about science", "science", "A",
    "Hypothesis, evidence, peer review, uncertainty. Talk about science accurately — and know correlation from causation.",
    "hypothesis=a proposed explanation to be tested|peer review=evaluation by other experts|correlation=a relationship between two things|causation=one thing causing another",
    "curie",
    "Why do people distrust science — and is any of that distrust reasonable?",
    "Explain the difference between correlation and causation with an example.", 60);
  d(144, "Talking about the economy", "economics", "A",
    "Recession, GDP, deficits, volatility: understand economic news well enough to discuss it.",
    "recession=a period of economic decline|GDP=the total value of goods and services produced|deficit=spending more than income|volatility=rapid, unpredictable change",
    "keynes",
    "Should governments spend more in a recession?",
    "Explain what a recession is and what governments can do.", 90);
  d(145, "Toasts, tributes and eulogies", "communication", "A",
    "Ceremonial speech: warm, specific, brief. Honour a person through details.",
    "tribute=an act showing respect|heartfelt=deeply sincere|poignant=evoking sadness|toast=a short speech before drinking",
    "Pericles’ Funeral Oration (431 BCE, recorded by Thucydides) — a tribute to the Athenian dead that became a celebration of democracy itself.",
    "What would you want said about you?",
    "Give a 90-second toast at a friend’s wedding or birthday.", 90);
  d(146, "Writing to think", "communication", "A",
    "Writing clarifies thought. The essay — from Montaigne’s “essai”, an attempt — is thinking on paper.",
    "essay=a short piece of writing on one subject|coherent=logical and consistent|thesis=the main argument|revise=to change and improve",
    "didion",
    "Do you know what you think before you write or speak it?",
    "Read aloud a 200-word essay you’ve written this week, then summarise it without notes.", 90);
  d(148, "Spotting assumptions and fallacies", "thinking", "A",
    "Straw man, false dilemma, slippery slope, ad hominem: name the trick, politely.",
    "fallacy=a mistaken belief or faulty reasoning|implicit=implied but not stated|generalise=to make a broad statement|straw man=a distorted version of an argument",
    "Logical fallacies — catalogued since Aristotle’s Sophistical Refutations; the useful skill is not shouting “fallacy!” but asking the question that exposes it.",
    "Which fallacy do you fall for most often?",
    "Respond politely to an argument that uses a false dilemma.", 60);
  d(149, "Your signature style", "communication", "A",
    "Articulation isn’t imitation. Find your voice: what you say often, what you never say, your rhythm, your restraint.",
    "authentic=genuine|voice=a distinctive style|deliberate=intentional|restraint=self-control",
    "Ludwig Mies van der Rohe, “Less is more” — the architect’s motto (popularised in the mid-20th century) for an aesthetic of restraint; it applies to sentences as well as buildings.",
    "How would your friends describe the way you speak?",
    "Describe your own communication style — and how it has changed in five months.", 120);

  /* ───────── MONTH 6 — BECOME HER (simulations) ───────── */
  sim(151, "Dinner party", "You are at dinner with six people you don’t know. The host turns to you: “What have you been reading lately?”", "“What have you been reading lately?” Respond — and turn it into a conversation.", 90, "Choose a book, film or article. Have one idea, one opinion and one question ready.");
  sim(152, "Professional meeting", "In a team meeting, your director asks: “What’s your opinion on the impact of AI on work?”", "Give a 2-minute answer with a clear structure.", 120, "Claim, reasons, an example from your industry, a counterpoint, a recommendation.", "turing");
  sim(153, "Museum", "You are standing in front of Vermeer’s Girl with a Pearl Earring with a friend who asks what you think.", "Explain what you notice and how it makes you feel.", 90, "Look first: light, gaze, colour. Then interpret. Then react.", "vermeer");
  sim(155, "Debate", "At a dinner, someone strongly disagrees with something you said about work-life balance.", "Respond without becoming defensive. Concede, clarify, counter.", 90, "Acknowledge, find common ground, restate your view more precisely.");
  sim(156, "Social conversation", "A friend asks: “Do you think people are becoming less interested in long-term relationships?”", "Discuss — with nuance, examples and a question back.", 120, "Consider apps, economics, individualism, longer lives.", "Esther Perel — psychotherapist and author of Mating in Captivity (2006), on the tension between security and desire in modern relationships.");
  sim(157, "Cultural discussion", "Someone mentions Virginia Woolf and looks at you.", "Explain why she matters, as if in conversation.", 90, "One fact, one idea, one modern connection, one personal reaction.", "woolf");
  sim(158, "Unfamiliar topic", "You’ll get a topic you know little about. You have 60 seconds to think.", "Speak for 2 minutes on a random unfamiliar topic, using reasoning.", 120, "Define it, connect it to something you know, reason about causes and consequences, admit uncertainty.");
  sim(159, "Networking event", "At an industry event, you meet someone senior you admire.", "Introduce yourself, ask two good questions, and suggest a follow-up.", 90, "Be specific about why you admire their work.");
  sim(160, "A first date", "Your date asks: “So, tell me something interesting about you.”", "Answer — then move beyond small talk.", 90, "Not a CV. An orientation, a story, a question.");
  sim(162, "Job interview", "The interviewer asks: “Tell me about a failure.”", "Answer with a story, a lesson and evidence of growth.", 120, "Situation, mistake, consequence, what you learned, what you do differently now.");
  sim(163, "Cinema night", "After watching Kurosawa’s Rashomon, your friends ask who was telling the truth.", "Discuss the film: what the director was saying and what it made you question.", 120, "Perspective, unreliable memory, self-interest.", "kurosawa");
  sim(164, "Travel", "In Kyoto, a local asks what you’ve noticed about Japanese culture.", "Share observations respectfully, with curiosity and a question.", 90, "Avoid stereotypes; notice specifics; ask.", "wabi-sabi");
  sim(165, "Explaining your country", "A foreign colleague asks: “What should I understand about your country?”", "Explain your country beyond clichés — history, contradictions, what you love.", 120, "One historical fact, one contradiction, one thing outsiders miss.", "Benedict Anderson, Imagined Communities (1983) — nations as communities imagined by people who will never meet most of their fellow members.");
  sim(166, "Current affairs", "Someone at lunch brings up a major news story.", "Discuss it, distinguishing fact, interpretation and opinion.", 120, "What happened? What do people think it means? What do you think — and how sure are you?");
  sim(167, "Giving a toast", "It’s your best friend’s birthday dinner. Everyone looks at you.", "Give a warm, specific, 90-second toast.", 90, "One story, one quality, one wish.");
  sim(169, "Unfamiliar topic II", "Another random topic — 60 seconds to think.", "Speak for 2 minutes on a new unfamiliar topic.", 120, "Define, connect, reason, conclude.");
  sim(170, "Book club", "You’re leading a book club discussion of a novel you’ve read this program.", "Open the discussion: a summary, your reading, and three questions.", 120, "Don’t summarise too long. Ask open questions.");
  sim(171, "Mentoring", "A younger colleague asks you to explain something you’ve learned in these months.", "Explain one idea from the program clearly and warmly.", 90, "Feynman technique: simple, analogy, example.");
  sim(172, "A heated dinner", "Politics comes up and the table is divided.", "Contribute without polarising: find shared values, add nuance, ask questions.", 120, "Moral foundations; steelman; curiosity.", "Jonathan Haidt, The Righteous Mind (2012) — moral foundations theory suggests political groups weigh values like care, fairness, loyalty, authority and liberty differently.");
  sim(173, "Panel discussion", "You’re on a panel about the future of cities.", "Give your opening statement — 2 minutes.", 120, "Jane Jacobs, housing, remote work, climate.", "jacobs");
  sim(174, "Your transformation story", "Someone asks: “What have you been working on this year?”", "Tell the story of these six months — with a turning point and meaning.", 120, "Situation → complication → turning point → change → meaning.");
  sim(176, "Free speaking marathon", "Three prompts, back to back, no preparation.", "Speak for 1 minute on each of three random prompts.", 180, "Breathe. Structure. Example. Conclusion.");
  sim(177, "Five references, one conversation", "A friend asks: “What makes a good life?”", "Answer in 2 minutes, naturally weaving in at least three cultural references from your Passport.", 120, "Aristotle, the Stoics, Woolf, Beauvoir, Camus…");
  sim(178, "Disagreement and nuance", "A colleague says: “Remote work is killing company culture.”", "Respond with a steelman, a qualified counterargument and a conclusion.", 120, "Steelman → concede → counter → nuance → conclude.");
  sim(179, "A letter to Day 1", "Tomorrow is graduation.", "Speak a letter to the woman who started this program on Day 1.", 120, "What would you tell her? What surprised you?");
})();

/* weekly reviews: every 7th day */
TAW.isReview = function (day) { return day % 7 === 0; };
TAW.milestoneDays = [7, 30, 60, 90, 120, 150, 180];
TAW.isMilestone = function (day) { return day % 30 === 0; };
TAW.monthOf = function (day) { return Math.min(6, Math.ceil(day / 30)); };
