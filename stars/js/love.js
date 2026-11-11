/* Cielo 2.1 — relationships in depth (two-way synastry, dimensions, house overlays, composite chart and its cycles,
   couple questions, love profile, love test) and a horary engine that reads the question and weighs testimonies. */
(function () {
  "use strict";
  var R = window.Reading, fmt = R.fmt, cap = R.cap, nat = R.nat;
  var PERSONAL = ["sun", "moon", "mercury", "venus", "mars"], SLOWP = ["jupiter", "saturn", "uranus", "neptune", "pluto"], ALL = PERSONAL.concat(SLOWP);
  var SOFT = { sun: 1, moon: 1, mercury: 1, venus: 1, jupiter: 1 };
  var AK = { 0: "conj", 60: "sextile", 90: "square", 120: "trine", 180: "opp" };
  var DOMS = { sun: [4], moon: [3], mercury: [2, 5], venus: [1, 6], mars: [0, 7], jupiter: [8, 11], saturn: [9, 10] };
  var DAY = 86400000;
  function X(l) { return TXT[l] || TXT.es; }
  function U(l) { return I18N[l] || I18N.es; }
  function dlong(d, l) { return new Intl.DateTimeFormat(l, { day: "numeric", month: "long", year: "numeric" }).format(d); }
  function dshort(d, l) { return new Intl.DateTimeFormat(l, { day: "numeric", month: "short" }).format(d); }
  function names(keys, l) { return keys.map(function (k) { return X(l).planets[k].n; }).join(", "); }
  function el(lon) { return Sky.ELEMENT[Sky.signOf(lon) % 4]; }
  function strip(s) { return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }

  /* ---------- two-way synastry ---------- */
  function natureOf(key, a, b) {
    if (key === "trine" || key === "sextile") return "h";
    if (key === "square" || key === "opp") return "t";
    if ((SOFT[a] && SOFT[b]) || (a === "venus" && b === "mars") || (a === "mars" && b === "venus")) return "h";
    return "c";
  }
  var W = { sun: 3, moon: 3, venus: 2.6, mars: 2.3, asc: 2.2, mercury: 1.6, jupiter: 1.2, saturn: 1.6, uranus: 1.1, neptune: 1.1, pluto: 1.4 };
  function synAspects(me, other) {
    var out = [], k1 = ALL.concat(me.timeKnown ? ["asc"] : []), k2 = ALL.concat(other.timeKnown ? ["asc"] : []);
    k1.forEach(function (a) {
      k2.forEach(function (b) {
        var sa = SLOWP.indexOf(a) >= 0, sb = SLOWP.indexOf(b) >= 0;
        if ((sa && sb) || (a === "asc" && b === "asc")) return;
        var pa = me.points[a], pb = other.points[b]; if (!pa || !pb) return;
        var hit = Sky.findAspect(pa.lon, pb.lon, function (asp) {
          if (asp.key === "quincunx") return 0;
          var o = (sa || sb) ? { conj: 4, opp: 4, square: 3.5, trine: 3.5, sextile: 3 }[asp.key] : { conj: 6, opp: 6, square: 5, trine: 5, sextile: 4 }[asp.key];
          if (a === "asc" || b === "asc") o = Math.min(o, asp.key === "sextile" ? 3 : 4);
          if ((a === "sun" || a === "moon") && (b === "sun" || b === "moon")) o += 1;
          return o;
        });
        if (!hit) return;
        hit.a = a; hit.b = b; hit.nature = natureOf(hit.key, a, b); hit.weight = W[a] * W[b] * (1.2 - hit.orb / hit.max);
        out.push(hit);
      });
    });
    return out.sort(function (x, y) { return y.weight - x.weight; });
  }
  function pkey(a, b) { return ALL.indexOf(a) <= ALL.indexOf(b) ? a + "-" + b : b + "-" + a; }
  function synText(a, b, n, l) { // a = my point, b = their point
    var x = X(l), role = x.synRole, pa = PERSONAL.indexOf(a) >= 0, pb = PERSONAL.indexOf(b) >= 0;
    if (pa && pb) { var pr = x.synPairs[pkey(a, b)]; if (pr) return { topic: pr[0], text: n === "t" ? pr[2] : n === "h" ? pr[1] : pr[1] + " " + pr[2] }; }
    if (SLOWP.indexOf(a) >= 0 && role[b]) { var so = x.synOuter[a]; return { topic: fmt(so.mine[0], { their: role[b][1] }), text: n === "t" ? so.mine[2] : n === "h" ? so.mine[1] : so.mine[1] + " " + so.mine[2] }; }
    if (SLOWP.indexOf(b) >= 0 && role[a]) { var st = x.synOuter[b]; return { topic: fmt(st.theirs[0], { yours: role[a][0] }), text: n === "t" ? st.theirs[2] : n === "h" ? st.theirs[1] : st.theirs[1] + " " + st.theirs[2] }; }
    if (b === "asc" && x.synAsc.mine[a]) return { topic: x.synAsc.mine[a], text: x.synAsc.nature[n] };
    if (a === "asc" && x.synAsc.theirs[b]) return { topic: x.synAsc.theirs[b], text: x.synAsc.nature[n] };
    return { topic: cap(x.planets[a].role) + " · " + x.planets[b].role, text: x.syn.nature[n] };
  }

  /* ---------- dimensions of the relationship ---------- */
  var DIM = {
    attraction: [["venus", "mars"], ["mars", "mars"], ["venus", "pluto"], ["mars", "pluto"], ["sun", "mars"], ["venus", "venus"], ["asc", "venus"], ["asc", "mars"], ["venus", "uranus"], ["mars", "uranus"]],
    emotion: [["moon", "moon"], ["sun", "moon"], ["moon", "venus"], ["moon", "pluto"], ["moon", "neptune"], ["moon", "saturn"], ["moon", "mars"], ["moon", "jupiter"], ["moon", "asc"]],
    communication: [["mercury", "mercury"], ["mercury", "sun"], ["mercury", "moon"], ["mercury", "venus"], ["mercury", "mars"], ["mercury", "jupiter"], ["mercury", "saturn"], ["mercury", "uranus"], ["mercury", "asc"]],
    commitment: [["saturn", "sun"], ["saturn", "moon"], ["saturn", "venus"], ["saturn", "asc"], ["saturn", "mars"], ["saturn", "mercury"], ["sun", "moon"], ["venus", "jupiter"]],
    growth: [["jupiter", "sun"], ["jupiter", "moon"], ["jupiter", "venus"], ["jupiter", "mercury"], ["jupiter", "mars"], ["uranus", "sun"], ["uranus", "moon"], ["uranus", "venus"], ["sun", "sun"], ["neptune", "venus"], ["neptune", "sun"]]
  };
  function dims(asps) {
    var out = {};
    Object.keys(DIM).forEach(function (d) {
      var f = 0, t = 0;
      asps.forEach(function (a) {
        if (!DIM[d].some(function (p) { return (p[0] === a.a && p[1] === a.b) || (p[1] === a.a && p[0] === a.b); })) return;
        var s = 1.2 - a.orb / a.max;
        if (a.nature === "h") f += s; else if (a.nature === "t") t += s; else { f += 0.6 * s; t += 0.5 * s; }
      });
      var level = f >= 1.2 && t >= 1 ? "intense" : (f >= 0.9 && f >= t) ? "flow" : t >= 0.9 ? "challenge" : f >= 0.45 ? "flow" : "soft";
      out[d] = { f: f, t: t, level: level };
    });
    return out;
  }

  /* ---------- house overlays and the composite chart ---------- */
  function overlays(pl, house, keys) {
    if (!house.cusps) return null;
    return keys.filter(function (k) { return pl.points[k]; }).map(function (k) { return { k: k, house: Sky.houseOf(pl.points[k].lon, house.cusps) }; });
  }
  function overlayText(k, h, dir, l) {
    var x = X(l), key = k + "-" + h;
    if (dir === "theirs" && x.overlay.key[key]) return x.overlay.key[key];
    return fmt(x.overlay[dir], { P: x.planets[k].n, n: h, dom: dir === "theirs" ? x.houses[h - 1].dom : x.housesSu[h - 1] });
  }
  function midpoint(a, b) { return Sky.norm(a + Sky.diff(b, a) / 2); }
  function composite(c1, c2) {
    var pts = {}, out = { points: pts, timeKnown: !!(c1.timeKnown && c2.timeKnown) };
    ALL.concat(["node"]).forEach(function (k) { if (c1.points[k] && c2.points[k]) pts[k] = { lon: midpoint(c1.points[k].lon, c2.points[k].lon), speed: 0 }; });
    if (out.timeKnown) {
      pts.mc = { lon: midpoint(c1.points.mc.lon, c2.points.mc.lon), speed: 0 };
      pts.asc = { lon: midpoint(c1.points.asc.lon, c2.points.asc.lon), speed: 0 };
      if (Sky.norm(pts.asc.lon - pts.mc.lon) > 180) pts.asc.lon = Sky.norm(pts.asc.lon + 180); // keep the Ascendant east of the MC
      out.cusps = []; for (var i = 0; i < 12; i++) out.cusps.push(Sky.norm(pts.asc.lon + 30 * i));
      out.houseSystem = "equal";
      Object.keys(pts).forEach(function (k) { if (k !== "asc" && k !== "mc") pts[k].house = Sky.houseOf(pts[k].lon, out.cusps); });
    }
    out.aspects = Sky.natalAspects(pts, Object.keys(pts));
    return out;
  }
  function slowWindows(points, targets, now, areaFn, l, titleFn) { // slow transits to a set of points over the next 12 months
    var x = X(l), out = [], seen = {};
    ["jupiter", "saturn", "uranus", "neptune", "pluto"].forEach(function (tk) {
      var orb = tk === "jupiter" || tk === "saturn" ? 2 : 1.5;
      for (var dd = 0; dd <= 365; dd += 4) {
        var d = new Date(now.getTime() + dd * DAY), L = Sky.lon(tk, d);
        targets.forEach(function (nk) {
          if (points[nk] == null) return;
          [0, 60, 90, 120, 180].forEach(function (ang) {
            var id = tk + nk + ang; if (seen[id]) return;
            if (Math.abs(Sky.gapTo(L, points[nk], ang)) > orb) return;
            seen[id] = 1;
            var ak = AK[ang], n = nat(ak);
            out.push({ t: tk, n: nk, key: ak, nature: n, win: Sky.transitWindow(tk, points[nk], ang, orb, d), title: titleFn(tk, ak, nk),
              text: cap(fmt(x.transit.line[n], { brings: x.transit.brings[tk], area: areaFn(nk) })) + " " + x.transit.advice[tk][n] });
          });
        });
      }
    });
    return out.sort(function (a, b) { return ((a.win && a.win.start) || now) - ((b.win && b.win.start) || now); });
  }
  function couple(me, other, otherName, l, now) {
    var x = X(l), asps = synAspects(me, other), items = asps.slice(0, 14).map(function (a) {
      var t = synText(a.a, a.b, a.nature, l);
      return { a: a.a, b: a.b, key: a.key, nature: a.nature, orb: R.orb(a.orb), topic: t.topic, text: t.text,
        left: fmt(U(l).syn.yours, { p: x.planets[a.a].n }), right: fmt(U(l).syn.theirs, { p: x.planets[a.b].n, name: otherName }), asp: x.aspects[a.key].n };
    });
    var dm = dims(asps), comp = composite(me, other), pts = {};
    ["sun", "moon", "venus"].forEach(function (k) { if (comp.points[k]) pts[k] = comp.points[k].lon; });
    var talk = [];
    Object.keys(dm).forEach(function (d) {
      var hard = dm[d].level === "challenge" || dm[d].level === "intense", set = x.dims.q[d][hard ? "challenge" : "flow"];
      talk.push({ dim: d, q: set[0] }); if (hard) talk.push({ dim: d, q: set[1] });
    });
    return {
      items: items, all: asps, dims: dm,
      strengths: items.filter(function (i) { return i.nature === "h"; }).slice(0, 3), challenges: items.filter(function (i) { return i.nature === "t"; }).slice(0, 3),
      theirs: overlays(other, me, ALL), mine: overlays(me, other, ALL), comp: comp,
      compText: { sun: x.composite.sun[Sky.signOf(comp.points.sun.lon)], moon: x.composite.moon[Sky.signOf(comp.points.moon.lon)], venus: x.composite.venus[Sky.signOf(comp.points.venus.lon)] },
      timing: slowWindows(pts, ["sun", "moon", "venus"], now || new Date(), function (k) { return x.composite.areas[k]; }, l, function (tk, ak, nk) { return x.planets[tk].n + " " + x.aspects[ak].n + " " + x.planets[nk].n + (l === "es" ? " compuesto" : " (composite)"); }),
      talk: talk.slice(0, 7)
    };
  }

  /* ---------- love profile ---------- */
  function profile(c, l, now) {
    var x = X(l), L = x.loveUI, P = c.points, out = {};
    var venus = R.point(c, "venus", l), mars = R.point(c, "mars", l), moon = R.point(c, "moon", l);
    out.seek = [venus.title + " " + venus.deg + ". " + venus.signText];
    if (venus.dignity) out.seek.push(venus.dignity.text);
    if (c.timeKnown && c.cusps) {
      var dsc = Sky.norm(P.asc.lon + 180), s7 = Sky.signOf(c.cusps[6]), r7 = R.RULER[s7], rp = P[r7];
      out.partner = [x.dsc[Sky.signOf(dsc)], fmt(L.ruler7, { P: x.planets[r7].n, S: x.signs[Sky.signOf(rp.lon)].n, house: rp.house ? (l === "es" ? ", casa " : ", house ") + rp.house : "", dom: rp.house ? x.houses[rp.house - 1].dom : "" })];
      var in7 = ALL.filter(function (k) { return P[k] && P[k].house === 7; }), in5 = ALL.filter(function (k) { return P[k] && P[k].house === 5; });
      if (in7.length) out.partner.push(fmt(L.in7, { list: names(in7, l) }));
      if (in5.length) out.seek.push(fmt(L.in5, { list: names(in5, l) }));
      out.r7 = r7;
    }
    out.give = [moon.title + ". " + moon.signText]; if (venus.houseText) out.give.push(venus.houseText);
    out.desire = [mars.title + " " + mars.deg + ". " + mars.signText]; if (mars.houseText) out.desire.push(mars.houseText);
    var shadow = (c.aspects || []).filter(function (a) {
      var pers = a.a === "venus" || a.a === "mars" || a.a === "moon" || a.b === "venus" || a.b === "mars" || a.b === "moon";
      var heavy = ["saturn", "uranus", "neptune", "pluto"].indexOf(a.a) >= 0 || ["saturn", "uranus", "neptune", "pluto"].indexOf(a.b) >= 0;
      return pers && heavy && (a.key === "square" || a.key === "opp" || a.key === "conj");
    }).slice(0, 3).map(function (a) { var t = R.aspect(a, l); return t.title + ": " + t.text; });
    if (!shadow.length) shadow.push(L.noShadow);
    var lil = R.point(c, "lilith", l); if (lil) shadow.push(lil.title + ". " + lil.signText);
    out.shadow = shadow;
    out.care = L.careBy[el(P.venus.lon)];
    // windows for love: slow transits to Venus, the Descendant and the 7th ruler; Venus retrograde; eclipses
    now = now || new Date();
    var targets = { venus: P.venus.lon }; if (c.timeKnown) { targets.dsc = Sky.norm(P.asc.lon + 180); if (out.r7 && out.r7 !== "venus") targets.r7 = P[out.r7].lon; }
    out.windows = slowWindows(targets, Object.keys(targets), now, function (k) { return L.areas[k]; }, l, function (tk, ak, nk) { return x.planets[tk].n + " " + x.aspects[ak].n + " " + L.targets[nk]; });
    var extra = [], prev = Sky.speed("venus", now) < 0, start = null;
    if (prev) { start = now; for (var bk = 1; bk <= 60 && Sky.speed("venus", new Date(now.getTime() - bk * DAY)) < 0; bk++) start = new Date(now.getTime() - bk * DAY); }
    for (var dd = 1; dd <= 365; dd++) {
      var d = new Date(now.getTime() + dd * DAY), r = Sky.speed("venus", d) < 0;
      if (r && !prev) start = d;
      if (!r && prev && start) { extra.push(fmt(L.venusRetro, { a: dshort(start, l), b: dshort(d, l) })); start = null; }
      prev = r;
    }
    if (c.cusps) Sky.eclipses(now, new Date(now.getTime() + 365 * DAY)).forEach(function (e) {
      var h = Sky.houseOf(e.lon, c.cusps);
      if (h === 5 || h === 7 || h === 1 || Sky.sep(e.lon, P.venus.lon) <= 5) extra.push(fmt(L.eclipse, { d: dlong(e.date, l), n: h, dom: x.houses[h - 1].dom }));
    });
    out.extra = extra;
    return out;
  }

  /* ---------- love test ---------- */
  function loveAnswer(c, qi, choice, l) {
    var x = X(l), T = x.loveTest, q = T.qs[qi], P = c.points;
    var key = q.p === "dsc" && !c.timeKnown ? "venus" : q.p;
    var lon = key === "dsc" ? Sky.norm(P.asc.lon + 180) : P[key].lon, s = Sky.signOf(lon), e = el(lon);
    var pname = key === "dsc" ? T.p.dsc : x.planets[key].n, E = function (k) { return x.elements[k].n.toLowerCase(); };
    if (e === choice) return { match: true, text: fmt(T.match, { P: pname, S: x.signs[s].n, E: E(e) }) };
    var alt = ["sun", "moon", "venus", "mars", "asc", "mercury"].filter(function (k) { return P[k] && k !== key && el(P[k].lon) === choice; })[0];
    if (alt) return { match: false, text: fmt(T.other, { P: pname, S: x.signs[s].n, E: E(e), E2: E(choice), P2: x.planets[alt].n, S2: x.signs[Sky.signOf(P[alt].lon)].n }) };
    return { match: false, text: fmt(T.none, { P: pname, S: x.signs[s].n, E: E(e), E2: E(choice) }) };
  }

  /* ---------- horary that reads the question ---------- */
  function detectCat(q, l) {
    var kw = X(l).horary2.kw, s = " " + strip(q) + " ", best = null, bn = 0;
    Object.keys(kw).forEach(function (c) { var n = 0; kw[c].forEach(function (w) { if (s.indexOf(strip(w)) >= 0) n += c === "contact" ? 0.5 : 1; }); if (n > bn) { bn = n; best = c; } });
    if (!best && detectType(q, l) === "feel") best = "love"; // questions about someone's feelings belong to the 7th house
    return best;
  }
  function detectType(q, l) {
    var rx = X(l).horary2.rx, s = strip(q);
    function t(p) { return new RegExp(strip(p)).test(s); }
    return t(rx.feel) ? "feel" : t(rx.when) ? "when" : t(rx.should) ? "should" : "yesno";
  }
  function horary(at, place, cat, q, l) {
    var x = X(l), H = x.horary2, Hb = x.horary, c = Sky.castAt(at, place.lat, place.lng, { houseSystem: "regio" }), P = c.points;
    var ascS = Sky.signOf(P.asc.lon), ascD = Sky.degIn(P.asc.lon), qh = Hb.cats[cat].h, qS = Sky.signOf(c.cusps[qh - 1]);
    var A = R.RULER[ascS], B = R.RULER[qS], type = detectType(q, l), pro = [], con = [], score = 0, all = [];
    function pa(k) { return (x.art && x.art[k]) || x.planets[k].n; }
    function sn(k) { return x.signs[Sky.signOf(P[k].lon)].n; }
    function add(w, t) { (w >= 0 ? pro : con).push(cap(t)); score += w; all.push({ w: w, t: cap(t) }); }
    var ing = Sky.nextIngress("moon", at, 3), until = ing ? (ing.date - at) / DAY : 2.6, since = Sky.lastIngress("moon", at, 3), back = since ? (at - since) / DAY : 2.6;
    var moonNext = [];
    ["sun", "mercury", "venus", "mars", "jupiter", "saturn"].forEach(function (k) { var na = Sky.nextAspect("moon", k, at, until); if (na) moonNext.push({ k: k, angle: na.angle, date: na.date }); });
    moonNext.sort(function (p, r) { return p.date - r.date; });
    var voidMoon = !moonNext.length, perfect = null, late = false, refrain = null, help = false;
    if (A !== B) {
      var slow = !(A === "moon" || B === "moon"), maxD = slow ? 240 : 30, pf = Sky.nextAspect(A, B, at, maxD);
      if (pf) {
        var iA = Sky.nextIngress(A, at, maxD), iB = Sky.nextIngress(B, at, maxD);
        late = !!((iA && iA.date < pf.date) || (iB && iB.date < pf.date));
        [A, B].forEach(function (k) { if (!refrain && k !== "sun" && k !== "moon" && (Sky.speed(k, at) < 0) !== (Sky.speed(k, pf.date) < 0)) refrain = k; });
        perfect = { a: A, b: B, angle: pf.angle, date: pf.date };
      }
      var mB = moonNext.filter(function (m) { return m.k === B; })[0];
      if ((!perfect || late) && mB && B !== "moon") { perfect = { a: "moon", b: B, angle: mB.angle, date: mB.date }; late = false; refrain = null; }
      if (!perfect) [[A, B], [B, A]].forEach(function (pair) {
        if (help) return;
        var la = pair[0] !== "moon" ? Sky.lastAspect("moon", pair[0], at, back) : null, nb = moonNext.filter(function (m) { return m.k === pair[1]; })[0];
        if (la && nb) help = true;
      });
    }
    var hard = false;
    if (perfect) {
      var ak = AK[perfect.angle], soft = ak === "trine" || ak === "sextile" || ak === "conj";
      hard = !soft;
      add(late ? 0.5 : soft ? 3 : 1.6, fmt(soft ? H.t.perfect : H.t.perfectHard, { A: pa(perfect.a), B: pa(perfect.b), asp: Hb.aspA[ak], date: dlong(perfect.date, l) }));
      if (late) add(-0.8, H.t.late);
      if (refrain) add(-2.2, fmt(H.t.refrain, { P: pa(refrain) }));
    } else if (help) add(1.6, fmt(H.t.translation, { A: pa(A), B: pa(B) }));
    else if (A !== B) add(-2, fmt(H.t.none, { A: pa(A), B: pa(B) }));
    var dn = x.dignity.names, dB = R.dignity(B, Sky.signOf(P[B].lon)), dA = R.dignity(A, Sky.signOf(P[A].lon));
    if (dB === "domicile" || dB === "exaltation") add(1, fmt(H.t.digGood, { P: pa(B), S: sn(B), d: dn[dB].toLowerCase() }));
    if (dB === "detriment" || dB === "fall") add(-1, fmt(H.t.digBad, { P: pa(B), S: sn(B), d: dn[dB].toLowerCase() }));
    if (A !== B && (dA === "domicile" || dA === "exaltation")) add(0.6, fmt(H.t.youGood, { P: pa(A), S: sn(A) }));
    if (A !== B && (dA === "detriment" || dA === "fall")) add(-0.6, fmt(H.t.youBad, { P: pa(A), S: sn(A) }));
    var hB = P[B].house;
    if ([1, 4, 7, 10].indexOf(hB) >= 0) add(0.6, fmt(H.t.angular, { P: pa(B) })); else if ([3, 6, 9, 12].indexOf(hB) >= 0) add(-0.5, fmt(H.t.cadent, { P: pa(B) }));
    if (B !== "sun" && B !== "moon" && P[B].retro) add(-1, fmt(H.t.retro, { P: pa(B) }));
    if (A !== B && A !== "sun" && A !== "moon" && P[A].retro) add(-0.5, fmt(H.t.retro, { P: pa(A) }));
    [B, A].forEach(function (k, i) {
      if (k === "sun" || (i === 1 && A === B)) return;
      var sp = Sky.sep(P[k].lon, P.sun.lon);
      if (sp <= 17 / 60) add(1, fmt(H.t.cazimi, { P: pa(k) })); else if (sp <= 8.5) add(i ? -0.5 : -1, fmt(H.t.combust, { P: pa(k) }));
    });
    if (voidMoon) add(-1.5, H.t.voidMoon);
    else {
      var mn = moonNext[0], mk = AK[mn.angle], ben = mn.k === "venus" || mn.k === "jupiter", mal = mn.k === "mars" || mn.k === "saturn";
      if (ben || (!mal && (mk === "trine" || mk === "sextile"))) add(ben ? 1 : 0.4, fmt(H.t.moonGood, { asp: Hb.aspA[mk], B: pa(mn.k) }));
      else if (mal && mk !== "trine" && mk !== "sextile") add(-1, fmt(H.t.moonBad, { asp: Hb.aspA[mk], B: pa(mn.k) }));
      else if (mk === "square" || mk === "opp") add(-0.4, fmt(H.t.moonBad, { asp: Hb.aspA[mk], B: pa(mn.k) }));
    }
    ["venus", "jupiter"].forEach(function (k) { if (k !== B && P[k].house === qh) add(0.8, fmt(H.t.benefic, { P: pa(k), n: qh })); });
    ["mars", "saturn"].forEach(function (k) { if (k !== B && P[k].house === qh) add(-0.8, fmt(H.t.malefic, { P: pa(k), n: qh })); });
    if (P.fortune.house === qh || Sky.sep(P.fortune.lon, P[B].lon) <= 5) add(0.5, H.t.fortune);
    if (A !== B && DOMS[A] && DOMS[B] && DOMS[A].indexOf(Sky.signOf(P[B].lon)) >= 0 && DOMS[B].indexOf(Sky.signOf(P[A].lon)) >= 0) add(1, fmt(H.t.reception, { A: pa(A), B: pa(B) }));
    var level = score >= 3.5 ? "vhigh" : score >= 1.5 ? "high" : score > -1 ? "mid" : score > -3 ? "low" : "vlow";
    var group = level === "vhigh" || level === "high" ? "pos" : level === "mid" ? "mid" : "neg";
    var special = ascD < 3 ? "early" : ascD >= 27 ? "lateAsc" : null;
    var res = { chart: c, A: A, B: B, qh: qh, cat: cat, type: type, pro: pro, con: con, score: score, level: level, group: group, special: special,
      verdict: H.levels[level] + (hard && group === "pos" ? H.hard : ""), timing: perfect && !refrain && !late ? perfect.date : null,
      positive: special ? null : group === "pos" ? true : group === "neg" ? false : null, advice: H.advice[cat][group], should: type === "should" ? H.should[group] : null };
    if (special) res.specialText = fmt(special === "early" ? Hb.early : Hb.lateAsc, { d: Math.floor(ascD) });
    all.sort(function (p, r) { return Math.abs(r.w) - Math.abs(p.w); });
    res.main = all.length ? all[0].t : "";
    res.sigs = [cap(fmt(Hb.you, { P: pa(A), S: x.signs[ascS].n, S2: sn(A), n: P[A].house, S3: sn("moon") })),
      A === B ? fmt(Hb.same, { P: pa(A) }) : fmt(Hb.quesited, { h: qh, dom: x.houses[qh - 1].dom, Q: pa(B), S: sn(B), n: P[B].house })];
    if (type === "feel") {
      var sB = Sky.signOf(P[B].lon), extra = (P[B].retro ? H.feelRetro : "") + (dB === "detriment" || dB === "fall" ? H.feelWeak : dB ? H.feelStrong : "");
      var rel = perfect && perfect.b === B ? AK[perfect.angle] : null;
      if (!rel && A !== B) { var now = Sky.findAspect(P[B].lon, P[A].lon, function (asp) { return asp.key === "quincunx" ? 0 : 6; }); if (now) rel = now.key; }
      res.feel = { state: fmt(H.feelState, { P: pa(B), S: x.signs[sB].n, n: P[B].house, desc: H.desc[sB] }) + extra, toYou: H.feelAsp[rel || "none"],
        rec: A !== B && DOMS[B] && DOMS[B].indexOf(Sky.signOf(P[A].lon)) >= 0 ? H.feelRec : "" };
    }
    if (type === "when") {
      if (perfect && !refrain) {
        var dg = Math.abs(Sky.sep(P[perfect.a].lon, P[perfect.b].lon) - perfect.angle), mode = Sky.MODE[Sky.signOf(P[perfect.a].lon) % 3];
        var unit = mode === "cardinal" ? "days" : mode === "mutable" ? "weeks" : "months";
        res.when = [fmt(H.whenDate, { date: dlong(perfect.date, l) }), fmt(H.whenSym, { deg: dg.toFixed(1).replace(".", l === "es" ? "," : "."), mode: H.modes[mode], n: Math.max(1, Math.round(dg)), unit: H.units[unit] })];
      } else res.when = [H.whenNone];
    }
    return res;
  }
  function promptHorary(qr, res, l) {
    var x = X(l), H = x.horary2, P = res.chart.points, es = l === "es";
    var pos = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", "node", "fortune", "asc", "mc"].filter(function (k) { return P[k]; }).map(function (k) {
      return "- " + x.planets[k].n + " " + R.deg(P[k].lon) + " " + x.signs[Sky.signOf(P[k].lon)].n + (P[k].house ? " · " + (es ? "casa " : "house ") + P[k].house : "") + (P[k].retro ? " · R" : "");
    });
    var cusps = res.chart.cusps.map(function (cu, i) { return (i + 1) + ": " + R.deg(cu) + " " + x.signs[Sky.signOf(cu)].n; }).join(" · ");
    return [H.promptIntro, "", (es ? "Pregunta: " : "Question: ") + (qr.q || x.horary.cats[qr.cat].n) + " (" + x.horary.cats[qr.cat].n + ")",
      (es ? "Momento: " : "Moment: ") + new Date(qr.at).toISOString().slice(0, 16).replace("T", " ") + " UTC · " + Places.label(qr.place, l) + " (" + qr.place.lat.toFixed(2) + ", " + qr.place.lng.toFixed(2) + ")",
      "", (es ? "Carta horaria:" : "Horary chart:")].concat(pos).concat([(es ? "Cúspides: " : "Cusps: ") + cusps, "", res.sigs.join(" ")])
      .concat(["", H.pro + ": " + (res.pro.join(" | ") || "—"), H.con + ": " + (res.con.join(" | ") || "—"), (es ? "Lectura de la app: " : "The app’s reading: ") + res.verdict, "", H.promptClose]).join("\n");
  }
  function promptCouple(me, b1, other, b2, cp, name2, q, l) {
    var base = R.promptSyn(b1, me, b2, other, { all: cp.all }, name2, q, l), x = X(l), es = l === "es";
    var comp = ["sun", "moon", "venus", "mars"].map(function (k) { return x.planets[k].n + " " + R.deg(cp.comp.points[k].lon) + " " + x.signs[Sky.signOf(cp.comp.points[k].lon)].n; }).join(", ");
    var dimTxt = Object.keys(cp.dims).map(function (d) { return x.dims.names[d] + ": " + cp.dims[d].level; }).join(", ");
    return base.replace(/\n\n([^\n]*)$/, "\n\n" + (es ? "Carta compuesta (puntos medios): " : "Composite chart (midpoints): ") + comp + "\n" + (es ? "Dimensiones calculadas: " : "Computed dimensions: ") + dimTxt + "\n\n$1");
  }

  /* ---------- quiz: more variety, fewer repeats ---------- */
  var baseQuiz = R.quiz;
  R.quiz = function (c, l, ctx) {
    var qs = baseQuiz(c, l), x = X(l), u = U(l).quizUI, signs = x.signs.map(function (s) { return s.n; }), extra = [];
    function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
    function opts(right, pool) { var o = shuffle(shuffle(pool.filter(function (p) { return p !== right; })).slice(0, 3).concat([right])); return { opts: o, right: o.indexOf(right) }; }
    ctx = ctx || {};
    var now = ctx.now || new Date(), ms = Sky.signOf(Sky.lon("moon", now)), mo = opts(signs[ms], signs);
    extra.push({ q: u.q_todayMoon, opts: mo.opts, right: mo.right, ex: fmt(u.ex_todayMoon, { S: signs[ms] }) });
    var retro = ["mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"].filter(function (k) { return Sky.speed(k, now) < 0; }).map(function (k) { return x.planets[k].n; });
    var direct = ["mercury", "venus", "mars", "jupiter", "saturn"].filter(function (k) { return Sky.speed(k, now) >= 0; }).map(function (k) { return x.planets[k].n; });
    var rRight = retro.length ? retro[0] : u.noneRetro, ro = opts(rRight, direct.concat([u.noneRetro]));
    extra.push({ q: u.q_retroNow, opts: ro.opts, right: ro.right, ex: fmt(u.ex_retroNow, { list: retro.length ? retro.join(", ") : u.noneRetro }) });
    (ctx.people || []).slice(0, 2).forEach(function (p) {
      var ps = Sky.signOf(p.chart.points.sun.lon), po = opts(signs[ps], signs);
      extra.push({ q: fmt(u.q_partnerSun, { name: p.name }), opts: po.opts, right: po.right, ex: fmt(u.ex_partnerSun, { name: p.name, S: signs[ps] }) });
      if (ctx.me) {
        var top = synAspects(ctx.me, p.chart)[0];
        if (top) {
          var label = function (a) { return fmt(U(l).syn.yours, { p: x.planets[a.a].n }) + " · " + x.aspects[a.key].n + " · " + fmt(U(l).syn.theirs, { p: x.planets[a.b].n, name: p.name }); };
          var pool = synAspects(ctx.me, p.chart).slice(1, 8).map(label).filter(function (t, i, arr) { return arr.indexOf(t) === i; });
          var so = opts(label(top), pool.length >= 3 ? pool : pool.concat(["—"]));
          extra.push({ q: fmt(u.q_synTop, { name: p.name }), opts: so.opts, right: so.right, ex: fmt(u.ex_synTop, { t: cap(label(top)) }) });
        }
      }
    });
    var seen = ctx.seen || [], all = shuffle(qs.concat(extra));
    all.sort(function (a, b) { return (seen.indexOf(a.q) >= 0) - (seen.indexOf(b.q) >= 0); });
    return all.slice(0, 8);
  };

  Object.assign(R, { synAspects: synAspects, synText: synText, coupleDims: dims, composite: composite, couple: couple, overlayText: overlayText, loveProfile: profile, loveAnswer: loveAnswer,
    horary2: horary, detectCat: detectCat, detectType: detectType, promptHorary: promptHorary, promptCouple: promptCouple });
})();
