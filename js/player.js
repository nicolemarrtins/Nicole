/* Lesson player behaviour: the one-word-at-a-time vocabulary carousel.
   “Continue” and “←” (and swipes, which click them) move between words first, then between steps. */
window.TAW = window.TAW || {};
(function () {
  const reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  function carousel() { return document.querySelector("[data-vcar]"); }
  function index(c) { const on = c.querySelector(".vslide.on"); return on ? +on.getAttribute("data-i") : 0; }
  function label(c) {
    const next = document.querySelector(".p-foot .p-next"); if (!next) return;
    if (!next.hasAttribute("data-final")) next.setAttribute("data-final", next.textContent);
    next.textContent = index(c) < +c.getAttribute("data-n") - 1 ? "Next word →" : next.getAttribute("data-final");
  }
  function show(c, i) {
    const n = +c.getAttribute("data-n"), from = index(c);
    i = Math.max(0, Math.min(n - 1, i));
    if (i === from) return;
    c.querySelectorAll(".vslide").forEach(function (s) {
      const on = +s.getAttribute("data-i") === i;
      s.classList.toggle("on", on);
      s.classList.remove("from-left", "from-right");
      if (on && !reduceMotion) { void s.offsetWidth; s.classList.add(i > from ? "from-right" : "from-left"); }
    });
    c.querySelectorAll(".vdot").forEach(function (d, k) { d.classList.toggle("on", k === i); });
    c.querySelector(".vcar-count b").textContent = i + 1;
    label(c);
    const top = c.getBoundingClientRect().top + window.scrollY - 80;
    if (window.scrollY > top) window.scrollTo({ top: top, behavior: reduceMotion ? "auto" : "smooth" });
  }
  /* capture phase: runs before the app’s own click handler, so a word change doesn’t count as finishing the step */
  document.addEventListener("click", function (e) {
    const c = carousel(); if (!c) return;
    const dot = e.target.closest("[data-vgo]");
    if (dot) { e.preventDefault(); show(c, +dot.getAttribute("data-vgo")); return; }
    const fwd = e.target.closest(".p-foot .p-next"), back = e.target.closest(".p-foot .p-back");
    const i = index(c), n = +c.getAttribute("data-n");
    if ((fwd && i < n - 1) || (back && i > 0)) {
      e.preventDefault(); e.stopPropagation();
      document.getElementById("main").classList.remove("swipe-next", "swipe-prev");
      show(c, fwd ? i + 1 : i - 1);
    }
  }, true);
  function afterRender() {
    const c = carousel(); if (c) label(c);
  }
  TAW.player = { afterRender: afterRender };
})();
