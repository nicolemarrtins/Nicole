/* Builds a complete lesson object for any day. */
window.TAW = window.TAW || {};
(function () {
  const REFLECT = [
    "What did today’s topic change — or confirm — in how you see things?",
    "Where could you use today’s idea in a real conversation this week?",
    "What part of today did you find hardest to express? Why?",
    "Which word from today will you actually use? In what situation?",
    "What question did today leave you with?",
    "Who would you like to discuss today’s topic with — and what would you ask them?"
  ];
  const cache = {};

  function vocabOf(day) {
    const w = TAW.lessons[day];
    if (w) return w.vocab || [];
    const ai = TAW.store.state.aiLessons[day];
    if (ai && ai.vocab) return ai.vocab;
    const m = TAW.map[day];
    return m && m.words ? m.words : [];
  }

  /* spaced recall: pull from 1, 3, 7, 14, 30 and 60 days earlier */
  function spacedRecall(day, n) {
    const out = [];
    [1, 3, 7, 14, 30, 60].forEach(function (gap) {
      const d = day - gap;
      if (d < 1 || out.length >= (n || 4)) return;
      const v = vocabOf(d);
      if (!v.length) return;
      const pick = v[(day + gap) % v.length];
      const task = gap <= 3 ? "What does “" + pick.word + "” mean?" : gap <= 7 ? "Use “" + pick.word + "” in a sentence about your week." : gap <= 14 ? "Explain the nuance of “" + pick.word + "” to a friend." : "Bring “" + pick.word + "” into a short opinion on any topic from this month.";
      out.push({ q: "Day " + d + " · " + task, a: pick.definition, word: pick.word, gap: gap });
    });
    return out;
  }

  function base(day) {
    return { day: day, month: TAW.monthOf(day), type: "lesson" };
  }

  function fromMap(day) {
    const e = TAW.map[day];
    const isCard = e.ref && TAW.cards[e.ref];
    const bank = TAW.sayBetterBank[day % TAW.sayBetterBank.length];
    const L = Object.assign(base(day), {
      title: e.title, kicker: (TAW.categoryLabels[e.cat] || e.cat) + " · " + TAW.months[TAW.monthOf(day) - 1].title,
      cat: e.cat, cats: [e.cat], skills: TAW.categorySkills[e.cat] || [], difficulty: e.difficulty, minutes: 25,
      why: e.focus,
      learn: {
        body: [e.focus, "Work through today’s words, then think, write and speak. You know what you mean — this is where you find the language for it."],
        phrases: (e.phrases || []).map(function (p) { return { en: p, tone: "Useful phrase", note: "Say it aloud, then use it in today’s speaking." }; }),
        tip: TAW.mentorLines[day % TAW.mentorLines.length]
      },
      vocab: e.words.map(function (w) {
        return { word: w.word, definition: w.definition, pron: "", pos: "", nuance: "", synonyms: [], distinction: "", example: "", conversation: "",
          prompt: "Use “" + w.word + "” in a sentence about your own life or opinions." };
      }),
      culture: isCard ? e.ref : null, cultureRef: isCard ? null : e.ref,
      cultureNote: isCard ? "" : "",
      sayBetter: { basic: bank.basic, levels: bank.levels.map(function (t, i) { return ["Level " + (i + 1), t, i === 3 ? bank.note : ""]; }), prompt: "Now write your own Level 4 version — about today’s topic if you can." },
      think: { q: e.think, angles: [] },
      express: { prompt: "In 5–7 sentences: " + e.think + " Use at least two of today’s words." },
      speak: { prompt: e.speak, seconds: e.seconds, structure: ["A clear opening position", "A reason", "A concrete example", "A nuance: “That said, …”", "A closing line"] },
      recall: spacedRecall(day),
      reflect: REFLECT[day % REFLECT.length],
      deep: { title: "Go deeper", body: isCard ? "Read more about " + TAW.cards[e.ref].name + " from a reliable source (an encyclopaedia, a museum or university page). Note one fact that surprised you." : "Look up today’s cultural reference from a reliable source. Note one fact that surprised you.", prompt: "Write a 200-word mini-essay: " + e.think },
      generated: true
    });
    if (e.type === "sim") {
      L.type = "sim"; L.minutes = 20;
      L.kicker = "Simulation · Become Her";
      L.why = "Transfer, not memorisation: this is the real-world situation everything has been preparing you for.";
      L.learn = { body: ["<strong>The scene.</strong> " + e.focus, "<strong>Prepare (1 minute).</strong> " + (e.think || "")], phrases: [], tip: "Breathe. Structure. Example. Conclusion." };
      L.vocab = []; L.sayBetter = null; L.exercise = null; L.express = null;
      L.think = { q: "Before you speak: what is your one main point, and what example will you use?", angles: [] };
      L.speak = { prompt: e.speak, seconds: e.seconds, structure: [], unfamiliar: day === 158 || day === 169, marathon: day === 176 };
      L.deep = null;
    }
    return L;
  }

  function fromAi(day, ai) {
    const L = fromMap(day);
    ["why", "learn", "vocab", "cultureNote", "sayBetter", "exercise", "think", "express", "speak", "reflect", "deep"].forEach(function (k) { if (ai[k]) L[k] = ai[k]; });
    L.speak = Object.assign({ seconds: TAW.map[day].seconds }, L.speak);
    L.recall = spacedRecall(day);
    L.generated = false; L.aiWritten = true; L.minutes = 30;
    return L;
  }

  function weekDays(day) { const out = []; for (let d = day - 6; d < day; d++) if (d >= 1 && !TAW.isReview(d)) out.push(d); return out; }

  function review(day) {
    const days = weekDays(day);
    const ls = days.map(get);
    const words = [], recall = [];
    ls.forEach(function (l) { (l.vocab || []).forEach(function (v) { words.push(v); }); });
    ls.forEach(function (l, i) {
      const v = (l.vocab || [])[0];
      if (v) recall.push({ q: "Day " + l.day + " · What does “" + v.word + "” mean? Use it in a sentence.", a: v.definition });
      if (l.culture && TAW.cards[l.culture]) recall.push({ q: "Day " + l.day + " · What’s one thing you could say about " + TAW.cards[l.culture].name + "?", a: TAW.cards[l.culture].idea });
      else if (l.think && l.think.q && i % 2) recall.push({ q: "Day " + l.day + " · Revisit: " + l.think.q, a: "Answer aloud in 30 seconds. Was it easier than the first time?" });
    });
    const tryWords = words.map(function (w) { return w.word; }).filter(function (w, i, a) { return a.indexOf(w) === i; }).slice(0, 6);
    const wk = day / 7;
    return Object.assign(base(day), {
      type: "review", title: "Weekly review · Week " + wk, kicker: "Week " + wk + " · Review", cat: "review", cats: ["review"],
      skills: ["english", "conversation"], difficulty: ls[0] ? ls[0].difficulty : "Foundation", minutes: 30,
      why: "Learning happens when you retrieve, not when you reread. This week: " + ls.map(function (l) { return l.title; }).join(" · ") + ".",
      learn: { body: ["This week you explored: <strong>" + ls.map(function (l) { return l.title; }).join("</strong>, <strong>") + "</strong>.", "Today: recall, reflect, and one speaking challenge that must reuse the week’s words."], phrases: [], tip: "Consistency over perfection." },
      vocab: [], recall: recall.slice(0, 10),
      speak: { prompt: "Week " + wk + " challenge: pick the idea from this week that interested you most and explain it — using at least three of this week’s words.", seconds: 120, structure: ["Which idea, and why it caught you", "Explain it simply", "Connect it to your life or the news", "A nuance or open question"], tryWords: tryWords },
      weekly: true, weekDays: days, reflect: "What can you say now that you couldn’t say last week?"
    });
  }

  function milestone(day) {
    const m = TAW.milestones[day];
    const month = TAW.months[TAW.monthOf(day) - 1];
    if (day === 180) {
      return Object.assign(base(day), {
        type: "graduation", title: "The Articulate Woman Test", kicker: "Day 180 · Graduation", cat: "milestone", cats: ["milestone"], skills: ["articulation", "conversation", "culture", "thinking", "english"],
        difficulty: "Advanced", minutes: 45, why: m.line,
        learn: { body: ["Six months ago you began with a question: <em>who am I when I speak?</em> Today you answer it — in seven parts.", "Take your time. Speak naturally. This is not an exam; it is a portrait."], phrases: [], tip: "Not perfect. Not pretentious. Just genuinely interesting." },
        vocab: [], graduation: TAW.graduation, milestone: m,
        speak: { prompt: "Final benchmark: " + TAW.benchmark.prompt, seconds: TAW.benchmark.seconds, benchmarkOnly: true },
        reflect: m.reflect
      });
    }
    return Object.assign(base(day), {
      type: "milestone", title: "Milestone · " + m.title, kicker: "Day " + day + " · Milestone", cat: "milestone", cats: ["milestone"],
      skills: ["articulation", "english"], difficulty: "Intermediate", minutes: 25, why: m.line,
      learn: { body: [m.line, "This month’s shift: <em>" + month.shift + "</em>", "Today you answer the same question you answered on Day 1. Don’t prepare. Then compare."], phrases: [], tip: "Look how far you’ve come — then look ahead." },
      vocab: [], milestone: m, recall: spacedRecall(day, 5),
      speak: { prompt: TAW.benchmark.prompt, seconds: TAW.benchmark.seconds, benchmark: true, structure: [] },
      reflect: m.reflect
    });
  }

  function trackLesson(key) {
    const t = TAW.trackLessons[key], tr = TAW.tracks[t.track];
    return Object.assign({ day: key, month: null, type: "track", minutes: 25, label: tr.short + " · " + t.n }, t, {
      cat: t.cats[0], kicker: tr.title + " · " + (t.module || ""), trackTitle: tr.title
    });
  }

  function get(day) {
    day = TAW.dayKey(day);
    if (cache[day]) return cache[day];
    let L;
    if (typeof day === "string") L = TAW.trackLessons && TAW.trackLessons[day] ? trackLesson(day) : Object.assign(base(1), { day: day, title: "Not found", cat: "english", cats: ["english"], vocab: [], learn: { body: [], phrases: [] } });
    else if (TAW.lessons[day]) {
      L = Object.assign(base(day), TAW.lessons[day]);
      L.cat = L.cats[0];
      if (L.type === "review") { L.weekly = true; L.weekDays = weekDays(day); }
    } else if (TAW.store.state.aiLessons[day]) L = fromAi(day, TAW.store.state.aiLessons[day]);
    else if (day === 180 || TAW.isMilestone(day)) L = milestone(day);
    else if (TAW.isReview(day)) L = review(day);
    else if (TAW.map[day]) L = fromMap(day);
    else L = Object.assign(base(day), { title: "Day " + day, cat: "english", cats: ["english"], vocab: [], learn: { body: [], phrases: [] } });
    if (day === 7) L.milestone = TAW.milestones[7];
    if (L.type === "review" && TAW.trackLessons && TAW.trackLessons["b" + (day / 7)]) L.science = "b" + (day / 7);
    cache[day] = L;
    return L;
  }
  function invalidate(day) { if (day) delete cache[day]; else Object.keys(cache).forEach(function (k) { delete cache[k]; }); }

  /* which sections to show, by mode */
  function sections(L, mode) {
    /* [key, label, standard minutes, quick minutes] */
    const all = [
      ["learn", "Learn", 5, 4], ["vocab", "Words", 5, 3], ["culture", "Culture", 4, 0], ["sayBetter", "Say it better", 3, 0],
      ["exercise", "Practise", 3, 0], ["think", "Think", 2, 0], ["express", "Write", 4, 0], ["speak", "Speak", 3, 3],
      ["graduation", "The Test", 25, 25], ["science", "The science", 2, 2], ["weekly", "Weekly reflection", 6, 4], ["recall", "Recall", 2, 2], ["reflect", "Reflect", 2, 1], ["deep", "Go deeper", 15, 0]
    ];
    const has = function (k) {
      if (k === "culture") return !!(L.culture || L.cultureRef);
      if (k === "vocab") return L.vocab && L.vocab.length;
      if (k === "recall") return L.recall && L.recall.length;
      return !!L[k];
    };
    const quick = ["learn", "vocab", "speak", "recall", "reflect", "weekly", "graduation", "science"];
    return all.filter(function (s) {
      if (!has(s[0])) return false;
      if (mode === "quick") return quick.indexOf(s[0]) >= 0;
      if (mode === "standard") return s[0] !== "deep";
      return true;
    });
  }
  function minutesFor(L, mode) {
    return sections(L, mode).reduce(function (a, s) { return a + (mode === "quick" ? s[3] : s[2]); }, 0);
  }

  function weeklyReport(day) {
    const L = get(day);
    const days = L.weekDays || [];
    const groups = {};
    days.forEach(function (d) { const l = get(d); const c = TAW.categoryLabels[l.cat] || l.cat; (groups[c] = groups[c] || []).push(l.title); });
    const st = TAW.store.state;
    const from = TAW.store.addDays(TAW.store.today(), -7);
    const sp = st.speaking.filter(function (s) { return s.date >= from && s.analysis; });
    const keys = ["structure", "clarity", "vocabulary", "repetition", "fillers", "nuance"];
    const names = { structure: "Structuring your answers", clarity: "Clarity", vocabulary: "Precise vocabulary", repetition: "Avoiding repetition", fillers: "Speaking without fillers", nuance: "Expressing opinions with qualification" };
    let best = null, worst = null;
    if (sp.length) {
      const avgs = keys.map(function (k) { return [k, sp.reduce(function (a, s) { return a + s.analysis.scores[k]; }, 0) / sp.length]; }).sort(function (a, b) { return b[1] - a[1]; });
      best = names[avgs[0][0]]; worst = names[avgs[avgs.length - 1][0]];
    }
    const next = [day + 1, day + 2, day + 3].filter(function (d) { return d <= 180; }).map(function (d) { return get(d).title; });
    const newWords = Object.values(st.words).filter(function (w) { return w.added >= from; }).map(function (w) { return w.word; });
    return { groups: groups, best: best, worst: worst, next: next, speaking: sp.length, newWords: newWords };
  }

  TAW.getLesson = get;
  TAW.lessonLabel = function (L) { return L.label || "Day " + L.day; };
  TAW.nextTrackKey = function (L) {
    if (!L.track) return null;
    const keys = TAW.tracks[L.track].modules.reduce(function (a, m) { return a.concat(m.lessons); }, []);
    return keys[keys.indexOf(L.day) + 1] || null;
  };
  TAW.lessonSections = sections;
  TAW.lessonMinutes = minutesFor;
  TAW.invalidateLesson = invalidate;
  TAW.weeklyReport = weeklyReport;
  TAW.spacedRecall = spacedRecall;
})();
