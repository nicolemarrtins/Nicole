/* Cielo 2 — deeper readings: pair-specific aspects, dignities, configurations, the chart ruler, timing (profection,
   progressions, solar return, the year's big transits), horary judgement, the quiz and the blind test. */
(function () {
  "use strict";
  var R = window.Reading, fmt = R.fmt, cap = R.cap, nat = R.nat;
  var ORDER = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
  var SOFT = { sun: 1, moon: 1, mercury: 1, venus: 1, jupiter: 1 };
  var RULER = ["mars", "venus", "mercury", "moon", "sun", "mercury", "venus", "mars", "jupiter", "saturn", "saturn", "jupiter"];
  var MODERN = { 7: "pluto", 10: "uranus", 11: "neptune" };
  var DOM = { sun: [4], moon: [3], mercury: [2, 5], venus: [1, 6], mars: [0, 7], jupiter: [8, 11], saturn: [9, 10] };
  var EXA = { sun: 0, moon: 1, mercury: 5, venus: 11, mars: 9, jupiter: 3, saturn: 6 };
  var DAY = 86400000;
  function X(l) { return TXT[l] || TXT.es; }
  function U(l) { return I18N[l] || I18N.es; }
  function names(keys, l) { return keys.map(function (k) { return X(l).planets[k].n; }).join(", "); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function dshort(d, l) { return new Intl.DateTimeFormat(l, { day: "numeric", month: "short", year: "numeric" }).format(d); }
  function dlong(d, l) { return new Intl.DateTimeFormat(l, { day: "numeric", month: "long", year: "numeric" }).format(d); }

  /* ---------- aspects with pair-specific meaning ---------- */
  var baseAspect = R.aspect;
  R.aspect = function (x, l) {
    var out = baseAspect(x, l), T = X(l), n = nat(x.key), ia = ORDER.indexOf(x.a), ib = ORDER.indexOf(x.b);
    if (ia >= 0 && ib >= 0 && T.pairs) {
      var pr = T.pairs[ia < ib ? x.a + "-" + x.b : x.b + "-" + x.a];
      if (pr) out.text = pr[0] + " " + ((x.key === "conj" ? SOFT[x.a] && SOFT[x.b] : n === "h") ? pr[1] : pr[2]);
    } else if (T.angleAsp && (x.a === "asc" || x.a === "mc" || x.b === "asc" || x.b === "mc")) {
      var ang = x.a === "asc" || x.a === "mc" ? x.a : x.b, other = ang === x.a ? x.b : x.a, line = T.angleAsp[ang] && T.angleAsp[ang][other];
      if (line) out.text = line + " " + T.angleAsp.nature[n];
    }
    return out;
  };

  /* ---------- dignities and the chart ruler ---------- */
  function dignity(k, s) {
    if (!DOM[k]) return null;
    if (DOM[k].indexOf(s) >= 0) return "domicile";
    if (EXA[k] === s) return "exaltation";
    if (DOM[k].indexOf((s + 6) % 12) >= 0) return "detriment";
    if ((EXA[k] + 6) % 12 === s) return "fall";
    return null;
  }
  var basePoint = R.point;
  R.point = function (c, k, l) {
    var p = basePoint(c, k, l); if (!p) return p;
    var d = dignity(k, p.sign), x = X(l);
    if (d) p.dignity = { key: d, name: x.dignity.names[d], text: fmt(x.dignity.text[d], { P: x.planets[k].n, S: x.signs[p.sign].n, role: x.planets[k].role }) };
    var pr = x.prompts && x.prompts.natal[k]; if (pr) p.prompts = pr;
    return p;
  };
  function rulerLine(c, l) {
    if (!c.timeKnown) return null;
    var x = X(l), s = Sky.signOf(c.points.asc.lon), rk = RULER[s], rp = c.points[rk], rs = Sky.signOf(rp.lon);
    var t = fmt(x.ruler.line, { P: x.planets[rk].n, asc: x.signs[s].n, S: x.signs[rs].n, house: rp.house ? fmt(x.ruler.houseBit, { n: rp.house }) : "", flavor: x.ruler.flavor[rk] });
    if (rp.house) t += " " + fmt(x.ruler.where, { dom: x.houses[rp.house - 1].dom });
    if (MODERN[s]) t += " " + fmt(x.ruler.modern, { P: x.planets[MODERN[s]].n });
    return { key: rk, text: t };
  }

  /* ---------- configurations ---------- */
  function patterns(c, l) {
    var x = X(l), P = c.points, keys = ORDER.filter(function (k) { return P[k]; }), out = [], A = {};
    var bySign = {};
    keys.forEach(function (k) { var s = Sky.signOf(P[k].lon); (bySign[s] = bySign[s] || []).push(k); });
    Object.keys(bySign).forEach(function (s) { if (bySign[s].length >= 3) out.push({ key: "stellium", text: fmt(x.patterns.stelliumSign, { where: x.signs[s].n, n: bySign[s].length, list: names(bySign[s], l) }) }); });
    if (c.cusps) {
      var byHouse = {};
      keys.forEach(function (k) { if (P[k].house) (byHouse[P[k].house] = byHouse[P[k].house] || []).push(k); });
      Object.keys(byHouse).forEach(function (h) { if (byHouse[h].length >= 3) out.push({ key: "stelliumH", text: fmt(x.patterns.stelliumHouse, { where: h, n: byHouse[h].length, list: names(byHouse[h], l), dom: x.houses[h - 1].dom }) }); });
    }
    (c.aspects || []).forEach(function (a) { if (ORDER.indexOf(a.a) >= 0 && ORDER.indexOf(a.b) >= 0) { A[a.a + "|" + a.b] = a.key; A[a.b + "|" + a.a] = a.key; } });
    function has(p, q, k) { return A[p + "|" + q] === k; }
    var n = keys.length, seen = {};
    function add(key, list, extra) { var id = key + ":" + list.slice().sort().join(","); if (seen[id]) return; seen[id] = 1; out.push({ key: key, text: fmt(x.patterns[key], Object.assign({ list: names(list, l) }, extra || {})) }); }
    for (var i = 0; i < n; i++) for (var j = i + 1; j < n; j++) for (var k = j + 1; k < n; k++) {
      var a = keys[i], b = keys[j], d = keys[k];
      if (has(a, b, "trine") && has(b, d, "trine") && has(a, d, "trine")) {
        var el = {}; [a, b, d].forEach(function (q) { var e = Sky.ELEMENT[Sky.signOf(P[q].lon) % 4]; el[e] = (el[e] || 0) + 1; });
        var top = Object.keys(el).sort(function (p, q) { return el[q] - el[p]; })[0];
        add("grandTrine", [a, b, d], { el: x.elements[top].n.toLowerCase() });
        keys.forEach(function (e) { // kite: a fourth planet opposite one vertex and sextile the other two
          if ([a, b, d].indexOf(e) >= 0) return;
          [[a, b, d], [b, a, d], [d, a, b]].forEach(function (t) { if (has(e, t[0], "opp") && has(e, t[1], "sextile") && has(e, t[2], "sextile")) add("kite", [a, b, d, e], { apex: x.planets[e].n }); });
        });
      }
      [[a, b, d], [a, d, b], [b, d, a]].forEach(function (t) {
        if (has(t[0], t[1], "opp") && has(t[0], t[2], "square") && has(t[1], t[2], "square")) add("tSquare", [t[0], t[1], t[2]], { apex: x.planets[t[2]].n });
        if (has(t[0], t[1], "sextile") && has(t[0], t[2], "quincunx") && has(t[1], t[2], "quincunx")) add("yod", [t[0], t[1], t[2]], { apex: x.planets[t[2]].n });
      });
    }
    for (i = 0; i < n; i++) for (j = i + 1; j < n; j++) for (k = j + 1; k < n; k++) for (var m = k + 1; m < n; m++) {
      var q4 = [keys[i], keys[j], keys[k], keys[m]];
      [[0, 1, 2, 3], [0, 2, 1, 3], [0, 3, 1, 2]].forEach(function (o) {
        var p1 = q4[o[0]], p2 = q4[o[1]], p3 = q4[o[2]], p4 = q4[o[3]];
        if (has(p1, p2, "opp") && has(p3, p4, "opp") && has(p1, p3, "square") && has(p1, p4, "square") && has(p2, p3, "square") && has(p2, p4, "square")) add("grandCross", q4);
      });
    }
    return out;
  }
  function architecture(c, l) {
    var x = X(l), u = U(l), P = c.points, out = [];
    if (c.timeKnown) {
      out.push(c.day ? x.sect.day : x.sect.night);
      var up = 0, east = 0, n = 0;
      ORDER.forEach(function (k) { if (!P[k]) return; n++; if (Sky.norm(P[k].lon - P.asc.lon) >= 180) up++; if (Sky.norm(P[k].lon - P.mc.lon) < 180) east++; });
      if (up >= 7) out.push(x.hemis.above); else if (n - up >= 7) out.push(x.hemis.below);
      if (east >= 7) out.push(x.hemis.east); else if (n - east >= 7) out.push(x.hemis.west);
      var rl = rulerLine(c, l); if (rl) out.push(rl.text);
    }
    var bal = R.balance(c, l); out.push(fmt(u.chart.dominant, { list: bal.dominant.join(" · ") }) + (bal.lack.length ? " " + bal.lack.join(" ") : ""));
    var pats = patterns(c, l); pats.forEach(function (p) { out.push(p.text); }); if (!pats.length) out.push(x.patterns.none);
    var count = {}; (c.aspects || []).forEach(function (a) { [a.a, a.b].forEach(function (k) { if (ORDER.indexOf(k) >= 0) count[k] = (count[k] || 0) + 1; }); });
    var most = Object.keys(count).sort(function (p, q) { return count[q] - count[p]; })[0];
    if (most && count[most] >= 4) out.push(fmt(u.deep.mostAspected, { P: x.planets[most].n, n: count[most] }));
    return out;
  }

  /* ---------- the deep reading ---------- */
  var SECTIONS = [["essence", ["sun"]], ["emotion", ["moon"]], ["presence", ["asc"]], ["mind", ["mercury"]], ["love", ["venus"]], ["drive", ["mars"]], ["growth", ["jupiter", "saturn"]], ["vocation", ["mc"]], ["wound", ["chiron"]], ["path", ["node"]]];
  function deep(c, l) {
    var x = X(l), u = U(l), out = [{ id: "arch", title: u.deep.s.arch, paras: architecture(c, l), aspects: [], prompts: [] }];
    SECTIONS.forEach(function (sec) {
      var keys = sec[1].filter(function (k) { return c.points[k]; }); if (!keys.length) return;
      var paras = [], asps = [], prompts = [];
      keys.forEach(function (k) {
        var p = R.point(c, k, l);
        paras.push(p.title + " " + p.deg + ". " + (p.signText || ""));
        if (p.dignity) paras.push(p.dignity.text);
        if (p.houseText) paras.push(p.houseText);
        if (k === "asc") { var rl = rulerLine(c, l); if (rl) paras.push(rl.text); }
        if (k === "venus" && c.cusps) { var ds = Sky.signOf(c.cusps[6]); paras.push(fmt(l === "es" ? "Tu casa 7 empieza en {S}: en el otro te atrae lo que es {kw}." : "Your 7th house begins in {S}: in others you’re drawn to {kw}.", { S: x.signs[ds].n, kw: x.signs[ds].kw.replace(/ · /g, ", ") })); }
        if (k === "mc" && c.cusps) {
          var ms = Sky.signOf(c.points.mc.lon), mr = RULER[ms], mp = c.points[mr];
          paras.push(fmt(l === "es" ? "El regente de tu vocación es {P}, en {S}{h}: tu carrera se juega en {dom}." : "The ruler of your vocation is {P}, in {S}{h}: your career plays out in {dom}.", { P: x.planets[mr].n, S: x.signs[Sky.signOf(mp.lon)].n, h: mp.house ? (l === "es" ? ", casa " : ", house ") + mp.house : "", dom: mp.house ? x.houses[mp.house - 1].dom : "" }));
        }
        (c.aspects || []).filter(function (a) { return (a.a === k || a.b === k) && a.a !== "lilith" && a.b !== "lilith"; }).slice(0, 4).forEach(function (a) { asps.push(Object.assign({ a: a.a, b: a.b, key: a.key }, R.aspect(a, l))); });
        if (x.prompts.natal[k]) prompts = prompts.concat(x.prompts.natal[k].map(function (q, i) { return { id: "natal-" + k + "-" + i, q: q }; }));
      });
      out.push({ id: sec[0], title: u.deep.s[sec[0]], paras: paras, aspects: asps, prompts: prompts, keys: keys });
    });
    return out;
  }

  /* ---------- the day, enriched ---------- */
  var baseDaily = R.daily, SLOW = { jupiter: 1, saturn: 1, uranus: 1, neptune: 1, pluto: 1 }, ANG = { conj: 0, sextile: 60, square: 90, trine: 120, opp: 180 };
  R.daily = function (natal, day, l) {
    var D = baseDaily(natal, day, l), x = X(l), n = 0;
    D.transits.forEach(function (t) {
      var lonT = Sky.lon(t.t, D.noon);
      if (natal.cusps && t.t !== "moon") t.house = Sky.houseOf(lonT, natal.cusps);
      if (SLOW[t.t] && n < 5 && ANG[t.key] !== undefined) { n++; t.win = Sky.transitWindow(t.t, natal.points[t.n].lon, ANG[t.key], t.t === "jupiter" || t.t === "saturn" ? 2 : 1.5, D.noon); }
    });
    var h = parseInt(D.key.replace(/-/g, ""), 10);
    D.prompt = D.lead ? { id: "day-" + D.key, q: x.prompts.transit[D.lead.t][nat(D.lead.key)][h % 2] } : { id: "day-" + D.key, q: x.prompts.moon[D.moon.sign] };
    return D;
  };

  /* ---------- your year ---------- */
  function birthParts(b) { var p = b.date.split("-").map(Number); return { y: p[0], m: p[1], d: p[2] }; }
  function age(b, now) { var p = birthParts(b), a = now.getFullYear() - p.y; if (now.getMonth() + 1 < p.m || (now.getMonth() + 1 === p.m && now.getDate() < p.d)) a--; return a; }
  function year(natal, b, place, houseSystem, l, now) {
    var x = X(l), u = U(l), out = {};
    now = now || new Date();
    var a = age(b, now), p = birthParts(b);
    if (natal.timeKnown) {
      var ascS = Sky.signOf(natal.points.asc.lon), house = a % 12 + 1, sign = (ascS + a) % 12, lord = RULER[sign], lp = natal.points[lord];
      out.prof = { age: a, house: house, sign: sign, lord: lord, title: fmt(u.year.prof, { n: house }) + " · " + x.signs[sign].n, lordTitle: fmt(u.year.lord, { P: x.planets[lord].n }),
        text: fmt(u.year.profText, { theme: x.profection[house - 1], P: x.planets[lord].n, S: x.signs[Sky.signOf(lp.lon)].n, house: lp.house ? fmt(u.year.profHouse, { n: lp.house }) : "" }) };
    }
    var lastBirthday = new Date(now.getFullYear(), p.m - 1, p.d) <= now ? now.getFullYear() : now.getFullYear() - 1;
    var srDate = Sky.solarReturn(natal.points.sun.lon, lastBirthday, p.m, p.d), pl = place || b.place;
    var src = Sky.castAt(srDate, pl.lat, pl.lng, { houseSystem: houseSystem });
    var srSunH = src.points.sun.house;
    out.sr = { year: lastBirthday, date: srDate, chart: src, title: fmt(u.year.sr, { y: lastBirthday }),
      text: fmt(u.year.srText, { date: dlong(srDate, l), time: new Intl.DateTimeFormat(l, { hour: "2-digit", minute: "2-digit" }).format(srDate), asc: x.signs[Sky.signOf(src.points.asc.lon)].n, n: srSunH, dom: x.houses[srSunH - 1].dom }),
      place: fmt(u.year.srPlace, { place: Places.label(pl, l) }) };
    var pm = Sky.progressedMoon(natal.utc, now), pmH = natal.cusps ? Sky.houseOf(pm.lon, natal.cusps) : null;
    out.prog = { title: u.year.prog, text: fmt(u.year.progText, { S: x.signs[pm.sign].n + " " + R.deg(pm.lon), house: pmH ? (l === "es" ? ", casa " : ", house ") + pmH : "", text: x.progMoon[pm.sign] }) + (pm.next ? " " + fmt(u.year.progNext, { S: x.signs[pm.next.sign].n, date: new Intl.DateTimeFormat(l, { month: "long", year: "numeric" }).format(pm.next.date) }) : "") };
    return out;
  }
  function bigTransits(natal, now, l) {
    var x = X(l), out = [], seen = {}, targets = ["sun", "moon", "mercury", "venus", "mars", "asc", "mc"].filter(function (k) { return natal.points[k]; });
    ["jupiter", "saturn", "uranus", "neptune", "pluto"].forEach(function (tk) {
      var orb = tk === "jupiter" || tk === "saturn" ? 2 : 1.5;
      for (var dd = 0; dd <= 365; dd += 4) {
        var d = new Date(now.getTime() + dd * DAY), L = Sky.lon(tk, d);
        targets.forEach(function (nk) {
          [0, 60, 90, 120, 180].forEach(function (ang) {
            var key = tk + nk + ang; if (seen[key]) return;
            if (Math.abs(Sky.gapTo(L, natal.points[nk].lon, ang)) > orb) return;
            seen[key] = 1;
            var w = Sky.transitWindow(tk, natal.points[nk].lon, ang, orb, d);
            var akey = { 0: "conj", 60: "sextile", 90: "square", 120: "trine", 180: "opp" }[ang];
            out.push({ t: tk, n: nk, key: akey, angle: ang, win: w, nature: nat(akey), title: x.planets[tk].n + " " + x.aspects[akey].n + " " + x.planets[nk].n,
              text: cap(fmt(x.transit.line[nat(akey)], { brings: x.transit.brings[tk], area: x.planets[nk].area })) + " " + x.transit.advice[tk][nat(akey)] });
          });
        });
      }
    });
    return out.sort(function (a, b) { return ((a.win && a.win.start) || now) - ((b.win && b.win.start) || now); });
  }

  /* ---------- horary ---------- */
  var CLASSIC = ["sun", "mercury", "venus", "mars", "jupiter", "saturn"];
  function horary(at, place, cat, l) {
    var x = X(l), H = x.horary, c = Sky.castAt(at, place.lat, place.lng, { houseSystem: "regio" }), P = c.points;
    var ascS = Sky.signOf(P.asc.lon), ascD = Sky.degIn(P.asc.lon), qh = H.cats[cat].h, qS = Sky.signOf(c.cusps[qh - 1]);
    var A = RULER[ascS], B = RULER[qS], lines = [], res = { chart: c, A: A, B: B, cat: cat, qh: qh };
    function sname(k) { return x.signs[Sky.signOf(P[k].lon)].n; }
    function pa(k) { return (x.art && x.art[k]) || x.planets[k].n; }
    lines.push(cap(fmt(H.you, { P: pa(A), S: x.signs[ascS].n, S2: sname(A), n: P[A].house, S3: sname("moon") })));
    if (A === B) lines.push(fmt(H.same, { P: pa(A) }));
    else lines.push(fmt(H.quesited, { h: qh, dom: x.houses[qh - 1].dom, Q: pa(B), S: sname(B), n: P[B].house }));
    // the Moon: next aspect before leaving her sign (void of course?) and the last one since she entered it
    var ing = Sky.nextIngress("moon", at, 3), until = ing ? (ing.date - at) / DAY : 2.6, since = Sky.lastIngress("moon", at, 3), back = since ? (at - since) / DAY : 2.6;
    var moonNext = [];
    CLASSIC.forEach(function (k) { var na = Sky.nextAspect("moon", k, at, until); if (na) moonNext.push({ k: k, angle: na.angle, date: na.date }); });
    moonNext.sort(function (p, q) { return p.date - q.date; });
    res.voidMoon = moonNext.length === 0;
    var verdict = null, perfect = null, lateSign = false, refrain = null, help = false;
    function key(angle) { return { 0: "conj", 60: "sextile", 90: "square", 120: "trine", 180: "opp" }[angle]; }
    if (A !== B) {
      var slow = !(A === "moon" || B === "moon"), maxD = slow ? 240 : 30, pf = Sky.nextAspect(A, B, at, maxD);
      if (pf) {
        var iA = Sky.nextIngress(A, at, maxD), iB = Sky.nextIngress(B, at, maxD);
        lateSign = (iA && iA.date < pf.date) || (iB && iB.date < pf.date);
        [A, B].forEach(function (k) { if (!refrain && k !== "sun" && k !== "moon" && (Sky.speed(k, at) < 0) !== (Sky.speed(k, pf.date) < 0)) refrain = k; });
        perfect = { a: A, b: B, angle: pf.angle, date: pf.date };
      }
    }
    // the Moon as co-significator applying to the quesited ruler within her sign
    var mB = moonNext.filter(function (m) { return m.k === B; })[0];
    if (!perfect || lateSign) {
      if (mB && B !== "moon") { perfect = { a: "moon", b: B, angle: mB.angle, date: mB.date }; lateSign = false; refrain = null; }
    }
    // translation of light: the Moon separates from one significator and applies to the other
    if (!perfect && A !== B) {
      [[A, B], [B, A]].forEach(function (pair) {
        if (help) return;
        var la = pair[0] !== "moon" ? Sky.lastAspect("moon", pair[0], at, back) : null, nb = moonNext.filter(function (m) { return m.k === pair[1]; })[0];
        if (la && nb) { help = true; lines.push(fmt(H.translation, { A: pa(pair[0]), B: pa(pair[1]) })); }
      });
    }
    if (perfect) {
      var ak = key(perfect.angle);
      lines.push(cap(fmt(H.perfect, { A: pa(perfect.a), B: pa(perfect.b), asp: H.aspExact[ak], date: dlong(perfect.date, l), how: H.how[ak] })));
      if (lateSign) lines.push(H.afterSign);
      if (refrain) lines.push(fmt(H.refrain, { P: pa(refrain) }));
      verdict = refrain ? "notNow" : lateSign ? "late" : (ak === "trine" || ak === "sextile" || ak === "conj") ? "yes" : "yesHard";
      res.timing = perfect.date;
    } else if (A === B) {
      verdict = res.voidMoon ? "voidMoon" : "yes";
    } else if (help) {
      verdict = "help";
    } else {
      lines.push(cap(fmt(H.none, { A: pa(A), B: pa(B) })));
      verdict = res.voidMoon ? "voidMoon" : "notNow";
    }
    if (res.voidMoon) lines.push(fmt(H.voidMoon, { S: sname("moon") }));
    else if (moonNext[0]) lines.push(fmt(H.moonNext, { asp: H.aspA[key(moonNext[0].angle)], B: pa(moonNext[0].k), date: dlong(moonNext[0].date, l) }));
    if (ascD < 3) { verdict = "early"; lines.unshift(fmt(H.early, { d: Math.floor(ascD) })); }
    else if (ascD >= 27) { verdict = "lateAsc"; lines.unshift(fmt(H.lateAsc, { d: Math.floor(ascD) })); }
    res.verdict = verdict; res.verdictText = H.verdict[verdict]; res.lines = lines;
    res.positive = { yes: 1, yesHard: 1, help: 1, late: 1 }[verdict] ? true : { notNow: 1, voidMoon: 1 }[verdict] ? false : null;
    return res;
  }

  /* ---------- quiz ---------- */
  function quiz(c, l) {
    var x = X(l), u = U(l).quizUI, signs = x.signs.map(function (s) { return s.n; }), qs = [];
    function opts(right, pool) { var o = shuffle(pool.filter(function (p) { return p !== right; })).slice(0, 3).concat([right]); o = shuffle(o); return { opts: o, right: o.indexOf(right) }; }
    var personal = [];
    ["sun", "moon", "asc", "mercury", "venus", "mars", "mc"].forEach(function (k) {
      var p = c.points[k]; if (!p) return;
      var s = Sky.signOf(p.lon), o = opts(signs[s], signs);
      personal.push({ q: u["q_" + k], opts: o.opts, right: o.right, ex: fmt(u.ex_sign, { P: x.planets[k].n, d: R.deg(p.lon), S: signs[s] }) });
    });
    if (c.cusps) {
      ["sun", "moon", "venus", "mars"].forEach(function (k) {
        var h = c.points[k].house, hs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (n) { return (l === "es" ? "Casa " : "House ") + n; }), o = opts(hs[h - 1], hs);
        personal.push({ q: fmt(u.q_house, { P: x.planets[k].n }), opts: o.opts, right: o.right, ex: fmt(u.ex_house, { P: x.planets[k].n, n: h, dom: x.houses[h - 1].dom }) });
      });
      var as = Sky.signOf(c.points.asc.lon), rk = RULER[as], pl = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"].map(function (k) { return x.planets[k].n; }), ro = opts(x.planets[rk].n, pl);
      personal.push({ q: u.q_ruler, opts: ro.opts, right: ro.right, ex: fmt(u.ex_ruler, { S: signs[as], P: x.planets[rk].n }) });
    }
    var bal = R.balance(c, l), els = ["fire", "earth", "air", "water"].map(function (e) { return x.elements[e].n; }), top = x.elements[bal.top].n, eo = opts(top, els);
    personal.push({ q: u.q_element, opts: eo.opts, right: eo.right, ex: fmt(u.ex_element, { E: top.toLowerCase() }) });
    var retro = ["mercury", "venus", "mars", "jupiter", "saturn"].filter(function (k) { return c.points[k].retro; });
    if (retro.length) {
      var direct = ["mercury", "venus", "mars", "jupiter", "saturn", "sun", "moon"].filter(function (k) { return !c.points[k].retro; }).map(function (k) { return x.planets[k].n; });
      var rr = x.planets[retro[0]].n, rpool = shuffle(direct).slice(0, 3).concat([rr]), rs = shuffle(rpool);
      personal.push({ q: u.q_retro, opts: rs, right: rs.indexOf(rr), ex: fmt(u.ex_retro, { P: rr }) });
    }
    var sm = (c.aspects || []).filter(function (a) { return (a.a === "sun" && a.b === "moon") || (a.a === "moon" && a.b === "sun"); })[0];
    var aspNames = ["conj", "sextile", "square", "trine", "opp"].map(function (k) { return cap(x.aspects[k].n); }).concat([u.noAspect]);
    var smRight = sm && sm.key !== "quincunx" ? cap(x.aspects[sm.key].n) : u.noAspect, smo = opts(smRight, aspNames);
    personal.push({ q: u.q_sunmoon, opts: smo.opts, right: smo.right, ex: fmt(u.ex_sunmoon, { d: Math.round(Sky.sep(c.points.sun.lon, c.points.moon.lon)) + "°" }) });
    qs = shuffle(personal).slice(0, 5).concat(shuffle(x.quiz).slice(0, 3).map(function (g) { var o = shuffle(g[1]); return { q: g[0], opts: o, right: o.indexOf(g[1][0]), ex: g[2] }; }));
    return shuffle(qs);
  }

  /* ---------- the blind test ---------- */
  function blindRounds(c, l) {
    var x = X(l), keys = ["sun", "moon", "asc", "mercury", "venus", "mars"].filter(function (k) { return c.points[k] && x.natal[k]; });
    return keys.map(function (k) {
      var s = Sky.signOf(c.points[k].lon), others = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].filter(function (q) { return q !== s; })).slice(0, 2);
      return { key: k, sign: s, opts: shuffle([s].concat(others)).map(function (q) { return { sign: q, text: x.natal[k][q] }; }) };
    });
  }
  function binomTail(n, h, p) { // P(X >= h)
    var tot = 0;
    for (var k = h; k <= n; k++) { var c = 1; for (var i = 0; i < k; i++) c = c * (n - i) / (i + 1); tot += c * Math.pow(p, k) * Math.pow(1 - p, n - k); }
    return Math.min(1, tot);
  }

  Object.assign(R, { dignity: dignity, rulerLine: rulerLine, patterns: patterns, architecture: architecture, deep: deep, year: year, bigTransits: bigTransits, horary: horary, quiz: quiz, blindRounds: blindRounds, binomTail: binomTail, RULER: RULER, age: age, dshort: dshort, dlong: dlong });
})();
