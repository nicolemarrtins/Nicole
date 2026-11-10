/* Cielo — astronomy engine.
   Planet positions come from astronomy-engine (apparent geocentric longitudes, true equinox of date,
   corrected for light time, aberration, precession and nutation). Angles and houses are computed from
   Greenwich apparent sidereal time and the true obliquity of the ecliptic. Local birth times are turned
   into UTC with the IANA time-zone database built into the browser (Intl), including historical DST.
   Works in the browser (window.Sky) and in Node (module.exports) so it can be tested. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(require("./vendor/astronomy.browser.min.js"));
  else root.Sky = factory(root.Astronomy);
})(typeof self !== "undefined" ? self : this, function (A) {
  "use strict";
  var D2R = Math.PI / 180, R2D = 180 / Math.PI;
  function norm(x) { x = x % 360; return x < 0 ? x + 360 : x; }
  function diff(a, b) { var d = norm(a - b); return d > 180 ? d - 360 : d; } // signed a − b in (−180, 180]
  function sep(a, b) { return Math.abs(diff(a, b)); }

  var PLANETS = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
  var BODY = { sun: A.Body.Sun, moon: A.Body.Moon, mercury: A.Body.Mercury, venus: A.Body.Venus, mars: A.Body.Mars,
    jupiter: A.Body.Jupiter, saturn: A.Body.Saturn, uranus: A.Body.Uranus, neptune: A.Body.Neptune, pluto: A.Body.Pluto };

  function T(date) { return date && date.ut !== undefined ? date : A.MakeTime(date); }

  /* ---------- positions ---------- */
  function lon(key, date) {
    var t = T(date);
    if (key === "node") return trueNode(t);
    return norm(A.Ecliptic(A.GeoVector(BODY[key], t, true)).elon);
  }
  function lonLat(key, date) {
    var e = A.Ecliptic(A.GeoVector(BODY[key], T(date), true));
    return { lon: norm(e.elon), lat: e.elat };
  }
  function speed(key, date) { // degrees per day (negative = retrograde)
    var t = T(date);
    return diff(lon(key, t.AddDays(0.5)), lon(key, t.AddDays(-0.5)));
  }
  // Osculating ("true") lunar node: the line where the Moon's instantaneous orbital plane meets the ecliptic of date.
  function moonEct(t) { return A.Ecliptic(A.GeoMoon(t)).vec; }
  function trueNode(t) {
    var dt = 1 / 1440, r = moonEct(t), a = moonEct(t.AddDays(-dt)), b = moonEct(t.AddDays(dt));
    var vx = b.x - a.x, vy = b.y - a.y, vz = b.z - a.z;
    var hx = r.y * vz - r.z * vy, hy = r.z * vx - r.x * vz;
    return norm(Math.atan2(hx, -hy) * R2D);
  }
  function meanNode(date) { // Meeus, Astronomical Algorithms (2nd ed.), eq. 47.7
    var c = T(date).tt / 36525;
    return norm(125.0445479 - 1934.1362891 * c + 0.0020754 * c * c + c * c * c / 467441 - c * c * c * c / 60616000);
  }

  /* ---------- angles and houses ---------- */
  function angles(date, lat, lng) {
    var t = T(date), eps = A.e_tilt(t).tobl * D2R;
    var ramc = norm(A.SiderealTime(t) * 15 + lng), r = ramc * D2R, phi = lat * D2R;
    var mc = norm(Math.atan2(Math.sin(r), Math.cos(r) * Math.cos(eps)) * R2D);
    var asc = norm(Math.atan2(Math.cos(r), -(Math.sin(r) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps))) * R2D);
    return { ramc: ramc, eps: eps, mc: mc, asc: asc, lat: lat };
  }
  function raToLon(ra, eps) { return norm(Math.atan2(Math.sin(ra * D2R), Math.cos(ra * D2R) * Math.cos(eps)) * R2D); }
  function placidus(a) {
    var phi = a.lat * D2R, eps = a.eps;
    function solve(f, above) {
      var ra = a.ramc + (above ? f * 90 : 180 - f * 90);
      for (var i = 0; i < 100; i++) {
        var lam = raToLon(ra, eps);
        var dec = Math.asin(Math.sin(eps) * Math.sin(lam * D2R));
        var x = Math.tan(phi) * Math.tan(dec);
        if (Math.abs(x) >= 1) return NaN; // circumpolar point: Placidus is undefined here
        var ad = Math.asin(x) * R2D;
        var next = above ? a.ramc + f * (90 + ad) : a.ramc + 180 - f * (90 - ad);
        var done = Math.abs(diff(next, ra)) < 1e-9;
        ra = next;
        if (done) break;
      }
      return raToLon(ra, eps);
    }
    var c11 = solve(1 / 3, true), c12 = solve(2 / 3, true), c2 = solve(2 / 3, false), c3 = solve(1 / 3, false);
    if ([c11, c12, c2, c3].some(isNaN)) return null;
    return [a.asc, c2, c3, norm(a.mc + 180), norm(c11 + 180), norm(c12 + 180), norm(a.asc + 180), norm(c2 + 180), norm(c3 + 180), a.mc, c11, c12];
  }
  function porphyry(a) {
    var ic = norm(a.mc + 180), q1 = norm(ic - a.asc), q2 = norm(norm(a.asc + 180) - ic);
    var c = [a.asc, norm(a.asc + q1 / 3), norm(a.asc + 2 * q1 / 3), ic, norm(ic + q2 / 3), norm(ic + 2 * q2 / 3)];
    return c.concat(c.map(function (x) { return norm(x + 180); }));
  }
  function wholeSign(a) {
    var s = Math.floor(a.asc / 30) * 30, c = [];
    for (var i = 0; i < 12; i++) c.push(norm(s + 30 * i));
    return c;
  }
  function houses(a, system) {
    if (system === "whole") return { system: "whole", cusps: wholeSign(a) };
    var p = placidus(a);
    if (p && validCusps(p)) return { system: "placidus", cusps: p };
    return { system: "porphyry", cusps: porphyry(a), fallback: true };
  }
  function validCusps(c) { // each house must be a positive arc and together they must close the circle
    var total = 0;
    for (var i = 0; i < 12; i++) { var span = norm(c[(i + 1) % 12] - c[i]); if (span <= 0 || span >= 180) return false; total += span; }
    return Math.abs(total - 360) < 1e-6;
  }
  function houseOf(l, cusps) {
    for (var i = 0; i < 12; i++) {
      var span = norm(cusps[(i + 1) % 12] - cusps[i]);
      if (norm(l - cusps[i]) < span) return i + 1;
    }
    return 1;
  }

  /* ---------- local time → UTC (historical time zones via Intl) ---------- */
  var dtfCache = {};
  function dtf(tz) {
    return dtfCache[tz] || (dtfCache[tz] = new Intl.DateTimeFormat("en-US", { timeZone: tz, hourCycle: "h23",
      year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", era: "short" }));
  }
  function offsetSec(utcMs, tz) { // local − UTC, in seconds
    var p = {}, parts = dtf(tz).formatToParts(new Date(utcMs));
    for (var i = 0; i < parts.length; i++) p[parts[i].type] = parts[i].value;
    var y = +p.year; if (/^B/.test(p.era || "")) y = 1 - y;
    var d = new Date(0); d.setUTCFullYear(y, +p.month - 1, +p.day); d.setUTCHours(+p.hour % 24, +p.minute, +p.second, 0);
    return Math.round((d.getTime() - Math.floor(utcMs / 1000) * 1000) / 1000);
  }
  function validTz(tz) { try { dtf(tz); return true; } catch (e) { return false; } }
  function naiveUTC(y, mo, d, h, mi) { var x = new Date(0); x.setUTCFullYear(y, mo - 1, d); x.setUTCHours(h, mi, 0, 0); return x.getTime(); }
  // Returns { utc (ms), offset (seconds), status: "ok" | "ambiguous" | "gap" }
  function localToUTC(y, mo, d, h, mi, tz, manualOffsetMin) {
    var naive = naiveUTC(y, mo, d, h, mi);
    if (typeof manualOffsetMin === "number" && isFinite(manualOffsetMin)) return { utc: naive - manualOffsetMin * 60000, offset: manualOffsetMin * 60, status: "manual" };
    var cands = [offsetSec(naive - 86400000, tz), offsetSec(naive, tz), offsetSec(naive + 86400000, tz)];
    var seen = {}, valid = [];
    cands.forEach(function (o) {
      if (seen[o]) return; seen[o] = 1;
      var t = naive - o * 1000;
      if (offsetSec(t, tz) === o) valid.push({ utc: t, offset: o });
    });
    if (valid.length === 0) { var o0 = cands[0]; return { utc: naive - o0 * 1000, offset: o0, status: "gap" }; }
    valid.sort(function (a, b) { return a.utc - b.utc; });
    return { utc: valid[0].utc, offset: valid[0].offset, status: valid.length > 1 ? "ambiguous" : "ok" };
  }
  function fmtOffset(sec) {
    var s = sec < 0 ? "−" : "+", a = Math.abs(sec), h = Math.floor(a / 3600), m = Math.floor((a % 3600) / 60), r = a % 60;
    return "UTC" + s + h + (m || r ? ":" + String(m).padStart(2, "0") : "") + (r ? ":" + String(r).padStart(2, "0") : "");
  }

  /* ---------- aspects ---------- */
  var ASPECTS = [
    { key: "conj", angle: 0, orb: 8, nature: 0 },
    { key: "sextile", angle: 60, orb: 5, nature: 1 },
    { key: "square", angle: 90, orb: 7, nature: -1 },
    { key: "trine", angle: 120, orb: 7, nature: 1 },
    { key: "quincunx", angle: 150, orb: 3, nature: -0.5 },
    { key: "opp", angle: 180, orb: 8, nature: -1 }
  ];
  var ASPECT = {}; ASPECTS.forEach(function (x) { ASPECT[x.key] = x; });
  function natalOrb(asp, a, b) {
    var lum = a === "sun" || a === "moon" || b === "sun" || b === "moon";
    var pt = a === "asc" || a === "mc" || a === "node" || b === "asc" || b === "mc" || b === "node";
    var o = asp.orb + (lum ? (asp.key === "quincunx" ? 0 : asp.key === "sextile" ? 1 : 2) : 0);
    if (pt) o = Math.min(o, asp.key === "sextile" ? 3 : asp.key === "quincunx" ? 0 : 5);
    return o;
  }
  function findAspect(l1, l2, orbFn) {
    var s = sep(l1, l2), best = null;
    for (var i = 0; i < ASPECTS.length; i++) {
      var asp = ASPECTS[i], o = orbFn(asp), d = Math.abs(s - asp.angle);
      if (o > 0 && d <= o && (!best || d < best.orb)) best = { key: asp.key, angle: asp.angle, orb: d, max: o };
    }
    return best;
  }
  // Applying when the faster body is closing the gap to the exact angle.
  function isApplying(l1, v1, l2, v2, angle) {
    var now = Math.abs(sep(l1, l2) - angle), soon = Math.abs(sep(l1 + v1 * 0.01, l2 + v2 * 0.01) - angle);
    return soon < now;
  }
  function natalAspects(points, keys) {
    var out = [];
    for (var i = 0; i < keys.length; i++) for (var j = i + 1; j < keys.length; j++) {
      var a = keys[i], b = keys[j], pa = points[a], pb = points[b];
      if (!pa || !pb) continue;
      if ((a === "asc" && b === "mc") || (a === "mc" && b === "asc")) continue;
      var hit = findAspect(pa.lon, pb.lon, function (asp) { return natalOrb(asp, a, b); });
      if (hit) { hit.a = a; hit.b = b; hit.applying = isApplying(pa.lon, pa.speed || 0, pb.lon, pb.speed || 0, hit.angle); out.push(hit); }
    }
    return out.sort(function (x, y) { return x.orb / x.max - y.orb / y.max; });
  }

  /* ---------- natal chart ---------- */
  var SIGN_KEYS = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];
  function signOf(l) { return Math.floor(norm(l) / 30); }
  function degIn(l) { return norm(l) % 30; }
  function positions(t) {
    var pts = {};
    PLANETS.forEach(function (k) { var v = speed(k, t); pts[k] = { lon: lon(k, t), speed: v, retro: v < 0 && k !== "sun" && k !== "moon" }; });
    var n = trueNode(t); pts.node = { lon: n, speed: diff(trueNode(t.AddDays(0.5)), trueNode(t.AddDays(-0.5))) };
    return pts;
  }
  /* birth = { y, m, d, h, min, timeKnown, lat, lng, tz, manualOffsetMin }  opts = { houseSystem } */
  function chart(birth, opts) {
    opts = opts || {};
    var known = birth.timeKnown !== false;
    var conv = localToUTC(birth.y, birth.m, birth.d, known ? birth.h : 12, known ? birth.min : 0, birth.tz, birth.manualOffsetMin);
    var t = A.MakeTime(new Date(conv.utc));
    var pts = positions(t);
    var c = { utc: conv.utc, offset: conv.offset, tzStatus: conv.status, timeKnown: known, points: pts, lat: birth.lat, lng: birth.lng };
    if (known) {
      var a = angles(t, birth.lat, birth.lng), h = houses(a, opts.houseSystem || "placidus");
      pts.asc = { lon: a.asc, speed: 0 }; pts.mc = { lon: a.mc, speed: 0 };
      c.cusps = h.cusps; c.houseSystem = h.system; c.houseFallback = !!h.fallback;
      PLANETS.concat(["node"]).forEach(function (k) { pts[k].house = houseOf(pts[k].lon, h.cusps); });
    } else {
      // Without a birth time the Moon can be anywhere in a ~13° arc: report both ends of the day.
      var d0 = localToUTC(birth.y, birth.m, birth.d, 0, 0, birth.tz, birth.manualOffsetMin).utc;
      var m0 = lon("moon", new Date(d0)), m1 = lon("moon", new Date(d0 + 86399000));
      c.moonRange = [m0, m1];
      c.moonSignUncertain = signOf(m0) !== signOf(m1);
    }
    var keys = PLANETS.concat(["node"]).concat(known ? ["asc", "mc"] : []);
    c.aspects = natalAspects(pts, keys);
    return c;
  }

  /* ---------- transits, timing and the daily score ---------- */
  var TRANSIT_ORB = { moon: 6, sun: 2.5, mercury: 2.5, venus: 2.5, mars: 2.5, jupiter: 2, saturn: 2, uranus: 1.5, neptune: 1.5, pluto: 1.5 };
  var W_T = { moon: 0.55, sun: 0.9, mercury: 0.8, venus: 0.9, mars: 1.1, jupiter: 1.2, saturn: 1.4, uranus: 1.15, neptune: 1.05, pluto: 1.25 };
  var W_N = { sun: 1.3, moon: 1.3, mercury: 0.85, venus: 0.95, mars: 0.9, jupiter: 0.6, saturn: 0.7, uranus: 0.35, neptune: 0.35, pluto: 0.35, node: 0.4, asc: 1.15, mc: 1.05 };
  function transitNature(tk, aspKey) {
    if (aspKey === "conj") {
      if (tk === "venus" || tk === "jupiter") return 0.8;
      if (tk === "mars" || tk === "saturn" || tk === "pluto" || tk === "uranus") return -0.8;
      if (tk === "neptune") return -0.3;
      if (tk === "sun") return 0.3;
      return 0.1;
    }
    return { sextile: 0.6, trine: 1, square: -1, opp: -0.8 }[aspKey] || 0;
  }
  var NATAL_TARGETS = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", "node", "asc", "mc"];
  function transits(natal, date, sky) {
    var t = T(date);
    sky = sky || positions(t);
    var out = [];
    PLANETS.forEach(function (tk) {
      NATAL_TARGETS.forEach(function (nk) {
        var np = natal.points[nk]; if (!np) return;
        if (tk === "moon" && (nk === "uranus" || nk === "neptune" || nk === "pluto" || nk === "node")) return;
        var hit = findAspect(sky[tk].lon, np.lon, function (asp) { return asp.key === "quincunx" ? 0 : TRANSIT_ORB[tk]; });
        if (!hit) return;
        var nat = transitNature(tk, hit.key), strength = 1 - hit.orb / hit.max;
        var w = (W_T[tk] || 1) * (W_N[nk] || 0.5);
        out.push({ t: tk, n: nk, key: hit.key, angle: hit.angle, orb: hit.orb, max: hit.max, nature: nat, strength: strength,
          weight: w * (0.35 + strength), score: w * nat * strength,
          applying: isApplying(sky[tk].lon, sky[tk].speed, np.lon, 0, hit.angle), retro: sky[tk].retro });
      });
    });
    return out.sort(function (a, b) { return b.weight - a.weight; });
  }
  function dayScore(natal, date) { // positions only (no speeds): the score never depends on motion
    var t = T(date), sky = {};
    PLANETS.forEach(function (k) { sky[k] = { lon: lon(k, t), speed: 0 }; });
    var tr = transits(natal, t, sky), s = 0;
    tr.forEach(function (x) { s += x.score; });
    return s;
  }
  // When does a transit become exact? Newton steps on the real ephemeris (returns days from now, may be negative).
  function exactIn(tk, natalLon, angle, date) {
    var t = T(date), off = 0;
    for (var i = 0; i < 6; i++) {
      var tt = t.AddDays(off), L = lon(tk, tt), v = speed(tk, tt);
      var targets = angle === 0 || angle === 180 ? [norm(natalLon + angle)] : [norm(natalLon + angle), norm(natalLon - angle)];
      var g = targets.map(function (x) { return diff(L, x); }).sort(function (a, b) { return Math.abs(a) - Math.abs(b); })[0];
      if (Math.abs(v) < 1e-4) return null;
      var step = -g / v;
      off += Math.max(-40, Math.min(40, step));
      if (Math.abs(step) < 1e-4) break;
    }
    return off;
  }

  /* ---------- the Moon ---------- */
  var PHASES = ["new", "waxingCrescent", "firstQuarter", "waxingGibbous", "full", "waningGibbous", "lastQuarter", "waningCrescent"];
  function moonInfo(date) {
    var t = T(date), ang = A.MoonPhase(t);
    var ph = ang < 12 || ang >= 348 ? 0 : ang < 78 ? 1 : ang < 102 ? 2 : ang < 168 ? 3 : ang < 192 ? 4 : ang < 258 ? 5 : ang < 282 ? 6 : 7;
    var l = lon("moon", t);
    return { angle: ang, phase: PHASES[ph], phaseIndex: ph, illum: A.Illumination(A.Body.Moon, t).phase_fraction, lon: l, sign: signOf(l), waxing: ang < 180 };
  }
  function voidOfCourse(date) { // classical: from the Moon's last major aspect in a sign until it enters the next sign
    var t = T(date), l = lon("moon", t), toNext = 30 - degIn(l), v = speed("moon", t), hours = toNext / v * 24;
    var sky = positions(t), majors = [0, 60, 90, 120, 180], nextAspect = Infinity;
    PLANETS.forEach(function (k) {
      if (k === "moon") return;
      majors.forEach(function (ang) {
        [norm(sky[k].lon + ang), norm(sky[k].lon - ang)].forEach(function (target) {
          var d = norm(target - l), rel = v - sky[k].speed;
          if (rel > 0) { var h = d / rel * 24; if (h < nextAspect) nextAspect = h; }
        });
      });
    });
    return { voc: nextAspect > hours, hoursToIngress: hours, nextSign: (signOf(l) + 1) % 12 };
  }

  /* ---------- calendar events ---------- */
  function lunations(start, end) {
    var out = [], mq = A.SearchMoonQuarter(start);
    while (mq.time.date < end) {
      if (mq.quarter === 0 || mq.quarter === 2) out.push({ type: mq.quarter === 0 ? "newMoon" : "fullMoon", date: mq.time.date, lon: lon("moon", mq.time) });
      mq = A.NextMoonQuarter(mq);
    }
    return out;
  }
  function eclipses(start, end) {
    var out = [], e = A.SearchLunarEclipse(start);
    while (e.peak.date < end) { out.push({ type: "lunarEclipse", kind: e.kind, date: e.peak.date, lon: lon("moon", e.peak) }); e = A.NextLunarEclipse(e.peak); }
    var s = A.SearchGlobalSolarEclipse(start);
    while (s.peak.date < end) { out.push({ type: "solarEclipse", kind: s.kind, date: s.peak.date, lon: lon("sun", s.peak) }); s = A.NextGlobalSolarEclipse(s.peak); }
    return out;
  }
  function bisect(f, a, b, n) { // f(a) and f(b) differ; returns the boundary instant
    var fa = f(a);
    for (var i = 0; i < (n || 30); i++) { var m = new Date((a.getTime() + b.getTime()) / 2); if (f(m) === fa) a = m; else b = m; }
    return new Date((a.getTime() + b.getTime()) / 2);
  }
  function stationsAndIngresses(start, end) {
    var out = [], bodies = ["sun", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"], day = 86400000;
    bodies.forEach(function (k) {
      var prevT = new Date(start.getTime() - day), prevSign = signOf(lon(k, prevT)), prevRetro = speed(k, prevT) < 0;
      for (var x = start.getTime(); x <= end.getTime(); x += day) {
        var d = new Date(x), l = lon(k, d), sg = signOf(l), r = k !== "sun" && speed(k, d) < 0;
        if (sg !== prevSign) {
          var when = bisect(function (q) { return signOf(lon(k, q)); }, prevT, d);
          out.push({ type: "ingress", body: k, sign: sg, from: prevSign, date: when, retro: r });
        }
        if (k !== "sun" && r !== prevRetro) {
          var st = bisect(function (q) { return speed(k, q) < 0; }, prevT, d, 22);
          out.push({ type: r ? "stationRetro" : "stationDirect", body: k, date: st, lon: lon(k, st) });
        }
        prevT = d; prevSign = sg; prevRetro = r;
      }
    });
    return out;
  }
  function nextIngress(key, date, maxDays) { // next sign change of a body after `date`
    var d0 = T(date).date, s0 = signOf(lon(key, d0)), step = key === "moon" ? 7200000 : 86400000, end = d0.getTime() + (maxDays || 3) * 86400000;
    for (var x = d0.getTime() + step; x <= end; x += step) {
      var d = new Date(x), s = signOf(lon(key, d));
      if (s !== s0) return { date: bisect(function (q) { return signOf(lon(key, q)); }, new Date(x - step), d, 24), sign: s };
    }
    return null;
  }
  function retroPeriods(date) { // which planets are retrograde now, with the station dates around today
    var t = T(date), out = [];
    ["mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"].forEach(function (k) {
      if (speed(k, t) >= 0) return;
      var d = t.date.getTime(), day = 86400000, a = d, b = d;
      while (speed(k, new Date(a - day)) < 0 && d - a < 200 * day) a -= day;
      while (speed(k, new Date(b + day)) < 0 && b - d < 200 * day) b += day;
      out.push({ body: k, from: new Date(a), to: new Date(b + day) });
    });
    return out;
  }

  /* ---------- elements and modes ---------- */
  var ELEMENT = ["fire", "earth", "air", "water"], MODE = ["cardinal", "fixed", "mutable"];
  function balance(points, keys) {
    var w = { sun: 3, moon: 3, asc: 3, mercury: 2, venus: 2, mars: 2, jupiter: 1, saturn: 1, uranus: 0.5, neptune: 0.5, pluto: 0.5 };
    var el = { fire: 0, earth: 0, air: 0, water: 0 }, md = { cardinal: 0, fixed: 0, mutable: 0 };
    keys.forEach(function (k) { if (!points[k] || !w[k]) return; var s = signOf(points[k].lon); el[ELEMENT[s % 4]] += w[k]; md[MODE[s % 3]] += w[k]; });
    return { elements: el, modes: md };
  }

  /* ---------- synastry ---------- */
  function synastry(c1, c2) {
    var keys1 = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"].concat(c1.timeKnown ? ["asc"] : []);
    var keys2 = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"].concat(c2.timeKnown ? ["asc"] : []);
    var out = [];
    keys1.forEach(function (a) {
      keys2.forEach(function (b) {
        var hit = findAspect(c1.points[a].lon, c2.points[b].lon, function (asp) {
          if (asp.key === "quincunx") return 0;
          var o = { conj: 6, opp: 6, square: 5, trine: 5, sextile: 3.5 }[asp.key];
          if (a === "jupiter" && b === "jupiter" || a === "saturn" && b === "saturn") return 0; // generational
          return o + ((a === "sun" || a === "moon") && (b === "sun" || b === "moon") ? 1.5 : 0);
        });
        if (!hit) return;
        var core = { sun: 3, moon: 3, venus: 2.5, mars: 2.2, asc: 2.2, mercury: 1.6, jupiter: 1.1, saturn: 1.4 };
        hit.a = a; hit.b = b; hit.weight = core[a] * core[b] * (1.2 - hit.orb / hit.max);
        out.push(hit);
      });
    });
    return out.sort(function (x, y) { return y.weight - x.weight; });
  }

  return {
    PLANETS: PLANETS, SIGN_KEYS: SIGN_KEYS, ASPECTS: ASPECTS, ASPECT: ASPECT, PHASES: PHASES, ELEMENT: ELEMENT, MODE: MODE,
    norm: norm, diff: diff, sep: sep, signOf: signOf, degIn: degIn,
    lon: lon, lonLat: lonLat, speed: speed, trueNode: function (d) { return trueNode(T(d)); }, meanNode: meanNode,
    positions: function (d) { return positions(T(d)); }, angles: angles, houses: houses, houseOf: houseOf, placidus: placidus,
    offsetSec: offsetSec, localToUTC: localToUTC, fmtOffset: fmtOffset, validTz: validTz,
    chart: chart, natalAspects: natalAspects, transits: transits, dayScore: dayScore, exactIn: exactIn,
    moonInfo: moonInfo, voidOfCourse: voidOfCourse, lunations: lunations, eclipses: eclipses,
    stationsAndIngresses: stationsAndIngresses, retroPeriods: retroPeriods, nextIngress: nextIngress, balance: balance, synastry: synastry,
    findAspect: findAspect
  };
});
