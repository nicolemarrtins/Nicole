# The Articulate Woman

> Read widely. Think deeply. Speak clearly. Stay curious.

A personal 180-day program for becoming more articulate, better read and more confident in English — built as an installable, offline-first web app.

**Knowledge → Thinking → Language → Expression → Practice.** Every concept ends in something you *do*: write it, say it, recall it, connect it.

## What's inside

| | |
|---|---|
| **180-day curriculum** | Six months — *Find Your Voice · Become Interesting · Become Well Read · Learn to Think · Master Articulation · Become Her*. All of Month 1 (Days 1–30) fully written; every other day has a defined topic, four words, a cultural reference, a thinking question and a speaking prompt (and can be expanded into a full lesson by the optional AI mentor). |
| **Daily lessons** | Learn · Words · Culture · Say it better · Practise · Think · Write · Speak · Recall · Reflect · Go deeper. Quick (≈13 min), Standard (≈33 min) and Deep (≈48 min) modes. |
| **Speaking** | Timed challenges with microphone recording, live speech-to-text (Safari/Chrome), playback, and feedback on structure, clarity, vocabulary, repetition, fillers and nuance. Accent is never assessed. |
| **Spaced repetition** | Words, phrases and concepts return on days 1, 3, 7, 14, 30, 60 — recognise → recall → use → explain → discuss → connect. |
| **Studio** | Two weekly tracks alongside the journey. **The Senior Voice** (24 lessons): elevator pitch, leading with the answer, communication styles, cultures, executive presence, meetings, feedback, stakeholders, data storytelling, difficult conversations, AI for leaders (how LLMs work, agents & RAG, strategy, governance & the EU AI Act, AI and jobs), automation, OKRs, change, e-commerce (funnel & unit economics, marketplaces/D2C/omnichannel, experimentation, future of commerce), board updates and your leadership narrative. **The Learning Brain** (8 lessons): neuroplasticity, memory, retrieval practice, sleep, attention, habits, stress & speaking, adult language learning and neuromyths — linked from weekly reviews 1–8. Your role and industry (Settings) personalise every “Ask Claude” request. |
| **Cultural Passport** | 133 references across 14 categories, from Montaigne to Mansa Musa, Kahlo to Kahneman. Each card: why it matters, three facts, one memorable idea, connections, and *how to talk about it*. |
| **Intellectual Map** | Eight hubs (Feminism, Truth, Power, The Self, Progress, Beauty, Meaning, Voice) showing how ideas connect across disciplines. |
| **Library** | Reading Shelf (essential / recommended / optional), Cinema with after-watching questions, and *The World* — reading the news as fact / interpretation / opinion. |
| **Tools** | Say It Better ladders · "I have an idea but I don't know how to say it" (English, Spanish or Portuguese) · Conversation cards · My Words. |
| **Progress** | Ten learning indicators, weekly intellectual reports, monthly *Before vs After* benchmark, and the *180-Day Transformation*. |
| **Journal** | Private reflections, weekly reviews, milestone reflections. |

Educational design is documented in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Run it

No build step, no dependencies.

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

### Put it on your iPhone

1. In this GitHub repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / root → Save**.
2. Open the published URL in **Safari** on your iPhone.
3. Tap **Share → Add to Home Screen**. It opens full-screen and works offline.

## Your data

Everything — progress, words, journal, recordings — is stored **only on your device** (localStorage + IndexedDB for audio). Export a backup any time from **Settings**.

## Optional: the AI mentor ✦

The app is complete without it. Adding an Anthropic API key in **Settings** unlocks mentor feedback on speaking and writing, natural translations in *Find the words*, fully written lessons for Days 15–179 (cached for offline use), custom *Say It Better* ladders and a current-affairs briefing with web search. The key is stored in your browser and sent only to `api.anthropic.com`.
