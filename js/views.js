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
      <p class="speak-prompt">${esc(o.prompt)}</p>
      <p class="muted small">Aim for ${fmt(o.seconds || 60)}${o.prep ? " · " + o.prep + " seconds to think first" : ""}</p>
      ${o.note ? `<p class="note">${esc(o.note)}</p>` : ""}
      ${o.structure && o.structure.length ? `<ol class="structure">${o.structure.map(function (s) { return `<li>${esc(s)}</li>`; }).join("")}</ol>` : ""}
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
        <button class="btn ghost" data-act="speak-ai" ${TAW.ai.available() ? "" : "title=\"" + esc(TAW.ai.why()) + "\""}>Mentor feedback ✦</button>
      </div>
      <div class="confidence" hidden><span class="small">How confident did you feel?</span>
        ${[1, 2, 3, 4, 5].map(function (n) { return `<button class="pill" data-act="confidence" data-v="${n}" aria-label="Confidence ${n} of 5">${n}</button>`; }).join("")}</div>
      <div class="speak-result"></div>
    </div>`;
  }

  function writeBox(day, key, prompt, opts) {
    opts = opts || {};
    const val = S.getAnswer(day, key);
    return `<div class="write" data-write="${esc(day + "|" + key)}" data-prompt="${esc(prompt || "")}">
      ${prompt ? `<p class="q">${prompt}</p>` : ""}
      <textarea data-save="${esc(day + "|" + key)}" rows="${opts.rows || 5}" placeholder="${esc(opts.placeholder || "Write here…")}">${esc(val)}</textarea>
      <div class="row wrap"><span class="small muted wc">${val ? val.trim().split(/\s+/).length + " words" : ""}</span>
      ${opts.feedback === false ? "" : `<button class="btn small" data-act="write-analyse">Feedback</button><button class="btn small ghost" data-act="write-ai">Mentor ✦</button>`}</div>
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
        <label class="lbl">In one sentence: who do you want to be in six months? <span class="muted small">(any language)</span>
          <textarea name="goal" rows="2" placeholder="A woman who…"></textarea></label>
        <button class="btn primary big" type="submit">Begin Day 1</button>
        <p class="fine">Everything you write stays on this device. You can export it any time from Settings.</p>
      </form>
    </section>`;
  }

  /* ───────────── Home ───────────── */
  function home() {
    const st = S.state, day = S.currentDay(), L = TAW.getLesson(day), month = TAW.months[L.month - 1];
    const done = S.completedCount(), pct = Math.round(done / 180 * 100);
    const mode = st.profile.mode, mins = TAW.lessonMinutes(L, mode);
    const away = S.daysAway();
    const due = S.dueItems().length;
    const strands = S.strands();
    const name = st.profile.name;
    const streak = S.streak();
    const sug = suggestions();
    const line = TAW.mentorLines[new Date().getDate() % TAW.mentorLines.length];
    const firstSec = TAW.lessonSections(L, mode)[0];
    return `<section class="home">
      <header class="masthead">
        <p class="kicker">${name ? "Good to see you, " + esc(name) : "Welcome"}</p>
        <h1 class="wordmark">The Articulate Woman</h1>
        <div class="dayline"><span class="day-num">Day ${day} <span class="muted">/ 180</span></span><span class="muted">${pct}% complete${streak > 1 ? " · " + streak + " days in a row" : ""}</span></div>
        <div class="progress-line" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Program progress"><i style="width:${pct}%"></i></div>
      </header>
      ${away >= 2 ? `<div class="welcome-back"><p class="serif">Welcome back. Let’s continue.</p><p class="small muted">No catching up required — you pick up exactly where you left off.</p></div>` : ""}
      <article class="today card">
        <p class="kicker">Today · Month ${L.month} — ${esc(month.title)}</p>
        <h2 class="today-title">${esc(L.title)}</h2>
        <p class="muted">${esc(L.kicker || "")} · ${esc(L.difficulty || "")}</p>
        <p class="why">${L.why ? esc(L.why.replace(/<[^>]+>/g, "")) : ""}</p>
        <div class="mode-row" role="group" aria-label="Session length">
          ${[["quick", "Quick"], ["standard", "Standard"], ["deep", "Deep"]].map(function (m) { return `<button class="pill ${mode === m[0] ? "on" : ""}" data-act="mode" data-v="${m[0]}" aria-pressed="${mode === m[0]}">${m[1]} · ${TAW.lessonMinutes(L, m[0])} min</button>`; }).join("")}
        </div>
        <p class="small muted">Estimated time: ${mins} min</p>
        <div class="actions4">
          <a class="act" href="#/lesson/${day}/${firstSec ? firstSec[0] : "learn"}"><b>Learn</b><span>Start today</span></a>
          <a class="act" href="#/lesson/${day}/${L.think ? "think" : "learn"}"><b>Think</b><span>The question</span></a>
          <a class="act" href="#/lesson/${day}/${L.speak ? "speak" : "learn"}"><b>Speak</b><span>${L.speak ? fmt(L.speak.seconds || 60) : "—"}</span></a>
          <a class="act" href="#/words/review"><b>Review</b><span>${due} due</span></a>
        </div>
      </article>
      <section class="block">
        <h3 class="section-title">Your progress</h3>
        ${Object.keys(strands).map(function (k) { return bar(k, strands[k], 100); }).join("")}
        <p class="fine">Indicators of practice, not precise measurements. <a href="#/progress">See your full profile →</a></p>
      </section>
      ${sug.length ? `<section class="block"><h3 class="section-title">Suggested for you</h3><div class="sug">${sug.join("")}</div></section>` : ""}
      <section class="block tools">
        <h3 class="section-title">Tools</h3>
        <div class="tool-grid">
          <a class="tool" href="#/words/better"><b>Say it better</b><span>From basic to articulate</span></a>
          <a class="tool" href="#/speak/find"><b>Find the words</b><span>I have an idea but…</span></a>
          <a class="tool" href="#/speak/cards"><b>Conversation cards</b><span>Before you go out</span></a>
          <a class="tool" href="#/culture/map"><b>Intellectual map</b><span>How ideas connect</span></a>
        </div>
      </section>
      <section class="philosophy">
        <p>Read widely.</p><p>Think deeply.</p><p>Speak clearly.</p><p>Stay curious.</p>
        <p class="phil-small">The goal isn’t to sound intelligent. The goal is to become someone who thinks clearly enough that intelligence comes through naturally.</p>
      </section>
      <p class="mentor-line">“${esc(line)}”</p>
    </section>`;
  }

  function suggestions() {
    const st = S.state, out = [];
    const top = Object.entries(st.overuse).sort(function (a, b) { return b[1] - a[1]; })[0];
    if (top && top[1] >= 3) out.push(`<a class="sug-item" href="#/speak/run/constraint"><span class="kicker">Constraint drill</span><b>Speak for 60 seconds without “${esc(top[0])}”</b><span class="small muted">You’ve used it ${top[1]} times recently.</span></a>`);
    const counts = {};
    TAW.passportCategories.forEach(function (c) { counts[c[0]] = 0; });
    Object.keys(st.passport).forEach(function (id) { const c = TAW.cards[id]; if (c) counts[c.cat]++; });
    const pool = (st.profile.interests && st.profile.interests.length ? TAW.passportCategories.filter(function (c) { return true; }) : TAW.passportCategories);
    const weakest = pool.map(function (c) { return c[0]; }).filter(function (k) { return Object.values(TAW.cards).some(function (x) { return x.cat === k && !st.passport[x.id]; }); })
      .sort(function (a, b) { return counts[a] - counts[b]; })[0];
    if (weakest) {
      const card = Object.values(TAW.cards).find(function (x) { return x.cat === weakest && !st.passport[x.id]; });
      out.push(`<a class="sug-item" href="#/card/${card.id}"><span class="kicker">Widen your map · ${esc(passCat(weakest)[2])}</span><b>${esc(card.name)}</b><span class="small muted">${esc(card.why)}</span></a>`);
    }
    const ratings = Object.entries(st.interest).map(function (e) { return [e[0], e[1].reduce(function (a, b) { return a + b; }, 0) / e[1].length]; }).sort(function (a, b) { return b[1] - a[1]; });
    if (ratings.length) {
      const fav = ratings[0][0];
      const book = TAW.books.find(function (b) { return !st.books[b.id] && b.themes.concat([b.tier]).join(" ").indexOf(fav.slice(0, 5)) >= 0; }) || TAW.books.find(function (b) { return !st.books[b.id] && b.tier === "essential"; });
      if (book) out.push(`<a class="sug-item" href="#/book/${book.id}"><span class="kicker">Because you enjoy ${esc(catLabel(fav))}</span><b>${esc(book.title)}</b><span class="small muted">${esc(book.author)} · ${book.hours}h</span></a>`);
    }
    if (Object.keys(st.words).length >= 4) out.push(`<a class="sug-item" href="#/speak/run/mywords"><span class="kicker">My Words challenge</span><b>Use three of your saved words in one answer</b><span class="small muted">Words become yours when you use them.</span></a>`);
    return out.slice(0, 3);
  }

  /* ───────────── Lesson ───────────── */
  function lesson(day, sec) {
    day = +day;
    const L = TAW.getLesson(day), st = S.state, mode = st.profile.mode;
    const secs = TAW.lessonSections(L, mode);
    if (sec === "finish") return finish(L);
    sec = sec && secs.some(function (s) { return s[0] === sec; }) ? sec : (secs[0] ? secs[0][0] : "learn");
    const i = secs.findIndex(function (s) { return s[0] === sec; });
    const prog = st.progress[day] || {};
    const next = secs[i + 1] ? `#/lesson/${day}/${secs[i + 1][0]}` : `#/lesson/${day}/finish`;
    const prev = secs[i - 1] ? `#/lesson/${day}/${secs[i - 1][0]}` : null;
    const ahead = day > S.currentDay() && !st.completed[day];
    return `<section class="lesson">
      <a class="back" href="#/">← Today</a>
      <header class="lesson-head">
        <p class="kicker">Day ${day} · ${esc(L.kicker || "")}</p>
        <h1>${esc(L.title)}</h1>
        <p class="muted small">${esc(L.difficulty || "")} · ${TAW.lessonMinutes(L, mode)} min · ${mode} mode ${st.completed[day] ? "· ✓ completed" : ""}</p>
        ${ahead ? `<p class="note small">You’re ahead of your current day (${S.currentDay()}). That’s fine — explore freely.</p>` : ""}
        ${L.generated && !L.aiWritten ? `<p class="note small">This lesson is drawn from the curriculum map. <button class="link" data-act="ai-lesson" data-day="${day}">Expand it into a fully written lesson with your mentor ✦</button></p>` : ""}
      </header>
      <nav class="sec-nav" aria-label="Lesson sections">${secs.map(function (s) { return `<a href="#/lesson/${day}/${s[0]}" class="${s[0] === sec ? "on" : ""} ${prog[s[0]] ? "done" : ""}" aria-current="${s[0] === sec ? "step" : "false"}">${prog[s[0]] ? "✓ " : ""}${s[1]}</a>`; }).join("")}</nav>
      <article class="sec card" data-day="${day}" data-sec="${sec}">
        ${sectionHTML(L, sec)}
      </article>
      <div class="lesson-foot">
        ${prev ? `<a class="btn ghost" href="${prev}">← Back</a>` : "<span></span>"}
        <a class="btn primary" href="${next}" data-act="sec-done" data-day="${day}" data-sec="${sec}">${secs[i + 1] ? "Continue: " + secs[i + 1][1] + " →" : "Finish the day →"}</a>
      </div>
    </section>`;
  }

  function sectionHTML(L, sec) {
    const day = L.day;
    switch (sec) {
      case "learn": return `<p class="sec-label">Learn</p>
        ${L.why ? `<p class="why-box"><b>Why this matters.</b> ${L.why}</p>` : ""}
        ${(L.learn.body || []).map(function (p) { return `<p>${p}</p>`; }).join("")}
        ${L.learn.phrases && L.learn.phrases.length ? `<h3>Phrases to own</h3><ul class="phrases">${L.learn.phrases.map(function (p) { return `<li><div class="ph-top"><b class="serif">${esc(p.en)}</b>${tts(p.en)}</div><span class="tone">${esc(p.tone)}</span><p class="small">${esc(p.note)}</p></li>`; }).join("")}</ul>` : ""}
        ${L.learn.tip ? `<p class="mentor">“${esc(L.learn.tip)}”</p>` : ""}
        ${L.milestone && L.type !== "graduation" ? milestoneBlock(L) : ""}`;
      case "vocab": {
        const list = S.state.profile.mode === "quick" ? L.vocab.slice(0, 3) : L.vocab;
        return `<p class="sec-label">Vocabulary</p><p class="muted">Not a list — a set of tools. Read the nuance, then make each word yours.</p>
        ${list.map(function (v, i) { return vocabCard(v, day, i); }).join("")}`;
      }
      case "culture": {
        const c = L.culture && TAW.cards[L.culture];
        return `<p class="sec-label">Culture</p>
          ${c ? cardFull(c, true) : `<div class="ref"><p class="serif big">${esc(L.cultureRef)}</p></div>`}
          ${L.cultureNote ? `<p class="why-box">${esc(L.cultureNote)}</p>` : ""}
          ${writeBox(day, "culture", c ? "In your own words: what could you say about " + esc(c.name) + " in a conversation?" : "In your own words: why does this reference matter?", { rows: 3 })}`;
      }
      case "sayBetter": {
        const sb = L.sayBetter;
        return `<p class="sec-label">Say it better</p><p class="muted">Start basic. Climb one level at a time — and notice what each step adds.</p>
          <div class="ladder" data-ladder>
            <div class="rung basic"><span class="kicker">Basic</span><p class="serif big">“${esc(sb.basic)}”</p></div>
            ${sb.levels.map(function (l, i) { return `<div class="rung" ${i > 0 ? "hidden" : ""}><span class="kicker">${esc(l[0])}</span><p class="serif">“${esc(l[1])}”</p>${l[2] ? `<p class="small muted">${esc(l[2])}</p>` : ""}${tts(l[1])}</div>`; }).join("")}
            <button class="btn small" data-act="ladder-next">Next level ↓</button>
          </div>
          ${writeBox(day, "sayBetter", sb.prompt || "Now your version:", { rows: 3 })}`;
      }
      case "exercise": {
        const ex = L.exercise;
        return `<p class="sec-label">Practise · ${esc(ex.title)}</p><p>${esc(ex.instructions)}</p>
          <ol class="exercise">${ex.items.map(function (it, i) { return `<li><p class="q">${esc(it.q)}</p>
            <textarea data-save="${day}|ex${i}" rows="2" placeholder="Your version…">${esc(S.getAnswer(day, "ex" + i))}</textarea>
            <details><summary>Show a model answer</summary><p class="model">${esc(it.a)}</p></details></li>`; }).join("")}</ol>`;
      }
      case "think": return `<p class="sec-label">Think</p><p class="serif big">${esc(L.think.q)}</p>
        ${L.think.angles && L.think.angles.length ? `<p class="small muted">Angles to consider:</p><ul class="angles">${L.think.angles.map(function (a) { return `<li>${esc(a)}</li>`; }).join("")}</ul>` : ""}
        ${writeBox(day, "think", "", { rows: 4, placeholder: "Notes, a position, a doubt… This is for thinking, not performing.", feedback: false })}`;
      case "express": return `<p class="sec-label">Write</p>${writeBox(day, "express", esc(L.express.prompt), { rows: 7 })}`;
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
          html += speakBox({ id: "d" + day, prompt: sp.prompt, seconds: sp.seconds, tag: isBm ? "benchmark" : "lesson", day: day, structure: sp.structure, tryWords: sp.tryWords, constraint: isBm ? false : undefined, suggestMine: !isBm });
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
      case "recall": return `<p class="sec-label">Recall</p><p class="muted">Try to answer before you reveal. Retrieval is where memory is built.</p>
        <ol class="recall">${L.recall.map(function (r, i) { return `<li data-recall="${i}"><p class="q">${esc(r.q)}</p><details><summary>Reveal</summary><p class="model">${esc(r.a)}</p>
          <div class="row"><button class="pill" data-act="recall-rate" data-ok="1" data-word="${esc(r.word || "")}">I knew it</button><button class="pill" data-act="recall-rate" data-ok="0" data-word="${esc(r.word || "")}">Not yet</button></div></details></li>`; }).join("")}</ol>`;
      case "reflect": return `<p class="sec-label">Reflect</p><p class="serif big">${esc(L.reflect)}</p>${writeBox(day, "reflect", "", { rows: 5, feedback: false, placeholder: "This goes into your Journal." })}`;
      case "deep": return `<p class="sec-label">Go deeper</p><h3>${esc(L.deep.title)}</h3><p>${esc(L.deep.body)}</p>${writeBox(day, "deep", esc(L.deep.prompt), { rows: 7 })}`;
    }
    return "";
  }

  function vocabCard(v, day, i) {
    const saved = !!S.state.words[v.word];
    return `<div class="vocab">
      <div class="v-head"><h3 class="serif">${esc(v.word)}</h3>${v.pron ? `<span class="pron">${esc(v.pron)}</span>` : ""}${tts(v.word)}${v.pos ? `<span class="pos">${esc(v.pos)}</span>` : ""}</div>
      <p class="def">${esc(v.definition)}</p>
      ${v.nuance ? `<p><span class="lab">Nuance</span> ${esc(v.nuance)}</p>` : ""}
      ${v.synonyms && v.synonyms.length ? `<p><span class="lab">Similar</span> ${v.synonyms.map(function (s) { return `<span class="chip">${esc(s)}</span>`; }).join(" ")}</p>` : ""}
      ${v.distinction ? `<p><span class="lab">The difference</span> ${esc(v.distinction)}</p>` : ""}
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
    const st = S.state, done = !!st.completed[L.day];
    const card = L.culture && TAW.cards[L.culture];
    return `<section class="lesson finish">
      <a class="back" href="#/lesson/${L.day}">← Back to lesson</a>
      <div class="card center">
        <p class="kicker">Day ${L.day} · ${esc(L.title)}</p>
        <h1 class="serif">${done ? "Completed." : "Well done."}</h1>
        <p class="lede">${L.vocab && L.vocab.length ? L.vocab.length + " words enter your review cycle. " : ""}${card ? esc(card.name) + " joins your Cultural Passport. " : ""}Your reflection goes to your Journal.</p>
        ${done ? "" : `<p class="lbl">How interesting was today’s topic for you?</p>
        <div class="row center">${[[1, "Not for me"], [2, "Interesting"], [3, "Fascinating"]].map(function (r) { return `<button class="pill" data-act="rate-lesson" data-v="${r[0]}">${r[1]}</button>`; }).join("")}</div>
        <button class="btn primary big" data-act="complete" data-day="${L.day}">Mark Day ${L.day} complete</button>`}
        ${done ? `<div class="row center"><a class="btn primary" href="#/">Back to Today</a><a class="btn" href="#/lesson/${L.day + 1 <= 180 ? L.day + 1 : 180}">Preview Day ${Math.min(180, L.day + 1)}</a></div>` : ""}
        <p class="mentor">“${esc(TAW.mentorLines[L.day % TAW.mentorLines.length])}”</p>
      </div>
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
          <span class="pass-status small">${has ? "✓ Collected" + (has.day ? " · Day " + has.day : "") : dayOf[c.id] ? "Arrives Day " + dayOf[c.id] : "Not yet visited"}</span></a>`;
      }).join("")}</div></section>`;
  }

  function cardFull(c, inLesson) {
    const pc = passCat(c.cat);
    const rel = (c.related || []).map(function (r) { return TAW.cards[r] ? `<a class="chip" href="#/card/${r}">${esc(TAW.cards[r].name)}</a>` : `<span class="chip">${esc(r)}</span>`; }).join(" ");
    return `<div class="pcard">
      <p class="kicker"><span aria-hidden="true">${pc[1]}</span> ${esc(pc[2])} · ${esc(c.period)}${c.origin ? " · " + esc(c.origin) : ""}</p>
      <h2 class="serif">${esc(c.name)}</h2>
      <p class="lede">${esc(c.why)}</p>
      <h4>Three things to know</h4><ol>${c.facts.map(function (f) { return `<li>${esc(f)}</li>`; }).join("")}</ol>
      <blockquote class="idea">${esc(c.idea)}</blockquote>
      <h4>How to talk about it</h4><ul class="talk">${c.talk.map(function (t) { return `<li>“${esc(t)}” ${tts(t)}</li>`; }).join("")}</ul>
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
        <button class="btn small" data-act="world-brief">${brief ? "Find another story" : "Prepare today’s briefing"}</button>
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
    if (!it) body = `<div class="card center"><p class="serif big">Nothing due. Your memory is up to date.</p><p class="muted">Items return on day 1, 3, 7, 14, 30 and 60 — each time asking a little more of you.</p></div>`;
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
        <details><summary>Reveal</summary><p class="model">${esc(it.back)}</p>${it.extra && it.extra.example ? `<p class="example">“${esc(it.extra.example)}”</p>` : ""}${it.extra && it.extra.card ? `<a href="#/card/${it.extra.card}">Open passport card →</a>` : ""}</details>
        <div class="grade">${[["again", "Again"], ["hard", "Hard"], ["good", "Got it"], ["easy", "Easy"]].map(function (g) { return `<button class="btn ${g[0] === "good" ? "primary" : ""}" data-act="grade" data-g="${g[0]}" data-id="${esc(it.id)}">${g[1]}</button>`; }).join("")}</div>
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
        <button class="btn" type="submit">Climb it with my mentor ✦</button><div class="own-result"></div></form>
    </section>`;
  }

  /* ───────────── Speak ───────────── */
  function speak(sub, arg) {
    const t = tabs([["challenges", "#/speak", "Challenges"], ["find", "#/speak/find", "Find the words"], ["cards", "#/speak/cards", "Conversation cards"], ["history", "#/speak/history", "My recordings"]], sub === "run" ? "challenges" : (sub || "challenges"));
    if (sub === "find") return findWords(t);
    if (sub === "cards") return cards(t, arg);
    if (sub === "history") return history(t);
    if (sub === "run") return runChallenge(t, arg);
    const groups = [30, 60, 90, 120, 180];
    return `<section>${header("Practice", "Speaking challenges", "Knowledge becomes yours when you say it out loud. Record, listen back, and look at the patterns — not for perfection, for progress.")}${t}
      <div class="tool-grid">
        <a class="tool" href="#/speak/run/unfamiliar"><b>Unfamiliar topic</b><span>60s to think · 2 min to speak</span></a>
        <a class="tool" href="#/speak/run/random"><b>Surprise me</b><span>A random prompt</span></a>
        <a class="tool" href="#/speak/run/mywords"><b>My Words challenge</b><span>Use 3 saved words</span></a>
        <a class="tool" href="#/speak/run/constraint"><b>Constraint drill</b><span>Without your crutch word</span></a>
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
      <div class="find-result"></div>
      <p class="fine">With an API key, your mentor translates and explains. Offline, you get the phrase frames that fit what you’re trying to say.</p></section>`;
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
        <p class="transcript-view">${esc(a.transcript || "")}</p>${a.analysis ? analysisHTML(a.analysis) : ""}${a.ai ? aiHTML(a.ai) : ""}
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
        <label class="lbl">Speech recognition & voice<select name="speechLang">${[["en-US", "English (US)"], ["en-GB", "English (UK)"], ["en-AU", "English (Australia)"], ["en-IE", "English (Ireland)"]].map(function (l) { return `<option value="${l[0]}" ${s.speechLang === l[0] ? "selected" : ""}>${l[1]}</option>`; }).join("")}</select></label>
        <button class="btn primary" type="submit">Save</button></form>
      <div class="card"><h3 class="serif">Mentor (optional) ✦</h3>
        <p class="small">The app works completely without this. With an Anthropic API key, you unlock: mentor feedback on speaking and writing, “Find the words” translation, full lessons for Days 15–179, and a weekly current-affairs briefing. Your key is stored only in this browser and sent only to Anthropic.</p>
        <form class="form" data-form="ai"><label class="lbl">API key<input name="aiKey" type="password" autocomplete="off" value="${esc(s.aiKey)}" placeholder="sk-ant-…"></label>
          <label class="lbl">Model<select name="aiModel">${[["claude-opus-5-5", "Claude Opus 5.5 (recommended)"], ["claude-sonnet-5-5", "Claude Sonnet 5.5 (faster, cheaper)"], ["claude-haiku-5-5", "Claude Haiku 5.5 (fastest)"]].map(function (m) { return `<option value="${m[0]}" ${s.aiModel === m[0] ? "selected" : ""}>${m[1]}</option>`; }).join("")}</select></label>
          <div class="row"><button class="btn" type="submit">Save key</button><button class="btn ghost" type="button" data-act="ai-test">Test</button><span class="ai-status small"></span></div></form></div>
      <div class="card"><h3 class="serif">Your data</h3><p class="small">Everything lives on this device. Export a backup regularly, especially before clearing your browser.</p>
        <div class="row wrap"><button class="btn" data-act="export">Export backup</button><label class="btn ghost">Import backup<input type="file" accept="application/json" data-act="import" hidden></label><button class="btn ghost danger" data-act="reset">Start over</button></div></div>
      <div class="card"><h3 class="serif">Add to your iPhone Home Screen</h3><p class="small">In Safari, tap the Share button, then “Add to Home Screen”. The app then opens full-screen and works offline.</p></div>
      <div class="philosophy small-phil"><p>Read widely.</p><p>Think deeply.</p><p>Speak clearly.</p><p>Stay curious.</p></div>
    </section>`;
  }

  TAW.views = { home, lesson, journey, culture, card, library, book, film, words, speak, progress, journal, settings, onboarding, analysisHTML, aiHTML, speakBox };
})();
