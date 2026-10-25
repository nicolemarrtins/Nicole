/* Builds a playable day. Days 1–14 come from days.js; days 15–180 are assembled from the roadmap,
   their era's training format and any special tag (games, lore files, the final project). */
window.TS = window.TS || {};
(function () {
  const ERA_STATS = { 1: { songwriter: 8, storyteller: 6 }, 2: { egg: 8, storyteller: 4 }, 3: { main: 8, storyteller: 5 }, 4: { cat: 8, songwriter: 3 }, 5: { mastermind: 8, storyteller: 3 }, 6: { era: 8, songwriter: 4, main: 3 } };
  const ERA_REWARD = { 1: { songwriter: 15, storyteller: 10, era: 5 }, 2: { egg: 20, storyteller: 5, era: 5 }, 3: { main: 20, storyteller: 5, era: 5 }, 4: { cat: 20, songwriter: 5, era: 5 }, 5: { mastermind: 20, storyteller: 5, era: 5 }, 6: { era: 20, songwriter: 10, main: 10 } };
  const ERA_LORE = { 1: "journal", 2: "clue", 3: "story", 4: "cat", 5: "plan", 6: "era" };
  const ERA_SCORE = { 1: "detail", 2: "detail", 3: "story", 4: "detail", 5: "story", 6: "story" };
  const GAME_TAGS = {
    taylorize: ["taylorize", "✨ Taylorize something from today"], nameera: ["nameera", "Play Name That Era"], lyric: ["lyric", "Do one Turn-It-Into-a-Lyric challenge"],
    detector: ["detector", "Play the Easter Egg Detector"], bracelet: ["bracelet", "Make a bracelet in the Friendship Bracelet Factory"], board: ["board", "Add to the Conspiracy Board"],
    tracklist: ["tracklist", "Play the Tracklist Game"], album: ["album", "Open the Album Generator"], eras: ["eras", "Fill in My Six Eras"], outfit: ["outfit", "Get a challenge from the Outfit Era Generator"],
    catdept: ["cats", "Visit the Cat Department"], plan: ["masterplan", "Make a plan in the Masterplan Generator"]
  };
  const GAME_NAMES = { taylorize: "the Taylorizer", nameera: "Name That Era", lyric: "the Lyric Challenge", detector: "the Easter Egg Detector", bracelet: "the Bracelet Factory", board: "the Conspiracy Board", tracklist: "the Tracklist Game", album: "the Album Generator", eras: "My Six Eras", outfit: "the Outfit Generator", cats: "the Cat Department", masterplan: "the Masterplan Generator", damage: "the Emotional Damage game", lon: "Lyric or Normal?", quiz: "the Era Quiz" };
  TS.GAME_NAMES = GAME_NAMES;

  function seeded(day) { return TS.engine.rng("day-" + day); }

  function eraBonus(day, era, r) {
    if (era === 1) return { type: "fields", id: "bonus", title: "DAILY MISSION · FIND THE DRAMA", optional: true,
      fields: [{ id: "event", label: "EVENT", ph: "My headphones died mid-song." }, { id: "normal", label: "NORMAL PERSON", ph: "Annoying." }, { id: "taylor", label: "TAYLORIZED VERSION", ph: "The music left me exactly when I needed it most." }],
      lore: "story", stats: { storyteller: 6, damage: 3 }, score: "drama", scoreField: "taylor" };
    if (era === 2) {
      const ev = TS.PATTERNS[Math.floor(r() * TS.PATTERNS.length)];
      return { type: "choice", id: "bonus", title: "PATTERN DRILL", optional: true, q: ev, options: ["A. Coincidence.", "B. Interesting.", "C. There is lore here."], correct: 2,
        reveal: "Correct answer: C. Obviously. (In real life: A. Your brain is a pattern-finding machine; this course is teaching you to enjoy it, not to believe it.)", stats: { egg: 5 } };
    }
    if (era === 3) return { type: "write", id: "bonus", title: "MAIN CHARACTER TRAINING", optional: true, prompt: TS.MAIN_SCENES[Math.floor(r() * TS.MAIN_SCENES.length)], rows: 3, lore: "story", stats: { main: 6 }, score: "story" };
    if (era === 4) return { type: "write", id: "bonus", title: "🐈 CAT ENERGY CHECK", optional: true, prompt: TS.CAT_PROMPTS[Math.floor(r() * TS.CAT_PROMPTS.length)], rows: 3, lore: "cat", stats: { cat: 8 }, counter: "cat" };
    if (era === 5) return { type: "fields", id: "bonus", title: "MASTERPLAN WARM-UP · plan something trivial", optional: true,
      fields: [{ id: "what", label: "The trivial thing", ph: "Changing my profile picture" }, { id: "color", label: "Colour", ph: "Dusty blue" }, { id: "number", label: "Number", ph: "13 (obviously)" }, { id: "false", label: "False lead", ph: "Post a photo of a ladder" }],
      lore: "plan", stats: { mastermind: 8 }, score: "master" };
    const wk = TS.FINAL_WEEKS.find(function (w) { return day >= w.from && day <= w.to; });
    return { type: "note", text: (wk ? wk.title + ". " : "") + "The Eras Tour of your life is in progress. Please hydrate between eras." };
  }

  function special(tag, day, row, era) {
    if (tag === "lorefile") return [{ type: "fields", id: "lorefile", mission: "Build the lore file for one insignificant event from yesterday", title: "LORE FILE",
      fields: [{ id: "event", label: "EVENT", ph: "My coffee tasted different." }, { id: "interp", label: "INTERPRETATION", ph: "Something has changed at the café. Or in me." }, { id: "symbol", label: "SYMBOL", ph: "A paper cup with a smudged name." },
        { id: "back", label: "BACKSTORY", ph: "I have ordered the same thing for 412 days." }, { id: "callback", label: "FUTURE CALLBACK", ph: "On Day 100 I will order something new." }, { id: "album", label: "ALBUM IT BELONGS TO", ph: "Ordinary Tragedies (Deluxe)" }, { id: "track", label: "TRACK NUMBER", ph: "5" }],
      lore: "story", stats: { storyteller: 15, egg: 10 }, score: "story" }];
    if (tag === "catfile") return [{ type: "fields", id: "catfile", mission: "Build the lore of your fictional cat", title: "CAT FILE · CLASSIFIED",
      fields: [{ id: "name", label: "Name", ph: "Duchess Fog" }, { id: "personality", label: "Personality", ph: "Aloof, theatrical, secretly sentimental" }, { id: "color", label: "Favourite colour", ph: "Lavender" }, { id: "secret", label: "Secret", ph: "Can read. Has read your diary." }, { id: "past", label: "Mysterious past", ph: "Lived above a bookshop and only ate poetry" }],
      lore: "cat", stats: { cat: 15 }, counter: "cat" },
      { type: "write", id: "knows", mission: "Write what the cat knows that everyone else doesn’t", prompt: "What does the cat know that everyone else doesn’t?", ph: "The cat knows which drawer the letters are in.", rows: 4, lore: "cat", stats: { cat: 10, storyteller: 5 }, counter: "cat" }];
    if (tag === "masterplan") return [{ type: "fields", id: "plan", mission: "Build your full masterplan", title: "THE MASTERPLAN",
      fields: [{ id: "what", label: "What you want to announce", ph: "I’m starting a book club" }, { id: "teaser", label: "TEASER", ph: "A photo of an empty chair" }, { id: "clue", label: "CLUE", ph: "13 books stacked in the background" }, { id: "false", label: "FALSE CLUE", ph: "A ladder. Means nothing." }, { id: "color", label: "COLOUR", ph: "Forest green" },
        { id: "number", label: "NUMBER", ph: "13" }, { id: "date", label: "DATE", ph: "The 13th, obviously" }, { id: "object", label: "OBJECT", ph: "A brass key" }, { id: "post", label: "SOCIAL POST", ph: "chapter one. 🗝️" }, { id: "reveal", label: "FINAL REVEAL", ph: "First meeting: Thursday, my flat, bring snacks." }],
      lore: "plan", stats: { mastermind: 25 }, score: "master", counter: "plans" }];
    if (tag === "tenminute") return [{ type: "write", id: "long", mission: "Write the longest piece you can (aim for 300+ words)", prompt: "The ten-minute version. Write about anything — but keep going. Past the point of necessity. That’s where the bridge is.", rows: 14, lore: "song", stats: { songwriter: 25, damage: 10 }, score: "lyric", minWords: 150 },
      { type: "write", id: "cut", mission: "Choose the single best line", prompt: "Copy the single best line from your ten-minute version.", rows: 2, lore: "song", stats: { songwriter: 5 } }];
    if (tag === "performance") return [{ type: "timer", id: "talk", mission: "Rehearse your three-minute talk with the timer", seconds: 180 },
      { type: "write", id: "script", mission: "Write the outline of your three-minute transformation talk", prompt: "Outline: 1) who you were on Day 1, 2) the three moments that changed you, 3) who you are now, 4) the Easter egg.", rows: 8, lore: "story", stats: { main: 15, storyteller: 10 }, score: "story" }];
    if (tag === "final") return finalProject();
    return null;
  }

  function finalProject() {
    return [
      { type: "lesson", title: "THE FINAL ERA · Final project", paras: ["Everything comes together. You have notes, colours, clues, cats, bracelets, plans, an album and six eras. Today you assemble your final form.", "Fill every section. Then open the final screen. Bring tissues, or at least a cardigan."] },
      { type: "fields", id: "f_era", mission: "MY ERA", title: "MY ERA", fields: [{ id: "name", label: "Name", ph: "The Strategically Delusional Era" }, { id: "color", label: "Colour", ph: "Crimson and gold" }, { id: "symbol", label: "Symbol", ph: "A red umbrella with one broken spoke" }, { id: "aesthetic", label: "Aesthetic", ph: "Notebooks, stage lights, cardigans, a cat in the corner" }], lore: "era", stats: { era: 20 } },
      { type: "fields", id: "f_album", mission: "MY ALBUM", title: "MY ALBUM", fields: [{ id: "title", label: "Title", ph: "(from your Album Generator, or new)" }, { id: "tracks", label: "Tracklist (one per line)", ph: "1. The 8:13\n2. Same Table, Different Weather\n…", area: true }, { id: "lead", label: "Lead single", ph: "The Red Umbrella" }], lore: "song", stats: { songwriter: 20 } },
      { type: "write", id: "f_story", mission: "MY STORY · What changed?", prompt: "MY STORY · What changed in 180 days? Be specific. Be dramatic. Be honest.", rows: 6, lore: "story", stats: { storyteller: 20 }, score: "story" },
      { type: "write", id: "f_song", mission: "MY SONG · Write one original song or lyrical piece", prompt: "MY SONG · Write one original song or lyrical piece. Verse, chorus, bridge. Your own words only.", rows: 14, lore: "song", stats: { songwriter: 30 }, score: "lyric" },
      { type: "fields", id: "f_eggs", mission: "MY EASTER EGGS · Hide 5 meaningful clues", title: "MY EASTER EGGS", fields: [1, 2, 3, 4, 5].map(function (i) { return { id: "e" + i, label: "Clue " + i + " (and what it means)", ph: i === 1 ? "The number 13 in the tracklist — the day I found the hidden 13" : "" }; }), lore: "clue", stats: { egg: 25 } },
      { type: "write", id: "f_plan", mission: "MY MASTERPLAN · Explain the rollout", prompt: "MY MASTERPLAN · How would you roll out your era? Teasers, clues, dates, the reveal.", rows: 6, lore: "plan", stats: { mastermind: 25 }, counter: "plans" },
      { type: "timer", id: "f_perf", mission: "MY FINAL PERFORMANCE · Give a 3-minute presentation", seconds: 180, text: "Stand up. Give a three-minute presentation about your transformation — to a mirror, a friend, a cat or your phone camera. Who you were, what changed, who you are now, and the Easter egg." },
      { type: "game", game: "final", mission: "Open the final screen", label: "Open the final screen", text: "You know what to do." }
    ];
  }

  function build(day) {
    const row = TS.ROADMAP[day - 1], era = TS.eraOf(day).n, r = seeded(day);
    const steps = [];
    steps.push({ type: "lesson", title: "Day " + day + " · " + row.title, paras: [row.objective, TS.eraOf(day).motto] });
    let sp = special(row.tag, day, row, era);
    if (sp && row.tag === "final") return { title: row.title, objective: row.objective, difficulty: 5, minutes: 60, intro: "This is it.", reward: { era: 40, songwriter: 20, storyteller: 20, main: 20, mastermind: 20, egg: 20, cat: 10 }, outro: "Congratulations. You survived 180 days.", steps: sp.concat([{ type: "thirteen" }]) };
    if (row.tag === "prophecyback") {
      const p = (TS.store.state.answers[54] || {});
      steps.push({ type: "recall", from: 54, text: p.m0 || "" });
    }
    if (sp) sp.forEach(function (s) { steps.push(s); });
    else row.missions.forEach(function (m, i) {
      steps.push({ type: "write", id: "m" + i, mission: m, prompt: m + ".", rows: 3, lore: row.tag === "lyric" ? "song" : ERA_LORE[era], stats: ERA_STATS[era], score: i === 0 ? (row.tag === "lyric" ? "lyric" : ERA_SCORE[era]) : null, counter: era === 4 ? "cat" : null });
    });
    if (row.tag === "decoder") steps.push({ type: "decoder", id: "decoder", mission: "Hide a message and decode it" });
    const g = GAME_TAGS[row.tag];
    if (g) steps.push({ type: "game", game: g[0], mission: g[1], label: "Open " + GAME_NAMES[g[0]], text: "" });
    steps.push(eraBonus(day, era, r));
    steps.push({ type: "culture", title: "Culture seminar", paras: [row.culture] });
    steps.push({ type: "vocab", id: "words", mission: "Use one of today’s words in a sentence", words: row.words.map(function (w) { return { w: w.w, d: w.d }; }), prompt: "Use one of today’s words or phrases in a sentence about your life." });
    steps.push({ type: "thirteen" });
    steps.push({ type: "note", text: TS.HUMOR[Math.floor(r() * TS.HUMOR.length)] });
    const missions = steps.filter(function (s) { return s.mission; }).length;
    return { title: row.title, objective: row.objective, difficulty: Math.min(5, 2 + Math.floor((day - 1) / 45) + (row.tag ? 1 : 0)), minutes: 8 + missions * 3 + (day % 13 === 0 ? 13 : 0),
      intro: row.objective, reward: ERA_REWARD[era], outro: TS.HUMOR[Math.floor(r() * TS.HUMOR.length)] + " Day " + day + " complete.", steps: steps };
  }

  const cache = {};
  TS.getDay = function (day) {
    day = Math.max(1, Math.min(180, day | 0));
    if (day === 108 || !cache[day]) {
      const base = TS.DAYS[day] ? TS.DAYS[day] : build(day);
      cache[day] = Object.assign({ day: day, era: TS.eraOf(day), row: TS.ROADMAP[day - 1] }, base);
    }
    return cache[day];
  };
  TS.requiredSteps = function (d) {
    return d.steps.filter(function (s) { return s.mission || s.type === "thirteen"; });
  };
})();
