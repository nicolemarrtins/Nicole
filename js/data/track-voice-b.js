/* The Senior Voice — lessons 13–24, with Passport cards. */
(function () {
const V = TAW.V;
function card(id, name, cat, period, origin, why, facts, idea, related, talk) {
  TAW.cards[id] = { id, name, cat, period, origin, why, facts, idea, related, talk };
}
function T(key, o) { TAW.trackLessons[key] = Object.assign({ track: "voice", cats: ["communication"], skills: ["articulation", "conversation", "thinking"], difficulty: "Advanced", minutes: 30 }, o); }

/* ── Cards ── */
card("jagged-frontier", "The “jagged frontier” of AI", "business", "2023", "Harvard Business School & BCG",
  "A field experiment showing that AI can dramatically help knowledge workers on some tasks — and hurt them on others that look similar.",
  ["In a 2023 study with Boston Consulting Group, consultants using GPT-4 on tasks within AI’s capabilities completed 12% more tasks, 25% faster, with over 40% higher quality.", "On a task just outside the frontier, consultants using AI were about 19 percentage points less likely to reach the correct answer.", "The researchers called the uneven boundary of AI capability a “jagged technological frontier”."],
  "AI is brilliant at some things and confidently wrong at neighbouring ones — know where the edge is.", ["llm", "turing-trap"],
  ["The jagged frontier means we have to test task by task, not assume.", "On tasks inside the frontier the gains were huge; just outside, AI made people worse."]);
card("eu-ai-act", "The EU AI Act", "business", "2024–2027", "European Union",
  "The world’s first comprehensive AI law, regulating AI systems by level of risk.",
  ["It entered into force in August 2024, with obligations phased in between 2025 and 2027.", "Risk tiers: unacceptable (banned, e.g. social scoring), high-risk (strict requirements, e.g. hiring, credit), limited risk (transparency duties) and minimal risk.", "Fines for prohibited practices can reach €35 million or 7% of global annual turnover."],
  "Regulate the use, not the technology — the higher the risk, the stricter the rules.", ["ai-agents", "Governance"],
  ["Under the EU AI Act, using AI to screen CVs counts as high-risk.", "Even outside Europe, companies selling there will need to comply."]);
card("turing-trap", "The Turing Trap: automation vs augmentation", "business", "2022", "Erik Brynjolfsson, Stanford",
  "The argument that focusing AI on imitating and replacing humans, rather than augmenting them, wastes its potential and concentrates power.",
  ["Brynjolfsson’s essay “The Turing Trap” (2022) contrasts automation with augmentation.", "In a large call-centre study (Brynjolfsson, Li & Raymond, 2023), an AI assistant raised productivity by about 14% on average — and by about a third for the least experienced workers.", "Augmentation tends to create new tasks and value; pure automation mainly cuts costs."],
  "Ask not “What can AI replace?” but “What can people do with AI that they couldn’t before?”", ["turing", "jagged-frontier", "industrial-revolution"],
  ["Brynjolfsson calls it the Turing Trap — designing AI to replace people instead of making them better.", "The biggest gains in that study went to the newest employees."]);
card("gates-automation", "Automation’s first rule", "business", "1990–1995", "Michael Hammer; Bill Gates",
  "Two classic warnings: redesign before you automate, because automation magnifies whatever it touches.",
  ["Michael Hammer’s 1990 HBR article “Reengineering Work: Don’t Automate, Obliterate” argued for redesigning processes rather than speeding up bad ones.", "Bill Gates (The Road Ahead, 1995): automation applied to an efficient operation magnifies efficiency; applied to an inefficient one, it magnifies the inefficiency.", "Robotic process automation (RPA), a term popularised in the 2010s, automates rule-based clicks; AI extends automation to judgement-heavy tasks."],
  "Automate a mess and you get a faster mess.", ["kotter", "okrs"],
  ["Before we automate this, let’s redesign it — otherwise we’ll just get a faster mess.", "Gates said automation magnifies whatever it touches, good or bad."]);
card("okrs", "OKRs & Goodhart’s law", "business", "1970s–", "Andy Grove (Intel); John Doerr; Charles Goodhart",
  "A goal-setting method linking ambitious objectives to measurable key results — and the warning about turning measures into targets.",
  ["Andy Grove developed OKRs (Objectives and Key Results) at Intel; John Doerr introduced them to Google in 1999 and wrote Measure What Matters (2018).", "An Objective is qualitative and inspiring; Key Results are measurable outcomes, not tasks.", "Goodhart’s law, as popularly phrased: “When a measure becomes a target, it ceases to be a good measure.”"],
  "Measure what matters — and remember people will optimise whatever you measure.", ["unit-economics", "gates-automation"],
  ["That’s an output, not a key result — what outcome are we trying to change?", "Careful — Goodhart’s law. If we reward call speed, quality will suffer."]);
card("kotter", "Kotter’s 8 steps for leading change", "business", "1995–1996", "John Kotter, Harvard",
  "One of the most widely used models for leading organisational change.",
  ["The steps: create urgency; build a guiding coalition; form a vision; communicate it; remove obstacles; create short-term wins; build on the change; anchor it in culture.", "First set out in a 1995 Harvard Business Review article, then the book Leading Change (1996).", "The often-quoted claim that “70% of change programmes fail” is widely repeated but weakly evidenced."],
  "People don’t resist change. They resist being changed without understanding why.", ["mendelow", "gates-automation"],
  ["We have a vision but no urgency — Kotter’s first step.", "Let’s plan a quick win in the first month to build momentum."]);
card("unit-economics", "E-commerce unit economics", "business", "Modern", "Digital commerce",
  "The basic equations of online business: how revenue is built and whether each customer is profitable.",
  ["Revenue = traffic × conversion rate × average order value (AOV).", "Customer lifetime value (LTV) should comfortably exceed customer acquisition cost (CAC); a common rule of thumb is about 3:1.", "Research by Frederick Reichheld of Bain & Company found that a 5% increase in customer retention could raise profits by 25–95%."],
  "Growth that loses money on every customer isn’t growth — it’s a subsidy.", ["okrs", "ab-testing", "mercadolibre"],
  ["Our CAC has doubled while LTV is flat — that’s not sustainable.", "Retention is the cheapest growth lever we have."]);
card("mercadolibre", "Mercado Libre", "business", "1999–", "Argentina → Latin America",
  "Latin America’s largest e-commerce and fintech ecosystem — a case study in building trust, payments and logistics where they didn’t exist.",
  ["Founded in 1999 by Marcos Galperin, who wrote the business plan while studying at Stanford.", "It built its own payments (Mercado Pago) and logistics (Mercado Envios) to solve trust and delivery problems.", "It listed on Nasdaq in 2007 and operates across most of Latin America."],
  "In emerging markets, e-commerce means solving trust, payments and delivery — not just building a website.", ["unit-economics", "social-commerce"],
  ["Mercado Libre succeeded by building the infrastructure — payments, logistics — that didn’t exist.", "Mercado Pago started as a way to make buyers trust strangers online."]);
card("ab-testing", "A/B testing & online experiments", "business", "2000s–", "Tech industry",
  "Randomly showing different versions to users to measure what actually works — the scientific method applied to products.",
  ["Kohavi and Thomke (HBR, 2017) describe a Bing headline experiment that increased ad revenue by 12% — worth over $100 million a year in the US.", "At Microsoft, roughly a third of experiments improved the metric, a third had no effect and a third made it worse.", "Common errors: stopping tests early (“peeking”), too-small samples, and testing many metrics until one looks good."],
  "Most good ideas aren’t — which is why we test.", ["unit-economics", "storytelling-data", "confirmation-bias"],
  ["Let’s A/B test it before we roll it out to everyone.", "The result isn’t significant yet — we need a bigger sample."]);
card("social-commerce", "Social, live and agentic commerce", "business", "2015–present", "China → global",
  "The shift of shopping into social media, live video and, increasingly, AI agents that shop on our behalf.",
  ["Livestream shopping became a major retail channel in China; platforms like Pinduoduo (founded 2015) pioneered social group-buying.", "TikTok Shop and creator-led selling spread these models to other markets in the 2020s.", "From 2025, payment networks and AI companies began launching ways for AI agents to search, compare and complete purchases — an emerging field."],
  "The store is moving to where attention already is — and soon, to the agent.", ["attention", "mercadolibre", "ai-agents"],
  ["Livestream commerce is huge in China and growing elsewhere.", "If AI agents start shopping for customers, how do we stay visible?"]);
card("sinek", "Start with Why (the Golden Circle)", "business", "2009", "Simon Sinek, UK/USA",
  "A popular leadership idea: inspiring leaders communicate why they do something before what and how.",
  ["Sinek’s 2009 TED talk “How great leaders inspire action” is one of the most watched TED talks.", "The Golden Circle: Why (purpose) → How (approach) → What (product).", "His claims linking it to specific brain regions are oversimplified — the communication advice is useful; the neuroscience is not the reason."],
  "People don’t buy what you do; they buy why you do it — a useful idea, even if the science is simplified.", ["elevator-pitch", "neuromyths"],
  ["Let’s start with why this project matters, then the how.", "Sinek’s idea is useful, though the brain science behind it is oversimplified."]);

/* ── Lessons ── */
T("v13", { n: 13, module: "AI for leaders", title: "AI strategy: from pilot to value",
  why: "Many companies have AI pilots; far fewer have AI value. Senior leaders must choose the right use cases, decide whether to build or buy, and move beyond impressive demos to measurable results.",
  learn: {
    body: [
      "Good AI strategy starts with <strong>problems, not technology</strong>. Map use cases on two axes: <strong>value</strong> (cost saved, revenue gained, risk reduced) and <strong>feasibility</strong> (data available, error tolerance, integration effort). Start where both are high — often high-volume, text-heavy, low-risk tasks: customer-service drafts, product descriptions, internal knowledge search.",
      "AI capability is uneven. In a 2023 field experiment with Boston Consulting Group, consultants using GPT-4 on suitable tasks completed 12% more tasks, 25% faster, with over 40% higher quality. On a task just outside AI’s capabilities, they were about 19 percentage points <em>less</em> likely to get the right answer. The researchers called it a <strong>jagged frontier</strong> — you must test task by task.",
      "<strong>Build vs buy</strong>: buy (or use platform tools) for common needs; build where AI touches your differentiating data or processes. Most companies combine both.",
      "Avoid <strong>pilot purgatory</strong> — endless proofs of concept that never scale. A widely discussed 2025 MIT report claimed most generative-AI pilots showed no measurable financial impact (its methods were debated). Define success metrics before the pilot, plan integration and change management from day one, and kill pilots that don’t deliver."
    ],
    phrases: [
      { en: "What problem are we actually solving?", tone: "Strategic", note: "The first question before any AI project." },
      { en: "Let’s define success before we start the pilot.", tone: "Disciplined", note: "Prevents pilot purgatory." },
      { en: "That’s a great demo — what would it take to run in production?", tone: "Pragmatic", note: "Moves from wow to value." },
      { en: "We should test it task by task — the frontier is jagged.", tone: "Informed", note: "A knowledgeable reference." },
      { en: "This is core to our advantage, so we should build; that’s commodity, so we buy.", tone: "Decisive", note: "Build-vs-buy reasoning." }
    ],
    tip: "Problems first. Pilots with metrics. Scale or stop."
  },
  vocab: [
    V("use case", "YOOS kays", "noun", "A specific situation in which a technology or product can be used to achieve a goal.", "Core strategy vocabulary — always ask “What’s the use case?”", ["application", "scenario", "purpose"], "An “application” is a general use. A “scenario” is a situation. A “use case” is a specific, defined situation with users, goal and value.", "Our strongest AI use case is drafting replies to routine customer emails.", "— Where should we start with AI?\n— With the use case that has the highest volume and lowest risk.", "Name your top AI use case and why."),
    V("pilot", "PY-lut", "noun / verb", "A small-scale trial to test something before a wider rollout.", "“Pilot purgatory” = pilots that never scale.", ["trial", "test", "proof of concept"], "A “trial” is a general test. A “proof of concept” shows something is technically possible. A “pilot” tests it in real conditions with real users.", "We’ll pilot the tool in one market before rolling it out regionally.", "— Can we launch everywhere next month?\n— Let’s pilot first — six weeks, one team, clear metrics.", "Design a pilot: scope, duration, success metric."),
    V("ROI", "ar-oh-EYE", "noun", "Return on investment — the gain from an investment relative to its cost.", "Say the letters. Boards always ask it.", ["payback", "return", "yield"], "“Payback” is the time to recover the cost. “Return” is the gain. “Yield” is income as a percentage. “ROI” compares gain to cost.", "The expected ROI on the AI assistant is about 3:1 in the first year.", "— What’s the ROI?\n— Roughly 200% over two years, mostly from reduced handling time.", "How would you estimate the ROI of an AI project?"),
    V("roll out", "rohl OWT", "phrasal verb / noun", "To introduce something gradually to more users or locations. Noun: rollout.", "Common for products, systems and policies.", ["launch", "deploy", "implement"], "“Launch” is the start, often public. “Deploy” is technical. “Implement” means put into effect. “Roll out” suggests gradual expansion.", "We’ll roll out the new checkout country by country.", "— When does everyone get access?\n— The rollout finishes in March.", "Describe a rollout plan for a new tool.")
  ],
  culture: "jagged-frontier",
  cultureNote: "The jagged frontier is the most useful single idea for AI strategy: don’t ask “Is AI good?” — ask “Is AI good at this specific task?”",
  sayBetter: {
    basic: "We need AI everywhere in the company quickly.",
    levels: [
      ["Level 1", "We should use AI across the company.", "Vague."],
      ["Level 2", "We should start using AI in customer service.", "One area."],
      ["Level 3", "I propose an AI pilot in customer service — high volume, low risk, measurable.", "Criteria."],
      ["Level 4", "Rather than AI everywhere, I’d start where value and feasibility are both high: drafting replies to routine customer emails. A six-week pilot with clear targets — handling time down 25%, satisfaction stable — and a decision at the end: scale or stop.", "Strategic, measured, decisive."]
    ],
    prompt: "Write your Level 4 AI proposal."
  },
  exercise: {
    title: "Value × feasibility",
    instructions: "Rate each AI use case and give a one-line recommendation.",
    items: [
      { q: "Generating product descriptions for 20,000 SKUs.", a: "High value, high feasibility — start here, with human spot checks." },
      { q: "Fully automated credit decisions for customers.", a: "High value but high risk and regulated (high-risk under the EU AI Act) — not a first pilot." },
      { q: "Internal search across policies and manuals.", a: "Medium value, high feasibility with RAG — good quick win." },
      { q: "AI writing the annual strategy.", a: "Low feasibility — AI can support analysis, but strategy requires judgement and accountability." }
    ]
  },
  think: { q: "What would “AI value” — not “AI activity” — look like for your team in 12 months?", angles: ["Which metric would move?", "What would people do with the time saved?", "What would you stop doing?"] },
  express: { prompt: "Write a one-page AI pilot proposal: problem, use case, success metrics, risks, timeline, decision point." },
  speak: { prompt: "Present your AI strategy for your area to the executive team in 2 minutes.", seconds: 120, structure: ["The problem", "The use case and why (value × feasibility)", "The pilot and metrics", "Risks and guardrails", "Decision you need"] },
  recall: [
    { q: "Senior Voice 12: What is an AI agent?", a: "A model connected to tools that acts in a loop to complete tasks." },
    { q: "What is the “jagged frontier”?", a: "AI’s uneven capability: very helpful on some tasks, harmful on similar-looking others." }
  ],
  reflect: "Is your company doing AI for value — or for appearances?",
  deep: { title: "Read: “Navigating the Jagged Technological Frontier” (2023)", body: "The working paper by Dell’Acqua, Mollick and colleagues is freely available; Ethan Mollick’s book Co-Intelligence (2024) explains it accessibly.", prompt: "Map three tasks in your role: inside, on, or outside the frontier?" }
});

T("v14", { n: 14, module: "AI for leaders", title: "Responsible AI and governance",
  why: "AI brings legal, ethical and reputational risks — bias, privacy, errors, transparency. Senior leaders are accountable. Being able to discuss governance precisely is now part of being credible in any boardroom.",
  learn: {
    body: [
      "The main risks: <strong>bias</strong> (models reflecting or amplifying unfair patterns in data), <strong>privacy</strong> (personal or confidential data entering systems inappropriately), <strong>accuracy</strong> (hallucinations), <strong>security</strong> (e.g. prompt injection — malicious instructions hidden in content), <strong>intellectual property</strong>, and <strong>accountability</strong> (who answers when AI is wrong?).",
      "Regulation is arriving. The <strong>EU AI Act</strong> entered into force in August 2024, with obligations phased in between 2025 and 2027. It classifies AI by risk: <em>unacceptable</em> (banned — e.g. social scoring), <em>high-risk</em> (strict requirements — e.g. AI in hiring, credit or education), <em>limited</em> risk (transparency duties, e.g. telling people they’re talking to AI) and <em>minimal</em> risk. Fines for prohibited practices can reach 7% of global turnover. Companies selling in the EU must comply wherever they are based.",
      "Practical frameworks include the US NIST AI Risk Management Framework (2023) and the ISO/IEC 42001 standard for AI management systems (2023).",
      "A simple governance stance for leaders: an <strong>inventory</strong> of where AI is used; <strong>risk classification</strong>; <strong>human oversight</strong> proportional to risk; <strong>clear data rules</strong> (what can and can’t be put into AI tools); and <strong>monitoring</strong> after launch."
    ],
    phrases: [
      { en: "What data is going into the model — and where does it go?", tone: "Governance", note: "The privacy question." },
      { en: "Have we tested it for bias?", tone: "Responsible", note: "Essential for HR, credit, pricing." },
      { en: "The level of oversight should match the level of risk.", tone: "Principled", note: "The core of risk-based governance." },
      { en: "Under the EU AI Act, this would likely be high-risk.", tone: "Informed", note: "Shows regulatory awareness." },
      { en: "Who is accountable if it gets this wrong?", tone: "Senior", note: "The accountability question." }
    ],
    tip: "Oversight proportional to risk."
  },
  vocab: [
    V("compliance", "kum-PLY-unce", "noun", "Following rules, laws and standards.", "Adjective: compliant. “Regulatory compliance.”", ["conformity", "adherence", "observance"], "“Adherence” is following closely. “Conformity” is matching a standard. “Observance” is often religious or customary. “Compliance” is the business/legal term for meeting requirements.", "Compliance with the EU AI Act will require documentation for high-risk systems.", "— Can we use AI to screen CVs?\n— Only with a compliance review — it’s high-risk.", "Name one compliance issue AI raises in your industry."),
    V("bias (algorithmic)", "BY-us", "noun", "Systematic unfairness in an AI system’s outputs, often from patterns in training data.", "Links to cognitive bias (Day 10) — human bias in, machine bias out.", ["discrimination", "skew", "prejudice"], "“Discrimination” is unfair treatment, often legal. “Skew” is statistical distortion. “Prejudice” is a human attitude. “Algorithmic bias” is unfairness built into automated systems.", "A hiring model trained on past hires may reproduce past bias.", "— Why did the tool rank women lower?\n— Probably bias in the historical data it learned from.", "How could bias enter an AI system in your company?"),
    V("transparency", "trans-PAIR-un-see", "noun", "Openness about how decisions are made and how systems work.", "A core principle of responsible AI.", ["openness", "clarity", "disclosure"], "“Openness” is general. “Disclosure” means revealing information. “Clarity” is being easy to understand. “Transparency” means people can see how and why.", "Customers deserve transparency when they’re talking to an AI.", "— Do we need to tell customers it’s AI?\n— Yes — transparency builds trust, and the law increasingly requires it.", "Write a transparency notice for an AI chatbot."),
    V("accountable", "uh-KOWN-tuh-bul", "adjective", "Responsible for decisions and actions, and required to explain them.", "AI can’t be accountable — people and organisations are.", ["responsible", "answerable", "liable"], "“Responsible” is general. “Answerable” must explain. “Liable” is legally responsible, often for damages. “Accountable” means owning the outcome and explaining it.", "A named person must be accountable for every AI system in production.", "— The AI made the mistake, not us.\n— Customers will hold us accountable anyway.", "Who should be accountable for AI decisions in your team?")
  ],
  culture: "eu-ai-act",
  cultureNote: "The EU AI Act may shape global practice the way GDPR shaped privacy — the so-called “Brussels effect”.",
  sayBetter: {
    basic: "AI is dangerous so we must be careful.",
    levels: [
      ["Level 1", "We need to be careful with AI.", "Vague fear."],
      ["Level 2", "We need rules about how we use AI.", "Better."],
      ["Level 3", "We should classify our AI uses by risk and add human review where the stakes are high.", "Risk-based."],
      ["Level 4", "I’m not worried about AI in general — I’m worried about unmanaged AI. I’d propose a simple inventory of where we use it, a risk rating for each use, human oversight proportional to that risk, and clear rules on customer data. That also prepares us for the EU AI Act.", "Calm, structured, regulation-aware."]
    ],
    prompt: "Describe your ideal AI governance at Level 4."
  },
  exercise: {
    title: "Classify the risk",
    instructions: "Under the EU AI Act’s logic, how risky is each use — and what oversight would you put in place?",
    items: [
      { q: "An AI chatbot answering delivery questions.", a: "Limited risk — disclose that it’s AI; offer a human option." },
      { q: "AI ranking job applicants.", a: "High-risk — bias testing, documentation, human decision-making, transparency to candidates." },
      { q: "AI writing internal meeting summaries.", a: "Minimal risk — basic data rules (no confidential HR data) and spot checks." },
      { q: "AI scoring citizens’ social behaviour.", a: "Unacceptable — banned in the EU." }
    ]
  },
  think: { q: "Where is the line between using customer data to personalise and using it to manipulate?", angles: ["Would customers be comfortable if they knew?", "Does it benefit them or only us?", "What would a regulator say?"] },
  express: { prompt: "Draft five rules for responsible AI use in your team, each one sentence, in plain English." },
  speak: { prompt: "A board member asks: “Are we exposed on AI risk?” Answer in 90 seconds.", seconds: 90, structure: ["Honest current state", "Main risks", "Regulation (EU AI Act)", "Your governance proposal", "Next step"] },
  recall: [
    { q: "Senior Voice 13: What is pilot purgatory?", a: "Endless AI pilots that never scale to measurable value." },
    { q: "The four risk tiers of the EU AI Act?", a: "Unacceptable, high, limited, minimal." }
  ],
  reflect: "Has anyone in your company put confidential data into a public AI tool? How would you know?",
  deep: { title: "Read: the European Commission’s AI Act overview", body: "The official summary pages explain the risk categories and timelines clearly.", prompt: "Identify which of your company’s AI uses could be high-risk and why." }
});

T("v15", { n: 15, module: "AI for leaders", title: "AI, jobs and leading people through it",
  why: "Your teams are asking — openly or silently — “Will AI take my job?” How senior leaders talk about this shapes trust, adoption and talent. It requires knowledge, honesty and empathy at once.",
  learn: {
    body: [
      "Economist Erik Brynjolfsson warns of the <strong>Turing Trap</strong> (2022): designing AI mainly to imitate and replace humans, rather than to <strong>augment</strong> them. Replacement saves costs; augmentation tends to create new value and new tasks.",
      "Evidence so far is nuanced. In a large study of customer-support agents (Brynjolfsson, Li & Raymond, 2023), an AI assistant increased productivity by about 14% on average — and by roughly a third for the least experienced workers, who learned faster. Other research suggests some tasks and roles will shrink, others grow, and many will change.",
      "Precise language helps: AI automates <strong>tasks</strong>, not whole <strong>jobs</strong> — but if enough tasks are automated, roles change or disappear. Be honest about that. False reassurance destroys trust faster than difficult truths.",
      "Leading people through it: explain the <strong>why</strong>; involve teams in redesigning their work; invest in <strong>reskilling</strong>; share gains (time saved goes to more meaningful work, not only more work); and acknowledge uncertainty openly."
    ],
    phrases: [
      { en: "AI changes tasks before it changes jobs.", tone: "Precise", note: "A nuanced framing." },
      { en: "I can’t promise nothing will change, but I can promise transparency.", tone: "Honest", note: "Avoids false reassurance." },
      { en: "We want AI to take the repetitive work, so you can focus on…", tone: "Augmentation", note: "Shows purpose." },
      { en: "Let’s redesign this process together.", tone: "Inclusive", note: "Involves people in change." },
      { en: "We’ll invest in reskilling before we restructure.", tone: "Commitment", note: "Only say it if true." }
    ],
    tip: "Honesty builds trust faster than reassurance."
  },
  vocab: [
    V("reskill", "ree-SKIL", "verb", "To train people in new skills so they can do a different job. Related: upskill (improve skills for the current job).", "Common in HR and transformation conversations.", ["retrain", "upskill", "develop"], "“Upskill” improves skills within the current role. “Retrain” is general. “Reskill” prepares people for a different role.", "We’re reskilling our call-centre staff as customer-experience analysts.", "— What happens to the team when the chatbot launches?\n— We’ll reskill them for complex cases and quality review.", "Which skill would you reskill your team in first?"),
    V("displace", "dis-PLAYS", "verb", "To take the place of something or someone; to force out of a job or place.", "A precise word for job loss caused by technology.", ["replace", "supplant", "push out"], "“Replace” is neutral. “Supplant” is formal, suggesting taking over. “Push out” is informal. “Displace” is the economic term for workers losing roles to technology or competition.", "Some roles will be displaced, while new ones emerge.", "— Will AI displace our designers?\n— It will change their work more than displace them.", "Write a balanced sentence about AI displacing work."),
    V("headcount", "HED-kownt", "noun", "The number of people employed by an organisation or team.", "Neutral corporate term — be aware it can sound cold when people are affected.", ["staff numbers", "workforce", "FTE"], "“Workforce” is all employees. “FTE” (full-time equivalent) is a precise measure. “Headcount” is the number of people — common in budgets.", "We won’t increase headcount; we’ll use automation for growth.", "— Does AI mean cutting headcount?\n— Our plan is to absorb growth without hiring, not to cut.", "Rewrite a headcount sentence so it sounds more human."),
    V("transition", "tran-ZISH-un", "noun / verb", "A change from one state or system to another.", "Softer than “change” or “restructure” — use honestly, not as a euphemism.", ["shift", "change", "move"], "“Change” is general. “Shift” suggests a change in direction. “Move” is physical or simple. “Transition” suggests a process over time.", "We’ll support everyone through the transition to new tools.", "— How long is the transition period?\n— Three months, with training and support.", "Describe a transition you led or lived through.")
  ],
  culture: "turing-trap",
  cultureNote: "Connect this with the Industrial Revolution and the Luddites (your Passport): workers rarely oppose technology itself — they oppose losing their livelihood without a voice.",
  sayBetter: {
    basic: "Don’t worry, AI will not take your jobs.",
    levels: [
      ["Level 1", "AI won’t replace everyone.", "Vague and slightly ominous."],
      ["Level 2", "AI will change some of our work.", "Honest but abstract."],
      ["Level 3", "AI will take over some repetitive tasks, and we’ll retrain people for the more complex work.", "Specific + commitment."],
      ["Level 4", "I won’t pretend nothing will change — some tasks will be automated, and some roles will evolve. What I can promise is transparency, a say in how we redesign the work, and investment in your skills before any restructuring. The goal is for AI to take the repetitive work, not the meaningful work.", "Honest, specific, humane and committed."]
    ],
    prompt: "Write what you’d say to your team about AI at Level 4."
  },
  exercise: {
    title: "Answer the team",
    instructions: "Respond honestly and humanely.",
    items: [
      { q: "“Is my job going to disappear?”", a: "“I can’t promise your role won’t change — some tasks will be automated. I can promise you’ll hear it from me first and that we’ll invest in your skills.”" },
      { q: "“Why should I help train the AI that replaces me?”", a: "“That’s a fair question. Our aim is for it to handle repetitive cases so you can focus on complex ones — and you shaping it means it works the way you would.”" },
      { q: "“Will we have to do more work with the same pay?”", a: "“Some time saved will go to growth, but I also want some of it to go to better work and development. Let’s agree on that together.”" }
    ]
  },
  think: { q: "If AI could do 30% of your tasks tomorrow, what would you want to do with that time — and what would your company want?", angles: ["Are those the same?", "Who decides?", "What makes work meaningful to you?"] },
  express: { prompt: "Write a short message (6–8 sentences) to your team announcing an AI initiative: why, what changes, what doesn’t, how they’ll be involved." },
  speak: { prompt: "In a town hall, someone asks: “Will AI replace us?” Answer in 90 seconds.", seconds: 90, structure: ["Acknowledge the fear", "Honest facts", "Augmentation, not only automation", "Commitments", "Invitation to participate"] },
  recall: [
    { q: "Senior Voice 14: Which risk tier under the EU AI Act covers AI in hiring?", a: "High-risk." },
    { q: "What is the Turing Trap?", a: "Designing AI to replace humans rather than augment them." }
  ],
  reflect: "How do you personally feel about AI and your own career? Name the feeling precisely (Day 16).",
  deep: { title: "Read: Erik Brynjolfsson, “The Turing Trap” (2022)", body: "Freely available essay in Daedalus. Or the summary of the call-centre study (“Generative AI at Work”).", prompt: "Write one way your company could choose augmentation over automation." }
});

T("v16", { n: 16, module: "Automation & operations", title: "Automation: what to automate — and what not",
  why: "Automation is one of the fastest ways to create value in operations and e-commerce — and one of the easiest ways to waste money. Senior leaders must know what to automate, in what order, and why.",
  learn: {
    body: [
      "Two classic warnings still apply. In 1990, Michael Hammer wrote in Harvard Business Review: “<em>Don’t automate, obliterate</em>” — redesign processes instead of speeding up broken ones. And Bill Gates, in <em>The Road Ahead</em> (1995): automation applied to an efficient operation magnifies efficiency; applied to an inefficient one, it magnifies inefficiency.",
      "The right order: <strong>map</strong> the process (who does what, where time goes), <strong>simplify</strong> (remove steps, approvals, exceptions), <strong>standardise</strong>, then <strong>automate</strong>.",
      "Types of automation: <strong>workflow automation</strong> (rules connecting systems: “when an order is cancelled, refund and notify”); <strong>RPA — robotic process automation</strong> (software that mimics clicks in existing systems; useful but fragile); and <strong>AI automation</strong> (handling unstructured inputs and judgement — classifying emails, extracting invoice data, drafting replies). Increasingly, AI agents combine all three.",
      "Good candidates: high volume, repetitive, rule-based, stable, with clear inputs. Poor candidates: rare, constantly changing, high-judgement or relationship-heavy tasks. Always design <strong>exception handling</strong> — what happens when the automation doesn’t know."
    ],
    phrases: [
      { en: "Let’s map the process before we automate it.", tone: "Disciplined", note: "Prevents a faster mess." },
      { en: "Can we remove this step entirely?", tone: "Radical", note: "Hammer’s “obliterate”." },
      { en: "What happens when it hits an exception?", tone: "Rigorous", note: "The key design question." },
      { en: "This is high-volume and rule-based — a strong candidate.", tone: "Analytical", note: "Explains selection." },
      { en: "Automate a mess and you get a faster mess.", tone: "Memorable", note: "A line people remember." }
    ],
    tip: "Simplify, standardise, then automate."
  },
  vocab: [
    V("streamline", "STREEM-lyne", "verb", "To make a process simpler and more efficient.", "Core operations vocabulary.", ["simplify", "rationalise", "optimise"], "“Simplify” makes easier. “Rationalise” removes unnecessary parts (also can mean justify). “Optimise” makes as effective as possible. “Streamline” removes friction and unnecessary steps.", "We streamlined returns from nine steps to four before automating.", "— How did you cut processing time?\n— We streamlined approvals first, then automated.", "Describe a process you’d streamline."),
    V("bottleneck", "BOT-ul-nek", "noun", "A point of congestion that slows down a whole process.", "From the narrow neck of a bottle.", ["obstacle", "constraint", "choke point"], "An “obstacle” is anything in the way. A “constraint” limits capacity. A “choke point” is a narrow passage (often logistics or military). A “bottleneck” slows the whole flow.", "Manual invoice approval is the bottleneck in our payment process.", "— Why are deliveries late?\n— The warehouse picking stage is the bottleneck.", "Identify a bottleneck in your work."),
    V("exception", "ik-SEP-shun", "noun", "A case that doesn’t follow the normal rule.", "“Exception handling” = how a system deals with unusual cases.", ["anomaly", "special case", "outlier"], "An “anomaly” is unexpected. An “outlier” is statistically far from the norm. A “special case” needs specific treatment. An “exception” falls outside the rule.", "Ninety percent of orders are automated; the exceptions go to a specialist team.", "— What if the address is invalid?\n— That’s an exception — it’s routed to a person.", "Name three exceptions a process at work must handle."),
    V("end-to-end", "END-tuh-END", "adjective", "Covering a whole process from beginning to finish.", "“End-to-end process”, “end-to-end ownership”.", ["complete", "full", "holistic"], "“Complete” is general. “Full” is quantity. “Holistic” considers the whole system, often abstractly. “End-to-end” covers every step from start to finish.", "We need end-to-end visibility, from order to delivery.", "— Who owns the customer journey?\n— No one end-to-end — that’s the problem.", "Describe an end-to-end process in your company.")
  ],
  culture: "gates-automation",
  cultureNote: "Hammer and Gates wrote decades before generative AI — and their warning matters more now, because AI makes automating a messy process tempting and easy.",
  sayBetter: {
    basic: "Let’s automate everything to save money.",
    levels: [
      ["Level 1", "We should automate more processes.", "Vague."],
      ["Level 2", "We should automate invoice processing.", "Specific."],
      ["Level 3", "Before automating invoices, we should simplify approvals — otherwise we’ll automate the bottleneck.", "Order of operations."],
      ["Level 4", "I’d start with invoice processing: high volume, rule-based and currently our main bottleneck. But first we should remove two approval steps that add nothing — otherwise we’d just automate a mess. Exceptions would go to a small specialist team.", "Selection criteria + simplify first + exception handling."]
    ],
    prompt: "Propose one automation in your area at Level 4."
  },
  exercise: {
    title: "Automate, simplify, or leave?",
    instructions: "Decide and explain briefly.",
    items: [
      { q: "Order-confirmation emails.", a: "Automate — high volume, rule-based, stable." },
      { q: "A 7-step approval for refunds under €20.", a: "Simplify first — remove most approvals; then automate." },
      { q: "Negotiating with key suppliers.", a: "Leave to people — relationship and judgement-heavy; AI can support preparation." },
      { q: "Classifying 5,000 customer emails a day by topic.", a: "AI automation — high volume, unstructured, with human review of low-confidence cases." }
    ]
  },
  think: { q: "Which process in your company would you redesign from scratch if you could?", angles: ["Why does it exist in its current form?", "Who would resist the change?", "What would customers notice?"] },
  express: { prompt: "Describe one process in your area: map it in 5–7 steps, identify the bottleneck, propose what to remove, and what to automate." },
  speak: { prompt: "Explain to your CFO which process you’d automate first and why — in 90 seconds.", seconds: 90, structure: ["The process and the bottleneck", "Simplify first", "Automation approach", "Exceptions", "Expected impact"] },
  recall: [
    { q: "Senior Voice 15: Reskill vs upskill?", a: "Reskill = train for a different role; upskill = improve skills for the current role." },
    { q: "Hammer’s 1990 advice?", a: "“Don’t automate, obliterate” — redesign processes first." }
  ],
  reflect: "What part of your own work would you love to automate — and what part would you never give up?",
  deep: { title: "Process-mapping exercise", body: "Take one process and time each step for a week. Mark: value-adding, necessary but not value-adding, and waste.", prompt: "Write which steps you’d remove, simplify and automate." }
});

T("v17", { n: 17, module: "Automation & operations", title: "Measuring what matters",
  why: "Senior leaders are judged by results — and by whether they measure the right things. Knowing the language of KPIs, OKRs and leading indicators lets you set direction clearly and spot misleading metrics.",
  learn: {
    body: [
      "A <strong>KPI</strong> (key performance indicator) tracks ongoing performance: conversion rate, delivery time, cost per order. <strong>OKRs</strong> (Objectives and Key Results), developed by Andy Grove at Intel and brought to Google by John Doerr in 1999, set direction: an inspiring <em>Objective</em> (“Make delivery a reason customers choose us”) with measurable <em>Key Results</em> (“Next-day delivery for 90% of orders; delivery NPS above 60”).",
      "Key results are <strong>outcomes</strong>, not <strong>outputs</strong> or tasks. “Launch a new tracking page” is an output. “Reduce ‘where is my order?’ contacts by 30%” is an outcome.",
      "Distinguish <strong>leading indicators</strong> (predict future results — e.g. add-to-cart rate, pipeline) from <strong>lagging indicators</strong> (report past results — revenue, churn). Beware <strong>vanity metrics</strong> that look good but don’t drive decisions (page views, app downloads without retention).",
      "And remember <strong>Goodhart’s law</strong>, in Marilyn Strathern’s popular phrasing: “When a measure becomes a target, it ceases to be a good measure.” If you reward call-centre speed, calls get shorter — and customers call back."
    ],
    phrases: [
      { en: "Is that an output or an outcome?", tone: "Sharp", note: "The key OKR question." },
      { en: "What’s the leading indicator for that?", tone: "Forward-looking", note: "Seeks early signals." },
      { en: "That feels like a vanity metric.", tone: "Critical", note: "Challenges impressive but useless numbers." },
      { en: "What behaviour will this metric encourage?", tone: "Wise", note: "Goodhart’s law in practice." },
      { en: "We’re on track for two of our three key results.", tone: "Reporting", note: "Clear status language." }
    ],
    tip: "People optimise what you measure. Choose carefully."
  },
  vocab: [
    V("KPI", "kay-pee-EYE", "noun", "Key performance indicator — a measurable value showing how well something is performing.", "Say the letters. Plural: KPIs.", ["metric", "measure", "indicator"], "A “metric” is any measurement. An “indicator” signals a state. A “KPI” is one of the few metrics chosen as most important for performance.", "Our main KPI this year is cost per order.", "— Which KPIs does the board track?\n— Revenue, margin, conversion and delivery time.", "Name your team’s three most important KPIs."),
    V("outcome", "OWT-kum", "noun", "The result or effect of an action — especially the change it creates.", "Contrast with “output” (what you produce).", ["result", "impact", "effect"], "An “output” is what you produce (a report, a feature). An “outcome” is the change that results (fewer complaints). “Impact” is the broader effect.", "We measure outcomes, not activity.", "— We launched three features this quarter!\n— Great outputs — but what outcomes did they change?", "Turn an output from your work into an outcome."),
    V("on track", "on TRAK", "phrase", "Progressing as planned and likely to achieve a goal.", "Status language: on track / at risk / off track.", ["on schedule", "on target", "going to plan"], "“On schedule” is about time. “On target” is about numbers. “Going to plan” is informal. “On track” covers overall progress.", "We’re on track to hit the Q3 target.", "— How’s the migration?\n— On track for budget, slightly at risk on timeline.", "Give a status update using on track / at risk."),
    V("benchmark", "BENCH-mark", "noun / verb", "A standard or point of reference for comparison; to compare against such a standard.", "Used for performance, prices and competitors.", ["standard", "yardstick", "reference point"], "A “standard” is an accepted level. A “yardstick” is a measure for comparison (informal). A “benchmark” is a specific reference point, often from competitors or industry.", "Our conversion rate is below the industry benchmark.", "— Is a 2% conversion rate good?\n— Let’s benchmark against similar retailers.", "What would you benchmark in your business — and against whom?")
  ],
  culture: "okrs",
  cultureNote: "Goodhart was an economist writing about monetary policy (1975); his warning now applies to every dashboard in every company.",
  sayBetter: {
    basic: "Our goal is to be better at delivery.",
    levels: [
      ["Level 1", "We want to improve delivery.", "Vague."],
      ["Level 2", "We want faster delivery this year.", "Direction."],
      ["Level 3", "Our objective is faster delivery; key result: 90% of orders delivered next day by Q4.", "Objective + measurable result."],
      ["Level 4", "Our objective is to make delivery a reason customers choose us. We’ll know we’ve succeeded if 90% of orders arrive next day and ‘where is my order?’ contacts fall by a third. We’ll watch for side effects — speed shouldn’t come at the cost of damaged parcels.", "Inspiring objective + outcome key results + Goodhart awareness."]
    ],
    prompt: "Write one Level 4 OKR for your area."
  },
  exercise: {
    title: "Output or outcome?",
    instructions: "Classify each, and rewrite outputs as outcomes.",
    items: [
      { q: "“Launch a new returns portal.”", a: "Output → “Cut return-processing time from 7 days to 3.”" },
      { q: "“Increase repeat-purchase rate from 25% to 32%.”", a: "Outcome — good key result." },
      { q: "“Publish 50 blog posts.”", a: "Output → “Grow organic traffic that converts by 20%.”" },
      { q: "“Implement an AI chatbot.”", a: "Output → “Resolve 40% of queries without a human, with satisfaction above 4/5.”" }
    ]
  },
  think: { q: "Which metric in your company is driving the wrong behaviour?", angles: ["What does it reward?", "What does it ignore?", "What would you measure instead?"] },
  express: { prompt: "Write one Objective with three Key Results for your team next quarter, plus one risk of Goodhart’s law and how you’ll watch for it." },
  speak: { prompt: "Present your team’s OKRs for next quarter to leadership in 90 seconds.", seconds: 90, structure: ["The objective — why it matters", "Three key results", "Leading indicators you’ll watch", "A risk", "What you need"] },
  recall: [
    { q: "Senior Voice 16: Simplify, standardise, then…?", a: "Automate." },
    { q: "Goodhart’s law, popular phrasing?", a: "When a measure becomes a target, it ceases to be a good measure." }
  ],
  reflect: "How do you measure your own success? Is it a vanity metric?",
  deep: { title: "Read: John Doerr, Measure What Matters (2018)", body: "The popular introduction to OKRs, with cases from Intel, Google and others.", prompt: "Audit your team’s current goals: outputs or outcomes?" }
});

T("v18", { n: 18, module: "Automation & operations", title: "Leading change",
  why: "AI, automation and new platforms all mean change — and change fails more often from people than from technology. Senior leaders must create urgency, build coalitions and communicate the why.",
  learn: {
    body: [
      "John Kotter’s <strong>8-step model</strong>, first set out in Harvard Business Review (1995) and the book <em>Leading Change</em> (1996), remains one of the most used: (1) create urgency; (2) build a guiding coalition; (3) form a strategic vision; (4) communicate it widely; (5) remove obstacles; (6) generate short-term wins; (7) sustain acceleration; (8) anchor the change in culture.",
      "Another popular model, Prosci’s <strong>ADKAR</strong>, focuses on individuals: <strong>A</strong>wareness of the need, <strong>D</strong>esire to participate, <strong>K</strong>nowledge of how, <strong>A</strong>bility to do it, <strong>R</strong>einforcement to sustain it.",
      "Be careful with a famous statistic: “70% of change programmes fail” is widely repeated but weakly evidenced. A credible leader says “many change programmes struggle” — and explains why.",
      "Communication is the heart of change: repeat the <em>why</em> far more than feels necessary; tell people what will change and what won’t; listen to resistance — it often contains useful information; and celebrate early wins visibly."
    ],
    phrases: [
      { en: "Here’s why we can’t stay where we are.", tone: "Urgency", note: "Kotter step 1." },
      { en: "What won’t change is…", tone: "Reassuring, honest", note: "Gives stability during change." },
      { en: "What’s getting in your way?", tone: "Removing obstacles", note: "Leader as enabler." },
      { en: "I want to celebrate an early win.", tone: "Momentum", note: "Short-term wins sustain energy." },
      { en: "What concerns haven’t we heard yet?", tone: "Listening", note: "Treats resistance as information." }
    ],
    tip: "People don’t resist change. They resist not understanding it."
  },
  vocab: [
    V("momentum", "moh-MEN-tum", "noun", "The force or energy that keeps something moving or developing.", "Essential in change and growth conversations.", ["impetus", "drive", "energy"], "“Energy” is general. “Impetus” is the initial push. “Drive” is determination. “Momentum” is energy that builds as things move.", "The first quick win gave the project real momentum.", "— People are losing interest.\n— We need a visible win to rebuild momentum.", "How would you build momentum for a change at work?"),
    V("resistance", "ri-ZIS-tunce", "noun", "Opposition to change or to an idea.", "Not always negative — resistance can contain valuable warnings.", ["opposition", "reluctance", "pushback"], "“Opposition” is active and organised. “Reluctance” is unwillingness. “Pushback” is everyday business disagreement. “Resistance” is the general term in change management.", "The resistance from the warehouse team revealed a real safety issue.", "— Why is the rollout so slow?\n— There’s resistance — people weren’t consulted.", "What does resistance usually signal in your experience?"),
    V("champion", "CHAM-pee-un", "noun / verb", "A person who actively supports a cause; to support actively.", "“Change champions” are influential employees who promote a change.", ["advocate", "sponsor", "supporter"], "A “supporter” agrees. An “advocate” speaks for something. A “sponsor” is a senior person who funds or protects it. A “champion” actively promotes it.", "We need a champion in every regional team.", "— Who’s championing the new system?\n— The head of logistics — she’s our strongest advocate.", "Who would be the champions for a change in your company?"),
    V("buy into", "BY IN-too", "phrasal verb", "To believe in and accept an idea or plan.", "Related to the noun buy-in (v8).", ["accept", "believe in", "embrace"], "“Accept” can be passive. “Embrace” is enthusiastic. “Believe in” is about conviction. “Buy into” means accept and commit to.", "People won’t buy into a change they don’t understand.", "— Does the team buy into the new strategy?\n— Not yet. They don’t see the problem it solves.", "What makes you buy into a change?")
  ],
  culture: "kotter",
  cultureNote: "Kotter’s first step, urgency, is where most leaders under-invest: if people don’t feel the problem, they won’t want the solution.",
  sayBetter: {
    basic: "From Monday everyone must use the new system.",
    levels: [
      ["Level 1", "We’re moving to the new system on Monday.", "Announcement only."],
      ["Level 2", "We’re moving to the new system on Monday because the old one can’t handle our volume.", "The why."],
      ["Level 3", "On Monday we move to the new system — the old one crashed four times last month. Training starts tomorrow, and support will be on the floor all week.", "Why + support."],
      ["Level 4", "I want to explain why we’re changing systems. Last month the old one crashed four times during peak hours, and customers felt it. On Monday we move to the new system. What won’t change: your teams, your targets, your managers. What will help: training tomorrow and support on the floor all week. And if something isn’t working, I want to hear it.", "Urgency, change, stability, support, listening."]
    ],
    prompt: "Announce a real or imagined change at Level 4."
  },
  exercise: {
    title: "Which step is missing?",
    instructions: "Identify which Kotter step was skipped and what you’d do.",
    items: [
      { q: "The CEO announces an AI strategy by email; nothing happens.", a: "Urgency and coalition — involve influential leaders and explain the cost of not changing." },
      { q: "Teams like the idea but their systems block them.", a: "Remove obstacles — fix tools, permissions, processes." },
      { q: "After six months, people return to old habits.", a: "Anchor in culture — embed in processes, hiring, rewards." },
      { q: "A year-long programme with no visible results; energy fades.", a: "Short-term wins — plan and celebrate early, visible successes." }
    ]
  },
  think: { q: "What is the change your organisation needs but isn’t ready for — and what would create urgency?", angles: ["Who feels the problem most?", "Who benefits from the status quo?", "What would an early win look like?"] },
  express: { prompt: "Plan a change in your area using Kotter: write one concrete action for each of the eight steps." },
  speak: { prompt: "Announce a significant change to your team in 2 minutes, using urgency, vision, what won’t change, support and listening.", seconds: 120, structure: ["Urgency: why now", "Vision", "What changes / what won’t", "Support", "Invitation to raise concerns"] },
  recall: [
    { q: "Senior Voice 17: Output vs outcome?", a: "Output = what you produce; outcome = the change it creates." },
    { q: "What does ADKAR stand for?", a: "Awareness, Desire, Knowledge, Ability, Reinforcement." }
  ],
  reflect: "Think of a change you resisted. What would have helped you buy into it?",
  deep: { title: "Read: Kotter, “Leading Change: Why Transformation Efforts Fail” (HBR, 1995)", body: "The original article is short and still widely taught.", prompt: "Map a recent change in your company against the eight steps." }
});

T("v19", { n: 19, module: "E-commerce", title: "E-commerce fundamentals: the funnel and unit economics",
  why: "Whether you work in e-commerce or alongside it, its core equations shape strategy discussions. Knowing them precisely — and saying them fluently — makes you credible with founders, CFOs and boards.",
  learn: {
    body: [
      "The fundamental equation: <strong>Revenue = Traffic × Conversion rate × Average order value (AOV)</strong>. Every initiative works on one of these levers. Many online stores convert only a small percentage of visitors — often cited as around 2–3% — so small improvements matter enormously.",
      "The <strong>funnel</strong> describes the journey: awareness → visit → product view → add to cart → checkout → purchase → repeat. Analysing where people drop off (e.g. <strong>cart abandonment</strong>) shows where to act.",
      "Profitability depends on <strong>unit economics</strong>: <strong>CAC</strong> (customer acquisition cost) versus <strong>LTV</strong> (customer lifetime value — the profit a customer generates over time). A common rule of thumb is LTV at least three times CAC. Also watch <strong>contribution margin</strong> per order after shipping, returns and payment fees.",
      "<strong>Retention</strong> is the most underrated lever. Frederick Reichheld’s research at Bain & Company found that increasing customer retention by 5% could increase profits by 25% to 95%. Acquiring a new customer usually costs far more than keeping one."
    ],
    phrases: [
      { en: "Which lever are we pulling — traffic, conversion or basket size?", tone: "Strategic", note: "Frames any initiative." },
      { en: "Our CAC is rising faster than our LTV.", tone: "Analytical", note: "A classic warning sign." },
      { en: "Where in the funnel are we losing people?", tone: "Diagnostic", note: "Finds the problem." },
      { en: "Retention is our cheapest growth lever.", tone: "Insightful", note: "A senior perspective." },
      { en: "What’s the contribution margin after returns?", tone: "Rigorous", note: "Profit, not just revenue." }
    ],
    tip: "Revenue is vanity, margin is sanity, retention is reality."
  },
  vocab: [
    V("conversion rate", "kun-VUR-zhun rayt", "noun", "The percentage of visitors who complete a desired action, usually a purchase.", "Measured in % — changes in percentage points (v9).", ["close rate", "success rate"], "“Close rate” is used in sales. “Success rate” is general. “Conversion rate” is the e-commerce standard.", "Our mobile conversion rate is half our desktop rate.", "— Why is revenue flat with more traffic?\n— Conversion fell — the new checkout is confusing.", "What affects conversion rate most in your business?"),
    V("churn", "CHURN", "noun / verb", "The rate at which customers stop buying or cancel; to stop being a customer.", "Opposite of retention. Common in subscriptions and SaaS.", ["attrition", "turnover", "defection"], "“Attrition” is gradual loss (also of employees). “Turnover” is replacement rate. “Defection” is switching to a competitor. “Churn” is the standard customer-loss term.", "Monthly churn on our subscription box is 8%.", "— Why is growth slowing?\n— We’re acquiring customers but churning them fast.", "How would you reduce churn in your business?"),
    V("average order value", "AV-rij OR-der VAL-yoo", "noun", "The average amount spent per order. Abbreviation: AOV.", "Raised through bundles, thresholds and recommendations.", ["basket size", "ticket size"], "“Basket size” can mean items or value. “Ticket size” is used in retail and finance. “AOV” is the standard e-commerce metric.", "Free delivery over €50 raised our AOV by 18%.", "— How can we grow without more traffic?\n— Increase AOV with bundles and recommendations.", "Suggest two ways to raise AOV."),
    V("cart abandonment", "KART uh-BAN-dun-ment", "noun", "When shoppers add products to their cart but leave without buying.", "Common causes: unexpected costs, forced account creation, slow checkout.", ["drop-off", "checkout abandonment"], "“Drop-off” is any loss in a funnel. “Checkout abandonment” happens during payment. “Cart abandonment” is the broader term.", "Unexpected shipping costs are a major cause of cart abandonment.", "— Seventy percent of carts are abandoned!\n— Let’s show delivery costs earlier and test guest checkout.", "Name three causes of cart abandonment.")
  ],
  culture: "unit-economics",
  cultureNote: "The “growth at all costs” era showed what happens when CAC exceeds LTV. Today boards ask about unit economics first.",
  sayBetter: {
    basic: "We need more sales, so let’s do more marketing.",
    levels: [
      ["Level 1", "We should spend more on marketing.", "One lever, no diagnosis."],
      ["Level 2", "We should improve conversion before buying more traffic.", "Lever choice."],
      ["Level 3", "Traffic is up but conversion is down, so more marketing would just raise CAC. Let’s fix checkout first.", "Diagnosis + logic."],
      ["Level 4", "Before increasing marketing spend, I’d look at the funnel: traffic is up 20%, but conversion has dropped from 2.6% to 2.1%, mostly at checkout. Fixing that is cheaper than buying more visitors — and retention is the bigger prize: our repeat rate is only 22%.", "Funnel thinking, precise numbers, unit economics, retention."]
    ],
    prompt: "Diagnose a growth problem in your business at Level 4."
  },
  exercise: {
    title: "Which lever?",
    instructions: "Name the lever (traffic, conversion, AOV, retention) and one action.",
    items: [
      { q: "Many visitors view products but few add to cart.", a: "Conversion — improve product pages: photos, reviews, clear delivery information." },
      { q: "Customers buy once and never return.", a: "Retention — post-purchase emails, loyalty programme, better delivery experience." },
      { q: "Customers buy one cheap item per order.", a: "AOV — bundles, free-shipping threshold, recommendations." },
      { q: "Great conversion, but very few visitors.", a: "Traffic — SEO, partnerships, paid channels with careful CAC limits." }
    ]
  },
  think: { q: "In your business, which matters more right now — acquiring new customers or keeping existing ones? Why does the organisation focus on the other?", angles: ["Who is rewarded for what?", "What does the data say?", "What do customers complain about?"] },
  express: { prompt: "Write a short diagnosis (6–8 sentences) of your company’s or a familiar brand’s e-commerce performance using traffic, conversion, AOV, CAC/LTV and retention." },
  speak: { prompt: "Explain the e-commerce revenue equation and unit economics to a new executive in 90 seconds — with an example.", seconds: 90, structure: ["The equation", "The funnel", "CAC vs LTV", "Retention", "One recommendation"] },
  recall: [
    { q: "Senior Voice 18: Kotter’s first step?", a: "Create a sense of urgency." },
    { q: "The e-commerce revenue equation?", a: "Traffic × conversion rate × average order value." }
  ],
  reflect: "Think of your favourite online shop. Why do you keep going back? What would make you leave?",
  deep: { title: "Do a funnel audit", body: "Shop on your own company’s site (or a competitor’s) as a customer, from search to delivery. Note every point of friction.", prompt: "Write your top five friction points and which lever each affects." }
});

T("v20", { n: 20, module: "E-commerce", title: "Marketplaces, D2C and omnichannel",
  why: "E-commerce strategy debates often revolve around business models: sell through marketplaces, build your own direct channel, or integrate online and physical stores. Knowing the trade-offs — including in Latin America — lets you contribute strategically.",
  learn: {
    body: [
      "<strong>Marketplaces</strong> (Amazon, Mercado Libre, Zalando) offer enormous reach and trust, but take fees, control the customer relationship and data, and create intense price competition. On Amazon, third-party sellers account for more than half of units sold.",
      "<strong>D2C (direct-to-consumer)</strong> brands sell through their own channels — like Warby Parker (founded 2010) or Dollar Shave Club, acquired by Unilever in 2016 for a reported $1 billion. D2C gives control of brand, data and margins, but acquisition costs can be high.",
      "<strong>Omnichannel</strong> integrates online and physical experiences: buy online, pick up in store (BOPIS); returns in store; unified stock and customer data. Customers don’t think in channels — they think in convenience.",
      "Context matters. In Latin America, <strong>Mercado Libre</strong>, founded in 1999 by Marcos Galperin in Argentina, succeeded by building the missing infrastructure itself: payments (Mercado Pago) to solve trust, and logistics (Mercado Envios) to solve delivery. In many emerging markets, e-commerce means solving trust, payments and delivery — not just building a website."
    ],
    phrases: [
      { en: "We’d gain reach but lose the customer relationship.", tone: "Trade-off", note: "The marketplace dilemma." },
      { en: "Owning the data is the strategic prize.", tone: "Strategic", note: "Why D2C matters." },
      { en: "Customers don’t think in channels.", tone: "Customer-centric", note: "The case for omnichannel." },
      { en: "What’s our channel mix?", tone: "Analytical", note: "Balance of channels." },
      { en: "In this market, trust and payments come before the website.", tone: "Context-aware", note: "Emerging-market insight." }
    ],
    tip: "Every channel is a trade-off between reach, control and margin."
  },
  vocab: [
    V("marketplace", "MAR-kit-plays", "noun", "An online platform where many sellers offer products to buyers.", "“Third-party sellers” sell on the marketplace; the platform takes fees.", ["platform", "exchange", "online mall"], "A “platform” is broader (any digital service connecting users). An “exchange” trades financial assets. A “marketplace” connects buyers and many sellers.", "Selling on the marketplace doubled our reach but cut our margins.", "— Should we list on Amazon?\n— For reach, yes — but we’d keep our best products exclusive to our site.", "List two pros and two cons of selling through a marketplace."),
    V("direct-to-consumer", "dih-REKT tuh kun-SYOO-mer", "adjective", "Selling directly to customers without intermediaries. Abbreviation: D2C or DTC.", "Brands like Warby Parker made the model famous.", ["direct sales", "own-channel"], "“Direct sales” can include salespeople. “Own-channel” is informal. “D2C” describes brands selling online directly to end customers.", "Our D2C channel has lower volume but triple the margin.", "— Why invest in our own site?\n— D2C gives us the customer data and relationship.", "Would a D2C channel make sense in your industry?"),
    V("omnichannel", "OM-nee-chan-ul", "adjective", "Integrating all sales and service channels into one seamless customer experience.", "Different from “multichannel” — many channels, not necessarily connected.", ["multichannel", "unified commerce", "cross-channel"], "“Multichannel” means present in several channels. “Cross-channel” means some movement between them. “Omnichannel” means fully integrated — one customer, one experience.", "Omnichannel customers tend to spend more than single-channel customers.", "— Can customers return online orders in store?\n— Yes — that’s the core of our omnichannel strategy.", "Describe an omnichannel experience you’ve enjoyed as a customer."),
    V("margin", "MAR-jin", "noun", "The difference between revenue and cost, often as a percentage.", "Gross margin, contribution margin, net margin — know which you mean.", ["profit", "markup", "spread"], "“Profit” is the absolute amount. “Markup” is added to cost to set price (different calculation). “Margin” is profit as a share of revenue.", "Marketplace fees reduce our margin by about 15 points.", "— Sales are up, so we’re doing well?\n— Not if margin keeps shrinking.", "Explain the difference between markup and margin.")
  ],
  culture: "mercadolibre",
  cultureNote: "Mercado Libre is a reminder that business models don’t copy-paste across markets: infrastructure, trust and payments shape what works.",
  sayBetter: {
    basic: "We should sell on Amazon because it is big.",
    levels: [
      ["Level 1", "We should sell on marketplaces.", "No trade-off."],
      ["Level 2", "Marketplaces would give us more reach.", "One benefit."],
      ["Level 3", "Marketplaces would give us reach, but we’d lose margin and customer data.", "The trade-off."],
      ["Level 4", "I’d use marketplaces for reach with a curated range — our entry products — while keeping new launches and loyalty benefits on our own site. That way we gain discovery without handing over our best customers and their data.", "A nuanced channel strategy."]
    ],
    prompt: "Propose a channel strategy at Level 4."
  },
  exercise: {
    title: "Choose the model",
    instructions: "Recommend a channel approach for each business, with one reason.",
    items: [
      { q: "A new skincare brand with a strong story and limited budget.", a: "D2C first for brand and data, plus a selective marketplace presence for discovery." },
      { q: "A supermarket chain with 300 stores.", a: "Omnichannel — click-and-collect, store-based delivery, unified loyalty." },
      { q: "A small electronics accessories seller.", a: "Marketplaces — reach and trust matter more than brand for commodity products." },
      { q: "A furniture retailer in a market with low trust in online payments.", a: "Offer trusted payment options (local wallets, pay on delivery) and showrooms — trust before scale." }
    ]
  },
  think: { q: "Will marketplaces and super-apps eventually dominate everything — or will brands keep their own channels?", angles: ["What does your own shopping behaviour say?", "What do brands lose in marketplaces?", "How might AI shopping agents change this?"] },
  express: { prompt: "Write a one-paragraph channel strategy recommendation for your company or a brand you know." },
  speak: { prompt: "Explain marketplaces, D2C and omnichannel — and recommend a mix for a brand you know.", seconds: 120, structure: ["Marketplaces: reach vs control", "D2C: data and margin", "Omnichannel: seamless experience", "Local context", "Your recommendation"] },
  recall: [
    { q: "Senior Voice 19: CAC vs LTV — rule of thumb?", a: "LTV should be at least about three times CAC." },
    { q: "How did Mercado Libre solve trust?", a: "By building its own payments system, Mercado Pago (and logistics)." }
  ],
  reflect: "Where do you shop — marketplaces, brand sites, stores? What does that tell you about customers?",
  deep: { title: "Case study: Mercado Libre", body: "Read a business case or long-form article on Mercado Libre’s history and strategy.", prompt: "Write three lessons from its strategy for your business." }
});

T("v21", { n: 21, module: "E-commerce", title: "Experimentation and data-driven decisions",
  why: "In digital business, opinions are cheap and experiments are powerful. Senior leaders who understand A/B testing — and its traps — make better decisions and build cultures where evidence beats hierarchy.",
  learn: {
    body: [
      "An <strong>A/B test</strong> randomly splits users between two versions (A = control, B = variant) and measures which performs better on a chosen metric. Randomisation means differences are likely caused by the change, not by who saw it.",
      "Small changes can be worth a lot. Ron Kohavi and Stefan Thomke described a Bing experiment in which a minor change to how ad headlines were displayed increased revenue by 12% — worth over $100 million a year in the US (HBR, 2017). They also reported that at Microsoft roughly a third of experiments improved the target metric, a third had no effect, and a third made it worse. <strong>Most ideas don’t work as expected.</strong>",
      "Common traps: <strong>peeking</strong> (stopping a test as soon as it looks good), <strong>small samples</strong>, testing many metrics until one is “significant”, and ignoring <strong>guardrail metrics</strong> (e.g. conversion up, but returns up too). <strong>Statistical significance</strong> estimates how likely a result is to be due to chance; it doesn’t tell you whether the effect is big enough to matter.",
      "Culturally, experimentation shifts decisions from the <strong>HiPPO</strong> — “highest paid person’s opinion” — to evidence. That includes you."
    ],
    phrases: [
      { en: "Let’s test it rather than debate it.", tone: "Pragmatic", note: "Ends opinion wars." },
      { en: "Is the result statistically significant?", tone: "Rigorous", note: "The basic question." },
      { en: "It’s significant, but is it meaningful?", tone: "Senior", note: "Effect size matters." },
      { en: "What are our guardrail metrics?", tone: "Careful", note: "Watches for side effects." },
      { en: "I was wrong — the data says otherwise.", tone: "Humble", note: "Leaders modelling evidence over ego." }
    ],
    tip: "Most good ideas aren’t. That’s why we test."
  },
  vocab: [
    V("hypothesis", "hy-POTH-uh-sis", "noun", "A proposed explanation or prediction that can be tested. Plural: hypotheses (-seez).", "A good test starts with one: “If we…, then…, because…”", ["assumption", "theory", "prediction"], "An “assumption” is taken for granted. A “theory” is a broad, tested explanation. A “prediction” is a forecast. A “hypothesis” is a specific, testable proposition.", "Our hypothesis is that showing delivery dates on product pages will raise conversion.", "— Why are we testing this?\n— Hypothesis: free returns will increase first-time purchases.", "Write a hypothesis for a test in your business: If…, then…, because…"),
    V("statistically significant", "stuh-TIS-tik-lee sig-NIF-ih-kunt", "phrase", "Unlikely to have occurred by chance, according to a statistical test.", "Not the same as important — a tiny effect can be significant with enough data.", ["reliable", "real", "non-random"], "In everyday English “significant” means important (Day 4). In statistics, it means unlikely to be chance. Be clear which you mean.", "The increase was statistically significant but very small.", "— Variant B won!\n— After two days? Let’s wait until it’s statistically significant.", "Explain the difference between significant and meaningful."),
    V("sample size", "SAM-pul syze", "noun", "The number of observations or participants in a test or study.", "Small samples produce unreliable results.", ["sample", "number of users", "n"], "“Sample” is the group. “Sample size” is how many. In research it’s written “n”.", "With that sample size, the result could easily be chance.", "— 20 customers preferred the new design!\n— That sample size is too small to decide.", "Why does sample size matter for decisions?"),
    V("iterate", "IT-uh-rayt", "verb", "To repeat a process, improving it each time.", "Core to digital work: launch, learn, iterate.", ["refine", "repeat", "improve"], "“Repeat” is the same again. “Refine” improves details. “Improve” is general. “Iterate” means cycles of build–measure–learn.", "We launched a simple version and iterated weekly based on data.", "— The first version isn’t perfect.\n— That’s fine — we’ll iterate.", "Describe something you improved through iteration.")
  ],
  culture: "ab-testing",
  cultureNote: "Experimentation connects to confirmation bias (Day 10): a test is a structured way of looking for evidence that you might be wrong.",
  sayBetter: {
    basic: "I think the new design is better, so let’s use it.",
    levels: [
      ["Level 1", "I prefer the new design.", "Opinion."],
      ["Level 2", "I think the new design will convert better.", "A prediction."],
      ["Level 3", "Let’s A/B test the new design against the current one before deciding.", "Evidence."],
      ["Level 4", "I like the new design, but my opinion isn’t evidence. I’d propose an A/B test for three weeks, with conversion as the main metric and returns as a guardrail. If it wins significantly and meaningfully, we roll it out.", "Humble, rigorous and decisive."]
    ],
    prompt: "Propose a test for a real debate at work at Level 4."
  },
  exercise: {
    title: "Spot the trap",
    instructions: "What’s wrong with each conclusion?",
    items: [
      { q: "“After one day, variant B is up 15% — let’s launch!”", a: "Peeking and too-small sample — wait for the planned duration and significance." },
      { q: "“We tested 20 metrics and one improved significantly.”", a: "Multiple comparisons — by chance alone, one of 20 may look significant." },
      { q: "“Conversion rose 10%, so the change was a success.”", a: "Check guardrails — did returns, complaints or margin worsen?" },
      { q: "“The CEO likes version A, so we don’t need to test.”", a: "HiPPO — opinion isn’t evidence, even senior opinion." }
    ]
  },
  think: { q: "Which decision in your company is made by opinion that could be made by experiment?", angles: ["Who would resist testing?", "What’s the cost of being wrong?", "What can’t be A/B tested?"] },
  express: { prompt: "Design an A/B test for your business: hypothesis, variants, primary metric, guardrail metrics, duration, decision rule." },
  speak: { prompt: "Two directors disagree about a website change. In 90 seconds, propose an experiment to settle it — diplomatically.", seconds: 90, structure: ["Acknowledge both views", "Hypothesis", "Test design", "Metrics and guardrails", "Decision rule"] },
  recall: [
    { q: "Senior Voice 20: Multichannel vs omnichannel?", a: "Multichannel = present in several channels; omnichannel = fully integrated experience." },
    { q: "What did Kohavi report about experiment outcomes at Microsoft?", a: "Roughly a third improved, a third no effect, a third worse." }
  ],
  reflect: "When did data prove you wrong? How did you react?",
  deep: { title: "Read: Kohavi & Thomke, “The Surprising Power of Online Experiments” (HBR, 2017)", body: "A clear, practical article — and a good basis for a team discussion.", prompt: "Write three rules for experimentation you’d introduce in your team." }
});

T("v22", { n: 22, module: "E-commerce", title: "The future of commerce",
  why: "Commerce is moving into social media, live video, instant delivery and — increasingly — AI agents that shop on our behalf. Senior leaders are expected to have an informed, calibrated view of these trends: neither hype nor dismissal.",
  learn: {
    body: [
      "<strong>Social commerce</strong> — buying inside social platforms — grew first and fastest in China, where <strong>livestream shopping</strong> became a major retail channel and Pinduoduo (founded 2015) pioneered social group-buying. TikTok Shop and creator-led selling have spread these models to other markets.",
      "<strong>Quick commerce</strong> — delivery in minutes from local “dark stores” — has grown in markets like India, while struggling to make money in others. A reminder that what works depends on density, labour costs and habits.",
      "<strong>Agentic commerce</strong> is the emerging frontier: AI agents that search, compare and complete purchases for customers. From 2025, payment networks and AI companies began launching ways for agents to transact. If an agent chooses for the customer, brands must be legible to machines — clear product data, reliable reviews, transparent pricing — as well as appealing to humans.",
      "A calibrated view separates <strong>signal from noise</strong>: what is already proven (mobile, marketplaces, social discovery), what is growing (live and creator commerce), and what is still uncertain (agents at scale). “It’s early, but the direction is clear” is often the most honest sentence."
    ],
    phrases: [
      { en: "It’s early, but the direction is clear.", tone: "Calibrated", note: "Neither hype nor dismissal." },
      { en: "Commerce is moving to where attention already is.", tone: "Insightful", note: "Social commerce in one sentence." },
      { en: "We need to be legible to machines, not just attractive to humans.", tone: "Forward-looking", note: "Agentic commerce implication." },
      { en: "What worked in China won’t necessarily translate here.", tone: "Context-aware", note: "Avoids copy-paste strategy." },
      { en: "Let’s run a small experiment before we bet on it.", tone: "Pragmatic", note: "Test emerging trends." }
    ],
    tip: "Separate what’s proven, what’s growing and what’s still a bet."
  },
  vocab: [
    V("emerging", "ih-MUR-jing", "adjective", "Starting to exist or become important.", "Calibrated: suggests real but early.", ["nascent", "developing", "budding"], "“Developing” is general. “Budding” is informal and positive. “Nascent” is formal and very early. “Emerging” is the standard business word for early but growing.", "Agentic commerce is an emerging trend — promising but unproven at scale.", "— Should we invest in live shopping?\n— It’s emerging here; let’s pilot before investing heavily.", "Name an emerging trend in your industry."),
    V("disruption", "dis-RUP-shun", "noun", "A major change that transforms an industry, often displacing established companies.", "Popularised by Clayton Christensen’s “disruptive innovation” (1997) — often overused.", ["upheaval", "transformation", "shake-up"], "“Transformation” is broad change. “Upheaval” is violent change. “Shake-up” is informal reorganisation. “Disruption” specifically means a new model undermining incumbents.", "AI shopping agents could cause real disruption to search advertising.", "— Is this a disruption or just a trend?\n— Too early to tell. Let’s watch customer behaviour.", "Is anything disrupting your industry right now?"),
    V("hype", "HYPE", "noun / verb", "Exaggerated publicity or excitement; to promote excessively.", "Calling something hype is a judgement — be ready to justify it.", ["buzz", "exaggeration", "spin"], "“Buzz” is excitement, often positive. “Spin” is deliberate framing. “Exaggeration” overstates. “Hype” is excessive excitement beyond the evidence.", "There’s a lot of hype around AI agents; let’s focus on what’s working today.", "— Everyone says the metaverse is the future of shopping.\n— A few years ago, yes. That was hype.", "Separate hype from substance in one current trend."),
    V("frictionless", "FRIK-shun-lus", "adjective", "Smooth and effortless, with no obstacles.", "Common in product and e-commerce language.", ["seamless", "effortless", "smooth"], "“Smooth” is general. “Effortless” is easy. “Seamless” means no visible joins between parts. “Frictionless” means no obstacles slowing the user.", "One-click checkout made buying almost frictionless.", "— Why did conversion improve?\n— We made checkout frictionless — no forced account.", "Describe a frictionless experience you’ve had as a customer.")
  ],
  culture: "social-commerce",
  cultureNote: "Connect this with the attention economy (your Passport): commerce follows attention — and AI agents may soon control a large share of it.",
  sayBetter: {
    basic: "AI agents will change everything in shopping.",
    levels: [
      ["Level 1", "AI will change online shopping.", "Vague."],
      ["Level 2", "AI shopping agents could change how people buy.", "Specific trend."],
      ["Level 3", "If AI agents start buying for customers, our product data and reviews matter more than our ads.", "Implication."],
      ["Level 4", "It’s early, but the direction seems clear: as AI agents begin to shop on customers’ behalf, the battle shifts from catching attention to being chosen by machines. I’d start with the basics — clean product data, transparent pricing, strong reviews — and a small pilot with agent-based channels.", "Calibrated, implication-driven, actionable."]
    ],
    prompt: "Give your view on one commerce trend at Level 4."
  },
  exercise: {
    title: "Proven, growing, or a bet?",
    instructions: "Classify each trend for your market and give one action.",
    items: [
      { q: "Mobile-first shopping", a: "Proven — optimise mobile checkout relentlessly." },
      { q: "Livestream shopping", a: "Growing in some markets — pilot with creators before committing." },
      { q: "AI agents completing purchases", a: "Emerging bet — prepare product data; watch carefully." },
      { q: "10-minute grocery delivery", a: "Context-dependent — viable in dense cities with low costs; risky elsewhere." }
    ]
  },
  think: { q: "If an AI agent did all your shopping, what would brands have to do to win you?", angles: ["Would you trust it?", "What would you never delegate?", "What happens to brand loyalty?"] },
  express: { prompt: "Write a short briefing (6–8 sentences) for your CEO on one commerce trend: what it is, the evidence, what’s uncertain, what we should do." },
  speak: { prompt: "A board member asks: “Should we worry about AI shopping agents?” Answer in 2 minutes with a calibrated view.", seconds: 120, structure: ["What agentic commerce is", "What’s proven vs uncertain", "Implications for us", "What we should do now", "What we’ll watch"] },
  recall: [
    { q: "Senior Voice 21: Significant vs meaningful?", a: "Significant = unlikely to be chance; meaningful = big enough to matter." },
    { q: "What is agentic commerce?", a: "AI agents searching, comparing and completing purchases for customers." }
  ],
  reflect: "Which trend excites you most professionally — and which worries you?",
  deep: { title: "Follow one trend for a month", body: "Choose one trend (social, quick or agentic commerce). Save one reputable article a week.", prompt: "At the end of the month, write your calibrated view in 150 words." }
});

T("v23", { n: 23, module: "Capstone", title: "The board-level update",
  why: "Presenting to a board or executive committee is the ultimate test of senior communication: little time, high stakes, sharp questions. This lesson combines everything — pyramid structure, data, presence, risk and AI fluency.",
  learn: {
    body: [
      "Boards want three things: <strong>Where are we?</strong> (performance against plan), <strong>What matters?</strong> (risks, opportunities, decisions) and <strong>What do you need from us?</strong> (decisions, support, resources). Everything else is detail they can read.",
      "Structure in three minutes: <strong>headline</strong> (one sentence — the state of the business); <strong>three key points</strong> with numbers; <strong>one risk</strong> and how you’re managing it; <strong>the ask</strong>. Send a written pre-read so the meeting is for discussion, not reading slides aloud.",
      "Handling questions: listen fully; answer the question asked, briefly; if you don’t know, say so and commit to a time (“I’ll come back to you by Friday”); if challenged, acknowledge, then respond with evidence; never be defensive. Bridge back to your message when useful: “That’s an important point — and it links to our main risk…”",
      "Tone: calm, concise, candid. Bad news early and plainly, with a plan. Boards forgive problems; they don’t forgive surprises."
    ],
    phrases: [
      { en: "The headline is…", tone: "Executive", note: "Opens with the state of the business." },
      { en: "There are three things I’d like to highlight.", tone: "Structured", note: "Signposts." },
      { en: "The main risk is…, and here’s how we’re managing it.", tone: "Candid", note: "Risk with a plan." },
      { en: "What we need from the board today is…", tone: "Clear ask", note: "Ends with a decision." },
      { en: "I don’t have that figure with me; I’ll send it by tomorrow.", tone: "Composed", note: "Handling unknowns." }
    ],
    tip: "Boards forgive problems. They don’t forgive surprises."
  },
  vocab: [
    V("pre-read", "PREE-reed", "noun", "A document sent before a meeting for participants to read in advance.", "Standard practice for boards and executive committees.", ["briefing pack", "background paper", "memo"], "A “memo” is a short internal document. A “briefing pack” is a set of documents. A “pre-read” is specifically meant to be read before the meeting.", "The pre-read covers the numbers, so we can use the meeting for decisions.", "— Should I present all the data?\n— Put it in the pre-read and focus on the decision.", "What would you include in a pre-read for your next important meeting?"),
    V("headwind", "HED-wind", "noun", "A factor that slows progress. Opposite: tailwind.", "Very common in executive and investor language.", ["obstacle", "challenge", "drag"], "An “obstacle” blocks. A “challenge” is difficult. A “drag” slows (informal). A “headwind” is an external force working against you.", "Rising shipping costs are a significant headwind this quarter.", "— Why is margin down?\n— Two headwinds: currency and higher logistics costs.", "Name one headwind and one tailwind for your business."),
    V("mitigate", "MIT-ih-gayt", "verb", "To make something less severe or harmful.", "Board language: “mitigate a risk”. Don’t confuse with “militate”.", ["reduce", "alleviate", "lessen"], "“Reduce” is general. “Alleviate” is for pain or problems. “Lessen” is everyday. “Mitigate” is the formal term for reducing risk or impact.", "To mitigate supplier risk, we’ve qualified a second source.", "— What if the launch slips?\n— We’ve mitigated that with a phased rollout.", "Write how you’d mitigate one risk in your area."),
    V("going forward", "GOH-ing FOR-werd", "phrase", "From now on; in the future.", "Very common corporate phrase — useful, but don’t overuse.", ["from now on", "in future", "moving forward"], "“From now on” is plain. “In future” is British. “Moving forward” is similar. “Going forward” is the standard corporate phrase.", "Going forward, we’ll report AI savings separately.", "— Will this happen again?\n— Going forward, every change will be tested first.", "Write a commitment starting with “Going forward…”")
  ],
  culture: "minto",
  cultureNote: "The board update is the Pyramid Principle under pressure: answer first, three arguments, evidence, ask.",
  sayBetter: {
    basic: "So, this quarter many things happened. Sales went up in some areas and down in others, and we had some problems with logistics but we fixed them mostly.",
    levels: [
      ["Level 1", "This quarter was mixed: sales up in some areas, down in others.", "Shorter, still vague."],
      ["Level 2", "We’re slightly behind plan, mainly because of logistics problems.", "Headline + cause."],
      ["Level 3", "We’re 3% behind plan on revenue, driven by delivery delays in September. Those are now resolved, and October is back on track.", "Precise, with resolution."],
      ["Level 4", "The headline: we’re 3% behind plan on revenue, but recovering. Three points — delivery delays in September cost us about €1.2 million; the fix is in place and October is on plan; and our AI service pilot cut handling time by 28%. The main risk is peak-season capacity, which we’re mitigating with a second carrier. What we need today is approval for the carrier contract.", "Headline, three numbered points, risk with mitigation, clear ask."]
    ],
    prompt: "Write your own Level 4 board update."
  },
  exercise: {
    title: "Handle the question",
    instructions: "Respond to each board question in two or three sentences.",
    items: [
      { q: "“Why didn’t you see the delivery problem coming?”", a: "“Fair challenge. Our early-warning metrics focused on volume, not carrier performance; we’ve added daily carrier tracking so we’d catch it within 48 hours.”" },
      { q: "“What’s the ROI on the AI pilot?”", a: "“On current results, roughly 3:1 in year one, from handling-time savings. I’ll include the full model in the next pre-read.”" },
      { q: "“What keeps you up at night?”", a: "“Peak-season capacity. We’ve mitigated it with a second carrier, but if volume exceeds forecast by 20%, we’d still be stretched.”" }
    ]
  },
  think: { q: "What do you want the board to think about you after your next presentation — and what would create that impression?", angles: ["Composure under questions?", "Command of numbers?", "Honesty about risk?"] },
  express: { prompt: "Write a 3-minute board update script for your area: headline, three points with numbers, one risk with mitigation, one ask." },
  speak: { prompt: "Deliver a 3-minute board update for your area. Then answer a tough question: “Why should we believe this plan?”", seconds: 180, structure: ["Headline", "Three key points with numbers", "Risk and mitigation", "The ask", "A tough question — answered calmly"] },
  recall: [
    { q: "Senior Voice 22: Proven, growing or a bet — agentic commerce?", a: "An emerging bet (as of now)." },
    { q: "Three things boards want to know?", a: "Where are we? What matters? What do you need from us?" }
  ],
  reflect: "Which part of presenting to senior leaders still makes you most nervous? What specific practice would help?",
  deep: { title: "Rehearse with Claude", body: "Use the “Ask Claude” button on your speaking answer, and ask it to play a sceptical board member and question you.", prompt: "Write the three hardest questions you were asked and your best answers." }
});

T("v24", { n: 24, module: "Capstone", title: "Your leadership narrative",
  why: "The final lesson brings together your pitch, your values and your vision. Senior leaders are asked constantly — in interviews, town halls, panels — “What do you stand for? Where are you taking us?” A clear, authentic narrative is your strongest asset.",
  learn: {
    body: [
      "Simon Sinek’s 2009 TED talk, “How great leaders inspire action”, popularised the <strong>Golden Circle</strong>: start with <strong>why</strong> (purpose), then <strong>how</strong> (approach), then <strong>what</strong> (results). The communication advice is useful; his claims linking it to specific brain regions are oversimplified — a good example of using an idea while staying precise (Learning Brain 8).",
      "A leadership narrative has four parts: <strong>where you come from</strong> (a formative experience that explains your values — Day 29); <strong>what you believe</strong> (two or three principles); <strong>what you’ve done</strong> (proof); and <strong>where you’re going</strong> (a vision that includes others).",
      "Example: “I grew up watching my mother run a small shop, so I learned early that operations are where promises are kept or broken (origin). I believe in simple processes, honest numbers and technology that makes people better, not smaller (beliefs). In the last three years, my team cut delivery times by a third and automated 40% of routine work without losing a single job (proof). Next, I want us to become the region’s most trusted retailer — where AI handles the routine and people handle what matters (vision).”",
      "Authenticity beats polish. Your accent, your path and your second language are part of the story — often the most memorable part."
    ],
    phrases: [
      { en: "What drives me is…", tone: "Purposeful", note: "Your why (Day 1 revisited)." },
      { en: "I believe that…", tone: "Principled", note: "States values clearly." },
      { en: "Where I want to take us is…", tone: "Visionary", note: "Includes others in the future." },
      { en: "I learned early that…", tone: "Narrative", note: "Connects origin to values." },
      { en: "Here’s what that looks like in practice.", tone: "Concrete", note: "Proof behind the words." }
    ],
    tip: "Origin, beliefs, proof, vision — in your own voice."
  },
  vocab: [
    V("vision", "VIZH-un", "noun", "A clear idea of the future you want to create.", "Strong visions are specific enough to guide decisions.", ["goal", "aspiration", "mission"], "A “goal” is specific and measurable. An “aspiration” is a hope. A “mission” is what an organisation does and why. A “vision” is the future it aims to create.", "My vision is a company where technology handles the routine and people handle what matters.", "— What’s your vision for the team?\n— To be the team other departments come to when they want something fixed properly.", "Write your professional vision in one sentence."),
    V("authentic", "aw-THEN-tik", "adjective", "Genuine, true to yourself; not copied or false.", "Overused in leadership language — show it rather than claim it.", ["genuine", "sincere", "real"], "“Genuine” is real, not fake. “Sincere” is honest in feeling. “Real” is general. “Authentic” means true to your own character and values.", "Her speech worked because it was authentic — she told her real story.", "— Should I hide my career break?\n— No. An authentic story is more powerful than a perfect one.", "What makes a leader seem authentic to you?"),
    V("purpose", "PUR-pus", "noun", "The reason something exists or is done.", "“Purpose-driven” is common — make it concrete.", ["mission", "aim", "reason"], "“Aim” is a goal. “Reason” explains why. “Mission” is an organisation’s defined purpose. “Purpose” is the deeper why behind action.", "When people understand the purpose, they find better ways to achieve it.", "— Why does this project matter?\n— Its purpose is to make sure no customer waits more than a day.", "What is the purpose of your work, in one sentence?"),
    V("legacy", "LEG-uh-see", "noun", "Something left behind for those who come after.", "In leadership: what you want to be remembered for (Month 3 history, revisited).", ["heritage", "impact", "inheritance"], "“Heritage” is cultural tradition. “Inheritance” is what is passed down, often money. “Impact” is effect. “Legacy” is what endures after you leave.", "I want my legacy to be the people I developed, not the systems I built.", "— What do you want to leave behind here?\n— A team that doesn’t need me.", "What legacy do you want to leave in your current role?")
  ],
  culture: "sinek",
  cultureNote: "Sinek’s idea works because purpose genuinely motivates people (self-determination theory, in your Passport) — even if the brain science in the talk is simplified.",
  sayBetter: {
    basic: "I am a good leader and I work hard and I want the company to grow.",
    levels: [
      ["Level 1", "I’m a committed leader who wants the company to grow.", "Generic."],
      ["Level 2", "I lead with simple processes and honest numbers.", "Principles."],
      ["Level 3", "I believe operations are where promises to customers are kept or broken — that’s what drives how I lead.", "Belief + why."],
      ["Level 4", "I learned early, in my mother’s small shop, that operations are where promises are kept or broken. That’s why I lead with simple processes, honest numbers and technology that makes people better, not smaller. Where I want to take us next is to become the retailer customers trust most — and the place good people want to work.", "Origin, beliefs, vision — authentic and memorable."]
    ],
    prompt: "Write your own Level 4 leadership narrative."
  },
  exercise: {
    title: "Build your narrative",
    instructions: "Write one or two sentences for each part. Compare with the model.",
    items: [
      { q: "Origin — a formative experience", a: "“My first job was in a call centre, so I know what it feels like to apologise for a broken process.”" },
      { q: "Beliefs — two or three principles", a: "“I believe in fixing root causes, telling the truth with data, and using technology to make work more human.”" },
      { q: "Proof — what you’ve done", a: "“In two years, we halved complaints and automated a third of routine work while reskilling the whole team.”" },
      { q: "Vision — where you’re going, including others", a: "“I want us to be the company where customers never have to chase us — and where employees are proud of how we work.”" }
    ]
  },
  think: { q: "What do you want to be known for as a leader — and what would the woman on Day 1 think of that answer?", angles: ["What values would you never compromise?", "Whose leadership inspired you — and why?", "What role does your journey in English play in your story?"] },
  express: { prompt: "Write your leadership narrative (200–250 words): origin, beliefs, proof, vision. Make it sound like you." },
  speak: { prompt: "At a leadership panel, the host asks: “Tell us about yourself as a leader and where you’re heading.” Answer in 2 minutes.", seconds: 120, structure: ["Origin: a formative moment", "Beliefs: two or three principles", "Proof: one result", "Vision: where you’re taking others", "A closing line"] },
  recall: [
    { q: "Senior Voice 23: Three things boards want to know?", a: "Where are we? What matters? What do you need from us?" },
    { q: "Senior Voice 1: Four parts of an elevator pitch?", a: "Who you help, problem solved, proof, bridge/ask." },
    { q: "The four parts of a leadership narrative?", a: "Origin, beliefs, proof, vision." }
  ],
  reflect: "Twenty-four weeks ago you wrote your first pitch. Read it again. What has changed — in your English, and in how you see yourself as a leader?",
  deep: { title: "Record your narrative — and your Day-1 pitch", body: "Record your leadership narrative and compare it with your first elevator pitch from Senior Voice 1.", prompt: "Write three differences you notice — in structure, vocabulary and presence." }
});
})();
