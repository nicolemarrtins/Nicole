/* Days 47–54, fully written (Month 2 — Become Interesting). Day 49 is the weekly review. */
(function () {
const V = TAW.V;

TAW.lessons[47] = {
  day: 47, title: "Talking about books you haven’t finished", kicker: "Literature · Honest reading",
  cats: ["literature", "conversation"], skills: ["culture", "articulation", "conversation"], difficulty: "Intermediate", minutes: 30,
  why: "At dinners and in meetings, books come up — and nobody has read everything. Pretending is risky and dull; honesty plus a genuine reaction is far more interesting. You can have a rich conversation about a book you only started.",
  learn: {
    body: [
      "Pierre Bayard, a French literature professor, wrote a playful but serious book about this: <em>How to Talk About Books You Haven’t Read</em> (2007). His point: our relationship with every book is partial. We skim, we forget, we know books by reputation. What matters is placing a book in your “inner library” — what it connects to, what it argues, why people care about it.",
      "Talk about what you <em>do</em> know: the <strong>premise</strong> (“It imagines a world where…”), the <strong>gist</strong> of its argument, the conversation around it (“People either love it or find it overrated”), and your honest reaction to the part you read (“The first chapter really <strong>resonated</strong> with me because…”).",
      "Be honest about how far you got — it makes you more credible, not less: “I only got halfway, but…”, “Honestly, I <strong>skimmed</strong> it…”, “I’ve read about it, but not the book itself.” Then turn it into curiosity: “Does the ending live up to the beginning?”",
      "Why did you stop? That is often the most interesting part. “It lost me in the middle — too much description” is a real literary opinion. So is “It was beautifully written, but I wasn’t in the right moment for it.” Some books wait for us."
    ],
    phrases: [
      { en: "I only got halfway, but…", tone: "Honest", note: "Frames your partial reading — then share a reaction." },
      { en: "The premise is fascinating: …", tone: "Engaged", note: "Talk about the idea, not the plot." },
      { en: "What resonated with me was…", tone: "Personal", note: "Your reaction — the most interesting part." },
      { en: "It lost me around the middle.", tone: "Candid", note: "A legitimate opinion about pacing." },
      { en: "Is it worth going back to?", tone: "Curious", note: "Hands the conversation to someone who finished it." }
    ],
    tip: "Honest about how far you got; generous about what you found."
  },
  vocab: [
    V("premise", "PREM-is", "noun", "The basic idea or situation on which a story, argument or plan is based.", "For books and films: “The premise is that…”. In logic, a premise is an assumption the conclusion depends on.", ["concept", "starting point", "assumption"], "“Concept” is general. “Starting point” is informal. An “assumption” is what you take for granted. A “premise” is the foundation everything else builds on.", "The premise of the novel is simple: a robot narrates the life of a lonely child.", "— What’s it about?\n— The premise is that everyone stops ageing at thirty.", "Describe the premise of a book or film you know."),
    V("gist", "jist (soft g, as in “just”)", "noun", "The main point or general meaning of something.", "Informal and very useful: “get the gist”, “the gist of it is…”.", ["main point", "essence", "core"], "“Main point” is neutral. “Essence” is more formal and philosophical. The “core” is the central part. The “gist” is the general meaning, without details.", "I didn’t catch every word, but I got the gist.", "— Did you read the report?\n— The gist of it: costs are up, sales are flat.", "Give the gist of a book or article in one sentence."),
    V("skim", "skim", "verb", "To read something quickly to get the main ideas, without reading every word.", "Neutral and practical — everyone skims. “Skim through”, “skim over”.", ["scan", "browse", "flick through"], "“Scan” means look quickly for specific information. “Browse” means look casually. “Flick through” is informal, for pages. “Skim” means read quickly for the general idea.", "I skimmed the last chapters on the plane.", "— Did you read the contract?\n— I skimmed it — Legal is doing the detailed review.", "Name something you usually skim, and something you always read carefully."),
    V("resonate", "REZ-uh-nayt", "verb", "To feel meaningful or familiar to someone; to connect with their experience.", "Very common: “It resonated with me”, “The message resonated with customers.”", ["strike a chord", "connect", "ring true"], "“Strike a chord” is idiomatic and emotional. “Connect” is general. “Ring true” means seem authentic. “Resonate” suggests an echo inside you.", "Her story about moving countries really resonated with me.", "— Did you like the talk?\n— The part about failure really resonated.", "Write about an idea that resonated with you recently."),
    V("overrated", "oh-ver-RAY-tid", "adjective", "Thought to be better or more important than it really is.", "A strong opinion — give a reason. The opposite is underrated.", ["overhyped", "overpraised", "disappointing"], "“Overhyped” suggests too much publicity. “Overpraised” is formal. “Disappointing” is about your own experience. “Overrated” means the general opinion is too high.", "I think the book is slightly overrated — a brilliant first half, then repetitive.", "— Everyone loves that series.\n— Honestly, I find it a bit overrated.", "Name something you think is overrated — with one reason.")
  ],
  culture: "bayard",
  cultureNote: "Bayard’s book is partly a joke and partly a liberation: nobody has read everything. What makes you interesting is not completeness, but how you connect what you have read.",
  sayBetter: {
    basic: "I didn’t finish the book. It was boring.",
    levels: [
      ["Level 1", "I didn’t finish it — I found it a bit boring.", "Honest, but it closes the topic."],
      ["Level 2", "I only got halfway — the beginning was great, but it slowed down.", "A specific reaction."],
      ["Level 3", "I only got halfway, but the premise really stayed with me — a world where nobody can lie. It just lost me in the middle.", "Premise, reaction and a reason for stopping."],
      ["Level 4", "I have to confess I only got halfway — but the premise has stayed with me: a society where nobody can lie, and what that does to love and politics. It lost me in the middle, when it became more description than idea. Did you finish it? I’m curious whether the ending is worth going back for.", "Honest, specific about what resonated and why you stopped — and a curious question."]
    ],
    prompt: "Talk about a book you didn’t finish at Level 4."
  },
  exercise: {
    title: "Say what you know",
    instructions: "For each situation, write what you could say — honestly — about a book you haven’t fully read.",
    items: [
      { q: "A colleague mentions Sapiens by Yuval Noah Harari. You read the first chapters.", a: "I read the first few chapters — the idea that shared stories are what allow humans to cooperate in huge groups really stayed with me. Does the rest keep that energy?" },
      { q: "Someone asks if you’ve read Pride and Prejudice. You’ve only seen the film.", a: "Not the novel itself — only the film — but I know the premise: first impressions and pride getting in the way of love. Is the book very different?" },
      { q: "Your book club chose a novel you abandoned after fifty pages.", a: "Honestly, it lost me early — the writing was beautiful, but I couldn’t connect with the narrator. I’d love to hear what kept you going." },
      { q: "Your boss recommends a business book you skimmed.", a: "I skimmed it — the gist, as I understood it, is to focus on a few priorities and say no to the rest. Which part has been most useful for you?" }
    ]
  },
  think: {
    q: "Is it dishonest to talk about a book you haven’t read?",
    angles: ["Where is the line between honesty and pretending?", "Do you ever feel pressure to have read the “right” books?", "What does a book’s reputation tell you — and what does it hide?"]
  },
  express: { prompt: "Write 120–150 words about a book you started but didn’t finish: the premise, what resonated, why you stopped — and whether you’ll go back." },
  speak: {
    prompt: "Talk about a book you started but didn’t finish: its premise, what you liked, and why you stopped.", seconds: 90,
    structure: ["Be honest about how far you got", "The premise, in one or two sentences", "What resonated with you", "Why you stopped", "Would you go back? — and a question"]
  },
  recall: [
    { q: "Day 46: Which four questions help you elaborate?", a: "Why? For example? So what? How does it feel?" },
    { q: "Day 44: Give a phrase that signals uncertainty politely.", a: "“I could be wrong, but…”, “As far as I know…”, “My best guess is…”" },
    { q: "Day 29: What does “formative” mean?", a: "Having a strong influence on how someone develops — a formative experience." }
  ],
  reflect: "Which book do you pretend to have read? What would happen if you simply said so?",
  deep: {
    title: "Read: Pierre Bayard, How to Talk About Books You Haven’t Read (2007)",
    body: "Short, witty and full of literary examples — from Montaigne, who forgot what he had read, to the librarian in Musil’s The Man Without Qualities, who reads only catalogues.",
    prompt: "Write 150 words describing your “inner library”: five books that shaped you, whether or not you finished them."
  }
};

TAW.lessons[48] = {
  day: 48, title: "Talking about films", kicker: "Cinema · Beyond the plot",
  cats: ["cinema", "conversation"], skills: ["culture", "conversation"], difficulty: "Intermediate", minutes: 30,
  why: "Everyone watches films, so they are one of the easiest bridges between people. But “It was good” — or a long plot summary — kills the conversation. Talking about how a film works, and what it is really about, makes you a far more interesting companion.",
  learn: {
    body: [
      "Avoid the plot trap. Instead of retelling the story, talk about four things: <strong>performance</strong> (“Her performance is so restrained — she barely raises her voice”), <strong>pacing</strong> (“The first hour is slow, but it pays off”), <strong>look and sound</strong> (“The <strong>cinematography</strong> is gorgeous — every shot looks like a painting”) and <strong>meaning</strong> (“It’s really about loneliness”).",
      "Agnès Varda, a pioneer of the French New Wave, made films that mixed fiction and documentary, and she described her approach as <em>cinécriture</em> — “cinematic writing”: the way a film is made is part of what it says. That is a useful lens. Ask not only what happens, but how it is shown.",
      "Useful phrases for meaning: “It’s really about…”, “On the surface it’s a thriller, but underneath it’s a film about class.”, “What stayed with me was…”. For disagreement: “I can see why people love it, but it didn’t work for me — the <strong>protagonist</strong> felt too passive.”",
      "Respect <strong>spoilers</strong>: “No spoilers, but…” or “Have you seen it? I don’t want to ruin the ending.” And ask questions that invite opinions rather than ratings: “What did you make of the ending?”"
    ],
    phrases: [
      { en: "What I love about it is…", tone: "Enthusiastic", note: "Starts with your experience, not the plot." },
      { en: "The pacing is…", tone: "Analytical", note: "Talks about rhythm: a slow burn, relentless, uneven." },
      { en: "It’s really about…", tone: "Insightful", note: "Moves from story to meaning." },
      { en: "No spoilers, but…", tone: "Considerate", note: "Protects the other person’s experience." },
      { en: "What did you make of the ending?", tone: "Inviting", note: "Asks for an interpretation, not a score." }
    ],
    tip: "Not what happens — how it’s shown, and what it’s really about."
  },
  vocab: [
    V("cinematography", "sin-uh-muh-TOG-ruh-fee", "noun", "The art of camera work in film: lighting, framing, movement and colour.", "The key word for how a film looks. The person is the cinematographer, or director of photography.", ["camera work", "visuals", "photography"], "“Camera work” is informal. “Visuals” is broad, including effects and design. “Photography” is general. “Cinematography” is the specific craft of filming.", "The cinematography is stunning — the desert scenes look like paintings.", "— Did you like it?\n— The story was thin, but the cinematography was extraordinary.", "Describe the look of a film you love."),
    V("pacing", "PAY-sing", "noun", "The speed at which a story develops and events happen.", "Slow pacing isn’t always negative: a “slow burn” builds tension gradually.", ["rhythm", "tempo", "flow"], "“Rhythm” suggests a pattern. “Tempo” comes from music. “Flow” is about smoothness. “Pacing” is about speed — and how it is controlled.", "The pacing is uneven: a brilliant first hour, and then it drags.", "— Is it too long?\n— The pacing is slow, but it pays off at the end.", "Describe the pacing of a series you’ve watched."),
    V("protagonist", "proh-TAG-uh-nist", "noun", "The main character in a story, film or play.", "Also used for leading figures in real events: “the protagonists of the reform”.", ["main character", "hero", "lead"], "“Main character” is neutral. “Hero” suggests admirable qualities. The “lead” is the actor in the main role. The “protagonist” is the central character — who may not be admirable at all.", "The protagonist isn’t likeable, which makes the film more interesting.", "— Who’s the protagonist?\n— A retired teacher who becomes a detective — sort of.", "Describe the protagonist of your favourite film in two sentences."),
    V("poignant", "POYN-yunt (the g is silent)", "adjective", "Causing a sharp feeling of sadness or regret; deeply moving.", "More precise than “sad”: poignant suggests tenderness and meaning.", ["moving", "touching", "bittersweet"], "“Moving” and “touching” are general. “Bittersweet” mixes happiness and sadness. “Poignant” is sharply, tenderly sad.", "The final scene, with the empty kitchen, is incredibly poignant.", "— Did you cry?\n— A little. The letter at the end is so poignant.", "Describe a poignant moment from a film or book."),
    V("spoiler", "SPOY-ler", "noun", "Information that reveals an important part of a story, especially the ending, before someone has seen it.", "“Spoiler alert!” warns that you are about to reveal something. To “spoil” means to ruin.", ["giveaway", "reveal", "plot twist"], "A “giveaway” reveals something accidentally. A “reveal” is a planned surprise inside the story. A “plot twist” is an unexpected development. A “spoiler” gives that surprise away to someone who hasn’t seen it.", "No spoilers, please — I haven’t watched the last episode.", "— Do they get married in the end?\n— I can’t tell you — that would be a spoiler!", "Recommend a film in one sentence — without spoilers.")
  ],
  culture: "varda",
  cultureNote: "Varda believed that how a film is made is part of what it says. Borrow her lens: next time you talk about a film, mention one choice the director made — and what it made you feel.",
  sayBetter: {
    basic: "I saw a film. It was very good. It is about a family and the father dies and then…",
    levels: [
      ["Level 1", "I saw a really good film about a family.", "No plot dump — but vague."],
      ["Level 2", "I loved it — it’s a family drama, beautifully acted.", "A reason, not a summary."],
      ["Level 3", "I loved it. On the surface it’s a family drama, but it’s really about how grief changes a family’s silences.", "From story to meaning."],
      ["Level 4", "I loved it. On the surface it’s a quiet family drama, but it’s really about how grief changes the way people are silent with each other. The pacing is slow — there’s almost no music — so every small gesture matters. No spoilers, but the last scene is one of the most poignant I’ve seen in years.", "Meaning, craft, pacing and emotion — and no plot dump."]
    ],
    prompt: "Talk about a film you love at Level 4 — without summarising the plot."
  },
  exercise: {
    title: "Beyond the plot",
    instructions: "Rewrite each comment so that it talks about craft or meaning rather than plot.",
    items: [
      { q: "“It’s about a man who goes to space and then he has problems.”", a: "On the surface it’s a space adventure, but it’s really about loneliness — and the cinematography makes space feel terrifyingly silent." },
      { q: "“The film was long.”", a: "The pacing is slow — it takes its time — but the last half hour pays off completely." },
      { q: "“The actress was good.”", a: "Her performance is so restrained: she barely raises her voice, and somehow that makes it more powerful." },
      { q: "“I didn’t like it.”", a: "I can see why people love it, but it didn’t work for me — I never believed the protagonist’s choices." }
    ]
  },
  think: {
    q: "What makes a film stay with you for years?",
    angles: ["Is it the story, a character, an image or a feeling?", "Which film changed how you see something?", "Do you prefer films that comfort you, or films that disturb you?"]
  },
  express: { prompt: "Write a short review (150 words) of a film you love, with no more than one sentence of plot. Focus on performance, pacing, look and meaning." },
  speak: {
    prompt: "Talk about a film you love — without summarising the plot.", seconds: 90,
    structure: ["The premise, in one sentence", "What it’s really about", "One element of craft: performance, pacing or cinematography", "A moment that stayed with you (no spoilers)", "Why — and to whom — you’d recommend it"]
  },
  recall: [
    { q: "Day 47: What is the difference between “premise” and “gist”?", a: "The premise is the basic situation or idea of a story; the gist is the main point or general meaning of something." },
    { q: "Day 45: What does “admittedly” do?", a: "It concedes a point against your own position." },
    { q: "Day 13: What does “aesthetic” mean?", a: "Concerned with beauty and its appreciation; also, a particular style or look." }
  ],
  reflect: "Which film do you recommend most often — and do you describe its plot or its feeling?",
  deep: {
    title: "Watch: Agnès Varda, Cléo from 5 to 7 (1962)",
    body: "A young singer waits for the results of a medical test, in almost real time, wandering through Paris. Notice how the way it is filmed — clocks, mirrors, streets — tells the story.",
    prompt: "Write 150 words about one choice Varda makes as a director — and what it makes you feel."
  }
};

TAW.lessons[50] = {
  day: 50, title: "Talking about music", kicker: "Music · Mood and meaning",
  cats: ["music", "conversation"], skills: ["culture", "conversation", "english"], difficulty: "Intermediate", minutes: 30,
  why: "Music is one of the most personal topics there is — and one of the hardest to describe. A small vocabulary of mood, texture and meaning lets you share what a song does to you, not just its name.",
  learn: {
    body: [
      "Describe music on three levels. <strong>Sound</strong>: tempo (slow, upbeat), texture (sparse, layered, lush), voice (raw, smoky, soaring), instruments. <strong>Mood</strong>: melancholic, joyful, haunting, defiant, nostalgic. <strong>Meaning</strong>: what the <strong>lyrics</strong> say, and what the song <strong>evokes</strong> for you.",
      "Nina Simone trained as a classical pianist and dreamed of becoming a concert performer; she brought Bach-like counterpoint into jazz, blues and soul. In the 1960s she made her music a voice for civil rights: “Mississippi Goddam” (1964) was her furious response to the murder of Medgar Evers and the bombing of a church in Birmingham, Alabama, that killed four Black girls.",
      "Personal connection is the best way in: “This song always takes me back to…”, “What gets me is the moment when…”, “It has a <strong>melancholic</strong> quality, but somehow it’s hopeful.” You don’t need technical terms — precise feelings are enough.",
      "When tastes differ, stay curious: “It’s not really my thing, but I can hear why people love it — the voice is incredible.” Musical taste is tied to identity; dismissing someone’s favourite artist can feel personal."
    ],
    phrases: [
      { en: "It has a… quality.", tone: "Descriptive", note: "A flexible frame: a haunting quality, a dreamy quality." },
      { en: "It evokes…", tone: "Evocative", note: "Names the images or feelings it brings." },
      { en: "What gets me is…", tone: "Emotional, informal", note: "The exact moment that moves you." },
      { en: "It takes me straight back to…", tone: "Nostalgic", note: "Connects a song to a memory." },
      { en: "It’s not really my thing, but I can hear why people love it.", tone: "Generous", note: "Disagreement about taste — without dismissing it." }
    ],
    tip: "Name the sound, the mood and the memory."
  },
  vocab: [
    V("melancholic", "mel-un-KOL-ik", "adjective", "Sad in a thoughtful, often beautiful way.", "More poetic than “sad” — a reflective sadness you might even enjoy. Noun: melancholy.", ["wistful", "mournful", "sombre"], "“Wistful” is sadness with longing (Day 16). “Mournful” is about grief. “Sombre” is dark and serious. “Melancholic” is a gentle, reflective sadness.", "Her voice has a melancholic quality, even in the happy songs.", "— Is it a sad song?\n— Melancholic, more than sad. It’s beautiful.", "Describe a song or a place that feels melancholic to you."),
    V("evocative", "i-VOK-uh-tiv", "adjective", "Bringing strong images, memories or feelings to mind.", "Used for music, writing, smells and places: an evocative melody, an evocative description. Verb: evoke.", ["suggestive", "atmospheric", "vivid"], "“Suggestive” hints at something. “Atmospheric” creates a mood. “Vivid” is clear and bright. “Evocative” calls up memories or images.", "The song is so evocative — I can almost smell the sea.", "— Why do you love that album?\n— It’s evocative of a whole summer of my life.", "Describe something that is evocative of your childhood."),
    V("rhythm", "RITH-um", "noun", "A regular, repeated pattern of sounds or movements; also, a pattern in life or work.", "Also metaphorical: the rhythm of a city, the rhythm of a conversation. Tricky spelling — two h’s.", ["beat", "tempo", "pulse"], "The “beat” is the basic unit you tap your foot to. “Tempo” is speed. A “pulse” is a steady beat. “Rhythm” is the pattern of long and short sounds.", "The rhythm of the song makes it impossible to sit still.", "— Why do you like salsa?\n— The rhythm — my body moves before I decide to.", "Use “rhythm” to describe something that isn’t music."),
    V("lyrics", "LIR-iks", "noun (plural)", "The words of a song.", "Usually plural: “The lyrics are beautiful.” The writer is a lyricist.", ["words", "verses", "text"], "“Words” is everyday. “Verses” are sections of a song or poem. “Text” is general. “Lyrics” are specifically the words of a song.", "I love the melody, but I’ve never understood the lyrics.", "— What’s the song about?\n— Read the lyrics — it’s actually about leaving home.", "Quote or paraphrase some lyrics that matter to you."),
    V("haunting", "HAWN-ting", "adjective", "Beautiful in a sad or mysterious way that stays in your mind.", "Very positive for music, images and voices: a haunting melody.", ["unforgettable", "eerie", "poignant"], "“Unforgettable” is about memory. “Eerie” is strange and slightly frightening. “Poignant” is sharply moving. “Haunting” stays with you, often with sadness or mystery.", "The opening notes are haunting — I still hear them days later.", "— Is the soundtrack good?\n— Haunting. Mostly cello and silence.", "Describe a haunting piece of music, place or image.")
  ],
  culture: "simone",
  cultureNote: "Simone showed that music can be both art and argument. You don’t need to be political to talk about it — but noticing what a song is fighting for, or mourning, gives the conversation depth.",
  sayBetter: {
    basic: "I like this song. It is very nice.",
    levels: [
      ["Level 1", "I really like this song — it’s beautiful.", "Enthusiastic, but general."],
      ["Level 2", "I love this song — it’s quite melancholic, but beautiful.", "A precise mood word."],
      ["Level 3", "I love this song — it has a melancholic quality, but the rhythm keeps it hopeful. It takes me straight back to my first year abroad.", "Mood, sound and memory."],
      ["Level 4", "This song has a haunting, melancholic quality — just a piano and her voice, almost cracking. What gets me is the last verse, when the lyrics turn from loss to something like gratitude. It takes me straight back to my first winter abroad, when I played it every night.", "Sound, mood, a specific moment in the lyrics and a personal memory."]
    ],
    prompt: "Describe a song that matters to you at Level 4."
  },
  exercise: {
    title: "Sound, mood, meaning",
    instructions: "Describe each kind of music with a word for its sound, a word for its mood and a sentence about its meaning.",
    items: [
      { q: "A slow piano piece played at a funeral", a: "Sound: sparse. Mood: mournful. Meaning: it gives people permission to feel what they can’t say." },
      { q: "A protest song", a: "Sound: raw, with a driving rhythm. Mood: defiant. Meaning: it turns anger into something people can sing together." },
      { q: "A summer pop hit", a: "Sound: upbeat and catchy. Mood: carefree. Meaning: it’s the soundtrack to a moment, not a message — and that’s fine." },
      { q: "A song from your childhood", a: "Sound: warm, a little old-fashioned. Mood: nostalgic. Meaning: it evokes my grandmother’s kitchen on Sundays." }
    ]
  },
  think: {
    q: "Can music be political?",
    angles: ["Which songs changed public opinion — or captured a moment?", "Is all music political in some way?", "Can you separate an artist from their politics?"]
  },
  express: { prompt: "Write 150 words about a song that matters to you: the sound, the mood, the lyrics, and the memory it evokes." },
  speak: {
    prompt: "Describe a song that matters to you — the music, the lyrics, and what it evokes.", seconds: 90,
    structure: ["The song and the artist", "The sound: voice, instruments, rhythm", "The mood", "A line or moment in the lyrics", "The memory or meaning it holds for you"]
  },
  recall: [
    { q: "Day 48: What does “poignant” mean?", a: "Causing a sharp, tender feeling of sadness; deeply moving." },
    { q: "Day 16: What does “wistful” mean?", a: "Gently sad, with a longing for something past or lost." },
    { q: "Day 36: Give a phrase to agree and add a new angle.", a: "“Yes, and what strikes me is…” or “Absolutely — and on top of that…”" }
  ],
  reflect: "Which song would you choose as the soundtrack to this year of your life — and why?",
  deep: {
    title: "Listen: Nina Simone",
    body: "Listen to “Mississippi Goddam” (1964), then “Feeling Good” (1965). Notice the difference in mood — fury and freedom — and how her piano shapes both.",
    prompt: "Write 150 words comparing the two songs: sound, mood and meaning."
  }
};

TAW.lessons[51] = {
  day: 51, title: "Status and social signals", kicker: "Society · Signals",
  cats: ["society", "economics"], skills: ["thinking", "culture"], difficulty: "Intermediate", minutes: 30,
  why: "Much of social life — at work and beyond — is about status, signalled through clothes, words, tastes, possessions and even what people choose not to show. Understanding these signals makes you a sharper observer and a more deliberate communicator.",
  learn: {
    body: [
      "Thorstein Veblen coined the phrase <strong>“conspicuous consumption”</strong> in <em>The Theory of the Leisure Class</em> (1899): spending on visible luxuries in order to display wealth and status. Today the idea explains logos, luxury cars — and the carefully curated lives on social media.",
      "But signals evolve. When luxury becomes widely accessible, elites often shift to quieter signals: luxury without logos, education, health, time, experiences. The sociologist Elizabeth Currid-Halkett called this <strong>“inconspicuous consumption”</strong> in <em>The Sum of Small Things</em> (2017).",
      "Language is a status signal too: vocabulary, accent, the references people make, even how much they speak in meetings. Pierre Bourdieu (Day 25) argued that taste works as <strong>cultural capital</strong>. Noticing this isn’t cynical — it helps you choose your signals rather than be controlled by them.",
      "At work, status shows in who speaks first, who sits where, whose emails get quick replies, and who is copied. Senior communicators often signal status through calm and brevity, not volume: they don’t need to fill every silence."
    ],
    phrases: [
      { en: "It’s a way of signalling…", tone: "Analytical", note: "Names the hidden message." },
      { en: "What’s really being communicated is…", tone: "Insightful", note: "Reads beneath the surface." },
      { en: "It’s a status thing, really.", tone: "Informal", note: "A light, honest observation." },
      { en: "It’s aspirational — it sells who you’d like to be.", tone: "Marketing-savvy", note: "Useful for brands and advertising." },
      { en: "Quiet luxury is still a signal — just a quieter one.", tone: "Wry", note: "Shows you see through the subtle versions too." }
    ],
    tip: "Everything signals something. Choose your signals."
  },
  vocab: [
    V("status", "STAY-tus (UK also STAT-us)", "noun", "Social or professional position or rank, especially in relation to others.", "Also used for official position (marital status) and progress (project status).", ["standing", "rank", "prestige"], "“Rank” is a formal position in a hierarchy. “Standing” is reputation in a community. “Prestige” is admiration. “Status” is relative position — often unspoken.", "In many offices, the corner room is still a status symbol.", "— Why does he care so much about the title?\n— Status. It matters a lot in his industry.", "Name a status symbol in your industry."),
    V("signal", "SIG-nul", "verb / noun", "To communicate something indirectly, through actions, choices or appearance.", "Key for social analysis: signal wealth, belonging, competence. “Virtue signalling” is a critical term.", ["indicate", "convey", "suggest"], "“Indicate” is neutral. “Convey” means communicate a message or feeling. “Suggest” is tentative. “Signal” means sending a message — deliberately or not — through behaviour.", "Arriving early signals that you take the meeting seriously.", "— Why did she wear a suit to the start-up?\n— Maybe to signal that she means business.", "Describe something you do at work that signals something about you."),
    V("aspirational", "as-puh-RAY-shuh-nul", "adjective", "Showing or appealing to a desire for higher status, a better life or success.", "Very common in marketing: aspirational brands sell an identity, not just a product.", ["ambitious", "upmarket", "desirable"], "“Ambitious” describes a person’s drive. “Upmarket” is about price and quality. “Desirable” means wanted. “Aspirational” appeals to who people would like to become.", "The adverts are aspirational — they sell a lifestyle, not a sofa.", "— Why is that brand so expensive?\n— It’s aspirational. People are buying the image.", "Describe an aspirational brand and what it really sells."),
    V("inconspicuous", "in-kun-SPIK-yoo-us", "adjective", "Not attracting attention; not easily noticed.", "The opposite is conspicuous. “Inconspicuous consumption” is spending on what isn’t visible: education, health, time.", ["discreet", "low-key", "unobtrusive"], "“Discreet” means deliberately not attracting attention. “Low-key” is relaxed and modest. “Unobtrusive” means not getting in the way. “Inconspicuous” simply means not noticeable.", "The richest guest wore the most inconspicuous clothes in the room.", "— Was there security at the event?\n— Yes, but very inconspicuous.", "Write about a status signal that is deliberately inconspicuous."),
    V("cultural capital", "KUL-chuh-rul KAP-i-tul", "noun", "Knowledge, tastes, education and manners that give someone a social advantage.", "A term from the sociologist Pierre Bourdieu (Day 25). Neutral in analysis, but it can sound academic.", ["social capital", "refinement", "know-how"], "“Social capital” is the value of your relationships. “Refinement” is elegance. “Know-how” is practical skill. “Cultural capital” is cultural knowledge that works like money in social life.", "Knowing which fork to use is a small piece of cultural capital.", "— Why do they all mention the same books?\n— Cultural capital — it signals belonging.", "Describe a piece of cultural capital you have gained in a new country or job.")
  ],
  culture: "veblen",
  cultureNote: "Veblen wrote in 1899, but you can see his idea every day on social media. The modern twist is that the most powerful signals are often the quietest: time, calm and attention.",
  sayBetter: {
    basic: "People buy expensive things to show they are rich.",
    levels: [
      ["Level 1", "People buy luxury things to show their status.", "Clearer and more precise."],
      ["Level 2", "A lot of luxury spending is about signalling status, not quality.", "“Signalling” adds analytical precision."],
      ["Level 3", "Veblen called it conspicuous consumption — buying visible luxuries to signal status. Social media has made it even more obvious.", "A reference and a modern example."],
      ["Level 4", "Veblen called it conspicuous consumption, and it’s everywhere on social media. But what’s interesting is that the real elite has moved on to quieter signals — no logos, but expensive education, health and time. Quiet luxury is still a signal; it’s just aimed at people who know how to read it.", "Reference, example and a sharper insight into how signals evolve."]
    ],
    prompt: "Explain a status signal in your industry at Level 4."
  },
  exercise: {
    title: "Read the signal",
    instructions: "For each behaviour, write what it might be signalling, starting “It’s a way of signalling…”.",
    items: [
      { q: "A CEO who always replies to emails with a single line.", a: "It’s a way of signalling that their time is scarce — and that they don’t need to explain themselves." },
      { q: "A start-up founder who wears the same T-shirt every day.", a: "It signals focus — and that they’re above caring about appearance, which is itself a statement." },
      { q: "Someone who mentions the book they’re reading in every meeting.", a: "It’s a way of signalling curiosity and cultural capital — though it can start to sound like a performance." },
      { q: "A brand that removes its logo from its products.", a: "It signals quiet luxury: if you know, you know. Exclusivity through invisibility." }
    ]
  },
  think: {
    q: "Why do people care so much about status?",
    angles: ["Is the desire for status natural — or cultural?", "Which status signals do you care about, honestly?", "What signals status in your country that wouldn’t elsewhere?"]
  },
  express: { prompt: "Write 150 words analysing a status signal you see at work or on social media: what it is, what it communicates and who it is aimed at." },
  speak: {
    prompt: "Why do people care so much about status? Give two examples from modern life.", seconds: 60,
    structure: ["A clear position", "Example 1: a visible signal", "Example 2: an inconspicuous one", "Why it matters to people", "Your own relationship with it"]
  },
  recall: [
    { q: "Day 50: What does “evocative” mean?", a: "Bringing strong images, memories or feelings to mind." },
    { q: "Day 25: What did Bourdieu argue about taste?", a: "That taste is shaped by class and used to mark social distinction." },
    { q: "Day 39: What does “It’s telling that…” do?", a: "It interprets a small detail — what it reveals." }
  ],
  reflect: "What do your phone, your bag or your desk signal about you — and is that what you want?",
  deep: {
    title: "Read: Veblen, The Theory of the Leisure Class (1899), chapter 4",
    body: "The chapter “Conspicuous Consumption” is surprisingly witty and modern. Read a few pages and mark three sentences you could still apply today.",
    prompt: "Write 150 words applying Veblen to one modern phenomenon — a brand, an app or a habit."
  }
};

TAW.lessons[52] = {
  day: 52, title: "Warmth and competence", kicker: "Psychology · Charisma",
  cats: ["psychology", "communication"], skills: ["thinking", "conversation", "articulation"], difficulty: "Intermediate", minutes: 30,
  why: "Research suggests that we judge people — almost instantly — on two dimensions: are they warm, and are they competent? Charismatic people usually project both. Knowing this explains why some brilliant people aren’t trusted, and some likeable people aren’t taken seriously.",
  learn: {
    body: [
      "Susan Fiske and colleagues (2002) proposed the <strong>Stereotype Content Model</strong>: we perceive people and groups on two axes. <strong>Warmth</strong> asks: are your intentions towards me good? <strong>Competence</strong> asks: can you act on them? Later work suggested that we judge warmth first — and that it matters most for whether we trust someone.",
      "The combinations predict reactions. Warm and competent: admiration. Warm but not competent: sympathy, even pity. Competent but not warm: respect mixed with envy or suspicion. Neither: contempt. Many senior people, eager to prove their competence, forget that warmth is what opens the door.",
      "Research on gender suggests that women leaders often face a <strong>double bind</strong>: competent women may be seen as less warm, and warm women as less competent. The details of these studies are debated, but many women recognise the pattern — and the answer is not to choose one, but to show both deliberately.",
      "Warmth is signalled through attention, questions, remembering details and generous credit. Competence is signalled through clarity, preparation, calm under pressure and specific results. The most powerful phrases do both: “I’ve gone through the numbers carefully — and I want to make sure this works for your team too.”"
    ],
    phrases: [
      { en: "What makes her so engaging is…", tone: "Admiring", note: "Describes charisma precisely." },
      { en: "She’s both warm and incredibly sharp.", tone: "Balanced", note: "Names both dimensions." },
      { en: "I want to make sure this works for you too.", tone: "Warm", note: "Signals good intentions in a negotiation or proposal." },
      { en: "Here’s what the data shows.", tone: "Competent", note: "Signals command of the facts." },
      { en: "He’s brilliant, but people don’t feel he’s on their side.", tone: "Insightful", note: "Diagnoses competence without warmth." }
    ],
    tip: "Warmth opens the door; competence keeps it open."
  },
  vocab: [
    V("warmth", "wawmth", "noun", "Friendliness, kindness and genuine interest in others.", "In psychology, “warmth” also covers trustworthiness — good intentions.", ["friendliness", "kindness", "approachability"], "“Friendliness” can be surface-level. “Kindness” is about actions. “Approachability” means people feel they can talk to you. “Warmth” is a felt quality of care.", "Her warmth makes people tell her things they wouldn’t tell anyone else.", "— Why do clients love him?\n— His warmth. He remembers everything about their families.", "Describe someone whose warmth you admire."),
    V("competence", "KOM-pi-tuns", "noun", "The ability to do something well, effectively and reliably.", "Careful with the adjective: “competent” can sound merely adequate, while “highly competent” is strong praise.", ["capability", "skill", "expertise"], "A “skill” is a specific ability. “Expertise” is deep, specialised knowledge. “Capability” is what someone or something can do. “Competence” is reliable ability to do the job.", "Nobody doubts her competence — the question is whether she can lead people.", "— Is he good?\n— Highly competent. Not inspiring, but you can count on him.", "Describe a moment when someone’s competence reassured you."),
    V("composed", "kum-POHZD", "adjective", "Calm and in control of your feelings, especially in a difficult situation.", "A strong compliment for leaders: “She remained composed under pressure.”", ["calm", "poised", "collected"], "“Calm” is general. “Poised” suggests elegance and balance. “Collected” often appears in “cool, calm and collected”. “Composed” suggests self-control during or after stress.", "Even when the client shouted, she stayed composed.", "— How did the presentation go?\n— A tough Q&A, but she was very composed.", "Describe a situation in which you stayed composed."),
    V("engaging", "in-GAY-jing", "adjective", "Charming and interesting; attracting and holding attention.", "Used for people, speakers, writing and content: an engaging speaker.", ["captivating", "charming", "compelling"], "“Charming” is pleasant and attractive. “Captivating” is stronger — it holds you completely. “Compelling” is convincing. “Engaging” draws you in and keeps your interest.", "She’s an engaging speaker — she makes data sound like a story.", "— Was the talk good?\n— Very engaging. Nobody looked at their phone.", "Describe the most engaging teacher or speaker you know."),
    V("approachable", "uh-PROH-chuh-bul", "adjective", "Friendly and easy to talk to.", "Important for leaders: an approachable manager hears about problems early.", ["accessible", "friendly", "easy-going"], "“Accessible” means available and easy to reach. “Friendly” is general. “Easy-going” is relaxed. “Approachable” means people feel comfortable coming to you.", "Despite being the CEO, he’s remarkably approachable.", "— Can I ask her directly?\n— Of course — she’s very approachable.", "What makes a senior person approachable? Write two sentences.")
  ],
  culture: "warmth-competence",
  cultureNote: "The research gives a precise name to something you can feel in any room: we decide whether to trust someone before we decide how good they are. Lead with warmth — then prove competence.",
  sayBetter: {
    basic: "She is nice and she is good at her job.",
    levels: [
      ["Level 1", "She’s friendly and very good at her job.", "Both dimensions — but generic."],
      ["Level 2", "She’s warm and highly competent.", "Precise words."],
      ["Level 3", "She’s that rare combination: warm and sharp. People trust her — and they know she’ll deliver.", "Explains why the combination matters."],
      ["Level 4", "What makes her so effective is that she’s both warm and formidably competent. She remembers everyone’s name and asks about their weekend — and then runs the tightest meeting I’ve ever attended. People don’t just respect her; they want to work for her.", "Specific evidence of both dimensions — and the consequence."]
    ],
    prompt: "Describe a leader you admire at Level 4, with evidence of both warmth and competence."
  },
  exercise: {
    title: "Add the missing dimension",
    instructions: "Each sentence signals only warmth or only competence. Rewrite it to signal both.",
    items: [
      { q: "“The numbers are clear: we need to cut the project.” (competence only)", a: "I know how much the team has put into this, so I don’t say it lightly — but the numbers are clear: we need to pause the project." },
      { q: "“Don’t worry, I’m sure it will be fine!” (warmth only)", a: "I can see you’re worried — that’s fair. I’ve checked the plan, the main risk is covered, and here’s what we’ll do if it isn’t." },
      { q: "“Send me the analysis by Friday.” (competence only)", a: "Could you send me the analysis by Friday? I want to give you proper feedback before the board sees it." },
      { q: "“I love your idea, it’s great!” (warmth only)", a: "I really like this idea — especially the pricing angle. If we test it in one market first, I think it could cut returns noticeably." }
    ]
  },
  think: {
    q: "Is it harder for women to be seen as both warm and competent?",
    angles: ["Have you felt this double bind yourself?", "Which women leaders manage both — and how?", "Does the expectation differ across cultures?"]
  },
  express: { prompt: "Write 150 words about someone you find charismatic. What exactly do they do that signals warmth — and competence?" },
  speak: {
    prompt: "Describe someone you find charismatic — what exactly do they do?", seconds: 90,
    structure: ["Who they are", "Evidence of warmth: what they do", "Evidence of competence: what they do", "How people react to them", "What you’d like to borrow"]
  },
  recall: [
    { q: "Day 51: What is “conspicuous consumption”?", a: "Spending on visible luxuries to display wealth and status (Veblen, 1899)." },
    { q: "Day 32: What does “validate” mean in conversation?", a: "To show that someone’s feelings are reasonable and worth taking seriously." },
    { q: "Day 18: What does “ambivalent” mean?", a: "Having mixed or contradictory feelings about something." }
  ],
  reflect: "In your last important meeting, did people experience your warmth, your competence — or both?",
  deep: {
    title: "Read: Fiske, Cuddy and Glick, “Universal dimensions of social cognition: warmth and competence” (2007)",
    body: "A short, readable research article (search for the title). It summarises why warmth and competence appear across cultures — and why warmth seems to be judged first.",
    prompt: "Write 150 words: which dimension do people notice first in you — and which would you like them to notice more?"
  }
};

TAW.lessons[53] = {
  day: 53, title: "Networking without awkwardness", kicker: "Conversation · Networking",
  cats: ["conversation", "psychology"], skills: ["conversation", "articulation"], difficulty: "Intermediate", minutes: 30,
  why: "Networking is simply conversation with a future. For many people it feels transactional or awkward — but the best networkers aren’t collecting contacts. They are curious, generous and good at the follow-up.",
  learn: {
    body: [
      "Reframe the goal. You are not there to sell yourself; you are there to find <strong>common ground</strong> and to be useful. The most memorable people at an event ask good questions, listen well and offer something — an article, an introduction, an idea.",
      "A simple arc: <strong>open</strong> lightly (“What brings you here tonight?”), <strong>explore</strong> (follow the threads — Day 33), <strong>offer</strong> (“I know someone who solved exactly that — happy to <strong>introduce</strong> you”), <strong>exit</strong> gracefully (“I don’t want to monopolise you — shall we connect?”) and <strong>follow up</strong> within 48 hours, mentioning something specific.",
      "Benjamin Franklin noticed something counter-intuitive: asking a rival to lend him a rare book turned the rival into a friend. Psychologists later found that people tend to like those they have done a favour for. A small, specific request — “Could I ask your advice on something?” — can build a relationship faster than a big offer.",
      "The follow-up is where most networking dies. Send a short message: who you are, where you met, the thread you shared, and a light next step. “Lovely to meet you at the retail evening — I enjoyed our conversation about AI and store teams. Here’s the article I mentioned. Coffee next month?”"
    ],
    phrases: [
      { en: "What brings you here tonight?", tone: "Light", note: "The classic opener — open, not intrusive." },
      { en: "I’ve heard great things about…", tone: "Warm", note: "Shows interest — and a little preparation." },
      { en: "Happy to introduce you, if it’s useful.", tone: "Generous", note: "Offers value — the heart of good networking." },
      { en: "We should continue this conversation — coffee next month?", tone: "Forward-looking", note: "Turns a chat into a relationship." },
      { en: "Could I ask your advice on something?", tone: "Humble", note: "The Franklin effect: a small favour builds connection." }
    ],
    tip: "Be curious, be useful, follow up."
  },
  vocab: [
    V("reciprocal", "ri-SIP-ruh-kul", "adjective", "Given and received by both sides; mutual.", "Formal. Good relationships — and good networks — are reciprocal. Verb: reciprocate.", ["mutual", "two-way", "shared"], "“Mutual” is felt by both sides (mutual respect). “Two-way” is informal. “Shared” is held in common. “Reciprocal” emphasises exchange: you give and receive.", "The best professional relationships are reciprocal: both people help each other.", "— He’s always asking for favours.\n— And never reciprocates? That’s not a relationship.", "Describe a reciprocal relationship in your professional life."),
    V("follow up", "FOL-oh UP (verb) · FOL-oh-up (noun)", "phrasal verb / noun", "To contact someone again after a first meeting or message, to continue or check something.", "Verb: follow up on something. Noun: a follow-up (email, meeting, question).", ["get back to", "check in", "touch base"], "“Get back to” means reply later. “Check in” is informal, to see how things are. “Touch base” is informal corporate English. “Follow up” means continuing something already started.", "I’ll follow up with an email summarising what we agreed.", "— Have you heard from the investor?\n— Not yet — I’ll follow up on Monday.", "Write a one-line follow-up after meeting someone at an event."),
    V("common ground", "KOM-un GROWND", "noun", "Interests, opinions or experiences shared by two or more people.", "Essential in networking and negotiation: “find common ground”.", ["shared interests", "overlap", "agreement"], "“Shared interests” is literal. “Overlap” is neutral and analytical. “Agreement” is about opinions. “Common ground” is the space where people meet and can build something.", "We found common ground immediately — we’d both lived in Mexico City.", "— What did you talk about?\n— Running, mostly. It was our common ground.", "Describe how you found common ground with someone very different from you."),
    V("introduce", "in-truh-DYOOS", "verb", "To present one person to another; to bring in something new.", "In networking, an “intro” (informal) is gold: “Could you make an intro?” (Careful: for passwords, use “enter”, not “introduce”.)", ["present", "connect", "put in touch"], "“Present” is formal. “Connect” is general. “Put in touch” is very natural in networking. “Introduce” is the standard word for making people known to each other.", "Can I introduce you to Laura? She led our AI pilot.", "— Do you know anyone at that company?\n— Yes — happy to introduce you.", "Write an email sentence introducing two people who should meet."),
    V("touch base", "tuch BAYS", "phrase", "To make brief contact with someone, to share news or check progress.", "Informal corporate English; some people find it a cliché, but it is very common.", ["check in", "catch up", "get in touch"], "“Check in” is similar. “Catch up” suggests a longer chat about news. “Get in touch” means make contact. “Touch base” is brief and practical.", "Let’s touch base next week, once the numbers are in.", "— Shall we meet about it?\n— Let’s just touch base on Friday — fifteen minutes.", "Write a message suggesting you touch base with a contact.")
  ],
  culture: "franklin-effect",
  cultureNote: "Franklin’s trick works because it respects the other person: asking for advice tells them their knowledge matters. Just keep the favour small, specific and sincere.",
  sayBetter: {
    basic: "Hello, I am Nicole, I work in e-commerce, here is my card, call me.",
    levels: [
      ["Level 1", "Hi, I’m Nicole. I work in e-commerce.", "Polite, but all about you."],
      ["Level 2", "Hi, I’m Nicole — what brings you here tonight?", "An open question first."],
      ["Level 3", "Hi, I’m Nicole. I don’t know anyone here, so I thought I’d start with the person who looks least busy! What brings you here?", "Light, honest and curious."],
      ["Level 4", "It’s been really interesting hearing how you’re approaching AI in pharmacies — we’ve faced the same challenge with our store teams. I don’t want to monopolise you, but I’d love to continue this. Shall we connect, and I’ll send you the article I mentioned?", "Common ground, value offered, a graceful exit and a concrete follow-up."]
    ],
    prompt: "Write your own Level 4 closing line for a networking event."
  },
  exercise: {
    title: "The networking arc",
    instructions: "Write one line for each step of a conversation at an industry event.",
    items: [
      { q: "Open", a: "Hi — I’m Nicole. What brings you here tonight?" },
      { q: "Explore (pick up a thread)", a: "You mentioned you’re moving into marketplaces — what’s been the biggest surprise so far?" },
      { q: "Offer", a: "A colleague of mine led exactly that kind of launch last year — happy to introduce you, if it’s useful." },
      { q: "Follow up (the next day, by message)", a: "Lovely to meet you last night — I enjoyed our chat about marketplaces. Here’s Laura’s email; I’ve told her you might get in touch. Coffee next month?" }
    ]
  },
  think: {
    q: "Is networking manipulative — or just how humans cooperate?",
    angles: ["What makes networking feel fake?", "Who opened doors for you in your career — and why?", "What can you offer people, even early in a relationship?"]
  },
  express: { prompt: "Write a follow-up message (80–100 words) to someone you met at a professional event: where you met, the thread you shared, something useful, and a next step." },
  speak: {
    prompt: "Introduce yourself at a professional event, find common ground and suggest following up — in 60 seconds.", seconds: 60,
    structure: ["A light, open opener", "A question that finds common ground", "A brief, human version of what you do", "Something you can offer", "A graceful exit with a follow-up"]
  },
  recall: [
    { q: "Day 52: What are the two dimensions in Fiske’s model?", a: "Warmth (good intentions) and competence (ability)." },
    { q: "Day 31: Give an open question to start a conversation.", a: "“What drew you to…?”, “What brings you here?”, “How did you end up doing that?”" },
    { q: "Day 27: What does “break the ice” mean?", a: "To say or do something that helps people relax at the start of a conversation." }
  ],
  reflect: "Who could you follow up with this week — someone you met and never wrote to?",
  deep: {
    title: "Read: Benjamin Franklin, Autobiography — the borrowed book",
    body: "Franklin’s Autobiography is free online. Search for the passage about the rival legislator and the rare book — it’s only a few paragraphs long.",
    prompt: "Write 150 words: what small favour could you ask someone this month — and why might it strengthen the relationship?"
  }
};

TAW.lessons[54] = {
  day: 54, title: "Compliments and gratitude", kicker: "Conversation · Gratitude",
  cats: ["conversation", "philosophy"], skills: ["conversation", "english"], difficulty: "Foundation", minutes: 30,
  why: "Specific compliments and real gratitude are rare — and remembered for years. Many people give them vaguely (“Great job!”) or deflect them awkwardly (“Oh, it was nothing”). Learning to give and receive them well is a quiet superpower.",
  learn: {
    body: [
      "A memorable compliment is <strong>specific</strong>, <strong>sincere</strong> and often about <strong>effort or choices</strong> rather than talent: “The way you handled that angry client — calm, but you didn’t give in — was really impressive.” Compare: “You’re so talented.” The first tells the person exactly what to keep doing.",
      "Gratitude works the same way. Name what the person did and its effect: “I really <strong>appreciated</strong> the way you stayed late to help me with the board pack. It meant I could walk in calm.” In a well-known 2005 study, the psychologist Martin Seligman and colleagues found that a “gratitude visit” — writing and delivering a letter of thanks — produced one of the biggest short-term boosts in happiness of all the exercises they tested.",
      "Receiving a compliment is a skill too. Spanish speakers often deflect (“No, no, it was nothing”), which in English can sound as if you are rejecting a gift. The elegant response is simply: “Thank you — that’s very kind of you.” You can add credit: “Thank you — the team made it easy.”",
      "<strong>Ubuntu</strong>, the Southern African philosophy often summarised as “I am because we are”, sees people as made by their relationships. Gratitude is how we acknowledge that nobody is entirely self-made."
    ],
    phrases: [
      { en: "I really appreciated the way you…", tone: "Warm, specific", note: "Names exactly what someone did." },
      { en: "It meant a lot that…", tone: "Heartfelt", note: "Names the effect on you." },
      { en: "That’s very kind of you — thank you.", tone: "Gracious", note: "Receives a compliment without deflecting it." },
      { en: "I couldn’t have done it without…", tone: "Generous", note: "Shares the credit." },
      { en: "I don’t think I ever told you how much… meant to me.", tone: "Moving", note: "Opens a long-overdue thank-you." }
    ],
    tip: "Be specific. Then just say thank you."
  },
  vocab: [
    V("thoughtful", "THAWT-ful", "adjective", "Showing consideration for other people’s needs; also, showing careful thought.", "Two senses: kind (a thoughtful gift) and reflective (a thoughtful answer).", ["considerate", "kind", "reflective"], "“Considerate” is about not causing problems for others. “Kind” is general. “Reflective” is about thinking deeply. “Thoughtful” can mean both caring and careful.", "It was so thoughtful of you to remember my presentation day.", "— She sent flowers when my father was ill.\n— That’s really thoughtful.", "Describe a thoughtful thing someone did for you."),
    V("considerate", "kun-SID-uh-rut", "adjective", "Careful not to cause inconvenience or upset to others.", "Practical kindness: considerate colleagues mute their microphones, send agendas and respect your time.", ["thoughtful", "respectful", "mindful"], "“Thoughtful” is broader. “Respectful” is about showing respect. “Mindful” means aware. “Considerate” is everyday attention to others’ comfort.", "It was considerate of him to send the slides before the meeting.", "— Can I call you at 8 am?\n— Thanks for asking — that’s considerate. Nine would be better.", "Write about a considerate habit you value in colleagues."),
    V("gracious", "GRAY-shus", "adjective", "Kind, polite and generous, especially in a difficult situation or towards someone with less power.", "A high compliment: a gracious host, gracious in defeat.", ["courteous", "generous", "dignified"], "“Courteous” is about good manners. “Generous” is about giving. “Dignified” is about self-respect. “Gracious” combines warmth, politeness and generosity — often under pressure.", "She was gracious in defeat and congratulated the winning team first.", "— He lost the pitch, but he thanked everyone.\n— That’s gracious.", "Describe a gracious response you have witnessed."),
    V("appreciate", "uh-PREE-shee-ayt", "verb", "To be grateful for something; also, to recognise the value or seriousness of something.", "“I appreciate it” sounds warmer and more professional than a quick “thanks”. Also: “I appreciate that it’s difficult.”", ["value", "be grateful for", "recognise"], "“Value” means consider important. “Be grateful for” is emotional. “Recognise” means acknowledge. “Appreciate” covers both gratitude and understanding.", "I really appreciate you taking the time to explain it.", "— I stayed late to finish the report.\n— I really appreciate that. Thank you.", "Thank someone, using “I really appreciate…”."),
    V("heartfelt", "HART-felt", "adjective", "Deeply and sincerely felt.", "Common in formal and written gratitude: heartfelt thanks, a heartfelt apology.", ["sincere", "genuine", "earnest"], "“Sincere” means honest. “Genuine” means real. “Earnest” means serious and intense. “Heartfelt” suggests deep emotion behind the words.", "Please accept my heartfelt thanks for your support this year.", "— What did you write in the card?\n— A heartfelt thank-you. She really helped me.", "Write one line of heartfelt thanks to someone who helped you.")
  ],
  culture: "ubuntu",
  cultureNote: "Ubuntu reminds us that no success is individual. When you thank people specifically, you are not just being polite — you are telling the truth about how things get done.",
  sayBetter: {
    basic: "Thank you for your help, it was good.",
    levels: [
      ["Level 1", "Thank you so much for your help.", "Warmer, but general."],
      ["Level 2", "Thank you for helping me with the presentation — I really appreciated it.", "Specific about what."],
      ["Level 3", "I really appreciated the way you helped me restructure the presentation — it was so much clearer.", "Specific about how — and the result."],
      ["Level 4", "I don’t think I ever told you properly how much your help meant. That evening you spent helping me restructure the presentation, you didn’t just fix the slides — you showed me how to think about the board. I still use that structure every time.", "Specific, sincere and about lasting impact."]
    ],
    prompt: "Write a Level 4 thank-you to someone who helped your career."
  },
  exercise: {
    title: "Specific, sincere, about choices",
    instructions: "Make each vague compliment or thank-you specific — and write a gracious response to the last one.",
    items: [
      { q: "“Great job on the project!”", a: "The way you kept the project on track when the supplier pulled out — calm, with a plan B in 24 hours — was really impressive." },
      { q: "“Thanks for everything.”", a: "Thank you for covering my calls last week — it meant I could be with my mother at the hospital without worrying." },
      { q: "“You’re so smart.”", a: "I loved how you reframed the problem in the meeting — asking what customers actually do changed the whole discussion." },
      { q: "Someone says: “Your presentation was brilliant.” (respond graciously)", a: "Thank you — that’s really kind of you. The team did a lot of the heavy lifting on the data." }
    ]
  },
  think: {
    q: "Why do so many people find it hard to receive a compliment?",
    angles: ["How do people respond to compliments where you come from?", "Do you deflect — and why?", "Which compliment has stayed with you for years?"]
  },
  express: { prompt: "Write a gratitude letter (150–200 words) to someone who influenced you but whom you never properly thanked — specific, sincere and about the lasting impact." },
  speak: {
    prompt: "Thank someone who has influenced you — specifically, as if they were in front of you.", seconds: 90,
    structure: ["Who they are", "A specific moment or action", "What it meant at the time", "Its lasting impact on you", "A simple, heartfelt thank-you"]
  },
  recall: [
    { q: "Day 53: What is the Franklin effect?", a: "People tend to like those they have done a favour for — so asking for a small favour can build a relationship." },
    { q: "Day 40: What does “park” mean in a meeting?", a: "To postpone a topic, intending to return to it later." },
    { q: "Day 32: Why should you ask before advising?", a: "People usually want to feel understood first; advice offered too early can feel dismissive." }
  ],
  reflect: "Who deserves a specific thank-you from you this week?",
  deep: {
    title: "Do it: a gratitude visit",
    body: "Inspired by Martin Seligman’s research: write a letter to someone who changed your life and whom you never properly thanked. If you can, read it to them — in person or on a call.",
    prompt: "Write 150 words about how it felt to write the letter — and, if you did, to read it."
  }
};
})();
