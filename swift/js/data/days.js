/* Days 1–14, written in full.
   Step types: lesson · write · fields · list · vocab · ladder · culture · choice · thirteen · game · note · status
   A step with a `mission` label is required to complete the day. */
window.TS = window.TS || {};
(function () {
  TS.DAYS = {
    1: {
      title: "You Have Been Issued a Notebook",
      objective: "Notice three tiny things. Write them down. Begin.",
      difficulty: 1, minutes: 13,
      intro: "Welcome to Day 1 of your 180-day transformation into Taylor Swift. We have reviewed your file. You are currently 0.3% Taylor Swift. The 0.3% is mostly that you own a cardigan. We can work with this.",
      reward: { songwriter: 20, storyteller: 10, era: 10 },
      outro: "Day 1 complete. You noticed things. Most people walk past their entire lives. You, as of today, are taking notes. This is how it starts. (It also starts with a notebook you will never be able to throw away.)",
      steps: [
        { type: "status" },
        { type: "lesson", title: "Lesson 1 · Songwriters are professional noticers",
          paras: [
            "Before anyone writes a song, they notice something. Not ‘a sunset’. A specific thing: the way someone held their keys, the time on the oven clock, the exact shade of a jumper left on a chair.",
            "Great songwriters, novelists and diarists share one habit: they write small things down before they know why. The meaning arrives later. Sometimes years later. Sometimes on an album.",
            "Your training begins with the least glamorous skill in this entire programme: paying attention."
          ] },
        { type: "write", id: "details", mission: "Write down three tiny details you noticed today",
          prompt: "Three tiny details from today. The smaller the better. No sunsets.",
          ph: "1. The bus driver had a plaster on his thumb.\n2. Someone left half a croissant on the windowsill.\n3. My phone said 13% at exactly the wrong moment.",
          rows: 5, lore: "memory", stats: { songwriter: 15, storyteller: 5 }, score: "detail" },
        { type: "choice", id: "suspicious", mission: "Choose which detail is the most suspicious",
          q: "Look at your three details. Which one is secretly the start of a story?",
          options: ["The first one. It has a beginning.", "The second one. It has a mystery.", "The third one. It has a number.", "All of them. I’m already overthinking."],
          correct: 3, reveal: "Correct answer: all of them. This is not a multiple-choice question. It is a personality test, and you have passed it." },
        { type: "culture", title: "Culture seminar · The notebook tradition",
          paras: [
            "Samuel Pepys kept a diary in London from 1660 to 1669, recording the Great Fire, the plague and what he had for dinner. Historians still use it, mostly for the fire, occasionally for the dinner.",
            "In 1966 Joan Didion published the essay ‘On Keeping a Notebook’. Her point: a notebook isn’t an accurate record of what happened, it’s a record of how it felt to be you. That is exactly what songwriters mine.",
            "Your notebook joins a very long tradition of people writing down things that did not seem important at the time."
          ] },
        { type: "vocab", id: "words", mission: "Use one new word in a sentence about your day",
          words: [
            { w: "to notice", d: "to become aware of something", n: "Neutral and everyday. “I noticed you changed your hair.”", ex: "I noticed the barista wrote my name with a heart." },
            { w: "to observe", d: "to watch carefully, often with attention to detail", n: "More deliberate and formal than ‘notice’. Scientists observe. Detectives observe.", ex: "I observed that the office plant leans towards the window." },
            { w: "mundane", d: "ordinary, boring, everyday", n: "Often used ironically. Good writers love the mundane.", ex: "It was a mundane Tuesday, until the printer jammed." },
            { w: "vivid", d: "very clear, bright and detailed", n: "For colours, memories and descriptions. The opposite of vague.", ex: "I have a vivid memory of the smell of my grandmother’s kitchen." }
          ],
          prompt: "Write one sentence about your day using at least one of these words." },
        { type: "ladder", title: "Say it better",
          plain: "Nothing happened today.",
          better: [
            { t: "It was an uneventful day.", n: "Neutral, slightly formal." },
            { t: "It was one of those days where nothing happens, and yet…", n: "Storytelling: the ‘and yet’ promises something." },
            { t: "On the surface, nothing happened.", n: "Implies something happened underneath. Very songwriter." }
          ] },
        { type: "thirteen" },
        { type: "note", text: "This could have been a normal Tuesday. It is now Day 1." }
      ]
    },

    2: {
      title: "Find the Drama",
      objective: "Something happened today. It must be transformed into content.",
      difficulty: 2, minutes: 15,
      intro: "Yesterday you noticed things. Today you overreact to them, professionally. This is the daily mission you will see again and again in Era I: FIND THE DRAMA.",
      reward: { songwriter: 15, storyteller: 15, damage: 5 },
      outro: "You turned an ordinary event into an emotional event. Your friends will call this ‘a lot’. Critics will call it ‘a voice’.",
      steps: [
        { type: "lesson", title: "Lesson 2 · Conflict is the engine",
          paras: [
            "Every story runs on conflict: something wanted, something in the way. A broken coffee machine is a conflict. You wanted coffee. The machine said no.",
            "The trick of the confessional songwriter is scale. You take a tiny conflict and treat it with the seriousness usually reserved for wars and divorces. The gap between the size of the event and the size of the feeling is where the humour lives — and, surprisingly often, the truth.",
            "Example. EVENT: your coffee machine broke. NORMAL PERSON: “Annoying.” TAYLORIZED VERSION: “An unexpected betrayal by an appliance I trusted.”"
          ] },
        { type: "fields", id: "drama", mission: "Find the drama in something that happened today",
          title: "FIND THE DRAMA",
          fields: [
            { id: "event", label: "EVENT", ph: "My coworker replied ‘ok.’ with a full stop." },
            { id: "normal", label: "NORMAL PERSON", ph: "Fine." },
            { id: "taylor", label: "TAYLORIZED VERSION", ph: "A single full stop, placed with surgical precision, ended something that had never officially begun." }
          ],
          lore: "story", stats: { storyteller: 15, damage: 8 }, score: "drama", scoreField: "taylor" },
        { type: "game", game: "taylorize", mission: "Use the ✨ TAYLORIZE THIS button once",
          label: "Open the Taylorizer", text: "Type any minor event. The app will give it a title and ask five questions a songwriter would ask. You will then have the emotional foundation of a song that absolutely did not need to exist." },
        { type: "culture", title: "Culture seminar · Aristotle invented drama class",
          paras: [
            "In the Poetics (around 335 BC), Aristotle described tragedy as an imitation of an action that arouses pity and fear, leading to catharsis — the release of those emotions.",
            "He also said the best plots have reversals (things turn) and recognitions (someone realises something). Your broken coffee machine has both: the machine turns on you, and you realise you never truly knew it."
          ] },
        { type: "vocab", id: "words", mission: "Describe today’s drama using two of today’s words",
          words: [
            { w: "dramatic", d: "exciting and emotional; or exaggerated", n: "Can be a compliment (a dramatic view) or a criticism (“you’re being dramatic”).", ex: "It was a dramatic entrance for someone just buying milk." },
            { w: "to overreact", d: "to react more strongly than necessary", n: "What everyone will accuse you of for 180 days.", ex: "I may have overreacted to the parking ticket." },
            { w: "betrayal", d: "breaking someone’s trust", n: "Heavy word. Using it for appliances is the joke.", ex: "The toaster’s betrayal came without warning." },
            { w: "ordeal", d: "a difficult, unpleasant experience", n: "Formal and serious, so it’s funny when the ordeal is a queue.", ex: "Getting a table for brunch was an ordeal." }
          ],
          prompt: "Describe today’s drama using at least two of these words." },
        { type: "thirteen" },
        { type: "note", text: "You could simply communicate directly. Unfortunately, you have chosen lore." }
      ]
    },

    3: {
      title: "Specificity Is a Love Language",
      objective: "Never say “a thing” when you could say “the blue mug with the chip”.",
      difficulty: 2, minutes: 17,
      intro: "Vague writing is forgettable. Specific writing gets quoted on posters for decades. Today we remove the word ‘thing’ from your vocabulary.",
      reward: { songwriter: 20, storyteller: 10 },
      outro: "You traded ‘a car’ for ‘a car with one hubcap missing’. That is the entire difference between a diary and a song.",
      steps: [
        { type: "lesson", title: "Lesson 3 · The scarf principle",
          paras: [
            "Fans famously remember a scarf left at someone’s sister’s house far more than any general statement about heartbreak. That is specificity at work: one concrete object carries a whole relationship.",
            "Specific details do three things. They prove you were there. They let the listener picture it. And they make the feeling feel true, because real life is made of specific things.",
            "Ask of every sentence: what colour, what time, what brand, what exactly? You don’t need all the answers. One is often enough."
          ] },
        { type: "fields", id: "rewrite", mission: "Rewrite three vague sentences specifically",
          title: "Make it specific",
          fields: [
            { id: "a", label: "“I had breakfast.”", ph: "I ate cold toast standing up, over the sink, at 7:52." },
            { id: "b", label: "“We talked for a while.”", ph: "We talked until the café started stacking chairs around us." },
            { id: "c", label: "“He gave me something.”", ph: "He gave me a library book that was already three weeks overdue." }
          ],
          lore: "phrase", stats: { songwriter: 15 }, score: "detail" },
        { type: "write", id: "object", mission: "Describe one object you own in five specific details",
          prompt: "Choose one object near you. Describe it with five details nobody else would notice.",
          ph: "My blue mug: chipped at the handle, a tea stain shaped like Italy, a faded ‘World’s Okayest’ on one side…",
          rows: 4, lore: "symbol", stats: { songwriter: 10, storyteller: 5 }, score: "detail" },
        { type: "culture", title: "Culture seminar · Show, don’t tell",
          paras: [
            "‘Don’t tell me the moon is shining; show me the glint of light on broken glass.’ This advice is usually attributed to Anton Chekhov, though it is a paraphrase of his letters. Writing teachers have repeated it for a century.",
            "‘Show, don’t tell’ means: don’t write ‘I was nervous’, write ‘I read the same email four times before sending it’. The reader then feels nervous with you."
          ] },
        { type: "vocab", id: "words", mission: "Use ‘specific’ or ‘tangible’ in a sentence",
          words: [
            { w: "specific", d: "clearly defined, exact", n: "The opposite of vague. ‘Can you be more specific?’ is a very useful phrase.", ex: "She gave a very specific reason: the cat disapproved." },
            { w: "vague", d: "unclear, not precise", n: "Vague answers are the enemy of songwriting (and of good meetings).", ex: "His reply was frustratingly vague." },
            { w: "tangible", d: "real, able to be touched", n: "Used for objects and results: ‘tangible progress’.", ex: "The letter made the memory tangible." },
            { w: "detail", d: "a small individual fact or feature", n: "‘Attention to detail’ is a classic job interview phrase.", ex: "The devil is in the detail." }
          ],
          prompt: "Write one sentence using ‘specific’, ‘vague’ or ‘tangible’." },
        { type: "ladder", title: "Say it better", plain: "It was nice.",
          better: [
            { t: "It was lovely.", n: "Warmer. Very British." },
            { t: "It was exactly what I needed.", n: "Specific to you, which makes it stronger." },
            { t: "It was the kind of evening you replay on the bus home.", n: "Storytelling: a specific image instead of an adjective." }
          ] },
        { type: "thirteen" }
      ]
    },

    4: {
      title: "Everything Is Something Else",
      objective: "Introduction to metaphor, or: why your toaster is a former lover.",
      difficulty: 3, minutes: 17,
      intro: "Today you will learn to say one thing and mean another. Lawyers call this ‘concerning’. Poets call it ‘metaphor’.",
      reward: { songwriter: 20, storyteller: 5, romance: 5 },
      outro: "You have turned at least one person or object into a metaphor. They were not consulted. This is the way.",
      steps: [
        { type: "lesson", title: "Lesson 4 · The metaphor machine",
          paras: [
            "A simile says something is like something else: “my heart is like a drawer that won’t close”. A metaphor skips the ‘like’: “my heart is a drawer that won’t close”.",
            "Good metaphors connect an abstract feeling (love, regret, hope) to a concrete thing (a drawer, a train, a cardigan). The listener already knows how the thing feels, so they instantly feel the emotion.",
            "Recipe: FEELING + OBJECT + ONE TRUE DETAIL. Missing someone + a coat + it still smells of their kitchen. Done."
          ] },
        { type: "fields", id: "metaphors", mission: "Turn three objects into metaphors",
          title: "Metaphor machine",
          fields: [
            { id: "a", label: "Your phone is…", ph: "…a small glass aquarium of people I don’t text back." },
            { id: "b", label: "Your Monday is…", ph: "…a hallway with all the lights on a timer." },
            { id: "c", label: "Someone you know is…", ph: "…a summer song: you don’t remember choosing them, but you know every word." }
          ],
          lore: "phrase", stats: { songwriter: 20 }, score: "metaphor", counter: "metaphors" },
        { type: "write", id: "verse", mission: "Write four lines built on one metaphor",
          prompt: "Pick your favourite metaphor from above. Stretch it across four lines. Keep the same image the whole way through.",
          ph: "My Monday is a hallway\nwith the lights on a timer\nI keep walking faster\nand it keeps getting darker",
          rows: 5, lore: "song", stats: { songwriter: 15 }, score: "lyric" },
        { type: "culture", title: "Culture seminar · Aristotle, again",
          paras: [
            "Aristotle wrote that the greatest thing by far is to be a master of metaphor, because it cannot be taught and is a sign of natural talent. Fortunately, he was wrong about the first part: it can be practised.",
            "In 1980, linguists George Lakoff and Mark Johnson published Metaphors We Live By, showing that everyday English is full of hidden metaphors: we ‘spend’ time (time is money), we ‘fall’ in love (love is a place), arguments are ‘won’ (argument is war)."
          ] },
        { type: "vocab", id: "words", mission: "Use ‘symbolise’ or ‘imagery’ in a sentence",
          words: [
            { w: "metaphor", d: "describing something as if it were something else", n: "No ‘like’ or ‘as’.", ex: "‘Time is a thief’ is a metaphor." },
            { w: "simile", d: "a comparison using ‘like’ or ‘as’", n: "Softer than a metaphor.", ex: "She was as calm as a cat in a sunbeam." },
            { w: "imagery", d: "language that creates pictures in the mind", n: "Critics praise songs for their ‘vivid imagery’.", ex: "The song’s imagery is all rain and headlights." },
            { w: "to symbolise", d: "to represent an idea", n: "Very useful for explaining art.", ex: "The red scarf symbolises everything she left behind." }
          ],
          prompt: "Write a sentence using ‘symbolise’ or ‘imagery’." },
        { type: "thirteen" },
        { type: "note", text: "Counter updated: People Who Have Been Turned Into Metaphors. They will never know. Probably." }
      ]
    },

    5: {
      title: "Rhyme, But Make It Slant",
      objective: "Fire/desire has been retired. Please hand in your rhymes.",
      difficulty: 3, minutes: 17,
      intro: "Today’s lesson: rhyme. Not the greeting-card kind. The kind that sounds effortless because you spent forty minutes on it.",
      reward: { songwriter: 25 },
      outro: "You wrote a rhyming couplet about breakfast. Somewhere, a greeting-card company felt a disturbance.",
      steps: [
        { type: "lesson", title: "Lesson 5 · Perfect, slant and internal",
          paras: [
            "A perfect rhyme matches the final vowel and consonant sounds: ‘night / light’. It’s satisfying but can sound predictable.",
            "A slant rhyme (also called near rhyme) is close but not exact: ‘home / alone’, ‘mind / time’. Modern songwriters use slant rhymes constantly because they sound natural, like speech.",
            "An internal rhyme happens inside a line: ‘I took the train in the rain again’. It gives a line bounce.",
            "Rule of thumb: rhyme the word that matters, not the word that rhymes. If you’re choosing words just because they rhyme, the listener can tell."
          ] },
        { type: "choice", id: "rhymetype", mission: "Identify the rhyme type",
          q: "‘I kept your jacket / like a habit’. What kind of rhyme is this?",
          options: ["Perfect rhyme", "Slant rhyme", "No rhyme at all", "A cry for help"],
          correct: 1, reveal: "Slant rhyme. ‘Jacket’ and ‘habit’ share the stressed vowel sound but not the ending. It sounds natural and unforced. (It is also slightly a cry for help.)" },
        { type: "write", id: "couplet", mission: "Write a two-line rhyming couplet about breakfast",
          prompt: "A couplet: two lines that rhyme. Subject: breakfast. Treat it seriously.",
          ph: "You left the kettle warm, the jam lid loose —\nI guess that’s what you call a good excuse.",
          rows: 3, lore: "song", stats: { songwriter: 15 }, score: "lyric" },
        { type: "fields", id: "ladder", mission: "Find a slant rhyme for three words",
          title: "Slant rhyme ladder",
          fields: [
            { id: "a", label: "home →", ph: "alone / stone / phone" },
            { id: "b", label: "Tuesday →", ph: "blue day / news, hey" },
            { id: "c", label: "coffee →", ph: "softly / often / costly" }
          ], stats: { songwriter: 10 } },
        { type: "culture", title: "Culture seminar · Emily Dickinson, slant-rhyme legend",
          paras: [
            "Emily Dickinson (1830–1886) wrote nearly 1,800 poems, most found after her death. She loved slant rhyme, dashes and capital letters in odd places — readers still debate what they mean. An Easter-egg poet before Easter eggs.",
            "One of her most quoted lines: ‘Tell all the truth but tell it slant’. Which is, essentially, the mission statement of every songwriter who has ever changed a name in a lyric."
          ] },
        { type: "vocab", id: "words", mission: "Use ‘cadence’ or ‘syllable’ in a sentence",
          words: [
            { w: "rhyme", d: "words with matching end sounds", n: "Noun and verb: ‘to rhyme with’.", ex: "Nothing rhymes with ‘orange’, allegedly." },
            { w: "slant rhyme", d: "an imperfect, near rhyme", n: "Also ‘near rhyme’ or ‘half rhyme’.", ex: "‘Soul’ and ‘all’ make a slant rhyme." },
            { w: "syllable", d: "a unit of sound in a word", n: "‘Coffee’ has two syllables: cof-fee.", ex: "The line has one syllable too many." },
            { w: "cadence", d: "the rhythm and rise-and-fall of speech or music", n: "Also used for speaking: ‘she has a lovely cadence’.", ex: "The cadence of the chorus makes it easy to sing." }
          ],
          prompt: "Write a sentence using ‘cadence’ or ‘syllable’." },
        { type: "thirteen" }
      ]
    },

    6: {
      title: "The Diary Entry That Is Secretly a Song",
      objective: "Verse, chorus, bridge. Your Tuesday has all three.",
      difficulty: 3, minutes: 19,
      intro: "Most pop songs follow a structure as reliable as a train timetable (more reliable, in many countries). Today you learn the timetable.",
      reward: { songwriter: 20, storyteller: 15 },
      outro: "Your yesterday now has a verse, a chorus and a bridge. It will never be just ‘yesterday’ again.",
      steps: [
        { type: "lesson", title: "Lesson 6 · The architecture of a song",
          paras: [
            "VERSE: the story so far. Details, scenes, who and where. Verses change each time.",
            "CHORUS: the main idea. It repeats, so it must be the feeling you want people to sing in the car. Often contains the title.",
            "PRE-CHORUS: a short ramp that builds tension before the chorus.",
            "BRIDGE: a section near the end that changes perspective — a new realisation, a confession, a twist. Many fans consider the bridge the emotional climax. We will dedicate all of Day 14 to it.",
            "Typical structure: Verse – Pre-chorus – Chorus – Verse – Pre-chorus – Chorus – Bridge – Chorus."
          ] },
        { type: "fields", id: "map", mission: "Map yesterday as a song",
          title: "Yesterday, as a song",
          fields: [
            { id: "verse", label: "VERSE (what happened, specifically)", ph: "Woke up late, missed the 8:13, ran through the rain with my laptop under my coat." },
            { id: "chorus", label: "CHORUS (the feeling that repeats)", ph: "I am always running for something that leaves without me." },
            { id: "bridge", label: "BRIDGE (the twist, the realisation)", ph: "But the next bus was empty, and I got the window seat, and maybe that’s the point." }
          ],
          lore: "song", stats: { songwriter: 15, storyteller: 10 }, score: "story" },
        { type: "write", id: "title", mission: "Give the song a title",
          prompt: "Give your song a title. Good titles are often a phrase from the chorus.",
          ph: "The 8:13", rows: 1, lore: "song", stats: { songwriter: 5 } },
        { type: "culture", title: "Culture seminar · The Brill Building",
          paras: [
            "In the early 1960s, songwriters worked in offices around 1619 Broadway in New York — the Brill Building — writing hits on schedule, like a factory. Carole King and Gerry Goffin wrote there as a teenage couple.",
            "Carole King later released Tapestry (1971), one of the best-selling albums of its era, proving a songwriter could also be the star. Songwriting went from ‘job’ to ‘identity’."
          ] },
        { type: "vocab", id: "words", mission: "Describe a favourite song using ‘hook’ or ‘chorus’",
          words: [
            { w: "verse", d: "the part of a song that tells the story", n: "Also used for poetry in general: ‘written in verse’.", ex: "The second verse is where it gets sad." },
            { w: "chorus", d: "the repeated main part of a song", n: "Also: a group singing together.", ex: "Everyone sang the chorus." },
            { w: "hook", d: "the catchiest part of a song", n: "From ‘to hook’ — it catches you.", ex: "The hook got stuck in my head for a week." },
            { w: "bridge", d: "a contrasting section before the final chorus", n: "Fans rank bridges. Seriously.", ex: "The bridge changed the whole meaning of the song." }
          ],
          prompt: "Describe a song you love using ‘hook’, ‘chorus’ or ‘bridge’." },
        { type: "thirteen" }
      ]
    },

    7: {
      title: "The Three-Act Inconvenience",
      objective: "Turn one minor inconvenience into a three-act emotional narrative.",
      difficulty: 3, minutes: 19,
      intro: "One week in. You have a notebook, a drama habit and four new words for ‘sad’ coming tomorrow. Today: structure. Every inconvenience deserves a beginning, middle and end.",
      reward: { storyteller: 25, songwriter: 10, damage: 5 },
      outro: "You have successfully turned one minor inconvenience into a three-act emotional narrative. Achievement unlocked. Your therapist (hypothetical) has been notified.",
      steps: [
        { type: "lesson", title: "Lesson 7 · Setup, confrontation, resolution",
          paras: [
            "Most films follow three acts. ACT I (setup): who, where, what they want. ACT II (confrontation): obstacles, things get worse. ACT III (resolution): the climax and what changed.",
            "The secret is the turning points: the moment that pushes us from Act I into Act II (the problem arrives), and from Act II into Act III (the decisive moment).",
            "A queue at the post office has all of this if you’re brave enough."
          ] },
        { type: "fields", id: "acts", mission: "Write your three-act inconvenience",
          title: "THE THREE-ACT INCONVENIENCE",
          fields: [
            { id: "one", label: "ACT I · Setup (what you wanted)", ph: "All I wanted was to post one parcel before lunch." },
            { id: "two", label: "ACT II · Confrontation (what went wrong, then worse)", ph: "The queue was eleven people long. Then the machine for stamps broke. Then the person in front of me had forty parcels." },
            { id: "three", label: "ACT III · Resolution (the climax and what changed)", ph: "At 13:13 I reached the counter. The clerk smiled. I have never been so grateful to a stranger. I am a different person now." }
          ],
          lore: "story", stats: { storyteller: 20, damage: 6 }, score: "story", counter: "story" },
        { type: "write", id: "logline", mission: "Summarise it as a one-sentence film pitch",
          prompt: "A logline: one sentence that sells the film. ‘When [event], a [character] must [goal] before [stakes].’",
          ph: "When the stamp machine breaks, one woman must survive the longest queue in postal history before her lunch break ends.",
          rows: 2, lore: "story", stats: { storyteller: 10 } },
        { type: "culture", title: "Culture seminar · Syd Field and the three-act screenplay",
          paras: [
            "Aristotle said a plot needs a beginning, a middle and an end. In 1979, Syd Field’s book Screenplay turned that into the three-act paradigm taught in film schools, with ‘plot points’ that turn the story.",
            "It is criticised for being formulaic — but even critics agree you have to know the rules before you can break them. Like slant rhyme."
          ] },
        { type: "vocab", id: "words", mission: "Retell your story using ‘climax’ and ‘aftermath’",
          words: [
            { w: "setup", d: "the beginning that introduces the situation", n: "Also slang: ‘it was a setup’ — a trap.", ex: "The setup was simple: one parcel, one queue." },
            { w: "climax", d: "the most intense, important moment", n: "Stress on the first syllable: CLI-max.", ex: "The climax came when the machine finally worked." },
            { w: "resolution", d: "how a problem is solved or ends", n: "Also a promise: ‘New Year’s resolution’.", ex: "The resolution was unexpectedly emotional." },
            { w: "aftermath", d: "the period after a dramatic event", n: "Usually for disasters. Use it for brunch.", ex: "In the aftermath of the queue, I bought myself a pastry." }
          ],
          prompt: "Retell your story in two sentences using ‘climax’ and ‘aftermath’." },
        { type: "thirteen" },
        { type: "note", text: "This is not necessary. It is, however, now an era." }
      ]
    },

    8: {
      title: "The Art of “I’m Fine”",
      objective: "English 301: How to say “I’m fine” while clearly not being fine.",
      difficulty: 3, minutes: 15,
      intro: "Today’s course is offered jointly by the Department of English and the Department of Emotional Damage. Please take a seat. No, it’s fine. It’s totally fine.",
      reward: { songwriter: 10, storyteller: 15, damage: 8 },
      outro: "You learned that what people don’t say is often louder than what they do. You also learned six ways to say ‘fine’. One of them was a threat.",
      steps: [
        { type: "lesson", title: "Lesson 8 · Subtext",
          paras: [
            "Subtext is the meaning under the words. “It’s fine.” can mean: it’s fine; it’s not fine; it will never be fine; you should already know why it’s not fine.",
            "In English, tone, punctuation and context carry enormous meaning. “Fine.” (with a full stop) is colder than “fine!” and much colder than “fine :)”.",
            "Songwriters love subtext because it lets the listener do the work. You say “I’m doing better”, and everyone hears that you weren’t."
          ] },
        { type: "choice", id: "fine", mission: "Decode the subtext",
          q: "Your friend texts: “No worries. I’ll just go by myself.” What does it mean?",
          options: ["There are genuinely no worries.", "There are several worries.", "There are worries, and they now have your name on them.", "Ask the cats."],
          correct: 2, reveal: "C. ‘I’ll just’ + ‘by myself’ = maximum subtext. Recommended response: a direct, kind question. (You could simply communicate directly. It is permitted. Occasionally.)" },
        { type: "fields", id: "fines", mission: "Write three versions of ‘I’m fine’",
          title: "Three shades of fine",
          fields: [
            { id: "a", label: "Actually fine", ph: "Honestly, I’m good — just tired." },
            { id: "b", label: "Not fine, being brave", ph: "I’m hanging in there." },
            { id: "c", label: "Absolutely not fine, ten-minute-version energy", ph: "No, it’s fine. It’s fine. I’ve rearranged the cupboards twice, but it’s fine." }
          ],
          lore: "phrase", stats: { storyteller: 10, damage: 5 }, score: "drama", scoreField: "c" },
        { type: "ladder", title: "Natural English · Not-fine phrases",
          plain: "I’m fine.",
          better: [
            { t: "I’m hanging in there.", n: "Things are hard, but I’m coping. Honest and common." },
            { t: "I’ve been better.", n: "Polite understatement: things are not good." },
            { t: "It’s whatever.", n: "Casual, often means it is very much not ‘whatever’." },
            { t: "I’m doing okay, all things considered.", n: "Mature, measured. Something happened." },
            { t: "Honestly? Not great.", n: "Direct and brave. Invites a real conversation." }
          ] },
        { type: "culture", title: "Culture seminar · Hemingway’s iceberg",
          paras: [
            "In Death in the Afternoon (1932), Ernest Hemingway described his ‘iceberg theory’: a writer can leave things out if they know them, and the reader will still feel them. Only one-eighth of an iceberg shows above water.",
            "His very short story ‘Hills Like White Elephants’ (1927) is a whole conversation about something neither character ever names. Pure subtext."
          ] },
        { type: "vocab", id: "words", mission: "Use ‘understatement’ in a sentence about yourself",
          words: [
            { w: "subtext", d: "the hidden meaning beneath words", n: "Useful for analysing films, songs and texts from your ex.", ex: "The subtext of her ‘ok.’ was devastating." },
            { w: "understatement", d: "saying something is less serious than it is", n: "Very British. ‘A bit of rain’ = a flood.", ex: "Calling it ‘a long week’ was an understatement." },
            { w: "passive-aggressive", d: "showing anger indirectly", n: "Office emails: ‘As per my last email…’", ex: "The sticky note on the fridge was passive-aggressive." },
            { w: "nonchalant", d: "calm and casually unconcerned", n: "Often performed rather than felt.", ex: "She tried to look nonchalant when he walked in." }
          ],
          prompt: "Write a sentence about yourself using ‘understatement’." },
        { type: "thirteen" }
      ]
    },

    9: {
      title: "Beyond “Sad”",
      objective: "Emotional vocabulary for people who are, technically, fine.",
      difficulty: 2, minutes: 15,
      intro: "Songwriters need more than one word for every feeling. Today we expand ‘sad’ into a full wardrobe. Also, we are installing your Emotional Damage Meter.",
      reward: { songwriter: 15, storyteller: 10, damage: 5 },
      outro: "You now own at least eight words for sadness. Use them wisely. Or dramatically. We are not your parents.",
      steps: [
        { type: "lesson", title: "Lesson 9 · The emotion wardrobe",
          paras: [
            "Instead of “I was very sad”, native speakers might say: I was devastated. I felt completely crushed. It really hit me. I couldn’t shake the feeling.",
            "Each one is different. ‘Devastated’ is extreme — a loss, a shock. ‘Crushed’ suggests hope that was flattened (a rejection, a disappointment). ‘It really hit me’ is about the moment you understood. ‘I couldn’t shake the feeling’ is about something that lingers.",
            "Choosing the precise word is the single fastest way to sound more fluent and more like a writer."
          ] },
        { type: "ladder", title: "Say it better · Sad",
          plain: "I was very sad.",
          better: [
            { t: "I was devastated.", n: "Extreme. A real loss or shock." },
            { t: "I felt completely crushed.", n: "A hope or expectation was destroyed." },
            { t: "It really hit me.", n: "The moment the feeling arrived — often later than the event." },
            { t: "I couldn’t shake the feeling.", n: "It lingered, quietly, all day." },
            { t: "I felt a bit down.", n: "Mild. Normal Tuesday sadness." },
            { t: "I was heartbroken.", n: "Usually about love or someone you care about." }
          ] },
        { type: "vocab", id: "words", mission: "Use one of these words to describe something real",
          words: [
            { w: "wistful", d: "softly longing for something gone", n: "Gentle and a little sweet. Autumn word.", ex: "She looked wistful when the old song came on." },
            { w: "bittersweet", d: "happy and sad at the same time", n: "Graduations, last days, final episodes.", ex: "Moving out was bittersweet." },
            { w: "melancholy", d: "a deep, thoughtful sadness", n: "Literary. Often has no specific cause.", ex: "There’s a melancholy to Sunday evenings." },
            { w: "nostalgic", d: "longing for the past", n: "Can be pleasant.", ex: "That smell makes me nostalgic for summer camp." }
          ],
          prompt: "Describe something real from your week using wistful, bittersweet, melancholy or nostalgic." },
        { type: "game", game: "damage", mission: "Calibrate your Emotional Damage Meter",
          label: "Open the Emotional Damage game", text: "Rate how dramatically each situation should be interpreted, from ‘I’m fine’ to ‘This is now a ten-minute version’. The meter is for comedy, not for actually ruminating. If something is genuinely heavy, talk to a person." },
        { type: "culture", title: "Culture seminar · Words other languages have",
          paras: [
            "Portuguese has ‘saudade’: a deep longing for someone or something absent, possibly never to return. English has no single word for it, so English speakers borrow it.",
            "German has ‘Sehnsucht’ (an intense, almost spiritual yearning) and Welsh has ‘hiraeth’ (homesickness for a home you can’t return to, or that never was). Songwriters in every language are trying to name the same feelings."
          ] },
        { type: "write", id: "feeling", mission: "Describe one feeling from this week without using its name",
          prompt: "Describe one feeling from this week without naming it. Show it through actions, objects and details.",
          ph: "I opened the fridge three times without taking anything out. I played the same song until it stopped meaning anything.",
          rows: 4, lore: "journal", stats: { songwriter: 10, storyteller: 10 }, score: "detail" },
        { type: "thirteen" },
        { type: "note", text: "The Emotional Damage Meter is a joke. Real feelings deserve real people. Text a friend. Drink water. Then journal about it." }
      ]
    },

    10: {
      title: "Three Chords and the Truth",
      objective: "A field trip to Nashville, conducted entirely in your imagination.",
      difficulty: 2, minutes: 17,
      intro: "Today we travel to Nashville, Tennessee — the songwriting capital of the United States — without leaving your chair. Please fasten your imaginary cowboy boots.",
      reward: { songwriter: 20, storyteller: 10, era: 10 },
      outro: "You wrote your own ‘three chords and the truth’. It may not be country music, but it is honest, and honesty is the genre.",
      steps: [
        { type: "lesson", title: "Lesson 10 · Where it began",
          paras: [
            "Taylor Swift was born on 13 December 1989 in Pennsylvania. As a teenager, her family moved to Hendersonville, near Nashville, so she could pursue country music.",
            "At 14 she signed a songwriting deal with Sony/ATV — one of the youngest songwriters they had ever signed. She performed at the Bluebird Café, a tiny Nashville venue famous for songwriters’ nights, where she caught the attention of the label executive who signed her.",
            "Nashville taught her the craft rule that defines her writing: the story comes first, and the details make it true."
          ] },
        { type: "culture", title: "Culture seminar · “Three chords and the truth”",
          paras: [
            "The songwriter Harlan Howard is credited with defining country music as ‘three chords and the truth’: simple music, honest story.",
            "Nashville’s Music Row has been home to publishers and studios since the 1950s. Songwriters there often co-write in scheduled sessions: you arrive at 10am with a title idea and leave at 2pm with a song. Very Brill Building.",
            "The Bluebird Café holds ‘in the round’ shows, where several songwriters sit in a circle and take turns playing their songs and telling the stories behind them."
          ] },
        { type: "write", id: "truth", mission: "Write your ‘three chords and the truth’",
          prompt: "Write one true, simple thing about your life in three short sentences. No metaphors today. Just the truth.",
          ph: "I moved cities two years ago. I still give directions using the old streets. Some nights I miss people I never call.",
          rows: 4, lore: "journal", stats: { songwriter: 15, storyteller: 10 }, score: "detail" },
        { type: "fields", id: "round", mission: "Prepare your ‘in the round’ introduction",
          title: "Songwriters in the round",
          fields: [
            { id: "song", label: "The song title you would play", ph: "The 8:13" },
            { id: "story", label: "The story you’d tell before playing it (two sentences)", ph: "I wrote this one about missing a bus. Turns out it’s about missing everything." }
          ], lore: "story", stats: { storyteller: 10, main: 5 } },
        { type: "vocab", id: "words", mission: "Describe your writing using ‘earnest’ or ‘heartfelt’",
          words: [
            { w: "earnest", d: "sincere and serious", n: "Can be gently mocking: ‘a very earnest young man’.", ex: "Her early songs are earnest and specific." },
            { w: "heartfelt", d: "deeply sincere", n: "Always positive.", ex: "He gave a heartfelt speech." },
            { w: "to co-write", d: "to write together with someone", n: "Very common in the music industry.", ex: "They co-wrote the song in one afternoon." },
            { w: "the round", d: "a performance where artists sit in a circle and take turns", n: "‘In the round’ also means a stage surrounded by audience.", ex: "Four writers played in the round." }
          ],
          prompt: "Describe your own writing using ‘earnest’ or ‘heartfelt’." },
        { type: "thirteen" }
      ]
    },

    11: {
      title: "The Letter You Will Not Send",
      objective: "Address something that will never read it. An object is ideal.",
      difficulty: 3, minutes: 17,
      intro: "Some of the most powerful writing in history was addressed to someone who never read it. Today you join that tradition. You will address an object. It is safer.",
      reward: { songwriter: 15, storyteller: 15, romance: 5 },
      outro: "You wrote a letter to an object. It did not reply. It has, however, been entered into your lore as a character.",
      steps: [
        { type: "lesson", title: "Lesson 11 · Direct address",
          paras: [
            "Writing to ‘you’ is one of the oldest tools in songwriting and poetry. It feels intimate: the listener overhears a private conversation.",
            "The trick: the ‘you’ can be a person, a city, a younger self, a habit, or your old car. Readers will assume it’s about a person. Let them.",
            "Letters have a natural structure: greeting, memory, the thing you never said, sign-off."
          ] },
        { type: "fields", id: "letter", mission: "Write an unsendable letter to an object",
          title: "THE LETTER",
          fields: [
            { id: "to", label: "Dear…", ph: "Dear 2014 laptop with the sticky ‘E’ key," },
            { id: "memory", label: "A memory you share", ph: "You were there for every draft of every email I regretted sending." },
            { id: "unsaid", label: "The thing you never said", ph: "I replaced you with something faster. It never understood me." },
            { id: "sign", label: "Sign-off", ph: "Yours, still typing, still forgetting the E." }
          ],
          lore: "character", stats: { songwriter: 10, storyteller: 15 }, score: "detail", counter: "metaphors" },
        { type: "culture", title: "Culture seminar · The epistolary form",
          paras: [
            "An epistolary novel is told through letters. Les Liaisons dangereuses (1782) by Choderlos de Laclos is a whole scandal in letters. Bram Stoker’s Dracula (1897) is told through diaries, letters and newspaper clippings.",
            "Rainer Maria Rilke’s Letters to a Young Poet (published 1929) — ten letters of advice to an aspiring writer — is still read by songwriters. His central advice: go into yourself, and ask whether you must write."
          ] },
        { type: "vocab", id: "words", mission: "Use ‘closure’ in a sentence",
          words: [
            { w: "to address", d: "to speak or write to someone", n: "Also: the place where you live. Context matters.", ex: "The poem addresses her younger self." },
            { w: "to confess", d: "to admit something, often secret", n: "‘Confessional’ songwriting = personal, revealing.", ex: "I have to confess: I never read the manual." },
            { w: "regret", d: "a feeling of sadness about something you did or didn’t do", n: "Verb and noun.", ex: "My only regret is the fringe." },
            { w: "closure", d: "a feeling that something has ended properly", n: "Very common in relationship talk.", ex: "Writing the letter gave me closure." }
          ],
          prompt: "Use ‘closure’ in a sentence (dramatic or not)." },
        { type: "ladder", title: "Natural English · Letter phrases",
          plain: "I want to say something.",
          better: [
            { t: "There’s something I’ve been meaning to tell you.", n: "Builds suspense. Classic." },
            { t: "I never got the chance to say…", n: "Regretful, open-hearted." },
            { t: "For what it’s worth…", n: "Humble: this might not matter, but…" }
          ] },
        { type: "thirteen" }
      ]
    },

    12: {
      title: "Colour Theory for the Emotionally Committed",
      objective: "Assign a colour to every day this week. Defend your choices.",
      difficulty: 2, minutes: 15,
      intro: "Some people see the world in colour. You will now see it in symbolic colour, which is more tiring but much more interesting.",
      reward: { songwriter: 10, storyteller: 10, egg: 10, era: 10 },
      outro: "Your week now has a colour palette. It is entered into the lore. If any of these colours return, the app will notice. The app always notices.",
      steps: [
        { type: "lesson", title: "Lesson 12 · Colours carry stories",
          paras: [
            "Colours come with cultural meanings. In English-speaking cultures: red is passion, anger, danger, love. Blue is calm, sadness (‘feeling blue’), distance. Green is envy (‘green with envy’), nature, hope. Gold is memory, glory, warmth.",
            "Albums are often remembered by colour. Fans talk about eras by colour almost as much as by sound.",
            "Writers use colour as shorthand: one colour word can set a whole mood without explaining anything."
          ] },
        { type: "fields", id: "palette", mission: "Assign a colour to each of the last three days",
          title: "Your week, in colour",
          fields: [
            { id: "a", label: "Two days ago was… (colour + why)", ph: "Grey-blue. Rain, laundry, an unanswered message." },
            { id: "b", label: "Yesterday was…", ph: "Mustard yellow. A good coffee and a bad meeting." },
            { id: "c", label: "Today is…", ph: "Red. I bought a red umbrella. It feels like a plot point." }
          ],
          lore: "color", stats: { egg: 10, songwriter: 5 } },
        { type: "write", id: "object", mission: "Describe a coloured object that could become a symbol",
          prompt: "Choose one coloured object in your life. Write two sentences about it as if it will matter later.",
          ph: "The red umbrella has a broken spoke on one side. I keep opening it anyway.",
          rows: 3, lore: "symbol", stats: { songwriter: 10, egg: 5 }, score: "detail" },
        { type: "culture", title: "Culture seminar · The green light",
          paras: [
            "In The Great Gatsby (1925), Gatsby stares across the water at a green light at the end of Daisy’s dock. It symbolises everything he wants and can’t have. It may be the most famous coloured object in American literature.",
            "Painters thought about this too: Wassily Kandinsky’s Concerning the Spiritual in Art (1911) argued that colours produce emotions the way musical notes do."
          ] },
        { type: "vocab", id: "words", mission: "Describe your current mood as a colour, using ‘muted’ or ‘vivid’",
          words: [
            { w: "crimson", d: "a deep, rich red", n: "More dramatic than ‘red’.", ex: "Crimson leaves covered the path." },
            { w: "muted", d: "soft, not bright", n: "For colours and sounds.", ex: "She wore muted greens and browns." },
            { w: "vivid", d: "bright and intense", n: "Colours, memories, imaginations.", ex: "The sky was a vivid orange." },
            { w: "hue", d: "a colour or shade", n: "Poetic. ‘A golden hue.’", ex: "The room had a strange blue hue." },
            { w: "feeling blue", d: "feeling sad", n: "Idiom. Also ‘green with envy’, ‘seeing red’ (angry).", ex: "I’ve been feeling a bit blue since Sunday." }
          ],
          prompt: "Describe your current mood as a colour, using ‘muted’, ‘vivid’ or ‘hue’." },
        { type: "thirteen" },
        { type: "note", text: "If you wrote ‘red umbrella’, please be aware that red umbrellas have a way of coming back." }
      ]
    },

    13: {
      title: "The Number 13",
      objective: "Become suspicious of absolutely nothing.",
      difficulty: 4, minutes: 21,
      intro: "Day 13. You knew this was coming. We knew you knew. Today is about the number most strongly associated with Taylor Swift’s public persona and fandom. Somewhere on this page, a 13 is hiding. We are not going to help you.",
      reward: { egg: 30, songwriter: 10, era: 15 },
      outro: "You observed thirteen real things. That is called mindfulness. When you do it while looking for the number 13, it is called this app.",
      bonus: "You found it. You are beginning to become unbearable.",
      steps: [
        { type: "lesson", title: "Lesson 13 · Why 13?",
          paras: [
            "Taylor Swift was born on 13 December and has often called 13 her lucky number. Early in her career she was known for writing ‘13’ on her hand before concerts, and fans have spent years spotting 13s in dates, track lists and announcements.",
            "Culturally, 13 has the opposite reputation. Fear of the number is called triskaidekaphobia. Many buildings skip a 13th floor, and Friday the 13th is considered unlucky in many English-speaking countries.",
            "Reclaiming an ‘unlucky’ symbol and making it yours is a classic branding move. It also makes the number impossible to see without thinking of her, which is why you will now see it everywhere. Sorry."
          ] },
        { type: "list", id: "thirteen", count: 13, mission: "Find 13 real things in your environment",
          prompt: "13 CHALLENGE · Find 13 things around you right now. Do not invent them. Observe.",
          ph: "a lamp with a crooked shade", lore: "memory", stats: { egg: 15, songwriter: 10 } },
        { type: "write", id: "five", mission: "Write five sentences about one of the 13 things",
          prompt: "Choose one of your 13 things. Write exactly five sentences about it.",
          ph: "The lamp has a crooked shade. It came with the flat. Nobody has ever straightened it. I think it’s leaning towards the window on purpose. It might know something.",
          rows: 5, lore: "story", stats: { songwriter: 10, storyteller: 10 }, score: "detail" },
        { type: "culture", title: "Culture seminar · Lucky and unlucky numbers",
          paras: [
            "Many hotels and hospitals in the US skip room or floor 13. In parts of East Asia the number 4 is avoided instead, because it sounds like the word for death in several languages.",
            "Seven is lucky in many Western traditions; eight is lucky in Chinese culture because it sounds like the word for prosperity — the 2008 Beijing Olympics opened on 8/8/08 at 8:08pm.",
            "Numbers have no meaning until a culture — or a fandom — gives them one."
          ] },
        { type: "vocab", id: "words", mission: "Use three of today’s words to explain why 13 ‘matters’",
          words: [
            { w: "coincidence", d: "two things happening together by chance", n: "‘What a coincidence!’ — said with suspicion in this app.", ex: "It’s just a coincidence. (It is not just a coincidence.)" },
            { w: "suspicious", d: "making you feel something is wrong or hidden", n: "Also: feeling distrust. ‘I’m suspicious of the cat.’", ex: "Thirteen missed calls is suspicious." },
            { w: "meaningful", d: "having significance or purpose", n: "Positive. ‘A meaningful conversation.’", ex: "The date felt meaningful to her." },
            { w: "symbolic", d: "representing something else", n: "‘A symbolic gesture.’", ex: "Writing 13 on her hand was symbolic." },
            { w: "pattern", d: "a repeated arrangement", n: "Detectives and data scientists love patterns.", ex: "I started to see a pattern." },
            { w: "significance", d: "importance or meaning", n: "Formal. ‘Of great significance.’", ex: "The significance of the date was lost on him." }
          ],
          prompt: "Explain why 13 obviously matters, using three of these words. Be convincing. Be wrong." },
        { type: "thirteen" },
        { type: "note", text: "STATISTICAL SIGNIFICANCE of today: absolutely none. SPIRITUAL SIGNIFICANCE: extremely suspicious." }
      ]
    },

    14: {
      title: "The Bridge",
      objective: "Learn the most important eight bars in pop. Then write some about laundry.",
      difficulty: 4, minutes: 21,
      intro: "Two weeks. Fourteen days. Today: the bridge — the part of the song where everything turns. Fans rank them. Critics write essays about them. You will write one about a household chore.",
      reward: { songwriter: 25, storyteller: 10, damage: 6 },
      outro: "You wrote a bridge about a chore. It escalated. It revealed something. It made the final chorus mean something different. Congratulations: you survived the bridge.",
      steps: [
        { type: "lesson", title: "Lesson 14 · The bridge",
          paras: [
            "The bridge comes after the second chorus. Its job: change the perspective. New melody, new angle, often the emotional climax.",
            "Classic bridge moves: THE CONFESSION (admit what you’ve been hiding), THE ZOOM-OUT (see the bigger picture), THE TIME JUMP (years later…), THE ESCALATION (the feeling breaks open, faster lines, building).",
            "A great bridge makes the final chorus mean something new. You hear the same words, but now you know the truth."
          ] },
        { type: "choice", id: "bridgetype", mission: "Choose your bridge move",
          q: "Your song is about doing laundry. Which bridge move will you use?",
          options: ["The confession: I wasn’t washing the shirt, I was keeping it.", "The zoom-out: a whole life measured in loads of washing.", "The time jump: years later, the same machine, a different flat.", "The escalation: the spin cycle, but emotionally."],
          correct: -1, reveal: "All correct. This is a safe space for bridges. Now write it." },
        { type: "write", id: "bridge", mission: "Write a four-to-eight-line bridge about a household chore",
          prompt: "Write a bridge (4–8 lines) about a household chore. Use your chosen move. Let it build. Escalate if you must.",
          ph: "And I folded every shirt but one\nthe one that still smells like the summer\nI keep it at the bottom of the pile\nlike that’s not the reason I do laundry at all",
          rows: 8, lore: "song", stats: { songwriter: 20, damage: 5 }, score: "lyric" },
        { type: "culture", title: "Culture seminar · The middle eight",
          paras: [
            "British songwriters often call the bridge the ‘middle eight’, because it was traditionally eight bars long in the middle of a song. The Beatles used middle eights constantly — Lennon and McCartney sometimes wrote them separately and glued them in.",
            "Musically, the bridge often moves to a different chord or key. Emotionally, it does the same thing: it takes the listener somewhere they weren’t expecting."
          ] },
        { type: "vocab", id: "words", mission: "Describe your bridge using ‘build-up’ and ‘release’",
          words: [
            { w: "build-up", d: "a gradual increase in intensity", n: "Music, tension, traffic.", ex: "The build-up to the final chorus gave me chills." },
            { w: "crescendo", d: "a gradual increase in loudness; a peak", n: "From Italian. Also used for arguments.", ex: "The argument reached a crescendo at dinner." },
            { w: "release", d: "the moment tension ends; or a new product/song", n: "Double meaning — very songwriter.", ex: "The final chorus felt like a release." },
            { w: "catharsis", d: "an emotional release that makes you feel better", n: "Aristotle again (see Day 2).", ex: "Screaming the bridge in the car was cathartic." }
          ],
          prompt: "Describe your bridge using ‘build-up’ and ‘release’." },
        { type: "game", game: "tracklist", mission: "Play one round of the Tracklist Game",
          label: "Open the Tracklist Game", text: "Assign absurd situations to the correct track. Spoiler: the correct answer is usually the dramatic one." },
        { type: "thirteen" }
      ]
    }
  };
})();
