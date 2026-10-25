/* Tools content: Say It Better, phrase frames, speaking, cards, journal, milestones, graduation. */
window.TAW = window.TAW || {};

TAW.sayBetterBank = [
  { basic: "I don’t like it because it’s too much.", levels: ["I don’t really like it.", "I find it a little excessive.", "I think it goes slightly too far.", "What bothers me is that it feels somewhat excessive rather than genuinely necessary."], note: "“Excessive” names the problem; “rather than necessary” names the standard you’re judging by." },
  { basic: "I don’t like social media because it is bad.", levels: ["I’m not a big fan of social media.", "I think social media has some obvious benefits, but its impact on our attention is hard to ignore.", "Social media connects us, but I’m not convinced it makes us feel more connected.", "I wouldn’t argue that social media is inherently harmful. The more interesting question, in my view, is how its incentives shape our attention, our self-image and, ultimately, the way we relate to other people."], note: "Level 4 refuses the simple frame (good/bad) and moves to mechanism (incentives)." },
  { basic: "It was very interesting.", levels: ["It was really interesting.", "I found it fascinating.", "What struck me was how honest it was.", "What struck me most was how honestly it dealt with failure — it’s rare to see that on stage."], note: "“Interesting” is a placeholder. Ask: interesting how?" },
  { basic: "I think this is a good idea.", levels: ["I like this idea.", "This seems like a sensible approach.", "I’m inclined to think it could work, provided we test it first.", "I think there’s real potential here — my only hesitation is the timing, which we could solve by piloting it in one team first."], note: "Support + condition + solution = credible enthusiasm." },
  { basic: "He is very rich.", levels: ["He has a lot of money.", "He’s extremely wealthy.", "He’s wealthy enough not to have to think about money.", "He’s the kind of wealthy where money stops being a number and becomes a kind of weather."], note: "Level 4 uses a metaphor. Use sparingly — once per conversation is plenty." },
  { basic: "I was very sad.", levels: ["I was really upset.", "I felt quite low.", "I felt a sort of quiet heaviness for weeks.", "It wasn’t dramatic grief — more a quiet heaviness that followed me around for weeks."], note: "Precision about emotion (Day 16): degree, texture, duration." },
  { basic: "That’s not true.", levels: ["I don’t think that’s right.", "I’m not sure that’s quite right.", "I’d question that — the evidence I’ve seen points the other way.", "I’d gently push back on that. From what I’ve read, the evidence is more mixed — though I’d be curious where you saw it."], note: "Disagree with the claim, keep the relationship, invite their source." },
  { basic: "Everybody does it.", levels: ["Lots of people do it.", "It’s very common.", "It’s become something of a norm.", "It’s become so normal that we’ve stopped noticing it — which is usually when it’s worth asking why."], note: "From a generalisation to an observation about norms." },
  { basic: "It’s complicated.", levels: ["It’s quite complicated.", "It’s not black and white.", "It depends on what we mean by success.", "I think it depends on how we define the problem — if it’s about cost, the answer is yes; if it’s about fairness, I’m less sure."], note: "Don’t stop at “it’s complicated”. Say what it depends on." },
  { basic: "I want to say that money is important but not everything.", levels: ["Money matters, but it’s not everything.", "Money is important, but it has limits.", "Money solves many problems, but not the ones that matter most.", "Money is extraordinarily good at removing problems and surprisingly bad at creating meaning."], note: "Antithesis (Day 128): two balanced halves make a memorable sentence." },
  { basic: "The movie was boring but the actors were good.", levels: ["The film was slow, but the acting was good.", "The pacing dragged, although the performances were strong.", "The performances were subtle; I just wish the script had trusted them more.", "The performances were wonderfully understated — it’s the script that let them down, by explaining everything they’d already shown us."], note: "Precise film vocabulary: pacing, performances, understated, script." },
  { basic: "I am tired of my job.", levels: ["I’m a bit tired of my job.", "I’ve been feeling restless at work.", "I think I’ve stopped learning in my current role.", "It’s not that I dislike my job — I just think I’ve stopped growing in it, and that bothers me more than the workload."], note: "“It’s not that X — it’s Y” is a powerful precision structure." },
  { basic: "People are using phones too much.", levels: ["People are always on their phones.", "Phone use seems to have become compulsive.", "Our phones seem designed to capture as much attention as possible.", "I don’t think the problem is individual weakness — phones are designed by very smart people whose job is to capture our attention."], note: "Shift from blame to system — a hallmark of mature thinking." },
  { basic: "I agree with you.", levels: ["Yes, I agree.", "That’s exactly how I see it.", "I agree — and I’d add that it’s also cheaper.", "I couldn’t agree more — and what strikes me is that it’s not only fairer, it’s cheaper in the long run."], note: "Agree by adding (Day 36)." },
  { basic: "It’s a big problem.", levels: ["It’s a serious problem.", "It’s a significant issue.", "It’s a problem that’s easy to underestimate.", "It’s the kind of problem that looks small on any given day and enormous over a decade."], note: "Time-frame contrast makes scale vivid." }
];

/* phrase frames for the “Find the words” tool (offline mode) */
TAW.phraseFrames = [
  { intent: "Say that two things don’t always go together", keys: ["pero no necesariamente", "mas não necessariamente", "but not necessarily", "sin", "without", "no siempre", "nem sempre", "not always"], frames: ["Someone can be X without necessarily being Y.", "X doesn’t always mean Y.", "Being X and being Y are not the same thing."] },
  { intent: "Give your opinion", keys: ["creo que", "pienso que", "acho que", "penso que", "i think", "en mi opinión", "na minha opinião", "opinion"], frames: ["My sense is that…", "I tend to think…", "From where I stand…", "I’m inclined to think…"] },
  { intent: "Disagree politely", keys: ["no estoy de acuerdo", "não concordo", "disagree", "no creo", "não acho", "wrong", "equivocado", "errado"], frames: ["I’m not entirely convinced that…", "I’d look at it slightly differently.", "There’s some truth to that, although…", "I see your point, but…"] },
  { intent: "Express contrast", keys: ["sin embargo", "no entanto", "however", "aunque", "embora", "although", "pero", "mas", "por outro lado", "por otro lado"], frames: ["That said, …", "Having said that, …", "Whereas X…, Y…", "On the other hand, …"] },
  { intent: "Express uncertainty", keys: ["no sé", "não sei", "quizás", "talvez", "tal vez", "maybe", "perhaps", "not sure", "no estoy segura", "não tenho certeza"], frames: ["I could be wrong, but…", "My guess would be…", "As far as I know…", "I’m genuinely not sure, but I suspect…"] },
  { intent: "Explain a cause", keys: ["porque", "because", "por eso", "por isso", "debido a", "devido a", "cause", "razón", "razão"], frames: ["The main reason is that…", "This is largely because…", "It stems from…", "Part of the explanation is…"] },
  { intent: "Describe a consequence", keys: ["entonces", "então", "por lo tanto", "portanto", "so", "therefore", "as a result", "consecuencia", "consequência"], frames: ["As a result, …", "Which means that…", "The knock-on effect is…", "Consequently, …"] },
  { intent: "Give an example", keys: ["por ejemplo", "por exemplo", "for example", "como", "such as", "like"], frames: ["Take X, for instance.", "A case in point is…", "To give you an example, …"] },
  { intent: "Make a comparison", keys: ["más que", "mais que", "menos que", "more than", "less than", "comparado", "compared", "igual que", "assim como"], frames: ["Compared with X, Y is…", "X is far more… than Y.", "They’re similar in that…, but…"] },
  { intent: "Talk about a feeling", keys: ["me siento", "me sinto", "siento", "sinto", "i feel", "feel", "emoción", "emoção"], frames: ["I felt a mixture of… and…", "It wasn’t so much X as Y.", "If I’m honest, I was…"] },
  { intent: "Talk about a realisation", keys: ["me di cuenta", "percebi", "realised", "realized", "entendí", "entendi", "descubrí", "descobri"], frames: ["It dawned on me that…", "That’s when I realised…", "In hindsight, I can see that…"] },
  { intent: "Add nuance", keys: ["depende", "depends", "en parte", "em parte", "partly", "más o menos", "mais ou menos", "complicado", "complicated"], frames: ["To some extent…", "It depends on…", "It’s not black and white.", "One caveat is…"] },
  { intent: "Emphasise what matters most", keys: ["lo más importante", "o mais importante", "most important", "lo que importa", "o que importa", "key", "clave", "chave"], frames: ["What matters most is…", "The key point is…", "What really strikes me is…"] },
  { intent: "Talk about the past and regret", keys: ["si hubiera", "se eu tivesse", "if i had", "ojalá", "quem dera", "wish", "regret", "arrepiento", "arrependo"], frames: ["If I had…, I would have…", "I wish I had…", "Looking back, I would have…"] },
  { intent: "Describe someone’s character", keys: ["es una persona", "é uma pessoa", "she is", "he is", "persona que", "pessoa que", "person who"], frames: ["She’s the kind of person who…", "What I admire about him is…", "At heart, she’s…"] },
  { intent: "Talk about success and fulfilment", keys: ["éxito", "sucesso", "success", "realizada", "realizado", "fulfilled", "feliz", "happy", "satisfecha", "satisfeita"], frames: ["Someone can be successful without necessarily feeling fulfilled.", "By conventional standards…, but…", "What matters more to me is…"] }
];

TAW.speakingChallenges = [
  { s: 30, p: "What is something you recently changed your mind about?" },
  { s: 30, p: "Describe your ideal Sunday — precisely." },
  { s: 30, p: "What’s a word in your first language that English doesn’t have?" },
  { s: 60, p: "Why do people care so much about status?" },
  { s: 60, p: "What’s the best piece of advice you’ve ever ignored?" },
  { s: 60, p: "Describe someone who influenced you without listing adjectives — tell me what they did." },
  { s: 60, p: "Explain your job to a 12-year-old." },
  { s: 90, p: "Has social media improved or damaged friendship?" },
  { s: 90, p: "Should we judge historical figures by today’s values?" },
  { s: 90, p: "Is it better to be a specialist or a generalist?" },
  { s: 90, p: "Tell a story about a time a stranger surprised you." },
  { s: 120, p: "What does a successful life mean to you?" },
  { s: 120, p: "Is ambition a virtue?" },
  { s: 120, p: "Do we have a duty to be informed about the news?" },
  { s: 120, p: "What would you change about how schools teach?" },
  { s: 180, p: "Is technology making us more connected or more isolated?" },
  { s: 180, p: "Should art be judged separately from the artist?" },
  { s: 180, p: "Is meritocracy a fair ideal?" }
];

TAW.unfamiliarTopics = [
  "The future of bees", "Why some languages disappear", "The ethics of zoos", "Should cities ban cars from their centres?",
  "Why we find cats funny", "The history of the fork", "Is chess an art or a sport?", "Space tourism", "Lab-grown meat",
  "Why handwriting still matters (or doesn’t)", "Four-day working weeks", "The economics of football transfers",
  "Why people believe conspiracy theories", "Should voting be compulsory?", "Why we keep souvenirs", "The rise of solo travel",
  "Is boredom useful?", "Why buildings look the way they do", "The psychology of queues", "Should museums be free?",
  "Why people collect things", "Tipping culture", "The meaning of tattoos", "Why some songs get stuck in your head",
  "Who owns the Moon?", "Translation and AI", "Why we procrastinate", "Should homework be abolished?", "The language of emojis", "Silence"
];

TAW.conversationCards = {
  dinner: { title: "Dinner", icon: "🍷", items: [
    "What have you been reading, watching or listening to that you can’t stop thinking about?",
    "What’s something you believed strongly ten years ago that you don’t believe now?",
    "If you could have dinner with anyone from history, who — and what would you ask?",
    "What’s a skill you’d love to learn if time and money weren’t an issue?",
    "What’s the most interesting place you’ve ever lived or stayed?",
    "What’s an opinion you hold that most people at this table might disagree with?",
    "Which city in the world do you think is most underrated?",
    "What’s a small thing that makes a day good for you?",
    "What tradition from your family would you keep forever?",
    "What’s the best conversation you’ve had recently — what made it good?" ] },
  work: { title: "Work", icon: "💼", items: [
    "What are you working on at the moment that you’re genuinely excited about?",
    "What’s something about your field that outsiders usually misunderstand?",
    "How has your work changed in the last few years?",
    "What’s the best advice you’ve had in your career?",
    "If you could fix one thing about how your industry works, what would it be?" ] },
  date: { title: "Date", icon: "🌙", items: [
    "What’s something you’re curious about right now?",
    "What did you want to be when you were ten — and is any of it still there?",
    "What’s a place that feels like home to you, even if you’ve never lived there?",
    "What’s a book or film that changed how you see something?",
    "What does a really good weekend look like for you?",
    "What are you proud of that most people don’t know about?",
    "What’s something you’ve changed your mind about recently?" ] },
  travel: { title: "Travel", icon: "🧭", items: [
    "What’s something people here are proud of that visitors usually miss?",
    "What should I eat that’s not in the guidebooks?",
    "How has this city changed in your lifetime?",
    "What’s a word in your language that’s hard to translate?",
    "What do people here think about tourists — honestly?",
    "What would you show a friend who had only one day here?" ] },
  networking: { title: "Networking", icon: "🤝", items: [
    "What brought you to this event?",
    "What problem are you most focused on solving this year?",
    "How did you get into this field?",
    "What’s a trend in your industry you think people are overestimating?",
    "Who should I be talking to here?",
    "What’s the best thing you’ve read recently about our field?" ] },
  friends: { title: "Friends", icon: "☕", items: [
    "What’s been taking up most of your mental space lately?",
    "What’s something you’ve been wanting to tell someone but haven’t?",
    "What are you looking forward to this year?",
    "When did you last feel really proud of yourself?",
    "What’s something you’ve learned about yourself recently?",
    "If you could restart one decision from the last five years, which?",
    "What do you think we’ll be laughing about in ten years?" ] }
};

TAW.journalPrompts = [
  "What changed your mind recently?", "What are you curious about?", "What do you wish you understood better?",
  "What is a belief you inherited rather than chose?", "What makes someone interesting to you?",
  "What does a good life mean to you?", "What are you afraid of being wrong about?", "What kind of woman do you want to become?",
  "Which conversation this week do you wish had gone differently — and how?", "Who do you admire for the way they speak? What do they do?",
  "What idea from this week would you like to explain to someone you love?", "Where do you feel most like yourself in English?",
  "What topic do you avoid in conversation? Why?", "What did you notice today that you normally wouldn’t?",
  "What would you say if you weren’t afraid of sounding pretentious?", "What do you know now that you didn’t know a month ago?"
];

TAW.weeklyQuestions = [
  "What did I learn?", "What surprised me?", "What idea stayed with me?", "What word did I start using?",
  "What was difficult?", "What can I now explain that I couldn’t explain last week?", "What topic do I want to explore further?"
];

TAW.benchmark = { prompt: "What do you think makes someone successful?", seconds: 90, days: [1, 30, 60, 90, 120, 150, 180] };

TAW.milestones = {
  7: { title: "First week", line: "You showed up for seven days. That is the hardest part of anything.", reflect: "What surprised you about this first week? What do you want from the next twenty-three days?" },
  30: { title: "Finding my voice", line: "One month. You have started to describe yourself in your own words.", reflect: "Compare your Day 1 and Day 30 answers. What changed — in content, not only in English?" },
  60: { title: "Becoming conversational", line: "Two months. You can now ask, listen, agree, disagree and tell a story.", reflect: "Which conversation in the last month went better because of something you practised here?" },
  90: { title: "Cultural foundation", line: "Halfway. You now carry a small library of references across history, art and literature.", reflect: "Which reference from Month 3 has entered your real conversations?" },
  120: { title: "Thinking deeper", line: "Four months. You have frameworks for ethics, the mind, money and society.", reflect: "Which framework from Month 4 changed how you see something in your own life?" },
  150: { title: "Articulation", line: "Five months. You can structure an argument, qualify it and make it memorable.", reflect: "What is your communication style now? What do you never want to lose?" },
  180: { title: "Transformation", line: "Well read. Well spoken. Curious. Articulate. Not perfect — becoming.", reflect: "Who were you on Day 1? Who are you on Day 180?" }
};

TAW.graduation = [
  { part: 1, title: "Spontaneous speaking", prompt: "Speak for two minutes on: “What is worth learning, and why?”", seconds: 120 },
  { part: 2, title: "Explain a cultural concept", prompt: "Choose any concept from your Passport and explain it to a curious friend.", seconds: 90 },
  { part: 3, title: "A controversial topic", prompt: "Should art be judged separately from the artist? Take a nuanced position.", seconds: 120 },
  { part: 4, title: "A personal story", prompt: "Tell a story about a moment in these six months when you felt different speaking English.", seconds: 90 },
  { part: 5, title: "Something complex, simply", prompt: "Explain opportunity cost, confirmation bias or inflation to a 12-year-old.", seconds: 60 },
  { part: 6, title: "Respond to disagreement", prompt: "Someone tells you: “Learning about culture is a luxury for people with free time.” Respond.", seconds: 90 },
  { part: 7, title: "A book, film, artist or event", prompt: "Talk about a book, film, artist or historical event that changed how you think.", seconds: 120 }
];

TAW.mentorLines = [
  "Let’s make that idea more precise.", "You know what you mean. Now let’s find the language for it.",
  "Good answer. Now add nuance.", "You don’t need a bigger word. You need a more accurate one.",
  "You don’t need to know everything. You need to stay curious.", "Specific beats impressive.",
  "Consistency over perfection.", "Say less, mean more."
];

/* words often overused by learners — feeds constraint challenges */
TAW.overuseTargets = {
  "i think": ["My sense is that…", "I’d say…", "I tend to think…", "From where I stand…"],
  "very": ["extremely", "remarkably", "deeply", "a precise adjective instead"],
  "really": ["genuinely", "truly", "particularly", "(often: delete it)"],
  "thing": ["aspect", "issue", "detail", "idea", "factor"],
  "good": ["compelling", "thoughtful", "effective", "rewarding", "well-made"],
  "bad": ["harmful", "disappointing", "careless", "counterproductive"],
  "interesting": ["striking", "intriguing", "thought-provoking", "unusual"],
  "a lot": ["a great deal", "considerably", "many", "significantly"],
  "nice": ["pleasant", "charming", "considerate", "elegant"],
  "amazing": ["remarkable", "extraordinary", "striking", "moving"],
  "stuff": ["things → be specific", "material", "belongings", "ideas"],
  "basically": ["essentially", "in short", "(often: delete it)"]
};
