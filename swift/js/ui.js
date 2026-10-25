/* Shared UI helpers: escaping, bars, stars, toasts, modals, celebrations. */
window.TS = window.TS || {};
(function () {
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]; }); }
  function nl(s) { return esc(s).replace(/\n/g, "<br>"); }
  function stars(n) { return "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n); }
  function textBar(p) { const n = Math.round(p / 10); return "█".repeat(n) + "░".repeat(10 - n); }
  function meter(p, cls) { return '<span class="meter ' + (cls || "") + '" role="img" aria-label="' + Math.round(p) + '%"><span style="width:' + Math.max(0, Math.min(100, p)) + '%"></span></span>'; }

  function toast(msg, ms) {
    const t = document.getElementById("toast");
    t.innerHTML = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, ms || 3200);
  }

  let modalClose = null;
  function modal(html, opts) {
    opts = opts || {};
    const m = document.getElementById("modal");
    m.innerHTML = '<div class="modal-back" data-close></div><div class="modal-card ' + (opts.cls || "") + '" role="dialog" aria-modal="true">' +
      '<button class="modal-x" data-close aria-label="Close">×</button>' + html + "</div>";
    m.hidden = false; document.body.classList.add("modal-open");
    m.querySelectorAll("[data-close]").forEach(function (b) { b.addEventListener("click", closeModal); });
    const f = m.querySelector("button:not(.modal-x), input, textarea"); if (f) setTimeout(function () { f.focus({ preventScroll: true }); }, 30);
    modalClose = opts.onClose || null;
    return m.querySelector(".modal-card");
  }
  function closeModal() {
    const m = document.getElementById("modal");
    if (m.hidden) return;
    m.hidden = true; m.innerHTML = ""; document.body.classList.remove("modal-open");
    const fn = modalClose; modalClose = null; if (fn) fn();
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  /* Confetti on a canvas: one orchestrated moment per celebration. */
  function confetti(n) {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = document.createElement("canvas"); c.className = "confetti"; document.body.appendChild(c);
    const ctx = c.getContext("2d"), W = c.width = innerWidth * devicePixelRatio, H = c.height = innerHeight * devicePixelRatio;
    const cols = ["#B3122E", "#E9C46A", "#F4A6C1", "#7FB3E0", "#8E6BBF", "#FFFFFF", "#2B2B2B"];
    const ps = []; for (let i = 0; i < (n || 140); i++) ps.push({ x: Math.random() * W, y: -Math.random() * H * 0.5, vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 4, r: 4 + Math.random() * 6, a: Math.random() * 6, c: cols[i % cols.length], t: i % 13 === 0 });
    let f = 0;
    (function tick() {
      ctx.clearRect(0, 0, W, H);
      ps.forEach(function (p) {
        p.x += p.vx * devicePixelRatio; p.y += p.vy * devicePixelRatio; p.a += 0.08;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c;
        if (p.t) { ctx.font = (14 * devicePixelRatio) + "px serif"; ctx.fillText("13", 0, 0); } else ctx.fillRect(-p.r, -p.r / 3, p.r * 2, p.r / 1.5);
        ctx.restore();
      });
      if (++f < 200) requestAnimationFrame(tick); else c.remove();
    })();
  }

  /* After any scoring action: show stat gains + newly unlocked achievements. */
  function celebrate(msg) {
    const fresh = TS.store.checkAchievements();
    if (msg) toast(msg);
    if (fresh.length) {
      setTimeout(function () {
        toast(fresh.map(function (a) { return "<b>" + esc(a[1]) + "</b><br>" + esc(a[2]); }).join("<br><br>"), 5200);
        confetti(90);
      }, msg ? 1600 : 0);
    }
  }

  function copy(text, btn) {
    const done = function () { toast("Copied."); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done).catch(function () { fallback(); });
    else fallback();
    function fallback() { const t = document.createElement("textarea"); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); done(); } catch (e) { toast("Select the text and copy it manually."); } t.remove(); }
  }

  function go(hash) { if (location.hash === hash) TS.render(); else location.hash = hash; }

  TS.ui = { esc: esc, nl: nl, stars: stars, textBar: textBar, meter: meter, toast: toast, modal: modal, closeModal: closeModal, confetti: confetti, celebrate: celebrate, copy: copy, go: go };
  TS.toast = toast;
})();
