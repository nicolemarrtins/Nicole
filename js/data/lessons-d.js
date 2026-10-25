/* Days 22–29, fully written. (Day 30 is the milestone, built from TAW.milestones.) */
(function () {
const V = TAW.V;

TAW.lessons[22] = {
  day: 22, title: "Talking about relationships", kicker: "English · Relationships",
  cats: ["english", "philosophy"], skills: ["english", "conversation", "culture"], difficulty: "Foundation", minutes: 30,
  why: "Friends, partners, family, colleagues: relationships are what most of life — and most conversation — is about. Talking about them well requires warmth, precision and discretion: saying something true without oversharing or gossiping.",
  learn: {
    body: [
      "Relationships change, and English has a rich vocabulary for the stages: you <strong>hit it off</strong> or <strong>click</strong> with someone; you <strong>build rapport</strong>; you become <strong>close</strong>; you might <strong>drift apart</strong>, <strong>fall out</strong> (argue and stop speaking) or <strong>reconnect</strong>.",
      "Aristotle gave friendship two whole books of the <em>Nicomachean Ethics</em> (Books VIII and IX). He distinguished three kinds: friendships of <strong>utility</strong> (based on usefulness — a colleague you get along with), of <strong>pleasure</strong> (based on enjoyment — a fun party friend), and of <strong>virtue</strong> or character (based on admiring who the other person is). The first two fade when the usefulness or pleasure ends; the third is rare, slow to form and lasting. He described such a friend as “another self”.",
      "Modern research adds numbers. The anthropologist Robin Dunbar argued that humans can maintain only around 150 meaningful relationships, organised in layers — roughly 5 very close people, 15 close friends, 50 good friends and 150 meaningful contacts. The exact numbers are debated, but the idea of layers is useful.",
      "Discretion matters. Articulate people talk about relationships in ways that respect the other person: “We’ve drifted apart a little — I think we both changed” is generous; “She became so boring” is not."
    ],
    phrases: [
      { en: "We clicked straight away.", tone: "Warm, informal", note: "For an instant connection." },
      { en: "We’ve drifted apart a little.", tone: "Gentle, honest", note: "Describes distance without blame." },
      { en: "There’s a mutual respect between us.", tone: "Mature", note: "Useful for colleagues or exes." },
      { en: "She’s one of the few people I can be completely myself with.", tone: "Intimate", note: "Describes an Aristotelian friendship without jargon." },
      { en: "We don’t see each other often, but when we do, it’s as if no time has passed.", tone: "Affectionate", note: "A very common, very natural expression." }
    ],
    tip: "Speak about people as if they might overhear you."
  },
  vocab: [
    V("rapport", "ra-POR (the t is silent)", "noun", "A friendly relationship in which people understand each other and communicate well.", "Often used at work: building rapport with clients, colleagues, students.", ["connection", "chemistry", "understanding"], "“Chemistry” is instinctive, often romantic. “Connection” is general. “Rapport” is a smooth, mutual understanding — and it can be built deliberately.", "Good teachers build rapport before they correct anyone.", "— How did the interview go?\n— Really well. We built a good rapport quickly.", "Describe someone you have a natural rapport with."),
    V("drift apart", "drift uh-PART", "phrasal verb", "To gradually become less close, without a specific conflict.", "Gentle and blameless — the image of two boats slowly moving away.", ["grow apart", "lose touch", "fall out"], "“Lose touch” means stopping contact. “Grow apart” is very similar to drift apart. “Fall out” means arguing and stopping speaking — there is a conflict. “Drift apart” has no villain.", "We were inseparable at school, but we drifted apart after university.", "— Do you still see Ana?\n— Not really. We didn’t fall out — we just drifted apart.", "Write about a friendship that drifted — without blaming anyone."),
    V("mutual", "MYOO-choo-ul", "adjective", "Felt or done by each of two or more people towards the other(s); shared.", "“A mutual friend” = someone you both know. “The feeling is mutual” = I feel the same.", ["shared", "reciprocal", "common"], "“Shared” is general. “Common” means belonging to both (common interests). “Reciprocal” is formal — given and returned. “Mutual” is about feelings or actions that go both ways.", "We met through a mutual friend at a dinner party.", "— I really enjoyed working with you.\n— The feeling’s mutual!", "Use “mutual” in two different ways."),
    V("devoted", "di-VOH-tid", "adjective", "Very loving and loyal; giving a lot of time and attention to someone or something.", "Strongly positive. Can describe people (a devoted mother) or commitments (devoted to her work).", ["loyal", "dedicated", "committed"], "“Loyal” means faithful, not betraying. “Dedicated” is often about work or a cause. “Committed” suggests a decision. “Devoted” is about deep love and care.", "My grandparents were devoted to each other for sixty years.", "— Does he still visit his mother every day?\n— Every day. He’s completely devoted to her.", "Describe someone devoted to a person or a cause."),
    V("close-knit", "klohs-NIT", "adjective", "(Of a group) whose members are closely connected and support each other.", "From knitting — threads woven tightly together. Used for families, communities, teams.", ["tight-knit", "united", "intimate"], "“Tight-knit” is a near synonym. “United” suggests agreement. “Intimate” is about personal closeness. “Close-knit” describes the whole group’s bond.", "I grew up in a close-knit neighbourhood where everyone knew your grandmother.", "— Is it hard to join that team?\n— A bit — they’re very close-knit. But they’re kind.", "Describe a close-knit group you belong to — or wish you did.")
  ],
  culture: "aristotle-friendship",
  cultureNote: "Aristotle’s three kinds of friendship give you a calm, non-judgemental way to understand why some friendships fade: not because anyone failed, but because the friendship was built on utility or pleasure, which change.",
  sayBetter: {
    basic: "We were friends but now we are not friends because she changed.",
    levels: [
      ["Level 1", "We used to be close, but not anymore.", "Clearer, but abrupt."],
      ["Level 2", "We used to be very close, but we’ve drifted apart.", "Gentle, no blame."],
      ["Level 3", "We were inseparable at university, but we’ve drifted apart — I think we both changed in different directions.", "Shared responsibility."],
      ["Level 4", "We were inseparable at university, but I think it was a friendship built on that time in our lives. Once that ended, we drifted apart — no drama, just different lives. I still think of her very fondly.", "An Aristotelian insight, generosity and warmth."]
    ],
    prompt: "Describe a changed relationship at Level 4."
  },
  exercise: {
    title: "Utility, pleasure or virtue?",
    instructions: "Classify each friendship in Aristotle’s terms and explain why in one sentence.",
    items: [
      { q: "A colleague you have lunch with every day but never see outside work.", a: "Utility — the friendship depends on the shared workplace; it may fade if one of you leaves." },
      { q: "A friend you only see at parties, who always makes you laugh.", a: "Pleasure — based on enjoyment. Lovely, but it may not survive hard times." },
      { q: "A friend of twenty years who tells you uncomfortable truths and whom you deeply admire.", a: "Virtue — based on character and mutual admiration; rare and lasting." },
      { q: "A neighbour who waters your plants while you’re away.", a: "Mostly utility — though it could grow into something more." }
    ]
  },
  think: {
    q: "Which of your friendships are of utility, pleasure or virtue — in Aristotle’s terms? Is that a fair way to see them?",
    angles: ["Can a friendship of utility become one of virtue?", "Is it cynical to classify friends?", "How many people are in your closest layer of five?"]
  },
  express: { prompt: "Write about one important relationship in your life — how it began, how it changed, and what it means to you now. Be warm and discreet." },
  speak: {
    prompt: "Describe a friendship that has changed over time — what brought you together and what changed.", seconds: 90,
    structure: ["How you met — did you click?", "What held the friendship together", "What changed — gently", "What it is now", "What you’ve learned about friendship"]
  },
  recall: [
    { q: "Day 20: What matters more for intelligibility than a native accent?", a: "Word stress, sentence stress, pauses and thought groups." },
    { q: "Day 17: Name the trade-off in one of your decisions.", a: "Answer aloud — then add “On balance, …”" },
    { q: "Day 6: What makes a follow-up question powerful?", a: "It shows you listened, and it takes the conversation deeper." }
  ],
  reflect: "Who is in your closest circle of five? When did you last tell them what they mean to you?",
  deep: {
    title: "Read: Aristotle, Nicomachean Ethics, Book VIII",
    body: "Book VIII begins: “For without friends no one would choose to live, though he had all other goods.” Read the first few sections, where the three kinds of friendship are introduced.",
    prompt: "Write 200 words: do you agree that the best friendships are based on admiring someone’s character? What would you add?"
  }
};

TAW.lessons[23] = {
  day: 23, title: "Past experiences: narrative tenses", kicker: "English · Grammar for stories",
  cats: ["english", "literature"], skills: ["english", "articulation"], difficulty: "Foundation", minutes: 30,
  why: "When you tell stories about your past, tense control is what makes them easy to follow. Mixing tenses randomly makes listeners lose the thread. Today you master the four past forms that carry most personal storytelling.",
  learn: {
    body: [
      "<strong>Past simple</strong> moves the story forward: “I opened the door and saw her.” <strong>Past continuous</strong> paints the background: “It was raining and people were rushing home.” <strong>Past perfect</strong> goes further back: “I had never seen her before.” And <strong>used to / would</strong> describe habits that are no longer true: “Every summer we used to go to my grandmother’s. She would make us pancakes.”",
      "A key distinction: <em>used to</em> works for habits <strong>and</strong> states (“I used to live in Recife”, “I used to have long hair”). <em>Would</em> works only for repeated actions, not states — you can’t say “I would have long hair”. A natural pattern is to start with <em>used to</em> and continue with <em>would</em>: “We used to spend Sundays at the beach. My father would grill fish and my mother would read.”",
      "Memory is not a recording. Marcel Proust’s narrator, tasting a madeleine dipped in tea, is flooded by childhood memories he couldn’t reach by trying — what Proust called involuntary memory. Psychologists add a warning: memories are reconstructed each time we recall them (Month 4). Honest storytellers sometimes signal this: “At least, that’s how I remember it.”",
      "Mistakes to avoid: using the present perfect for finished past times (“I have been to Paris in 2019” → “I went to Paris in 2019”), and forgetting the past perfect when order matters (“When I arrived, the train left” means it left as you arrived; “the train had left” means you missed it)."
    ],
    phrases: [
      { en: "I used to…", tone: "Nostalgic", note: "For past habits and states." },
      { en: "We would… (every summer / on Sundays)", tone: "Storytelling", note: "Continues a past habit — very literary and warm." },
      { en: "By the time I…, I had already…", tone: "Precise", note: "Shows the order of past events." },
      { en: "I vaguely remember…", tone: "Honest", note: "For hazy memories." },
      { en: "At least, that’s how I remember it.", tone: "Self-aware", note: "Acknowledges memory’s unreliability — elegant and humble." }
    ],
    tip: "Simple moves the story. Continuous sets the scene. Perfect goes further back."
  },
  vocab: [
    V("vivid", "VIV-id", "adjective", "Producing very clear, strong and detailed images in the mind; very bright.", "Used for memories, dreams, descriptions, colours.", ["clear", "detailed", "intense"], "“Clear” is neutral. “Detailed” is about quantity of detail. “Intense” is about strength. “Vivid” is about lifelike brightness — you can almost see it.", "I have a vivid memory of my first day at school — the smell of new pencils.", "— Do you remember your grandfather?\n— Vividly. Especially his laugh.", "Describe one vivid childhood memory in a sentence."),
    V("recall", "ri-KAWL", "verb / noun", "To remember something deliberately; the ability to remember.", "Slightly more formal than “remember”, and suggests effort.", ["remember", "recollect", "bring to mind"], "“Remember” is general. “Recollect” is formal and suggests effort. “Bring to mind” is about something appearing in your thoughts. “Recall” emphasises deliberately retrieving a memory.", "I can’t recall exactly what she said, but I remember how it felt.", "— When did you last see him?\n— I can’t recall — maybe three years ago?", "Write a sentence contrasting what you recall and what you feel about a memory."),
    V("used to", "YOOST-tuh", "modal phrase", "Describes past habits or states that are no longer true.", "Pronounced “yoost tuh”, not “used two”. Don’t confuse with “be used to” (= be accustomed to).", ["would (for habits)", "formerly"], "“Would” works for repeated actions only. “Formerly” is formal. “Be used to” is completely different: “I’m used to the cold” = I’m accustomed to it.", "I used to hate reading; now I can’t sleep without a book.", "— Did you always live here?\n— No, I used to live by the sea. I miss it.", "Write two things you used to do and one thing you’re now used to."),
    V("vaguely", "VAYG-lee", "adverb", "Not clearly; slightly.", "Signals uncertainty honestly. Also: “vaguely familiar”, “vaguely uncomfortable”.", ["faintly", "dimly", "slightly"], "“Faintly” is about weakness of a sense. “Dimly” suggests darkness. “Slightly” is about degree. “Vaguely” is about lack of clarity.", "I vaguely remember a red car and a song on the radio.", "— Have we met before?\n— You look vaguely familiar…", "Write about something you vaguely remember."),
    V("linger", "LING-ger", "verb", "To stay longer than necessary or expected; to continue to exist.", "Beautiful for memories, smells, feelings: “The smell lingered for days.”", ["remain", "persist", "stay"], "“Remain” is neutral. “Persist” suggests stubbornness, often negative. “Stay” is everyday. “Linger” is slow, reluctant, often gently emotional.", "Some memories fade; others linger for a lifetime.", "— Why are you so quiet?\n— The film’s still lingering in my head.", "What memory or feeling lingers for you?")
  ],
  culture: "proust",
  cultureNote: "Proust shows that the past returns through the senses — a smell, a taste, a song. When you tell a memory, including the sensory trigger often makes it come alive.",
  sayBetter: {
    basic: "When I was child I go to my grandmother house and she make cakes.",
    levels: [
      ["Level 1", "When I was a child, I went to my grandmother’s house and she made cakes.", "Grammar fixed — but one-off events, not habits."],
      ["Level 2", "When I was a child, I used to go to my grandmother’s house, and she would make cakes.", "Habits expressed correctly."],
      ["Level 3", "Every Sunday we used to go to my grandmother’s. She would already have been baking for hours by the time we arrived.", "Habit + past perfect continuous for what came before."],
      ["Level 4", "Every Sunday we used to go to my grandmother’s. By the time we arrived, she’d have been baking for hours, and the whole street smelled of cinnamon. I still can’t smell cinnamon without being seven years old again — at least, that’s how I remember it.", "Habit, sequence, sensory detail, a Proustian trigger, and humility about memory."]
    ],
    prompt: "Tell a childhood habit at Level 4."
  },
  exercise: {
    title: "Fix the tenses",
    instructions: "Correct each sentence and explain the rule in a few words.",
    items: [
      { q: "I have been to Lisbon in 2019.", a: "I went to Lisbon in 2019. (Finished past time → past simple.)" },
      { q: "When I arrived at the station, the train left, so I had to wait an hour.", a: "When I arrived, the train had left. (It left before I arrived → past perfect.)" },
      { q: "When I was a child, I would have long hair.", a: "I used to have long hair. (“Would” isn’t used for states.)" },
      { q: "I walked home when it started to rain.", a: "I was walking home when it started to rain. (Background action interrupted → past continuous.)" },
      { q: "I am used to play the piano when I was young.", a: "I used to play the piano. (“Be used to” means “be accustomed to”.)" }
    ]
  },
  think: {
    q: "Are memories records of the past — or stories we keep rewriting?",
    angles: ["Do you and your siblings remember the same events differently?", "Has a memory ever changed meaning for you over time?", "Does it matter if a cherished memory isn’t accurate?"]
  },
  express: { prompt: "Write a childhood memory (6–8 sentences) using used to, would, the past continuous and the past perfect at least once each. Include one sensory trigger." },
  speak: {
    prompt: "Tell me about a childhood memory using “used to”, “would”, and the past perfect at least once.", seconds: 90,
    structure: ["A habit: “We used to…”", "Continue with “would…”", "One specific day — past simple and continuous", "Something that had happened before — past perfect", "What lingers now"]
  },
  recall: [
    { q: "Day 22: Aristotle’s three kinds of friendship?", a: "Utility, pleasure and virtue (character)." },
    { q: "Day 22: Difference between “drift apart” and “fall out”?", a: "Drift apart: gradual, no conflict. Fall out: argue and stop speaking." },
    { q: "Day 5: The five beats of a story?", a: "Situation, complication, turning point, change, meaning." }
  ],
  reflect: "Which memory do you return to most often? Why do you think it lingers?",
  deep: {
    title: "Read: the madeleine passage",
    body: "The madeleine episode is in the first volume of In Search of Lost Time (Swann’s Way, 1913), near the end of the “Overture” — about three pages. Lydia Davis’s translation is especially readable.",
    prompt: "Write about your own “madeleine”: a smell, taste or song that brings back the past. 150 words."
  }
};

TAW.lessons[24] = {
  day: 24, title: "Hypotheticals: “If I had…”", kicker: "English · Imagining",
  cats: ["english", "psychology"], skills: ["english", "thinking"], difficulty: "Intermediate", minutes: 30,
  why: "Imagining what might be, or what might have been, is one of the most human uses of language. Conditionals let you speculate, regret, plan and dream — and they’re essential for discussing ideas (“If everyone did that…”).",
  learn: {
    body: [
      "<strong>Second conditional</strong> — imaginary present or future: “If I lived by the sea, I’d swim every morning.” <strong>Third conditional</strong> — imaginary past: “If I had studied medicine, I would have become a doctor.” <strong>Mixed conditional</strong> — imaginary past with a present result: “If I had studied medicine, I would be a doctor now.”",
      "For elegance, use <strong>inversion</strong> instead of “if”: “Had I known, I would have called you.” “Were I in your position, I’d say no.” It sounds polished in writing and careful speech — use it occasionally, not constantly.",
      "Psychologists call imagining alternatives <strong>counterfactual thinking</strong>. In a famous 1995 study, Victoria Medvec, Scott Madey and Thomas Gilovich found that Olympic bronze medallists often looked happier than silver medallists. Why? The silver medallist imagines “If only I had won gold” (an <em>upward</em> counterfactual), while the bronze medallist imagines “I almost didn’t get a medal at all” (a <em>downward</em> one).",
      "The lesson for conversation: “what if” can be generous or painful. Used well, it explores possibilities. Used obsessively, it becomes regret."
    ],
    phrases: [
      { en: "If I had…, I would probably…", tone: "Reflective", note: "Mixed conditional — past cause, present result." },
      { en: "Had I known…, I would have…", tone: "Elegant", note: "Inversion — polished, slightly formal." },
      { en: "Conceivably, I could have…", tone: "Speculative", note: "Imagines a possibility without committing to it." },
      { en: "I don’t regret it, but I sometimes wonder…", tone: "Nuanced", note: "Balances acceptance and curiosity." },
      { en: "Imagine if…", tone: "Engaging", note: "Invites others into a hypothetical — great for conversation." }
    ],
    tip: "Imagine freely. Regret selectively."
  },
  vocab: [
    V("regret", "ri-GRET", "noun / verb", "A feeling of sadness about something you did or didn’t do; to feel this.", "“I regret doing” = I did it and I’m sorry. “I regret to say” = formal bad news.", ["remorse", "disappointment", "second thoughts"], "“Remorse” is deep guilt about wrongdoing. “Disappointment” is about unmet expectations. “Second thoughts” are doubts before or after a decision. “Regret” is sadness about a choice or missed chance.", "My only regret is not travelling more when I was younger.", "— Do you regret leaving?\n— Not at all. I regret not leaving sooner.", "Write about one regret — and one thing you don’t regret at all."),
    V("plausible", "PLAW-zuh-bul", "adjective", "Seeming reasonable or probably true.", "Useful in argument: a plausible explanation, a plausible scenario.", ["believable", "credible", "reasonable"], "“Believable” is everyday. “Credible” suggests trustworthiness. “Reasonable” is about logic. “Plausible” means it could well be true — though not proven.", "It’s plausible that she never received the email.", "— Do you think he was really ill?\n— It’s plausible. He looked terrible on Friday.", "Give a plausible explanation for something strange that happened to you."),
    V("conceivably", "kun-SEE-vuh-blee", "adverb", "Possibly; in a way that can be imagined.", "Signals you’re exploring a possibility, not predicting.", ["possibly", "potentially", "theoretically"], "“Possibly” is general. “Potentially” is about future capacity. “Theoretically” suggests it works in theory, maybe not in practice. “Conceivably” means it’s imaginable.", "Conceivably, we could finish by Friday — but I wouldn’t promise it.", "— Could you have become a professional dancer?\n— Conceivably. If I’d started earlier and been braver.", "Write a sentence starting with “Conceivably, …”"),
    V("alternative", "awl-TUR-nuh-tiv", "noun / adjective", "Another possibility or choice.", "“The alternative is…” is a powerful argumentative move.", ["option", "choice", "substitute"], "An “option” is any available choice. A “substitute” replaces something. An “alternative” is another possibility, often compared with the current one.", "The alternative was staying in a job I no longer believed in.", "— Why did you accept such a long commute?\n— The alternative was moving away from my mother.", "Describe a decision by explaining the alternative."),
    V("had I known", "had eye NOHN", "inverted conditional", "A more formal way of saying “if I had known”.", "Elegant in writing and careful speech — use occasionally for effect.", ["if I had known", "if only I’d known"], "“If I had known” is neutral. “If only I’d known” adds regret. “Had I known” is polished and slightly literary.", "Had I known how hard it would be, I might not have started — and I’m glad I didn’t know.", "— You should have told me!\n— Had I known it mattered so much, I would have.", "Write one sentence with “Had I known…”")
  ],
  culture: "counterfactual",
  cultureNote: "The bronze-versus-silver finding shows that how you imagine alternatives shapes how you feel about reality. Choosing your counterfactuals is a quiet skill of wellbeing — and of storytelling.",
  sayBetter: {
    basic: "If I study more in school, now I have better job.",
    levels: [
      ["Level 1", "If I had studied more at school, I would have a better job now.", "Correct mixed conditional."],
      ["Level 2", "If I’d studied harder at school, I’d probably have a different career now.", "Natural contractions and nuance."],
      ["Level 3", "Had I taken school more seriously, I’d conceivably be an engineer by now.", "Inversion and speculation."],
      ["Level 4", "I sometimes wonder what would have happened if I’d taken school more seriously — I’d probably be an engineer. But I’m not sure I’d be happier. The detours taught me things a straight road wouldn’t have.", "Hypothetical + doubt + a reframe from regret to meaning."]
    ],
    prompt: "Write your own “what if” at Level 4."
  },
  exercise: {
    title: "Build the conditional",
    instructions: "Rewrite each situation as the conditional indicated.",
    items: [
      { q: "I don’t speak Japanese, so I can’t read manga in the original. → Second conditional", a: "If I spoke Japanese, I could read manga in the original." },
      { q: "I missed the bus, so I was late for the interview. → Third conditional", a: "If I hadn’t missed the bus, I wouldn’t have been late for the interview." },
      { q: "I didn’t move to London in 2015, so I don’t live there now. → Mixed conditional", a: "If I had moved to London in 2015, I would live there now." },
      { q: "If I had known about the strike, I would have taken a taxi. → Inversion", a: "Had I known about the strike, I would have taken a taxi." },
      { q: "You’re asking for my advice: “If I were you, I’d accept.” → Inversion", a: "Were I in your position, I’d accept." }
    ]
  },
  think: {
    q: "Is it useful to think about the roads not taken — or only painful?",
    angles: ["When does a “what if” help you learn?", "Can downward counterfactuals (“it could have been worse”) be a form of gratitude?", "Is there a choice you’re glad you can’t undo?"]
  },
  express: { prompt: "Write about one choice from your past using a third or mixed conditional. Then write what you would do if you faced the same choice today (second conditional)." },
  speak: {
    prompt: "If you had made one different choice ten years ago, how might your life be different now?", seconds: 90,
    structure: ["The choice and the alternative", "Mixed conditional: “If I had…, I would… now”", "What would be better — and what would be worse", "A downward counterfactual: what might have gone wrong", "Your conclusion — regret, or not?"]
  },
  recall: [
    { q: "Day 23: Can you say “I would have long hair” for a past state?", a: "No — use “used to” for states: “I used to have long hair.”" },
    { q: "Day 23: What is involuntary memory, in Proust?", a: "A memory triggered unexpectedly by a sensation, like the madeleine’s taste." },
    { q: "Day 17: The deciding factor in a decision is what “… the balance”.", a: "tipped" }
  ],
  reflect: "Which “what if” do you think about most often? Is it helping you or holding you back?",
  deep: {
    title: "Watch: Sliding Doors (1998) — or read about it",
    body: "The film follows two versions of a woman’s life depending on whether she catches a train. It has become cultural shorthand: “a sliding-doors moment”.",
    prompt: "Describe a sliding-doors moment in your life in 200 words, using at least three conditionals."
  }
};

TAW.lessons[25] = {
  day: 25, title: "Preferences, with nuance", kicker: "English · Taste",
  cats: ["english", "society"], skills: ["english", "conversation", "thinking"], difficulty: "Foundation", minutes: 30,
  why: "Conversations are full of preferences — food, music, cities, books, ways of living. “I like it” and “I don’t like it” are the least interesting things you can say about them. Today you learn to express degrees, conditions and reasons — and to wonder where your tastes come from.",
  learn: {
    body: [
      "Preferences have <strong>degrees</strong>: “I love…”, “I’m quite fond of…”, “I lean towards…”, “I’m not wild about…”, “It’s not really my cup of tea”, “I can’t stand…”. Choosing the right degree is half of sounding natural.",
      "They also have <strong>conditions</strong>: “I love the city — in winter.” “I prefer working alone, at least for focused tasks.” Conditions make you sound thoughtful rather than rigid.",
      "And they have <strong>origins</strong>. The French sociologist Pierre Bourdieu, in <em>Distinction</em> (1979), argued that taste is shaped by class and upbringing, and used — often unconsciously — to mark social position. Liking opera or street food, minimalism or ornament, is never purely personal. His famous line: “Taste classifies, and it classifies the classifier.”",
      "You don’t have to accept Bourdieu fully. But it adds depth to any conversation about taste: “I think I like jazz partly because my father played it — I’m not sure I’d have found it on my own.”"
    ],
    phrases: [
      { en: "I tend to prefer…", tone: "Measured", note: "A tendency, not a rule." },
      { en: "What appeals to me is…", tone: "Analytical", note: "Explains the reason for a preference." },
      { en: "It’s not really my cup of tea.", tone: "Polite, British-flavoured", note: "A gentle way to say you don’t like something." },
      { en: "I’ve come to appreciate…", tone: "Reflective", note: "Shows that your taste has evolved." },
      { en: "It’s an acquired taste.", tone: "Knowing", note: "For things people learn to like — olives, jazz, Russian novels." }
    ],
    tip: "Not just what you like. Why — and since when?"
  },
  vocab: [
    V("inclined", "in-KLYND", "adjective", "Tending to behave or think in a particular way; wanting to do something.", "“I’m inclined to…” softens a preference or opinion (Day 2). “Artistically inclined” = naturally drawn to art.", ["disposed", "prone", "willing"], "“Prone” is usually for negative tendencies (prone to anxiety). “Disposed” is formal. “Willing” is about agreeing to do something. “Inclined” is a gentle tendency or wish.", "I’m inclined to stay in tonight — it’s been a long week.", "— Do you want to come to the party?\n— I’m not really inclined to, but I’ll come for an hour.", "Write about something you’re naturally inclined to do."),
    V("appeal", "uh-PEEL", "noun / verb", "The quality of being attractive or interesting; to attract or interest someone.", "“What appeals to me is…” is an excellent way to explain a preference.", ["attraction", "charm", "draw"], "“Charm” is pleasant attractiveness. “Attraction” is general pull. “Draw” is what pulls people in. “Appeal” is the quality that makes something attractive to someone.", "The appeal of small towns, for me, is that nobody is in a hurry.", "— Why do you love vintage clothes?\n— Part of the appeal is knowing nobody else has the same thing.", "What appeals to you about the place you live?"),
    V("lean towards", "LEEN tuh-WARDS", "phrasal verb", "To slightly prefer one option over another.", "Soft and undecided — perfect when you have a preference but aren’t certain.", ["favour", "prefer", "be inclined towards"], "“Prefer” is clear. “Favour” is formal and often about support. “Lean towards” is a slight, tentative preference.", "I’m leaning towards the smaller flat — it’s closer to work.", "— Paris or Rome for the trip?\n— I lean towards Rome, but I could be convinced.", "Describe a choice where you lean one way, but not strongly."),
    V("acquired taste", "uh-KWY-erd TAYST", "noun", "Something you only learn to like after trying it several times.", "Can be playful or slightly defensive (“It’s an acquired taste!”).", ["grown-up taste", "something that grows on you"], "“Something that grows on you” is about gradually starting to like it. “An acquired taste” suggests most people don’t like it at first — and implies some sophistication.", "Black coffee was an acquired taste for me.", "— This cheese smells terrible!\n— It’s an acquired taste. Give it a few years.", "Name something that was an acquired taste for you."),
    V("not my cup of tea", "not my KUP uv TEE", "idiom", "Not something you like or are interested in.", "Polite and gentle — it suggests personal taste, not judgement of quality.", ["not for me", "not my thing", "I’m not keen on"], "“Not for me” is plain. “Not my thing” is casual. “Not my cup of tea” is gentler and slightly humorous; it implicitly accepts others may love it.", "Opera’s not really my cup of tea, but I admire the skill.", "— Do you like horror films?\n— Not my cup of tea. I like sleeping.", "Name something that’s not your cup of tea — politely.")
  ],
  culture: "bourdieu",
  cultureNote: "Bourdieu invites a humbling question: how much of my taste is really mine? Asking it out loud makes you a more interesting — and less judgemental — conversationalist.",
  sayBetter: {
    basic: "I don’t like modern art. I like old paintings.",
    levels: [
      ["Level 1", "I prefer classical paintings to modern art.", "A comparison — still a verdict."],
      ["Level 2", "I tend to prefer older paintings; modern art isn’t really my cup of tea.", "Softer, more natural."],
      ["Level 3", "What appeals to me in older paintings is the craft — I like seeing the work. Modern art often leaves me cold, though I’m starting to appreciate some of it.", "Reason + honesty + openness."],
      ["Level 4", "I tend to lean towards older paintings — partly the craft, but if I’m honest, partly because that’s what I grew up seeing in museums. Modern art is becoming an acquired taste for me: I don’t always like it, but I’ve started to find it interesting.", "Degree + reason + origin (Bourdieu) + evolving taste."]
    ],
    prompt: "Express one of your tastes at Level 4."
  },
  exercise: {
    title: "Degrees and conditions",
    instructions: "Rewrite each flat preference with a degree, a condition or a reason.",
    items: [
      { q: "I like the beach.", a: "I love the beach — out of season, when it’s empty and a bit wild." },
      { q: "I don’t like football.", a: "I’m not wild about watching football, but I love the atmosphere of a big game in a bar." },
      { q: "I like cities.", a: "I lean towards cities — what appeals to me is being able to walk everywhere." },
      { q: "I hate jazz.", a: "Jazz isn’t really my cup of tea — maybe it’s an acquired taste I haven’t acquired yet." },
      { q: "I like reading.", a: "I’ve always been drawn to reading, but I’ve only recently come to appreciate poetry." }
    ]
  },
  think: {
    q: "Are your tastes in music, food and clothes really yours — or a sign of where you come from?",
    angles: ["Which of your tastes come from your family? Which did you choose?", "Have you ever hidden a taste to fit in?", "Does social media make taste more personal or more uniform?"]
  },
  express: { prompt: "Choose one area of taste (music, food, design, books). Describe your preferences with degrees and conditions — then speculate honestly about where they came from." },
  speak: {
    prompt: "Describe your taste in one area (music, food, design) — and where you think it came from.", seconds: 90,
    structure: ["What you love — with a degree", "What appeals to you about it", "Something that’s not your cup of tea", "An acquired taste", "Where your taste might come from (Bourdieu)"]
  },
  recall: [
    { q: "Day 24: Why were bronze medallists often happier than silver?", a: "Downward counterfactuals (“I almost got nothing”) vs upward (“I almost won gold”)." },
    { q: "Day 24: Rewrite with inversion: “If I had known…”", a: "Had I known…" },
    { q: "Day 2: What’s the difference between a preference and an opinion?", a: "A preference is personal taste; an opinion is a debatable view." }
  ],
  reflect: "Which of your tastes are you proud of — and which are you slightly embarrassed by? Why?",
  deep: {
    title: "Explore: cultural capital",
    body: "Bourdieu’s concept of “cultural capital” — knowledge, tastes and manners that give social advantage — is widely discussed. Read a short introduction (e.g. a university sociology page or a reliable encyclopaedia entry).",
    prompt: "Is this program a way of acquiring cultural capital? Write 200 words — honestly, with nuance."
  }
};

TAW.lessons[26] = {
  day: 26, title: "Sentence variety", kicker: "English · Style",
  cats: ["english", "literature"], skills: ["english", "articulation"], difficulty: "Intermediate", minutes: 32,
  why: "Many learners speak and write in sentences of the same length and shape: subject, verb, object. Full stop. Repeat. It’s correct, but monotonous. Varying your sentences is what gives your English rhythm, emphasis and sophistication — without a single difficult word.",
  learn: {
    body: [
      "Short sentences create emphasis. Longer sentences, which carry qualifications and connections, allow you to explain how ideas relate. Good writers and speakers <strong>mix them</strong>: a long sentence to develop an idea, then a short one to land it. Like this.",
      "Five tools for variety: (1) <strong>contrast connectors</strong> — <em>whereas, while, although, despite</em>; (2) <strong>non-defining relative clauses</strong> — “My sister, who lives in Lisbon, is a doctor”; (3) <strong>participle clauses</strong> — “Having lived abroad for years, I…”, “Walking home, I realised…”; (4) <strong>fronting</strong> — starting with something other than the subject: “What I loved most was…”, “Only later did I understand…”; (5) <strong>“which” referring to a whole idea</strong> — “He apologised, which surprised everyone.”",
      "Joan Didion was a master of rhythm. Her essay “Goodbye to All That” (1967) opens: “It is easy to see the beginnings of things, and harder to see the ends.” Notice the balance — two halves, the second turning the first. Much of her power came from varying long, winding sentences with short, flat ones.",
      "In speech, variety matters too. A short sentence after a long explanation sounds confident: “…and that’s why I left. It was the right decision.”"
    ],
    phrases: [
      { en: "Having…, I…", tone: "Elegant", note: "Participle clause: “Having lived in three countries, I…”" },
      { en: "Despite…, …", tone: "Contrastive", note: "“Despite the rain, the festival was full.” Followed by a noun or -ing." },
      { en: "…, which meant that…", tone: "Connective", note: "Links a consequence to a whole idea." },
      { en: "What I loved most was…", tone: "Emphatic", note: "Fronting — puts the focus where you want it." },
      { en: "Only later did I realise…", tone: "Literary", note: "Inversion after “only later” — use occasionally for effect." }
    ],
    tip: "Long to explain. Short to land."
  },
  vocab: [
    V("whereas", "wair-AZ", "conjunction", "Used to compare two facts and show how they differ.", "Precise contrast between two things, often parallel: “X…, whereas Y…”", ["while", "but", "on the other hand"], "“But” is general and informal. “While” can mean both time and contrast. “On the other hand” starts a new sentence or clause. “Whereas” directly contrasts two parallel facts.", "My brother loves cities, whereas I need trees and silence.", "— Are you and your sister similar?\n— Not really. She plans everything, whereas I improvise.", "Contrast yourself with someone using “whereas”."),
    V("despite", "di-SPYT", "preposition", "Without being affected by something; even though something exists.", "Followed by a noun or -ing — not a full clause. “Despite it was raining” ✗ → “Despite the rain” ✓ / “Despite it raining” ✓.", ["in spite of", "although", "even though"], "“In spite of” is the same, slightly longer. “Although” and “even though” are followed by a full clause (“although it rained”). “Despite” takes a noun or -ing.", "Despite having very little money, they travelled constantly.", "— Did you enjoy the trip?\n— Despite the weather, it was wonderful.", "Write a sentence with “despite + -ing”."),
    V("which (comment clause)", "WICH", "relative pronoun", "Introduces extra information — or refers back to a whole previous idea.", "In “He was late, which annoyed everyone”, “which” refers to the whole fact of being late. Use a comma before it.", ["and this", "something that"], "“And this…” is simpler but clumsier. “Something that…” is more explicit. “…, which…” is smooth and adds a comment on the whole idea.", "She quit her job to paint, which surprised everyone except her mother.", "— How did the meeting go?\n— They approved the budget, which means we can finally start.", "Write a sentence where “which” comments on a whole idea."),
    V("having (+ past participle)", "HAV-ing", "participle clause", "Shows that one action was completed before another, with the same subject.", "Elegant and compact. The subject must be the same in both parts: “Having finished the report, I went home.”", ["after I had…", "once I had…"], "“After I had finished” is clear but longer. “Once I had” emphasises completion. “Having finished” is compact and literary-professional.", "Having lived abroad for ten years, I see my country differently.", "— Why are you so calm about the exam?\n— Having failed it once, I know what to expect.", "Begin a sentence about your life with “Having…”."),
    V("while", "WYL", "conjunction", "During the time that; also, although (for contrast).", "Two uses: time (“While I was cooking…”) and contrast (“While I understand your point, I disagree”).", ["whereas", "although", "as"], "For contrast, “while” is softer than “whereas” and can concede a point (“While it’s true that…”). For time, it’s like “as” or “during the time that”.", "While I admire his talent, I find his attitude difficult.", "— Did you like the book?\n— While I enjoyed the beginning, the ending felt rushed.", "Write one sentence with “while” for time and one for contrast.")
  ],
  culture: "didion",
  cultureNote: "Didion shows that style isn’t decoration — it’s thinking made visible. Varying your sentences is a way of showing which ideas matter most.",
  sayBetter: {
    basic: "I lived in Spain. I learned Spanish. I met my husband. We moved to London. I miss Spain.",
    levels: [
      ["Level 1", "I lived in Spain, learned Spanish and met my husband. Then we moved to London, and I miss Spain.", "Joined with “and” — smoother, still flat."],
      ["Level 2", "While I was living in Spain, I learned Spanish and met my husband, who is from Madrid.", "Time clause + relative clause."],
      ["Level 3", "Having lived in Spain for six years, I learned the language, met my husband and, eventually, moved with him to London — which I’ve never fully got used to.", "Participle + list + a “which” comment."],
      ["Level 4", "I spent six years in Spain, where I learned the language, met my husband and somehow became a different person. Then we moved to London. I still miss it.", "A long sentence that develops, then two short ones that land. That rhythm is the whole lesson."]
    ],
    prompt: "Take five short sentences about your life and combine them at Level 4."
  },
  exercise: {
    title: "Combine the sentences",
    instructions: "Combine each group into one or two sentences using the tool indicated.",
    items: [
      { q: "My mother is a teacher. She loves poetry. (non-defining relative clause)", a: "My mother, who is a teacher, loves poetry." },
      { q: "I finished my degree. I started working immediately. (participle clause)", a: "Having finished my degree, I started working immediately." },
      { q: "It was raining heavily. We went for a walk. (despite)", a: "Despite the heavy rain, we went for a walk." },
      { q: "My brother is very organised. I’m quite chaotic. (whereas)", a: "My brother is very organised, whereas I’m quite chaotic." },
      { q: "The train was cancelled. We had to stay another night. (which)", a: "The train was cancelled, which meant we had to stay another night." },
      { q: "I didn’t understand the book until I reread it at forty. (fronting with “only”)", a: "Only when I reread it at forty did I understand the book." }
    ]
  },
  think: {
    q: "Does the way someone writes or speaks reveal how they think?",
    angles: ["Whose style — in writing or speech — do you admire?", "Can short sentences be more intelligent than long ones?", "Does your style in your first language differ from your style in English?"]
  },
  express: { prompt: "Describe your week in 8 sentences: at least two short (under 6 words), two long (over 20 words), and three that start with something other than the subject." },
  speak: {
    prompt: "Describe your week in six sentences: two short, two long, and two that start with something other than “I”.", seconds: 90,
    structure: ["A long sentence that sets the scene", "A short one that lands", "A sentence starting with “Having…” or “Despite…”", "A “which” comment", "A short final sentence"]
  },
  recall: [
    { q: "Day 25: Bourdieu’s famous line about taste?", a: "“Taste classifies, and it classifies the classifier.”" },
    { q: "Day 25: A polite way to say you don’t like something?", a: "It’s not really my cup of tea." },
    { q: "Day 23: Past continuous is used for…", a: "Background actions — the scene behind the main events." }
  ],
  reflect: "Look at something you wrote last week. Are your sentences all the same length? Rewrite one paragraph with more variety.",
  deep: {
    title: "Read: Joan Didion, “Goodbye to All That” (1967)",
    body: "Didion’s essay about leaving New York is collected in Slouching Towards Bethlehem. Read the first two pages, paying attention only to sentence length and rhythm.",
    prompt: "Copy out by hand Didion’s best paragraph, then write your own paragraph about leaving a place, imitating her rhythm."
  }
};

TAW.lessons[27] = {
  day: 27, title: "Small talk that isn’t small", kicker: "Conversation · Small talk",
  cats: ["conversation"], skills: ["conversation", "english"], difficulty: "Foundation", minutes: 30,
  why: "Small talk has a bad reputation, but it does something important: it builds safety and trust before deeper conversation. The art is to begin with the ordinary and move — gently, naturally — towards the interesting.",
  learn: {
    body: [
      "Small talk is a <strong>ramp</strong>, not a destination. It typically moves through three levels: the <strong>shared situation</strong> (“How do you know the host?”, “Have you tried the food?”), the <strong>personal but safe</strong> (“What brings you here?”, “What are you working on?”) and the <strong>genuinely interesting</strong> (opinions, stories, curiosities). Skip the first level and you sound intense; never leave it and you sound bored.",
      "We underestimate how much we’ll enjoy it. In a 2014 study, the psychologists Nicholas Epley and Juliana Schroeder asked commuters in Chicago to talk to a stranger on their train. Participants predicted it would be unpleasant; in fact, they reported a more positive journey than those who sat in silence.",
      "Dale Carnegie’s <em>How to Win Friends and Influence People</em> (1936) — one of the best-selling self-help books ever — boils down to one idea: “You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.”",
      "Three practical moves: <strong>notice</strong> something specific and comment on it (Day 39 will go deeper); <strong>give a little to get a little</strong> — answer with a detail, not one word; and <strong>bridge</strong> from the surface to something deeper: “You work in hospitals? That must change how you see the world.”"
    ],
    phrases: [
      { en: "I couldn’t help noticing…", tone: "Friendly, observant", note: "Opens with a specific detail: “…your book — is it good?”" },
      { en: "How do you know [the host]?", tone: "Safe, classic", note: "The perfect first-level question at any party." },
      { en: "What’s keeping you busy these days?", tone: "Open", note: "Lets the other person choose what to talk about (Day 6)." },
      { en: "That must be…", tone: "Empathetic", note: "Bridges to feelings: “That must be exhausting / fascinating.”" },
      { en: "It was lovely talking to you.", tone: "Graceful exit", note: "Ending warmly is as important as starting well." }
    ],
    tip: "Start small. Don’t stay small."
  },
  vocab: [
    V("genuinely", "JEN-yoo-in-lee", "adverb", "Truly, sincerely, really.", "A precise alternative to “really” (Day 4) — it implies sincerity, not just intensity.", ["truly", "sincerely", "really"], "“Really” is overused and can just mean “very”. “Truly” is slightly formal. “Sincerely” is about honest intentions. “Genuinely” says: I mean this — it’s not politeness.", "I’m genuinely curious — how did you get into beekeeping?", "— Did you actually like my presentation?\n— Genuinely. The ending was brilliant.", "Write a compliment using “genuinely”."),
    V("relate to", "ri-LAYT too", "phrasal verb", "To understand someone’s feelings or situation because of your own experience.", "Builds connection: “I can relate to that” shows empathy.", ["identify with", "empathise with", "understand"], "“Understand” is general. “Empathise with” is about sharing feelings. “Identify with” means seeing yourself in someone. “Relate to” is the everyday way of saying “I’ve felt that too”.", "I can really relate to what you said about moving abroad.", "— I always feel like an outsider at these events.\n— I can relate. I’ve been standing by the snacks for twenty minutes.", "Write a response using “I can relate to…”"),
    V("break the ice", "brayk thee EYES", "idiom", "To say or do something to make people feel relaxed, especially when meeting for the first time.", "Shakespeare uses it in The Taming of the Shrew. Icebreakers = activities to help groups relax.", ["get the conversation going", "ease the tension"], "“Ease the tension” is used when there’s discomfort or conflict. “Get the conversation going” is neutral. “Break the ice” specifically means the first awkwardness between strangers.", "A shared joke about the terrible weather helped break the ice.", "— How did you start talking to her?\n— I complimented her shoes. It broke the ice.", "How do you usually break the ice with strangers?"),
    V("bond over", "BOND oh-ver", "phrasal verb", "To become closer to someone because of a shared interest or experience.", "Warm and specific: you bond over something.", ["connect over", "click", "get close"], "“Click” is an instant connection (Day 22). “Connect over” is similar to bond over. “Bond over” suggests a deeper closeness built through something shared.", "We bonded over a shared hatred of open-plan offices.", "— How did you two become friends?\n— We bonded over terrible coffee at a conference.", "What did you bond over with a close friend?"),
    V("follow up on", "FOL-oh UP on", "phrasal verb", "To take further action or ask more about something mentioned earlier.", "In conversation, following up on a detail shows you were listening (Day 6).", ["pick up on", "come back to", "ask more about"], "“Pick up on” means notice and respond to something. “Come back to” returns to an earlier point. “Follow up on” means continuing a thread — in conversation or at work.", "I wanted to follow up on what you said about your trip — where exactly did you go?", "— You said you used to live in Japan?\n— Yes! Thanks for following up on that.", "Write a follow-up question to: “I just started learning the cello.”")
  ],
  culture: "carnegie",
  cultureNote: "Carnegie’s advice can sound manipulative when reduced to techniques. Its heart is simpler: be genuinely interested in people. Interest that is faked is usually noticed; interest that is real is almost always welcome.",
  sayBetter: {
    basic: "Nice weather today.",
    levels: [
      ["Level 1", "Lovely weather today, isn’t it?", "Polite — and a dead end."],
      ["Level 2", "Lovely weather — are you making the most of it this weekend?", "Opens a door."],
      ["Level 3", "Finally some sun! I couldn’t help noticing your bike — do you cycle everywhere?", "Shared situation + a specific observation."],
      ["Level 4", "Finally some sun — it makes the whole city friendlier, doesn’t it? I couldn’t help noticing your bike. Do you cycle to work? I keep promising myself I’ll start.", "Observation + opinion + a specific question + a little self-disclosure. The other person has three easy ways in."]
    ],
    prompt: "Write a Level 4 opener for a party, a work event or a waiting room."
  },
  exercise: {
    title: "Climb the ramp",
    instructions: "For each opener, write a level-2 follow-up and a level-3 bridge to something more interesting.",
    items: [
      { q: "“How do you know the host?” — “We work together.”", a: "L2: “Oh, what do you do?” L3: “What’s she like at work? I only know her as the person who organises these amazing dinners.”" },
      { q: "“Have you tried the food?” — “Yes, the curry is incredible.”", a: "L2: “Do you cook?” L3: “Is there a dish that reminds you of home?”" },
      { q: "“Busy week?” — “Exhausting. We launched a new app.”", a: "L2: “Congratulations! What does it do?” L3: “What’s it like to put something you made out into the world?”" },
      { q: "“Are you from here?” — “No, I moved from Brazil two years ago.”", a: "L2: “What brought you here?” L3: “What do you miss most — and what surprised you about living here?”" }
    ]
  },
  think: {
    q: "Is small talk superficial — or a necessary social ritual?",
    angles: ["Do some cultures value small talk more than others?", "What does small talk communicate beyond the words?", "Why do so many people dread it?"]
  },
  express: { prompt: "Write a short imagined dialogue (8–10 lines) where you meet a stranger at a party and move from small talk to a genuinely interesting topic." },
  speak: {
    prompt: "Start a conversation with a stranger at a party about something you can both see, and move it to something interesting in three steps.", seconds: 60,
    structure: ["Shared situation: a specific observation", "Personal but safe question", "A bridge to something interesting", "Share a little about yourself"]
  },
  recall: [
    { q: "Day 26: Complete correctly: “Despite ___ (rain), we went out.”", a: "Despite the rain / Despite it raining." },
    { q: "Day 26: The rhythm rule?", a: "Long sentences to explain; short sentences to land." },
    { q: "Day 6: Name a question that goes beyond small talk.", a: "e.g. “What’s keeping you busy these days?” / “What made you…?”" }
  ],
  reflect: "When did a small conversation with a stranger turn into something memorable? What made it happen?",
  deep: {
    title: "The stranger experiment",
    body: "Repeat Epley and Schroeder’s experiment on yourself this week: start one short conversation with a stranger — a barista, a neighbour, someone in a queue. Before you do, predict how pleasant it will be on a scale of 1–10.",
    prompt: "Write what happened, your prediction, and how it actually felt."
  }
};

TAW.lessons[28] = {
  day: 28, type: "review", title: "Weekly review: Telling your story", kicker: "Week 4 · Review",
  cats: ["review"], skills: ["english", "conversation", "articulation"], difficulty: "Foundation", minutes: 30,
  why: "Four weeks. This week gave you the grammar and the social tools of personal conversation: relationships, the past, the hypothetical, taste, style and small talk. Tomorrow you’ll put it all together in your three-minute story. Today, you prepare.",
  learn: {
    body: [
      "Notice how this week connects: you can now <strong>start</strong> a conversation (small talk), <strong>tell</strong> your past (narrative tenses), <strong>imagine</strong> alternatives (conditionals), <strong>reveal</strong> your tastes (with nuance), <strong>describe</strong> the people in your life (with warmth) — and do it all with <strong>varied sentences</strong>.",
      "Today: recall the week, reflect, and rehearse the opening of tomorrow’s life story."
    ],
    phrases: [
      { en: "We’ve drifted apart a little.", tone: "Day 22", note: "Relationships." },
      { en: "We used to… / She would…", tone: "Day 23", note: "Narrative tenses." },
      { en: "Had I known…, I would have…", tone: "Day 24", note: "Hypotheticals." },
      { en: "What appeals to me is…", tone: "Day 25", note: "Taste." },
      { en: "Having…, I…", tone: "Day 26", note: "Sentence variety." },
      { en: "I couldn’t help noticing…", tone: "Day 27", note: "Small talk." }
    ],
    tip: "You are building a voice, not a vocabulary list."
  },
  vocab: [],
  recall: [
    { q: "Aristotle’s three kinds of friendship?", a: "Utility, pleasure, virtue." },
    { q: "Roughly how many meaningful relationships did Robin Dunbar suggest we can maintain?", a: "About 150 — in layers of roughly 5, 15, 50 and 150." },
    { q: "“Used to” or “would”: “I ___ have a dog called Max.”", a: "used to (a state — “would” isn’t possible)." },
    { q: "What triggers memory for Proust’s narrator?", a: "The taste of a madeleine dipped in tea." },
    { q: "Make this a mixed conditional: “I didn’t learn to drive, so I take the bus now.”", a: "If I had learned to drive, I wouldn’t take the bus now." },
    { q: "What did Bourdieu argue about taste?", a: "It’s shaped by class and upbringing and used to mark social distinction." },
    { q: "Why did Didion’s sentences feel powerful?", a: "Rhythm — long, winding sentences contrasted with short, flat ones." },
    { q: "What did Epley and Schroeder find about talking to strangers on trains?", a: "People expected it to be unpleasant but reported a more positive journey." }
  ],
  speak: {
    prompt: "Week 4 challenge: Imagine you’ve just met someone at a dinner. They ask, “So, where did you grow up?” Answer for two minutes — a habit from your childhood, a person who mattered, one “what if”, and something you love now.", seconds: 120,
    structure: ["Place and habit: “We used to…”", "A person — with warmth and discretion", "A “what if”: “If I hadn’t…, I would…”", "A taste you’ve acquired", "End with a short sentence — then ask them a question back"],
    tryWords: ["used to", "vivid", "drift apart", "close-knit", "acquired taste", "having"]
  },
  weekly: true,
  reflect: "Four weeks ago you asked: who am I when I speak? What’s your answer today?"
};

TAW.lessons[29] = {
  day: 29, title: "Your story in three minutes", kicker: "Communication · Personal narrative",
  cats: ["communication", "literature"], skills: ["articulation", "conversation", "english"], difficulty: "Intermediate", minutes: 35,
  why: "This is the capstone of Month 1. Everything you’ve practised — orientations, precise emotions, decisions, the past, hypotheticals, storytelling — comes together in one skill: telling the story of who you are, in a way that is honest, structured and genuinely interesting.",
  learn: {
    body: [
      "The psychologist Dan McAdams studies <strong>narrative identity</strong>: the internalised story we tell about how we became who we are. His research found a striking pattern. Many people who score high on generativity — caring about future generations and contributing to others — tend to tell <strong>redemption</strong> stories, in which a difficulty leads to growth or something good. Others tell <strong>contamination</strong> stories, in which something good is spoiled. The facts may be similar; the story is not.",
      "A life story is not a CV. It’s built around <strong>two or three formative moments</strong> — turning points (Day 5) that changed how you saw yourself or the world — connected by a thread. Ask: <em>what is my story about?</em> Curiosity? Belonging? Leaving? Courage? Learning to speak up?",
      "A useful structure for three minutes: <strong>Opening</strong> (an orientation, not a label — Day 1). <strong>Moment 1</strong> (where you came from, a formative experience). <strong>Moment 2</strong> (a turning point, with precise feelings and the trade-off). <strong>Now</strong> (who you are becoming, what you’re drawn to). <strong>Thread</strong> (one sentence naming what the story is about).",
      "Chimamanda Ngozi Adichie warns against “the danger of a single story” — reducing a person or people to one narrative. Your own story deserves the same respect: let it contain contradictions."
    ],
    phrases: [
      { en: "One of the most formative experiences of my life was…", tone: "Reflective", note: "Introduces a key moment with weight." },
      { en: "That shaped the way I…", tone: "Analytical", note: "Connects an experience to who you became." },
      { en: "Looking back, I think my story is really about…", tone: "Insightful", note: "Names the thread — the most powerful sentence in a life story." },
      { en: "To this day, I…", tone: "Connective", note: "Links past to present." },
      { en: "I’m still figuring out…", tone: "Honest, open", note: "A life story doesn’t need an ending. Open questions make you more interesting." }
    ],
    tip: "Not everything that happened. The moments that made you."
  },
  vocab: [
    V("formative", "FOR-muh-tiv", "adjective", "Having a strong and lasting influence on how a person develops.", "“Formative years” = childhood and adolescence. “A formative experience” shaped you.", ["influential", "defining", "shaping"], "“Influential” describes people or ideas with influence in general. “Defining” suggests it determined your identity. “Formative” is specifically about development over time.", "Living with my grandmother was one of the most formative experiences of my childhood.", "— Why did you become a nurse?\n— My formative years were spent in hospitals with my brother.", "Name one formative experience and say what it formed."),
    V("pivotal", "PIV-uh-tul", "adjective", "Of crucial importance; the point on which everything turns.", "From “pivot”, the point a thing turns on. Stronger than “important”.", ["crucial", "decisive", "critical"], "“Crucial” means extremely important. “Decisive” means it settled something. “Critical” suggests danger or urgency. “Pivotal” means it was the turning point.", "Meeting my first mentor was a pivotal moment in my career.", "— What changed for you at university?\n— A pivotal conversation with a professor who told me I could write.", "Describe a pivotal moment in one sentence."),
    V("shape", "SHAYP", "verb", "To influence the development or character of someone or something.", "Shows how experiences form identity. Often passive: “I was shaped by…”", ["influence", "mould", "form"], "“Influence” is general and can be small. “Mould” suggests strong, deliberate shaping (often by others). “Shape” is the natural word for experiences forming who you are.", "Growing up between two languages shaped how I see the world.", "— Do you think your parents influenced your career?\n— They shaped my values more than my choices.", "What shaped you most — a person, a place or an event?"),
    V("to this day", "tuh THIS DAY", "phrase", "Still now, even after a long time.", "Links a past event to the present with emotional weight.", ["still", "even now", "ever since"], "“Still” is plain. “Even now” is emotional. “Ever since” describes a change that began then. “To this day” emphasises that something from the past continues.", "To this day, I can’t hear that song without crying.", "— Did you ever find out who sent the letter?\n— No. To this day, it’s a mystery.", "Write a sentence starting with “To this day, …”"),
    V("redemption", "ri-DEMP-shun", "noun", "Being saved from error or difficulty; in a story, when something bad leads to something good.", "Has religious origins, but McAdams uses it for narratives of growth from difficulty.", ["recovery", "salvation", "turnaround"], "“Salvation” is strongly religious. “Recovery” is about getting better. “Turnaround” is practical, often business. “Redemption” in storytelling means difficulty transformed into meaning.", "Her life story has a redemptive arc — the illness that nearly broke her led her to medicine.", "— Is the film depressing?\n— Not really. It’s a redemption story.", "Retell a difficulty in your life as a redemption story.")
  ],
  culture: "adichie",
  cultureNote: "Adichie’s warning applies inward as well as outward: don’t tell a single story about yourself either. A life story with a contradiction or an open question is more truthful — and more interesting.",
  sayBetter: {
    basic: "I was born in Brazil, I studied economics, I worked in a bank, now I live in Portugal.",
    levels: [
      ["Level 1", "I grew up in Brazil, studied economics, worked in a bank and now live in Portugal.", "A CV in one sentence."],
      ["Level 2", "I grew up in Brazil and worked in a bank for years, but I moved to Portugal to start again.", "There’s a turning point."],
      ["Level 3", "I grew up in Brazil in a very close-knit family, and I spent eight years in a bank doing a job I was good at but didn’t love. Moving to Portugal was a pivotal decision — terrifying at the time.", "Formative context + a pivotal moment + a precise feeling."],
      ["Level 4", "Looking back, I think my story is really about learning to choose for myself. I grew up in a close-knit family where the safe path was obvious, and I took it — eight years in a bank. Moving to Portugal was the first decision that was entirely mine. I’m still figuring out what comes next, but to this day, I’ve never regretted it.", "A thread, formative context, a turning point, the present and an open question. That’s a life story."]
    ],
    prompt: "Write the opening and the thread of your own story at Level 4."
  },
  exercise: {
    title: "Find your thread",
    instructions: "For each life outline, suggest a thread — one sentence naming what the story is about.",
    items: [
      { q: "Grew up in a small town; moved to a big city at 18; now works in international development.", a: "“My story is really about wanting the world to be bigger than the place I started.”" },
      { q: "Was very shy as a child; became a teacher; now gives talks to large audiences.", a: "“Looking back, my story is about discovering that fear and courage can live in the same person.”" },
      { q: "Parents divorced when young; lived between two countries; works as a translator.", a: "“My story is about living between worlds — and learning to translate, not choose.”" },
      { q: "Studied law to please parents; quit to open a bakery; now teaches baking to young people.", a: "“It’s a story about learning the difference between a good life on paper and a good life in practice.”" }
    ]
  },
  think: {
    q: "What is the “single story” people might tell about you? What does it leave out?",
    angles: ["Is your own story about yourself a redemption or a contamination story?", "Which moment would someone who knows you well choose as your turning point?", "What part of your story is still unwritten?"]
  },
  express: { prompt: "Write your life story in 250–300 words: an opening orientation, two formative moments, who you are now, and the thread. Use at least four words from this month." },
  speak: {
    prompt: "Tell me the story of your life so far in three minutes — two formative moments and where you’re heading.", seconds: 180,
    structure: ["Opening: an orientation, not a label", "Formative moment 1: where you came from", "Formative moment 2: a turning point — feelings and trade-off", "Now: what you’re drawn to, what you’re figuring out", "The thread: “Looking back, I think my story is about…”"]
  },
  recall: [
    { q: "Day 27: The three levels of small talk?", a: "Shared situation → personal but safe → genuinely interesting." },
    { q: "Day 24: Upward vs downward counterfactuals?", a: "Upward: “it could have been better” (more regret). Downward: “it could have been worse” (more gratitude)." },
    { q: "Day 1: Montaigne’s idea about his book?", a: "“I am myself the matter of my book.”" },
    { q: "Day 18: How do you express ambition without sounding hungry?", a: "Be specific, give the reason, and admit ambivalence." }
  ],
  reflect: "If your life were a book, what would this chapter be called?",
  deep: {
    title: "Watch: Chimamanda Ngozi Adichie, “The Danger of a Single Story” (TED, 2009)",
    body: "Nineteen minutes, freely available. Notice how she builds a big argument entirely from personal anecdotes — the structure you’re practising this month.",
    prompt: "Write about a time someone told a single story about you — or you told one about someone else."
  }
};
})();
