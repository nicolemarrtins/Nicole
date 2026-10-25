# How to Become Taylor Swift in 180 Days

> A ridiculously serious Taylor Swift transformation simulator. *Unofficial parody — please do not sue us.*

An installable, offline-first web app that treats becoming “Taylor Swift-ish™” as a formal 180-day curriculum: six training eras, daily missions, songwriting craft, English vocabulary, real culture seminars, Easter eggs, an alarming relationship with the number 13, cats (imaginary), friendship bracelets, an album generator and a final performance.

50% genuinely useful learning. 50% absurd parody. That contrast is the point.

## What’s inside

- **180-day roadmap** across six eras: Baby Songwriter · Easter Egg · Red Lipstick / Main Character · Cat Lady · Masterminds · Eras / Final Form. **Days 1–14 are written in full**; every other day is playable, with missions, vocabulary, a culture note, a 13 CHECK and an era-specific bonus.
- **Mini-games:** Spot the Easter Egg · Taylorize the Situation · Name That Era · Build the Album · Lyric or Normal Sentence? · Masterplan · Friendship Bracelet Factory · Emotional Damage · Tracklist Game · Turn It Into a Lyric · What Era Are You In? · Outfit Era Generator · random Breaking News events.
- **Creative tools:** Album Generator with original abstract canvas covers · Taylor Swift Cat Operations (HR, Finance, PR, Lore, Security) · My Six Eras · Conspiracy Board (THIS IS A JOKE).
- **Memory:** a searchable lore database, recurring-motif callbacks (“THE RED UMBRELLA HAS RETURNED.”), the 13 Incidents timeline, *Previously on…* recaps and weekly episodes.
- **Progress:** Taylorification score, skill bars, the Taylorification Tree, 32 achievements, the Taylor Swift School curriculum and a very theatrical final screen.

The full design (systems, scoring, data model, visual system and the complete roadmap) is in [`DESIGN.md`](DESIGN.md).

## Run it

No build step, no dependencies. From the repository root:

```bash
python3 -m http.server 8000   # then open http://localhost:8000/swift/
```

With GitHub Pages enabled for this repo, it lives at `https://<your-username>.github.io/<repo>/swift/`. On iPhone: open it in Safari → Share → Add to Home Screen.

## Your data

Everything is saved in your browser (localStorage). Closing the browser erases nothing. Export a backup from **Settings**.

## Legal / creative boundary

This is an unofficial, fan-inspired parody and creative-writing game. It is not affiliated with, endorsed by or connected to Taylor Swift. It uses no official logos, album artwork or song lyrics — only short references, titles and original parody writing. You play a fictional transformation game; the app never pretends to be Taylor.
