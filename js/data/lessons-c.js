/* Days 15–21, fully written. */
(function () {
const V = TAW.V;

TAW.lessons[15] = {
  day: 15, title: "Talking about work without sounding like a CV", kicker: "English · Work",
  cats: ["english", "conversation"], skills: ["english", "conversation"], difficulty: "Foundation", minutes: 30,
  why: "“What do you do?” is the most common question in adult conversation — and most people answer it with a job title, which ends the conversation. Today you learn to describe your work so that people understand it, remember it and want to ask more.",
  learn: {
    body: [
      "A job title is a label (Day 1). It tells people your category, not your work. “I’m a project manager” could mean almost anything. What people actually find interesting is <strong>the problem you solve, what the work demands, and what you enjoy or struggle with</strong>.",
      "A useful structure is <strong>role → problem → contribution → feeling</strong>: “I work in logistics (role). Basically, I make sure medicines arrive at hospitals before they expire (problem). My part is predicting where shortages will happen (contribution). It’s stressful, but there’s something very satisfying about a crisis that never happens (feeling).”",
      "Notice the difference between describing <em>duties</em> (“I’m responsible for managing the team”) and describing <em>reality</em> (“Most of my day is spent untangling misunderstandings between people who all mean well”). Duties sound like a CV. Reality sounds like a person.",
      "Adjust the level of detail to the listener. With someone outside your field, avoid jargon (Day 12) and use one concrete example. With a colleague, you can be more technical. With a stranger at a party, a single vivid sentence is often enough — they’ll ask for more if they want it."
    ],
    phrases: [
      { en: "What I actually spend my day doing is…", tone: "Honest, engaging", note: "Moves from the title to the reality. People appreciate the candour." },
      { en: "Basically, I help… (to)…", tone: "Clear, outward-looking", note: "Frames your work around who benefits: “Basically, I help small businesses get paid on time.”" },
      { en: "The part people don’t see is…", tone: "Insightful", note: "Reveals the hidden side of your job — often the most interesting part." },
      { en: "What I find most rewarding is…", tone: "Warm", note: "Adds feeling. Pair it with what you find difficult for balance." },
      { en: "It’s less glamorous than it sounds.", tone: "Self-deprecating, light", note: "Useful when your job title impresses people — it keeps you approachable." }
    ],
    tip: "Don’t tell people your title. Tell them your problem."
  },
  vocab: [
    V("responsibility", "ri-spon-suh-BIL-ih-tee", "noun", "A duty or task that you are trusted to do; being accountable for something.", "Can sound formal and CV-like in conversation. Use it when you want to stress accountability, not just activity.", ["duty", "obligation", "role"], "A “duty” is a task you must do. An “obligation” is something you are bound to do, often legally or morally. A “responsibility” implies you’ll be held accountable for the result.", "The biggest responsibility in my job is making sure nobody gets paid late.", "— Do you like being a manager?\n— I like the people. The responsibility for their mistakes, less so.", "Name your biggest real responsibility — at work or in life."),
    V("contribute", "kun-TRIB-yoot", "verb", "To give something — effort, ideas, money — that helps achieve a result.", "Modest and collaborative: it suggests you are part of something larger.", ["add", "help", "play a part in"], "“Help” is general. “Add” suggests something extra. “Contribute” implies a meaningful share of a shared result — great for talking about teamwork without exaggerating.", "I contribute mostly on the research side; others handle the clients.", "— Did you design the whole campaign?\n— No, I contributed the strategy. The visuals were someone else’s.", "Describe what you contribute to a team or a family."),
    V("demanding", "di-MAHN-ding", "adjective", "Needing a lot of time, effort, skill or attention.", "Neutral to positive — it implies challenge, not complaint. Compare “exhausting”, which complains.", ["challenging", "taxing", "exhausting"], "“Challenging” suggests a stimulating difficulty. “Taxing” is about draining your energy. “Exhausting” is negative. “Demanding” describes what the work asks of you — and can describe people too (“a demanding boss”).", "It’s a demanding job, but I’d be bored in anything easier.", "— How’s the new role?\n— Demanding. In a good way, mostly.", "Describe something demanding in your life — and whether you like it."),
    V("rewarding", "ri-WOR-ding", "adjective", "Giving satisfaction, often in a way that isn’t about money.", "Very useful for talking about work with meaning (Day 11).", ["satisfying", "fulfilling", "worthwhile"], "“Satisfying” is about a pleasant sense of completion. “Fulfilling” is deeper — about meaning and purpose. “Worthwhile” means worth the effort. “Rewarding” covers the sense that effort was repaid emotionally.", "Teaching isn’t well paid, but it’s incredibly rewarding.", "— Why do you volunteer at weekends?\n— Honestly? It’s the most rewarding thing I do all week.", "What’s the most rewarding part of your work?"),
    V("day-to-day", "day-tuh-DAY", "adjective / noun", "Ordinary, routine; relating to what happens every day.", "Helps you move from a big-picture title to concrete reality.", ["daily", "routine", "everyday"], "“Daily” is about frequency. “Routine” suggests repetition, sometimes boring. “Day-to-day” describes the ordinary practical reality — often contrasted with strategy or theory.", "On a day-to-day basis, I mostly answer emails and solve small fires.", "— Is your job as exciting as it sounds?\n— The day-to-day is pretty ordinary. The results are exciting.", "Describe the day-to-day reality of your work in two sentences.")
  ],
  culture: "terkel",
  cultureNote: "Terkel’s insight was that ordinary people describing ordinary jobs say profound things — about dignity, boredom, pride and meaning. Your work, described honestly, is more interesting than your title.",
  sayBetter: {
    basic: "I work in marketing. It’s okay.",
    levels: [
      ["Level 1", "I work in marketing, and I mostly enjoy it.", "Clearer — but still a category."],
      ["Level 2", "I work in marketing for a food company — I mostly write campaigns.", "Now we know what you actually do."],
      ["Level 3", "I write campaigns for a food company. Basically, I try to convince people that cereal can be exciting.", "Concrete and slightly funny — a conversation can start here."],
      ["Level 4", "I write campaigns for a food company — basically, I spend my days trying to work out why people choose one box of cereal over another. It’s less glamorous than it sounds, but the psychology fascinates me.", "Problem + self-deprecation + genuine interest. The listener now has three threads to pick up."]
    ],
    prompt: "Describe your own work at Level 4."
  },
  exercise: {
    title: "From duties to reality",
    instructions: "Rewrite each CV-style sentence so it describes the real work, using role → problem → contribution → feeling.",
    items: [
      { q: "I am responsible for customer service operations.", a: "I run a team that answers angry emails — our job is to turn people who want to cancel into people who stay. Strangely, I love it." },
      { q: "I am a nurse in the paediatric department.", a: "I’m a children’s nurse. A lot of my job is actually calming parents down — the kids are often braver than the adults." },
      { q: "I manage financial reporting for the company.", a: "I make sure the numbers the company tells investors are true. It sounds dry, but when something doesn’t add up, it’s basically detective work." },
      { q: "I am currently between jobs.", a: "I’m between jobs at the moment — which has turned into an unexpected chance to work out what I actually want to do next." },
      { q: "I am a student of architecture.", a: "I’m studying architecture — at the moment I’m obsessed with why some public squares feel alive and others feel empty." }
    ]
  },
  think: {
    q: "Is your job part of your identity — or just something you do? Should it be?",
    angles: ["How do people in your country answer “What do you do?”", "What happens to people’s identity when they retire or lose a job?", "Would you still do your work if you didn’t need the money?"]
  },
  express: { prompt: "Write a 5–6 sentence description of your work (or studies, or main occupation) for someone outside your field. Include the problem you solve, the day-to-day reality, and one thing that’s rewarding or demanding." },
  speak: {
    prompt: "Describe your work to someone outside your field — what you do, what’s hard about it, and what you’d miss if you left.", seconds: 90,
    structure: ["Role in one sentence", "The problem you solve, with a concrete example", "The day-to-day reality", "What’s demanding / rewarding", "What you’d miss"]
  },
  recall: [
    { q: "Day 12: The four steps of the Feynman technique?", a: "Choose a concept; explain it simply; notice where you get stuck; go back and simplify, ideally with an analogy." },
    { q: "Day 1: Why do labels make weak introductions?", a: "They tell people your category, not your mind. Orientations (what you’re drawn to) are memorable." },
    { q: "Day 13: What does “subjective” mean — and what’s a more nuanced way to use it?", a: "Based on personal feelings. Better: “It’s partly subjective, but…”" }
  ],
  reflect: "When someone asks what you do, how do you feel? Proud, defensive, bored, apologetic? Why?",
  deep: {
    title: "Read: Studs Terkel, Working — the introduction",
    body: "The introduction to Working is a few pages long and one of the great pieces of writing about work. Read it, then read two or three of the interviews (the steelworker Mike LeFevre and the editor Nora Watson are often anthologised).",
    prompt: "Interview someone you know about their work using Terkel’s approach: let them talk. Write 200 words capturing what they said that surprised you."
  }
};

TAW.lessons[16] = {
  day: 16, title: "Describing emotions precisely", kicker: "English · Emotions",
  cats: ["english", "psychology"], skills: ["english", "articulation"], difficulty: "Foundation", minutes: 30,
  why: "Most learners have three emotion words: happy, sad, stressed. But your inner life is far more precise than that — and so is the way articulate people describe it. Today’s vocabulary will change how you talk about your experiences, and possibly how you understand them.",
  learn: {
    body: [
      "The psychologist and neuroscientist Lisa Feldman Barrett calls it <strong>emotional granularity</strong>: the ability to distinguish between closely related feelings. Someone with low granularity feels “bad”. Someone with high granularity can tell whether they feel disappointed, resentful, embarrassed, lonely or anxious — and in studies, people with higher granularity tend to cope better with stress.",
      "There is also a striking finding about naming feelings. In a 2007 brain-imaging study, Matthew Lieberman and colleagues at UCLA found that putting a feeling into words was associated with reduced activity in the amygdala, a region involved in emotional reactions. Researchers call this <strong>affect labelling</strong>. Naming a feeling may help you hold it at a little distance.",
      "Precision works in three dimensions: <strong>type</strong> (anxious vs. apprehensive), <strong>intensity</strong> (annoyed → frustrated → exasperated → furious) and <strong>mixture</strong> — real emotions are rarely pure. “I felt relieved but slightly guilty” is more honest, and more interesting, than “I felt okay”.",
      "Some languages have words English lacks. Portuguese <em>saudade</em> — a longing for something or someone absent, perhaps never to return — has no single English equivalent. Articulate speakers don’t pretend there is one; they explain: “There’s a Portuguese word, saudade, which is something like nostalgia mixed with love…”"
    ],
    phrases: [
      { en: "I felt a mixture of… and…", tone: "Honest, nuanced", note: "Real emotions are mixed. Naming two at once sounds mature." },
      { en: "It wasn’t so much X as Y.", tone: "Precise", note: "From Day 4 — perfect for emotions: “It wasn’t so much anger as disappointment.”" },
      { en: "If I’m honest, I was…", tone: "Vulnerable", note: "Signals you’re about to admit a less flattering feeling." },
      { en: "I couldn’t quite put my finger on it, but…", tone: "Reflective", note: "For feelings you’re still trying to understand." },
      { en: "There’s a word in Portuguese/Spanish for this…", tone: "Cultured", note: "Bringing in an untranslatable word is a lovely conversational move." }
    ],
    tip: "Not “bad”. Which kind of bad?"
  },
  vocab: [
    V("apprehensive", "ap-ri-HEN-siv", "adjective", "Slightly worried or nervous about something that is going to happen.", "Milder and more forward-looking than “anxious” — perfect for interviews, flights, first meetings.", ["nervous", "anxious", "uneasy"], "“Nervous” is everyday and often physical. “Anxious” can be stronger and longer-lasting. “Uneasy” suggests a vague sense that something is wrong. “Apprehensive” is specifically about something coming.", "I was a little apprehensive about meeting his parents.", "— Are you excited about the move?\n— Excited, but apprehensive too. I don’t know anyone there.", "Describe something you are apprehensive about right now."),
    V("exasperated", "ig-ZAS-puh-ray-tid", "adjective", "Extremely annoyed, especially when something keeps happening and you can’t do anything about it.", "The key is repetition: exasperation builds over time.", ["frustrated", "irritated", "fed up"], "“Irritated” is mild and quick. “Frustrated” is about being blocked from a goal. “Fed up” is informal and suggests you’ve had enough. “Exasperated” is the end point of repeated frustration.", "By the fifth phone call, I was completely exasperated.", "— Did the bank fix it?\n— No. I’ve explained it four times. I’m beyond exasperated.", "Describe a situation that left you exasperated."),
    V("wistful", "WIST-ful", "adjective", "Gently sad and longing, especially when remembering the past or something you can’t have.", "Soft and bittersweet — close to “saudade”, but lighter.", ["nostalgic", "melancholic", "longing"], "“Nostalgic” is fondness for the past. “Melancholic” is a deeper, more lasting sadness. “Wistful” is a soft, passing ache — often with a smile.", "She gave a wistful smile when she talked about her student years in Paris.", "— Do you miss living by the sea?\n— Sometimes. I get a bit wistful every summer.", "What makes you feel wistful?"),
    V("content", "kun-TENT (adjective)", "adjective", "Quietly satisfied and at peace; not wanting more.", "Different from “happy”: calmer, less excited, often more stable. (Careful: CON-tent, stress on the first syllable, is a noun meaning material.)", ["satisfied", "at peace", "happy"], "“Happy” can be intense and brief. “Satisfied” means a need was met. “Content” is a calm state of not needing anything more — very valuable.", "I’m not ecstatic about my life, but I’m genuinely content.", "— Don’t you want a bigger flat?\n— Not really. I’m content with what we have.", "When do you feel most content?"),
    V("overwhelmed", "oh-ver-WELMD", "adjective", "Feeling that you have too much to deal with — emotionally, or in tasks.", "Can be negative (too much work) or positive (overwhelmed with gratitude).", ["swamped", "stressed", "overloaded"], "“Swamped” is informal and about workload. “Stressed” is general pressure. “Overloaded” is mechanical. “Overwhelmed” is about your capacity to cope — and can describe strong positive feelings too.", "I was overwhelmed by how many people came to the funeral.", "— You look tired.\n— I’m a bit overwhelmed — three deadlines and a sick child.", "Write one negative and one positive sentence with “overwhelmed”.")
  ],
  culture: "barrett",
  cultureNote: "Barrett’s research suggests language doesn’t just describe emotions; it may help construct them. More words could mean a more finely tuned inner life — another reason vocabulary matters beyond sounding good.",
  sayBetter: {
    basic: "I was very sad when I left my job.",
    levels: [
      ["Level 1", "I was really upset when I left my job.", "Stronger, but still one undefined feeling."],
      ["Level 2", "Leaving my job made me feel quite wistful.", "A precise feeling — soft, nostalgic."],
      ["Level 3", "I felt a mixture of relief and sadness when I left — relieved to go, sad to leave the people.", "A mixture, with the reason for each part."],
      ["Level 4", "It wasn’t so much sadness as a kind of wistfulness — I was relieved to be leaving the job, but I knew I’d miss the version of myself who’d worked there.", "Precision + mixture + an insight about identity."]
    ],
    prompt: "Describe a recent emotional moment at Level 4."
  },
  exercise: {
    title: "Find the precise feeling",
    instructions: "Replace the vague emotion with a more precise word or a mixture, and explain why it fits.",
    items: [
      { q: "I felt bad before my driving test.", a: "I felt apprehensive — nervous about something coming, not panicked." },
      { q: "I felt bad when my flatmate left dishes in the sink for the tenth time.", a: "I was exasperated — the feeling builds through repetition." },
      { q: "I felt good on Sunday afternoon reading in the park.", a: "I felt content — calm, with no need for anything more." },
      { q: "I felt sad looking at old photos of my grandmother’s house.", a: "I felt wistful — a gentle, bittersweet longing for the past." },
      { q: "I felt stressed when I came back from holiday to 300 emails.", a: "I felt overwhelmed — the problem was the sheer amount, more than any single email." },
      { q: "I felt weird when my ex got engaged.", a: "I felt a mixture of genuine happiness for her and a strange, unexpected sadness." }
    ]
  },
  think: {
    q: "Do you think having more words for feelings changes what you feel — or only how you describe it?",
    angles: ["Are there feelings you have in your first language that you can’t name in English?", "Can naming a feeling make it smaller — or bigger?", "Do men and women in your culture use different emotional vocabularies?"]
  },
  express: { prompt: "Describe an important day in your life using at least three precise emotion words, and one mixture of feelings." },
  speak: {
    prompt: "Describe how you felt during an important moment in your life — use at least three precise emotion words.", seconds: 90,
    structure: ["Set the scene briefly", "The first feeling — precisely", "How it changed", "A mixture: “I felt both… and…”", "What you understand about it now"]
  },
  recall: [
    { q: "Day 15: The structure for describing your work?", a: "Role → problem → contribution → feeling." },
    { q: "Day 4: Complete the precision structure: “It’s not so much X…”", a: "“…as Y.”" },
    { q: "Day 5: A phrase for a gradual realisation?", a: "It dawned on me that…" }
  ],
  reflect: "Which emotion do you feel most often but rarely name? Name it precisely now.",
  deep: {
    title: "Build your emotional ladder",
    body: "Choose three emotional families — anger, sadness, fear — and build an intensity ladder of five words for each (e.g. annoyed → irritated → frustrated → exasperated → furious). Look up any you’re unsure of in a good learner’s dictionary.",
    prompt: "Write one sentence for the most useful word on each ladder, about your own life."
  }
};

TAW.lessons[17] = {
  day: 17, title: "Explaining a decision", kicker: "English · Reasoning",
  cats: ["english", "thinking"], skills: ["english", "thinking", "articulation"], difficulty: "Foundation", minutes: 30,
  why: "Why did you move? Why did you leave? Why did you choose that? People ask constantly — and a decision explained well shows judgement and self-awareness. A decision explained badly sounds either defensive or random.",
  learn: {
    body: [
      "A well-explained decision has three parts: <strong>what you weighed</strong> (the options and considerations), <strong>the trade-off</strong> (what you gave up), and <strong>what tipped the balance</strong> (the deciding factor). “I weighed up staying in a secure job against the chance to work abroad. The trade-off was money and stability. Ultimately, what tipped the balance was that I didn’t want to be fifty and wondering.”",
      "Naming the trade-off is what makes you credible. A decision with no downside sounds like propaganda. A decision with an acknowledged cost sounds like a real choice made by a thoughtful person.",
      "But be honest about something psychologists have shown: we are not always reliable narrators of our own choices. In a famous 2005 experiment, Petter Johansson and Lars Hall asked people to choose the more attractive of two faces — then secretly swapped the photo. Most people didn’t notice, and confidently explained why they had chosen the face they had actually rejected. They called it <strong>choice blindness</strong>.",
      "The lesson isn’t that reasons don’t matter. It’s that a little humility sounds intelligent: “If I’m honest, part of it was instinct — I’ve only built the reasons since.”"
    ],
    phrases: [
      { en: "I weighed up… against…", tone: "Analytical", note: "Shows a real decision process." },
      { en: "The trade-off was…", tone: "Honest", note: "Names the cost. Makes you credible." },
      { en: "Ultimately, what tipped the balance was…", tone: "Decisive", note: "Identifies the deciding factor — the most important sentence." },
      { en: "On balance, I think it was the right call.", tone: "Measured", note: "Evaluates without claiming perfection." },
      { en: "If I’m honest, part of it was instinct.", tone: "Self-aware", note: "Admits the non-rational part. Surprisingly persuasive." }
    ],
    tip: "A decision without a trade-off isn’t a decision. It’s an advertisement."
  },
  vocab: [
    V("weigh up", "WAY up", "phrasal verb", "To consider the advantages and disadvantages of something carefully before deciding.", "Suggests deliberation — the image of a balance scale.", ["consider", "evaluate", "think over"], "“Consider” is general. “Evaluate” is formal and analytical. “Think over” is casual. “Weigh up” specifically compares options or pros and cons.", "I spent weeks weighing up whether to accept the offer.", "— Are you going to take the job in Berlin?\n— I’m still weighing it up. The salary’s better, but my family’s here.", "Write about something you’re weighing up at the moment."),
    V("trade-off", "TRAYD-off", "noun", "A situation where you accept losing one thing in order to gain another.", "Shows sophisticated thinking: almost every choice involves one. Very common in economics (Month 4).", ["compromise", "sacrifice", "exchange"], "A “compromise” is an agreement where both sides give something up. A “sacrifice” emphasises loss. A “trade-off” is a neutral balance: more of this means less of that.", "There’s always a trade-off between speed and quality.", "— Why don’t you live in the centre?\n— It’s a trade-off. More space, longer commute.", "Describe a trade-off you live with every day."),
    V("rationale", "rash-uh-NAHL", "noun", "The reasons or logic behind a decision or belief.", "Formal and professional. In conversation, “reasoning” is softer.", ["reasoning", "justification", "logic"], "“Justification” suggests defending a decision, sometimes after criticism. “Logic” is the internal coherence. “Rationale” is the set of reasons that explain why — often stated in advance.", "Can you explain the rationale behind the new policy?", "— Why did they close the branch?\n— The official rationale is cost. The real reason might be different.", "Explain the rationale behind one rule you follow in life."),
    V("ultimately", "UL-tih-mut-lee", "adverb", "In the end; after considering everything; at the most basic level.", "Signals your conclusion or the decisive factor. Very elegant at the end of an explanation.", ["in the end", "finally", "fundamentally"], "“Finally” is about time order. “In the end” is about outcome. “Ultimately” means after weighing everything — or at the deepest level (“Ultimately, it’s about trust”).", "Ultimately, I chose the job because of the people, not the money.", "— So why did you break up?\n— Lots of reasons. But ultimately, we wanted different lives.", "Finish this sentence about a decision: “Ultimately, …”"),
    V("on balance", "on BAL-unce", "phrase", "After considering all the facts and arguments.", "Measured and mature: it admits there were arguments on both sides.", ["overall", "all things considered", "all in all"], "“Overall” is general. “All things considered” is similar but more conversational. “On balance” directly echoes weighing — perfect after a trade-off.", "On balance, moving abroad was the best decision I’ve made.", "— Was the course worth the money?\n— On balance, yes — though the first month was a waste.", "Evaluate a past decision using “on balance”.")
  ],
  culture: "frost",
  cultureNote: "“The Road Not Taken” is often quoted to celebrate bold choices — but the poem suggests we tell ourselves stories about our decisions afterwards. The perfect companion to choice blindness.",
  sayBetter: {
    basic: "I left because I didn’t like it there.",
    levels: [
      ["Level 1", "I left because I wasn’t happy.", "Still vague: unhappy with what?"],
      ["Level 2", "I left because I wasn’t learning anything anymore.", "A specific reason."],
      ["Level 3", "I weighed up the security of staying against the fact that I’d stopped learning. Ultimately, I decided growth mattered more.", "Weighing + deciding factor."],
      ["Level 4", "It was a trade-off: I gave up a good salary and a team I loved, because I’d stopped growing. On balance, it was the right call — although if I’m honest, part of it was instinct, and I’ve only built the reasons since.", "Trade-off + evaluation + self-awareness. Credible and human."]
    ],
    prompt: "Explain a real decision of yours at Level 4."
  },
  exercise: {
    title: "Name the trade-off",
    instructions: "For each decision, write what was weighed, the trade-off, and what tipped the balance — in one or two sentences.",
    items: [
      { q: "Choosing to rent instead of buying a flat.", a: "I weighed up building equity against staying flexible. The trade-off is that rent is “dead money”, but ultimately, freedom to move mattered more at this stage of my life." },
      { q: "Choosing a smaller university over a famous one.", a: "The trade-off was prestige versus attention — at the smaller one, professors actually knew my name. What tipped the balance was the visit: it just felt right." },
      { q: "Deciding not to have a car in a big city.", a: "I gave up convenience in exchange for money and less stress. On balance, it’s been worth it — although I miss it on rainy days." },
      { q: "Turning down a promotion.", a: "I weighed up more money and status against more meetings and less of the work I actually love. Ultimately, I didn’t want to stop doing the thing I’m good at." }
    ]
  },
  think: {
    q: "Do we make decisions for reasons — or invent the reasons afterwards?",
    angles: ["Think of a big decision: when did you really decide?", "Is instinct just fast reasoning — or something else?", "Does it matter, if the decision turned out well?"]
  },
  express: { prompt: "Write about an important decision you made: what you weighed up, the trade-off, what tipped the balance, and whether — on balance — you’d make it again." },
  speak: {
    prompt: "Explain an important decision you made: what you weighed up, the trade-off, and whether you’d make it again.", seconds: 90,
    structure: ["The decision in one sentence", "What you weighed up", "The trade-off", "What tipped the balance", "On balance — would you do it again?"]
  },
  recall: [
    { q: "Day 16: Which word describes a calm, quiet satisfaction?", a: "content" },
    { q: "Day 16: What is “affect labelling”?", a: "Putting feelings into words — linked in research to reduced emotional reactivity." },
    { q: "Day 11: Distinguish success from fulfilment in one sentence.", a: "Success is measured by others; fulfilment is an internal sense of meaning." }
  ],
  reflect: "Think of a decision you’re facing now. What are you really weighing up — and what would tip the balance?",
  deep: {
    title: "Read the poem — closely",
    body: "Read Robert Frost’s “The Road Not Taken” (1916; it’s in the public domain). Read it twice. Notice the lines saying the two roads were worn “really about the same” — and that the famous last stanza is something the speaker says he “shall be telling” in the future.",
    prompt: "Write 150 words: is the poem celebrating a bold choice, or gently mocking how we romanticise our choices afterwards?"
  }
};

TAW.lessons[18] = {
  day: 18, title: "Talking about ambition", kicker: "English · Ambition",
  cats: ["english", "society"], skills: ["english", "conversation", "thinking"], difficulty: "Foundation", minutes: 30,
  why: "Talking about what you want is surprisingly hard. Too modest and you sound like you want nothing; too bold and you sound arrogant. Many women, in particular, have been taught to hide ambition. Today you learn to express it honestly, specifically and with nuance.",
  learn: {
    body: [
      "The word has a complicated history. Latin <em>ambitio</em> came from <em>ambire</em>, “to go around” — originally, candidates going around canvassing for votes in ancient Rome. For centuries in Christian Europe, ambition was viewed with suspicion as a form of pride. Only in the modern era did it become widely seen as a virtue.",
      "It still carries mixed signals. Research on gender and leadership has repeatedly found that women who express ambition openly risk being judged as less likeable than men who say the same things — a pattern sometimes called the likeability penalty. Knowing this doesn’t mean hiding ambition; it means expressing it with precision, which is persuasive for anyone.",
      "Three techniques help. <strong>Be specific</strong>: “I want to lead a design studio” beats “I want to be successful”. <strong>Explain the why</strong>: ambition tied to a purpose sounds generous, not grasping. <strong>Admit ambivalence</strong>: “Part of me wants to build something big, and part of me wants a quiet life” is honest and deeply relatable.",
      "Ambition doesn’t have to be about career. You can be ambitious about writing, a family, a garden, a language — or about becoming a certain kind of person."
    ],
    phrases: [
      { en: "What I’d really like to do is…", tone: "Honest, warm", note: "Softer than “My goal is…” — but still clear." },
      { en: "I’ve set my sights on…", tone: "Determined", note: "For a specific, ambitious target." },
      { en: "I’m ambitious about…, but not about…", tone: "Nuanced, self-aware", note: "Shows you’ve thought about where ambition belongs in your life." },
      { en: "Part of me wants…, and part of me…", tone: "Vulnerable, relatable", note: "Expresses ambivalence — very human." },
      { en: "It matters to me because…", tone: "Purposeful", note: "Connects the ambition to a reason. Turns wanting into meaning." }
    ],
    tip: "Ambition with a reason sounds generous. Ambition without one sounds hungry."
  },
  vocab: [
    V("aspire", "uh-SPIRE", "verb", "To have a strong hope of achieving something important (usually + to / to do).", "Elevated but natural. “Aspiring” is also an adjective: an aspiring writer = someone trying to become one.", ["aim", "hope", "strive"], "“Aim” is practical and targeted. “Hope” is passive. “Strive” emphasises effort. “Aspire” is about a high goal you look up to.", "I aspire to write a book one day — not for money, just to know I could.", "— What do you want to do after this?\n— I aspire to run my own clinic, eventually.", "What do you aspire to? Use “aspire to”."),
    V("drive", "DRYVE", "noun", "Strong determination and energy to achieve something.", "A compliment: “She has real drive.” It describes inner motivation, not the goal itself.", ["determination", "motivation", "ambition"], "“Motivation” is the reason you act. “Determination” is not giving up. “Ambition” is the desire for achievement. “Drive” is the energy that pushes you forward.", "What impressed me most about her was her drive.", "— How did he build the business so fast?\n— Incredible drive. He never seemed to rest.", "Describe someone with real drive."),
    V("ambivalent", "am-BIV-uh-lunt", "adjective", "Having mixed or contradictory feelings about something.", "Not the same as indifferent! Ambivalent = two strong feelings at once. Indifferent = no feeling.", ["torn", "conflicted", "in two minds"], "“Torn” and “in two minds” are conversational. “Conflicted” is slightly stronger. “Ambivalent” is precise and slightly more formal. Avoid confusing it with “indifferent”.", "I’m ambivalent about promotion: I want the challenge, but not the meetings.", "— Do you want children?\n— Honestly, I’m ambivalent. Some days yes, some days absolutely not.", "Write about something you are genuinely ambivalent about."),
    V("long-term", "long-TURM", "adjective", "Relating to a long period of time in the future.", "Signals planning and patience. Often contrasted with short-term gains.", ["lasting", "future", "eventual"], "“Lasting” describes effects. “Eventual” means happening at the end. “Long-term” describes goals, plans or effects over years.", "My long-term goal is to work less and think more.", "— Why are you studying at night?\n— It’s a long-term plan. In five years I want to change careers.", "Name one long-term goal and one short-term step towards it."),
    V("set your sights on", "set yor SITES on", "idiom", "To decide that you want to achieve something and aim for it.", "Determined and vivid — like aiming carefully at a target.", ["aim for", "have your heart set on", "target"], "“Aim for” is neutral. “Have your heart set on” is emotional — you really want it. “Set your sights on” emphasises a clear, chosen target.", "She’s set her sights on a place at the Royal College of Art.", "— Are you applying everywhere?\n— No, I’ve set my sights on two programmes.", "What have you set your sights on this year?")
  ],
  culture: "angelou",
  cultureNote: "Angelou lived many lives — dancer, journalist, poet, activist — and spoke of her ambitions without apology. Her example suggests ambition can be plural, purposeful and generous.",
  sayBetter: {
    basic: "I want to be successful and have a good job.",
    levels: [
      ["Level 1", "I’d like to have a good career.", "Polite, but empty."],
      ["Level 2", "I’d like to lead a team in a creative company one day.", "Specific."],
      ["Level 3", "I’ve set my sights on leading a design team — I love the moment when a group of people solves something no one could solve alone.", "Specific + why."],
      ["Level 4", "What I’d really like is to lead a design team — not for the title, but because I love seeing a group solve something together. If I’m honest, I’m slightly ambivalent: part of me wants that, and part of me wants a quieter life with more time to read.", "Specific + purpose + ambivalence. Ambitious without sounding hungry."]
    ],
    prompt: "Express one of your real ambitions at Level 4."
  },
  exercise: {
    title: "Ambition with a reason",
    instructions: "Rewrite each vague or awkward statement of ambition so it’s specific and purposeful.",
    items: [
      { q: "I want to be rich.", a: "I want to earn enough that money stops being something I think about — so I can say yes to the things that matter." },
      { q: "I want to be the best.", a: "I want to be genuinely excellent at one thing — good enough that people seek me out for it." },
      { q: "I don’t really have ambitions.", a: "I’m not very career-ambitious, but I’m ambitious about how I live — I want to read more, travel slowly and be a good friend." },
      { q: "Maybe one day I could possibly try to write something, I don’t know.", a: "I’d love to write a book one day. I’m not sure I will, but I want to try before I decide I can’t." }
    ]
  },
  think: {
    q: "Is ambition a virtue, a vice, or neither? Does it mean something different for women?",
    angles: ["Who in your family was openly ambitious? How were they seen?", "Can you be ambitious and content (Day 16) at the same time?", "Is there a difference between ambition for yourself and ambition for a cause?"]
  },
  express: { prompt: "Write about one ambition you have — specifically, why it matters to you, and anything you feel ambivalent about." },
  speak: {
    prompt: "What do you aspire to in the next five years — and what are you ambivalent about?", seconds: 90,
    structure: ["One specific aspiration", "Why it matters to you", "A long-term goal and a first step", "Your ambivalence: “Part of me… part of me…”", "A closing thought"]
  },
  recall: [
    { q: "Day 17: The three parts of a well-explained decision?", a: "What you weighed up, the trade-off, and what tipped the balance." },
    { q: "Day 17: What is choice blindness?", a: "People failing to notice their choice was swapped — and still explaining it confidently (Johansson & Hall, 2005)." },
    { q: "Day 16: Difference between “apprehensive” and “anxious”?", a: "Apprehensive is milder and about something coming; anxious can be stronger and more general." }
  ],
  reflect: "What ambition have you never said out loud? Write it here — in any language.",
  deep: {
    title: "Read: Maya Angelou, “Still I Rise” (1978)",
    body: "One of Angelou’s most famous poems, about dignity and resilience in the face of oppression. Read it aloud — it was written to be heard.",
    prompt: "What is the speaker’s ambition in the poem? Write 150 words connecting it to your own idea of rising."
  }
};

TAW.lessons[19] = {
  day: 19, title: "Describing places", kicker: "English · Description",
  cats: ["english", "culture"], skills: ["english", "articulation"], difficulty: "Foundation", minutes: 30,
  why: "Where are you from? Where did you go on holiday? What’s your neighbourhood like? Describing places well makes you a better storyteller and a more engaging companion — and it trains the habit of noticing.",
  learn: {
    body: [
      "Weak descriptions list adjectives: “It’s a nice, beautiful, big city.” Strong descriptions choose <strong>one dominant impression</strong> and support it with <strong>specific sensory details</strong>: “It’s a city that never quite wakes up — shutters closed until ten, old men drinking coffee in silence, the smell of bread from a bakery you can never find.”",
      "Use all the senses, not just sight: <strong>sound</strong> (traffic, church bells, silence), <strong>smell</strong> (diesel, jasmine, the sea), <strong>texture</strong> (cobblestones, humidity), <strong>rhythm</strong> (is it rushed? sleepy?). And people: places are made of how people behave in them.",
      "Writers call this “show, don’t tell”. Instead of telling us a place is romantic, show the detail that makes it so — and let the listener feel it.",
      "Finally, places carry meaning. Italo Calvino’s <em>Invisible Cities</em> is full of imaginary cities that are really about memory and desire. At one point, Marco Polo admits: “Every time I describe a city I am saying something about Venice” — his own home. When you describe a place, you also reveal yourself."
    ],
    phrases: [
      { en: "What strikes you first is…", tone: "Observant", note: "Opens with the dominant impression." },
      { en: "It has a slightly… atmosphere.", tone: "Nuanced", note: "“Slightly melancholic”, “slightly chaotic” — qualified and precise." },
      { en: "Tucked away behind… there’s…", tone: "Intimate", note: "Introduces a hidden detail — insider knowledge." },
      { en: "It’s the kind of place where…", tone: "Evocative", note: "Describes a place through what happens there: “where nobody is in a hurry”." },
      { en: "It feels less like a city than a village.", tone: "Comparative", note: "Precision by contrast (Day 4)." }
    ],
    tip: "Choose one impression. Then prove it with details."
  },
  vocab: [
    V("bustling", "BUS-ling", "adjective", "Full of busy, energetic activity and people.", "Positive — suggests life and energy, not just crowds.", ["busy", "lively", "crowded"], "“Busy” is neutral. “Crowded” is often negative (too many people). “Lively” is about energy and fun. “Bustling” is busy in a vibrant, purposeful way — markets, streets, kitchens.", "We walked through a bustling market full of spices and shouting vendors.", "— Is the old town quiet?\n— Not at all — it’s bustling until midnight.", "Describe a bustling place you know."),
    V("understated", "un-der-STAY-tid", "adjective", "Elegant or impressive in a quiet, restrained way; not showy.", "A real compliment in design, fashion and architecture — the opposite of flashy.", ["subtle", "low-key", "restrained"], "“Low-key” is casual and relaxed. “Subtle” is about being hard to notice. “Restrained” suggests control. “Understated” is quiet elegance — a deliberate choice.", "The hotel was understated — no marble, no gold, just perfect light and good linen.", "— Did you like the restaurant?\n— Loved it. Very understated, but the food was extraordinary.", "Describe something understated that you admire."),
    V("atmospheric", "at-mus-FER-ik", "adjective", "Creating a strong, distinctive mood or feeling, often mysterious or romantic.", "Perfect for old buildings, candlelit bars, foggy streets, films.", ["evocative", "moody", "charming"], "“Charming” is pleasant and appealing. “Moody” suggests darkness or gloom. “Evocative” brings memories or images to mind. “Atmospheric” means the place has a powerful mood.", "It’s a very atmospheric bar — candles, old jazz, no phones.", "— Why do you love Porto?\n— It’s so atmospheric, especially in the rain.", "Describe an atmospheric place — and what creates the mood."),
    V("run-down", "run-DOWN", "adjective", "In poor condition because it hasn’t been looked after.", "Can be neutral or even affectionate (“a run-down but charming café”).", ["shabby", "dilapidated", "neglected"], "“Shabby” is old and worn, often for clothes or furniture. “Dilapidated” is formal and suggests serious decay. “Neglected” focuses on lack of care. “Run-down” is the everyday word.", "It’s a slightly run-down area, but it has the best restaurants in the city.", "— Is the neighbourhood safe?\n— Yes — it looks a bit run-down, but it’s friendly.", "Describe a run-down place you have affection for."),
    V("tucked away", "tukt uh-WAY", "phrase", "Hidden or located in a quiet place, away from attention.", "Suggests a secret worth discovering — lovely for recommendations.", ["hidden", "secluded", "off the beaten track"], "“Hidden” is neutral. “Secluded” suggests privacy and isolation. “Off the beaten track” means away from tourist routes. “Tucked away” is cosy and intimate.", "There’s a tiny bookshop tucked away behind the cathedral.", "— Where should I eat?\n— There’s a place tucked away down a side street — no sign, just go in.", "Recommend something tucked away in your city.")
  ],
  culture: "calvino",
  cultureNote: "Calvino reminds us that describing a place is never neutral: we see cities through memory, desire and comparison. That’s why your description of home says as much about you as about the place.",
  sayBetter: {
    basic: "My city is nice and beautiful and there are a lot of people.",
    levels: [
      ["Level 1", "My city is beautiful and very busy.", "Two adjectives, no picture."],
      ["Level 2", "My city is bustling and full of old buildings.", "More precise, still generic."],
      ["Level 3", "My city is bustling during the day — markets, traffic, shouting — but at night it becomes surprisingly quiet and atmospheric.", "A contrast and details."],
      ["Level 4", "What strikes you first about my city is the noise — horns, vendors, music from every window. But tucked away behind the main avenues there are quiet squares where old men play cards as if nothing has changed in fifty years. It feels like two cities living in the same place.", "Dominant impression + sensory details + a contrast + an insight."]
    ],
    prompt: "Describe your city or neighbourhood at Level 4."
  },
  exercise: {
    title: "Show, don’t tell",
    instructions: "Replace each “telling” sentence with two or three specific details that “show” it.",
    items: [
      { q: "The café was cosy.", a: "Mismatched armchairs, a cat asleep on the windowsill, and the smell of cinnamon every time the door opened." },
      { q: "The beach was crowded.", a: "You couldn’t see the sand between the umbrellas, and three different radios were playing three different songs." },
      { q: "The village was quiet.", a: "The only sounds were church bells every hour and a dog barking somewhere down the valley." },
      { q: "The office was depressing.", a: "Grey carpet, no windows, and a dying plant someone had stopped watering months ago." },
      { q: "The city was romantic.", a: "Narrow streets lit by yellow lamps, couples sharing wine on the river steps, accordion music drifting from a bridge." }
    ]
  },
  think: {
    q: "Can a city have a personality? What would yours be — and do you share it?",
    angles: ["Is a city’s personality created by its people, its history, its weather?", "Have you lived somewhere whose personality didn’t fit yours?", "How do tourists misunderstand your city?"]
  },
  express: { prompt: "Describe a place you love in 6–8 sentences: one dominant impression, at least three senses, one hidden detail, and what it means to you." },
  speak: {
    prompt: "Describe the city or neighbourhood where you grew up so that I can see, hear and smell it.", seconds: 90,
    structure: ["The dominant impression: “What strikes you first is…”", "Sounds, smells, textures", "People: how they behave there", "Something tucked away", "What it says about you"]
  },
  recall: [
    { q: "Day 18: Difference between “ambivalent” and “indifferent”?", a: "Ambivalent = mixed strong feelings. Indifferent = no feeling." },
    { q: "Day 18: Where does the word “ambition” come from?", a: "Latin ambitio, from ambire — “to go around” (canvassing for votes)." },
    { q: "Day 17: Evaluate a decision in a measured way: “On…”", a: "On balance, …" }
  ],
  reflect: "Which place made you who you are? Describe it in three words — then explain why those three.",
  deep: {
    title: "Read: Calvino, Invisible Cities — any five cities",
    body: "The book is made of short sections, each describing an imaginary city. Read five. Notice how each city is built around a single idea — memory, desire, signs, the dead.",
    prompt: "Write your own “invisible city” in 120 words, built around one idea. Then reveal which real place it is secretly about."
  }
};

TAW.lessons[20] = {
  day: 20, title: "Pronunciation: stress, rhythm and pause", kicker: "English · Pronunciation",
  cats: ["english"], skills: ["english", "articulation"], difficulty: "Foundation", minutes: 30,
  why: "Many learners worry about their accent. But research suggests intelligibility depends far more on stress, rhythm and pausing than on individual sounds or a “native” accent. Fix these, and people will understand you better — and you’ll sound more confident.",
  learn: {
    body: [
      "Most conversations in English today take place between non-native speakers. The linguist Jennifer Jenkins studied what actually causes misunderstandings in this “English as a lingua franca”. Her “Lingua Franca Core” (2000) suggested that some features matter a lot — such as most consonant sounds, vowel length, and stressing the right word in a sentence — while others, such as the “th” sound, matter much less than teachers often claim.",
      "<strong>1. Word stress.</strong> English words have one strongly stressed syllable, and getting it wrong can make a word unrecognisable. Notice how stress moves: PHO-to-graph, pho-TO-gra-pher, pho-to-GRAPH-ic. Learn new words with their stress (that’s why this program marks pronunciation in capitals).",
      "<strong>2. Sentence stress.</strong> English stresses content words (nouns, main verbs, adjectives) and reduces small words: “I WENT to the SHOP to buy BREAD.” Moving the main stress changes meaning: “I didn’t say SHE took it” (someone else did) vs. “I didn’t say she TOOK it” (she borrowed it).",
      "<strong>3. Thought groups and pauses.</strong> Speakers divide speech into chunks, with a small pause between them: “What I’ve realised | over the last few years | is that I don’t need | to have an opinion | about everything.” Pausing makes you sound calmer and more confident — and gives you time to think. A pause is always better than a filler (Day 1 analysis)."
    ],
    phrases: [
      { en: "What I mean is… (pause)…", tone: "Clarifying", note: "Practise the pause after the phrase — it adds weight." },
      { en: "The key word here is…", tone: "Emphatic", note: "Lets you stress one idea deliberately." },
      { en: "Let me put it this way.", tone: "Calm", note: "Buys a moment to think — then pause." },
      { en: "Sorry — I’ll say that again more slowly.", tone: "Confident, practical", note: "Repairing a misunderstanding gracefully is a sign of competence, not weakness." }
    ],
    tip: "A pause sounds like confidence. A filler sounds like fear."
  },
  vocab: [
    V("intonation", "in-tuh-NAY-shun", "noun", "The rise and fall of the voice when speaking.", "Carries emotion and attitude: the same words can sound friendly, bored or sarcastic.", ["tone", "pitch", "inflection"], "“Pitch” is how high or low a sound is. “Tone” is the overall emotional quality. “Intonation” is the pattern of pitch across a sentence. “Inflection” is a change in pitch on a word.", "A falling intonation at the end sounds certain; a rising one can sound unsure.", "— Did she sound angry?\n— Not the words — it was her intonation.", "Say “That’s interesting” with three different intonations. What does each mean?"),
    V("emphasis", "EM-fuh-sis", "noun", "Special importance given to something, including by stressing a word in speech.", "Verb: emphasise (EM-fuh-size). You can put emphasis on a word, an idea, or a value.", ["stress", "weight", "focus"], "“Stress” is the technical term in pronunciation. “Weight” is figurative importance. “Focus” is attention. “Emphasis” covers both sound and meaning.", "Put the emphasis on the word that carries new information.", "— Why did you repeat “every”?\n— For emphasis. Every single day, he was late.", "Write a sentence and mark the word you’d emphasise — then explain why."),
    V("pause", "PAWZ", "noun / verb", "A short stop in speaking or doing something.", "In speaking, a deliberate pause signals confidence and structure.", ["break", "silence", "hesitation"], "A “hesitation” suggests uncertainty. A “silence” can be long or uncomfortable. A “break” is longer. A “pause” is short and can be strategic.", "She paused before the last sentence, and the whole room leaned in.", "— How do you sound so calm when you present?\n— I pause much more than feels natural.", "Read a sentence aloud with three pauses. Where did you put them?"),
    V("intelligible", "in-TEL-ih-juh-bul", "adjective", "Able to be understood.", "The real goal of pronunciation — not sounding native. Opposite: unintelligible.", ["comprehensible", "clear", "understandable"], "“Clear” is general. “Understandable” is everyday. “Comprehensible” is formal. “Intelligible” is the technical word for speech that can be understood.", "Your English is perfectly intelligible — the accent is part of who you are.", "— Do I need to lose my accent?\n— No. You need to be intelligible, and you already are.", "Write a sentence about why intelligibility matters more than accent."),
    V("stress (word stress)", "STRES", "noun", "The extra force or loudness given to a particular syllable in a word.", "In English, wrong stress causes more misunderstandings than wrong sounds.", ["accent (on a syllable)", "emphasis"], "In linguistics “accent” can mean stress on a syllable, but in everyday English it usually means a regional way of speaking. Say “word stress” to be clear.", "The stress in “develop” is on the second syllable: de-VEL-op.", "— Is it “COM-fortable”?\n— Yes — COMF-ta-ble. The stress is at the start, and the middle almost disappears.", "Find three words you often stress wrongly and mark the correct stress.")
  ],
  culture: "lingua-franca",
  cultureNote: "If most English is spoken between non-native speakers, then “correct” English belongs to everyone. Your goal is clear international English — your accent is part of your voice.",
  sayBetter: {
    basic: "Um, so, like, I think that, um, the meeting was, you know, important.",
    levels: [
      ["Level 1", "I think the meeting was important.", "Fillers removed — already clearer."],
      ["Level 2", "I think the MEETing was imPORtant.", "Stress on the content words."],
      ["Level 3", "I think | the meeting | was important.", "Thought groups with short pauses."],
      ["Level 4", "What I REALISED | in that meeting | is that we’d been solving | the WRONG problem.", "Pauses, a stressed key word, and a stronger sentence. Slower — and much more powerful."]
    ],
    prompt: "Take a sentence from your Day 1 answer and mark its thought groups and stressed words."
  },
  exercise: {
    title: "Mark the stress",
    instructions: "Write the stressed syllable in capitals, then check the model. Say each word aloud.",
    items: [
      { q: "photograph / photographer / photographic", a: "PHO-to-graph / pho-TO-gra-pher / pho-to-GRAPH-ic" },
      { q: "economy / economic / economist", a: "e-CON-o-my / e-co-NOM-ic / e-CON-o-mist" },
      { q: "comfortable / vegetable / interesting", a: "COMF-ta-ble / VEJ-ta-ble / IN-tres-ting (the middle syllables almost disappear)" },
      { q: "“I didn’t say she stole it.” Which word do you stress to mean: (a) someone else said it, (b) I only hinted at it, (c) someone else stole it?", a: "(a) Stress I: “I didn’t say she stole it.” (b) “I didn’t SAY she stole it.” (c) “I didn’t say SHE stole it.” Same words — three meanings." },
      { q: "Divide into thought groups: “The thing I find most difficult about speaking English is not the grammar but finding the confidence to keep going when I make a mistake.”", a: "The thing I find most difficult | about speaking English | is not the grammar | but finding the confidence | to keep going | when I make a mistake." }
    ]
  },
  think: {
    q: "Do you feel judged for your accent? Do you judge others for theirs?",
    angles: ["Which accents are considered “prestigious” — and why?", "Is there such a thing as a neutral accent?", "What would change if you stopped trying to sound native?"]
  },
  express: { prompt: "Write a paragraph about your relationship with your accent in English — then mark the stressed words and thought groups in two of your sentences." },
  speak: {
    prompt: "Read a paragraph you wrote this week aloud, slowly, pausing between thought groups. Then say it again without reading.", seconds: 60,
    structure: ["Read slowly with marked pauses", "Stress the content words", "Now say it from memory", "Listen back: where did you rush?"]
  },
  recall: [
    { q: "Day 19: What does “understated” mean?", a: "Elegant in a quiet, restrained way — not showy." },
    { q: "Day 19: What’s the principle behind “show, don’t tell”?", a: "Use specific sensory details instead of naming the impression." },
    { q: "Day 16: Name an emotion word and its intensity ladder.", a: "e.g. annoyed → irritated → frustrated → exasperated → furious." }
  ],
  reflect: "Record yourself and listen back. What do you notice about your rhythm and pauses — not your accent?",
  deep: {
    title: "Shadowing",
    body: "Choose a 30-second clip of a speaker you admire (a TED talk, an interview, a podcast). Listen, then speak along with them, copying the rhythm, stress and pauses — not the accent. Repeat five times.",
    prompt: "Write what changed between the first and the fifth repetition."
  }
};

TAW.lessons[21] = {
  day: 21, type: "review", title: "Weekly review: Speaking about your life", kicker: "Week 3 · Review",
  cats: ["review"], skills: ["english", "conversation", "articulation"], difficulty: "Foundation", minutes: 30,
  why: "Three weeks in. This week you learned to talk about work, emotions, decisions, ambitions and places — and to speak with better rhythm. Together, these are the building blocks of every personal conversation you’ll ever have.",
  learn: {
    body: [
      "This week’s thread: <strong>precision about your own life</strong>. Not “my job is okay” but the problem you solve. Not “I felt bad” but apprehensive or exasperated. Not “I just left” but the trade-off. Not “I want success” but a specific aspiration with a reason. Not “a nice city” but one impression and its details.",
      "Today: recall, reflection, and a speaking challenge that combines all of it."
    ],
    phrases: [
      { en: "The part people don’t see is…", tone: "Day 15", note: "Work." },
      { en: "I felt a mixture of… and…", tone: "Day 16", note: "Emotions." },
      { en: "Ultimately, what tipped the balance was…", tone: "Day 17", note: "Decisions." },
      { en: "Part of me wants…, and part of me…", tone: "Day 18", note: "Ambition." },
      { en: "What strikes you first is…", tone: "Day 19", note: "Places." },
      { en: "What I mean is… (pause)", tone: "Day 20", note: "Rhythm." }
    ],
    tip: "Your life is interesting. It just needs precise language."
  },
  vocab: [],
  recall: [
    { q: "What did Studs Terkel’s Working show?", a: "That ordinary people describing ordinary jobs reveal profound things about dignity, meaning and frustration." },
    { q: "Describe your work using role → problem → contribution → feeling.", a: "Answer aloud — did you avoid the job title?" },
    { q: "What is emotional granularity?", a: "The ability to distinguish closely related emotions precisely (Lisa Feldman Barrett)." },
    { q: "What is a trade-off?", a: "Accepting a loss in one thing in order to gain another." },
    { q: "What does Frost’s “The Road Not Taken” suggest about our decisions?", a: "That we often tell romantic stories about them afterwards — the roads were “really about the same”." },
    { q: "Difference between ambivalent and indifferent?", a: "Ambivalent = mixed feelings. Indifferent = no feelings." },
    { q: "What did Marco Polo admit in Invisible Cities?", a: "“Every time I describe a city I am saying something about Venice.”" },
    { q: "What matters more for intelligibility than a native accent?", a: "Word stress, sentence stress, pausing and thought groups (Jenkins’ Lingua Franca Core)." }
  ],
  speak: {
    prompt: "Week 3 challenge: Tell me about a decision that changed where you live or work. Describe the place, how you felt, the trade-off, and what you aspire to now.", seconds: 120,
    structure: ["The decision — and what you weighed up", "The place: one impression, two details", "Your feelings — precisely, including a mixture", "The trade-off, on balance", "What you’ve set your sights on now"],
    tryWords: ["trade-off", "on balance", "wistful", "apprehensive", "bustling", "aspire"]
  },
  weekly: true,
  reflect: "What can you say about your own life now that you couldn’t say three weeks ago?"
};
})();
