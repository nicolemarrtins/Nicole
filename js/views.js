/* Page renderers. Each returns an HTML string. */
window.TAW = window.TAW || {};
(function () {
  const S = TAW.store;
  const esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]; }); };
  const nl = function (s) { return esc(s).replace(/\n/g, "<br>"); };
  const fmt = function (sec) { sec = Math.max(0, Math.round(sec)); return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0"); };
  const catLabel = function (c) { return TAW.categoryLabels[c] || c; };
  const passCat = function (k) { return TAW.passportCategories.find(function (c) { return c[0] === k; }) || [k, "•", k]; };
  TAW.esc = esc; TAW.fmt = fmt;

  function bar(label, value, max, note) {
    const v = value == null ? null : value;
    const pct = v == null ? 0 : Math.round(v / (max || 100) * 100);
    return `<div class="meter"><div class="meter-head"><span>${esc(label)}</span><span class="meter-val">${v == null ? "not enough data yet" : (max === 10 ? v + "/10" : pct + "%")}</span></div>
      <div class="meter-track" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><i style="width:${pct}%"></i></div>${note ? `<p class="meter-note">${esc(note)}</p>` : ""}</div>`;
  }
  function tabs(items, active) {
    return `<nav class="tabs" role="tablist">${items.map(function (t) { return `<a role="tab" href="${t[1]}" class="${t[0] === active ? "on" : ""}" aria-selected="${t[0] === active}">${esc(t[2])}</a>`; }).join("")}</nav>`;
  }
  function header(kicker, title, sub) {
    return `<header class="page-head">${kicker ? `<p class="kicker">${kicker}</p>` : ""}<h1>${title}</h1>${sub ? `<p class="lede">${sub}</p>` : ""}</header>`;
  }
  /* Spanish support: translation spans shown under the English when the lesson toggle is on */
  function esFor(L) { return S.state.settings.lessonEs && TAW.es ? (TAW.es[L.day] || null) : null; }
  function ES(x) { return x ? `<span class="es" lang="es">${x}</span>` : ""; }
  function at(o, k, i) { return o && o[k] ? (i === undefined ? o[k] : o[k][i]) : ""; }
  function tts(text) { return `<button class="tts" data-act="tts" data-text="${esc(text)}" aria-label="Hear it">🔊</button>`; }

  /* ───────────── Speaking widget ───────────── */
  function speakBox(o) {
    const id = o.id || ("sp" + Math.random().toString(36).slice(2, 8));
    const st = S.state;
    const top = Object.entries(st.overuse).sort(function (a, b) { return b[1] - a[1]; })[0];
    const constraint = o.constraint !== false && top && top[1] >= 3 ? top[0] : null;
    const myWords = Object.keys(st.words);
    const tryWords = o.tryWords || (myWords.length >= 3 && o.suggestMine !== false ? myWords.sort(function () { return Math.random() - .5; }).slice(0, 3) : []);
    return `<div class="speak card-soft" data-speak="${id}" data-seconds="${o.seconds || 60}" data-tag="${esc(o.tag || "challenge")}" data-day="${o.day || ""}" data-prompt="${esc(o.prompt)}" data-prep="${o.prep || 0}">
      <p class="speak-prompt">${esc(o.prompt)}${ES(o.es && o.es[0])}</p>
      <p class="muted small">Aim for ${fmt(o.seconds || 60)}${o.prep ? " · " + o.prep + " seconds to think first" : ""}</p>
      ${o.note ? `<p class="note">${esc(o.note)}</p>` : ""}
      ${o.structure && o.structure.length ? `<ol class="structure">${o.structure.map(function (s, i) { return `<li>${esc(s)}${ES(o.es && o.es[i + 1])}</li>`; }).join("")}</ol>` : ""}
      ${tryWords.length ? `<p class="small">Try to use: ${tryWords.map(function (w) { return `<span class="chip">${esc(w)}</span>`; }).join(" ")}</p>` : ""}
      ${constraint ? `<p class="constraint">Constraint challenge: this time, no “${esc(constraint)}”. ${TAW.overuseTargets[constraint] ? "Try " + esc(TAW.overuseTargets[constraint].slice(0, 2).join(" or ")) + "." : ""}</p>` : ""}
      <div class="speak-stage">
        <div class="timer" aria-live="polite"><span class="t">${o.prep ? "Think: " + fmt(o.prep) : "0:00"}</span><span class="muted"> / ${fmt(o.seconds || 60)}</span></div>
        <div class="timer-track"><i></i></div>
        <div class="row">
          <button class="btn primary" data-act="rec-start">${o.prep ? "Start thinking time" : "● Start speaking"}</button>
          <button class="btn" data-act="rec-stop" hidden>■ Stop</button>
          <span class="rec-status small muted" aria-live="polite"></span>
        </div>
      </div>
      <label class="lbl">Transcript <span class="muted small">— filled in automatically if your browser supports speech recognition. You can always type or correct it.</span>
        <textarea class="transcript" rows="5" placeholder="Your words appear here…"></textarea></label>
      <audio class="playback" controls hidden></audio>
      <div class="row wrap">
        <button class="btn" data-act="speak-analyse">Analyse my answer</button>
        <button class="btn ghost" data-act="speak-claude">Ask Claude ✦</button>
        ${S.state.settings.aiKey ? `<button class="btn ghost" data-act="speak-ai">Mentor feedback (API) ✦</button>` : ""}
      </div>
      ${TAW.enh.pasteBlock("")}
      <div class="confidence" hidden><span class="small">How confident did you feel?</span>
        ${[1, 2, 3, 4, 5].map(function (n) { return `<button class="pill" data-act="confidence" data-v="${n}" aria-label="Confidence ${n} of 5">${n}</button>`; }).join("")}</div>
      <div class="speak-result"></div>
    </div>`;
  }

  function writeBox(day, key, prompt, opts) {
    opts = opts || {};
    const val = S.getAnswer(day, key);
    const plain = String(prompt || "").replace(/<span class="es"[\s\S]*?<\/span>/g, "").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'");
    return `<div class="write" data-write="${esc(day + "|" + key)}" data-prompt="${esc(plain)}">
      ${prompt ? `<p class="q">${prompt}</p>` : ""}
      <textarea data-save="${esc(day + "|" + key)}" rows="${opts.rows || 5}" placeholder="${esc(opts.placeholder || "Write here…")}">${esc(val)}</textarea>
      <div class="row wrap"><span class="small muted wc">${val ? val.trim().split(/\s+/).length + " words" : ""}</span>
      ${opts.feedback === false ? "" : `<button class="btn small" data-act="write-analyse">Feedback</button><button class="btn small ghost" data-act="write-claude">Ask Claude ✦</button>${S.state.settings.aiKey ? `<button class="btn small ghost" data-act="write-ai">Mentor (API) ✦</button>` : ""}`}</div>
      ${opts.feedback === false ? "" : TAW.enh.pasteBlock(S.getAnswer(day, key + "__claude"))}
      <div class="write-result"></div></div>`;
  }

  function analysisHTML(a) {
    const s = a.scores;
    return `<div class="analysis">
      <div class="stats">
        <div><b>${a.words}</b><span>words</span></div>
        ${a.wpm ? `<div><b>${a.wpm}</b><span>words / min</span></div>` : ""}
        <div><b>${a.fillerTotal}</b><span>fillers</span></div>
        <div><b>${a.variety}</b><span>variety</span></div>
      </div>
      <div class="grid2">
        ${bar("Structure", s.structure, 10)}${bar("Clarity", s.clarity, 10)}${bar("Vocabulary", s.vocabulary, 10)}
        ${bar("Repetition (higher = less)", s.repetition, 10)}${bar("Fillers (higher = fewer)", s.fillers, 10)}${bar("Nuance", s.nuance, 10)}
      </div>
      <h4>Your mentor’s notes</h4><ul class="tips">${a.tips.map(function (t) { return `<li>${esc(t)}</li>`; }).join("")}</ul>
      ${a.repeated.length ? `<p class="small">Most repeated: ${a.repeated.map(function (r) { return `<span class="chip">${esc(r[0])} ×${r[1]}</span>`; }).join(" ")}</p>` : ""}
      ${Object.keys(a.fillers).length ? `<p class="small">Fillers: ${Object.entries(a.fillers).map(function (f) { return `<span class="chip">${esc(f[0])} ×${f[1]}</span>`; }).join(" ")}</p>` : ""}
      ${a.found.contrast.length + a.found.nuance.length ? `<p class="small">Nuance markers you used: ${a.found.contrast.concat(a.found.nuance).filter(function (v, i, arr) { return arr.indexOf(v) === i; }).slice(0, 6).map(function (x) { return `<span class="chip ok">${esc(x)}</span>`; }).join(" ")}</p>` : ""}
      <p class="fine">These are learning indicators from simple text analysis — not a test score. Accent is never assessed.</p>
    </div>`;
  }

  function aiHTML(f) {
    const names = { structure: "Structure", clarity: "Clarity", vocabulary: "Vocabulary", repetition: "Repetition", fillers: "Fillers", grammar: "Grammar", naturalness: "Naturalness", nuance: "Nuance", confidence: "Confidence" };
    return `<div class="ai-fb"><p class="kicker">Mentor feedback ✦</p><p>${esc(f.summary)}</p>
      ${f.scores ? `<div class="grid2">${Object.keys(names).filter(function (k) { return typeof f.scores[k] === "number"; }).map(function (k) { return bar(names[k], f.scores[k], 10); }).join("")}</div>` : ""}
      ${f.corrections && f.corrections.length ? `<h4>Small corrections</h4><ul class="corr">${f.corrections.map(function (c) { return `<li><s>${esc(c.said)}</s> → <b>${esc(c.better)}</b><br><span class="small muted">${esc(c.why)}</span></li>`; }).join("")}</ul>` : ""}
      ${f.upgrades && f.upgrades.length ? `<h4>More precise</h4><p>${f.upgrades.map(function (u) { return `<span class="chip">${esc(u.from)} → ${esc(u.to)}</span>`; }).join(" ")}</p>` : ""}
      ${f.rewrite ? `<h4>Say it better — your ideas, articulated</h4><blockquote>${esc(f.rewrite)}</blockquote>` : ""}
      ${f.nextStep ? `<p class="note"><b>Next time:</b> ${esc(f.nextStep)}</p>` : ""}</div>`;
  }

  /* ───────────── Onboarding ───────────── */
  function onboarding() {
    const cats = ["literature", "art", "history", "philosophy", "psychology", "economics", "society", "science", "cinema", "music", "architecture", "fashion"];
    return `<section class="onboard">
      <div class="hero">
        <p class="kicker">A 180-day program</p>
        <p class="hero-word" aria-hidden="true">become</p>
        <h1 class="hero-title">The Articulate Woman</h1>
        <p class="lede">Don’t just learn English. Become someone who has interesting things to say — and knows how to say them well.</p>
      </div>
      <div class="manifesto"><span>Read widely.</span><span>Think deeply.</span><span>Speak clearly.</span><span>Stay curious.</span></div>
      <form class="card form" data-form="onboard">
        <label class="lbl">What should I call you? <input name="name" autocomplete="given-name" placeholder="Your first name" value="${esc(S.state.profile.name)}"></label>
        <fieldset><legend class="lbl">How much time do you usually have?</legend>
          <div class="seg">
            <label><input type="radio" name="mode" value="quick"> <span>Quick<small>10–15 min</small></span></label>
            <label><input type="radio" name="mode" value="standard" checked> <span>Standard<small>25–35 min</small></span></label>
            <label><input type="radio" name="mode" value="deep"> <span>Deep<small>45–60 min</small></span></label>
          </div></fieldset>
        <fieldset><legend class="lbl">What are you curious about? <span class="muted small">(choose any — this shapes suggestions)</span></legend>
          <div class="chips">${cats.map(function (c) { return `<label class="chip-check"><input type="checkbox" name="interests" value="${c}"><span>${catLabel(c)}</span></label>`; }).join("")}</div></fieldset>
        <label class="lbl">Your work <span class="muted small">(optional — tailors professional content)</span>
          <input name="role" placeholder="Role, e.g. Head of E-commerce Operations" autocomplete="organization-title">
          <input name="industry" placeholder="Industry, e.g. retail, fintech, logistics"></label>
        <label class="lbl">In one sentence: who do you want to be in six months? <span class="muted small">(any language)</span>
          <textarea name="goal" rows="2" placeholder="A woman who…"></textarea></label>
        <button class="btn primary big" type="submit">Begin Day 1</button>
        <p class="fine">Everything you write stays on this device. You can export it any time from Settings.</p>
      </form>
    </section>`;
  }

  /* ───────────── Home ───────────── */
  /* ───────────── Today: one clear plan ───────────── */
  /* the first lesson step not yet done (null when every step is done) */
  function resumeSec(L, secs) {
    const prog = S.state.progress[L.day] || {};
    const first = secs.find(function (s) { return !prog[s[0]]; });
    return first ? first[0] : null;
  }
  /* where “Start / Continue” should take you in a lesson */
  function lessonEntry(L) {
    const st = S.state, day = L.day, secs = TAW.lessonSections(L, st.profile.mode), prog = st.progress[day] || {};
    const doneN = secs.filter(function (s) { return prog[s[0]]; }).length, resume = resumeSec(L, secs);
    const sec = secs.find(function (s) { return s[0] === resume; });
    if (st.completed[day]) return { href: "#/lesson/" + day + "/finish", label: "Completed", doneN: secs.length, total: secs.length, done: true };
    if (!doneN) return { href: "#/lesson/" + day, label: "Start", doneN: 0, total: secs.length };
    return { href: "#/lesson/" + day + "/" + (resume || "finish"), label: "Continue", step: sec ? sec[1] : "Finish", doneN: doneN, total: secs.length };
  }
  function todayPath() {
    const st = S.state, ss = TAW.enh.getSession(), L = TAW.getLesson(ss.day), mode = st.profile.mode;
    const en = lessonEntry(L);
    const lab = st.lab || {}, worked = !!(lab.workouts && lab.workouts[S.today()]);
    const due = S.dueItems().length;
    return [
      { key: "lesson", label: "Lesson · " + TAW.lessonLabel(L), title: L.title, href: en.href, done: !!en.done,
        sub: en.done ? "Completed ✓" : en.doneN ? "Step " + (en.doneN + 1) + " of " + en.total + " · " + en.step : en.total + " steps · about " + TAW.lessonMinutes(L, mode) + " min",
        cta: en.done ? "See it" : en.label },
      { key: "workout", label: "Practice Lab · 5 min", title: "Today’s workout", href: "#/play/workout", done: worked,
        sub: worked ? "Done today ✓" : "Traps, tone, decode and a real conversation", cta: worked ? "Again" : "Start" },
      { key: "review", label: "Memory · 2–5 min", title: due ? due + (due === 1 ? " word" : " words") + " to review" : "Review", href: "#/words/review", done: due === 0,
        sub: due ? "Recalling is how words become yours" : ss.reviewsAtStart ? "All caught up ✓" : "Nothing due — your words appear here after each lesson", cta: due ? "Review" : "Open" }
    ];
  }
  function pathNextLink() {
    const next = todayPath().find(function (p) { return !p.done; });
    return next ? `<a class="btn" href="${next.href}">Next on today’s path: ${esc(next.title)} →</a>` : `<a class="btn" href="#/">Today’s path complete ✓</a>`;
  }
  function weekLine(day) {
    const st = S.state, wk = Math.ceil(day / 7), from = (wk - 1) * 7 + 1, days = [];
    for (let d = from; d < from + 7 && d <= 180; d++) days.push(d);
    const doneN = days.filter(function (d) { return st.completed[d]; }).length;
    return `<section class="block week-block"><h3 class="section-title">This week · Week ${wk} <a class="st-link" href="#/journey">Full journey →</a></h3>
      <div class="week-line">${days.map(function (d) {
        const Ld = TAW.getLesson(d), done = !!st.completed[d], isToday = d === day, rev = TAW.isReview(d), mile = TAW.isMilestone(d);
        const cls = [done ? "done" : "", isToday ? "today" : "", rev ? "rev" : "", mile ? "mile" : ""].join(" ");
        return `<a class="wk ${cls}" href="#/lesson/${d}" aria-label="Day ${d}: ${esc(Ld.title)}${done ? ", completed" : ""}${isToday ? ", today" : ""}">
          <span class="dot">${done ? "✓" : mile ? "★" : rev ? "↻" : d}</span><span class="wk-l">${isToday ? "Today" : "Day " + d}</span></a>`;
      }).join("")}</div>
      <p class="small muted wk-cap">${doneN} of ${days.length} done · ${esc(TAW.months[TAW.monthOf(day) - 1].title)}</p></section>`;
  }
  function home() {
    const st = S.state, first = (st.profile.name || "").trim().split(/\s+/)[0];
    const ss = TAW.enh.getSession(), day = ss.day, L = TAW.getLesson(day), mode = st.profile.mode;
    const secs = TAW.lessonSections(L, mode), prog = st.progress[day] || {}, en = lessonEntry(L);
    const path = todayPath(), next = path.find(function (p) { return !p.done; });
    const streak = S.streak(), hr = new Date().getHours();
    const greet = hr < 12 ? "Good morning" : hr < 19 ? "Good afternoon" : "Good evening";
    const month = TAW.months[L.month - 1];
    const why = (L.why || "").replace(/<[^>]+>/g, "");
    const why1 = (why.match(/^[^.!?]+[.!?]/) || [why])[0];
    const studioKey = thisWeekTrack("voice") || thisWeekTrack("brain");
    const line = TAW.mentorLines[new Date().getDate() % TAW.mentorLines.length];
    const tiles = [
      ["#/studio", "Studio", studioKey ? "This week: " + TAW.getLesson(studioKey).title : "Senior Voice & Learning Brain"],
      ["#/culture", "Cultural Passport", Object.keys(st.passport).length + " of " + Object.keys(TAW.cards).length + " cards collected"],
      ["#/library", "Library", "Books and films worth talking about"],
      ["#/progress", "Your progress", S.completedCount() + " lessons · " + Object.keys(st.words).length + " saved words"],
      ["#/words/better", "Say it better", "From basic to articulate"],
      ["#/speak/find", "Find the words", "I have an idea, but…"]
    ];
    return `<section class="home2">
      <header class="hello">
        <p class="kicker">${greet}${first ? ", " + esc(first) : ""}</p>
        <div class="hello-row"><span class="hello-day">Day ${day} <span class="muted">of 180</span></span>${streak > 0 ? `<span class="hello-streak">🔥 ${streak} ${streak === 1 ? "day" : "days in a row"}</span>` : ""}</div>
      </header>
      ${TAW.enh.backupBanner()}
      <article class="hero-lesson ${en.done ? "is-done" : ""}">
        <p class="kicker">${L.track ? "" : "Month " + L.month + " · " + esc(month.title)}</p>
        <h1 class="hero-title">${esc(L.title)}</h1>
        ${why1 ? `<p class="hero-why">${esc(why1)}</p>` : ""}
        <div class="hero-bar" aria-hidden="true">${secs.map(function (s) { return `<i class="${prog[s[0]] || en.done ? "done" : ""}"></i>`; }).join("")}</div>
        <p class="hero-meta">${en.done ? "Completed ✓ — well done." : en.doneN ? "Step " + (en.doneN + 1) + " of " + en.total + " · " + esc(en.step) : en.total + " steps · about " + TAW.lessonMinutes(L, mode) + " min"}</p>
        <a class="hero-cta" href="${en.href}">${en.done ? "See what you learned" : en.doneN ? "▶ Continue lesson" : "▶ Start today’s lesson"}</a>
        ${en.done && day < 180 ? `<a class="hero-sub" href="#/lesson/${day + 1}">Keep going: Day ${day + 1} →</a>` : ""}
      </article>
      <section class="block">
        <h3 class="section-title">Today’s path</h3>
        <ol class="path-list">${path.map(function (p, i) {
          const isNext = next && p.key === next.key;
          return `<li class="${p.done ? "done" : ""} ${isNext ? "next" : ""}"><a href="${p.href}">
            <span class="pn">${p.done ? "✓" : i + 1}</span>
            <span class="pb"><span class="kicker">${esc(p.label)}${isNext ? " · up next" : ""}</span><b>${esc(p.title)}</b><span class="ps">${esc(p.sub)}</span></span>
            <span class="pgo">${esc(p.cta)} →</span></a></li>`;
        }).join("")}</ol>
        ${next ? "" : `<p class="path-done">Today’s path is complete ✓ Anything more is a bonus — see you tomorrow.</p>`}
      </section>
      ${weekLine(day)}
      <section class="block explore">
        <h3 class="section-title">Explore</h3>
        ${TAW.enh.dailyCards(true)}
        <div class="tool-grid explore-grid">${tiles.map(function (t) { return `<a class="tool" href="${t[0]}"><b>${esc(t[1])}</b><span>${esc(t[2])}</span></a>`; }).join("")}</div>
      </section>
      <p class="mentor-line">“${esc(line)}”</p>
    </section>`;
  }

  /* ───────────── Lesson player: cover → one step at a time → completion ───────────── */
  const STEP_HINT = {
    learn: function () { return "The idea, in a few short reads"; },
    vocab: function (L) { const n = S.state.profile.mode === "quick" ? Math.min(3, L.vocab.length) : L.vocab.length; return n + " words, one at a time"; },
    culture: function (L) { const c = L.culture && TAW.cards[L.culture]; return c ? c.name : "Today’s cultural reference"; },
    sayBetter: function () { return "From basic to articulate, level by level"; },
    exercise: function (L) { return L.exercise ? L.exercise.title : "Practise"; },
    think: function () { return "One question to think about"; },
    express: function () { return "A short piece of writing"; },
    speak: function (L) { return L.speak && L.speak.seconds ? "Speak for " + fmt(L.speak.seconds) + " — recorded and analysed" : "Speak"; },
    graduation: function () { return "Seven parts — your final portrait"; },
    science: function () { return "Why this works in your brain"; },
    weekly: function () { return "Your week in review"; },
    recall: function (L) { return (L.recall || []).length + " questions from earlier days"; },
    reflect: function () { return "One minute — it goes to your Journal"; },
    deep: function (L) { return L.deep ? L.deep.title : "Optional reading"; }
  };
  function lessonExit(L) { return L.track ? "#/studio" : "#/"; }
  function lesson(day, sec) {
    day = TAW.dayKey(day);
    const L = TAW.getLesson(day);
    if (sec === "finish") return finish(L);
    const secs = TAW.lessonSections(L, S.state.profile.mode);
    if (!secs.length) return finish(L);
    if (!sec || !secs.some(function (s) { return s[0] === sec; })) return cover(L, secs);
    return step(L, secs, sec);
  }
  function cover(L, secs) {
    const st = S.state, day = L.day, mode = st.profile.mode, prog = st.progress[day] || {}, E = esFor(L);
    const done = !!st.completed[day], en = lessonEntry(L), resume = resumeSec(L, secs);
    const ahead = !L.track && day > S.currentDay() && !done;
    const month = !L.track && TAW.months[L.month - 1];
    const startHref = done ? "#/lesson/" + day + "/" + secs[0][0] : en.doneN ? en.href : "#/lesson/" + day + "/" + secs[0][0];
    const startLabel = done ? "↻ Go through it again" : en.doneN ? "▶ Continue · " + en.step : "▶ Start";
    return `<section class="player p-cover">
      <div class="p-bar"><a class="p-close" href="${lessonExit(L)}" aria-label="Close">✕</a><span class="p-crumb">${esc(TAW.lessonLabel(L))}${month ? " · Month " + L.month + " — " + esc(month.title) : ""}</span></div>
      <p class="kicker">${esc(L.kicker || "")}</p>
      <h1>${esc(L.title)}</h1>
      ${L.why ? `<p class="lede">${L.why}${ES(at(E, "w"))}</p>` : ""}
      ${done ? `<p class="note small">✓ You completed this lesson${st.completed[day].date ? " on " + esc(st.completed[day].date) : ""}. Revisit any step.</p>` : ""}
      ${ahead ? `<p class="small muted">You’re ahead of your current day (Day ${S.currentDay()}) — that’s fine, explore freely.</p>` : ""}
      <h3 class="section-title">Your path · ${secs.length} steps · about ${TAW.lessonMinutes(L, mode)} min</h3>
      <ol class="lesson-path">${secs.map(function (s, i) {
        const isDone = !!prog[s[0]] || done, isNext = !done && s[0] === resume;
        const mins = mode === "quick" ? s[3] : s[2];
        return `<li class="${isDone ? "done" : ""} ${isNext ? "next" : ""}"><a href="#/lesson/${day}/${s[0]}">
          <span class="lp-n">${isDone ? "✓" : i + 1}</span>
          <span class="lp-t"><b>${esc(s[1])}</b><span>${esc(STEP_HINT[s[0]] ? STEP_HINT[s[0]](L) : "")}</span></span>
          <span class="lp-m">${mins ? mins + " min" : ""}</span></a></li>`;
      }).join("")}</ol>
      <div class="cover-opts">
        <p class="lbl">Session length</p>
        <div class="mode-row" role="group" aria-label="Session length">${[["quick", "Quick"], ["standard", "Standard"], ["deep", "Deep"]].map(function (m) { return `<button class="pill ${mode === m[0] ? "on" : ""}" data-act="mode" data-v="${m[0]}" aria-pressed="${mode === m[0]}">${m[1]} · ${TAW.lessonMinutes(L, m[0])} min</button>`; }).join("")}</div>
        <button class="es-switch ${st.settings.lessonEs ? "on" : ""}" data-act="toggle-es" aria-pressed="${!!st.settings.lessonEs}">
          <span class="es-sw-t"><b>Explicaciones en español</b><span lang="es">${st.settings.lessonEs ? "Activadas — lo que aprendes sigue en inglés" : "Muestra la traducción debajo de cada explicación"}</span></span>
          <span class="sw" aria-hidden="true"><i></i></span></button>
        ${st.settings.lessonEs && !TAW.es[day] ? `<p class="note small" lang="es">Esta lección todavía no tiene traducción escrita. <button class="link" data-act="claude-es" data-day="${day}">Pídele a Claude que te la explique en español ✦</button></p>` : ""}
        ${L.generated && !L.aiWritten ? `<p class="note small">This lesson is drawn from the curriculum map. <button class="link" data-act="claude-lesson" data-day="${day}">Let Claude teach it to you, step by step ✦</button>${st.settings.aiKey ? ` · <button class="link" data-act="ai-lesson" data-day="${day}">Write it into the app (API) ✦</button>` : ""}</p>` : ""}
      </div>
      <p class="small muted cover-tip">Tip: select any word to save it. Swipe left or right to move between steps.</p>
      <div class="p-foot"><a class="btn primary p-next" href="${startHref}">${startLabel}</a></div>
    </section>`;
  }
  function step(L, secs, sec) {
    const st = S.state, day = L.day, prog = st.progress[day] || {};
    const i = secs.findIndex(function (s) { return s[0] === sec; });
    const next = secs[i + 1] ? "#/lesson/" + day + "/" + secs[i + 1][0] : "#/lesson/" + day + "/finish";
    const prev = secs[i - 1] ? "#/lesson/" + day + "/" + secs[i - 1][0] : "#/lesson/" + day;
    return `<section class="player p-step" data-step="${sec}">
      <div class="p-bar">
        <a class="p-close" href="${lessonExit(L)}" aria-label="Close — your progress is saved">✕</a>
        <a class="p-progress" href="#/lesson/${day}" aria-label="Step ${i + 1} of ${secs.length}. Open the lesson overview">${secs.map(function (s, k) { return `<i class="${k === i ? "cur" : prog[s[0]] || st.completed[day] ? "done" : ""}"></i>`; }).join("")}</a>
        <button class="p-icon" data-act="listen" aria-label="Listen to this step">🔊</button>
        <button class="p-icon es-toggle ${st.settings.lessonEs ? "on" : ""}" data-act="toggle-es" aria-pressed="${!!st.settings.lessonEs}" aria-label="Explicaciones en español">ES</button>
      </div>
      <p class="p-where"><a href="#/lesson/${day}">${i + 1} of ${secs.length} · ${esc(L.title)}</a></p>
      <article class="sec" data-day="${day}" data-sec="${sec}">
        ${sectionHTML(L, sec)}
      </article>
      <div class="lesson-foot p-foot">
        <a class="btn ghost p-back" href="${prev}" aria-label="${secs[i - 1] ? "Back to " + esc(secs[i - 1][1]) : "Back to the overview"}">←</a>
        <a class="btn primary p-next" href="${next}" data-act="sec-done" data-day="${day}" data-sec="${sec}">${secs[i + 1] ? "Continue" : "Finish"} →</a>
      </div>
    </section>`;
  }

  function sectionHTML(L, sec) {
    const day = L.day, E = esFor(L);
    switch (sec) {
      case "learn": return `<p class="sec-label">Learn</p>
        ${L.why ? `<p class="why-box"><b>Why this matters.</b> ${L.why}${ES(at(E, "w"))}</p>` : ""}
        ${(L.learn.body || []).map(function (p, i) { return `<p>${p}${ES(at(E, "l", i))}</p>`; }).join("")}
        ${L.learn.phrases && L.learn.phrases.length ? `<div data-shadow-scope><div class="row wrap between"><h3>Phrases to own</h3>${TAW.enh.shadowButton()}</div><ul class="phrases">${L.learn.phrases.map(function (p, pi) { return `<li><div class="ph-top"><b class="serif">${esc(p.en)}</b>${tts(p.en)}</div><span class="tone">${esc(p.tone)}</span><p class="small">${esc(p.note)}${ES(at(E, "p", pi))}</p></li>`; }).join("")}</ul></div>` : ""}
        ${L.learn.tip ? `<p class="mentor">“${esc(L.learn.tip)}”${ES(at(E, "t"))}</p>` : ""}
        ${L.milestone && L.type !== "graduation" ? milestoneBlock(L) : ""}`;
      case "vocab": {
        const list = S.state.profile.mode === "quick" ? L.vocab.slice(0, 3) : L.vocab;
        return `<p class="sec-label">Vocabulary</p><p class="muted">Not a list — a set of tools. One word at a time: read the nuance, then make it yours.</p>
        <div class="vcar" data-vcar data-n="${list.length}">
          <div class="vcar-head"><span class="vcar-count">Word <b>1</b> of ${list.length}</span><span class="vcar-dots">${list.map(function (v, i) { return `<button class="vdot ${i ? "" : "on"}" data-vgo="${i}" aria-label="Word ${i + 1}: ${esc(v.word)}"></button>`; }).join("")}</span></div>
          ${list.map(function (v, i) { return `<div class="vslide ${i ? "" : "on"}" data-i="${i}">${vocabCard(v, day, i, at(E, "v", i))}</div>`; }).join("")}
        </div>`;
      }
      case "culture": {
        const c = L.culture && TAW.cards[L.culture];
        return `<p class="sec-label">Culture</p>
          ${c ? cardFull(c, true, E) : `<div class="ref"><p class="serif big">${esc(L.cultureRef)}</p></div>`}
          ${L.cultureNote ? `<p class="why-box">${esc(L.cultureNote)}${ES(at(E, "c"))}</p>` : ""}
          ${writeBox(day, "culture", c ? "In your own words: what could you say about " + esc(c.name) + " in a conversation?" : "In your own words: why does this reference matter?", { rows: 3 })}`;
      }
      case "sayBetter": {
        const sb = L.sayBetter;
        return `<p class="sec-label">Say it better</p><p class="muted">Start basic. Climb one level at a time — and notice what each step adds.</p>
          <div class="ladder" data-ladder data-shadow-scope>
            <div class="rung basic"><span class="kicker">Basic</span><p class="serif big">“${esc(sb.basic)}”</p></div>
            ${sb.levels.map(function (l, i) { return `<div class="rung" ${i > 0 ? "hidden" : ""}><span class="kicker">${esc(l[0])}</span><p class="serif">“${esc(l[1])}”</p>${l[2] ? `<p class="small muted">${esc(l[2])}${ES(at(E, "s", i))}</p>` : ""}${tts(l[1])}</div>`; }).join("")}
            <div class="row wrap"><button class="btn small" data-act="ladder-next">Next level ↓</button>${TAW.enh.shadowButton("◐ Shadow the levels")}</div>
          </div>
          ${writeBox(day, "sayBetter", esc(sb.prompt || "Now your version:") + ES(at(E, "s", 4)), { rows: 3 })}`;
      }
      case "exercise": {
        const ex = L.exercise;
        return `<p class="sec-label">Practise · ${esc(ex.title)}</p>${E ? `<p class="es-label" lang="es">${esc(at(E, "e", 0))}</p>` : ""}<p>${esc(ex.instructions)}${ES(at(E, "e", 1))}</p>
          <ol class="exercise">${ex.items.map(function (it, i) { return `<li><p class="q">${esc(it.q)}</p>
            <textarea data-save="${day}|ex${i}" rows="2" placeholder="Your version…">${esc(S.getAnswer(day, "ex" + i))}</textarea>
            <details><summary>Show a model answer</summary><p class="model">${esc(it.a)}</p></details></li>`; }).join("")}</ol>`;
      }
      case "think": return `<p class="sec-label">Think</p><p class="serif big">${esc(L.think.q)}${ES(at(E, "k", 0))}</p>
        ${L.think.angles && L.think.angles.length ? `<p class="small muted">Angles to consider:</p><ul class="angles">${L.think.angles.map(function (a, i) { return `<li>${esc(a)}${ES(at(E, "k", i + 1))}</li>`; }).join("")}</ul>` : ""}
        ${writeBox(day, "think", "", { rows: 4, placeholder: "Notes, a position, a doubt… This is for thinking, not performing.", feedback: false })}`;
      case "express": return `<p class="sec-label">Write</p>${writeBox(day, "express", esc(L.express.prompt) + ES(at(E, "x")), { rows: 7 })}`;
      case "speak": {
        const sp = L.speak;
        let html = `<p class="sec-label">Speak</p>`;
        if (sp.unfamiliar) {
          const topic = TAW.unfamiliarTopics[(day * 7) % TAW.unfamiliarTopics.length];
          html += `<p class="note">Your unfamiliar topic: <b>${esc(topic)}</b>. You have 60 seconds to think, then speak for two minutes. Define it, connect it to something you know, reason, admit uncertainty, conclude.</p>`;
          html += speakBox({ id: "d" + day, prompt: topic, seconds: 120, tag: "lesson", day: day, prep: 60 });
        } else if (sp.marathon) {
          const picks = [0, 1, 2].map(function (k) { return TAW.speakingChallenges[(day + k * 5) % TAW.speakingChallenges.length].p; });
          html += picks.map(function (p, k) { return speakBox({ id: "d" + day + "m" + k, prompt: p, seconds: 60, tag: "lesson", day: day }); }).join("");
        } else if (sp.benchmarkOnly) {
          html += `<p class="muted">Before the test, one last time — the question from Day 1.</p>` + speakBox({ id: "bm" + day, prompt: sp.prompt.replace("Final benchmark: ", ""), seconds: sp.seconds, tag: "benchmark", day: day, constraint: false, suggestMine: false });
        } else {
          const isBm = sp.benchmark === true;
          html += speakBox({ id: "d" + day, prompt: sp.prompt, seconds: sp.seconds, tag: isBm ? "benchmark" : "lesson", day: day, structure: sp.structure, tryWords: sp.tryWords, constraint: isBm ? false : undefined, suggestMine: !isBm, es: E && E.sp });
          if (isBm) html += `<p class="fine">This is your “before vs after” question. <a href="#/progress/compare">Compare all your answers →</a></p>`;
        }
        if (sp.benchmark && sp.benchmark.prompt) {
          html += `<h3>Your baseline</h3><p class="note">${esc(L.speak.benchmark.note)}</p>` + speakBox({ id: "bm" + day, prompt: TAW.benchmark.prompt, seconds: L.speak.benchmark.seconds, tag: "benchmark", day: day, constraint: false, suggestMine: false });
        }
        return html;
      }
      case "graduation": return `<p class="sec-label">The Articulate Woman Test</p><p>Seven parts. Speak each one. When you finish, your <a href="#/progress/transformation">180-Day Transformation</a> is waiting.</p>
        ${L.graduation.map(function (g) { return `<h3>Part ${g.part} — ${esc(g.title)}</h3>` + speakBox({ id: "grad" + g.part, prompt: g.prompt, seconds: g.seconds, tag: "graduation", day: 180, constraint: false }); }).join("")}`;
      case "weekly": return weeklyBlock(L);
      case "science": {
        const b = TAW.getLesson(L.science), done = S.state.completed[L.science];
        return `<p class="sec-label">The science of learning</p><p class="muted">This week’s review works because of how memory and the brain work. Here is the science behind it — the Learning Brain lesson for Week ${b.n}.</p>
          <a class="sug-item" href="#/lesson/${L.science}"><span class="kicker">The Learning Brain · ${b.n} ${done ? "· ✓ completed" : "· about 25 min"}</span><b>${esc(b.title)}</b><span class="small muted">${esc(b.why)}</span></a>
          ${b.culture && TAW.cards[b.culture] ? `<blockquote class="idea">${esc(TAW.cards[b.culture].idea)}</blockquote>` : ""}`;
      }
      case "recall": return `<p class="sec-label">Recall</p><p class="muted">Try to answer before you reveal. Retrieval is where memory is built.</p>
        <ol class="recall">${L.recall.map(function (r, i) { return `<li data-recall="${i}"><p class="q">${esc(r.q)}</p><details><summary>Reveal</summary><p class="model">${esc(r.a)}</p>
          <div class="row"><button class="pill" data-act="recall-rate" data-ok="1" data-word="${esc(r.word || "")}">I knew it</button><button class="pill" data-act="recall-rate" data-ok="0" data-word="${esc(r.word || "")}">Not yet</button></div></details></li>`; }).join("")}</ol>`;
      case "reflect": return `<p class="sec-label">Reflect</p><p class="serif big">${esc(L.reflect)}${ES(at(E, "r"))}</p>${writeBox(day, "reflect", "", { rows: 5, feedback: false, placeholder: "This goes into your Journal." })}`;
      case "deep": return `<p class="sec-label">Go deeper</p><h3>${esc(L.deep.title)}${ES(at(E, "d", 0))}</h3><p>${esc(L.deep.body)}${ES(at(E, "d", 1))}</p>${writeBox(day, "deep", esc(L.deep.prompt) + ES(at(E, "d", 2)), { rows: 7 })}`;
    }
    return "";
  }

  function vocabCard(v, day, i, ev) {
    const saved = !!S.state.words[v.word];
    ev = ev || [];
    return `<div class="vocab">
      <div class="v-head"><h3 class="serif">${esc(v.word)}</h3>${v.pron ? `<span class="pron">${esc(v.pron)}</span>` : ""}${tts(v.word)}${v.pos ? `<span class="pos">${esc(v.pos)}</span>` : ""}</div>
      <p class="def">${esc(v.definition)}${ES(ev[0])}</p>
      ${v.nuance ? `<p><span class="lab">Nuance</span> ${esc(v.nuance)}${ES(ev[1])}</p>` : ""}
      ${v.synonyms && v.synonyms.length ? `<p><span class="lab">Similar</span> ${v.synonyms.map(function (s) { return `<span class="chip">${esc(s)}</span>`; }).join(" ")}</p>` : ""}
      ${v.distinction ? `<p><span class="lab">The difference</span> ${esc(v.distinction)}${ES(ev[2])}</p>` : ""}
      ${v.example ? `<p class="example">“${esc(v.example)}” ${tts(v.example)}</p>` : ""}
      ${v.conversation ? `<div class="convo"><span class="lab">In conversation</span><p>${nl(v.conversation)}</p></div>` : ""}
      <label class="lbl"><span class="lab">Your turn</span> ${esc(v.prompt || "Write your own sentence.")}
        <textarea data-save="${day}|v_${esc(v.word)}" rows="2">${esc(S.getAnswer(day, "v_" + v.word))}</textarea></label>
      <button class="btn small ${saved ? "on" : ""}" data-act="save-word" data-day="${day}" data-i="${i}">${saved ? "✓ In My Words" : "+ Save to My Words"}</button>
    </div>`;
  }

  function milestoneBlock(L) {
    return `<div class="milestone-box"><p class="kicker">★ Milestone · ${esc(L.milestone.title)}</p><p class="serif big">${esc(L.milestone.line)}</p></div>`;
  }

  function weeklyBlock(L) {
    const day = L.day, w = S.state.weekly[day] || { answers: {} };
    const r = TAW.weeklyReport(day);
    return `<p class="sec-label">Weekly reflection</p>
      ${TAW.weeklyQuestions.map(function (q, i) { return `<label class="lbl">${esc(q)}<textarea data-weekly="${day}|${i}" rows="2">${esc(w.answers[i] || "")}</textarea></label>`; }).join("")}
      <div class="report card-soft">
        <p class="kicker">Weekly intellectual report</p>
        <h3 class="serif">This week you explored</h3>
        <ul class="report-list">${Object.keys(r.groups).map(function (g) { return `<li><b>${esc(g)}:</b> ${esc(r.groups[g].join(", "))}</li>`; }).join("")}</ul>
        ${r.best ? `<p><b>Your strongest development:</b> ${esc(r.best)}.</p><p><b>To work on:</b> ${esc(r.worst)}.</p>` : `<p class="muted small">Speak at least once this week to see your strongest development.</p>`}
        ${r.newWords.length ? `<p><b>Words you saved:</b> ${r.newWords.map(function (x) { return `<span class="chip">${esc(x)}</span>`; }).join(" ")}</p>` : ""}
        <p><b>Next:</b> ${esc(r.next.join(" · "))}</p>
      </div>
      ${L.milestone ? milestoneBlock(L) : ""}`;
  }

  function finish(L) {
    const st = S.state, day = L.day, done = !!st.completed[day];
    const card = L.culture && TAW.cards[L.culture];
    const secs = TAW.lessonSections(L, st.profile.mode), prog = st.progress[day] || {};
    const words = (L.vocab || []).map(function (v) { return v.word; });
    const bar = `<div class="p-bar"><a class="p-close" href="${lessonExit(L)}" aria-label="Close">✕</a><a class="p-progress" href="#/lesson/${day}" aria-label="Lesson overview">${secs.map(function () { return `<i class="done"></i>`; }).join("")}</a></div>`;
    const earned = `<ul class="earned">
      ${words.length ? `<li><span class="e-ic">Aa</span><span><b>${words.length} ${words.length === 1 ? "word enters" : "words enter"} your review cycle</b><span class="chips">${words.map(function (w) { return `<span class="chip">${esc(w)}</span>`; }).join(" ")}</span></span></li>` : ""}
      ${card ? `<li><span class="e-ic">✦</span><span><b>${esc(card.name)}</b> ${done ? "is in" : "joins"} your Cultural Passport</span></li>` : ""}
      ${L.reflect ? `<li><span class="e-ic">✎</span><span>Your reflection ${done ? "is saved in" : "goes to"} your <b>Journal</b></span></li>` : ""}
    </ul>`;
    if (!done) {
      const skipped = secs.filter(function (s) { return !prog[s[0]]; });
      return `<section class="player p-finish">${bar}
        <div class="fin">
          <p class="kicker">${esc(TAW.lessonLabel(L))} · ${esc(L.title)}</p>
          <h1>You made it to the end.</h1>
          <p class="lede">One last tap to complete the day.</p>
          ${earned}
          ${skipped.length ? `<p class="small muted">Skipped: ${skipped.map(function (s) { return `<a href="#/lesson/${day}/${s[0]}">${esc(s[1])}</a>`; }).join(", ")} — that’s fine; you can come back any time.</p>` : ""}
          <p class="lbl">How interesting was today’s topic for you?</p>
          <div class="row center wrap">${[[1, "Not for me"], [2, "Interesting"], [3, "Fascinating"]].map(function (r) { return `<button class="pill" data-act="rate-lesson" data-v="${r[0]}">${r[1]}</button>`; }).join("")}</div>
        </div>
        <div class="p-foot"><button class="btn primary p-next" data-act="complete" data-day="${day}">✓ Complete ${esc(TAW.lessonLabel(L))}</button></div>
      </section>`;
    }
    const nextTrack = L.track && TAW.nextTrackKey(L);
    const path = L.track ? [] : todayPath(), nx = path.find(function (p) { return !p.done; });
    return `<section class="player p-finish">${bar}
      <div class="fin">
        <div class="fin-badge" aria-hidden="true">✓</div>
        <p class="kicker">${esc(TAW.lessonLabel(L))} · complete</p>
        <h1>${esc(L.title)}</h1>
        ${S.streak() > 1 ? `<p class="fin-streak">🔥 ${S.streak()} days in a row</p>` : ""}
        ${earned}
        ${nx ? `<a class="next-card" href="${nx.href}"><span class="kicker">Next on today’s path</span><b>${esc(nx.title)}</b><span class="small muted">${esc(nx.sub)}</span></a>` : !L.track ? `<p class="path-done">Today’s path is complete ✓ See you tomorrow.</p>` : ""}
        <p class="mentor">“${esc(TAW.mentorLines[(L.n || L.day) % TAW.mentorLines.length])}”</p>
        ${!L.track && day < 180 ? `<p class="small center"><a href="#/lesson/${day + 1}">Preview Day ${day + 1}: ${esc(TAW.getLesson(day + 1).title)} →</a></p>` : ""}
      </div>
      <div class="p-foot">
        <a class="btn ghost" href="${L.track ? "#/studio" : "#/"}">${L.track ? "Studio" : "Today"}</a>
        ${nx ? `<a class="btn primary p-next" href="${nx.href}">${esc(nx.cta)}: ${esc(nx.title)} →</a>` : nextTrack ? `<a class="btn primary p-next" href="#/lesson/${nextTrack}">Next: ${esc(TAW.getLesson(nextTrack).title)} →</a>` : `<a class="btn primary p-next" href="${L.track ? "#/studio" : "#/"}">Done for today</a>`}
      </div>
    </section>`;
  }

  /* ───────────── Studio (tracks) ───────────── */
  function studioWeek() { return Math.max(1, Math.ceil(S.currentDay() / 7)); }
  function thisWeekTrack(trackId) {
    const keys = TAW.tracks[trackId].modules.reduce(function (a, m) { return a.concat(m.lessons); }, []);
    const st = S.state, wk = studioWeek();
    const due = keys.slice(0, wk).find(function (k) { return !st.completed[k]; });
    return due || (wk < keys.length ? null : null);
  }
  function studio() {
    const st = S.state, w = st.profile.work || {};
    return `<section>${header("Professional & science tracks", "Studio", "Two tracks that run alongside the main journey — one lesson a week each, at your own pace.")}
      ${!w.role && !w.industry ? `<p class="note small">Tell the app about your work in <a href="#/settings">Settings → Your work</a>, and every “Ask Claude” request will be tailored to your role and industry.</p>` : `<p class="small muted">Tailored to: ${esc([w.role, w.industry].filter(Boolean).join(" · "))} <a href="#/settings">edit</a></p>`}
      ${["voice", "brain"].map(function (id) {
        const t = TAW.tracks[id];
        const keys = t.modules.reduce(function (a, m) { return a.concat(m.lessons); }, []);
        const doneN = keys.filter(function (k) { return st.completed[k]; }).length;
        return `<article class="card track"><p class="kicker">${doneN} of ${keys.length} completed · ${esc(t.cadence)}</p><h2 class="serif">${esc(t.title)}</h2><p class="lede">${esc(t.subtitle)}</p>
          <div class="progress-line"><i style="width:${Math.round(doneN / keys.length * 100)}%"></i></div>
          ${t.modules.map(function (m) { return `<h4>${esc(m.title)}</h4><ol class="track-list">${m.lessons.map(function (k) { const L = TAW.getLesson(k), d = st.completed[k];
            return `<li class="${d ? "done" : ""}"><a href="#/lesson/${k}"><span class="tl-n">${d ? "✓" : L.n}</span><span>${esc(L.title)}</span></a></li>`; }).join("")}</ol>`; }).join("")}
        </article>`;
      }).join("")}
    </section>`;
  }

  /* ───────────── Journey ───────────── */
  function journey() {
    const st = S.state, cur = S.currentDay();
    return `<section>${header("180 days", "Your Journey", "Six months, one transformation. Open any day — completed days stay available to revisit.")}
      <p class="legend small"><span>✓ completed</span><span>● today</span><span>○ upcoming</span><span>↻ review</span><span>★ milestone</span></p>
      ${TAW.months.map(function (m) {
        const days = []; for (let d = (m.n - 1) * 30 + 1; d <= m.n * 30; d++) days.push(d);
        const doneN = days.filter(function (d) { return st.completed[d]; }).length;
        return `<section class="month"><div class="month-head"><p class="kicker">Month ${m.n} · ${doneN}/30</p><h2 class="serif">${esc(m.title)}</h2><p class="muted small">${esc(m.theme)} — ${esc(m.shift)}</p></div>
          <div class="cal">${days.map(function (d) {
            const L = TAW.getLesson(d);
            const done = st.completed[d], isMile = TAW.milestoneDays.indexOf(d) >= 0, isRev = L.type === "review";
            const mark = done ? "✓" : d === cur ? "●" : isMile ? "★" : isRev ? "↻" : "○";
            const cls = [done ? "done" : "", d === cur ? "cur" : "", isMile ? "mile" : "", isRev ? "rev" : ""].join(" ");
            const diff = L.difficulty ? L.difficulty[0] : "";
            return `<a class="cal-day ${cls}" href="#/lesson/${d}" aria-label="Day ${d}: ${esc(L.title)}${done ? ", completed" : ""}">
              <span class="cd-top"><span class="cd-n">${d}</span><span class="cd-m" aria-hidden="true">${mark}</span></span>
              <span class="cd-t">${esc(L.title)}</span>
              <span class="cd-c">${esc(catLabel(L.cat))}${diff ? " · " + diff : ""}</span></a>`;
          }).join("")}</div></section>`;
      }).join("")}</section>`;
  }

  /* ───────────── Culture ───────────── */
  function culture(sub, filter) {
    if (sub === "map") return intellectualMap(filter);
    const st = S.state;
    const all = Object.values(TAW.cards);
    const got = all.filter(function (c) { return st.passport[c.id]; }).length;
    const list = filter ? all.filter(function (c) { return c.cat === filter; }) : all;
    const dayOf = {};
    for (let d = 1; d <= 180; d++) { const m = TAW.map[d]; const ref = TAW.lessons[d] ? TAW.lessons[d].culture : m && m.ref; if (ref && TAW.cards[ref] && !dayOf[ref]) dayOf[ref] = d; }
    const studioOf = {};
    Object.keys(TAW.trackLessons || {}).forEach(function (k) { const t = TAW.trackLessons[k]; if (t.culture && !studioOf[t.culture]) studioOf[t.culture] = TAW.tracks[t.track].short + " " + t.n; });
    list.sort(function (a, b) { return (st.passport[b.id] ? 1 : 0) - (st.passport[a.id] ? 1 : 0) || (dayOf[a.id] || 999) - (dayOf[b.id] || 999); });
    return `<section>${header("Collection", "Cultural Passport", got + " of " + all.length + " references collected. Each one is something you can now talk about.")}
      ${tabs([["passport", "#/culture", "Passport"], ["map", "#/culture/map", "Intellectual map"]], "passport")}
      <div class="chips filter"><a class="chip ${!filter ? "on" : ""}" href="#/culture">All</a>${TAW.passportCategories.map(function (c) {
        const n = all.filter(function (x) { return x.cat === c[0]; }).length, g = all.filter(function (x) { return x.cat === c[0] && st.passport[x.id]; }).length;
        return n ? `<a class="chip ${filter === c[0] ? "on" : ""}" href="#/culture/p/${c[0]}"><span aria-hidden="true">${c[1]}</span> ${esc(c[2])} <span class="muted">${g}/${n}</span></a>` : "";
      }).join("")}</div>
      <div class="pass-grid">${list.map(function (c) {
        const has = st.passport[c.id], pc = passCat(c.cat);
        return `<a class="pass ${has ? "has" : ""}" href="#/card/${c.id}"><span class="pass-cat"><span aria-hidden="true">${pc[1]}</span> ${esc(pc[2])}</span>
          <b class="serif">${esc(c.name)}</b><span class="small muted">${esc(c.period)}</span>
          <span class="pass-status small">${has ? "✓ Collected" + (has.day ? " · " + (typeof has.day === "number" ? "Day " + has.day : esc(TAW.getLesson(has.day).label)) : "") : dayOf[c.id] ? "Arrives Day " + dayOf[c.id] : studioOf[c.id] ? "In the Studio · " + esc(studioOf[c.id]) : "Not yet visited"}</span></a>`;
      }).join("")}</div></section>`;
  }

  function cardFull(c, inLesson, E) {
    const cw = S.state.settings.lessonEs && TAW.esCards ? TAW.esCards[c.id] : null;
    const pc = passCat(c.cat);
    const rel = (c.related || []).map(function (r) { return TAW.cards[r] ? `<a class="chip" href="#/card/${r}">${esc(TAW.cards[r].name)}</a>` : `<span class="chip">${esc(r)}</span>`; }).join(" ");
    return `<div class="pcard">
      <p class="kicker"><span aria-hidden="true">${pc[1]}</span> ${esc(pc[2])} · ${esc(c.period)}${c.origin ? " · " + esc(c.origin) : ""}</p>
      <h2 class="serif">${esc(c.name)}</h2>
      <p class="lede">${esc(c.why)}${ES(cw)}</p>
      <h4>Three things to know</h4><ol>${c.facts.map(function (f) { return `<li>${esc(f)}</li>`; }).join("")}</ol>
      <blockquote class="idea">${esc(c.idea)}</blockquote>
      <div data-shadow-scope><div class="row wrap between"><h4>How to talk about it</h4>${TAW.enh.shadowButton()}</div><ul class="talk">${c.talk.map(function (t) { return `<li>“${esc(t)}” ${tts(t)}</li>`; }).join("")}</ul></div>
      ${rel ? `<h4>Connects to</h4><p>${rel}</p>` : ""}
    </div>`;
  }

  function card(id) {
    const c = TAW.cards[id];
    if (!c) return header("", "Not found");
    const has = S.state.passport[id];
    return `<section><a class="back" href="#/culture">← Passport</a><article class="card">${cardFull(c)}
      <div class="row"><span class="pass-status">${has ? "✓ In your passport" : "Not yet collected"}</span>
      <button class="btn small" data-act="toggle-card" data-id="${id}">${has ? "Remove from passport" : "I can talk about this — add it"}</button></div></article></section>`;
  }

  function intellectualMap(hubId) {
    const hub = TAW.mapHubs.find(function (h) { return h.id === hubId; }) || TAW.mapHubs[0];
    const st = S.state, n = hub.nodes.length, W = 760, H = 560, cx = W / 2, cy = H / 2, R = 200;
    const nodes = hub.nodes.map(function (nd, i) {
      const a = -Math.PI / 2 + i * 2 * Math.PI / n;
      return { x: cx + R * 1.05 * Math.cos(a), y: cy + R * Math.sin(a), disc: nd[0], label: nd[1], id: nd[2], has: nd[2] && st.passport[nd[2]], a: a };
    });
    const svg = `<svg viewBox="0 0 ${W} ${H}" class="imap" role="img" aria-label="${esc(hub.name)} connects to ${nodes.map(function (x) { return x.disc + ": " + x.label; }).join(", ")}">
      ${nodes.map(function (p) { return `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" class="edge ${p.has ? "on" : ""}"/>`; }).join("")}
      <circle cx="${cx}" cy="${cy}" r="62" class="hub"/><text x="${cx}" y="${cy + 6}" class="hub-t" text-anchor="middle">${esc(hub.name)}</text>
      ${nodes.map(function (p) {
        const anchor = Math.abs(Math.cos(p.a)) < 0.3 ? "middle" : Math.cos(p.a) > 0 ? "start" : "end";
        const dx = anchor === "start" ? 14 : anchor === "end" ? -14 : 0, dy = anchor === "middle" ? (Math.sin(p.a) > 0 ? 26 : -24) : 0;
        const inner = `<circle cx="${p.x}" cy="${p.y}" r="9" class="node ${p.has ? "on" : ""}"/>
          <text x="${p.x + dx}" y="${p.y + dy - 4}" text-anchor="${anchor}" class="n-disc">${esc(p.disc.toUpperCase())}</text>
          <text x="${p.x + dx}" y="${p.y + dy + 12}" text-anchor="${anchor}" class="n-lab">${esc(p.label)}</text>`;
        return p.id ? `<a href="#/card/${p.id}" aria-label="${esc(p.label)}">${inner}</a>` : `<g>${inner}</g>`;
      }).join("")}
    </svg>`;
    return `<section>${header("Connections", "My Intellectual Map", "Knowledge sticks when it connects. Filled points are references you’ve collected; tap any point to open it.")}
      ${tabs([["passport", "#/culture", "Passport"], ["map", "#/culture/map", "Intellectual map"]], "map")}
      <div class="chips filter">${TAW.mapHubs.map(function (h) { return `<a class="chip ${h.id === hub.id ? "on" : ""}" href="#/culture/map/${h.id}">${esc(h.name)}</a>`; }).join("")}</div>
      <div class="card map-wrap">${svg}</div><p class="fine map-hint">On a phone, swipe sideways to see the whole map — or use the list below.</p>
      <ul class="map-list">${nodes.map(function (p) { return `<li><span class="lab">${esc(p.disc)}</span> → ${p.id ? `<a href="#/card/${p.id}">${esc(p.label)}</a>` : esc(p.label)} ${p.has ? "✓" : ""}</li>`; }).join("")}</ul>
      <p class="note">Try it aloud: explain how <b>${esc(hub.name.toLowerCase())}</b> connects at least three of these points. That sentence is what “well read” sounds like.</p>
      ${speakBox({ id: "map-" + hub.id, prompt: "Explain how " + hub.name.toLowerCase() + " connects " + nodes.slice(0, 3).map(function (p) { return p.label; }).join(", ") + ".", seconds: 90, tag: "challenge" })}
    </section>`;
  }

  /* ───────────── Library ───────────── */
  const STATUS = [["want", "Want to read"], ["reading", "Reading"], ["finished", "Finished"], ["favorite", "Favourite"]];
  const FSTATUS = [["want", "Want to watch"], ["watched", "Watched"], ["favorite", "Favourite"]];
  function library(sub, filter) {
    const st = S.state;
    const t = tabs([["books", "#/library", "Reading shelf"], ["films", "#/library/films", "Cinema"], ["world", "#/library/world", "The world"]], sub || "books");
    if (sub === "films") {
      const cats = ["classics", "modern", "international", "documentaries", "psychology", "politics", "relationships", "identity", "society", "art"];
      const list = filter ? TAW.films.filter(function (f) { return f.cats.indexOf(filter) >= 0; }) : TAW.films;
      return `<section>${header("Library", "Cinema & Culture", "Entertainment becomes cultural literacy when you ask the right questions afterwards.")}${t}
        <div class="chips filter"><a class="chip ${!filter ? "on" : ""}" href="#/library/films">All</a>${cats.map(function (c) { return `<a class="chip ${filter === c ? "on" : ""}" href="#/library/films/${c}">${esc(c[0].toUpperCase() + c.slice(1))}</a>`; }).join("")}</div>
        <div class="shelf">${list.map(function (f) { return `<a class="book" href="#/film/${f.id}"><b class="serif">${esc(f.title)}</b><span class="small">${esc(f.director)} · ${f.year} · ${esc(f.country)}</span><span class="small muted">${esc(f.why)}</span>${st.films[f.id] ? `<span class="chip on">${esc((FSTATUS.find(function (s) { return s[0] === st.films[f.id]; }) || [, ""])[1])}</span>` : ""}</a>`; }).join("")}</div></section>`;
    }
    if (sub === "world") return world(t);
    const tiers = [["essential", "Essential", "Books that genuinely matter."], ["recommended", "Recommended", "Worth reading if the subject draws you."], ["optional", "Optional", "For deeper exploration."]];
    return `<section>${header("Library", "The Reading Shelf", "You don’t need to read everything. Choose well, read slowly, and talk about what you read.")}${t}
      ${tiers.map(function (tr) { return `<h2 class="serif">${tr[1]}</h2><p class="muted small">${tr[2]}</p><div class="shelf">${TAW.books.filter(function (b) { return b.tier === tr[0]; }).map(function (b) {
        return `<a class="book" href="#/book/${b.id}"><b class="serif">${esc(b.title)}</b><span class="small">${esc(b.author)} · ${b.year}</span><span class="small muted">${"●".repeat(b.difficulty)}${"○".repeat(3 - b.difficulty)} difficulty · ~${b.hours}h</span>${st.books[b.id] ? `<span class="chip on">${esc((STATUS.find(function (s) { return s[0] === st.books[b.id]; }) || [, ""])[1])}</span>` : ""}</a>`;
      }).join("")}</div>`; }).join("")}</section>`;
  }

  function book(id) {
    const b = TAW.books.find(function (x) { return x.id === id; }); if (!b) return header("", "Not found");
    const cur = S.state.books[id];
    return `<section><a class="back" href="#/library">← Reading shelf</a><article class="card">
      <p class="kicker">${esc(b.tier)} · ${"●".repeat(b.difficulty)}${"○".repeat(3 - b.difficulty)} difficulty · ~${b.hours} hours</p>
      <h1 class="serif">${esc(b.title)}</h1><p class="lede">${esc(b.author)}, ${b.year}</p>
      <div class="row wrap">${STATUS.map(function (s) { return `<button class="pill ${cur === s[0] ? "on" : ""}" data-act="book-status" data-id="${id}" data-v="${s[0]}">${s[1]}</button>`; }).join("")}</div>
      <h4>Why read it</h4><p>${esc(b.why)}</p>
      <h4>Historical context</h4><p>${esc(b.context)}</p>
      <h4>Key ideas</h4><ul>${b.ideas.map(function (x) { return `<li>${esc(x)}</li>`; }).join("")}</ul>
      <h4>Themes</h4><p>${b.themes.map(function (x) { return `<span class="chip">${esc(x)}</span>`; }).join(" ")}</p>
      <h4>Vocabulary</h4><p>${b.vocab.map(function (x) { return `<span class="chip">${esc(x)}</span>`; }).join(" ")}</p>
      <h4>Questions</h4><ul>${b.questions.map(function (x) { return `<li>${esc(x)}</li>`; }).join("")}</ul>
      <h4>Discussion</h4>${writeBox("book-" + id, "notes", esc(b.prompt), { rows: 4 })}
      ${speakBox({ id: "book-" + id, prompt: "Talk about " + b.title + ": what it’s about, one idea, and your reaction.", seconds: 90, tag: "challenge" })}
    </article></section>`;
  }

  function film(id) {
    const f = TAW.films.find(function (x) { return x.id === id; }); if (!f) return header("", "Not found");
    const cur = S.state.films[id];
    return `<section><a class="back" href="#/library/films">← Cinema</a><article class="card">
      <p class="kicker">${f.cats.map(esc).join(" · ")}</p><h1 class="serif">${esc(f.title)}</h1><p class="lede">${esc(f.director)} · ${f.year} · ${esc(f.country)}</p>
      <div class="row wrap">${FSTATUS.map(function (s) { return `<button class="pill ${cur === s[0] ? "on" : ""}" data-act="film-status" data-id="${id}" data-v="${s[0]}">${s[1]}</button>`; }).join("")}</div>
      <h4>Why watch it</h4><p>${esc(f.why)}</p><h4>Watch for</h4><p>${esc(f.watch)}</p>
      <h4>After watching</h4>
      ${TAW.filmQuestions.concat([f.q]).map(function (q, i) { return `<label class="lbl">${esc(q)}<textarea data-save="film-${id}|q${i}" rows="2">${esc(S.getAnswer("film-" + id, "q" + i))}</textarea></label>`; }).join("")}
      <button class="btn small" data-act="film-journal" data-id="${id}">Save my notes to the Journal</button>
    </article></section>`;
  }

  function world(t) {
    const brief = S.state.worldBrief;
    const casesHTML = TAW.worldCases.map(function (c) { return worldCase(c); }).join("");
    return `<section>${header("Library", "What’s happening in the world", "Not a news feed — a way of learning from the news. Always separate fact, interpretation and opinion.")}${t}
      <div class="card-soft"><p class="kicker">Today’s briefing ✦</p>
        ${brief ? worldCase(brief, true) : `<p class="muted small">With an API key and a connection, your mentor finds one recent story from reputable sources and turns it into a lesson.</p>`}
        <div class="row wrap"><button class="btn small" data-act="world-claude">Ask Claude for today’s briefing ✦</button>${S.state.settings.aiKey ? `<button class="btn small ghost" data-act="world-brief">${brief ? "Find another story" : "Prepare it in the app"} (API)</button>` : ""}</div>
        <p class="fine">${esc(TAW.ai.why())}</p></div>
      <h2 class="serif">Practise on your own headline</h2>
      <form class="card form" data-form="headline">
        <label class="lbl">Paste a headline or a sentence from an article<textarea name="h" rows="2"></textarea></label>
        <label class="lbl">FACT — what verifiably happened?<textarea name="fact" rows="2"></textarea></label>
        <label class="lbl">INTERPRETATION — what do people say it means?<textarea name="interp" rows="2"></textarea></label>
        <label class="lbl">OPINION — what do you think, and how sure are you?<textarea name="op" rows="2"></textarea></label>
        <button class="btn" type="submit">Save to Journal</button></form>
      <h2 class="serif">Case studies</h2><p class="muted small">Evergreen examples — available offline.</p>${casesHTML}</section>`;
  }
  function worldCase(c, live) {
    return `<article class="case card">
      <p class="kicker">${esc(c.field)}${c.date ? " · " + esc(c.date) : ""}${c.sources ? " · " + esc(c.sources.join(", ")) : ""}</p>
      <h3 class="serif">${esc(c.title)}</h3>
      <div class="fio"><div><span class="lab">Fact</span><p>${esc(c.fact)}</p></div><div><span class="lab">Interpretation</span><p>${esc(c.interpretation)}</p></div><div><span class="lab">Opinion</span><p>${esc(c.opinion)}</p></div></div>
      ${c.concepts ? `<ul>${c.concepts.map(function (k) { return `<li><b>${esc(k.term)}</b> — ${esc(k.explain)}</li>`; }).join("")}</ul>` : ""}
      <p>${(c.vocab || []).map(function (v) { return `<span class="chip">${esc(v)}</span>`; }).join(" ")}</p>
      <details><summary>Speak about it</summary>${speakBox({ id: "w-" + (c.id || "live"), prompt: c.prompt, seconds: 90, tag: "challenge" })}</details></article>`;
  }

  /* ───────────── Words ───────────── */
  function words(sub) {
    const t = tabs([["mine", "#/words", "My words"], ["review", "#/words/review", "Review"], ["better", "#/words/better", "Say it better"]], sub || "mine");
    if (sub === "review") return review(t);
    if (sub === "better") return better(t);
    const st = S.state;
    const list = Object.values(st.words).sort(function (a, b) { return a.added < b.added ? 1 : -1; });
    const rv = function (w) { return st.review[("word:" + w).toLowerCase()]; };
    return `<section>${header("Vocabulary", "Words I actually use", "A word isn’t yours until you’ve used it. Save the ones you want; the app brings them back until they stick.")}${t}
      <form class="card form inline-form" data-form="add-word">
        <input name="word" placeholder="Word or expression" required aria-label="Word">
        <input name="meaning" placeholder="Meaning" aria-label="Meaning">
        <input name="example" placeholder="Your example sentence" aria-label="Example">
        <input name="pron" placeholder="Pronunciation (e.g. ful-FILD)" aria-label="Pronunciation">
        <button class="btn" type="submit">Save word</button></form>
      ${list.length >= 3 ? `<a class="sug-item" href="#/speak/run/mywords"><span class="kicker">Challenge</span><b>Use three of your words in one spoken answer</b></a>` : ""}
      ${list.length ? `<div class="word-table" role="table">
        <div class="wt-row wt-head" role="row"><span>Word</span><span>Meaning & example</span><span>Learned</span><span>Used</span><span>Mastery</span></div>
        ${list.map(function (w) { const r = rv(w.word); return `<div class="wt-row" role="row"><span><b class="serif">${esc(w.word)}</b> ${tts(w.word)}<br><span class="small muted">${esc(w.pron || "")}</span></span>
          <span class="small">${esc(w.meaning || w.definition || "")}${w.example ? `<br><i>“${esc(w.example)}”</i>` : ""}</span>
          <span class="small">${esc(w.added)}</span><span class="small">${w.uses || 0}×</span>
          <span><span class="status ${r ? S.statusOf(r).replace(" ", "-") : "new"}">${r ? S.statusOf(r) : "new"}</span> <button class="link small" data-act="del-word" data-w="${esc(w.word)}" aria-label="Remove ${esc(w.word)}">remove</button></span></div>`; }).join("")}
      </div>` : `<p class="muted">No saved words yet. Save words from lessons with “+ Save to My Words”, or add your own above.</p>`}
    </section>`;
  }

  function review(t) {
    const due = S.dueItems();
    const all = Object.values(S.state.review);
    const counts = { "new": 0, learning: 0, familiar: 0, mastered: 0, "needs review": 0 };
    all.forEach(function (i) { counts[S.statusOf(i)]++; });
    const it = due[0];
    let body;
    if (!it) body = `<div class="card center"><p class="serif big">Nothing due. Your memory is up to date.</p><p class="muted">Items return on day 1, 3, 7, 14, 30 and 60 — each time asking a little more of you.</p><div class="row center">${TAW.enh.sessionLink()}</div></div>`;
    else {
      const task = S.taskFor(it);
      const ask = {
        Recognise: it.kind === "phrase" ? "What does this phrase do, and when would you use it?" : "What does it mean?",
        Recall: "Say a sentence with it — out loud — before revealing.",
        Use: "Write a sentence using it about your own life.",
        Explain: "Explain its meaning and nuance as if to a friend.",
        Discuss: "Use it in a 30-second spoken opinion on anything.",
        Connect: "Connect it to a topic from another discipline."
      }[task];
      body = `<div class="card review-card" data-review="${esc(it.id)}">
        <p class="kicker">${esc(it.kind)} · ${task} · ${due.length} due</p>
        <h2 class="serif">${esc(it.front)}</h2>${it.extra && it.extra.pron ? `<p class="pron">${esc(it.extra.pron)}</p>` : ""}
        <p>${esc(ask)}</p>
        ${task === "Use" || task === "Explain" || task === "Connect" ? `<textarea rows="3" class="rv-input" placeholder="Your answer…"></textarea>` : ""}
        <div class="flip"><div class="flip-inner">
          <div class="face front"><span class="kicker">Think first</span><p class="serif">Answer in your head — or out loud — before you turn the card.</p></div>
          <div class="face back"><p class="model">${esc(it.back)}</p>${it.extra && it.extra.example ? `<p class="example">“${esc(it.extra.example)}”</p>` : ""}${it.extra && it.extra.card ? `<a href="#/card/${it.extra.card}">Open passport card →</a>` : ""}</div>
        </div></div>
        <button class="btn primary" data-act="flip">Turn the card</button>
        <div class="grade" hidden>${[["again", "Again"], ["hard", "Hard"], ["good", "Got it"], ["easy", "Easy"]].map(function (g) { return `<button class="btn ${g[0] === "good" ? "primary" : ""}" data-act="grade" data-g="${g[0]}" data-id="${esc(it.id)}">${g[1]}</button>`; }).join("")}</div>
      </div>`;
    }
    return `<section>${header("Active recall", "Review", "Retrieve, don’t reread. A few minutes a day keeps everything you’ve learned alive.")}${t}
      <p class="legend small">${Object.keys(counts).map(function (k) { return `<span><span class="status ${k.replace(" ", "-")}">${k}</span> ${counts[k]}</span>`; }).join("")}</p>${body}</section>`;
  }

  function better(t) {
    const st = S.state;
    const idx = (st.betterIdx || 0) % TAW.sayBetterBank.length;
    const b = TAW.sayBetterBank[idx];
    return `<section>${header("Central practice", "Say It Better", "You know what you mean. Now let’s find the language for it.")}${t}
      <div class="card"><div class="ladder" data-ladder>
        <div class="rung basic"><span class="kicker">Basic</span><p class="serif big">“${esc(b.basic)}”</p></div>
        ${b.levels.map(function (l, i) { return `<div class="rung" ${i > 0 ? "hidden" : ""}><span class="kicker">Level ${i + 1}</span><p class="serif">“${esc(l)}”</p>${tts(l)}</div>`; }).join("")}
        <p class="small muted rung" hidden><b>Why it works:</b> ${esc(b.note)}</p>
        <button class="btn small" data-act="ladder-next">Next level ↓</button></div>
        ${writeBox("better-" + idx, "mine", "Your Level 4 version:", { rows: 3 })}
        <div class="row"><button class="btn ghost" data-act="better-next">Another sentence →</button></div></div>
      <h2 class="serif">Make your own ladder</h2>
      <form class="card form" data-form="own-ladder"><label class="lbl">Type a basic sentence you often say<input name="s" placeholder="e.g. It was very good."></label>
        <div class="row wrap"><button class="btn" type="button" data-act="ladder-claude">Climb it with Claude ✦</button>${S.state.settings.aiKey ? `<button class="btn ghost" type="submit">In the app (API)</button>` : ""}</div><div class="own-result"></div></form>
    </section>`;
  }

  /* ───────────── Speak ───────────── */
  function speak(sub, arg) {
    const t = tabs([["challenges", "#/speak", "Challenges"], ["find", "#/speak/find", "Find the words"], ["cards", "#/speak/cards", "Conversation cards"], ["history", "#/speak/history", "My recordings"]], sub === "run" ? "challenges" : (sub || "challenges"));
    if (sub === "find") return findWords(t);
    if (sub === "cards") return cards(t, arg);
    if (sub === "history") return history(t);
    if (sub === "run") return runChallenge(t, arg);
    if (sub === "shadow") return TAW.enh.shadowView(t);
    const groups = [30, 60, 90, 120, 180];
    return `<section>${header("Practice", "Speaking challenges", "Knowledge becomes yours when you say it out loud. Record, listen back, and look at the patterns — not for perfection, for progress.")}${t}
      <div class="tool-grid">
        <a class="tool" href="#/speak/run/unfamiliar"><b>Unfamiliar topic</b><span>60s to think · 2 min to speak</span></a>
        <a class="tool" href="#/speak/run/random"><b>Surprise me</b><span>A random prompt</span></a>
        <a class="tool" href="#/speak/run/mywords"><b>My Words challenge</b><span>Use 3 saved words</span></a>
        <a class="tool" href="#/speak/run/constraint"><b>Constraint drill</b><span>Without your crutch word</span></a>
        <a class="tool" href="#/speak/shadow"><b>Shadowing</b><span>Listen, then repeat — 8 new sentences daily</span></a>
      </div>
      ${groups.map(function (g) { const items = TAW.speakingChallenges.map(function (c, i) { return [c, i]; }).filter(function (x) { return x[0].s === g; });
        return `<h2 class="serif">${g < 60 ? g + " seconds" : g / 60 + (g === 60 ? " minute" : " minutes")}</h2><ul class="prompt-list">${items.map(function (x) { return `<li><a href="#/speak/run/${x[1]}">${esc(x[0].p)}</a></li>`; }).join("")}</ul>`; }).join("")}
    </section>`;
  }

  function runChallenge(t, arg) {
    const st = S.state;
    let o;
    if (arg === "unfamiliar") { const tp = TAW.unfamiliarTopics[Math.floor(Math.random() * TAW.unfamiliarTopics.length)]; o = { prompt: tp, seconds: 120, prep: 60, note: "You don’t need to know much. Define it, connect it to something you know, reason about causes and consequences, admit uncertainty, conclude." }; }
    else if (arg === "random") { const c = TAW.speakingChallenges[Math.floor(Math.random() * TAW.speakingChallenges.length)]; o = { prompt: c.p, seconds: c.s }; }
    else if (arg === "mywords") { const ws = Object.keys(st.words).sort(function () { return Math.random() - .5; }).slice(0, 3); const c = TAW.speakingChallenges[Math.floor(Math.random() * TAW.speakingChallenges.length)]; o = { prompt: c.p, seconds: Math.max(60, c.s), tryWords: ws, note: ws.length < 3 ? "Save a few words first in My Words — then this challenge gets personal." : "Use all three: " + ws.join(", ") + "." }; }
    else if (arg === "constraint") { const top = Object.entries(st.overuse).sort(function (a, b) { return b[1] - a[1]; })[0]; const w = top ? top[0] : "i think"; o = { prompt: "What is something you believe most people get wrong?", seconds: 60, note: "Constraint: don’t say “" + w + "”. Alternatives: " + (TAW.overuseTargets[w] || []).join(" / "), constraint: false }; }
    else { const c = TAW.speakingChallenges[+arg] || TAW.speakingChallenges[0]; o = { prompt: c.p, seconds: c.s }; }
    o.id = "run"; o.tag = "challenge";
    return `<section>${header("Speaking challenge", "Your turn", "")}${t}${speakBox(o)}<p><a class="btn ghost" href="#/speak/run/${esc(arg)}" data-act="rerun">Another one →</a></p></section>`;
  }

  function findWords(t) {
    return `<section>${header("Your language engine", "I have an idea but I don’t know how to say it", "Type it in simple English, Spanish or Portuguese. We’ll find the natural English — and explain why it works.")}${t}
      <form class="card form" data-form="find"><textarea name="idea" rows="3" placeholder="Quiero decir que una persona puede tener éxito pero no necesariamente sentirse realizada."></textarea>
        <button class="btn primary" type="submit">Find the words</button></form>
      <div class="row wrap"><button class="btn ghost" data-act="find-claude">Ask Claude instead ✦</button></div>
      <div class="find-result"></div>
      <p class="fine">“Find the words” shows phrase frames that fit your idea, offline. “Ask Claude” opens Claude with your idea ready to send, using your Claude account.</p></section>`;
  }

  function cards(t, which) {
    const keys = Object.keys(TAW.conversationCards);
    const k = which && TAW.conversationCards[which] ? which : keys[0];
    const deck = TAW.conversationCards[k];
    return `<section>${header("Before you go", "Conversation cards", "Open a deck before a dinner, a meeting or a date. Pick one or two — you don’t need more.")}${t}
      <div class="chips filter">${keys.map(function (x) { const d = TAW.conversationCards[x]; return `<a class="chip ${x === k ? "on" : ""}" href="#/speak/cards/${x}"><span aria-hidden="true">${d.icon}</span> ${esc(d.title)}</a>`; }).join("")}</div>
      <div class="deck">${deck.items.map(function (q, i) { return `<div class="qcard"><span class="kicker">${esc(deck.title)} · ${i + 1}</span><p class="serif">${esc(q)}</p>${tts(q)}</div>`; }).join("")}</div></section>`;
  }

  function history(t) {
    const list = S.state.speaking;
    return `<section>${header("Your voice over time", "My recordings", list.length + " speaking attempts saved.")}${t}
      ${list.length ? list.slice(0, 80).map(function (a) { return `<details class="card attempt"><summary><span class="kicker">${esc(a.date)} · ${esc(a.tag)}${a.day ? " · Day " + a.day : ""}</span><b>${esc(a.prompt)}</b>
        <span class="small muted">${a.analysis ? a.analysis.words + " words" + (a.analysis.wpm ? " · " + a.analysis.wpm + " wpm" : "") + " · " + a.analysis.fillerTotal + " fillers" : ""}${a.confidence ? " · confidence " + a.confidence + "/5" : ""}</span></summary>
        ${a.hasAudio ? `<button class="btn small" data-act="play" data-id="${a.id}">▶ Play recording</button><audio data-audio="${a.id}" controls hidden></audio>` : ""}
        <p class="transcript-view">${esc(a.transcript || "")}</p>${a.analysis ? analysisHTML(a.analysis) : ""}${a.ai ? aiHTML(a.ai) : ""}${a.claude ? `<div class="ai-fb"><p class="kicker">Claude’s feedback ✦</p><p class="transcript-view">${esc(a.claude)}</p></div>` : ""}
        <button class="link small" data-act="del-attempt" data-id="${a.id}">Delete</button></details>`; }).join("") : `<p class="muted">Your recordings will appear here.</p>`}</section>`;
  }

  /* ───────────── Progress ───────────── */
  function progress(sub) {
    const t = tabs([["profile", "#/progress", "Profile"], ["compare", "#/progress/compare", "Before vs after"], ["reports", "#/progress/reports", "Weekly reports"], ["transformation", "#/progress/transformation", "Transformation"]], sub || "profile");
    if (sub === "compare") return compare(t);
    if (sub === "reports") return reports(t);
    if (sub === "transformation") return transformation(t);
    const st = S.state, prof = S.profile(), strands = S.strands();
    const mastered = Object.values(st.review).filter(function (i) { return i.stage >= 5; }).length;
    const minutes = Object.values(st.activity).reduce(function (a, b) { return a + b; }, 0);
    const finished = Object.values(st.books).filter(function (v) { return v === "finished" || v === "favorite"; }).length;
    return `<section>${header("Analytics", "My language profile", "These are learning indicators drawn from your practice — not scientific or academic assessments. Use them to notice patterns.")}${t}
      <div class="stats big-stats">
        <div><b>${S.completedCount()}</b><span>days completed</span></div><div><b>${Object.keys(st.words).length}</b><span>my words</span></div>
        <div><b>${mastered}</b><span>items mastered</span></div><div><b>${Object.keys(st.passport).length}</b><span>passport references</span></div>
        <div><b>${st.speaking.length}</b><span>speaking attempts</span></div><div><b>${finished}</b><span>books finished</span></div>
        <div><b>${Math.round(minutes / 60 * 10) / 10}</b><span>hours practised</span></div><div><b>${st.journal.length}</b><span>journal entries</span></div>
      </div>
      <div class="card"><h3 class="serif">Ten indicators</h3>${prof.map(function (p) { return bar(p.k, p.v, 100, p.how); }).join("")}</div>
      <div class="card"><h3 class="serif">Five strands</h3>${Object.keys(strands).map(function (k) { return bar(k, strands[k], 100); }).join("")}</div>
      ${patterns()}
    </section>`;
  }

  function patterns() {
    const st = S.state;
    const over = Object.entries(st.overuse).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 5);
    const ratings = Object.entries(st.interest).map(function (e) { return [e[0], e[1].reduce(function (a, b) { return a + b; }, 0) / e[1].length]; }).sort(function (a, b) { return b[1] - a[1]; });
    const counts = {}; Object.keys(st.passport).forEach(function (id) { const c = TAW.cards[id]; if (c) counts[c.cat] = (counts[c.cat] || 0) + 1; });
    const weak = TAW.passportCategories.filter(function (c) { return !counts[c[0]]; }).map(function (c) { return c[2]; }).slice(0, 5);
    const struggling = Object.values(st.review).filter(function (i) { return i.lapses >= 2; }).map(function (i) { return i.front; }).slice(0, 8);
    return `<div class="card"><h3 class="serif">What the app is learning about you</h3>
      <p><b>Words you lean on:</b> ${over.length ? over.map(function (o) { return `<span class="chip">${esc(o[0])} ×${o[1]}</span>`; }).join(" ") + ` <a href="#/speak/run/constraint">Practise without them →</a>` : "<span class='muted'>Speak a few times to see this.</span>"}</p>
      <p><b>Topics you enjoy most:</b> ${ratings.length ? ratings.slice(0, 3).map(function (r) { return esc(catLabel(r[0])); }).join(", ") : "<span class='muted'>Rate lessons when you finish them.</span>"}</p>
      <p><b>Cultural areas still blank:</b> ${weak.length ? esc(weak.join(", ")) : "None — impressive breadth."}</p>
      <p><b>Words that keep slipping:</b> ${struggling.length ? struggling.map(function (w) { return `<span class="chip">${esc(w)}</span>`; }).join(" ") : "<span class='muted'>None yet.</span>"}</p></div>`;
  }

  function compare(t) {
    const bm = S.state.speaking.filter(function (s) { return s.tag === "benchmark"; }).slice().reverse();
    return `<section>${header("Before vs after", "The same question, every month", "“" + TAW.benchmark.prompt + "” — asked on Days " + TAW.benchmark.days.join(", ") + ".")}${t}
      <div class="timeline">${TAW.benchmark.days.map(function (d) {
        const a = bm.filter(function (s) { return +s.day === d; })[0];
        return `<div class="tl-item ${a ? "has" : ""}"><span class="tl-day">Day ${d}</span>${a ? `<div class="card-soft">
          <p class="small muted">${esc(a.date)} · ${a.analysis.words} words${a.analysis.wpm ? " · " + a.analysis.wpm + " wpm" : ""} · ${a.analysis.fillerTotal} fillers · variety ${a.analysis.variety} · nuance ${a.analysis.scores.nuance}/10 · structure ${a.analysis.scores.structure}/10</p>
          ${a.hasAudio ? `<button class="btn small" data-act="play" data-id="${a.id}">▶ Listen</button><audio data-audio="${a.id}" controls hidden></audio>` : ""}
          <p class="transcript-view">${esc(a.transcript)}</p></div>` : `<p class="muted small">${d <= S.currentDay() ? "Not recorded" : "Upcoming"} — <a href="#/lesson/${d}/speak">open Day ${d}</a></p>`}</div>`;
      }).join("")}</div>
      ${bm.length >= 2 ? deltaHTML(bm[0], bm[bm.length - 1]) : ""}</section>`;
  }
  function deltaHTML(a, b) {
    const row = function (label, x, y, better) { const d = y - x; const good = better === "up" ? d > 0 : d < 0; return `<li>${esc(label)}: ${x} → <b>${y}</b> ${d ? `<span class="${good ? "ok" : "warn"}">(${d > 0 ? "+" : ""}${d})</span>` : ""}</li>`; };
    return `<div class="card"><h3 class="serif">First vs latest</h3><ul>
      ${row("Words", a.analysis.words, b.analysis.words, "up")}${row("Lexical variety", a.analysis.variety, b.analysis.variety, "up")}
      ${row("Fillers", a.analysis.fillerTotal, b.analysis.fillerTotal, "down")}${row("Nuance (/10)", a.analysis.scores.nuance, b.analysis.scores.nuance, "up")}
      ${row("Structure (/10)", a.analysis.scores.structure, b.analysis.scores.structure, "up")}</ul></div>`;
  }

  function reports(t) {
    const st = S.state;
    const days = []; for (let d = 7; d <= 175; d += 7) if (st.completed[d] || st.weekly[d]) days.push(d);
    return `<section>${header("Every seven days", "Weekly intellectual reports", "")}${t}
      ${days.length ? days.reverse().map(function (d) { const r = TAW.weeklyReport(d); const w = st.weekly[d] || { answers: {} };
        return `<article class="card"><p class="kicker">Week ${d / 7} · Day ${d}</p><h3 class="serif">This week you explored</h3>
          <ul class="report-list">${Object.keys(r.groups).map(function (g) { return `<li><b>${esc(g)}:</b> ${esc(r.groups[g].join(", "))}</li>`; }).join("")}</ul>
          ${r.best ? `<p><b>Strongest development:</b> ${esc(r.best)}</p>` : ""}
          ${w.answers[2] ? `<p><b>The idea that stayed with you:</b> ${esc(w.answers[2])}</p>` : ""}
          ${w.answers[5] ? `<p><b>Now you can explain:</b> ${esc(w.answers[5])}</p>` : ""}
          <p><b>Next:</b> ${esc(r.next.join(" · "))}</p><a href="#/lesson/${d}/weekly">Open review →</a></article>`; }).join("") : `<p class="muted">Your first report appears on Day 7.</p>`}</section>`;
  }

  function transformation(t) {
    const st = S.state;
    const cards = Object.keys(st.passport).map(function (id) { return TAW.cards[id]; }).filter(Boolean);
    const by = function (cat) { return cards.filter(function (c) { return c.cat === cat; }); };
    const concepts = Object.values(st.review).filter(function (i) { return i.kind === "concept" && i.stage >= 5; });
    const booksSeen = TAW.books.filter(function (b) { return st.books[b.id]; });
    const sp = st.speaking.filter(function (s) { return s.analysis; });
    const fillers = {}; sp.forEach(function (s) { Object.entries(s.analysis.fillers).forEach(function (f) { fillers[f[0]] = (fillers[f[0]] || 0) + f[1]; }); });
    const weak = Object.entries(Object.assign({}, st.overuse, fillers)).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 4);
    const prof = S.profile().filter(function (p) { return p.v != null; }).sort(function (a, b) { return a.v - b.v; });
    const bm = st.speaking.filter(function (s) { return s.tag === "benchmark"; }).slice().reverse();
    const wordsByMonth = [0, 0, 0, 0, 0, 0];
    Object.values(st.words).forEach(function (w) { const m = Math.min(5, Math.max(0, Math.floor(S.daysBetween(st.profile.startDate, w.added) / 30))); wordsByMonth[m]++; });
    let cum = 0;
    const maxCum = Math.max(1, Object.keys(st.words).length);
    return `<section>${header("Day 180", "My 180-Day Transformation", S.completedCount() >= 180 ? "Well read. Well spoken. Curious. Articulate." : "A living portrait — it fills in as you go, and becomes complete on Day 180.")}${t}
      <div class="stats big-stats">
        <div><b>${Object.keys(st.words).length}</b><span>personal vocabulary</span></div><div><b>${cards.length}</b><span>cultural topics</span></div>
        <div><b>${booksSeen.length}</b><span>books encountered</span></div><div><b>${by("thinkers").length + by("women").length}</b><span>thinkers & women encountered</span></div>
        <div><b>${concepts.length}</b><span>concepts mastered</span></div><div><b>${sp.length}</b><span>speaking challenges</span></div>
      </div>
      <div class="card"><h3 class="serif">Vocabulary growth</h3><div class="growth">${wordsByMonth.map(function (n, i) { cum += n; return `<div class="g-col"><i style="height:${Math.round(cum / maxCum * 100)}%"></i><span>M${i + 1}</span><span class="small">${cum}</span></div>`; }).join("")}</div></div>
      <div class="card"><h3 class="serif">Encountered</h3>
        <p><b>Thinkers & women:</b> ${by("thinkers").concat(by("women")).map(function (c) { return `<a class="chip" href="#/card/${c.id}">${esc(c.name)}</a>`; }).join(" ") || "—"}</p>
        <p><b>Books & authors:</b> ${by("books").map(function (c) { return `<a class="chip" href="#/card/${c.id}">${esc(c.name)}</a>`; }).join(" ") || "—"}</p>
        <p><b>Ideas & concepts:</b> ${by("ideas").concat(by("concepts")).map(function (c) { return `<a class="chip" href="#/card/${c.id}">${esc(c.name)}</a>`; }).join(" ") || "—"}</p></div>
      <div class="card"><h3 class="serif">Patterns</h3>
        <p><b>Recurring weaknesses:</b> ${weak.length ? weak.map(function (w) { return `<span class="chip">${esc(w[0])} ×${w[1]}</span>`; }).join(" ") : "—"}</p>
        <p><b>Strongest areas:</b> ${prof.slice(-3).reverse().map(function (p) { return esc(p.k); }).join(", ") || "—"}</p>
        <p><b>For continued development:</b> ${prof.slice(0, 3).map(function (p) { return esc(p.k); }).join(", ") || "—"}</p>
        ${bm.length >= 2 ? deltaHTML(bm[0], bm[bm.length - 1]) : ""}</div>
      <div class="card"><h3 class="serif">Who was I on Day 1?</h3>${writeBox("transformation", "day1", "", { rows: 4, feedback: false })}
        <h3 class="serif">Who am I on Day 180?</h3>${writeBox("transformation", "day180", "", { rows: 4 })}</div>
    </section>`;
  }

  /* ───────────── Journal ───────────── */
  function journal(filter) {
    const st = S.state;
    const kinds = [["", "All"], ["reflection", "Lesson reflections"], ["weekly", "Weekly"], ["milestone", "Milestones"], ["free", "Free writing"], ["culture", "Books, films, news"]];
    const list = st.journal.filter(function (j) { return !filter || j.kind === filter; });
    const prompt = TAW.journalPrompts[(st.journalIdx || 0) % TAW.journalPrompts.length];
    return `<section>${header("Private", "Journal", "Intellectual self-development — what you notice, question and come to believe.")}
      <form class="card form" data-form="journal">
        <p class="kicker">Prompt <button type="button" class="link small" data-act="next-prompt">another →</button></p>
        <p class="serif big jprompt">${esc(prompt)}</p>
        <input type="hidden" name="prompt" value="${esc(prompt)}">
        <textarea name="text" rows="6" placeholder="Write freely — in English if you can, but any language is fine."></textarea>
        <button class="btn primary" type="submit">Save entry</button></form>
      <div class="chips filter">${kinds.map(function (k) { return `<a class="chip ${filter === k[0] || (!filter && !k[0]) ? "on" : ""}" href="#/journal${k[0] ? "/" + k[0] : ""}">${k[1]}</a>`; }).join("")}</div>
      ${list.length ? list.map(function (j) { return `<article class="entry"><p class="kicker">${esc(j.date)} · ${esc(j.kind)}${j.day ? " · Day " + j.day : ""}</p>${j.prompt ? `<p class="serif">${esc(j.prompt)}</p>` : ""}<p>${nl(j.text)}</p><button class="link small" data-act="del-journal" data-id="${j.id}">Delete</button></article>`; }).join("") : `<p class="muted">No entries yet.</p>`}
    </section>`;
  }

  /* ───────────── Settings ───────────── */
  function settings() {
    const st = S.state, s = st.settings, p = st.profile;
    return `<section>${header("Preferences", "Settings", "")}
      <form class="card form" data-form="settings">
        <label class="lbl">Name<input name="name" value="${esc(p.name)}"></label>
        <label class="lbl">Program start date<input type="date" name="startDate" value="${esc(p.startDate)}"></label>
        <fieldset><legend class="lbl">Default session length</legend><div class="seg">${[["quick", "Quick", "10–15"], ["standard", "Standard", "25–35"], ["deep", "Deep", "45–60"]].map(function (m) { return `<label><input type="radio" name="mode" value="${m[0]}" ${p.mode === m[0] ? "checked" : ""}><span>${m[1]}<small>${m[2]} min</small></span></label>`; }).join("")}</div></fieldset>
        <fieldset><legend class="lbl">Appearance</legend><div class="seg">${[["auto", "Auto"], ["light", "Light"], ["dark", "Dark"]].map(function (m) { return `<label><input type="radio" name="theme" value="${m[0]}" ${s.theme === m[0] ? "checked" : ""}><span>${m[1]}</span></label>`; }).join("")}</div></fieldset>
        <fieldset><legend class="lbl">Text size</legend><div class="seg">${[["s", "Small"], ["m", "Medium"], ["l", "Large"]].map(function (m) { return `<label><input type="radio" name="textSize" value="${m[0]}" ${s.textSize === m[0] ? "checked" : ""}><span>${m[1]}</span></label>`; }).join("")}</div></fieldset>
        <fieldset><legend class="lbl">Your work <span class="muted small">— added to every “Ask Claude” request so advice fits your job</span></legend>
          <input name="role" value="${esc((p.work || {}).role || "")}" placeholder="Role, e.g. Senior Manager, E-commerce & Automation" aria-label="Role">
          <input name="industry" value="${esc((p.work || {}).industry || "")}" placeholder="Industry, e.g. retail, consumer goods, fintech" aria-label="Industry">
          <textarea name="focus" rows="2" placeholder="What you want to get better at, e.g. presenting to the board, talking about AI strategy" aria-label="Professional focus">${esc((p.work || {}).focus || "")}</textarea></fieldset>
        <label class="lbl">Speech recognition & voice<select name="speechLang">${[["en-US", "English (US)"], ["en-GB", "English (UK)"], ["en-AU", "English (Australia)"], ["en-IE", "English (Ireland)"]].map(function (l) { return `<option value="${l[0]}" ${s.speechLang === l[0] ? "selected" : ""}>${l[1]}</option>`; }).join("")}</select></label>
        <button class="btn primary" type="submit">Save</button></form>
      <div class="card"><h3 class="serif">Claude, your mentor ✦</h3>
        <p class="small"><b>Easiest: no key needed.</b> Every “Ask Claude ✦” button in the app writes the mentor request for you, copies it, and opens Claude — use it with your normal Claude account.</p>
        <p class="small"><b>Optional: an API key</b> shows the feedback inside the app instead, and can write full lessons into the app for offline use. Billed separately by Anthropic. Your key is stored only on this device and sent only to Anthropic.</p>
        <form class="form" data-form="ai"><label class="lbl">API key<input name="aiKey" type="password" autocomplete="off" value="${esc(s.aiKey)}" placeholder="sk-ant-…"></label>
          <label class="lbl">Model<select name="aiModel">${[["claude-opus-5-5", "Claude Opus 5.5 (recommended)"], ["claude-sonnet-5-5", "Claude Sonnet 5.5 (faster, cheaper)"], ["claude-haiku-5-5", "Claude Haiku 5.5 (fastest)"]].map(function (m) { return `<option value="${m[0]}" ${s.aiModel === m[0] ? "selected" : ""}>${m[1]}</option>`; }).join("")}</select></label>
          <div class="row"><button class="btn" type="submit">Save key</button><button class="btn ghost" type="button" data-act="ai-test">Test</button><span class="ai-status small"></span></div></form></div>
      <div class="card"><h3 class="serif">Your data</h3><p class="small">Everything lives only on this device. “Back up” opens the iPhone share sheet — choose “Save to Files” (iCloud Drive) or send it to yourself. To restore on a new phone, use “Restore backup” and pick that file. ${st.lastBackup ? "<b>Last backup: " + esc(st.lastBackup) + ".</b>" : "<b>No backup yet.</b>"}</p>
        <div class="row wrap"><button class="btn primary" data-act="backup">Back up now</button><label class="btn ghost">Restore backup<input type="file" accept="application/json,.json,text/plain" data-act="import" hidden></label><button class="btn ghost danger" data-act="reset">Start over</button></div></div>
      <div class="card"><h3 class="serif">Add to your iPhone Home Screen</h3><p class="small">In Safari, tap the Share button, then “Add to Home Screen”. The app then opens full-screen and works offline.</p></div>
      <div class="philosophy small-phil"><p>Read widely.</p><p>Think deeply.</p><p>Speak clearly.</p><p>Stay curious.</p></div>
    </section>`;
  }

  TAW.views = { pageHeader: header, studio, home, lesson, todayPath, pathNextLink, journey, culture, card, library, book, film, words, speak, progress, journal, settings, onboarding, analysisHTML, aiHTML, speakBox };
})();
