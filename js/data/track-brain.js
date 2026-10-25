/* Studio tracks: definitions + The Learning Brain (8 lessons). */
window.TAW = window.TAW || {};
TAW.trackLessons = TAW.trackLessons || {};
TAW.tracks = {
  voice: {
    id: "voice", title: "The Senior Voice", short: "Senior Voice",
    subtitle: "Executive communication for senior roles — presence, AI, automation and e-commerce, in clear, confident English.",
    cadence: "One lesson a week, alongside the main journey.",
    modules: [
      { title: "Presence & style", lessons: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"] },
      { title: "AI for leaders", lessons: ["v11", "v12", "v13", "v14", "v15"] },
      { title: "Automation & operations", lessons: ["v16", "v17", "v18"] },
      { title: "E-commerce", lessons: ["v19", "v20", "v21", "v22"] },
      { title: "Capstone", lessons: ["v23", "v24"] }
    ]
  },
  brain: {
    id: "brain", title: "The Learning Brain", short: "Learning Brain",
    subtitle: "Neuroplasticity and the science of learning — how the brain rewires itself, and how to work with it.",
    cadence: "One lesson a week for the first eight weeks. Each weekly review links to it.",
    modules: [
      { title: "Foundations", lessons: ["b1", "b2", "b3", "b4"] },
      { title: "Applying it", lessons: ["b5", "b6", "b7", "b8"] }
    ]
  }
};

(function () {
const V = TAW.V;
function card(id, name, cat, period, origin, why, facts, idea, related, talk) {
  TAW.cards[id] = { id, name, cat, period, origin, why, facts, idea, related, talk };
}
function T(key, o) { TAW.trackLessons[key] = Object.assign({ cats: ["science"], skills: ["thinking", "culture"], difficulty: "Intermediate", minutes: 25 }, o); }

/* ── Passport cards for the brain track ── */
card("neuroplasticity", "Neuroplasticity", "science", "1949–present", "Neuroscience",
  "The brain’s lifelong ability to change its structure and connections in response to experience — the biological basis of all learning.",
  ["Donald Hebb (1949) proposed that connections between neurons strengthen when they are active together; “neurons that fire together wire together” is Carla Shatz’s later summary (1992).", "Eleanor Maguire’s studies of London taxi drivers (2000, 2011) linked learning the city’s streets to changes in the hippocampus.", "Plasticity continues in adulthood, but it is driven by attention, repetition, effort and sleep — not by passive exposure."],
  "You become what you repeatedly pay attention to.", ["ebbinghaus", "retrieval", "habits-science"],
  ["The brain stays plastic all our lives — it just needs attention and repetition.", "The taxi-driver studies are the classic example: learning London actually changed their brains."]);
card("ebbinghaus", "Ebbinghaus & the forgetting curve", "science", "1885", "Hermann Ebbinghaus, Germany",
  "The first experimental study of memory — and the discovery that forgetting is fast, predictable and can be slowed by spacing.",
  ["Ebbinghaus memorised lists of nonsense syllables and tested himself over time, publishing Memory (Über das Gedächtnis) in 1885.", "Much of what he learned was forgotten within a day or two — the “forgetting curve”.", "Reviews spread out over time (the spacing effect) slowed forgetting dramatically — the principle behind this app’s review schedule."],
  "Forgetting is not failure — it’s the moment to review.", ["neuroplasticity", "retrieval"],
  ["Ebbinghaus showed that we forget most of what we learn within days — unless we space our reviews.", "That’s the spacing effect: a little, often, beats a lot, once."]);
card("retrieval", "Retrieval practice & desirable difficulties", "science", "1994–2006", "Robert & Elizabeth Bjork; Roediger & Karpicke, USA",
  "Pulling information out of memory strengthens it far more than putting it in again — and some difficulty helps.",
  ["Robert Bjork coined “desirable difficulties” (1994): conditions that slow learning in the moment but improve long-term retention.", "Roediger and Karpicke (2006) found students who tested themselves remembered more a week later than students who reread.", "Rereading feels productive because the material feels familiar — an “illusion of fluency”."],
  "If it feels easy, you’re probably not learning much.", ["ebbinghaus", "neuroplasticity"],
  ["Testing yourself is more effective than rereading, even though it feels harder.", "Bjork calls it a desirable difficulty — the struggle is the learning."]);
card("sleep-memory", "Sleep and memory consolidation", "science", "20th–21st c.", "Neuroscience",
  "During sleep, the brain replays and stabilises what was learned during the day.",
  ["Studies in rodents show the hippocampus “replays” daytime activity patterns during sleep.", "Deep (slow-wave) sleep is linked to consolidating facts and events; REM sleep is linked to emotional memory and integrating ideas.", "Sleep deprivation reduces the ability to form new memories the next day."],
  "Sleep isn’t a break from learning — it’s part of it.", ["neuroplasticity", "ebbinghaus"],
  ["The brain consolidates memories during sleep, so a good night after studying really matters.", "Pulling an all-nighter is one of the worst ways to learn."]);
card("attention-science", "Attention, task-switching & dopamine", "science", "1997–2009", "Neuroscience & psychology",
  "Attention is the gate to plasticity. Switching between tasks has a cost, and dopamine is about prediction and motivation, not simply pleasure.",
  ["Task-switching studies (Rubinstein, Meyer & Evans, 2001) show measurable time costs every time we switch.", "Ophir, Nass and Wagner (2009) found heavy media multitaskers performed worse on tests of filtering distraction.", "Wolfram Schultz’s work showed dopamine neurons signal reward prediction errors — the difference between expected and actual reward."],
  "Where attention goes, rewiring follows.", ["attention", "neuroplasticity", "habits-science"],
  ["We don’t really multitask — we switch, and every switch has a cost.", "Dopamine is less about pleasure than about wanting and prediction."]);
card("habits-science", "The science of habits", "science", "2002–2010", "Wendy Wood; Phillippa Lally",
  "Habits are behaviours triggered automatically by context — and they take longer to form than the famous “21 days”.",
  ["Wendy Wood’s research suggests around 40% of daily actions are performed habitually, in the same context.", "Phillippa Lally and colleagues (2010) found new habits took between 18 and 254 days to become automatic — a median of 66.", "Missing a single day did not significantly derail habit formation."],
  "Make it easy, make it the same time and place — and forgive the missed days.", ["sdt", "neuroplasticity"],
  ["The 21-day habit idea is a myth — in one study the median was 66 days.", "Missing a day doesn’t ruin a habit. Consistency over perfection."]);
card("reappraisal", "Stress reappraisal", "science", "2014", "Alison Wood Brooks, Harvard",
  "Reframing anxiety as excitement can improve performance — useful for speaking in a second language.",
  ["Brooks (2014) had participants say “I am excited” before singing, public speaking or a maths test.", "Compared with trying to calm down, reframing as excitement improved performance and confidence.", "Anxiety and excitement share similar physical arousal; the label changes how we interpret it."],
  "Don’t calm down. Get excited.", ["barrett", "neuroplasticity"],
  ["There’s a study where saying “I’m excited” before a speech actually improved performance.", "Your heart racing isn’t fear — it can be readiness."]);
card("neuromyths", "Neuromyths", "science", "Popular culture", "—",
  "Popular ideas about the brain that sound scientific but aren’t — knowing them makes you a sharper thinker.",
  ["“We only use 10% of our brain” is false: imaging shows activity across the whole brain.", "“Learning styles” (visual, auditory…) — a 2008 review by Pashler and colleagues found no good evidence that matching teaching to a preferred style improves learning.", "“Left-brained vs right-brained people”: a 2013 study of over 1,000 brain scans found no evidence of people being dominated by one hemisphere."],
  "If a brain fact sounds too neat, check it.", ["confirmation-bias", "neuroplasticity"],
  ["Actually, the 10% idea is a myth — we use all of our brain.", "Learning styles feel true, but the evidence for them is weak."]);

/* ── Lessons ── */
T("b1", { track: "brain", n: 1, module: "Foundations", title: "Neuroplasticity: the brain that changes",
  why: "Everything in this program rests on one fact: your brain physically changes when you learn. Understanding how — and what it needs — turns effort into strategy, and gives you a precise vocabulary for one of the most discussed topics in modern culture.",
  learn: {
    body: [
      "For much of the 20th century, many scientists believed the adult brain was largely fixed. We now know it is <strong>plastic</strong>: neurons form new connections, strengthen used ones, and prune unused ones throughout life. This is <strong>neuroplasticity</strong>.",
      "In 1949 the Canadian psychologist Donald Hebb proposed that when one neuron repeatedly helps activate another, the connection between them strengthens. The neuroscientist Carla Shatz later summarised it as “<em>neurons that fire together wire together</em>”. Every time you retrieve a word, a pathway becomes faster and more reliable.",
      "The most famous evidence comes from London. Eleanor Maguire and colleagues found that taxi drivers, who must memorise thousands of streets (“the Knowledge”), had a larger posterior hippocampus than control groups (2000). A later study (2011) followed trainees over four years: those who qualified showed growth; those who failed didn’t.",
      "Three caveats keep you precise rather than hyped. Plasticity is <strong>effortful</strong>: it depends on attention, repetition and feedback. It works <strong>both ways</strong>: habits you don’t want are also wired in. And it is <strong>gradual</strong>: “rewire your brain in 7 days” is marketing, not science."
    ],
    phrases: [
      { en: "The brain stays plastic throughout life.", tone: "Precise", note: "The core idea, stated accurately." },
      { en: "It’s less about talent than about repetition and attention.", tone: "Insightful", note: "A distinction worth making in any conversation about learning." },
      { en: "That’s more marketing than neuroscience.", tone: "Sceptical, polite", note: "For exaggerated brain claims." },
      { en: "Every time you practise, you strengthen the pathway.", tone: "Explanatory", note: "A simple way to explain Hebb." }
    ],
    tip: "You don’t find your voice. You wire it."
  },
  vocab: [
    V("plastic (neuroscience)", "PLAS-tik", "adjective", "Able to change shape or structure; in the brain, able to reorganise through experience.", "Technical meaning — nothing to do with the material. Noun: plasticity (plas-TIS-ih-tee).", ["malleable", "adaptable", "flexible"], "“Flexible” is general. “Adaptable” describes adjusting to circumstances. “Malleable” means easily shaped by outside forces. “Plastic” is the scientific term for the brain’s capacity to rewire.", "Children’s brains are especially plastic, but adult brains keep changing too.", "— Is it too late to learn a language at 35?\n— Not at all. The brain stays plastic — it just needs more deliberate practice.", "Explain in one sentence why “plastic” is a hopeful word."),
    V("rewire", "ree-WIRE", "verb", "To change the connections in something; figuratively, to change deep patterns of thinking or behaviour.", "Popular in self-help — use it accurately: gradual change through practice.", ["reshape", "reprogram", "restructure"], "“Reprogram” suggests a computer and instant change. “Restructure” is organisational. “Rewire” suggests changing connections — closest to how neurons actually work.", "Speaking every day is slowly rewiring how quickly I find words.", "— Can you really rewire your brain?\n— Gradually, yes — through repetition, not in a weekend workshop.", "What habit of thought would you like to rewire?"),
    V("pathway", "PATH-way", "noun", "A route; in the brain, a chain of connected neurons that carries signals.", "A helpful metaphor: a path through grass becomes clearer each time it’s walked.", ["route", "channel", "circuit"], "“Route” is general. “Channel” suggests flow. “Circuit” is technical and closed. “Pathway” works for both neuroscience and figurative development (“career pathway”).", "Each time you retrieve a word, the pathway gets a little faster.", "— Why does it get easier?\n— You’re strengthening the pathway. Like a path through a field.", "Use “pathway” literally and figuratively."),
    V("gradual", "GRAD-yoo-ul", "adjective", "Happening slowly, over a period of time.", "Honest about how real change works — a useful antidote to hype.", ["incremental", "progressive", "slow"], "“Slow” can be negative. “Incremental” means in small steps (very common in business). “Progressive” means advancing in stages. “Gradual” emphasises steady change over time.", "Progress in a language is gradual — you only notice it looking back.", "— I don’t feel any better at English.\n— Compare with Day 1. Gradual change is invisible day to day.", "Describe a gradual change in your life.")
  ],
  culture: "neuroplasticity",
  cultureNote: "When people say “you can’t teach an old dog new tricks”, you can now answer with evidence — and with nuance: adults can rewire, but it takes deliberate effort.",
  sayBetter: {
    basic: "The brain can change.",
    levels: [
      ["Level 1", "The brain can change when we learn.", "Accurate, generic."],
      ["Level 2", "The brain stays plastic throughout life — it changes with experience.", "Precise term."],
      ["Level 3", "Neuroplasticity means the brain keeps rewiring itself, but it depends on attention and repetition.", "Concept + condition."],
      ["Level 4", "The brain stays plastic throughout life, which is genuinely hopeful — but it’s not magic. Change depends on attention, repetition and sleep, which is why “rewire your brain in a week” is more marketing than neuroscience.", "Concept + condition + scepticism. Knowledgeable, not hyped."]
    ],
    prompt: "Explain neuroplasticity at Level 4 to a colleague."
  },
  exercise: {
    title: "Science or hype?",
    instructions: "Decide whether each claim is accurate, exaggerated or false — and correct it.",
    items: [
      { q: "“After 35, the brain stops changing.”", a: "False. Plasticity continues throughout life, though it may require more deliberate effort." },
      { q: "“This app will rewire your brain in 7 days.”", a: "Exaggerated. Structural change is gradual and depends on sustained practice." },
      { q: "“London taxi drivers’ hippocampi changed as they learned the city.”", a: "Accurate, with nuance — Maguire’s studies found differences and growth in those who qualified." },
      { q: "“Bad habits are also learned through plasticity.”", a: "Accurate — the same mechanism strengthens patterns we don’t want." }
    ]
  },
  think: { q: "If your brain is shaped by what you repeatedly do, what is your current daily routine shaping you into?", angles: ["What do you repeat every day without choosing it?", "Which repetition would you add — and which remove?", "Does this idea feel empowering or heavy?"] },
  express: { prompt: "Explain neuroplasticity to a friend in 5–6 sentences: Hebb’s idea, one piece of evidence, one caveat, and what it means for your English." },
  speak: { prompt: "Explain neuroplasticity simply — and what it means for learning a language as an adult.", seconds: 90, structure: ["Define it simply", "Hebb’s idea in your own words", "The taxi-driver evidence", "A caveat: effort, gradual", "What it means for you"] },
  recall: [
    { q: "Who proposed that connections strengthen when neurons are active together?", a: "Donald Hebb, 1949." },
    { q: "What did Maguire’s taxi-driver studies show?", a: "Learning London’s streets was linked to changes in the hippocampus; trainees who qualified showed growth." }
  ],
  reflect: "What would you practise differently if you truly believed your brain could change?",
  deep: { title: "Read: Norman Doidge, The Brain That Changes Itself (2007)", body: "A popular introduction to neuroplasticity through case stories. Engaging — but read with a critical eye: some cases are dramatic and individual.", prompt: "Pick one case and write: what is the evidence, and what might be exaggerated?" }
});

T("b2", { track: "brain", n: 2, module: "Foundations", title: "How memory works — and why we forget",
  why: "You will forget most of what you learn unless you work with the way memory works. Understanding encoding, consolidation and retrieval explains why this app brings words back on days 1, 3, 7, 14, 30 and 60.",
  learn: {
    body: [
      "Memory has three stages: <strong>encoding</strong> (getting information in — attention is essential), <strong>consolidation</strong> (stabilising it over hours and days, much of it during sleep), and <strong>retrieval</strong> (getting it back out when you need it).",
      "In 1885, Hermann Ebbinghaus published the first experimental study of memory. Testing himself on lists of nonsense syllables, he found that forgetting is rapid at first and then levels off — the <strong>forgetting curve</strong>. Much of what we learn is lost within a day or two.",
      "He also found the cure: reviewing material at <strong>increasing intervals</strong> slows forgetting dramatically. This <strong>spacing effect</strong> is one of the most replicated findings in psychology — and the logic behind spaced-repetition systems like this app’s Review.",
      "Meaning helps too. We remember better what we connect to what we already know (“elaborative encoding”) — which is why the app links every word to a story, a cultural reference and your own sentence."
    ],
    phrases: [
      { en: "It’s not that I don’t know it — I just can’t retrieve it.", tone: "Precise", note: "Distinguishes storage from retrieval." },
      { en: "A little, often, beats a lot, once.", tone: "Memorable", note: "The spacing effect in five words." },
      { en: "It’s on the tip of my tongue.", tone: "Everyday", note: "Psychologists actually study the “tip-of-the-tongue” state." },
      { en: "I need to connect it to something I already know.", tone: "Strategic", note: "Elaborative encoding, in plain English." }
    ],
    tip: "Forgetting is not failure. It’s the signal to review."
  },
  vocab: [
    V("retain", "ri-TAYN", "verb", "To keep or continue to have something, especially information in memory.", "Noun: retention — also a key business metric (customer retention, v19).", ["remember", "keep", "hold on to"], "“Remember” is the act of recalling. “Keep” is general. “Retain” is about keeping information over time — more formal and precise.", "Spacing your reviews helps you retain far more.", "— How do you retain so much from books?\n— I write a summary the day after. It forces me to retrieve it.", "What helps you retain new information?"),
    V("consolidate", "kun-SOL-ih-dayt", "verb", "To make something stronger or more stable; in memory, to stabilise a new memory.", "Also used in business: to consolidate a position, consolidate suppliers.", ["strengthen", "stabilise", "reinforce"], "“Strengthen” is general. “Reinforce” adds support. “Stabilise” stops change. “Consolidate” means combine and strengthen — in memory, the process that makes learning last.", "Sleep helps consolidate what you learned during the day.", "— Should I study one more hour?\n— Sleep might help you consolidate it better.", "Use “consolidate” about memory and about work."),
    V("spacing effect", "SPAY-sing ih-FEKT", "noun", "The finding that learning is more durable when reviews are spread out over time.", "A scientific term worth knowing — it sounds knowledgeable in any discussion about training or learning.", ["distributed practice", "spaced repetition"], "“Distributed practice” is the academic term. “Spaced repetition” is the method (apps, flashcards). The “spacing effect” is the phenomenon those methods exploit.", "Thanks to the spacing effect, ten minutes a day beats two hours on Sunday.", "— Why does the app make me review old words?\n— The spacing effect. It catches them just before you forget.", "Explain the spacing effect in one sentence."),
    V("cram", "KRAM", "verb", "To study intensively just before an exam.", "Informal. Cramming can work for tomorrow’s test — and is quickly forgotten.", ["swot (UK)", "study hard", "binge-study"], "“Study hard” is neutral. “Swot” is British and informal. “Cram” specifically means intense last-minute study — the opposite of spacing.", "I crammed for every exam at university and remember almost nothing.", "— Are you ready for the presentation?\n— I crammed last night. Not ideal.", "Write about something you crammed — and how much you remember.")
  ],
  culture: "ebbinghaus",
  cultureNote: "A 19th-century German psychologist memorising nonsense syllables is why your review queue exists. Science quietly shapes everyday tools.",
  sayBetter: {
    basic: "I forget words quickly.",
    levels: [
      ["Level 1", "I forget new words very quickly.", "True, but resigned."],
      ["Level 2", "I tend to forget new words within a few days.", "Calibrated."],
      ["Level 3", "I forget new words quickly unless I review them — the classic forgetting curve.", "A reference adds knowledge."],
      ["Level 4", "Like everyone, I forget new words fast — that’s Ebbinghaus’s forgetting curve. The trick isn’t to study harder but to space my reviews, so I retrieve each word just before it fades.", "Normalises, explains and offers a strategy."]
    ],
    prompt: "Describe your own learning habits at Level 4."
  },
  exercise: {
    title: "Encoding, consolidation or retrieval?",
    instructions: "Which stage of memory is involved — and what would help?",
    items: [
      { q: "You read a page while checking your phone and remember nothing.", a: "Encoding failed — attention is required. Remove the phone." },
      { q: "You can’t remember a colleague’s name, then it comes to you an hour later.", a: "Retrieval — the memory was stored but not accessible at that moment." },
      { q: "You learned 20 words and slept badly; the next day they’re vague.", a: "Consolidation — sleep helps stabilise new memories." },
      { q: "You remember a word because it’s linked to a funny story.", a: "Elaborative encoding — connecting new information to meaning." }
    ]
  },
  think: { q: "If forgetting is natural, what deserves to be remembered in your life — and how will you make sure it is?", angles: ["What do you wish you remembered from school or university?", "What do you review regularly without calling it “studying”?", "Is some forgetting useful?"] },
  express: { prompt: "Design a 10-minute daily learning routine for yourself based on encoding, consolidation and retrieval. Explain each choice." },
  speak: { prompt: "Explain why we forget, and what the spacing effect is, as if to a team you are training.", seconds: 90, structure: ["Three stages of memory", "Ebbinghaus and the forgetting curve", "The spacing effect", "One practical recommendation"] },
  recall: [
    { q: "Learning Brain 1: What does “plastic” mean for the brain?", a: "Able to change its structure and connections through experience." },
    { q: "What are the three stages of memory?", a: "Encoding, consolidation, retrieval." }
  ],
  reflect: "Which important thing have you learned and then lost because you never reviewed it?",
  deep: { title: "Try it: a spacing experiment", body: "Choose 10 new words. Review five of them once tonight (massed). Review the other five for two minutes on days 1, 3 and 7 (spaced).", prompt: "On day 14, test yourself on all ten. Record the result." }
});

T("b3", { track: "brain", n: 3, module: "Foundations", title: "Retrieval practice and desirable difficulties",
  why: "The single most effective learning technique is also the one that feels least pleasant: testing yourself. Knowing why changes how you study, train teams and design learning at work.",
  learn: {
    body: [
      "In 2006, Henry Roediger and Jeffrey Karpicke compared students who reread a text with students who read it once and then tried to recall it. Right after, rereaders felt more confident. A week later, the students who had practised retrieval remembered significantly more. This is the <strong>testing effect</strong>, or <strong>retrieval practice</strong>.",
      "Why? Each act of retrieval strengthens and reorganises the memory. Rereading only makes the material feel <strong>familiar</strong> — an “illusion of fluency” that fools us into thinking we know it.",
      "Robert Bjork calls such productive struggles <strong>desirable difficulties</strong> (1994): spacing, testing, and <strong>interleaving</strong> (mixing different topics or skills) slow you down in the moment and improve long-term learning. Not all difficulty is desirable: if a task is impossible, you learn nothing. The sweet spot is effortful but achievable.",
      "This is why the app asks you to answer before revealing, to write your own sentence, and to speak without notes. The discomfort is not a sign you are failing. It is the learning."
    ],
    phrases: [
      { en: "It feels harder, but that’s the point.", tone: "Encouraging", note: "Reframes difficulty as productive." },
      { en: "Rereading gives you an illusion of fluency.", tone: "Knowledgeable", note: "A precise concept to name." },
      { en: "Let me try to recall it before I look.", tone: "Practical", note: "Retrieval practice in daily life." },
      { en: "The struggle is where the learning happens.", tone: "Mentor-like", note: "Use with teams, children — and yourself." }
    ],
    tip: "If it feels easy, you’re probably not learning much."
  },
  vocab: [
    V("retrieve", "ri-TREEV", "verb", "To get something back; to bring information out of memory.", "Also used for data (retrieve a file) — a good bridge between psychology and technology (RAG, v12).", ["recall", "recover", "access"], "“Recall” is remembering. “Recover” suggests something lost. “Access” means being able to reach. “Retrieve” is the active act of bringing back — the term used in learning science.", "Every time you retrieve a word, you make it easier to retrieve next time.", "— I knew the answer, but I couldn’t retrieve it in the meeting.\n— That’s why we rehearse out loud.", "Write a sentence about retrieving a memory or a file."),
    V("illusion", "ih-LOO-zhun", "noun", "A false idea or belief; something that seems true but isn’t.", "“The illusion of fluency/competence/control” — powerful phrases in analysis.", ["delusion", "misconception", "mirage"], "A “misconception” is a mistaken belief. A “delusion” is a firmly held false belief, often clinical. A “mirage” is something that disappears when approached. An “illusion” is a misleading impression.", "Highlighting a book creates an illusion of learning.", "— I’ve read the report three times; I know it.\n— Careful — that might be the illusion of fluency. Try explaining it without notes.", "Name an illusion people often have about learning or work."),
    V("interleave", "in-ter-LEEV", "verb", "To mix different topics or types of practice instead of doing one block at a time.", "Counter-intuitive and well supported for many skills — a sophisticated term.", ["mix", "alternate", "intersperse"], "“Mix” is general. “Alternate” means take turns between two. “Intersperse” means scatter among. “Interleave” is the learning-science term for mixing practice.", "Interleaving grammar, vocabulary and speaking feels messier but works better.", "— Why does the app mix topics?\n— It interleaves on purpose. It’s harder, and it sticks.", "How could you interleave practice in your own work?"),
    V("effortful", "EF-urt-ful", "adjective", "Requiring a lot of effort.", "Neutral in learning science — effortful is often good.", ["demanding", "strenuous", "laborious"], "“Laborious” suggests tedious. “Strenuous” is physical. “Demanding” requires a lot (v15). “Effortful” simply describes mental effort, without complaint.", "Effortful recall builds stronger memories than easy rereading.", "— This exercise is exhausting!\n— Good. Effortful practice is the kind that lasts.", "Describe something effortful that was worth it.")
  ],
  culture: "retrieval",
  cultureNote: "Retrieval practice is also a leadership tool: asking your team to explain a strategy back to you is more effective than sending the slides again.",
  sayBetter: {
    basic: "I read it many times so I know it.",
    levels: [
      ["Level 1", "I’ve read it several times, so I think I know it.", "Clearer."],
      ["Level 2", "I’ve reread it, but I should test whether I can explain it.", "Self-aware."],
      ["Level 3", "Rereading makes it feel familiar, but that can be an illusion — I’ll try to recall it first.", "Names the concept."],
      ["Level 4", "I’ve reread it a few times, but familiarity isn’t the same as knowledge. Let me close it and explain it out loud — if I can’t, I don’t really know it yet.", "A practical, credible insight — also great advice to give a team."]
    ],
    prompt: "Write Level 4 advice for a colleague preparing for a presentation."
  },
  exercise: {
    title: "Make it a retrieval",
    instructions: "Turn each passive activity into retrieval practice.",
    items: [
      { q: "Rereading your notes before a meeting.", a: "Close the notes and write the three key points from memory; then check." },
      { q: "Watching a video about AI three times.", a: "Watch once, then explain it aloud in two minutes without looking." },
      { q: "Highlighting a report.", a: "After each section, write one sentence summarising it without looking back." },
      { q: "Sending your team the strategy slides again.", a: "Ask each person to explain the strategy in their own words at the next meeting." }
    ]
  },
  think: { q: "Why do schools and companies keep using methods (rereading, long slide decks) that research shows are less effective?", angles: ["Do they feel more productive?", "Is testing associated with judgement rather than learning?", "How would you redesign training at your company?"] },
  express: { prompt: "Write how you would apply retrieval practice and interleaving to one skill you need at work." },
  speak: { prompt: "Without notes: explain the testing effect, the illusion of fluency, and one desirable difficulty.", seconds: 90, structure: ["The 2006 experiment", "Why rereading misleads us", "Desirable difficulties", "How you’ll apply it"] },
  recall: [
    { q: "Learning Brain 2: What did Ebbinghaus discover?", a: "The forgetting curve — and that spaced reviews slow forgetting." },
    { q: "What is a desirable difficulty?", a: "A difficulty that slows learning in the moment but improves long-term retention (Bjork)." }
  ],
  reflect: "Where in your life do you choose the comfortable method over the effective one?",
  deep: { title: "Read: Make It Stick (2014)", body: "By Peter Brown, Henry Roediger and Mark McDaniel — the clearest book on the science of learning, written for a general audience.", prompt: "Summarise the three ideas from the book you will use, from memory." }
});

T("b4", { track: "brain", n: 4, module: "Foundations", title: "Sleep, the night shift of learning",
  why: "Senior roles often trade sleep for work. The science suggests that’s a poor trade for learning, memory and judgement. Today you get the evidence — and the language to discuss it credibly.",
  learn: {
    body: [
      "Sleep is not just rest. During sleep the brain <strong>consolidates</strong> memories: studies in rodents show the hippocampus “replays” patterns of activity from the day, and in humans, sleep after learning improves later recall compared with staying awake.",
      "Different stages seem to do different work. <strong>Deep, slow-wave sleep</strong> is associated with consolidating facts and events. <strong>REM sleep</strong>, when most vivid dreaming happens, is associated with emotional memory and with integrating ideas — which may be why solutions sometimes appear after “sleeping on it”.",
      "Sleep loss also harms the next day’s learning: the ability to form new memories falls, attention lapses increase, and emotional reactivity rises. For leaders, that means worse decisions and shorter tempers.",
      "Precision note: popular books have sometimes overstated specific claims about sleep. The robust core is simple — regular, sufficient sleep supports memory and judgement; chronic sleep deprivation undermines both."
    ],
    phrases: [
      { en: "Let me sleep on it.", tone: "Wise, natural", note: "A classic expression with scientific support." },
      { en: "Sleep is when the learning gets consolidated.", tone: "Knowledgeable", note: "The core idea." },
      { en: "I’m running on empty.", tone: "Informal", note: "Very tired, with no energy left." },
      { en: "Burning the midnight oil rarely pays off.", tone: "Measured", note: "“Burning the midnight oil” = working late into the night." }
    ],
    tip: "Rest is part of the work."
  },
  vocab: [
    V("sleep-deprived", "SLEEP-di-PRYVD", "adjective", "Not having had enough sleep, often over a long period.", "Common in workplace conversations about burnout.", ["exhausted", "drained", "running on empty"], "“Exhausted” and “drained” describe how you feel. “Running on empty” is informal. “Sleep-deprived” names the specific cause.", "Sleep-deprived managers tend to make more impulsive decisions.", "— You seem irritable today.\n— Sorry — I’m completely sleep-deprived after the launch.", "Write about the effect of being sleep-deprived on your work."),
    V("recharge", "ree-CHARJ", "verb", "To regain energy, like a battery.", "Natural and positive; common in conversations about holidays and rest.", ["recover", "rest", "unwind"], "“Rest” is general. “Unwind” means relax after tension. “Recover” suggests returning from a bad state. “Recharge” means restoring energy for what comes next.", "I need a quiet weekend to recharge before the board meeting.", "— Are you going out tonight?\n— No, I’m staying in to recharge.", "How do you recharge?"),
    V("impair", "im-PAIR", "verb", "To damage or weaken something, especially a function or ability.", "Formal and precise; used in science and law (impaired judgement, impaired driving).", ["weaken", "damage", "undermine"], "“Damage” is general and can be physical. “Undermine” suggests gradual weakening from below. “Impair” is about reducing the functioning of something.", "Even one bad night can impair attention and memory.", "— Should I review the contract tonight?\n— Not at 2 a.m. Tiredness impairs judgement.", "Write a sentence with “impaired judgement”."),
    V("integrate", "IN-tih-grayt", "verb", "To combine parts into a whole; to connect new information with existing knowledge.", "A key word in both learning (integrating ideas) and business (integrating systems, v16).", ["combine", "incorporate", "merge"], "“Combine” is general. “Merge” means become one (companies merge). “Incorporate” means include as part. “Integrate” means connect so parts work together.", "During REM sleep, the brain may integrate new information with older memories.", "— How do we integrate the new tool with our CRM?\n— We’ll need IT for that.", "Use “integrate” for learning and for work.")
  ],
  culture: "sleep-memory",
  cultureNote: "“Sleeping on it” is folk wisdom with scientific support. Being able to say so precisely — without exaggeration — is the kind of knowledge that sounds genuinely informed.",
  sayBetter: {
    basic: "Sleep is important for the brain.",
    levels: [
      ["Level 1", "Sleep is very important for our brains.", "A cliché."],
      ["Level 2", "Sleep helps the brain consolidate what we learn.", "A mechanism."],
      ["Level 3", "During sleep, the brain replays and stabilises the day’s learning, so sleeping after studying improves recall.", "Mechanism + consequence."],
      ["Level 4", "I’ve stopped treating sleep as lost time. The evidence is fairly robust that it’s when the brain consolidates learning — and that chronic sleep loss quietly impairs judgement, which is a real risk in senior roles.", "Personal stance + calibrated evidence + professional relevance."]
    ],
    prompt: "Make the case for sleep to an overworked team, at Level 4."
  },
  exercise: {
    title: "Advise them",
    instructions: "Give each person precise, science-based advice in one or two sentences.",
    items: [
      { q: "A colleague plans to stay up all night preparing a pitch.", a: "Prepare the key points tonight, then sleep — consolidation will help you recall them better tomorrow than an all-nighter would." },
      { q: "Your friend studies vocabulary only on Sunday nights, very late.", a: "Spread it over the week, and review before sleep rather than after midnight when attention is low." },
      { q: "A manager makes a big decision after a red-eye flight.", a: "If possible, sleep on it — sleep loss impairs judgement and increases emotional reactivity." }
    ]
  },
  think: { q: "Why does work culture often celebrate exhaustion — and what would change if it didn’t?", angles: ["Is “I only sleep five hours” a status signal?", "Who pays the price for tired decisions?", "What would a sleep-friendly company look like?"] },
  express: { prompt: "Write a short message to your team (5–6 sentences) explaining why you’re asking them not to send emails late at night, with one scientific reason." },
  speak: { prompt: "Make a 90-second case to your leadership team for protecting sleep — with evidence, nuance and a practical proposal.", seconds: 90, structure: ["The claim", "The science: consolidation", "The cost of sleep loss", "A caveat", "A proposal"] },
  recall: [
    { q: "Learning Brain 3: What is the illusion of fluency?", a: "Familiarity from rereading that makes us think we know something we can’t retrieve." },
    { q: "Which sleep stage is linked to consolidating facts?", a: "Deep, slow-wave sleep." }
  ],
  reflect: "What is your honest relationship with sleep — and what is it costing your learning?",
  deep: { title: "Read critically: sleep science in popular books", body: "Books like Matthew Walker’s Why We Sleep (2017) brought sleep science to millions — and some specific claims have been criticised as overstated. Read one chapter and one critique.", prompt: "Write which claims seem robust and which seem exaggerated." }
});

T("b5", { track: "brain", n: 5, module: "Applying it", title: "Attention: the gate to rewiring",
  why: "Plasticity follows attention. In a world designed to fragment it, the ability to focus is a competitive advantage — especially in senior roles where the most valuable work requires deep thought.",
  learn: {
    body: [
      "The brain changes most where attention goes. Passive exposure — English in the background while you scroll — produces little learning. <strong>Focused attention</strong> signals that something matters and should be encoded.",
      "We cannot truly multitask on demanding activities; we <strong>switch</strong>, and each switch has a cost in time and errors (Rubinstein, Meyer & Evans, 2001). A Stanford study (Ophir, Nass & Wagner, 2009) found that heavy media multitaskers performed worse at filtering out irrelevant information.",
      "<strong>Dopamine</strong> is widely misunderstood. Wolfram Schultz’s research showed dopamine neurons signal <em>reward prediction errors</em> — the gap between what we expect and what we get. It drives wanting, anticipation and learning, not simply pleasure. Notifications exploit this: unpredictable rewards are especially compelling.",
      "Be sceptical of “dopamine detox” trends: you can’t remove dopamine. What you can do is redesign your environment — fewer interruptions, protected blocks of deep work — so attention goes where you choose."
    ],
    phrases: [
      { en: "I need a block of uninterrupted time for this.", tone: "Professional, firm", note: "Protects deep work politely." },
      { en: "Let me give this my full attention.", tone: "Respectful", note: "Signals presence in a conversation." },
      { en: "Multitasking is really just fast switching.", tone: "Knowledgeable", note: "The scientific correction in plain English." },
      { en: "It’s less about willpower than about environment.", tone: "Insightful", note: "A mature view of focus." }
    ],
    tip: "Where attention goes, rewiring follows."
  },
  vocab: [
    V("distraction", "dis-TRAK-shun", "noun", "Something that takes your attention away from what you should be doing.", "Verb: distract. “Distracted” = unable to concentrate.", ["interruption", "diversion", "disturbance"], "An “interruption” stops you. A “disturbance” is a noise or disorder. A “diversion” can be a pleasant change of activity. A “distraction” pulls attention away.", "Notifications are the biggest distraction in my working day.", "— You seem distracted.\n— Sorry — I’m waiting for an important email.", "Name your biggest distraction and one way to reduce it."),
    V("deep work", "DEEP WURK", "noun", "Focused, uninterrupted work on cognitively demanding tasks.", "Popularised by Cal Newport’s book Deep Work (2016). Now common in workplace language.", ["focused work", "concentration", "flow"], "“Flow” (Csikszentmihalyi) is a state of total absorption. “Focused work” is plain. “Deep work” is the deliberate practice of protecting time for demanding thinking.", "I block two hours every morning for deep work — no meetings.", "— Can we meet at 9?\n— I keep mornings for deep work. How about 2 p.m.?", "When do you do your best deep work?"),
    V("compulsive", "kum-PUL-siv", "adjective", "Difficult to stop or control; done because of a strong urge.", "Used for behaviours like checking phones — stronger than “frequent”.", ["habitual", "obsessive", "addictive"], "“Habitual” is automatic, not necessarily problematic. “Obsessive” suggests intrusive thoughts. “Addictive” is clinical and strong. “Compulsive” describes an urge that’s hard to resist.", "Checking email has become almost compulsive for me.", "— How many times a day do you check your phone?\n— Too many. It’s compulsive.", "Describe a compulsive habit you’d like to change."),
    V("prioritise", "pry-OR-ih-tyz", "verb", "To decide which things are most important and deal with them first.", "Essential senior vocabulary. Noun: priority.", ["rank", "focus on", "put first"], "“Rank” orders things. “Focus on” directs attention. “Put first” is plain. “Prioritise” implies a deliberate decision about what matters most — and what waits.", "If everything is urgent, nothing is prioritised.", "— Can you add this to your list?\n— Happy to — which of the current projects should I deprioritise?", "What will you prioritise this week, and what will you drop?")
  ],
  culture: "attention-science",
  cultureNote: "Herbert Simon’s 1971 insight (in your Passport) predicted this world: “a wealth of information creates a poverty of attention.” Protecting attention is now a leadership skill.",
  sayBetter: {
    basic: "I can’t concentrate because of my phone.",
    levels: [
      ["Level 1", "My phone makes it hard to concentrate.", "Clearer."],
      ["Level 2", "Constant notifications make it hard to do deep work.", "Precise term."],
      ["Level 3", "I’ve realised I don’t multitask — I switch, and every switch costs me focus.", "Insight from the science."],
      ["Level 4", "It’s less about willpower than about design. My phone is built to capture attention, so I’ve stopped trying to resist it and started removing it — two hours a morning, notifications off. The difference in the quality of my thinking is striking.", "System-level thinking + concrete action + result."]
    ],
    prompt: "Describe your relationship with focus at Level 4."
  },
  exercise: {
    title: "Myth or evidence?",
    instructions: "Correct or confirm each statement.",
    items: [
      { q: "“I’m good at multitasking.”", a: "For demanding tasks, people switch rather than multitask, with measurable costs — even if it feels efficient." },
      { q: "“Dopamine is the pleasure chemical.”", a: "Oversimplified — dopamine is more about prediction, motivation and wanting than pleasure itself." },
      { q: "“A dopamine detox will reset my brain.”", a: "Marketing language. You can’t remove dopamine; you can reduce compulsive triggers in your environment." },
      { q: "“Background English podcasts will make me fluent.”", a: "Passive exposure helps a little; focused attention and active use matter far more." }
    ]
  },
  think: { q: "Who benefits from your distraction — and what would it cost you to take your attention back?", angles: ["Which apps are designed for your attention?", "What deep work does your role require?", "What would your calendar look like if you designed it for focus?"] },
  express: { prompt: "Write a short proposal to your team for “focus hours” — the problem, the evidence, the proposal and how you’ll measure it." },
  speak: { prompt: "Explain why multitasking is a myth and what dopamine really does — then say what you’ll change.", seconds: 90, structure: ["Switching, not multitasking", "The evidence", "Dopamine, accurately", "Environment over willpower", "Your change"] },
  recall: [
    { q: "Learning Brain 4: What happens to memories during sleep?", a: "They are consolidated — replayed and stabilised." },
    { q: "What do dopamine neurons signal, according to Schultz?", a: "Reward prediction errors — the gap between expected and actual reward." }
  ],
  reflect: "When did you last give something your full, uninterrupted attention for an hour? What happened?",
  deep: { title: "Read: Cal Newport, Deep Work (2016) — or Johann Hari, Stolen Focus (2022)", body: "Two popular books on attention: one practical, one more political. Read a chapter of either.", prompt: "Design your ideal deep-work week and write it as a calendar." }
});

T("b6", { track: "brain", n: 6, module: "Applying it", title: "Habits: rewiring through repetition",
  why: "Your daily practice in this program only works if it becomes a habit. Understanding how habits form — and the myths around them — helps you build routines that last, and lead teams through change.",
  learn: {
    body: [
      "A habit is a behaviour triggered automatically by a context — a time, a place, a preceding action. The psychologist Wendy Wood’s research suggests that around 40% of what people do each day is habitual: done in the same context, often while thinking about something else.",
      "Habits form through repetition in a stable context, gradually shifting control from deliberate decision to automatic response. A common model describes a <strong>cue</strong> (trigger), a <strong>routine</strong> (behaviour) and a <strong>reward</strong>.",
      "How long does it take? Not 21 days — that figure comes from anecdote, not research. In a 2010 study, Phillippa Lally and colleagues found that new daily habits took between 18 and 254 days to become automatic, with a median of 66. Importantly, <strong>missing one day did not derail</strong> the process.",
      "Practical rules: attach the new habit to an existing one (“after my morning coffee, I do my review”); make it small and easy at first; keep the context stable; and treat lapses as normal. This is the science behind the app’s philosophy: consistency over perfection."
    ],
    phrases: [
      { en: "I’ve built it into my routine.", tone: "Practical", note: "Shows a habit, not willpower." },
      { en: "After X, I do Y.", tone: "Strategic", note: "Habit stacking — linking a new habit to an existing cue." },
      { en: "It’s become second nature.", tone: "Natural", note: "Means automatic, effortless." },
      { en: "Missing a day isn’t failure — it’s data.", tone: "Encouraging", note: "Healthy relationship with lapses." }
    ],
    tip: "Consistency over perfection — the science agrees."
  },
  vocab: [
    V("cue", "KYOO", "noun", "A signal that triggers an action or response.", "Also used in theatre (an actor’s cue) and conversation (“take your cue from her”).", ["trigger", "signal", "prompt"], "A “trigger” often starts something strong or negative. A “prompt” is a reminder. A “signal” is general. A “cue” is the contextual signal that starts a habit.", "My cue to review vocabulary is pouring my first coffee.", "— How do you remember to meditate?\n— Brushing my teeth is my cue.", "What could be the cue for your daily English practice?"),
    V("second nature", "SEK-und NAY-cher", "idiom", "Something you do so often that it feels natural and automatic.", "Lovely for describing mastered skills.", ["automatic", "instinctive", "habitual"], "“Automatic” is mechanical. “Instinctive” suggests innate. “Habitual” is neutral. “Second nature” means learned so well it feels innate.", "After years of presentations, speaking in public has become second nature.", "— How do you remember all those shortcuts?\n— They’re second nature now.", "What has become second nature to you?"),
    V("lapse", "LAPS", "noun / verb", "A temporary failure or break in a habit, standard or concentration.", "Gentle and realistic — a lapse is temporary, not a collapse.", ["slip", "relapse", "setback"], "A “slip” is a small mistake. A “setback” delays progress. A “relapse” is a return to a bad state (often health). A “lapse” is a temporary break — expected and recoverable.", "A three-day lapse doesn’t undo three months of practice.", "— I missed my run all week.\n— A lapse, not a failure. Start again tomorrow.", "Write about a lapse and how you recovered."),
    V("sustainable", "suh-STAY-nuh-bul", "adjective", "Able to continue over a long period without causing damage or exhaustion.", "Used for habits, workloads, growth and the environment (v20).", ["maintainable", "lasting", "viable"], "“Lasting” describes duration. “Viable” means able to work. “Maintainable” means can be kept up. “Sustainable” means can continue without burning out resources — human or natural.", "Ten minutes a day is sustainable; two hours a day isn’t.", "— Can the team keep up this pace?\n— Not sustainably. We’ll burn people out.", "Describe a sustainable version of a goal you have.")
  ],
  culture: "habits-science",
  cultureNote: "The 66-day finding — and the fact that missing a day didn’t matter — is the scientific version of this app’s promise: no punishment, just continue.",
  sayBetter: {
    basic: "I want to study every day but I forget.",
    levels: [
      ["Level 1", "I want to study every day, but I often forget.", "Clearer."],
      ["Level 2", "I’m trying to build a daily study habit, but I keep missing days.", "Habit language."],
      ["Level 3", "I’ve linked my practice to my morning coffee so it doesn’t depend on remembering.", "A strategy."],
      ["Level 4", "I’ve stopped relying on motivation. My practice now follows my morning coffee — same time, same chair. Some days I miss it, but the research suggests that doesn’t matter much; what matters is coming back.", "Strategy + science + healthy attitude."]
    ],
    prompt: "Describe how you’ll make English practice a habit, at Level 4."
  },
  exercise: {
    title: "Design the habit",
    instructions: "Write a cue, a small routine and a reward for each goal.",
    items: [
      { q: "Speaking English for 2 minutes daily.", a: "Cue: after parking at work. Routine: answer one speaking challenge aloud in the car. Reward: tick it off and listen back once." },
      { q: "Reading 10 pages a day.", a: "Cue: getting into bed. Routine: 10 pages before the phone. Reward: the pleasure of the story — and a book finished each month." },
      { q: "A weekly 1:1 with each team member.", a: "Cue: Monday morning calendar block. Routine: 20-minute call with three fixed questions. Reward: problems caught early." }
    ]
  },
  think: { q: "Which of your habits are serving the woman you want to become — and which are serving someone you used to be?", angles: ["What do you do every day without deciding to?", "Which context triggers your least useful habit?", "What would you stack your new habit onto?"] },
  express: { prompt: "Design your English-practice habit for the next 66 days: cue, routine, reward, and what you’ll do when you lapse." },
  speak: { prompt: "Explain how habits form and why the 21-day rule is a myth — then describe the habit you’re building.", seconds: 90, structure: ["What a habit is", "Cue, routine, reward", "The 66-day finding", "Missing a day", "Your habit"] },
  recall: [
    { q: "Learning Brain 5: Do we multitask?", a: "On demanding tasks, we switch — with costs in time and errors." },
    { q: "Median time to form a habit in Lally’s study?", a: "66 days (range 18–254)." }
  ],
  reflect: "What habit would make the biggest difference to your next six months?",
  deep: { title: "Read: Wendy Wood, Good Habits, Bad Habits (2019)", body: "A research-based book by one of the leading habit scientists — more rigorous than most popular habit books.", prompt: "Identify one habit and redesign its context using her ideas." }
});

T("b7", { track: "brain", n: 7, module: "Applying it", title: "Stress, fear and speaking up",
  why: "Speaking in a second language — especially in senior meetings — can trigger a real stress response. Understanding what happens in your body, and how to reframe it, is one of the most practical things this program can give you.",
  learn: {
    body: [
      "When we feel threatened — including socially, like speaking in front of executives — the body activates a stress response: heart rate rises, breathing quickens, attention narrows. Brain regions involved in detecting threat, including the amygdala, become more active. Under high stress, access to flexible thinking and fluent word-finding can drop. That’s why your English may feel worse exactly when it matters most.",
      "Trying to “calm down” is often hard because the arousal is already there. In 2014, Alison Wood Brooks at Harvard tested another approach: before singing, public speaking or a maths test, participants said “<strong>I am excited</strong>”. Compared with those told to calm down, they performed better and felt more confident. Anxiety and excitement share similar physical arousal; the label changes how we use it. This is <strong>reappraisal</strong>.",
      "A related idea is <strong>growth mindset</strong> (Carol Dweck): believing abilities can develop. Large studies suggest its effects are real but smaller than early popular accounts claimed — useful, not magic.",
      "Practical tools: prepare your first two sentences (the hardest moment is the start); breathe out slowly before speaking; reframe arousal as readiness; and remember that listeners judge clarity and content far more than accent."
    ],
    phrases: [
      { en: "I’m excited about this.", tone: "Reframing", note: "Say it — out loud or silently — before you speak." },
      { en: "Let me gather my thoughts for a second.", tone: "Composed", note: "Buys time without looking lost." },
      { en: "Let me rephrase that.", tone: "Confident repair", note: "Correcting yourself calmly signals control, not weakness." },
      { en: "I’d like to come back to that point.", tone: "Strategic", note: "Lets you contribute later when you’ve prepared." }
    ],
    tip: "Don’t calm down. Get ready."
  },
  vocab: [
    V("composure", "kum-POH-zher", "noun", "The state of being calm and in control of your feelings.", "A key element of executive presence (v5). Adjective: composed.", ["calm", "poise", "self-control"], "“Calm” is general. “Self-control” emphasises restraint. “Poise” adds elegance and balance. “Composure” is calm control under pressure.", "She kept her composure even when the CEO challenged her figures.", "— How did you stay so calm?\n— I didn’t feel calm. I just kept my composure.", "Describe a moment when you kept — or lost — your composure."),
    V("reframe", "ree-FRAYM", "verb", "To think about or present something in a different way.", "Used in psychology, negotiation and leadership (Month 5 framing).", ["reinterpret", "rethink", "recast"], "“Rethink” means reconsider. “Reinterpret” means find a new meaning. “Recast” is to present differently. “Reframe” means change the frame — the lens — through which something is seen.", "I reframed my nerves as excitement, and it actually helped.", "— This project is a disaster.\n— Let’s reframe it: what have we learned that we couldn’t have learned otherwise?", "Reframe a situation that worries you."),
    V("self-conscious", "self-KON-shus", "adjective", "Nervously aware of yourself and how others might see you.", "Very common among second-language speakers.", ["insecure", "awkward", "embarrassed"], "“Embarrassed” is a reaction to a specific moment. “Awkward” describes a situation or manner. “Insecure” is a deeper lack of confidence. “Self-conscious” is heightened awareness of being observed.", "I used to feel self-conscious about my accent in meetings.", "— Why don’t you speak up more?\n— I get self-conscious when everyone is a native speaker.", "When do you feel self-conscious in English?"),
    V("resilient", "ri-ZIL-yunt", "adjective", "Able to recover quickly from difficulty.", "Overused in corporate language — use it about real recovery, not just endurance.", ["tough", "adaptable", "hardy"], "“Tough” suggests strength, maybe hardness. “Adaptable” means adjusting to change. “Hardy” is physical endurance. “Resilient” emphasises bouncing back.", "Resilient speakers aren’t the ones who never make mistakes — they’re the ones who keep going.", "— That presentation went badly.\n— It happens. What matters is how resilient you are next time.", "Write about becoming more resilient in some area.")
  ],
  culture: "reappraisal",
  cultureNote: "Reappraisal is the practical cousin of emotional granularity (Day 16): naming and reframing a feeling changes what it does to you.",
  sayBetter: {
    basic: "I am very nervous to speak in meetings because my English is bad.",
    levels: [
      ["Level 1", "I get very nervous speaking in meetings.", "Removes the self-criticism."],
      ["Level 2", "I sometimes feel self-conscious speaking in meetings in English.", "Precise, honest."],
      ["Level 3", "I used to feel self-conscious in meetings; now I prepare my first two sentences and reframe the nerves as readiness.", "Strategy."],
      ["Level 4", "Speaking up in senior meetings still raises my heart rate — but I’ve learned to treat that as readiness rather than fear. I prepare my opening, breathe, and remind myself that people are listening for my ideas, not my accent.", "Honest, composed, strategic — this sentence itself shows executive presence."]
    ],
    prompt: "Describe your relationship with speaking up at Level 4."
  },
  exercise: {
    title: "Reappraise it",
    instructions: "Reframe each anxious thought into a more useful one.",
    items: [
      { q: "“Everyone will notice my mistakes.”", a: "“People are focused on my ideas — and on themselves. Small errors rarely matter.”" },
      { q: "“My heart is racing — I’m going to panic.”", a: "“My body is getting ready. This energy can make me sharper.”" },
      { q: "“I’ll never sound as good as native speakers.”", a: "“I don’t need to sound native. I need to be clear, precise and confident.”" },
      { q: "“I froze in that meeting — I’m terrible at this.”", a: "“I froze once. Next time I’ll prepare my first two sentences.”" }
    ]
  },
  think: { q: "What is the story you tell yourself about speaking English in front of people — and is it still true?", angles: ["Where did that story begin?", "What evidence contradicts it?", "What would the woman on Day 180 say?"] },
  express: { prompt: "Write the first three sentences you’ll use next time you need to speak up in an important meeting — and the reframe you’ll use beforehand." },
  speak: { prompt: "Say “I’m excited” out loud. Then present an idea from your work in 60 seconds as if to your leadership team.", seconds: 60, structure: ["Prepared opening sentence", "The idea", "Why it matters", "What you propose"] },
  recall: [
    { q: "Learning Brain 6: What did Lally’s study find about missing a day?", a: "Missing a single day didn’t significantly derail habit formation." },
    { q: "What did Brooks’s 2014 study find?", a: "Reframing anxiety as excitement improved performance more than trying to calm down." }
  ],
  reflect: "When did you last feel brave in English? What made it possible?",
  deep: { title: "Watch: Alison Wood Brooks on anxiety reappraisal", body: "Brooks has given several accessible talks on her research; her later work on conversation (Talk, 2025) is also relevant to this program.", prompt: "Write your personal pre-meeting routine in five steps." }
});

T("b8", { track: "brain", n: 8, module: "Applying it", title: "The adult language-learning brain — and the myths",
  why: "You’re learning English as an adult, in a senior role. Knowing what science actually says about adult language learning — and which popular brain “facts” are myths — makes you a more effective learner and a more credible voice.",
  learn: {
    body: [
      "Is there a “critical period” for languages? Partly. Accents are hardest to acquire after childhood. A large 2018 study by Joshua Hartshorne, Joshua Tenenbaum and Steven Pinker suggested that the ability to learn grammar to native-like levels declines around late adolescence. But adults learn vocabulary efficiently, bring strategies and world knowledge children lack, and routinely reach high, professional proficiency.",
      "Being bilingual has well-documented practical and social benefits. Claims of a general cognitive “bilingual advantage” in attention or executive function are <strong>contested</strong> — some studies find it, many large ones don’t. A precise speaker says so.",
      "Now the <strong>neuromyths</strong> — popular claims that sound scientific but aren’t. “We only use 10% of our brain”: false; imaging shows activity throughout the brain. “Learning styles”: a 2008 review by Harold Pashler and colleagues found no good evidence that matching teaching to visual, auditory or kinaesthetic “styles” improves learning. “Left-brained and right-brained people”: a 2013 analysis of over 1,000 brain scans found no evidence that individuals are dominated by one hemisphere.",
      "This lesson closes the track with a principle for every topic, from neuroscience to AI: <strong>if a claim sounds too neat, check it.</strong>"
    ],
    phrases: [
      { en: "That’s actually a neuromyth.", tone: "Knowledgeable, gentle", note: "Correct politely, with evidence." },
      { en: "The evidence is mixed on that.", tone: "Calibrated", note: "For contested findings like the bilingual advantage." },
      { en: "Adults learn differently, not worse.", tone: "Encouraging", note: "An accurate summary of the research." },
      { en: "I’d want to see the study before I believed it.", tone: "Sceptical, professional", note: "A senior habit of mind." }
    ],
    tip: "If a brain fact sounds too neat, check it."
  },
  vocab: [
    V("contested", "kun-TES-tid", "adjective", "Disputed; not agreed on by experts.", "Precise word for claims under scientific debate — distinguishes you from people who repeat headlines.", ["disputed", "controversial", "debated"], "“Controversial” suggests public argument and emotion. “Disputed” means someone challenges it. “Debated” is neutral. “Contested” is precise and academic — the evidence is genuinely divided.", "The idea of a bilingual cognitive advantage is contested.", "— Does bilingualism make you smarter?\n— That’s contested. It definitely makes you more connected.", "Name a claim in your industry that is genuinely contested."),
    V("myth", "MITH", "noun", "A widely held but false belief; also a traditional story.", "Two meanings — “the myth of Sisyphus” and “the 10% myth”.", ["misconception", "fallacy", "legend"], "A “misconception” is a mistaken idea. A “fallacy” is faulty reasoning. A “legend” is a traditional story. A “myth” is a popular belief that isn’t true — or a foundational story.", "The idea that adults can’t learn languages is a myth.", "— We only use 10% of our brains, right?\n— That’s a myth, actually.", "Correct a myth about learning or work."),
    V("proficiency", "pruh-FISH-un-see", "noun", "A high level of skill or competence.", "Used in language levels (“professional proficiency”) and job descriptions.", ["competence", "fluency", "expertise"], "“Competence” is adequate ability. “Fluency” is smoothness, especially in language. “Expertise” is deep specialised knowledge. “Proficiency” is a high, measurable level of skill.", "Professional proficiency is more about precision than about accent.", "— What level is your English?\n— Professional proficiency — I’m now working on nuance.", "Describe the level of proficiency you’re aiming for."),
    V("debunk", "dee-BUNK", "verb", "To show that a belief or claim is false or exaggerated.", "Informal but widely used in journalism and science communication.", ["refute", "disprove", "expose"], "“Disprove” means prove false. “Refute” is formal and argumentative. “Expose” suggests revealing something hidden or dishonest. “Debunk” means show that a popular idea is false.", "Researchers have debunked the idea of learning styles.", "— Is it true that left-handed people are more creative?\n— Let me check before I debunk it!", "Debunk one myth you used to believe.")
  ],
  culture: "neuromyths",
  cultureNote: "Neuromyths survive because they flatter us or simplify a complex world — the same reasons misinformation spreads about AI, markets or health. Spotting them is a transferable skill.",
  sayBetter: {
    basic: "I am too old to speak English perfectly.",
    levels: [
      ["Level 1", "I started learning English late.", "Neutral fact."],
      ["Level 2", "I learned English as an adult, so my accent will always be there.", "Accurate — and acceptable."],
      ["Level 3", "Adults rarely lose their accent, but we can reach very high proficiency — especially in vocabulary and precision.", "Science-based nuance."],
      ["Level 4", "I learned English as an adult, and I’ve made peace with my accent — the research suggests it’s the hardest part to change, and the least important. What I can keep improving is precision and nuance, and that’s where professional credibility really comes from.", "Acceptance + evidence + focus on what matters."]
    ],
    prompt: "Describe yourself as an adult learner at Level 4."
  },
  exercise: {
    title: "Myth, contested, or supported?",
    instructions: "Classify each claim and explain briefly.",
    items: [
      { q: "“We use only 10% of our brains.”", a: "Myth — imaging shows activity across the brain." },
      { q: "“Being bilingual improves executive function.”", a: "Contested — findings are mixed, with many large studies showing no general advantage." },
      { q: "“Accents are harder to acquire after childhood.”", a: "Supported — though intelligibility can still improve greatly." },
      { q: "“Teaching to your learning style improves results.”", a: "Myth — reviews have found no good evidence for matching instruction to styles." },
      { q: "“Spaced repetition improves long-term memory.”", a: "Supported — one of the most robust findings in learning science." }
    ]
  },
  think: { q: "Which “facts” do you repeat at work without ever having checked them?", angles: ["Statistics in presentations?", "Personality tests?", "Claims about AI or productivity?"] },
  express: { prompt: "Write a short LinkedIn-style post (120–150 words) debunking one neuromyth, clearly and without condescension." },
  speak: { prompt: "Debunk two neuromyths and explain what science actually says about learning a language as an adult.", seconds: 120, structure: ["Myth 1 and the evidence", "Myth 2 and the evidence", "What’s contested", "What adults do well", "What this means for you"] },
  recall: [
    { q: "Learning Brain 7: What is reappraisal?", a: "Reinterpreting a feeling or situation — e.g. calling anxiety “excitement”." },
    { q: "What did Pashler et al. (2008) conclude about learning styles?", a: "No good evidence that matching teaching to learning styles improves learning." }
  ],
  reflect: "After eight weeks of brain science, what will you do differently as a learner — and as a leader?",
  deep: { title: "Read: the Hartshorne, Tenenbaum & Pinker study coverage", body: "Their 2018 study (published in Cognition) used an online grammar quiz taken by over 600,000 people. Read a reputable summary (e.g. MIT News).", prompt: "Write what the study does and doesn’t show about adult learners." }
});
})();
