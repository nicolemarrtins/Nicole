# The Articulate Woman — Educational & Technical Architecture

> Read widely. Think deeply. Speak clearly. Stay curious.

This document was written *before* the interface. The app is built around it.

---

## 1. Learning objectives

The program converts **knowledge → thinking → language → expression → practice**.
Every unit of content must end in something the learner *does* with it.

| Strand | By Day 180 the learner can… | How the app gets her there |
|---|---|---|
| **English** | use precise rather than generic words; vary sentence structure; express nuance, uncertainty, agreement and disagreement naturally | Golden-rule vocabulary cards, *Say It Better* ladders, constraint drills (e.g. "answer without *I think*"), spaced recall |
| **Culture** | hold a short, accurate conversation about ~90 thinkers, works, movements and events from many cultures | Cultural Passport cards (each with "How to talk about it"), Intellectual Map, Reading Shelf, Cinema |
| **Thinking** | form an opinion, name its assumptions, give an example, consider a counterargument, qualify a claim | *Think* questions with angles, argument frameworks (Month 5), steelman drills |
| **Communication** | tell a story, keep a conversation going, explain a complex idea simply, speak for 2 minutes on an unfamiliar topic | Timed speaking challenges with recording, transcription and feedback; Month 6 simulations |

Non-goals: sounding "fancy", memorising lists, accent reduction, academic expertise.

## 2. Six-month curriculum

| Month | Theme | Shift |
|---|---|---|
| 1 | **Find Your Voice** — self-expression foundations | "I know English" → "I can express myself" |
| 2 | **Become Interesting** — conversation & social intelligence | "I can answer" → "I can hold a conversation" |
| 3 | **Become Well Read** — history, art, literature | "I've heard of it" → "I can say why it matters" |
| 4 | **Learn to Think** — philosophy, psychology, economics, society | "I have opinions" → "I have frameworks" |
| 5 | **Master Articulation** — rhetoric & argument | "I can explain" → "I can persuade with nuance" |
| 6 | **Become Her** — simulations & integration | "I've practised" → "I can do it in the real world" |

The full day-by-day map lives in `js/data/curriculum.js`.

## 3. Weekly rhythm & day types

* **Lesson days** — one concept, real cultural substance, active practice.
* **Weekly review** every 7th day (7, 14 … 175) — recall of the week, reflection, a speaking challenge that must reuse the week's words, and an auto-generated *Weekly Intellectual Report*.
* **Milestones** on Days 30, 60, 90, 120, 150, 180 — the *Before vs After* benchmark question ("What do you think makes someone successful?") is asked again and compared with Day 1, plus a milestone reflection (no badges).
* **Simulations** (Month 6) — dinner party, meeting, museum, debate, unfamiliar topic, etc.
* **Day 180** — the seven-part *Articulate Woman Test* and the *180-Day Transformation* report.

## 4. Daily lesson anatomy

| Section | Purpose | Quick | Standard | Deep |
|---|---|:-:|:-:|:-:|
| Learn | the concept, with natural phrases and their tone | ✓ | ✓ | ✓ |
| Vocabulary | 3–8 words taught by the Golden Rule | 3 words | ✓ | ✓ |
| Culture | one reference → added to the Passport | | ✓ | ✓ |
| Say It Better | basic → articulate ladder, then her own version | | ✓ | ✓ |
| Exercise | transformation practice with model answers | | ✓ | ✓ |
| Think | a genuinely open question, with angles | | ✓ | ✓ |
| Express | written answer, analysed | | ✓ | ✓ |
| Speak | timed spoken answer, recorded, analysed | ✓ | ✓ | ✓ |
| Recall | retrieval of earlier material | ✓ | ✓ | ✓ |
| Reflect | one personal question → Journal | ✓ | ✓ | ✓ |
| Go deeper | extension reading & longer task | | | ✓ |

Quick ≈ 10–15 min · Standard ≈ 25–35 min · Deep ≈ 45–60 min.

**Golden rule for vocabulary:** word → pronunciation → definition → nuance → synonyms → *how it differs from them* → example → natural conversation → "your turn" sentence → returns later via spaced repetition.

## 5. Review system (spaced repetition)

Every word, phrase and concept she completes becomes a review item with a **stage**:

| Stage | Next review | Task type |
|---|---|---|
| 0 new | +1 day | Recognise: what does it mean? |
| 1 | +3 days | Recall: produce it from the definition |
| 2 | +7 days | Use: write a sentence |
| 3 | +14 days | Explain: explain it / its nuance in your own words |
| 4 | +30 days | Discuss: use it in a spoken answer |
| 5 | +60 days | Encounter: connect it to another topic |
| 6 | mastered | — |

Status shown to the learner: **new** (stage 0) · **learning** (1–2) · **familiar** (3–4) · **mastered** (5–6) · **needs review** (overdue > 3 days or failed twice).
"Again" drops an item two stages; "Hard" keeps the stage and shortens the interval; "Got it" advances one; "Easy" advances two.

Review also appears *inside* lessons (the Recall section) and inside speaking: words from **My Words** are suggested as "try to use", and the analyser counts which ones she actually used (feeding "times used").

## 6. Personalisation

The app records lightweight signals, all local:

* interest rating after each lesson (per category)
* words overused in speaking/writing (e.g. *I think*, *very*, *really*, *thing*)
* filler rate, words-per-minute, lexical variety
* review accuracy per item
* Passport coverage per category

These drive: "Suggested for you" on Home (weakest culture category → a card or book), a **constraint challenge** added to the Speak section when an overused word is detected ("this time, no *I think*"), and review-queue ordering (struggling items first).

## 7. Content model

```
User        { name, startDate, mode, goals[], settings{}, aiKey? }
Lesson      { day, month, type, title, kicker, cats[], skills[], difficulty, minutes,
              why, learn{body[],phrases[]}, vocab[], culture(cardId), sayBetter{},
              exercise{}, think{}, express{}, speak{prompt,seconds,structure[]},
              recall[], reflect, deep{} }
Vocabulary  { word, pron, pos, definition, nuance, synonyms[], distinction, example,
              conversation, prompt }
ReviewItem  { id, kind(word|phrase|concept), front, back, stage, due, lapses, history[] }
Card        { id, name, cat, period, origin, why, facts[3], idea, related[], talk[] }
Progress    { completed{day:{date,mode,rating}}, answers{}, speaking[], reviews[] }
Journal     { id, date, prompt, text, kind(reflection|weekly|milestone|free) }
MyWord      { word, meaning, pron, example, added, uses, stage }
```

Days 1–29 are fully hand-written (`lessons-a.js` … `lessons-d.js`); Day 30 is the Month 1 milestone. Days 31–180 are defined
in the curriculum map with title, focus, four defined words, a cultural reference,
a thinking question and a speaking prompt; the app renders them as complete lessons, and —
if the learner adds an Anthropic API key — can expand any of them into a fully written
lesson that is cached locally for offline use.

## 8. Interaction model

* **Today** is the next uncompleted day. There is no lock: any day can be opened from the Journey.
* Missing days is never punished. After ≥ 2 days away: *"Welcome back. Let's continue."*
* Every written or spoken answer gets **immediate local feedback** (structure markers, fillers,
  repetition, overused words, lexical variety, hedging/nuance markers, My Words used).
  With an API key, a richer mentor-style review is available (structure, clarity, vocabulary,
  repetition, fillers, grammar, naturalness, nuance, confidence + a *Say it better* rewrite).
  Accent is never assessed.
* Speaking uses the browser's microphone (MediaRecorder) and speech recognition where
  available (Safari iOS 14.5+, Chrome). Typing is always available as a fallback.

## 9. UI architecture

Single-page app, hash router, no framework, no build step.

```
index.html            app shell, nav
css/styles.css        design tokens (ivory / espresso / taupe / burgundy accent), components
js/store.js           persistence (localStorage + IndexedDB for audio), SRS, derived stats
js/analysis.js        local text/speech analysis
js/ai.js              optional Claude API integration (graceful offline failure)
js/data/*.js          curriculum, lessons, passport, library, tools content
js/views.js           page renderers
js/app.js             router, events, speech, timers
sw.js                 offline cache (cache-first for app shell)
manifest.webmanifest  installable PWA
```

Navigation: Home · Journey · Culture · Library · Words · Speak · Progress · Journal · Settings
(mobile: five tabs + "More").
