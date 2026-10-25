/* Router, events, speaking, forms. */
(function () {
  const S = TAW.store, V = TAW.views, esc = TAW.esc;
  const main = document.getElementById("main");
  let pendingRating = null;

  /* ── UI helpers ── */
  TAW.toast = function (msg) {
    const t = document.getElementById("toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, 2800);
  };
  function applyPrefs() {
    const s = S.state.settings, root = document.documentElement;
    if (s.theme === "auto") root.removeAttribute("data-theme"); else root.setAttribute("data-theme", s.theme);
    root.setAttribute("data-size", s.textSize || "m");
  }
  function speakText(text) {
    if (!("speechSynthesis" in window)) return TAW.toast("Audio isn’t available in this browser.");
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/[“”…]/g, ""));
    u.lang = S.state.settings.speechLang || "en-US"; u.rate = 0.92;
    const v = speechSynthesis.getVoices().find(function (x) { return x.lang === u.lang; });
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  }
  function busy(btn, on, label) {
    if (!btn) return;
    if (on) { btn._label = btn.innerHTML; btn.disabled = true; btn.innerHTML = label || "Thinking…"; }
    else { btn.disabled = false; btn.innerHTML = btn._label || btn.innerHTML; }
  }

  /* ── Router ── */
  function route() {
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/").filter(Boolean).map(decodeURIComponent);
    return { name: parts[0] || "home", a: parts[1], b: parts[2], c: parts[3] };
  }
  function render() {
    applyPrefs();
    S.touchVisit();
    const r = route();
    let html;
    if (!S.state.profile.onboarded && r.name !== "settings") html = V.onboarding();
    else switch (r.name) {
      case "lesson": html = V.lesson(r.a || S.currentDay(), r.b); break;
      case "journey": html = V.journey(); break;
      case "culture": html = r.a === "map" ? V.culture("map", r.b) : V.culture("passport", r.a === "p" ? r.b : null); break;
      case "card": html = V.card(r.a); break;
      case "library": html = V.library(r.a, r.b); break;
      case "book": html = V.book(r.a); break;
      case "film": html = V.film(r.a); break;
      case "words": html = V.words(r.a); break;
      case "speak": html = V.speak(r.a, r.b); break;
      case "progress": html = V.progress(r.a); break;
      case "journal": html = V.journal(r.a); break;
      case "settings": html = V.settings(); break;
      case "studio": html = V.studio(); break;
      default: html = V.home();
    }
    stopAllSessions();
    main.innerHTML = html;
    window.scrollTo(0, 0);
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      const on = a.getAttribute("data-nav") === r.name || (r.name === "lesson" && a.getAttribute("data-nav") === (/^[vb]\d/.test(r.a || "") ? "studio" : "home")) || (["card"].indexOf(r.name) >= 0 && a.getAttribute("data-nav") === "culture") || (["book", "film"].indexOf(r.name) >= 0 && a.getAttribute("data-nav") === "library");
      a.classList.toggle("on", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.getElementById("more-sheet").hidden = true;
    const h = main.querySelector("h1"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    document.getElementById("offline").hidden = navigator.onLine;
  }
  window.addEventListener("hashchange", render);
  window.addEventListener("online", function () { document.getElementById("offline").hidden = true; });
  window.addEventListener("offline", function () { document.getElementById("offline").hidden = false; });

  /* ── Speaking sessions ── */
  const sessions = {};
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  function sess(box) { const id = box.getAttribute("data-speak"); return sessions[id] || (sessions[id] = { id: id }); }
  function stopAllSessions() { Object.keys(sessions).forEach(function (k) { const s = sessions[k]; if (s.recording) try { stopRec(s, true); } catch (e) {} clearInterval(s.prepT); delete sessions[k]; }); }

  function startFlow(box) {
    const s = sess(box), prep = +box.getAttribute("data-prep") || 0;
    const btn = box.querySelector("[data-act=rec-start]");
    if (prep && !s.prepped && !s.prepping) {
      s.prepping = true; let left = prep;
      btn.textContent = "Ready — start speaking";
      const tEl = box.querySelector(".t");
      tEl.textContent = "Think: " + TAW.fmt(left);
      s.prepT = setInterval(function () {
        left--; tEl.textContent = "Think: " + TAW.fmt(left);
        if (left <= 0) { clearInterval(s.prepT); s.prepped = true; s.prepping = false; beginSpeaking(box); }
      }, 1000);
      return;
    }
    clearInterval(s.prepT); s.prepped = true; s.prepping = false;
    beginSpeaking(box);
  }

  async function beginSpeaking(box) {
    const s = sess(box), target = +box.getAttribute("data-seconds") || 60;
    const status = box.querySelector(".rec-status"), ta = box.querySelector(".transcript");
    box.querySelector("[data-act=rec-start]").hidden = true;
    box.querySelector("[data-act=rec-stop]").hidden = false;
    s.recording = true; s.start = Date.now(); s.base = ta.value ? ta.value.trim() + " " : ""; s.finalText = ""; s.attemptId = null; s.counted = false;
    status.textContent = "Listening…";
    // audio recording
    if (navigator.mediaDevices && window.MediaRecorder) {
      try {
        s.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        s.chunks = [];
        s.rec = new MediaRecorder(s.stream);
        s.rec.ondataavailable = function (e) { if (e.data && e.data.size) s.chunks.push(e.data); };
        s.rec.onstop = function () {
          s.blob = new Blob(s.chunks, { type: s.rec.mimeType || "audio/webm" });
          const au = box.querySelector(".playback"); au.src = URL.createObjectURL(s.blob); au.hidden = false;
          if (s.stream) s.stream.getTracks().forEach(function (t) { t.stop(); });
        };
        s.rec.start();
      } catch (e) { status.textContent = "Microphone unavailable — the timer still runs; type your answer below."; }
    } else status.textContent = "Recording isn’t supported here — the timer still runs; type your answer below.";
    // speech recognition
    if (Rec) {
      try {
        const r = new Rec();
        r.lang = S.state.settings.speechLang || "en-US"; r.continuous = true; r.interimResults = true;
        r.onresult = function (ev) {
          let interim = "";
          for (let i = ev.resultIndex; i < ev.results.length; i++) {
            if (ev.results[i].isFinal) s.finalText += ev.results[i][0].transcript.trim() + ". ";
            else interim += ev.results[i][0].transcript;
          }
          ta.value = (s.base + s.finalText + interim).replace(/\s+/g, " ").replace(/\.\s*\./g, ".");
        };
        r.onerror = function (e) { if (e.error === "not-allowed") status.textContent = "Speech recognition was blocked — you can type instead."; };
        r.onend = function () { if (s.recording) try { r.start(); } catch (e) {} };
        r.start(); s.recog = r;
      } catch (e) {}
    } else if (!status.textContent.match(/unavailable|supported/)) status.textContent = "Recording… (live transcription isn’t available in this browser — type key points after.)";
    // timer
    const tEl = box.querySelector(".t"), barEl = box.querySelector(".timer-track i");
    s.timer = setInterval(function () {
      const el = (Date.now() - s.start) / 1000;
      tEl.textContent = TAW.fmt(el);
      barEl.style.width = Math.min(100, el / target * 100) + "%";
      if (el >= target && !s.warned) { s.warned = true; box.classList.add("over"); status.textContent = "Time — finish your sentence."; }
      if (el >= target + 45) stopRec(s);
    }, 250);
    s.box = box;
  }

  function stopRec(s, silent) {
    if (!s.recording) return;
    s.recording = false;
    s.duration = Math.round((Date.now() - s.start) / 1000);
    clearInterval(s.timer);
    if (s.recog) try { s.recog.stop(); } catch (e) {}
    if (s.rec && s.rec.state !== "inactive") try { s.rec.stop(); } catch (e) {}
    else if (s.stream) s.stream.getTracks().forEach(function (t) { t.stop(); });
    if (silent || !s.box) return;
    const box = s.box;
    box.querySelector("[data-act=rec-start]").hidden = false;
    box.querySelector("[data-act=rec-start]").textContent = "● Try again";
    box.querySelector("[data-act=rec-stop]").hidden = true;
    box.querySelector(".rec-status").textContent = "Stopped at " + TAW.fmt(s.duration) + ".";
    box.querySelector(".confidence").hidden = false;
    s.warned = false; box.classList.remove("over");
    setTimeout(function () { if (box.querySelector(".transcript").value.trim()) analyseSpeak(box, true); }, 400);
  }

  function analyseSpeak(box, auto) {
    const s = sess(box), text = box.querySelector(".transcript").value.trim();
    if (!text) { if (!auto) TAW.toast("Speak or type your answer first."); return; }
    const a = TAW.analyze(text, { seconds: s.duration || 0, myWords: Object.keys(S.state.words) });
    if (!s.counted) { S.countWordUses(text); s.counted = true; }
    const rec = {
      prompt: box.getAttribute("data-prompt"), tag: box.getAttribute("data-tag"), day: box.getAttribute("data-day") || null,
      seconds: +box.getAttribute("data-seconds"), duration: s.duration || null, transcript: text, analysis: a, hasAudio: !!s.blob
    };
    if (s.attemptId) {
      const ex = S.state.speaking.find(function (x) { return x.id === s.attemptId; });
      if (ex) { Object.assign(ex, rec); S.save(); }
    } else {
      const saved = S.addSpeaking(rec); s.attemptId = saved.id;
      if (s.blob) S.putAudio(saved.id, s.blob).catch(function () { saved.hasAudio = false; S.save(); });
    }
    box.querySelector(".speak-result").innerHTML = V.analysisHTML(a);
    box.querySelector(".confidence").hidden = false;
  }

  async function aiSpeak(box, btn) {
    if (!TAW.ai.available()) return TAW.toast(TAW.ai.why());
    const s = sess(box), text = box.querySelector(".transcript").value.trim();
    if (!text) return TAW.toast("Speak or type your answer first.");
    if (!s.attemptId) analyseSpeak(box);
    busy(btn, true, "Your mentor is listening…");
    try {
      const f = await TAW.ai.feedback(box.getAttribute("data-prompt"), text, "speaking");
      const ex = S.state.speaking.find(function (x) { return x.id === s.attemptId; });
      if (ex) { ex.ai = f; S.save(); }
      const div = document.createElement("div"); div.innerHTML = V.aiHTML(f);
      box.querySelector(".speak-result").appendChild(div);
    } catch (e) { TAW.toast(e.message); }
    busy(btn, false);
  }

  /* ── Lesson completion ── */
  function complete(day) {
    const L = TAW.getLesson(day);
    S.completeLesson(day, { rating: pendingRating });
    pendingRating = null;
    const refl = S.getAnswer(day, "reflect");
    if (refl) S.addJournal({ key: "reflect-" + day, kind: L.milestone && TAW.isMilestone(day) ? "milestone" : "reflection", day: L.track ? null : day, prompt: L.reflect, text: refl });
    const w = S.state.weekly[day];
    if (w && Object.keys(w.answers).length) {
      S.addJournal({ key: "weekly-" + day, kind: "weekly", day: day, prompt: "Weekly reflection · Week " + Math.round(day / 7),
        text: TAW.weeklyQuestions.map(function (q, i) { return w.answers[i] ? q + "\n" + w.answers[i] : ""; }).filter(Boolean).join("\n\n") });
    }
    TAW.toast(TAW.milestones[day] ? "★ " + TAW.milestones[day].title : TAW.lessonLabel(L) + " complete.");
    render();
  }

  /* ── Clicks ── */
  document.addEventListener("click", async function (e) {
    const el = e.target.closest("[data-act]");
    if (!el) {
      if (e.target.closest("[data-more]")) { const sh = document.getElementById("more-sheet"); sh.hidden = !sh.hidden; }
      return;
    }
    const act = el.getAttribute("data-act"), st = S.state;
    const box = el.closest("[data-speak]");
    switch (act) {
      case "tts": speakText(el.getAttribute("data-text")); break;
      case "mode": st.profile.mode = el.getAttribute("data-v"); S.save(); render(); break;
      case "sec-done": S.markSection(TAW.dayKey(el.getAttribute("data-day")), el.getAttribute("data-sec")); break;
      case "save-word": {
        const L = TAW.getLesson(TAW.dayKey(el.getAttribute("data-day"))), v = L.vocab[+el.getAttribute("data-i")];
        S.saveWord({ word: v.word, meaning: v.definition, example: S.getAnswer(L.day, "v_" + v.word) || v.example || "", pron: v.pron || "" });
        el.textContent = "✓ In My Words"; el.classList.add("on"); TAW.toast("Saved — it will come back for review."); break;
      }
      case "ladder-next": {
        const lad = el.closest("[data-ladder]"), nx = lad.querySelector(".rung[hidden]");
        if (nx) { nx.hidden = false; nx.classList.add("reveal"); }
        if (!lad.querySelector(".rung[hidden]")) el.hidden = true;
        break;
      }
      case "rec-start": {
        const s = sess(box);
        if (s.prepping) { clearInterval(s.prepT); s.prepping = false; s.prepped = true; beginSpeaking(box); }
        else startFlow(box);
        break;
      }
      case "rec-stop": stopRec(sess(box)); break;
      case "speak-analyse": analyseSpeak(box); break;
      case "speak-ai": aiSpeak(box, el); break;
      case "speak-claude": {
        const text = box.querySelector(".transcript").value.trim();
        if (!text) return TAW.toast("Speak or type your answer first.");
        if (!sess(box).attemptId) analyseSpeak(box);
        TAW.ai.askClaude(TAW.ai.prompts.feedback(box.getAttribute("data-prompt"), text, "speaking")); break;
      }
      case "write-claude": {
        const w = el.closest("[data-write]"), text = w.querySelector("textarea").value.trim();
        if (!text) return TAW.toast("Write something first.");
        TAW.ai.askClaude(TAW.ai.prompts.feedback(w.getAttribute("data-prompt") || "Free writing", text, "writing")); break;
      }
      case "claude-lesson": TAW.ai.askClaude(TAW.ai.prompts.lesson(TAW.getLesson(TAW.dayKey(el.getAttribute("data-day"))))); break;
      case "world-claude": TAW.ai.askClaude(TAW.ai.prompts.world()); break;
      case "ladder-claude": {
        const s = (el.closest("form").querySelector("input[name=s]").value || "").trim();
        if (!s) return TAW.toast("Type a sentence first.");
        TAW.ai.askClaude(TAW.ai.prompts.ladder(s)); break;
      }
      case "find-claude": {
        const idea = (main.querySelector("textarea[name=idea]").value || "").trim();
        if (!idea) return TAW.toast("Type your idea first.");
        TAW.ai.askClaude(TAW.ai.prompts.express(idea)); break;
      }
      case "confidence": {
        const s = sess(box); box.querySelectorAll("[data-act=confidence]").forEach(function (b) { b.classList.toggle("on", b === el); });
        if (!s.attemptId) analyseSpeak(box);
        const ex = st.speaking.find(function (x) { return x.id === s.attemptId; }); if (ex) { ex.confidence = +el.getAttribute("data-v"); S.save(); }
        break;
      }
      case "write-analyse": case "write-ai": {
        const w = el.closest("[data-write]"), text = w.querySelector("textarea").value.trim(), out = w.querySelector(".write-result");
        if (!text) return TAW.toast("Write something first.");
        if (act === "write-analyse") { S.countWordUses(text); out.innerHTML = V.analysisHTML(TAW.analyze(text, { myWords: Object.keys(st.words) })); }
        else {
          if (!TAW.ai.available()) return TAW.toast(TAW.ai.why());
          busy(el, true, "Reading…");
          try { const f = await TAW.ai.feedback(w.getAttribute("data-prompt") || "Free writing", text, "writing"); out.innerHTML = V.aiHTML(f); }
          catch (err) { TAW.toast(err.message); }
          busy(el, false);
        }
        break;
      }
      case "recall-rate": {
        const ok = el.getAttribute("data-ok") === "1", word = el.getAttribute("data-word");
        st.recallLog.push({ d: S.today(), ok: ok });
        const id = ("word:" + word).toLowerCase();
        if (word && st.review[id]) S.rate(id, ok ? "good" : "again"); else S.save();
        el.parentNode.querySelectorAll("button").forEach(function (b) { b.classList.toggle("on", b === el); });
        break;
      }
      case "rate-lesson": pendingRating = +el.getAttribute("data-v"); el.parentNode.querySelectorAll("button").forEach(function (b) { b.classList.toggle("on", b === el); }); break;
      case "complete": complete(TAW.dayKey(el.getAttribute("data-day"))); break;
      case "toggle-card": { const id = el.getAttribute("data-id"); if (st.passport[id]) delete st.passport[id]; else { st.passport[id] = { date: S.today() }; S.addReview("concept", TAW.cards[id].name, TAW.cards[id].idea, { card: id }); } S.save(); render(); break; }
      case "book-status": { const id = el.getAttribute("data-id"), v = el.getAttribute("data-v"); st.books[id] = st.books[id] === v ? undefined : v; if (!st.books[id]) delete st.books[id]; S.save(); render(); break; }
      case "film-status": { const id = el.getAttribute("data-id"), v = el.getAttribute("data-v"); st.films[id] = st.films[id] === v ? undefined : v; if (!st.films[id]) delete st.films[id]; S.save(); render(); break; }
      case "film-journal": {
        const id = el.getAttribute("data-id"), f = TAW.films.find(function (x) { return x.id === id; });
        const qs = TAW.filmQuestions.concat([f.q]);
        const text = qs.map(function (q, i) { const a = S.getAnswer("film-" + id, "q" + i); return a ? q + "\n" + a : ""; }).filter(Boolean).join("\n\n");
        if (!text) return TAW.toast("Answer at least one question first.");
        S.addJournal({ key: "film-" + id, kind: "culture", prompt: f.title + " — " + f.director, text: text }); TAW.toast("Saved to your Journal."); break;
      }
      case "world-brief": {
        if (!TAW.ai.available()) return TAW.toast(TAW.ai.why());
        busy(el, true, "Reading the news…");
        try { st.worldBrief = Object.assign({ id: "live" }, await TAW.ai.worldBriefing()); S.save(); render(); }
        catch (err) { TAW.toast(err.message); busy(el, false); }
        break;
      }
      case "ai-lesson": {
        if (!TAW.ai.available()) return TAW.toast(TAW.ai.why());
        const day = +el.getAttribute("data-day"), m = TAW.map[day];
        busy(el, true, "Your mentor is writing today’s lesson… (about a minute)");
        try {
          const entry = Object.assign({}, m, { culturalReference: TAW.cards[m.ref] ? TAW.cards[m.ref] : m.ref, month: TAW.months[TAW.monthOf(day) - 1] });
          st.aiLessons[day] = await TAW.ai.generateLesson(entry); S.save(); TAW.invalidateLesson(day); render(); TAW.toast("Lesson written — and saved for offline use.");
        } catch (err) { TAW.toast(err.message); busy(el, false); }
        break;
      }
      case "grade": S.rate(el.getAttribute("data-id"), el.getAttribute("data-g")); S.logActivity(1); render(); break;
      case "del-word": { const w = el.getAttribute("data-w"); if (confirm("Remove “" + w + "” from My Words?")) { delete st.words[w]; delete st.review[("word:" + w).toLowerCase()]; S.save(); render(); } break; }
      case "del-attempt": { if (confirm("Delete this recording?")) { st.speaking = st.speaking.filter(function (x) { return x.id !== el.getAttribute("data-id"); }); S.save(); render(); } break; }
      case "del-journal": { if (confirm("Delete this entry?")) { st.journal = st.journal.filter(function (x) { return x.id !== el.getAttribute("data-id"); }); S.save(); render(); } break; }
      case "better-next": st.betterIdx = (st.betterIdx || 0) + 1; S.save(); render(); break;
      case "next-prompt": st.journalIdx = (st.journalIdx || 0) + 1; S.save(); render(); break;
      case "play": {
        const id = el.getAttribute("data-id"), au = main.querySelector("[data-audio='" + id + "']");
        const blob = await S.getAudio(id).catch(function () { return null; });
        if (!blob) return TAW.toast("This recording isn’t stored on this device.");
        au.src = URL.createObjectURL(blob); au.hidden = false; au.play(); break;
      }
      case "ai-test": {
        const out = main.querySelector(".ai-status"); out.textContent = "Testing…";
        try { await TAW.ai.test(); out.textContent = "✓ Connected"; } catch (err) { out.textContent = err.message; }
        break;
      }
      case "export": {
        const blob = new Blob([S.exportData()], { type: "application/json" });
        const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "articulate-woman-backup-" + S.today() + ".json"; a.click(); break;
      }
      case "reset": if (confirm("Erase all progress, words, recordings and journal entries on this device? Export a backup first if you might want them.")) { S.reset(); TAW.invalidateLesson(); location.hash = "#/"; render(); } break;
    }
  });

  /* ── Inputs (autosave) ── */
  document.addEventListener("input", function (e) {
    const t = e.target;
    const key = t.getAttribute("data-save");
    if (key) {
      const i = key.indexOf("|"), d = key.slice(0, i), k = key.slice(i + 1);
      S.answer(/^\d+$/.test(d) ? +d : d, k, t.value);
      const wc = t.closest(".write") && t.closest(".write").querySelector(".wc");
      if (wc) wc.textContent = t.value.trim() ? t.value.trim().split(/\s+/).length + " words" : "";
    }
    const wk = t.getAttribute("data-weekly");
    if (wk) { const p = wk.split("|"), st = S.state; st.weekly[p[0]] = st.weekly[p[0]] || { answers: {} }; st.weekly[p[0]].answers[p[1]] = t.value; S.save(); }
  });
  document.addEventListener("change", function (e) {
    if (e.target.getAttribute("data-act") === "import" && e.target.files[0]) {
      const r = new FileReader();
      r.onload = function () { try { S.importData(r.result); TAW.invalidateLesson(); TAW.toast("Backup restored."); render(); } catch (err) { TAW.toast("That file couldn’t be read: " + err.message); } };
      r.readAsText(e.target.files[0]);
    }
  });

  /* ── Forms ── */
  document.addEventListener("submit", async function (e) {
    const f = e.target, kind = f.getAttribute("data-form");
    if (!kind) return;
    e.preventDefault();
    const fd = new FormData(f), st = S.state;
    const btn = f.querySelector("[type=submit]");
    switch (kind) {
      case "onboard":
        st.profile.name = (fd.get("name") || "").trim();
        st.profile.mode = fd.get("mode") || "standard";
        st.profile.interests = fd.getAll("interests");
        st.profile.goals = fd.get("goal") ? [fd.get("goal")] : [];
        st.profile.work = { role: (fd.get("role") || "").trim(), industry: (fd.get("industry") || "").trim(), focus: "" };
        st.profile.startDate = S.today(); st.profile.onboarded = true;
        if (fd.get("goal")) S.addJournal({ key: "goal", kind: "milestone", day: 1, prompt: "Who do I want to be in six months?", text: fd.get("goal") });
        S.save(); location.hash = "#/lesson/1"; render(); break;
      case "add-word":
        S.saveWord({ word: fd.get("word"), meaning: fd.get("meaning"), example: fd.get("example"), pron: fd.get("pron") });
        TAW.toast("Saved."); render(); break;
      case "journal":
        if (!(fd.get("text") || "").trim()) return TAW.toast("Write something first.");
        S.addJournal({ kind: "free", prompt: fd.get("prompt"), text: fd.get("text") }); S.logActivity(3); TAW.toast("Saved to your Journal."); render(); break;
      case "headline":
        if (!(fd.get("h") || "").trim()) return TAW.toast("Paste a headline first.");
        S.addJournal({ kind: "culture", prompt: "News: " + fd.get("h"), text: "FACT: " + fd.get("fact") + "\nINTERPRETATION: " + fd.get("interp") + "\nOPINION: " + fd.get("op") });
        TAW.toast("Saved to your Journal."); f.reset(); break;
      case "settings":
        st.profile.name = fd.get("name"); st.profile.startDate = fd.get("startDate") || st.profile.startDate; st.profile.mode = fd.get("mode");
        st.profile.work = { role: (fd.get("role") || "").trim(), industry: (fd.get("industry") || "").trim(), focus: (fd.get("focus") || "").trim() };
        st.settings.theme = fd.get("theme"); st.settings.textSize = fd.get("textSize"); st.settings.speechLang = fd.get("speechLang");
        S.save(); TAW.toast("Saved."); render(); break;
      case "ai":
        st.settings.aiKey = (fd.get("aiKey") || "").trim(); st.settings.aiModel = fd.get("aiModel"); S.save(); TAW.toast("Saved."); break;
      case "find": {
        const idea = (fd.get("idea") || "").trim(), out = main.querySelector(".find-result");
        if (!idea) return;
        if (TAW.ai.available()) {
          busy(btn, true, "Finding the words…");
          try { out.innerHTML = findHTML(await TAW.ai.expressIdea(idea)); }
          catch (err) { TAW.toast(err.message); out.innerHTML = framesHTML(idea); }
          busy(btn, false);
        } else out.innerHTML = framesHTML(idea);
        break;
      }
      case "own-ladder": {
        const s = (fd.get("s") || "").trim(), out = f.querySelector(".own-result");
        if (!s) return;
        if (!TAW.ai.available()) {
          const low = s.toLowerCase();
          const hits = Object.keys(TAW.overuseTargets).filter(function (k) { return low.indexOf(k) >= 0; });
          out.innerHTML = `<p class="note">${esc(TAW.ai.why())}</p>` + (hits.length ? `<p>Start here — replace: ${hits.map(function (h) { return `<span class="chip">${esc(h)} → ${esc(TAW.overuseTargets[h].slice(0, 3).join(" / "))}</span>`; }).join(" ")}</p>` : `<p class="small">Ask: what exactly do I mean? Add a reason, a precise word, and a nuance.</p>`);
          return;
        }
        busy(btn, true, "Climbing…");
        try {
          const t = await TAW.ai.call("Build a 4-level “Say it better” ladder for this basic sentence: “" + s + "”. Level 1 clearer, Level 2 more precise, Level 3 natural and nuanced, Level 4 articulate but never pretentious. Reply ONLY with JSON: {\"levels\": [\"...\", \"...\", \"...\", \"...\"], \"note\": \"what makes level 4 work\"}", { effort: "low", maxTokens: 1500 });
          const j = JSON.parse(t.slice(t.indexOf("{"), t.lastIndexOf("}") + 1));
          out.innerHTML = `<div class="ladder">${j.levels.map(function (l, i) { return `<div class="rung reveal"><span class="kicker">Level ${i + 1}</span><p class="serif">“${esc(l)}”</p></div>`; }).join("")}<p class="small muted">${esc(j.note)}</p></div>`;
        } catch (err) { TAW.toast(err.message); }
        busy(btn, false);
        break;
      }
    }
  });

  function findHTML(r) {
    return `<div class="card"><p class="kicker">Say it like this</p><p class="serif big">“${esc(r.natural)}” <button class="tts" data-act="tts" data-text="${esc(r.natural)}" aria-label="Hear it">🔊</button></p>
      ${r.keyWord ? `<div class="vocab"><div class="v-head"><h3 class="serif">${esc(r.keyWord.word)}</h3><span class="pron">${esc(r.keyWord.pron || "")}</span></div><p><span class="lab">Why it works</span> ${esc(r.keyWord.why)}</p><p><span class="lab">Nuance</span> ${esc(r.keyWord.nuance)}</p>
        <button class="btn small" data-act="save-found" data-w="${esc(r.keyWord.word)}" data-m="${esc(r.keyWord.why)}" data-e="${esc(r.natural)}" data-p="${esc(r.keyWord.pron || "")}">+ Save to My Words</button></div>` : ""}
      <h4>Alternatives</h4><ul>${(r.alternatives || []).map(function (a) { return `<li><b>${esc(a.text)}</b> <span class="chip">${esc(a.register)}</span><br><span class="small muted">${esc(a.note)}</span></li>`; }).join("")}</ul>
      ${r.related && r.related.length ? `<h4>Related expressions</h4><p>${r.related.map(function (x) { return `<span class="chip">${esc(x)}</span>`; }).join(" ")}</p>` : ""}
      ${r.avoid ? `<p class="note"><b>Avoid:</b> ${esc(r.avoid)}</p>` : ""}</div>`;
  }
  function framesHTML(idea) {
    const low = idea.toLowerCase();
    const scored = TAW.phraseFrames.map(function (f) { return [f, f.keys.filter(function (k) { return low.indexOf(k) >= 0; }).length]; }).filter(function (x) { return x[1]; }).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 3);
    const list = scored.length ? scored.map(function (x) { return x[0]; }) : TAW.phraseFrames.slice(0, 3);
    return `<div class="card"><p class="note small">${esc(TAW.ai.why() || "Offline mode")} Meanwhile, here are frames that fit what you’re trying to say:</p>
      ${list.map(function (f) { return `<h4>${esc(f.intent)}</h4><ul>${f.frames.map(function (x) { return `<li class="serif">${esc(x)} <button class="tts" data-act="tts" data-text="${esc(x)}" aria-label="Hear it">🔊</button></li>`; }).join("")}</ul>`; }).join("")}
      <p class="small muted">Try building your sentence from one of these, then say it aloud.</p></div>`;
  }
  document.addEventListener("click", function (e) {
    const b = e.target.closest("[data-act=save-found]"); if (!b) return;
    S.saveWord({ word: b.getAttribute("data-w"), meaning: b.getAttribute("data-m"), example: b.getAttribute("data-e"), pron: b.getAttribute("data-p") });
    b.textContent = "✓ Saved"; TAW.toast("Saved to My Words.");
  });

  /* ── Boot ── */
  if ("speechSynthesis" in window) speechSynthesis.getVoices();
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
  render();
})();
