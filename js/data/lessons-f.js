/* Days 39–46, fully written (Month 2 — Become Interesting). Day 42 is the weekly review. */
(function () {
const V = TAW.V;

TAW.lessons[39] = {
  day: 39, title: "Observation: noticing details", kicker: "Conversation · Observation",
  cats: ["conversation", "society"], skills: ["conversation", "thinking"], difficulty: "Intermediate", minutes: 30,
  why: "Interesting people notice. They see the detail most people walk past — and draw an idea from it. Observation is what turns “I went to Lisbon” into a conversation worth having.",
  learn: {
    body: [
      "Observation has two steps: <strong>notice</strong> something specific, then <strong>interpret</strong> it. “The café had no Wi-Fi password on the wall” is a detail. “It’s telling that the café has no Wi-Fi — they want people to talk, not work” is an observation. The second step is what makes you interesting.",
      "Jane Jacobs, in <em>The Death and Life of Great American Cities</em> (1961), started a revolution in urban planning through observation. Watching her own street in Greenwich Village, she described the “sidewalk ballet” of shopkeepers, children and neighbours, and argued that “eyes upon the street” make cities safer. She was not a trained planner; she was a brilliant noticer.",
      "Language for noticing: “What struck me was…”, “I couldn’t help noticing…”, “It’s <strong>telling</strong> that…”, “There was something <strong>peculiar</strong> about…”. These phrases signal that what follows is your own observation, not a fact from the news — which makes it more personal and more interesting.",
      "Train it like a muscle. Each day, notice one thing most people would miss — in a meeting, a shop, a street — and ask: <em>what might this mean?</em> In business the same habit has a name: <strong>customer insight</strong>, noticing what people do, not just what they say."
    ],
    phrases: [
      { en: "What struck me was…", tone: "Reflective", note: "Introduces a personal observation." },
      { en: "It’s telling that…", tone: "Insightful", note: "Draws a conclusion from a small detail." },
      { en: "I couldn’t help noticing…", tone: "Polite, observant", note: "Softens an observation — especially about people." },
      { en: "Have you noticed how…?", tone: "Inviting", note: "Turns your observation into a shared conversation." },
      { en: "It says a lot about… that…", tone: "Interpretive", note: "Connects a detail to a bigger idea." }
    ],
    tip: "Notice first. Then ask: what might this mean?"
  },
  vocab: [
    V("striking", "STRY-king", "adjective", "Very noticeable or unusual, in a way that attracts attention.", "Neutral to positive: a striking resemblance, a striking contrast, strikingly beautiful.", ["remarkable", "noticeable", "eye-catching"], "“Noticeable” just means you can see it. “Eye-catching” is visual and often commercial. “Remarkable” means worth commenting on. “Striking” means it hits you immediately.", "What’s striking about the new office is how quiet it is.", "— Did you see the results?\n— Yes — the striking thing is that returns fell in every region.", "Describe something striking you saw this week."),
    V("peculiar", "pi-KYOO-lee-er", "adjective", "Strange or unusual, sometimes slightly unsettling; also, belonging only to one person or place (“peculiar to”).", "Two uses: strange (a peculiar smell) and specific (a custom peculiar to Spain).", ["odd", "strange", "curious"], "“Odd” and “strange” are everyday words. “Curious” suggests interesting strangeness. “Peculiar” is slightly more formal and can suggest something unsettling.", "There was something peculiar about the meeting — nobody mentioned the budget.", "— He always eats lunch standing up.\n— That’s a bit peculiar.\n— He says it keeps him awake.", "Use “peculiar to” to describe a custom from your country."),
    V("glimpse", "glimps", "noun / verb", "A brief, partial look at something; to see something briefly.", "Often metaphorical: a glimpse into someone’s life, a glimpse of the future.", ["glance", "peek", "sight"], "A “glance” is a quick look you choose to take. A “peek” is a secret or playful look. A “sight” is what you see. A “glimpse” is a brief, often accidental and incomplete view.", "The store visit gave us a glimpse into how our customers really shop.", "— What did you learn from the visit?\n— Only a glimpse — but it was revealing.", "Write about something that gave you a glimpse into another culture."),
    V("scrutinise", "SKROO-ti-nyz", "verb", "To examine something very carefully, looking for details or problems. Noun: scrutiny.", "Formal; often used for documents, data and public figures (“under scrutiny”). American spelling: scrutinize.", ["examine", "inspect", "analyse"], "“Examine” is neutral. “Inspect” is official checking for problems. “Analyse” breaks something into parts. “Scrutinise” is very close, detailed and often critical examination.", "The board scrutinised every assumption in the plan.", "— Is the contract OK?\n— Legal is still scrutinising the small print.", "Write a sentence about something you scrutinise carefully at work."),
    V("perceptive", "per-SEP-tiv", "adjective", "Quick to notice and understand things, especially things that others miss.", "A strong compliment: a perceptive comment, a perceptive reader.", ["observant", "insightful", "sharp"], "“Observant” means noticing with your eyes. “Insightful” means understanding deeply. “Sharp” is informal and quick. “Perceptive” combines noticing and understanding.", "That’s a perceptive point — I hadn’t thought about the delivery drivers at all.", "— She noticed that customers abandon the cart when shipping costs appear.\n— That’s very perceptive.", "Describe the most perceptive person you have worked with.")
  ],
  culture: "jacobs",
  cultureNote: "Jacobs changed how the world thinks about cities by watching her own street closely — and taking what she saw seriously. Observation is not a talent; it is a habit of attention.",
  sayBetter: {
    basic: "The new office is nice but different.",
    levels: [
      ["Level 1", "The new office is nice, but it feels different.", "A feeling, but no detail."],
      ["Level 2", "The new office is beautiful, but it’s very quiet.", "One concrete detail."],
      ["Level 3", "What struck me about the new office is how quiet it is — people book rooms even for quick calls.", "A detail plus evidence."],
      ["Level 4", "What struck me about the new office is how quiet it is: people book rooms even for two-minute calls. It’s telling, I think. We designed it for focus — but we may have designed out the conversations that used to happen by accident.", "A specific observation, an interpretation and a bigger idea."]
    ],
    prompt: "Describe something in your workplace at Level 4: notice, interpret, connect."
  },
  exercise: {
    title: "From detail to idea",
    instructions: "For each detail, write an interpretation using “It’s telling that…” or “What struck me was…”.",
    items: [
      { q: "In a shop, every product has a QR code, but nobody scans them.", a: "It’s telling that nobody scans them — people seem to want to touch and ask, not read on a phone." },
      { q: "In a meeting, the most senior person spoke last.", a: "What struck me was that the most senior person spoke last — it gave everyone else permission to speak honestly." },
      { q: "On your street, three new coffee shops opened this year.", a: "It’s telling that three coffee shops opened this year — the neighbourhood is changing, and probably getting more expensive." },
      { q: "Customers call support most often on Monday mornings.", a: "What struck me is the Monday peak: people discover problems over the weekend, but wait for the working week to call." }
    ]
  },
  think: {
    q: "What does your street tell you about the people who live there?",
    angles: ["What do the shops, the cars and the windows say?", "What has changed in the last five years?", "What would a visitor notice that you no longer see?"]
  },
  express: { prompt: "Write a short piece (150 words) about a place you go to every week, through three details most people would miss — and what they reveal." },
  speak: {
    prompt: "Describe something you noticed today that most people wouldn’t have — and what it might mean.", seconds: 60,
    structure: ["The detail: what you noticed", "Where and when", "Your interpretation: “It’s telling that…”", "A bigger idea it connects to", "A question it leaves you with"]
  },
  recall: [
    { q: "Day 38: What is understatement?", a: "Describing something as smaller or less serious than it is — often for humour: “Not ideal.”" },
    { q: "Day 36: What does “build on” mean in a meeting?", a: "To use someone’s contribution as a base and add to it — agreeing while moving forward." },
    { q: "Day 19: Give two adjectives that describe a place precisely.", a: "For example: bustling, understated, atmospheric, run-down, tucked away." }
  ],
  reflect: "What did you notice today that you would have missed a month ago?",
  deep: {
    title: "Read: Jane Jacobs, The Death and Life of Great American Cities (1961)",
    body: "Read the early chapters on the uses of sidewalks, with the famous “sidewalk ballet” of Hudson Street. Notice how much of her argument comes from simply watching.",
    prompt: "Spend ten minutes observing a street, a café or an office. Write 150 words in Jacobs’s spirit: what you saw — and what it means."
  }
};

TAW.lessons[40] = {
  day: 40, title: "Interrupting and changing the subject", kicker: "Conversation · Steering",
  cats: ["conversation"], skills: ["conversation", "english"], difficulty: "Intermediate", minutes: 30,
  why: "Interrupting politely and steering a conversation are advanced social skills — and in a second language they’re exactly where many people go quiet. With the right phrases and timing, you can join any conversation and guide it where it needs to go.",
  learn: {
    body: [
      "Not every interruption is rude. The linguist Deborah Tannen showed that some speakers treat overlapping speech as enthusiasm — a <strong>“high-involvement”</strong> style — while others hear it as rudeness and wait for a clear pause. Neither style is wrong, but misunderstandings happen when the two meet.",
      "A polite interruption has three parts: a <strong>signal</strong> (“Sorry to jump in…”), a <strong>link</strong> or reason (“…because it connects to what you said about costs…”) and <strong>brevity</strong> — make your point, then hand the floor back. Timing helps: come in at the end of a sentence, not in the middle of a word.",
      "Changing the subject needs a bridge. Gentle: “On a slightly different note…”. Linked: “That reminds me…”. Firm, for meetings: “I’m conscious of time — can we move to the next item?”. To come back later: “Can we park that and return to it?”",
      "Being interrupted is the other side. Hold the floor warmly: “I’ll just finish this point…”, “Let me finish my thought — then I’d love to hear yours.” On video calls, where overlapping is harder, raise a hand or use the person’s name: “Ana, can I come in here?”"
    ],
    phrases: [
      { en: "Sorry to jump in, but…", tone: "Polite, informal", note: "The most natural interruption in English." },
      { en: "Can I just add something here?", tone: "Collaborative", note: "Asks permission while signalling you’ll be brief." },
      { en: "On a slightly different note…", tone: "Gentle", note: "Changes the topic without breaking the mood." },
      { en: "Can we park that for now and come back to it?", tone: "Professional", note: "Pauses a topic without dismissing it." },
      { en: "Let me just finish this thought — then I’d love to hear yours.", tone: "Warm, firm", note: "Holds the floor without sounding defensive." }
    ],
    tip: "Signal, link, be brief — and give the floor back."
  },
  vocab: [
    V("interject", "in-ter-JEKT", "verb", "To say something suddenly while someone else is speaking.", "Slightly formal; used in narration (“‘But wait,’ she interjected”) and in meetings.", ["interrupt", "cut in", "chip in"], "“Interrupt” is general and can sound rude. “Cut in” is informal and abrupt. “Chip in” is friendly and brief. “Interject” suggests a quick, purposeful comment.", "May I interject? The figure you mentioned is from last year.", "— …so the launch will be in March—\n— If I could interject — March is when the warehouse moves.", "Write a polite interjection for a meeting."),
    V("steer", "steer", "verb", "To guide a conversation, process or person in a particular direction.", "From driving a car or a boat. “Steer the conversation towards…”; “steer clear of” means avoid.", ["guide", "direct", "redirect"], "“Guide” is gentle and helpful. “Direct” is more controlling. “Redirect” means change direction. “Steer” suggests skilful, often subtle control.", "She steered the conversation away from salaries and back to the project.", "— How did you avoid the topic of the merger?\n— I steered us towards next year’s plans.", "Write how you would steer a conversation away from gossip."),
    V("chime in", "chym IN", "phrasal verb", "To join a conversation, especially to add an opinion.", "Friendly and informal; often an invitation: “Feel free to chime in.”", ["join in", "pipe up", "contribute"], "“Join in” is general. “Pipe up” suggests speaking suddenly, often after a silence. “Contribute” is formal. “Chime in” is light and collaborative.", "Feel free to chime in if I miss anything.", "— Does anyone have experience with this supplier?\n— Can I chime in? We used them in Chile.", "Invite a quiet colleague to chime in, in one sentence."),
    V("park", "park", "verb", "(In meetings) to postpone discussing a topic, intending to return to it.", "Corporate English: “Let’s park that.” Some teams keep a “parking lot” list of postponed topics.", ["postpone", "shelve", "table"], "“Postpone” is general. “Shelve” suggests putting aside indefinitely. Careful with “table”: in British English it means bring forward for discussion, in American English it means postpone! “Park” clearly means later — but not forgotten.", "Good point — can we park it and come back to it at the end?", "— What about the budget?\n— Let’s park that until Finance joins us.", "Write a sentence that parks a topic politely."),
    V("sidetrack", "SYD-trak", "verb", "To distract someone from the main subject or purpose.", "Often passive: “We got sidetracked.” Neutral to slightly negative.", ["distract", "divert", "derail"], "“Distract” is general. “Divert” changes direction, often deliberately. “Derail” is stronger — it stops something completely. “Sidetrack” is a temporary distraction.", "We got sidetracked by the parking problem and never discussed the launch.", "— Did you decide on the vendor?\n— No — we got completely sidetracked.", "Describe a meeting that got sidetracked — and how you would bring it back.")
  ],
  culture: "tannen",
  cultureNote: "Tannen’s insight is liberating: if someone overlaps with you, it may be enthusiasm, not disrespect — and if you wait for a perfect silence, you may never speak. Adapt your style to the room.",
  sayBetter: {
    basic: "Wait, wait, I want to say something!",
    levels: [
      ["Level 1", "Sorry, can I say something?", "Polite, but no link."],
      ["Level 2", "Sorry to interrupt — can I add something?", "A signal and a request."],
      ["Level 3", "Sorry to jump in — it’s just that this connects to what Marta said about costs.", "A signal plus a link that justifies the interruption."],
      ["Level 4", "Sorry to jump in, Pablo — this connects to your point about costs. Very briefly: if we move the launch, we also lose the supplier discount. Anyway — please carry on.", "Name, link, brevity — and the floor handed back."]
    ],
    prompt: "Write a Level 4 interruption you could use in your next meeting."
  },
  exercise: {
    title: "Steer it",
    instructions: "Write what you would say in each situation.",
    items: [
      { q: "A colleague is using a wrong figure, and a decision is about to be made.", a: "Sorry to jump in — before we decide, I think that figure is from last year. Can we check?" },
      { q: "A dinner conversation has turned into gossip about someone who isn’t there.", a: "On a slightly different note — has anyone seen the new exhibition at the museum?" },
      { q: "A meeting has spent twenty minutes on a side issue.", a: "I’m conscious of time — can we park this and come back to it at the end?" },
      { q: "Someone keeps talking over you.", a: "Let me just finish this thought — then I’d really like to hear yours." }
    ]
  },
  think: {
    q: "Is interrupting always rude? When is it a sign of engagement?",
    angles: ["How do people interrupt where you come from?", "Have you ever been misread as rude — or as too quiet?", "Who controls the floor in your meetings, and how?"]
  },
  express: { prompt: "Write a short dialogue (8–10 lines) from a meeting in which you interrupt politely, add a point, and then steer the discussion towards a decision." },
  speak: {
    prompt: "Practise: interrupt politely, add a point, then steer the conversation to a new topic — in 60 seconds.", seconds: 60,
    structure: ["Signal: “Sorry to jump in…”", "Link to what was said", "Your point — briefly", "Steer: “On a slightly different note…”", "A question that opens the new topic"]
  },
  recall: [
    { q: "Day 39: What does “It’s telling that…” introduce?", a: "An interpretation of a small detail — what it reveals." },
    { q: "Day 37: What does “But I digress” mean?", a: "“I’ve moved away from the main subject — let me return to it.”" },
    { q: "Day 26: Rewrite with “despite”: “It rained, but we went out.”", a: "Despite the rain, we went out." }
  ],
  reflect: "In your next meeting, notice who interrupts and who never does. Where are you?",
  deep: {
    title: "Read: Deborah Tannen, That’s Not What I Meant! (1986)",
    body: "A readable introduction to conversational style — speed, pauses, directness and interruption — and how it causes misunderstandings between friends, couples and colleagues.",
    prompt: "Write 150 words: what is your conversational style in English — and is it the same in Spanish?"
  }
};

TAW.lessons[41] = {
  day: 41, title: "Giving examples", kicker: "Communication · Examples",
  cats: ["communication"], skills: ["articulation", "thinking"], difficulty: "Foundation", minutes: 30,
  why: "An abstract claim without an example is hard to believe and hard to remember. “Our customers are frustrated” is a statement; “Last week one customer called four times to change a single address” is evidence. Examples are how ideas land.",
  learn: {
    body: [
      "The <strong>ladder of abstraction</strong>, described by the linguist S. I. Hayakawa in <em>Language in Thought and Action</em> (1949), runs from the concrete (“Bessie the cow”) to the abstract (“livestock”, “farm assets”, “wealth”). Good communicators move up and down it: a general claim, a step down to a specific example, then a step back up to the point.",
      "A good example is <strong>specific</strong> (names, numbers, places), <strong>typical</strong> (it really represents the claim, rather than being an exception) and <strong>brief</strong>. “Take music streaming, for instance: it didn’t stop piracy by banning it; it made legal music easier than piracy.”",
      "Use the language of illustration: “For instance…”, “Take… for example.”, “A <strong>case in point</strong> is…”, “To give you a concrete example…”, “Imagine…”. Then climb back to the point: “…which shows that convenience beats prohibition.”",
      "Examples can also mislead. One vivid story can outweigh a thousand data points in people’s minds; psychologists link this to the <strong>availability heuristic</strong> — we judge how common something is by how easily examples come to mind. Be honest: “That’s one case, but the data shows the same pattern” is stronger than an anecdote alone."
    ],
    phrases: [
      { en: "Take… for instance.", tone: "Natural", note: "Introduces a concrete example." },
      { en: "A case in point is…", tone: "Formal, precise", note: "An example that proves your point exactly." },
      { en: "To give you a concrete example…", tone: "Clear", note: "Signals the move from abstract to specific." },
      { en: "Imagine a customer who…", tone: "Vivid", note: "A hypothetical example that makes people picture it." },
      { en: "That’s one case, but the data shows the same pattern.", tone: "Rigorous", note: "Combines a story with evidence." }
    ],
    tip: "Claim, example, point — down the ladder and back up."
  },
  vocab: [
    V("illustrate", "IL-uh-strayt", "verb", "To explain or make something clearer by using examples, stories or pictures.", "“To illustrate…” is an elegant way to introduce an example.", ["demonstrate", "exemplify", "show"], "“Show” is general. “Demonstrate” suggests proving. “Exemplify” is formal — to be a typical example of. “Illustrate” means making something clear through an example.", "To illustrate the problem, she played a recording of a customer call.", "— I don’t see why the process is slow.\n— Let me illustrate: one refund needs six approvals.", "Illustrate a problem at work with one specific example."),
    V("instance", "IN-stuns", "noun", "A particular example or case of something.", "Common in “for instance” and “in this instance” (in this case).", ["example", "case", "occurrence"], "“Example” is the everyday word. A “case” is a situation to be examined. An “occurrence” is an event that happens. An “instance” is a single example of a general pattern.", "There were several instances of late delivery last month.", "— Has this happened before?\n— There was one instance in March, with a different supplier.", "Use “for instance” to support a claim about your city."),
    V("case in point", "kays in POYNT", "phrase", "An example that clearly proves what you are saying.", "Powerful in arguments — but only if the example truly fits.", ["perfect example", "prime example", "good illustration"], "“Perfect example” and “prime example” are common. “Good illustration” is softer. “Case in point” stresses that the example is directly relevant to the argument.", "Small changes can have big effects. A case in point: showing delivery costs earlier cut cart abandonment.", "— Do customers really read reviews?\n— Absolutely. Case in point: our best-rated product sells three times more.", "Make a claim and support it with “A case in point is…”."),
    V("typical", "TIP-i-kul", "adjective", "Having the usual qualities of a particular type; representative.", "Also used to complain mildly: “Typical! The train is late again.”", ["representative", "characteristic", "standard"], "“Representative” means it fairly stands for a group. “Characteristic” means it shows a distinctive feature. “Standard” means normal, expected. “Typical” combines usual and representative.", "A typical customer visits the site three times before buying.", "— Is this order unusual?\n— No, it’s quite typical — a small basket and express delivery.", "Describe a typical day in your job in two sentences."),
    V("concrete", "KON-kreet", "adjective", "Specific and real, not abstract or general.", "“Can you give me a concrete example?” is one of the most useful questions in business.", ["specific", "tangible", "real"], "“Specific” means exact. “Tangible” means you can touch or measure it. “Real” is general. “Concrete” means specific and real, as opposed to theoretical.", "We need concrete steps, not good intentions.", "— We should improve communication.\n— Agreed — but what’s one concrete thing we can do this week?", "Turn a vague goal into a concrete one.")
  ],
  culture: "aesop",
  cultureNote: "Aesop never said “Arrogance leads to failure.” He told the story of a hare who stopped for a nap. Two and a half thousand years later, we still remember the tortoise.",
  sayBetter: {
    basic: "Customers don’t like our website because it is bad.",
    levels: [
      ["Level 1", "Customers find our website difficult to use.", "Clearer, but abstract."],
      ["Level 2", "Customers find our website difficult — for instance, the search often returns nothing.", "One example."],
      ["Level 3", "Customers struggle with our website. Take search: if you type “sneakers” instead of “trainers”, you get zero results.", "A specific, vivid example."],
      ["Level 4", "Our website is losing customers at the search bar. Take one case: type “sneakers” instead of “trainers” and you get zero results — and most people who see zero results leave. Adding synonyms is a small change with a big impact.", "Claim, concrete example, consequence — and back up to the point."]
    ],
    prompt: "Make a claim about your business at Level 4 — with a concrete example and, if you can, a number."
  },
  exercise: {
    title: "Make it concrete",
    instructions: "Add a specific example to each abstract claim.",
    items: [
      { q: "“Technology has changed how we shop.”", a: "Take groceries, for instance: ten years ago I went to the supermarket every week; now my order arrives in thirty minutes." },
      { q: "“Small gestures build trust in a team.”", a: "A case in point: my manager remembers everyone’s birthday — and people tell her about problems early." },
      { q: "“Our process is too complicated.”", a: "To give you a concrete example, a simple refund needs six approvals and takes nine days." },
      { q: "“Travel changes your perspective.”", a: "When I lived in Japan, I realised how loudly I speak on the phone — I had never noticed it at home." }
    ]
  },
  think: {
    q: "Do examples clarify thinking — or can they mislead us?",
    angles: ["When has one vivid story changed your mind more than data?", "How do you choose a representative example?", "Can you think of a famous example that turned out to be an exception?"]
  },
  express: { prompt: "Write a paragraph (120–150 words) making a claim about modern life, supported by two concrete examples — one personal, one from the news or your industry." },
  speak: {
    prompt: "Make a claim about modern life and support it with two concrete examples.", seconds: 90,
    structure: ["The claim", "Example 1 — specific and vivid", "Example 2 — from a different area", "A nuance: where the claim doesn’t hold", "Back up to the point"]
  },
  recall: [
    { q: "Day 40: Give a polite way to interrupt.", a: "“Sorry to jump in…” or “Can I just add something here?”" },
    { q: "Day 12: What is an analogy — and why does it help explain ideas?", a: "A comparison with something familiar; it lets people understand the new through the known." },
    { q: "Day 34: What is the highest level of disagreement in Paul Graham’s hierarchy?", a: "Refuting the central point — not a detail, and never the person." }
  ],
  reflect: "In your last presentation or email, did you give concrete examples — or only conclusions?",
  deep: {
    title: "Read: a handful of Aesop’s fables",
    body: "Read five short fables — “The Fox and the Grapes”, “The Tortoise and the Hare”, “The Boy Who Cried Wolf”, “The North Wind and the Sun” and one you don’t know. Notice how each makes an abstract idea concrete.",
    prompt: "Write a modern “fable” (120 words) about your industry — with the lesson in the last line."
  }
};

TAW.lessons[43] = {
  day: 43, title: "Making comparisons", kicker: "Communication · Comparison",
  cats: ["communication", "history"], skills: ["articulation", "english"], difficulty: "Foundation", minutes: 30,
  why: "Comparison is one of the fastest ways to make a point clear: we understand things by placing them next to other things. Precise comparisons — of similarity, difference and degree — make your thinking sound sharp.",
  learn: {
    body: [
      "<strong>Difference</strong>: “Whereas Madrid is loud and late, Lisbon feels slower and quieter.” “Unlike our competitors, we deliver on Sundays.” “By comparison, last year’s campaign cost half as much.” <strong>Similarity</strong>: “Both cities…”, “Like Rome, Paris…”, “They’re similar in that…”.",
      "<strong>Degree</strong> makes comparisons precise: “slightly / marginally better”, “considerably / significantly / far more expensive”, “nowhere near as fast”, “twice as large”, “not quite as good”. Compare “Our app is better” with “Our app is significantly faster, though slightly harder to use.”",
      "Plutarch, writing around 100 CE, paired the lives of famous Greeks and Romans — Alexander with Caesar, Demosthenes with Cicero — and often ended with a short comparison. He was interested less in events than in character: “It is not histories I am writing, but lives.” Shakespeare read him in Thomas North’s 1579 translation.",
      "Be careful with comparisons that hurt: comparing colleagues, children or cultures can sound like ranking them. And beware <strong>false equivalence</strong> — treating two things as comparable when they differ hugely in scale or nature."
    ],
    phrases: [
      { en: "Whereas X…, Y…", tone: "Analytical", note: "Contrasts two things in one sentence." },
      { en: "By comparison,…", tone: "Measured", note: "Introduces the second half of a comparison." },
      { en: "They’re similar in that…, but…", tone: "Balanced", note: "Similarity first, then the difference." },
      { en: "It’s nowhere near as… as…", tone: "Emphatic", note: "A big difference, stated naturally." },
      { en: "It’s a bit like comparing apples and oranges.", tone: "Idiomatic", note: "Says two things can’t fairly be compared." }
    ],
    tip: "Name the similarity, sharpen the difference, measure the degree."
  },
  vocab: [
    V("analogous", "uh-NAL-uh-gus", "adjective", "Similar in some ways, so that a useful comparison can be made.", "Formal; useful in strategy and science: “The situation is analogous to…”", ["similar", "comparable", "parallel"], "“Similar” is general. “Comparable” means it can be compared, often in quality or size. “Parallel” suggests developing in the same way. “Analogous” means similar in structure, so that one helps explain the other.", "The rise of e-commerce is analogous to the arrival of supermarkets in the 1950s.", "— Is this like what happened to newspapers?\n— It’s analogous — the business model breaks before the product does.", "Write a sentence comparing two situations with “analogous to”."),
    V("comparable", "KOM-puh-ruh-bul", "adjective", "Similar enough to be compared; of a similar size, quality or level.", "The stress is usually on the first syllable: COM-pa-ra-ble (com-PA-ra-ble is also heard).", ["equivalent", "similar", "on a par"], "“Equivalent” means equal in value. “On a par with” means at the same level. “Similar” is general. “Comparable” means close enough that comparing them is fair.", "Salaries here are comparable to those in Madrid.", "— Is the new supplier cheaper?\n— Prices are comparable, but delivery is faster.", "Compare two products you know using “comparable”."),
    V("by comparison", "by kum-PAR-i-sun", "phrase", "When compared with something else.", "Often at the start of a sentence, to introduce the contrast.", ["in comparison", "in contrast", "relatively"], "“In comparison” is almost identical. “In contrast” emphasises difference. “Relatively” is an adverb (relatively cheap). “By comparison” introduces the second element of a comparison.", "Last year we had 3% returns. By comparison, this year’s 5% is worrying.", "— Is the new office far?\n— By comparison with the old one, it’s ten minutes closer.", "Write two sentences: one fact, then “By comparison,…”."),
    V("marginally", "MAR-ji-nuh-lee", "adverb", "By a very small amount.", "Precise and professional: marginally better, marginally higher.", ["slightly", "fractionally", "a little"], "“Slightly” and “a little” are everyday. “Fractionally” is very small. “Marginally” is precise and common with data.", "Conversion improved marginally — from 2.1% to 2.2%.", "— Is the new version better?\n— Marginally. Not enough to justify the cost.", "Describe a small improvement with “marginally”."),
    V("false equivalence", "fawls i-KWIV-uh-luns", "noun", "A misleading comparison that treats two things as equal when they are not.", "A term from critical thinking — useful for calling out weak arguments, politely.", ["false comparison", "apples and oranges", "double standard"], "“Apples and oranges” is informal: things too different to compare. A “double standard” applies different rules to different people. A “false equivalence” wrongly presents two things as equally serious or valid.", "Comparing a typo to a data breach is a false equivalence.", "— Both teams made mistakes.\n— True — but that’s a false equivalence. Only one of them lost a client.", "Describe a false equivalence you have heard in an argument.")
  ],
  culture: "plutarch",
  cultureNote: "Plutarch compared people to understand character, not to rank them. That is the spirit of a good comparison at work: to see more clearly, not to declare a winner.",
  sayBetter: {
    basic: "My old job and my new job are different. The new one is better.",
    levels: [
      ["Level 1", "My new job is better than my old one.", "A comparison — but vague."],
      ["Level 2", "My new job is more interesting than my old one, but more stressful.", "Two dimensions."],
      ["Level 3", "Whereas my old job was predictable, my new one is varied — every week brings a different problem.", "A precise contrast with detail."],
      ["Level 4", "They’re similar in that both are about operations, but they feel completely different. Whereas my old job was about keeping things stable, this one is about changing them — which is considerably more stressful, and far more interesting.", "Similarity, a sharp difference, degree words — and a judgement."]
    ],
    prompt: "Compare two jobs, cities or periods of your life at Level 4."
  },
  exercise: {
    title: "Measure the degree",
    instructions: "Rewrite each comparison with a precise degree word or structure.",
    items: [
      { q: "“The new system is better.”", a: "The new system is significantly faster, though slightly harder to learn." },
      { q: "“Lisbon is cheaper than Paris.”", a: "Lisbon is considerably cheaper than Paris — rents are roughly half." },
      { q: "“Our competitor delivers faster.”", a: "Our competitor delivers twice as fast as we do in big cities, but nowhere near as fast in rural areas." },
      { q: "“The two candidates are the same.”", a: "The two candidates are comparable in experience, whereas their leadership styles are very different." }
    ]
  },
  think: {
    q: "Is comparing yourself to others ever useful?",
    angles: ["When does comparison motivate you — and when does it hurt?", "Do you compare yourself to others, or to your past self?", "Is social media a comparison machine?"]
  },
  express: { prompt: "Write a paragraph (120–150 words) comparing your generation’s attitude to work with your parents’, using at least four comparison structures." },
  speak: {
    prompt: "Compare two cities, jobs or generations — their similarities and differences.", seconds: 90,
    structure: ["What you’re comparing, and why", "One real similarity", "The sharpest difference — with “whereas”", "A degree word: slightly, considerably, nowhere near", "Your conclusion"]
  },
  recall: [
    { q: "Day 41: What does “a case in point” mean?", a: "An example that clearly proves what you are saying." },
    { q: "Day 26: What does “whereas” do?", a: "It contrasts two facts or ideas in one sentence." },
    { q: "Day 13: What does “subjective” mean?", a: "Based on personal feelings or opinions rather than facts." }
  ],
  reflect: "Who do you compare yourself to most often? Is it a fair comparison?",
  deep: {
    title: "Read: Plutarch, Life of Caesar",
    body: "Read a few pages of Plutarch’s life of Julius Caesar (several translations are free online), then the opening scenes of Shakespeare’s Julius Caesar.",
    prompt: "Write 150 words comparing Plutarch’s Caesar with Shakespeare’s, using at least three comparison structures."
  }
};

TAW.lessons[44] = {
  day: 44, title: "Expressing uncertainty", kicker: "Communication · Uncertainty",
  cats: ["communication", "thinking"], skills: ["articulation", "thinking"], difficulty: "Intermediate", minutes: 30,
  why: "Saying “I don’t know” — elegantly — is a mark of intelligence, not weakness. The skill is calibration: showing exactly how sure you are, so that people know how much weight to give your words.",
  learn: {
    body: [
      "English has a rich scale of certainty. Near-certain: “I’m confident that…”, “It’s almost certainly…”. Probable: “It’s likely that…”, “I’d expect…”, “<strong>Presumably</strong>…”. Possible: “It might / could…”, “It’s possible that…”. Unknown: “I genuinely don’t know”, “It’s too early to say.”",
      "This is <strong>calibration</strong>. The political scientist Philip Tetlock studied thousands of expert forecasts and found that many experts did little better than chance — but a group he later called “superforecasters” did much better. Among their habits: thinking in probabilities, updating their views with new evidence, and saying how confident they were.",
      "Hedging is not weakness when it is precise. “I could be wrong, but my guess is 60–40 in favour” sounds more credible than both “Definitely!” and “I have no idea.” What sounds weak is vague hedging: “Maybe, I don’t know, it depends, perhaps…”.",
      "The Polish poet Wisława Szymborska, in her 1996 Nobel lecture, praised the small phrase “I don’t know”: small, she said, but flying on mighty wings. Curiosity — and good decisions — begin exactly there."
    ],
    phrases: [
      { en: "I could be wrong, but…", tone: "Humble, confident", note: "Offers a view while admitting uncertainty." },
      { en: "As far as I know,…", tone: "Careful", note: "Limits your claim to your knowledge." },
      { en: "I’m genuinely not sure, but my best guess is…", tone: "Honest", note: "Uncertainty plus a commitment." },
      { en: "It’s too early to say.", tone: "Measured", note: "Very useful when data is still coming in." },
      { en: "I’d put it at about 70%.", tone: "Precise", note: "Calibrated confidence — the way forecasters speak." }
    ],
    tip: "Say how sure you are. Precision about uncertainty is a form of confidence."
  },
  vocab: [
    V("tentative", "TEN-tuh-tiv", "adjective", "Not certain or fixed; done without confidence, or provisionally.", "Two uses: provisional (a tentative date) and hesitant (a tentative smile).", ["provisional", "hesitant", "preliminary"], "“Provisional” means for now and may change — often official. “Preliminary” means coming before the main part. “Hesitant” describes a person’s manner. “Tentative” covers both the provisional plan and the uncertain manner.", "We’ve set a tentative date of 15 March, subject to the board.", "— Is the launch confirmed?\n— Tentatively — we’re waiting for the supplier.", "Write a sentence about a tentative plan."),
    V("presumably", "pri-ZYOO-muh-blee", "adverb", "Used to say what you think is very likely, based on what you know.", "Polite and intelligent: it makes your assumption visible.", ["probably", "supposedly", "I assume"], "“Probably” is neutral. “Supposedly” suggests doubt about what others claim. “I assume” is explicit. “Presumably” means it is reasonable to suppose.", "Presumably the delay is because of the holiday weekend.", "— Why hasn’t she replied?\n— Presumably she’s still travelling.", "Use “presumably” to explain something you’re not sure about."),
    V("arguably", "AR-gyoo-uh-blee", "adverb", "Used when you believe something can be supported by argument, although not everyone would agree.", "Elegant for bold claims: “arguably the best…” — confident, but open to debate.", ["possibly", "probably", "debatably"], "“Possibly” is weaker. “Probably” is about likelihood. “Debatably” is rare. “Arguably” signals: I can defend this, but I know it’s contestable.", "She is arguably the most influential designer of her generation.", "— Is this our best product?\n— Arguably — it’s certainly the most profitable.", "Make a bold claim using “arguably”."),
    V("as far as I know", "az FAR az I NOH", "phrase", "According to my knowledge, which may be incomplete.", "A simple, honest limit on your claim. More formal: “as far as I’m aware”.", ["to my knowledge", "as far as I’m aware", "I believe"], "“To my knowledge” is formal. “As far as I’m aware” is professional. “I believe” is softer. “As far as I know” is natural and very common.", "As far as I know, the contract hasn’t been signed yet.", "— Is the meeting still on?\n— As far as I know, yes.", "Answer a question you’re not completely sure about with “As far as I know…”."),
    V("calibrate", "KAL-i-brayt", "verb", "To adjust something carefully so that it is accurate; (of judgement) to match your confidence to the evidence.", "From measuring instruments; used metaphorically for judgement and tone: “calibrate your message to the audience”.", ["adjust", "fine-tune", "tune"], "“Adjust” is general. “Fine-tune” means make small improvements. “Tune” is for instruments and engines. “Calibrate” means adjust against a standard so that it is accurate.", "Good leaders calibrate their confidence — they don’t sound sure about everything.", "— How direct should I be with the board?\n— Calibrate it: direct on facts, careful on forecasts.", "Write about how you calibrate your tone with different people.")
  ],
  culture: "szymborska",
  cultureNote: "Szymborska’s “I don’t know” is not a confession of ignorance — it is where curiosity starts. In meetings, the person who says it calmly is often the person people trust most.",
  sayBetter: {
    basic: "I don’t know if the project will work.",
    levels: [
      ["Level 1", "I’m not sure the project will work.", "Honest, but vague."],
      ["Level 2", "It’s too early to say whether the project will work.", "Measured — it frames the uncertainty."],
      ["Level 3", "I could be wrong, but I think it’s more likely to work than not — the early data is encouraging.", "A view, a hedge and a reason."],
      ["Level 4", "Honestly, it’s too early to be certain. My best guess is about 60–40 in favour: the pilot data is encouraging, but it only covers six weeks. I’ll be much more confident after peak season — and I’ll tell you if the numbers change my view.", "Calibrated, evidence-based, and committed to updating."]
    ],
    prompt: "Answer “Will AI replace your job?” at Level 4 — calibrated, not vague."
  },
  exercise: {
    title: "Calibrate it",
    instructions: "Rewrite each statement at the level of certainty given.",
    items: [
      { q: "“The supplier will deliver on time.” → probable", a: "The supplier will probably deliver on time — they have for the last six months." },
      { q: "“Sales will grow next year.” → uncertain, with a guess", a: "I’m genuinely not sure, but my best guess is modest growth — maybe 3 to 5%." },
      { q: "“The client is unhappy.” → an assumption", a: "Presumably the client is unhappy — they haven’t replied for two weeks." },
      { q: "“This is the best restaurant in the city.” → bold but debatable", a: "It’s arguably the best restaurant in the city — though some would say it’s overpriced." }
    ]
  },
  think: {
    q: "Why do confident people often sound more convincing than accurate people?",
    angles: ["Who do you trust more: the certain expert or the calibrated one?", "When did someone’s confidence mislead you?", "How do you sound when you’re unsure in English — and in Spanish?"]
  },
  express: { prompt: "Write a short forecast (120–150 words) about your industry in five years: what you’re confident about, what is likely, and what is genuinely uncertain." },
  speak: {
    prompt: "Talk about something you’re unsure about — for example, the future of work — expressing uncertainty clearly but confidently.", seconds: 90,
    structure: ["What you’re confident about", "What is likely — and why", "What is genuinely uncertain", "Your best guess, with a number", "What would change your mind"]
  },
  recall: [
    { q: "Day 43: Give two degree words for comparisons.", a: "Slightly, marginally, considerably, significantly, far, nowhere near as…" },
    { q: "Day 17: What does “on balance” mean?", a: "After considering all the arguments — used before a conclusion." },
    { q: "Day 10: How can you protect yourself from confirmation bias?", a: "Look actively for evidence that you might be wrong — and steelman the other side." }
  ],
  reflect: "When did you last say “I don’t know” at work? How did it feel — and how did people react?",
  deep: {
    title: "Read: Szymborska’s Nobel lecture, “The Poet and the World” (1996)",
    body: "It is short and freely available on the Nobel Prize website. Notice how she builds a whole argument around the phrase “I don’t know”.",
    prompt: "Write 150 words: what don’t you know about your own field — and why might that be valuable?"
  }
};

TAW.lessons[45] = {
  day: 45, title: "Expressing nuance", kicker: "Communication · Nuance",
  cats: ["communication", "literature"], skills: ["articulation", "thinking"], difficulty: "Intermediate", minutes: 35,
  why: "Nuance is the space between yes and no. It is what makes an opinion sound intelligent rather than loud — but only if you still arrive somewhere. The goal is complexity with a conclusion.",
  learn: {
    body: [
      "Nuance has four tools. <strong>Qualify</strong>: “to some extent”, “up to a point”, “in most cases”. <strong>Condition</strong>: “It depends on…”, “provided that…”, “as long as…”. <strong>Concede</strong>: “Admittedly…”, “It’s true that…”. <strong>Caveat</strong>: “One caveat is…”, “with one exception…”.",
      "F. Scott Fitzgerald wrote in “The Crack-Up” (1936) that “the test of a first-rate intelligence is the ability to hold two opposed ideas in the mind at the same time, and still retain the ability to function.” The second half matters as much as the first: nuance that never reaches a decision is just hesitation.",
      "“It depends” is a beginning, not an answer. Always finish the sentence: “It depends on the team — for a small team, yes; for a large one, I’d be careful.” That turns a dodge into an analysis.",
      "A useful structure: <strong>position + concession + caveat + conclusion</strong>. “On the whole, remote work has been good for us. Admittedly, new joiners have struggled to build relationships. The caveat is that we haven’t measured it properly. So I’d keep it — and add more in-person time for the first three months.”"
    ],
    phrases: [
      { en: "To some extent,…", tone: "Measured", note: "Partial agreement." },
      { en: "It depends on… — if…, then…", tone: "Analytical", note: "Turns “it depends” into an actual answer." },
      { en: "Admittedly,…", tone: "Fair-minded", note: "Concedes a point against your own position." },
      { en: "One caveat is…", tone: "Precise", note: "Adds a limitation without abandoning your view." },
      { en: "It’s not black and white.", tone: "Conversational", note: "Signals complexity — then explain the greys." }
    ],
    tip: "Hold two ideas — and still land on one."
  },
  vocab: [
    V("caveat", "KAV-ee-at", "noun", "A warning or limitation that should be taken into account.", "From Latin, “let him beware” (caveat emptor: let the buyer beware). Very common in business: “with one caveat”.", ["warning", "condition", "proviso"], "A “warning” signals danger. A “condition” must be met. A “proviso” is a formal condition in an agreement. A “caveat” is a limitation that qualifies what you have said.", "The results look great — with one caveat: the sample was small.", "— So we should launch?\n— Yes, with a caveat: only in two regions first.", "Add a caveat to a positive statement about your work."),
    V("qualify", "KWOL-i-fy", "verb", "To limit a statement or add conditions to it, so that it is less general.", "Different from “qualify for” (meet the requirements). A qualified statement is more precise, not weaker.", ["modify", "temper", "limit"], "“Modify” means change slightly. “Temper” means soften. “Limit” means restrict. “Qualify” means adding conditions that make a statement more accurate.", "Let me qualify that: it works well for small teams.", "— You said remote work is better.\n— I should qualify that — better for focus, worse for onboarding.", "Make a general statement, then qualify it."),
    V("admittedly", "uhd-MIT-id-lee", "adverb", "Used to concede that something is true, even though it weakens your argument.", "A sign of intellectual honesty — and it makes your main argument more credible.", ["granted", "it’s true that", "to be fair"], "“Granted” is very similar and slightly informal. “It’s true that” is neutral. “To be fair” suggests fairness to someone. “Admittedly” concedes a point against your own position.", "Admittedly, the new process is slower. But the error rate has halved.", "— The redesign took six months!\n— Admittedly — but sales are up 20%.", "Concede a weakness of something you support, starting with “Admittedly”."),
    V("on the whole", "on thuh HOHL", "phrase", "Considering everything; in general.", "Signals a balanced, overall judgement after weighing the details.", ["overall", "by and large", "generally"], "“Overall” is neutral. “By and large” is idiomatic. “Generally” is about frequency. “On the whole” suggests a considered summary.", "On the whole, the year went well, despite a difficult second quarter.", "— How was the conference?\n— On the whole, useful — though the first day was slow.", "Give an overall judgement of your last month, starting with “On the whole”."),
    V("grey area", "GRAY air-ee-uh", "noun", "A situation that is unclear, or not clearly covered by existing rules.", "American spelling: gray area. Useful for ethics, law and policy.", ["ambiguity", "borderline case", "uncertainty"], "“Ambiguity” is when something has more than one meaning. A “borderline case” is close to a limit. “Uncertainty” is not knowing. A “grey area” is where the rules don’t clearly apply.", "Using customer data to train AI is still a legal grey area in some countries.", "— Is it allowed?\n— It’s a grey area — I’d ask Legal.", "Name a grey area in your industry.")
  ],
  culture: "fitzgerald",
  cultureNote: "Fitzgerald wrote his famous line in an essay about falling apart — which makes it more honest, not less. Holding two opposed ideas is hard; it is the mark of someone who sees the world as it is.",
  sayBetter: {
    basic: "Social media is bad.",
    levels: [
      ["Level 1", "Social media is bad for people.", "A position, but no nuance."],
      ["Level 2", "Social media can be bad for some people.", "Qualified — but vague."],
      ["Level 3", "To some extent, social media harms well-being — especially for teenagers. But it also keeps people connected.", "A qualification, a specific group and a concession."],
      ["Level 4", "On the whole, I think social media has made us more connected but less attentive. Admittedly, it’s a lifeline for people who live far from family. The caveat is that so much depends on how we use it: messaging friends is very different from scrolling through strangers. So I wouldn’t ban it — but I’d design it very differently.", "Position, concession, caveat, distinction — and a clear conclusion."]
    ],
    prompt: "Give a Level 4 view on a debate in your industry."
  },
  exercise: {
    title: "Add nuance — and land",
    instructions: "Rewrite each black-and-white claim with nuance, and finish with a clear position.",
    items: [
      { q: "“Remote work is better.”", a: "On the whole, remote work is better for focus. Admittedly, it’s harder for new joiners. So I’d keep it — with more in-person time in the first months." },
      { q: "“AI will destroy jobs.”", a: "To some extent, AI will replace certain tasks. But it depends on the role: for most jobs it will change the work more than remove it. So the priority is retraining." },
      { q: "“Cheap fashion is terrible.”", a: "It’s not black and white: it makes clothes affordable, but at a real environmental cost. One caveat: buying less matters more than where you buy." },
      { q: "“Meetings are a waste of time.”", a: "Many are — but not all. It depends on whether there’s a decision to make. So I’d cancel any meeting that doesn’t have one." }
    ]
  },
  think: {
    q: "Is nuance always a virtue? When is it a way of avoiding a position?",
    angles: ["When have you used “it depends” to avoid a hard answer?", "Who do you admire for being both nuanced and decisive?", "When does a situation call for a simple, clear message?"]
  },
  express: { prompt: "Write a paragraph (150 words) on a contested topic, using the structure: position + concession + caveat + conclusion." },
  speak: {
    prompt: "Is social media good or bad for friendships? Answer with nuance — but still take a position.", seconds: 90,
    structure: ["Your overall position: “On the whole…”", "A concession: “Admittedly…”", "A condition: “It depends on…”", "A caveat", "A clear conclusion"]
  },
  recall: [
    { q: "Day 44: What does it mean to calibrate your confidence?", a: "To match how sure you sound to how strong the evidence is." },
    { q: "Day 34: What does “contentious” mean?", a: "Likely to cause disagreement or argument." },
    { q: "Day 4: What is the difference between “significant” and “relevant”?", a: "Significant = important or large enough to matter; relevant = connected to the topic." }
  ],
  reflect: "Think of an opinion you hold strongly. What is the best argument against it — and does it change your conclusion?",
  deep: {
    title: "Read: F. Scott Fitzgerald, “The Crack-Up” (1936)",
    body: "The essay is short and widely available. Notice its tone — honest, ironic, never self-pitying — and where the famous line appears.",
    prompt: "Write 150 words about two opposed ideas you hold at the same time — and how you still act."
  }
};

TAW.lessons[46] = {
  day: 46, title: "Elaborating", kicker: "Communication · Elaboration",
  cats: ["communication", "philosophy"], skills: ["articulation", "conversation"], difficulty: "Foundation", minutes: 30,
  why: "Short answers stall conversations — and in interviews and meetings they can make you seem less expert than you are. Elaborating means expanding a point with a reason, an example, a consequence or a feeling, until it lands.",
  learn: {
    body: [
      "A simple technique: after your first sentence, ask yourself one of four questions — <strong>Why?</strong> (a reason), <strong>For example?</strong> (an example), <strong>So what?</strong> (a consequence) or <strong>How does it feel?</strong> (a feeling). Each answer adds a layer. Three layers are usually enough.",
      "Signal that you are elaborating: “<strong>What I mean is</strong>…”, “<strong>More specifically</strong>…”, “<strong>In other words</strong>…”, “To expand on that…”. These phrases help listeners follow — and give you a second to think.",
      "Plato wrote philosophy as conversation. In his dialogues, Socrates rarely accepts a first answer: “What do you mean by that?” “Can you give an example?” Ideas grow through elaboration and objection. You can do the same for yourself — before anyone has to ask.",
      "Elaborating is not rambling. Keep a direction: start with the point, add layers that serve it, and stop when it has landed. If you notice you are repeating yourself, close with a summary: “So, in short…”."
    ],
    phrases: [
      { en: "What I mean is…", tone: "Clarifying", note: "Introduces a clearer version of your point." },
      { en: "More specifically,…", tone: "Precise", note: "Narrows down from general to particular." },
      { en: "To expand on that…", tone: "Professional", note: "Adds detail to a point you’ve made." },
      { en: "The reason I say that is…", tone: "Reasoned", note: "Adds the “why”." },
      { en: "So, in short,…", tone: "Concluding", note: "Stops elaboration from becoming rambling." }
    ],
    tip: "Why? For example? So what? — then stop."
  },
  vocab: [
    V("expand on", "ik-SPAND on", "phrasal verb", "To give more details or information about something.", "A polite invitation in meetings: “Could you expand on that?”", ["elaborate on", "develop", "go into more detail"], "“Elaborate on” is slightly more formal. “Develop” suggests building an idea further. “Go into more detail” is plain. “Expand on” is neutral and very common.", "Could you expand on what you said about pricing?", "— We need a different approach.\n— Can you expand on that?\n— Sure — I mean we should sell bundles, not single items.", "Write a sentence asking someone to expand on an idea."),
    V("specifically", "spuh-SIF-ik-lee", "adverb", "In a detailed and exact way; used to add precise detail.", "“More specifically” narrows a general point; “specifically” alone can also mean “in particular”.", ["in particular", "precisely", "namely"], "“In particular” highlights one item. “Precisely” means exactly. “Namely” introduces a list or a name. “Specifically” adds exact detail.", "We need to improve delivery — specifically, the last mile in rural areas.", "— What’s the problem?\n— Returns. Specifically, returns of shoes.", "Make a general statement, then make it specific."),
    V("flesh out", "flesh OWT", "phrasal verb", "To add details to an idea or plan to make it more complete.", "Vivid and informal: you add “flesh” to the “bones” of an idea.", ["develop", "fill in", "elaborate"], "“Develop” is general. “Fill in” means add missing information. “Elaborate” is about explaining more. “Flesh out” means turning an outline into something full.", "The idea is good, but we need to flesh out the costs.", "— Is the proposal ready?\n— Not yet — I still need to flesh out the timeline.", "Write about an idea you need to flesh out."),
    V("unpack", "un-PAK", "verb", "To analyse or explain something complex by looking at its parts.", "Popular in business and academic English: “Let’s unpack that.”", ["analyse", "break down", "examine"], "“Analyse” is formal. “Break down” is clear and practical. “Examine” means look at carefully. “Unpack” suggests opening something layered to see what’s inside.", "Let’s unpack why customers are leaving — is it price, service or product?", "— She said the culture is “complicated”.\n— Let’s unpack that. What does she mean?", "Unpack a complex word you hear at work: what are its parts?"),
    V("ramble", "RAM-bul", "verb", "To talk for a long time in a confused way, without a clear direction.", "Self-critical: “Sorry, I’m rambling.” In British English it also means walking for pleasure in the countryside.", ["waffle", "digress", "go on"], "“Waffle” (British) means talking without saying much. “Digress” means leaving the topic. “Go on” means talking for too long. “Ramble” means talking at length without direction.", "He rambled for ten minutes and never answered the question.", "— Sorry, I’m rambling.\n— Not at all — but what would you recommend?", "Write how you would politely stop yourself from rambling.")
  ],
  culture: "plato-dialogues",
  cultureNote: "In Plato’s dialogues, the first answer is never the end. If you elaborate before anyone has to ask “What do you mean?”, you sound like someone who has thought things through.",
  sayBetter: {
    basic: "Yes, I like where I live.",
    levels: [
      ["Level 1", "Yes, I really like where I live.", "Stronger — but still a dead end."],
      ["Level 2", "Yes, I love it — it’s very green and quiet.", "A reason."],
      ["Level 3", "I love it — it’s green and quiet, but only ten minutes from the centre. On Sundays I walk to the market and know half the stallholders.", "A reason plus a concrete example."],
      ["Level 4", "I love it. What I mean is, it’s one of those rare places that’s quiet but not dead: there’s a park at the end of my street, and on Sundays I walk to the market and know half the stallholders by name. So, in short, it feels like a village inside a city — exactly what I needed after years of commuting.", "Reason, example, feeling, consequence — and a summary that lands it."]
    ],
    prompt: "Answer “What do you do in your free time?” at Level 4."
  },
  exercise: {
    title: "Add the layers",
    instructions: "Expand each short answer with a reason, an example and a consequence or a feeling.",
    items: [
      { q: "“I enjoy my job.”", a: "I enjoy my job — mainly because no two weeks are the same. Last week, for example, I was redesigning our returns process. What I love is seeing a small change make life easier for thousands of customers." },
      { q: "“I don’t like big parties.”", a: "I’m not a big-party person. What I mean is, I prefer conversations where you can actually hear each other — a dinner for six is my ideal. At big parties I end up shouting small talk and leave exhausted." },
      { q: "“The project was difficult.”", a: "The project was difficult — specifically, the data was spread across four systems, and we spent the first month just cleaning it. In the end, though, that’s what made the analysis trustworthy." },
      { q: "“I want to travel more.”", a: "I want to travel more. More specifically, I’d like to spend longer in fewer places — a month in one city rather than a week in four. I think that’s how you really understand a culture." }
    ]
  },
  think: {
    q: "Do you tend to say too little or too much — and does it change between English and Spanish?",
    angles: ["When do you give short answers to avoid mistakes?", "Who elaborates beautifully — and how?", "How do you know when to stop?"]
  },
  express: { prompt: "Choose a short answer you often give (“Fine”, “Good”, “Busy”). Write an elaborated version (100–150 words) with a reason, an example, a consequence and a summary." },
  speak: {
    prompt: "Answer “Do you like where you live?” — and keep elaborating for 90 seconds, without rambling.", seconds: 90,
    structure: ["The short answer", "Why — a reason", "For example — a specific detail", "So what — a consequence or feeling", "So, in short — land it"]
  },
  recall: [
    { q: "Day 45: What does “caveat” mean?", a: "A warning or limitation that qualifies what you have said." },
    { q: "Day 41: What makes a good example?", a: "It is specific, typical (representative) and brief." },
    { q: "Day 9: What was the Renaissance?", a: "A cultural movement (roughly the 14th–16th centuries) that revived classical learning and transformed art, science and ideas about human potential." }
  ],
  reflect: "Which question do you usually skip when you speak: why, for example, or so what?",
  deep: {
    title: "Read: Plato, the Symposium (opening speeches)",
    body: "A dinner party where each guest gives a speech in praise of love. Read the first speeches and notice how each speaker elaborates — and how the others push back.",
    prompt: "Write 150 words: which speaker would shine at a modern dinner party — and why?"
  }
};
})();
