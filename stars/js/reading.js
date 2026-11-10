/* Cielo — turns positions into readings: natal texts, the daily reading, synastry, prompts and the experiment. */
(function () {
  "use strict";
  var TPL = {
    es: { house: "{role} se juega en {dom}.", tr: "{T} {w} tu {N} natal: {line}", moonH: "{p} en {s}", aspTitle: "{a} {asp} {b}",
      prompt: {
        intro: "Actúa como un astrólogo reflexivo y riguroso. Estos datos están calculados con efemérides astronómicas (zodiaco tropical, casas {sys}, nodo verdadero); úsalos tal cual, no los recalcules.",
        close: "Responde en español, con un tono cálido y concreto, como herramienta de autoconocimiento. Evita predicciones fatalistas y no des consejos médicos, legales ni financieros.",
        born: "Nacimiento", noTime: "hora desconocida (carta a mediodía, sin casas ni Ascendente)", chart: "Carta natal", aspects: "Aspectos natales principales", today: "Tránsitos del {d}", moon: "Luna del día",
        q: "Mi pregunta", other: "Carta de {name}", syn: "Aspectos entre las dos cartas", defaultQ: { day: "¿Cómo puedo aprovechar el día de hoy?", chart: "Dame una lectura profunda de mi carta natal.", syn: "¿Cómo es la dinámica entre nosotros y cómo cuidarla?" } } },
    en: { house: "{role} plays out in {dom}.", tr: "{T} {w} your natal {N}: {line}", moonH: "{p} in {s}", aspTitle: "{a} {asp} {b}",
      prompt: {
        intro: "Act as a thoughtful, rigorous astrologer. This data was calculated with astronomical ephemerides (tropical zodiac, {sys} houses, true node); use it as given, don’t recalculate it.",
        close: "Answer in English, warmly and concretely, as a tool for self-knowledge. Avoid fatalistic predictions and don’t give medical, legal or financial advice.",
        born: "Birth", noTime: "time unknown (noon chart, no houses or Ascendant)", chart: "Birth chart", aspects: "Main natal aspects", today: "Transits for {d}", moon: "Moon of the day",
        q: "My question", other: "{name}’s chart", syn: "Aspects between the two charts", defaultQ: { day: "How can I make the most of today?", chart: "Give me a deep reading of my birth chart.", syn: "What is the dynamic between us and how can we look after it?" } } }
  };
  var POINTS = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", "node", "asc", "mc"];
  function fmt(s, v) { return String(s).replace(/\{(\w+)\}/g, function (m, k) { return v && v[k] != null ? v[k] : m; }); }
  function cap(s) { s = String(s || ""); return s.charAt(0).toUpperCase() + s.slice(1); }
  function X(l) { return TXT[l] || TXT.es; }
  function U(l) { return I18N[l] || I18N.es; }
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function nat(key) { return key === "trine" || key === "sextile" ? "h" : key === "conj" ? "c" : "t"; }
  function deg(lon) { var d = Sky.degIn(lon), m = Math.floor((d - Math.floor(d)) * 60 + 1e-9); return Math.floor(d) + "°" + String(m).padStart(2, "0") + "′"; }
  function orbTxt(o) { var d = Math.floor(o), m = Math.round((o - d) * 60); if (m === 60) { d++; m = 0; } return d + "°" + String(m).padStart(2, "0") + "′"; }
  function signName(i, l) { return X(l).signs[i].n; }
  function pname(k, l) { return X(l).planets[k].n; }
  function dayKey(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }

  /* ---------- natal ---------- */
  function point(chart, k, l) {
    var p = chart.points[k]; if (!p) return null;
    var x = X(l), s = Sky.signOf(p.lon), P = x.planets[k], out = { key: k, name: P.n, sign: s, signName: x.signs[s].n, deg: deg(p.lon), retro: !!p.retro, desc: P.d, house: p.house || null };
    out.title = fmt(U(l).point.sign, { p: P.n, s: x.signs[s].n });
    out.signText = x.natal[k] ? x.natal[k][s] : "";
    if (p.house) { var H = x.houses[p.house - 1]; out.houseTitle = fmt(U(l).point.inHouse, { n: p.house, t: H.t }); out.houseText = fmt(TPL[l].house, { role: cap(P.role), dom: H.dom }) + (P.house ? " " + P.house : ""); }
    if (k === "asc" || k === "mc") out.house = null;
    return out;
  }
  function aspect(x, l) {
    var T = X(l), A = T.planets[x.a], B = T.planets[x.b], asp = T.aspects[x.key];
    return { title: fmt(TPL[l].aspTitle, { a: A.n, asp: asp.n, b: B.n }), text: fmt(asp.natal, { a: cap(A.role), b: B.role }), orb: orbTxt(x.orb), nature: nat(x.key) };
  }
  function balanceText(chart, l) {
    var keys = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"].concat(chart.timeKnown ? ["asc"] : []);
    var b = Sky.balance(chart.points, keys), x = X(l), tot = 0;
    Object.keys(b.elements).forEach(function (k) { tot += b.elements[k]; });
    var els = Object.keys(b.elements).sort(function (p, q) { return b.elements[q] - b.elements[p]; });
    var lack = els.filter(function (k) { return b.elements[k] / tot < 0.1; });
    return { b: b, total: tot, top: els[0], dominant: els.filter(function (k) { return b.elements[k] >= b.elements[els[0]] * 0.85; }).map(function (k) { return x.elements[k].n; }), lack: lack.map(function (k) { return x.elements[k].lack; }) };
  }

  /* ---------- the day ---------- */
  var AREAS = { mind: ["mercury"], love: ["venus"], work: ["saturn", "mc", "sun", "jupiter"], energy: ["mars", "sun"], mood: ["moon", "neptune"] };
  function daily(natal, day, l) {
    var x = X(l), u = U(l), tp = TPL[l];
    var noon = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 12, 0, 0);
    var key = dayKey(noon), h = hash(key + "|" + Math.round(natal.points.sun.lon * 1000));
    var moon = Sky.moonInfo(noon), sunSign = Sky.signOf(Sky.lon("sun", noon));
    var tr = Sky.transits(natal, noon);
    var lead = tr.filter(function (t) { return t.t !== "moon" && t.strength > 0.25; })[0] || tr.filter(function (t) { return t.t !== "moon"; })[0] || tr[0] || null;
    var second = tr.filter(function (t) { return t !== lead && t.t !== "moon" && (!lead || t.t !== lead.t) && t.strength > 0.2; })[0] || null;
    var moonHouse = natal.cusps ? Sky.houseOf(moon.lon, natal.cusps) : null;
    function sentence(t, withAdvice) {
      var n = nat(t.key), T = x.planets[t.t], N = x.planets[t.n];
      var line = fmt(x.transit.line[n], { brings: x.transit.brings[t.t], area: N.area });
      return fmt(tp.tr, { T: T.n, w: x.aspects[t.key].w, N: N.n, line: line }) + (withAdvice ? " " + x.transit.advice[t.t][n] : "");
    }
    var body = [x.moonDay[moon.sign].c + (moonHouse ? " " + fmt(u.today.moonHouse, { n: moonHouse, dom: x.houses[moonHouse - 1].dom }) : "")];
    if (lead) body.push(sentence(lead, true));
    if (second) body.push(sentence(second, false));
    var retros = Sky.retroPeriods(noon);
    var personal = retros.filter(function (r) { return r.body === "mercury" || r.body === "venus" || r.body === "mars"; })[0];
    if (personal) body.push(x.retro[personal.body]);
    var headline = lead ? x.transit.headline[lead.t][nat(lead.key)] : fmt(tp.moonH, { p: x.phases[moon.phase].n, s: x.signs[moon.sign].n }) + ".";
    var md = x.moonDay[moon.sign], i1 = h % 4, i2 = (i1 + 1 + ((h >> 4) % 3)) % 4, j1 = (h >> 8) % 4, j2 = (j1 + 1 + ((h >> 12) % 3)) % 4;
    var doL = [md.do[i1], md.do[i2]], avL = [md.av[j1], md.av[j2]];
    if (lead) { var td = x.transit.todo[lead.t][nat(lead.key)]; doL.unshift(td[0]); avL.unshift(td[1]); }
    else { doL.push(md.do[(i2 + 1) % 4] === doL[0] ? md.do[(i2 + 2) % 4] : md.do[(i2 + 1) % 4]); avL.push(md.av[(j2 + 1) % 4] === avL[0] ? md.av[(j2 + 2) % 4] : md.av[(j2 + 1) % 4]); }
    var areas = {};
    Object.keys(AREAS).forEach(function (a) {
      var s = 0;
      tr.forEach(function (t) { if (AREAS[a].indexOf(t.t) >= 0 || AREAS[a].indexOf(t.n) >= 0) s += t.nature * t.strength * (t.t === "moon" ? 0.6 : 1); });
      areas[a] = s > 0.25 ? "up" : s < -0.25 ? "down" : "flat";
    });
    var score = 0; tr.forEach(function (t) { score += t.score; });
    var list = tr.filter(function (t) { return t.t !== "moon" || t.strength > 0.45; }).slice(0, 7).map(function (t) {
      var n = nat(t.key), off = Sky.exactIn(t.t, natal.points[t.n].lon, t.angle, noon);
      return { t: t.t, n: t.n, key: t.key, nature: n, orb: orbTxt(t.orb), exact: off, applying: t.applying,
        title: fmt(tp.tr, { T: x.planets[t.t].n, w: x.aspects[t.key].w, N: x.planets[t.n].n, line: "" }).replace(/:\s*$/, ""),
        text: cap(fmt(x.transit.line[n], { brings: x.transit.brings[t.t], area: x.planets[t.n].area })) + " " + x.transit.advice[t.t][n] };
    });
    return { key: key, noon: noon, moon: moon, moonHouse: moonHouse, sunSign: sunSign, headline: headline, body: body, doList: doL, avoidList: avL, areas: areas, score: score, transits: list, all: tr, retros: retros, lead: lead };
  }

  /* ---------- two charts ---------- */
  function synastry(c1, c2, otherName, l) {
    var x = X(l), u = U(l), asps = Sky.synastry(c1, c2), top = asps.slice(0, 10), cnt = { h: 0, t: 0, c: 0 };
    var items = top.map(function (a) {
      var n = nat(a.key), pk = [a.a, a.b].sort().join("-");
      var topic = x.syn.pairs[pk] || (a.a === "saturn" || a.b === "saturn" ? x.syn.pairs.saturn : a.a === "jupiter" || a.b === "jupiter" ? x.syn.pairs.jupiter : a.a === "asc" || a.b === "asc" ? x.syn.pairs.asc : x.planets[a.a].role + " · " + x.planets[a.b].role);
      cnt[n] += a.weight;
      return { a: a.a, b: a.b, key: a.key, nature: n, orb: orbTxt(a.orb), left: fmt(u.syn.yours, { p: x.planets[a.a].n }), right: fmt(u.syn.theirs, { p: x.planets[a.b].n, name: otherName }), asp: x.aspects[a.key].n, topic: cap(topic), text: x.syn.nature[n] };
    });
    var kind = !items.length ? null : cnt.c > cnt.h && cnt.c > cnt.t ? "c" : cnt.h > cnt.t * 1.5 ? "h" : cnt.t > cnt.h * 1.5 ? "t" : "m";
    return { items: items, all: asps, summary: kind ? x.syn.summary[kind] : "", kind: kind };
  }

  /* ---------- prompts for Claude ---------- */
  function chartLines(chart, l, label) {
    var x = X(l), out = [];
    POINTS.forEach(function (k) {
      var p = chart.points[k]; if (!p) return;
      out.push("- " + x.planets[k].n + " " + deg(p.lon) + " " + x.signs[Sky.signOf(p.lon)].n + (p.house ? " · " + fmt(U(l).chart.house, { n: p.house }).toLowerCase() : "") + (p.retro ? " · " + U(l).chart.retro : ""));
    });
    return out;
  }
  function birthLine(b, chart, l) {
    var tp = TPL[l].prompt, place = b.place ? Places.label(b.place, l) : "";
    var coords = b.place ? " (" + Math.abs(b.place.lat).toFixed(2) + "°" + (b.place.lat >= 0 ? "N" : "S") + ", " + Math.abs(b.place.lng).toFixed(2) + "°" + (b.place.lng >= 0 ? "E" : (l === "es" ? "O" : "W")) + ")" : "";
    return tp.born + ": " + b.date + " " + (chart.timeKnown ? b.time + " (" + Sky.fmtOffset(chart.offset) + ")" : tp.noTime) + ", " + place + coords;
  }
  function aspectLines(chart, l, n) {
    var x = X(l);
    return chart.aspects.slice(0, n || 10).map(function (a) { return "- " + x.planets[a.a].n + " " + x.aspects[a.key].n + " " + x.planets[a.b].n + " (" + orbTxt(a.orb) + ")"; });
  }
  function sysName(chart, l) { return U(l).chart.system[chart.houseSystem || "placidus"] || "Placidus"; }
  function promptChart(b, chart, q, l) {
    var tp = TPL[l].prompt;
    return [fmt(tp.intro, { sys: sysName(chart, l) }), "", birthLine(b, chart, l), "", tp.chart + ":"].concat(chartLines(chart, l)).concat(["", tp.aspects + ":"]).concat(aspectLines(chart, l, 12))
      .concat(["", tp.q + ": " + (q || tp.defaultQ.chart), "", tp.close]).join("\n");
  }
  function promptDay(b, chart, d, q, l) {
    var tp = TPL[l].prompt, x = X(l), when = new Intl.DateTimeFormat(l, { day: "numeric", month: "long", year: "numeric" }).format(d.noon);
    var tr = d.all.slice(0, 8).map(function (t) { return "- " + x.planets[t.t].n + " " + x.aspects[t.key].n + " " + x.planets[t.n].n + " natal (" + orbTxt(t.orb) + ")"; });
    return [fmt(tp.intro, { sys: sysName(chart, l) }), "", birthLine(b, chart, l), "", tp.chart + ":"].concat(chartLines(chart, l)).concat(["", fmt(tp.today, { d: when }) + ":"]).concat(tr)
      .concat(["- " + tp.moon + ": " + x.phases[d.moon.phase].n + " " + deg(d.moon.lon) + " " + x.signs[d.moon.sign].n + (d.moonHouse ? " · " + fmt(U(l).chart.house, { n: d.moonHouse }).toLowerCase() : "")])
      .concat(["", tp.q + ": " + (q || tp.defaultQ.day), "", tp.close]).join("\n");
  }
  function promptSyn(b1, c1, b2, c2, syn, name2, q, l) {
    var tp = TPL[l].prompt, x = X(l);
    var lines = syn.all.slice(0, 12).map(function (a) { return "- " + x.planets[a.a].n + " (1) " + x.aspects[a.key].n + " " + x.planets[a.b].n + " (2) (" + orbTxt(a.orb) + ")"; });
    return [fmt(tp.intro, { sys: sysName(c1, l) }), "", "1) " + birthLine(b1, c1, l)].concat(chartLines(c1, l)).concat(["", "2) " + fmt(tp.other, { name: name2 }) + " — " + birthLine(b2, c2, l)]).concat(chartLines(c2, l))
      .concat(["", tp.syn + ":"]).concat(lines).concat(["", tp.q + ": " + (q || tp.defaultQ.syn), "", tp.close]).join("\n");
  }

  /* ---------- the experiment ---------- */
  function ranks(a) {
    var idx = a.map(function (v, i) { return [v, i]; }).sort(function (p, q) { return p[0] - q[0]; }), r = new Array(a.length);
    for (var i = 0; i < idx.length;) { var j = i; while (j + 1 < idx.length && idx[j + 1][0] === idx[i][0]) j++; var avg = (i + j) / 2 + 1; for (var k = i; k <= j; k++) r[idx[k][1]] = avg; i = j + 1; }
    return r;
  }
  function pearson(x, y) {
    var n = x.length, mx = 0, my = 0, sxy = 0, sxx = 0, syy = 0;
    for (var i = 0; i < n; i++) { mx += x[i]; my += y[i]; } mx /= n; my /= n;
    for (i = 0; i < n; i++) { var dx = x[i] - mx, dy = y[i] - my; sxy += dx * dy; sxx += dx * dx; syy += dy * dy; }
    return sxx && syy ? sxy / Math.sqrt(sxx * syy) : 0;
  }
  function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function experiment(points, q) { // points: [{score, rating}], q: {q1, q2}
    var n = points.length, xs = points.map(function (p) { return p.score; }), ys = points.map(function (p) { return p.rating; });
    var groups = { fav: [], mix: [], hard: [] };
    points.forEach(function (p) { groups[p.score >= q.q2 ? "fav" : p.score <= q.q1 ? "hard" : "mix"].push(p.rating); });
    var mean = function (a) { return a.length ? a.reduce(function (s, v) { return s + v; }, 0) / a.length : null; };
    var out = { n: n, groups: { fav: { n: groups.fav.length, m: mean(groups.fav) }, mix: { n: groups.mix.length, m: mean(groups.mix) }, hard: { n: groups.hard.length, m: mean(groups.hard) } } };
    if (n < 3) return out;
    var rx = ranks(xs), ry = ranks(ys), rho = pearson(rx, ry), r = rng(n * 7919 + 17), hits = 0, iters = 2000, perm = ry.slice();
    for (var i = 0; i < iters; i++) {
      for (var j = perm.length - 1; j > 0; j--) { var k = Math.floor(r() * (j + 1)), t = perm[j]; perm[j] = perm[k]; perm[k] = t; }
      if (Math.abs(pearson(rx, perm)) >= Math.abs(rho) - 1e-12) hits++;
    }
    out.rho = rho; out.p = (hits + 1) / (iters + 1);
    return out;
  }

  window.Reading = { point: point, aspect: aspect, balance: balanceText, daily: daily, synastry: synastry, promptChart: promptChart, promptDay: promptDay, promptSyn: promptSyn,
    experiment: experiment, deg: deg, orb: orbTxt, nat: nat, dayKey: dayKey, signName: signName, pname: pname, fmt: fmt, cap: cap, POINTS: POINTS };
})();
