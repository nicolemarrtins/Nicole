/* State, persistence, scoring, lore memory, Easter eggs and achievements. Everything stays on this device. */
window.TS = window.TS || {};
(function () {
  const KEY = "taylorswiftish.state.v1";
  const E = TS.engine;
  const STATS = [
    { k: "songwriter", label: "Songwriter", emoji: "🎤" },
    { k: "storyteller", label: "Storyteller", emoji: "📖" },
    { k: "egg", label: "Easter Egg Detective", emoji: "🧩" },
    { k: "main", label: "Main Character", emoji: "💅" },
    { k: "cat", label: "Cat Energy", emoji: "🐈" },
    { k: "romance", label: "Romantic Delusion", emoji: "💌" },
    { k: "mastermind", label: "Mastermind", emoji: "🧠" },
    { k: "era", label: "Era Awareness", emoji: "🎬" }
  ];
  const CORE = ["songwriter", "storyteller", "egg", "main", "cat", "mastermind", "era"];

  function iso(d) { d = d || new Date(); const z = new Date(d.getTime() - d.getTimezoneOffset() * 60000); return z.toISOString().slice(0, 10); }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  function fresh() {
    return {
      v: 1, created: iso(), name: "",
      xp: { songwriter: 40, storyteller: 40, egg: 0, main: 0, cat: 0, romance: 10, mastermind: 0, era: 0 },
      damage: 30,
      counts: { bracelets: 0, clues: 0, albums: 0, metaphors: 0, thirteens: 0, eggs: 0, journal: 0, creative: 0, culture: 0, story: 0, cat: 0, words: 0, taylorize: 0, plans: 0, callbacks: 0, games: 0, events: 0, longest: 0, eras: 0 },
      unlocked: 1, completed: {}, answers: {}, lore: [], motifs: {}, incidents: [], eggs: {}, achievements: {},
      bracelets: [], albums: [], eras: [{}, {}, {}, {}, {}, {}], cats: [], board: null, plans: [], log: [], snapshots: {},
      played: {}, detector: {}, writeDays: {}, settings: { pacing: "free" }, lastVisit: null, prevVisit: null,
      lastEvent: null, quiz: null, episodes: {}, damageDate: iso(), callbacksToday: {}
    };
  }

  let state;
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "null");
    state = Object.assign(fresh(), raw || {});
    if (raw) { state.counts = Object.assign(fresh().counts, raw.counts || {}); state.xp = Object.assign(fresh().xp, raw.xp || {}); }
  } catch (e) { state = fresh(); }

  let timer = null;
  function save() { clearTimeout(timer); timer = setTimeout(flush, 120); }
  function flush() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { TS.toast && TS.toast("Storage is full. Export a backup in Settings."); }
  }
  window.addEventListener("pagehide", flush);
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") flush(); });

  /* ── visits & emotional damage decay (it should never become encouragement to ruminate) ── */
  function visit() {
    const now = Date.now();
    state.prevVisit = state.lastVisit; state.lastVisit = now;
    const today = iso();
    if (state.damageDate !== today) {
      const days = Math.max(1, Math.round((new Date(today) - new Date(state.damageDate)) / 86400000));
      state.damage = Math.max(5, Math.round(state.damage * Math.pow(0.85, days)));
      state.damageDate = today; state.callbacksToday = {};
    }
    save();
  }

  /* ── scoring ── */
  function pct(k) { return Math.round(1000 * (1 - Math.exp(-(state.xp[k] || 0) / 700))) / 10; }
  function stars(p) { return p < 1 ? 0 : Math.min(5, Math.ceil(p / 20)); }
  function daysDone() { return Object.keys(state.completed).length; }
  function overall() {
    const avg = CORE.reduce(function (n, k) { return n + pct(k); }, 0) / CORE.length;
    const v = 0.3 + avg * 0.42 + (daysDone() / 180) * 57.5;
    return Math.min(state.completed[180] ? 100 : 99.9, Math.round(v * 10) / 10);
  }
  function damageLabel(v) {
    v = v == null ? state.damage : v;
    const L = TS.DAMAGE_LEVELS; for (let i = 0; i < L.length; i++) if (v <= L[i].max) return L[i].label;
    return L[L.length - 1].label;
  }
  function adjustDamage(n) { state.damage = Math.max(0, Math.min(100, Math.round(state.damage + n))); }

  function award(stats, day) {
    if (!stats) return "";
    const parts = [];
    Object.keys(stats).forEach(function (k) {
      const v = stats[k]; if (!v) return;
      if (k === "damage") { adjustDamage(v); parts.push("🍷 +" + v + " Damage"); return; }
      state.xp[k] = (state.xp[k] || 0) + v;
      const s = STATS.find(function (x) { return x.k === k; });
      parts.push((s ? s.emoji : "⭐") + " +" + v + " " + (s ? s.label : k));
    });
    save();
    return parts.join(" · ");
  }
  function count(k, n) { state.counts[k] = (state.counts[k] || 0) + (n == null ? 1 : n); save(); }

  /* ── days & pacing ── */
  function currentDay() { return Math.min(180, state.unlocked); }
  function completedToday() {
    const t = iso(); let max = 0;
    Object.keys(state.completed).forEach(function (d) { if (state.completed[d] === t) max = Math.max(max, +d); });
    return max;
  }
  function status(d) {
    if (state.completed[d]) return "done";
    if (d > state.unlocked) return "locked";
    if (state.settings.pacing === "daily") { const t = completedToday(); if (t && d > t) return "tomorrow"; }
    return "open";
  }
  function answers(d) { return state.answers[d] || (state.answers[d] = {}); }
  function setAnswer(d, id, v) { answers(d)[id] = v; save(); }
  function completeDay(d, reward) {
    if (state.completed[d]) return null;
    const before = overall();
    state.completed[d] = iso();
    state.unlocked = Math.max(state.unlocked, Math.min(180, d + 1));
    const msg = award(reward, d);
    count("culture");
    state.snapshots[d] = overall();
    log("day", "Completed Day " + d + ": " + TS.getDay(d).title, d);
    save();
    return { msg: msg, before: before, after: overall() };
  }

  /* ── lore memory ── */
  function log(type, text, day) { state.log.push({ day: day || currentDay(), type: type, text: String(text).slice(0, 160), date: iso() }); if (state.log.length > 1500) state.log.shift(); save(); }
  function addLore(entry) {
    const day = entry.day || currentDay();
    const e = { id: uid(), day: day, type: entry.type || "memory", title: entry.title || "", text: String(entry.text || "").slice(0, 4000), date: iso() };
    // replace an earlier version of the same answer instead of duplicating it
    if (entry.src) { e.src = entry.src; state.lore = state.lore.filter(function (x) { return x.src !== entry.src; }); }
    state.lore.push(e);
    const cb = trackMotifs(e.title + " " + e.text, day);
    if (E.analyze(e.text).has13 && !(entry.src && state.incidents.some(function (i) { return i.src === entry.src; }))) {
      addIncident("You wrote ‘13’ in: “" + e.text.replace(/\s+/g, " ").slice(0, 70) + "…”", "writing", day, entry.src);
    }
    const n = E.words(e.text).length;
    if (n > state.counts.longest) state.counts.longest = n;
    state.writeDays[iso()] = true;
    save();
    return cb;
  }
  function trackMotifs(text, day) {
    const found = E.motifs(text); let best = null;
    found.forEach(function (m) {
      const rec = state.motifs[m.key];
      if (rec && rec.days.indexOf(day) < 0 && !state.callbacksToday[m.key]) {
        const gap = day - rec.days[rec.days.length - 1];
        if (m.strong || gap >= 3) { if (!best || (m.strong && !best.strong) || rec.days.length > best.rec.days.length) best = { key: m.key, strong: m.strong, rec: rec }; }
      }
    });
    found.forEach(function (m) {
      const rec = state.motifs[m.key] || (state.motifs[m.key] = { first: day, days: [], strong: m.strong, count: 0 });
      rec.count++; if (rec.days.indexOf(day) < 0) rec.days.push(day);
    });
    if (best) {
      state.callbacksToday[best.key] = true; count("callbacks");
      log("callback", "“" + best.key + "” returned (first seen Day " + best.rec.first + ")", day);
      return { key: best.key, first: best.rec.first, times: best.rec.days.length };
    }
    return null;
  }
  function recurringMotifs() {
    return Object.keys(state.motifs).map(function (k) { return Object.assign({ key: k }, state.motifs[k]); })
      .filter(function (m) { return m.days.length > 1; })
      .sort(function (a, b) { return (b.strong - a.strong) || (b.days.length - a.days.length) || (b.count - a.count); });
  }
  function unresolved() {
    return Object.keys(state.motifs).map(function (k) { return Object.assign({ key: k }, state.motifs[k]); })
      .filter(function (m) { return m.days.length === 1 && m.strong; }).sort(function (a, b) { return b.first - a.first; });
  }

  /* ── the 13 system ── */
  function addIncident(text, src, day, ref) {
    state.incidents.push({ day: day || currentDay(), text: text, src: ref || src || "", kind: src || "report", date: iso() });
    count("thirteens");
    save();
  }

  /* ── Easter eggs (hidden 13s, detector clues, global clues) ── */
  const GLOBAL_EGGS = [
    ["home-star", "The star in the corner of the home page"], ["roadmap-13", "Day 13 on the roadmap, which was always going to be special"],
    ["tree-6", "Step 6 of the Taylorification Tree"], ["settings-version", "The version number, v1.3"],
    ["lore-empty", "A clue inside your own lore archive"], ["cat-badge", "The Cat Security badge"],
    ["album-corner", "The corner of your album cover"], ["bracelet-bead", "The thirteenth bead"],
    ["board-pin", "The pin on the conspiracy board"], ["school-final", "The final exam question"],
    ["about-disclaimer", "The legal disclaimer, which was hiding a 13"], ["progress-damage", "The emotional damage meter at exactly 13"],
    ["final-curtain", "The final curtain"]
  ];
  function findEgg(id, label) {
    if (state.eggs[id]) return false;
    state.eggs[id] = { day: currentDay(), label: label || id, date: iso() };
    count("eggs"); award({ egg: 12 }); log("egg", "Found an Easter egg: " + (label || id));
    return true;
  }

  /* ── achievements ── */
  const ACH = [
    ["first", "🏆 DAY ONE", "You opened the notebook. There is no going back.", function (s) { return s.completed[1]; }],
    ["notebook", "🏆 THE NOTEBOOK", "You wrote something on 7 different days.", function (s) { return Object.keys(s.writeDays).length >= 7; }],
    ["three-act", "🏆 THREE-ACT INCONVENIENCE", "You turned a minor inconvenience into a three-act narrative.", function (s) { return s.completed[7]; }],
    ["bridge", "🏆 THE BRIDGE", "You successfully turned a minor inconvenience into an emotional climax.", function (s) { return s.completed[14]; }],
    ["email", "🏆 THIS COULD HAVE BEEN AN EMAIL", "You transformed an ordinary message into a dramatic narrative.", function (s) { return s.counts.taylorize >= 1; }],
    ["thirteen", "🏆 13 AGAIN", "You encountered the number 13.", function (s) { return s.counts.thirteens >= 1; }],
    ["thirteen13", "🏆 STATISTICALLY INSIGNIFICANT", "You logged 13 incidents involving 13.", function (s) { return s.counts.thirteens >= 13; }],
    ["unbearable", "🏆 BEGINNING TO BECOME UNBEARABLE", "You found the 13 hidden on Day 13.", function (s) { return s.eggs["day-13"]; }],
    ["callback", "🏆 THE CALLBACK", "Something you wrote came back. The lore remembers.", function (s) { return s.counts.callbacks >= 1; }],
    ["metaphors", "🏆 METAPHOR MACHINE", "You turned 13 people or objects into metaphors. They were not consulted.", function (s) { return s.counts.metaphors >= 13; }],
    ["mastermind", "🏆 THE MASTERMIND", "You planned something unnecessarily far in advance.", function (s) { return s.counts.plans >= 1; }],
    ["catdist", "🏆 CAT DISTRIBUTION SYSTEM", "You accumulated 10 cat references.", function (s) { return s.counts.cat >= 10; }],
    ["catlore", "🏆 UNNECESSARILY SPECIFIC CAT LORE", "You know more about an imaginary cat than about your neighbours.", function (s) { return s.completed[101] || s.lore.filter(function (l) { return l.type === "cat"; }).length >= 5; }],
    ["bracelet1", "🏆 FIRST BEAD", "You made a friendship bracelet.", function (s) { return s.counts.bracelets >= 1; }],
    ["diplomat", "🏆 FRIENDSHIP DIPLOMAT", "You created 25 virtual bracelets.", function (s) { return s.counts.bracelets >= 25; }],
    ["eggs5", "🏆 SOMETHING IS GOING ON", "You found 5 Easter eggs.", function (s) { return s.counts.eggs + s.counts.clues >= 5; }],
    ["lore100", "🏆 LORE DETECTIVE", "You found 100 Easter eggs.", function (s) { return s.counts.eggs + s.counts.clues >= 100; }],
    ["redlip", "🏆 THE RED LIP", "You entered your Main Character Era.", function (s) { return s.unlocked >= 61; }],
    ["debut", "🏆 DEBUT ALBUM", "You imagined an entire album. Streams: zero. Vision: platinum.", function (s) { return s.counts.albums >= 1; }],
    ["ten", "🏆 TEN MINUTES", "You wrote something so long the app became concerned (500+ words).", function (s) { return s.counts.longest >= 500; }],
    ["board", "🏆 RED STRING THEORY", "You connected five clues on the Conspiracy Board. This is a joke.", function (s) { return s.board && s.board.links && s.board.links.length >= 5; }],
    ["quiz", "🏆 ERA-AWARE", "You found out which era you are in.", function (s) { return !!s.quiz; }],
    ["breaking", "🏆 BREAKING NEWS", "You responded to three random events.", function (s) { return s.counts.events >= 3; }],
    ["words", "🏆 FLUENT IN FINE", "You used 25 new English words in your own sentences.", function (s) { return s.counts.words >= 25; }],
    ["culture", "🏆 CULTURED (ALLEGEDLY)", "You attended 30 culture seminars.", function (s) { return s.counts.culture >= 30; }],
    ["eras6", "🏆 SIX ERAS", "You designed all six eras of your life.", function (s) { return erasFilled() >= 6; }],
    ["era1", "🏆 BABY SONGWRITER (GRADUATED)", "You completed Era I.", function (s) { return s.completed[30]; }],
    ["era2", "🏆 LICENSED DETECTIVE", "You completed the Easter Egg Era.", function (s) { return s.completed[60]; }],
    ["era3", "🏆 RED CARPET READY", "You completed the Main Character Era.", function (s) { return s.completed[90]; }],
    ["era4", "🏆 HONORARY CAT LADY", "You completed the Cat Lady Era.", function (s) { return s.completed[120]; }],
    ["era5", "🏆 CERTIFIED MASTERMIND", "You completed the Masterminds Era.", function (s) { return s.completed[150]; }],
    ["final", "🏆 TAYLOR SWIFT-ISH™", "You completed all 180 days. Please do not sue us.", function (s) { return s.completed[180]; }]
  ];
  function checkAchievements() {
    const fresh = [];
    ACH.forEach(function (a) {
      if (!state.achievements[a[0]] && a[3](state)) { state.achievements[a[0]] = iso(); fresh.push(a); log("achievement", a[1]); }
    });
    if (fresh.length) save();
    return fresh;
  }
  function erasFilled() { return state.eras.filter(function (e) { return e && e.name && e.name.trim(); }).length; }

  /* ── backup ── */
  function exportJSON() { return JSON.stringify(state, null, 1); }
  function importJSON(txt) { const o = JSON.parse(txt); if (!o || !o.xp || !o.counts) throw new Error("Not a backup"); state = Object.assign(fresh(), o); TS.store.state = state; flush(); }
  function reset() { state = fresh(); TS.store.state = state; flush(); }

  TS.store = {
    state: state, save: save, flush: flush, visit: visit, iso: iso, uid: uid, STATS: STATS, CORE: CORE,
    pct: pct, stars: stars, overall: overall, daysDone: daysDone, damageLabel: damageLabel, adjustDamage: adjustDamage,
    award: award, count: count, currentDay: currentDay, status: status, answers: answers, setAnswer: setAnswer, completeDay: completeDay,
    log: log, addLore: addLore, recurringMotifs: recurringMotifs, unresolved: unresolved, addIncident: addIncident,
    GLOBAL_EGGS: GLOBAL_EGGS, findEgg: findEgg, ACH: ACH, checkAchievements: checkAchievements, erasFilled: erasFilled,
    exportJSON: exportJSON, importJSON: importJSON, reset: reset
  };
})();
