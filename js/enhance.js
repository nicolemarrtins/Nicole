/* Enhancements: today's session, backups, Claude feedback, listening & shadowing,
   select-to-save, swipe, completion moment and daily content. */
window.TAW = window.TAW || {};
(function () {
  const S = TAW.store, esc = function (x) { return TAW.esc(x); };
  const today = function () { return S.today(); };
  const reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ───────── Backup ───────── */
  function backupName() { return "articulate-woman-backup-" + today() + ".json"; }
  function backup() {
    const st = S.state;
    st.lastBackup = today(); S.flush();
    const json = S.exportData();
    let file = null;
    try { file = new File([json], backupName(), { type: "application/json" }); } catch (e) {}
    if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({ files: [file], title: "The Articulate Woman — backup" })
        .then(function () { TAW.toast("Backup saved. Keep it in iCloud Drive or Files."); })
        .catch(function () {});
    } else {
      const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([json], { type: "application/json" })); a.download = backupName(); a.click();
      TAW.toast("Backup downloaded.");
    }
    if (location.hash === "" || location.hash === "#/") TAW.render();
  }
  function needsBackup() {
    const st = S.state;
    const hasWork = S.completedCount() > 0 || st.journal.length || Object.keys(st.words).length;
    if (!hasWork) return false;
    if (st.backupSnooze && st.backupSnooze > today()) return false;
    return !st.lastBackup || S.daysBetween(st.lastBackup, today()) >= 7;
  }
  function backupBanner() {
    if (!needsBackup()) return "";
    const st = S.state;
    return `<div class="banner"><div><p class="kicker">Protect your progress</p>
      <p class="small">Everything you’ve done lives only on this phone. ${st.lastBackup ? "Your last backup was " + S.daysBetween(st.lastBackup, today()) + " days ago." : "You haven’t backed up yet."} It takes ten seconds — save it to iCloud Drive or send it to yourself.</p></div>
      <div class="row wrap"><button class="btn primary small" data-act="backup">Back up now</button><button class="btn ghost small" data-act="backup-later">Later</button></div></div>`;
  }

  /* ───────── Today’s session ───────── */
  function trackDue(trackId) {
    const keys = TAW.tracks[trackId].modules.reduce(function (a, m) { return a.concat(m.lessons); }, []);
    const wk = Math.max(1, Math.ceil(S.currentDay() / 7));
    return keys.slice(0, wk).find(function (k) { return !S.state.completed[k]; }) || null;
  }
  function getSession() {
    const st = S.state;
    if (!st.session || st.session.date !== today()) {
      st.session = { date: today(), day: S.currentDay(), studio: trackDue("brain") || trackDue("voice"), reviewsAtStart: S.dueItems().length };
      S.save();
    }
    return st.session;
  }
  function sessionLink() { return TAW.views.pathNextLink(); }

  /* ───────── Daily content ───────── */
  function dayIndex() { const d = new Date(); return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000) + d.getFullYear() * 400; }
  function wordPool() {
    const pool = [];
    Object.keys(TAW.lessons).forEach(function (k) { (TAW.lessons[k].vocab || []).forEach(function (v) { if (v.nuance) pool.push(v); }); });
    Object.keys(TAW.trackLessons || {}).forEach(function (k) { (TAW.trackLessons[k].vocab || []).forEach(function (v) { if (v.nuance) pool.push(v); }); });
    return pool;
  }
  function dailyCards(bare) {
    const pool = wordPool(), i = dayIndex();
    const v = pool[(i * 7) % pool.length];
    const ids = Object.keys(TAW.cards), c = TAW.cards[ids[(i * 13) % ids.length]];
    const saved = v && S.state.words[v.word];
    return `<section class="block daily">${bare ? "" : `<h3 class="section-title">Today’s word & idea</h3>`}<div class="daily-grid">
      ${v ? `<div class="flip daily-word" data-flip><div class="flip-inner">
        <div class="face front"><span class="kicker">Word of the day</span><b class="serif">${esc(v.word)}</b><span class="pron">${esc(v.pron || "")}</span><span class="small muted">Do you know it? Tap to check.</span></div>
        <div class="face back"><span class="kicker">${esc(v.pos || "")}</span><p class="def">${esc(v.definition)}</p><p class="small">${esc(v.nuance)}</p><p class="example">“${esc(v.example)}”</p></div>
      </div><div class="row"><button class="tts" data-act="tts" data-text="${esc(v.word + ". " + v.example)}" aria-label="Hear it">🔊</button>
        <button class="btn small ${saved ? "on" : ""}" data-act="save-daily" data-w="${esc(v.word)}" data-m="${esc(v.definition)}" data-e="${esc(v.example)}" data-p="${esc(v.pron || "")}">${saved ? "✓ In My Words" : "+ Save"}</button></div></div>` : ""}
      <a class="daily-idea" href="#/card/${c.id}"><span class="kicker">Idea of the day · ${esc((TAW.passportCategories.find(function (x) { return x[0] === c.cat; }) || [, , ""])[2])}</span>
        <b class="serif">${esc(c.name)}</b><span class="idea-line">“${esc(c.idea)}”</span><span class="small muted">Open the card →</span></a>
    </div></section>`;
  }

  /* ───────── Claude feedback, pasted back ───────── */
  function pasteBlock(saved) {
    return `<div class="claude-paste" ${saved ? "" : "hidden"}>
      <label class="lbl">Claude’s feedback <span class="muted small">— paste it here to keep it with your answer</span>
      <textarea rows="4" class="claude-text" placeholder="Paste Claude’s reply…">${esc(saved || "")}</textarea></label>
      <div class="row wrap"><button class="btn small" data-act="claude-paste-read">Paste from clipboard</button><button class="btn small primary" data-act="claude-save">Save feedback</button><span class="small muted cp-status"></span></div></div>`;
  }

  /* ───────── Listening & shadowing ───────── */
  let speaking = null;
  function voice(lang) { return speechSynthesis.getVoices().find(function (x) { return x.lang === lang; }) || speechSynthesis.getVoices().find(function (x) { return (x.lang || "").indexOf("en") === 0; }); }
  function utter(text, onend) {
    const u = new SpeechSynthesisUtterance(text.replace(/[“”…]/g, ""));
    u.lang = S.state.settings.speechLang || "en-US"; u.rate = S.state.settings.ttsRate || 0.95;
    const v = voice(u.lang); if (v) u.voice = v;
    u.onend = onend; u.onerror = onend;
    speechSynthesis.speak(u);
  }
  function stopAudio() {
    if (!speaking) return;
    speaking.stopped = true; clearTimeout(speaking.t);
    try { speechSynthesis.cancel(); } catch (e) {}
    document.querySelectorAll(".reading, .shadow-now").forEach(function (e) { e.classList.remove("reading", "shadow-now"); });
    if (speaking.btn) speaking.btn.innerHTML = speaking.label;
    const bar = document.getElementById("shadowbar"); if (bar) bar.hidden = true;
    speaking = null;
  }
  function listen(btn) {
    if (!("speechSynthesis" in window)) return TAW.toast("Audio isn’t available in this browser.");
    if (speaking) { const same = speaking.btn === btn; stopAudio(); if (same) return; }
    const sec = document.querySelector(".sec"); if (!sec) return;
    const nodes = Array.prototype.slice.call(sec.querySelectorAll("p, li, h2, h3, blockquote")).filter(function (n) {
      return !n.closest("label, .speak, .write, details, .row, .grade") && !n.querySelector("p, li") && n.innerText.trim().length > 1 && !n.classList.contains("sec-label");
    });
    if (!nodes.length) return TAW.toast("Nothing to read in this section.");
    speaking = { btn: btn, label: btn.innerHTML, stopped: false };
    btn.innerHTML = btn.classList.contains("p-icon") ? "■" : "■ Stop";
    let i = 0;
    (function next() {
      if (!speaking || speaking.stopped) return;
      nodes.forEach(function (n) { n.classList.remove("reading"); });
      if (i >= nodes.length) { stopAudio(); return; }
      const n = nodes[i++]; n.classList.add("reading");
      if (!reduceMotion) n.scrollIntoView({ block: "center", behavior: "smooth" });
      const cl = n.cloneNode(true); cl.querySelectorAll(".es, .tts").forEach(function (x) { x.remove(); });
      utter(cl.textContent.replace(/🔊/g, ""), function () { if (speaking && !speaking.stopped) speaking.t = setTimeout(next, 250); });
    })();
  }
  function shadow(btn) {
    if (!("speechSynthesis" in window)) return TAW.toast("Audio isn’t available in this browser.");
    if (speaking) { const same = speaking.btn === btn; stopAudio(); if (same) return; }
    const scope = btn.closest("[data-shadow-scope]") || btn.parentNode;
    const items = Array.prototype.slice.call(scope.querySelectorAll(".tts")).map(function (b) { return { text: b.getAttribute("data-text"), el: b.closest("li, .rung, .qcard, .shadow-item") || b.parentNode }; })
      .filter(function (x) { return x.text && x.text.split(/\s+/).length >= 3 && !x.el.closest("[hidden]"); });
    if (!items.length) return TAW.toast("Reveal a few sentences first, then shadow them.");
    speaking = { btn: btn, label: btn.innerHTML, stopped: false };
    btn.innerHTML = "■ Stop shadowing";
    const bar = document.getElementById("shadowbar");
    let i = 0;
    (function next() {
      if (!speaking || speaking.stopped) return;
      items.forEach(function (x) { x.el.classList.remove("shadow-now"); });
      if (i >= items.length) { stopAudio(); TAW.toast("Shadowing done. Try once more, a little faster."); return; }
      const it = items[i++]; it.el.classList.add("shadow-now");
      if (!reduceMotion) it.el.scrollIntoView({ block: "center", behavior: "smooth" });
      bar.hidden = false; bar.querySelector(".sb-state").textContent = "Listen…"; bar.querySelector(".sb-count").textContent = i + " / " + items.length;
      const start = Date.now();
      utter(it.text, function () {
        if (!speaking || speaking.stopped) return;
        const dur = Date.now() - start, wait = Math.max(1800, dur * 1.25 + 600);
        bar.querySelector(".sb-state").textContent = "Your turn — say it aloud";
        const fill = bar.querySelector(".sb-fill"); fill.style.transition = "none"; fill.style.width = "0%";
        requestAnimationFrame(function () { fill.style.transition = "width " + wait + "ms linear"; fill.style.width = "100%"; });
        speaking.t = setTimeout(next, wait);
      });
    })();
  }
  function shadowButton(label) { return `<button class="btn small ghost shadow-btn" data-act="shadow">${label || "◐ Shadow these"}</button>`; }
  function shadowView(t) {
    const lines = [];
    TAW.sayBetterBank.forEach(function (b) { lines.push(b.levels[3]); });
    Object.keys(TAW.cards).slice(0, 40).forEach(function (k) { lines.push(TAW.cards[k].talk[0]); });
    const i = dayIndex() % Math.max(1, lines.length - 8);
    const set = lines.slice(i, i + 8);
    return `<section>${TAW.views.pageHeader("Listening", "Shadowing", "Listen to a sentence, then repeat it aloud in the pause — copying the rhythm, stress and pauses, not the accent. Eight new sentences every day.")}${t}
      <div class="card" data-shadow-scope>
        <div class="row wrap">${shadowButton("◐ Start shadowing")}<label class="small rate">Speed <select data-act="tts-rate">${[[0.8, "Slower"], [0.95, "Natural"], [1.1, "Faster"]].map(function (r) { return `<option value="${r[0]}" ${(S.state.settings.ttsRate || 0.95) == r[0] ? "selected" : ""}>${r[1]}</option>`; }).join("")}</select></label></div>
        <ol class="shadow-list">${set.map(function (l) { return `<li class="shadow-item"><span class="serif">${esc(l)}</span> <button class="tts" data-act="tts" data-text="${esc(l)}" aria-label="Hear it">🔊</button></li>`; }).join("")}</ol>
      </div></section>`;
  }

  /* ───────── Select any word to save it ───────── */
  let selTimer = null, selCtx = null;
  function contextSentence(sel) {
    const node = sel.anchorNode && (sel.anchorNode.nodeType === 3 ? sel.anchorNode.parentNode : sel.anchorNode);
    const block = node && node.closest ? node.closest("p, li, blockquote, .rung, .def, .example") : null;
    const txt = (block ? block.innerText : "").replace(/🔊/g, "").trim();
    const word = sel.toString().trim();
    const parts = (txt.match(/[^.!?]+[.!?]*/g) || [txt]).map(function (x) { return x.trim(); });
    return (parts.find(function (s) { return s.toLowerCase().indexOf(word.toLowerCase()) >= 0; }) || txt).slice(0, 240);
  }
  document.addEventListener("selectionchange", function () {
    clearTimeout(selTimer);
    selTimer = setTimeout(function () {
      const bar = document.getElementById("selbar");
      const sel = window.getSelection(), text = sel ? sel.toString().trim().replace(/^[“"‘'(]+|[”"’'),.;:!?]+$/g, "") : "";
      const anchor = sel && sel.anchorNode && (sel.anchorNode.nodeType === 3 ? sel.anchorNode.parentNode : sel.anchorNode);
      const inMain = anchor && anchor.closest && anchor.closest("#main") && !anchor.closest("textarea, input, .transcript, #selbar, .es");
      if (!text || !inMain || text.length > 60 || text.split(/\s+/).length > 6) { if (!bar.contains(document.activeElement)) bar.hidden = true; return; }
      selCtx = { word: text, sentence: contextSentence(sel) };
      bar.querySelector(".sel-word").textContent = "“" + text + "”";
      bar.querySelector("input").value = "";
      bar.hidden = false;
    }, 350);
  });

  /* ───────── Swipe between lesson sections ───────── */
  let touch = null;
  document.addEventListener("touchstart", function (e) {
    const sec = e.target.closest && e.target.closest(".sec");
    if (!sec || e.target.closest("textarea, input, select, audio, svg, .flip, .sec-nav, .ladder button")) { touch = null; return; }
    touch = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() };
  }, { passive: true });
  document.addEventListener("touchend", function (e) {
    if (!touch) return;
    const dx = e.changedTouches[0].clientX - touch.x, dy = e.changedTouches[0].clientY - touch.y;
    const quick = Date.now() - touch.t < 600; touch = null;
    if (!quick || Math.abs(dx) < 70 || Math.abs(dy) > 50 || (window.getSelection() && window.getSelection().toString())) return;
    const foot = document.querySelector(".lesson-foot");
    if (!foot) return;
    const link = dx < 0 ? foot.querySelector(".btn.primary") : foot.querySelector(".btn.ghost");
    if (link) { document.getElementById("main").classList.add(dx < 0 ? "swipe-next" : "swipe-prev"); link.click(); }
  }, { passive: true });

  /* ───────── Completion moment ───────── */
  function celebrate(L, extra) {
    const ov = document.getElementById("celebrate");
    ov.querySelector(".cel-title").textContent = TAW.lessonLabel(L) + " complete";
    ov.querySelector(".cel-sub").textContent = extra || "";
    ov.hidden = false; ov.classList.remove("show"); void ov.offsetWidth; ov.classList.add("show");
    clearTimeout(ov._t); ov._t = setTimeout(function () { ov.hidden = true; }, reduceMotion ? 1600 : 2600);
  }
  document.addEventListener("click", function (e) { if (e.target.closest("#celebrate")) document.getElementById("celebrate").hidden = true; });
  document.addEventListener("click", function (e) {
    const f = e.target.closest("[data-flip] .face"); if (f) f.closest(".flip").classList.toggle("flipped");
  });

  /* ───────── After each render ───────── */
  function afterRender(r) {
    stopAudio();
    const main = document.getElementById("main");
    const dir = main.classList.contains("swipe-next") ? "from-right" : main.classList.contains("swipe-prev") ? "from-left" : "";
    main.classList.remove("enter", "from-right", "from-left", "swipe-next", "swipe-prev");
    void main.offsetWidth;
    main.classList.add("enter"); if (dir) main.classList.add(dir);
    const on = main.querySelector(".sec-nav a.on");
    if (on && on.scrollIntoView) on.scrollIntoView({ block: "nearest", inline: "center" });
    document.getElementById("selbar").hidden = true;
    if (r.name === "lesson" && r.a && r.b && r.b !== "finish") { S.state.lastLesson = { key: TAW.dayKey(r.a), sec: r.b, date: today() }; S.save(); }
  }

  /* ───────── Clicks ───────── */
  document.addEventListener("click", function (e) {
    const el = e.target.closest("[data-act]"); if (!el) return;
    const act = el.getAttribute("data-act"), st = S.state;
    switch (act) {
      case "backup": backup(); break;
      case "backup-later": st.backupSnooze = S.addDays(today(), 3); S.save(); TAW.render(); break;
      case "listen": listen(el); break;
      case "shadow": shadow(el); break;
      case "stop-audio": stopAudio(); break;
      case "flip": { const f = el.closest(".review-card").querySelector(".flip"); f.classList.add("flipped"); el.hidden = true; el.closest(".review-card").querySelector(".grade").hidden = false; break; }
      case "save-daily": S.saveWord({ word: el.getAttribute("data-w"), meaning: el.getAttribute("data-m"), example: el.getAttribute("data-e"), pron: el.getAttribute("data-p") }); el.textContent = "✓ In My Words"; el.classList.add("on"); TAW.toast("Saved — it will come back for review."); break;
      case "speak-claude": case "write-claude": {
        const box = el.closest("[data-speak], [data-write]"), cp = box && box.querySelector(".claude-paste");
        if (cp) setTimeout(function () { cp.hidden = false; }, 600);
        break;
      }
      case "claude-paste-read": {
        const ta = el.closest(".claude-paste").querySelector("textarea");
        if (!navigator.clipboard || !navigator.clipboard.readText) return TAW.toast("Long-press in the box and choose Paste.");
        navigator.clipboard.readText().then(function (t) { if (t) ta.value = t; else TAW.toast("The clipboard is empty."); }).catch(function () { TAW.toast("Long-press in the box and choose Paste."); });
        break;
      }
      case "claude-save": {
        const cp = el.closest(".claude-paste"), text = cp.querySelector("textarea").value.trim();
        if (!text) return TAW.toast("Paste Claude’s feedback first.");
        const sp = el.closest("[data-speak]"), wr = el.closest("[data-write]");
        if (sp) {
          let rec = st.speaking.find(function (x) { return x.prompt === sp.getAttribute("data-prompt") && x.date === today(); });
          if (!rec) { const tr = sp.querySelector(".transcript").value.trim(); rec = S.addSpeaking({ prompt: sp.getAttribute("data-prompt"), tag: sp.getAttribute("data-tag"), day: sp.getAttribute("data-day") || null, transcript: tr, analysis: tr ? TAW.analyze(tr, {}) : null }); }
          rec.claude = text; S.save();
        } else if (wr) {
          const k = wr.getAttribute("data-write"), i = k.indexOf("|");
          S.answer(TAW.dayKey(k.slice(0, i)), k.slice(i + 1) + "__claude", text);
        }
        cp.querySelector(".cp-status").textContent = "✓ Saved with your answer";
        TAW.toast("Claude’s feedback saved.");
        break;
      }
      case "sel-hear": if (selCtx) TAW.speakText(selCtx.word); break;
      case "sel-save": {
        if (!selCtx) return;
        const bar = document.getElementById("selbar");
        S.saveWord({ word: selCtx.word, meaning: bar.querySelector("input").value.trim(), example: selCtx.sentence });
        bar.hidden = true; window.getSelection().removeAllRanges();
        TAW.toast("“" + selCtx.word + "” saved to My Words.");
        break;
      }
      case "sel-claude": {
        if (!selCtx) return;
        TAW.ai.askClaude(TAW.ai.prompts.word(selCtx.word, selCtx.sentence));
        document.getElementById("selbar").hidden = true; break;
      }
      case "sel-close": document.getElementById("selbar").hidden = true; break;
    }
  });
  document.addEventListener("change", function (e) {
    if (e.target.getAttribute("data-act") === "tts-rate") { S.state.settings.ttsRate = +e.target.value; S.save(); }
  });

  TAW.enh = { backup, backupBanner, sessionLink, dailyCards, pasteBlock, shadowButton, shadowView, celebrate, afterRender, stopAudio, getSession };
})();
