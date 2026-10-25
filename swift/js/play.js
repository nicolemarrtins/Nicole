/* Mini-games, generators and the big creative tools: Album, Cat Department, My Six Eras, Conspiracy Board. */
window.TS = window.TS || {};
(function () {
  const U = TS.ui, E = TS.engine, st = TS.store, V = TS.views, esc = U.esc, nl = U.nl;
  function S() { return TS.store.state; }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function played(id) { S().played[id] = (S().played[id] || 0) + 1; st.count("games"); }
  function back(from) { return from ? '<a class="backlink" href="#/day/' + from + '">← Back to Day ' + from + "</a>" : '<a class="backlink" href="#/play">← All mini-games</a>'; }
  function head(eyebrow, title, sub) { return '<header class="page-head"><p class="eyebrow">' + eyebrow + "</p><h1>" + title + "</h1>" + (sub ? "<p>" + sub + "</p>" : "") + "</header>"; }

  /* ── HUB ── */
  const GAMES = [
    ["detector", "Game 1", "Spot the Easter Egg", "Find hidden clues in fictional posts. Increasingly unhinged."],
    ["taylorize", "Game 2", "Taylorize the Situation", "Turn ordinary life into lore."],
    ["nameera", "Game 3", "Name That Era", "Identify an aesthetic from a description."],
    ["album", "Game 4", "Build the Album", "Create an album concept and an original cover."],
    ["lon", "Game 5", "Lyric or Normal Sentence?", "Poetic or mundane? Learn why."],
    ["masterplan", "Game 6", "Masterplan", "An unnecessarily complicated rollout for something small."],
    ["bracelet", "Game 7", "Friendship Bracelet Factory", "Make virtual bracelets. Trade them with your heart."],
    ["damage", "Game 8", "Emotional Damage", "How dramatically should this be interpreted?"],
    ["tracklist", "Bonus", "The Tracklist Game", "Assign situations to the correct track."],
    ["lyric", "Bonus", "Turn It Into a Lyric", "Rewrite ordinary sentences. Get scored on six craft skills."],
    ["quiz", "Bonus", "What Era Are You In?", "A playful aesthetic quiz. Not a diagnosis."],
    ["outfit", "Bonus", "Outfit Era Generator", "A style challenge built from what you own."]
  ];
  function hub(el) {
    el.innerHTML = head("Mini-games", "The Arcade of Unnecessary Skills", "Every game trains a real skill: observation, metaphor, rhythm, planning, vocabulary. The framing is ridiculous. The learning is not.") +
      '<ol class="game-list">' + GAMES.map(function (g) {
        const href = g[0] === "album" ? "#/album" : "#/play/" + g[0];
        return '<li><a class="game-card" href="' + href + '"><span class="eyebrow">' + g[1] + "</span><b>" + g[2] + "</b><span>" + g[3] + "</span>" + (S().played[g[0]] ? '<span class="pill">Played ×' + S().played[g[0]] + "</span>" : "") + "</a></li>";
      }).join("") + "</ol>" +
      '<div class="cta-row"><button class="btn" data-act="event">🚨 Trigger a random event</button><a class="btn ghost" href="#/board">Conspiracy Board</a><a class="btn ghost" href="#/cats">Cat Department</a><a class="btn ghost" href="#/eras">My Six Eras</a></div>';
    el.querySelector('[data-act="event"]').addEventListener("click", function () { randomEvent(true); });
  }

  /* ── GAME 2 · TAYLORIZE ── */
  function taylorize(el, from) {
    let input = TS.play.pending || ""; TS.play.pending = "";
    let gen = null;
    function draw() {
      el.innerHTML = back(from) + head("Game 2 · Everything is a song", "✨ Taylorize This", "Type something that happened. Something small. The smaller, the better.") +
        '<form class="card" id="tz"><label for="tz-i">What happened?</label><input id="tz-i" value="' + esc(input) + '" placeholder="My coworker didn’t answer my message." autocomplete="off"><div class="row"><button class="btn primary">✨ Taylorize this</button></div></form>' +
        (gen ? '<section class="tz-result">' +
          '<div class="compare"><div><p class="eyebrow">Normal person</p><p>“' + esc(input) + '”</p></div><div><p class="eyebrow">Taylorized version</p><p class="hand">' + esc(gen.line) + "</p></div></div>" +
          '<p class="eyebrow">Working title</p><h2 class="song-title">' + esc(gen.title) + '</h2><p class="small">Alternative titles: ' + gen.alts.map(esc).join(" · ") + "</p>" +
          '<form id="tzq" class="card fields">' + E.TAYLORIZE_QS.map(function (q) { return '<label for="q-' + q.id + '">' + esc(q.q) + '</label><input id="q-' + q.id + '" data-q="' + q.id + '">'; }).join("") +
          '<div class="row"><button class="btn primary">Build the song</button></div></form><div data-out></div></section>' : "");
      el.querySelector("#tz").addEventListener("submit", function (e) {
        e.preventDefault(); input = el.querySelector("#tz-i").value.trim();
        if (!input) return U.toast("Type something mildly inconvenient first.");
        gen = E.taylorize(input); draw();
      });
      const f = el.querySelector("#tzq");
      if (f) f.addEventListener("submit", function (e) {
        e.preventDefault();
        const a = {}; f.querySelectorAll("[data-q]").forEach(function (x) { a[x.dataset.q] = x.value.trim(); });
        if (Object.keys(a).filter(function (k) { return a[k]; }).length < 3) return U.toast("Answer at least three questions. A song needs evidence.");
        const res = E.score("drama", input + "\n" + Object.values(a).join("\n"));
        const seed = "Title: " + gen.title + "\nWhat happened: " + input + "\nExpected: " + a.expect + "\nGot: " + a.got + "\nPretended: " + a.pretend + "\nDetail: " + a.detail + "\nSymbol: " + a.symbol;
        el.querySelector("[data-out]").innerHTML = '<section class="song-seed notebook"><p class="eyebrow">Song seed</p><h3>' + esc(gen.title) + "</h3><ol>" +
          "<li><b>Verse 1</b> opens on the detail: " + esc(a.detail || "the thing you remember") + ".</li>" +
          "<li><b>Pre-chorus</b> admits what you expected: " + esc(a.expect || "something") + ".</li>" +
          "<li><b>Chorus</b> keeps returning to the symbol: " + esc(a.symbol || "an object") + ".</li>" +
          "<li><b>Verse 2</b> tells what you actually got: " + esc(a.got || "less") + ".</li>" +
          "<li><b>Bridge</b> confesses what you pretended not to care about: " + esc(a.pretend || "everything") + ".</li></ol>" +
          V.scoresHtml(res) + '<p class="verdict">Congratulations. You have created the emotional foundation of a song that absolutely did not need to exist.</p></section>';
        const first = !S().played.taylorize;
        played("taylorize"); st.count("taylorize"); st.count("creative");
        const cb = st.addLore({ type: "song", title: gen.title, text: seed });
        st.adjustDamage(Math.round(res.scores["Emotional Damage"] / 12));
        U.celebrate(st.award({ songwriter: 12, storyteller: 8 }) + (cb ? "<br><b>THE " + esc(cb.key.toUpperCase()) + " HAS RETURNED.</b>" : ""));
        if (first) U.confetti(60);
      });
    }
    draw();
  }

  /* ── GAME 1 · EASTER EGG DETECTOR ── */
  function detector(el, from) {
    let scene = null;
    function list() {
      el.innerHTML = back(from) + head("Game 1 · Nothing is a coincidence™", "Spot the Easter Egg", "Each fictional post hides clues: colours, numbers, objects, dates, references, repeated symbols. Tap what is suspicious. Not everything is a clue. (Most things are.)") +
        '<ol class="scene-list">' + TS.SCENES.map(function (sc, i) {
          const found = (S().detector[sc.id] || []).length, total = clues(sc).length;
          return '<li><button class="scene-btn" data-s="' + i + '"><span class="stars">' + U.stars(sc.level) + "</span><b>Level " + (i + 1) + " · " + esc(sc.name) + "</b><span class=\"num\">" + found + "/" + total + " clues</span></button></li>";
        }).join("") + "</ol>";
      el.querySelectorAll("[data-s]").forEach(function (b) { b.addEventListener("click", function () { scene = TS.SCENES[+b.dataset.s]; play(); }); });
    }
    function clues(sc) {
      const out = [];
      sc.objects.forEach(function (o, i) { if (o.clue) out.push({ key: "o" + i, text: o.clue }); });
      sc.caption.forEach(function (c, i) { if (c[1]) out.push({ key: "c" + i, text: c[1] }); });
      return out;
    }
    function play() {
      const got = S().detector[scene.id] || (S().detector[scene.id] = []);
      const all = clues(scene);
      el.innerHTML = '<button class="backlink" data-list>← All levels</button>' +
        '<div class="detector"><div class="post"><div class="post-head"><span class="avatar"></span><b>' + esc(scene.handle) + '</b><span class="small">13m</span></div>' +
        '<div class="post-img" style="background:' + scene.bg + '">' + scene.objects.map(function (o, i) {
          const k = "o" + i, f = got.indexOf(k) > -1;
          return '<button class="obj' + (o.t ? " txt" : "") + (o.box ? " box" : "") + (f ? " found" : "") + '" data-k="' + k + '" style="left:' + o.x + "%;top:" + o.y + "%;font-size:" + o.s + 'rem" aria-label="' + esc(o.t || "object") + '">' + esc(o.e || o.t) + "</button>";
        }).join("") + "</div>" +
        '<p class="post-cap"><b>' + esc(scene.handle.slice(1)) + "</b> " + scene.caption.map(function (c, i) {
          return c[1] ? '<button class="cap' + (got.indexOf("c" + i) > -1 ? " found" : "") + '" data-k="c' + i + '">' + esc(c[0]) + "</button>" : '<span class="cap-plain" data-plain>' + esc(c[0]) + "</span>";
        }).join("") + "</p></div>" +
        '<aside class="evidence"><p class="eyebrow">Evidence log <span class="num" data-n>' + got.length + "/" + all.length + '</span></p><ol data-log>' +
          all.filter(function (c) { return got.indexOf(c.key) > -1; }).map(function (c) { return "<li>" + esc(c.text) + "</li>"; }).join("") +
        '</ol><button class="btn ghost" data-reveal>Reveal what I missed</button><div data-missed></div></aside></div>';
      el.querySelector("[data-list]").addEventListener("click", list);
      el.querySelector(".post-img").addEventListener("click", function (e) {
        const b = e.target.closest("[data-k]"); if (!b) { U.toast("Nothing there. Or is there? (There isn’t.)"); return; }
        const o = scene.objects[+b.dataset.k.slice(1)];
        if (!o.clue) { U.toast(esc(o.decoy || "Not a clue. Just a thing.")); return; }
        hit(b, o.clue);
      });
      el.querySelector(".post-cap").addEventListener("click", function (e) {
        const b = e.target.closest("[data-k]"); if (!b) { if (e.target.closest("[data-plain]")) U.toast("Just words. Ordinary, innocent words."); return; }
        hit(b, scene.caption[+b.dataset.k.slice(1)][1]);
      });
      el.querySelector("[data-reveal]").addEventListener("click", function () {
        const missed = all.filter(function (c) { return got.indexOf(c.key) < 0; });
        el.querySelector("[data-missed]").innerHTML = '<p class="eyebrow">What you missed</p>' + (missed.length ? "<ol>" + missed.map(function (c) { return "<li>" + esc(c.text) + "</li>"; }).join("") + "</ol>" : "<p>Nothing. You found every clue. Your friends no longer invite you to brunch.</p>") +
          '<p class="verdict">' + (missed.length === 0 ? "Rating: unbearable (complimentary)." : missed.length <= 2 ? "Rating: promising detective." : "Rating: civilian. Look again tomorrow.") + "</p>";
        played("detector");
      });
      function hit(b, text) {
        if (got.indexOf(b.dataset.k) > -1) { U.toast("Already logged. You’re circling."); return; }
        got.push(b.dataset.k); b.classList.add("found"); st.count("clues");
        st.addLore({ type: "clue", title: "Detector · " + scene.name, text: text });
        el.querySelector("[data-log]").insertAdjacentHTML("beforeend", "<li>" + esc(text) + "</li>");
        el.querySelector("[data-n]").textContent = got.length + "/" + all.length;
        if (!S().played.detector) played("detector");
        U.celebrate("🧩 Clue found. " + st.award({ egg: 4 }));
        if (got.length === all.length) { U.confetti(90); setTimeout(function () { U.toast("<b>LEVEL CLEARED</b><br>Every clue found. This is either talent or a cry for help."); }, 1800); }
      }
    }
    list();
  }

  /* ── GAME 3 · NAME THAT ERA ── */
  function nameera(el, from) {
    const qs = shuffle(TS.NAME_ERA).slice(0, 8); let i = 0, score = 0, answered = false;
    function draw() {
      if (i >= qs.length) {
        played("nameera");
        el.innerHTML = back(from) + head("Game 3", "Name That Era") + '<section class="card result"><p class="big num">' + score + "/" + qs.length + "</p><p>" + (score >= 7 ? "Fluent in aesthetics. You can identify an era from a single hair clip." : score >= 4 ? "Era-conversational. You can hold your own at a listening party." : "Era-curious. Everyone starts somewhere. Usually in a cardigan.") + '</p><button class="btn primary" data-again>Play again</button></section>';
        el.querySelector("[data-again]").addEventListener("click", function () { nameera(el, from); });
        U.celebrate(st.award({ era: score * 3 })); return;
      }
      const q = qs[i], right = TS.ERA_CODES.find(function (c) { return c.id === q.a; });
      const opts = shuffle([right].concat(shuffle(TS.ERA_CODES.filter(function (c) { return c.id !== q.a; })).slice(0, 3)));
      el.innerHTML = back(from) + head("Game 3 · Playful aesthetic labels, not diagnoses", "Name That Era") +
        '<section class="card"><p class="eyebrow num">Round ' + (i + 1) + "/" + qs.length + ' · Score ' + score + '</p><p class="describe">' + esc(q.d) + '</p><div class="choices">' +
        opts.map(function (o) { return '<button class="choice" data-id="' + o.id + '">' + o.emoji + " " + esc(o.label) + "</button>"; }).join("") + '</div><div data-out></div></section>';
      answered = false;
      el.querySelectorAll("[data-id]").forEach(function (b) {
        b.addEventListener("click", function () {
          if (answered) return; answered = true;
          const ok = b.dataset.id === q.a; if (ok) score++;
          el.querySelectorAll("[data-id]").forEach(function (x) { if (x.dataset.id === q.a) x.classList.add("right"); else if (x === b) x.classList.add("wrong"); });
          el.querySelector("[data-out]").innerHTML = '<p class="reveal"><b>' + right.emoji + " " + esc(right.label) + ":</b> " + esc(right.desc) + '</p><button class="btn" data-next>Next</button>';
          el.querySelector("[data-next]").addEventListener("click", function () { i++; draw(); });
        });
      });
    }
    draw();
  }

  /* ── GAME 5 · LYRIC OR NORMAL ── */
  function lon(el, from) {
    const qs = shuffle(TS.LYRIC_OR_NORMAL).slice(0, 10); let i = 0, score = 0;
    function draw() {
      if (i >= qs.length) {
        played("lon");
        el.innerHTML = back(from) + head("Game 5", "Lyric or Normal Sentence?") + '<section class="card result"><p class="big num">' + score + "/10</p><p>" + (score >= 8 ? "You can hear poetry in a train announcement. This is a gift and a curse." : "Your ear is training. Notice what the lyric lines have: an image, a twist, a feeling.") + '</p><button class="btn primary" data-again>Again</button></section>';
        el.querySelector("[data-again]").addEventListener("click", function () { lon(el, from); });
        U.celebrate(st.award({ songwriter: score * 2 })); return;
      }
      const q = qs[i];
      el.innerHTML = back(from) + head("Game 5", "Lyric or Normal Sentence?") + '<section class="card"><p class="eyebrow num">' + (i + 1) + "/10 · Score " + score + '</p><p class="describe hand">“' + esc(q.s) + '”</p><div class="choices two"><button class="choice" data-v="1">🎤 Lyric</button><button class="choice" data-v="0">🧾 Normal sentence</button></div><div data-out></div></section>';
      el.querySelectorAll("[data-v]").forEach(function (b) {
        b.addEventListener("click", function () {
          if (el.querySelector("[data-next]")) return;
          const ok = (b.dataset.v === "1") === q.lyric; if (ok) score++;
          b.classList.add(ok ? "right" : "wrong");
          el.querySelector("[data-out]").innerHTML = '<p class="reveal"><b>' + (q.lyric ? "Lyric." : "Normal sentence.") + "</b> " + esc(q.why) + '</p><button class="btn" data-next>Next</button>';
          el.querySelector("[data-next]").addEventListener("click", function () { i++; draw(); });
        });
      });
    }
    draw();
  }

  /* ── GAME 6 · MASTERPLAN ── */
  const MP_FIELDS = [["color", "COLOUR?", "Dusty green"], ["date", "DATE?", "13 March"], ["number", "NUMBER?", "13"], ["caption", "CAPTION?", "new chapter 🗝️"], ["object", "OBJECT IN BACKGROUND?", "A brass key on the table"], ["hidden", "HIDDEN REFERENCE?", "Thirteen books on the shelf"], ["secondary", "SECONDARY REFERENCE?", "My red umbrella, closed"], ["false", "FALSE LEAD?", "A ladder. Means nothing."], ["payoff", "FUTURE PAYOFF?", "In three weeks: I reveal the new haircut"]];
  function masterplan(el, from) {
    el.innerHTML = back(from) + head("Game 6 · Mastermind 401", "The Masterplan Generator", "Input something you want to do. The system will make it unnecessarily complicated.") +
      '<form class="card fields" id="mp"><label for="mp-what">What do you want to do?</label><input id="mp-what" placeholder="I want to post a photo."><div class="mp-grid">' +
      MP_FIELDS.map(function (f) { return '<label for="mp-' + f[0] + '">' + f[1] + '</label><input id="mp-' + f[0] + '" data-f="' + f[0] + '" placeholder="' + esc(f[2]) + '">'; }).join("") +
      '</div><div class="row"><button class="btn primary">Generate master plan</button></div></form><div data-out></div>' +
      (S().plans.length ? '<section class="card"><h2>Previous plans</h2><ol class="plans">' + S().plans.slice().reverse().slice(0, 10).map(function (p) { return "<li><b>" + esc(p.what) + "</b> · " + esc(p.level) + "</li>"; }).join("") + "</ol></section>" : "");
    el.querySelector("#mp").addEventListener("submit", function (e) {
      e.preventDefault();
      const what = el.querySelector("#mp-what").value.trim(); if (!what) return U.toast("What are you planning? Even ‘lunch’ will do.");
      const f = {}; el.querySelectorAll("[data-f]").forEach(function (x) { f[x.dataset.f] = x.value.trim(); });
      const m = E.masterScore(f);
      S().plans.push({ what: what, fields: f, level: m.level, day: st.currentDay() }); st.count("plans"); played("masterplan");
      st.addLore({ type: "plan", title: "Masterplan: " + what, text: MP_FIELDS.map(function (x) { return f[x[0]] ? x[1].replace("?", "") + ": " + f[x[0]] : ""; }).filter(Boolean).join("\n") });
      el.querySelector("[data-out]").innerHTML = '<section class="card">' + V.masterHtml(m) + '<p class="verdict">' + esc(TS.HUMOR[Math.floor(Math.random() * TS.HUMOR.length)]) + "</p></section>";
      U.celebrate(st.award({ mastermind: 15, egg: 5 }));
    });
  }

  /* ── GAME 7 · FRIENDSHIP BRACELET FACTORY ── */
  function bracelet(el, from) {
    let text = TS.play.braceletText || "I SURVIVED THE BRIDGE", pal = "lover", forWho = "";
    function beads(t, p) {
      const P = TS.BRACELET_PALETTES[p], letters = t.toUpperCase().replace(/[^A-Z0-9 ♥★]/g, "").slice(0, 24).split("");
      const fill = Math.max(0, 6 - Math.floor(letters.length / 4));
      const seq = [];
      for (let k = 0; k < fill; k++) seq.push({ c: P.beads[k % P.beads.length] });
      seq.push({ heart: true });
      letters.forEach(function (ch) { seq.push(ch === " " ? { c: P.beads[(seq.length) % P.beads.length], small: true } : { ch: ch }); });
      seq.push({ heart: true });
      for (let k = 0; k < fill; k++) seq.push({ c: P.beads[(k + 1) % P.beads.length] });
      return '<div class="bracelet" style="--ink:' + P.ink + '">' + seq.map(function (b, k) {
        if (b.heart) return '<span class="bead heart" style="background:' + P.beads[0] + '">♥</span>';
        if (b.ch) return '<span class="bead letter" style="background:' + P.letter + ";color:" + P.ink + '">' + esc(b.ch) + "</span>";
        return '<span class="bead' + (b.small ? " small" : "") + '" style="background:' + b.c + '"></span>';
      }).join("") + "</div>";
    }
    function draw() {
      el.innerHTML = back(from) + head("Game 7 · Beaded Diplomacy", "The Friendship Bracelet Factory", "Trading bracelets became a fan ritual at Eras Tour shows. Here, they’re virtual, free and emotionally binding.") +
        '<section class="card factory"><div data-preview>' + beads(text, pal) + "</div>" +
        '<label for="bt">Bracelet text (24 characters)</label><div class="inline-form"><input id="bt" maxlength="24" value="' + esc(text) + '"><button class="btn ghost" data-act="random" type="button">Random</button></div>' +
        '<label>Palette</label><div class="chips">' + Object.keys(TS.BRACELET_PALETTES).map(function (k) { return '<button type="button" class="chip' + (k === pal ? " on" : "") + '" data-pal="' + k + '">' + esc(TS.BRACELET_PALETTES[k].name) + "</button>"; }).join("") + "</div>" +
        '<label for="bw">For (optional)</label><input id="bw" value="' + esc(forWho) + '" placeholder="My sister / the barista / the cat / future me">' +
        '<div class="row"><button class="btn primary" data-act="make" type="button">Make this bracelet</button></div></section>' +
        '<section class="collection"><h2>My bracelets <small class="num">' + S().bracelets.length + "</small></h2>" +
        (S().bracelets.length ? '<ol class="b-list">' + S().bracelets.slice().reverse().map(function (b, k) {
          return "<li>" + beads(b.text, b.pal) + '<p class="small">' + (b.for ? "For " + esc(b.for) + " · " : "") + "Day " + b.day + "</p></li>";
        }).join("") + "</ol>" : "<p class=\"small\">No bracelets yet. Your wrist is a blank page.</p>") +
        (S().bracelets.length >= 12 ? '<p class="small">Bead 13 of your collection is suspicious ' + V.egg("bracelet-bead", "The thirteenth bead", "●", "inline") + "</p>" : "") + "</section>";
      const bt = el.querySelector("#bt");
      bt.addEventListener("input", function () { text = bt.value; el.querySelector("[data-preview]").innerHTML = beads(text, pal); });
      el.querySelector("#bw").addEventListener("input", function (e) { forWho = e.target.value; });
      el.querySelector(".factory").addEventListener("click", function (e) {
        const p = e.target.closest("[data-pal]"); if (p) { pal = p.dataset.pal; draw(); return; }
        const a = e.target.closest("[data-act]"); if (!a) return;
        if (a.dataset.act === "random") { text = TS.BRACELET_WORDS[Math.floor(Math.random() * TS.BRACELET_WORDS.length)]; draw(); }
        if (a.dataset.act === "make") {
          const t = text.trim().toUpperCase(); if (!t) return U.toast("A bracelet needs at least one bead of meaning.");
          S().bracelets.push({ text: t, pal: pal, for: forWho.trim(), day: st.currentDay() }); st.count("bracelets"); played("bracelet");
          st.addLore({ type: "bracelet", title: "Bracelet: " + t, text: (forWho ? "For " + forWho + ". " : "") + "Palette: " + TS.BRACELET_PALETTES[pal].name });
          st.log("bracelet", t);
          U.celebrate("💌 Bracelet made. " + st.award({ era: 3, romance: 3 }));
          forWho = ""; draw();
        }
      });
      V.bindEggs(el);
    }
    draw();
  }

  /* ── GAME 8 · EMOTIONAL DAMAGE ── */
  function damage(el, from) {
    const qs = shuffle(TS.DAMAGE).slice(0, 5); let i = 0;
    function draw() {
      if (i >= qs.length) {
        played("damage");
        el.innerHTML = back(from) + head("Game 8", "Emotional Damage") + '<section class="card result"><p>Calibration complete. Your Emotional Damage Meter now reads <b class="num">' + S().damage + "/100</b>: " + esc(st.damageLabel()) + '</p><p class="small">Reminder: the meter is satire. Rumination isn’t a hobby; writing it down and then going for a walk is.</p><button class="btn primary" data-again>Again</button></section>';
        el.querySelector("[data-again]").addEventListener("click", function () { damage(el, from); });
        U.celebrate(st.award({ storyteller: 6 })); return;
      }
      const q = qs[i];
      el.innerHTML = back(from) + head("Game 8 · How dramatically should this be interpreted?", "Emotional Damage") +
        '<section class="card"><p class="eyebrow num">' + (i + 1) + "/" + qs.length + '</p><p class="describe">' + esc(q.s) + '</p><label for="dm">Your rating: <b class="num" data-v>50</b> · <span data-l>' + esc(st.damageLabel(50)) + '</span></label><input type="range" id="dm" min="0" max="100" value="50"><div class="damage-scale"><span>I’m fine</span><span>Ten-minute version</span></div><div class="row"><button class="btn primary" data-go>Submit rating</button></div><div data-out></div></section>';
      const r = el.querySelector("#dm");
      r.addEventListener("input", function () { el.querySelector("[data-v]").textContent = r.value; el.querySelector("[data-l]").textContent = st.damageLabel(+r.value); });
      el.querySelector("[data-go]").addEventListener("click", function (e) {
        e.target.disabled = true; const v = +r.value, diff = Math.abs(v - q.r);
        st.adjustDamage((v - S().damage) / 10);
        el.querySelector("[data-out]").innerHTML = '<p class="reveal">Official rating: <b class="num">' + q.r + "</b> — " + esc(st.damageLabel(q.r)) + "<br>" + esc(q.n) + "<br><i>" + (diff <= 10 ? "Perfectly calibrated. Alarming." : v > q.r ? "You went bigger than necessary. Respect." : "You underreacted. Very mature. Suspicious.") + '</i></p><button class="btn" data-next>Next</button>';
        el.querySelector("[data-next]").addEventListener("click", function () { i++; draw(); });
      });
    }
    draw();
  }

  /* ── TRACKLIST GAME ── */
  function tracklist(el, from) {
    const qs = shuffle(TS.TRACKLIST).slice(0, 6); let i = 0, score = 0;
    function draw() {
      if (i >= qs.length) {
        played("tracklist");
        el.innerHTML = back(from) + head("Bonus game", "The Tracklist Game") + '<section class="card result"><p class="big num">' + score + "/" + qs.length + "</p><p>" + (score === qs.length ? "Every situation assigned to its rightful, dramatic track." : "Some situations ended up on the wrong track. They’ll be re-recorded.") + '</p><button class="btn primary" data-again>Again</button></section>';
        el.querySelector("[data-again]").addEventListener("click", function () { tracklist(el, from); });
        U.celebrate(st.award({ songwriter: score * 2, storyteller: score })); return;
      }
      const q = qs[i];
      el.innerHTML = back(from) + head("Bonus game · Which song?", "The Tracklist Game") + '<section class="card"><p class="eyebrow num">' + (i + 1) + "/" + qs.length + '</p><p class="describe">' + esc(q.s) + '</p><div class="choices">' +
        q.o.map(function (o, k) { return '<button class="choice" data-k="' + k + '">' + "ABCD"[k] + ". " + esc(o) + "</button>"; }).join("") + '</div><div data-out></div></section>';
      el.querySelectorAll("[data-k]").forEach(function (b) {
        b.addEventListener("click", function () {
          if (el.querySelector("[data-next]")) return;
          const k = +b.dataset.k; if (k === q.a) score++;
          el.querySelectorAll("[data-k]").forEach(function (x) { if (+x.dataset.k === q.a) x.classList.add("right"); else if (x === b) x.classList.add("wrong"); });
          el.querySelector("[data-out]").innerHTML = '<p class="reveal">' + esc(q.r) + '</p><button class="btn" data-next>Next</button>';
          el.querySelector("[data-next]").addEventListener("click", function () { i++; draw(); });
        });
      });
    }
    draw();
  }

  /* ── TURN IT INTO A LYRIC ── */
  function lyric(el, from) {
    let q = TS.LYRIC_PROMPTS[Math.floor(Math.random() * TS.LYRIC_PROMPTS.length)];
    function draw() {
      el.innerHTML = back(from) + head("Bonus · Song 201", "Turn It Into a Lyric", "Rewrite an ordinary sentence as poetic language. Your own words only. You’ll be scored on six craft skills.") +
        '<section class="card"><p class="eyebrow">Ordinary sentence</p><p class="describe">“' + esc(q.s) + '”</p><label for="ly">Your lyrical version (1–4 lines)</label><textarea id="ly" rows="4"></textarea><div class="row"><button class="btn primary" data-go>Score it</button><button class="btn ghost" data-new>Different sentence</button></div><div data-out></div></section>' +
        '<section class="card technique"><h2>Techniques that work</h2><ul><li><b>Specificity:</b> name the aisle, the time, the brand.</li><li><b>Object as emotion:</b> let a thing carry the feeling.</li><li><b>Contrast:</b> put something small next to something huge.</li><li><b>Sound:</b> repeat a vowel or consonant; try a slant rhyme.</li><li><b>Avoid clichés:</b> no broken hearts, no tears like rain.</li></ul></section>';
      el.querySelector("[data-new]").addEventListener("click", function () { q = TS.LYRIC_PROMPTS[Math.floor(Math.random() * TS.LYRIC_PROMPTS.length)]; draw(); });
      el.querySelector("[data-go]").addEventListener("click", function () {
        const v = el.querySelector("#ly").value.trim(); if (!v) return U.toast("Write something first. Be brave. Be specific.");
        const res = E.score("lyric", v);
        el.querySelector("[data-out]").innerHTML = V.scoresHtml(res) + '<p class="reveal"><b>One original way to do it:</b> “' + esc(q.ex) + '”</p>';
        played("lyric"); st.count("creative");
        const cb = st.addLore({ type: "song", title: "Lyric: " + q.s, text: v });
        U.celebrate(st.award({ songwriter: 10 }) + (cb ? "<br><b>THE " + esc(cb.key.toUpperCase()) + " HAS RETURNED.</b>" : ""));
      });
    }
    draw();
  }

  /* ── WHAT ERA ARE YOU IN? ── */
  function quiz(el, from) {
    let i = 0; const tally = {};
    function draw() {
      if (i >= TS.QUIZ.length) {
        const best = Object.keys(tally).sort(function (a, b) { return tally[b] - tally[a]; })[0];
        const r = TS.ERA_CODES.find(function (c) { return c.id === best; });
        S().quiz = { id: r.id, date: st.iso() }; played("quiz");
        st.addLore({ type: "era", title: "Quiz result: " + r.label, text: r.desc });
        el.innerHTML = back(from) + head("Bonus · Playful aesthetic categorisation, not a diagnosis", "What Era Are You In?") +
          '<section class="card quiz-result" style="--era:' + r.color + '"><p class="eyebrow">Your current era</p><p class="big">' + r.emoji + " " + esc(r.label) + "</p><p>" + esc(r.desc) + '</p><p class="small">Results may change daily, hourly or after one song.</p><button class="btn" data-again>Retake</button></section>';
        el.querySelector("[data-again]").addEventListener("click", function () { quiz(el, from); });
        U.celebrate(st.award({ era: 10 })); return;
      }
      const q = TS.QUIZ[i];
      el.innerHTML = back(from) + head("Bonus quiz", "What Era Are You In?") + '<section class="card"><p class="eyebrow num">' + (i + 1) + "/" + TS.QUIZ.length + '</p><p class="describe">' + esc(q.q) + '</p><div class="choices">' +
        q.o.map(function (o, k) { return '<button class="choice" data-k="' + k + '">' + esc(o[0]) + "</button>"; }).join("") + "</div></section>";
      el.querySelectorAll("[data-k]").forEach(function (b) { b.addEventListener("click", function () { const id = q.o[+b.dataset.k][1]; tally[id] = (tally[id] || 0) + 1; i++; draw(); }); });
    }
    draw();
  }

  /* ── OUTFIT ERA GENERATOR ── */
  function outfit(el, from) {
    let o = TS.OUTFITS[Math.floor(Math.random() * TS.OUTFITS.length)], tw = TS.OUTFIT_TWISTS[Math.floor(Math.random() * TS.OUTFIT_TWISTS.length)];
    function draw() {
      el.innerHTML = back(from) + head("Bonus · Main Character Training", "Outfit Era Generator", "Playful self-expression. These are moods, not required outfits — and nothing needs buying.") +
        '<section class="card outfit polaroid"><p class="eyebrow">Today’s style challenge</p><h2>' + esc(o.name) + "</h2><ul>" + o.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul><p class="hand">' + esc(o.vibe) + '</p><p class="twist">Twist: ' + esc(tw) + '.</p><div class="row"><button class="btn ghost" data-new>Another era</button></div></section>' +
        '<section class="card"><label for="on">Name the look you built</label><input id="on" placeholder="‘Crimson Commute’"><label for="od">Describe it in one sentence</label><input id="od" placeholder="Red scarf, my dad’s old coat, walked like the bridge was playing."><div class="row"><button class="btn primary" data-save>Log the look</button></div></section>';
      el.querySelector("[data-new]").addEventListener("click", function () { o = TS.OUTFITS[Math.floor(Math.random() * TS.OUTFITS.length)]; tw = TS.OUTFIT_TWISTS[Math.floor(Math.random() * TS.OUTFIT_TWISTS.length)]; draw(); });
      el.querySelector("[data-save]").addEventListener("click", function () {
        const n = el.querySelector("#on").value.trim(), dsc = el.querySelector("#od").value.trim();
        if (!n && !dsc) return U.toast("Name the look. Every look deserves a name.");
        played("outfit"); st.addLore({ type: "symbol", title: "Look: " + (n || o.name), text: o.name + " · " + dsc });
        U.celebrate(st.award({ main: 10, era: 4 })); draw();
      });
    }
    draw();
  }

  /* ── RANDOM EVENTS ── */
  function randomEvent(force) {
    const s = S(), today = st.iso();
    if (!force && (s.lastEvent === today || Math.random() > 0.35 || !st.daysDone())) return false;
    s.lastEvent = today; st.save();
    const ev = TS.EVENTS[Math.floor(Math.random() * TS.EVENTS.length)];
    const card = U.modal('<div class="breaking"><p class="flash">' + esc(ev.h) + "</p><p class=\"describe\">" + esc(ev.t) + '</p><div class="choices">' +
      ev.o.map(function (o, k) { return '<button class="choice" data-k="' + k + '">' + "ABCD"[k] + ". " + esc(o) + "</button>"; }).join("") + '</div><div data-out></div></div>', { cls: "news" });
    card.querySelectorAll("[data-k]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (card.querySelector("[data-done]")) return;
        const k = +b.dataset.k;
        card.querySelectorAll("[data-k]").forEach(function (x) { if (+x.dataset.k === ev.a) x.classList.add("right"); else if (x === b) x.classList.add("wrong"); });
        card.querySelector("[data-out]").innerHTML = '<p class="reveal" data-done>' + esc(ev.r[k]) + (k === ev.a ? "" : "<br>Correct: " + "ABCD"[ev.a] + ".") + '</p><div class="row"><button class="btn" data-close>Carry on</button></div>';
        card.querySelector("[data-close]").addEventListener("click", U.closeModal);
        st.count("events"); st.log("event", ev.h + ": " + ev.o[k]);
        if (/13/.test(ev.t)) st.addIncident(ev.t.slice(0, 80), "event");
        U.celebrate(st.award({ egg: 3, storyteller: 2 }));
      });
    });
    return true;
  }

  /* ── ALBUM GENERATOR ── */
  const SONGS = [["lead", "LEAD SINGLE"], ["sad", "SAD SONG (goes at track 5, by tradition)"], ["angry", "ANGRY SONG"], ["romantic", "ROMANTIC SONG"], ["delusional", "DELUSIONAL SONG"], ["funny", "UNEXPECTEDLY FUNNY SONG"], ["ten", "TEN-MINUTE SONG THAT NOBODY ASKED FOR"], ["final", "FINAL TRACK"]];
  const STYLES = { polaroid: "Polaroid", glitter: "Glitter", storm: "Storm", diary: "Diary", minimal: "Minimal" };
  function blankAlbum() { return { id: st.uid(), title: "", era: "", color: "#B3122E", concept: "", style: "polaroid", count: 13, songs: {}, day: st.currentDay() }; }
  function trackList(a) {
    const n = Math.max(8, Math.min(23, +a.count || 13)), t = new Array(n).fill(null);
    const s = a.songs || {};
    t[0] = s.lead; t[4] = s.sad; t[1] = s.romantic; t[2] = s.angry; t[5] = s.delusional; t[6] = s.funny; t[n - 2] = s.ten ? s.ten + " (10 Minute Version)" : null; t[n - 1] = s.final;
    const motifs = st.recurringMotifs().map(function (m) { return m.key; });
    const fill = ["Interlude (Kitchen, 2am)", "The Group Chat", "Receipt", "Same Table, Different Weather", "Platform 13", "The Cat Knows", "Voice Memo", "Ordinary Tuesday", "Vault Track", "Weather Report", "Second Draft", "Liner Notes"];
    let fi = 0;
    for (let k = 0; k < n; k++) if (!t[k]) t[k] = motifs[fi] ? "The " + motifs[fi].replace(/\b\w/g, function (c) { return c.toUpperCase(); }) : fill[(fi + k) % fill.length], fi++;
    return t;
  }
  function drawCover(cv, a) {
    const ctx = cv.getContext("2d"), W = cv.width, H = cv.height, r = E.rng(a.title + a.style + a.color), col = a.color || "#B3122E";
    ctx.clearRect(0, 0, W, H);
    const title = a.title || "Untitled";
    if (a.style === "polaroid") {
      ctx.fillStyle = "#F4F0E8"; ctx.fillRect(0, 0, W, H);
      const g = ctx.createLinearGradient(0, 0, W, H); g.addColorStop(0, col); g.addColorStop(1, "#1A1420");
      ctx.fillStyle = g; ctx.fillRect(W * 0.08, H * 0.07, W * 0.84, H * 0.68);
      ctx.fillStyle = "rgba(255,240,210,.55)"; ctx.beginPath(); ctx.arc(W * (0.3 + r() * 0.4), H * (0.3 + r() * 0.2), W * 0.13, 0, 7); ctx.fill();
      for (let i = 0; i < 1800; i++) { ctx.fillStyle = "rgba(255,255,255," + (r() * 0.08) + ")"; ctx.fillRect(W * 0.08 + r() * W * 0.84, H * 0.07 + r() * H * 0.68, 2, 2); }
      ctx.fillStyle = "#2A2430"; ctx.font = "600 " + Math.round(W * 0.075) + "px Caveat, cursive"; ctx.textAlign = "center"; ctx.fillText(title, W / 2, H * 0.88, W * 0.84);
    } else if (a.style === "glitter") {
      const g = ctx.createRadialGradient(W * 0.5, H * 0.45, 10, W * 0.5, H * 0.5, W * 0.75); g.addColorStop(0, col); g.addColorStop(1, "#0D0A14");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < 900; i++) { ctx.fillStyle = ["#fff", "#FFE7A3", "#F7B8D2", "#BFE3F7"][i % 4]; ctx.globalAlpha = r() * 0.9; const s = r() * 3 + 0.5; ctx.fillRect(r() * W, r() * H, s, s); }
      ctx.globalAlpha = 1; ctx.fillStyle = "#fff"; ctx.font = "italic 600 " + Math.round(W * 0.09) + "px 'Bodoni Moda', serif"; ctx.textAlign = "center"; ctx.fillText(title.toUpperCase(), W / 2, H * 0.84, W * 0.9);
    } else if (a.style === "storm") {
      ctx.fillStyle = "#14161C"; ctx.fillRect(0, 0, W, H);
      for (let y = 0; y < H; y += 4) { ctx.fillStyle = col; ctx.globalAlpha = 0.15 + 0.6 * Math.abs(Math.sin(y / (30 + r() * 20))) * r(); ctx.fillRect(0, y, W * (0.4 + r() * 0.6), 2); }
      ctx.globalAlpha = 1; ctx.fillStyle = "#EDEBE6"; ctx.font = "500 " + Math.round(W * 0.05) + "px 'Special Elite', monospace"; ctx.textAlign = "left"; ctx.fillText(title.toLowerCase(), W * 0.07, H * 0.11, W * 0.86);
    } else if (a.style === "diary") {
      ctx.fillStyle = "#FBF7EE"; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "#BFD3E6"; ctx.lineWidth = 2; for (let y = H * 0.12; y < H; y += H * 0.06) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      ctx.strokeStyle = "#E7A0A0"; ctx.beginPath(); ctx.moveTo(W * 0.12, 0); ctx.lineTo(W * 0.12, H); ctx.stroke();
      ctx.save(); ctx.translate(W * 0.5, H * 0.32); ctx.rotate(-0.08); ctx.fillStyle = col; ctx.globalAlpha = 0.85; ctx.fillRect(-W * 0.32, -H * 0.05, W * 0.64, H * 0.1); ctx.restore(); ctx.globalAlpha = 1;
      ctx.fillStyle = "#24304A"; ctx.font = "700 " + Math.round(W * 0.1) + "px Caveat, cursive"; ctx.textAlign = "center"; ctx.fillText(title, W * 0.55, H * 0.6, W * 0.8);
      ctx.fillStyle = col; ctx.font = Math.round(W * 0.06) + "px serif"; ctx.fillText("★", W * 0.82, H * 0.82);
    } else {
      ctx.fillStyle = col; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(255,255,255,.75)"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(W / 2, H * 0.44, W * 0.24, 0, 7); ctx.stroke();
      ctx.fillStyle = "#fff"; ctx.font = "400 " + Math.round(W * 0.06) + "px 'Bodoni Moda', serif"; ctx.textAlign = "center"; ctx.fillText(title.toLowerCase(), W / 2, H * 0.86, W * 0.86);
    }
    ctx.globalAlpha = 0.22; ctx.fillStyle = "#fff"; ctx.font = Math.round(W * 0.025) + "px serif"; ctx.textAlign = "right"; ctx.fillText("13", W * 0.97, H * 0.975); ctx.globalAlpha = 1;
  }
  let draft = null;
  function album(el) {
    draft = draft || blankAlbum();
    const a = draft;
    el.innerHTML = '<a class="backlink" href="#/play">← All mini-games</a>' + head("Game 4 · Build the album", "Create Your Album", "An original concept with an original abstract cover. No real album artwork was harmed.") +
      '<div class="album-wrap"><div class="cover-box"><canvas width="600" height="600" id="cv" aria-label="Your album cover"></canvas>' + V.egg("album-corner", "The corner of your album cover", "13", "cover-egg") + '<div class="row"><button class="btn ghost small" data-act="dl" type="button">Save cover image</button></div></div>' +
      '<form id="alb" class="card fields"><label for="a-title">TITLE</label><input id="a-title" data-k="title" value="' + esc(a.title) + '" placeholder="Ordinary Tragedies">' +
        '<label for="a-era">ERA</label><input id="a-era" data-k="era" list="era-codes" value="' + esc(a.era) + '" placeholder="Folklore-coded, or your own"><datalist id="era-codes">' + TS.ERA_CODES.map(function (c) { return '<option value="' + esc(c.label) + '">'; }).join("") + "</datalist>" +
        '<div class="two"><div><label for="a-color">COLOUR</label><input id="a-color" type="color" data-k="color" value="' + esc(a.color) + '"></div><div><label for="a-style">COVER STYLE</label><select id="a-style" data-k="style">' + Object.keys(STYLES).map(function (k) { return '<option value="' + k + '"' + (k === a.style ? " selected" : "") + ">" + STYLES[k] + "</option>"; }).join("") + "</select></div></div>" +
        '<label for="a-concept">CONCEPT</label><textarea id="a-concept" data-k="concept" rows="2" placeholder="Thirteen songs about a year of missed buses and found metaphors.">' + esc(a.concept) + "</textarea>" +
        '<label for="a-count">TRACK COUNT: <b class="num" data-cnt>' + a.count + '</b></label><input id="a-count" type="range" min="8" max="23" data-k="count" value="' + a.count + '">' +
        SONGS.map(function (s) { return '<label for="a-' + s[0] + '">' + s[1] + '</label><input id="a-' + s[0] + '" data-song="' + s[0] + '" value="' + esc((a.songs || {})[s[0]] || "") + '">'; }).join("") +
        '<div class="row"><button class="btn ghost" type="button" data-act="suggest">Suggest titles from my lore</button><button class="btn primary" type="submit">Save album</button></div></form></div>' +
      '<section class="card tracklist-card"><h2>Tracklist</h2><ol data-tl></ol></section>' +
      (S().albums.length ? '<section class="collection"><h2>My albums <small class="num">' + S().albums.length + '</small></h2><ol class="album-shelf">' + S().albums.slice().reverse().map(function (al) {
        return '<li><button data-open="' + al.id + '" class="shelf-item"><canvas width="240" height="240" data-cover="' + al.id + '"></canvas><b>' + esc(al.title || "Untitled") + "</b><span>" + esc(al.era || "") + "</span></button></li>";
      }).join("") + '</ol><div class="row"><button class="btn ghost" data-act="new">Start a new album</button></div></section>' : "");
    const cv = el.querySelector("#cv");
    function refresh() {
      drawCover(cv, a);
      el.querySelector("[data-tl]").innerHTML = trackList(a).map(function (t, k) { return "<li>" + esc(t) + (k === 4 ? ' <span class="pill">track 5</span>' : "") + "</li>"; }).join("");
    }
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () {
      refresh();
      el.querySelectorAll("[data-cover]").forEach(function (c) { drawCover(c, S().albums.find(function (x) { return x.id === c.dataset.cover; })); });
    });
    const form = el.querySelector("#alb");
    form.addEventListener("input", function (e) {
      const t = e.target;
      if (t.dataset.k) a[t.dataset.k] = t.dataset.k === "count" ? +t.value : t.value;
      if (t.dataset.song) a.songs[t.dataset.song] = t.value;
      if (t.dataset.k === "count") el.querySelector("[data-cnt]").textContent = t.value;
      refresh();
    });
    form.addEventListener("change", function (e) { if (e.target.dataset.k === "style") { a.style = e.target.value; refresh(); } });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!a.title.trim()) return U.toast("An album needs a title. Even ‘Untitled’ is a choice.");
      const i = S().albums.findIndex(function (x) { return x.id === a.id; });
      const copy = JSON.parse(JSON.stringify(a));
      if (i > -1) S().albums[i] = copy; else { S().albums.push(copy); st.count("albums"); played("album"); U.confetti(100); }
      st.addLore({ type: "album", title: "Album: " + a.title, text: (a.concept ? a.concept + "\n" : "") + trackList(a).map(function (t, k) { return (k + 1) + ". " + t; }).join("\n"), src: "album-" + a.id });
      st.save(); U.celebrate("💿 Album saved. " + (i > -1 ? "" : st.award({ songwriter: 20, mastermind: 10, era: 10 })));
      draft = copy; album(el);
    });
    el.addEventListener("click", function (e) {
      const o = e.target.closest("[data-open]"); if (o) { draft = JSON.parse(JSON.stringify(S().albums.find(function (x) { return x.id === o.dataset.open; }))); album(el); window.scrollTo(0, 0); return; }
      const b = e.target.closest("[data-act]"); if (!b) return;
      if (b.dataset.act === "new") { draft = blankAlbum(); album(el); window.scrollTo(0, 0); }
      if (b.dataset.act === "suggest") {
        const pool = st.state.lore.filter(function (l) { return l.type === "song" && l.title; }).map(function (l) { return l.title.replace(/^Lyric: /, ""); })
          .concat(st.recurringMotifs().map(function (m) { return "The " + m.key; })).concat(["Platform 13", "Same Table, Different Weather", "I Have Written 4,000 Words About This", "The Cat Knows", "Receipt", "Interlude (Kitchen, 2am)"]);
        SONGS.forEach(function (s, k) { if (!a.songs[s[0]]) a.songs[s[0]] = pool[k % pool.length]; });
        if (!a.title) a.title = (st.recurringMotifs()[0] ? "The " + st.recurringMotifs()[0].key : "Ordinary Tragedies").replace(/\b\w/g, function (c) { return c.toUpperCase(); });
        album(el);
      }
      if (b.dataset.act === "dl") {
        cv.toBlob(function (blob) { if (!blob) return; const url = URL.createObjectURL(blob), l = document.createElement("a"); l.href = url; l.download = (a.title || "album") + ".png"; document.body.appendChild(l); l.click(); l.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 2000); });
      }
    });
    V.bindEggs(el);
  }

  /* ── CAT DEPARTMENT ── */
  let catSel = null, catTab = "hr";
  function rnd(a) { return a[Math.floor(Math.random() * a.length)]; }
  function newCat(name, kind) {
    const C = TS.CAT;
    return { id: st.uid(), name: name || rnd(C.names), kind: kind || "imaginary", color: rnd(C.colors), traits: shuffle(C.traits).slice(0, 3), job: rnd(C.jobs), secret: rnd(C.secrets), past: rnd(C.pasts),
      budget: shuffle(C.finance).slice(0, 5), post: rnd(C.posts), drafts: [], knows: "", threat: rnd(C.threats), protocols: shuffle(C.protocols).slice(0, 3), day: st.currentDay() };
  }
  function catAct(msg) { st.count("cat"); U.celebrate(msg + " " + st.award({ cat: 5 })); }
  function cats(el) {
    const s = S();
    if (!catSel && s.cats.length) catSel = s.cats[0].id;
    const c = s.cats.find(function (x) { return x.id === catSel; });
    const tabs = [["hr", "Cat HR"], ["finance", "Cat Finance"], ["pr", "Cat PR"], ["lore", "Cat Lore"], ["security", "Cat Security"]];
    let panel = "";
    if (c) {
      if (catTab === "hr") panel = '<h3>Personnel file</h3><dl class="file"><dt>Name</dt><dd>' + esc(c.name) + "</dd><dt>Status</dt><dd>" + esc({ imaginary: "Imaginary (fully employed)", real: "A cat you already live with", drawing: "An illustration" }[c.kind]) + "</dd><dt>Job title</dt><dd>" + esc(c.job) + "</dd><dt>Personality</dt><dd>" + c.traits.map(esc).join(", ") + "</dd><dt>Favourite colour</dt><dd>" + esc(c.color) + "</dd></dl><p class=\"small\">Annual review: exceeds expectations in staring; needs improvement in “caring about your deadlines”.</p><button class=\"btn ghost\" data-c=\"hr\">Re-run HR assessment</button>";
      if (catTab === "finance") { const tot = c.budget.reduce(function (n, b) { return n + b[1]; }, 0); panel = '<h3>Imaginary monthly budget</h3><table class="budget"><tbody>' + c.budget.map(function (b) { return "<tr><td>" + esc(b[0]) + '</td><td class="num">€' + b[1] + "</td></tr>"; }).join("") + '</tbody><tfoot><tr><td>Total</td><td class="num">€' + tot + '</td></tr></tfoot></table><p class="stamp">BUDGET STATUS: UNSUSTAINABLE. APPROVED.</p><button class="btn ghost" data-c="finance">Audit again</button>'; }
      if (catTab === "pr") panel = '<h3>Official account</h3><blockquote class="cat-post">' + esc(c.post) + ' <span class="small">#catlore #' + esc(c.name.replace(/\W/g, "").toLowerCase()) + '</span></blockquote><button class="btn ghost" data-c="pr">Generate another post</button><label for="cp">Draft the cat’s next post yourself</label><textarea id="cp" rows="2" placeholder="Hide an Easter egg in it."></textarea><button class="btn" data-c="prsave">Submit to Cat PR</button>' + (c.drafts.length ? '<ol class="small">' + c.drafts.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ol>" : "");
      if (catTab === "lore") panel = '<h3>Classified</h3><dl class="file"><dt>Secret</dt><dd>' + esc(c.secret) + "</dd><dt>Mysterious past</dt><dd>" + esc(c.past) + '</dd></dl><label for="ck">What does the cat know that everyone else doesn’t?</label><textarea id="ck" rows="3">' + esc(c.knows) + '</textarea><button class="btn" data-c="knows">File it</button>';
      if (catTab === "security") panel = '<div class="badge-row">' + V.egg("cat-badge", "The Cat Security badge", "🛡️ 13", "badge") + '<h3>Threat level: <span class="stamp inline">' + esc(c.threat[0]) + "</span></h3></div><p>" + esc(c.threat[1]) + "</p><h3>Protocol</h3><ol>" + c.protocols.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + '</ol><button class="btn ghost" data-c="security">Run new threat assessment</button>';
    }
    el.innerHTML = head("A fake corporate division", "Taylor Swift Cat Operations", "Departments: HR, Finance, PR, Lore, Security. We do not issue real cats. Please use an imaginary cat, an illustration, or a cat you already live with. Do not acquire an animal for a game.") +
      '<div class="cat-energy card"><p class="eyebrow">🐈 Cat Energy</p><p class="big num">' + Math.round(st.pct("cat")) + '<small>/100</small></p>' + U.meter(st.pct("cat")) + '<p class="small">' + s.counts.cat + " cat references on file.</p></div>" +
      '<section class="card"><h2>Register a cat</h2><form class="inline-form wrap" id="nc"><label class="sr" for="nc-n">Cat name</label><input id="nc-n" placeholder="Name (or leave blank for HR to decide)"><label class="sr" for="nc-k">Kind of cat</label><select id="nc-k"><option value="imaginary">Imaginary</option><option value="real">A cat I already live with</option><option value="drawing">An illustration</option></select><button class="btn">Register</button></form></section>' +
      (s.cats.length ? '<div class="chips cats">' + s.cats.map(function (x) { return '<button class="chip' + (x.id === catSel ? " on" : "") + '" data-sel="' + x.id + '">🐈 ' + esc(x.name) + "</button>"; }).join("") + "</div>" +
        '<div class="tabs" role="tablist">' + tabs.map(function (t) { return '<button role="tab" aria-selected="' + (t[0] === catTab) + '" class="tab' + (t[0] === catTab ? " on" : "") + '" data-tab="' + t[0] + '">' + t[1] + "</button>"; }).join("") + '</div><section class="card dept">' + panel + "</section>" :
        '<p class="empty">No cats on file. The department is just a printer and a sense of purpose.</p>');
    el.querySelector("#nc").addEventListener("submit", function (e) {
      e.preventDefault(); const cat = newCat(el.querySelector("#nc-n").value.trim(), el.querySelector("#nc-k").value);
      s.cats.push(cat); catSel = cat.id; catTab = "hr"; played("cats");
      st.addLore({ type: "cat", title: "Cat registered: " + cat.name, text: cat.job + ". " + cat.traits.join(", ") + ". Secret: " + cat.secret + "." });
      catAct("🐈 " + esc(cat.name) + " has joined Cat Operations."); cats(el);
    });
    el.addEventListener("click", function (e) {
      const sel = e.target.closest("[data-sel]"); if (sel) { catSel = sel.dataset.sel; cats(el); return; }
      const tb = e.target.closest("[data-tab]"); if (tb) { catTab = tb.dataset.tab; cats(el); return; }
      const b = e.target.closest("[data-c]"); if (!b || !c) return;
      const C = TS.CAT, k = b.dataset.c;
      if (k === "hr") { c.traits = shuffle(C.traits).slice(0, 3); c.job = rnd(C.jobs); catAct("HR has reassessed " + esc(c.name) + "."); }
      if (k === "finance") { c.budget = shuffle(C.finance).slice(0, 5); catAct("Finance is concerned."); }
      if (k === "pr") { c.post = rnd(C.posts); catAct("PR has posted."); }
      if (k === "prsave") { const v = el.querySelector("#cp").value.trim(); if (!v) return U.toast("The cat refuses to post nothing. (It would, actually.)"); c.drafts.push(v); st.addLore({ type: "cat", title: c.name + " · Cat PR", text: v }); catAct("Submitted to Cat PR."); }
      if (k === "knows") { c.knows = el.querySelector("#ck").value.trim(); if (!c.knows) return U.toast("The cat knows something. Write it down."); st.addLore({ type: "cat", title: "What " + c.name + " knows", text: c.knows, src: "cat-knows-" + c.id }); catAct("Filed under: classified."); }
      if (k === "security") { c.threat = rnd(C.threats); c.protocols = shuffle(C.protocols).slice(0, 3); catAct("Security protocol updated."); }
      st.save(); cats(el);
    });
    V.bindEggs(el);
  }

  /* ── MY SIX ERAS ── */
  const ERA_DEFAULTS = ["The Girl Who Didn’t Know Yet", "The Main Character", "The Disaster", "The Reinvention", "The Woman Who Has a Plan", "The Final Form"];
  const ERA_COLORS = ["#E9C46A", "#B3122E", "#2B2B2B", "#7FB3E0", "#3B3F7A", "#F4A6C1"];
  const ERA_FIELDS = [["aesthetic", "Aesthetic"], ["symbol", "Symbol"], ["album", "Fictional album title"], ["theme", "Emotional theme"], ["fashion", "Fashion direction"], ["songs", "Song titles"], ["mood", "Visual mood"], ["lesson", "Personal lesson"]];
  function eras(el) {
    const s = S();
    el.innerHTML = head("Final project · Eras 501", "My Six Eras", "Design the six eras of your life. Each one gets a colour, an aesthetic, a symbol, an album, songs, a mood and a lesson.") +
      '<div class="era-strip" aria-hidden="true">' + s.eras.map(function (e, i) { return '<span style="background:' + esc(e.color || ERA_COLORS[i]) + '">' + esc(e.name || ERA_DEFAULTS[i]) + "</span>"; }).join("") + "</div>" +
      '<ol class="era-cards">' + s.eras.map(function (e, i) {
        return '<li class="era-card" style="--c:' + esc(e.color || ERA_COLORS[i]) + '"><form data-era="' + i + '" class="fields"><p class="eyebrow">Era ' + (i + 1) + (e.name ? ' · <span class="pill">Saved</span>' : "") + '</p><label for="er-' + i + '-name">Name</label><input id="er-' + i + '-name" data-f="name" value="' + esc(e.name || "") + '" placeholder="' + esc(ERA_DEFAULTS[i]) + '">' +
          '<label for="er-' + i + '-color">Colour</label><input type="color" id="er-' + i + '-color" data-f="color" value="' + esc(e.color || ERA_COLORS[i]) + '">' +
          ERA_FIELDS.map(function (f) { return '<label for="er-' + i + "-" + f[0] + '">' + f[1] + '</label><input id="er-' + i + "-" + f[0] + '" data-f="' + f[0] + '" value="' + esc(e[f[0]] || "") + '">'; }).join("") +
          '<div class="row"><button class="btn">Save Era ' + (i + 1) + "</button></div></form></li>";
      }).join("") + "</ol>";
    el.querySelectorAll("[data-era]").forEach(function (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault(); const i = +f.dataset.era, was = !!(s.eras[i] && s.eras[i].name), o = {};
        f.querySelectorAll("[data-f]").forEach(function (x) { o[x.dataset.f] = x.value.trim(); });
        if (!o.name) return U.toast("Name the era. An era without a name is just a phase.");
        s.eras[i] = o; played("eras");
        st.addLore({ type: "era", title: "Era " + (i + 1) + ": " + o.name, text: ERA_FIELDS.map(function (x) { return o[x[0]] ? x[1] + ": " + o[x[0]] : ""; }).filter(Boolean).join("\n"), src: "era-" + i });
        if (!was) st.count("eras");
        U.celebrate("🎭 Era " + (i + 1) + " saved. " + (was ? "" : st.award({ era: 15, storyteller: 5 }))); eras(el);
      });
    });
  }

  /* ── CONSPIRACY BOARD ── */
  const NOTE_TYPES = ["number", "date", "colour", "symbol", "event", "song", "clue"];
  let connectFrom = null, connectMode = false;
  function board(el) {
    const s = S();
    if (!s.board) s.board = { notes: [
      { id: "n1", type: "number", text: "13 (example)", x: 12, y: 18 }, { id: "n2", type: "colour", text: "The red umbrella (example)", x: 56, y: 12 },
      { id: "n3", type: "date", text: "Day 12 (example)", x: 30, y: 58 }, { id: "n4", type: "clue", text: "The cat looked at me (example)", x: 66, y: 62 }], links: [["n1", "n2"], ["n2", "n3"], ["n3", "n4"]] };
    const b = s.board;
    el.innerHTML = head("Parody of obsessive decoding", "The Conspiracy Board", "") +
      '<p class="joke-label">THIS IS A JOKE.</p>' +
      '<form class="card inline-form wrap" id="bn"><label class="sr" for="bn-t">Type</label><select id="bn-t">' + NOTE_TYPES.map(function (t) { return "<option>" + t + "</option>"; }).join("") + '</select><label class="sr" for="bn-x">Clue</label><input id="bn-x" placeholder="Add a clue: ‘13:13 on the oven clock’"><button class="btn">Pin it</button></form>' +
      '<div class="row board-tools"><button class="btn' + (connectMode ? " primary" : " ghost") + '" data-b="connect">' + (connectMode ? "Connecting: tap two notes" : "🧵 Connect with string") + '</button><button class="btn ghost" data-b="theory">Generate theory</button><button class="btn ghost" data-b="clear">Clear board</button></div>' +
      '<div class="cork" data-cork><svg class="strings" data-svg></svg>' + V.egg("board-pin", "The pin on the conspiracy board", "📌", "pin") +
        b.notes.map(function (n) { return '<div class="note t-' + n.type + (connectFrom === n.id ? " sel" : "") + '" data-n="' + n.id + '" style="left:' + n.x + "%;top:" + n.y + '%"><span class="eyebrow">' + esc(n.type) + "</span>" + esc(n.text) + '<button class="note-x" data-del="' + n.id + '" aria-label="Remove note">×</button></div>'; }).join("") +
      '</div><p class="small">Drag notes to arrange them. ' + b.links.length + " strings · " + b.notes.length + " clues · evidence: none.</p>";
    const cork = el.querySelector("[data-cork]"), svg = el.querySelector("[data-svg]");
    function lines() {
      const R = cork.getBoundingClientRect();
      svg.setAttribute("viewBox", "0 0 " + R.width + " " + R.height);
      svg.innerHTML = b.links.map(function (l) {
        const a = cork.querySelector('[data-n="' + l[0] + '"]'), c = cork.querySelector('[data-n="' + l[1] + '"]'); if (!a || !c) return "";
        const ra = a.getBoundingClientRect(), rc = c.getBoundingClientRect();
        return '<line x1="' + (ra.left - R.left + ra.width / 2) + '" y1="' + (ra.top - R.top + 8) + '" x2="' + (rc.left - R.left + rc.width / 2) + '" y2="' + (rc.top - R.top + 8) + '"/>';
      }).join("");
    }
    requestAnimationFrame(lines);
    el.querySelector("#bn").addEventListener("submit", function (e) {
      e.preventDefault(); const t = el.querySelector("#bn-x").value.trim(); if (!t) return;
      b.notes.push({ id: st.uid(), type: el.querySelector("#bn-t").value, text: t, x: 10 + Math.random() * 60, y: 10 + Math.random() * 60 });
      st.addLore({ type: "clue", title: "Board", text: t }); played("board"); U.celebrate(st.award({ egg: 3 })); board(el);
    });
    el.querySelector(".board-tools").addEventListener("click", function (e) {
      const x = e.target.closest("[data-b]"); if (!x) return;
      if (x.dataset.b === "connect") { connectMode = !connectMode; connectFrom = null; board(el); }
      if (x.dataset.b === "clear") { b.notes = []; b.links = []; st.save(); board(el); }
      if (x.dataset.b === "theory") {
        const n = b.notes.map(function (z) { return z.text.replace(/ \(example\)$/, ""); });
        U.modal('<div class="theory"><p class="eyebrow">Official theory</p><h2>It’s all connected.</h2><p>' + (n.length >= 2 ? "Clearly, “" + esc(n[0]) + "” leads to “" + esc(n[n.length - 1]) + "”" + (n.length > 2 ? ", by way of " + n.slice(1, -1).map(function (z) { return "“" + esc(z) + "”"; }).join(", ") : "") + "." : "One clue is not a conspiracy. It is a note.") +
          '</p><dl class="significance"><dt>Clues</dt><dd>' + n.length + "</dd><dt>Strings</dt><dd>" + b.links.length + "</dd><dt>Conclusion</dt><dd>Something is definitely happening.</dd><dt>Evidence</dt><dd>None.</dd></dl><p class=\"small\">THIS IS A JOKE. Patterns are fun to invent and a bad basis for real decisions.</p></div>");
      }
    });
    let drag = null;
    cork.addEventListener("pointerdown", function (e) {
      const n = e.target.closest("[data-n]"); if (!n || e.target.closest("[data-del]")) return;
      const R = cork.getBoundingClientRect(), r = n.getBoundingClientRect();
      drag = { el: n, id: n.dataset.n, dx: e.clientX - r.left, dy: e.clientY - r.top, sx: e.clientX, sy: e.clientY, R: R, moved: false };
      n.setPointerCapture(e.pointerId);
    });
    cork.addEventListener("pointermove", function (e) {
      if (!drag) return;
      if (Math.abs(e.clientX - drag.sx) + Math.abs(e.clientY - drag.sy) > 5) drag.moved = true;
      if (!drag.moved) return;
      const x = (e.clientX - drag.R.left - drag.dx) / drag.R.width * 100, y = (e.clientY - drag.R.top - drag.dy) / drag.R.height * 100;
      drag.el.style.left = Math.max(0, Math.min(78, x)) + "%"; drag.el.style.top = Math.max(0, Math.min(86, y)) + "%"; lines();
    });
    cork.addEventListener("pointerup", function () {
      if (!drag) return;
      const n = b.notes.find(function (z) { return z.id === drag.id; });
      if (drag.moved) { n.x = parseFloat(drag.el.style.left); n.y = parseFloat(drag.el.style.top); st.save(); }
      else if (connectMode) {
        if (!connectFrom) { connectFrom = n.id; drag.el.classList.add("sel"); }
        else if (connectFrom !== n.id) {
          if (!b.links.some(function (l) { return (l[0] === connectFrom && l[1] === n.id) || (l[1] === connectFrom && l[0] === n.id); })) { b.links.push([connectFrom, n.id]); played("board"); U.celebrate("🧵 Connected. " + st.award({ egg: 2 })); }
          connectFrom = null; st.save(); drag = null; board(el); return;
        }
      }
      drag = null;
    });
    cork.addEventListener("click", function (e) {
      const d = e.target.closest("[data-del]"); if (!d) return;
      b.notes = b.notes.filter(function (z) { return z.id !== d.dataset.del; }); b.links = b.links.filter(function (l) { return l.indexOf(d.dataset.del) < 0; }); st.save(); board(el);
    });
    V.bindEggs(el);
    st.save();
  }

  /* router entry for #/play/<id> */
  function game(el, id, from) {
    const map = { taylorize: taylorize, detector: detector, nameera: nameera, lon: lon, masterplan: masterplan, bracelet: bracelet, damage: damage, tracklist: tracklist, lyric: lyric, quiz: quiz, outfit: outfit };
    if (map[id]) map[id](el, from); else hub(el);
  }

  TS.play = { pending: "", hub: hub, game: game, album: album, cats: cats, eras: eras, board: board, randomEvent: randomEvent, drawCover: drawCover };
})();
