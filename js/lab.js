/* Practice Lab — the conversation simulator, the drills (traps, tone, decode) and the daily workout.
   Progress lives in state.lab: XP, per-item streaks (missed items come back first) and best scenario scores. */
(function () {
  const S = TAW.store;
  function esc(s) { return TAW.esc(s == null ? "" : String(s)); }
  const LEVELS = [[0, "Curious"], [150, "Clear"], [400, "Confident"], [800, "Fluent"], [1400, "Nuanced"], [2200, "Persuasive"], [3200, "Articulate"], [4500, "Eloquent"]];
  const TITLES = { traps: "Spanish traps", tone: "Tone tuner", decode: "Decode", workout: "Today’s workout" };
  const PRESSURE_MS = 20000;
  let run = null, timer = null;

  /* ── state ── */
  function lab() {
    const st = S.state;
    if (!st.lab) st.lab = {};
    const l = st.lab;
    ["days", "traps", "tone", "decode", "sims", "workouts"].forEach(function (k) { if (!l[k]) l[k] = {}; });
    if (!l.xp) l.xp = 0;
    if (!l.bestCombo) l.bestCombo = 0;
    return l;
  }
  function level(xp) {
    let i = 0;
    while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1][0]) i++;
    const nx = LEVELS[i + 1];
    return { n: i + 1, name: LEVELS[i][1], next: nx ? nx[1] : null, toGo: nx ? nx[0] - xp : 0, pct: nx ? Math.round((xp - LEVELS[i][0]) / (nx[0] - LEVELS[i][0]) * 100) : 100 };
  }
  function addXP(n) {
    if (!n) return;
    const l = lab(), before = level(l.xp).n, t = S.today();
    l.xp += n; l.days[t] = (l.days[t] || 0) + n; S.save();
    const after = level(l.xp);
    if (after.n > before) setTimeout(function () { TAW.toast("New level: " + after.name + " ✦"); }, 400);
  }
  function record(kind, id, ok) {
    const box = lab()[kind], r = box[id] || (box[id] = { n: 0, ok: 0, streak: 0 });
    r.n++; if (ok) { r.ok++; r.streak++; } else r.streak = 0;
    r.last = S.today(); S.save();
  }
  function mastered(kind) {
    const box = lab()[kind];
    return TAW.lab[kind].filter(function (x) { return box[x.id] && (kind === "traps" ? box[x.id].streak >= 2 : box[x.id].ok >= 1); }).length;
  }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function range(n) { const a = []; for (let i = 0; i < n; i++) a.push(i); return a; }
  /* missed first, then new, then shaky, then mastered — with a little randomness */
  function prioritised(list, kind, n) {
    const box = lab()[kind];
    return list.map(function (x) {
      const r = box[x.id];
      const p = !r ? 1 : r.streak === 0 ? 0 : r.streak === 1 ? 2 : 3 + r.streak;
      return { x: x, p: p + Math.random() * 0.9 };
    }).sort(function (a, b) { return a.p - b.p; }).slice(0, n).map(function (o) { return o.x; });
  }
  function nameOf() { return (S.state.profile.name || "Nicole").trim().split(/\s+/)[0]; }
  function fill(s) { return String(s).replace(/\{name\}/g, nameOf()); }
  function stars(p) { return p >= 0.85 ? 3 : p >= 0.6 ? 2 : 1; }
  function starStr(n) { return "★★★".slice(0, n) + "☆☆☆".slice(0, 3 - n); }
  function cheer(title, sub) {
    const ov = document.getElementById("celebrate"); if (!ov) return;
    ov.querySelector(".cel-title").textContent = title;
    ov.querySelector(".cel-sub").textContent = sub || "";
    ov.hidden = false; ov.classList.remove("show"); void ov.offsetWidth; ov.classList.add("show");
    clearTimeout(ov._t); ov._t = setTimeout(function () { ov.hidden = true; }, 2600);
  }
  function stopTimer() { clearTimeout(timer); timer = null; }

  /* ── hub ── */
  function weekBars() {
    const l = lab(), days = [];
    for (let i = 6; i >= 0; i--) { const d = S.addDays(S.today(), -i); days.push({ d: d, xp: l.days[d] || 0 }); }
    const max = Math.max(60, Math.max.apply(null, days.map(function (x) { return x.xp; })));
    return `<div class="week" aria-label="XP over the last seven days">${days.map(function (x, i) {
      const wd = "SMTWTFS"[new Date(x.d + "T12:00:00").getDay()];
      return `<span class="${i === 6 ? "today" : ""}" title="${x.d}: ${x.xp} XP"><i style="height:${Math.max(3, Math.round(x.xp / max * 36))}px"></i><small>${wd}</small></span>`;
    }).join("")}</div>`;
  }
  function hub() {
    const l = lab(), lv = level(l.xp), done = !!l.workouts[S.today()], due = S.dueItems().length;
    const sims = TAW.lab.scenarios.map(function (sc) {
      const best = l.sims[sc.id];
      return `<a class="sim-card" href="#/play/sim/${sc.id}"><span class="kicker">${esc(sc.tag)}</span><b class="serif">${esc(sc.title)}</b><span class="small muted" lang="es">${esc(sc.es)}</span><span class="sim-best ${best === undefined ? "new" : ""}">${best === undefined ? "New" : starStr(stars(best))}</span></a>`;
    }).join("");
    return `<section class="plab">
      <p class="kicker">Practice Lab</p>
      <h1>Train like it’s real</h1>
      <p class="lede">Real conversations, the traps Spanish speakers fall into, and instant feedback. A few minutes a day.</p>
      <div class="lab-status card">
        <div class="ring" style="--p:${lv.pct}"><span>${lv.n}</span></div>
        <div class="lv"><p class="kicker">Level ${lv.n}</p><p class="lv-name serif">${lv.name}</p><p class="small muted">${l.xp} XP${lv.next ? " · " + lv.toGo + " to " + lv.next : " · top level"}</p></div>
        ${weekBars()}
      </div>
      <a class="lab-hero" href="#/play/workout">
        <p class="kicker">Today’s workout · about 5 minutes</p>
        <h2 class="serif">${done ? "Done today ✓ — another round?" : "Seven quick rounds"}</h2>
        <p class="small">A trap, a tone choice, a phrase to decode, a real conversation moment${due ? " and " + Math.min(2, due) + " of your due words" : ""}. Streaks earn bonus XP.</p>
        <span class="btn primary">${done ? "Go again" : "Start"} →</span>
      </a>
      <h3 class="section-title">Simulator · real conversations, your choices</h3>
      <div class="sim-grid">${sims}</div>
      <h3 class="section-title">Drills</h3>
      <div class="tool-grid lab-drills">
        <a class="tool" href="#/play/traps"><b>Spanish traps</b><span>False friends, prepositions, emails — explained in Spanish · ${mastered("traps")}/${TAW.lab.traps.length} mastered</span></a>
        <a class="tool" href="#/play/tone"><b>Tone tuner</b><span>The right words for the right person · ${mastered("tone")}/${TAW.lab.tone.length}</span></a>
        <a class="tool" href="#/play/decode"><b>Decode</b><span>What they say vs what they mean · ${mastered("decode")}/${TAW.lab.decode.length}</span></a>
        <a class="tool" href="#/speak/find"><b>Find the words</b><span>Say an idea in Spanish — get natural English</span></a>
      </div>
      <p class="fine">XP measures practice, not talent. Anything you miss comes back sooner — that’s how memory works.</p>
    </section>`;
  }

  /* ── the simulator ── */
  function themBubble(text, who) {
    const stage = /^\(.*\)$/.test(text.trim());
    if (stage) return `<p class="stage-dir">${esc(text.slice(1, -1))}</p>`;
    const m = text.match(/^\((.*?)\)\s*(.*)$/);
    return (m ? `<p class="stage-dir">${esc(m[1])}</p>` : "") + `<div class="bubble them"><span class="who">${esc(who)}</span>${esc(m ? m[2] : text)}</div>`;
  }
  function simStart(sc) {
    run = { kind: "sim", sc: sc, t: 0, total: 0, log: [], order: sc.turns.map(function (tn) { return shuffle(range(tn.opts.length)); }), done: false };
    const t0 = sc.turns[0];
    run.log.push(themBubble(fill(t0.them), t0.who || sc.who));
  }
  function simOptions() {
    const tn = run.sc.turns[run.t];
    return `<div class="opts" role="group" aria-label="Your reply">${run.order[run.t].map(function (k, i) {
      return `<button class="opt" data-lab="pick" data-k="${k}"><span class="opt-n">${"ABC"[i]}</span>${esc(fill(tn.opts[k].say))}</button>`;
    }).join("")}</div>${lab().pressure ? `<div class="ptimer" aria-hidden="true"><i></i></div>` : ""}`;
  }
  function simStage() {
    return run.log.map(function (x) { return `<div class="lg">${x}</div>`; }).join("") + (run.done ? simEnd() : simOptions());
  }
  function simView(id) {
    const sc = TAW.lab.scenarios.filter(function (x) { return x.id === id; })[0];
    if (!sc) return hub();
    simStart(sc);
    return `<section class="plab sim">
      <a class="back" href="#/play">← Practice Lab</a>
      <p class="kicker">${esc(sc.tag)} · Simulator</p>
      <h1>${esc(sc.title)}</h1>
      <p class="muted" lang="es">${esc(sc.es)}</p>
      <div class="scene card-soft"><p class="small"><b>${esc(sc.who)}</b> · ${esc(sc.where)}</p><p>${esc(sc.intro)}</p></div>
      <label class="pressure small"><input type="checkbox" data-lab="pressure" ${lab().pressure ? "checked" : ""}> ⏱ Real-time pressure — 20 seconds to choose each reply</label>
      <div id="lab-stage" class="chat" aria-live="polite">${simStage()}</div>
    </section>`;
  }
  const VERDICT = ["Misstep", "Fine — could be stronger", "Articulate"];
  function simPick(k) {
    stopTimer();
    const sc = run.sc, tn = sc.turns[run.t];
    const timedOut = k < 0;
    const o = timedOut ? { say: "…", s: 0, fb: "Time’s up. A short pause is natural — but a long silence hands the floor to someone else. Practise deciding a little faster.", re: "" } : tn.opts[k];
    const best = tn.opts.filter(function (x) { return x.s === 2; })[0];
    run.total += o.s;
    const firstNew = run.log.length;
    run.log.push(timedOut ? `<p class="stage-dir">You hesitated…</p>` : `<div class="bubble me">${esc(fill(o.say))}</div>`);
    run.log.push(`<div class="fb-box s${o.s}"><b>${VERDICT[o.s]}</b><p>${esc(o.fb)}</p>${o.s < 2 && best ? `<p class="stronger"><span>A stronger reply</span>“${esc(fill(best.say))}”</p>` : ""}</div>`);
    if (o.re) run.log.push(themBubble(o.re, tn.who || sc.who));
    run.t++;
    if (run.t < sc.turns.length) {
      const nx = sc.turns[run.t];
      run.log.push(themBubble(fill(nx.them), nx.who || sc.who));
    } else finishSim();
    paintStage(firstNew);
  }
  function finishSim() {
    run.done = true;
    const sc = run.sc, l = lab(), max = sc.turns.length * 2, p = run.total / max;
    run.pct = p;
    const xp = run.total * 10 + (run.total === max ? 20 : 0);
    run.xp = xp;
    l.sims[sc.id] = Math.max(l.sims[sc.id] || 0, p);
    addXP(xp); S.logActivity(3);
    if (run.total === max) setTimeout(function () { cheer("Flawless", sc.title + " · +" + xp + " XP"); }, 500);
  }
  function simEnd() {
    const sc = run.sc, n = stars(run.pct);
    const label = n === 3 ? "Polished and persuasive." : n === 2 ? "Solid — a few moments to sharpen." : "Good practice — try it again.";
    return `<div class="sim-end card">
      <p class="kicker">Your result</p>
      <p class="sim-stars" aria-label="${n} of 3 stars">${starStr(n)}</p>
      <p class="serif big">${label}</p>
      <p class="small muted">${run.total} of ${sc.turns.length * 2} points · +${run.xp} XP</p>
      <p>${esc(sc.lesson)}</p>
      <h4>The articulate path</h4>
      <ol class="path">${sc.turns.map(function (tn) { const b = tn.opts.filter(function (x) { return x.s === 2; })[0]; return `<li>${esc(fill(b.say))}</li>`; }).join("")}</ol>
      <h4>Phrases to keep</h4>
      <ul class="keep">${sc.keep.map(function (k) { return `<li><b>${esc(k[0])}</b> <span class="muted small">— ${esc(k[1])}</span></li>`; }).join("")}</ul>
      <div class="row wrap">
        <button class="btn small" data-lab="keep">+ Save these phrases</button>
        <button class="btn small primary" data-lab="claude-sim">Role-play it live with Claude ✦</button>
      </div>
      <div class="row wrap"><button class="btn small ghost" data-lab="again">Try again</button><a class="btn small ghost" href="#/play">Back to the Lab</a></div>
    </div>`;
  }
  function paintStage(firstNew) {
    const st = document.getElementById("lab-stage"); if (!st) return;
    st.innerHTML = simStage();
    const target = st.children[firstNew]; /* the first entry added in this step */
    if (target) { target.classList.add("new"); try { target.scrollIntoView({ block: "start", behavior: "smooth" }); } catch (e) { target.scrollIntoView(); } }
    armTimer();
  }
  function armTimer() {
    stopTimer();
    if (!run || run.kind !== "sim" || run.done || !lab().pressure) return;
    const bar = document.querySelector("#lab-stage .ptimer i"); if (!bar) return;
    bar.style.transition = "none"; bar.style.width = "100%";
    requestAnimationFrame(function () { requestAnimationFrame(function () { bar.style.transition = "width " + PRESSURE_MS + "ms linear"; bar.style.width = "0%"; }); });
    timer = setTimeout(function () { if (run && run.kind === "sim" && !run.done) simPick(-1); }, PRESSURE_MS);
  }

  /* ── drills & workout ── */
  function build(kind) {
    const L = TAW.lab;
    const wrap = function (type) { return function (d) { return { type: type, d: d }; }; };
    let items;
    if (kind === "traps") items = prioritised(L.traps, "traps", 8).map(wrap("trap"));
    else if (kind === "tone") items = prioritised(L.tone, "tone", 5).map(wrap("tone"));
    else if (kind === "decode") items = prioritised(L.decode, "decode", 6).map(wrap("decode"));
    else {
      const traps = prioritised(L.traps, "traps", 2), due = S.dueItems().slice(0, 2);
      const sc = L.scenarios[Math.floor(Math.random() * L.scenarios.length)];
      items = [{ type: "trap", d: traps[0] }, { type: "decode", d: prioritised(L.decode, "decode", 1)[0] }];
      if (due[0]) items.push({ type: "recall", d: due[0] });
      items.push({ type: "tone", d: prioritised(L.tone, "tone", 1)[0] }, { type: "trap", d: traps[1] });
      items.push({ type: "turn", d: { sc: sc, t: Math.floor(Math.random() * sc.turns.length) } });
      if (due[1]) items.push({ type: "recall", d: due[1] });
    }
    items.forEach(function (it) {
      const n = it.type === "trap" || it.type === "decode" ? it.d.opts.length : it.type === "tone" ? it.d.opts.length : it.type === "turn" ? it.d.sc.turns[it.d.t].opts.length : 0;
      it.order = shuffle(range(n)); it.res = null;
    });
    return items;
  }
  function quizView(kind) {
    run = { kind: kind, items: build(kind), i: 0, ok: 0, half: 0, combo: 0, best: 0, xp: 0, answered: false };
    return `<section class="plab quiz">
      <a class="back" href="#/play">← Practice Lab</a>
      <div class="quiz-head"><p class="kicker">${TITLES[kind]}</p><span class="combo" aria-live="polite"></span></div>
      <div class="dots" aria-hidden="true">${run.items.map(function () { return "<i></i>"; }).join("")}</div>
      <div id="lab-stage">${itemHTML()}</div>
    </section>`;
  }
  function optButtons(texts, order) {
    return `<div class="opts" role="group" aria-label="Choose one">${order.map(function (k, i) {
      return `<button class="opt" data-lab="ans" data-k="${k}"><span class="opt-n">${"ABC"[i]}</span>${esc(texts[k])}</button>`;
    }).join("")}</div>`;
  }
  function ctxSplit(ctx) { const m = ctx.match(/^(.*?)\s*(\([^)]*\))?$/); return { main: m[1], note: m[2] || "" }; }
  function itemHTML() {
    const it = run.items[run.i], d = it.d;
    let body = "";
    if (it.type === "trap") {
      const c = ctxSplit(d.ctx);
      body = `<p class="kicker">Spanish trap · ${esc(d.tag)}</p>
        <p class="q-ctx" lang="es">«${esc(c.main)}»${c.note ? ` <span class="muted small">${esc(c.note)}</span>` : ""}</p>
        <p class="q-ask">How would you say it naturally?</p>${optButtons(d.opts, it.order)}`;
    } else if (it.type === "tone") {
      body = `<p class="kicker">Tone tuner · ${esc(d.aud)}</p><p class="q-sit">${esc(d.sit)}</p>
        <p class="q-ask">Which works best?</p>${optButtons(d.opts.map(function (x) { return x.t; }), it.order)}`;
    } else if (it.type === "decode") {
      body = `<p class="kicker">Decode · ${esc(d.who)}</p><blockquote class="q-line">${esc(d.line)}</blockquote>
        <p class="q-ask">What do they most likely mean?</p>${optButtons(d.opts, it.order)}`;
    } else if (it.type === "turn") {
      const sc = d.sc, tn = sc.turns[d.t];
      body = `<p class="kicker">Simulator moment · ${esc(sc.title)}</p><p class="small muted">${esc(sc.where)}</p>
        <div class="chat">${themBubble(fill(tn.them), tn.who || sc.who)}</div>
        <p class="q-ask">Your reply?</p>${optButtons(tn.opts.map(function (x) { return fill(x.say); }), it.order)}`;
    } else if (it.type === "recall") {
      const ex = d.extra && d.extra.example;
      body = `<p class="kicker">Recall · due in your review</p><p class="q-word serif">${esc(d.front)}</p>
        <p class="q-ask">Do you remember what it means — and could you use it?</p>
        <button class="btn" data-lab="reveal">Show the meaning</button>
        <div class="recall-back" hidden><p>${esc(d.back || "")}</p>${ex ? `<p class="small muted"><i>${esc(ex)}</i></p>` : ""}
          <div class="row wrap"><button class="btn primary" data-lab="recall" data-v="good">I knew it</button><button class="btn ghost" data-lab="recall" data-v="again">Not yet</button></div></div>`;
    }
    return `<div class="q card">${body}<div class="q-fb" aria-live="polite"></div></div>`;
  }
  function gain(ok, half) {
    if (ok) {
      run.combo++; run.ok++; run.best = Math.max(run.best, run.combo);
      const g = 10 + Math.min(10, (run.combo - 1) * 2);
      run.xp += g; addXP(g); return g;
    }
    if (half) { run.half++; run.xp += 5; addXP(5); return 5; }
    run.combo = 0; return 0;
  }
  function answer(k) {
    if (run.answered) return;
    run.answered = true;
    const it = run.items[run.i], d = it.d, st = document.getElementById("lab-stage");
    let ok = false, half = false, fb = "";
    if (it.type === "trap" || it.type === "decode") {
      ok = k === 0;
      record(it.type === "trap" ? "traps" : "decode", d.id, ok);
      fb = it.type === "trap"
        ? `<div class="fb-box ${ok ? "s2" : "s0"}"><b>${ok ? "✓ Natural English" : "Not quite"}</b>${ok ? "" : `<p class="stronger"><span>Natural English</span>${esc(d.opts[0])}</p>`}<p lang="es">${esc(d.es)}</p></div>`
        : `<div class="fb-box ${ok ? "s2" : "s0"}"><b>${ok ? "✓ You read it right" : "Not quite"}</b>${ok ? "" : `<p class="stronger"><span>Most likely meaning</span>${esc(d.opts[0])}</p>`}<p>${esc(d.fb)}</p></div>`;
    } else if (it.type === "tone") {
      const s = d.opts[k].s; ok = s === 2; half = s === 1;
      record("tone", d.id, ok);
      fb = `<div class="fb-box s${s}"><b>${VERDICT[s]}</b><ul class="all-fb">${it.order.map(function (j) { const x = d.opts[j]; return `<li class="s${x.s}"><span>${x.s === 2 ? "Best" : x.s === 1 ? "OK" : "Avoid"}</span>${esc(x.fb)}</li>`; }).join("")}</ul></div>`;
    } else if (it.type === "turn") {
      const tn = d.sc.turns[d.t], o = tn.opts[k], best = tn.opts.filter(function (x) { return x.s === 2; })[0];
      ok = o.s === 2; half = o.s === 1;
      fb = `<div class="fb-box s${o.s}"><b>${VERDICT[o.s]}</b><p>${esc(o.fb)}</p>${!ok ? `<p class="stronger"><span>A stronger reply</span>“${esc(fill(best.say))}”</p>` : ""}${o.re ? `<div class="chat">${themBubble(o.re, tn.who || d.sc.who)}</div>` : ""}<p class="small"><a href="#/play/sim/${d.sc.id}">Play the whole conversation →</a></p></div>`;
    }
    const g = gain(ok, half);
    it.res = ok ? "ok" : half ? "half" : "no";
    st.querySelectorAll(".opt").forEach(function (b) {
      const j = +b.getAttribute("data-k");
      b.disabled = true;
      const right = it.type === "tone" ? d.opts[j].s === 2 : it.type === "turn" ? d.sc.turns[d.t].opts[j].s === 2 : j === 0;
      if (right) b.classList.add("right");
      if (j === k && !right) b.classList.add(half ? "half" : "wrong");
      if (j === k) b.classList.add("chosen");
    });
    showFeedback(fb, g);
  }
  function showFeedback(fb, g) {
    const st = document.getElementById("lab-stage"), last = run.i === run.items.length - 1;
    const box = st.querySelector(".q-fb");
    box.innerHTML = fb + `<div class="row between"><span class="xp-pop">${g ? "+" + g + " XP" : ""}</span><button class="btn primary" data-lab="next">${last ? "See results" : "Next"} →</button></div>`;
    paintHead();
    try { box.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {}
    const nb = box.querySelector("[data-lab=next]"); if (nb) nb.focus({ preventScroll: true });
  }
  function paintHead() {
    const dots = document.querySelectorAll(".quiz .dots i");
    run.items.forEach(function (it, i) { if (dots[i]) dots[i].className = (it.res || "") + (i === run.i ? " cur" : ""); });
    const c = document.querySelector(".quiz .combo");
    if (c) c.textContent = run.combo >= 2 ? "✦ " + run.combo + " in a row" : "";
  }
  function next() {
    run.i++; run.answered = false;
    const st = document.getElementById("lab-stage");
    if (run.i >= run.items.length) { st.innerHTML = quizEnd(); paintHead(); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    st.innerHTML = itemHTML(); paintHead();
    const q = st.querySelector(".q"); if (q) { q.classList.add("new"); try { q.scrollIntoView({ block: "start", behavior: "smooth" }); } catch (e) {} }
  }
  function quizEnd() {
    const l = lab(), n = run.items.length, acc = Math.round((run.ok + run.half * 0.5) / n * 100);
    l.bestCombo = Math.max(l.bestCombo, run.best);
    let extra = "";
    if (run.kind === "workout") {
      const t = S.today(), first = !l.workouts[t];
      l.workouts[t] = (l.workouts[t] || 0) + run.xp;
      if (first) { addXP(25); run.xp += 25; extra = `<p class="small">+25 XP bonus for today’s first workout.</p>`; }
      S.logActivity(5);
      setTimeout(function () { cheer("Workout complete", "+" + run.xp + " XP · " + acc + "% accuracy"); }, 300);
    } else S.logActivity(3);
    S.save();
    const lv = level(l.xp), missed = run.items.filter(function (it) { return it.res === "no" && it.type === "trap"; });
    return `<div class="q card quiz-end">
      <p class="kicker">${TITLES[run.kind]} · done</p>
      <p class="serif big">${acc >= 85 ? "Excellent." : acc >= 60 ? "Good work." : "Every miss is a lesson."}</p>
      <div class="end-stats"><span><b>${run.xp}</b>XP</span><span><b>${acc}%</b>accuracy</span><span><b>${run.best}</b>best streak</span></div>
      ${extra}
      <div class="lv-bar"><div class="row between small"><span>Level ${lv.n} · ${lv.name}</span><span class="muted">${lv.next ? lv.toGo + " XP to " + lv.next : "Top level"}</span></div><div class="progress-line"><i style="width:${lv.pct}%"></i></div></div>
      ${missed.length ? `<h4>Coming back soon</h4><ul class="keep">${missed.map(function (it) { return `<li><b>${esc(it.d.opts[0])}</b> <span class="muted small" lang="es">— «${esc(ctxSplit(it.d.ctx).main)}»</span></li>`; }).join("")}</ul>` : ""}
      ${run.kind === "workout" ? `<div class="row wrap">${TAW.views.pathNextLink()}</div>` : ""}
      <div class="row wrap"><button class="btn ${run.kind === "workout" ? "" : "primary"}" data-lab="again">Another round</button><a class="btn ghost" href="#/play">Back to the Lab</a></div>
    </div>`;
  }

  /* ── events ── */
  document.addEventListener("click", function (e) {
    const el = e.target.closest("[data-lab]"); if (!el || !run) return;
    const act = el.getAttribute("data-lab");
    if (act === "pick" && run.kind === "sim" && !run.done) simPick(+el.getAttribute("data-k"));
    else if (act === "ans") answer(+el.getAttribute("data-k"));
    else if (act === "next") next();
    else if (act === "reveal") { el.hidden = true; const b = el.parentNode.querySelector(".recall-back"); b.hidden = false; }
    else if (act === "recall") {
      if (run.answered) return; run.answered = true;
      const it = run.items[run.i], good = el.getAttribute("data-v") === "good";
      S.rate(it.d.id, good ? "good" : "again");
      it.res = good ? "ok" : "half";
      const g = good ? gain(true) : 0;
      el.parentNode.querySelectorAll("button").forEach(function (b) { b.disabled = true; });
      showFeedback(`<div class="fb-box ${good ? "s2" : "s1"}"><b>${good ? "✓ Strengthened" : "It will come back tomorrow"}</b><p>${good ? "Use it in a sentence today to lock it in." : "No penalty for honesty — seeing it again soon is exactly what helps."}</p></div>`, g);
    }
    else if (act === "again") {
      if (run.kind === "sim") { simStart(run.sc); const st = document.getElementById("lab-stage"); st.innerHTML = simStage(); window.scrollTo({ top: 0, behavior: "smooth" }); armTimer(); }
      else TAW.render();
    }
    else if (act === "keep" && run.kind === "sim") {
      run.sc.keep.forEach(function (k) { S.saveWord({ word: k[0], meaning: k[1] + " (Simulator: " + run.sc.title + ")" }); });
      el.disabled = true; el.textContent = "✓ Saved to My Words";
      TAW.toast(run.sc.keep.length + " phrases saved — they’ll come back in your review.");
    }
    else if (act === "claude-sim" && run.kind === "sim") TAW.ai.askClaude(TAW.ai.prompts.roleplay(run.sc));
  });
  document.addEventListener("change", function (e) {
    if (e.target.getAttribute && e.target.getAttribute("data-lab") === "pressure") {
      lab().pressure = e.target.checked; S.save();
      if (run && run.kind === "sim" && !run.done) { const st = document.getElementById("lab-stage"); st.innerHTML = simStage(); armTimer(); }
      TAW.toast(e.target.checked ? "Pressure on: 20 seconds per reply." : "Pressure off — take your time.");
    }
  });

  /* ── public ── */
  function view(r) {
    stopTimer(); run = null;
    if (r.a === "sim" && r.b) return simView(r.b);
    if (TITLES[r.a]) return quizView(r.a);
    return hub();
  }
  function afterRender(r) {
    if (r.name !== "play") { stopTimer(); run = null; return; }
    if (run && run.kind === "sim") armTimer(); else stopTimer();
    paintHeadSafe();
  }
  function paintHeadSafe() { if (run && run.items) paintHead(); }
  Object.assign(TAW.lab, { view: view, afterRender: afterRender, level: level });
})();
