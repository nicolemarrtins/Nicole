# How to Become Taylor Swift in 180 Days — design document

An unofficial, fan-inspired parody. Not affiliated with or endorsed by Taylor Swift. No official logos, album artwork or lyrics; only short references, titles and original writing.

**The premise:** you gave an app 180 days to turn you into Taylor Swift. It takes this completely seriously, until it doesn't. Half genuine learning (observation, songwriting craft, English, culture, planning), half absurd parody.

## 1. Systems at a glance

| System | Where it lives | What it does |
|---|---|---|
| Six eras | `js/data/roadmap.js` (`TS.ERAS`) | 30 days each, each with its own objective, skills, visual world and daily bonus format |
| 180-day roadmap | `js/data/roadmap.js` (`TS.ROADMAP`) | Every day: title, objective, 3–5 missions, 2+ English words, a real culture note, an optional special tag |
| Days 1–14 | `js/data/days.js` | Written in full: lessons, writing, choices, vocabulary, “say it better”, culture seminars, 13 checks |
| Days 15–180 | `js/lessons.js` | Assembled from the roadmap + the era’s training format + special tags (lore file, cat file, masterplan, ten-minute song, performance timer, final project) |
| Scoring | `js/store.js` | XP per skill → percentage, stars, Taylorification, Emotional Damage meter |
| Lore memory | `js/store.js` + `js/engine.js` | Every answer becomes lore; recurring motifs trigger callbacks (“THE RED UMBRELLA HAS RETURNED.”) |
| Easter eggs | `js/store.js`, `views.js` | A hidden 13 on every day, 13 global clues in the app, 8 detector scenes, the 13 Incidents timeline |
| Achievements | `js/store.js` (`ACH`) | 32 ridiculous achievements |
| Mini-games | `js/play.js` | 8 numbered games + Tracklist, Lyric Challenge, Era Quiz, Outfit Generator, random events |
| Big creative tools | `js/play.js` | Album Generator (canvas covers), Cat Department, My Six Eras, Conspiracy Board, Bracelet Factory |

## 2. Progression

- **Unlocking.** Finishing a day unlocks the next. Settings → Pacing switches to “one new day per calendar day”.
- **Completing a day** requires every *mission* (writing, choices, vocabulary use, games) plus the daily **13 CHECK**. Bonus steps are optional.
- **Every 7 days** a TV-style **weekly episode** recaps what you did (from your own lore and the activity log).
- **Returning after 30+ minutes** opens **“Previously on your Taylorization…”**: last episode, current era, unresolved lore, unfound Easter eggs, emotional damage, next mission.
- **Random events** (“🚨 BREAKING NEWS”) appear at most once a day on the home screen.
- **Final 30 days:** Week 1 create your era, Week 2 create your album, Week 3 create your rollout, Week 4 final performance. **Day 180** is the final project (My Era, My Album, My Story, My Song, My Easter Eggs, My Masterplan, My Final Performance with a 3-minute timer), followed by the final screen.

## 3. Scoring

- **Skills (XP):** Songwriter, Storyteller, Easter Egg Detective, Main Character, Cat Energy, Romantic Delusion, Mastermind, Era Awareness. `percent = 100 × (1 − e^(−xp/700))`, so early gains are quick and mastery is slow. Stars = ⌈percent / 20⌉.
- **Day 0:** Taylor Swift Level 0.3%, Songwriting ★, Narrative Potential ★, Emotional Damage ★★, everything else ☆.
- **Taylorification** = 0.3 + 0.42 × (average of the 7 core skills) + 57.5 × (days completed / 180). Capped at 99.9% until Day 180.
- **Emotional Damage** is a separate 0–100 meter: 0–10 “I’m fine.” · 11–30 “Interesting.” · 31–50 “I’ll journal about it.” · 51–70 “This is becoming a song.” · 71–90 “This is becoming an album.” · 91–100 “This is now a ten-minute version.” It decays 15% per day and shows a real-world wellbeing note above 90, so it never rewards rumination.
- **Writing feedback** (`engine.js`) is heuristic and offline: Detail (specificity, imagery, observation), Drama (drama, specificity, metaphor, emotional damage, potential chorus), Metaphor, Story (structure, specificity, stakes, twist), Lyric (specificity, imagery, emotion, originality, rhythm, memorability) and Mastermind (strategic / unnecessarily complicated / could have been an email). Every score comes with one practical coaching tip.

## 4. Lore system

Every saved answer becomes a lore entry `{day, type, title, text}`. Types: journal, memory, story, song, phrase, symbol, colour, character, clue, cat, plan, era, bracelet, album, plus 13 incidents, achievements and motifs. **My Lore** is searchable and filterable.

**Motifs and callbacks:** each entry is scanned for colour + noun phrases (“red umbrella”) and distinctive words. If a motif seen on an earlier day comes back (colour phrases at any distance, single words after 3+ days), the app shows a callback banner: *“THE RED UMBRELLA HAS RETURNED. Interesting that you’ve mentioned ‘red umbrella’ again. First seen on Day 12.”* Motifs mentioned once feed “unresolved lore” in *Previously on…*; repeated motifs feed album track suggestions and weekly episode titles. Day 54’s sealed prophecy returns on Day 108.

## 5. Easter egg system

- **Hidden daily 13:** every day page hides a faint, clickable “13” at a seeded position. Day 13’s bonus: “You are beginning to become unbearable.”
- **Global clue registry:** 13 clues hidden around the app (the home star, Day 13 on the roadmap, Tree step 6, the version number, the album cover corner, the Cat Security badge, the board pin, the final exam, the disclaimer, the damage meter at exactly 13, the final curtain…).
- **Easter Egg Detector:** 8 fictional posts (levels 1–5) with clickable clues, decoys, capital-letter codes and a “What you missed” reveal.
- **The 13 System:** a daily 13 CHECK (Yes / No / I refuse to answer / I have created 13 explanations), plus automatic detection of “13” in anything you write, all logged in the **13 Incidents** timeline. Statistical significance: absolutely none. Spiritual significance: extremely suspicious.
- **Era II pattern drills** (“You saw a yellow car at 13:13”) and the **capital-letter decoder** (Day 38).

## 6. Achievements

32 in total, including THE NOTEBOOK, THE BRIDGE, THE MASTERMIND, 13 AGAIN, CAT DISTRIBUTION SYSTEM, FRIENDSHIP DIPLOMAT, LORE DETECTIVE, THE RED LIP, THIS COULD HAVE BEEN AN EMAIL, TEN MINUTES, THE CALLBACK, METAPHOR MACHINE, UNNECESSARILY SPECIFIC CAT LORE, RED STRING THEORY, SIX ERAS, one per era graduation and TAYLOR SWIFT-ISH™.

## 7. Data model (localStorage key `taylorswiftish.state.v1`)

```js
{
  v, created, name,
  xp: { songwriter, storyteller, egg, main, cat, romance, mastermind, era },
  damage,                                  // 0–100 meter
  counts: { bracelets, clues, albums, metaphors, thirteens, eggs, journal, creative, culture, story,
            cat, words, taylorize, plans, callbacks, games, events, longest, eras },
  unlocked, completed: { [day]: isoDate },
  answers: { [day]: { [stepId]: string | {field: string} | string[] | number, t13: {c, text, n}, culture } },
  lore: [{ id, day, type, title, text, date, src }],
  motifs: { [key]: { first, days: [], strong, count } },
  incidents: [{ day, text, kind, src, date }],
  eggs: { [eggId]: { day, label, date } },
  achievements: { [id]: isoDate },
  bracelets: [{ text, pal, for, day }],
  albums: [{ id, title, era, color, concept, style, count, songs: { lead, sad, angry, romantic, delusional, funny, ten, final } }],
  eras: [ x6 { name, color, aesthetic, symbol, album, theme, fashion, songs, mood, lesson } ],
  cats: [{ id, name, kind, color, traits, job, secret, past, budget, post, drafts, knows, threat, protocols }],
  board: { notes: [{ id, type, text, x, y }], links: [[idA, idB]] },
  plans: [{ what, fields, level, day }],
  log: [{ day, type, text, date }], snapshots: { [day]: taylorification },
  played: { [gameId]: n }, detector: { [sceneId]: [clueKeys] }, writeDays: { [isoDate]: true },
  settings: { pacing: "free" | "daily" }, lastVisit, prevVisit, lastEvent, quiz, episodes, damageDate, callbacksToday
}
```

Settings → Backup exports and restores this as JSON.

## 8. Visual system

Taylor Swift fan universe × luxury editorial diary × absurd educational game, with no copied covers, logos or typography.

- **Type:** Bodoni Moda (editorial display, italic for drama) · Manrope (body) · Caveat (handwriting, notebooks, sticky notes) · Special Elite (newspaper clippings, stamps, case files).
- **Materials:** lined notebook paper, ticket stubs (“ADMIT ONE”), Polaroids, sticky notes, envelopes, newspaper clippings, friendship-bracelet beads, a cork conspiracy board with red string, stage curtains and confetti (with the occasional 13).
- **Each era is its own world** (`body[data-era]`): I notebook blue and gold stars · II midnight violet, highlighter yellow, red string · III crimson on film-still white · IV lilac, blush, paw prints · V navy blueprint and gold ink · VI stage lights and glitter.
- Mobile-first: one editorial column, bottom tab bar on phones, top bar on desktop, safe-area aware, installable PWA with offline cache.

## 9. The complete 180-day roadmap

Special tags: `taylorize`, `nameera`, `lyric`, `detector`, `decoder`, `bracelet`, `board`, `tracklist`, `album`, `eras`, `outfit`, `catdept`, `plan`, `masterplan` (Day 137), `lorefile` (Day 57), `catfile` (Day 102), `prophecy` / `prophecyback` (Days 54 / 108), `tenminute` (Day 161), `performance` (Day 176), `final` (Day 180). Every day also has missions, English vocabulary with a “use it” check, a culture seminar, the 13 CHECK and an era bonus.

### Era I · The Baby Songwriter Era (Days 1–30)

**Objective:** Turn ordinary life into song material.  
**Skills:** journaling, observation, emotional vocabulary, songwriting, rhyme, storytelling, metaphor, specificity, diary writing  
**Visual mood:** Lined notebook paper, pencil, a coffee ring, one gold star sticker.

| Day | Title | Objective | Special |
|---|---|---|---|
| 1 | You Have Been Issued a Notebook **(full)** | Notice three tiny things. Write them down. Begin. |  |
| 2 | Find the Drama **(full)** | Something happened today. It must be transformed into content. |  |
| 3 | Specificity Is a Love Language **(full)** | Never say “a thing” when you could say “the blue mug with the chip”. |  |
| 4 | Everything Is Something Else **(full)** | Introduction to metaphor, or: why your toaster is a former lover. |  |
| 5 | Rhyme, But Make It Slant **(full)** | Fire/desire has been retired. Please hand in your rhymes. |  |
| 6 | The Diary Entry That Is Secretly a Song **(full)** | Verse, chorus, bridge. Your Tuesday has all three. |  |
| 7 | The Three-Act Inconvenience **(full)** | Turn one minor inconvenience into a three-act emotional narrative. |  |
| 8 | The Art of “I’m Fine” **(full)** | English 301: How to say “I’m fine” while clearly not being fine. |  |
| 9 | Beyond “Sad” **(full)** | Emotional vocabulary for people who are, technically, fine. |  |
| 10 | Three Chords and the Truth **(full)** | A field trip to Nashville, conducted entirely in your imagination. |  |
| 11 | The Letter You Will Not Send **(full)** | Address something that will never read it. An object is ideal. |  |
| 12 | Colour Theory for the Emotionally Committed **(full)** | Assign a colour to every day this week. Defend your choices. |  |
| 13 | The Number 13 **(full)** | Become suspicious of absolutely nothing. |  |
| 14 | The Bridge **(full)** | Learn the most important eight bars in pop. Then write some about laundry. |  |
| 15 | Your Origin Story (Abridged) | Every artist needs an origin story. Yours currently involves a commute. | taylorize |
| 16 | The Coffee Incident | Your coffee tasted different. Nobody else noticed. That is the point. |  |
| 17 | Autumn Is an Aesthetic Contract | Autumn is not a season. It is a binding agreement with knitwear. | nameera |
| 18 | The Art of Making Everything a Lore | Your friend bought a new handbag. Most people would say “cute bag”. You are no longer most people. |  |
| 19 | Someone Who Did Not Deserve a Song | Some people get a chorus. Some get a footnote. Today we decide. |  |
| 20 | The Voice Memo Era | Hum something into your phone. In public, if you dare. |  |
| 21 | Episode: You Became Insufferable (Lovingly) | A weekly recap of your descent into narrative. |  |
| 22 | Rhyming Dictionary Detox | Please return all moon/June rhymes to the front desk. | lyric |
| 23 | Thirteen, Twice | You saw the number 13 twice today. This is either a coincidence or an announcement. Investigate. |  |
| 24 | The Car Scene | Every narrative needs a scene in a car at night. Even if you take the bus. |  |
| 25 | Writing the Small Town | You need a hometown. Even if you are from a large city. Especially then. |  |
| 26 | The Unreliable Narrator (You) | Tell the same story twice: once honestly, once the way you would like it remembered. (Day 26 is two 13s. We noticed.) |  |
| 27 | Liner Notes | Albums used to come with booklets. Your day deserves one too. |  |
| 28 | The Songwriter’s Toolkit | Specificity, metaphor, rhyme, structure. You own four tools and one notebook. |  |
| 29 | Your Imaginary Debut Album | You have not made any music. You will now make an album. | album |
| 30 | Graduation: The Baby Songwriter Recital | Congratulations. You can now turn a parking ticket into a ballad. |  |

### Era II · The Easter Egg Era (Days 31–60)

**Objective:** Learn that Nothing Is a Coincidence™.  
**Skills:** pattern recognition, symbolism, visual clues, numbers, colours, timing, recurring motifs, callbacks, narrative continuity  
**Visual mood:** Newspaper clippings, highlighter yellow, red string, midnight violet.

| Day | Title | Objective | Special |
|---|---|---|---|
| 31 | Nothing Is a Coincidence™ | Your new operating system has been installed. | detector |
| 32 | The Colour Clue | Someone wore yellow. Why yellow. Why today. |  |
| 33 | Calendar Forensics | Dates are just numbers wearing a costume. |  |
| 34 | Spot the Easter Egg: Level 1 | A training post has been prepared. It is full of nonsense. Find it. | detector |
| 35 | The Countdown Clock | Nothing builds anticipation like a clock counting down to something you have not explained. |  |
| 36 | The Object That Means More | A key is never just a key. Except when it is. (It isn’t.) |  |
| 37 | Unnecessary Clues | Today you will leave clues that nobody asked for. |  |
| 38 | The Capital Letter Code | The booklet says “iT wAs NOTHING”. It was something. | decoder |
| 39 | 13:13 | Clocks are generous today. Check them at 13:13. (Day 39: three 13s. Suspicious.) |  |
| 40 | The Callback | A good callback is a joke that remembers you. |  |
| 41 | Red Alert | Someone said “red”. You are now legally required to stare into the distance for seven seconds. |  |
| 42 | Name That Era: Field Test | Aesthetics are a language. Today you become fluent. | nameera |
| 43 | The Fake-Out | A false lead is a gift to your audience. A confusing, unnecessary gift. |  |
| 44 | Spot the Easter Egg: Level 2 | The clues are smaller now. The cats are larger. | detector |
| 45 | The Fandom Lesson | A fandom is a group of people agreeing to care very much, together. | bracelet |
| 46 | Lore Maintenance | Your lore is growing. It needs a filing system. |  |
| 47 | Hide It in Plain Sight | Five missions. Each more meaningful than the last, apparently. |  |
| 48 | Conspiracy Board Orientation | Please collect red string. This is a joke. | board |
| 49 | The Numbers Station | Every number is someone’s favourite number. Find yours. |  |
| 50 | Halfway Through the Mystery | You are halfway through Era II and have become impossible at dinner parties. |  |
| 51 | Visual Clues | Look at a photo you took. Now look again, suspiciously. |  |
| 52 | Timing Is Everything | Midnight releases are not a schedule. They are a personality. |  |
| 53 | Spot the Easter Egg: Level 3 | Your eyes are now trained. Your friends are concerned. | detector |
| 54 | The Prophecy | Write something that might come true later. Lore loves a prophecy. | prophecy |
| 55 | Detective English | Learn to speak like you have solved it. |  |
| 56 | Episode: The Clue Hoarder | A weekly recap of your increasingly unbearable pattern recognition. |  |
| 57 | Turn Your Life Into Lore | Choose one completely insignificant event from yesterday. It is about to become canon. | lorefile |
| 58 | The Hidden Track | Some things are hidden at the end, after silence. Like this lesson. |  |
| 59 | The Final Case Files | Present your biggest unsolved mystery to a jury of imaginary cats. |  |
| 60 | Graduation: Licensed Easter Egg Detective | You are now licensed to find meaning in car parks. | detector |

### Era III · The Red Lipstick / Main Character Era (Days 61–90)

**Objective:** The transformation becomes visual.  
**Skills:** posture, confidence, entrances, eye contact, storytelling, personal style, visual identity, colour symbolism, presence  
**Visual mood:** Crimson, black, film stills, a spotlight with excellent timing.

| Day | Title | Objective | Special |
|---|---|---|---|
| 61 | The Red Lip Initiation | Today you begin dressing like your life has a cinematographer. | outfit |
| 62 | Posture Is a Plot Point | Stand like the camera just found you. |  |
| 63 | You Have Been Assigned a Cat | This is a preview. Full Cat Operations begin on Day 91. Please do not acquire a real cat. | catdept |
| 64 | The Bridge Is Playing | Walk into a room like the bridge of your life is playing in the background. |  |
| 65 | Outfit Era Generator | Your wardrobe already contains eras. They are hiding at the back. | outfit |
| 66 | Eye Contact, Responsibly | Not too long. Not too short. Cinematic. |  |
| 67 | Main Character Monologue | Every main character gets a speech in the rain. Rain optional. |  |
| 68 | The Signature Look | Find one visual element you will repeat until it means something. |  |
| 69 | Colour, Cinematically | Every scene has a colour. Choose yours on purpose. |  |
| 70 | Episode: The Week of Being Perceived | A weekly recap of you, being looked at, on purpose. |  |
| 71 | Storytelling at Dinner | Tell one story tonight with a beginning, a middle and a twist. |  |
| 72 | The Scarf Principle | Leave one meaningful object somewhere in your narrative. Do not retrieve it. |  |
| 73 | Confidence Without Volume | Main characters don’t shout. The soundtrack does that for them. |  |
| 74 | Personal Style Manifesto | Write the rules of your look. Then break one. |  |
| 75 | The Mirror Scene | Every film has a mirror scene. This is yours. |  |
| 76 | The Montage | Your errands deserve a montage. |  |
| 77 | Episode: The Main Character Has Entered | Weekly recap. Several rooms were entered. |  |
| 78 | All the World’s a Supermarket | The supermarket is a stage. The trolley is a prop. |  |
| 79 | Saying No Like a Main Character | A main character can decline gracefully. |  |
| 80 | Glitter Is a Mindset | Sparkle responsibly. |  |
| 81 | The Speech in the Rain | Write a speech to someone who isn’t there. Add weather. |  |
| 82 | The Red Era Assessment | An official review of your crimson progress. | nameera |
| 83 | Presence, Science-ish | Presence is 40% posture, 40% listening and 20% pretending you meant to do that. |  |
| 84 | Episode: The Cinematography of You | Weekly recap, lit from below for drama. |  |
| 85 | Main Character Energy, Distributed | Today you make someone else the main character. |  |
| 86 | Romance, Delusionally | Romantic Delusion is a skill. Train it responsibly. |  |
| 87 | The Trailer for Your Life | Write the thirty-second trailer for your current life. |  |
| 88 | The Rewrite | A main character revises. |  |
| 89 | The Situationship Opus | You must now turn a situationship into a critically acclaimed body of work. Fictional or anonymised, please. | tracklist |
| 90 | Graduation: Red Carpet Ready | You have survived the Main Character Era. The lighting has never been better. |  |

### Era IV · The Cat Lady Era (Days 91–120)

**Objective:** Achieve calm, mysterious, unbothered Cat Energy.  
**Skills:** character design, alter egos, concise communication, observation, worldbuilding, cosiness, humour, kindness to animals  
**Visual mood:** Lilac, blush, paw prints, a sunbeam that belongs to someone else.

| Day | Title | Objective | Special |
|---|---|---|---|
| 91 | Welcome to Cat Operations | We do not issue real cats. Please do not acquire a cat for this course. | catdept |
| 92 | Cat Energy Assessment | Cat Energy is calm, mysterious and unbothered. You are currently ‘golden retriever’. |  |
| 93 | Cat HR: Performance Review | The cat’s annual review is due. The cat will not attend. | catdept |
| 94 | Cat Finance | How expensive is the cat’s imaginary lifestyle? | catdept |
| 95 | The Cat Alter Ego | Who would you be if you were a cat? Be honest. The cat would be. |  |
| 96 | Cat PR | What would the cat post? | catdept |
| 97 | Why the Cat Knows More Than You | The cat has been watching. The cat has notes. |  |
| 98 | Episode: Feline Ascension | Weekly recap. The cat has reviewed it first. |  |
| 99 | Cat Security | Protect the cat from paparazzi. | catdept |
| 100 | Day 100: The Centennial Cat Gala | One hundred days. The cat is unimpressed. |  |
| 101 | Unnecessarily Specific Cat Lore | CONGRATULATIONS. You have unlocked UNNECESSARILY SPECIFIC CAT LORE. |  |
| 102 | The Cat Knows | You are given a fictional cat. It has a past. It has a secret. It knows something. | catfile |
| 103 | The Cat Easter Egg | Make a clue only a cat would understand. |  |
| 104 | Feline Strategic Communications | Cats say everything with a slow blink. Learn the slow blink. |  |
| 105 | Episode: The Cat Distribution System | Weekly recap. The universe delivered a cat. Imaginarily. |  |
| 106 | The Nap as Creative Strategy | Your best idea is behind a nap. (Scientifically: sometimes.) |  |
| 107 | The Cat Lore Crossover | Your cat meets an earlier character from your lore. |  |
| 108 | The Prophecy Returns | On Day 54 you wrote a prophecy. It is time. | prophecyback |
| 109 | Cat Ethics | A responsible cat lady does not acquire cats for content. |  |
| 110 | Cat Haiku Day | Five, seven, five. The cat would prefer silence. | lyric |
| 111 | The Cat’s Era | Your cat has entered its own era. You were not consulted. |  |
| 112 | What Is the Easter Egg? | You are no longer allowed to post anything without asking: “What is the Easter egg?” |  |
| 113 | The Cat Department Audit | The board has questions about the cat’s spending. | catdept |
| 114 | Episode: The Cat Has Opinions | Weekly recap, narrated by the cat. |  |
| 115 | Cosy Is a Discipline | Cosiness is not laziness. It is curation. |  |
| 116 | Knitwear Studies | A cardigan is a narrative device. |  |
| 117 | The Cat Sings Backing Vocals | Write a song where the cat is a background character. | lyric |
| 118 | Mysterious Past | Every cat has a past. Everyone does. Write one, kindly. |  |
| 119 | The Final Cat Report | The cat has submitted a report on your progress. It is two words long. |  |
| 120 | Graduation: Honorary Cat Lady | You have accumulated unnecessary cat lore. The cat remains unimpressed. |  |

### Era V · The Masterminds Era (Days 121–150)

**Objective:** Become strategically ridiculous.  
**Skills:** planning, branding, storytelling, audience psychology, marketing, project management, creative direction, long-term thinking  
**Visual mood:** Navy blueprint, gold ink, chess pieces, a calendar with too many circles.

| Day | Title | Objective | Special |
|---|---|---|---|
| 121 | Welcome to Strategic Overthinking | You are no longer allowed to do anything without a plan. | plan |
| 122 | The Long Game | Masterminds plan years ahead. Start with Thursday. |  |
| 123 | Branding 101 | Your brand is what people say when you have left the room. Ideally: “She had a plan.” |  |
| 124 | Audience Psychology | Know who you are talking to. Mostly they are on their phones. |  |
| 125 | Project Management, Lyrically | Gantt charts, but make them poetic. |  |
| 126 | Creative Direction | Every project needs a creative director. It is you. Sorry. |  |
| 127 | Episode: The Plan Has a Plan | Weekly recap. It was planned. |  |
| 128 | The Teaser | Reveal nothing. Imply everything. |  |
| 129 | Merch Strategy | If it exists, it can be a tote bag. |  |
| 130 | Business 401: The Empire Lesson | Turning a creative project into an empire. Start with a lemonade stand. Metaphorically. |  |
| 131 | The Rollout Calendar | Plan a thirteen-day rollout for something small. | plan |
| 132 | Strategic Overthinking: A Seminar | Overthinking is free. Strategy is overthinking with a deadline. |  |
| 133 | Thirteen-Step Plans | Every plan must have thirteen steps. Nobody asked why. (Day 133. Of course.) |  |
| 134 | Episode: The Mastermind Era | Weekly recap. Every move was intentional. |  |
| 135 | Negotiation English | Learn to ask for things like you have a rollout plan. |  |
| 136 | The Announcement Draft | Write an announcement for something mundane. Make it grand. |  |
| 137 | The Masterplan | You want to announce something. You must create a teaser, a clue, a false clue, a colour, a number, a date, an object, a post and a reveal. | masterplan |
| 138 | Reading the Room, Internet Edition | Analyse the comments. Respond to nobody. |  |
| 139 | The Vault | Some ideas aren’t ready. Put them in the vault. |  |
| 140 | Scenario Planning | Plan for three futures: good, bad and absurd. |  |
| 141 | Episode: The Plan Is Working (Is It?) | Weekly recap. Results inconclusive. Confidence high. |  |
| 142 | Data, but Romantic | Track something about your life. Then make it emotional. |  |
| 143 | Reputation Management | Before the Reputation era comes reputation management. |  |
| 144 | Mastermind Vocabulary | Speak like you planned this. |  |
| 145 | The Pivot | Sometimes the plan changes. Masterminds call that ‘the plan’. |  |
| 146 | Collaboration | Even masterminds need a featured artist. |  |
| 147 | You Have Entered Your Reputation Era | Black. Strong silhouette. Dramatic energy. Mild snake imagery (reclaimed). | outfit |
| 148 | Episode: The Mastermind Reveal | Weekly recap with a twist ending. |  |
| 149 | The Full Strategy Document | Combine every plan from Era V into one gloriously unnecessary document. |  |
| 150 | Graduation: Certified Mastermind | You planned everything. Could it have been an email? Yes. | masterplan |

### Era VI · The Eras / Final Form Era (Days 151–180)

**Objective:** Everything comes together. The Eras Tour of your life.  
**Skills:** reinvention, concept albums, rollouts, performance, public speaking, personal mythology  
**Visual mood:** Stage lights, glitter, confetti, every colour you have collected.

| Day | Title | Objective | Special |
|---|---|---|---|
| 151 | The Eras Tour of Your Life Begins | Every week is now an era. Please hydrate. | eras |
| 152 | Era 2: The Main Character | Fill in your second era. Lighting provided. | eras |
| 153 | Era 3: The Disaster | Every tour has a messy era. It usually has the best songs. | eras |
| 154 | Era 4: The Reinvention | Out of the disaster, a new colour. | eras |
| 155 | Era 5: The Woman Who Has a Plan | Planned in advance, obviously. | eras |
| 156 | Era 6: The Final Form | The last era. For now. | eras |
| 157 | Episode: Six Eras Later | Weekly recap of an entire life, reorganised by colour. |  |
| 158 | Create Your Album: The Concept | This is not a drill. It is an imaginary drill. | album |
| 159 | The Lead Single | One song must carry the entire rollout. No pressure. | album |
| 160 | The Sad Song and the Angry Song | Two songs. Two moods. One very emotionally efficient day. | lyric |
| 161 | The Ten-Minute Song Nobody Asked For | Write something unnecessarily long. The app may become concerned. | tenminute |
| 162 | The Album Cover | Original art only. No borrowed covers. The lawyers thank you. | album |
| 163 | The Tracklist Order | Track five carries the weight of the world. Choose carefully. | tracklist |
| 164 | Episode: The Album Exists (Imaginarily) | Weekly recap. Streams: zero. Feelings: platinum. |  |
| 165 | Rollout Week: The Teaser Campaign | Begin the rollout. Reveal nothing. | plan |
| 166 | Rollout Week: The Easter Egg Map | Hide five clues across your imaginary rollout. | board |
| 167 | Rollout Week: The Bracelet Drop | Design the official (imaginary) bracelets for your era. | bracelet |
| 168 | Rollout Week: The Interview | Answer the press like someone with a plan. |  |
| 169 | Rollout Week: The Countdown | Thirteen hours to go. Emotionally. |  |
| 170 | Rollout Week: The Reveal | Reveal everything. Then hint that there is more. |  |
| 171 | Episode: The Rollout | Weekly recap. The rollout went exactly to plan, which is suspicious. |  |
| 172 | Performance Week: Stage Presence | Stand like twenty minutes of confetti is about to fall on you. |  |
| 173 | Performance Week: The Setlist | Organise your life’s greatest hits by era. |  |
| 174 | Performance Week: The Speech Between Songs | Write what you say to the crowd while the costume changes. |  |
| 175 | Performance Week: The Costume Change | One minute. New era. Go. | outfit |
| 176 | Performance Week: Rehearsal | Write and rehearse your three-minute transformation talk. | performance |
| 177 | Performance Week: The Surprise Song | Every show needs one surprise. |  |
| 178 | Episode: The Final Episode Before the Final Episode | Weekly recap. Tension is high. Snacks are recommended. |  |
| 179 | Dress Rehearsal for Becoming | Tomorrow is the final era. Today you review the lore. |  |
| 180 | The Final Era | Congratulations. You are about to become TAYLOR SWIFT-ISH™. Please do not sue us. | final |
