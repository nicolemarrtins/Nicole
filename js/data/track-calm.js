/* Studio track: The Calm Mind — anxiety, perspective and resilience (8 lessons, c1–c8), with Passport cards. */
(function () {
const V = TAW.V;
function card(id, name, cat, period, origin, why, facts, idea, related, talk) {
  TAW.cards[id] = { id, name, cat, period, origin, why, facts, idea, related, talk };
}
function T(key, o) { TAW.trackLessons[key] = Object.assign({ track: "calm", cats: ["psychology"], skills: ["thinking", "conversation", "articulation"], difficulty: "Intermediate", minutes: 25 }, o); }

TAW.tracks.calm = {
  id: "calm", title: "The Calm Mind", short: "Calm Mind",
  subtitle: "Anxiety, perspective and resilience — the science, and the English to talk about it and to talk yourself through it.",
  cadence: "One lesson a week, at your own pace. A toolkit, not therapy.",
  modules: [
    { title: "Understand it", lessons: ["c1", "c2"] },
    { title: "The two practices: zoom out · I’ll figure it out", lessons: ["c3", "c4"] },
    { title: "Live it", lessons: ["c5", "c6", "c7", "c8"] }
  ]
};

/* ── Passport cards ── */
card("fight-or-flight", "Fight or flight (Walter Cannon)", "science", "1915", "Harvard University, USA",
  "The body’s alarm system: when we sense danger, adrenaline prepares us to fight or run — a lifesaver for our ancestors, and the reason your heart races before a presentation.",
  ["The American physiologist Walter Cannon described the response in Bodily Changes in Pain, Hunger, Fear and Rage (1915).", "It involves adrenaline, a faster heart rate, quicker breathing and tense muscles — energy redirected to deal with a threat.", "Cannon also coined “homeostasis”, the body’s tendency to keep itself in balance."],
  "Your racing heart isn’t a malfunction — it’s preparation.", ["reappraisal", "neuroplasticity", "Stress"],
  ["The fight-or-flight response was perfect for lions — it’s a bit much for emails.", "When my heart races before a meeting, I remind myself it’s just my body getting ready."]);
card("beck-cbt", "Aaron Beck & cognitive therapy", "thinkers", "1921–2021", "University of Pennsylvania, USA",
  "The psychiatrist who showed that our feelings often follow our interpretations — and founded cognitive therapy, the basis of CBT, one of the best-studied treatments for anxiety and depression.",
  ["Beck developed cognitive therapy in the 1960s after noticing his patients’ fast, automatic negative thoughts.", "He created widely used questionnaires, including the Beck Depression Inventory (1961) and the Beck Anxiety Inventory (1988).", "David Burns, influenced by Beck’s work at the University of Pennsylvania, popularised “cognitive distortions” in Feeling Good (1980)."],
  "Thoughts are guesses, not facts.", ["confirmation-bias", "dissonance", "stoicism"],
  ["Beck’s idea is that it’s often not the event but our interpretation of it that upsets us.", "CBT teaches you to test your thoughts the way a scientist tests a hypothesis."]);
card("view-from-above", "The view from above", "ideas", "c. 170 CE – today", "Marcus Aurelius · Pierre Hadot · Frank White",
  "An ancient exercise in perspective: imagine looking down on your life from very high up, until today’s worries shrink to their real size.",
  ["Marcus Aurelius, Roman emperor and Stoic, repeatedly imagined the world seen from above in his Meditations, written around 170–180 CE.", "The French historian of philosophy Pierre Hadot named the exercise “the view from above”.", "In 1987 Frank White coined the “overview effect” for the shift in perspective astronauts describe when they see Earth from space."],
  "From high enough, most worries disappear — and what remains is what matters.", ["stoicism", "existentialism", "Perspective"],
  ["Marcus Aurelius used to imagine looking down on the world from above — it puts everything into perspective.", "Astronauts call it the overview effect: from space, borders and quarrels look tiny."]);
card("jeffers", "Susan Jeffers, Feel the Fear and Do It Anyway", "books", "1987", "USA",
  "A self-help classic built on one idea: under almost every fear lies the belief “I can’t handle it” — and the antidote is “Whatever happens, I’ll handle it.”",
  ["Susan Jeffers (1938–2012) was an American psychologist and author.", "Feel the Fear and Do It Anyway was first published in 1987 and has been translated into dozens of languages.", "She argued that fear doesn’t disappear while we keep growing — so the goal is to act with it, not to wait for it to go."],
  "Whatever happens, I’ll handle it.", ["stoicism", "sdt", "Resilience"],
  ["Jeffers says the real fear underneath is usually “I can’t handle it”.", "Her answer is one sentence: whatever happens, I’ll handle it."]);
card("spotlight-effect", "The spotlight effect", "concepts", "1998–2003", "Thomas Gilovich and colleagues, Cornell University, USA",
  "We overestimate how much other people notice us — our mistakes, our appearance, our nerves. One of the most reassuring findings in social psychology.",
  ["In a 2000 study, students wearing an embarrassing T-shirt guessed that about half the room would notice it; fewer than a quarter did.", "The related “illusion of transparency” (1998) is our belief that others can see our nervousness — usually they can’t.", "Speakers who were told about the illusion of transparency felt calmer and gave better-rated speeches (2003)."],
  "You are far less visible than you feel.", ["reappraisal", "lingua-franca", "Public speaking"],
  ["The spotlight effect says people notice our mistakes far less than we think.", "Most of the time nobody can see how nervous you are — that’s the illusion of transparency."]);
card("imposter-phenomenon", "The imposter phenomenon", "concepts", "1978", "Pauline Clance and Suzanne Imes, Georgia State University, USA",
  "The persistent feeling of being a fraud despite clear evidence of success — first described in high-achieving women, and recognised by many senior people of every gender.",
  ["Clance and Imes described it in 1978 after working with successful women who attributed their achievements to luck or charm.", "They called it a “phenomenon”, not a syndrome: an experience, not a diagnosis.", "Later research has found it across genders, ages and professions."],
  "Feeling like a fraud is not evidence that you are one.", ["warmth-competence", "beck-cbt", "Self-compassion"],
  ["Clance and Imes found that many very successful women felt like frauds.", "Feeling like an imposter is common — it’s a feeling, not a fact."]);
card("frankl", "Viktor Frankl, Man’s Search for Meaning", "books", "1946", "Vienna, Austria",
  "A psychiatrist’s account of surviving Nazi concentration camps — and his argument that even in the worst circumstances we keep the freedom to choose our attitude.",
  ["Frankl (1905–1997) was a Viennese psychiatrist and neurologist who survived Auschwitz and Dachau.", "He wrote the book in nine days in 1946; it has since sold millions of copies around the world.", "He founded logotherapy, an approach centred on finding meaning in life."],
  "The last of the human freedoms: to choose one’s attitude.", ["existentialism", "stoicism", "Meaning"],
  ["Frankl argued that the one thing no one can take from you is how you choose to respond.", "His book is short, but it changes how you see your own problems."]);

/* ── Lessons ── */
T("c1", { n: 1, module: "Understand it", title: "What anxiety is — and what it’s for",
  why: "Anxiety is not a flaw in your character — it’s an alarm system doing its job a little too enthusiastically. Understanding it precisely is the first step to calming it, and gives you the English to describe what you feel without drama or shame.",
  learn: {
    body: [
      "In 1915 the Harvard physiologist Walter Cannon described the <strong>“fight or flight”</strong> response: when we sense danger, the body releases adrenaline, the heart speeds up, breathing quickens and muscles tense — preparing us to fight or run. It saved our ancestors from predators. Today the same alarm goes off for an email from the CEO.",
      "Psychologists distinguish <strong>fear</strong> — a reaction to a present, specific threat (a car coming towards you) — from <strong>anxiety</strong>, a reaction to an uncertain, future one (“What if they ask me something I can’t answer?”). Anxiety lives in the future tense. That is why so much of what calms it brings you back to the present, or to what you can actually do.",
      "A little anxiety helps. Robert Yerkes and John Dodson (1908) found that moderate arousal can improve performance on some tasks — the origin of the popular, simplified “inverted U”: too little and you’re flat, too much and you freeze. The goal is not zero anxiety; it’s the right amount, pointed at the right things.",
      "Anxiety is extremely common. The World Health Organization estimates that around 4% of people worldwide — about 301 million in 2019 — live with an anxiety disorder, and almost everyone feels everyday anxiety. This track is a toolkit, not therapy: if anxiety is constant, disturbs your sleep or stops you doing things you care about, talk to a doctor or a psychologist. Cognitive behavioural therapy (CBT) is one of the best-studied, most effective treatments there is."
    ],
    phrases: [
      { en: "I’ve got butterflies.", tone: "Light, informal", note: "Nervous excitement before something — a gentle way to admit nerves." },
      { en: "I’m a bit on edge today.", tone: "Honest", note: "Tense and easily irritated — useful at work without oversharing." },
      { en: "I’ve been dreading this meeting.", tone: "Candid", note: "Strong anticipation of something unpleasant." },
      { en: "It’s just my nerves talking.", tone: "Self-aware", note: "Separates you from the anxious voice." },
      { en: "I’m anxious about it, but I’m going to do it anyway.", tone: "Brave", note: "Names the feeling and the choice — the theme of this whole track." }
    ],
    tip: "Anxiety is an alarm, not a verdict."
  },
  vocab: [
    V("on edge", "on EJ", "phrase", "Nervous, tense and easily upset or irritated.", "Common and conversational — a good way to admit tension without drama.", ["tense", "jumpy", "wound up"], "“Tense” is neutral, physical or emotional. “Jumpy” means easily startled. “Wound up” (UK) means tense or agitated. “On edge” suggests waiting for something bad to happen.", "Everyone was on edge waiting for the restructuring announcement.", "— You seem quiet today.\n— I’m a bit on edge — the results come out tomorrow.", "Describe a time you felt on edge — and why."),
    V("dread", "dred", "verb / noun", "To feel strong fear or worry about something that is going to happen.", "Strong. “I’m dreading it” is very common; “a sense of dread” is more literary.", ["fear", "be anxious about", "not look forward to"], "“Fear” is general. “Be anxious about” is milder and focuses on worry. “Not look forward to” is understated and very British. “Dread” is heavy anticipation of something unpleasant.", "I used to dread Monday mornings; now I plan on Fridays so Mondays start calmer.", "— Are you ready for the review?\n— Not really. I’ve been dreading it all week.", "Write about something you dreaded that turned out fine."),
    V("butterflies", "BUT-er-flyz", "noun (idiom)", "A nervous, fluttering feeling in your stomach before something important: “have butterflies (in your stomach)”.", "Mixed nerves and excitement — before a performance, an interview or a date.", ["nerves", "the jitters", "a knot in my stomach"], "“Nerves” is general. “The jitters” is informal and shaky. “A knot in my stomach” is tighter and more anxious. “Butterflies” is light and often hopeful.", "I always get butterflies before I present — and they disappear after the first minute.", "— Nervous?\n— A few butterflies. It’s a good sign — it means I care.", "Describe the butterflies you feel before something you care about."),
    V("jittery", "JIT-uh-ree", "adjective", "Nervous and unable to relax, often physically shaky.", "Informal; also used for coffee (“too much coffee makes me jittery”) and markets (“jittery investors”).", ["shaky", "jumpy", "restless"], "“Shaky” is physical. “Jumpy” means easily startled. “Restless” means unable to stay still (Day 1). “Jittery” combines nerves and physical agitation.", "Markets were jittery after the announcement.", "— You look jittery.\n— Third coffee. Bad idea before a presentation.", "Use “jittery” in one sentence about people and one about markets."),
    V("unsettled", "un-SET-uld", "adjective", "Slightly worried, uncomfortable or disturbed, often without a clear reason.", "Softer than “anxious” — useful for vague unease. Also: unsettled weather, an unsettled question.", ["uneasy", "disturbed", "troubled"], "“Uneasy” is close and slightly more anxious. “Disturbed” is stronger. “Troubled” suggests a deeper, longer worry. “Unsettled” means your inner balance is a little off.", "The conversation left me feeling unsettled, though I couldn’t say why.", "— Everything OK?\n— Yes, just a bit unsettled after that call.", "Describe a moment you felt unsettled without knowing why.")
  ],
  culture: "fight-or-flight",
  cultureNote: "Cannon’s alarm was designed for lions, not emails. When your heart races before a meeting, it helps to remember that your body isn’t broken — it’s preparing you, a little too enthusiastically.",
  sayBetter: {
    basic: "I am very stressed and nervous all the time.",
    levels: [
      ["Level 1", "I’ve been feeling quite anxious lately.", "Calmer, and more precise."],
      ["Level 2", "I’ve been a bit on edge lately — mostly about the reorganisation.", "A precise word, plus the cause."],
      ["Level 3", "I’ve been on edge since the reorganisation was announced — it’s the uncertainty more than anything.", "Names the real driver: uncertainty."],
      ["Level 4", "Honestly, I’ve been on edge since the reorganisation was announced. It isn’t the change itself — it’s not knowing. I’m trying to focus on what I can actually influence this week, and that helps.", "Honest, precise about the cause, and already pointing to a way through."]
    ],
    prompt: "Describe how you’ve been feeling about something at work — at Level 4."
  },
  exercise: {
    title: "Fear or anxiety?",
    instructions: "Decide whether each is fear (a present threat) or anxiety (an uncertain, future one) — and say what would help.",
    items: [
      { q: "A car brakes suddenly in front of you.", a: "Fear — a present, specific threat. Your body reacts instantly, as it should." },
      { q: "You can’t stop thinking about a meeting next week.", a: "Anxiety — it’s about the future, and uncertain. What helps: prepare one thing now, then come back to the present." },
      { q: "Your heart races while you wait for the CEO to answer your question.", a: "Anxiety in a social situation. What helps: one long, slow breath out — and remember that a pause feels longer to you than to them." },
      { q: "A dog runs barking towards you in the park.", a: "Fear — a present threat. The alarm is doing its job." }
    ]
  },
  think: { q: "What is your anxiety trying to protect you from — and is it protecting you, or holding you back?", angles: ["When has a little anxiety helped you perform?", "When has it stopped you doing something you wanted?", "What would you do this month if you were 20% less anxious?"] },
  express: { prompt: "Write 120–150 words describing what anxiety feels like for you — in your body, in your thoughts and in what you do — using at least three of today’s words." },
  speak: { prompt: "Explain to a friend what anxiety is, why we have it and how it differs from fear — in 90 seconds.", seconds: 90, structure: ["Anxiety as an alarm system", "Fight or flight, briefly", "Fear vs anxiety", "Why a little helps", "When to ask for professional help"] },
  recall: [
    { q: "Day 16: Give a precise word for a mild fear of what might happen.", a: "Apprehensive." },
    { q: "Learning Brain 7: What did Alison Wood Brooks find about saying “I am excited”?", a: "Reframing nerves as excitement improved performance more than trying to calm down." }
  ],
  reflect: "Where in your body do you feel anxiety first? Noticing it early is the first skill.",
  deep: { title: "Read: the WHO fact sheet on anxiety disorders", body: "Short, clear and free on the World Health Organization’s website: what anxiety disorders are, how common they are, and what helps.", prompt: "Write 100 words: one thing that surprised you, and one thing you would like people to understand about anxiety." }
});

T("c2", { n: 2, module: "Understand it", title: "The anxious mind’s favourite tricks",
  why: "Anxiety doesn’t only feel bad — it thinks badly. It predicts disasters, reads minds and turns one mistake into a verdict. Learning to spot these patterns by name is one of the most useful skills in modern psychology — and naming them in English gives you distance from them.",
  learn: {
    body: [
      "In the 1960s the psychiatrist Aaron Beck noticed that his anxious and depressed patients had automatic, distorted thoughts — fast, believable and usually wrong. His <strong>cognitive therapy</strong> taught people to notice these thoughts and test them. Together with Albert Ellis’s earlier work, it grew into cognitive behavioural therapy (CBT).",
      "David Burns popularised a list of these <strong>cognitive distortions</strong> in <em>Feeling Good</em> (1980). The most common in anxiety: <strong>catastrophising</strong> (imagining the worst), <strong>fortune-telling</strong> (“It will go badly”), <strong>mind-reading</strong> (“She thinks I’m incompetent”), <strong>all-or-nothing thinking</strong> (“If it isn’t perfect, it’s a failure”) and <strong>overgeneralising</strong> (“This always happens to me”).",
      "The CBT triangle links <strong>thoughts</strong>, <strong>feelings</strong> and <strong>behaviour</strong>: a thought (“They’ll think I’m stupid”) creates a feeling (anxiety), which drives a behaviour (staying silent), which seems to confirm the thought. Change any corner and the others change too.",
      "A simple technique: <strong>name it</strong> (“I’m catastrophising”), <strong>question it</strong> (“What’s the evidence? What would I tell a friend?”) and <strong>replace it</strong> with something more balanced — not falsely positive, just more accurate. “This might go badly” is honest. “It will be a disaster and I’ll lose my job” is a distortion."
    ],
    phrases: [
      { en: "I think I’m catastrophising.", tone: "Self-aware", note: "Names the pattern — and instantly creates distance." },
      { en: "What’s the evidence for that?", tone: "Grounded", note: "The core CBT question, for yourself or for a friend." },
      { en: "I might be reading too much into it.", tone: "Humble", note: "Catches mind-reading in conversation." },
      { en: "Let’s not get ahead of ourselves.", tone: "Calm, professional", note: "Stops fortune-telling in a meeting." },
      { en: "That’s one data point, not a pattern.", tone: "Analytical", note: "Catches overgeneralising — perfect business English." }
    ],
    tip: "Thoughts are guesses, not facts. Check the evidence."
  },
  vocab: [
    V("catastrophise", "kuh-TAS-truh-fyz", "verb", "To imagine that a situation will have the worst possible outcome.", "A psychology term that has entered everyday English. American spelling: catastrophize.", ["exaggerate", "panic", "fear the worst"], "“Exaggerate” is general. “Panic” is a sudden overwhelming fear. “Fear the worst” is a natural phrase. “Catastrophise” is the specific habit of jumping to disaster.", "I was catastrophising — one late delivery had become a lost client in my head.", "— If this fails, I’m finished.\n— You’re catastrophising. What’s the realistic worst case?", "Write a catastrophising thought — and a more realistic version."),
    V("ruminate", "ROO-mi-nayt", "verb", "To think about something repeatedly, especially something upsetting, without reaching a resolution.", "From cows chewing the same food again and again. Rumination keeps anxiety and low mood going.", ["brood", "dwell on", "overthink"], "“Brood” suggests dark, silent thinking. “Dwell on” is everyday. “Overthink” is informal and broad. “Ruminate” is the precise word for looping thoughts.", "I ruminated on that comment for days — the person who made it forgot it in minutes.", "— Are you still thinking about the meeting?\n— Yes. I need to stop ruminating and do something.", "Describe something you tend to ruminate on."),
    V("overthink", "oh-ver-THINK", "verb", "To think about something too much, in a way that is unhelpful.", "Informal and very common: “Don’t overthink it.” Past tense: overthought.", ["ruminate", "agonise over", "second-guess"], "“Ruminate” is more clinical. “Agonise over” suggests painful indecision. “Second-guess” means doubting a decision already made. “Overthink” is everyday excess thinking.", "I overthought the email so much that I sent it two days late.", "— Should I write “Best” or “Kind regards”?\n— You’re overthinking it!", "Name something you overthink — and give yourself one piece of advice."),
    V("spiral", "SPY-rul", "verb / noun", "(Of thoughts or a situation) to get worse quickly and increasingly out of control.", "Common in conversations about anxiety: “I started spiralling.” Also: a spiral of debt, a downward spiral.", ["escalate", "snowball", "get out of hand"], "“Escalate” is neutral and gradual. “Snowball” means grow bigger and faster. “Get out of hand” means lose control. “Spiral” suggests going round and round — and down.", "One worrying thought led to another, and by midnight I was spiralling.", "— How did you sleep?\n— Badly. I spiralled about the budget at 3 am.", "Describe how you stop a spiral of thoughts."),
    V("blow out of proportion", "bloh owt uv pruh-POR-shun", "phrase", "To make something seem much more serious or important than it really is.", "Neutral and diplomatic — useful for calming a situation at work.", ["exaggerate", "make a mountain out of a molehill", "overreact"], "“Exaggerate” is general. “Make a mountain out of a molehill” is idiomatic and slightly humorous. “Overreact” describes the response. “Blow out of proportion” describes the inflated picture.", "The incident was blown out of proportion — it affected six orders, not six hundred.", "— Everyone’s talking about the outage.\n— Let’s not blow it out of proportion. It lasted ten minutes.", "Write about something that was blown out of proportion.")
  ],
  culture: "beck-cbt",
  cultureNote: "Beck’s insight was humble and revolutionary: our feelings often follow our interpretations, not the events themselves. Change the interpretation — carefully, honestly — and the feeling changes too.",
  sayBetter: {
    basic: "My boss didn’t say hello. She is angry with me.",
    levels: [
      ["Level 1", "My boss didn’t say hello — I think she’s annoyed with me.", "Softer, but still mind-reading."],
      ["Level 2", "My boss didn’t say hello. Maybe she’s annoyed — or maybe she’s just busy.", "An alternative explanation."],
      ["Level 3", "My boss didn’t say hello this morning, and I started reading too much into it. She’s had back-to-back meetings all week.", "Names the distortion and finds evidence."],
      ["Level 4", "I caught myself mind-reading this morning: my boss didn’t say hello, and within a minute I’d decided she was unhappy with my report. The evidence? None — she was late for a board call. If something’s wrong, she’ll tell me, and I’ll handle it.", "Names the pattern, checks the evidence, and ends with calm confidence."]
    ],
    prompt: "Rewrite one of your own anxious thoughts at Level 4."
  },
  exercise: {
    title: "Name the distortion",
    instructions: "Identify the distortion in each thought, then write a more balanced version.",
    items: [
      { q: "“If I make one mistake in this presentation, everyone will think I’m incompetent.”", a: "Catastrophising + mind-reading. Balanced: “One mistake is normal. People will remember my main point far more than a slip.”" },
      { q: "“The client hasn’t replied. They’re going to cancel.”", a: "Fortune-telling. Balanced: “There are many reasons for a silence. I’ll follow up on Thursday.”" },
      { q: "“I didn’t get the promotion. I’m never going to progress here.”", a: "Overgeneralising. Balanced: “This round didn’t go my way. I’ll ask what to develop for the next one.”" },
      { q: "“If the report isn’t perfect, it’s worthless.”", a: "All-or-nothing thinking. Balanced: “A clear, good report today is more useful than a perfect one next month.”" }
    ]
  },
  think: { q: "Which distortion visits you most often — and what does it usually say?", angles: ["When does it appear: at work, at night, in English?", "What would a wise friend say back?", "What has it cost you?"] },
  express: { prompt: "Write down a recent anxious thought. Then write the distortion, the evidence for and against it, and a balanced version (120–150 words)." },
  speak: { prompt: "Explain cognitive distortions to a colleague, with two examples from work, in 90 seconds.", seconds: 90, structure: ["What a cognitive distortion is", "Example 1: catastrophising", "Example 2: mind-reading", "The three steps: name, question, replace", "Why it matters at work"] },
  recall: [
    { q: "Calm Mind 1: What is the difference between fear and anxiety?", a: "Fear responds to a present, specific threat; anxiety to an uncertain, future one." },
    { q: "Day 10: What is confirmation bias — and how can it feed anxiety?", a: "We look for evidence that confirms what we already believe — including anxious beliefs about ourselves." }
  ],
  reflect: "Next time you feel anxious, try simply naming the distortion out loud. What changes?",
  deep: { title: "Read: David Burns, Feeling Good (1980)", body: "One of the most widely read books on CBT. The chapters on cognitive distortions and on “talking back” to automatic thoughts are practical and clear.", prompt: "Keep a thought record for three days — situation, thought, distortion, balanced thought — and write 100 words on what you noticed." }
});

T("c3", { n: 3, module: "The two practices: zoom out · I’ll figure it out", title: "Zoom out: putting things into perspective",
  why: "The first of the two practices: zoom out. Anxiety makes everything feel urgent and enormous; perspective shrinks things back to their real size. Done well, it isn’t “nothing matters” — it’s “most things matter much less than they feel right now”.",
  learn: {
    body: [
      "The Stoic emperor Marcus Aurelius repeatedly imagined looking down on the world from above — cities, crowds, quarrels and ambitions shrinking to their real size. The historian of philosophy Pierre Hadot called this exercise <strong>“the view from above”</strong>. Centuries later, astronauts described something similar when they saw Earth from space; the writer Frank White called it the <strong>overview effect</strong> (1987).",
      "Modern research supports a version of this. The psychologist Ethan Kross found that <strong>psychological distance</strong> calms the mind: people who talked to themselves by name or in the third person (“Nicole, you’ve done this before”) felt less anxious and performed better in stressful tasks (2014). Distance in time works too — Suzy Welch’s <strong>10-10-10</strong> question: how will I feel about this in 10 minutes, 10 months, 10 years?",
      "Lightness helps. Barbara Fredrickson’s research suggests that positive emotions <strong>broaden</strong> our thinking while anxiety narrows it — so humour, play and fun (remember Day 38) are not distractions from serious problems; they restore the wide view we need to solve them. The post that inspired this lesson puts it boldly: “Fun is the killer of anxiety.”",
      "But zooming out has a trap: <strong>nihilism</strong>. “Nothing matters” can slide into not caring — or giving up. Albert Camus faced the absurd head-on in <em>The Myth of Sisyphus</em> (1942) and concluded: “One must imagine Sisyphus happy.” Meaning is something we make, not something we lose. The healthy version: <em>almost nothing is as big as it feels — so save your worry for what truly matters.</em>"
    ],
    phrases: [
      { en: "In the grand scheme of things, this is small.", tone: "Calm, wise", note: "The classic zoom-out phrase." },
      { en: "Will this matter in a year?", tone: "Grounding", note: "A quick 10-10-10 check." },
      { en: "Let’s keep this in perspective.", tone: "Professional", note: "Calms a team without dismissing the problem." },
      { en: "It’s not the end of the world.", tone: "Reassuring", note: "Honest comfort — the problem is real, just not huge." },
      { en: "Some things matter — this one, not so much.", tone: "Discerning", note: "The healthy version of “nothing matters”." }
    ],
    tip: "Zoom out — then decide what really deserves your worry."
  },
  vocab: [
    V("put into perspective", "put IN-too per-SPEK-tiv", "phrase", "To compare something with other things so that you see how important or unimportant it really is.", "Also: “keep things in perspective”, “a sense of perspective”.", ["see the bigger picture", "take a step back", "weigh up"], "“See the bigger picture” focuses on context. “Take a step back” means pause and look again. “Weigh up” is deliberate comparison (Day 17). “Put into perspective” resizes a problem.", "Visiting my grandmother in hospital put my work stress into perspective.", "— I can’t believe I sent the wrong file.\n— Let’s put it into perspective: you noticed, you fixed it, nobody was hurt.", "Write about something that put a problem into perspective for you."),
    V("in the grand scheme of things", "in thuh GRAND SKEEM uv THINGZ", "phrase", "When everything is considered; when you look at the overall situation.", "Gently shrinks a worry without denying it.", ["all things considered", "in the end", "ultimately"], "“All things considered” sounds analytical. “In the end” is about outcomes. “Ultimately” is about the final point (Day 17). “In the grand scheme of things” zooms right out — to life as a whole.", "In the grand scheme of things, a typo in an email is nothing.", "— I’m so embarrassed about my mistake.\n— In the grand scheme of things, nobody will remember it next week.", "Use the phrase to calm a worry you have this week."),
    V("trivial", "TRIV-ee-ul", "adjective", "Of little value or importance.", "It can sound dismissive about other people’s problems — use it about your own worries, or carefully.", ["minor", "insignificant", "petty"], "“Minor” is neutral. “Insignificant” is very small in effect. “Petty” suggests small-mindedness (petty arguments). “Trivial” means not worth serious attention.", "Half of what kept me awake last year now seems completely trivial.", "— Should we discuss the font on the slides?\n— That’s trivial — let’s focus on the numbers.", "List three worries that turned out to be trivial."),
    V("make a mountain out of a molehill", "mayk uh MOWN-tun owt uv uh MOHL-hil", "idiom", "To treat a small problem as if it were a very serious one.", "Light and slightly humorous; kinder to say about yourself than about others.", ["blow out of proportion", "overreact", "make a fuss"], "“Blow out of proportion” is neutral. “Overreact” describes behaviour. “Make a fuss” is about complaining. This idiom paints a picture: a tiny hill becomes a mountain.", "I realised I was making a mountain out of a molehill — it was one critical comment among thirty kind ones.", "— She didn’t like my idea.\n— One person? Don’t make a mountain out of a molehill.", "Describe a molehill you once turned into a mountain."),
    V("sweat the small stuff", "swet thuh SMAWL stuf", "idiom", "To worry about small, unimportant things. Usually in the negative: “Don’t sweat the small stuff.”", "Made famous by Richard Carlson’s bestseller Don’t Sweat the Small Stuff… and It’s All Small Stuff (1997).", ["fuss", "nitpick", "get hung up on"], "“Fuss” is unnecessary attention or worry. “Nitpick” means criticise tiny details. “Get hung up on” means be unable to stop thinking about something. “Sweat the small stuff” means spending your worry on trivia.", "Good leaders don’t sweat the small stuff — they save their energy for the decisions that matter.", "— The caterer brought the wrong biscuits!\n— Don’t sweat the small stuff. The meeting went brilliantly.", "Write a piece of advice to yourself that begins “Don’t sweat…”.")
  ],
  culture: "view-from-above",
  cultureNote: "The view from above is not about feeling small and meaningless — it’s about feeling free. From high enough, most of today’s worries disappear, and what remains is what truly matters to you.",
  sayBetter: {
    basic: "It’s a disaster, the client complained about our delivery.",
    levels: [
      ["Level 1", "The client complained about our delivery — it’s bad.", "Still big and vague."],
      ["Level 2", "The client complained about one late delivery. It’s not great, but it’s fixable.", "Resized and specific."],
      ["Level 3", "One client complained about one late delivery. In the grand scheme of things, it’s small — but it’s worth fixing the cause.", "Perspective plus action."],
      ["Level 4", "Let’s keep this in perspective: one client, one late delivery, out of four thousand this month. It matters to them, so I’ll call them today. And it matters to us as a signal, so let’s check the carrier. But it’s not a crisis.", "Calm, proportionate and responsible — perspective without indifference."]
    ],
    prompt: "Describe a current problem at Level 4: perspective, plus what you’ll actually do."
  },
  exercise: {
    title: "10-10-10",
    instructions: "For each worry, answer: how will I feel about this in 10 minutes, 10 months and 10 years?",
    items: [
      { q: "You mispronounced a word in a meeting.", a: "10 minutes: embarrassed. 10 months: I won’t remember. 10 years: it never happened." },
      { q: "You didn’t get a job you applied for.", a: "10 minutes: disappointed. 10 months: probably in another role — maybe a better one. 10 years: one chapter in a long story." },
      { q: "A friend hasn’t replied to your message.", a: "10 minutes: a little anxious. 10 months: irrelevant. 10 years: invisible." },
      { q: "You and your partner argued about money.", a: "10 minutes: upset. 10 months: it depends on whether we talk it through — this one does matter, so it deserves a calm conversation." }
    ]
  },
  think: { q: "If you zoomed out to the scale of your whole life, which of today’s worries would still be visible?", angles: ["What would remain?", "What would you stop worrying about immediately?", "Where is the line between perspective and not caring?"] },
  express: { prompt: "Write your own “view from above” (120–150 words): imagine looking down on your current week from very high up. What looks small? What still matters?" },
  speak: { prompt: "A friend is panicking about a small mistake at work. Help them zoom out — in 60 seconds, without dismissing them.", seconds: 60, structure: ["Acknowledge the feeling", "Resize the problem: the facts", "A zoom-out question (10-10-10)", "What does matter here", "One small action"] },
  recall: [
    { q: "Calm Mind 2: What does “catastrophise” mean?", a: "To imagine that a situation will have the worst possible outcome." },
    { q: "Day 38: What is understatement — and why does it help with stress?", a: "Describing something as smaller than it is; it adds lightness and perspective (“not my finest moment”)." }
  ],
  reflect: "What do you worry about that, honestly, you would like to stop giving so much importance?",
  deep: { title: "Read: Marcus Aurelius, Meditations", body: "Private notes a Roman emperor wrote to himself, around 170–180 CE. Read Book 2 and look for passages where he “zooms out” — on time, on fame, on small irritations.", prompt: "Write your own short “meditation” (100 words) in his style: a note to yourself about what matters and what doesn’t." }
});

T("c4", { n: 4, module: "The two practices: zoom out · I’ll figure it out", title: "“I’ll figure it out”: resilience",
  why: "The second practice: whatever happens, I’ll figure it out. This is not optimism — it doesn’t promise that things will go well. It’s something sturdier: trust in your ability to cope, built on evidence from your own life.",
  learn: {
    body: [
      "Susan Jeffers, in <em>Feel the Fear and Do It Anyway</em> (1987), argued that under almost every fear lies one belief: “I can’t handle it.” Her antidote was a single sentence: <strong>“Whatever happens, I’ll handle it.”</strong> Not “nothing bad will happen” — but “if it does, I’ll find a way.”",
      "Psychology backs the idea. Albert Bandura (1977) called it <strong>self-efficacy</strong>: the belief that you can cope with a situation. People with higher self-efficacy persist longer, recover faster and feel less threatened by challenges. And it can be built — mostly through experiences of coping, watching others cope, and encouragement.",
      "Resilience is also more common than we think. George Bonanno’s research found that most people who face loss or serious adversity show resilience: they hurt, but they keep functioning and recover (2004). You have been resilient many times already; anxiety simply forgets to remind you.",
      "Build a <strong>resilience CV</strong>: list five times something went wrong and you figured it out — the move abroad, the project that collapsed, the presentation in English when your mind went blank. When the anxious voice says “You can’t handle this”, you have evidence that says otherwise. And don’t confuse resilience with <strong>toxic positivity</strong> (“Just be positive!”): resilience allows the fear, the discomfort and the bad day — and keeps going."
    ],
    phrases: [
      { en: "Whatever happens, I’ll handle it.", tone: "Steady", note: "Susan Jeffers’s sentence — the heart of this lesson." },
      { en: "We’ll cross that bridge when we come to it.", tone: "Calm", note: "Stops you worrying about problems that haven’t happened." },
      { en: "I’ve figured out harder things than this.", tone: "Confident", note: "Uses your own evidence." },
      { en: "It won’t be comfortable, but it will be OK.", tone: "Honest", note: "Resilience without toxic positivity." },
      { en: "If it goes wrong, here’s plan B.", tone: "Practical", note: "Resilience in business language." }
    ],
    tip: "Not “it will go well” — “I’ll handle it either way.”"
  },
  vocab: [
    V("bounce back", "bowns BAK", "phrasal verb", "To recover quickly after a difficulty, illness or failure.", "Positive and informal; also used for companies and economies (“sales bounced back”).", ["recover", "get back on your feet", "rebound"], "“Recover” is neutral. “Get back on your feet” is idiomatic and personal. “Rebound” is common for markets. “Bounce back” suggests speed and energy.", "She bounced back from the failed launch with an even better product.", "— That was a tough quarter.\n— It was. But we always bounce back.", "Write about a time you bounced back."),
    V("cope", "kohp", "verb", "To deal successfully with a difficult situation.", "Very common: “cope with stress”, “I can cope”. Noun: coping (coping strategies).", ["manage", "handle", "deal with"], "“Manage” is neutral and practical. “Handle” suggests control. “Deal with” is everyday. “Cope” emphasises getting through difficulty, often emotionally.", "I didn’t enjoy that month, but I coped — and I learned a lot.", "— How are you coping with the new workload?\n— Better than I expected, actually.", "Name one coping strategy that works for you."),
    V("rise to the occasion", "ryz tuh thee uh-KAY-zhun", "phrase", "To perform well in a difficult or important situation, often better than expected.", "A warm compliment — and a useful thing to remember about yourself.", ["step up", "come through", "meet the challenge"], "“Step up” means take more responsibility. “Come through” means deliver when needed. “Meet the challenge” is formal. “Rise to the occasion” suggests growing to match the moment.", "When the CEO cancelled, she rose to the occasion and gave the keynote herself.", "— I didn’t think I could present to the board.\n— But you rose to the occasion.", "Describe a time you rose to the occasion."),
    V("cross that bridge when we come to it", "kros that BRIJ wen wee KUM too it", "idiom", "To deal with a problem only if and when it actually happens, not before.", "Calm, wise and slightly informal; often “We’ll cross that bridge…”.", ["deal with it later", "wait and see", "one step at a time"], "“Deal with it later” can sound like avoidance. “Wait and see” is passive. “One step at a time” is about pace. “Cross that bridge…” means: don’t solve imaginary problems.", "What if the budget is cut next year? We’ll cross that bridge when we come to it.", "— But what if they say no?\n— Then we’ll cross that bridge when we come to it.", "Use the idiom to answer one of your own what-ifs."),
    V("roll with the punches", "rohl with thuh PUN-chiz", "idiom", "To adapt to difficult situations instead of being defeated by them.", "From boxing: moving with a punch reduces its force. Informal.", ["adapt", "take it in your stride", "go with the flow"], "“Adapt” is neutral. “Take it in your stride” means handle calmly. “Go with the flow” is relaxed, sometimes passive. “Roll with the punches” implies difficulty — and flexibility.", "In e-commerce you learn to roll with the punches: every peak season brings a surprise.", "— Another supplier delay!\n— We’ll roll with the punches — we have plan B.", "Write about something you’ve learned to roll with.")
  ],
  culture: "jeffers",
  cultureNote: "Jeffers’s sentence works because it moves the question from the world (“Will it go well?”) to you (“Can I handle it?”). The first you can’t control; the second you can answer — and, judging by your own history, the answer is almost always yes.",
  sayBetter: {
    basic: "I am scared to lead the new project because maybe I will fail.",
    levels: [
      ["Level 1", "I’m nervous about leading the new project.", "Honest and calmer."],
      ["Level 2", "I’m nervous about leading the new project — it’s bigger than anything I’ve done.", "Specific about why."],
      ["Level 3", "Leading this project scares me a little, but I’ve handled hard things before, and I’ll figure this out too.", "Resilience: evidence plus trust."],
      ["Level 4", "Leading this project scares me a little — it’s the biggest thing I’ve done. But I’ve worked through crises before, built a career in a second language and rebuilt a team from scratch. I don’t know exactly how this will go; I do know I’ll figure it out either way.", "Admits the fear, cites real evidence and ends with steady confidence."]
    ],
    prompt: "Write your own Level 4 “I’ll figure it out” statement about a real challenge."
  },
  exercise: {
    title: "Your resilience CV",
    instructions: "Complete each line with a real example from your life — then the sentence you can say to yourself next time.",
    items: [
      { q: "A time something went badly wrong at work…", a: "Example: “Our main system crashed during peak week. We worked through the night and kept 95% of orders on time.” Next time: “I’ve handled a crisis before — I’ll handle this.”" },
      { q: "A time you were completely out of your comfort zone…", a: "Example: “My first meeting entirely in English, with directors I’d never met.” Next time: “I was out of my depth once and found my feet — I can again.”" },
      { q: "A time you were rejected or failed…", a: "Example: “I didn’t get the job I wanted — and the one I got instead taught me more.” Next time: “A no is information, not a verdict.”" },
      { q: "A time you surprised yourself…", a: "Example: “I negotiated a contract I thought was impossible.” Next time: “I’ve surprised myself before.”" }
    ]
  },
  think: { q: "What evidence do you have — from your own life — that you can handle difficult things?", angles: ["Which moment are you proudest of getting through?", "Who taught you resilience?", "Where is the line between resilience and simply enduring too much?"] },
  express: { prompt: "Write your resilience CV (150 words): five moments you figured it out, one sentence each — then one sentence for your next challenge." },
  speak: { prompt: "Tell the story of a time something went wrong and you figured it out — and what it taught you.", seconds: 90, structure: ["The situation — and what was at stake", "What went wrong", "How you felt, honestly", "What you did to figure it out", "What you now know about yourself"] },
  recall: [
    { q: "Calm Mind 3: What is the 10-10-10 question?", a: "How will I feel about this in 10 minutes, 10 months and 10 years?" },
    { q: "Day 57: What makes a story tense?", a: "Stakes, uncertainty and a delayed resolution." }
  ],
  reflect: "Read your resilience CV again. How does it feel to see the evidence in one place?",
  deep: { title: "Read: Susan Jeffers, Feel the Fear and Do It Anyway (1987)", body: "A practical, warm classic. The early chapters, on the “I can’t handle it” belief and on choosing words that give you power, are the most useful.", prompt: "Write 100 words: which of your current fears is really “I can’t handle it” in disguise?" }
});

T("c5", { n: 5, module: "Live it", title: "Speaking anxiety in a second language",
  why: "Speaking a second language — in a meeting, on a call, at a dinner — is one of the most common sources of anxiety for international professionals. It has a name, a body of research and some wonderfully reassuring findings.",
  learn: {
    body: [
      "In 1986, Elaine Horwitz, Michael Horwitz and Joann Cope described <strong>foreign language anxiety</strong> as a specific kind of anxiety with three parts: <strong>communication apprehension</strong> (fear of speaking), <strong>fear of negative evaluation</strong> (fear of being judged) and test anxiety. Many fluent, intelligent adults feel it — it says nothing about your ability.",
      "Two findings from Thomas Gilovich and colleagues are deeply reassuring. The <strong>spotlight effect</strong> (2000): students asked to wear an embarrassing T-shirt guessed that about half the room would notice; fewer than a quarter did. We overestimate how much others notice our mistakes. The <strong>illusion of transparency</strong> (1998): we believe our nervousness is visible — usually it isn’t.",
      "Even better: when speakers were told about the illusion of transparency before giving a speech, they felt calmer and their speeches were rated as better (Savitsky and Gilovich, 2003). Simply knowing that your nerves are mostly invisible makes them smaller.",
      "Practical tools for meetings in English: prepare your first two sentences; when a word goes missing, paraphrase (“the thing that… you know, the opposite of…”) — native speakers do it all the time; and pause instead of filling silence with “um”. Remember Learning Brain 7: “I’m excited” works better than “calm down”. Your listeners are listening for your ideas — and, mostly, thinking about themselves."
    ],
    phrases: [
      { en: "Let me put that another way.", tone: "Composed", note: "Rescues a sentence without apologising." },
      { en: "What’s the word… it’s like…", tone: "Natural", note: "Paraphrasing when a word goes missing — perfectly normal." },
      { en: "Give me a second to think about that.", tone: "Calm", note: "Buys time with authority." },
      { en: "Sorry, my mind went blank — where was I?", tone: "Honest, light", note: "Recovers with grace — and people relate." },
      { en: "I’d rather say it simply and clearly.", tone: "Confident", note: "A reminder that simple English is strong English." }
    ],
    tip: "They notice far less than you think."
  },
  vocab: [
    V("tongue-tied", "TUNG-tyd", "adjective", "Unable to speak easily because you are nervous or embarrassed.", "Light and relatable — often used about yourself.", ["lost for words", "speechless", "inarticulate"], "“Lost for words” is often caused by surprise or emotion. “Speechless” is stronger — shock or amazement. “Inarticulate” is a general lack of expression. “Tongue-tied” is temporary, from nerves.", "I got completely tongue-tied when the CEO asked me a question in the lift.", "— Why didn’t you say anything?\n— I was tongue-tied! Next time I’ll be ready.", "Describe a moment you were tongue-tied — and what you would say now."),
    V("my mind went blank", "my MYND went BLANK", "phrase", "I suddenly couldn’t think of or remember anything.", "Very common and very human; saying it lightly often relaxes the audience too.", ["I froze", "I drew a blank", "I lost my train of thought"], "“I froze” involves body and mind. “I drew a blank” is about not remembering one specific thing. “I lost my train of thought” happens mid-sentence. “My mind went blank” is a total, temporary emptiness.", "Halfway through the answer my mind went blank, so I paused, smiled and looked at my notes.", "— What happened in the interview?\n— My mind went blank on the second question — but I recovered.", "Write what you will say next time your mind goes blank."),
    V("flustered", "FLUS-terd", "adjective", "Nervous and confused, especially because you are in a hurry or under pressure.", "Visible agitation: rushing, dropping things, losing words.", ["rattled", "thrown", "agitated"], "“Rattled” means shaken and nervous. “Thrown” means surprised and confused by something unexpected. “Agitated” is restless and upset. “Flustered” is confused, rushed nervousness.", "She got a little flustered when the projector failed, but she recovered quickly.", "— You looked flustered when he interrupted.\n— I was! I’ll prepare a phrase for that.", "Describe what makes you flustered — and what helps."),
    V("stage fright", "STAYJ fryt", "noun", "Nervousness about performing or speaking in front of an audience.", "Also used for presentations and big meetings, not only the theatre.", ["nerves", "performance anxiety", "the jitters"], "“Nerves” is general. “Performance anxiety” is more clinical. “The jitters” is informal and shaky. “Stage fright” is specifically about being watched while you perform.", "Even famous actors talk about stage fright before opening night.", "— Do you get stage fright?\n— Every time. I just start anyway.", "Write about your relationship with stage fright."),
    V("nerves", "nurvz", "noun (plural)", "Feelings of anxiety before something important: “pre-presentation nerves”, “a bundle of nerves”.", "Plural and conversational. “Nerves of steel” means very calm under pressure.", ["butterflies", "the jitters", "apprehension"], "“Butterflies” is light, often with excitement. “The jitters” is shaky. “Apprehension” is formal (Day 16). “Nerves” is the everyday word for performance anxiety.", "My nerves disappear about a minute into any presentation.", "— How are your nerves?\n— Under control. I’ve rehearsed my first two sentences.", "Describe your nerves before an important moment — and how long they last.")
  ],
  culture: "spotlight-effect",
  cultureNote: "The spotlight effect is one of the kindest findings in psychology: you are far less visible than you feel. Most people in a meeting are thinking about their own slide, their own question — even their own accent.",
  sayBetter: {
    basic: "Sorry, sorry, my English is very bad, I don’t know how to say it.",
    levels: [
      ["Level 1", "Sorry — I’m not sure how to say this in English.", "Calmer, but still apologising for yourself."],
      ["Level 2", "Let me put that another way.", "No apology — a rescue."],
      ["Level 3", "What’s the word… it’s the opposite of a bottleneck. Let me put it another way: the process flows when…", "Paraphrase, then carry on."],
      ["Level 4", "I can’t find the exact word — so let me say it simply: we’re losing customers between the basket and the payment page. That’s where we should focus.", "Owns the moment, says it simply and lands the point — composure in action."]
    ],
    prompt: "Write what you will say, at Level 4, the next time a word goes missing in a meeting."
  },
  exercise: {
    title: "Rescue the moment",
    instructions: "Write what you would say in each situation — calmly, without over-apologising.",
    items: [
      { q: "You forget a word mid-sentence.", a: "“What’s the word… it’s like a promise in a contract. A guarantee — that’s it.”" },
      { q: "Someone asks you to repeat because they didn’t understand.", a: "“Of course — let me say it more simply.” Then shorter, slower, clearer." },
      { q: "Your mind goes blank during a presentation.", a: "Pause. Smile. “Let me just check my notes.” Breathe out — then continue." },
      { q: "You realise you’ve made a grammar mistake.", a: "Usually: nothing — carry on. If it changes the meaning: “Sorry — I meant ‘was’, not ‘is’.”" }
    ]
  },
  think: { q: "Where does your speaking anxiety come from — the language, the audience, or something older?", angles: ["When do you feel it most — and least?", "Whose judgement do you fear most?", "What would you say if you knew nobody was judging your English?"] },
  express: { prompt: "Write a short letter (120–150 words) to your future self before an important meeting in English: what to remember about the spotlight effect, your nerves and your strengths." },
  speak: { prompt: "Give a 60-second opinion on any topic — then add 30 seconds about how you felt while speaking, using today’s words.", seconds: 90, structure: ["A clear opinion (60 seconds)", "A pause and a breath", "How you felt: nervous, flustered, fine?", "What your listeners probably noticed (the spotlight effect)", "One thing you did well"] },
  recall: [
    { q: "Calm Mind 4: What is self-efficacy?", a: "The belief that you can cope with a situation (Albert Bandura, 1977)." },
    { q: "Day 20: What matters more for being understood than a native accent?", a: "Intelligibility: word stress, sentence stress, pauses and thought groups." }
  ],
  reflect: "After your next meeting in English, ask yourself what people actually noticed. Was it what you feared?",
  deep: { title: "Read: Gilovich, Medvec and Savitsky, “The spotlight effect in social judgment” (2000)", body: "The original article is readable and widely summarised online. Read about the T-shirt study and the follow-up experiments.", prompt: "Write 100 words: when have you overestimated how much people noticed you?" }
});

T("c6", { n: 6, module: "Live it", title: "Worry, uncertainty and control",
  why: "Worry feels useful — as if thinking about a problem a hundred times protects you from it. Usually it doesn’t. Separating what you can control from what you can’t, and turning worry into one next step, is one of the oldest and most practical ideas in philosophy.",
  learn: {
    body: [
      "The Stoic philosopher Epictetus opened his <em>Handbook</em> (around 125 CE) with a sentence that has calmed people for nineteen centuries: “Some things are within our power, while others are not.” Our judgements, choices and actions are ours; other people’s opinions, the weather and the economy are not. Suffering grows when we confuse the two.",
      "Stephen Covey translated this for business in <em>The 7 Habits of Highly Effective People</em> (1989): your <strong>circle of concern</strong> (everything you worry about) and your <strong>circle of influence</strong> (what you can actually affect). Effective people put their energy into the second circle — and, interestingly, it tends to grow.",
      "Researchers such as Michel Dugas found that many chronic worriers struggle with <strong>intolerance of uncertainty</strong>: not knowing feels unbearable, so the mind keeps producing “what-ifs” in search of a certainty that never comes. The goal isn’t to eliminate uncertainty — that’s impossible — but to practise living with it.",
      "Two practical tools. <strong>Productive or unproductive?</strong> Ask: “Is there something I can do about this now?” If yes, take one step. If no, it’s rumination. <strong>Worry time</strong>: in studies led by Thomas Borkovec (1983), worriers who postponed their worries to a fixed 30-minute slot each day worried less. Write the worry down, give it an appointment, and get on with your day."
    ],
    phrases: [
      { en: "That’s out of my hands.", tone: "Accepting", note: "Names what you can’t control — and lets it go." },
      { en: "What can I actually influence here?", tone: "Practical", note: "Moves you from concern to influence." },
      { en: "Let’s focus on what we can control.", tone: "Leadership", note: "Calms a team during uncertain times." },
      { en: "I’ll worry about that at six — not now.", tone: "Playful, disciplined", note: "Worry time, in one sentence." },
      { en: "We don’t know yet — and that’s OK for now.", tone: "Steady", note: "Tolerating uncertainty, out loud." }
    ],
    tip: "Control what you can. Schedule the rest."
  },
  vocab: [
    V("out of my hands", "owt uv my HANDZ", "phrase", "No longer under my control or responsibility.", "Calm and accepting; also used formally: “The decision is out of our hands now.”", ["beyond my control", "not up to me", "up to fate"], "“Beyond my control” is neutral and formal. “Not up to me” is everyday. “Up to fate” is philosophical. “Out of my hands” suggests you’ve done your part and released it.", "I’ve sent the proposal; the decision is out of my hands now.", "— Are you nervous about the result?\n— A bit. But it’s out of my hands.", "Name something that is out of your hands this week."),
    V("what-if", "WOT-if", "noun", "A worrying question about something that might happen: “all the what-ifs”.", "Plural: what-ifs. Anxiety runs on them.", ["hypothetical", "worst-case scenario", "contingency"], "A “hypothetical” is neutral, often intellectual. A “worst-case scenario” is the most negative outcome. A “contingency” is a possible event you plan for. A “what-if” is a worried question — often an endless one.", "At night my mind fills with what-ifs; in the morning most of them look silly.", "— What if they say no? What if the budget is cut?\n— Too many what-ifs. Let’s plan for the likely case.", "Write your three biggest what-ifs — and the most likely outcome of each."),
    V("contingency plan", "kun-TIN-jun-see plan", "noun", "A plan for what to do if something goes wrong or something unexpected happens.", "Business English for “plan B”. Having one often reduces worry dramatically.", ["plan B", "backup plan", "fallback"], "“Plan B” is informal. “Backup plan” is everyday. A “fallback” is what you return to. A “contingency plan” is formal and structured.", "Once we had a contingency plan for the supplier, the team stopped worrying about it.", "— What if the launch is delayed?\n— We have a contingency plan: we launch in two markets first.", "Write a one-line contingency plan for something you worry about."),
    V("uncertainty", "un-SUR-tun-tee", "noun", "A situation in which something is not known or not decided.", "Formal and common in business and the news: “economic uncertainty”, “a period of uncertainty”.", ["doubt", "ambiguity", "unpredictability"], "“Doubt” is a feeling of not being sure. “Ambiguity” means more than one possible meaning. “Unpredictability” is about the future. “Uncertainty” is the broad state of not knowing.", "Leaders can’t remove uncertainty, but they can be honest about it.", "— When will we know about the restructure?\n— Not yet. I know the uncertainty is hard — I’ll update you every Friday.", "Write how you would talk to a team about uncertainty."),
    V("one step at a time", "WUN step at uh TYM", "phrase", "Gradually, dealing with one thing before moving on to the next.", "Calming and practical — the antidote to feeling overwhelmed.", ["gradually", "bit by bit", "step by step"], "“Gradually” is neutral. “Bit by bit” is informal. “Step by step” emphasises a sequence. “One step at a time” emphasises not rushing ahead — mentally as well as practically.", "The move felt overwhelming, so we took it one step at a time.", "— There’s so much to do before the launch.\n— One step at a time. What’s the first thing?", "Break one of your current worries into its first three steps.")
  ],
  culture: "stoicism",
  cultureNote: "The dichotomy of control is easy to understand and hard to practise. Try a two-column list tonight — “mine” and “not mine” — and put your energy only into the first column.",
  sayBetter: {
    basic: "I am worried about the restructure, maybe I will lose my job, I think about it all the time.",
    levels: [
      ["Level 1", "I’m worried about the restructure.", "Calmer, but still all concern."],
      ["Level 2", "I’m worried about the restructure, but most of it is out of my hands.", "Separates what you control."],
      ["Level 3", "The restructure is out of my hands, so I’m focusing on what isn’t: doing great work and keeping my network warm.", "From concern to influence."],
      ["Level 4", "I’ll be honest — the restructure worries me. But I’ve sorted it into two columns. Out of my hands: the decision and the timing. In my hands: the quality of my work, my relationships and a contingency plan if things change. The first column gets ten minutes a day; the second gets everything else.", "Honest, structured, Stoic — and genuinely calming."]
    ],
    prompt: "Sort one of your current worries at Level 4: what’s in your hands, what isn’t, and what you’ll do."
  },
  exercise: {
    title: "Mine or not mine?",
    instructions: "For each worry, write what is in your control, what isn’t, and one step you can take.",
    items: [
      { q: "Whether you’ll be promoted this year.", a: "Mine: my results, my visibility, asking for feedback. Not mine: budgets, the final decision. Step: ask my manager what would make the difference." },
      { q: "Whether the client will like the proposal.", a: "Mine: understanding their needs, preparation, clarity. Not mine: their taste and mood. Step: send them one question before the meeting." },
      { q: "Whether the economy will slow down.", a: "Mine: savings, skills, contingency plans. Not mine: the economy. Step: review one cost this month." },
      { q: "What people think of your accent.", a: "Mine: clarity, pace, preparation. Not mine: their judgements. Step: practise stress and pausing (Day 20) — then let it go." }
    ]
  },
  think: { q: "Where in your life are you spending energy in the circle of concern instead of the circle of influence?", angles: ["What do you check, reread or replay most?", "What would you do with the energy you got back?", "Is there something you are worrying about instead of acting on?"] },
  express: { prompt: "Try worry time tonight: write down your worries for fifteen minutes, then mark each one “mine” or “not mine” and add one step. Then write 100 words on how it felt." },
  speak: { prompt: "A colleague is anxious about upcoming changes at work. Help them separate what they can control from what they can’t — in 90 seconds.", seconds: 90, structure: ["Acknowledge the worry", "What’s out of our hands", "What’s in our hands", "One concrete step this week", "How we’ll handle new information"] },
  recall: [
    { q: "Calm Mind 5: What is the spotlight effect?", a: "We overestimate how much other people notice us and our mistakes." },
    { q: "Day 44: Give two phrases for expressing uncertainty clearly.", a: "“It’s too early to say.” “My best guess is…” “As far as I know…”" }
  ],
  reflect: "What is one worry you can officially declare “out of my hands” today?",
  deep: { title: "Read: Epictetus, the Handbook (Enchiridion)", body: "Short, practical and free online. Read the first five sections, including the famous opening on what is and isn’t within our power.", prompt: "Write 100 words applying the first section to a worry from your week." }
});

T("c7", { n: 7, module: "Live it", title: "The inner critic and self-compassion",
  why: "Many high achievers carry a harsh voice inside — the one that says you’re not good enough, that you’ll be found out, that one mistake proves it. Answering that voice with self-compassion doesn’t make you softer or less ambitious. Research suggests it makes you more resilient — and more willing to improve.",
  learn: {
    body: [
      "In 1978 the psychologists Pauline Clance and Suzanne Imes described the <strong>imposter phenomenon</strong> in high-achieving women: a persistent feeling of being a fraud despite clear evidence of success. They found it in people with degrees, promotions and awards — achievement doesn’t cure it. Many senior people, women and men, recognise it.",
      "Kristin Neff defined <strong>self-compassion</strong> (2003) as three things: <strong>self-kindness</strong> instead of harsh judgement; <strong>common humanity</strong> — remembering that everyone struggles and fails; and <strong>mindfulness</strong> — noticing painful feelings without exaggerating or suppressing them. Studies link self-compassion with lower anxiety and depression.",
      "Self-compassion is not self-pity, and it doesn’t lower your standards. In experiments by Juliana Breines and Serena Chen (2012), people encouraged to be self-compassionate after a failure studied <em>longer</em> for the next test and were more motivated to put their mistakes right. Kindness makes it safe to look honestly at what went wrong.",
      "A practical test: what would you say to a good friend in your situation? Then say it to yourself — ideally by name (remember distanced self-talk, Calm Mind 3). “Nicole, you’re learning a new role in a second language. Of course some days are hard. What would help tomorrow?”"
    ],
    phrases: [
      { en: "I’m being too hard on myself.", tone: "Self-aware", note: "Catches the inner critic in the act." },
      { en: "Cut yourself some slack.", tone: "Warm, informal", note: "Kindness — to a friend, or to yourself." },
      { en: "I’m still learning — and that’s allowed.", tone: "Gentle", note: "Common humanity in one sentence." },
      { en: "Give yourself some credit.", tone: "Encouraging", note: "Counters the habit of discounting the positive." },
      { en: "Feeling like a fraud isn’t evidence that you are one.", tone: "Wise", note: "Answers the imposter feeling directly." }
    ],
    tip: "Talk to yourself like someone you love."
  },
  vocab: [
    V("inner critic", "IN-er KRIT-ik", "noun", "The voice in your head that judges you harshly.", "Common in coaching and psychology; naming it creates distance (“My inner critic is loud today”).", ["self-doubt", "inner voice", "self-criticism"], "“Self-doubt” is a lack of confidence. “Inner voice” is neutral. “Self-criticism” is the habit. “Inner critic” turns the voice into a character — which makes it easier to answer back.", "My inner critic said the presentation was terrible; the feedback said it was excellent.", "— Why are you so sure it went badly?\n— Honestly? My inner critic.", "Write what your inner critic says — and what a friend would reply."),
    V("cut yourself some slack", "KUT yor-self sum SLAK", "idiom", "To be less critical of yourself; to accept that you can’t be perfect.", "Informal and kind. Also “cut someone some slack”.", ["go easy on yourself", "be kind to yourself", "give yourself a break"], "“Go easy on yourself” is very close. “Be kind to yourself” is warmer. “Give yourself a break” can also mean rest. “Cut yourself some slack” means loosening the rope of perfectionism.", "You’re doing a new job in a new language. Cut yourself some slack.", "— I should have answered better.\n— Cut yourself some slack — it was your first board meeting.", "Write a sentence telling yourself to cut yourself some slack."),
    V("be hard on yourself", "bee HARD on yor-self", "phrase", "To criticise yourself too severely.", "Usually used to comfort someone: “Don’t be so hard on yourself.”", ["beat yourself up", "be self-critical", "blame yourself"], "“Beat yourself up” is stronger and informal. “Be self-critical” can be healthy. “Blame yourself” is about fault. “Be hard on yourself” is excessive severity.", "I’m very hard on myself about my English, even when people understand me perfectly.", "— I’m so annoyed I forgot that word.\n— Don’t be so hard on yourself. Nobody noticed.", "Where are you hardest on yourself?"),
    V("fall short", "fawl SHORT", "phrasal verb", "To fail to reach a standard, goal or expectation.", "Neutral and precise — less dramatic than “fail”.", ["fail", "not measure up", "miss the mark"], "“Fail” is stronger and final. “Not measure up” compares you with a standard. “Miss the mark” is about accuracy. “Fall short” means you got close but not all the way — honest and fixable.", "We fell short of the target by 3%, but we learned exactly why.", "— I fell short of my goal this quarter.\n— By how much? And what would close the gap?", "Write about something you fell short of — kindly and precisely."),
    V("give yourself credit", "giv yor-self KRED-it", "phrase", "To recognise your own achievements or good qualities.", "Counters the habit of discounting the positive.", ["acknowledge", "take pride in", "recognise"], "“Acknowledge” is neutral. “Take pride in” is warmer. “Recognise” is formal. “Give yourself credit” means allowing yourself to count what you did well.", "Give yourself credit: a year ago you couldn’t have run that meeting in English.", "— It was just luck.\n— Give yourself some credit. You prepared for weeks.", "Give yourself credit for three things you did this month.")
  ],
  culture: "imposter-phenomenon",
  cultureNote: "Clance and Imes chose the word “phenomenon”, not “syndrome”: it is an experience many capable people have, not an illness. Recognising it is often enough to loosen its grip.",
  sayBetter: {
    basic: "I am not good enough for this job, I don’t know why they chose me.",
    levels: [
      ["Level 1", "Sometimes I feel I’m not good enough for this role.", "Honest, and less absolute."],
      ["Level 2", "Sometimes I feel like an imposter in this role.", "Names the experience."],
      ["Level 3", "Some days I feel like an imposter — but I know the feeling is common, and it isn’t evidence.", "Common humanity plus evidence."],
      ["Level 4", "I’ll admit that some days I feel like an imposter in this role. But they chose me for real reasons — the results in my last job, the way I lead teams. Feeling new isn’t the same as being unqualified. What I don’t know yet, I’ll learn.", "Honest, evidence-based, self-compassionate — and quietly confident."]
    ],
    prompt: "Answer your own inner critic at Level 4."
  },
  exercise: {
    title: "What would you tell a friend?",
    instructions: "For each harsh self-judgement, write what you would say to a friend in the same situation — then say it to yourself.",
    items: [
      { q: "“I froze in the meeting. I’m useless in English.”", a: "To a friend: “You froze for a few seconds in your second language, in front of directors. That’s human. You’ve spoken brilliantly many times.”" },
      { q: "“Everyone else here seems so confident. I don’t belong.”", a: "To a friend: “You only see their outsides. Many of them feel exactly like you. You were hired for a reason.”" },
      { q: "“I should have known that answer.”", a: "To a friend: “Nobody knows everything. You said you’d find out — that’s what professionals do.”" },
      { q: "“I’m behind compared with people my age.”", a: "To a friend: “You’ve built a career in a second language. Your path is just different — not slower.”" }
    ]
  },
  think: { q: "Where did your inner critic learn its voice — and does it still deserve to be in charge?", angles: ["Whose voice does it sound like?", "Has it ever actually helped you?", "What would a wise, kind mentor say instead?"] },
  express: { prompt: "Write a self-compassionate letter (150 words) to yourself about something you are struggling with — kind, honest and practical, the way a wise friend would write it." },
  speak: { prompt: "Your inner critic says you’re not good enough for your role. Answer it out loud for 60 seconds, as a wise friend would.", seconds: 60, structure: ["Repeat what the critic says", "Kindness: “That’s a hard feeling.”", "Common humanity: “Many people feel this.”", "Evidence: what you have actually done", "One kind, practical step"] },
  recall: [
    { q: "Calm Mind 6: What did Epictetus say at the start of the Handbook?", a: "“Some things are within our power, while others are not.”" },
    { q: "Day 52: What are the two dimensions in Fiske’s model?", a: "Warmth and competence." }
  ],
  reflect: "What would change if you spoke to yourself the way you speak to the people you lead?",
  deep: { title: "Read: Kristin Neff, Self-Compassion (2011)", body: "A readable introduction by the researcher who defined the concept, with simple exercises. Her website also offers free guided practices.", prompt: "Try one exercise for a week, then write 100 words about what changed — or didn’t." }
});

T("c8", { n: 8, module: "Live it", title: "Calm in action: your toolkit",
  why: "Understanding anxiety is one thing; having tools that work in the moment is another. This final lesson brings everything together — body, mind and action — into a personal toolkit for before a meeting, after a bad day, or at three in the morning.",
  learn: {
    body: [
      "<strong>Start with the body.</strong> Anxiety lives in the body, so calm can start there. A Stanford study (Balban and colleagues, 2023) found that five minutes a day of <strong>cyclic sighing</strong> — a double inhale through the nose, then a long, slow exhale through the mouth — improved mood and reduced physical arousal more than mindfulness meditation over a month. Long exhales tell the nervous system you are safe. Sleep and movement matter more than any technique.",
      "<strong>Ground yourself.</strong> When thoughts race, come back to the senses: name five things you can see, four you can hear, three you can touch, two you can smell and one you can taste. It sounds simple; it works because anxiety lives in the future, and the senses live in the present.",
      "<strong>Do the thing.</strong> Avoidance brings relief now and more anxiety later — every time you avoid something, your brain learns that it was dangerous. CBT treats anxiety with gradual <strong>exposure</strong>: facing the feared situation in small, manageable steps. For speaking anxiety: a comment in a small meeting, then a question in a big one, then a short presentation.",
      "<strong>Choose your attitude.</strong> Viktor Frankl, a psychiatrist who survived Nazi concentration camps, wrote in <em>Man’s Search for Meaning</em> (1946) that everything can be taken from a person except “the last of the human freedoms — to choose one’s attitude in any given set of circumstances.” The two practices of this track are choices of attitude: <strong>zoom out</strong> (most things matter less than they feel) and <strong>I’ll figure it out</strong> (whatever happens, I’ll handle it). And if anxiety stays heavy despite your toolkit, asking a professional for help is a sign of strength, not weakness."
    ],
    phrases: [
      { en: "Let me take a breath.", tone: "Calm", note: "Buys time — and literally helps." },
      { en: "I’m going to ease into it.", tone: "Gentle", note: "Gradual exposure, in everyday language." },
      { en: "Let’s step outside for five minutes.", tone: "Practical", note: "A reset — for you or for your team." },
      { en: "This is uncomfortable, and I can do it anyway.", tone: "Brave", note: "The core of exposure." },
      { en: "Whatever happens, I’ll figure it out.", tone: "Steady", note: "The track’s final sentence — yours to keep." }
    ],
    tip: "Breathe out. Zoom out. Step in."
  },
  vocab: [
    V("ground yourself", "GROWND yor-self", "phrase", "To bring your attention back to the present moment and your body, especially when you are anxious.", "From therapy and wellbeing language; now common in everyday English.", ["centre yourself", "calm down", "come back to the present"], "“Centre yourself” is similar and slightly spiritual. “Calm down” is general — and often unhelpful when said to someone. “Come back to the present” is descriptive. “Ground yourself” suggests feet on the floor and senses awake.", "Before I go on stage, I ground myself: feet on the floor, three slow breaths.", "— How do you stay so calm before presentations?\n— I ground myself — I notice what I can see and hear for a minute.", "Describe how you ground yourself."),
    V("comfort zone", "KUM-fert zohn", "noun", "A situation in which you feel safe and at ease, without stress or risk.", "Usually in “step out of / outside your comfort zone”.", ["safe space", "familiar territory", "routine"], "A “safe space” is protective, often emotional. “Familiar territory” is metaphorical. A “routine” is habitual. A “comfort zone” is where growth is limited because nothing is challenged.", "Presenting in English took me far outside my comfort zone — and that’s where I grew.", "— Why did you volunteer to present?\n— To push myself out of my comfort zone.", "Write one step outside your comfort zone that you’ll take this month."),
    V("ease into", "EEZ in-too", "phrasal verb", "To start something gradually and gently.", "The everyday language of gradual exposure.", ["warm up", "build up to", "dip a toe in"], "“Warm up” is preparation. “Build up to” is gradual progress towards a goal. “Dip a toe in” is trying something very cautiously. “Ease into” is starting gently and increasing.", "I eased into speaking up: first a question, then a comment, then a proposal.", "— Isn’t it scary to lead the whole meeting?\n— I’m easing into it — this week I’m just opening it.", "Write how you could ease into something that scares you."),
    V("take a breather", "tayk uh BREE-ther", "phrase", "To have a short rest from an activity.", "Informal and positive — a reset for yourself or a team.", ["take a break", "pause", "recharge"], "“Take a break” is neutral. “Pause” is brief. “Recharge” suggests restoring energy. “Take a breather” is a short rest to catch your breath — literally and figuratively.", "After two hours of negotiation, we agreed to take a breather.", "— This is getting heated.\n— Let’s take a breather and come back in ten minutes.", "Write a sentence suggesting a breather in a tense meeting."),
    V("face your fears", "fays yor FEERZ", "phrase", "To deal directly with something that frightens you instead of avoiding it.", "Inspirational but real: the core of exposure therapy.", ["confront", "tackle", "take on"], "“Confront” is direct and sometimes aggressive. “Tackle” is practical — dealing with a problem. “Take on” means accepting a challenge. “Face your fears” is about courage in front of what scares you.", "Facing my fear of presenting started with one question in a small meeting.", "— You used to hate public speaking!\n— I still feel nervous — I just face it now.", "Name one fear you’d like to face — and the first small step.")
  ],
  culture: "frankl",
  cultureNote: "Frankl’s freedom is not freedom from anxiety — it’s the freedom to choose what you do with it. Breathe out, zoom out, step in: three small choices you can make in any meeting, on any day.",
  sayBetter: {
    basic: "I am always nervous before presentations and I can’t control it.",
    levels: [
      ["Level 1", "I always get nervous before presentations.", "Honest, and less helpless."],
      ["Level 2", "I get nervous before presentations, but I have a routine that helps.", "Agency."],
      ["Level 3", "Before presentations I still get nervous, so I breathe out slowly, remind myself that people notice far less than I feel, and open with my two prepared sentences.", "A real toolkit."],
      ["Level 4", "I still get nervous before big presentations — I’ve stopped waiting for that to disappear. Instead I have a routine: two slow sighs, a quick zoom-out — “in ten months nobody will remember the slips” — and my first two sentences ready. Then I remind myself: whatever happens, I’ll figure it out.", "Accepts the feeling, describes the tools and ends with the track’s core belief."]
    ],
    prompt: "Describe your own calm routine at Level 4."
  },
  exercise: {
    title: "Build your toolkit",
    instructions: "Write one tool you will use in each situation — body, mind or action.",
    items: [
      { q: "Five minutes before an important meeting", a: "Body: two cyclic sighs. Mind: “I’m excited.” Action: rehearse my first two sentences." },
      { q: "At 3 am, when the worries start", a: "Mind: write the worries down for tomorrow’s worry time. Body: slow exhales. Rule: no decisions at 3 am." },
      { q: "After a meeting that went badly", a: "Self-compassion: what would I tell a friend? Zoom out: 10-10-10. Action: one lesson learned, one email to fix what can be fixed." },
      { q: "When you notice you’re avoiding something", a: "Exposure: the smallest step towards it, today. Reminder: avoidance makes it bigger." }
    ]
  },
  think: { q: "Which of the two practices — zoom out or I’ll figure it out — do you need more, and why?", angles: ["Which one comes naturally to you?", "Which situations call for each?", "What would your life look like if you practised both for a year?"] },
  express: { prompt: "Write your personal calm toolkit (150 words): one body tool, one mind tool, one action tool, and the sentence you’ll say to yourself when it matters." },
  speak: { prompt: "Present your personal calm toolkit in 90 seconds — as if you were sharing it with your team.", seconds: 90, structure: ["Why it matters: anxiety at work is normal", "A body tool", "A mind tool: zoom out", "An action tool: ease into it", "Your closing sentence: “Whatever happens, I’ll figure it out.”"] },
  recall: [
    { q: "Calm Mind 7: What are Kristin Neff’s three parts of self-compassion?", a: "Self-kindness, common humanity and mindfulness." },
    { q: "Calm Mind 4: What was Susan Jeffers’s antidote to fear?", a: "“Whatever happens, I’ll handle it.”" }
  ],
  reflect: "Which tool from this track will you actually use this week — and when, exactly?",
  deep: { title: "Read: Viktor Frankl, Man’s Search for Meaning (1946)", body: "Short, unforgettable and one of the most influential books of the 20th century. The first part is his account of the camps; the second introduces logotherapy, his approach to meaning.", prompt: "Write 150 words: what attitude do you want to choose this year, whatever happens?" }
});
})();
