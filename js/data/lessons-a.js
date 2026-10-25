/* Days 1–7, fully written. */
window.TAW = window.TAW || {};
TAW.lessons = TAW.lessons || {};

TAW.V = function (word, pron, pos, definition, nuance, synonyms, distinction, example, conversation, prompt) {
  return { word, pron, pos, definition, nuance, synonyms, distinction, example, conversation, prompt };
};
(function () {
const V = TAW.V;

TAW.lessons[1] = {
  day: 1, title: "Who am I when I speak?", kicker: "English · Self-expression",
  cats: ["english"], skills: ["english", "conversation"], difficulty: "Foundation", minutes: 30,
  why: "Most people introduce themselves with labels — job, age, nationality. Labels are forgettable. What people remember is what you care about and how you see things. Today you start building an introduction that sounds like a person, not a form.",
  learn: {
    body: [
      "Linguists have noticed something many bilingual people feel: we often sound like a slightly different person in each language. In your first language you can be funny, precise and subtle. In English you may feel simpler, flatter, more polite than you really are. That gap is not a lack of intelligence. It is a lack of ready-made language for the things you actually think.",
      "This program closes that gap. The first step is to stop describing yourself with categories and start describing yourself with <em>orientations</em>: what you are drawn to, what drives you, what you notice, what you are trying to understand.",
      "Compare: “I’m 31, I’m Brazilian and I work in marketing.” with “I’m someone who’s always been fascinated by why people buy what they buy — which is probably why I ended up in marketing.” The second version contains the same facts, but it also contains a mind."
    ],
    phrases: [
      { en: "I’m someone who…", tone: "Neutral, natural", note: "Lets you describe a trait without sounding boastful. “I’m someone who needs to understand why before I agree.”" },
      { en: "I’ve always been drawn to…", tone: "Warm, reflective", note: "For long-standing interests. Followed by a noun or -ing: “drawn to old cities / to writing”." },
      { en: "Lately I’ve been fascinated by…", tone: "Curious, current", note: "Shows you are still learning. People love to ask follow-up questions about this." },
      { en: "What drives me is…", tone: "Confident", note: "For motivation. Keep the answer concrete: “What drives me is seeing an idea actually work.”" },
      { en: "People who know me well would say…", tone: "Self-aware, slightly playful", note: "A graceful way to mention a quality — it’s their opinion, not your claim." }
    ],
    tip: "You don’t need to sound impressive. You need to sound specific."
  },
  vocab: [
    V("drawn to", "DRAWN to", "phrase", "Naturally attracted to or interested in something.", "Suggests a pull you didn’t entirely choose — gentle and personal.", ["attracted to", "interested in", "keen on"], "“Interested in” is neutral and can be temporary. “Drawn to” suggests a deeper, long-standing attraction. “Keen on” is lighter and more British.", "I’ve always been drawn to people who see the world differently.", "— What kind of books do you read?\n— I’m drawn to memoirs, actually. I like seeing how people make sense of their own lives.", "Write a sentence about something you have always been drawn to — and why."),
    V("fascinated by", "FAS-ih-nay-tid by", "adjective + preposition", "Extremely interested in something, often because it seems mysterious or complex.", "Stronger than “interested”. Implies you keep thinking about it.", ["intrigued by", "captivated by", "absorbed in"], "“Intrigued” is curiosity about something you don’t understand yet. “Fascinated” is deeper and lasts longer. “Captivated” is almost emotional — you can’t look away.", "Lately I’ve been fascinated by how languages shape the way we think.", "— You seem to know a lot about architecture.\n— Not really, I’m just fascinated by it. I can’t walk past an old building without looking up.", "What are you fascinated by at the moment? Answer in one sentence that someone would want to ask about."),
    V("at heart", "at HART", "phrase", "In your basic, true nature, beneath appearances.", "Used to reveal something deeper or slightly surprising about yourself.", ["fundamentally", "deep down", "essentially"], "“Deep down” is more emotional and informal. “Fundamentally” is more analytical. “At heart” is warm and elegant — perfect for self-description.", "I work with numbers, but at heart I’m a storyteller.", "— You’re so organised.\n— At work, maybe. At heart I’m quite chaotic.", "Complete: “I _____, but at heart I’m _____.”"),
    V("grounded", "GROWN-did", "adjective", "Emotionally stable, sensible and realistic.", "A compliment — suggests calm and maturity, not boring.", ["level-headed", "down-to-earth", "steady"], "“Down-to-earth” means unpretentious and easy to talk to. “Level-headed” means calm in a crisis. “Grounded” covers both: you know who you are.", "Travelling alone made me feel more grounded, not less.", "— How do you stay so calm?\n— Running keeps me grounded. If I skip it for a week, I notice.", "What keeps you grounded? Write one sentence."),
    V("restless", "REST-liss", "adjective", "Unable to stay still or be satisfied; always wanting something new.", "Can be positive (curious, ambitious) or negative (dissatisfied). Context decides.", ["unsettled", "impatient", "itchy-footed"], "“Impatient” is about waiting. “Unsettled” suggests something is wrong. “Restless” is about an inner energy that pushes you forward.", "I have a restless mind — I start too many projects.", "— Why did you change careers?\n— I think I was just restless. I’d stopped learning.", "Describe yourself or someone you know as “restless” — positive or negative?")
  ],
  culture: "montaigne",
  cultureNote: "Being well read isn’t about the number of books. Montaigne read widely, but his real gift was turning what he read into honest thinking about himself. That is exactly the skill this program trains: reading, noticing, and then saying something of your own.",
  sayBetter: {
    basic: "I like reading and travelling.",
    levels: [
      ["Level 1 — clearer", "I really enjoy reading and travelling.", "Still generic: almost everyone says this."],
      ["Level 2 — specific", "I love reading, especially memoirs, and I try to travel somewhere new every year.", "Specific details make you memorable."],
      ["Level 3 — connected", "I read a lot of memoirs, and I think that’s why I love travelling — both are ways of seeing how other people live.", "Now there’s a link between two facts. That link is you."],
      ["Level 4 — articulate", "I’m drawn to anything that lets me step into someone else’s life for a while — memoirs, mostly, and travelling whenever I can.", "The interest has become an orientation. This is what makes people ask a follow-up question."]
    ],
    prompt: "Take something you often say about yourself (“I like music”, “I work in…”) and climb the ladder to Level 4."
  },
  exercise: {
    title: "From labels to orientations",
    instructions: "Rewrite each label-introduction so that it reveals a way of thinking. Then compare with the model.",
    items: [
      { q: "I’m an engineer.", a: "I’m an engineer — I like problems that have a right answer, which is probably why I find people so confusing." },
      { q: "I have two kids.", a: "I have two kids, so most of my free time is spent negotiating with very small, very stubborn people." },
      { q: "I like art.", a: "I’ve always been drawn to art that makes me slightly uncomfortable — I like it when a painting asks me a question." },
      { q: "I’m from São Paulo.", a: "I grew up in São Paulo, so I’m used to noise and speed. Quiet places make me suspicious." },
      { q: "I’m studying English.", a: "I’m working on my English — not the grammar so much as finding my own voice in it." }
    ]
  },
  think: {
    q: "Are you the same person in English as in your first language? What, specifically, is different?",
    angles: ["Humour — can you be funny in English?", "Directness — are you more polite or more blunt?", "Confidence — do you say less than you think?", "Which version of you do you prefer — and could they become the same person?"]
  },
  express: { prompt: "Write a short introduction of yourself (5–7 sentences) without mentioning your job title, age or nationality. Use at least two of today’s phrases." },
  speak: {
    prompt: "Tell me about yourself without listing your job, age or nationality.", seconds: 60,
    structure: ["Open with an orientation: “I’m someone who…”", "Give one concrete example or story", "Mention what you’re curious about lately", "Close with something human or light"],
    benchmark: { prompt: "Baseline: What do you think makes someone successful?", seconds: 90, note: "This is your Day 1 baseline. You will answer the same question on Days 30, 60, 90, 120, 150 and 180 — and watch yourself change. Don’t prepare. Just answer." }
  },
  recall: [
    { q: "Which phrase describes a long-standing, natural attraction to something?", a: "I’ve always been drawn to…" },
    { q: "What’s the difference between “intrigued” and “fascinated”?", a: "Intrigued = curious about something you don’t understand yet. Fascinated = deep, lasting interest." },
    { q: "Complete Montaigne’s idea: “I am myself the ______ of my book.”", a: "matter (subject)" }
  ],
  reflect: "What did you want to say today that you couldn’t quite say in English? Write it down — in any language. We’ll find the words.",
  deep: {
    title: "Read: Montaigne, “Of Idleness” or “Of Friendship”",
    body: "Both essays are short and freely available online in English translation (Charles Cotton’s or Donald Frame’s). Read one slowly. Notice how Montaigne moves from a general idea to his own experience and back.",
    prompt: "Write a 150-word “essay” in Montaigne’s spirit: start with a general question (“Why do we procrastinate?”), then answer it only with your own experience."
  }
};

TAW.lessons[2] = {
  day: 2, title: "The language of opinions", kicker: "English · Opinions",
  cats: ["english", "thinking"], skills: ["english", "thinking", "articulation"], difficulty: "Foundation", minutes: 28,
  why: "An opinion isn’t a sentence starting with “I think”. It’s a position with a degree of certainty, a reason and a limit. Today you learn to signal how strongly you hold a view — the single biggest difference between sounding basic and sounding thoughtful.",
  learn: {
    body: [
      "Most learners have one tool for opinions: “I think”. It works, but used ten times in a conversation it makes every idea sound equally weighted — and slightly unsure.",
      "Articulate speakers calibrate. They show <strong>how certain</strong> they are, which tells the listener how to respond. Think of it as a dial:",
      "<strong>Strong:</strong> “I’m convinced that…”, “I firmly believe…”, “There’s no doubt in my mind that…”<br><strong>Moderate:</strong> “I’d say…”, “My sense is that…”, “I tend to think…”<br><strong>Tentative:</strong> “I’m inclined to think…”, “I suspect…”, “I might be wrong, but…”",
      "Also distinguish three things people often blur: a <em>preference</em> (“I prefer quiet restaurants” — no argument needed), an <em>opinion</em> (“Restaurants are too loud now” — open to debate), and a <em>conviction</em> (“Everyone deserves to be heard” — a deep principle). Treating a preference as a conviction makes people defensive. Treating a conviction as a mere preference makes you sound like you don’t stand for anything."
    ],
    phrases: [
      { en: "My sense is that…", tone: "Moderate, intelligent", note: "Elegant replacement for “I think” when your view comes from experience or intuition." },
      { en: "I tend to think…", tone: "Moderate, open", note: "Signals a general view you’re willing to revise." },
      { en: "I’m inclined to think…", tone: "Tentative, thoughtful", note: "You lean one way but haven’t decided." },
      { en: "I’m convinced that…", tone: "Strong", note: "Use sparingly — it carries weight because it’s rare." },
      { en: "From where I stand…", tone: "Personal, measured", note: "Acknowledges that your position shapes your view." },
      { en: "For what it’s worth…", tone: "Modest", note: "Offers an opinion without pushing it. Very natural in conversation." }
    ],
    tip: "Good answer. Now tell me how sure you are."
  },
  vocab: [
    V("perspective", "per-SPEK-tiv", "noun", "A particular way of seeing or thinking about something.", "Suggests your view is one of several valid ones — open and mature.", ["point of view", "viewpoint", "angle"], "“Point of view” is everyday. “Angle” is informal and tactical. “Perspective” suggests depth and context — it can also mean seeing things in proportion (“Let’s keep this in perspective”).", "Living abroad gave me a completely different perspective on my own country.", "— You seem less stressed about work.\n— Having a baby gave me some perspective, I think.", "Write about an experience that changed your perspective on something."),
    V("assumption", "uh-SUMP-shun", "noun", "Something you accept as true without proof.", "Not negative in itself — every argument rests on assumptions. The skill is noticing them.", ["presumption", "premise", "belief"], "A “premise” is consciously stated as the basis of an argument. An “assumption” is often unspoken. A “presumption” sounds formal and can imply arrogance.", "Your argument rests on the assumption that everyone wants to be promoted.", "— People who don’t post online have nothing to say.\n— That’s quite an assumption. Maybe they just value their privacy.", "Name one assumption people commonly make about your profession or your country."),
    V("preference", "PREF-er-ence", "noun", "A greater liking for one option over another.", "Personal and low-stakes — no justification required.", ["taste", "inclination", "liking"], "“Taste” is about aesthetic judgement. “Inclination” is a tendency, often a behaviour. A “preference” is simply a choice between options.", "It’s a matter of preference — some people work better at night.", "— Do you prefer cities or the countryside?\n— Honestly, my preference changes with my mood.", "State a preference and make clear it’s only a preference, not a rule."),
    V("standpoint", "STAND-point", "noun", "A position from which you judge something; a set of principles or interests.", "More formal and analytical than “perspective”; often used with “from a … standpoint”.", ["position", "vantage point", "stance"], "“Stance” is your declared position on an issue. “Standpoint” is the place you judge from — economic, ethical, personal. “From an economic standpoint” = judging by economics.", "From a financial standpoint it makes sense, but from a human standpoint it’s a disaster.", "— Should the office go fully remote?\n— From a cost standpoint, yes. From a culture standpoint, I’m less sure.", "Evaluate one decision from two different standpoints."),
    V("conviction", "kon-VIK-shun", "noun", "A firmly held belief; also the quality of speaking with certainty.", "Deep and principled — not something you change easily. (Careful: it also means being found guilty of a crime.)", ["belief", "principle", "certainty"], "A “belief” can be weak or strong. A “principle” guides behaviour. A “conviction” is a belief you would defend. “She spoke with conviction” = she sounded genuinely certain.", "It’s one of my deepest convictions that education should be free.", "— Why did you leave that job?\n— I had a conviction that what we were doing wasn’t honest, and it wouldn’t go away.", "Write about one of your genuine convictions, and where it comes from.")
  ],
  culture: "evelyn-hall",
  cultureNote: "A perfect lesson in opinions: the most famous sentence about tolerating other people’s opinions was never said by the man it’s attributed to. Being well read includes knowing what someone actually said.",
  sayBetter: {
    basic: "I think it’s bad.",
    levels: [
      ["Level 1", "I don’t think it’s a good idea.", "Softer, but still vague: what is bad about it?"],
      ["Level 2", "I’m not convinced it’s a good idea, because it seems rushed.", "A degree of certainty + a reason."],
      ["Level 3", "My sense is that it’s been rushed, and that could create problems later.", "Calibrated, with a consequence."],
      ["Level 4", "I can see why it’s appealing, but my sense is that it’s been rushed — and rushed decisions tend to be expensive later.", "Acknowledges the other side, takes a position, and gives a general principle."]
    ],
    prompt: "Take a strong opinion you hold and express it at Level 4."
  },
  exercise: {
    title: "Calibrate the dial",
    instructions: "Rewrite each sentence at the strength indicated, without using “I think”.",
    items: [
      { q: "I think social media is bad for teenagers. → STRONG", a: "I’m convinced social media is harming teenagers, especially their sleep and self-image." },
      { q: "I think remote work is better. → MODERATE", a: "My sense is that remote work suits most people better, at least for focused work." },
      { q: "I think he will resign. → TENTATIVE", a: "I suspect he’ll resign, although I might be wrong." },
      { q: "I think coffee is better than tea. → PREFERENCE, not opinion", a: "Personally, I prefer coffee — but that’s just taste." },
      { q: "I think everyone deserves respect. → CONVICTION", a: "It’s a deep conviction of mine that everyone deserves basic respect, whatever they’ve done." }
    ]
  },
  think: {
    q: "Which of your opinions are actually inherited — from your family, your country, your social media feed — rather than reasoned?",
    angles: ["Pick one opinion and trace where it came from.", "Would you hold it if you had grown up somewhere else?", "Is an inherited opinion necessarily wrong?"]
  },
  express: { prompt: "Write three sentences about the same topic (e.g. working from home): one preference, one opinion, one conviction. Make the difference audible." },
  speak: {
    prompt: "What is something you strongly believe? Explain why.", seconds: 90,
    structure: ["State it with calibrated strength (“I’m convinced that…”)", "Give your main reason", "Give an example from life", "Acknowledge one limit: “That said, …”"]
  },
  recall: [
    { q: "Day 1: Complete — “I work with numbers, but ___ ___ I’m a storyteller.”", a: "at heart" },
    { q: "Which word means a belief you accept without proof — often unspoken?", a: "assumption" },
    { q: "Who actually wrote “I disapprove of what you say, but I will defend to the death your right to say it”?", a: "Evelyn Beatrice Hall (1906), summarising Voltaire’s attitude." }
  ],
  reflect: "Notice today how many times you say or write “I think”. What could you have said instead?",
  deep: {
    title: "The epistemics of opinions",
    body: "Philosophers distinguish between how confident we are and how confident we should be given the evidence. A well-calibrated person is right about 70% of the time when she says she’s 70% sure. Read about “calibration” or Philip Tetlock’s research on forecasting (“Superforecasting”, 2015).",
    prompt: "List three opinions you hold and assign a percentage confidence to each. Then write what evidence would change each one."
  }
};

TAW.lessons[3] = {
  day: 3, title: "How to disagree", kicker: "Conversation · Disagreement",
  cats: ["english", "thinking"], skills: ["conversation", "thinking", "articulation"], difficulty: "Foundation", minutes: 30,
  why: "People who can’t disagree well either stay silent or start fights. Both are expensive. Disagreeing elegantly is a sign of confidence and respect — you take the other person’s idea seriously enough to argue with it.",
  learn: {
    body: [
      "In 2008 the essayist Paul Graham proposed a “hierarchy of disagreement”. At the bottom: name-calling and attacking the person. Then responding to tone (“Don’t be so aggressive”). Then simple contradiction (“That’s not true”). Higher up: counterargument — giving reasons and evidence. At the top: refuting the central point — showing exactly where the other argument fails.",
      "The lesson: <strong>disagree with the idea, not the person</strong>, and aim at the strongest part of their argument, not the weakest.",
      "In English, tone does a lot of the work. The same disagreement can sound aggressive or generous depending on the phrase that introduces it. Notice the difference between “That’s wrong” and “I’d look at it slightly differently”. Both disagree. Only one keeps the conversation open."
    ],
    phrases: [
      { en: "I see your point, but…", tone: "Neutral — very common", note: "Acknowledges before disagreeing. Make sure you actually engage with their point." },
      { en: "I’m not entirely convinced by that.", tone: "Polite, firm", note: "Classic understatement — it means “I disagree” without drama." },
      { en: "I’d look at it slightly differently.", tone: "Soft, constructive", note: "Signals a different angle rather than a contradiction." },
      { en: "There’s some truth to that, although…", tone: "Generous", note: "Concedes part of the argument first. Very persuasive." },
      { en: "Can I push back on that a little?", tone: "Collaborative, modern", note: "Asks permission — common in professional settings." },
      { en: "That’s not quite how I see it.", tone: "Direct but calm", note: "Clear disagreement without attacking." }
    ],
    tip: "Disagree with the idea. Respect the person. Aim at the strongest version of their argument."
  },
  vocab: [
    V("counter", "KOWN-ter", "verb", "To respond to an argument with an opposing argument.", "Active and reasoned — you’re not just denying, you’re answering.", ["respond", "rebut", "contradict"], "“Contradict” just says the opposite. “Rebut” is formal and suggests proving something false. “Counter” means offering an opposing point — natural in debate and conversation.", "She countered that cheaper housing would attract more workers to the city.", "— Taxes kill innovation.\n— I’d counter that with Scandinavia — high taxes, very innovative.", "Write one sentence countering a common claim."),
    V("concede", "kon-SEED", "verb", "To admit that something is true, often reluctantly.", "A strength, not a weakness. Conceding small points makes your main point more credible.", ["admit", "acknowledge", "grant"], "“Admit” can suggest guilt. “Acknowledge” is neutral recognition. “Concede” is specifically about giving ground in an argument. “I’ll grant you that…” is a natural spoken form.", "I’ll concede that the plan is expensive, but the alternative is worse.", "— But the trains are always late!\n— Okay, I concede that. They’re still better than driving.", "Concede one point to someone you disagree with."),
    V("valid", "VAL-id", "adjective", "Based on good reasoning; reasonable and acceptable.", "Saying “that’s a valid point” shows respect even when you disagree.", ["legitimate", "reasonable", "sound"], "“Reasonable” is everyday. “Legitimate” suggests it has a right to be considered. “Sound” is about the quality of reasoning. “Valid” covers all — but avoid overusing “valid concern”, it can sound like corporate jargon.", "That’s a valid point, but it doesn’t change my overall view.", "— Isn’t it risky to quit without another job?\n— That’s a valid worry. I have savings for six months.", "Write a sentence acknowledging a valid point, then adding your own."),
    V("challenge", "CHAL-inj", "verb", "To question whether something is true or right.", "Intellectual, not aggressive — you challenge ideas, assumptions, claims.", ["question", "dispute", "contest"], "“Question” is the softest. “Dispute” and “contest” are stronger and more formal (you contest a decision). “Challenge an assumption” is a very useful collocation.", "Good teachers challenge your assumptions rather than giving you answers.", "— Everyone knows breakfast is the most important meal.\n— I’d challenge that, actually. A lot of that idea came from cereal advertising.", "Challenge an assumption you often hear."),
    V("respectfully", "ri-SPEKT-ful-ee", "adverb", "In a way that shows respect.", "“With respect” and “respectfully” before a disagreement can sound polite — or, in British English, slightly icy. Tone matters.", ["politely", "courteously", "graciously"], "“Politely” is about manners. “Courteously” is formal. “Respectfully” implies you value the other person even while disagreeing. Note: “With all due respect…” often signals strong disagreement.", "I respectfully disagree — but I’d love to hear more about why you see it that way.", "— So you agree with the decision?\n— Respectfully, no. I think we moved too fast.", "Write a respectful disagreement that also invites the other person to say more.")
  ],
  culture: "socrates",
  cultureNote: "Socratic questioning is the most elegant form of disagreement: instead of saying “you’re wrong”, you ask questions until the weakness in an idea becomes visible — to both of you.",
  sayBetter: {
    basic: "No, that’s wrong.",
    levels: [
      ["Level 1", "I don’t agree.", "Clear, but closes the conversation."],
      ["Level 2", "I see what you mean, but I don’t agree.", "Acknowledges — but empty if you don’t say why."],
      ["Level 3", "I see your point, but I’d look at it differently — I think the cost matters more than the speed.", "Acknowledge + reframe + reason."],
      ["Level 4", "There’s some truth to that, although I wonder whether we’re focusing on speed when the real issue is cost.", "Concedes, then shifts the frame with a question. Firm but impossible to resent."]
    ],
    prompt: "Think of something someone said recently that you disagreed with. Respond at Level 4."
  },
  exercise: {
    title: "Climb the hierarchy",
    instructions: "Each response is low on Graham’s hierarchy. Rewrite it as a counterargument or refutation.",
    items: [
      { q: "Claim: “Reading fiction is a waste of time.” Response: “That’s such an ignorant thing to say.”", a: "I’m not convinced. Studies on fiction and empathy are mixed, but even practically, novels are one of the best ways to understand how other people think." },
      { q: "Claim: “Young people don’t want to work.” Response: “You’re just old.”", a: "I’d look at it differently — many young people work hard, they just won’t accept conditions previous generations tolerated." },
      { q: "Claim: “Money can’t buy happiness.” Response: “That’s not true.”", a: "There’s some truth to that, although research suggests money does increase wellbeing, especially when it removes financial stress." },
      { q: "Claim: “AI will replace all creative jobs.” Response: “Calm down, you’re being dramatic.”", a: "Can I push back on that a little? Tools usually change creative work rather than eliminate it — photography didn’t end painting." }
    ]
  },
  think: {
    q: "Is it possible to disagree with someone while still respecting their position? What would that look like in practice?",
    angles: ["Can you name someone you disagree with but respect?", "What’s the difference between respecting a person and respecting their view?", "Are there views that don’t deserve respect?"]
  },
  express: { prompt: "Choose an opinion you disagree with (from the news, a friend, social media). Write a 4–5 sentence response that concedes one point, then counters with a reason and an example." },
  speak: {
    prompt: "Someone says: “Success is mostly about hard work.” Disagree — without attacking the person.", seconds: 90,
    structure: ["Acknowledge: “There’s some truth to that…”", "Counter: name what’s missing (luck, opportunity, health…)", "Give an example", "Close with your own position"]
  },
  recall: [
    { q: "Day 2: Which phrase means “my view comes from experience or intuition”?", a: "My sense is that…" },
    { q: "Day 2: Difference between a preference and a conviction?", a: "Preference = personal choice, no argument needed. Conviction = deep principle you’d defend." },
    { q: "What is at the top of Graham’s hierarchy of disagreement?", a: "Refuting the central point." }
  ],
  reflect: "When you disagree with someone, do you usually stay quiet, soften too much, or become sharp? Why?",
  deep: {
    title: "Read: Paul Graham, “How to Disagree” (2008)",
    body: "A short, clear essay freely available on paulgraham.com. Then try a Socratic exercise: take a belief you hold and ask yourself five “why?” questions in a row.",
    prompt: "Write down the belief and your five answers. Where did the reasoning become weak?"
  }
};

TAW.lessons[4] = {
  day: 4, title: "Precision", kicker: "English · Precise language",
  cats: ["english"], skills: ["english", "articulation"], difficulty: "Foundation", minutes: 27,
  why: "Vague language makes you sound less intelligent than you are. “It was good”, “a lot of things”, “very interesting” — these words take no risk and give no information. Precision doesn’t mean bigger words. It means the right word.",
  learn: {
    body: [
      "Gustave Flaubert spent days searching for <em>le mot juste</em> — the exact word. You don’t need to do that, but you do need to notice your <strong>default words</strong>: good, bad, nice, interesting, thing, stuff, very, really, a lot, amazing.",
      "Default words aren’t wrong. They’re just empty. When you say a film was “interesting”, the listener learns nothing. Was it disturbing? Clever? Slow but beautiful? Each of those is a different film.",
      "The fix is a question: <strong>“Interesting how?”</strong> Ask it of every vague word, and the precise word usually appears. “Very big” → enormous, sprawling, oversized. “Very important” → essential, crucial, significant. “Very bad” → disappointing, harmful, careless — depending on what kind of bad."
    ],
    phrases: [
      { en: "What struck me was…", tone: "Observant", note: "Replaces “It was interesting”. Forces you to name the thing." },
      { en: "To be more precise…", tone: "Clarifying", note: "Lets you correct a vague statement mid-sentence. Sounds thoughtful, not unsure." },
      { en: "It’s not so much X as Y.", tone: "Nuanced", note: "“It’s not so much difficult as tedious.” A powerful precision structure." },
      { en: "The word I’d use is…", tone: "Deliberate", note: "Shows you’re choosing language carefully. Use when the exact word matters." }
    ],
    tip: "You don’t need a bigger word. You need a more accurate one."
  },
  vocab: [
    V("subtle", "SUT-ul (the b is silent)", "adjective", "Not obvious; small but important; delicate.", "A compliment for art, flavour, humour, or a person’s intelligence.", ["delicate", "understated", "nuanced"], "“Understated” is a deliberate choice to be quiet. “Delicate” suggests fragility. “Subtle” suggests something you need intelligence or attention to notice.", "The difference between the two translations is subtle but important.", "— Did you like the film?\n— Yes — the acting was very subtle. Nobody explains their feelings; you just see them.", "Describe something subtle that most people don’t notice."),
    V("significant", "sig-NIF-ih-kunt", "adjective", "Large or important enough to have an effect or be noticed.", "Measured and serious — good in work and analysis. Precise replacement for “big” or “important”.", ["considerable", "substantial", "meaningful"], "“Considerable” and “substantial” are about size or amount. “Meaningful” is about value. “Significant” is about effect — and in statistics, it has a technical meaning.", "There’s been a significant change in how people shop since 2020.", "— Is the difference really that big?\n— It’s significant. About 20% cheaper.", "Replace “a big difference” with a sentence using “significant”."),
    V("relevant", "REL-uh-vunt", "adjective", "Closely connected to the subject being discussed.", "Signals discipline in thinking — you stay on point.", ["pertinent", "applicable", "to the point"], "“Pertinent” is more formal. “Applicable” means it can be applied to a case. “Relevant” is the everyday precise word. Its opposite, “irrelevant”, is useful for politely dismissing a point.", "Your experience abroad is highly relevant to this role.", "— Does it matter that he’s young?\n— I don’t think age is relevant here. Experience is.", "Write a sentence explaining why something is — or isn’t — relevant."),
    V("compelling", "kum-PEL-ing", "adjective", "So interesting or convincing that you pay attention or are persuaded.", "Stronger and more precise than “interesting” or “good”. Used for arguments, stories, evidence, performances.", ["convincing", "persuasive", "gripping"], "“Convincing” = you believe it. “Persuasive” = it changes your mind. “Gripping” = a story you can’t stop. “Compelling” combines interest and force — a compelling argument is both interesting and hard to resist.", "She made a compelling case for moving the office.", "— Was the documentary good?\n— Compelling. I watched all three hours in one go.", "Describe a compelling argument, book or person."),
    V("excessive", "ek-SES-iv", "adjective", "More than is necessary, normal or reasonable.", "Implies a judgement: too much. More precise than “too much”.", ["extreme", "disproportionate", "over the top"], "“Over the top” is informal and often about style. “Disproportionate” means too large relative to something else. “Excessive” is a calm, clear criticism.", "The punishment seemed excessive for such a small mistake.", "— Ten emails a day about the party?\n— A bit excessive, yes.", "Criticise something as excessive, calmly.")
  ],
  culture: "flaubert",
  cultureNote: "You don’t need Flaubert’s perfectionism — but his question is the right one: is this the exact word, or just the nearest one?",
  sayBetter: {
    basic: "I don’t like it because it’s too much.",
    levels: [
      ["Level 1", "I don’t really like it.", "Softer — but now we have no reason at all."],
      ["Level 2", "I find it a little excessive.", "One precise word does the work of “too much”."],
      ["Level 3", "I think it goes slightly too far.", "Natural, measured, idiomatic."],
      ["Level 4", "What bothers me is that it feels somewhat excessive rather than genuinely necessary.", "Names the problem and the standard you’re judging by — necessity."]
    ],
    prompt: "Take a vague complaint you’ve made recently and climb to Level 4."
  },
  exercise: {
    title: "Replace the default word",
    instructions: "Replace the vague word in each sentence with something precise. Ask “…how?”",
    items: [
      { q: "The meeting was interesting.", a: "The meeting was surprisingly tense — nobody wanted to say what they really thought." },
      { q: "She’s a very good writer.", a: "She’s an unusually clear writer — she can explain complicated ideas in a few sentences." },
      { q: "There are a lot of problems with the plan.", a: "The plan has three significant weaknesses: cost, timing and staff." },
      { q: "The city is really nice.", a: "The city is compact and walkable, with a quiet, slightly melancholic charm." },
      { q: "It was a bad decision.", a: "It was a hasty decision — made before anyone had looked at the numbers." },
      { q: "The film was amazing.", a: "The film was quietly devastating — I was still thinking about it the next morning." },
      { q: "That’s an important thing.", a: "That’s a crucial distinction." },
      { q: "Her argument was good.", a: "Her argument was compelling — clear, well-evidenced and hard to dismiss." }
    ]
  },
  think: {
    q: "Is vague language always a weakness — or can it sometimes be kind, diplomatic, or wise?",
    angles: ["When might precision be rude?", "When does vagueness protect someone?", "Can you be precise and kind at the same time?"]
  },
  express: { prompt: "Describe the last film, book or series you enjoyed in 4–5 sentences — without using good, nice, interesting, amazing, really, or very." },
  speak: {
    prompt: "Describe a place you love — without using nice, beautiful, amazing, good or very.", seconds: 60,
    structure: ["One precise word for its atmosphere", "Two specific details (a sound, a smell, a colour)", "What it makes you feel — precisely", "Why it matters to you"]
  },
  recall: [
    { q: "Day 3: Name two polite phrases for disagreeing.", a: "e.g. “I’m not entirely convinced…”, “I’d look at it slightly differently…”, “There’s some truth to that, although…”" },
    { q: "Day 3: What does “concede” mean?", a: "To admit something is true in an argument, often reluctantly." },
    { q: "What does Flaubert’s “le mot juste” mean?", a: "The exact, right word." }
  ],
  reflect: "What are your three default words in English? Write them down — they’ll become your targets.",
  deep: {
    title: "Build your precision ladder",
    body: "For each of your default words, build a ladder of 5 precise alternatives, with a note on when each fits. Save the best ones to My Words.",
    prompt: "“Good” → ? “Bad” → ? “Interesting” → ? Write five each, with an example sentence for your favourite."
  }
};

TAW.lessons[5] = {
  day: 5, title: "Storytelling", kicker: "Communication · Story",
  cats: ["english", "culture"], skills: ["conversation", "articulation", "english"], difficulty: "Foundation", minutes: 32,
  why: "People forget arguments and remember stories. A short, well-told anecdote can make an idea stick, reveal your character, and make a dinner table lean in. Storytelling is a learnable structure, not a gift.",
  learn: {
    body: [
      "Humans have told stories for as long as we have records — the Epic of Gilgamesh was written down around four thousand years ago. Stories help us remember, warn each other, and make sense of change.",
      "Almost every good personal story has five beats: <strong>situation</strong> (where and when — briefly), <strong>complication</strong> (something goes wrong or changes), <strong>turning point</strong> (a decision, a surprise, a realisation), <strong>change</strong> (what’s different afterwards) and <strong>meaning</strong> (why you’re telling it).",
      "Two common learner mistakes: spending too long on the situation (“So it was 2019, I was living in…”), and forgetting the meaning, so the story just stops. Start late, end with a line that tells the listener why it mattered.",
      "Tense matters: use the past simple for the main events (“I opened the door”), the past continuous for background (“It was raining”), and the past perfect for what happened before (“I had never seen her before”)."
    ],
    phrases: [
      { en: "It all started when…", tone: "Inviting", note: "A clean opening that gets straight to the action." },
      { en: "That’s when it dawned on me that…", tone: "Reflective", note: "Marks the realisation — the turning point." },
      { en: "To my surprise…", tone: "Lively", note: "Signals a twist." },
      { en: "Looking back, …", tone: "Thoughtful", note: "Moves from the event to the meaning." },
      { en: "Long story short, …", tone: "Casual", note: "Skips detail when you notice you’re losing people." }
    ],
    tip: "Start late. End with meaning."
  },
  vocab: [
    V("turning point", "TUR-ning point", "noun", "The moment when a situation starts to change decisively.", "The heart of a story. Use it to signal: this is the moment that matters.", ["watershed", "pivotal moment", "crossroads"], "A “crossroads” is a moment of choice before the change. A “watershed” is a formal, historical-sounding turning point. “Turning point” is natural in personal stories.", "Moving to Lisbon was a turning point — I stopped trying to be who my parents expected.", "— When did you decide to become a designer?\n— The turning point was a summer job at a print shop.", "Name a turning point in your life in one sentence."),
    V("in hindsight", "in HIND-site", "phrase", "Thinking about something after it has happened, with knowledge you didn’t have then.", "Signals reflection and maturity — often used with regrets or lessons.", ["looking back", "with hindsight", "retrospectively"], "“Looking back” is warmer and more casual. “Retrospectively” is formal. “In hindsight” often implies “I see it more clearly now”.", "In hindsight, losing that job was the best thing that could have happened.", "— Do you regret it?\n— In hindsight, I should have left sooner.", "Write something you understand better in hindsight."),
    V("gradually", "GRAD-yoo-uh-lee", "adverb", "Slowly, over a period of time.", "Essential for storytelling: change is rarely sudden.", ["slowly", "little by little", "over time"], "“Slowly” describes speed. “Gradually” describes a process of steady change. “Little by little” is warmer and more spoken.", "Gradually, I realised I wasn’t missing home anymore.", "— When did you start feeling confident at work?\n— It happened gradually — no single moment.", "Describe something that changed gradually in your life."),
    V("it dawned on me", "it DAWND on me", "phrase", "I slowly began to realise something.", "Beautiful for turning points — like sunrise, the realisation arrives slowly and then clearly.", ["I realised", "it hit me", "it occurred to me"], "“It hit me” is sudden and dramatic. “It occurred to me” is a passing thought. “It dawned on me” is a gradual, important realisation.", "Halfway through the interview, it dawned on me that I didn’t want the job.", "— Why did you leave so early?\n— It dawned on me that nobody there was actually listening.", "Write about a moment when something dawned on you."),
    V("to my surprise", "to my ser-PRIZE", "phrase", "Used to introduce something unexpected.", "Adds a little drama without exaggeration.", ["surprisingly", "unexpectedly", "much to my surprise"], "“Surprisingly” is neutral. “Much to my surprise” is stronger. “To my surprise” keeps the focus on your experience — perfect for personal stories.", "To my surprise, the quiet guy in the corner turned out to be the CEO.", "— How was the trip?\n— To my surprise, the best part was the train journey.", "Write a sentence starting with “To my surprise”.")
  ],
  culture: "vonnegut",
  cultureNote: "Vonnegut showed that stories have shapes. When you tell an anecdote, ask: what’s my shape? Rise? Fall? Fall then rise? The shape tells you where to put the turning point.",
  sayBetter: {
    basic: "I went to Paris and it was good and then I lost my bag and it was bad but then it was okay.",
    levels: [
      ["Level 1", "I went to Paris. I lost my bag, but in the end it was okay.", "Shorter — but no story yet."],
      ["Level 2", "On my first day in Paris I lost my bag with my passport in it. I panicked — but a stranger helped me find it.", "Complication and resolution."],
      ["Level 3", "On my first day in Paris I lost my bag — passport, money, everything. To my surprise, the person who helped me was a waiter I’d been rude to an hour earlier.", "A twist makes it memorable."],
      ["Level 4", "On my first day in Paris I lost everything — passport, money, phone. The person who saved me was a waiter I’d been impatient with an hour earlier. It dawned on me that I’d spent the whole morning treating people as obstacles. I’ve tried to be kinder ever since.", "Situation → complication → twist → realisation → change. A whole story in four sentences."]
    ],
    prompt: "Take a small incident from your week and climb it to Level 4."
  },
  exercise: {
    title: "Find the five beats",
    instructions: "For each story idea, write one sentence for the turning point and one for the meaning.",
    items: [
      { q: "Your first day at a new job.", a: "Turning point: my manager admitted she was also nervous. Meaning: everyone is improvising more than they look." },
      { q: "A trip that went wrong.", a: "Turning point: the train was cancelled and we had to stay in a tiny village. Meaning: the unplanned parts are the parts I remember." },
      { q: "A friendship that ended.", a: "Turning point: I realised I only called her when I needed something. Meaning: friendships end quietly, from both sides." },
      { q: "Learning a skill.", a: "Turning point: I stopped trying to be good and started trying to be curious. Meaning: fear of being bad was the real obstacle." }
    ]
  },
  think: {
    q: "Why do you think humans remember stories better than facts? Is that a strength or a weakness of our minds?",
    angles: ["Think of a fact you remember only because of a story.", "Can stories mislead us? (Think of advertising or politics.)", "What story do you tell about your own life?"]
  },
  express: { prompt: "Write a 6–8 sentence story about something that changed you. Use all five beats and at least two of today’s phrases." },
  speak: {
    prompt: "Tell a 90-second story about something that changed you.", seconds: 90,
    structure: ["Start late: one sentence of situation", "The complication", "The turning point — “That’s when it dawned on me…”", "What changed", "The meaning — “Looking back, …”"]
  },
  recall: [
    { q: "Day 4: Ask this question of every vague word: “______ how?”", a: "Interesting how? (Good how? Bad how?)" },
    { q: "Day 4: More precise than “too much”?", a: "excessive" },
    { q: "Day 1: How do you introduce yourself with an orientation?", a: "“I’m someone who…”, “I’ve always been drawn to…”" }
  ],
  reflect: "What story do you tell most often about yourself? What does it say about who you think you are?",
  deep: {
    title: "Listen: The Moth",
    body: "The Moth (themoth.org) publishes true stories told live, without notes, in about ten minutes. Listen to one and map its five beats.",
    prompt: "Write down the turning point and the meaning of the story you listened to. How long did the storyteller spend on the situation?"
  }
};

TAW.lessons[6] = {
  day: 6, title: "Curiosity", kicker: "Psychology · Curiosity",
  cats: ["psychology", "english"], skills: ["conversation", "thinking"], difficulty: "Foundation", minutes: 28,
  why: "Interesting people are interested. The fastest way to become good at conversation isn’t to have better things to say — it’s to ask better questions. Curiosity is also the engine of everything else in this program.",
  learn: {
    body: [
      "In 1994 the behavioural economist George Loewenstein proposed the <strong>information-gap theory</strong> of curiosity: we become curious when we notice a gap between what we know and what we want to know. Too small a gap and we’re bored; too large and we give up. Curiosity lives in the middle.",
      "This has a practical consequence: <strong>the more you know, the more curious you become</strong>, because you notice more gaps. Learning a little about art makes you curious about artists. That’s why this program mixes subjects.",
      "In conversation, small talk stays on facts (“Where do you work?”). Good questions move to <em>experience</em> (“What’s a typical day like?”), <em>opinion</em> (“What do people misunderstand about it?”), <em>motivation</em> (“What made you choose it?”) and <em>imagination</em> (“If you could change one thing about it, what would it be?”).",
      "The secret ingredient is the <strong>follow-up question</strong>. Research by Karen Huang and colleagues at Harvard (2017) found that people who asked more questions — especially follow-ups — were rated as more likeable."
    ],
    phrases: [
      { en: "What made you…?", tone: "Warm, curious", note: "Asks about motivation. “What made you move here?”" },
      { en: "What’s the part people don’t see?", tone: "Insightful", note: "Invites an insider perspective. People love answering this." },
      { en: "How did you get into that?", tone: "Friendly", note: "Invites a story rather than a fact." },
      { en: "That’s fascinating — what happened next?", tone: "Engaged", note: "A follow-up that keeps the story going." },
      { en: "I’ve always wondered…", tone: "Curious", note: "Frames your question as genuine interest." }
    ],
    tip: "You don’t need to know everything. You need to stay curious."
  },
  vocab: [
    V("intrigued", "in-TREEGD", "adjective", "Very interested in something because it is unusual or mysterious.", "Signals you want to know more — perfect in conversation.", ["curious", "fascinated", "interested"], "“Curious” is general. “Fascinated” is deeper and longer-lasting. “Intrigued” is the moment of noticing something puzzling (see Day 1).", "I’m intrigued by what you said about working with your sister — how does that work?", "— I left law to become a baker.\n— Now I’m intrigued. What happened?", "Write a sentence showing you’re intrigued by something someone said."),
    V("wonder", "WUN-der", "verb / noun", "To think about something with curiosity; also a feeling of amazement.", "As a verb, it softens questions beautifully: “I wonder whether…”", ["ask oneself", "ponder", "speculate"], "“Ponder” means to think deeply and slowly. “Speculate” means to guess without evidence. “I wonder…” is a gentle way of asking aloud.", "I wonder whether we’d be happier with fewer choices.", "— Why do you think she left?\n— I wonder if she just needed a change.", "Write two “I wonder…” sentences about the world."),
    V("inquisitive", "in-KWIZ-ih-tiv", "adjective", "Eager to know and learn; asking many questions.", "Usually positive (an inquisitive mind), but can mean nosy if about personal matters.", ["curious", "questioning", "nosy"], "“Curious” is general. “Nosy” is negative — interested in private matters. “Inquisitive” is active curiosity, often intellectual.", "She has an inquisitive mind — she reads about everything.", "— Your son asks so many questions!\n— He’s very inquisitive. It’s exhausting and wonderful.", "Describe someone you know who is inquisitive."),
    V("follow-up", "FOL-oh-up", "noun / adjective", "Something that continues or develops a previous action, such as a further question.", "The single most important conversational tool.", ["further question", "next question"], "A “follow-up question” builds on the answer you just heard. A “new question” changes the subject. The first shows you listened.", "A good follow-up question shows you were really listening.", "— I spent a year in Japan.\n— (Follow-up) What surprised you most about living there?", "Write a statement someone might make, and two follow-up questions."),
    V("small talk", "SMAWL tawk", "noun", "Polite conversation about unimportant things.", "Not useless — it’s the warm-up. The skill is knowing how to move beyond it.", ["chit-chat", "pleasantries", "casual conversation"], "“Chit-chat” is informal and light. “Pleasantries” are formal polite exchanges. “Small talk” is the general term — often slightly negative.", "I’m not great at small talk, but I love deep conversations.", "— Did you talk to anyone at the party?\n— Only small talk — weather, traffic, the usual.", "Write a small-talk question, then upgrade it into a better one.")
  ],
  culture: "loewenstein",
  cultureNote: "The information-gap theory explains why this whole program builds knowledge in layers: each thing you learn opens new gaps — and new gaps make you curious.",
  sayBetter: {
    basic: "What do you do?",
    levels: [
      ["Level 1", "What do you do for work?", "Clearer, still a fact question."],
      ["Level 2", "What kind of work do you do?", "Slightly more open."],
      ["Level 3", "What are you working on at the moment?", "Invites something current and specific."],
      ["Level 4", "What’s keeping you busy these days — work or otherwise?", "Lets the person choose what matters to them. Often leads somewhere more interesting than their job."]
    ],
    prompt: "Take your usual opening question and climb it to Level 4."
  },
  exercise: {
    title: "Beyond small talk",
    instructions: "Upgrade each small-talk question so it invites experience, opinion or a story.",
    items: [
      { q: "Where are you from?", a: "What’s something people get wrong about where you grew up?" },
      { q: "Did you have a good weekend?", a: "What was the best part of your weekend?" },
      { q: "Do you like your job?", a: "What’s the part of your job you’d keep if you could only keep one?" },
      { q: "Have you been here before?", a: "What brought you here tonight?" },
      { q: "Do you read?", a: "What’s a book you keep thinking about, even years later?" }
    ]
  },
  think: {
    q: "Is curiosity something you have — or something you practise? Can a person become more curious?",
    angles: ["When are you most curious? Least?", "Does fear of looking ignorant reduce curiosity?", "What did school do to your curiosity?"]
  },
  express: { prompt: "Write five questions you could ask at a dinner party that go beyond small talk — one each for experience, opinion, motivation, imagination and a follow-up." },
  speak: {
    prompt: "Ask five questions that go beyond small talk — out loud, as if to a stranger. Then answer the one you find most interesting yourself.", seconds: 90,
    structure: ["Five questions, each a different type", "Pick one", "Answer it honestly, with an example"]
  },
  recall: [
    { q: "Day 5: The five beats of a story?", a: "Situation, complication, turning point, change, meaning." },
    { q: "Day 5: A phrase for a gradual realisation?", a: "It dawned on me that…" },
    { q: "Day 2: Name three alternatives to “I think”.", a: "My sense is that… / I tend to think… / I’m inclined to think… / From where I stand…" }
  ],
  reflect: "What are you genuinely curious about right now — that has nothing to do with work or obligation?",
  deep: {
    title: "Curiosity journal",
    body: "For one week, write down one question a day that you genuinely wonder about (“Why do cities have so many pigeons?”). Look one up each day.",
    prompt: "Write today’s question and what you found. What new question did the answer open?"
  }
};

TAW.lessons[7] = {
  day: 7, type: "review", title: "Weekly review: Finding the words", kicker: "Week 1 · Review",
  cats: ["review"], skills: ["english", "conversation", "articulation"], difficulty: "Foundation", minutes: 30,
  why: "Learning happens when you retrieve, not when you reread. This week you learned to introduce yourself, calibrate opinions, disagree, be precise, tell a story and ask better questions. Today you prove it to yourself.",
  learn: {
    body: [
      "Your first week in one sentence: <strong>specific beats generic</strong>. A specific introduction, a calibrated opinion, a precise word, a story with a turning point, a real follow-up question.",
      "Today: a recall round, a reflection, and a speaking challenge in which you must combine the week’s skills."
    ],
    phrases: [
      { en: "I’m someone who…", tone: "Day 1", note: "Orientation, not label." },
      { en: "My sense is that…", tone: "Day 2", note: "Calibrated opinion." },
      { en: "There’s some truth to that, although…", tone: "Day 3", note: "Generous disagreement." },
      { en: "It’s not so much X as Y.", tone: "Day 4", note: "Precision structure." },
      { en: "That’s when it dawned on me…", tone: "Day 5", note: "Turning point." },
      { en: "What made you…?", tone: "Day 6", note: "Curious question." }
    ],
    tip: "Consistency over perfection. You showed up for a week — that is the hard part."
  },
  vocab: [],
  recall: [
    { q: "Introduce yourself in one sentence using “drawn to”.", a: "e.g. “I’ve always been drawn to places where people disagree openly.”" },
    { q: "What’s the difference between a preference, an opinion and a conviction?", a: "Preference: personal choice. Opinion: debatable view. Conviction: deep principle." },
    { q: "Who really wrote the famous “defend to the death” line about Voltaire?", a: "Evelyn Beatrice Hall, in 1906." },
    { q: "What is Socratic questioning?", a: "Exploring an idea through questions until its assumptions and weaknesses become visible." },
    { q: "Replace “a big difference” precisely.", a: "a significant difference" },
    { q: "Vonnegut’s “Man in Hole” story shape?", a: "Someone gets into trouble, then gets out of it — ending better off." },
    { q: "Loewenstein’s theory of curiosity?", a: "Information-gap theory: we’re curious when we notice a gap between what we know and want to know." },
    { q: "What does “concede” mean in an argument?", a: "To admit a point is true." }
  ],
  speak: {
    prompt: "Week 1 challenge: Tell a short story about a time you changed your mind about something. Include a calibrated opinion and one precise word you learned this week.", seconds: 120,
    structure: ["Situation (one sentence)", "What you used to believe", "The turning point", "What you believe now — calibrated", "Meaning"]
  },
  weekly: true,
  reflect: "What can you say now that you couldn’t say last week?"
};
})();
