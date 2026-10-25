/* Interactions inside a day: saving answers, scoring, callbacks, the 13 check, timers and completion. */
window.TS = window.TS || {};
(function () {
  const U = TS.ui, E = TS.engine, st = TS.store, V = TS.views, esc = U.esc;
  function S() { return TS.store.state; }
  const COUNTER_BY_LORE = { journal: "journal", memory: "journal", story: "story" };

  function speak(text) {
    if (!("speechSynthesis" in window)) return U.toast("Audio isn’t available in this browser.");
    speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = "en-GB"; u.rate = 0.92; speechSynthesis.speak(u);
  }

  TS.dayActions = function (el, day) {
    const d = day.day, ans = st.answers(d);
    let timer = null;

    function refresh(sec, step, i) {
      const ml = V.missionList(day, ans);
      el.querySelector("[data-mlist]").innerHTML = ml.html;
      el.querySelector("[data-mcount]").textContent = ml.n + "/" + ml.total;
      const btn = el.querySelector('[data-act="complete"]');
      if (btn) { btn.disabled = ml.n < ml.total; el.querySelector("[data-left]").textContent = ml.n < ml.total ? (ml.total - ml.n) + " mission" + (ml.total - ml.n > 1 ? "s" : "") + " left." : "All missions done. Proceed dramatically."; }
      if (sec && step) {
        const fresh = document.createElement("div"); fresh.innerHTML = V.renderStep(step, d, ans, i);
        const n = fresh.firstElementChild; sec.replaceWith(n); return n;
      }
    }

    function callbackHtml(cb) {
      if (!cb) return "";
      return '<div class="callback"><b>THE ' + esc(cb.key.toUpperCase()) + " HAS RETURNED.</b><span>Interesting that you’ve mentioned “" + esc(cb.key) + "” again. First seen on Day " + cb.first + ". The lore remembers.</span></div>";
    }

    function saveStep(sec, step, i) {
      const id = step.id, first = !V.isDone(step, ans, d) && !ans[id];
      let value, text = "";
      if (step.type === "write" || step.type === "vocab" || step.type === "decoder") {
        value = sec.querySelector("textarea").value.trim();
        if (!value) return U.toast("Write something first. Even something small. Especially something small.");
        text = value;
      } else if (step.type === "fields") {
        value = {}; sec.querySelectorAll("[data-f]").forEach(function (f) { value[f.dataset.f] = f.value.trim(); });
        text = step.fields.map(function (f) { return value[f.id] ? f.label + ": " + value[f.id] : ""; }).filter(Boolean).join("\n");
        if (!text) return U.toast("Fill in at least one field. The lore is hungry.");
      } else if (step.type === "list") {
        value = Array.from(sec.querySelectorAll("[data-k]")).map(function (x) { return x.value.trim(); });
        text = value.filter(Boolean).join(" · ");
        if (!text) return U.toast("Observe at least one real thing.");
      }
      ans[id] = value; st.save();
      let msg = "", extra = "";
      if (step.type === "vocab") {
        const used = step.words.filter(function (w) {
          return w.w.toLowerCase().replace(/^to /, "").split(/[\s\-]+/).every(function (p) { return value.toLowerCase().indexOf(p.slice(0, Math.max(3, p.length - 2))) > -1; });
        });
        if (used.length) {
          if (first) { st.count("words", used.length); msg = st.award({ storyteller: 3 * used.length, songwriter: 2 }); }
          extra = '<p class="reveal">✓ Used: <b>' + used.map(function (w) { return esc(w.w); }).join(", ") + "</b>. Your English is becoming dangerously expressive.</p>";
        } else extra = '<p class="reveal">We couldn’t spot today’s words. Try to include one exactly — it’s how they stick.</p>';
        st.addLore({ type: "phrase", title: "English · Day " + d, text: value, day: d, src: "d" + d + "-" + id });
      } else {
        const cb = st.addLore({ type: step.lore || "journal", title: (step.mission || step.title || step.prompt || "").slice(0, 80), text: text, day: d, src: "d" + d + "-" + id });
        extra = callbackHtml(cb);
        if (first) {
          msg = st.award(step.stats || { storyteller: 4 });
          st.count(COUNTER_BY_LORE[step.lore] || "creative");
          if (step.counter === "metaphors") st.count("metaphors", step.type === "fields" ? Object.keys(value).filter(function (k) { return value[k]; }).length : 1);
          else if (step.counter) st.count(step.counter);
          if (step.score === "master") st.count("plans");
          if (step.lore === "color" && step.type === "fields") Object.keys(value).forEach(function (k) { if (value[k]) st.addLore({ type: "color", title: "Colour · Day " + d, text: value[k], day: d, src: "d" + d + "-" + id + "-" + k }); });
        }
        if (step.type === "write" && E.words(value).length >= 500) extra += '<p class="reveal">This is now over 500 words. The app has become concerned. This is a compliment.</p>';
      }
      const n = refresh(sec, step, i);
      if (extra) n.querySelector(".feedback").insertAdjacentHTML("afterbegin", extra);
      if (n.querySelector(".callback")) U.confetti(40);
      U.celebrate(first && msg ? "Saved. " + msg : "Saved.");
    }

    el.addEventListener("click", function (e) {
      const sp = e.target.closest("[data-speak]"); if (sp) { speak(sp.dataset.speak); return; }
      const j = e.target.closest("[data-jump]");
      if (j) { e.preventDefault(); const sec = el.querySelector('[data-i="' + j.dataset.jump + '"]'); if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
      const a = e.target.closest("[data-act]"); if (!a) return;
      const act = a.dataset.act, sec = a.closest("[data-i]"), i = sec ? +sec.dataset.i : -1, step = i > -1 ? day.steps[i] : null;
      if (act === "save") return saveStep(sec, step, i);
      if (act === "culture") { if (!ans.culture) { ans.culture = true; st.save(); U.celebrate(st.award({ era: 5 })); a.disabled = true; a.textContent = "Seminar attended ✓"; } return; }
      if (act === "choose") {
        const first = ans[step.id] == null; ans[step.id] = +a.dataset.k; st.save();
        const n = refresh(sec, step, i);
        if (first) U.celebrate(st.award(step.stats || { egg: 4, storyteller: 3 }));
        return n;
      }
      if (act === "t13") {
        const k = +a.dataset.k, first = !ans.t13;
        ans.t13 = { c: k }; st.save();
        refresh(sec, step, i);
        if (first) U.celebrate(st.award({ egg: k === 1 ? 2 : 5 }));
        return;
      }
      if (act === "t13log") {
        const v = sec.querySelector("input").value.trim(); if (!v) return U.toast("Describe the incident. Be specific. ‘13% battery’ is a classic.");
        ans.t13.text = v; st.save(); st.addIncident(v, "report", d); st.award({ egg: 8 });
        refresh(sec, step, i); U.celebrate("13 incident logged. 🧩 +8 Easter Egg Detective"); return;
      }
      if (act === "t13x") {
        const lines = sec.querySelector("textarea").value.split(/\n/).filter(function (l) { return l.trim(); });
        ans.t13.text = lines.join("\n"); ans.t13.n = lines.length; st.save();
        if (lines.length) st.addLore({ type: "clue", title: "Why 13 matters · Day " + d, text: lines.join("\n"), day: d, src: "d" + d + "-t13x" });
        refresh(sec, step, i);
        U.celebrate(lines.length >= 13 ? st.award({ egg: 15 }) : ""); return;
      }
      if (act === "tstart" || act === "treset" || act === "tdone") {
        const box = sec.querySelector(".timer"), clock = box.querySelector("[data-clock]");
        if (act === "treset") { clearInterval(timer); timer = null; box.dataset.left = box.dataset.secs; clock.textContent = V.fmt(+box.dataset.secs); a.parentNode.querySelector('[data-act="tstart"]').textContent = "Start"; return; }
        if (act === "tstart") {
          if (timer) { clearInterval(timer); timer = null; a.textContent = "Resume"; return; }
          let left = +(box.dataset.left || box.dataset.secs); a.textContent = "Pause";
          timer = setInterval(function () {
            left--; box.dataset.left = left; clock.textContent = V.fmt(Math.max(0, left));
            if (left <= 0) { clearInterval(timer); timer = null; finishTimer(sec, step, i); }
          }, 1000);
          return;
        }
        clearInterval(timer); timer = null; finishTimer(sec, step, i); return;
      }
      if (act === "complete") return complete();
    });
    el.addEventListener("input", function (e) {
      const sec = e.target.closest("[data-i]"); if (!sec) return;
      const step = day.steps[+sec.dataset.i];
      if (step.type === "decoder") sec.querySelector("[data-decoded]").textContent = E.decode(e.target.value) || "—";
      if (step.minWords) sec.querySelector("[data-wc]").textContent = E.words(e.target.value).length + " words · aim for " + step.minWords + "+";
    });
    V.bindEggs(el);
    if (day.bonus) el.addEventListener("click", function (e) {
      if (e.target.closest(".hidden13")) setTimeout(function () { U.toast("<b>BONUS</b><br>" + esc(day.bonus), 4200); }, 1700);
    });

    function finishTimer(sec, step, i) {
      const first = !ans[step.id]; ans[step.id] = true; st.save();
      refresh(sec, step, i);
      if (first) { U.celebrate("Performance complete. " + st.award({ main: 15, storyteller: 5 })); U.confetti(80); }
    }

    function complete() {
      const res = st.completeDay(d, day.reward); if (!res) return;
      const next = Math.min(180, d + 1);
      U.confetti(160);
      U.modal('<div class="complete"><p class="eyebrow">Day ' + d + ' complete</p><h2>' + esc(day.title) + '</h2><p>' + esc(day.outro) + '</p><p class="reward">' + esc(res.msg) + '</p>' +
        '<p class="tay-delta">Taylorification <b class="num">' + res.before + "% → " + res.after + "%</b></p>" +
        '<div class="row">' + (d < 180 ? '<a class="btn primary" href="#/day/' + next + '" data-close>Day ' + next + " →</a>" : '<a class="btn primary" href="#/final" data-close>The final screen →</a>') + '<a class="btn ghost" href="#/" data-close>Home</a></div></div>',
        { onClose: function () { if (d % 7 === 0 && !S().episodes[d / 7]) setTimeout(function () { V.episode(d / 7); }, 250); } });
      U.celebrate("");
      if (d === 180) setTimeout(function () { U.closeModal(); U.go("#/final"); }, 2600);
    }
  };
})();
