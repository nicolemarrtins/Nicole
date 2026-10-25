/* Content for the mini-games, random events, the curriculum and the Cat Department.
   All lyrics-free: titles and short references only, plus original parody writing. */
window.TS = window.TS || {};
(function () {
  TS.HUMOR = [
    "This is not necessary.", "You could simply communicate directly.", "Unfortunately, you have chosen lore.",
    "Nobody asked for an Easter egg.", "You have turned a grocery trip into a cinematic universe.",
    "Your cat has better brand strategy than you.", "This could have been a normal Tuesday. It is now an era.",
    "Productivity rating: questionable.", "The app is concerned, but supportive.", "This could have been an email.",
    "Please hydrate between eras.", "We have notified absolutely no one."
  ];

  /* ── GAME 1 · SPOT THE EASTER EGG ── objects placed in % of a 4:5 post */
  TS.SCENES = [
    { id: "s1", level: 1, name: "slow morning", handle: "@not_an_announcement", bg: "linear-gradient(160deg,#F6E7D2,#E8C9A8)",
      caption: [["slow morning. no plans.", ""], [" (lie)", "“(lie)” in brackets. Nobody adds “(lie)” to a caption unless they want you to ask."]],
      objects: [
        { e: "☕", x: 18, y: 62, s: 3.2, clue: "" , decoy: "A coffee. Sometimes a coffee is just a coffee. (It isn’t, but today it is.)" },
        { t: "13:13", x: 70, y: 14, s: 1.3, clue: "The oven clock says 13:13. Obviously an announcement." },
        { e: "🧣", x: 64, y: 58, s: 3, hue: 0, clue: "A red scarf on the chair. Red scarves are, historically, never just scarves." },
        { e: "🪴", x: 82, y: 72, s: 2.6, decoy: "A plant. Sometimes a plant is a plant." },
        { e: "📓", x: 38, y: 78, s: 2.4, clue: "A notebook, open. Someone is writing something. Probably about you." }
      ] },
    { id: "s2", level: 1, name: "city lights", handle: "@definitely.just.a.photo", bg: "linear-gradient(180deg,#203A63,#5A86C5)",
      caption: [["new city, new ", ""], ["blue", "‘blue’ is the only colour word. Coded."], [" mood", ""]],
      objects: [
        { e: "🏙️", x: 50, y: 30, s: 5, decoy: "A skyline. Very nice. Not evidence." },
        { t: "1989", x: 22, y: 74, s: 1.2, box: true, clue: "The taxi number plate reads 1989. That is a birth year and an album title. Investigate." },
        { e: "🐈", x: 80, y: 66, s: 2.4, clue: "A cat on the windowsill, facing away. The cat knows." },
        { e: "🕶️", x: 55, y: 70, s: 2.2, decoy: "Sunglasses. At night. Suspicious, but not a clue. Just a choice." },
        { e: "✈️", x: 18, y: 16, s: 1.6, clue: "A plane in the sky: a journey, a move, a new era. Everything is a metaphor now." }
      ] },
    { id: "s3", level: 2, name: "cabin weekend", handle: "@quiet.era", bg: "linear-gradient(170deg,#C9C3B4,#7E8A7A)",
      caption: [["just ", ""], ["seven", "‘seven’ spelled out instead of written as 7. Writers notice."], [" days of quiet", ""]],
      objects: [
        { e: "🌲", x: 16, y: 30, s: 4, decoy: "A tree. Trees are allowed to just be trees." },
        { e: "🧶", x: 62, y: 62, s: 2.6, clue: "Yarn. Someone is knitting something. A cardigan, probably. Knitwear is a narrative device." },
        { t: "JUL 24", x: 74, y: 22, s: 1, box: true, clue: "A calendar page: 24 July. A famous surprise-release date in the fan calendar (2020)." },
        { e: "🕯️", x: 36, y: 70, s: 2, decoy: "A candle. Ambience, not evidence." },
        { e: "✉️", x: 44, y: 44, s: 1.6, clue: "An unopened letter. Unopened letters are unresolved lore." },
        { e: "🐈‍⬛", x: 86, y: 80, s: 1.6, clue: "A small black cat, half hidden. Two cats in three posts. Pattern." }
      ] },
    { id: "s4", level: 2, name: "new look", handle: "@reinvention.inc", bg: "linear-gradient(160deg,#1A1A1A,#3D3D3D)",
      caption: [["new era. ", ""], ["no comment", "‘no comment’ — the official language of a reputation era. Silence as a statement."], [".", ""]],
      objects: [
        { e: "🐍", x: 22, y: 64, s: 2.6, clue: "A snake bracelet. Reclaimed imagery. You have entered a darker era." },
        { e: "🖤", x: 74, y: 20, s: 1.6, clue: "A black heart in the corner. New palette, new era." },
        { e: "📱", x: 60, y: 62, s: 2.2, clue: "A phone, face down. Not taking calls. Connected to the caption: no comment." },
        { e: "🪞", x: 40, y: 36, s: 3, decoy: "A mirror. Mirror selfie. Normal behaviour. Mostly." },
        { e: "⛓️", x: 86, y: 72, s: 1.6, decoy: "A chain. Just fashion. We think." }
      ] },
    { id: "s5", level: 3, name: "can’t sleep", handle: "@3am.thoughts", bg: "linear-gradient(180deg,#1B1D3A,#4B3F72)",
      caption: [["Can’t sleep. ", ""], ["Thirteen", "Spelled out, capitalised, in the middle of a sentence. Absolutely deliberate."], [" thoughts, zero answers.", ""]],
      objects: [
        { e: "🌙", x: 78, y: 14, s: 2.4, clue: "A crescent moon. Midnight energy. Stories of sleepless nights." },
        { t: "00:00", x: 24, y: 20, s: 1.1, clue: "The clock reads exactly midnight. Midnight releases are a personality." },
        { e: "💜", x: 50, y: 70, s: 1.4, clue: "A lavender heart. Lavender, hazy, at night. Pattern detected." },
        { e: "🐑", x: 18, y: 72, s: 1.3, decoy: "Counting sheep. Standard insomnia, not lore." },
        { e: "🕯️", x: 66, y: 66, s: 1.4, decoy: "A candle. Atmosphere. Not everything is a clue. (Most things are.)" },
        { e: "🔑", x: 40, y: 46, s: 1, clue: "A tiny key on the bedside table. Keys open vaults. Vaults contain unreleased things." }
      ] },
    { id: "s6", level: 3, name: "brunch", handle: "@normal.saturday", bg: "linear-gradient(160deg,#F8D9E3,#E8B4C8)",
      caption: [["Brunch with ", ""], ["Five", "‘Five’ with a capital F. Track five, perhaps? The emotional one?"], [" friends ", ""], ["Owning", "Capital O mid-sentence. Read the capitals: F, O… keep going."], [" Up ", "Capital U."], ["Real", "Capital R. F-O-U-R. FOUR. Something is coming in four days. Or four weeks. Or nothing. Probably something."], [" feelings", ""]],
      objects: [
        { e: "🥂", x: 30, y: 58, s: 2.4, decoy: "Glasses. Brunch. A normal thing that normal people do." },
        { e: "🌸", x: 74, y: 22, s: 2, clue: "Pink flowers: a pastel palette suggests a softer, romantic era." },
        { e: "🦋", x: 18, y: 18, s: 1.4, clue: "A butterfly: transformation. Metamorphosis. You know what this means." },
        { t: "4", x: 82, y: 76, s: 1.2, box: true, clue: "Table number four. Matches the hidden capital-letter word. Statistically meaningless. Spiritually confirmed." },
        { e: "🥞", x: 52, y: 70, s: 2.2, decoy: "Pancakes. Not a clue. Delicious, though." }
      ] },
    { id: "s7", level: 4, name: "train station", handle: "@platform.13", bg: "linear-gradient(170deg,#8A99A6,#C7CFD6)",
      caption: [["leaving on the ", ""], ["8:13", "The 8:13. Another 13 hiding in a time."], [" with a ", ""], ["red", "Red again."], [" suitcase and no regrets", ""], [" (several regrets)", "Contradicting yourself in brackets is a well-documented Easter-egg technique."]],
      objects: [
        { e: "🧳", x: 30, y: 64, s: 2.6, clue: "A suitcase: departure, a new chapter, an ending." },
        { e: "🚆", x: 62, y: 34, s: 3.4, decoy: "A train. It is a train station. This one is fine." },
        { t: "PLATFORM 13", x: 74, y: 12, s: 0.8, box: true, clue: "Platform 13. Of course it is." },
        { e: "📸", x: 16, y: 26, s: 1.2, clue: "A small Polaroid camera: memories, documented. Someone is collecting evidence." },
        { e: "🎟️", x: 84, y: 82, s: 1.1, clue: "A ticket stub, half visible. A destination you can’t quite read. Unresolved lore." },
        { e: "☁️", x: 44, y: 14, s: 1.6, decoy: "A cloud. Weather is mood, but this one is just weather." }
      ] },
    { id: "s8", level: 5, name: "the impossible post", handle: "@everything.is.a.clue", bg: "linear-gradient(150deg,#2B1B3D,#7A2E4E 60%,#D9A441)",
      caption: [["Something’s coming. ", ""], ["Or not.", "‘Or not.’ The fake-out. A classic false lead."], [" ", ""], ["13 ", "13. You expected it. You still clicked it. Good."], ["days", ""]],
      objects: [
        { e: "♟️", x: 14, y: 70, s: 1.4, clue: "A chess piece: strategy. Someone is playing a long game." },
        { e: "🗝️", x: 84, y: 20, s: 0.9, clue: "A tiny key, top right. Vault energy." },
        { e: "🐈", x: 50, y: 84, s: 0.9, clue: "A very small cat, bottom centre. The cat is always there." },
        { e: "💄", x: 34, y: 30, s: 1.1, clue: "Red lipstick. The Main Character has entered." },
        { e: "🌙", x: 66, y: 50, s: 0.9, clue: "A crescent moon reflected in the glass. Midnight energy." },
        { t: "XIII", x: 22, y: 14, s: 0.7, clue: "Roman numerals: XIII. Thirteen, in a toga." },
        { e: "✨", x: 76, y: 76, s: 1, decoy: "Glitter. Glitter is a mindset, not a clue." },
        { e: "🕰️", x: 48, y: 22, s: 1.3, decoy: "A clock with no visible time. Withholding. But not a clue." }
      ] }
  ];

  /* ── Era II pattern drills: A coincidence / B interesting / C lore ── */
  TS.PATTERNS = [
    "You saw a yellow car at 13:13.", "Your friend wore green two days in a row.", "The song on the radio had the same name as your street.",
    "Your receipt total was €13.13.", "A stranger on the train was reading the book you just finished.", "Three people said ‘interesting’ to you today.",
    "Your phone battery hit 13% as you reached floor 13.", "You found a red button on the pavement.", "The barista spelled your name with an extra letter: ‘T’.",
    "Your neighbour’s cat sat on your doorstep and stared.", "Your horoscope mentioned ‘a new era’.", "A clock in the office stopped at 12:00.",
    "Someone left exactly one sugar packet on your desk.", "The lift skipped a floor.", "Your ex’s name appeared in a crossword."
  ];

  /* ── GAME 3 · NAME THAT ERA (playful aesthetic labels, not diagnoses) ── */
  TS.ERA_CODES = [
    { id: "fearless", label: "Fearless-coded", emoji: "✨", color: "#E9C46A", desc: "Golden, wide-eyed, sparkly. Fairy-tale optimism. A high school hallway with dramatic lighting." },
    { id: "speaknow", label: "Speak Now-coded", emoji: "💜", color: "#8E6BBF", desc: "Purple, theatrical, ball gowns. Says the thing out loud. Self-written and proud of it." },
    { id: "red", label: "Red-coded", emoji: "❤️", color: "#B3122E", desc: "Autumn leaves, red lips, scarves, long drives. Every feeling at full volume." },
    { id: "1989", label: "1989-coded", emoji: "💙", color: "#7FB3E0", desc: "Bright city, Polaroids, cropped tops, seagulls. Big pop, bigger confidence." },
    { id: "rep", label: "Reputation-coded", emoji: "🖤", color: "#2B2B2B", desc: "Black, silver, snakes, newsprint. Dramatic silhouette. The old you is unavailable." },
    { id: "lover", label: "Lover-coded", emoji: "🌸", color: "#F4A6C1", desc: "Pastels, butterflies, glitter hearts, daylight. Romantic delusion, embraced." },
    { id: "folklore", label: "Folklore-coded", emoji: "🍂", color: "#A7A49B", desc: "Knitwear, fog, woods, muted greys, literary atmosphere. Storytelling in the third person." },
    { id: "evermore", label: "Evermore-coded", emoji: "🌲", color: "#9A6A44", desc: "Plaid, rust, winter woods, short stories, a slightly darker cabin." },
    { id: "midnights", label: "Midnights-coded", emoji: "🌙", color: "#3B3F7A", desc: "Navy, lavender, 3am, sequins, insomnia, self-reflection with a disco ball." },
    { id: "ttpd", label: "Poets-coded", emoji: "🤍", color: "#C9C4BC", desc: "Monochrome, typewriters, notebooks, ink-stained confessions." }
  ];
  TS.NAME_ERA = [
    { d: "A grey cardigan, a cabin, fog over a lake, an unopened letter.", a: "folklore" },
    { d: "Sequins at 3am, lavender lighting, a disco ball in a dark bedroom.", a: "midnights" },
    { d: "A red lipstick, falling leaves, a scarf, a long drive in a borrowed car.", a: "red" },
    { d: "Black leather, silver chains, a newspaper headline, a snake ring.", a: "rep" },
    { d: "Pastel pink, a butterfly hairclip, a heart drawn in glitter.", a: "lover" },
    { d: "A Polaroid of a city skyline, a crop top, seagulls, bright blue sky.", a: "1989" },
    { d: "A golden dress, a curly ponytail, a school dance, fairy lights.", a: "fearless" },
    { d: "A purple ball gown, a castle staircase, finally saying the thing.", a: "speaknow" },
    { d: "Plaid flannel, rust-coloured leaves, a frozen pond, a story about strangers.", a: "evermore" },
    { d: "A typewriter, black-and-white photos, a notebook full of crossed-out lines.", a: "ttpd" },
    { d: "Knitting needles, rain on a window, a short story in a library book.", a: "folklore" },
    { d: "A dark eyeliner wing, a crown on its side, a ‘no comment’ press release.", a: "rep" },
    { d: "A pink-and-blue sky, a rainbow, an outfit with hearts on it.", a: "lover" },
    { d: "A man’s jacket on your shoulders, autumn in New York, a coffee to go.", a: "red" },
    { d: "Clocks, constellations, a bath at midnight, a vanity mirror with bulbs.", a: "midnights" },
    { d: "New York, Polaroids pinned in a row, a confident walk in sneakers.", a: "1989" }
  ];

  /* ── GAME 5 · LYRIC OR NORMAL SENTENCE? (original sentences) ── */
  TS.LYRIC_OR_NORMAL = [
    { s: "Please remember to bring the receipts on Thursday.", lyric: false, why: "A clear instruction with no image or feeling. Pure admin." },
    { s: "You left the porch light on like a question.", lyric: true, why: "A simile turns an object into an emotion. Classic songwriter move." },
    { s: "The meeting has been moved to 3pm.", lyric: false, why: "Information, not imagery." },
    { s: "I still set two mugs out on Sundays.", lyric: true, why: "A specific habit implies a whole absent person without naming them. Subtext." },
    { s: "Your parcel will arrive between 9 and 5.", lyric: false, why: "Although ‘arriving between 9 and 5’ could be a lyric about a terrible relationship." },
    { s: "We were a borrowed car with the radio stuck.", lyric: true, why: "A metaphor: the relationship is a borrowed car. Temporary, not yours, stuck." },
    { s: "I went to the supermarket and bought some apples.", lyric: false, why: "Mundane — but add ‘the same ones you liked’ and it becomes a song." },
    { s: "The kettle sighed the way you used to.", lyric: true, why: "Personification plus a hidden memory. Devastating, for a kettle." },
    { s: "Can you send me the file again?", lyric: false, why: "Neutral request. Unless it’s the third time. Then it’s a bridge." },
    { s: "I learned your street names by heart and then forgot mine.", lyric: true, why: "Contrast and loss in one line. Strong rhythm." },
    { s: "The weather will be cloudy with light rain.", lyric: false, why: "A forecast. A mood, but not yet a feeling." },
    { s: "Every green light felt like a dare.", lyric: true, why: "An everyday object reframed as a challenge. Tension." },
    { s: "I think the printer is out of toner.", lyric: false, why: "Office tragedy, not artistic tragedy." },
    { s: "We split the bill and that was the last thing we shared.", lyric: true, why: "The everyday becomes final. Double meaning of ‘split’ and ‘shared’." },
    { s: "My phone was at thirteen percent and so was my patience.", lyric: true, why: "Parallel structure + a 13. The app approves." },
    { s: "The library closes at six on Saturdays.", lyric: false, why: "Useful. Not lyrical. Unless someone waited outside." },
    { s: "You wore the city like a coat you’d outgrown.", lyric: true, why: "Simile linking place, clothing and change." },
    { s: "I’ll be about ten minutes late, sorry.", lyric: false, why: "Considerate. Not poetic. Thank you for texting, though." },
    { s: "Salt on the rim of a summer that wasn’t ours.", lyric: true, why: "Sensory detail + ownership + time. Very chorus." },
    { s: "The train is delayed due to signalling problems.", lyric: false, why: "Although ‘signalling problems’ is basically every situationship." }
  ];

  /* ── TURN IT INTO A LYRIC ── ordinary sentences + an original example rewrite */
  TS.LYRIC_PROMPTS = [
    { s: "I saw him at the supermarket.", ex: "Aisle seven, fluorescent and unfair, you were holding the oranges like nothing ever happened." },
    { s: "It rained all day.", ex: "The sky kept apologising all afternoon, and I kept not accepting." },
    { s: "I moved to a new flat.", ex: "I unpacked every box but the one with your handwriting on it." },
    { s: "My friend forgot my birthday.", ex: "Thirteen hours of a quiet phone, and I learned the shape of every silence." },
    { s: "I missed the last bus.", ex: "Tail lights like two red full stops at the end of my night." },
    { s: "I found an old photo.", ex: "A Polaroid in a coat pocket, the colours giving up before we did." },
    { s: "I didn’t get the job.", ex: "I ironed my best shirt for a door that was already closing." },
    { s: "We had dinner and talked.", ex: "We talked until the candles gave up and the waiter started mopping around our feet." },
    { s: "I cleaned my room.", ex: "I folded the whole summer into drawers and still found sand in the corners." },
    { s: "My coffee got cold.", ex: "I let the coffee go cold waiting for a text that took the long way round." },
    { s: "I walked home alone.", ex: "Streetlights counted me home like I was something worth keeping." },
    { s: "The holidays are over.", ex: "The tinsel came down, but the quiet stayed up all January." }
  ];

  /* ── TRACKLIST GAME ── answer index 2 is (almost) always the dramatic one */
  TS.TRACKLIST = [
    { s: "Your ex liked your Instagram story.", o: ["“I Am Completely Fine”", "“This Is Definitely Fine”", "“I Have Written 4,000 Words About This”", "“The Last Time I Will Ever Think About This”"], a: 2, r: "Obviously C. You have written 4,000 words. Several of them are ‘why’." },
    { s: "The barista remembered your order.", o: ["“Regular Customer”", "“Coffee (Morning Version)”", "“Someone Finally Noticed Me (Acoustic)”", "“Receipt”"], a: 2, r: "C. Being remembered is a love song. It’s also a loyalty programme." },
    { s: "You found your old diary from age 13.", o: ["“Archive”", "“Cringe”", "“Thirteen (From the Vault)”", "“Recycling Day”"], a: 2, r: "C. Age 13 + vault = a narrative event of international significance." },
    { s: "Your friend cancelled plans by text at 6:58pm.", o: ["“No Worries”", "“Rain Check”", "“6:58 (Ten Minute Version)”", "“Netflix”"], a: 2, r: "C. The timestamp is the title. The ten minutes are justified." },
    { s: "You walked past a café you used to go to with someone.", o: ["“Café”", "“Walking”", "“Same Table, Different Weather”", "“Errands”"], a: 2, r: "C. A specific place + a change = a whole song. Weather optional, metaphor mandatory." },
    { s: "Your plant finally grew a new leaf.", o: ["“Botany”", "“Watering Schedule”", "“Proof I Can Keep Something Alive”", "“Green”"], a: 2, r: "C. Personal growth, literally. Track 1 of a hopeful album." },
    { s: "Someone you used to know is getting married.", o: ["“Congratulations (Sincerely)”", "“Wedding Gift Ideas”", "“Speak Now or Whatever”", "“RSVP”"], a: 2, r: "C. Or A, if you’ve grown. Both are valid. C is funnier." },
    { s: "You were the last one to leave the party.", o: ["“Goodnight”", "“Coat Check”", "“The Lights Came On and I Was Still There”", "“Taxi”"], a: 2, r: "C. The moment the lights come on is pure bridge material." },
    { s: "You won an argument in the shower, three days later.", o: ["“Shower Thoughts”", "“Too Late”", "“Everything I Should Have Said (Bonus Track)”", "“Hot Water”"], a: 2, r: "C. Every album needs a bonus track of perfect comebacks delivered to nobody." },
    { s: "Your mum sent a voice note that was mostly background noise.", o: ["“Voice Note”", "“Hello?”", "“Seven Minutes of a Kitchen I Miss”", "“Static”"], a: 2, r: "C. Background noise of home. You will cry at this in a supermarket." },
    { s: "You got a parking ticket outside a place you didn’t even want to go.", o: ["“Fine”", "“Parking”", "“The Price of Showing Up for You”", "“Appeal”"], a: 2, r: "C. Symbolism costs €40." },
    { s: "The cat ignored you all day, then sat on your laptop.", o: ["“Cat”", "“Keyboard”", "“She Only Wants Me When I’m Working (Cat’s Version)”", "“Fur”"], a: 2, r: "C. The cat has been credited as a co-writer." }
  ];

  /* ── GAME 8 · EMOTIONAL DAMAGE ── official ratings are a joke; tips are real */
  TS.DAMAGE_LEVELS = [
    { max: 10, label: "“I’m fine.”" }, { max: 30, label: "“Interesting.”" }, { max: 50, label: "“I’ll journal about it.”" },
    { max: 70, label: "“This is becoming a song.”" }, { max: 90, label: "“This is becoming an album.”" }, { max: 100, label: "“This is now a ten-minute version.”" }
  ];
  TS.DAMAGE = [
    { s: "Someone replied “k”.", r: 44, n: "Officially: journal about it. Realistically: they were driving." },
    { s: "Your friend posted a group photo you weren’t invited to.", r: 63, n: "Song-worthy. Also worth a kind, direct message: “Looks fun! Count me in next time?”" },
    { s: "You waved at someone who was waving at the person behind you.", r: 27, n: "Interesting. Mostly funny. Everyone has done it." },
    { s: "Your favourite café changed its menu.", r: 52, n: "A song about change disguised as a song about croissants." },
    { s: "Someone you like called you “mate”.", r: 71, n: "Album territory. One word, many interpretations. Ask yourself what you actually know." },
    { s: "You forgot your umbrella and it rained.", r: 18, n: "Interesting. Unless the umbrella was red. Then it’s lore." },
    { s: "You heard “your” song in a shop, alone.", r: 82, n: "Album. Possibly a bridge. Breathe, buy the bread, go home." },
    { s: "A stranger complimented your shoes.", r: 8, n: "I’m fine. Better than fine. Write it down anyway." },
    { s: "The group chat went silent after your message.", r: 58, n: "Becoming a song. (They are all at work. Nobody hates you.)" },
    { s: "You found a hair tie that isn’t yours in your car.", r: 93, n: "Ten-minute version. Or your sister borrowed the car. Ask before you write the album." }
  ];

  /* ── WHAT ERA ARE YOU IN? (playful aesthetic categories, not a diagnosis) ── */
  TS.QUIZ = [
    { q: "Pick a Saturday.", o: [["A cabin, rain, a long book", "folklore"], ["Brunch, city walk, photo booth", "1989"], ["Up until 3am rearranging my life", "midnights"], ["A party I leave early in a great coat", "rep"]] },
    { q: "Choose a colour you’d wear for a week.", o: [["Red", "red"], ["Lavender", "midnights"], ["Pastel pink", "lover"], ["Gold", "fearless"]] },
    { q: "Your texting style is…", o: [["Long paragraphs, no regrets", "ttpd"], ["Short, mysterious, one emoji", "rep"], ["Voice notes with sound effects", "lover"], ["Perfect punctuation, planned in advance", "speaknow"]] },
    { q: "A song about your week would be called…", o: [["“The Quiet Part”", "folklore"], ["“Main Character Energy”", "1989"], ["“I Said It Out Loud”", "speaknow"], ["“Autumn, Again”", "red"]] },
    { q: "Pick an object.", o: [["A cardigan", "folklore"], ["A disco ball", "midnights"], ["A typewriter", "ttpd"], ["A snake ring", "rep"]] },
    { q: "How do you handle drama?", o: [["Write a ten-minute version", "red"], ["Reinvent myself completely", "rep"], ["Forgive, with glitter", "lover"], ["Turn it into a short story about strangers", "evermore"]] },
    { q: "Your dream setting:", o: [["A high-school dance in a gold dress", "fearless"], ["A castle with a dramatic staircase", "speaknow"], ["A frozen lake in plaid", "evermore"], ["A city rooftop at golden hour", "1989"]] },
    { q: "What would your friends say?", o: [["“She’s been in her feelings since Tuesday.”", "red"], ["“She has a plan for everything.”", "midnights"], ["“She makes everything romantic.”", "lover"], ["“She writes everything down.”", "ttpd"]] }
  ];

  /* ── FRIENDSHIP BRACELET FACTORY ── a fan tradition, not something Taylor invented */
  TS.BRACELET_WORDS = [
    "I SURVIVED THE BRIDGE", "13", "MAIN CHARACTER", "ALL TOO MUCH", "CAT LORE", "PROBABLY AN EASTER EGG", "NOT A COINCIDENCE",
    "TEN MINUTE VERSION", "RED UMBRELLA", "IM FINE", "MASTERMIND", "THE CAT KNOWS", "LORE", "ERAS", "KARMA", "TRACK 5",
    "LOVER", "FOLKLORE", "MIDNIGHTS", "1989", "RED", "FEARLESS", "SPEAK NOW", "REP", "EVERMORE", "TTPD", "DELULU", "VAULT",
    "NOTHING IS RANDOM", "CARDIGAN", "PLATFORM 13", "BRIDGE ENJOYER", "STRATEGIC", "ITS AN ERA", "SPARKLE", "ALWAYS 13"
  ];
  TS.BRACELET_PALETTES = {
    lover: { name: "Lover pastels", beads: ["#F7B8D2", "#BFE3F7", "#FFF1B8", "#D9C7F5"], letter: "#FFFFFF", ink: "#5B3B5E" },
    rep: { name: "Reputation", beads: ["#1C1C1C", "#5B5B5B", "#C0C0C0"], letter: "#FFFFFF", ink: "#111111" },
    red: { name: "Red", beads: ["#B3122E", "#E4B26A", "#3B1A1A"], letter: "#FFFFFF", ink: "#3B1A1A" },
    n1989: { name: "1989 blue", beads: ["#7FB3E0", "#E8F3FB", "#2F5D8A"], letter: "#FFFFFF", ink: "#1E3B57" },
    folklore: { name: "Folklore", beads: ["#C9C4BA", "#8F8A80", "#EDE9E1"], letter: "#FFFFFF", ink: "#4A463F" },
    midnights: { name: "Midnights", beads: ["#2C2F66", "#A99BE0", "#5B5FA8"], letter: "#FFFFFF", ink: "#1C1E45" },
    rainbow: { name: "Every era", beads: ["#E9C46A", "#8E6BBF", "#B3122E", "#7FB3E0", "#2B2B2B", "#F4A6C1", "#A7A49B", "#3B3F7A"], letter: "#FFFFFF", ink: "#2B2B2B" }
  };

  /* ── OUTFIT ERA GENERATOR ── inspired-by palettes; build from what you already own */
  TS.OUTFITS = [
    { id: "red", name: "Red Era", items: ["a red accent (lip, scarf or bag)", "a classic silhouette", "polished hair", "confident posture"], vibe: "Autumn in a city. You have a story and you are going to tell it." },
    { id: "1989", name: "1989-coded", items: ["bright colours", "city energy", "playful styling", "a top that means business"], vibe: "Walking fast through a city like you own the skyline." },
    { id: "rep", name: "Reputation-coded", items: ["black", "a stronger silhouette", "one metallic accent", "dramatic energy"], vibe: "No comment. Excellent boots." },
    { id: "folklore", name: "Folklore-coded", items: ["knitwear", "muted colours", "something soft and oversized", "literary atmosphere"], vibe: "You might write a short story today. In a cabin. Imaginary cabin is fine." },
    { id: "lover", name: "Lover-coded", items: ["pastels", "one playful print (hearts, butterflies)", "something that sparkles", "a romantic attitude"], vibe: "Daylight, delusion and a pink coffee." },
    { id: "midnights", name: "Midnights-coded", items: ["navy or lavender", "a hint of sequin", "a vintage touch", "3am confidence"], vibe: "You are awake and you have thoughts." },
    { id: "speaknow", name: "Speak Now-coded", items: ["purple", "a full skirt or flowy shape", "a statement piece", "a sentence you will finally say"], vibe: "Theatrical and brave." },
    { id: "fearless", name: "Fearless-coded", items: ["gold", "something shimmery", "curls or a ponytail", "sincere optimism"], vibe: "A school dance in your head, fairy lights included." }
  ];
  TS.OUTFIT_TWISTS = ["using only things you already own", "with one item you haven’t worn in a year", "with a hidden 13 somewhere", "with one colour borrowed from yesterday", "with a detail only you will notice", "styled for walking into a room while the bridge plays"];

  /* ── RANDOM EVENTS ── */
  TS.EVENTS = [
    { h: "🚨 BREAKING NEWS", t: "You have received an oddly specific notification. It contains the number 13. What will you do?",
      o: ["Ignore it.", "Investigate.", "Build an entire conspiracy board."], a: 2,
      r: ["You ignored it. Growth. Concerning growth.", "You investigated. Sensible. Slightly disappointing.", "Correct. The board has been notified. (It’s in the menu.)"] },
    { h: "📣 INCIDENT REPORT", t: "A friend says: “I like your outfit.” What does this mean?",
      o: ["They like your outfit.", "Nothing.", "There is clearly a hidden message.", "Ask the cats."], a: 0,
      r: ["Correct, actually. Say thank you. Accept nice things.", "It meant something nice. Try again.", "There is no hidden message. They like your outfit. Please accept it.", "The cats say: they like your outfit. The cats are rarely this generous."] },
    { h: "🕰️ TEMPORAL ANOMALY", t: "You looked at the clock. It said 12:13. Close, but not 13:13.",
      o: ["Move on.", "Wait one hour.", "Declare it a ‘near-miss’ and log it."], a: 2,
      r: ["Moving on is healthy. We don’t do that here.", "Patience. Very Mastermind.", "Logged. Near-misses are foreshadowing."] },
    { h: "📮 MYSTERIOUS ENVELOPE", t: "A letter arrives addressed to the previous tenant.",
      o: ["Return to sender.", "Leave it on the side.", "Write the previous tenant’s entire life story."], a: 2,
      r: ["Lawful and correct. Boring, but correct.", "It will sit there for three years. That’s also a story.", "Do not open it. Writing their imaginary life story, however, is encouraged."] },
    { h: "🐈 FELINE DEVELOPMENT", t: "A cat you don’t know stared at you for four seconds.",
      o: ["Stare back.", "Slow blink.", "Assume it has information about you."], a: 1,
      r: ["Bold. The cat has won.", "Correct. The slow blink is how cats say ‘I trust you’. Cat Energy +10.", "It does. But it will never tell you."] },
    { h: "🎧 SHUFFLE INCIDENT", t: "Your music app played the saddest song in your library at the happiest moment of your day.",
      o: ["Skip.", "Let it play.", "Interpret it as a message from the universe."], a: 2,
      r: ["Skipping is avoidance. Noted.", "Brave. Bittersweet. Very Era I.", "The universe has been notified that it sent a message."] },
    { h: "☂️ WEATHER EVENT", t: "It started raining exactly as you left the house.",
      o: ["Go back for an umbrella.", "Walk in it.", "Treat it as the opening scene of a music video."], a: 2,
      r: ["Practical. Your hair thanks you.", "Main Character behaviour, damp.", "Correct. Slow motion recommended. Avoid traffic."] },
    { h: "📸 PHOTOGRAPHIC EVIDENCE", t: "In a group photo, you’re the only one not looking at the camera.",
      o: ["Delete it.", "Ask for a retake.", "Caption it ‘the one who knew’."], a: 2,
      r: ["You deleted lore. Tragic.", "Reasonable. The retake will be worse.", "Iconic. You are now the mysterious one."] },
    { h: "🧾 RECEIPT ALERT", t: "Your receipt total ends in .13.",
      o: ["Pay.", "Pay and smile.", "Keep the receipt forever in a special envelope."], a: 2,
      r: ["Financial responsibility. Not lore.", "A knowing smile. Good.", "It has been added to your archive. You have an archive now."] },
    { h: "🔴 COLOUR WARNING", t: "Someone said “red” in conversation.",
      o: ["Continue normally.", "Stare into the distance for 7 seconds.", "Both, alternately."], a: 1,
      r: ["You continued normally. The app is disappointed but respects you.", "Correct. Seven seconds. Legally required since Day 41.", "Ambitious. Your colleague is worried."] }
  ];

  /* ── THE TAYLOR SWIFT SCHOOL · curriculum (fictional) ── */
  TS.CURRICULUM = [
    { code: "SWIFT 101", name: "Introduction to Taylorization", desc: "Noticing, writing it down, overreacting professionally.", need: { day: 7 } },
    { code: "SONG 201", name: "Turning Problems Into Revenue", desc: "Verse, chorus, bridge and the monetisation of feelings.", need: { day: 30 } },
    { code: "ENGLISH 301", name: "How to Say “I’m Fine” While Clearly Not Being Fine", desc: "Subtext, understatement and six shades of fine.", need: { day: 8 } },
    { code: "LORE 201", name: "Advanced Easter Eggs", desc: "Pattern recognition, symbolism and the capital-letter code.", need: { day: 60 } },
    { code: "RED 301", name: "Emotional Cinematography", desc: "Posture, entrances, colour and main-character presence.", need: { day: 90 } },
    { code: "BRACELET 101", name: "Beaded Diplomacy", desc: "Create ten bracelets. Trade them with your heart.", need: { bracelets: 10 } },
    { code: "CAT 101", name: "Feline Strategic Communications", desc: "Slow blinks, concise messages and Cat PR.", need: { day: 120 } },
    { code: "MASTERMIND 401", name: "Strategic Overthinking", desc: "Rollouts, teasers, false leads and planning lunch.", need: { day: 150 } },
    { code: "BUSINESS 401", name: "Turning a Creative Project Into an Empire", desc: "Branding, merch, pitches and the long game.", need: { plans: 3 } },
    { code: "ERAS 501", name: "Personal Reinvention", desc: "Design six eras of your life. Survive all of them.", need: { erasFilled: 6 } },
    { code: "PHILOSOPHY 101", name: "Why Did I Make This Into a Metaphor?", desc: "Turn ten people or objects into metaphors. Reflect.", need: { metaphors: 10 } },
    { code: "FINAL EXAM", name: "Everything Was an Easter Egg.", desc: "Complete Day 180. Answer: yes.", need: { day: 180 } }
  ];

  /* ── TAYLORIFICATION TREE ── */
  TS.TREE = [
    { t: "Notice things.", need: "Complete Day 1" },
    { t: "Write them down.", need: "Write 5 journal or creative entries" },
    { t: "Make them dramatic.", need: "Use the Taylorizer" },
    { t: "Turn them into metaphors.", need: "Turn 3 people or objects into metaphors" },
    { t: "Give them a colour.", need: "Log a colour in your lore" },
    { t: "Assign a number.", need: "Report a 13 incident" },
    { t: "Hide a clue.", need: "Find 5 Easter eggs" },
    { t: "Create an entire narrative universe.", need: "Collect 25 lore entries" },
    { t: "Release nothing without a rollout plan.", need: "Make a masterplan" },
    { t: "FINAL FORM.", need: "Complete Day 180" }
  ];

  /* ── CAT DEPARTMENT ── */
  TS.CAT = {
    names: ["Professor Whiskers", "Lady Marmalade", "Sir Reginald Biscuit", "Detective Mittens", "Duchess Fog", "Captain Thirteen", "Olive Bennett (no relation)", "Meredith (also no relation)", "Lord Cardigan", "Agent Purrkins", "Midnight", "Velvet Error", "Pumpkin Spice", "The Archivist"],
    traits: ["aloof", "dramatic", "secretly sentimental", "strategically affectionate", "judgemental", "mysterious", "chaotic neutral", "theatrical", "unbothered", "nosy", "elegant", "a menace", "wise beyond her nine lives", "allergic to Mondays"],
    jobs: ["Chief Vibes Officer", "Head of Staring", "VP of Knocking Things Off Tables", "Director of Sunbeam Acquisitions", "Senior Lore Archivist", "Easter Egg Quality Assurance", "Head of Keyboard Interruptions", "Creative Director (Unpaid)", "Chief Judgement Officer", "Executive Napping Consultant"],
    colors: ["lavender", "sage green", "midnight blue", "dusty pink", "crimson", "gold", "charcoal", "cream"],
    secrets: ["knows your passcode", "has a second family three doors down", "once met a famous person and refuses to discuss it", "can read, and has read your diary", "is planning a rebrand", "hid something behind the sofa in 2021", "understands the bridge better than you"],
    pasts: ["arrived in a shoebox during a thunderstorm", "was a theatre cat for two seasons", "lived above a bookshop and only ate poetry", "was briefly the mascot of a failed bakery", "travelled by train alone once, nobody knows where", "won a staring contest against a pigeon in 2019"],
    finance: [["Velvet cushion (imported, emotionally)", 230], ["Monthly sunbeam subscription", 49], ["Bespoke cardboard box, artisanal", 85], ["Personal stylist for one (1) bow tie", 120], ["Organic catnip, single-origin", 64], ["Therapy, after the vacuum incident", 150], ["Insurance against Mondays", 13], ["Window seat lease (premium view)", 310], ["Emergency treats fund", 99], ["Private feather-wand lessons", 75], ["Silk ribbon (for ignoring)", 18], ["Legal fees (the plant incident)", 400]],
    posts: ["Woke up. Chose violence. Chose a nap.", "Not me being the main character of this sunbeam.", "Thirteen naps today. Coincidence? No.", "Some of us were born unbothered.", "If you know, you know. (You don’t know.)", "New era. Same contempt.", "Knocked it off the table. No further questions.", "My human wrote another song about me. Embarrassing for her."],
    threats: [["Lavender", "Minimal. A neighbour waved."], ["Amber", "A photographer (a child with a phone) was spotted near the window."], ["Code Red", "A vacuum cleaner has entered the building."], ["Beige", "Nothing is happening. Suspiciously."], ["Midnight", "The cat has gone outside at night with no comment."]],
    protocols: ["Close all curtains dramatically.", "Deploy decoy cat (a cushion).", "Release a statement: ‘The cat is focusing on her art.’", "Issue sunglasses (tiny).", "Relocate to the secondary sunbeam.", "Activate the cardboard box safe room.", "Refuse all interviews.", "Leak a fake schedule to the pigeons."]
  };

  /* Era-specific bonus prompts for days 15–180 */
  TS.MAIN_SCENES = ["You entered a café as if the bridge of your life was playing. Describe the scene.", "Describe today as the opening shot of a film. Where is the camera?", "Someone looked at you for slightly too long. Write the scene from their point of view.", "Describe your walk home as a music video. Name the song.", "Write the moment today when the lighting was, objectively, cinematic.", "You did one small brave thing today. Write it as the climax of a film."];
  TS.CAT_PROMPTS = ["What did your (imaginary) cat do today, and what does it mean?", "Write the cat’s diary entry about you, today.", "The cat stared at a wall for six minutes. What did it see?", "Your cat has a review of your outfit. Write it.", "The cat knocked one object off a table today. Which one, and why?", "Translate the cat’s single meow this morning into a full paragraph."];
})();
