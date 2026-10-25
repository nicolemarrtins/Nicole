/* Persistence, spaced repetition and derived statistics. All data stays on this device. */
window.TAW = window.TAW || {};
(function () {
  const KEY = "taw.state.v1";
  const DAY_MS = 86400000;

  function today() { return iso(new Date()); }
  function iso(d) { const z = new Date(d.getTime() - d.getTimezoneOffset() * 60000); return z.toISOString().slice(0, 10); }
  function daysBetween(a, b) { return Math.round((new Date(b) - new Date(a)) / DAY_MS); }
  function addDays(dateStr, n) { const d = new Date(dateStr + "T12:00:00"); d.setDate(d.getDate() + n); return iso(d); }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

  function fresh() {
    return {
      v: 1,
      profile: { name: "", startDate: today(), mode: "standard", interests: [], goals: [], onboarded: false },
      settings: { theme: "auto", textSize: "m", speechLang: "en-US", aiKey: "", aiModel: "claude-opus-5-5" },
      completed: {}, progress: {}, answers: {}, review: {}, words: {}, passport: {},
      books: {}, films: {}, speaking: [], journal: [], weekly: {}, interest: {}, overuse: {},
      activity: {}, aiLessons: {}, recallLog: [], lastVisit: null, prevVisit: null
    };
  }

  let state;
  try { state = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY) || "null") || {}); }
  catch (e) { state = fresh(); }

  let saveTimer = null;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(flush, 150);
  }
  function flush() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { console.warn("Could not save", e); TAW.toast && TAW.toast("Storage is full — export your data in Settings."); }
  }
  window.addEventListener("pagehide", flush);
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") flush(); });

  /* visits & gentle streaks */
  function touchVisit() {
    const t = today();
    if (state.lastVisit !== t) { state.prevVisit = state.lastVisit; state.lastVisit = t; save(); }
  }
  function logActivity(minutes) {
    const t = today();
    state.activity[t] = (state.activity[t] || 0) + (minutes || 1);
    save();
  }
  function streak() {
    let n = 0, d = today();
    if (!state.activity[d]) d = addDays(d, -1);
    while (state.activity[d]) { n++; d = addDays(d, -1); }
    return n;
  }
  function daysAway() { return state.prevVisit ? daysBetween(state.prevVisit, today()) : 0; }

  /* program position */
  function currentDay() {
    for (let d = 1; d <= 180; d++) if (!state.completed[d]) return d;
    return 180;
  }
  function completedCount() { return Object.keys(state.completed).filter(function (k) { return /^\d+$/.test(k); }).length; }

  /* ── Spaced repetition ── */
  const INTERVALS = [1, 3, 7, 14, 30, 60];
  const TASKS = ["Recognise", "Recall", "Use", "Explain", "Discuss", "Connect"];
  function addReview(kind, front, back, extra) {
    const id = (kind + ":" + front).toLowerCase();
    if (state.review[id]) return state.review[id];
    state.review[id] = { id, kind, front, back, extra: extra || {}, stage: 0, due: addDays(today(), 1), lapses: 0, added: today(), history: [] };
    save();
    return state.review[id];
  }
  function rate(id, grade) { /* grade: again | hard | good | easy */
    const it = state.review[id]; if (!it) return;
    if (grade === "again") { it.stage = Math.max(0, it.stage - 2); it.lapses++; it.due = addDays(today(), 1); }
    else if (grade === "hard") { it.due = addDays(today(), Math.max(1, Math.round((INTERVALS[it.stage] || 60) / 2))); }
    else { it.stage = Math.min(6, it.stage + (grade === "easy" ? 2 : 1)); it.due = addDays(today(), INTERVALS[Math.min(it.stage, 5)] * (it.stage >= 6 ? 2 : 1)); }
    it.history.push({ d: today(), g: grade });
    if (state.words[it.front]) state.words[it.front].stage = it.stage;
    state.recallLog.push({ d: today(), ok: grade !== "again" });
    save();
  }
  function statusOf(it) {
    const overdue = daysBetween(it.due, today());
    if (overdue > 3 || it.lapses >= 2 && it.stage < 3) return "needs review";
    if (it.stage === 0) return "new";
    if (it.stage <= 2) return "learning";
    if (it.stage <= 4) return "familiar";
    return "mastered";
  }
  function dueItems() {
    const t = today();
    return Object.values(state.review).filter(function (i) { return i.stage < 6 && i.due <= t; })
      .sort(function (a, b) { return (b.lapses - a.lapses) || (a.due < b.due ? -1 : 1); });
  }
  function taskFor(it) { return TASKS[Math.min(it.stage, 5)]; }

  /* ── My Words ── */
  function saveWord(w) {
    const key = w.word.trim();
    if (!key) return;
    const prev = state.words[key] || { uses: 0, added: today(), stage: 0 };
    state.words[key] = Object.assign(prev, w, { word: key });
    addReview("word", key, w.meaning || w.definition || "", { example: w.example || "", pron: w.pron || "" });
    save();
  }
  function countWordUses(text) {
    const low = " " + (text || "").toLowerCase() + " ";
    const used = [];
    Object.keys(state.words).forEach(function (w) {
      const re = new RegExp("[^a-z]" + w.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[^a-z]");
      if (re.test(low)) { state.words[w].uses = (state.words[w].uses || 0) + 1; used.push(w); }
    });
    if (used.length) save();
    return used;
  }

  /* ── Lessons ── */
  function completeLesson(day, info) {
    const lesson = TAW.getLesson(day);
    state.completed[day] = Object.assign({ date: today(), mode: state.profile.mode }, info || {});
    (lesson.vocab || []).forEach(function (v) {
      addReview("word", v.word, v.definition, { example: v.example || "", pron: v.pron || "", nuance: v.nuance || "", day: day });
    });
    (lesson.learn && lesson.learn.phrases || []).slice(0, 3).forEach(function (p) {
      addReview("phrase", p.en, p.note, { tone: p.tone, day: day });
    });
    if (lesson.culture && TAW.cards[lesson.culture]) {
      state.passport[lesson.culture] = state.passport[lesson.culture] || { date: today(), day: day };
      addReview("concept", TAW.cards[lesson.culture].name, TAW.cards[lesson.culture].idea, { card: lesson.culture, day: day });
    }
    const cat = lesson.cat || (lesson.cats && lesson.cats[0]);
    if (info && info.rating && cat) { (state.interest[cat] = state.interest[cat] || []).push(info.rating); }
    logActivity(lesson.minutes || 20);
    save();
  }
  function answer(day, key, value) {
    state.answers[day] = state.answers[day] || {};
    state.answers[day][key] = value;
    save();
  }
  function getAnswer(day, key) { return (state.answers[day] || {})[key] || ""; }
  function markSection(day, sec) {
    state.progress[day] = state.progress[day] || {};
    state.progress[day][sec] = true;
    save();
  }

  /* ── Journal ── */
  function addJournal(entry) {
    const e = Object.assign({ id: uid(), date: today(), kind: "free" }, entry);
    const existing = entry.key && state.journal.find(function (j) { return j.key === entry.key; });
    if (existing) Object.assign(existing, e, { id: existing.id });
    else state.journal.unshift(e);
    save();
    return e;
  }

  /* ── Speaking ── */
  function addSpeaking(a) {
    const rec = Object.assign({ id: uid(), date: today() }, a);
    state.speaking.unshift(rec);
    if (rec.analysis && rec.analysis.overused) {
      rec.analysis.overused.forEach(function (o) { state.overuse[o[0]] = (state.overuse[o[0]] || 0) + o[1]; });
    }
    logActivity(Math.max(1, Math.round((rec.duration || rec.seconds || 60) / 60)));
    save();
    return rec;
  }

  /* ── Derived stats (learning indicators, not measurements) ── */
  function lessonsBySkill() {
    const out = { english: 0, culture: 0, articulation: 0, thinking: 0, conversation: 0 };
    Object.keys(state.completed).forEach(function (d) {
      const l = TAW.getLesson(d);
      const skills = l.skills || TAW.categorySkills[l.cat] || [];
      skills.forEach(function (s) { if (out[s] !== undefined) out[s]++; });
    });
    return out;
  }
  function strands() {
    const by = lessonsBySkill();
    const pass = Object.keys(state.passport).length;
    const words = Object.keys(state.words).length;
    const mastered = Object.values(state.review).filter(function (i) { return i.stage >= 5; }).length;
    const sp = state.speaking.length;
    function pct(x) { return Math.max(0, Math.min(100, Math.round(x))); }
    return {
      English: pct(by.english * 1.2 + words * 0.25 + mastered * 0.3),
      Culture: pct(by.culture * 1.1 + pass * 0.6),
      Articulation: pct(by.articulation * 1.3 + sp * 0.6),
      Thinking: pct(by.thinking * 1.5 + Object.keys(state.answers).length * 0.2),
      Conversation: pct(by.conversation * 1.4 + sp * 0.5)
    };
  }
  function recentSpeaking(n) { return state.speaking.filter(function (s) { return s.analysis; }).slice(0, n || 8); }
  function avg(arr) { return arr.length ? arr.reduce(function (a, b) { return a + b; }, 0) / arr.length : null; }
  function profile() {
    const sp = recentSpeaking(8);
    const a = function (f) { return avg(sp.map(f).filter(function (x) { return x != null; })); };
    const ai = state.speaking.filter(function (s) { return s.ai && s.ai.scores; }).slice(0, 6);
    const aiAvg = function (k) { return avg(ai.map(function (s) { return s.ai.scores[k]; }).filter(function (x) { return typeof x === "number"; })); };
    const recall = state.recallLog.slice(-60);
    const confid = avg(state.speaking.slice(0, 8).map(function (s) { return s.confidence; }).filter(Boolean));
    const cats = {};
    Object.keys(state.passport).forEach(function (id) { const c = TAW.cards[id]; if (c) cats[c.cat] = 1; });
    const by = lessonsBySkill();
    function sc(v) { return v == null ? null : Math.max(5, Math.min(100, Math.round(v))); }
    return [
      { k: "Vocabulary range", v: sc(Object.keys(state.words).length * 0.5 + (a(function (s) { return s.analysis.variety; }) || 0) * 0.6), how: "My Words saved + lexical variety in your answers" },
      { k: "Grammar accuracy", v: sc(aiAvg("grammar") != null ? aiAvg("grammar") * 10 : null), how: "From mentor (AI) feedback — appears once you use it" },
      { k: "Speaking fluency", v: sc(sp.length ? Math.min(100, (a(function (s) { return s.analysis.wpm; }) || 0) / 1.4) - (a(function (s) { return s.analysis.fillerRate; }) || 0) * 3 : null), how: "Words per minute, minus filler rate" },
      { k: "Articulation", v: sc(a(function (s) { return s.analysis.scores.vocabulary * 5 + s.analysis.scores.structure * 5; })), how: "Precision and structure scores in recent answers" },
      { k: "Cultural knowledge", v: sc(Object.keys(state.passport).length * 1.1 + Object.keys(cats).length * 2), how: "Passport references and breadth of categories" },
      { k: "Argumentation", v: sc(a(function (s) { return s.analysis.scores.nuance * 6 + s.analysis.scores.structure * 4; })), how: "Reasoning, contrast and qualification markers" },
      { k: "Storytelling", v: sc(by.conversation ? Math.min(100, by.conversation * 3 + (a(function (s) { return s.analysis.storyMarkers; }) || 0) * 8) : null), how: "Story lessons + narrative markers when you speak" },
      { k: "Conversation", v: sc(by.conversation * 3 + state.speaking.length), how: "Conversation lessons and speaking practice" },
      { k: "Confidence", v: sc(confid != null ? confid * 20 : null), how: "Your own rating after speaking" },
      { k: "Recall", v: sc(recall.length >= 5 ? recall.filter(function (r) { return r.ok; }).length / recall.length * 100 : null), how: "Share of review items you remembered" }
    ];
  }

  function exportData() { return JSON.stringify(state, null, 2); }
  function importData(json) { const s = JSON.parse(json); if (!s || !s.profile) throw new Error("Not a valid backup"); state = Object.assign(fresh(), s); flush(); }
  function reset() { state = fresh(); flush(); }

  /* ── Audio clips in IndexedDB ── */
  let dbp = null;
  function db() {
    if (dbp) return dbp;
    dbp = new Promise(function (res, rej) {
      if (!window.indexedDB) return rej(new Error("no idb"));
      const r = indexedDB.open("taw-audio", 1);
      r.onupgradeneeded = function () { r.result.createObjectStore("clips"); };
      r.onsuccess = function () { res(r.result); };
      r.onerror = function () { rej(r.error); };
    });
    return dbp;
  }
  function putAudio(id, blob) {
    return db().then(function (d) { return new Promise(function (res, rej) { const t = d.transaction("clips", "readwrite"); t.objectStore("clips").put(blob, id); t.oncomplete = res; t.onerror = rej; }); });
  }
  function getAudio(id) {
    return db().then(function (d) { return new Promise(function (res) { const r = d.transaction("clips").objectStore("clips").get(id); r.onsuccess = function () { res(r.result || null); }; r.onerror = function () { res(null); }; }); });
  }

  TAW.store = {
    get state() { return state; }, save, flush, today, addDays, daysBetween, uid,
    touchVisit, logActivity, streak, daysAway, currentDay, completedCount,
    addReview, rate, statusOf, dueItems, taskFor, INTERVALS,
    saveWord, countWordUses, completeLesson, answer, getAnswer, markSection,
    addJournal, addSpeaking, strands, profile, lessonsBySkill,
    exportData, importData, reset, putAudio, getAudio
  };
})();
