/* Cielo — app shell: state, router, views and events. */
(function () {
  "use strict";
  var KEY = "cielo.v1", DIST_KEY = "cielo.dist", APP_VERSION = "2.0", FORMULA = 1;
  var main = document.getElementById("main");

  /* ---------- state ---------- */
  function defaults(s) {
    s = s && typeof s === "object" ? s : {};
    s.v = 1; s.lang = s.lang === "en" ? "en" : "es"; s.theme = s.theme || "auto";
    s.houses = ["placidus", "koch", "regio", "equal", "whole"].indexOf(s.houses) >= 0 ? s.houses : "placidus";
    s.questions = Array.isArray(s.questions) ? s.questions : []; s.answers = s.answers && typeof s.answers === "object" ? s.answers : {};
    s.blindRuns = Array.isArray(s.blindRuns) ? s.blindRuns : []; s.quizBest = +s.quizBest || 0; s.here = s.here && isFinite(s.here.lat) ? s.here : null;
    if (s.blind === undefined) s.blind = true;
    s.people = Array.isArray(s.people) ? s.people : []; s.diary = s.diary && typeof s.diary === "object" ? s.diary : {};
    return s;
  }
  function load() { try { return defaults(JSON.parse(localStorage.getItem(KEY))); } catch (e) { return defaults({}); } }
  var S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage full or blocked */ } }

  /* ---------- helpers ---------- */
  function U() { return I18N[S.lang] || I18N.es; }
  function X() { return TXT[S.lang] || TXT.es; }
  var fmt = Reading.fmt, cap = Reading.cap;
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function g(k, cls, label) { return glyph(k, cls, label); }
  function dkey(d) { return Reading.dayKey(d); }
  function parseDay(s) { var p = String(s || "").split("-").map(Number); if (p.length !== 3 || !p[0]) return null; return new Date(p[0], p[1] - 1, p[2], 12); }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n, 12); }
  function dfmt(d, o) { return new Intl.DateTimeFormat(S.lang, o).format(d); }
  function tfmt(d) { return new Intl.DateTimeFormat(S.lang, { hour: "2-digit", minute: "2-digit" }).format(d); }
  function sname(i) { return X().signs[i].n; }
  function pn(k) { return X().planets[k].n; }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function toast(msg) {
    var t = document.getElementById("toast"); t.textContent = msg; t.classList.add("on");
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("on"); }, 2600);
  }
  function header(title, opts) {
    opts = opts || {};
    return '<header class="vh">' + (opts.back ? '<a class="ib" href="' + opts.back + '" aria-label="‹">' + g("back") + "</a>" : '<span class="ib-sp"></span>') +
      '<div class="vh-t">' + (opts.kicker ? '<div class="kicker">' + opts.kicker + "</div>" : "") + "<h1>" + title + "</h1></div>" +
      (opts.right != null ? (opts.right || '<span class="ib-sp"></span>') : '<a class="ib" href="#/settings" aria-label="' + esc(U().settings.title) + '">' + g("gear") + "</a>") + "</header>";
  }

  /* ---------- charts ---------- */
  var cache = {};
  function input(b) {
    var d = b.date.split("-").map(Number), t = (b.timeKnown && b.time ? b.time : "12:00").split(":").map(Number);
    return { y: d[0], m: d[1], d: d[2], h: t[0], min: t[1] || 0, timeKnown: !!(b.timeKnown && b.time), lat: b.place.lat, lng: b.place.lng, tz: b.place.tz,
      manualOffsetMin: typeof b.manualOffsetMin === "number" ? b.manualOffsetMin : undefined };
  }
  function chartOf(b) {
    var k = JSON.stringify([b.date, b.time, b.timeKnown, b.place.lat, b.place.lng, b.place.tz, b.manualOffsetMin, S.houses]);
    if (!cache[k]) cache[k] = Sky.chart(input(b), { houseSystem: S.houses });
    return cache[k];
  }
  function sig(b) { return [b.date, b.time, b.timeKnown, b.place.lat, b.place.lng, b.place.tz, b.manualOffsetMin].join("|"); }
  function yearDist(b) { // the person's own spread of daily scores this year → tercile cut-offs
    var y = new Date().getFullYear(), s = sig(b);
    try { var c = JSON.parse(localStorage.getItem(DIST_KEY)); if (c && c.s === s && c.y === y && c.f === FORMULA) return c; } catch (e) { }
    var natal = chartOf(b), arr = [];
    for (var i = 0; i < 365; i++) arr.push(Sky.dayScore(natal, new Date(y, 0, 1 + i, 12)));
    arr.sort(function (p, q) { return p - q; });
    var out = { s: s, y: y, f: FORMULA, q1: arr[121], q2: arr[243] };
    try { localStorage.setItem(DIST_KEY, JSON.stringify(out)); } catch (e) { }
    return out;
  }
  function toneOf(score, d) { return score >= d.q2 ? "fav" : score <= d.q1 ? "hard" : "mix"; }

  /* ---------- router ---------- */
  function route() { var p = location.hash.replace(/^#\/?/, "").split("/"); return { name: p[0] || "today", a: p[1] ? decodeURIComponent(p[1]) : "", b: p[2] || "" }; }
  var lastRoute = "";
  function render() {
    var r = route(), open = ["welcome", "setup", "about", "settings"];
    if (!S.me && open.indexOf(r.name) < 0) { location.replace("#/welcome"); return; }
    document.documentElement.lang = S.lang;
    var html = "";
    try {
      switch (r.name) {
        case "welcome": html = vWelcome(); break;
        case "setup": html = vForm("me"); break;
        case "reveal": html = vReveal(); break;
        case "today": html = vToday(r.a); break;
        case "chart": html = r.a ? vPoint(r.a, r.b) : vChart(); break;
        case "people": html = r.a === "new" ? vForm("new") : r.b === "edit" ? vForm(r.a) : r.a ? vPerson(r.a) : vPeople(); break;
        case "calendar": html = vCalendar(); break;
        case "journal": html = vJournal(r.a); break;
        case "settings": html = vSettings(); break;
        case "about": html = vAbout(); break;
        case "deep": html = vDeep(); break;
        case "ask": html = r.a === "horary" ? vHoraryForm() : r.a === "h" ? vHorary(r.b) : r.a === "quiz" ? vQuiz() : r.a === "blind" ? vBlind() : r.a === "prompts" ? vPrompts() : r.a === "love" ? vLoveTest() : vAskHub(); break;
        case "love": html = vLove(); break;
        case "here": html = vHere(); break;
        default: html = vToday("");
      }
    } catch (e) {
      console.error(e);
      html = header("Cielo") + '<p class="note">' + esc(e.message) + "</p>";
    }
    main.innerHTML = html;
    var tab = { today: "today", chart: "chart", deep: "chart", love: "chart", people: "people", calendar: "calendar", journal: "journal", ask: "ask" }[r.name] || "";
    document.querySelectorAll(".tabbar a").forEach(function (a) { a.classList.toggle("on", a.dataset.tab === tab); a.querySelector("span").textContent = U().tabs[a.dataset.tab]; });
    document.body.classList.toggle("no-tabs", !S.me || r.name === "welcome" || r.name === "setup" || r.name === "reveal" || (r.name === "people" && (r.a === "new" || r.b === "edit")));
    var here = location.hash;
    if (here !== lastRoute) { window.scrollTo(0, 0); main.classList.remove("enter"); void main.offsetWidth; main.classList.add("enter"); }
    lastRoute = here;
    after(r);
  }
  function after(r) {
    if (r.name === "setup" || (r.name === "people" && (r.a === "new" || r.b === "edit"))) formInit();
    if (r.name === "calendar") { calFill(); yearFill(); }
    if (r.name === "here") { F = { mode: "here", place: null }; showPlace(); }
    if (r.name === "journal") expFill();
    if (r.name === "today") toneFill();
  }

  /* ---------- welcome & reveal ---------- */
  function vWelcome() {
    var u = U();
    var demo = Sky.chart({ y: 2000, m: 1, d: 1, h: 0, min: 0, lat: 0, lng: 0, tz: "UTC", timeKnown: false });
    return '<section class="welcome">' +
      '<div class="w-hero">' + Wheel.svg(demo, { aspects: true }) + "</div>" +
      '<h1 class="brand">Cielo</h1><p class="lede">' + u.tagline + "</p>" +
      '<ul class="ticks"><li>' + g("star") + "<span>" + u.welcome.b1 + "</span></li><li>" + g("today") + "<span>" + u.welcome.b2 + "</span></li><li>" + g("journal") + "<span>" + u.welcome.b3 + "</span></li></ul>" +
      '<a class="btn primary wide" href="#/setup">' + u.welcome.start + "</a>" +
      '<div class="lang-row"><button data-act="lang" data-v="es" class="' + (S.lang === "es" ? "on" : "") + '">Español</button><button data-act="lang" data-v="en" class="' + (S.lang === "en" ? "on" : "") + '">English</button></div>' +
      '<p class="fine">' + g("info") + " " + u.welcome.private + ' · <a href="#/about">' + u.settings.about + "</a></p></section>";
  }
  function bigThree(c, opts) {
    var keys = ["sun", "moon"].concat(c.timeKnown ? ["asc"] : []);
    return '<div class="big3">' + keys.map(function (k) {
      var p = Reading.point(c, k, S.lang);
      return '<a class="b3" href="' + (opts && opts.link === false ? "javascript:void 0" : "#/chart/" + k) + '">' + g(k, "b3-g") +
        '<span class="b3-k">' + p.name + '</span><span class="b3-s">' + g(Sky.SIGN_KEYS[p.sign], "sg") + p.signName + "</span></a>";
    }).join("") + "</div>";
  }
  function vReveal() {
    var u = U(), c = chartOf(S.me), b = S.me;
    var rows = ["sun", "moon"].concat(c.timeKnown ? ["asc"] : []).map(function (k) {
      var p = Reading.point(c, k, S.lang);
      return '<article class="card rv"><div class="kicker">' + p.title + " · " + p.deg + "</div><p>" + p.signText + "</p></article>";
    }).join("");
    return '<section class="reveal">' + header(u.reveal.title, { right: "" }) +
      '<p class="sub">' + fmt(u.reveal.sub, { when: esc(fmtBirthDate(b)), place: esc(Places.label(b.place, S.lang)) }) + "</p>" +
      '<div class="wheel-wrap">' + Wheel.svg(c, { names: names() }) + "</div>" + bigThree(c, { link: false }) + rows +
      '<a class="btn primary wide" href="#/today">' + u.reveal.cta + "</a></section>";
  }
  function names() { var o = {}; Reading.POINTS.forEach(function (k) { o[k] = pn(k); }); return o; }
  function fmtBirthDate(b) { var d = parseDay(b.date); return dfmt(d, { day: "numeric", month: "long", year: "numeric" }); }

  /* ---------- today ---------- */
  function vToday(arg) {
    var u = U(), x = X(), natal = chartOf(S.me), now = new Date(), day = parseDay(arg) || now, key = dkey(day), isToday = key === dkey(now);
    var future = day > now && !isToday, D = Reading.daily(natal, day, S.lang), entry = S.diary[key];
    var prev = dkey(addDays(day, -1)), next = dkey(addDays(day, 1));
    var o = [];
    o.push('<header class="vh today-h"><a class="ib" href="#/today/' + prev + '" aria-label="‹">' + g("back") + "</a>" +
      '<div class="vh-t"><div class="kicker">' + esc(dfmt(day, { weekday: "long" })) + "</div><h1>" + esc(dfmt(day, { day: "numeric", month: "long" })) + "</h1></div>" +
      '<a class="ib" href="#/today/' + next + '" aria-label="›">' + g("fwd") + '</a><a class="ib" href="#/settings" aria-label="' + esc(u.settings.title) + '">' + g("gear") + "</a></header>");
    if (!isToday) o.push('<p class="daynote">' + (future ? u.today.future : u.today.past) + ' <a href="#/today">' + u.today.backToday + "</a></p>");
    o.push('<h2 class="headline">' + esc(D.headline) + "</h2>");
    // moon card
    var m = D.moon, extra = [];
    if (isToday) {
      var voc = Sky.voidOfCourse(now), ing = Sky.nextIngress("moon", now, 3);
      if (ing && ing.date - now < 86400000) extra.push((voc.voc ? fmt(u.today.voc, { time: tfmt(ing.date) }) + " · " : "") + fmt(u.today.ingress, { sign: sname(ing.sign), time: tfmt(ing.date) }));
    }
    o.push('<section class="card moon-card">' + Wheel.moon(m.illum, m.waxing) + '<div class="mc-t"><div class="kicker">' + x.phases[m.phase].n + " · " + fmt(u.today.illum, { p: Math.round(m.illum * 100) }) + "</div>" +
      '<div class="mc-s">' + g(Sky.SIGN_KEYS[m.sign], "sg") + fmt(u.today.moonIn, { sign: sname(m.sign) }) + (D.moonHouse ? ' <span class="pill">' + fmt(u.chart.house, { n: D.moonHouse }) + "</span>" : "") + "</div>" +
      '<p class="mc-d">' + x.phases[m.phase].d + "</p>" + (extra.length ? '<p class="mc-x">' + extra.join("<br>") + "</p>" : "") + "</div></section>");
    // reading
    o.push('<section class="reading">' + D.body.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</section>");
    // do / avoid
    o.push('<section class="card dodont"><div><div class="kicker">' + u.today.do + "</div><ul>" + D.doList.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") +
      '</ul></div><div><div class="kicker">' + u.today.avoid + "</div><ul>" + D.avoidList.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></div></section>");
    // question of the day
    o.push('<section class="card dq"><div class="kicker">' + g("ask") + " " + u2().daily.title + "</div>" + promptBox(D.prompt, u2().daily.ph, u2().daily.save) + "</section>");
    // climate + tone
    var hidden = S.blind && !(entry && entry.r);
    o.push('<section class="card climate"><div class="row-h"><span class="kicker">' + u.today.climate + '</span><a class="mini" href="#/about">' + u.today.toneHow + "</a></div>");
    if (hidden) o.push('<p class="blind">' + g("info") + " " + u.today.blind + "</p>");
    else {
      o.push('<div class="areas">' + Object.keys(D.areas).map(function (a) { var st = D.areas[a]; return '<div class="area ' + st + '"><span>' + u.areas[a] + '</span><b>' + u.state[st] + "</b><i></i></div>"; }).join("") + "</div>");
      o.push('<div class="tone" id="tone" data-score="' + D.score + '"><span class="kicker">' + u.today.tone + '</span> <b>…</b></div>');
    }
    o.push("</section>");
    // transits
    o.push('<section class="block"><h3 class="sh">' + u.today.transits + "</h3>");
    if (!D.transits.length) o.push('<p class="muted">' + u.today.none + "</p>");
    o.push('<div class="list">' + D.transits.map(function (t) {
      return '<details class="tr ' + t.nature + '"><summary>' + '<span class="tr-g">' + g(t.t) + g(t.key, "asp") + g(t.n) + "</span>" +
        '<span class="tr-t">' + esc(t.title) + '<small>' + (t.win ? winShort(t.win) : exactLabel(t, D.noon)) + " · " + t.orb + "</small></span></summary><p>" + esc(t.text) + "</p>" +
        (t.house ? '<p class="tr-x">' + esc(fmt(U().tr2.house, { n: t.house, dom: X().houses[t.house - 1].dom })) + "</p>" : "") + (t.win ? winLong(t.win) : "") + "</details>";
    }).join("") + "</div></section>");
    // retrogrades
    o.push('<section class="block"><h3 class="sh">' + u.today.retro + "</h3>" + (D.retros.length ? '<div class="chips">' + D.retros.map(function (r) {
      return '<span class="chip">' + g(r.body) + pn(r.body) + " " + g("retro", "rx") + ' <small>' + fmt(u.today.until, { date: dfmt(r.to, { day: "numeric", month: "short" }) }) + "</small></span>";
    }).join("") + "</div>" : '<p class="muted">' + u.today.noRetro + "</p>") + "</section>");
    // rating
    if (!future) {
      o.push('<section class="card rate"><div class="kicker">' + u.today.rate + "</div>" + rateRow(key, entry) +
        '<p class="muted small">' + (entry && entry.r ? fmt(u.today.rated, { label: u.rate[entry.r - 1] }) : u.today.rateLater) + "</p></section>");
    }
    o.push(askCard("day", key));
    return o.join("");
  }
  function exactLabel(t, noon) {
    var u = U().tr, d = t.exact;
    if (d == null || !isFinite(d) || Math.abs(d) > 45) return u.far;
    if (t.t === "moon") { var when = new Date(noon.getTime() + d * 86400000); return (d >= 0 ? fmt(u.at, { time: tfmt(when) }) : fmt(u.was, { time: tfmt(when) })); }
    var n = Math.round(d);
    if (n === 0) return u.today; if (n === 1) return u.tomorrow; if (n === -1) return u.yesterday;
    return n > 0 ? fmt(u.inDays, { n: n }) : fmt(u.ago, { n: -n });
  }
  function rateRow(key, entry) {
    return '<div class="rate-row">' + [1, 2, 3, 4, 5].map(function (n) {
      return '<button class="rt' + (entry && entry.r === n ? " on" : "") + '" data-act="rate" data-day="' + key + '" data-v="' + n + '" aria-label="' + esc(U().rate[n - 1]) + '"><b>' + n + "</b><span>" + esc(U().rate[n - 1]) + "</span></button>";
    }).join("") + "</div>";
  }
  function toneFill() {
    var el = document.getElementById("tone"); if (!el) return;
    setTimeout(function () {
      var d = yearDist(S.me), t = toneOf(+el.dataset.score, d);
      el.querySelector("b").textContent = U().tone[t]; el.classList.add(t);
    }, 30);
  }
  function askCard(kind, id) {
    var u = U().ask, ph = kind === "chart" ? u.chartPh : kind === "syn" ? u.synPh : u.ph, note = kind === "chart" ? u.noteChart : kind === "syn" ? u.noteSyn : u.note;
    return '<section class="card ask"><div class="row-h"><span class="kicker">' + g("spark") + " " + u.title + "</span></div>" +
      '<textarea id="ask-q" rows="3" placeholder="' + esc(ph) + '"></textarea>' +
      '<button class="btn primary" data-act="ask" data-kind="' + kind + '" data-id="' + esc(id || "") + '">' + u.go + "</button><p class=\"muted small\">" + note + "</p></section>";
  }

  /* ---------- chart ---------- */
  function vChart() {
    var u = U(), x = X(), b = S.me, c = chartOf(b), o = [];
    o.push(header(u.chart.title, { kicker: esc(b.name || "") }));
    o.push('<div class="wheel-wrap" id="wheel">' + Wheel.svg(c, { names: names() }) + '</div><p class="muted small center">' + u.chart.tapHint + "</p>");
    o.push('<p class="meta">' + esc(fmt(u.chart.born, { date: fmtBirthDate(b), time: c.timeKnown ? b.time : u.chart.noTimeShort, off: Sky.fmtOffset(c.offset), place: Places.label(b.place, S.lang) })) +
      (c.timeKnown ? " · " + u.chart.system[c.houseSystem] : "") + ' · <a href="#/setup">' + u.chart.edit + "</a></p>");
    if (!c.timeKnown) o.push('<p class="note">' + g("info") + " " + u.chart.noTime + (c.moonRange ? " " + fmt(u.chart.moonRange, { a: Reading.deg(c.moonRange[0]) + " " + sname(Sky.signOf(c.moonRange[0])), b: Reading.deg(c.moonRange[1]) + " " + sname(Sky.signOf(c.moonRange[1])) }) : "") + "</p>");
    if (c.houseFallback) o.push('<p class="note">' + g("info") + " " + u.chart.fallback + "</p>");
    o.push(bigThree(c));
    o.push('<a class="card deep-cta" href="#/deep">' + g("spark") + "<span><b>" + u2().deep.cta + "</b><small>" + u2().deep.ctaSub + "</small></span>" + g("fwd", "chev") + "</a>");
    o.push('<a class="card deep-cta" href="#/love">' + g("venus") + "<span><b>" + X().loveUI.cta + "</b><small>" + X().loveUI.ctaSub + "</small></span>" + g("fwd", "chev") + "</a>");
    if (c.timeKnown) o.push(precisionCard(c));
    // points
    o.push('<section class="block"><h3 class="sh">' + u.chart.points + '</h3><div class="list">' + POINTS2.filter(function (k) { return c.points[k]; }).map(function (k) {
      var p = Reading.point(c, k, S.lang);
      return '<a class="row" href="#/chart/' + k + '">' + g(k, "rg") + '<span class="row-t"><b>' + p.name + "</b>" +
        '<span>' + g(Sky.SIGN_KEYS[p.sign], "sg") + p.signName + " " + p.deg + (p.retro ? " " + g("retro", "rx") : "") + "</span></span>" +
        (p.dignity ? '<span class="pill dg ' + p.dignity.key + '">' + p.dignity.name + "</span>" : "") + (p.house ? '<span class="pill">' + p.house + "</span>" : "") + g("fwd", "chev") + "</a>";
    }).join("") + "</div></section>");
    // balance
    var bal = Reading.balance(c, S.lang);
    o.push('<section class="block"><h3 class="sh">' + u.chart.balance + '</h3><div class="card bal"><div class="kicker">' + u.chart.elements + "</div>" + bars(bal.b.elements, x.elements) +
      '<div class="kicker">' + u.chart.modes + "</div>" + bars(bal.b.modes, x.modes) +
      "<p>" + fmt(u.chart.dominant, { list: bal.dominant.join(" · ") }) + " " + bal.lack.join(" ") + "</p></div></section>");
    // aspects
    o.push('<section class="block"><h3 class="sh">' + u.chart.aspects + '</h3><div class="list" id="asp-list">' + c.aspects.map(function (a, i) { return aspRow(a, i >= 10); }).join("") + "</div>" +
      (c.aspects.length > 10 ? '<button class="btn ghost small" data-act="more-asp">' + fmt(u.chart.showAll, { n: c.aspects.length }) + "</button>" : "") + "</section>");
    // houses
    if (c.cusps) {
      o.push('<section class="block"><h3 class="sh">' + u.chart.houses + " · " + u.chart.system[c.houseSystem] + '</h3><div class="houses">' + c.cusps.map(function (cu, i) {
        return '<div class="hs"><b>' + (i + 1) + "</b><span>" + g(Sky.SIGN_KEYS[Sky.signOf(cu)], "sg") + Reading.deg(cu) + "</span><small>" + x.houses[i].t + "</small></div>";
      }).join("") + "</div></section>");
    }
    o.push(askCard("chart", ""));
    return o.join("");
  }
  function bars(obj, names) {
    var tot = 0; Object.keys(obj).forEach(function (k) { tot += obj[k]; });
    return '<div class="bars">' + Object.keys(obj).map(function (k) {
      var pct = tot ? Math.round(obj[k] / tot * 100) : 0;
      return '<div class="bar"><span>' + names[k].n + '</span><i><em style="width:' + pct + '%"></em></i><b>' + pct + "%</b></div>";
    }).join("") + "</div>";
  }
  function aspRow(a, hide) {
    var t = Reading.aspect(a, S.lang), u = U();
    return '<details class="tr ' + t.nature + (hide ? " extra" : "") + '"' + (hide ? " hidden" : "") + "><summary>" + '<span class="tr-g">' + g(a.a) + g(a.key, "asp") + g(a.b) + "</span>" +
      '<span class="tr-t">' + esc(t.title) + "<small>" + fmt(u.chart.orb, { o: t.orb }) + " · " + (a.applying ? u.chart.applying : u.chart.separating) + "</small></span></summary><p>" + esc(t.text) + "</p></details>";
  }
  function vPoint(k, who) {
    var u = U(), b = who ? person(who) : S.me; if (!b) return vChart();
    var c = chartOf(b), p = Reading.point(c, k, S.lang); if (!p) return vChart();
    var o = [header(p.name, { back: who ? "#/people/" + who : "#/chart", kicker: esc(b.name || "") })];
    o.push('<section class="pt-hero">' + g(k, "pt-g") + '<div><div class="pt-s">' + g(Sky.SIGN_KEYS[p.sign], "sg") + p.signName + " " + p.deg + (p.retro ? " " + g("retro", "rx") : "") + "</div>" +
      (p.houseTitle ? '<div class="kicker">' + p.houseTitle + "</div>" : "") + "</div></section>");
    o.push('<p class="pt-d">' + esc(p.desc) + "</p>");
    if (p.signText) o.push('<article class="card"><div class="kicker">' + esc(p.title) + "</div><p>" + esc(p.signText) + "</p></article>");
    if (p.houseText) o.push('<article class="card"><div class="kicker">' + esc(p.houseTitle) + "</div><p>" + esc(p.houseText) + "</p></article>");
    if (p.dignity) o.push('<article class="card"><div class="kicker">' + u2().extra.dignity + " · " + p.dignity.name + "</div><p>" + esc(p.dignity.text) + "</p></article>");
    if (k === "lilith") o.push('<p class="note">' + g("info") + " " + u2().extra.lilithNote + "</p>");
    if (p.prompts && !who) o.push('<section class="think"><div class="kicker">' + u2().deep.think + "</div>" + p.prompts.map(function (q, i) { return promptBox({ id: "natal-" + k + "-" + i, q: q }); }).join("") + "</section>");
    var mine = c.aspects.filter(function (a) { return a.a === k || a.b === k; });
    o.push('<section class="block"><h3 class="sh">' + u.point.aspects + '</h3><div class="list">' + (mine.length ? mine.map(function (a) { return aspRow(a, false); }).join("") : '<p class="muted">' + u.point.none + "</p>") + "</div></section>");
    var sign = X().signs[p.sign];
    o.push('<article class="card sign-card">' + g(Sky.SIGN_KEYS[p.sign], "sign-big") + "<div><b>" + sign.n + '</b><div class="kicker">' + X().elements[sign.el].n + " · " + X().modes[sign.mo].n + " · " + pn(sign.ruler) + "</div><p>" + sign.d + ' <span class="muted">' + sign.kw + "</span></p></div></article>");
    return o.join("");
  }

  /* ---------- people ---------- */
  function person(id) { return S.people.filter(function (p) { return p.id === id; })[0] || null; }
  function vPeople() {
    var u = U(), o = [header(u.people.title)];
    o.push('<a class="btn primary wide" href="#/people/new">' + g("plus") + " " + u.people.add + "</a>");
    if (!S.people.length) o.push('<p class="empty">' + u.people.empty + "</p>");
    o.push('<div class="list">' + S.people.map(function (p) {
      var c = chartOf(p);
      return '<a class="row person" href="#/people/' + p.id + '"><span class="av">' + esc((p.name || "?").charAt(0).toUpperCase()) + '</span><span class="row-t"><b>' + esc(p.name) + "</b><span>" +
        g("sun", "sg") + sname(Sky.signOf(c.points.sun.lon)) + " · " + g("moon", "sg") + sname(Sky.signOf(c.points.moon.lon)) + (c.timeKnown ? " · ↑ " + sname(Sky.signOf(c.points.asc.lon)) : "") +
        "</span></span>" + (p.rel ? '<span class="pill">' + (u.rel[p.rel] || "") + "</span>" : "") + g("fwd", "chev") + "</a>";
    }).join("") + "</div>");
    return o.join("");
  }
  function vPerson(id) {
    var u = U(), x = X(), u2 = U().syn2, p = person(id); if (!p) return vPeople();
    var c = chartOf(p), me = chartOf(S.me), cp = Reading.couple(me, c, p.name, S.lang, new Date()), syn = Reading.synastry(me, c, p.name, S.lang), o = [];
    var myName = esc(S.me.name || (S.lang === "es" ? "Tú" : "You"));
    o.push(header(esc(p.name), { back: "#/people", kicker: p.rel ? u.rel[p.rel] : "", right: '<a class="ib" href="#/people/' + id + '/edit" aria-label="' + u.people.edit + '">' + g("gear") + "</a>" }));
    o.push('<div class="wheel-wrap small">' + Wheel.svg(c, { names: names() }) + "</div>" + bigThree(c, { link: false }));
    o.push('<p class="meta">' + esc(fmt(u.chart.born, { date: fmtBirthDate(p), time: c.timeKnown ? p.time : u.chart.noTimeShort, off: Sky.fmtOffset(c.offset), place: Places.label(p.place, S.lang) })) + "</p>");
    o.push('<section class="block"><h3 class="sh">' + fmt(u.syn.title, { a: myName, b: esc(p.name) }) + "</h3>" + (syn.summary ? '<p class="lede-s">' + syn.summary + "</p>" : ""));
    // dimensions
    o.push('<div class="card dims"><div class="kicker">' + u2.dims + "</div>" + Object.keys(cp.dims).map(function (d) {
      var dm = cp.dims[d], tot = Math.max(1.6, dm.f + dm.t), fw = Math.round(dm.f / tot * 100), tw = Math.round(dm.t / tot * 100);
      return '<div class="dim ' + dm.level + '"><div class="dim-h"><b>' + x.dims.names[d] + "</b><span>" + esc(x.dims.level[d][dm.level]) + '</span></div><div class="dim-bar"><i class="f" style="width:' + fw + '%"></i><i class="t" style="width:' + tw + '%"></i></div></div>';
    }).join("") + '<p class="muted small"><span class="dot f"></span> ' + u2.flowWord + ' &nbsp; <span class="dot t"></span> ' + u2.tensionWord + "</p></div>");
    // strengths and challenges
    function mini(list) { return list.length ? "<ul class=\"mini-l\">" + list.map(function (s2) { return "<li>" + g(s2.a, "sg") + g(s2.key, "asp") + g(s2.b, "sg") + " " + esc(s2.topic) + "</li>"; }).join("") + "</ul>" : '<p class="muted small">' + u2.none + "</p>"; }
    o.push('<div class="two-cards"><div class="card"><div class="kicker ok">' + u2.strengths + "</div>" + mini(cp.strengths) + '</div><div class="card"><div class="kicker no">' + u2.challenges + "</div>" + mini(cp.challenges) + "</div></div>");
    // elements
    var sb = Reading.balance(me, S.lang).b.elements, ob = Reading.balance(c, S.lang).b.elements;
    o.push('<div class="card duo"><div class="kicker">' + u.syn.elements + '</div><div class="duo-g">' + ["fire", "earth", "air", "water"].map(function (e) {
      var ts = sum(sb), to = sum(ob);
      return '<div class="duo-r"><span>' + x.elements[e].n + '</span><i><em style="width:' + Math.round(sb[e] / ts * 100) + '%"></em></i><i class="b"><em style="width:' + Math.round(ob[e] / to * 100) + '%"></em></i></div>';
    }).join("") + '</div><p class="muted small"><span class="dot a"></span> ' + myName + ' &nbsp; <span class="dot b"></span> ' + esc(p.name) + "</p></div>");
    // aspects one by one
    o.push('<h3 class="sh">' + u2.aspects + '</h3><div class="list">' + (cp.items.length ? cp.items.map(function (s2) {
      return '<details class="tr ' + s2.nature + '"><summary><span class="tr-g">' + g(s2.a) + g(s2.key, "asp") + g(s2.b) + '</span><span class="tr-t">' + esc(cap(s2.left)) + " · " + s2.asp + " · " + esc(s2.right) +
        "<small>" + u.syn.dyn[s2.nature] + " · " + s2.orb + "</small></span></summary><p><b>" + esc(s2.topic) + "</b> " + esc(s2.text) + "</p></details>";
    }).join("") : '<p class="muted">' + u.syn.none + "</p>") + "</div></section>");
    // house overlays
    o.push('<section class="block"><h3 class="sh">' + u2.overlays + "</h3>" + (cp.theirs ? '<div class="list">' + cp.theirs.map(function (ov) {
      return '<div class="row ov">' + g(ov.k, "rg") + '<span class="row-t"><span>' + esc(Reading.overlayText(ov.k, ov.house, "theirs", S.lang)) + '</span></span><span class="pill">' + ov.house + "</span></div>";
    }).join("") + "</div>" : '<p class="muted small">' + u2.noTimeOverlay + "</p>"));
    if (cp.mine) o.push('<details class="more"><summary>' + u2.overlaysMine + '</summary><div class="list">' + cp.mine.map(function (ov) {
      return '<div class="row ov">' + g(ov.k, "rg") + '<span class="row-t"><span>' + esc(Reading.overlayText(ov.k, ov.house, "mine", S.lang)) + '</span></span><span class="pill">' + ov.house + "</span></div>";
    }).join("") + "</div></details>");
    o.push("</section>");
    // the composite chart and its cycles
    o.push('<section class="block"><h3 class="sh">' + u2.composite + '</h3><p class="muted small">' + x.composite.intro + '</p><div class="wheel-wrap small static">' + Wheel.svg(cp.comp, { names: names() }) + "</div>" +
      ["sun", "moon", "venus"].map(function (k) { return '<article class="card comp"><div class="kicker">' + g(k) + " " + esc(pn(k) + " · " + sname(Sky.signOf(cp.comp.points[k].lon))) + "</div><p>" + esc(cp.compText[k]) + "</p></article>"; }).join("") +
      '<h3 class="sh">' + u2.compTiming + "</h3>" + (cp.timing.length ? '<div class="list">' + cp.timing.map(function (t) {
        return '<details class="tr ' + t.nature + '"><summary><span class="tr-g">' + g(t.t) + g(t.key, "asp") + g(t.n) + '</span><span class="tr-t">' + esc(t.title) + "<small>" + (t.win ? winShort(t.win) : "") + "</small></span></summary><p>" + esc(t.text) + "</p>" + (t.win ? winLong(t.win) : "") + "</details>";
      }).join("") + "</div>" : '<p class="muted small">' + U().year.none + "</p>") + "</section>");
    // questions to talk about together
    o.push('<section class="card talk"><div class="kicker">' + g("people") + " " + u2.talk + "</div>" + cp.talk.map(function (t, i) { return promptBox({ id: "couple-" + id + "-" + t.dim + "-" + i, q: t.q }); }).join("") + "</section>");
    o.push(askCard("syn", id));
    o.push('<a class="card deep-cta" href="#/love">' + g("venus") + "<span><b>" + X().loveUI.cta + "</b><small>" + X().loveUI.ctaSub + "</small></span>" + g("fwd", "chev") + "</a>");
    o.push('<button class="btn ghost danger" data-act="del-person" data-id="' + id + '">' + u.people.delete + "</button>");
    return o.join("");
  }
  function sum(o) { var t = 0; Object.keys(o).forEach(function (k) { t += o[k]; }); return t || 1; }

  /* ---------- birth form (me / new person / edit person) ---------- */
  var F = null; // form state
  function vForm(mode) {
    var u = U(), f = u.form, isMe = mode === "me", p = isMe ? S.me : mode === "new" ? null : person(mode);
    if (!isMe && mode !== "new" && !p) return vPeople();
    F = { mode: mode, place: p ? p.place : null };
    var title = isMe ? (S.me ? f.editMe : f.titleMe) : p ? f.editPerson : f.titlePerson;
    var back = isMe ? (S.me ? "#/chart" : "#/welcome") : p ? "#/people/" + p.id : "#/people";
    var o = [header(title, { back: back, right: "" })];
    o.push('<form class="bform" id="bform" autocomplete="off" novalidate>');
    o.push('<label class="fl"><span>' + f.name + '</span><input name="name" maxlength="40" placeholder="' + esc(isMe ? f.namePh : f.namePhPerson) + '" value="' + esc(p ? p.name || "" : "") + '"></label>');
    if (!isMe) o.push('<div class="fl"><span>' + f.rel + '</span><div class="seg">' + ["partner", "friend", "family", "work", "other"].map(function (r) {
      return '<label><input type="radio" name="rel" value="' + r + '"' + ((p ? p.rel : "friend") === r ? " checked" : "") + "><span>" + u.rel[r] + "</span></label>";
    }).join("") + "</div></div>");
    o.push('<div class="two"><label class="fl"><span>' + f.date + '</span><input type="date" name="date" required min="1800-01-01" max="2100-12-31" value="' + esc(p ? p.date : "") + '"></label>' +
      '<label class="fl"><span>' + f.time + '</span><input type="time" name="time" value="' + esc(p && p.timeKnown ? p.time : "") + '"' + (p && !p.timeKnown ? " disabled" : "") + "></label></div>");
    o.push('<label class="check"><input type="checkbox" name="notime"' + (p && !p.timeKnown ? " checked" : "") + "><span>" + f.noTime + '</span></label><p class="hint">' + f.timeHint + "</p>");
    o.push('<div class="fl"><span>' + f.place + '</span><div id="place-chosen"></div><div id="place-pick"><input name="q" id="place-q" placeholder="' + esc(f.placePh) + '" autocomplete="off" autocapitalize="words" spellcheck="false">' +
      '<div class="sugg" id="sugg"></div></div></div>');
    o.push('<details class="adv"' + (p && typeof p.manualOffsetMin === "number" ? " open" : "") + "><summary>" + f.manual + '</summary><div class="two"><label class="fl"><span>' + f.lat + '</span><input name="lat" inputmode="decimal" value="' + (p ? p.place.lat : "") + '"></label>' +
      '<label class="fl"><span>' + f.lng + '</span><input name="lng" inputmode="decimal" value="' + (p ? p.place.lng : "") + '"></label></div>' +
      '<label class="fl"><span>' + f.tz + '</span><select name="tz">' + Places.zones().map(function (z) { return '<option value="' + z + '"' + (p && p.place.tz === z ? " selected" : "") + ">" + z.replace(/_/g, " ") + "</option>"; }).join("") + "</select></label>" +
      '<label class="fl"><span>' + f.offset + '</span><input name="offset" inputmode="numeric" placeholder="−240" value="' + (p && typeof p.manualOffsetMin === "number" ? p.manualOffsetMin : "") + '"></label><p class="hint">' + f.offsetHint + "</p></details>");
    o.push('<p class="preview" id="preview"></p><p class="err" id="ferr" role="alert"></p>');
    o.push('<button class="btn primary wide" type="submit">' + (p ? f.saveEdit : f.save) + "</button></form>");
    return o.join("");
  }
  function formEl() { return document.getElementById("bform"); }
  function formInit() {
    var form = formEl(); if (!form) return;
    if (F.place) syncCoords();
    else { try { var dev = Intl.DateTimeFormat().resolvedOptions().timeZone; if (dev) form.tz.value = dev; } catch (e) { } }
    showPlace(); preview();
  }
  function showPlace() {
    var box = document.getElementById("place-chosen"), pick = document.getElementById("place-pick"), u = U().form;
    if (!box) return;
    if (F.place) {
      box.innerHTML = '<div class="chosen">' + g("star") + "<span><b>" + esc(F.place.name) + "</b>" + esc(Places.label(F.place, S.lang).replace(F.place.name, "").replace(/^,\s*/, "")) +
        "<small>" + coordTxt(F.place) + " · " + esc(F.place.tz) + '</small></span><button type="button" class="mini" data-act="place-change">' + u.change + "</button></div>";
      pick.hidden = true;
    } else { box.innerHTML = ""; pick.hidden = false; }
  }
  function coordTxt(p) { return Math.abs(p.lat).toFixed(2) + "°" + (p.lat >= 0 ? "N" : "S") + " " + Math.abs(p.lng).toFixed(2) + "°" + (p.lng >= 0 ? "E" : (S.lang === "es" ? "O" : "W")); }
  function suggest(list, q, extra) {
    var el = document.getElementById("sugg"), u = U().form; if (!el) return;
    var h = list.map(function (p, i) {
      return '<button type="button" class="sg-row" data-act="place-pick" data-i="' + i + '"><b>' + esc(p.name) + "</b><span>" + esc([p.region !== p.name ? p.region : "", p.country].filter(Boolean).join(", ")) + "</span></button>";
    }).join("");
    if (q && q.length >= 2) h += '<button type="button" class="sg-row world" data-act="place-online">' + g("wheel") + " " + esc(fmt(u.searchWorld, { q: q })) + "<small>" + u.online + "</small></button>";
    if (extra) h += '<p class="hint">' + extra + "</p>";
    el.innerHTML = h; suggest.list = list;
  }
  function readForm() {
    var form = formEl(), f = U().form, r = { name: form.name.value.trim().slice(0, 40), date: form.date.value, timeKnown: !form.notime.checked, time: form.time.value };
    if (!r.timeKnown) r.time = "";
    if (!r.timeKnown || !r.time) { r.timeKnown = !!r.time && !form.notime.checked; }
    var lat = parseFloat(String(form.lat.value).replace(",", ".")), lng = parseFloat(String(form.lng.value).replace(",", ".")), tz = form.tz.value;
    var place = F.place;
    if (place && (isFinite(lat) && Math.abs(lat - place.lat) > 1e-4 || isFinite(lng) && Math.abs(lng - place.lng) > 1e-4 || tz !== place.tz)) {
      place = { name: place.name, region: place.region, cc: place.cc, country: place.country, lat: isFinite(lat) ? lat : place.lat, lng: isFinite(lng) ? lng : place.lng, tz: tz };
    }
    if (!place && isFinite(lat) && isFinite(lng)) place = { name: (lat.toFixed(2) + ", " + lng.toFixed(2)), region: "", cc: "", lat: lat, lng: lng, tz: tz };
    var off = String(form.offset.value).trim().replace("−", "-");
    r.manualOffsetMin = off !== "" && isFinite(+off) ? Math.round(+off) : undefined;
    r.place = place;
    if (!F.mode || F.mode !== "me") { var rel = form.querySelector('input[name="rel"]:checked'); r.rel = rel ? rel.value : "other"; }
    r.err = !r.date ? f.needDate : !place ? f.needPlace : (Math.abs(place.lat) > 90 || Math.abs(place.lng) > 180) ? f.badCoords : !Sky.validTz(place.tz) ? f.badTz : (F.mode !== "me" && !r.name ? f.needName : "");
    return r;
  }
  function preview() {
    var el = document.getElementById("preview"); if (!el) return;
    var r = readForm(), f = U().form;
    if (!r.date || !r.place || !Sky.validTz(r.place.tz)) { el.textContent = ""; return; }
    var d = r.date.split("-").map(Number), t = (r.timeKnown ? r.time : "12:00").split(":").map(Number);
    var c = Sky.localToUTC(d[0], d[1], d[2], t[0], t[1] || 0, r.place.tz, r.manualOffsetMin), off = Sky.fmtOffset(c.offset);
    var utc = new Date(c.utc), utcTxt = new Intl.DateTimeFormat(S.lang, { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "UTC" }).format(utc);
    var s = r.timeKnown ? fmt(f.preview, { local: (r.time || "12:00"), off: off, utc: utcTxt }) : f.noTimeNote;
    if (c.status === "gap") s += " " + fmt(f.gap, { off: off });
    if (c.status === "ambiguous") s += " " + fmt(f.ambiguous, { off: off });
    if (c.status === "manual") s += " " + fmt(f.manualNote, { off: off });
    el.textContent = s;
  }
  function submitForm() {
    var r = readForm(), err = document.getElementById("ferr");
    if (r.err) { err.textContent = r.err; return; }
    var rec = { name: r.name, date: r.date, time: r.time, timeKnown: r.timeKnown, place: r.place, manualOffsetMin: r.manualOffsetMin };
    if (F.mode === "me") { var first = !S.me; S.me = rec; save(); cache = {}; location.hash = first ? "#/reveal" : "#/chart"; return; }
    rec.rel = r.rel;
    if (F.mode === "new") { rec.id = uid(); S.people.push(rec); }
    else { var p = person(F.mode); rec.id = p.id; S.people[S.people.indexOf(p)] = rec; }
    save(); location.hash = "#/people/" + rec.id;
  }

  /* ---------- calendar ---------- */
  var calCache = null, calFilter = "all";
  function vCalendar() {
    var u = U(), tz = ""; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { }
    return header(u.cal.title) + '<section id="year" class="year"><p class="loading">' + g("wheel", "spin") + " " + u.cal.loading + "</p></section>" + '<h3 class="sh">' + u.cal.title + "</h3>" + '<div class="chips filt">' + ["all", "moons", "retro", "ingress", "eclipses"].map(function (k) {
      return '<button class="chip' + (calFilter === k ? " on" : "") + '" data-act="cal-f" data-v="' + k + '">' + u.cal[k] + "</button>";
    }).join("") + '</div><p class="muted small">' + esc(fmt(u.cal.tz, { tz: tz.replace(/_/g, " ") })) + '</p><div id="cal"><p class="loading">' + g("wheel", "spin") + " " + u.cal.loading + "</p></div>";
  }
  function calEvents() {
    var now = new Date(), start = new Date(now.getFullYear(), now.getMonth(), 1), end = new Date(now.getFullYear(), now.getMonth() + 12, 1);
    var k = dkey(start) + S.lang; if (calCache && calCache.k === k) return calCache.ev;
    var ev = [].concat(Sky.lunations(start, end), Sky.eclipses(start, end), Sky.stationsAndIngresses(start, end));
    ev = ev.filter(function (e) { // an eclipse replaces the lunation it falls on
      if (e.type !== "newMoon" && e.type !== "fullMoon") return true;
      return !ev.some(function (o) { return (o.type === "solarEclipse" || o.type === "lunarEclipse") && Math.abs(o.date - e.date) < 86400000; });
    });
    ev.sort(function (a, b) { return a.date - b.date; });
    calCache = { k: k, ev: ev };
    return ev;
  }
  function calFill() {
    var box = document.getElementById("cal"); if (!box) return;
    setTimeout(function () {
      var u = U(), ev = calEvents(), natal = S.me ? chartOf(S.me) : null, now = Date.now() - 86400000, out = [], month = "";
      ev.filter(function (e) {
        if (e.date < now) return false;
        if (calFilter === "moons") return e.type === "newMoon" || e.type === "fullMoon";
        if (calFilter === "retro") return e.type === "stationRetro" || e.type === "stationDirect";
        if (calFilter === "ingress") return e.type === "ingress";
        if (calFilter === "eclipses") return e.type === "solarEclipse" || e.type === "lunarEclipse";
        return true;
      }).forEach(function (e) {
        var m = dfmt(e.date, { month: "long", year: "numeric" });
        if (m !== month) { out.push('<h3 class="sh month">' + esc(cap(m)) + "</h3>"); month = m; }
        out.push(evRow(e, natal, u));
      });
      box.innerHTML = out.join("") || '<p class="muted">—</p>';
    }, 20);
  }
  function evRow(e, natal, u) {
    var title, icon, cls = "ev-" + e.type, lon = e.lon != null ? e.lon : null, extra = [];
    if (e.type === "newMoon" || e.type === "fullMoon") { title = fmt(u.cal[e.type], { sign: sname(Sky.signOf(e.lon)) }); icon = Wheel.moon(e.type === "fullMoon" ? 1 : 0, true, "ev-moon"); }
    else if (e.type === "solarEclipse" || e.type === "lunarEclipse") { title = cap(fmt(u.cal[e.type], { kind: u.cal.kind[e.kind] || e.kind, sign: sname(Sky.signOf(e.lon)) })); icon = '<span class="ev-ecl">' + g(e.type === "solarEclipse" ? "sun" : "moon") + "</span>"; }
    else if (e.type === "ingress") { title = fmt(u.cal.ingressEv, { planet: pn(e.body), sign: sname(e.sign) }) + (e.retro ? " " + u.cal.retroNote : ""); icon = g(e.body); lon = e.sign * 30; }
    else { title = fmt(u.cal[e.type], { planet: pn(e.body) }); icon = '<span class="ev-st">' + g(e.body) + (e.type === "stationRetro" ? g("retro", "rx") : "") + "</span>"; }
    if (natal && lon != null && e.type !== "ingress") {
      ["sun", "moon", "mercury", "venus", "mars", "asc", "mc"].forEach(function (k) { if (natal.points[k] && Sky.sep(lon, natal.points[k].lon) <= 3) extra.push(fmt(u.cal.touches, { p: pn(k) })); });
      if (natal.cusps) extra.push(fmt(u.cal.inHouse, { n: Sky.houseOf(lon, natal.cusps) }));
    } else if (natal && e.type === "ingress" && natal.cusps && e.body !== "sun") {
      extra.push(fmt(u.cal.inHouse, { n: Sky.houseOf(e.sign * 30 + 0.01, natal.cusps) }));
    }
    var when = dfmt(e.date, { weekday: "short", day: "numeric" }) + " · " + tfmt(e.date);
    return '<div class="ev ' + cls + '"><span class="ev-i">' + icon + '</span><span class="ev-t"><b>' + esc(title) + "</b><small>" + esc(when) + (extra.length ? " · " + esc(extra.join(" · ")) : "") + "</small></span></div>";
  }

  /* ---------- journal & experiment ---------- */
  var TAGS = ["work", "love", "health", "social", "family", "rest", "money", "creativity"];
  function vJournal(arg) {
    var u = U(), j = u.journal, now = new Date(), day = parseDay(arg) || now, key = dkey(day), e = S.diary[key] || {}, o = [];
    if (day > now && key !== dkey(now)) { day = now; key = dkey(now); e = S.diary[key] || {}; }
    o.push(header(j.title));
    o.push('<section class="card jr"><div class="row-h"><span class="kicker">' + (key === dkey(now) ? j.today : esc(dfmt(day, { weekday: "long", day: "numeric", month: "long" }))) + '</span><input type="date" class="mini-date" id="j-date" max="' + dkey(now) + '" value="' + key + '" aria-label="' + j.pick + '"></div>' +
      rateRow(key, S.diary[key]) + '<div class="kicker">' + j.tags + '</div><div class="chips tags">' + TAGS.map(function (t) {
        return '<button type="button" class="chip' + (e.tags && e.tags.indexOf(t) >= 0 ? " on" : "") + '" data-act="tag" data-v="' + t + '">' + u.tags[t] + "</button>";
      }).join("") + '</div><label class="fl"><span>' + j.note + '</span><textarea id="j-note" rows="3" maxlength="600" placeholder="' + esc(j.notePh) + '">' + esc(e.note || "") + "</textarea></label>" +
      '<button class="btn primary" data-act="j-save" data-day="' + key + '">' + j.save + "</button></section>");
    o.push('<section class="card exp" id="exp"><div class="kicker">' + g("spark") + " " + u.exp.title + "</div><p>" + u.exp.intro + '</p><div id="exp-body"><p class="loading">' + g("wheel", "spin") + "</p></div>" +
      '<label class="switch"><input type="checkbox" data-act="blind"' + (S.blind ? " checked" : "") + "><span><b>" + u.exp.blind + "</b><small>" + u.exp.blindHint + "</small></span></label></section>");
    var keys = Object.keys(S.diary).filter(function (k) { return S.diary[k] && S.diary[k].r; }).sort().reverse();
    o.push('<section class="block"><h3 class="sh">' + j.history + "</h3>" + (keys.length ? '<div class="list">' + keys.slice(0, 60).map(function (k) {
      var en = S.diary[k], d = parseDay(k);
      return '<a class="row jrow" href="#/journal/' + k + '"><span class="jr-n r' + en.r + '">' + en.r + '</span><span class="row-t"><b>' + esc(cap(dfmt(d, { weekday: "short", day: "numeric", month: "short" }))) + "</b><span>" +
        esc([u.rate[en.r - 1]].concat((en.tags || []).map(function (t) { return u.tags[t]; })).join(" · ")) + (en.note ? " — " + esc(en.note.slice(0, 60)) : "") + "</span></span>" + g("fwd", "chev") + "</a>";
    }).join("") + "</div>" : '<p class="muted">' + j.empty + "</p>") + "</section>");
    return o.join("");
  }
  function expFill() {
    var box = document.getElementById("exp-body"); if (!box) return;
    setTimeout(function () {
      var u = U().exp, natal = chartOf(S.me), dist = yearDist(S.me), MIN = 14;
      var pts = Object.keys(S.diary).filter(function (k) { return S.diary[k] && S.diary[k].r; }).map(function (k) { return { score: Sky.dayScore(natal, parseDay(k)), rating: S.diary[k].r }; });
      var res = Reading.experiment(pts, dist), h = [];
      if (res.n < MIN) h.push('<div class="prog"><i style="width:' + Math.round(res.n / MIN * 100) + '%"></i></div><p class="muted small">' + fmt(u.need, { n: res.n, days: res.n === 1 ? u.day : u.days, min: MIN }) + "</p>");
      else {
        h.push('<div class="kicker">' + u.groups + '</div><div class="egroups">' + ["fav", "mix", "hard"].map(function (k) {
          var gr = res.groups[k];
          return '<div class="eg ' + k + '"><b>' + (gr.m == null ? "—" : gr.m.toFixed(1).replace(".", S.lang === "es" ? "," : ".")) + "</b><i><em style=\"height:" + (gr.m == null ? 0 : Math.round(gr.m / 5 * 100)) + '%"></em></i><span>' + U().tone[k] + "</span><small>" + fmt(u.n, { n: gr.n }) + "</small></div>";
        }).join("") + "</div>");
        var rho = res.rho, p = res.p, verdict = p < 0.05 ? (rho > 0 ? u.yes : u.neg) : u.no;
        h.push("<p><b>" + verdict + '</b></p><p class="muted small">' + fmt(u.rho, { rho: num(rho, 2) }) + " · " + fmt(u.p, { p: p < 0.001 ? "< 0" + (S.lang === "es" ? "," : ".") + "001" : num(p, 3) }) + "</p>");
      }
      h.push('<p class="muted small">' + u.caveat + "</p>");
      box.innerHTML = h.join("");
    }, 30);
  }
  function num(v, d) { return v.toFixed(d).replace(".", S.lang === "es" ? "," : "."); }

  /* ---------- Cielo 2: deep reading, your year, questions ---------- */
  var POINTS2 = Reading.POINTS.concat(["chiron", "lilith", "fortune"]);
  function u2() { return U(); }
  function dsh(d) { return Reading.dshort(d, S.lang); }
  function winShort(w) { return w.start && w.end ? fmt(U().tr2.window, { a: dfmt(w.start, { day: "numeric", month: "short" }), b: dsh(w.end) }) : U().tr.far; }
  function winLong(w) { return w.exacts && w.exacts.length ? '<p class="tr-x">' + esc(fmt(U().tr2.exacts, { list: w.exacts.map(dsh).join(" · ") })) + "</p>" : ""; }
  function promptBox(p, ph, btn) {
    var saved = S.answers[p.id] ? S.answers[p.id].a : "";
    return '<div class="pq"><p class="pq-q">' + esc(p.q) + '</p><textarea data-pid="' + esc(p.id) + '" rows="2" maxlength="1200" placeholder="' + esc(ph || U().deep.answerPh) + '">' + esc(saved) + "</textarea>" +
      '<button class="btn ghost small" data-act="save-answer" data-id="' + esc(p.id) + '" data-q="' + esc(p.q) + '">' + (btn || U().deep.save) + "</button></div>";
  }
  function degSign(l) { return Reading.deg(l) + " " + sname(Sky.signOf(l)); }
  function precisionCard(c) {
    var u = U().extra, s0 = Sky.signOf(c.points.asc.lon);
    function ascAt(m) { return Sky.angles(new Date(c.utc + m * 60000), c.lat, c.lng).asc; }
    var a10 = [ascAt(-10), ascAt(10)], a30 = [ascAt(-30), ascAt(30)];
    var same = a30.every(function (v) { return Sky.signOf(v) === s0; }), edge = a10.some(function (v) { return Sky.signOf(v) !== s0; });
    var txt = same ? fmt(u.sensSame, { s: sname(s0) }) : fmt(u.sens, { a: degSign(a10[0]), b: degSign(a10[1]), c: degSign(a30[0]), d: degSign(a30[1]) }) + (edge ? " " + u.sensEdge : "");
    return '<section class="card prec"><div class="kicker">' + g("info") + " " + u.precision + "</div><p>" + esc(txt) + "</p></section>";
  }
  function herePlace() { return S.here || S.me.place; }
  function vDeep() {
    var u = U(), c = chartOf(S.me), secs = Reading.deep(c, S.lang), o = [header(u.deep.title, { back: "#/chart", kicker: esc(S.me.name || "") })];
    if (!c.timeKnown) o.push('<p class="note">' + g("info") + " " + u.deep.noTime + "</p>");
    o.push('<nav class="toc">' + secs.map(function (sc) { return '<button data-act="toc" data-v="' + sc.id + '">' + sc.title + "</button>"; }).join("") + "</nav>");
    secs.forEach(function (sc) {
      o.push('<section class="deep-sec" id="deep-' + sc.id + '"><h2 class="ds-h">' + (sc.keys ? sc.keys.map(function (k) { return g(k, "ds-g"); }).join("") : g("wheel", "ds-g")) + "<span>" + sc.title + "</span></h2>");
      o.push(sc.paras.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""));
      if (sc.aspects.length) o.push('<div class="list">' + sc.aspects.map(function (a) {
        return '<details class="tr ' + a.nature + '"><summary><span class="tr-g">' + g(a.a) + g(a.key, "asp") + g(a.b) + '</span><span class="tr-t">' + esc(a.title) + "<small>" + fmt(u.chart.orb, { o: a.orb }) + "</small></span></summary><p>" + esc(a.text) + "</p></details>";
      }).join("") + "</div>");
      if (sc.prompts.length) o.push('<div class="think"><div class="kicker">' + u.deep.think + "</div>" + sc.prompts.map(function (p) { return promptBox(p); }).join("") + "</div>");
      o.push("</section>");
    });
    return o.join("");
  }
  function yearFill() {
    var box = document.getElementById("year"); if (!box) return;
    setTimeout(function () {
      var u = U(), natal = chartOf(S.me), y = Reading.year(natal, S.me, herePlace(), S.houses, S.lang), bt = Reading.bigTransits(natal, new Date(), S.lang), h = [];
      h.push('<div class="row-h"><h3 class="sh">' + u.year.title + '</h3></div><p class="muted small">' + u.year.sub + "</p>");
      if (y.prof) h.push('<article class="card yr"><div class="kicker">' + g("star") + " " + esc(y.prof.title) + '</div><p class="yr-l">' + esc(y.prof.lordTitle) + "</p><p>" + esc(y.prof.text) + "</p></article>");
      else h.push('<p class="note">' + g("info") + " " + u.year.noTime + "</p>");
      h.push('<article class="card yr"><div class="kicker">' + g("sun") + " " + esc(y.sr.title) + "</div><p>" + esc(y.sr.text) + '</p><p class="muted small">' + esc(y.sr.place) + ' · <a href="#/here">' + u.horary.change + "</a></p></article>");
      h.push('<article class="card yr"><div class="kicker">' + g("moon") + " " + esc(y.prog.title) + "</div><p>" + esc(y.prog.text) + "</p></article>");
      h.push('<h3 class="sh">' + u.year.big + "</h3>" + (bt.length ? '<div class="list">' + bt.map(function (t) {
        return '<details class="tr ' + t.nature + '"><summary><span class="tr-g">' + g(t.t) + g(t.key, "asp") + g(t.n) + '</span><span class="tr-t">' + esc(t.title) + "<small>" + (t.win ? winShort(t.win) : "") + "</small></span></summary><p>" + esc(t.text) + "</p>" + (t.win ? winLong(t.win) : "") + "</details>";
      }).join("") + "</div>" : '<p class="muted">' + u.year.none + "</p>"));
      box.innerHTML = h.join("");
    }, 40);
  }
  function vAskHub() {
    var u = U().askHub, o = [header(u.title, { kicker: "" })];
    o.push('<p class="lede-s">' + u.sub + "</p>");
    o.push('<div class="hub">' + [["horary", "ask"], ["love", "venus"], ["quiz", "spark"], ["blind", "people"], ["prompts", "journal"]].map(function (it) {
      return '<a href="#/ask/' + it[0] + '">' + g(it[1]) + "<span><b>" + u[it[0]][0] + "</b><span>" + u[it[0]][1] + "</span></span></a>";
    }).join("") + "</div>");
    if (S.questions.length) o.push(horaryHistory(3));
    return o.join("");
  }
  var HF = { cat: "love" };
  function horaryStats() {
    var done = S.questions.filter(function (q) { return q.outcome && q.positive !== null && q.positive !== undefined; });
    var hits = done.filter(function (q) { return (q.positive && q.outcome === "yes") || (!q.positive && q.outcome === "no"); }).length;
    return { n: done.length, h: hits };
  }
  function horaryHistory(max) {
    var u = U().horary, st = horaryStats(), H = X().horary;
    return '<section class="block"><h3 class="sh">' + u.history + "</h3>" + (S.questions.length ? '<div class="list">' + S.questions.slice(0, max || 50).map(function (q) {
      var pos = q.positive === true ? "pos" : q.positive === false ? "neg" : "";
      var vt = q.special ? H.verdict[q.special] : q.level ? X().horary2.levels[q.level] : (H.verdict[q.verdict] || "");
      return '<a class="row" href="#/ask/h/' + q.id + '"><span class="vd ' + pos + '">' + g("ask") + '</span><span class="row-t"><b>' + esc(q.q || H.cats[q.cat].n) + "</b><span>" + esc(vt) + " · " + esc(dsh(new Date(q.at))) +
        (q.outcome ? " · " + esc(u.track) + " " + esc(u[q.outcome]) : "") + "</span></span>" + g("fwd", "chev") + "</a>";
    }).join("") + "</div>" : '<p class="muted">' + u.empty + "</p>") + '<p class="muted small">' + (st.n ? fmt(u.score, st) : u.scoreNone) + "</p></section>";
  }
  function vHoraryForm() {
    var u = U().horary, H = X().horary, pl = herePlace(), o = [header(u.title, { back: "#/ask" })];
    o.push('<p class="muted small">' + u.tip + "</p>");
    o.push('<div class="kicker">' + u.cat + '</div><div class="chips cats">' + Object.keys(H.cats).map(function (k) { return '<button class="chip' + (HF.cat === k ? " on" : "") + '" data-act="h-cat" data-v="' + k + '">' + H.cats[k].n + "</button>"; }).join("") + "</div>");
    o.push('<label class="fl"><span>' + u.q + '</span><textarea id="h-q" rows="3" maxlength="240" placeholder="' + esc(u.ph) + '"></textarea></label><p class="muted small" id="h-det"></p>');
    o.push('<p class="where">' + g("star") + " " + u.where + ": <b>" + esc(Places.label(pl, S.lang)) + '</b> <a href="#/here">' + u.change + "</a></p>");
    o.push('<button class="btn primary wide" data-act="h-go">' + g("ask") + " " + u.go + "</button>");
    o.push('<p class="fine">' + H.disclaimer + "</p>");
    o.push(horaryHistory());
    return o.join("");
  }
  function vHorary(id) {
    var u = U().horary, H = X().horary, H2 = X().horary2, q = S.questions.filter(function (x) { return x.id === id; })[0];
    if (!q) return vHoraryForm();
    var res = Reading.horary2(new Date(q.at), q.place, q.cat, q.q, S.lang), o = [header(u.title, { back: "#/ask/horary" })];
    o.push('<p class="kicker">' + esc(H.cats[q.cat].n) + " · " + esc(fmt(u.asked, { date: dfmt(new Date(q.at), { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }), place: Places.label(q.place, S.lang) })) + "</p>");
    if (q.q) o.push('<p class="qtext">«' + esc(q.q) + "»</p>");
    var prev = S.questions.filter(function (o2) { return o2.id !== q.id && o2.cat === q.cat && o2.at < q.at && q.at - o2.at < 120 * 60000; })[0];
    if (prev) o.push('<p class="note">' + g("info") + " " + esc(fmt(H2.repeat, { cat: H.cats[q.cat].n.toLowerCase(), n: Math.max(1, Math.round((q.at - prev.at) / 60000)) })) + "</p>");
    var tone = res.special ? "" : res.group === "pos" ? "pos" : res.group === "neg" ? "neg" : "";
    o.push('<div class="kicker">' + u.result + " · " + esc(H2.types[res.type]) + '</div><h2 class="verdict ' + tone + '">' + esc(res.special ? H.verdict[res.special] : res.verdict) + "</h2>");
    if (res.main) o.push('<p class="v-main">' + esc(res.main) + "</p>");
    if (res.special) o.push('<p class="muted">' + esc(res.specialText) + " " + esc(fmt(H2.levels[res.level] ? "(" + H2.levels[res.level] + ")" : "", {})) + "</p>");
    o.push('<div class="score"><i style="left:' + Math.max(2, Math.min(98, 50 + res.score * 8)) + '%"></i></div>');
    if (res.feel) o.push('<section class="card"><div class="kicker">' + g("venus") + " " + H2.feelTitle + "</div><p>" + esc(res.feel.state) + "</p><p><b>" + esc(res.feel.toYou) + "</b>" + (res.feel.rec ? " " + esc(res.feel.rec) : "") + "</p></section>");
    if (res.when) o.push('<section class="card"><div class="kicker">' + g("calendar") + " " + H2.whenTitle + "</div>" + res.when.map(function (w) { return "<p>" + esc(w) + "</p>"; }).join("") + "</section>");
    if (res.should) o.push('<section class="card"><div class="kicker">' + g("ask") + " " + H2.shouldTitle + "</div><p><b>" + esc(res.should) + "</b></p></section>");
    o.push('<div class="two-cards"><div class="card"><div class="kicker ok">' + H2.pro + '</div><ul class="why">' + (res.pro.length ? res.pro.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") : "<li>—</li>") + '</ul></div><div class="card"><div class="kicker no">' + H2.con + '</div><ul class="why">' + (res.con.length ? res.con.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") : "<li>—</li>") + "</ul></div></div>");
    o.push('<section class="card"><div class="kicker">' + H2.adviceTitle + '</div><p class="lede-s">' + esc(res.advice) + "</p></section>");
    o.push('<section class="block"><h3 class="sh">' + u.sigs + '</h3><ul class="why">' + res.sigs.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") + "</ul></section>");
    o.push('<section class="block"><h3 class="sh">' + u.chart + '</h3><p class="muted small">' + esc(fmt(H2.moment, { time: tfmt(new Date(q.at)) })) + '</p><div class="wheel-wrap small static">' + Wheel.svg(res.chart, { names: names() }) + "</div></section>");
    o.push('<button class="btn primary wide" data-act="ask-h" data-id="' + q.id + '">' + g("spark") + " " + H2.claude + '</button><p class="muted small">' + H2.claudeNote + "</p>");
    o.push('<section class="card"><div class="kicker">' + u.track + '</div><div class="seg outcome">' + ["yes", "no", "pending"].map(function (k) {
      return '<button class="' + ((q.outcome || "pending") === k ? "on" : "") + '" data-act="h-outcome" data-id="' + q.id + '" data-v="' + k + '">' + u[k] + "</button>";
    }).join("") + '</div><p class="muted small">' + (horaryStats().n ? fmt(u.score, horaryStats()) : u.scoreNone) + "</p></section>");
    o.push('<p class="fine">' + H.disclaimer + "</p>");
    o.push('<button class="btn ghost danger" data-act="h-del" data-id="' + q.id + '">' + u.del + "</button>");
    return o.join("");
  }
  var LT = null;
  function vLoveTest() {
    var T = X().loveTest, u = U().quizUI, o = [header(T.title, { back: "#/ask" })];
    if (!LT) { o.push('<section class="card center qz-intro">' + g("venus", "big-g") + '<p class="lede-s">' + T.intro + '</p><button class="btn primary wide" data-act="lt-start">' + u.start + "</button></section>"); return o.join(""); }
    if (LT.i >= T.qs.length) {
      var n = LT.ans.filter(function (a) { return a.match; }).length, t = T.qs.length;
      o.push('<section class="card center"><div class="score-big">' + n + " / " + t + '</div><p class="lede-s">' + fmt(T.result, { n: n, t: t }) + " " + (n >= 4 ? T.resultHigh : n >= 2 ? T.resultMid : T.resultLow) + "</p>" +
        '<a class="btn primary wide" href="#/love">' + X().loveUI.cta + '</a><button class="btn ghost wide" data-act="lt-start">' + u.again + "</button></section>");
      o.push('<section class="block"><div class="list">' + LT.ans.map(function (a, i) { return '<div class="row ans"><span class="row-t"><b>' + esc(T.qs[i].q) + " " + (a.match ? "✓" : "·") + "</b><span>" + esc(a.text) + "</span></span></div>"; }).join("") + "</div></section>");
      return o.join("");
    }
    var q = T.qs[LT.i], done = LT.picked != null;
    o.push('<div class="kicker">' + fmt(u.q, { i: LT.i + 1, n: T.qs.length }) + '</div><div class="prog"><i style="width:' + Math.round(LT.i / T.qs.length * 100) + '%"></i></div>');
    o.push('<h2 class="quiz-q">' + esc(q.q) + '</h2><div class="opts">' + Object.keys(q.o).map(function (k) {
      var cls = done ? (k === LT.picked ? (LT.cur.match ? " right" : " wrong") : " dim") : "";
      return '<button class="opt' + cls + '" data-act="lt-pick" data-v="' + k + '"' + (done ? " disabled" : "") + ">" + esc(q.o[k]) + "</button>";
    }).join("") + "</div>");
    if (done) o.push('<p class="fb ' + (LT.cur.match ? "ok" : "no") + '">' + esc(LT.cur.text) + '</p><button class="btn primary wide" data-act="lt-next">' + (LT.i + 1 < T.qs.length ? u.next : u.finish) + "</button>");
    return o.join("");
  }
  function vLove() {
    var L = X().loveUI, c = chartOf(S.me), pr = Reading.loveProfile(c, S.lang, new Date()), o = [header(L.title, { back: "#/chart", kicker: esc(S.me.name || "") })];
    function sec(title, glyphKey, paras) { return paras && paras.length ? '<section class="deep-sec"><h2 class="ds-h">' + g(glyphKey, "ds-g") + "<span>" + title + "</span></h2>" + paras.map(function (p2) { return "<p>" + esc(p2) + "</p>"; }).join("") + "</section>" : ""; }
    o.push(sec(L.seek, "venus", pr.seek));
    if (pr.partner) o.push(sec(L.partner, "people", pr.partner));
    o.push(sec(L.give, "moon", pr.give));
    o.push(sec(L.desire, "mars", pr.desire));
    o.push(sec(L.shadow, "lilith", pr.shadow));
    o.push(sec(L.care, "star", [pr.care]));
    o.push('<section class="deep-sec"><h2 class="ds-h">' + g("calendar", "ds-g") + "<span>" + L.windows + "</span></h2>" + (pr.windows.length ? '<div class="list">' + pr.windows.map(function (t) {
      return '<details class="tr ' + t.nature + '"><summary><span class="tr-g">' + g(t.t) + g(t.key, "asp") + g(t.n === "dsc" ? "asc" : t.n === "r7" ? "star" : t.n) + '</span><span class="tr-t">' + esc(t.title) + "<small>" + (t.win ? winShort(t.win) : "") + "</small></span></summary><p>" + esc(t.text) + "</p>" + (t.win ? winLong(t.win) : "") + "</details>";
    }).join("") + "</div>" : "<p>" + esc(L.noWindows) + "</p>") + pr.extra.map(function (e) { return '<p class="note">' + g("info") + " " + esc(e) + "</p>"; }).join("") + "</section>");
    o.push('<a class="card deep-cta" href="#/ask/love">' + g("ask") + "<span><b>" + X().loveTest.title + "</b><small>" + U().askHub.love[1] + "</small></span>" + g("fwd", "chev") + "</a>");
    o.push(askCard("love", ""));
    return o.join("");
  }
  var QZ = null;
  function vQuiz() {
    var u = U().quizUI, o = [header(u.title, { back: "#/ask" })];
    if (!QZ) {
      o.push('<section class="card center qz-intro">' + g("spark", "big-g") + '<p class="lede-s">' + U().askHub.quiz[1] + "</p>" + (S.quizBest ? '<p class="muted small">' + fmt(u.best, { b: S.quizBest, n: 8 }) + "</p>" : "") +
        '<button class="btn primary wide" data-act="quiz-start">' + u.start + "</button></section>");
      return o.join("");
    }
    if (QZ.i >= QZ.qs.length) {
      var n = QZ.qs.length, msg = u.msgs[QZ.score >= n - 1 ? 2 : QZ.score >= n / 2 ? 1 : 0];
      o.push('<section class="card center"><div class="score-big">' + fmt(u.result, { s: QZ.score, n: n }) + '</div><p class="lede-s">' + msg + '</p><p class="muted small">' + fmt(u.best, { b: S.quizBest, n: n }) + "</p>" +
        '<button class="btn primary wide" data-act="quiz-start">' + u.again + '</button><a class="btn ghost wide" href="#/chart">' + U().chart.title + "</a></section>");
      return o.join("");
    }
    var q = QZ.qs[QZ.i], done = QZ.picked != null;
    o.push('<div class="kicker">' + fmt(u.q, { i: QZ.i + 1, n: QZ.qs.length }) + '</div><div class="prog"><i style="width:' + Math.round(QZ.i / QZ.qs.length * 100) + '%"></i></div>');
    o.push('<h2 class="quiz-q">' + esc(q.q) + '</h2><div class="opts">' + q.opts.map(function (t, i) {
      var cls = done ? (i === q.right ? " right" : i === QZ.picked ? " wrong" : " dim") : "";
      return '<button class="opt' + cls + '" data-act="quiz-pick" data-v="' + i + '"' + (done ? " disabled" : "") + ">" + esc(t) + "</button>";
    }).join("") + "</div>");
    if (done) o.push('<p class="fb ' + (QZ.picked === q.right ? "ok" : "no") + '"><b>' + (QZ.picked === q.right ? u.right : u.wrong) + "</b> " + esc(q.ex) + '</p><button class="btn primary wide" data-act="quiz-next">' + (QZ.i + 1 < QZ.qs.length ? u.next : u.finish) + "</button>");
    return o.join("");
  }
  var BL = null;
  function vBlind() {
    var u = U().blindUI, o = [header(u.title, { back: "#/ask" })];
    function hist() {
      return S.blindRuns.length ? '<section class="block"><h3 class="sh">' + u.history + '</h3><div class="list">' + S.blindRuns.slice(0, 8).map(function (r) {
        return '<div class="row"><span class="jr-n">' + r.h + '</span><span class="row-t"><b>' + r.h + " / " + r.n + "</b><span>" + esc(dsh(new Date(r.at))) + "</span></span></div>";
      }).join("") + "</div></section>" : "";
    }
    if (!BL) { o.push('<section class="card"><p>' + u.intro + '</p><button class="btn primary wide" data-act="blind-start">' + u.start + '</button><p class="fine">' + u.fine + "</p></section>" + hist()); return o.join(""); }
    if (BL.i >= BL.rounds.length) {
      var n = BL.rounds.length, e = (n / 3).toFixed(1).replace(".", S.lang === "es" ? "," : "."), pv = Reading.binomTail(n, BL.hits, 1 / 3);
      o.push('<section class="card center"><div class="score-big">' + BL.hits + " / " + n + '</div><p class="lede-s">' + fmt(u.result, { h: BL.hits, n: n, e: e }) + '</p><p class="muted small">' + fmt(u.p, { p: pv.toFixed(2).replace(".", S.lang === "es" ? "," : ".") }) + "</p>" +
        '<button class="btn primary wide" data-act="blind-start">' + u.again + "</button></section>" + hist());
      return o.join("");
    }
    var rd = BL.rounds[BL.i], done = BL.picked != null, x = X();
    o.push('<div class="kicker">' + fmt(u.round, { i: BL.i + 1, n: BL.rounds.length, P: x.planets[rd.key].n }) + '</div><div class="prog"><i style="width:' + Math.round(BL.i / BL.rounds.length * 100) + '%"></i></div>');
    o.push('<div class="bopts">' + rd.opts.map(function (op, i) {
      var cls = done ? (op.sign === rd.sign ? " right" : i === BL.picked ? " wrong" : " dim") : "";
      return '<div class="bopt' + cls + '"><span class="bl">' + "ABC".charAt(i) + "</span><p>" + esc(op.text) + "</p>" + (done ? (op.sign === rd.sign || i === BL.picked ? '<small class="muted">' + g(Sky.SIGN_KEYS[op.sign], "sg") + x.signs[op.sign].n + "</small>" : "") : '<button class="btn ghost small" data-act="blind-pick" data-v="' + i + '">' + u.pick + "</button>") + "</div>";
    }).join("") + "</div>");
    if (done) {
      var mine = rd.opts[BL.picked].sign === rd.sign;
      o.push('<p class="fb ' + (mine ? "ok" : "no") + '">' + esc(mine ? fmt(u.reveal, { P: x.planets[rd.key].n, S: x.signs[rd.sign].n }) : fmt(u.missed, { S: x.signs[rd.opts[BL.picked].sign].n, P: x.planets[rd.key].n, S2: x.signs[rd.sign].n })) + "</p>" +
        '<button class="btn primary wide" data-act="blind-next">' + (BL.i + 1 < BL.rounds.length ? U().quizUI.next : U().quizUI.finish) + "</button>");
    }
    return o.join("");
  }
  function vPrompts() {
    var u = U().promptsUI, x = X(), c = chartOf(S.me), D = Reading.daily(c, new Date(), S.lang), o = [header(u.title, { back: "#/ask" })];
    o.push('<h3 class="sh">' + u.today + "</h3>" + promptBox(D.prompt));
    o.push('<h3 class="sh">' + u.chart + "</h3>");
    ["sun", "moon", "asc", "mercury", "venus", "mars", "jupiter", "saturn", "mc", "chiron", "node"].forEach(function (k) {
      if (!c.points[k] || !x.prompts.natal[k]) return;
      o.push('<div class="pk">' + g(k) + " " + esc(Reading.point(c, k, S.lang).title) + "</div>" + x.prompts.natal[k].map(function (q, i) { return promptBox({ id: "natal-" + k + "-" + i, q: q }); }).join(""));
    });
    var keys = Object.keys(S.answers).sort(function (a, b) { return S.answers[b].at - S.answers[a].at; });
    o.push('<h3 class="sh">' + u.saved + "</h3>" + (keys.length ? '<div class="list">' + keys.slice(0, 40).map(function (k) {
      var a = S.answers[k]; return '<div class="row ans"><span class="row-t"><b>' + esc(a.q) + "</b><span>" + esc(a.a) + "</span></span></div>";
    }).join("") + "</div>" : '<p class="muted">' + u.empty + "</p>"));
    return o.join("");
  }
  function vHere() {
    var u = U().here, f = U().form, o = [header(u.title, { back: "#/settings" })];
    o.push('<p class="muted small">' + u.note + "</p>");
    o.push('<p class="where">' + g("star") + " <b>" + esc(S.here ? Places.label(S.here, S.lang) : Places.label(S.me.place, S.lang)) + "</b>" + (S.here ? ' <button class="mini" data-act="here-clear">✕</button>' : " · " + u.birthDefault) + "</p>");
    o.push('<button class="btn primary wide" data-act="geo">' + g("today") + " " + u.use + "</button>");
    o.push('<div class="fl"><span>' + u.search + '</span><div id="place-chosen"></div><div id="place-pick"><input id="place-q" placeholder="' + esc(f.placePh) + '" autocomplete="off" autocapitalize="words" spellcheck="false"><div class="sugg" id="sugg"></div></div></div>');
    return o.join("");
  }

  /* ---------- settings & about ---------- */
  function vSettings() {
    var u = U(), s = u.settings, o = [header(s.title, { back: S.me ? "#/today" : "#/welcome", right: "" })];
    function seg(act, val, opts) { return '<div class="seg">' + opts.map(function (x) { return '<button class="' + (val === x[0] ? "on" : "") + '" data-act="' + act + '" data-v="' + x[0] + '">' + x[1] + "</button>"; }).join("") + "</div>"; }
    o.push('<section class="card set"><div class="kicker">' + s.lang + "</div>" + seg("lang", S.lang, [["es", "Español"], ["en", "English"]]) +
      '<div class="kicker">' + s.theme + "</div>" + seg("theme", S.theme, [["auto", s.themes.auto], ["dark", s.themes.dark], ["light", s.themes.light]]) +
      '<div class="kicker">' + s.houses + "</div>" + seg("houses", S.houses, [["placidus", "Placidus"], ["koch", "Koch"], ["regio", "Regiomontanus"], ["equal", u.chart.system.equal], ["whole", u.chart.system.whole]]) +
      '<label class="switch"><input type="checkbox" data-act="blind"' + (S.blind ? " checked" : "") + "><span><b>" + s.blind + "</b><small>" + s.blindHint + "</small></span></label></section>");
    if (S.me) o.push('<a class="row card-row" href="#/setup">' + g("star", "rg") + '<span class="row-t"><b>' + s.me + "</b><span>" + esc(fmtBirthDate(S.me) + " · " + Places.label(S.me.place, S.lang)) + "</span></span>" + g("fwd", "chev") + "</a>");
    o.push('<a class="row card-row" href="#/here">' + g("star", "rg") + '<span class="row-t"><b>' + u2().here.title + "</b><span>" + esc(S.here ? Places.label(S.here, S.lang) : u2().here.birthDefault) + "</span></span>" + g("fwd", "chev") + "</a>");
    o.push('<a class="row card-row" href="#/about">' + g("info", "rg") + '<span class="row-t"><b>' + s.about + "</b></span>" + g("fwd", "chev") + "</a>");
    o.push('<section class="card set"><div class="kicker">' + s.backup + '</div><div class="two-b"><button class="btn ghost" data-act="export">' + s.export + '</button><label class="btn ghost">' + s.import + '<input type="file" accept="application/json,.json" id="imp" hidden></label></div>' +
      '<button class="btn ghost danger" data-act="erase">' + s.erase + "</button></section>");
    o.push('<p class="fine center">Cielo ' + APP_VERSION + "</p>");
    return o.join("");
  }
  function vAbout() {
    var a = U().about, o = [header(a.title, { back: S.me ? "#/settings" : "#/welcome", right: "" })];
    a.blocks.forEach(function (b) { o.push('<section class="about"><h3>' + b.h + "</h3>" + b.p.map(function (p) { return "<p>" + p + "</p>"; }).join("") + "</section>"); });
    return o.join("");
  }

  /* ---------- Ask Claude ---------- */
  function ask(kind, id) {
    var q = (document.getElementById("ask-q") || {}).value || "", text;
    var me = S.me, c = chartOf(me);
    if (kind === "chart") text = Reading.promptChart(me, c, q.trim(), S.lang);
    else if (kind === "syn") { var p = person(id); if (!p) return; var pc = chartOf(p); text = Reading.promptCouple(c, me, pc, p, Reading.couple(c, pc, p.name, S.lang, new Date()), p.name, q.trim(), S.lang); }
    else if (kind === "horary") { var hq = S.questions.filter(function (x) { return x.id === id; })[0]; if (!hq) return; text = Reading.promptHorary(hq, Reading.horary2(new Date(hq.at), hq.place, hq.cat, hq.q, S.lang), S.lang); }
    else if (kind === "love") text = Reading.promptChart(me, c, q.trim() || (S.lang === "es" ? "Dame una lectura profunda de mi forma de amar y de la pareja que me conviene, con lo que activa este año." : "Give me a deep reading of how I love and what kind of partner suits me, including what this year activates."), S.lang);
    else text = Reading.promptDay(me, c, Reading.daily(c, parseDay(id) || new Date(), S.lang), q.trim(), S.lang);
    try { if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function () { }); } catch (e) { }
    window.open("https://claude.ai/new?q=" + encodeURIComponent(text), "_blank", "noopener");
    toast(U().ask.copied);
  }

  /* ---------- events ---------- */
  function applyTheme() { if (S.theme === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", S.theme); }
  document.addEventListener("click", function (ev) {
    var wp = ev.target.closest(".wheel .wp");
    if (wp && !ev.target.closest(".welcome, .static")) {
      var m = location.hash.match(/^#\/people\/([^/]+)$/);
      location.hash = "#/chart/" + wp.dataset.pt + (m ? "/" + m[1] : ""); return;
    }
    var el = ev.target.closest("[data-act]"); if (!el) return;
    var act = el.dataset.act, v = el.dataset.v;
    if (act === "lang") { S.lang = v; save(); calCache = null; render(); return; }
    if (act === "theme") { S.theme = v; save(); applyTheme(); render(); return; }
    if (act === "houses") { S.houses = v; save(); cache = {}; render(); return; }
    if (act === "rate") {
      var k = el.dataset.day, e = S.diary[k] || {}; e.r = +v; e.at = Date.now(); S.diary[k] = e; save();
      if (route().name === "journal") { el.parentNode.querySelectorAll(".rt").forEach(function (b) { b.classList.toggle("on", b === el); }); expFill(); toast(U().journal.saved); }
      else render();
      return;
    }
    if (act === "tag") { el.classList.toggle("on"); return; }
    if (act === "j-save") {
      var key = el.dataset.day, en = S.diary[key] || {};
      en.tags = [].slice.call(document.querySelectorAll(".tags .chip.on")).map(function (b) { return b.dataset.v; });
      en.note = (document.getElementById("j-note").value || "").trim().slice(0, 600);
      if (!en.r && !en.note && !en.tags.length) return;
      en.at = Date.now(); S.diary[key] = en; save(); toast(U().journal.saved); render(); return;
    }
    if (act === "ask") { ask(el.dataset.kind, el.dataset.id); return; }
    if (act === "more-asp") {
      var hid = document.querySelectorAll("#asp-list .extra"), show = hid.length && hid[0].hidden;
      hid.forEach(function (d) { d.hidden = !show; });
      el.textContent = show ? U().chart.showLess : fmt(U().chart.showAll, { n: document.querySelectorAll("#asp-list .tr").length }); return;
    }
    if (act === "cal-f") { calFilter = v; document.querySelectorAll(".filt .chip").forEach(function (b) { b.classList.toggle("on", b === el); }); calFill(); return; }
    if (act === "del-person") { var p = person(el.dataset.id); if (p && confirm(fmt(U().people.confirmDelete, { name: p.name }))) { S.people.splice(S.people.indexOf(p), 1); save(); location.hash = "#/people"; } return; }
    if (act === "place-pick") { F.place = suggest.list[+el.dataset.i]; if (F.mode === "here") { S.here = F.place; save(); toast(u2().deep.saved); render(); return; } syncCoords(); showPlace(); preview(); return; }
    if (act === "place-change") { F.place = null; showPlace(); var qi = document.getElementById("place-q"); if (qi) { qi.value = ""; qi.focus(); } suggest([], ""); return; }
    if (act === "place-online") {
      var q = document.getElementById("place-q").value.trim(), fu = U().form;
      suggest([], "", fu.searching);
      Places.online(q, S.lang).then(function (list) { suggest(list, "", list.length ? "" : fu.noResults); }).catch(function () { suggest(Places.search(q, S.lang), q, fu.offline); });
      return;
    }
    if (act === "save-answer") {
      var ta = document.querySelector('textarea[data-pid="' + el.dataset.id + '"]'), txt = ta ? ta.value.trim().slice(0, 1200) : "";
      if (txt) S.answers[el.dataset.id] = { q: el.dataset.q, a: txt, at: Date.now() }; else delete S.answers[el.dataset.id];
      save(); toast(u2().deep.saved); return;
    }
    if (act === "toc") { var sec = document.getElementById("deep-" + v); if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    if (act === "h-cat") { HF.cat = v; document.querySelectorAll(".cats .chip").forEach(function (b) { b.classList.toggle("on", b === el); }); return; }
    if (act === "h-go") {
      var qtxt = (document.getElementById("h-q").value || "").trim().slice(0, 240), pl = herePlace(), now = new Date();
      var res = Reading.horary2(now, pl, HF.cat, qtxt, S.lang), id = uid();
      S.questions.unshift({ id: id, q: qtxt, cat: HF.cat, at: now.getTime(), place: { name: pl.name, region: pl.region || "", cc: pl.cc || "", lat: pl.lat, lng: pl.lng, tz: pl.tz }, level: res.level, special: res.special, positive: res.positive, outcome: null });
      save(); location.hash = "#/ask/h/" + id; return;
    }
    if (act === "h-outcome") { var hq = S.questions.filter(function (q) { return q.id === el.dataset.id; })[0]; if (hq) { hq.outcome = v === "pending" ? null : v; save(); render(); } return; }
    if (act === "h-del") { S.questions = S.questions.filter(function (q) { return q.id !== el.dataset.id; }); save(); location.hash = "#/ask/horary"; return; }
    if (act === "quiz-start") {
      var mine = chartOf(S.me), ppl = S.people.slice().sort(function (a, b) { return (b.rel === "partner") - (a.rel === "partner"); }).map(function (pp) { return { name: pp.name, chart: chartOf(pp) }; });
      QZ = { qs: Reading.quiz(mine, S.lang, { people: ppl, me: mine, now: new Date(), seen: S.quizSeen || [] }), i: 0, score: 0, picked: null };
      S.quizSeen = QZ.qs.map(function (q) { return q.q; }).concat(S.quizSeen || []).slice(0, 24); save(); render(); return;
    }
    if (act === "ask-h") { ask("horary", el.dataset.id); return; }
    if (act === "lt-start") { LT = { i: 0, picked: null, cur: null, ans: [] }; render(); window.scrollTo(0, 0); return; }
    if (act === "lt-pick") { if (LT && LT.picked == null) { LT.picked = v; LT.cur = Reading.loveAnswer(chartOf(S.me), LT.i, v, S.lang); LT.ans.push(LT.cur); render(); } return; }
    if (act === "lt-next") { if (LT) { LT.i++; LT.picked = null; LT.cur = null; if (LT.i >= X().loveTest.qs.length) { S.loveRuns = (S.loveRuns || []).concat([{ at: Date.now(), n: LT.ans.filter(function (a) { return a.match; }).length }]).slice(-20); save(); } render(); window.scrollTo(0, 0); } return; }
    if (act === "quiz-pick") { if (QZ && QZ.picked == null) { QZ.picked = +v; if (QZ.picked === QZ.qs[QZ.i].right) QZ.score++; render(); } return; }
    if (act === "quiz-next") { if (QZ) { QZ.i++; QZ.picked = null; if (QZ.i >= QZ.qs.length && QZ.score > S.quizBest) { S.quizBest = QZ.score; save(); } render(); window.scrollTo(0, 0); } return; }
    if (act === "blind-start") { BL = { rounds: Reading.blindRounds(chartOf(S.me), S.lang), i: 0, hits: 0, picked: null }; render(); return; }
    if (act === "blind-pick") {
      if (BL && BL.picked == null) { BL.picked = +v; var rd = BL.rounds[BL.i]; if (rd.opts[BL.picked].sign === rd.sign) BL.hits++; render(); }
      return;
    }
    if (act === "blind-next") {
      if (BL) { BL.i++; BL.picked = null; if (BL.i >= BL.rounds.length) { S.blindRuns.unshift({ at: Date.now(), n: BL.rounds.length, h: BL.hits }); S.blindRuns = S.blindRuns.slice(0, 20); save(); } render(); window.scrollTo(0, 0); }
      return;
    }
    if (act === "geo") {
      if (!navigator.geolocation) { toast(u2().here.denied); return; }
      navigator.geolocation.getCurrentPosition(function (pos) {
        var tz = "UTC"; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"; } catch (e) { }
        S.here = { name: u2().here.current, region: "", cc: "", lat: +pos.coords.latitude.toFixed(4), lng: +pos.coords.longitude.toFixed(4), tz: tz };
        save(); render();
      }, function () { toast(u2().here.denied); }, { timeout: 12000, maximumAge: 600000 });
      return;
    }
    if (act === "here-clear") { S.here = null; save(); render(); return; }
    if (act === "export") {
      var blob = new Blob([JSON.stringify({ app: "cielo", exported: new Date().toISOString(), data: S }, null, 1)], { type: "application/json" });
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "cielo-" + dkey(new Date()) + ".json"; document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500); return;
    }
    if (act === "erase") { if (confirm(U().settings.confirmErase)) { localStorage.removeItem(KEY); localStorage.removeItem(DIST_KEY); S = defaults({}); cache = {}; location.hash = "#/welcome"; render(); } return; }
  });
  function syncCoords() {
    var form = formEl(); if (!form || !F.place) return;
    form.lat.value = F.place.lat; form.lng.value = F.place.lng;
    if (Sky.validTz(F.place.tz)) { if (![].some.call(form.tz.options, function (o) { return o.value === F.place.tz; })) { var op = document.createElement("option"); op.value = op.textContent = F.place.tz; form.tz.appendChild(op); } form.tz.value = F.place.tz; }
  }
  document.addEventListener("change", function (ev) {
    var t = ev.target;
    if (t.dataset && t.dataset.act === "blind") { S.blind = t.checked; save(); if (route().name === "today") render(); return; }
    if (t.id === "j-date") { if (t.value) location.hash = "#/journal/" + t.value; return; }
    if (t.id === "imp" && t.files && t.files[0]) {
      var rd = new FileReader();
      rd.onload = function () {
        try { var j = JSON.parse(rd.result); if (!j || j.app !== "cielo" || !j.data) throw new Error("bad"); S = defaults(j.data); save(); cache = {}; applyTheme(); toast(U().settings.imported); location.hash = S.me ? "#/today" : "#/welcome"; render(); }
        catch (e) { toast(U().settings.badFile); }
      };
      rd.readAsText(t.files[0]); return;
    }
    if (formEl() && formEl().contains(t)) {
      if (t.name === "notime") { formEl().time.disabled = t.checked; }
      if (t.name === "tz" || t.name === "lat" || t.name === "lng") { if (!F.place) { /* manual place */ } }
      preview();
    }
  });
  document.addEventListener("input", function (ev) {
    var t = ev.target;
    if (t.id === "place-q") { var q = t.value.trim(); suggest(Places.search(q, S.lang), q); return; }
    if (t.id === "h-q") {
      var dc = Reading.detectCat(t.value, S.lang), det = document.getElementById("h-det");
      if (dc && dc !== HF.cat) { HF.cat = dc; document.querySelectorAll(".cats .chip").forEach(function (b) { b.classList.toggle("on", b.dataset.v === dc); }); }
      if (det) det.textContent = t.value.trim().length < 4 ? "" : (dc ? fmt(X().horary2.detected, { cat: X().horary.cats[dc].n }) + " · " : "") + X().horary2.types[Reading.detectType(t.value, S.lang)];
      return;
    }
    if (formEl() && formEl().contains(t) && t.name !== "q") preview();
  });
  document.addEventListener("submit", function (ev) { if (ev.target.id === "bform") { ev.preventDefault(); submitForm(); } });
  document.addEventListener("keydown", function (ev) {
    if ((ev.key === "Enter" || ev.key === " ") && ev.target.classList && ev.target.classList.contains("wp")) { ev.preventDefault(); ev.target.dispatchEvent(new MouseEvent("click", { bubbles: true })); }
  });
  window.addEventListener("hashchange", render);
  var lastDay = dkey(new Date());
  document.addEventListener("visibilitychange", function () { if (!document.hidden && dkey(new Date()) !== lastDay) { lastDay = dkey(new Date()); render(); } });

  applyTheme();
  render();
  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(function () { });
  window.CieloApp = { state: function () { return S; }, render: render };
})();
