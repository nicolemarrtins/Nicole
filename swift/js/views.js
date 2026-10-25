/* Screens: home, day player, roadmap, lore, Easter eggs, progress, school, settings, final screen. */
window.TS = window.TS || {};
(function () {
  const U = TS.ui, esc = U.esc, nl = U.nl, E = TS.engine;
  function S() { return TS.store.state; }
  const st = TS.store;

  function egg(id, label, inner, cls) {
    return '<button type="button" class="egg ' + (cls || "") + (S().eggs[id] ? " found" : "") + '" data-egg="' + id + '" data-egg-label="' + esc(label) + '" aria-label="A suspicious detail">' + (inner || "13") + "</button>";
  }
  function bindEggs(root) {
    root.addEventListener("click", function (e) {
      const b = e.target.closest("[data-egg]"); if (!b) return;
      e.preventDefault();
      if (st.findEgg(b.dataset.egg, b.dataset.eggLabel)) {
        b.classList.add("found");
        U.celebrate("🧩 <b>EASTER EGG FOUND</b><br>" + esc(b.dataset.eggLabel) + "<br>+12 Easter Egg Detective");
      } else U.toast("You already found this one. Nobody is surprised.");
    });
  }

  function statusCard() {
    const s = S(), P = st.pct;
    const rows = [
      ["Songwriting", U.stars(st.stars(P("songwriter")))], ["Easter Egg Detection", U.stars(st.stars(P("egg")))], ["Cat Energy", U.stars(st.stars(P("cat")))],
      ["Red Lipstick Readiness", U.stars(st.stars(P("main")))], ["Emotional Damage", U.stars(Math.max(1, Math.round(s.damage / 20)))], ["Narrative Potential", U.stars(st.stars(P("storyteller")))]
    ];
    const counts = [["Friendship Bracelets", s.counts.bracelets], ["Unnecessary Clues", s.counts.clues + s.counts.eggs], ["Albums Imagined", s.counts.albums], ["People Who Have Been Turned Into Metaphors", s.counts.metaphors]];
    return '<section class="status-card notebook"><p class="eyebrow">Current status · Day ' + st.daysDone() + "</p>" +
      '<p class="status-level">Taylor Swift Level: <b>' + st.overall() + "%</b></p><dl class=\"status-list\">" +
      rows.map(function (r) { return "<dt>" + r[0] + "</dt><dd class=\"stars\">" + r[1] + "</dd>"; }).join("") +
      counts.map(function (r) { return "<dt>" + r[0] + "</dt><dd class=\"num\">" + r[1] + "</dd>"; }).join("") + "</dl></section>";
  }

  function damageMeter() {
    const v = S().damage;
    return '<section class="damage card"><div class="damage-head"><p class="eyebrow">🍷 Emotional Damage Meter</p><b class="num">' + v + "/100</b></div>" +
      '<div class="damage-track"><span style="left:' + v + '%"></span></div><div class="damage-scale"><span>I’m fine</span><span>Ten-minute version</span></div>' +
      '<p class="damage-label">' + esc(st.damageLabel(v)) + "</p>" +
      (v >= 91 ? '<p class="small">The meter is a joke; your wellbeing isn’t. Drink some water, go outside, text someone you like. The song will wait.</p>' : "") +
      (v === 13 ? egg("progress-damage", "The emotional damage meter at exactly 13", "13", "inline") : "") + "</section>";
  }

  /* ── HOME ── */
  function home(el) {
    const s = S(), d = st.currentDay(), day = TS.getDay(d), status = st.status(d), era = TS.eraOf(d);
    const done = st.daysDone();
    el.innerHTML =
      '<section class="hero">' +
        '<p class="eyebrow">A ridiculously serious Taylor Swift transformation simulator</p>' +
        '<h1 class="title"><span class="t-small">How to become</span><span class="t-big">Taylor Swift</span><span class="t-days">in <em>180</em> days</span></h1>' +
        egg("home-star", "The star in the corner of the home page", "✦", "hero-star") +
        '<div class="hero-meta"><div class="tay-ring" style="--p:' + st.overall() + '"><b>' + st.overall() + '%</b><small>Your Taylorification</small></div>' +
        '<p class="hero-day">' + (done ? "Day " + done + " of 180 complete" : "Day 0 · Status: civilian") + "<br><span>" + era.emoji + " " + esc(era.name) + "</span></p></div>" +
      "</section>" +
      '<section class="mission ticket">' +
        '<div class="ticket-main"><p class="eyebrow">Today’s mission · Day ' + d + "</p><h2>" + esc(day.title) + "</h2><p>" + esc(day.objective) + "</p>" +
        '<p class="ticket-meta">Difficulty <span class="stars">' + U.stars(day.difficulty) + "</span> · Estimated time " + day.minutes + " min</p></div>" +
        '<div class="ticket-stub"><span>ADMIT ONE</span><b>' + String(d).padStart(3, "0") + "</b></div>" +
      "</section>" +
      (status === "tomorrow" ? '<p class="pace-note">Day ' + d + " unlocks tomorrow. Taylor did not release two albums in one day. (She did release two in one year, but that’s different.) Change pacing in Settings.</p>" : "") +
      '<div class="cta-row"><a class="btn primary big" href="#/day/' + (status === "done" ? Math.min(180, d) : d) + '">' + (s.completed[180] ? "Revisit Day 180" : "Begin today’s era") + "</a></div>" +
      '<nav class="home-grid" aria-label="Your archive">' +
        [["#/lore", "My Lore", "📜"], ["#/eggs", "My Easter Eggs", "🧩"], ["#/album", "My Album", "💿"], ["#/cats", "My Cats", "🐈"], ["#/progress", "My Progress", "📈"], ["#/eras", "My Eras", "🎭"], ["#/play", "Mini-games", "🎲"], ["#/roadmap", "180-Day Roadmap", "🗺️"]]
          .map(function (b) { return '<a class="tile" href="' + b[0] + '"><span>' + b[2] + "</span>" + b[1] + "</a>"; }).join("") +
      "</nav>" +
      '<div class="two-col">' + statusCard() + damageMeter() + "</div>" +
      '<section class="card taylorize-mini"><p class="eyebrow">Everything is a song</p><h2>✨ Taylorize this</h2>' +
        '<form id="quick-tz" class="inline-form"><label class="sr" for="qt">Something that happened</label><input id="qt" placeholder="My coworker didn’t answer my message." autocomplete="off"><button class="btn">Taylorize</button></form></section>' +
      '<footer class="disclaimer"><p><b>Unofficial parody.</b> This is a fan-inspired satirical game. It is not affiliated with, endorsed by or connected to Taylor Swift or her representatives. No official logos, artwork or lyrics are used. You are playing a fictional transformation game. You are not, and will not become, Taylor Swift. Please do not sue us' + egg("about-disclaimer", "The legal disclaimer, which was hiding a 13", ".", "inline") + "</p></footer>";
    el.querySelector("#quick-tz").addEventListener("submit", function (e) {
      e.preventDefault(); const v = el.querySelector("#qt").value.trim();
      if (!v) return U.toast("Type something mildly inconvenient first.");
      TS.play.pending = v; U.go("#/play/taylorize");
    });
    bindEggs(el);
  }

  /* ── DAY PLAYER ── */
  function isDone(step, ans, d) {
    const v = ans[step.id];
    switch (step.type) {
      case "write": return !!(v && String(v).trim()) && (!step.minWords || E.words(v).length >= step.minWords);
      case "fields": { if (!v) return false; const n = step.fields.filter(function (f) { return v[f.id] && String(v[f.id]).trim(); }).length; return n >= Math.ceil(step.fields.length * 0.7); }
      case "list": return !!v && v.filter(function (x) { return x && x.trim(); }).length >= step.count;
      case "vocab": case "decoder": return !!(v && String(v).trim());
      case "choice": return v != null;
      case "thirteen": return !!ans.t13;
      case "timer": return !!v;
      case "game": return step.game === "final" || !!(S().played[step.game]);
      default: return true;
    }
  }
  function scoresHtml(res) {
    if (!res) return "";
    return '<div class="scores">' + Object.keys(res.scores).map(function (k) {
      return '<div class="score-row"><span>' + esc(k) + "</span>" + U.meter(res.scores[k]) + '<b class="num">' + res.scores[k] + "%</b></div>";
    }).join("") + '<p class="tip"><b>Coach’s note:</b> ' + esc(res.tip) + "</p></div>";
  }
  function masterHtml(m) {
    return '<div class="scores master"><p class="eyebrow">Mastermind score</p>' +
      [["Strategic", m.strategic], ["Unnecessarily complicated", m.complicated], ["Could have simply sent an email", m.email]].map(function (r) {
        return '<div class="score-row"><span>' + r[0] + "</span>" + U.meter(r[1]) + '<b class="num">' + r[1] + "%</b></div>";
      }).join("") + '<p class="stamp">MASTER PLAN LEVEL: ' + m.level + "</p></div>";
  }
  function stepFeedback(step, ans) {
    const v = ans[step.id]; if (!v) return "";
    if (step.score === "master") return masterHtml(E.masterScore(v));
    if (!step.score) return "";
    const text = step.type === "fields" ? (step.scoreField ? v[step.scoreField] : Object.keys(v).map(function (k) { return v[k]; }).join("\n")) : v;
    return text ? scoresHtml(E.score(step.score, text)) : "";
  }
  function speakBtn(text) { return '<button type="button" class="speak" data-speak="' + esc(text) + '" aria-label="Hear it">🔊</button>'; }

  function renderStep(step, d, ans, i) {
    const id = step.id || ("s" + i), done = isDone(step, ans, d) && (step.mission || step.type === "thirteen");
    const head = step.mission ? '<h3 class="step-h"><span class="check" aria-hidden="true">' + (done ? "✓" : "○") + "</span>" + esc(step.mission) + "</h3>" : (step.title ? '<h3 class="step-h">' + esc(step.title) + (step.optional ? ' <span class="pill">Bonus</span>' : "") + "</h3>" : "");
    const fid = "d" + d + "-" + id;
    let body = "";
    switch (step.type) {
      case "status": return statusCard();
      case "lesson":
        return '<section class="step lesson"><h2>' + esc(step.title) + "</h2>" + step.paras.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</section>";
      case "note":
        return '<aside class="sticky-note">' + esc(step.text) + "</aside>";
      case "culture":
        return '<section class="step culture clipping"><h3 class="step-h">' + esc(step.title) + "</h3>" + step.paras.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
          '<button class="btn small ghost" data-act="culture"' + (ans.culture ? " disabled" : "") + ">" + (ans.culture ? "Seminar attended ✓" : "I learned something") + "</button></section>";
      case "ladder":
        return '<section class="step ladder"><h3 class="step-h">' + esc(step.title || "Say it better") + '</h3><p class="plain">Instead of: <s>' + esc(step.plain) + "</s></p><ol>" +
          step.better.map(function (b) { return "<li><b>" + esc(b.t) + "</b> " + speakBtn(b.t) + "<span>" + esc(b.n) + "</span></li>"; }).join("") + "</ol></section>";
      case "write":
        body = '<p class="prompt">' + esc(step.prompt) + '</p><label class="sr" for="' + fid + '">' + esc(step.prompt) + '</label><textarea id="' + fid + '" rows="' + (step.rows || 3) + '" placeholder="' + esc(step.ph || "") + '">' + esc(ans[id] || "") + "</textarea>" +
          (step.minWords ? '<p class="small wordcount" data-wc>' + E.words(ans[id] || "").length + " words · aim for " + step.minWords + "+</p>" : "") +
          '<div class="row"><button class="btn" data-act="save">' + (ans[id] ? "Update" : "Save") + "</button></div>";
        break;
      case "fields":
        body = '<div class="fields">' + step.fields.map(function (f) {
          const v = (ans[id] || {})[f.id] || "", fi = fid + "-" + f.id;
          return '<label for="' + fi + '">' + esc(f.label) + "</label>" + (f.area || (f.ph && f.ph.length > 70) ? '<textarea id="' + fi + '" data-f="' + f.id + '" rows="' + (f.area ? 5 : 2) + '" placeholder="' + esc(f.ph) + '">' + esc(v) + "</textarea>" : '<input id="' + fi + '" data-f="' + f.id + '" placeholder="' + esc(f.ph) + '" value="' + esc(v) + '">');
        }).join("") + '</div><div class="row"><button class="btn" data-act="save">' + (ans[id] ? "Update" : "Save") + "</button></div>";
        break;
      case "list":
        body = '<p class="prompt">' + esc(step.prompt) + '</p><ol class="list13">' + Array.from({ length: step.count }, function (_, k) {
          const v = (ans[id] || [])[k] || "";
          return '<li><label class="sr" for="' + fid + "-" + k + '">Thing ' + (k + 1) + '</label><input id="' + fid + "-" + k + '" data-k="' + k + '" value="' + esc(v) + '" placeholder="' + (k === 0 ? esc(step.ph) : "") + '"></li>';
        }).join("") + '</ol><div class="row"><button class="btn" data-act="save">Save my 13</button></div>';
        break;
      case "vocab":
        body = '<dl class="vocab">' + step.words.map(function (w) {
          return "<div><dt>" + esc(w.w) + " " + speakBtn(w.w) + "</dt><dd>" + esc(w.d) + (w.n ? '<span class="nuance">' + esc(w.n) + "</span>" : "") + (w.ex ? '<span class="ex">“' + esc(w.ex) + "”</span>" : "") + "</dd></div>";
        }).join("") + '</dl><p class="prompt">' + esc(step.prompt) + '</p><label class="sr" for="' + fid + '">' + esc(step.prompt) + '</label><textarea id="' + fid + '" rows="2">' + esc(ans[id] || "") + '</textarea><div class="row"><button class="btn" data-act="save">Check my English</button></div>';
        break;
      case "choice": {
        const v = ans[id];
        body = '<p class="prompt">' + esc(step.q) + '</p><div class="choices">' + step.options.map(function (o, k) {
          const cls = v == null ? "" : (step.correct === -1 || k === step.correct ? " right" : (k === v ? " wrong" : ""));
          return '<button class="choice' + cls + (k === v ? " picked" : "") + '" data-act="choose" data-k="' + k + '">' + esc(o) + "</button>";
        }).join("") + "</div>" + (v != null ? '<p class="reveal">' + esc(step.reveal) + "</p>" : "");
        break;
      }
      case "thirteen": {
        const t = ans.t13;
        const opts = ["Yes", "No", "I refuse to answer", "I have created 13 explanations for why it matters"];
        body = '<div class="choices">' + opts.map(function (o, k) { return '<button class="choice' + (t && t.c === k ? " picked" : "") + '" data-act="t13" data-k="' + k + '">□ ' + esc(o) + "</button>"; }).join("") + "</div>";
        if (t) {
          if (t.c === 0) body += t.text ? '<p class="reveal">Logged: “' + esc(t.text) + '”. STATISTICAL SIGNIFICANCE: absolutely none. SPIRITUAL SIGNIFICANCE: extremely suspicious.</p>' :
            '<div class="inline-form"><label class="sr" for="' + fid + '-13">Describe the incident</label><input id="' + fid + '-13" placeholder="13% battery at 1:13pm"><button class="btn" data-act="t13log">Log incident</button></div>';
          if (t.c === 1) body += '<p class="reveal">Don’t worry. We can manufacture significance later.</p>';
          if (t.c === 2) body += '<p class="reveal">Noted. Refusing to answer is, itself, a clue.</p>';
          if (t.c === 3) body += t.text != null ? '<p class="reveal">' + (t.n >= 13 ? "Thirteen explanations. You are beginning to become unbearable. +15 Easter Egg Detective." : "That’s " + t.n + ". We said thirteen. The number matters. That’s the whole point.") + "</p>" :
            '<label class="sr" for="' + fid + '-13x">One explanation per line</label><textarea id="' + fid + '-13x" rows="6" placeholder="1. It’s the date.\n2. It’s the time.\n3. …"></textarea><div class="row"><button class="btn" data-act="t13x">Submit explanations</button></div>';
        }
        return '<section class="step thirteen" data-i="' + i + '"><h3 class="step-h"><span class="check">' + (t ? "✓" : "○") + "</span>13 CHECK · Did you encounter 13 today?</h3>" + body + "</section>";
      }
      case "game":
        body = (step.text ? "<p>" + esc(step.text) + "</p>" : "") + '<a class="btn" href="#/' + (step.game === "final" ? "final" : routeFor(step.game) + "?from=" + d) + '">' + esc(step.label) + " →</a>";
        break;
      case "decoder":
        body = '<p class="prompt">Write a sentence with hidden capital letters. Capitals at the start of a sentence (and a lone “I”) don’t count.</p><label class="sr" for="' + fid + '">Your coded text</label><textarea id="' + fid + '" rows="3" placeholder="i Saw yOu at the Old Newsagent.">' + esc(ans[id] || "") + '</textarea><p class="decoded">Hidden message: <b data-decoded>' + esc(E.decode(ans[id] || "") || "—") + '</b></p><div class="row"><button class="btn" data-act="save">Save</button></div>';
        break;
      case "timer":
        body = (step.text ? "<p>" + esc(step.text) + "</p>" : "<p>Stand up. Speak for three minutes. Who you were, what changed, who you are now, the Easter egg.</p>") +
          '<div class="timer" data-secs="' + step.seconds + '"><b class="num" data-clock>' + fmt(step.seconds) + '</b><div class="row"><button class="btn" data-act="tstart">Start</button><button class="btn ghost" data-act="treset">Reset</button><button class="btn ghost" data-act="tdone">I did it</button></div></div>';
        break;
      case "recall":
        return '<section class="step recall envelope"><p class="eyebrow">Sealed on Day ' + step.from + '</p><p class="hand">' + (step.text ? nl(step.text) : "You didn’t write a prophecy on Day 54. The prophecy is that you would forget. It came true.") + "</p></section>";
    }
    return '<section class="step step-' + step.type + (done ? " done" : "") + '" data-i="' + i + '" id="step-' + d + "-" + id + '">' + head + body + '<div class="feedback">' + stepFeedback(step, ans) + "</div></section>";
  }
  function fmt(s) { return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }
  function routeFor(game) { return game === "cats" ? "cats" : game === "eras" ? "eras" : game === "album" ? "album" : game === "board" ? "board" : "play/" + game; }

  function missionList(day, ans) {
    const req = TS.requiredSteps(day), d = day.day;
    const n = req.filter(function (s) { return isDone(s, ans, d); }).length;
    return { n: n, total: req.length, html: '<ol class="missions">' + req.map(function (s, k) {
      const ok = isDone(s, ans, d), idx = day.steps.indexOf(s);
      return '<li class="' + (ok ? "ok" : "") + '"><a href="#" data-jump="' + idx + '"><span class="num">MISSION ' + String(k + 1).padStart(2, "0") + "</span> " + esc(s.mission || "13 CHECK") + "</a></li>";
    }).join("") + "</ol>" };
  }

  function dayView(el, n) {
    const status = st.status(n);
    if (status === "locked" || status === "tomorrow") {
      el.innerHTML = '<section class="locked-day card"><p class="eyebrow">Day ' + n + "</p><h1>" + esc(TS.ROADMAP[n - 1].title) + "</h1><p>" +
        (status === "tomorrow" ? "This day unlocks tomorrow. Pacing is set to one day per calendar day. Taylor did not release two albums in one day." : "This day is locked. Finish Day " + st.currentDay() + " first. Nobody skips to the bridge.") +
        '</p><a class="btn" href="#/day/' + st.currentDay() + '">Go to Day ' + st.currentDay() + "</a></section>";
      return;
    }
    const day = TS.getDay(n), ans = st.answers(n), r = E.rng("egg" + n);
    const ml = missionList(day, ans), done = !!S().completed[n];
    el.innerHTML = '<article class="day-page">' +
      '<header class="day-head"><p class="eyebrow">' + day.era.emoji + " Era " + ["I", "II", "III", "IV", "V", "VI"][day.era.n - 1] + " · " + esc(day.era.name) + "</p>" +
      '<p class="day-num">DAY <b>' + n + "</b></p><h1>" + esc(day.title) + '</h1><p class="objective"><span>Today’s objective</span>' + esc(day.objective) + "</p>" +
      '<p class="day-meta">Difficulty <span class="stars">' + U.stars(day.difficulty) + "</span> · " + day.minutes + " min" + (done ? ' · <span class="pill">Completed</span>' : "") + "</p></header>" +
      (day.intro && day.intro !== day.objective ? '<p class="intro">' + esc(day.intro) + "</p>" : "") +
      '<section class="mission-box notebook"><p class="eyebrow">Day ' + n + ' · Missions <span data-mcount>' + ml.n + "/" + ml.total + '</span></p><div data-mlist>' + ml.html + "</div></section>" +
      day.steps.map(function (s, i) { return renderStep(s, n, ans, i); }).join("") +
      '<section class="finish">' + (done ? '<p>Day ' + n + ' is complete. You may revisit, edit and over-think it as much as you like.</p><div class="row"><a class="btn primary" href="#/day/' + Math.min(180, n + 1) + '">' + (n < 180 ? "Day " + (n + 1) + " →" : "Final screen") + "</a></div>" :
        '<button class="btn primary big" data-act="complete"' + (ml.n < ml.total ? " disabled" : "") + ">Complete Day " + n + '</button><p class="small" data-left>' + (ml.n < ml.total ? (ml.total - ml.n) + " mission" + (ml.total - ml.n > 1 ? "s" : "") + " left." : "All missions done. Proceed dramatically.") + "</p>") + "</section>" +
      '<button type="button" class="hidden13" data-egg="day-' + n + '" data-egg-label="The hidden 13 on Day ' + n + '" style="top:' + Math.round(18 + r() * 70) + "%;" + (r() < 0.5 ? "left" : "right") + ":" + Math.round(r() * 8) + 'px" aria-label="A suspicious number">13</button>' +
      '<nav class="day-nav">' + (n > 1 ? '<a href="#/day/' + (n - 1) + '">← Day ' + (n - 1) + "</a>" : "<span></span>") + '<a href="#/roadmap">Roadmap</a>' + (S().completed[n] && n < 180 ? '<a href="#/day/' + (n + 1) + '">Day ' + (n + 1) + " →</a>" : "<span></span>") + "</nav></article>";
    TS.dayActions(el, day);
  }

  /* ── ROADMAP ── */
  function roadmap(el) {
    const s = S();
    el.innerHTML = '<header class="page-head"><p class="eyebrow">The complete curriculum</p><h1>The 180-Day Roadmap</h1><p>Six training eras. One hundred and eighty days. Zero official endorsements.</p></header>' +
      TS.ERAS.map(function (era) {
        const days = TS.ROADMAP.slice(era.from - 1, era.to);
        return '<section class="era-block era-' + era.n + '"><header><p class="eyebrow">Era ' + ["I", "II", "III", "IV", "V", "VI"][era.n - 1] + " · Days " + era.from + "–" + era.to + "</p><h2>" + era.emoji + " " + esc(era.name) + '</h2><p class="obj">Objective: ' + esc(era.objective) + '</p><p class="skills">' + era.skills.map(esc).join(" · ") + '</p><p class="mood">' + esc(era.mood) + "</p></header>" +
          (era.n === 6 ? '<p class="small weeks">' + TS.FINAL_WEEKS.map(function (w) { return esc(w.title) + " (" + w.from + "–" + w.to + ")"; }).join(" · ") + "</p>" : "") +
          '<ol class="day-grid">' + days.map(function (r) {
            const stt = st.status(r.day);
            const inner = '<span class="dn num">' + r.day + "</span><span class=\"dt\">" + esc(r.title) + "</span>" + (TS.DAYS[r.day] ? '<span class="full">FULL</span>' : "");
            const special = r.day === 13 ? egg("roadmap-13", "Day 13 on the roadmap, which was always going to be special", "✶", "inline tiny") : "";
            return '<li class="d ' + stt + (r.day % 13 === 0 ? " thirteen" : "") + '">' + (stt === "locked" ? '<span class="tile-in" title="' + esc(r.objective) + '">' + inner + "</span>" : '<a class="tile-in" href="#/day/' + r.day + '" title="' + esc(r.objective) + '">' + inner + "</a>") + special + "</li>";
          }).join("") + "</ol></section>";
      }).join("");
    bindEggs(el);
  }

  /* ── LORE ── */
  const LORE_TYPES = ["all", "journal", "memory", "story", "song", "phrase", "symbol", "color", "character", "clue", "cat", "plan", "era", "bracelet", "album", "thirteen", "achievement", "motif"];
  let loreFilter = "all", loreQuery = "";
  function lore(el) {
    const s = S();
    const entries = s.lore.slice().reverse()
      .concat(s.incidents.map(function (i) { return { day: i.day, type: "thirteen", title: "13 incident", text: i.text }; }))
      .concat(Object.keys(s.achievements).map(function (k) { const a = st.ACH.find(function (x) { return x[0] === k; }); return a ? { day: "", type: "achievement", title: a[1], text: a[2] } : null; }).filter(Boolean))
      .concat(st.recurringMotifs().slice(0, 30).map(function (m) { return { day: m.first, type: "motif", title: "Recurring: " + m.key, text: "Mentioned on Day" + (m.days.length > 1 ? "s " : " ") + m.days.join(", ") + "." }; }));
    el.innerHTML = '<header class="page-head"><p class="eyebrow">Personal lore database</p><h1>My Lore</h1><p>Everything you have written, noticed, hidden and over-interpreted. Search it. Fear it.</p></header>' +
      '<div class="lore-tools"><label class="sr" for="lq">Search your lore</label><input id="lq" type="search" placeholder="Search: umbrella, red, 13, cat…" value="' + esc(loreQuery) + '">' +
      '<div class="chips">' + LORE_TYPES.map(function (t) { return '<button class="chip' + (t === loreFilter ? " on" : "") + '" data-t="' + t + '">' + t + "</button>"; }).join("") + "</div></div>" +
      '<section class="motifs card"><h2>Recurring motifs</h2>' + (st.recurringMotifs().length ? '<p class="motif-cloud">' + st.recurringMotifs().slice(0, 24).map(function (m) { return '<button class="motif' + (m.strong ? " strong" : "") + '" data-q="' + esc(m.key) + '">' + esc(m.key) + " <small>×" + m.days.length + "</small></button>"; }).join("") + "</p>" : '<p class="small">Nothing has returned yet. Keep writing. Things always come back.</p>') + "</section>" +
      '<ol class="lore-list" data-list></ol>';
    const list = el.querySelector("[data-list]");
    function draw() {
      const q = loreQuery.toLowerCase();
      const shown = entries.filter(function (e) { return (loreFilter === "all" || e.type === loreFilter) && (!q || (e.title + " " + e.text).toLowerCase().indexOf(q) > -1); });
      list.innerHTML = shown.length ? shown.slice(0, 300).map(function (e) {
        return '<li class="lore-item t-' + e.type + '"><p class="lore-meta"><span class="pill">' + esc(e.type) + "</span>" + (e.day ? " Day " + e.day : "") + "</p>" + (e.title ? "<h3>" + esc(e.title) + "</h3>" : "") + "<p>" + nl(e.text) + "</p></li>";
      }).join("") : '<li class="empty">' + (s.lore.length ? "No lore matches. Suspicious." : "Your lore is empty. Every universe starts with one sentence. Day 1 is waiting." + egg("lore-empty", "A clue inside your own lore archive", "13", "inline")) + "</li>";
    }
    draw();
    el.querySelector("#lq").addEventListener("input", function (e) { loreQuery = e.target.value; draw(); });
    el.addEventListener("click", function (e) {
      const c = e.target.closest(".chip"); if (c) { loreFilter = c.dataset.t; el.querySelectorAll(".chip").forEach(function (x) { x.classList.toggle("on", x === c); }); draw(); }
      const m = e.target.closest(".motif"); if (m) { loreQuery = m.dataset.q; el.querySelector("#lq").value = loreQuery; draw(); }
    });
    bindEggs(el);
  }

  /* ── EASTER EGGS + 13 TIMELINE ── */
  function eggs(el) {
    const s = S();
    const hidden = Object.keys(s.eggs).filter(function (k) { return k.indexOf("day-") === 0; }).length;
    const globals = st.GLOBAL_EGGS.map(function (g) { const f = s.eggs[g[0]]; return '<li class="' + (f ? "found" : "") + '">' + (f ? "✓ " + esc(g[1]) + ' <small>Day ' + f.day + "</small>" : "??? <small>Somewhere in the app.</small>") + "</li>"; }).join("");
    const inc = s.incidents.slice().sort(function (a, b) { return a.day - b.day; });
    el.innerHTML = '<header class="page-head"><p class="eyebrow">Nothing is a coincidence™</p><h1>My Easter Eggs</h1></header>' +
      '<div class="stat-strip"><div><b class="num">' + s.counts.eggs + '</b><span>Easter eggs found</span></div><div><b class="num">' + s.counts.clues + '</b><span>Detector clues</span></div><div><b class="num">' + hidden + '</b><span>Hidden daily 13s</span></div><div><b class="num">' + s.counts.thirteens + "</b><span>13 incidents</span></div></div>" +
      '<div class="cta-row"><a class="btn primary" href="#/play/detector">Easter Egg Detector</a><a class="btn" href="#/board">Conspiracy Board</a></div>' +
      '<section class="card"><h2>The global clue registry</h2><p class="small">Thirteen clues are hidden around the app. Not in the days — in the app itself. ' + Object.keys(s.eggs).filter(function (k) { return k.indexOf("day-") !== 0; }).length + "/13 found.</p><ol class=\"registry\">" + globals + "</ol></section>" +
      '<section class="timeline13"><header><p class="eyebrow">Official record</p><h2>The 13 Incidents</h2></header>' +
      (inc.length ? "<ol>" + inc.map(function (i) { return '<li><b class="num">Day ' + i.day + ":</b> " + esc(i.text) + (i.day % 13 === 0 ? ' <span class="pill">Day ' + i.day + " is a multiple of 13. We noticed.</span>" : "") + "</li>"; }).join("") + "</ol>" :
        '<p>No incidents yet. Answer “Yes” in a daily 13 CHECK, or simply write “13” anywhere. The app is watching.</p>') +
      '<form class="inline-form" id="inc"><label class="sr" for="inc-t">Report a 13 incident</label><input id="inc-t" placeholder="Report an incident: 13 unread emails"><button class="btn">Report</button></form>' +
      '<dl class="significance"><dt>STATISTICAL SIGNIFICANCE</dt><dd>Absolutely none.</dd><dt>SPIRITUAL SIGNIFICANCE</dt><dd>Extremely suspicious.</dd></dl></section>';
    el.querySelector("#inc").addEventListener("submit", function (e) {
      e.preventDefault(); const v = el.querySelector("#inc-t").value.trim(); if (!v) return;
      st.addIncident(v, "report"); st.award({ egg: 5 }); U.celebrate("13 incident logged. 🧩 +5"); TS.render();
    });
  }

  /* ── PROGRESS ── */
  function progress(el) {
    const s = S(), P = st.pct;
    const bars = [["SONGWRITER", P("songwriter")], ["STORYTELLER", P("storyteller")], ["MASTERMIND", P("mastermind")], ["EASTER EGG DETECTOR", P("egg")], ["MAIN CHARACTER", P("main")], ["CAT ENERGY", P("cat")], ["EMOTIONAL DAMAGE", s.damage], ["ERA CREATION", Math.max(P("era"), st.erasFilled() / 6 * 100)], ["TAYLORIFICATION", st.overall()]];
    const tree = treeStatus();
    const snaps = Object.keys(s.snapshots).map(Number).sort(function (a, b) { return a - b; });
    el.innerHTML = '<header class="page-head"><p class="eyebrow">Progress dashboard</p><h1>My Progress</h1></header>' +
      '<section class="todays card"><p class="eyebrow">Today’s Taylorification</p><ul class="tt">' +
        st.STATS.map(function (x) { return "<li><span>" + x.emoji + " " + x.label + '</span><b class="num">' + Math.round(P(x.k)) + "%</b></li>"; }).join("") +
        '<li><span>🎀 Friendship Bracelet Inventory</span><b class="num">' + s.counts.bracelets + '</b></li><li><span>🍷 Emotional Damage</span><b class="num">' + s.damage + "%</b></li></ul>" +
        '<p class="overall">Overall: <b>' + st.overall() + '% TAYLORIFIED</b></p><p class="small">You are now legally required to make everything slightly more symbolic.</p></section>' +
      '<section class="bars card"><h2>Skill bars</h2>' + bars.map(function (b) { return '<div class="bar-row"><span>' + b[0] + '</span><code class="tbar" aria-hidden="true">' + U.textBar(b[1]) + '</code><b class="num">' + Math.round(b[1]) + "%</b></div>"; }).join("") + "</section>" +
      (snaps.length > 1 ? '<section class="card"><h2>Taylorification over time</h2>' + spark(snaps.map(function (d) { return [d, s.snapshots[d]]; })) + "</section>" : "") +
      '<section class="tree"><h2>The Taylorification Tree</h2><ol><li class="root">YOU</li>' + TS.TREE.map(function (t, i) {
        return '<li class="' + (tree[i] ? "lit" : "") + '"><span class="num">STEP ' + (i + 1) + "</span> " + esc(t.t) + "<small>" + (tree[i] ? "Unlocked" : esc(t.need)) + "</small>" + (i === 5 ? egg("tree-6", "Step 6 of the Taylorification Tree", "13", "inline tiny") : "") + "</li>";
      }).join("") + "</ol></section>" +
      '<section class="card counters"><h2>Counters</h2><dl>' + [["Creative pieces", s.counts.creative], ["Journal entries", s.counts.journal], ["Storytelling challenges", s.counts.story], ["Metaphor victims", s.counts.metaphors], ["Cultural seminars", s.counts.culture], ["English words used", s.counts.words], ["Callbacks", s.counts.callbacks], ["Plans", s.counts.plans], ["Cat references", s.counts.cat], ["Albums imagined", s.counts.albums]].map(function (c) { return "<div><dt>" + c[0] + '</dt><dd class="num">' + c[1] + "</dd></div>"; }).join("") + "</dl></section>" +
      '<section class="achievements"><h2>Achievements <small>' + Object.keys(s.achievements).length + "/" + st.ACH.length + "</small></h2><ul>" + st.ACH.map(function (a) {
        const got = s.achievements[a[0]];
        return '<li class="' + (got ? "got" : "") + '"><b>' + esc(got ? a[1] : a[1].replace(/^🏆 /, "🔒 ")) + "</b><span>" + esc(a[2]) + "</span></li>";
      }).join("") + "</ul></section>" +
      '<div class="cta-row"><a class="btn" href="#/school">The Taylor Swift School</a><a class="btn ghost" href="#/final">' + (s.completed[180] ? "Final screen" : "Preview the final screen (spoilers)") + "</a></div>";
    bindEggs(el);
  }
  function spark(pts) {
    const W = 320, H = 90, pad = 6, maxD = 180;
    const xs = function (d) { return pad + (d / maxD) * (W - 2 * pad); }, ys = function (v) { return H - pad - (v / 100) * (H - 2 * pad); };
    const path = pts.map(function (p, i) { return (i ? "L" : "M") + xs(p[0]).toFixed(1) + " " + ys(p[1]).toFixed(1); }).join(" ");
    const last = pts[pts.length - 1];
    return '<svg class="spark" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Taylorification after each completed day"><path d="M' + pad + " " + ys(50) + " H" + (W - pad) + '" class="grid"/><path d="' + path + " L" + xs(last[0]) + " " + (H - pad) + " L" + xs(pts[0][0]) + " " + (H - pad) + ' Z" class="area"/><path d="' + path + '" class="line"/><circle cx="' + xs(last[0]) + '" cy="' + ys(last[1]) + '" r="3.5" class="dot"/></svg><p class="small">Day ' + last[0] + ": " + last[1] + "% · scale 0–100%, days 0–180</p>";
  }
  function treeStatus() {
    const s = S();
    return [s.completed[1], s.counts.creative + s.counts.journal + s.counts.story >= 5, s.counts.taylorize >= 1, s.counts.metaphors >= 3,
      s.lore.some(function (l) { return l.type === "color"; }) || Object.keys(s.motifs).some(function (k) { return s.motifs[k].strong; }),
      s.counts.thirteens >= 1, s.counts.eggs >= 5, s.lore.length >= 25, s.counts.plans >= 1, s.completed[180]].map(Boolean);
  }

  /* ── SCHOOL ── */
  function school(el) {
    const s = S();
    function passed(need) {
      if (need.day) return !!s.completed[need.day];
      if (need.bracelets) return s.counts.bracelets >= need.bracelets;
      if (need.plans) return s.counts.plans >= need.plans;
      if (need.erasFilled) return st.erasFilled() >= need.erasFilled;
      if (need.metaphors) return s.counts.metaphors >= need.metaphors;
      return false;
    }
    el.innerHTML = '<header class="page-head"><p class="eyebrow">Prospectus · Not accredited by anyone</p><h1>The Taylor Swift School</h1><p>A fictional faculty. Real skills. Grades are awarded automatically as you play.</p></header>' +
      '<ol class="courses">' + TS.CURRICULUM.map(function (c) {
        const ok = passed(c.need);
        return '<li class="course ' + (ok ? "passed" : "") + '"><p class="code num">' + esc(c.code) + "</p><h3>" + esc(c.name) + "</h3><p>" + esc(c.desc) + '</p><p class="grade">' + (ok ? "PASSED · Grade: A (for Albums)" : "Enrolled") + "</p>" +
          (c.code === "FINAL EXAM" ? '<p class="small">Question 1: Was everything an Easter egg? ' + egg("school-final", "The final exam question", "Answer", "inline") + "</p>" : "") + "</li>";
      }).join("") + "</ol>";
    bindEggs(el);
  }

  /* ── SETTINGS ── */
  function settings(el) {
    const s = S();
    el.innerHTML = '<header class="page-head"><p class="eyebrow">Administrative</p><h1>Settings</h1></header>' +
      '<section class="card"><h2>Your name</h2><form class="inline-form" id="nm"><label class="sr" for="nm-i">Your name</label><input id="nm-i" value="' + esc(s.name) + '" placeholder="For the final screen"><button class="btn">Save</button></form></section>' +
      '<section class="card"><h2>Pacing</h2><p>How fast should days unlock?</p><div class="choices">' +
        '<button class="choice' + (s.settings.pacing === "free" ? " picked" : "") + '" data-pace="free">Unlock when I finish a day (binge mode)</button>' +
        '<button class="choice' + (s.settings.pacing === "daily" ? " picked" : "") + '" data-pace="daily">One new day per calendar day (the real 180 days)</button></div></section>' +
      '<section class="card"><h2>Backup</h2><p>Everything is saved in this browser only. Closing it erases nothing; clearing site data does. Export a backup now and then.</p>' +
        '<div class="row"><button class="btn" data-act="export">Download backup</button><button class="btn ghost" data-act="copy">Copy backup text</button></div>' +
        '<label for="imp">Restore from backup</label><input type="file" id="imp" accept="application/json,.json">' +
        '<label for="imp-t">…or paste backup text</label><textarea id="imp-t" rows="3"></textarea><div class="row"><button class="btn ghost" data-act="import">Restore pasted backup</button></div></section>' +
      '<section class="card danger"><h2>Start over</h2><p>Erase all progress, lore, cats and bracelets on this device.</p><div class="row" data-reset><button class="btn ghost" data-act="reset1">Erase everything…</button></div></section>' +
      '<section class="card"><h2>About</h2><p>“How to Become Taylor Swift in 180 Days” is an unofficial, fan-inspired parody and creative-writing course. It is not affiliated with or endorsed by Taylor Swift. It uses no official logos, artwork or lyrics — only short references, titles and original writing. Friendship bracelets are a fan tradition from the Eras Tour, not an official product.</p><p class="small">Version ' + egg("settings-version", "The version number, v1.3", "1.3", "inline") + " · Works offline · Data stays on this device.</p></section>";
    el.querySelector("#nm").addEventListener("submit", function (e) { e.preventDefault(); s.name = el.querySelector("#nm-i").value.trim(); st.save(); U.toast("Saved. The final screen will know your name."); });
    el.querySelector("#imp").addEventListener("change", function (e) {
      const f = e.target.files[0]; if (!f) return; const rd = new FileReader();
      rd.onload = function () { try { st.importJSON(rd.result); U.toast("Backup restored. The lore lives."); TS.render(); } catch (err) { U.toast("That file isn’t a backup from this app."); } };
      rd.readAsText(f);
    });
    el.addEventListener("click", function (e) {
      const p = e.target.closest("[data-pace]"); if (p) { s.settings.pacing = p.dataset.pace; st.save(); TS.render(); return; }
      const a = e.target.closest("[data-act]"); if (!a) return;
      const act = a.dataset.act;
      if (act === "export") {
        const blob = new Blob([st.exportJSON()], { type: "application/json" }), url = URL.createObjectURL(blob), l = document.createElement("a");
        l.href = url; l.download = "taylorification-backup-" + st.iso() + ".json"; document.body.appendChild(l); l.click(); l.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      }
      if (act === "copy") U.copy(st.exportJSON());
      if (act === "import") { try { st.importJSON(el.querySelector("#imp-t").value); U.toast("Backup restored."); TS.render(); } catch (err) { U.toast("That text isn’t a backup from this app."); } }
      if (act === "reset1") el.querySelector("[data-reset]").innerHTML = '<p><b>Are you sure?</b> 180 days of lore, gone. This cannot be undone.</p><button class="btn danger" data-act="reset2">Yes, erase everything</button><button class="btn ghost" data-act="reset0">Keep my lore</button>';
      if (act === "reset0") TS.render();
      if (act === "reset2") { st.reset(); U.toast("Erased. Day 0. Status: civilian."); U.go("#/"); }
    });
    bindEggs(el);
  }

  /* ── PREVIOUSLY ON… ── */
  function previouslyOn() {
    const s = S(), d = st.currentDay();
    const last = Object.keys(s.completed).map(Number).sort(function (a, b) { return b - a; })[0];
    const un = st.unresolved()[0], rec = st.recurringMotifs()[0];
    const missedEggs = Object.keys(s.completed).filter(function (k) { return !s.eggs["day-" + k]; }).length;
    const next = TS.getDay(d);
    U.modal('<div class="tv"><p class="eyebrow">Previously on your Taylorization…</p><ul class="prev">' +
      (last ? "<li><b>Last episode:</b> Day " + last + ", “" + esc(TS.getDay(last).title) + "”.</li>" : "") +
      "<li><b>Current era:</b> " + TS.eraOf(d).emoji + " " + esc(TS.eraOf(d).name) + ".</li>" +
      (un ? "<li><b>Unresolved lore:</b> the matter of the " + esc(un.key) + " (Day " + un.first + ") remains unresolved.</li>" : rec ? "<li><b>Recurring motif:</b> “" + esc(rec.key) + "” has appeared on " + rec.days.length + " different days. Investigate.</li>" : "<li><b>Unresolved lore:</b> none yet. Suspiciously clean.</li>") +
      "<li><b>Active Easter eggs:</b> " + (missedEggs ? missedEggs + " hidden 13" + (missedEggs > 1 ? "s remain" : " remains") + " unfound on days you’ve played." : "every hidden 13 found so far. Unbearable.") + "</li>" +
      "<li><b>Emotional damage:</b> " + s.damage + "/100 — " + esc(st.damageLabel()) + "</li>" +
      "<li><b>Next mission:</b> Day " + d + ", “" + esc(next.title) + "”.</li></ul>" +
      '<div class="row"><a class="btn primary" href="#/day/' + d + '" data-close>Continue the series</a></div></div>', { cls: "tv-card" });
  }

  /* ── WEEKLY EPISODE ── */
  const RATINGS = ["Questionable.", "Concerning, but cinematic.", "Technically zero. Emotionally platinum.", "Unclear. The cat abstained.", "High, if feelings count. They do now."];
  function episode(week) {
    const s = S(), from = week * 7 - 6, to = week * 7;
    const inRange = function (x) { return x.day >= from && x.day <= to; };
    const lines = [];
    const lore = s.lore.filter(inRange);
    const inc = s.incidents.filter(inRange).length;
    const br = s.bracelets.filter(inRange).length;
    const cbs = s.log.filter(function (l) { return l.type === "callback" && inRange(l); });
    const songs = lore.filter(function (l) { return l.type === "song"; });
    const stories = lore.filter(function (l) { return l.type === "story" || l.type === "journal" || l.type === "memory"; });
    if (stories[0]) lines.push("turned “" + stories[0].text.replace(/\s+/g, " ").slice(0, 48) + "…” into a narrative;");
    if (songs[0]) lines.push("wrote song material nobody asked for (" + songs.length + " piece" + (songs.length > 1 ? "s" : "") + ");");
    lines.push(inc ? "found the number 13 " + (inc === 1 ? "once" : inc === 2 ? "twice" : inc + " times") + ";" : "found zero 13s and remained suspicious anyway;");
    if (br) lines.push("created " + br + " friendship bracelet" + (br > 1 ? "s" : "") + ";");
    if (cbs[0]) lines.push(cbs[0].text.replace(/^“/, "noticed “") + ";");
    lines.push("accidentally developed a new era;");
    lines.push("spent " + (13 + (E.hash("w" + week) % 17)) + " minutes investigating a suspicious colour.");
    const before = week > 1 ? (s.snapshots[from - 1] || 0.3) : 0.3, after = s.snapshots[to] || st.overall();
    const motif = st.recurringMotifs()[0];
    s.episodes[week] = true; st.save();
    U.modal('<div class="tv"><p class="eyebrow">This week’s episode</p><h2>S' + TS.eraOf(to).n + "E" + week + ": The One With " + esc(motif ? "the " + motif.key[0].toUpperCase() + motif.key.slice(1) : "No Clear Motif") + "</h2><p>This week you:</p><ul>" +
      lines.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") + "</ul>" +
      '<dl class="significance"><dt>Productivity rating</dt><dd>' + RATINGS[week % RATINGS.length] + "</dd><dt>Taylorification</dt><dd>+" + Math.max(0, Math.round((after - before) * 10) / 10) + "%</dd></dl>" +
      '<div class="row"><button class="btn primary" data-close>Roll credits</button></div></div>', { cls: "tv-card" });
  }

  /* ── FINAL SCREEN ── */
  function final(el) {
    const s = S(), P = st.pct, earned = !!s.completed[180];
    const ranked = st.CORE.concat(["romance"]).map(function (k) { return [k, P(k)]; }).sort(function (a, b) { return b[1] - a[1]; });
    const top = ranked[0][0], second = ranked[1][0];
    const eraName = (s.answers[180] && s.answers[180].f_era && s.answers[180].f_era.name) || ("The " + E.ADJ[top] + " Era");
    const traits = { songwriter: "You turn everything into a lyric.", storyteller: "You turn everything into a narrative.", egg: "You can find a clue in a car park.", main: "You walk into rooms like the bridge is playing.", cat: "You have the calm, unbothered energy of a cat in a sunbeam.", romance: "You can turn a receipt into a love story.", mastermind: "You have a rollout plan for lunch.", era: "You reinvent yourself on schedule." };
    const stats = [["🎤", "written", s.counts.creative + s.counts.story + s.counts.journal, "creative pieces"], ["🧩", "detected", s.counts.eggs + s.counts.clues, "Easter eggs"], ["🐈", "accumulated", Math.round(P("cat")) + s.counts.cat, "cat points"], ["💌", "created", s.counts.bracelets, "friendship bracelets"], ["🔴", "entered", TS.eraOf(st.currentDay()).n, "eras"], ["1️⃣3️⃣", "encountered the number 13", s.counts.thirteens, "times"], ["📚", "learned", s.counts.culture, "cultural references"], ["📝", "written", s.counts.journal, "journal entries"], ["🎬", "completed", s.counts.story, "storytelling challenges"], ["💅", "achieved", st.overall() + "%", "Taylorification"]];
    el.innerHTML = '<article class="finale' + (earned ? "" : " preview") + '">' + (earned ? "" : '<p class="preview-band">Preview · You have not earned this yet. Day ' + st.currentDay() + " of 180.</p>") +
      '<div class="curtain">' + egg("final-curtain", "The final curtain", "13", "inline tiny") + '</div><p class="eyebrow">Day 180</p><h1 class="congrats">Congratulations.</h1><p class="lead">You survived 180 days.' + (s.name ? " " + esc(s.name) + ", you" : " You") + " have:</p>" +
      '<ul class="final-stats">' + stats.map(function (x) { return "<li><span>" + x[0] + "</span> " + x[1] + ' <b class="num">' + x[2] + "</b> " + x[3] + "</li>"; }).join("") + "</ul>" +
      '<section class="final-era"><p class="eyebrow">Your final era</p><h2>' + esc(eraName.toUpperCase()) + "</h2><ul>" +
        ranked.slice(0, 4).map(function (r) { const lab = st.STATS.find(function (x) { return x.k === r[0]; }).label.toLowerCase(); return '<li><b class="num">' + Math.round(r[1]) + "%</b> " + esc(lab) + "</li>"; }).join("") +
        '<li><b class="num">' + Math.max(1, 100 - s.damage - 13) + "%</b> emotional stability</li></ul>" +
        "<p><b>Your signature trait:</b> " + esc(traits[top]) + " Also: you are, at heart, a " + esc(E.NOUN[second].toLowerCase()) + ".</p><p class=\"small\">" + (s.counts.thirteens ? "Unfortunately, you also found 13 " + (s.counts.thirteens === 1 ? "once" : s.counts.thirteens + " times") + "." : "You never found a single 13. Statistically fine. Spiritually suspicious.") + "</p></section>" +
      '<section class="become"><p>You are now:</p><p class="ish">TAYLOR SWIFT-ISH<sup>™</sup></p><p>Please do not sue us.</p></section>' +
      '<section class="philosophy"><p>Notice more. Write more. Create more. Tell better stories. Learn to communicate. Build your own mythology. Have fun with your identity. Reinvent yourself.</p><p class="end">And, whenever possible… <b>make it an era.</b></p></section></article>';
    if (earned) U.confetti(220);
    bindEggs(el);
  }

  TS.views = { home: home, day: dayView, roadmap: roadmap, lore: lore, eggs: eggs, progress: progress, school: school, settings: settings, final: final,
    previouslyOn: previouslyOn, episode: episode, isDone: isDone, renderStep: renderStep, missionList: missionList, stepFeedback: stepFeedback, bindEggs: bindEggs, egg: egg, scoresHtml: scoresHtml, masterHtml: masterHtml, fmt: fmt };
})();
