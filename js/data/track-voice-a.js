/* The Senior Voice — lessons 1–12, with Passport cards. */
(function () {
const V = TAW.V;
function card(id, name, cat, period, origin, why, facts, idea, related, talk) {
  TAW.cards[id] = { id, name, cat, period, origin, why, facts, idea, related, talk };
}
function T(key, o) { TAW.trackLessons[key] = Object.assign({ track: "voice", cats: ["communication"], skills: ["articulation", "conversation", "thinking"], difficulty: "Advanced", minutes: 30 }, o); }

/* ── Cards ── */
card("elevator-pitch", "The elevator pitch", "business", "20th c.–", "Business culture",
  "A short, persuasive summary of who you are, an idea or a project — deliverable in the time of an elevator ride.",
  ["Usually 30–60 seconds; several competing stories claim to be its origin.", "Strong pitches lead with the problem or value, not the job title.", "Senior people use pitches constantly — for themselves, projects and decisions, often in unplanned “corridor moments”."],
  "If you can’t say it in 30 seconds, you haven’t finished thinking about it.", ["minto", "Storytelling"],
  ["Let me give you the thirty-second version.", "The pitch isn’t a summary of your CV — it’s the problem you solve."]);
card("minto", "Barbara Minto & the Pyramid Principle", "business", "1960s–", "McKinsey, USA / UK",
  "A method for structuring communication top-down: lead with the answer, then the supporting arguments, then the evidence.",
  ["Minto was among the first women McKinsey hired as a consultant (1963).", "Her method became The Pyramid Principle, a classic text on business writing and thinking.", "Its spoken cousin is BLUF — “bottom line up front” — from military communication."],
  "Start with the answer. Then justify it.", ["elevator-pitch", "amazon-memo", "Structure"],
  ["Let me start with the bottom line.", "That’s the Minto approach — the answer first, then the reasoning."]);
card("social-styles", "Social styles: driver, expressive, amiable, analytical", "business", "1981", "David Merrill & Roger Reid, USA",
  "A popular model describing communication preferences along two axes — assertiveness and responsiveness.",
  ["Merrill and Reid described four styles: Driver (direct, results), Expressive (big picture, enthusiasm), Amiable (relationships, harmony), Analytical (data, accuracy).", "It’s a practical heuristic, not a validated personality science — people shift style by context.", "Popular personality tools like MBTI are widely used in companies but criticised by psychologists for weak reliability."],
  "Adapt your message to how others prefer to receive it — without becoming someone else.", ["culture-map", "Communication"],
  ["She’s very much a driver — give her the conclusion first.", "These models are useful lenses, not scientific boxes."]);
card("culture-map", "Erin Meyer, The Culture Map", "cultures", "2014", "INSEAD, France",
  "A practical framework for how cultures differ in communicating, giving feedback, persuading, leading, deciding, trusting, disagreeing and scheduling.",
  ["Meyer describes eight scales, building on Edward T. Hall’s low- and high-context communication.", "Positions are relative: a culture can seem direct to one team and indirect to another.", "Feedback and communication don’t always align: some explicit communicators soften negative feedback, and some implicit ones are blunt with it."],
  "Culture is relative: it’s not where you are, it’s where you are compared with others.", ["hall", "social-styles"],
  ["On Meyer’s scale, our two offices are at opposite ends for feedback.", "It’s not that they’re rude — they’re just more direct than we are."]);
card("executive-presence", "Executive presence", "business", "2014", "Sylvia Ann Hewlett, USA",
  "The combination of qualities that make people see someone as a leader — and a concept worth examining critically.",
  ["In Hewlett’s research, executive presence rested on gravitas, communication and appearance — with gravitas ranked most important by senior leaders.", "Gravitas included confidence, decisiveness, integrity and composure under pressure.", "Critics note that “presence” can encode narrow, often male and Western, norms — inclusive leaders broaden the definition."],
  "Presence is less about performance than about composure and clarity.", ["reappraisal", "social-styles"],
  ["What people call presence is mostly composure and clarity under pressure.", "We should be careful that “presence” doesn’t just mean “sounds like the people already in charge”."]);
card("amazon-memo", "Amazon’s six-page memo & “disagree and commit”", "business", "2004–2016", "Amazon, USA",
  "A management practice replacing slide decks with written narratives — and a principle for moving forward despite disagreement.",
  ["In 2004 Jeff Bezos told senior teams to replace PowerPoint presentations with narrative memos of up to six pages.", "Meetings often begin with everyone reading the memo in silence.", "“Disagree and commit” — voicing disagreement, then fully supporting the decision — featured in Bezos’s 2016 shareholder letter; the phrase is also associated with Intel."],
  "Writing in full sentences forces clearer thinking than bullet points.", ["minto", "storytelling-data"],
  ["I’d like to write this up as a narrative rather than slides.", "I disagree, but I’ll commit — let’s make it work."]);
card("radical-candor", "Radical Candor & the SBI model", "business", "2017", "Kim Scott; Center for Creative Leadership",
  "Two tools for feedback: care personally while challenging directly, and describe Situation, Behaviour and Impact.",
  ["Kim Scott (formerly at Google and Apple) mapped feedback on two axes: caring personally and challenging directly.", "Her quadrants: Radical Candor, Ruinous Empathy, Obnoxious Aggression and Manipulative Insincerity.", "The Center for Creative Leadership’s SBI model structures feedback as Situation → Behaviour → Impact."],
  "Clear is kind. Vague is unkind.", ["difficult-conversations", "culture-map"],
  ["I care about your success, so I want to be direct about this.", "In the meeting yesterday (S), you interrupted the client twice (B), and they stopped sharing information (I)."]);
card("mendelow", "Stakeholder mapping (power–interest grid)", "business", "1991", "Aubrey Mendelow",
  "A simple tool for deciding how to engage stakeholders according to their power and their interest.",
  ["High power, high interest: manage closely. High power, low interest: keep satisfied.", "Low power, high interest: keep informed. Low power, low interest: monitor.", "Senior roles depend on managing “up” and “across” as much as “down”."],
  "Not everyone needs the same message — but everyone needs the right one.", ["social-styles", "kotter"],
  ["She’s high power, low interest — let’s keep her satisfied with a short monthly update.", "Before the launch, let’s map the stakeholders."]);
card("storytelling-data", "Storytelling with data", "business", "2015", "Cole Nussbaumer Knaflic, USA",
  "Turning numbers into a clear message: context, the right chart, decluttering, and a story that leads to a decision.",
  ["Knaflic developed her approach on Google’s People Analytics team before writing Storytelling with Data (2015).", "Core advice: know your audience and the action you want; remove clutter; use colour only to highlight.", "A chart should answer one question — “so what?”."],
  "Data doesn’t speak for itself. You have to give it a voice.", ["minto", "ab-testing"],
  ["The headline of this chart is: conversion dropped after the redesign.", "So what does this mean for us? Three things."]);
card("difficult-conversations", "Difficult Conversations", "business", "1999", "Stone, Patton & Heen, Harvard Negotiation Project",
  "A framework showing that every hard conversation is really three conversations at once.",
  ["The “What happened?” conversation — facts, intentions, blame.", "The feelings conversation — emotions that shape everything, spoken or not.", "The identity conversation — what this situation says about who we are (competent? good? worthy?)."],
  "Move from blame to contribution: not “whose fault?” but “how did we each contribute?”", ["radical-candor", "rogers"],
  ["I think we’re having two conversations — one about the deadline and one about trust.", "Instead of blame, can we map how we each contributed?"]);
card("llm", "Large language models (LLMs)", "science", "2017–present", "Global AI research",
  "AI systems trained on vast amounts of text to predict the next piece of text — the technology behind modern AI assistants.",
  ["The Transformer architecture, introduced by Google researchers in “Attention Is All You Need” (2017), underpins today’s LLMs.", "Models are pre-trained to predict the next token, then refined with human feedback and other techniques to be helpful and safe.", "ChatGPT’s launch in November 2022 reportedly reached 100 million users in about two months, triggering mass adoption."],
  "Fluent is not the same as factual.", ["turing", "ai-agents", "jagged-frontier"],
  ["Essentially, it predicts the next word — at enormous scale.", "It can be fluent and still wrong, so we need checks."]);
card("ai-agents", "AI agents & retrieval (RAG)", "science", "2020–present", "AI industry",
  "Two ideas reshaping enterprise AI: grounding models in company data (RAG) and letting them use tools to complete tasks (agents).",
  ["Retrieval-augmented generation (RAG), described by Lewis and colleagues in 2020, has a model look up relevant documents before answering.", "An agent combines a model with tools (search, code, APIs) and a loop: plan, act, observe, repeat.", "Agents raise new questions about permissions, oversight and accountability."],
  "A chatbot answers. An agent acts — so it needs boundaries.", ["llm", "eu-ai-act"],
  ["We’d use RAG so the assistant answers from our own policies, not the internet.", "Before we deploy an agent, what is it allowed to do without approval?"]);
})();
(function () {
const V = TAW.V;
function T(key, o) { TAW.trackLessons[key] = Object.assign({ track: "voice", cats: ["communication"], skills: ["articulation", "conversation", "thinking"], difficulty: "Advanced", minutes: 30 }, o); }

T("v1", { n: 1, module: "Presence & style", title: "Your elevator pitch",
  why: "“So, what do you do?” — from a CEO in a lift, an investor at a dinner, a new colleague. In senior roles, your 30-second answer shapes how people see your value. It should be ready, natural and memorable.",
  learn: {
    body: [
      "A strong professional pitch has four parts: <strong>who you help</strong>, <strong>the problem you solve</strong>, <strong>proof</strong> (a result, a number, a story) and, when appropriate, <strong>a bridge or ask</strong>. “I lead e-commerce operations for a retail group. Basically, I make sure that when someone clicks ‘buy’, everything behind that click works — stock, payments, delivery. Last year we cut delivery times by a third. I’m now exploring how AI agents could handle the routine parts.”",
      "Notice what it avoids: the job title as the first and only fact, jargon (“omnichannel synergies”), and modesty that hides results. Senior communicators state results plainly: “We reduced costs by 18%” — not “We tried to improve some processes.”",
      "Prepare three lengths: <strong>10 seconds</strong> (one sentence), <strong>30 seconds</strong> (the four parts) and <strong>2 minutes</strong> (with a story). Then adapt to the listener: a CFO wants numbers; a designer wants the customer; a stranger wants something human.",
      "Finally, end with an opening, not a full stop: a question back (“What brings you here?”) or a bridge (“That’s why I’d love to hear how your team handles returns.”)."
    ],
    phrases: [
      { en: "In a nutshell, I help… (to)…", tone: "Clear", note: "Frames your value around others." },
      { en: "The problem I solve is…", tone: "Confident", note: "Moves from title to value." },
      { en: "To give you a sense of scale, …", tone: "Credible", note: "Introduces a number naturally." },
      { en: "What I’m most excited about right now is…", tone: "Forward-looking", note: "Shows energy and direction." },
      { en: "But enough about me — what brings you here?", tone: "Gracious", note: "Turns the pitch into a conversation." }
    ],
    tip: "Not your title. Your value, your proof, your direction."
  },
  vocab: [
    V("value proposition", "VAL-yoo prop-uh-ZISH-un", "noun", "A clear statement of the benefit you, a product or a company offers.", "Core business vocabulary — and a good way to think about your own pitch.", ["offer", "selling point", "benefit"], "A “benefit” is any advantage. A “selling point” is a feature that persuades. A “value proposition” is the overall promise of value to a specific audience.", "Our value proposition is simple: same-day delivery at no extra cost.", "— What makes your team different?\n— Our value proposition is speed — we test ideas in weeks, not months.", "Write your personal value proposition in one sentence."),
    V("track record", "TRAK rek-ord", "noun", "The past achievements or performance of a person or organisation.", "Evidence of credibility — “a proven track record”.", ["history", "record", "experience"], "“Experience” is time spent doing something. “History” is general. “Track record” specifically means results that show reliability.", "She has a strong track record of turning around underperforming teams.", "— Why should we trust this vendor?\n— They have a solid track record with retailers our size.", "Describe your track record in one sentence with a result."),
    V("concise", "kun-SYCE", "adjective", "Giving a lot of information clearly in few words.", "A senior virtue. Noun: concision.", ["brief", "succinct", "to the point"], "“Brief” is about length only. “Succinct” is close to concise but slightly more formal. “To the point” is conversational. “Concise” means short and clear without losing substance.", "Executives appreciate concise updates.", "— Can you give me the concise version?\n— Sure: we’re on track, slightly over budget, and need one decision from you.", "Rewrite a long sentence of yours concisely."),
    V("leverage", "LEV-er-ij (UK: LEE-ver-ij)", "verb / noun", "To use something to maximum advantage.", "Common in corporate English — and overused. Use it when there is a real multiplier, otherwise prefer “use”.", ["use", "exploit", "capitalise on"], "“Use” is plain and often best. “Capitalise on” means take advantage of an opportunity. “Exploit” can sound negative. “Leverage” implies gaining more from something than its size suggests.", "We can leverage our customer data to personalise recommendations.", "— How will we grow without more budget?\n— By leveraging the partnerships we already have.", "Write one sentence where “leverage” is justified — and one where “use” is better.")
  ],
  culture: "elevator-pitch",
  cultureNote: "The best pitches sound unrehearsed precisely because they were rehearsed. Prepare the structure, not a script.",
  sayBetter: {
    basic: "I am Head of Operations in an e-commerce company.",
    levels: [
      ["Level 1", "I’m Head of Operations at an online retailer.", "A title — conversation over."],
      ["Level 2", "I run operations for an online retailer — logistics, payments, customer service.", "What you cover."],
      ["Level 3", "I make sure that when someone clicks ‘buy’, everything behind it works — stock, payments and delivery.", "The problem you solve, vividly."],
      ["Level 4", "I make sure that when someone clicks ‘buy’, everything behind that click works. Last year we cut delivery times by a third, and now I’m exploring how automation can take over the routine parts so the team can focus on customers. What about you?", "Value + proof + direction + a question back."]
    ],
    prompt: "Write your own Level 4 pitch."
  },
  exercise: {
    title: "Three lengths",
    instructions: "Write a 10-second, 30-second and 2-minute version of a pitch. Compare with the model.",
    items: [
      { q: "10 seconds (one sentence)", a: "I help online retailers deliver faster and cheaper by fixing what happens after customers click ‘buy’." },
      { q: "30 seconds (value, problem, proof, direction)", a: "I lead operations for an online retailer. Basically, I make sure the promise on the website matches reality — stock, payments, delivery. Last year we cut delivery times by a third. Now I’m working on automating routine processes so the team can focus on difficult customer problems." },
      { q: "Adapt for a CFO", a: "I run operations — last year we reduced cost per order by 12% while cutting delivery times by a third. Next year, automation should save another 8–10%." }
    ]
  },
  think: { q: "What do you want people to remember about you after a 30-second conversation?", angles: ["A result? A quality? A direction?", "How would your best colleague describe your value?", "What do you undersell?"] },
  express: { prompt: "Write your 30-second professional pitch for your current role: who you help, the problem you solve, one proof point, and a bridge or question." },
  speak: { prompt: "Deliver your 30-second elevator pitch. Then the 10-second version.", seconds: 45, structure: ["Who you help", "The problem you solve", "One proof point", "Your current direction", "A question back"] },
  recall: [
    { q: "The four parts of a professional pitch?", a: "Who you help, the problem you solve, proof, and a bridge or ask." },
    { q: "Day 15: Duties vs reality — which sounds like a person?", a: "Reality: the real problem and the day-to-day, not a list of responsibilities." }
  ],
  reflect: "Do you undersell or oversell yourself in English? Where does that come from?",
  deep: { title: "Record three versions", body: "Record your pitch for three audiences: a CEO, a potential hire, and a stranger at a dinner. Listen back.", prompt: "What changed between them? Which felt most like you?" }
});

T("v2", { n: 2, module: "Presence & style", title: "Lead with the answer",
  why: "The most common difference between junior and senior communication is order. Juniors tell the story chronologically and arrive at the conclusion. Seniors start with the conclusion. Executives decide in the first 30 seconds whether to keep listening.",
  learn: {
    body: [
      "Barbara Minto, one of the first women hired as a consultant at McKinsey, developed the <strong>Pyramid Principle</strong>: start with the <strong>answer</strong> (your main point or recommendation), support it with <strong>three or so key arguments</strong>, and support each argument with <strong>evidence</strong>. The military version is <strong>BLUF — bottom line up front</strong>.",
      "Compare. Chronological: “So last week we noticed returns increasing, and we looked at the data, and we spoke to the warehouse, and it seems…” Pyramid: “Returns are up 15% because of one sizing error on our best-selling jacket. I recommend we fix the size guide this week. Here’s why…”",
      "A useful opening formula is <strong>SCR</strong>: Situation (shared context), Complication (what changed), Resolution (your answer). “We’re on track for Q4 (S). But a supplier just went bankrupt (C). I recommend switching to our backup supplier, at 4% higher cost (R).”",
      "The pyramid also helps when you’re interrupted or short of time: if the CEO stops you after one sentence, they still have the answer."
    ],
    phrases: [
      { en: "The bottom line is…", tone: "Direct", note: "BLUF in conversation." },
      { en: "My recommendation is…, for three reasons.", tone: "Structured", note: "Answer + signposted arguments." },
      { en: "In short, …", tone: "Concise", note: "Introduces the summary first." },
      { en: "Happy to go into the detail, but the headline is…", tone: "Senior, considerate", note: "Offers depth without forcing it." },
      { en: "What I need from you is…", tone: "Clear ask", note: "Ends with the decision required." }
    ],
    tip: "Answer first. Then justify. Then stop."
  },
  vocab: [
    V("recommendation", "rek-uh-men-DAY-shun", "noun", "A suggestion about the best course of action.", "Senior people are expected to arrive with one — not just options.", ["proposal", "suggestion", "advice"], "A “suggestion” is tentative. A “proposal” is a formal plan. “Advice” is general guidance. A “recommendation” is your professional view of the best option.", "My recommendation is to delay the launch by two weeks.", "— So what should we do?\n— My recommendation is option B, for three reasons.", "Write a recommendation for a real decision at work."),
    V("headline", "HED-lyne", "noun", "The main point, stated briefly — like a newspaper title.", "In meetings: “the headline is…” — very natural senior English.", ["main point", "gist", "key message"], "“Gist” is the general meaning. “Main point” is plain. “Key message” is corporate. “Headline” suggests a punchy summary that grabs attention.", "The headline is that we’re profitable for the first time.", "— What’s the headline from the survey?\n— Customers love the product but hate the delivery times.", "State the headline of your week in one sentence."),
    V("signpost", "SYNE-pohst", "verb / noun", "To tell listeners where your talk is going; a phrase that does this.", "“I’ll cover three things” is signposting. It makes complex messages easy to follow.", ["outline", "flag", "preview"], "“Outline” describes the structure. “Preview” announces what’s coming. “Flag” draws attention to a point. “Signpost” guides the listener through.", "Good presenters signpost: “First…, second…, finally…”", "— Your talk was so easy to follow.\n— I signposted a lot — three points, announced at the start.", "Write a signposting sentence for a three-point update."),
    V("escalate", "ES-kuh-layt", "verb", "To raise an issue to a higher level of authority; also to become more serious.", "Essential in corporate life. “Escalate to” the VP; a conflict can “escalate”.", ["raise", "refer", "intensify"], "“Raise” is neutral. “Refer” passes it on. “Intensify” means become stronger. “Escalate” means move up the hierarchy — or grow more serious.", "If the supplier doesn’t respond by Friday, I’ll escalate it.", "— Should we involve the director?\n— Not yet — let’s try once more before we escalate.", "Write a sentence about when to escalate a problem.")
  ],
  culture: "minto",
  cultureNote: "Minto’s method spread from consulting to most large organisations. Mastering it in English signals seniority instantly — regardless of accent.",
  sayBetter: {
    basic: "So, we had some problems with the supplier last month, and then we talked with them, and maybe we need to change supplier.",
    levels: [
      ["Level 1", "We had problems with the supplier, so we might need to change.", "Shorter — still story-first."],
      ["Level 2", "I think we should change supplier because of repeated delays.", "Answer first."],
      ["Level 3", "My recommendation is to switch suppliers. They’ve missed three deadlines, quality has dropped, and the backup is ready.", "Answer + three arguments."],
      ["Level 4", "The bottom line: I recommend we switch suppliers by the end of the month. Three reasons — they’ve missed three deadlines, defect rates have doubled, and our backup can start immediately at only 4% higher cost. What I need from you today is approval to give notice.", "BLUF + signposted arguments + evidence + a clear ask."]
    ],
    prompt: "Turn a real update of yours into a Level 4 pyramid."
  },
  exercise: {
    title: "Flip the pyramid",
    instructions: "Rewrite each chronological update with the answer first.",
    items: [
      { q: "“We launched the campaign on Monday, traffic went up, but then the site crashed on Tuesday, IT fixed it Wednesday, and overall sales were down.”", a: "“Sales were down 8% last week because the site crashed for a day during the campaign. IT has fixed it, and I recommend we rerun the campaign next week.”" },
      { q: "“I looked at three AI tools, tested them with the team, compared prices…”", a: "“I recommend Tool B. It was the most accurate in our tests, integrates with our CRM, and costs 30% less than the alternative.”" },
      { q: "“The customer called, then emailed, then complained on social media…”", a: "“We have a reputational risk with a key customer. I propose a call from you today; here’s the background.”" }
    ]
  },
  think: { q: "Why do so many people tell stories chronologically even when they know the conclusion?", angles: ["Fear of seeming abrupt?", "Wanting to show effort?", "Cultural norms about directness?"] },
  express: { prompt: "Write a 5-sentence update about a real project using SCR: Situation, Complication, Resolution — and a clear ask." },
  speak: { prompt: "Give a 60-second project update to your CEO using BLUF: answer, three reasons, ask.", seconds: 60, structure: ["Bottom line", "Reason 1, 2, 3 with evidence", "What you need"] },
  recall: [
    { q: "Senior Voice 1: The four parts of an elevator pitch?", a: "Who you help, problem solved, proof, bridge/ask." },
    { q: "What does SCR stand for?", a: "Situation, Complication, Resolution." }
  ],
  reflect: "In your culture and company, is leading with the answer seen as confident — or rude?",
  deep: { title: "Read: The Pyramid Principle — Chapter 1", body: "Minto’s book is dense but the first chapter explains the logic. Alternatively, find a good summary of the SCR framework.", prompt: "Rewrite your last important email using the pyramid. Compare the two." }
});

T("v3", { n: 3, module: "Presence & style", title: "Communication styles",
  why: "The same message lands differently with different people. A data-driven CFO, an enthusiastic marketing director and a cautious HR partner each need something different. Senior communicators adapt — without losing themselves.",
  learn: {
    body: [
      "In 1981 David Merrill and Roger Reid described four <strong>social styles</strong> along two axes — how assertive and how emotionally expressive someone is. <strong>Drivers</strong> want results, speed and the bottom line. <strong>Expressives</strong> want vision, energy and the big picture. <strong>Amiables</strong> want relationships, harmony and reassurance. <strong>Analyticals</strong> want data, accuracy and time to think.",
      "Use it as a lens, not a label: people shift with context, and such models are practical heuristics rather than validated personality science. (Popular tools like MBTI are widely used in companies but criticised by psychologists for weak reliability.)",
      "The skill is <strong>style-flexing</strong>. To a Driver: “Bottom line: we need two more people to hit the deadline.” To an Analytical: “Here’s the workload data; at current capacity we’ll miss the deadline by three weeks.” To an Amiable: “The team is stretched; I’m worried about burnout.” To an Expressive: “With two more people, we can launch before our competitors.” Same request, four doors.",
      "Channel matters too: urgent and emotional → call or meet; complex → write; decisions → document. In hybrid work, a well-written message is a form of leadership."
    ],
    phrases: [
      { en: "Let me give you the short version.", tone: "For Drivers", note: "Respects their time." },
      { en: "Imagine where this could take us.", tone: "For Expressives", note: "Opens the big picture." },
      { en: "How is the team feeling about this?", tone: "For Amiables", note: "Shows care for people." },
      { en: "I’ll send you the data so you can review it properly.", tone: "For Analyticals", note: "Gives time and evidence." },
      { en: "Would it help if I…?", tone: "Flexible", note: "Asks what format works for them." }
    ],
    tip: "Same message, different doors."
  },
  vocab: [
    V("adapt", "uh-DAPT", "verb", "To change your behaviour or message to suit a new situation or person.", "Positive in leadership — adapting is not being fake.", ["adjust", "tailor", "modify"], "“Adjust” is a small change. “Modify” is technical. “Tailor” means customise for a specific person (like a tailored suit). “Adapt” is broader — changing to fit.", "I adapt my updates depending on who’s in the room.", "— Why did you present differently to the board?\n— I adapted it — they care about risk, not features.", "How do you adapt your style for your manager?"),
    V("assertive", "uh-SUR-tiv", "adjective", "Confident and direct in expressing your views, without being aggressive.", "The sweet spot between passive and aggressive — especially valuable for women in senior roles.", ["confident", "firm", "forceful"], "“Confident” is about self-belief. “Firm” means not easily moved. “Forceful” can be too strong. “Assertive” means clearly stating needs and views while respecting others.", "Being assertive in negotiations doesn’t mean being unpleasant.", "— Should I accept their terms?\n— Be assertive — state what you need and why.", "Write an assertive (not aggressive) sentence asking for something."),
    V("tailor", "TAY-ler", "verb", "To make or adapt something for a particular person or purpose.", "Elegant and precise: “a tailored message”, “tailor your pitch”.", ["customise", "adapt", "personalise"], "“Customise” is often for products. “Personalise” adds individual touches. “Tailor” implies careful fitting to the audience’s needs.", "Tailor the presentation to the audience: the board wants risk, the team wants clarity.", "— Can I reuse the same deck?\n— Yes, but tailor the opening for each client.", "Write how you’d tailor one message for two audiences."),
    V("come across as", "kum uh-KROSS az", "phrasal verb", "To seem to have a particular quality, as perceived by others.", "Crucial for self-awareness: intention vs. perception.", ["seem", "appear", "give the impression"], "“Seem” and “appear” are neutral. “Give the impression” is similar but longer. “Come across as” focuses on how others perceive you — often different from intention.", "I didn’t mean to come across as impatient.", "— How did I sound in the meeting?\n— Honestly, you came across as a bit defensive.", "How do you want to come across in meetings?")
  ],
  culture: "social-styles",
  cultureNote: "Treat styles as hypotheses about people, tested by listening — not boxes to put them in. The goal is connection, not classification.",
  sayBetter: {
    basic: "We need more people because there is too much work.",
    levels: [
      ["Level 1", "We need more people — the workload is too high.", "One version for everyone."],
      ["Level 2", "To meet the deadline, we need two more people.", "Driver-friendly."],
      ["Level 3", "At current capacity we’ll miss the deadline by three weeks; two more people would close the gap.", "Analytical — data first."],
      ["Level 4", "Bottom line: to launch on time we need two more people. The data shows we’re three weeks short, and I’m also seeing early signs of burnout in the team — I’d rather solve this now than lose good people later.", "One message that speaks to Driver, Analytical and Amiable at once."]
    ],
    prompt: "Write a Level 4 request that works for more than one style."
  },
  exercise: {
    title: "Flex it",
    instructions: "Rewrite the message “We should invest in an AI customer-service tool” for each style.",
    items: [
      { q: "For a Driver (CEO)", a: "“Bottom line: an AI service tool would cut response times by half and save about 15% in costs within a year.”" },
      { q: "For an Analytical (CFO)", a: "“I’ve modelled three scenarios; the conservative one pays back in 14 months. I’ll share the assumptions.”" },
      { q: "For an Amiable (HR Director)", a: "“It would take repetitive questions off the team’s plate, so they can focus on complex cases — I’d involve them in designing it.”" },
      { q: "For an Expressive (CMO)", a: "“Imagine customers getting instant, personal answers at 2 a.m. — it could become part of our brand.”" }
    ]
  },
  think: { q: "What is your natural style — and which style do you find hardest to communicate with?", angles: ["What frustrates you about the opposite style?", "What could you learn from it?", "Does your style change in English?"] },
  express: { prompt: "Identify the style of three key stakeholders at work. For each, write how you’ll tailor your next update." },
  speak: { prompt: "Deliver the same request — a bigger budget for your team — in two different styles, 45 seconds each.", seconds: 90, structure: ["Version for a Driver", "Version for an Analytical or Amiable"] },
  recall: [
    { q: "Senior Voice 2: What does BLUF mean?", a: "Bottom line up front — lead with the answer." },
    { q: "The four social styles?", a: "Driver, Expressive, Amiable, Analytical." }
  ],
  reflect: "How do you think you come across in meetings? Ask one trusted colleague this week.",
  deep: { title: "Observe a meeting", body: "In your next meeting, silently guess each person’s preferred style from what they ask about (results, people, data, vision).", prompt: "Write what you noticed and how you’d adapt next time." }
});

T("v4", { n: 4, module: "Presence & style", title: "Communicating across cultures",
  why: "Senior roles are global: regional teams, international suppliers, overseas leadership. Many conflicts that look personal are cultural. Knowing the differences — and the vocabulary to discuss them — prevents expensive misunderstandings.",
  learn: {
    body: [
      "Erin Meyer, a professor at INSEAD, mapped cultural differences on eight scales in <em>The Culture Map</em> (2014): communicating (low- vs high-context), evaluating (direct vs indirect negative feedback), persuading (principles-first vs applications-first), leading (egalitarian vs hierarchical), deciding (consensual vs top-down), trusting (task-based vs relationship-based), disagreeing (confrontational vs avoiding) and scheduling (linear vs flexible time).",
      "The key insight is <strong>relativity</strong>: what matters is not where a culture sits on a scale, but where it sits compared with yours. A Brazilian manager may find a German colleague very direct, while a Dutch colleague finds the same German quite diplomatic.",
      "Some combinations surprise. In Meyer’s research, people in some cultures communicate explicitly but soften negative feedback, while others communicate implicitly yet give blunt criticism. “Downgraders” (“maybe consider…”) and “upgraders” (“absolutely must…”) mean very different things depending on who’s speaking.",
      "Practical moves: make implicit expectations explicit (“When I say ‘let’s discuss’, I mean I disagree”); ask about preferences; and assume good intent before assuming rudeness."
    ],
    phrases: [
      { en: "Just to make sure we’re aligned…", tone: "Clarifying", note: "Makes implicit agreements explicit." },
      { en: "Where I come from, that would usually mean…", tone: "Bridging", note: "Names a cultural difference without judging." },
      { en: "How would you prefer to receive feedback?", tone: "Respectful", note: "Asks rather than assumes." },
      { en: "I may be reading too much into it, but…", tone: "Careful", note: "Raises a possible misunderstanding gently." },
      { en: "Let me be more direct than I normally would.", tone: "Signalling", note: "Warns that you’re adjusting your style." }
    ],
    tip: "It’s not rude. It’s relative."
  },
  vocab: [
    V("aligned", "uh-LYND", "adjective", "In agreement; having the same goals or understanding.", "Extremely common corporate word. “Are we aligned?” = do we agree?", ["in agreement", "on the same page", "coordinated"], "“On the same page” is informal. “In agreement” is plain. “Coordinated” is about actions. “Aligned” means sharing goals or understanding — heavily used in business.", "Before the client meeting, let’s make sure we’re aligned on pricing.", "— Is the regional team on board?\n— Not fully aligned yet — they want a longer timeline.", "Write a sentence checking alignment before a decision."),
    V("hierarchical", "hy-uh-RAR-kih-kul", "adjective", "Organised in levels of authority, with clear differences in rank.", "Neutral in Meyer’s framework: hierarchical cultures aren’t worse, just different.", ["top-down", "rank-based", "vertical"], "“Top-down” describes decision flow. “Vertical” describes structure. “Hierarchical” describes a culture or organisation where rank matters. Opposite: egalitarian.", "In more hierarchical cultures, juniors may not contradict a manager in public.", "— Why didn’t anyone object in the meeting?\n— It’s a hierarchical culture — they’ll tell you privately.", "Is your company hierarchical or egalitarian? Give an example."),
    V("nuance (in feedback)", "NYOO-ahns", "noun", "A subtle difference in meaning, tone or expression.", "In cross-cultural communication, nuance is everything — “quite good” can be praise or criticism.", ["subtlety", "shade of meaning", "undertone"], "“Subtlety” is general. “Undertone” is a hidden feeling. “Shade of meaning” is a small difference. “Nuance” covers all of these.", "In British English, “quite good” often carries a nuance of disappointment.", "— She said my report was “interesting”.\n— Hmm — that word can have a nuance. Ask her directly.", "Find a phrase in English whose nuance confused you."),
    V("misunderstanding", "mis-un-der-STAN-ding", "noun", "A failure to understand something correctly; a minor disagreement.", "Gentle way to name a conflict: “I think there’s been a misunderstanding.”", ["confusion", "miscommunication", "mix-up"], "“Mix-up” is informal and practical. “Confusion” is general. “Miscommunication” focuses on the message. “Misunderstanding” suggests no one is to blame.", "Most cross-cultural conflicts start as misunderstandings.", "— He thinks I insulted him!\n— I’m sure it was a misunderstanding. Let’s clarify.", "Describe a misunderstanding you’ve had at work.")
  ],
  culture: "culture-map",
  cultureNote: "Meyer builds on Edward T. Hall (in your Passport). Knowing both lets you talk about culture with nuance rather than stereotypes.",
  sayBetter: {
    basic: "The German team is rude. They always say our work is bad.",
    levels: [
      ["Level 1", "The German team is very direct.", "Neutral description."],
      ["Level 2", "The German team gives more direct feedback than we’re used to.", "Relative — the key insight."],
      ["Level 3", "Their feedback feels blunt to us, but it’s probably normal for them — and they may find us vague.", "Two-sided."],
      ["Level 4", "I don’t think they mean to be harsh — on feedback, they’re simply more direct than we are, and we probably sound vague to them. Maybe we should agree explicitly on how we give feedback across teams.", "Relativity + empathy + a practical proposal."]
    ],
    prompt: "Describe a cultural difference at work at Level 4."
  },
  exercise: {
    title: "Decode the message",
    instructions: "What might each message really mean — and how would you respond?",
    items: [
      { q: "A colleague from a high-context culture: “That’s an interesting idea; we could think about it more.”", a: "Possibly polite disagreement. Respond: “Thank you — what concerns would you want to address before we move forward?”" },
      { q: "A Dutch manager: “This section is wrong and needs rewriting.”", a: "Likely ordinary direct feedback, not anger. Respond: “Thanks for being clear — which parts specifically?”" },
      { q: "A British client: “Not bad at all.”", a: "Likely positive (understatement). Confirm: “Glad it works — anything you’d change?”" },
      { q: "A team in a hierarchical culture says nothing when you ask for objections.", a: "Silence may not mean agreement. Ask for written input, or speak to people one-to-one." }
    ]
  },
  think: { q: "Where would your own culture sit on Meyer’s scales — and how has that helped or hurt you in international settings?", angles: ["Feedback: direct or indirect?", "Time: linear or flexible?", "Trust: task or relationship?"] },
  express: { prompt: "Write a short message to a new international team proposing explicit norms for feedback, meetings and deadlines." },
  speak: { prompt: "Explain one cultural difference you’ve experienced at work — without stereotyping — and what you learned.", seconds: 90, structure: ["The situation", "The difference, described relatively", "The misunderstanding", "What you learned", "What you do now"] },
  recall: [
    { q: "Senior Voice 3: Tailor a message for an Analytical.", a: "Lead with data and give time to review." },
    { q: "Meyer’s key insight about cultural scales?", a: "Relativity — what matters is where cultures sit compared with each other." }
  ],
  reflect: "Have you ever judged someone as rude or cold when it might have been cultural?",
  deep: { title: "Read: Erin Meyer, “Navigating the Cultural Minefield” (HBR, 2014)", body: "A free-to-read summary of her model in Harvard Business Review.", prompt: "Map your team’s cultures on two of the scales and write one practical adjustment." }
});

T("v5", { n: 5, module: "Presence & style", title: "Executive presence",
  why: "As you rise, people judge not only what you say but how you hold the room. “Executive presence” is often given as feedback — vaguely. Today you learn what it means, how to build it, and how to question it.",
  learn: {
    body: [
      "Economist Sylvia Ann Hewlett, in <em>Executive Presence</em> (2014), surveyed senior leaders and found presence rested on three pillars: <strong>gravitas</strong> (how you act), <strong>communication</strong> (how you speak) and <strong>appearance</strong> (how you look) — with gravitas ranked by far the most important.",
      "Gravitas included confidence and composure under pressure, decisiveness, integrity, emotional intelligence and the ability to show teeth when needed. Communication included speaking skills, commanding a room, reading an audience and assertiveness.",
      "In language terms, presence sounds like: <strong>fewer words, more weight</strong>; statements instead of apologetic questions (“I recommend…” not “Sorry, maybe we could possibly…”); <strong>pauses</strong> (Learning Brain 7 and Day 20); owning silence; and calm acknowledgement of uncertainty (“I don’t have that number — I’ll send it by 3 p.m.”).",
      "Critique matters too. Presence has historically been modelled on a narrow type of leader. Women and people from other cultures are often told to “have more presence” when they simply express it differently. Good leaders build it in themselves — and widen the definition for others."
    ],
    phrases: [
      { en: "I recommend… / My view is…", tone: "Assured", note: "Replaces “Sorry, maybe…”." },
      { en: "Let me pause there — questions?", tone: "Controlled", note: "Owning the room and the silence." },
      { en: "I don’t have that figure, but I’ll get it to you by…", tone: "Composed", note: "Uncertainty without apology." },
      { en: "Let me finish this point, then I’d love your view.", tone: "Firm, polite", note: "Handles interruption calmly." },
      { en: "That’s a fair challenge.", tone: "Secure", note: "Shows you’re not threatened by pushback." }
    ],
    tip: "Fewer words. More weight."
  },
  vocab: [
    V("gravitas", "GRAV-ih-tahs", "noun", "Seriousness and dignity that make people respect you.", "From Latin. A respected quality, not about being solemn all the time.", ["dignity", "authority", "weight"], "“Authority” comes from position or expertise. “Dignity” is self-respect. “Weight” is influence. “Gravitas” is a presence that makes people take you seriously.", "She speaks with real gravitas — calm, brief, certain.", "— What feedback did you get?\n— That I need more gravitas in board meetings.", "Who do you know with gravitas — and what creates it?"),
    V("hedge", "HEJ", "verb", "To avoid committing to a clear statement; to protect against risk.", "Some hedging is nuance (Month 2). Too much sounds unsure — a common pattern for second-language speakers.", ["qualify", "equivocate", "sit on the fence"], "“Qualify” adds precise limits — good. “Equivocate” is deliberately ambiguous — negative. “Sit on the fence” is avoiding a side. “Hedge” can be either, depending on degree.", "Don’t hedge your recommendation — state it, then mention the risks.", "— Is the project on track?\n— Stop hedging — yes or no?", "Rewrite a hedged sentence of yours as a clear statement."),
    V("decisive", "di-SY-siv", "adjective", "Able to make decisions quickly and confidently.", "A core part of gravitas — paired with openness to new information.", ["resolute", "firm", "determined"], "“Resolute” emphasises firmness of purpose. “Determined” is about persistence. “Firm” means not easily changed. “Decisive” is about making choices clearly and promptly.", "Teams trust decisive leaders who explain their reasoning.", "— Should we wait for more data?\n— We have enough. Let’s be decisive.", "Describe a decisive moment in your career."),
    V("poised", "POYZD", "adjective", "Calm, elegant and self-controlled; also, ready to do something.", "Two meanings: “poised under pressure” and “poised to launch”.", ["composed", "graceful", "ready"], "“Composed” is calm. “Graceful” is elegant movement. “Ready” is preparation. “Poised” combines calm elegance with readiness.", "She remained poised when the investor attacked her numbers.", "— How’s the expansion?\n— We’re poised to open in two new markets.", "Use “poised” in both meanings.")
  ],
  culture: "executive-presence",
  cultureNote: "Hewlett’s research gives you vocabulary for vague feedback: if someone says “more presence”, you can ask, “Do you mean gravitas, communication, or appearance — and what specifically?”",
  sayBetter: {
    basic: "Sorry, I’m not sure, but maybe we could perhaps try a different approach, if that’s okay?",
    levels: [
      ["Level 1", "Maybe we could try a different approach.", "Fewer apologies."],
      ["Level 2", "I think we should try a different approach.", "A position."],
      ["Level 3", "I recommend a different approach — the current one isn’t moving the numbers.", "Recommendation + reason."],
      ["Level 4", "I’d recommend we change approach. We’ve run this for three months and conversion hasn’t moved. I have a proposal — and I’m open to challenge on it.", "Assured, evidence-based, open. That’s presence."]
    ],
    prompt: "Take one of your hedged sentences and climb it to Level 4."
  },
  exercise: {
    title: "Remove the undercutting",
    instructions: "Rewrite each sentence to keep the meaning but remove words that undermine your authority.",
    items: [
      { q: "“Sorry to bother you, I just wanted to quickly ask if maybe you had a moment?”", a: "“Do you have five minutes? I need your input on the pricing decision.”" },
      { q: "“This is probably a stupid question, but…”", a: "“I’d like to understand one thing better: …”" },
      { q: "“I’m not an expert, but I kind of feel we should maybe delay.”", a: "“My view is that we should delay — here’s why.”" },
      { q: "“Does that make sense?” (after every point)", a: "“Let me pause there — what questions do you have?”" }
    ]
  },
  think: { q: "What does executive presence look like for a woman, in your culture and industry? Should it look the same as for a man?", angles: ["Which signals of presence feel natural to you?", "Which feel like a costume?", "Who has presence in a way you’d like to emulate?"] },
  express: { prompt: "Write the opening 4–5 sentences you’d use in a senior meeting to present a recommendation — with presence." },
  speak: { prompt: "Present a recommendation to a board for 60 seconds. No apologies, no fillers, at least two deliberate pauses.", seconds: 60, structure: ["Recommendation", "Pause", "Two reasons with evidence", "Risk acknowledged calmly", "Clear ask"] },
  recall: [
    { q: "Senior Voice 4: What does “aligned” mean?", a: "In agreement / sharing goals or understanding." },
    { q: "Hewlett’s three pillars of executive presence?", a: "Gravitas, communication, appearance — gravitas most important." }
  ],
  reflect: "Which words or habits undercut your authority in English? Which will you drop first?",
  deep: { title: "Record and audit", body: "Record yourself presenting for two minutes. Count apologies, hedges and “does that make sense?”.", prompt: "Re-record without them. Write what changed in how you felt." }
});

T("v6", { n: 6, module: "Presence & style", title: "Meetings, writing and decisions",
  why: "Senior people spend much of their week in meetings and writing. Running a meeting well — and writing so that decisions get made — multiplies your impact more than almost any other skill.",
  learn: {
    body: [
      "A good meeting has a <strong>purpose</strong> (decide, align, generate ideas or inform — say which), the <strong>right people</strong>, and a clear <strong>outcome</strong>: decisions, owners and deadlines. If it’s only to inform, it might be an email.",
      "Some companies take writing further. In 2004, Jeff Bezos told Amazon’s senior team to replace PowerPoint with narrative memos of up to six pages. Meetings often start with everyone reading in silence. The logic: full sentences force clearer thinking than bullet points, and everyone starts with the same information.",
      "When a decision can’t please everyone, many leaders use “<strong>disagree and commit</strong>” — a phrase Bezos highlighted in his 2016 shareholder letter, and associated earlier with Intel. You voice disagreement openly; once the decision is made, you support it fully.",
      "Language for running meetings: open with purpose (“The goal today is to decide…”), manage time (“Let’s park that and come back to it”), include quieter voices (“Ana, you’ve worked with this supplier — what’s your view?”) and close with actions (“So, to confirm: Marco owns the contract, by Friday”)."
    ],
    phrases: [
      { en: "The goal of today’s meeting is to…", tone: "Purposeful", note: "Opens with clarity." },
      { en: "Let’s park that and come back to it.", tone: "Controlling time", note: "Defers off-topic points politely." },
      { en: "I’d love to hear from people who haven’t spoken yet.", tone: "Inclusive", note: "Brings in quieter voices." },
      { en: "So, to recap: …", tone: "Closing", note: "Summarises decisions." },
      { en: "I disagree, but I’ll commit.", tone: "Mature", note: "Supports a decision you argued against." }
    ],
    tip: "Every meeting should end with a decision, an owner and a date."
  },
  vocab: [
    V("agenda", "uh-JEN-duh", "noun", "A list of topics to be discussed at a meeting; also a hidden aim.", "“Hidden agenda” = a secret motive.", ["schedule", "plan", "programme"], "A “schedule” is about times. A “programme” is a set of events. An “agenda” is the list of items for discussion — or someone’s underlying aim.", "Please send the agenda the day before.", "— Why is she so keen on this project?\n— I suspect she has her own agenda.", "Write a three-item agenda for a real meeting."),
    V("action item", "AK-shun EYE-tum", "noun", "A task agreed in a meeting, with an owner and deadline.", "Business English staple.", ["next step", "task", "follow-up"], "A “task” is any job. A “next step” is the immediate action. A “follow-up” continues something. An “action item” is a recorded, assigned task from a meeting.", "We left with three action items and clear owners.", "— What are the action items?\n— Marco drafts the contract; I brief legal; we reconvene Friday.", "Write two action items with owners and deadlines."),
    V("stakeholder", "STAYK-hohl-der", "noun", "Anyone with an interest in or affected by a project or decision.", "Core management vocabulary (see v8).", ["party", "interested party", "participant"], "A “participant” takes part. An “interested party” has an interest. A “stakeholder” has something at stake — influence or impact.", "We need to consult all stakeholders before changing the returns policy.", "— Who needs to approve this?\n— Three stakeholders: finance, legal and the regional director.", "List the key stakeholders in one of your projects."),
    V("consensus", "kun-SEN-sus", "noun", "General agreement among a group.", "Note spelling (not concensus). Seeking consensus can be inclusive — or slow.", ["agreement", "unanimity", "accord"], "“Agreement” is general. “Unanimity” means everyone agrees completely. “Accord” is formal. “Consensus” means general agreement, not necessarily unanimous.", "We don’t need consensus — we need a decision and commitment.", "— Did everyone agree?\n— Broadly. There’s consensus, with two reservations.", "When is consensus useful, and when is it a trap?")
  ],
  culture: "amazon-memo",
  cultureNote: "You don’t have to work at Amazon to borrow the idea: a one-page narrative before a big meeting often saves an hour of confused discussion.",
  sayBetter: {
    basic: "OK, so let’s talk about the project and see what everyone thinks.",
    levels: [
      ["Level 1", "Let’s discuss the project.", "No purpose."],
      ["Level 2", "Today we need to decide on the project timeline.", "Purpose stated."],
      ["Level 3", "The goal today is to decide whether we launch in March or May. I’ll share the trade-offs, then I’d like everyone’s view.", "Purpose + process."],
      ["Level 4", "The goal of the next 30 minutes is one decision: launch in March or May. I’ll take five minutes on the trade-offs, then I want to hear from everyone — especially if you disagree. We’ll leave with a decision, an owner and a date.", "Purpose, time, process, inclusion and outcome — in four sentences."]
    ],
    prompt: "Write a Level 4 opening for your next meeting."
  },
  exercise: {
    title: "Run the meeting",
    instructions: "Write what you would say in each moment.",
    items: [
      { q: "Someone starts a long tangent about an unrelated system problem.", a: "“That’s important — let’s park it and set up a separate conversation. Back to the timeline decision.”" },
      { q: "One senior person dominates; a junior expert hasn’t spoken.", a: "“Thanks, Paulo. Julia, you’ve worked closely on this — what’s your view?”" },
      { q: "Time is almost up and no decision has been made.", a: "“We have five minutes. Let me propose a decision: May launch, with a review in March. Any objections we can’t live with?”" },
      { q: "Closing the meeting.", a: "“To recap: we launch in May; Marco owns the plan, due Friday; I’ll update the board on Monday.”" }
    ]
  },
  think: { q: "Which meetings in your week could be replaced by a well-written page — and why aren’t they?", angles: ["Do meetings feel more “visible” than writing?", "What decisions keep getting postponed?", "What does your meeting culture say about trust?"] },
  express: { prompt: "Write a one-page narrative (200–250 words) proposing a decision at work: context, problem, options, recommendation, risks, ask." },
  speak: { prompt: "Open a meeting (purpose, process, outcome) and then close it with a recap of decisions and action items.", seconds: 90, structure: ["Opening: purpose + time", "Process", "(imagine discussion)", "Recap: decision, owners, dates"] },
  recall: [
    { q: "Senior Voice 5: What did Hewlett rank most important in executive presence?", a: "Gravitas." },
    { q: "What does “disagree and commit” mean?", a: "Voice disagreement openly, then fully support the decision once made." }
  ],
  reflect: "What kind of meeting leader do you want to be known as?",
  deep: { title: "Read: Bezos’s 2016 letter to shareholders", body: "Freely available. Short and clear — the sections on “high-velocity decision making” and “disagree and commit” are especially useful.", prompt: "Write which idea you’ll apply in your team, and how." }
});

T("v7", { n: 7, module: "Presence & style", title: "Giving and receiving feedback",
  why: "Senior leaders are judged by the quality of the people around them — and feedback is the main tool for developing them. Giving feedback in a second language, across cultures, is hard. Structure makes it safer.",
  learn: {
    body: [
      "Kim Scott, who worked at Google and Apple, describes good feedback as <strong>Radical Candor</strong>: caring personally while challenging directly. Without care, it becomes <em>obnoxious aggression</em>. Without challenge, it becomes <em>ruinous empathy</em> — being so nice that people never learn what’s wrong. Neither care nor challenge: <em>manipulative insincerity</em>.",
      "The Center for Creative Leadership’s <strong>SBI model</strong> makes it concrete: <strong>Situation</strong> (when and where), <strong>Behaviour</strong> (what the person observably did — not personality), <strong>Impact</strong> (the effect). “In yesterday’s client call (S), you interrupted the client twice while she was explaining the issue (B). She stopped sharing details, and we still don’t know the root cause (I).” Then ask: “How did you see it?”",
      "Positive feedback deserves the same precision. “Great job” teaches nothing. “The way you opened with the customer’s problem, not our product, made the CFO lean in” teaches exactly what to repeat.",
      "Receiving feedback is the other half. Listen without defending, ask for examples, thank the person, and decide later what to act on. “Thank you — can you give me an example?” is one of the most senior sentences there is."
    ],
    phrases: [
      { en: "Can I share some feedback?", tone: "Respectful", note: "Asks permission — especially useful cross-culturally." },
      { en: "In [situation], when you [behaviour], the impact was…", tone: "Structured", note: "The SBI formula." },
      { en: "I’m telling you because I want you to succeed.", tone: "Caring", note: "Signals the “care personally” half." },
      { en: "How did you see it?", tone: "Open", note: "Invites their perspective." },
      { en: "Thank you — can you give me an example?", tone: "Receptive", note: "Receiving feedback well." }
    ],
    tip: "Clear is kind. Vague is unkind."
  },
  vocab: [
    V("candid", "KAN-did", "adjective", "Honest and direct, even when the truth is uncomfortable.", "Noun: candour (UK) / candor (US).", ["frank", "honest", "blunt"], "“Honest” is general. “Frank” is open and direct. “Blunt” can be rude. “Candid” is honest and direct in a way that’s usually valued.", "I appreciate candid feedback, even when it stings.", "— Can I be candid?\n— Please — I’d rather know.", "Write a candid but kind sentence of feedback."),
    V("constructive", "kun-STRUK-tiv", "adjective", "Intended to help or improve, rather than just criticise.", "“Constructive criticism” — but don’t use it as a disguise for harshness.", ["helpful", "positive", "useful"], "“Helpful” is general. “Positive” can mean praising. “Useful” is practical. “Constructive” means it builds — it offers a way forward.", "Constructive feedback ends with a path to improve.", "— Your criticism felt personal.\n— I’m sorry — I meant it to be constructive. Let me suggest a next step.", "Turn a criticism into constructive feedback."),
    V("defensive", "di-FEN-siv", "adjective", "Reacting as if attacked; protecting yourself from criticism.", "A natural reaction to notice in yourself.", ["guarded", "touchy", "reactive"], "“Guarded” is cautious. “Touchy” is easily offended (informal). “Reactive” responds quickly without reflection. “Defensive” specifically protects against criticism.", "When I feel defensive, I ask for an example and breathe.", "— You’re saying the report was bad?\n— I can see that came across badly. I don’t want you to feel defensive — the analysis was strong; the structure needs work.", "Describe what you do when you feel defensive."),
    V("underperform", "un-der-per-FORM", "verb", "To perform less well than expected.", "Neutral and professional — about results, not personality.", ["fall short", "lag", "struggle"], "“Struggle” suggests difficulty, with sympathy. “Lag” means falling behind. “Fall short” means not reaching a target. “Underperform” is the formal, objective term.", "The new channel has underperformed for two quarters.", "— How’s the new hire doing?\n— Underperforming on targets, but she’s learning fast.", "Describe underperformance factually, without blaming the person.")
  ],
  culture: "radical-candor",
  cultureNote: "Combine Scott with Meyer (v4): how direct you can be depends on the culture of the person in front of you. Care and clarity are universal; the volume isn’t.",
  sayBetter: {
    basic: "Your presentation was bad.",
    levels: [
      ["Level 1", "Your presentation could be better.", "Softer, but vague — ruinous empathy."],
      ["Level 2", "The presentation was too long and hard to follow.", "Specific, but no situation or impact."],
      ["Level 3", "In today’s presentation, you spent 15 minutes on background before the recommendation, and the CFO lost interest.", "SBI."],
      ["Level 4", "Can I share some feedback on today? You spent the first 15 minutes on background, and by the time you reached the recommendation the CFO had checked out. The analysis was excellent — it deserves to be heard. Next time, try opening with the recommendation. How did it feel from your side?", "Permission + SBI + genuine praise + a path forward + a question."]
    ],
    prompt: "Write Level 4 feedback for someone you work with."
  },
  exercise: {
    title: "SBI it",
    instructions: "Rewrite each piece of vague feedback using Situation–Behaviour–Impact.",
    items: [
      { q: "“You’re not a team player.”", a: "“In last week’s planning (S), you committed to the deadline without checking with design (B), and they had to work the weekend (I).”" },
      { q: "“Great job!”", a: "“In the supplier negotiation (S), you held your price calmly when they pushed back three times (B) — we saved 8% (I).”" },
      { q: "“You need to communicate better.”", a: "“On the launch (S), the team learned about the delay from the client, not from you (B), and they felt blindsided (I).”" }
    ]
  },
  think: { q: "Are you more likely to fall into ruinous empathy or obnoxious aggression — and in which language?", angles: ["Is it easier to be direct in English or your first language?", "What feedback do you wish someone had given you earlier?", "How do you react to feedback in public vs private?"] },
  express: { prompt: "Write one piece of positive and one piece of developmental feedback for a real colleague, both in SBI format." },
  speak: { prompt: "Give developmental feedback to a team member for 60 seconds: permission, SBI, care, next step, question.", seconds: 60, structure: ["Ask permission", "Situation", "Behaviour", "Impact", "Care + next step + question"] },
  recall: [
    { q: "Senior Voice 6: Three things every meeting should end with?", a: "A decision, an owner and a date." },
    { q: "What does SBI stand for?", a: "Situation, Behaviour, Impact." }
  ],
  reflect: "What is the most useful feedback you have ever received? Why did it work?",
  deep: { title: "Read: Kim Scott, Radical Candor (2017)", body: "Or watch her short talks online. Focus on the four quadrants.", prompt: "Plot your last three feedback conversations on the quadrants. What will you change?" }
});

T("v8", { n: 8, module: "Presence & style", title: "Stakeholders, managing up and saying no",
  why: "The higher you go, the more your success depends on people you don’t manage: your boss, peers, other departments, the board. Managing up, influencing across and saying no gracefully are core senior skills.",
  learn: {
    body: [
      "Aubrey Mendelow’s <strong>power–interest grid</strong> (1991) helps decide how to engage stakeholders. <strong>High power, high interest</strong>: manage closely — involve early, consult often. <strong>High power, low interest</strong>: keep satisfied — brief, concise updates. <strong>Low power, high interest</strong>: keep informed. <strong>Low power, low interest</strong>: monitor.",
      "<strong>Managing up</strong> means making your manager’s life easier while advancing your work: bring solutions, not just problems; no surprises (bad news early); learn their preferred style (v3); and make decisions easy (“I need a yes or no on X by Thursday”).",
      "<strong>Saying no</strong> well protects focus and credibility. Strategies: <em>no with a reason</em> (“I can’t take this on without delaying the launch”); <em>no with an alternative</em> (“I can’t lead it, but Ana could, with my support”); and <em>yes, if</em> (“Yes, if we push the dashboard project to Q2 — which would you prioritise?”). The last one hands the trade-off back to the decision-maker.",
      "Influence without authority relies on reciprocity, shared goals and trust built before you need it (Cialdini, in your Passport)."
    ],
    phrases: [
      { en: "I want to flag a risk early.", tone: "No surprises", note: "Managing up with bad news." },
      { en: "I’d love your steer on this.", tone: "Respectful, British-flavoured", note: "“Steer” = guidance." },
      { en: "I can do that if we deprioritise…", tone: "Trade-off", note: "The “yes, if” technique." },
      { en: "I’m not able to take that on right now, but…", tone: "Graceful no", note: "No + alternative." },
      { en: "What would success look like for you?", tone: "Aligning", note: "Understand stakeholder goals." }
    ],
    tip: "Every yes is a no to something else. Say which."
  },
  vocab: [
    V("buy-in", "BY-in", "noun", "Agreement and support for a plan, especially from people whose cooperation you need.", "“Get buy-in from” is essential corporate vocabulary.", ["support", "backing", "commitment"], "“Support” is general. “Backing” often means financial or political support. “Commitment” is dedication. “Buy-in” is genuine agreement that makes people act.", "Without buy-in from the regional teams, the rollout will fail.", "— Do we have the CFO on board?\n— Not yet. We need her buy-in before the board meeting.", "Whose buy-in do you need this month?"),
    V("push back", "PUSH bak", "phrasal verb", "To resist or argue against a request or idea.", "Neutral to positive in modern business — healthy disagreement.", ["resist", "object", "challenge"], "“Object” is formal. “Resist” suggests refusal. “Challenge” questions. “Push back” is the everyday business phrase for respectful resistance.", "It’s okay to push back on unrealistic deadlines.", "— The client wants it next week.\n— I’ll push back — two weeks is the minimum for quality.", "Write how you’d push back on a request politely."),
    V("bandwidth", "BAND-width", "noun", "(Informal, business) The time, energy or capacity to deal with something.", "A tech metaphor used for people: “I don’t have the bandwidth.” Slightly jargon — fine in moderation.", ["capacity", "time", "availability"], "“Time” is literal. “Availability” is about schedule. “Capacity” is formal. “Bandwidth” is informal corporate slang for mental or workload capacity.", "I don’t have the bandwidth to lead another project this quarter.", "— Can your team help with the audit?\n— Not this month — we have no bandwidth until the launch is done.", "Say no to something using “bandwidth”."),
    V("heads-up", "HEDZ-up", "noun", "(Informal) Advance warning.", "“Just a heads-up” — very common at work for early warnings.", ["warning", "notice", "alert"], "“Warning” suggests danger. “Notice” is formal. “Alert” is urgent. “Heads-up” is a friendly, informal early warning.", "Just a heads-up: the numbers will look worse this month because of returns.", "— Why didn’t anyone tell me?\n— Sorry — I should have given you a heads-up.", "Write a heads-up email opening for your boss.")
  ],
  culture: "mendelow",
  cultureNote: "A five-minute stakeholder map before a big initiative is one of the highest-return habits of senior leaders.",
  sayBetter: {
    basic: "No, I can’t do it, I am too busy.",
    levels: [
      ["Level 1", "Sorry, I don’t have time for this.", "Polite-ish, closed."],
      ["Level 2", "I can’t take this on right now without delaying the launch.", "No with a reason."],
      ["Level 3", "I can’t lead it this quarter, but Ana has relevant experience and I could support her.", "No with an alternative."],
      ["Level 4", "I’d like to help, and I want to be realistic: if I take this on, the launch slips by two weeks. If this is the higher priority, I’m happy to switch — which would you rather I focus on?", "Willingness + transparency + trade-off handed back to the decision-maker."]
    ],
    prompt: "Write a Level 4 “no” to a real request."
  },
  exercise: {
    title: "Map and manage",
    instructions: "Decide where each stakeholder sits on the grid and how to engage them.",
    items: [
      { q: "The CFO, who approves your budget but rarely asks about your project.", a: "High power, low interest — keep satisfied: concise monthly updates focused on cost and risk." },
      { q: "The customer-service team, who will use the new system daily.", a: "Lower power, high interest — keep informed, and involve them in testing (it builds buy-in)." },
      { q: "Your direct manager, who championed the project.", a: "High power, high interest — manage closely: regular updates, no surprises." },
      { q: "A department barely affected by the change.", a: "Low power, low interest — monitor; a short note at launch." }
    ]
  },
  think: { q: "What is harder for you: saying no to your boss, or saying no to your team? Why?", angles: ["What does saying no cost you?", "What does saying yes to everything cost the business?", "How do cultural norms of hierarchy affect this?"] },
  express: { prompt: "Map the stakeholders of one real initiative on the power–interest grid, and write one sentence on how you’ll engage each group." },
  speak: { prompt: "Your CEO asks you to lead a new AI initiative while your team is at capacity. Respond in 60 seconds with a “yes, if”.", seconds: 60, structure: ["Enthusiasm", "The real constraint", "The trade-off", "A proposal", "A question that hands back the decision"] },
  recall: [
    { q: "Senior Voice 7: Kim Scott’s two axes?", a: "Care personally; challenge directly." },
    { q: "Mendelow: high power, low interest?", a: "Keep satisfied." }
  ],
  reflect: "Whose buy-in matters most for your next career step — and are you investing in that relationship?",
  deep: { title: "Build your stakeholder map", body: "Draw the grid for your whole role, not one project. Include your boss’s boss.", prompt: "Write three actions for the next month based on the map." }
});

T("v9", { n: 9, module: "Presence & style", title: "Storytelling with data",
  why: "In e-commerce, AI and operations, numbers are everywhere. Senior leaders don’t just report data — they turn it into a decision. Knowing how to present numbers clearly in English is a defining skill.",
  learn: {
    body: [
      "Cole Nussbaumer Knaflic, who refined her approach on Google’s People Analytics team, argues in <em>Storytelling with Data</em> (2015) that a chart should answer one question: <strong>so what?</strong> Start from your audience and the action you want. Then choose the simplest visual that makes the point, remove clutter, and use colour only to highlight what matters.",
      "Give every chart a <strong>headline</strong> that states the insight, not the topic: not “Conversion rate by month” but “Conversion fell after the checkout redesign.”",
      "Language for numbers matters. Learn verbs of change with precision: <strong>rise / increase / grow</strong>, <strong>fall / decline / drop</strong>, <strong>surge / soar</strong> (big rise), <strong>plummet / plunge</strong> (big fall), <strong>level off / plateau</strong>, <strong>fluctuate</strong>. And distinguish <strong>percent</strong> from <strong>percentage points</strong>: if conversion moves from 2% to 3%, it rose by one percentage point — or by 50%.",
      "Be honest with uncertainty: correlation isn’t causation (Day 143); small samples mislead; and always say what you don’t know."
    ],
    phrases: [
      { en: "The key takeaway here is…", tone: "Clear", note: "States the insight first." },
      { en: "What this tells us is…", tone: "Interpretive", note: "Moves from data to meaning." },
      { en: "That’s a one-percentage-point increase — about 50% in relative terms.", tone: "Precise", note: "Avoids the most common numeric confusion." },
      { en: "We should be careful not to over-read this.", tone: "Honest", note: "Flags uncertainty." },
      { en: "So what does this mean for us? Three things.", tone: "Action-oriented", note: "Turns data into decisions." }
    ],
    tip: "Every chart needs a headline and a “so what”."
  },
  vocab: [
    V("plateau", "pla-TOH", "noun / verb", "A period when there is little or no change after growth.", "Also: “sales have plateaued”.", ["level off", "stagnate", "stabilise"], "“Level off” is neutral. “Stabilise” is positive (after volatility). “Stagnate” is negative — no progress. “Plateau” describes flattening after a rise.", "Organic traffic plateaued after the algorithm change.", "— Are sales still growing?\n— They’ve plateaued at around 10,000 orders a week.", "Describe something in your business that has plateaued."),
    V("percentage point", "per-SEN-tij POYNT", "noun", "The arithmetic difference between two percentages.", "Crucial precision: 2% → 3% is +1 percentage point (pp), but +50%.", ["point (informal)", "pp"], "“Percent” describes relative change. “Percentage point” describes absolute change between percentages. Confusing them misleads boards.", "Margin improved by two percentage points, from 18% to 20%.", "— Conversion went up 1%?\n— One percentage point — that’s actually a 40% relative increase.", "Write a sentence using both “percent” and “percentage points” correctly."),
    V("takeaway", "TAYK-uh-way", "noun", "The main point or lesson to remember.", "Business English favourite: “the key takeaway”.", ["insight", "lesson", "conclusion"], "An “insight” is a new understanding. A “lesson” is learned from experience. A “conclusion” is the end of reasoning. A “takeaway” is what the audience should remember and act on.", "The key takeaway is that returns, not acquisition, are killing our margins.", "— What were the takeaways from the workshop?\n— Two: simplify checkout, and test before scaling.", "State the takeaway of a recent report."),
    V("skewed", "SKYOOD", "adjective", "Distorted or biased; not representative.", "Useful for questioning data: skewed sample, skewed results.", ["biased", "distorted", "lopsided"], "“Biased” suggests a systematic lean. “Distorted” means changed from reality. “Lopsided” is informal and visual. “Skewed” is the precise word for data pulled in one direction.", "The survey is skewed — only our happiest customers responded.", "— Great NPS this month!\n— Careful, the sample is skewed — we only surveyed repeat buyers.", "Explain how a dataset at work could be skewed.")
  ],
  culture: "storytelling-data",
  cultureNote: "Pair Knaflic with Minto (v2): the headline of your chart is the top of your pyramid.",
  sayBetter: {
    basic: "Here is a graph of sales. As you can see, many things changed.",
    levels: [
      ["Level 1", "This chart shows monthly sales.", "A topic, not an insight."],
      ["Level 2", "Sales dropped in March.", "An observation."],
      ["Level 3", "Sales fell 12% in March, right after we changed the checkout.", "Precise and connected."],
      ["Level 4", "The headline: the new checkout cost us about 12% of sales in March. Conversion dropped from 2.5% to 2.2% — three-tenths of a point — mostly on mobile. My recommendation is to roll back on mobile this week while we test a fix.", "Insight + precise numbers + segment + decision."]
    ],
    prompt: "Present one real metric of yours at Level 4."
  },
  exercise: {
    title: "Headline it",
    instructions: "Turn each topic title into an insight headline and add the “so what”.",
    items: [
      { q: "“Average order value, 2024–2025”", a: "“Average order value rose 18% after free shipping moved to €50 — let’s keep the threshold.”" },
      { q: "“Customer service tickets by channel”", a: "“Chat now handles 60% of tickets at half the cost of email — we should move more queries to chat.”" },
      { q: "“AI pilot results”", a: "“The AI assistant cut handling time by 30%, but accuracy fell on complex cases — scale it for simple queries only.”" }
    ]
  },
  think: { q: "When has a number been used to mislead you — or when have you been tempted to present data more favourably than it deserved?", angles: ["Cherry-picked time periods?", "Percent vs percentage points?", "Vanity metrics?"] },
  express: { prompt: "Write the script (5–6 sentences) for presenting one chart from your work: headline, numbers, interpretation, caveat, recommendation." },
  speak: { prompt: "Present one metric from your business in 60 seconds: headline, precise numbers, what it means, caveat, decision.", seconds: 60, structure: ["Headline", "Precise numbers (use percentage points if relevant)", "What it means", "A caveat", "The decision"] },
  recall: [
    { q: "Senior Voice 8: The “yes, if” technique?", a: "Agree on condition of a trade-off — handing the prioritisation back." },
    { q: "Conversion from 2% to 3%: how many percentage points? What relative change?", a: "+1 percentage point; +50% relative." }
  ],
  reflect: "Do numbers make you feel confident or nervous in English? Which number words do you need to practise?",
  deep: { title: "Read: Storytelling with Data (2015) — Chapters 1–3", body: "Or visit the author’s blog, which has many before-and-after makeovers.", prompt: "Redesign one chart from your work and write the headline." }
});

T("v10", { n: 10, module: "Presence & style", title: "Difficult conversations",
  why: "Restructures, underperformance, conflict with peers, disappointing a client: senior roles are full of conversations people avoid. Handling them with clarity and humanity — in English — is a mark of real leadership.",
  learn: {
    body: [
      "In <em>Difficult Conversations</em> (1999), Douglas Stone, Bruce Patton and Sheila Heen of the Harvard Negotiation Project argue that every difficult conversation is really three: the <strong>“What happened?” conversation</strong> (facts, intentions, blame), the <strong>feelings conversation</strong>, and the <strong>identity conversation</strong> — what this says about who we are (“Am I competent? Am I a good person?”).",
      "Key shifts: from <strong>certainty to curiosity</strong> (“Help me understand how you see it”); from <strong>blame to contribution</strong> (“How did we each contribute to this?”); and from <strong>assuming intentions</strong> to separating impact from intent (“I’m sure you didn’t intend this, but the impact was…”).",
      "Start from the <strong>third story</strong> — how a neutral observer would describe the situation: “It seems we have different views on how the launch went. I’d like to understand yours and share mine.”",
      "In English, softening language helps without diluting the message: “I’m afraid…”, “I need to be honest with you…”, “This is difficult to say, and I want to be clear…”. Be kind in tone, clear in content."
    ],
    phrases: [
      { en: "I’d like to talk about something that’s been on my mind.", tone: "Gentle opening", note: "Signals importance without alarm." },
      { en: "Help me understand how you see it.", tone: "Curious", note: "Shifts from certainty to curiosity." },
      { en: "I’m sure that wasn’t your intention, but the impact was…", tone: "Fair", note: "Separates intent and impact." },
      { en: "I think we both contributed to this.", tone: "Mature", note: "Moves from blame to contribution." },
      { en: "I’m afraid the decision has been made, and I want to explain why.", tone: "Clear, humane", note: "Delivers bad news firmly." }
    ],
    tip: "Kind in tone. Clear in content."
  },
  vocab: [
    V("tactful", "TAKT-ful", "adjective", "Careful not to offend or upset others, especially in sensitive situations.", "Different from vague: tactful people still say the hard thing.", ["diplomatic", "discreet", "sensitive"], "“Diplomatic” manages relationships strategically. “Discreet” keeps things private. “Sensitive” is aware of feelings. “Tactful” chooses words and timing carefully.", "She was tactful but completely clear about the decision.", "— How do I tell him he didn’t get the promotion?\n— Be tactful, but don’t leave him guessing.", "Write a tactful sentence delivering bad news."),
    V("intent", "in-TENT", "noun", "What someone means or aims to do.", "“Intent vs impact” is a key distinction in difficult conversations.", ["intention", "purpose", "aim"], "“Intention” is everyday. “Purpose” is the reason. “Aim” is the goal. “Intent” is slightly more formal and common in the phrase “intent versus impact”.", "Your intent was good, but the impact on the team was negative.", "— I was only trying to help!\n— I know your intent was good. The client saw it differently.", "Describe a situation where intent and impact differed."),
    V("blindside", "BLYND-syde", "verb", "To surprise someone in an unpleasant way, without warning.", "Informal but very common at work: “I felt blindsided.”", ["catch off guard", "ambush", "surprise"], "“Surprise” is neutral. “Catch off guard” is mild. “Ambush” is aggressive. “Blindside” means hit unexpectedly from where you weren’t looking.", "I felt blindsided when the budget cut was announced in the all-hands meeting.", "— Why are you upset?\n— You raised my mistake in front of the client. I felt blindsided.", "Write how you’d tell someone you felt blindsided."),
    V("reassure", "ree-uh-SHOR", "verb", "To make someone feel less worried.", "Important in restructures and change — but never reassure falsely.", ["comfort", "calm", "encourage"], "“Comfort” is emotional support. “Calm” reduces agitation. “Encourage” gives confidence to act. “Reassure” removes doubt or fear with information or support.", "I want to reassure you that your role isn’t affected.", "— Is my job at risk?\n— I can reassure you on that — your team is growing.", "Write a reassuring (but honest) sentence for a worried team.")
  ],
  culture: "difficult-conversations",
  cultureNote: "The identity conversation explains why feedback hurts: it touches who we think we are. Naming it — even silently — helps you stay calm and kind.",
  sayBetter: {
    basic: "You did a bad job on the project and the client is angry because of you.",
    levels: [
      ["Level 1", "The client isn’t happy with the project.", "Avoids blame — but vague."],
      ["Level 2", "The client is unhappy, mainly because of the missed deadline.", "Specific."],
      ["Level 3", "I’d like to talk about the client situation. My sense is the missed deadline was the main issue — how do you see it?", "Third story + curiosity."],
      ["Level 4", "I’d like to talk about the client situation, because I think we can learn from it. From my side, the missed deadline was the main issue — and I probably contributed by not checking in earlier. I’d really like to understand how it looked from where you were.", "Third story + contribution (including your own) + genuine curiosity."]
    ],
    prompt: "Write a Level 4 opening for a difficult conversation you’re avoiding."
  },
  exercise: {
    title: "Open it well",
    instructions: "Write the first two sentences for each conversation.",
    items: [
      { q: "Telling a team member their role is changing in a restructure.", a: "“I want to talk to you about a change affecting your role. I’ll be clear about what’s happening and why, and then I want to hear your questions.”" },
      { q: "A peer took credit for your team’s work in a meeting.", a: "“I wanted to talk about yesterday’s meeting. I’m sure it wasn’t intended, but the way the results were presented left my team’s contribution out — can we talk about how to share credit going forward?”" },
      { q: "A client asks for a discount you can’t give.", a: "“I understand why you’re asking, and I value this relationship. I’m afraid we can’t lower the price, but let me show you what we can do.”" }
    ]
  },
  think: { q: "Which difficult conversation are you avoiding right now — and what would the “third story” be?", angles: ["What are the facts?", "What are the feelings?", "What identity question is at stake for you — and for them?"] },
  express: { prompt: "Script a difficult conversation you need to have: opening (third story), your view, a question, and how you’ll respond if they get defensive." },
  speak: { prompt: "Role-play: tell a strong team member they didn’t get the promotion. Be clear, kind and forward-looking.", seconds: 90, structure: ["Purpose, clearly", "The decision and the reason", "Acknowledge feelings", "What would make the difference next time", "Support offered"] },
  recall: [
    { q: "Senior Voice 9: Percent vs percentage points?", a: "Percent = relative change; percentage points = absolute difference between percentages." },
    { q: "The three conversations in every difficult conversation?", a: "What happened, feelings, identity." }
  ],
  reflect: "What makes difficult conversations hard for you specifically — the conflict, the language, or the relationship?",
  deep: { title: "Read: Difficult Conversations (1999)", body: "Especially the chapters on “Stop arguing about who’s right” and “Abandon blame”.", prompt: "Rewrite your script after reading. What changed?" }
});

T("v11", { n: 11, module: "AI for leaders", title: "How generative AI actually works",
  why: "Every senior leader is now expected to have an informed view on AI. You don’t need to code — but you do need to explain how it works, what it does well, where it fails, and why. Knowledge here is credibility.",
  learn: {
    body: [
      "Today’s AI assistants are built on <strong>large language models (LLMs)</strong>. During <strong>pre-training</strong>, a model reads an enormous amount of text and learns to predict the next <strong>token</strong> (a word or piece of a word). Doing this at vast scale, it develops surprisingly general abilities: summarising, translating, reasoning, writing code.",
      "Most modern LLMs use the <strong>Transformer</strong> architecture, introduced by Google researchers in the 2017 paper “Attention Is All You Need”. After pre-training, models are refined — for example with human feedback — to follow instructions and behave safely. ChatGPT’s launch in November 2022 triggered mass adoption.",
      "Key practical concepts: the <strong>prompt</strong> (your instructions and context); the <strong>context window</strong> (how much text the model can consider at once); and <strong>hallucination</strong> — when a model produces fluent, confident but false information. Because it generates plausible text, <strong>fluent is not the same as factual</strong>.",
      "A balanced senior view: LLMs are powerful general-purpose tools that can transform knowledge work; they are not search engines, not infallible, and their output must be checked where errors matter. The quality of results depends heavily on the quality of instructions and context."
    ],
    phrases: [
      { en: "Essentially, it predicts the next word — at enormous scale.", tone: "Simple, accurate", note: "The one-sentence explanation." },
      { en: "It’s fluent, but that doesn’t mean it’s right.", tone: "Critical", note: "The hallucination point." },
      { en: "The output is only as good as the context we give it.", tone: "Practical", note: "Why prompts and data matter." },
      { en: "Where errors are costly, we keep a human in the loop.", tone: "Responsible", note: "Governance in plain English." },
      { en: "It’s a tool for augmenting judgement, not replacing it.", tone: "Balanced", note: "A senior stance." }
    ],
    tip: "Fluent is not factual."
  },
  vocab: [
    V("large language model", "LARJ LANG-gwij MOD-ul", "noun", "An AI system trained on vast amounts of text to understand and generate language. Abbreviation: LLM.", "Say “L-L-M” as letters.", ["AI model", "foundation model", "chatbot"], "A “chatbot” is any conversational program, often simple. A “foundation model” is a large general model adapted for many uses. An “LLM” is specifically a language-focused foundation model.", "Our new assistant runs on a large language model fine-tuned on our policies.", "— Is it just a chatbot?\n— It’s built on an LLM, so it’s far more flexible than old rule-based chatbots.", "Explain LLM to a colleague in one sentence."),
    V("hallucination", "huh-loo-sih-NAY-shun", "noun", "When an AI model generates false or invented information presented as fact.", "A technical term — no medical meaning in this context.", ["fabrication", "error", "confabulation"], "“Error” is general. “Fabrication” suggests deliberate invention. “Confabulation” is a psychology term for filling memory gaps. “Hallucination” is the standard AI term.", "The model cited a regulation that doesn’t exist — a classic hallucination.", "— Can we publish the AI summary directly?\n— Not without checking — hallucinations are rare but costly.", "How would you reduce hallucination risk in your team’s use of AI?"),
    V("prompt", "PROMPT", "noun / verb", "The instructions and context given to an AI model.", "Good prompting = clear goal, context, examples, constraints.", ["instruction", "query", "input"], "A “query” is a question, often for search. An “input” is any data entered. A “prompt” includes instructions, context and examples that shape an AI’s output.", "A well-written prompt with examples made the summaries much more accurate.", "— Why is the output so generic?\n— The prompt was too vague. Give it context and an example.", "Write a prompt you’d use for a real task at work."),
    V("augment", "awg-MENT", "verb", "To increase or improve something by adding to it.", "Key in AI debates: augment (help people) vs automate (replace tasks) — see v15.", ["enhance", "boost", "supplement"], "“Enhance” improves quality. “Boost” increases quickly. “Supplement” adds to something. “Augment” means make greater by adding — in AI, extending human abilities.", "We want AI to augment our analysts, not replace them.", "— Will the team lose jobs?\n— Our aim is to augment them — remove the repetitive work.", "Describe how AI could augment your role.")
  ],
  culture: "llm",
  cultureNote: "Turing asked in 1950 whether machines could think (your Passport). LLMs have turned his question from philosophy into a boardroom topic.",
  sayBetter: {
    basic: "AI is very smart and knows everything.",
    levels: [
      ["Level 1", "AI is very powerful.", "Vague."],
      ["Level 2", "AI can write, summarise and analyse text very well.", "Specific capabilities."],
      ["Level 3", "LLMs predict text at enormous scale, which makes them powerful — but they can be confidently wrong.", "Mechanism + limitation."],
      ["Level 4", "I’d describe LLMs as extraordinarily capable pattern-predictors: they can draft, summarise and analyse at a level that genuinely changes knowledge work. But they don’t ‘know’ things the way a database does, so where accuracy matters, we need good context and human review.", "Knowledgeable, balanced, actionable — without hype or fear."]
    ],
    prompt: "Explain AI to your leadership team at Level 4."
  },
  exercise: {
    title: "Explain it to the board",
    instructions: "Answer each board question in two clear sentences.",
    items: [
      { q: "“How does this AI actually work?”", a: "“It’s trained on huge amounts of text to predict what comes next, which gives it broad language abilities. We add our own documents so it answers from our information.”" },
      { q: "“Can we trust its answers?”", a: "“For low-risk tasks like drafting, largely yes. For anything with legal or financial impact, a person checks it, because models can produce confident errors.”" },
      { q: "“Why is it suddenly everywhere?”", a: "“The Transformer architecture (2017) plus massive data and computing made models dramatically better, and ChatGPT made them accessible in 2022.”" }
    ]
  },
  think: { q: "Where in your work would an AI error be harmless — and where would it be dangerous?", angles: ["Drafting vs deciding?", "Internal vs customer-facing?", "Who is accountable if it’s wrong?"] },
  express: { prompt: "Write a 150-word explanation of generative AI for your company’s internal newsletter: how it works, what it’s good at, one risk, one rule." },
  speak: { prompt: "Explain how generative AI works and where it fails — to a non-technical executive — in 90 seconds.", seconds: 90, structure: ["What an LLM is", "How it learns (prediction)", "What it’s good at", "Hallucination", "Your rule of thumb"] },
  recall: [
    { q: "Senior Voice 10: What is the “third story”?", a: "How a neutral observer would describe the situation." },
    { q: "What does an LLM learn to do in pre-training?", a: "Predict the next token (word or word-piece)." }
  ],
  reflect: "Do you feel confident or anxious talking about AI at work? What would make you feel knowledgeable?",
  deep: { title: "Watch: a good explainer on Transformers", body: "Many reputable explainers exist (e.g. 3Blue1Brown’s visual series on neural networks and transformers).", prompt: "Explain “attention” in a Transformer in three sentences, using an analogy." }
});

T("v12", { n: 12, module: "AI for leaders", title: "The AI vocabulary of leaders",
  why: "AI conversations are full of terms — agents, RAG, fine-tuning, guardrails — used loosely and sometimes to impress. Knowing them precisely lets you ask sharper questions of vendors and teams, and avoid being dazzled by jargon.",
  learn: {
    body: [
      "<strong>RAG (retrieval-augmented generation)</strong>: before answering, the system retrieves relevant documents (your policies, product data) and gives them to the model. It reduces hallucination and keeps answers grounded in your information. Described by Patrick Lewis and colleagues in 2020.",
      "<strong>Fine-tuning</strong>: further training a model on specific examples to adapt its style or behaviour. Often less necessary than people think — good prompts and RAG solve many problems more cheaply.",
      "<strong>AI agent</strong>: a model connected to <strong>tools</strong> (search, databases, email, code) that works in a loop — plan, act, check, repeat — to complete multi-step tasks. Agents can act, not just answer, so they need <strong>permissions</strong>, <strong>guardrails</strong> (rules and limits) and <strong>human-in-the-loop</strong> approval for high-impact actions.",
      "Other useful terms: <strong>evaluation (“evals”)</strong> — systematic tests of quality; <strong>latency</strong> — response time; <strong>tokens</strong> — the unit of cost and length; <strong>multimodal</strong> — handling text, images, audio. The senior skill isn’t knowing every term; it’s asking: “What problem does this solve, how do we measure it, and what could go wrong?”"
    ],
    phrases: [
      { en: "Is this grounded in our own data?", tone: "Sharp question", note: "Asks whether RAG is used." },
      { en: "What is the agent allowed to do without approval?", tone: "Governance", note: "The key agent question." },
      { en: "How are we evaluating quality?", tone: "Rigorous", note: "Asks for evals, not demos." },
      { en: "Do we actually need to fine-tune, or would better prompts do?", tone: "Pragmatic", note: "Challenges unnecessary complexity." },
      { en: "Let’s separate the demo from the deployment.", tone: "Sceptical", note: "Demos are easy; production is hard." }
    ],
    tip: "Don’t be impressed by the term. Ask what it does, how it’s measured, and what can go wrong."
  },
  vocab: [
    V("agent (AI)", "AY-junt", "noun", "An AI system that uses tools and takes actions to complete tasks, often over several steps.", "“Agentic” = able to act autonomously. Very fashionable — ask what it actually does.", ["assistant", "bot", "automation"], "An “assistant” mainly answers. A “bot” is a simple automated program. “Automation” follows fixed rules. An “agent” reasons, uses tools and acts towards a goal.", "The agent checks stock, drafts the supplier email and waits for approval before sending.", "— Can the agent issue refunds?\n— Only under €50; anything larger goes to a person.", "Describe a task in your work an agent could do — and its limits."),
    V("grounded", "GROWN-did", "adjective", "(AI) Based on specific, verifiable sources rather than the model’s general training.", "Same word as Day 1 (emotionally stable) — different meaning here.", ["sourced", "evidence-based", "anchored"], "“Sourced” has citations. “Evidence-based” relies on evidence. “Anchored” is fixed to a reference. “Grounded” in AI means answers are tied to provided data.", "Customer answers must be grounded in our current returns policy.", "— Where does it get that information?\n— It’s grounded in our knowledge base, with citations.", "Why should customer-facing AI be grounded?"),
    V("guardrail", "GARD-rayl", "noun", "A rule or limit that keeps a system — or a process — within safe boundaries.", "From road safety barriers. Used for AI and for policies.", ["safeguard", "limit", "constraint"], "A “safeguard” protects against harm. A “limit” is a boundary. A “constraint” restricts. A “guardrail” keeps something on track while allowing movement.", "We added guardrails so the assistant never gives legal advice.", "— What if it says something offensive?\n— There are guardrails on topics and tone, and we monitor outputs.", "Write two guardrails you’d set for an AI tool at work."),
    V("scalable", "SKAY-luh-bul", "adjective", "Able to grow or handle more work without a proportional increase in cost or effort.", "A key business test for any AI or automation project.", ["expandable", "extensible", "growable"], "“Expandable” can grow in size. “Extensible” can add features. “Scalable” can handle much more volume efficiently.", "The pilot worked, but is it scalable across twenty markets?", "— Can we hire more agents for peak season?\n— That’s not scalable. Automation for simple queries is.", "Name a process at work that isn’t scalable today.")
  ],
  culture: "ai-agents",
  cultureNote: "The shift from chatbots that answer to agents that act is one of the defining business questions of this decade — especially for operations and e-commerce.",
  sayBetter: {
    basic: "We should use AI agents because they are the future.",
    levels: [
      ["Level 1", "We should explore AI agents.", "Vague."],
      ["Level 2", "We could use an agent to handle routine customer requests.", "A use case."],
      ["Level 3", "An agent grounded in our policies could handle simple refunds, with approval required above €50.", "Use case + grounding + guardrail."],
      ["Level 4", "I’d propose piloting an agent for simple refund requests — about 40% of our tickets. It would be grounded in our policy, limited to refunds under €50, and evaluated weekly on accuracy and customer satisfaction before we scale.", "Specific, measured, governed. That’s how leaders talk about agents."]
    ],
    prompt: "Propose an AI use case in your area at Level 4."
  },
  exercise: {
    title: "Sharp questions",
    instructions: "A vendor says each sentence. Write the question a well-informed leader would ask.",
    items: [
      { q: "“Our AI never hallucinates.”", a: "“What’s your measured error rate on tasks like ours, and how do you detect errors in production?”" },
      { q: "“We fine-tuned it for your industry.”", a: "“On what data, and how does it compare with a well-prompted base model plus our documents?”" },
      { q: "“Our agent automates your entire returns process.”", a: "“What actions can it take without human approval, and what happens when it’s uncertain?”" },
      { q: "“It’s fully scalable.”", a: "“What do cost and latency look like at ten times today’s volume?”" }
    ]
  },
  think: { q: "Which AI term do you hear most at work — and do people mean the same thing by it?", angles: ["Is “AI” used to mean everything?", "What’s hype and what’s real in your industry?", "Who decides what an agent may do?"] },
  express: { prompt: "Write a one-paragraph AI use-case proposal for your area: problem, approach (RAG/agent?), guardrails, success metrics." },
  speak: { prompt: "Explain the difference between a chatbot, RAG and an AI agent to your team, with one example from your business.", seconds: 90, structure: ["Chatbot", "RAG — grounding", "Agent — tools and actions", "Example", "Guardrails"] },
  recall: [
    { q: "Senior Voice 11: What is a hallucination?", a: "Fluent, confident but false AI output." },
    { q: "What does RAG do?", a: "Retrieves relevant documents and gives them to the model, grounding answers in specific data." }
  ],
  reflect: "What AI question have you been afraid to ask in a meeting? Write it — and the answer, if you now know it.",
  deep: { title: "Build a glossary", body: "Create your own AI glossary of 15 terms used in your company, with one-sentence definitions and an example each.", prompt: "Save the five most useful to My Words." }
});
})();
