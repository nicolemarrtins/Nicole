/* Router, era theming, “previously on…”, random events and offline support. */
(function () {
  const st = TS.store, V = TS.views, P = TS.play, U = TS.ui;
  const main = document.getElementById("main");

  function parse() {
    const h = (location.hash || "#/").slice(1), q = h.split("?"), parts = q[0].split("/").filter(Boolean);
    const params = {}; (q[1] || "").split("&").forEach(function (kv) { const p = kv.split("="); if (p[0]) params[p[0]] = decodeURIComponent(p[1] || ""); });
    return { parts: parts, params: params };
  }

  function more(el) {
    el.innerHTML = '<header class="page-head"><p class="eyebrow">Everything else</p><h1>More</h1></header><nav class="home-grid">' +
      [["#/album", "My Album", "💿"], ["#/cats", "Cat Operations", "🐈"], ["#/eras", "My Six Eras", "🎭"], ["#/board", "Conspiracy Board", "🧵"], ["#/eggs", "Easter Eggs & 13s", "🧩"], ["#/school", "The School", "🎓"], ["#/play/bracelet", "Bracelet Factory", "💌"], ["#/play/quiz", "What Era Am I In?", "🌙"], ["#/settings", "Settings & Backup", "⚙️"], ["#/final", "Final Screen", "✨"]]
        .map(function (b) { return '<a class="tile" href="' + b[0] + '"><span>' + b[2] + "</span>" + b[1] + "</a>"; }).join("") + "</nav>";
  }

  function render() {
    const r = parse(), a = r.parts[0] || "", view = document.createElement("div");
    view.className = "view";
    let era = TS.eraOf(st.currentDay()).n, nav = a || "home";
    U.closeModal();
    if (a === "day") { const n = Math.max(1, Math.min(180, parseInt(r.parts[1], 10) || st.currentDay())); era = TS.eraOf(n).n; V.day(view, n); nav = "home"; }
    else if (a === "roadmap") V.roadmap(view);
    else if (a === "lore") V.lore(view);
    else if (a === "eggs") V.eggs(view);
    else if (a === "progress") V.progress(view);
    else if (a === "school") { V.school(view); nav = "progress"; }
    else if (a === "settings") { V.settings(view); nav = "more"; }
    else if (a === "final") { era = 6; V.final(view); nav = "more"; }
    else if (a === "play") { if (r.parts[1]) P.game(view, r.parts[1], r.params.from); else P.hub(view); nav = "play"; }
    else if (a === "album") { P.album(view); nav = "play"; }
    else if (a === "cats") { era = 4; P.cats(view); nav = "more"; }
    else if (a === "eras") { P.eras(view); nav = "more"; }
    else if (a === "board") { era = 2; P.board(view); nav = "more"; }
    else if (a === "more") more(view);
    else { V.home(view); nav = "home"; }
    document.body.dataset.era = era;
    main.innerHTML = ""; main.appendChild(view);
    document.querySelectorAll("[data-nav]").forEach(function (l) { l.classList.toggle("on", l.dataset.nav === nav); if (l.dataset.nav === nav) l.setAttribute("aria-current", "page"); else l.removeAttribute("aria-current"); });
    U.celebrate("");
  }
  TS.render = render;

  let lastRoute = null;
  window.addEventListener("hashchange", function () {
    const r = (location.hash || "#/").split("?")[0];
    render();
    if (r !== lastRoute) window.scrollTo(0, 0);
    lastRoute = r;
  });

  st.visit();
  lastRoute = (location.hash || "#/").split("?")[0];
  render();

  // Returning after a break: a TV-style recap. Otherwise, maybe some breaking news.
  const s = st.state, away = s.prevVisit ? Date.now() - s.prevVisit : 0;
  setTimeout(function () {
    if (st.daysDone() && away > 30 * 60 * 1000) V.previouslyOn();
    else if (!location.hash || location.hash === "#/") P.randomEvent(false);
  }, 700);

  // Offline support (not available inside sandboxed previews)
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
