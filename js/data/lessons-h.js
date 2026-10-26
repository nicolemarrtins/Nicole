/* Days 55–59, fully written (Month 2 — Become Interesting). Day 56 is the weekly review; Day 60 the milestone. */
(function () {
const V = TAW.V;

TAW.lessons[55] = {
  day: 55, title: "Talking about difficult topics", kicker: "Conversation · Care",
  cats: ["conversation", "society"], skills: ["conversation", "articulation"], difficulty: "Advanced", minutes: 35,
  why: "Grief, illness, injustice, politics: these are the conversations where people most fear saying the wrong thing — so they often say nothing. With a few principles and phrases, you can approach them with tact, honesty and care, in English as well as in Spanish.",
  learn: {
    body: [
      "With grief and illness, presence matters more than eloquence. The most helpful sentences are short: “I’m so sorry.” “I don’t know what to say, but I’m here.” “I’ve been thinking about you.” Avoid phrases that explain or minimise the pain: “Everything happens for a reason”, “At least…”, “I know exactly how you feel.”",
      "The psychologist Susan Silk and the mediator Barry Goldman proposed the <strong>“ring theory”</strong> (2013): draw a circle with the person most affected at the centre, and everyone else in rings around it. The rule is “comfort in, dump out”: send comfort towards the centre, and share your own distress only with people further out.",
      "For contested topics — politics, religion, injustice — <strong>frame</strong> the conversation before you enter it: “Can I ask how you see…? I’m genuinely curious.” Separate what you know from what you feel, and acknowledge experiences you haven’t lived: “I can’t speak to that experience, but I want to understand it.”",
      "Audre Lorde wrote that “your silence will not protect you” (1977). Silence is sometimes the respectful choice — but avoiding someone in pain, or a hard topic at work, often hurts more than an imperfect sentence said with care."
    ],
    phrases: [
      { en: "I’m so sorry — I can’t imagine what you’re going through.", tone: "Compassionate", note: "Sympathy without claiming to understand fully." },
      { en: "I don’t know what to say, but I’m here.", tone: "Honest, warm", note: "Better than silence — or a cliché." },
      { en: "If you ever want to talk — or not talk — I’m around.", tone: "Gentle", note: "Offers support without pressure." },
      { en: "Can I ask how you see it? I’m genuinely curious.", tone: "Open", note: "Frames a sensitive conversation as curiosity, not debate." },
      { en: "I can’t speak to that experience, but I want to understand it.", tone: "Respectful", note: "Acknowledges the limits of your perspective." }
    ],
    tip: "Presence over eloquence. Comfort in, dump out."
  },
  vocab: [
    V("sensitive", "SEN-si-tiv", "adjective", "Needing to be handled carefully because it may cause upset or offence; also, easily affected by others’ feelings.", "Two senses: a sensitive topic, a sensitive person. Remember that “sensible” means reasonable — a classic false friend.", ["delicate", "touchy", "thorny"], "“Delicate” suggests care is needed. “Touchy” is informal and suggests people get upset easily. “Thorny” means complicated and difficult. “Sensitive” is the neutral, professional word.", "Pay is a sensitive topic — let’s discuss it one-to-one.", "— Can I ask about the layoffs?\n— It’s sensitive, but yes — I’ll tell you what I can.", "Name a sensitive topic at work, and how you would raise it."),
    V("tactful", "TAKT-ful", "adjective", "Careful not to offend or upset people, especially in difficult situations.", "Noun: tact (“She has a lot of tact”). Opposite: tactless.", ["diplomatic", "discreet", "considerate"], "“Diplomatic” suggests managing relationships skilfully. “Discreet” means keeping things private. “Considerate” is general kindness. “Tactful” means choosing your words carefully to avoid hurting someone.", "He was tactful enough not to mention the divorce.", "— How do I tell her the report isn’t good enough?\n— Be honest, but tactful — start with what works.", "Rewrite a blunt piece of news tactfully."),
    V("frame", "fraym", "verb", "To present or express something in a particular way, which shapes how people understand it.", "A key communication word: how you frame a question shapes the answer. Noun: framing.", ["present", "phrase", "position"], "“Present” is general. “Phrase” is about the exact words. “Position” is strategic. “Frame” is about the perspective or context you give.", "She framed the change as an opportunity rather than a cut.", "— How should I raise the budget issue?\n— Frame it as a choice between two priorities, not a complaint.", "Frame a difficult question about a sensitive topic."),
    V("condolences", "kun-DOH-lun-siz", "noun (plural)", "Expressions of sympathy to someone whose relative or friend has died.", "Formal and usually plural: “My condolences.” “Please accept my sincere condolences.” In speech, “I’m so sorry for your loss” is warmer.", ["sympathy", "commiserations", "support"], "“Sympathy” is general (“With deepest sympathy”). “Commiserations” are for disappointments, not deaths. “Support” is broader. “Condolences” are specifically for bereavement.", "I sent my condolences to her family.", "— I heard about your father.\n— Thank you.\n— I’m so sorry. If there’s anything I can do, just tell me.", "Write a short message of condolence to a colleague."),
    V("tread carefully", "tred KAIR-fuh-lee", "phrase", "To act or speak with great care because a situation is sensitive.", "A metaphor of walking on dangerous ground. Related: “tread lightly”; “walk on eggshells” (anxious, excessive care).", ["proceed with caution", "tread lightly", "be diplomatic"], "“Proceed with caution” is formal. “Tread lightly” is similar. “Walk on eggshells” suggests nervous, excessive care. “Tread carefully” is wise caution.", "We need to tread carefully — the team is still upset about the restructure.", "— Should I mention the reorganisation?\n— Tread carefully. Ask how they’re feeling first.", "Describe a situation at work where you need to tread carefully.")
  ],
  culture: "lorde",
  cultureNote: "Lorde’s line is not an instruction to speak about everything — it is a reminder that silence has costs too. The art is choosing when to speak, and how to speak with care.",
  sayBetter: {
    basic: "Sorry about your mother. Everything happens for a reason.",
    levels: [
      ["Level 1", "I’m sorry about your mother.", "Sincere — and without the cliché."],
      ["Level 2", "I’m so sorry about your mother. I can’t imagine how hard this is.", "Sympathy without claiming to understand."],
      ["Level 3", "I’m so sorry about your mother. I don’t really know what to say — but I’m here, and I’ve been thinking about you.", "Honest about not knowing; present."],
      ["Level 4", "I’m so sorry about your mother. I don’t know what to say — but I’ve been thinking of you all week. Please don’t worry about Thursday’s deadline; I’ve covered it. And if you ever want to talk about her — or not talk at all — I’m around.", "Presence, a concrete act of help, and an open door without pressure."]
    ],
    prompt: "Write a Level 4 message to a colleague who is going through something difficult."
  },
  exercise: {
    title: "Comfort in, dump out",
    instructions: "Rewrite each well-meant but unhelpful sentence.",
    items: [
      { q: "“I know exactly how you feel — my dog died last year.”", a: "I can’t imagine exactly what you’re feeling. I’m so sorry — I’m here if you want to talk." },
      { q: "“At least you have other children.”", a: "I’m so sorry. There are no words for a loss like this." },
      { q: "“Everything happens for a reason.”", a: "I’m so sorry this happened. It’s so unfair." },
      { q: "“You must be so strong — I could never cope!”", a: "You don’t have to be strong right now. What would help this week — food, time, company?" }
    ]
  },
  think: {
    q: "Is silence ever the right response?",
    angles: ["When has someone’s silence hurt you — or helped you?", "How are grief and illness talked about in your culture?", "When is it better not to raise a political topic at work?"]
  },
  express: { prompt: "Write a short message (80–120 words) to someone going through a hard time: acknowledge it, don’t minimise it, offer something concrete, and leave the door open." },
  speak: {
    prompt: "A colleague’s parent has died. What do you say — and what do you avoid saying?", seconds: 60,
    structure: ["The first sentence you would say", "What you would avoid — and why", "A concrete offer of help", "How you would follow up a week later", "What you have learned from your own experience"]
  },
  recall: [
    { q: "Day 54: How do you receive a compliment gracefully?", a: "“Thank you — that’s very kind of you.” Don’t deflect; you can share the credit." },
    { q: "Day 52: What does “composed” mean?", a: "Calm and in control of your feelings, especially under pressure." },
    { q: "Day 32: Give a phrase that reflects someone’s feeling.", a: "“It sounds like you felt…” or “That must have been really hard.”" }
  ],
  reflect: "Who in your life is carrying something heavy right now? What small thing could you do this week?",
  deep: {
    title: "Read: Audre Lorde, “The Transformation of Silence into Language and Action” (1977)",
    body: "A short, powerful talk, collected in Sister Outsider (1984). Lorde wrote it after a cancer scare — and asks what we are afraid of saying.",
    prompt: "Write 150 words: what have you been silent about — and what would it cost to say it, with care?"
  }
};

TAW.lessons[57] = {
  day: 57, title: "Stories with tension", kicker: "Communication · Suspense",
  cats: ["communication", "cinema"], skills: ["articulation", "conversation"], difficulty: "Intermediate", minutes: 30,
  why: "Tension is what makes people lean in. Whether you are telling a story at dinner or presenting a turnaround to the board, setting up the stakes and delaying the resolution keeps attention — and makes the ending matter.",
  learn: {
    body: [
      "Alfred Hitchcock explained the difference between <strong>surprise</strong> and <strong>suspense</strong> with a bomb under a table. If it explodes without warning, the audience gets fifteen seconds of surprise. If the audience knows the bomb is there and the characters don’t, you get fifteen minutes of suspense. Information creates tension.",
      "Tension needs <strong>stakes</strong> — what could be won or lost — and <strong>uncertainty</strong>. “I had a presentation” has no tension. “I had ten minutes to convince the board, and if they said no, the whole team would be cut” has both.",
      "Let the story <strong>unfold</strong>: don’t reveal the ending at the start. Use time markers (“With two minutes left…”), questions in your listener’s mind (“…and then my laptop died”), and a pause before the <strong>twist</strong>. “Just as…” and “For a moment, I thought…” are classic tension builders.",
      "In business storytelling the same structure works: situation, complication, resolution. “We were growing 20% a year (situation). Then our main supplier went bankrupt (complication). Here’s how we rebuilt the supply chain in six weeks (resolution).” The complication is what makes people care about the solution."
    ],
    phrases: [
      { en: "What I didn’t know was…", tone: "Suspenseful", note: "Gives the listener information the character lacked." },
      { en: "And then, just as…", tone: "Dramatic", note: "The classic moment before the twist." },
      { en: "For a moment, I thought…", tone: "Tense", note: "Shares the fear — so the listener feels it." },
      { en: "With two minutes left…", tone: "Urgent", note: "A ticking clock raises the stakes." },
      { en: "And that’s when everything changed.", tone: "Pivotal", note: "Signals the turning point." }
    ],
    tip: "Raise the stakes, delay the answer — then land it."
  },
  vocab: [
    V("suspense", "suh-SPENS", "noun", "A feeling of excited or anxious uncertainty about what will happen.", "Hitchcock’s territory. “Keep someone in suspense” means make them wait to find out.", ["tension", "anticipation", "uncertainty"], "“Tension” is the general strain. “Anticipation” is looking forward to something. “Uncertainty” is not knowing. “Suspense” is the pleasurable, anxious wait for the outcome.", "Don’t keep me in suspense — did you get the job?", "— And then the CEO opened the envelope…\n— Stop! The suspense is killing me.", "Write the first line of a story that creates suspense."),
    V("stakes", "stayks", "noun (plural)", "What can be won or lost in a situation.", "“High stakes”, “the stakes are high”, “raise the stakes” — originally from gambling.", ["risk", "consequences", "what’s at stake"], "“Risk” is the possibility of loss. “Consequences” are results. “What’s at stake” is the phrase version. “Stakes” emphasises what you could win or lose.", "The stakes were high: if the pilot failed, the programme would close.", "— Why were you so nervous?\n— The stakes were huge — the whole contract depended on it.", "Describe a high-stakes moment in your career."),
    V("unfold", "un-FOHLD", "verb", "(Of events or a story) to develop or be revealed gradually.", "Elegant for narrative and news: “as events unfolded”, “the story unfolds slowly”.", ["develop", "evolve", "play out"], "“Develop” is general. “Evolve” suggests gradual change. “Play out” means happen through to the end. “Unfold” suggests gradual revelation, like opening a folded sheet of paper.", "We watched the crisis unfold in real time on the dashboard.", "— What happened next?\n— It unfolded over three days — I’ll tell you everything.", "Describe something that unfolded slowly at work."),
    V("twist", "twist", "noun", "An unexpected development in a story or situation.", "“Plot twist” is also used playfully for real life: “Plot twist: the meeting was cancelled.”", ["turn", "surprise", "reversal"], "A “turn” is a change of direction. A “surprise” is anything unexpected. A “reversal” is a complete change to the opposite. A “twist” is a clever, unexpected change in a story.", "The twist was that the “competitor” turned out to be our own subsidiary.", "— Did they sign?\n— Here’s the twist: they wanted to buy the whole company.", "Tell a real situation that had a twist."),
    V("cliffhanger", "KLIF-hang-er", "noun", "An exciting, uncertain ending to part of a story, which makes people want to know what happens next.", "From early film serials whose heroes were left hanging from cliffs. Used for TV series — and, playfully, for real life.", ["teaser", "open ending", "hook"], "A “teaser” is a preview that creates interest. An “open ending” leaves the outcome unresolved. A “hook” grabs attention at the start. A “cliffhanger” stops at the moment of greatest tension.", "The episode ended on a cliffhanger, so of course we watched the next one.", "— What did the board decide?\n— They’ll tell us on Monday. Total cliffhanger.", "End a two-sentence story with a cliffhanger.")
  ],
  culture: "hitchcock",
  cultureNote: "Hitchcock’s bomb is a lesson for every presenter: tell the audience what’s at stake before you tell them how it ended. Information, not surprise, creates attention.",
  sayBetter: {
    basic: "I had a presentation and the computer stopped but it was OK.",
    levels: [
      ["Level 1", "My computer crashed during a presentation, but it was fine.", "The facts — no tension."],
      ["Level 2", "My computer crashed in the middle of a big presentation, but I managed.", "Some stakes."],
      ["Level 3", "I was presenting to the board, and just as I reached the key slide, my laptop died. For a moment, I froze.", "Stakes, timing and a moment of fear."],
      ["Level 4", "I had ten minutes to convince the board to keep our team. Just as I reached the slide with the numbers — the one everything depended on — the screen went black. For a moment, I thought it was over. Then I picked up a marker and drew the graph on the whiteboard. What I didn’t know was that the CFO had been waiting for exactly that: someone who knew the numbers by heart.", "High stakes, a ticking clock, delay, a twist — and a satisfying resolution."]
    ],
    prompt: "Tell a short story from your own life at Level 4 — with stakes, delay and a twist."
  },
  exercise: {
    title: "Add the tension",
    instructions: "Rewrite each flat sentence to create tension: add stakes, a time marker or a delay.",
    items: [
      { q: "“I arrived at the airport and caught my flight.”", a: "The gate was closing in twelve minutes, and I was still in the security queue behind a family of six. Just as they called my name for the final time…" },
      { q: "“We launched the website and it worked.”", a: "At midnight we pressed the button. For ten long seconds, nothing happened. Then the first order came in — from Japan." },
      { q: "“I asked for a raise and got it.”", a: "I’d rehearsed it twenty times. But when she said, “Before you start, I have some news,” my heart sank…" },
      { q: "“The client signed the contract.”", a: "The client said they needed one more night to think. What I didn’t know was that our competitor had just offered them 20% less…" }
    ]
  },
  think: {
    q: "Why do we enjoy feeling tense in stories?",
    angles: ["What is the most suspenseful film or book you know?", "Is tension in real life ever enjoyable?", "How could you use tension in a work presentation?"]
  },
  express: { prompt: "Write a true story (150–200 words) in which you didn’t know how things would turn out. Set the stakes early, delay the resolution, and end with what it taught you." },
  speak: {
    prompt: "Tell a story in which you didn’t know how things would turn out — and build the tension.", seconds: 90,
    structure: ["Set the scene quickly", "Establish the stakes: what could go wrong?", "A complication — with a time marker", "A moment of doubt: “For a moment, I thought…”", "The resolution — and what it meant"]
  },
  recall: [
    { q: "Day 55: What is the “ring theory”?", a: "The most affected person is at the centre: send comfort in, and share your own distress only outwards — “comfort in, dump out”." },
    { q: "Day 37: What are the four parts of an anecdote?", a: "Hook, scene, turn and point." },
    { q: "Day 5: What does “in hindsight” mean?", a: "Looking back, with knowledge you didn’t have at the time." }
  ],
  reflect: "Think of your next presentation. What is at stake — and does your audience know it?",
  deep: {
    title: "Watch: the opening of Hitchcock’s Rear Window (1954)",
    body: "Notice how much the camera tells you before anyone speaks — and how Hitchcock gives the audience information that the characters don’t have.",
    prompt: "Write 150 words: how could you use Hitchcock’s “bomb under the table” in a business presentation?"
  }
};

TAW.lessons[58] = {
  day: 58, title: "Conversation across cultures", kicker: "Conversation · Culture",
  cats: ["conversation", "culture"], skills: ["conversation", "culture"], difficulty: "Intermediate", minutes: 30,
  why: "Directness, silence, interruptions, small talk and politeness all differ across cultures. In international teams, many conflicts aren’t about ideas at all — they’re about style. Noticing and adapting is a senior skill.",
  learn: {
    body: [
      "The anthropologist Edward T. Hall distinguished <strong>high-context</strong> cultures, where much of the meaning lies in context, relationships and what isn’t said (Japan, much of Latin America and the Arab world), from <strong>low-context</strong> cultures, where meaning is explicit and carried by the words (the United States, Germany, the Netherlands). Neither is better; misunderstandings happen in between.",
      "Erin Meyer’s <em>The Culture Map</em> (2014) adds a crucial nuance: cultures differ on several scales at once. The Dutch are very direct with negative feedback, for example, while the British — explicit in many ways — use understatement for criticism: “quite good” may mean disappointing (try the Decode drills in the Practice Lab).",
      "Silence and interruption differ too. In Finland or Japan, a pause may signal respect and reflection; in much of Latin America or southern Europe, overlapping speech can signal engagement (remember Tannen, Day 40). A long silence after your proposal may not be rejection — it may be thinking.",
      "The best stance is curious and humble: notice, don’t judge, and when in doubt, ask. “Where I come from, we tend to be quite expressive — please tell me if I come across too strongly.” Naming the difference out loud often dissolves it."
    ],
    phrases: [
      { en: "Where I come from,…", tone: "Personal, open", note: "Shares your cultural lens without judging others." },
      { en: "I didn’t realise that… — thanks for explaining.", tone: "Humble", note: "Turns a misunderstanding into learning." },
      { en: "It was a cultural thing, I think.", tone: "Diplomatic", note: "Explains a misunderstanding without blaming anyone." },
      { en: "Please tell me if I come across too strongly.", tone: "Self-aware", note: "Invites feedback on your style." },
      { en: "How would this usually be handled here?", tone: "Curious", note: "Asks before assuming." }
    ],
    tip: "Notice, don’t judge — and when in doubt, ask."
  },
  vocab: [
    V("high-context", "hy-KON-tekst", "adjective", "(Of a culture or communication) relying heavily on shared understanding, relationships and what is implied rather than said.", "The opposite is low-context: explicit, precise, “say what you mean”. Both terms come from Edward T. Hall.", ["implicit", "indirect", "nuanced"], "“Implicit” means suggested, not stated. “Indirect” means not going straight to the point. “Nuanced” means with subtle differences. “High-context” describes a whole communication culture in which context carries meaning.", "In a high-context culture, “we’ll see” can be a polite no.", "— He never actually said no.\n— It’s quite high-context there — the silence was the no.", "Describe a high-context moment you have experienced."),
    V("direct", "di-REKT or dy-REKT", "adjective", "Saying exactly what you mean, clearly and without hesitation.", "Positive in some cultures (honest, efficient), negative in others (rude). Adverb: directly.", ["straightforward", "frank", "blunt"], "“Straightforward” is clear and simple. “Frank” is honest, often about difficult things. “Blunt” is direct to the point of rudeness. “Direct” is neutral — its value depends on the culture.", "Our Dutch colleagues are very direct — it’s not personal.", "— Was she rude?\n— Not rude — just direct. That’s how feedback works in her team.", "Compare how direct people are in your culture and in another."),
    V("courteous", "KUR-tee-us", "adjective", "Polite, respectful and considerate in manner.", "Slightly formal. Noun: courtesy. “Common courtesy” means basic good manners.", ["polite", "civil", "gracious"], "“Polite” is everyday. “Civil” is the minimum of politeness, sometimes cold. “Gracious” is warm and generous. “Courteous” is respectful, careful politeness.", "The hotel staff were unfailingly courteous.", "— He replies to every email within a day.\n— That’s courteous — and rare.", "Describe a courteous gesture you noticed in another culture."),
    V("misinterpret", "mis-in-TUR-prit", "verb", "To understand something wrongly.", "Neutral and useful for calming things down: “I think I misinterpreted your email.”", ["misunderstand", "misread", "get the wrong idea"], "“Misunderstand” is the most general. “Misread” is about signals or situations. “Get the wrong idea” is informal. “Misinterpret” suggests getting the meaning or intention wrong.", "I misinterpreted her silence as disagreement — she was just thinking.", "— He thought you were angry.\n— He misinterpreted my directness.", "Describe a time you misinterpreted something across cultures."),
    V("adapt", "uh-DAPT", "verb", "To change your behaviour to suit a new situation or audience.", "“Adapt to” a culture; “adapt your style”. Not the same as “adopt” (take something as your own).", ["adjust", "accommodate", "flex"], "“Adjust” means make small changes. “Accommodate” means make room for others’ needs. “Flex” is informal corporate English. “Adapt” means change to fit the situation.", "Good leaders adapt their style to the person in front of them.", "— Is it hard working with the Tokyo team?\n— I had to adapt — fewer emails, more patience.", "Write about how you adapt your style for a different audience.")
  ],
  culture: "hall",
  cultureNote: "Hall’s distinction gives you words for something you probably feel every day in international meetings. Naming it — “I think we have different styles here” — turns friction into understanding.",
  sayBetter: {
    basic: "The Germans in my team are rude, they say everything is wrong.",
    levels: [
      ["Level 1", "My German colleagues are very direct.", "A neutral description instead of a judgement."],
      ["Level 2", "My German colleagues give very direct feedback — it surprised me at first.", "Shares your reaction honestly."],
      ["Level 3", "My German colleagues are very direct with feedback. At first I took it personally, but I realised it’s a sign of respect — they’re focused on the work.", "Interpretation and growth."],
      ["Level 4", "Where I come from, criticism usually comes wrapped in a lot of warmth, so the first time my German colleague said “This doesn’t work,” I was shocked. I’ve since realised it was almost a compliment: he took my work seriously enough to be honest. Now I ask him for feedback first — and I tell him when I need a bit more context.", "Your lens, the misunderstanding, a reinterpretation and a practical adaptation."]
    ],
    prompt: "Describe a cultural difference you have experienced at work, at Level 4."
  },
  exercise: {
    title: "Decode and adapt",
    instructions: "For each situation, write what might be happening culturally — and what you would say or do.",
    items: [
      { q: "After your proposal, your Japanese colleagues are silent for ten seconds.", a: "They may be reflecting rather than rejecting. I’d wait, then say: “I’d value your thoughts — perhaps after the meeting, if that’s easier?”" },
      { q: "A Dutch colleague says: “Your plan has three big problems.”", a: "Directness, not hostility. I’d say: “Thanks for being straight with me — which one worries you most?”" },
      { q: "A British manager calls your work “quite interesting”.", a: "Possibly mild disappointment. I’d ask: “What would make it stronger for you?”" },
      { q: "An American colleague jumps straight into business without any small talk.", a: "Efficiency, not coldness. I’d match the pace — and add one warm sentence at the end." }
    ]
  },
  think: {
    q: "Is your culture high-context or low-context? How has that affected you abroad?",
    angles: ["Which of your habits surprised people from other cultures?", "Which foreign habit have you adopted?", "Is there a misunderstanding you still think about?"]
  },
  express: { prompt: "Write 150 words about a misunderstanding caused by cultural differences in communication: what happened, how you interpreted it then, and how you understand it now." },
  speak: {
    prompt: "Describe a misunderstanding caused by cultural differences in communication.", seconds: 90,
    structure: ["The situation", "What was said — or not said", "How you interpreted it at the time", "What you realised later", "What you do differently now"]
  },
  recall: [
    { q: "Day 57: What is the difference between surprise and suspense, according to Hitchcock?", a: "Surprise: the bomb explodes without warning. Suspense: the audience knows the bomb is there — information creates tension." },
    { q: "Day 40: What did Tannen observe about interruptions?", a: "Some speakers treat overlapping as enthusiasm (a high-involvement style); others hear it as rudeness." },
    { q: "Day 20: What matters more for intelligibility than a native accent?", a: "Word stress, sentence stress, pauses and thought groups." }
  ],
  reflect: "In your next international meeting, notice one difference in style. Did you judge it — or decode it?",
  deep: {
    title: "Read: Erin Meyer, The Culture Map (2014)",
    body: "Read the chapter on evaluating (negative feedback) or on persuading. Meyer is practical, funny and full of real examples from international teams.",
    prompt: "Write 150 words placing your own culture on one of Meyer’s scales — and describing a colleague from a different point on it."
  }
};

TAW.lessons[59] = {
  day: 59, title: "Being memorable", kicker: "Rhetoric · Ethos, pathos, logos",
  cats: ["rhetoric", "communication"], skills: ["articulation", "thinking"], difficulty: "Intermediate", minutes: 35,
  why: "Most of what we hear in meetings and talks is forgotten within days. Memorable speakers don’t just inform: they combine character, emotion and reason, and they leave people with one clear takeaway. This lesson is the bridge from conversation to persuasion.",
  learn: {
    body: [
      "Aristotle’s <em>Rhetoric</em> named three modes of persuasion. <strong>Ethos</strong>: your character and credibility — why should we listen to you? <strong>Pathos</strong>: emotion — why should we care? <strong>Logos</strong>: reason and evidence — why is it true? Memorable speakers use all three; forgettable ones usually rely on logos alone.",
      "Make it stick. In <em>Made to Stick</em> (2007), Chip and Dan Heath proposed that memorable ideas tend to be Simple, Unexpected, Concrete, Credible, Emotional and told as Stories. You have been practising most of these all month: examples (Day 41), anecdotes (Day 37), tension (Day 57).",
      "End with one <strong>takeaway</strong>. If people remember a single sentence, what should it be? Say it early, illustrate it, and repeat it at the end in slightly different words. Repetition that feels deliberate is a sign of a confident speaker.",
      "Be <strong>distinctive</strong>. A specific image, a surprising number or a personal detail is remembered far longer than a general claim: “We lose a customer every four minutes” beats “Churn is high.” And your own voice — your accent, your story, your second language — is part of what makes you memorable, not something to hide."
    ],
    phrases: [
      { en: "Here’s why it matters…", tone: "Purposeful", note: "Links logos to pathos." },
      { en: "Imagine…", tone: "Vivid", note: "Invites the audience into a scene — pathos." },
      { en: "The evidence is clear: …", tone: "Confident", note: "Signals logos." },
      { en: "In my years in operations, I’ve seen…", tone: "Credible", note: "Establishes ethos — briefly." },
      { en: "If you remember one thing, remember this: …", tone: "Memorable", note: "Delivers the takeaway." }
    ],
    tip: "Character, emotion, reason — and one sentence they’ll remember."
  },
  vocab: [
    V("distinctive", "di-STINK-tiv", "adjective", "Easy to recognise because it is different from others.", "Positive: a distinctive voice, a distinctive style. Not the same as “distinguished” (respected, elegant).", ["unique", "characteristic", "recognisable"], "“Unique” means the only one. “Characteristic” means typical of someone. “Recognisable” means you can identify it. “Distinctive” means it stands out and is clearly yours.", "Her distinctive style — short sentences, long pauses — makes every talk memorable.", "— How do you remember all the speakers?\n— The good ones have something distinctive.", "Describe something distinctive about how you communicate."),
    V("takeaway", "TAYK-uh-way", "noun", "The main point or lesson that someone remembers from a talk, meeting or text.", "Business English: “the key takeaway”. (In British English, a takeaway is also food you buy to eat at home!)", ["key point", "lesson", "message"], "A “key point” is important. A “lesson” is something learned. A “message” is what you want to communicate. A “takeaway” is what the audience actually keeps.", "The key takeaway is simple: fix returns before you buy more traffic.", "— What was your takeaway from the conference?\n— That everyone is struggling with AI adoption, not with the technology.", "Write the one-sentence takeaway of your current project."),
    V("credible", "KRED-i-bul", "adjective", "Able to be believed; trustworthy.", "Ethos in one word. Noun: credibility. “A credible plan”, “a credible witness”.", ["believable", "convincing", "plausible"], "“Believable” is general. “Plausible” means it seems possible (Day 24). “Convincing” means it persuades you. “Credible” means it deserves to be believed — often because of evidence or reputation.", "Data from your own customers makes the case far more credible.", "— Will the board accept it?\n— Only if the numbers are credible.", "What makes a speaker credible to you? Write two sentences."),
    V("rhetorical", "ri-TOR-i-kul", "adjective", "Relating to the art of persuasive speaking or writing; (of a question) asked for effect, not to get an answer.", "“A rhetorical question”: “Who doesn’t want a faster checkout?” Note that “rhetoric” can also be negative — empty, manipulative language.", ["persuasive", "oratorical", "stylistic"], "“Persuasive” focuses on the effect. “Oratorical” is about formal public speaking. “Stylistic” is about style. “Rhetorical” is about the techniques of persuasion.", "She opened with a rhetorical question that made the whole room nod.", "— Was that a real question?\n— No, it was rhetorical!", "Write a rhetorical question to open a talk about your work."),
    V("punchy", "PUN-chee", "adjective", "Short, direct and effective; having impact.", "Informal and positive for writing and speaking: a punchy headline, a punchy summary.", ["snappy", "crisp", "forceful"], "“Snappy” is quick and lively. “Crisp” is clean and clear. “Forceful” is strong, sometimes aggressive. “Punchy” is short, with impact.", "Make the summary punchier — three sentences, not ten.", "— Is my opening OK?\n— It’s good, but it could be punchier. Start with the number.", "Rewrite a long sentence about your job to make it punchy.")
  ],
  culture: "rhetoric-aristotle",
  cultureNote: "Aristotle wrote more than two thousand years ago, but every great talk you have heard uses his three appeals. A quick check before any presentation: where is my ethos, my pathos, my logos?",
  sayBetter: {
    basic: "Our customer service is not good and we need to improve it.",
    levels: [
      ["Level 1", "We need to improve our customer service.", "Clear, but forgettable."],
      ["Level 2", "We need to improve customer service — our satisfaction scores have dropped 15%.", "Logos: evidence."],
      ["Level 3", "Imagine waiting forty minutes on hold to change an address. That’s our average customer’s experience — and satisfaction has dropped 15%.", "Pathos plus logos."],
      ["Level 4", "Imagine waiting forty minutes on hold just to change an address. That’s what our customers live through every day — and in all my years in operations, I’ve never seen satisfaction fall this fast: 15% in a single quarter. If you remember one thing today, remember this: every minute on hold is a customer deciding whether to stay.", "Pathos, ethos, logos — and a memorable takeaway."]
    ],
    prompt: "Write a Level 4 opening for a talk about an issue you care about at work."
  },
  exercise: {
    title: "Ethos, pathos, logos",
    instructions: "For each topic, write one sentence for each appeal.",
    items: [
      { q: "Persuading your team to adopt a new tool", a: "Ethos: I’ve used it on my own projects for six months. Pathos: imagine Fridays without the spreadsheet panic. Logos: it cut reporting time by 40% in the pilot." },
      { q: "Persuading a friend to read a book you love", a: "Ethos: I’m picky, and I’ve read it three times. Pathos: I called my mother the day I finished it. Logos: it’s short — you’ll finish it in a weekend." },
      { q: "Persuading the board to invest in training", a: "Ethos: I’ve led three transformations, and training made the difference each time. Pathos: our people are afraid of being left behind by AI. Logos: teams that were trained adopted the new system twice as fast." },
      { q: "Persuading your city to plant more trees", a: "Ethos: as someone who walks to work every day… Pathos: picture children walking to school in the shade. Logos: tree-lined streets can be several degrees cooler in summer." }
    ]
  },
  think: {
    q: "Who is the most memorable speaker you have heard — and why?",
    angles: ["Was it what they said, or how they said it?", "Which appeal did they rely on most?", "What would you like people to remember about the way you speak?"]
  },
  express: { prompt: "Write a one-minute talk (150 words) persuading people to do something you believe in. Mark where you use ethos, pathos and logos — and finish with a one-sentence takeaway." },
  speak: {
    prompt: "Persuade me to read your favourite book — using ethos, pathos and logos.", seconds: 90,
    structure: ["Ethos: why you are a credible guide", "Pathos: a moment when it made you feel something", "Logos: concrete reasons", "A distinctive detail or image", "A one-sentence takeaway"]
  },
  recall: [
    { q: "Day 58: What is a high-context culture?", a: "One in which much of the meaning lies in context, relationships and what isn’t said." },
    { q: "Day 57: What are the “stakes” in a story?", a: "What can be won or lost — what makes people care." },
    { q: "Day 29: Give two words that help you tell your life story.", a: "For example: formative, pivotal, “to this day”, redemption." }
  ],
  reflect: "If people remembered one sentence from the way you spoke this month, what would you want it to be?",
  deep: {
    title: "Read: Chip and Dan Heath, Made to Stick (2007)",
    body: "A practical, story-filled book about why some ideas survive and others die. Start with the introduction and the chapter on being concrete.",
    prompt: "Take an idea from your work and rewrite it using at least three of the six principles: simple, unexpected, concrete, credible, emotional, story."
  }
};
})();
