/* Cielo — SVG chart wheel and moon-phase drawing. */
(function () {
  var D2R = Math.PI / 180;
  function n360(x) { x %= 360; return x < 0 ? x + 360 : x; }
  function r2(n) { return Math.round(n * 100) / 100; }
  function pt(r, a) { return [r2(200 + r * Math.cos(a * D2R)), r2(200 - r * Math.sin(a * D2R))]; }
  var BODIES = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", "node"];
  var SIGNS = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];

  // Spread glyphs so none overlap while keeping their order around the circle.
  function spread(items, gap) {
    var a = items.slice().sort(function (x, y) { return x.lon - y.lon; });
    a.forEach(function (x) { x.dl = x.lon; });
    if (a.length < 2) return a;
    for (var it = 0; it < 60; it++) {
      var moved = false;
      for (var i = 0; i < a.length; i++) {
        var p = a[i], q = a[(i + 1) % a.length], g = n360(q.dl - p.dl);
        if (g < gap) { var push = (gap - g) / 2 + 0.01; p.dl = n360(p.dl - push); q.dl = n360(q.dl + push); moved = true; }
      }
      if (!moved) break;
    }
    return a;
  }

  function svg(chart, opts) {
    opts = opts || {};
    var P = chart.points, known = chart.timeKnown && chart.cusps;
    var base = known ? P.asc.lon : 0;
    function ang(lon) { return 180 + (lon - base); }
    var o = [];
    o.push('<svg class="wheel" viewBox="-18 -18 436 436" role="img" aria-label="' + (opts.label || "") + '">');
    // rings
    o.push('<circle class="w-ring" cx="200" cy="200" r="196"/><circle class="w-ring" cx="200" cy="200" r="166"/><circle class="w-ring w-soft" cx="200" cy="200" r="112"/><circle class="w-ring" cx="200" cy="200" r="92"/>');
    // sign segments and glyphs
    for (var s = 0; s < 12; s++) {
      var a0 = ang(s * 30), a1 = ang(s * 30 + 30), p0 = pt(196, a0), p1 = pt(166, a0);
      o.push('<line class="w-line" x1="' + p0[0] + '" y1="' + p0[1] + '" x2="' + p1[0] + '" y2="' + p1[1] + '"/>');
      if (s % 2 === 0) {
        var q0 = pt(196, a0), q1 = pt(196, a1), q2 = pt(166, a1), q3 = pt(166, a0);
        o.push('<path class="w-seg" d="M' + q0 + "A196 196 0 0 0 " + q1 + "L" + q2 + "A166 166 0 0 1 " + q3 + 'Z"/>');
      }
      var g = pt(181, ang(s * 30 + 15));
      o.push('<use class="w-sign el-' + ["fire", "earth", "air", "water"][s % 4] + '" href="#g-' + SIGNS[s] + '" x="' + r2(g[0] - 8.5) + '" y="' + r2(g[1] - 8.5) + '" width="17" height="17"/>');
    }
    // degree ticks
    for (var d = 0; d < 360; d += 5) {
      var len = d % 10 === 0 ? 6 : 3.5, t0 = pt(166, ang(d)), t1 = pt(166 - len, ang(d));
      o.push('<line class="w-tick" x1="' + t0[0] + '" y1="' + t0[1] + '" x2="' + t1[0] + '" y2="' + t1[1] + '"/>');
    }
    // houses
    if (known) {
      chart.cusps.forEach(function (c, i) {
        var axis = i === 0 || i === 3 || i === 6 || i === 9;
        var c0 = pt(axis ? 204 : 166, ang(c)), c1 = pt(92, ang(c));
        o.push('<line class="' + (axis ? "w-axis" : "w-cusp") + '" x1="' + c0[0] + '" y1="' + c0[1] + '" x2="' + c1[0] + '" y2="' + c1[1] + '"/>');
        var next = chart.cusps[(i + 1) % 12], mid = c + n360(next - c) / 2, h = pt(102, ang(mid));
        o.push('<text class="w-hnum" x="' + h[0] + '" y="' + h[1] + '">' + (i + 1) + "</text>");
      });
      [["AC", P.asc.lon], ["MC", P.mc.lon], ["DC", P.asc.lon + 180], ["IC", P.mc.lon + 180]].forEach(function (x) {
        var l = pt(211, ang(x[1]));
        o.push('<text class="w-axl" x="' + l[0] + '" y="' + l[1] + '">' + x[0] + "</text>");
      });
    }
    // aspects
    var on = {};
    (opts.aspects !== false ? chart.aspects || [] : []).forEach(function (x) {
      if (x.key === "conj") return;
      if (!P[x.a] || !P[x.b] || x.a === "node" || x.b === "node") return;
      var a = pt(92, ang(P[x.a].lon)), b = pt(92, ang(P[x.b].lon));
      var cls = x.key === "trine" || x.key === "sextile" ? "w-flow" : x.key === "quincunx" ? "w-minor" : "w-tense";
      var op = r2(0.35 + 0.6 * (1 - x.orb / x.max));
      o.push('<line class="w-asp ' + cls + '" data-a="' + x.a + '" data-b="' + x.b + '" x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] + '" style="opacity:' + op + '"/>');
      on[x.a] = on[x.b] = 1;
    });
    // planets
    var items = BODIES.filter(function (k) { return P[k]; }).map(function (k) { return { key: k, lon: P[k].lon }; });
    spread(items, 9.5).forEach(function (x) {
      var real = ang(x.lon), shown = ang(x.dl), m0 = pt(166, real), m1 = pt(160, real), gp = pt(146, shown), dp = pt(126, shown), dot = pt(92, real);
      var deg = Math.floor(n360(x.lon) % 30);
      o.push('<g class="wp" data-pt="' + x.key + '" tabindex="0" role="button" aria-label="' + (opts.names ? opts.names[x.key] : x.key) + '">');
      o.push('<line class="w-mark" x1="' + m0[0] + '" y1="' + m0[1] + '" x2="' + m1[0] + '" y2="' + m1[1] + '"/>');
      if (Math.abs(x.dl - x.lon) > 0.5) { var l0 = pt(159, real), l1 = pt(155, shown); o.push('<line class="w-lead" x1="' + l0[0] + '" y1="' + l0[1] + '" x2="' + l1[0] + '" y2="' + l1[1] + '"/>'); }
      o.push('<circle class="w-hit" cx="' + gp[0] + '" cy="' + gp[1] + '" r="13"/>');
      o.push('<use class="w-planet" href="#g-' + x.key + '" x="' + r2(gp[0] - 9.5) + '" y="' + r2(gp[1] - 9.5) + '" width="19" height="19"/>');
      o.push('<text class="w-deg" x="' + dp[0] + '" y="' + dp[1] + '">' + deg + "°" + (P[x.key].retro ? '<tspan class="w-rx">R</tspan>' : "") + "</text>");
      if (on[x.key]) o.push('<circle class="w-dot" cx="' + dot[0] + '" cy="' + dot[1] + '" r="2"/>');
      o.push("</g>");
    });
    o.push('<circle class="w-core" cx="200" cy="200" r="3"/>');
    o.push("</svg>");
    return o.join("");
  }

  // Moon disc: k = illuminated fraction, waxing = lit on the right (northern-hemisphere view).
  function moon(k, waxing, cls) {
    var r = 20, rx = r2(Math.abs(1 - 2 * k) * r);
    var s1 = waxing ? 1 : 0, s2 = waxing ? (k < 0.5 ? 0 : 1) : (k < 0.5 ? 1 : 0);
    var lit = k < 0.01 ? "" : k > 0.99 ? '<circle class="m-lit" r="20"/>' : '<path class="m-lit" d="M0 -20A20 20 0 0 ' + s1 + ' 0 20A' + rx + ' 20 0 0 ' + s2 + ' 0 -20Z"/>';
    return '<svg class="moon ' + (cls || "") + '" viewBox="-23 -23 46 46" aria-hidden="true"><circle class="m-dark" r="20"/>' + lit + '<circle class="m-ring" r="20"/></svg>';
  }

  window.Wheel = { svg: svg, moon: moon };
})();
