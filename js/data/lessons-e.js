/* Days 31–38, fully written (Month 2 — Become Interesting). Day 35 is the weekly review. */
(function () {
const V = TAW.V;

TAW.lessons[31] = {
  day: 31, title: "The art of asking questions", kicker: "Conversation · Questions",
  cats: ["conversation"], skills: ["conversation", "english"], difficulty: "Foundation", minutes: 30,
  why: "Questions are the engine of conversation — and the fastest way to become interesting is to become interested. But not all questions are equal: some collect facts, some open stories, and some show the other person that you really listened.",
  learn: {
    body: [
      "<strong>Closed questions</strong> collect facts: “Do you like your job?” “Where are you from?” They are quick and useful, but they invite one-word answers. <strong>Open questions</strong> invite stories: “What do you enjoy most about your job?” “What was it like growing up there?” Strong conversations alternate: a closed question to establish a fact, an open one to explore it.",
      "The most powerful question is the <strong>follow-up</strong> — the second question, built on the answer to the first: “What made you choose that?” “What surprised you?” A follow-up proves you listened. A Harvard study by Karen Huang and colleagues (2017) found that people who asked more questions — especially follow-up questions — were liked more by their conversation partners.",
      "<strong>“Why?”</strong> can sound like an accusation (“Why did you do that?”). Softer alternatives keep the curiosity without the pressure: “What drew you to…?”, “What made you decide…?”, “How did you end up…?”",
      "Great interviewers such as Terry Gross add two habits: <strong>preparation</strong> — knowing enough to ask a specific question — and <strong>silence</strong>. After a question, they wait. People often say the most interesting thing after a pause, not before it."
    ],
    phrases: [
      { en: "What drew you to…?", tone: "Warm, curious", note: "A gentle “why” — it invites a story about motivation." },
      { en: "Could you say more about that?", tone: "Encouraging", note: "The simplest follow-up; it works in meetings and at dinners." },
      { en: "What’s the part that surprised you most?", tone: "Engaged", note: "Gets past the rehearsed version of a story." },
      { en: "How did you end up doing that?", tone: "Relaxed", note: "A friendly alternative to “Why did you choose…?”" },
      { en: "What would you do differently if you started again?", tone: "Reflective", note: "A deeper question — use it once the conversation has some warmth." }
    ],
    tip: "Ask the second question. That’s where the conversation begins."
  },
  vocab: [
    V("probe", "PROHB (rhymes with “robe”)", "verb / noun", "To ask questions in order to discover more, especially about something complex or hidden.", "Journalists, doctors and investigators probe. In conversation, probe gently — curiosity, not interrogation.", ["explore", "dig into", "question"], "“Explore” is open and relaxed. “Dig into” is informal and thorough. “Question” can sound formal or suspicious. “Probe” suggests going deeper, sometimes into sensitive areas.", "A good interviewer probes without making the guest feel interrogated.", "— She asked me so many questions about the project.\n— Was it friendly?\n— Yes — she probed, but kindly.", "Write a sentence about a topic you would like to probe more deeply."),
    V("elaborate", "i-LAB-uh-rayt (verb) · i-LAB-uh-rut (adjective)", "verb", "To add more detail or explanation to something you have said.", "Often an invitation: “Could you elaborate?” The pronunciation changes between the verb and the adjective (an elaborate plan).", ["expand on", "develop", "go into detail"], "“Expand on” is the most neutral. “Develop” is about building an idea. “Go into detail” is informal. “Elaborate” is slightly more formal — common in meetings and interviews.", "When the candidate mentioned a failed project, the panel asked her to elaborate.", "— We had a few problems with the launch.\n— Could you elaborate?\n— Sure — the main issue was the payment system.", "Write a polite question asking someone to elaborate."),
    V("underlying", "un-der-LY-ing", "adjective", "Real and important, but not immediately obvious; lying beneath the surface.", "Excellent for deeper conversations: the underlying cause, the underlying reason, an underlying fear.", ["fundamental", "root", "hidden"], "“Hidden” suggests deliberate concealment. “Root” goes with cause (“the root cause”). “Fundamental” means basic and essential. “Underlying” means beneath the surface, often not yet noticed.", "The underlying problem wasn’t the software — it was that nobody owned the process.", "— Why do you think she quit?\n— Officially, the salary. But I think the underlying reason was her manager.", "Describe a problem and its underlying cause."),
    V("intriguing", "in-TREE-ging", "adjective", "Very interesting because it is unusual, mysterious or unexpected.", "Stronger than “interesting” and more elegant than “very interesting”. It signals real curiosity.", ["fascinating", "curious", "compelling"], "“Fascinating” is stronger and more emotional. “Curious” can also mean strange. “Compelling” means convincing or hard to ignore. “Intriguing” suggests a mystery you want to explore.", "What I find intriguing is that the best teams ask the most questions.", "— He left a bank to become a beekeeper.\n— That’s intriguing. What made him do it?", "React to something surprising with “intriguing” — and add a question."),
    V("open-ended", "oh-pun-EN-did", "adjective", "(Of a question) allowing any answer, not just yes or no or a fixed choice.", "A key term in interviewing, coaching and research. The opposite is a closed question.", ["open", "broad", "exploratory"], "“Open” is the everyday word. “Broad” means covering a wide range. “Exploratory” means intended to discover something. “Open-ended” specifically means there is no fixed answer.", "Start with an open-ended question, then narrow down.", "— How do I get people to talk in interviews?\n— Ask open-ended questions — and then be quiet.", "Rewrite a closed question as an open-ended one.")
  ],
  culture: "terry-gross",
  cultureNote: "Terry Gross’s gift is not clever questions — it’s simple, prepared, curious ones, followed by patience. You can borrow her method tomorrow: ask, then wait three seconds longer than feels comfortable.",
  sayBetter: {
    basic: "Why did you do that job?",
    levels: [
      ["Level 1", "Why did you choose that job?", "Clearer, but it still sounds like an interview."],
      ["Level 2", "What made you choose that job?", "Softer — it invites reasons, not a defence."],
      ["Level 3", "What drew you to that kind of work in the first place?", "Curious and warm; it asks for a story."],
      ["Level 4", "I’m curious — what drew you to that kind of work in the first place? It’s not the obvious path.", "Genuine interest, a specific observation, and a question that feels like a compliment."]
    ],
    prompt: "Write a Level 4 question you could ask a new colleague about their career."
  },
  exercise: {
    title: "Open it up",
    instructions: "Turn each closed question into an open one — then add a follow-up.",
    items: [
      { q: "Do you like living in Madrid?", a: "What do you love about living in Madrid — and what do you miss about home? (Follow-up: What surprised you most when you first arrived?)" },
      { q: "Was the conference good?", a: "What was the most useful thing you heard at the conference? (Follow-up: Will you change anything because of it?)" },
      { q: "Are you enjoying the new role?", a: "How is the new role compared with what you expected? (Follow-up: What’s been the hardest part to get used to?)" },
      { q: "Did you have a nice holiday?", a: "What was the highlight of your holiday? (Follow-up: What made it so special?)" }
    ]
  },
  think: {
    q: "What’s the best question anyone has ever asked you — and why did it matter?",
    angles: ["Did it make you think, feel seen, or change direction?", "Who asks you good questions — and what do they do differently?", "What question do you wish someone would ask you?"]
  },
  express: { prompt: "Write 6–8 questions you could ask a senior person you admire at a dinner. Mix open questions and follow-ups, and avoid anything you could find on Google." },
  speak: {
    prompt: "Interview me for 90 seconds about my job. Use at least two follow-up questions that build on my (imagined) answers.", seconds: 90,
    structure: ["A warm, open first question", "A follow-up that picks up a detail", "A “what surprised you?” question", "A deeper question about meaning or motivation", "A thank-you that shows you listened"]
  },
  recall: [
    { q: "Day 6: What is the “information gap” theory of curiosity?", a: "Loewenstein’s idea that curiosity arises when we notice a gap between what we know and what we want to know." },
    { q: "Day 27: How does small talk become something bigger?", a: "Through genuine follow-up questions and finding something to bond over — moving from facts to stories and feelings." },
    { q: "Day 3: Give one respectful way to disagree.", a: "“I see it slightly differently…” or “I take your point, but…” — acknowledge first, then offer your view." }
  ],
  reflect: "In your conversations this week, who asked more questions — you or the other person? What did you learn by asking?",
  deep: {
    title: "Listen: Fresh Air with Terry Gross",
    body: "Choose any Fresh Air interview (the archive is free on NPR’s website and in podcast apps). As you listen, write down every question she asks — and mark the follow-ups.",
    prompt: "Write 150 words: what makes her questions work? Which one would you steal?"
  }
};

TAW.lessons[32] = {
  day: 32, title: "Active listening", kicker: "Conversation · Listening",
  cats: ["conversation", "psychology"], skills: ["conversation", "english"], difficulty: "Foundation", minutes: 30,
  why: "Most people listen in order to reply. Active listening means listening in order to understand — and making that understanding visible. It is the most underrated skill in leadership, friendship and negotiation.",
  learn: {
    body: [
      "Carl Rogers, the psychologist behind person-centred therapy, described the conditions in which people open up: <strong>empathy</strong>, <strong>acceptance</strong> and <strong>genuineness</strong>. In 1957, with Richard Farson, he wrote an essay called “Active Listening”, arguing that it is one of the most effective ways to help people change — and it was written for managers, not therapists.",
      "Active listening has three visible moves. <strong>Paraphrase</strong> the content: “So the deadline moved, and nobody told you.” <strong>Reflect</strong> the feeling: “That sounds really frustrating.” <strong>Ask</strong> before advising: “What would help right now?”",
      "The most common mistake is <strong>jumping to advice</strong>. When someone shares a problem, they usually want to be understood first and helped second. Advice offered too early can sound like: “Your problem is simple — here’s the fix.”",
      "Paraphrasing is not repeating. Use your own words, keep it short, and check: “Is that right?” If you get it wrong, you have still helped: the other person will correct you — and clarify their own thinking."
    ],
    phrases: [
      { en: "So what you’re saying is…", tone: "Clarifying", note: "A paraphrase — then let them confirm or correct it." },
      { en: "It sounds like you felt…", tone: "Empathetic", note: "Reflects the emotion without claiming to know it." },
      { en: "What would you like to happen?", tone: "Supportive", note: "Moves from problem to possibility — without imposing advice." },
      { en: "Tell me more.", tone: "Simple, warm", note: "Three words that open almost anyone up." },
      { en: "Do you want my advice, or do you just need to vent?", tone: "Honest, informal", note: "A brilliant question among friends and close colleagues." }
    ],
    tip: "Understand first. Advise later — if at all."
  },
  vocab: [
    V("paraphrase", "PAR-uh-frayz", "verb / noun", "To express the meaning of something using different words, often to check that you have understood.", "A core skill in listening and in writing. In conversation, keep paraphrases short.", ["rephrase", "sum up", "restate"], "“Rephrase” usually means saying your own words differently. “Sum up” means summarise briefly. “Restate” is formal. “Paraphrase” means expressing someone’s meaning in your own words.", "Before answering a difficult question, she paraphrased it to make sure she had understood.", "— I feel like I’m doing three jobs.\n— So, if I’ve got this right: the workload has grown, but the role hasn’t changed?\n— Exactly.", "Paraphrase something a colleague said to you recently."),
    V("acknowledge", "uhk-NOL-ij", "verb", "To accept or admit that something exists or is true; to show that you have noticed someone or something.", "Very useful in difficult conversations: acknowledging a feeling or a point is not the same as agreeing with it.", ["recognise", "admit", "accept"], "“Admit” suggests reluctance or guilt. “Accept” means agree that something is true. “Recognise” means see or identify. “Acknowledge” means openly showing that you see it — without necessarily agreeing.", "I acknowledge that the timeline was tight — but the quality issues still need fixing.", "— Nobody even said thank you.\n— That’s fair. I should have acknowledged your work at the meeting.", "Write a sentence that acknowledges someone’s point without agreeing with it."),
    V("attentive", "uh-TEN-tiv", "adjective", "Paying close attention; also, careful to help or look after someone.", "Positive: an attentive listener, an attentive host, attentive service.", ["focused", "alert", "considerate"], "“Focused” is about concentration. “Alert” is about being ready to react. “Considerate” is about thinking of others’ needs. “Attentive” combines attention with care.", "She’s an attentive listener — she remembers the small things you tell her.", "— How was the restaurant?\n— Lovely. The staff were attentive without being intrusive.", "Describe the most attentive person you know."),
    V("validate", "VAL-i-dayt", "verb", "To recognise that someone’s feelings or opinions are reasonable; also, to check that something is correct.", "Two uses: emotional (validate feelings) and technical (validate data). Validating a feeling doesn’t mean agreeing with every conclusion.", ["confirm", "support", "endorse"], "“Confirm” means show something is true. “Endorse” means publicly approve. “Support” is general. In conversation, “validate” means: your feeling makes sense.", "Before suggesting solutions, validate how the person feels.", "— I know it’s silly to be upset about it.\n— It’s not silly at all. Anyone would be upset.", "Write a sentence that validates a friend’s frustration."),
    V("vent", "vent", "verb", "To express strong feelings, especially anger or frustration, in order to release them.", "Informal and very common: “I just need to vent.” The listener’s job is usually to listen, not to fix.", ["let off steam", "rant", "unload"], "“Let off steam” is light and informal. “Rant” suggests long, angry talk. “Unload” suggests sharing a burden. “Vent” is neutral and names a real need.", "Sometimes people don’t want solutions; they just need to vent.", "— Can I vent for five minutes?\n— Of course. Go ahead — I’m listening.", "Write how you would respond when a friend says they need to vent.")
  ],
  culture: "rogers",
  cultureNote: "Rogers believed that being deeply understood is one of the most powerful experiences a person can have. In a meeting, a single accurate paraphrase can change the temperature of the whole room.",
  sayBetter: {
    basic: "Don’t worry, you should just talk to your boss.",
    levels: [
      ["Level 1", "Maybe you should talk to your boss.", "Softer, but it still jumps straight to advice."],
      ["Level 2", "That sounds stressful. Have you thought about talking to your boss?", "Acknowledges the feeling first."],
      ["Level 3", "That sounds really stressful — especially after all those extra hours. What would you like to happen?", "Reflects, shows you listened, and asks before advising."],
      ["Level 4", "So the project was moved without anyone asking you — after all those extra hours. No wonder you’re frustrated. What would a good outcome look like for you? I’m happy to think it through together, if that helps.", "Paraphrase, validation, an open question — and help offered, not imposed."]
    ],
    prompt: "A friend says: “I’m thinking of quitting.” Write your Level 4 response — no advice yet."
  },
  exercise: {
    title: "Paraphrase and reflect",
    instructions: "For each statement, write a paraphrase (the content) and a reflection (the feeling).",
    items: [
      { q: "“I’ve been working until ten every night and my manager still says I’m not proactive.”", a: "Paraphrase: You’re putting in long hours, but the feedback is about initiative, not effort. Reflection: That must feel really unfair." },
      { q: "“My daughter starts university next week. The house is going to be so quiet.”", a: "Paraphrase: It’s a big change for the family. Reflection: It sounds as if you’re proud — and a little sad at the same time." },
      { q: "“They gave the project to someone who joined two months ago.”", a: "Paraphrase: You were passed over for someone much newer. Reflection: That sounds disappointing — maybe even a bit hurtful." },
      { q: "“I finally presented to the board — and nobody asked a single question.”", a: "Paraphrase: You presented, but there was no reaction. Reflection: It sounds like you’re not sure whether that was good or bad." }
    ]
  },
  think: {
    q: "Why is it so hard to listen without preparing your answer?",
    angles: ["What are you afraid of losing if you don’t reply quickly?", "When do you listen best — and with whom?", "What would change in your work if you listened 20% more?"]
  },
  express: { prompt: "Write about a time someone really listened to you. What did they do — and what changed because of it?" },
  speak: {
    prompt: "A friend tells you they are thinking of quitting their job. Respond for 60 seconds using only listening techniques — no advice.", seconds: 60,
    structure: ["Acknowledge: “That’s a big decision.”", "Paraphrase what you heard", "Reflect a feeling", "Ask an open question", "Offer support, not solutions"]
  },
  recall: [
    { q: "Day 31: What makes a follow-up question powerful?", a: "It builds on the answer you have just heard — proof that you listened." },
    { q: "Day 16: Give a precise word for a gentle sadness mixed with longing for the past.", a: "Wistful." },
    { q: "Day 25: How can you express a preference gently?", a: "“I’m more inclined towards…”, “I tend to lean towards…”, “It’s not really my cup of tea.”" }
  ],
  reflect: "Think of your last difficult conversation. Did you listen to understand — or to reply?",
  deep: {
    title: "Read: Rogers and Farson, “Active Listening” (1957)",
    body: "This short essay is widely available online. Notice how practical it is — and how much of it is about what not to say.",
    prompt: "Write 150 words: which idea from the essay could you use in your next one-to-one meeting?"
  }
};

TAW.lessons[33] = {
  day: 33, title: "Keeping a conversation going", kicker: "Conversation · Flow",
  cats: ["conversation"], skills: ["conversation", "english"], difficulty: "Foundation", minutes: 30,
  why: "Conversations rarely die because people are boring. They die because answers are closed and nobody picks up a thread. Once you can see threads, you will rarely run out of things to say.",
  learn: {
    body: [
      "Every sentence contains <strong>threads</strong> — topics, details and feelings that someone could follow. “I just got back from Lisbon — the food was amazing, but the flight was a nightmare” offers at least four: Lisbon, travel, food and the flight. A good listener picks one up: “A nightmare? What happened?”",
      "The skill works both ways. When you answer, <strong>offer threads</strong>. Compare “Fine, thanks” with “Good, thanks — I finally finished a project I’ve been working on since January, so I’m celebrating with a very long walk.” The second gives the other person three easy ways in.",
      "Moving between topics needs bridges. A <strong>segue</strong> is a smooth transition (“Speaking of travel…”); a <strong>tangent</strong> is a jump to a loosely related topic (“That reminds me…”). Tangents are fine — they often lead to the best parts of a conversation — as long as you can come back: “Anyway, going back to what you said about…”",
      "If a conversation stalls, don’t panic. Return to an earlier thread (“You mentioned Lisbon — was it your first time?”), or ask about something you share: the place, the event, the food. A silence of two or three seconds is normal; it isn’t failure."
    ],
    phrases: [
      { en: "Speaking of…", tone: "Smooth", note: "The classic segue — it links a new topic to the current one." },
      { en: "That reminds me…", tone: "Natural", note: "Introduces a related story or a tangent." },
      { en: "Going back to what you said about…", tone: "Attentive", note: "Returns to an earlier thread — and shows you were listening." },
      { en: "Wait — you said something interesting earlier…", tone: "Engaged, informal", note: "Revives a dropped thread with energy." },
      { en: "Anyway, I’ve gone off on a tangent — you were saying?", tone: "Self-aware, warm", note: "Hands the conversation back gracefully." }
    ],
    tip: "Answer with hooks. Listen for hooks."
  },
  vocab: [
    V("segue", "SEG-way (like “Segway”)", "noun / verb", "A smooth transition from one topic or part to another.", "From Italian, “it follows”. Often used playfully: “Nice segue!” when someone changes the subject cleverly.", ["transition", "link", "bridge"], "“Transition” is general and neutral. “Link” connects two things. “Bridge” suggests crossing between topics. “Segue” is specifically smooth and conversational.", "She made a neat segue from the weather to the new travel policy.", "— Speaking of holidays, has anyone booked the team offsite?\n— Ha — nice segue!", "Write a segue from talking about food to talking about work."),
    V("tangent", "TAN-junt", "noun", "A sudden change to a slightly related topic — usually in the phrase “go off on a tangent”.", "Mildly self-critical when you say it about yourself (“Sorry, I’m going off on a tangent”).", ["digression", "detour", "aside"], "“Digression” is formal, for speeches and writing. An “aside” is a brief comment. “Detour” is informal and metaphorical. “Tangent” suggests drifting away from the main line.", "The meeting went off on a tangent about parking spaces for twenty minutes.", "— …and that’s why I hate airport sandwiches. Sorry, total tangent.\n— No, I loved it!", "Describe a tangent that improved a conversation."),
    V("pick up on", "pik UP on", "phrasal verb", "To notice something — especially something subtle — and respond to it.", "Used for details, moods and hints: pick up on a comment, pick up on someone’s tone.", ["notice", "catch", "respond to"], "“Notice” is just seeing. “Catch” means hear or understand something quickly. “Respond to” means react. “Pick up on” means notice and react — often to something small.", "He picked up on my hesitation and asked whether I had doubts.", "— I mentioned my dog once, weeks ago.\n— And she picked up on it?\n— She asked how he was!", "Write about something a good listener picked up on."),
    V("thread", "thred", "noun", "A line of conversation or a theme that connects ideas; also a series of connected messages online.", "Visual and useful: lose the thread, pick up the thread, a common thread.", ["theme", "line", "strand"], "A “theme” is the central subject. A “strand” is one element of a complex whole. A “line” of thought or argument is a sequence. A “thread” is something you can follow and pull.", "I lost the thread when he started talking about his cousin’s wedding.", "— Where was I?\n— You were talking about your trip — I want to pick up that thread.", "Use “thread” to describe a conversation you enjoyed."),
    V("lull", "lul", "noun", "A short pause or quiet period in activity or conversation.", "Neutral — every conversation has lulls. “There was a lull in the conversation.”", ["pause", "silence", "break"], "A “pause” is brief and often intentional. “Silence” can be long or uncomfortable. A “break” is a planned stop. A “lull” is a natural quiet moment between periods of activity.", "During a lull in the conversation, she asked about his trip.", "— What do you say when there’s a lull?\n— I go back to something they mentioned earlier.", "Describe what you usually do when there’s a lull.")
  ],
  culture: "threading",
  cultureNote: "Threading turns conversation from interrogation into exploration. The best threads to pick up are usually the ones with feeling in them — “a nightmare”, “finally”, “I miss…”.",
  sayBetter: {
    basic: "My weekend was good.",
    levels: [
      ["Level 1", "My weekend was good, thanks.", "Polite, but a dead end."],
      ["Level 2", "Really good, thanks — I went hiking.", "One thread to pick up."],
      ["Level 3", "Really good — I went hiking in the mountains for the first time in years. My legs still hate me.", "Several threads: hiking, the mountains, “years”, and a little humour."],
      ["Level 4", "Really good, thanks — I finally went hiking in the mountains, for the first time since university. My legs haven’t forgiven me, but it was exactly what I needed. Do you get out of the city much?", "Rich threads, a touch of humour, a feeling — and a question that hands the conversation back."]
    ],
    prompt: "Answer “How was your week?” at Level 4."
  },
  exercise: {
    title: "Find the threads",
    instructions: "Name at least three threads in each statement, then write the follow-up you would choose.",
    items: [
      { q: "“I’ve just moved to Barcelona for work, and I’m still getting used to dinner at ten.”", a: "Threads: moving, Barcelona, the job, local habits. Follow-up: “Ten o’clock! What else has surprised you so far?”" },
      { q: "“I used to be a lawyer, but now I make furniture.”", a: "Threads: law, the change, furniture making, motivation. Follow-up: “That’s quite a change — what made you leave law?”" },
      { q: "“My son is obsessed with dinosaurs, so our weekends are basically museums.”", a: "Threads: the son, dinosaurs, museums, parenting. Follow-up: “Which museum has he decided is the best?”" },
      { q: "“I finally read Middlemarch — it took me three summers.”", a: "Threads: the novel, persistence, reading habits, summers. Follow-up: “Three summers! Was it worth it?”" }
    ]
  },
  think: {
    q: "Who do you find easy to talk to — and what exactly do they do?",
    angles: ["Do they offer threads, or pick them up?", "How do they handle silences?", "Do you do the same for other people?"]
  },
  express: { prompt: "Write a short dialogue (8–10 lines) between you and a new colleague, in which each of you picks up a thread from the other at least twice." },
  speak: {
    prompt: "Answer “How was your weekend?” in a way that offers at least three threads someone could pick up — then imagine their follow-up, and answer that too.", seconds: 60,
    structure: ["A warm opening", "A specific detail (thread 1)", "A feeling or opinion (thread 2)", "A small surprise or a touch of humour (thread 3)", "A question back"]
  },
  recall: [
    { q: "Day 32: What is the difference between paraphrasing and reflecting?", a: "Paraphrasing restates the content; reflecting names the feeling." },
    { q: "Day 26: What does “whereas” do in a sentence?", a: "It contrasts two facts or ideas: “I love cities, whereas my partner prefers the countryside.”" },
    { q: "Day 19: Give a word for a place full of activity — and one for a place that is quiet and hidden.", a: "Bustling; tucked away." }
  ],
  reflect: "In your next conversation, count the threads in the other person’s first answer. How many did you pick up?",
  deep: {
    title: "Watch: two people really talking",
    body: "Watch a long-form interview or podcast conversation you enjoy (with video, if possible). Notice each change of topic — was it a segue, a tangent, or a return to an earlier thread?",
    prompt: "Write 150 words: what made the conversation flow — and what would you copy?"
  }
};

TAW.lessons[34] = {
  day: 34, title: "The art of disagreement", kicker: "Conversation · Disagreement",
  cats: ["conversation", "philosophy"], skills: ["conversation", "articulation", "thinking"], difficulty: "Intermediate", minutes: 35,
  why: "In senior roles, disagreeing well is not optional — it is part of the job. The goal is not to win, but to improve the decision while keeping the relationship. The difference is often in the exact words you choose.",
  learn: {
    body: [
      "Disagreement has a <strong>temperature</strong>, and English gives you a dial. From softest to firmest: “I’d look at it slightly differently…” → “I’m not entirely convinced…” → “I see your point, but…” → “I disagree.” → “I strongly disagree.” Choose the level deliberately — don’t let nerves choose it for you.",
      "In his essay “How to Disagree” (2008), the essayist and investor Paul Graham described a hierarchy. At the bottom: name-calling and attacking the person. In the middle: responding to someone’s tone, or simply contradicting them. At the top: a counterargument with evidence — and, best of all, refuting the <strong>central point</strong>, not a side detail.",
      "John Stuart Mill argued in <em>On Liberty</em> (1859) that “he who knows only his own side of the case knows little of that.” Disagreement is how ideas get tested. That is why the strongest move is to <strong>steelman</strong>: state the other view at its best before you answer it.",
      "Watch the small words. “But” can erase everything before it; “and” or “although” keep both ideas alive. “You’re wrong” attacks a person; “I see it differently” offers a perspective. And name the <strong>assumption</strong>: often the disagreement isn’t about facts but about what each person takes for granted."
    ],
    phrases: [
      { en: "I see your point, but…", tone: "Balanced", note: "Acknowledges before disagreeing — the classic." },
      { en: "I’m not entirely convinced…", tone: "Gentle", note: "Signals doubt without confrontation; very common in British English." },
      { en: "I’d look at it slightly differently…", tone: "Very soft", note: "Offers a new angle rather than a rebuttal." },
      { en: "There’s some truth to that, although…", tone: "Nuanced", note: "Concedes part of the point, then qualifies it." },
      { en: "I think where we differ is on the assumption that…", tone: "Analytical", note: "Moves the disagreement to its real root." }
    ],
    tip: "Disagree with the idea, not the person — and with the central point, not a detail."
  },
  vocab: [
    V("dismissive", "dis-MIS-iv", "adjective", "Showing that you think something or someone is not worth considering.", "Strongly negative when describing behaviour: a dismissive tone, a dismissive wave of the hand.", ["condescending", "scornful", "curt"], "“Condescending” means treating someone as inferior. “Scornful” shows contempt. “Curt” means rudely brief. “Dismissive” means refusing to take something seriously.", "His dismissive reply — “That’ll never work” — ended the brainstorm.", "— How did he react to your idea?\n— A bit dismissive, honestly. He didn’t ask a single question.", "Rewrite a dismissive response as a respectful disagreement."),
    V("rebut", "ri-BUT", "verb", "To argue that a statement or claim is false, especially with evidence. Noun: rebuttal.", "Formal; common in debate, law and business writing.", ["refute", "counter", "contradict"], "“Contradict” just says the opposite. “Counter” replies with another argument. “Refute” proves something wrong. “Rebut” means respond with arguments or evidence — without guaranteeing you have proved it wrong.", "She rebutted each objection with data from the pilot.", "— They said the market is too small.\n— And you rebutted that?\n— With last year’s numbers, yes.", "Write a one-sentence rebuttal to a claim you disagree with."),
    V("contentious", "kun-TEN-shus", "adjective", "Likely to cause disagreement or argument.", "Useful for naming a topic’s sensitivity before discussing it: “This is a contentious one…”", ["controversial", "divisive", "sensitive"], "“Controversial” is the most common. “Divisive” means it splits people into groups. “Sensitive” means it requires care. “Contentious” emphasises the likelihood of argument.", "Remote work is still a contentious topic in our company.", "— Can I raise something contentious?\n— Go ahead — we’re all adults.", "Name a contentious topic in your industry and say why it divides people."),
    V("steelman", "STEEL-man", "verb / noun", "To present the strongest possible version of an argument you disagree with, before responding to it.", "The opposite of a “straw man” — a weak, distorted version that is easy to knock down. A sign of intellectual honesty.", ["do justice to", "represent fairly", "read charitably"], "A “straw man” misrepresents the other side. “Representing fairly” is neutral. A “charitable reading” assumes good intent. “Steelmanning” goes further: making their case even better than they did.", "Before criticising the proposal, she steelmanned it so well that its author smiled.", "— You’re just going to attack my plan.\n— No — let me steelman it first, then tell you my concern.", "Steelman a view you disagree with, in two sentences."),
    V("devil’s advocate", "DEV-ulz AD-vuh-kut", "noun phrase", "Someone who argues against an idea — not necessarily their own position — to test it.", "Usually “play devil’s advocate”. The name comes from a historic office in the Catholic Church that argued against declaring a candidate a saint.", ["contrarian", "sceptic", "critic"], "A “contrarian” habitually opposes. A “sceptic” doubts. A “critic” finds fault. A “devil’s advocate” opposes temporarily and on purpose, to stress-test an idea.", "Let me play devil’s advocate: what if customers don’t want faster delivery, but cheaper delivery?", "— You always disagree with me!\n— I’m just playing devil’s advocate — I actually like the idea.", "Play devil’s advocate against one of your own opinions.")
  ],
  culture: "mill",
  cultureNote: "Mill’s point is practical: if you have never heard the best version of the other side, you don’t really understand your own. In meetings, steelmanning makes people listen to you — because they feel understood first.",
  sayBetter: {
    basic: "No, you are wrong, this plan is bad.",
    levels: [
      ["Level 1", "I don’t agree with this plan.", "Direct, but no reason."],
      ["Level 2", "I’m not convinced by this plan, because the timeline seems too short.", "A reason both softens and strengthens."],
      ["Level 3", "I see why the timeline appeals — speed matters. But I’m not entirely convinced we can hire the team in six weeks.", "Acknowledges, then disagrees on a specific point."],
      ["Level 4", "I think the goal is exactly right, and I’d love to move fast. Where I’d push back is on one assumption: that we can hire the team in six weeks. If that’s wrong, everything slips. Could we test it before we commit?", "Agreement on the goal, disagreement on the central assumption, and a constructive next step."]
    ],
    prompt: "Disagree with a real decision at work, at Level 4."
  },
  exercise: {
    title: "Turn the dial",
    instructions: "Rewrite each blunt disagreement at the temperature asked for.",
    items: [
      { q: "“That’s a terrible idea.” → gentle, to a peer", a: "I’d look at it slightly differently — I’m worried about how customers would react." },
      { q: "“You’re wrong about the numbers.” → firm but respectful, in a meeting", a: "I see it differently: my figures show 2.1%, not 2.6%. Could we check the date range?" },
      { q: "“No.” → to your CEO, with a reason and an alternative", a: "I’m not entirely convinced, mainly because of the risk to peak season. Could we pilot it in one region first?" },
      { q: "“Your argument makes no sense.” → steelman first", a: "If I understand you, the strongest argument is that we’d gain market share early — and I agree that matters. My concern is…" }
    ]
  },
  think: {
    q: "Is it possible to disagree with someone while still respecting their position?",
    angles: ["What does respect look like in a disagreement?", "When did someone change your mind — and how?", "Is there a topic on which you can’t steelman the other side?"]
  },
  express: { prompt: "Write a short email (6–8 sentences) disagreeing with a colleague’s proposal: acknowledge the goal, steelman their view, state your central concern and suggest a next step." },
  speak: {
    prompt: "Should people avoid discussing politics with friends? Speak for 90 seconds — and include one disagreement with your own position.", seconds: 90,
    structure: ["Your position", "Your main reason", "Steelman the other side", "Where you still disagree — and why", "A balanced conclusion"]
  },
  recall: [
    { q: "Day 3: What does “concede” mean?", a: "To admit that something is true, often reluctantly: “I concede that the cost is high.”" },
    { q: "Day 33: What is a segue?", a: "A smooth transition from one topic to another." },
    { q: "Day 10: What is confirmation bias?", a: "The tendency to seek and remember information that confirms what we already believe." }
  ],
  reflect: "When did you last change your mind because of a disagreement? What made it possible?",
  deep: {
    title: "Read: Paul Graham, “How to Disagree” (2008)",
    body: "A short, clear essay, freely available on paulgraham.com. Notice the hierarchy — and where most online arguments sit on it.",
    prompt: "Write 150 words about a recent disagreement: where on Graham’s hierarchy was it — and where could it have been?"
  }
};

TAW.lessons[36] = {
  day: 36, title: "Agreeing without repeating", kicker: "Conversation · Agreement",
  cats: ["conversation"], skills: ["conversation", "english"], difficulty: "Foundation", minutes: 30,
  why: "“Me too” and “I agree” are polite — and they stop a conversation dead. Articulate people agree by adding something: a reason, an example, an extension or a new angle. Agreement becomes a way to build, not just to nod.",
  learn: {
    body: [
      "Agreement has degrees, and choosing the right one makes you sound precise: “Absolutely.” (complete) · “I couldn’t agree more.” (emphatic) · “I think that’s right.” (considered) · “I agree up to a point.” (partial) · “I can see where you’re coming from.” (understanding — not necessarily agreement).",
      "Improvised theatre offers the best rule for agreeing well: <strong>“Yes, and…”</strong>. Accept what your partner offers, then add something new. In conversation that means agree, then <strong>build on</strong> it — with a reason (“…because…”), an example (“…like when…”), an extension (“…and it goes further…”) or a new angle (“…and what strikes me is…”).",
      "Echoing — repeating someone’s words back — has its place in listening (Day 32), but as a way of agreeing it adds nothing. Compare “Cities are too expensive.” — “Yes, too expensive.” with “Absolutely — and what worries me is that teachers and nurses can’t afford to live near the schools and hospitals where they work.”",
      "In meetings, “I’d like to <strong>build on</strong> what Ana said…”, “To <strong>reinforce</strong> that point…” or “I <strong>concur</strong>” (very formal) signal agreement while moving the discussion forward — and they give credit to the person who spoke before you."
    ],
    phrases: [
      { en: "Absolutely — and on top of that…", tone: "Enthusiastic", note: "Agree, then add a further point." },
      { en: "That’s exactly it. I’d add…", tone: "Warm, engaged", note: "Shows you share the idea — and extends it." },
      { en: "Yes, and what strikes me is…", tone: "Thoughtful", note: "Agreement that opens a new angle." },
      { en: "I’d like to build on what Ana said…", tone: "Professional", note: "Gives credit and moves the meeting forward." },
      { en: "I agree up to a point.", tone: "Precise", note: "Partial agreement — it invites the question “Which point?”" }
    ],
    tip: "Agree by adding, not by echoing."
  },
  vocab: [
    V("build on", "bild ON", "phrasal verb", "To use something as a base for further development.", "Generous in meetings: it credits the previous speaker and adds value.", ["develop", "expand on", "extend"], "“Develop” is general. “Expand on” adds detail to a point. “Extend” makes something reach further. “Build on” emphasises using someone else’s contribution as a foundation.", "Let me build on Marco’s point about returns — the same is true for exchanges.", "— Can I build on that?\n— Please do.\n— If we fix returns, we fix half our complaints.", "Write a sentence that builds on a colleague’s idea."),
    V("reinforce", "ree-in-FORS", "verb", "To strengthen an idea, feeling or structure, often with more support or evidence.", "Used for arguments (reinforce a point), habits (reinforce behaviour) and buildings (reinforced concrete).", ["strengthen", "support", "back up"], "“Strengthen” is general. “Support” means hold up or agree with. “Back up” is informal and means provide evidence. “Reinforce” means make something already there stronger.", "The customer survey reinforces what the sales team has been saying for months.", "— Do the numbers support your view?\n— They reinforce it — churn doubled after the price change.", "Use “reinforce” to agree with a point and add evidence."),
    V("echo", "EK-oh", "verb / noun", "To repeat or express the same idea as someone else; a repeated sound.", "Positive when sincere (“I want to echo Sara’s thanks”), empty if it adds nothing.", ["repeat", "mirror", "second"], "“Repeat” is neutral. “Mirror” means reflect — often body language or tone. “Second” formally supports a proposal. “Echo” means express the same feeling or idea again.", "I’d like to echo what Laura said about the team’s effort.", "— Any final comments?\n— Just to echo everyone’s thanks to the events team.", "Write a sentence that echoes someone’s point — and then adds something new."),
    V("concur", "kun-KUR", "verb", "To agree (formal).", "Used in formal meetings and in legal and medical contexts. In casual conversation it can sound stiff — or playful.", ["agree", "assent", "be of the same mind"], "“Agree” is neutral and universal. “Assent” means formally accept a proposal. “Be of the same mind” is literary. “Concur” is formal agreement with an opinion or judgement.", "The board concurred with the committee’s recommendation.", "— I think we should wait until Q2.\n— I concur.\n— Very formal today!", "Write a formal sentence with “concur”, then rewrite it informally."),
    V("wholeheartedly", "hohl-HAR-tid-lee", "adverb", "Completely and enthusiastically, without doubt.", "Strong and warm: “I wholeheartedly agree”, “I wholeheartedly recommend her.”", ["completely", "fully", "unreservedly"], "“Completely” and “fully” are neutral. “Unreservedly” is formal — without any doubt. “Wholeheartedly” adds emotional commitment.", "I wholeheartedly recommend her for the role.", "— Do you think we should hire her?\n— Wholeheartedly. She was the best by far.", "Write a short recommendation using “wholeheartedly”.")
  ],
  culture: "yes-and",
  cultureNote: "“Yes, and” is not about agreeing with everything — it’s about building before judging. In brainstorms, try a rule: three rounds of “yes, and” before anyone is allowed to say “but”.",
  sayBetter: {
    basic: "Yes, I agree with you.",
    levels: [
      ["Level 1", "Yes, I completely agree.", "Stronger, but it still adds nothing."],
      ["Level 2", "I completely agree — it’s become really hard.", "Agreement plus a comment."],
      ["Level 3", "Absolutely — and it’s not only young people. My sister is a nurse and can’t afford to live near her hospital.", "Agreement plus an example that extends the point."],
      ["Level 4", "I couldn’t agree more — and what strikes me is the knock-on effect. When nurses and teachers can’t afford to live near where they work, the whole city starts to function less well. It’s not just a housing problem; it’s a services problem.", "Emphatic agreement plus a new angle that makes the conversation more interesting."]
    ],
    prompt: "Someone says: “AI will change every job.” Agree at Level 4 — by adding a new angle."
  },
  exercise: {
    title: "Yes, and…",
    instructions: "Agree with each statement by adding a reason, an example, an extension or a new angle. Don’t echo.",
    items: [
      { q: "“Remote work has changed the way we make friends at work.”", a: "Absolutely — and I think it has hit new joiners hardest. If you started during the pandemic, you may never have had a coffee with your team." },
      { q: "“Customers expect everything to be instant now.”", a: "Completely — and it goes beyond delivery. People expect instant answers too, which is why chat support has exploded." },
      { q: "“Reading fiction makes you more empathetic.”", a: "I think that’s right — and what strikes me is that it lets you rehearse other people’s lives without any risk." },
      { q: "“Our meetings are too long.”", a: "I couldn’t agree more — and the problem starts with the invitation: if there’s no agenda, there’s no reason to stop." }
    ]
  },
  think: {
    q: "Is agreeing too easily a form of politeness — or of laziness?",
    angles: ["When do you agree just to avoid conflict?", "How do you show real agreement, as opposed to polite agreement?", "What does a “yes, and” culture make possible in a team?"]
  },
  express: { prompt: "Write a meeting contribution (5–6 sentences) that builds on a colleague’s idea: credit them, agree specifically, and add a new angle or a next step." },
  speak: {
    prompt: "Someone says, “Cities are getting too expensive for young people.” Agree — but add three different things: a reason, an example and a new angle.", seconds: 60,
    structure: ["Agree clearly", "Add a reason", "Add an example", "Add a new angle", "Hand it back with a question"]
  },
  recall: [
    { q: "Day 34: What does it mean to steelman an argument?", a: "To present the strongest version of a view you disagree with before responding to it." },
    { q: "Day 32: Give a phrase that reflects someone’s feeling.", a: "“It sounds like you felt…” or “That must have been frustrating.”" },
    { q: "Day 22: What does “drift apart” mean?", a: "To gradually become less close, without a specific conflict." }
  ],
  reflect: "In your next meeting, notice how people agree. Who echoes — and who builds?",
  deep: {
    title: "Read: Keith Johnstone, Impro (1979)",
    body: "A classic on spontaneity and creativity, written for actors but read by teachers, designers and leaders. Read the chapters on status and spontaneity, where Johnstone discusses “offers” and “blocking”.",
    prompt: "Write 150 words: where do you block in your own conversations — and what would a “yes, and” look like?"
  }
};

TAW.lessons[37] = {
  day: 37, title: "Anecdotes", kicker: "Communication · Stories",
  cats: ["communication", "literature"], skills: ["articulation", "conversation"], difficulty: "Foundation", minutes: 30,
  why: "An anecdote is a short, true story with a point. It is one of the most powerful tools in conversation: people forget arguments, but they remember a good anecdote — and the person who told it.",
  learn: {
    body: [
      "A good anecdote has four parts: a <strong>hook</strong> (“The worst job interview I ever had…”), a <strong>scene</strong> (where, when, who — just enough), a <strong>turn</strong> (the surprise, the problem, the moment it changed) and a <strong>point</strong> (“…which taught me never to fake knowledge”). Under a minute is ideal.",
      "Link the point back to the conversation. An anecdote is a contribution, not a performance: “Speaking of first impressions — the worst interview I ever had…”, and at the end, “…so I completely agree with you about preparation.”",
      "The common mistakes: too much background (“It was a Tuesday, or maybe a Wednesday…”), no point, and <strong>digressing</strong> into details nobody needs. Cut everything that doesn’t serve the turn. And use the narrative tenses from Day 23: past continuous for the scene, past simple for the events.",
      "Scheherazade, the storyteller of the <em>One Thousand and One Nights</em>, stayed alive by always stopping at the most interesting moment. You don’t need cliffhangers at dinner, but you can borrow her instinct: <strong>build towards</strong> the turn, then land the point quickly."
    ],
    phrases: [
      { en: "That reminds me of a time…", tone: "Natural", note: "The classic bridge into an anecdote." },
      { en: "The funny thing is…", tone: "Light", note: "Signals the turn or the surprise." },
      { en: "Long story short…", tone: "Informal", note: "Skips unnecessary detail — useful if you sense impatience." },
      { en: "Which just goes to show…", tone: "Reflective", note: "Lands the point at the end." },
      { en: "Anyway — that’s why I’m so careful about…", tone: "Linking back", note: "Connects your story to the conversation." }
    ],
    tip: "Hook, scene, turn, point — in under a minute."
  },
  vocab: [
    V("anecdote", "AN-ik-doht", "noun", "A short, interesting or amusing story about a real event or person.", "Note: “anecdotal evidence” means evidence from personal stories rather than systematic data — slightly critical.", ["story", "tale", "account"], "“Story” is general. “Tale” suggests fiction or exaggeration. An “account” is a factual report. An “anecdote” is short, real and told to make a point or to entertain.", "She opened her talk with an anecdote about her first day as a manager.", "— Your evidence is a bit anecdotal.\n— Fair — but three customers told me the same thing.", "Write the hook for an anecdote from your working life."),
    V("digress", "dy-GRES", "verb", "To move away from the main subject for a while. Noun: digression.", "Often apologetic: “But I digress…” is a polished way to return to your point.", ["go off on a tangent", "wander", "stray"], "“Go off on a tangent” is informal. “Wander” and “stray” are metaphorical. “Digress” is the elegant term — and “But I digress” is a set phrase.", "He digressed into a story about his grandfather, then returned to the budget.", "— …and that’s how I learned to sail. But I digress — the point is, we need a plan B.", "Write a sentence using “But I digress” to return to your point."),
    V("telling", "TEL-ing", "adjective", "Revealing something important, often unintentionally.", "A sophisticated word for details that reveal character: a telling detail, a telling silence.", ["revealing", "significant", "meaningful"], "“Revealing” is the closest. “Significant” means important. “Meaningful” means full of meaning. “Telling” suggests that something small exposes something bigger.", "It was telling that nobody in the room asked a question.", "— He didn’t even thank the team.\n— That’s telling, isn’t it?", "Describe a telling detail you once noticed about someone."),
    V("punchline", "PUNCH-lyn", "noun", "The final part of a joke or story that makes it funny or surprising.", "Also used for the surprising end of any story: “And here’s the punchline…”", ["twist", "pay-off", "climax"], "A “twist” is an unexpected development. A “pay-off” is a satisfying ending that rewards attention. A “climax” is the most intense point. A “punchline” is the line that delivers the humour or surprise.", "The punchline was that the “VIP guest” was my old flatmate.", "— Wait — what’s the punchline?\n— The man I’d been rude to was the new CEO.", "Write the punchline of something funny that happened to you."),
    V("long story short", "long STOR-ee SHORT", "phrase", "Used to skip the details and get to the end of a story quickly.", "Informal and very common. British English also says “to cut a long story short”.", ["in short", "to sum up", "basically"], "“In short” and “to sum up” are more formal. “Basically” is very informal. “Long story short” signals that you are deliberately skipping details.", "Long story short, we missed the flight and spent the night in Frankfurt.", "— So what happened with the supplier?\n— Long story short: we found a better one.", "Tell a whole story in one sentence beginning “Long story short…”.")
  ],
  culture: "scheherazade",
  cultureNote: "Scheherazade’s survival depended on knowing exactly when to stop. Most anecdotes fail by going on too long, not by being too short.",
  sayBetter: {
    basic: "One time I went to an interview and it was very bad and I learned something.",
    levels: [
      ["Level 1", "I once had a really bad job interview.", "A hook — but nothing else."],
      ["Level 2", "I once had a terrible interview — I pretended to know software I’d never used.", "The scene and the problem."],
      ["Level 3", "The worst interview I ever had, I pretended to know software I’d never used. Then they asked me to share my screen and show them.", "A turn — now it’s a story."],
      ["Level 4", "The worst interview I ever had, I said I was an expert in software I’d never even opened. They smiled and asked me to share my screen. Long story short, I didn’t get the job — but I’ve never faked knowledge since. Which is why I love the phrase “I don’t know, but I’ll find out.”", "Hook, scene, turn and point — with a link back to the conversation."]
    ],
    prompt: "Write a Level 4 anecdote about a mistake you learned from."
  },
  exercise: {
    title: "Find the point",
    instructions: "For each conversation, write the hook and the point of an anecdote you could tell (real or imagined).",
    items: [
      { q: "A conversation about first impressions", a: "Hook: “I once misjudged a colleague completely…” Point: “…which taught me to give people a second meeting before deciding.”" },
      { q: "A conversation about travel disasters", a: "Hook: “The worst trip I ever had started with a cancelled flight…” Point: “…and it became the most memorable holiday of my life.”" },
      { q: "A conversation about leadership", a: "Hook: “The best boss I ever had did one small thing every Friday…” Point: “…she thanked one person, specifically. I still do it.”" },
      { q: "A conversation about learning English", a: "Hook: “In my first meeting in English, I said I was ‘actually’ working on a project when I meant ‘currently’…” Point: “…and now I’m the first to laugh at my mistakes.”" }
    ]
  },
  think: {
    q: "Why do some people tell stories brilliantly and others don’t?",
    angles: ["Is it timing, detail or confidence?", "Who is the best storyteller you know — and what do they do?", "Which of your stories do people ask you to tell again?"]
  },
  express: { prompt: "Write an anecdote (120–150 words) that illustrates something about your country, your family or your work — with a hook, a scene, a turn and a point." },
  speak: {
    prompt: "Tell an anecdote that illustrates something about your country or your family — in under a minute.", seconds: 60,
    structure: ["Hook: one intriguing sentence", "Scene: where, when, who", "Turn: the surprise or the problem", "Point: what it shows", "Link back: why you’re telling it"]
  },
  recall: [
    { q: "Day 5: Give two phrases that mark a turning point in a story.", a: "“It dawned on me that…”, “To my surprise…”, “That was the turning point.”" },
    { q: "Day 33: What is a thread in conversation?", a: "A topic, detail or feeling in someone’s words that you can pick up and follow." },
    { q: "Day 23: Which tense sets the scene in a story — and which tells the events?", a: "The past continuous sets the scene (“I was waiting…”); the past simple tells the events (“…when she walked in”)." }
  ],
  reflect: "What is your best anecdote? Is the point clear — and could you tell it in 45 seconds?",
  deep: {
    title: "Read: a tale from the One Thousand and One Nights",
    body: "Read one of the tales — for example “The Fisherman and the Jinni”, in which stories are nested inside stories. Notice exactly where each one stops.",
    prompt: "Write 150 words: what can an ancient storyteller teach you about holding attention in a meeting?"
  }
};

TAW.lessons[38] = {
  day: 38, title: "Humour and lightness", kicker: "Conversation · Humour",
  cats: ["conversation", "culture"], skills: ["conversation", "english", "culture"], difficulty: "Intermediate", minutes: 30,
  why: "Humour in a second language is a sign of real fluency — and of confidence. You don’t need to tell jokes. The most international forms of humour are quiet ones: understatement, self-deprecation and observation.",
  learn: {
    body: [
      "<strong>Understatement</strong> makes something big sound small, and English — British English especially — loves it: a three-hour delay is “not ideal”; a disastrous presentation was “not my finest moment”. The gap between the words and the reality is the joke.",
      "<strong>Self-deprecation</strong> means gently making fun of yourself: “My sense of direction is legendary — for all the wrong reasons.” It signals confidence (you are secure enough to laugh at yourself) and puts others at ease. Keep it light: constant self-criticism stops being funny and starts to sound insecure.",
      "<strong>Observation</strong> notices the absurd in everyday life — the “reply all” disaster, the meeting that could have been an email. Nora Ephron built a career on it, following her mother’s advice that “everything is copy”: even your small disasters are material.",
      "In a second language, avoid puns and jokes that depend on culture you don’t share — and never joke about people’s identity. A <strong>wry</strong> comment, delivered <strong>deadpan</strong> (with a straight face), is safer and more elegant than a joke with a set-up and a punchline."
    ],
    phrases: [
      { en: "It wasn’t my finest moment.", tone: "Self-deprecating", note: "The classic way to admit a mistake lightly." },
      { en: "Let’s just say…", tone: "Wry", note: "Implies more than you say — the listener fills in the rest." },
      { en: "Things didn’t go entirely to plan.", tone: "Understated", note: "A disaster, described politely." },
      { en: "Well, that could have gone better.", tone: "Deadpan", note: "Said after something has clearly gone wrong." },
      { en: "I’m a work in progress.", tone: "Light, humble", note: "A gentle way to admit a weakness." }
    ],
    tip: "Understate the drama. Let the listener find the joke."
  },
  vocab: [
    V("wry", "ry (rhymes with “dry”)", "adjective", "Showing dry, slightly mocking humour, often about something difficult.", "A wry smile, a wry comment, a wry sense of humour — intelligent and understated.", ["dry", "ironic", "sardonic"], "“Dry” humour is delivered without visible emotion. “Ironic” says the opposite of what’s meant. “Sardonic” is more bitter and mocking. “Wry” is gently amused, often about life’s difficulties.", "She gave a wry smile when the printer jammed for the third time.", "— How’s the new system?\n— (wry smile) Let’s just say we’re getting to know each other.", "Write a wry comment about a small frustration at work."),
    V("self-deprecating", "self-DEP-ri-kay-ting", "adjective", "Modestly making fun of yourself or your abilities.", "Charming in small doses; it shows confidence. Too much can sound insecure.", ["modest", "self-mocking", "humble"], "“Modest” means not boasting. “Humble” is about attitude. “Self-mocking” is close but can be harsher. “Self-deprecating” is humour aimed lightly at yourself.", "Her self-deprecating humour made the whole team relax.", "— You’re great at presentations!\n— Thanks — you should have seen my first one. I spoke to the slides for twenty minutes.", "Write a self-deprecating line about one of your weaknesses."),
    V("understatement", "UN-der-stayt-munt", "noun", "Describing something as smaller, less important or less serious than it really is.", "A hallmark of British humour: “It’s a bit chilly” during a snowstorm.", ["euphemism", "litotes", "modesty"], "A “euphemism” replaces an unpleasant word with a softer one. “Litotes” is the technical term for phrases like “not bad” meaning good. “Modesty” is a personal quality. An “understatement” deliberately makes something smaller for effect.", "Calling the merger “a bit complicated” was the understatement of the year.", "— How was the flight?\n— Fourteen hours, two crying babies, no food. Not ideal.\n— That’s an understatement!", "Describe a small disaster with an understatement."),
    V("deadpan", "DED-pan", "adjective / adverb", "Deliberately showing no emotion when saying something funny.", "A deadpan delivery makes a joke subtler — the listener has to notice it.", ["straight-faced", "dry", "poker-faced"], "“Straight-faced” is literal: no smile. “Poker-faced” suggests hiding your feelings. “Dry” describes the humour. “Deadpan” describes the delivery — a serious face, funny words.", "“I love Mondays,” he said, completely deadpan.", "— Was she joking?\n— I think so. Her humour is very deadpan.", "Write a deadpan line someone might say on a rainy Monday."),
    V("tongue-in-cheek", "tung-in-CHEEK", "adjective", "Said or done as a joke, although it appears serious.", "It signals irony: a tongue-in-cheek remark, a tongue-in-cheek award.", ["ironic", "facetious", "playful"], "“Ironic” says the opposite of what’s meant. “Facetious” can be inappropriate or annoying. “Playful” is lighter. “Tongue-in-cheek” means not to be taken literally.", "His tongue-in-cheek “Employee of the Year” award went to the coffee machine.", "— Did he really mean we should cancel Christmas?\n— No, it was tongue-in-cheek!", "Write a tongue-in-cheek title for your team’s week.")
  ],
  culture: "ephron",
  cultureNote: "Ephron’s humour worked because it was specific and true. You don’t need to be a comedian: a precise, honest detail, told lightly, is often funnier than a joke.",
  sayBetter: {
    basic: "My presentation was very bad. I was very nervous and everything went wrong.",
    levels: [
      ["Level 1", "My presentation didn’t go very well.", "Calmer, but flat."],
      ["Level 2", "My presentation didn’t go entirely to plan.", "Understatement adds lightness."],
      ["Level 3", "Let’s just say my presentation didn’t go entirely to plan — the projector died on slide two.", "A specific detail makes it funny."],
      ["Level 4", "Let’s just say it wasn’t my finest moment. The projector died on slide two, so I presented our “data-driven strategy” by drawing graphs in the air with my hands. On the bright side, people say it was the most memorable presentation of the quarter.", "Understatement, a vivid detail, self-deprecation — and an upbeat ending."]
    ],
    prompt: "Describe one of your small disasters at Level 4."
  },
  exercise: {
    title: "Make it lighter",
    instructions: "Rewrite each sentence with understatement or gentle self-deprecation.",
    items: [
      { q: "“The meeting was terrible and lasted three hours.”", a: "“The meeting was… thorough. Three hours thorough.”" },
      { q: "“I got completely lost on the way to the client.”", a: "“My sense of direction is legendary — for all the wrong reasons. I arrived via two other neighbourhoods.”" },
      { q: "“My cooking is awful.”", a: "“Let’s just say my cooking is an acquired taste. Mostly unacquired.”" },
      { q: "“The new software is very difficult to use.”", a: "“The new software and I are still getting to know each other. It’s winning.”" }
    ]
  },
  think: {
    q: "Does humour translate across languages and cultures?",
    angles: ["What kind of humour is typical where you come from?", "Have you ever made a joke that didn’t land — why?", "When is humour inappropriate at work?"]
  },
  express: { prompt: "Write a short email (5–6 sentences) to your team about a small problem — a broken coffee machine, a delayed delivery — in a light, wry tone that still gets the message across." },
  speak: {
    prompt: "Tell a short story about a small disaster in your life — with understatement.", seconds: 60,
    structure: ["An understated hook (“It wasn’t my finest moment…”)", "The scene, briefly", "The disaster — with one vivid detail", "Your reaction, self-deprecating", "A light ending or a lesson"]
  },
  recall: [
    { q: "Day 37: What are the four parts of a good anecdote?", a: "Hook, scene, turn and point." },
    { q: "Day 31: Give a softer alternative to “Why did you…?”", a: "“What drew you to…?”, “What made you decide…?”, “How did you end up…?”" },
    { q: "Day 24: Complete naturally: “Had I known…”", a: "“Had I known it would rain, I would have brought an umbrella.” (= If I had known…)" }
  ],
  reflect: "When did you last laugh at yourself in English? What made it possible?",
  deep: {
    title: "Read: Nora Ephron, I Feel Bad About My Neck (2006)",
    body: "Short, funny, honest essays. Read one — the title essay is a good start — and notice how she uses specific, slightly embarrassing details.",
    prompt: "Write 150 words about a small, everyday frustration in Ephron’s style: specific, honest and wry."
  }
};
})();
