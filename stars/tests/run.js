/* Accuracy tests for Cielo's engine.  Run:  node stars/tests/run.js
   1. Planets, lunar node, Ascendant, MC and Placidus cusps vs the Swiss Ephemeris (reference.json).
   2. Local time → UTC with historical time zones and DST.
   3. Published events: equinoxes, eclipses and lunations (USNO / NASA times).            */
const Sky = require("../js/astro.js");
const ref = require("./reference.json");
let fails = 0, checks = 0;
function ok(cond, msg) { checks++; if (!cond) { fails++; console.log("  ✗ " + msg); } }
const arcmin = (a, b) => Math.abs(Sky.diff(a, b)) * 60;

/* 1 — ephemeris and houses */
const worst = {};
function track(k, v) { worst[k] = Math.max(worst[k] || 0, v); }
ref.cases.forEach((c) => {
  const d = new Date(c.utc);
  ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"].forEach((k) => {
    const e = arcmin(Sky.lon(k, d), c.planets[k][0]); track(k, e);
    ok(e < 1, `${k} ${c.utc}: off by ${e.toFixed(2)}′`);
    const sp = Sky.speed(k, d), rs = c.planets[k][1];
    ok(Math.sign(sp) === Math.sign(rs) || Math.abs(rs) < 0.002, `${k} retrograde flag ${c.utc}`);
  });
  const tn = arcmin(Sky.trueNode(d), c.planets.node[0]); track("trueNode", tn); ok(tn < 3, `true node ${c.utc}: ${tn.toFixed(2)}′`);
  const mn = arcmin(Sky.meanNode(d), c.planets.meanNode[0]); track("meanNode", mn); ok(mn < 1, `mean node ${c.utc}: ${mn.toFixed(2)}′`);
  const a = Sky.angles(d, c.lat, c.lng);
  const ea = arcmin(a.asc, c.asc), em = arcmin(a.mc, c.mc); track("asc", ea); track("mc", em);
  ok(ea < 1, `ASC ${c.utc} ${c.lat},${c.lng}: ${ea.toFixed(2)}′`); ok(em < 1, `MC ${c.utc}: ${em.toFixed(2)}′`);
  const p = Sky.placidus(a);
  ok(!!p, `Placidus failed at ${c.lat}`);
  if (p) p.forEach((cu, i) => { const e = arcmin(cu, c.placidus[i]); track("placidus", e); ok(e < 1, `cusp ${i + 1} ${c.utc} ${c.lat}: ${e.toFixed(2)}′`); });
  ["koch", "regio", "equal"].forEach((sys) => {
    const h = Sky.houses(a, sys);
    ok(h.system === sys, `${sys} fell back at ${c.lat}`);
    h.cusps.forEach((cu, i) => { const e = arcmin(cu, c[sys][i]); track(sys, e); ok(e < 1, `${sys} cusp ${i + 1} ${c.utc} ${c.lat}: ${e.toFixed(2)}′`); });
  });
  // Lilith is a theoretical point: Meeus's mean apogee and the Swiss Ephemeris model differ by a few arcminutes (orb used: 3°).
  const li = arcmin(Sky.meanLilith(d), c.planets.lilith[0]); track("lilith", li); ok(li < 8, `Lilith ${c.utc}: ${li.toFixed(2)}′`);
});
const chiRef = require("./chiron-reference.json");
chiRef.cases.forEach((c) => {
  const d = new Date((c.jdUT - 2440587.5) * 86400000), e = arcmin(Sky.lon("chiron", d), c.lon); track("chiron", e);
  ok(e < 1, `Chiron ${d.toISOString()}: ${e.toFixed(2)}′`);
});
console.log("Chiron vs NASA/JPL Horizons — " + chiRef.cases.length + " dates 1916–2030");
console.log("Ephemeris vs " + ref.source + " — " + ref.cases.length + " random charts 1925–2035, worst error (arcminutes):");
console.log("  " + Object.keys(worst).map((k) => k + " " + worst[k].toFixed(3)).join(" · "));

/* 2 — time zones (local → UTC) */
const tz = [
  [[1990, 5, 12, 14, 30, "America/Caracas"], "1990-05-12T18:30:00.000Z", "ok"],
  [[2010, 5, 12, 14, 30, "America/Caracas"], "2010-05-12T19:00:00.000Z", "ok"],          // Venezuela UTC−4:30, 2007–2016
  [[1985, 7, 1, 12, 0, "Europe/Madrid"], "1985-07-01T10:00:00.000Z", "ok"],              // CEST
  [[1985, 1, 15, 12, 0, "Europe/Madrid"], "1985-01-15T11:00:00.000Z", "ok"],             // CET
  [[1995, 8, 20, 8, 0, "America/Bogota"], "1995-08-20T13:00:00.000Z", "ok"],
  [[1988, 7, 1, 12, 0, "America/Mexico_City"], "1988-07-01T18:00:00.000Z", "ok"],        // no DST in Mexico before 1996
  [[2000, 1, 1, 0, 0, "Asia/Tokyo"], "1999-12-31T15:00:00.000Z", "ok"],
  [[2021, 11, 7, 1, 30, "America/New_York"], "2021-11-07T05:30:00.000Z", "ambiguous"],   // clocks fall back: first 01:30 (EDT)
  [[2021, 3, 14, 2, 30, "America/New_York"], null, "gap"],                               // clocks spring forward: 02:30 does not exist
  [[1992, 4, 3, 9, 15, "America/Sao_Paulo"], "1992-04-03T12:15:00.000Z", "ok"],
  [[1999, 12, 24, 23, 50, "America/Argentina/Buenos_Aires"], "1999-12-25T02:50:00.000Z", "ok"]
];
tz.forEach(([a, want, status]) => {
  const r = Sky.localToUTC(a[0], a[1], a[2], a[3], a[4], a[5]);
  ok(r.status === status, `${a.join(" ")} status ${r.status} (want ${status})`);
  if (want) ok(new Date(r.utc).toISOString() === want, `${a.join(" ")} → ${new Date(r.utc).toISOString()} (want ${want}, ${Sky.fmtOffset(r.offset)})`);
});
console.log("Time zones: " + tz.length + " historical cases (DST, Venezuela’s UTC−4:30, gaps and overlaps)");

/* 3 — published events */
const within = (d, iso, min) => Math.abs(d.getTime() - new Date(iso).getTime()) / 60000 <= min;
ok(arcmin(Sky.lon("sun", new Date("2024-03-20T03:06:00Z")), 0) < 1.5, "March equinox 2024 (USNO 03:06 UT)");
ok(arcmin(Sky.lon("sun", new Date("2025-06-21T02:42:00Z")), 90) < 1.5, "June solstice 2025 (USNO 02:42 UT)");
const ecl = Sky.eclipses(new Date("2024-03-01T00:00:00Z"), new Date("2025-10-01T00:00:00Z"));
const find = (type, kind) => ecl.filter((e) => e.type === type && (!kind || e.kind === kind));
ok(find("solarEclipse", "total").some((e) => within(e.date, "2024-04-08T18:17:16Z", 3)), "total solar eclipse 8 Apr 2024 (NASA 18:17 UT)");
ok(find("lunarEclipse", "total").some((e) => within(e.date, "2025-03-14T06:58:43Z", 3)), "total lunar eclipse 14 Mar 2025 (NASA 06:59 UT)");
ok(find("lunarEclipse", "total").some((e) => within(e.date, "2025-09-07T18:11:48Z", 3)), "total lunar eclipse 7 Sep 2025 (NASA 18:12 UT)");
const lun = Sky.lunations(new Date("2024-04-01T00:00:00Z"), new Date("2024-05-01T00:00:00Z"));
ok(lun.some((l) => l.type === "newMoon" && within(l.date, "2024-04-08T18:21:00Z", 3)), "new moon 8 Apr 2024 18:21 UT");
ok(lun.some((l) => l.type === "fullMoon" && within(l.date, "2024-04-23T23:49:00Z", 3)), "full moon 23 Apr 2024 23:49 UT");
const ev = Sky.stationsAndIngresses(new Date("2024-03-25T00:00:00Z"), new Date("2024-05-01T00:00:00Z"));
ok(ev.some((e) => e.type === "stationRetro" && e.body === "mercury" && within(e.date, "2024-04-01T22:14:00Z", 60)), "Mercury stations retrograde 1 Apr 2024 ~22:14 UT");
ok(ev.some((e) => e.type === "stationDirect" && e.body === "mercury" && within(e.date, "2024-04-25T12:54:00Z", 60)), "Mercury stations direct 25 Apr 2024 ~12:54 UT");
console.log("Events: equinox, solstice, eclipses, lunations and Mercury stations checked against published times");

/* 4 — timing tools */
const natal = Sky.chart({ y: 1990, m: 5, d: 12, h: 14, min: 30, lat: 10.4806, lng: -66.9036, tz: "America/Caracas" });
const sr = Sky.solarReturn(natal.points.sun.lon, 2026, 5, 12);
ok(arcmin(Sky.lon("sun", sr), natal.points.sun.lon) < 0.01 && Math.abs(sr - new Date("2026-05-12T12:00:00Z")) < 3 * 86400000, "solar return lands on the natal Sun");
// Saturn conjunct a test point: the window must contain the exact passes, and each pass must really be exact
const satNow = new Date("2025-06-01T12:00:00Z"), target = Sky.lon("saturn", satNow);
const w = Sky.transitWindow("saturn", target, 0, 2, satNow);
ok(w && w.start < satNow && w.end > satNow && w.exacts.length >= 1, "transit window brackets the exact pass");
if (w) w.exacts.forEach((x) => ok(arcmin(Sky.lon("saturn", x), target) < 0.5, "exact pass is exact (" + x.toISOString().slice(0, 10) + ")"));
if (w) ok(Math.abs(Sky.diff(Sky.lon("saturn", w.start), target)) > 1.98 && Math.abs(Sky.diff(Sky.lon("saturn", w.end), target)) > 1.98, "window edges sit on the orb");
const sq = Sky.nextAspect("moon", "sun", new Date("2024-04-01T00:00:00Z"), 30);
ok(sq && sq.angle === 90 && within(sq.date, "2024-04-02T03:15:00Z", 3), "next Sun–Moon aspect after 1 Apr 2024 is the last-quarter square (03:15 UT)");
const na = Sky.nextAspect("moon", "sun", new Date("2024-04-06T12:00:00Z"), 30);
ok(na && na.angle === 0 && within(na.date, "2024-04-08T18:21:00Z", 3), "next Sun–Moon conjunction found at the April 2024 new moon");
const pm = Sky.progressedMoon(natal.utc, new Date("2026-11-11T12:00:00Z"));
ok(pm && pm.next && pm.next.date > new Date("2026-11-11T12:00:00Z"), "progressed Moon and its next sign change");
const hor = Sky.castAt(new Date("2026-11-11T15:00:00Z"), 40.4168, -3.7038, { houseSystem: "regio" });
ok(hor.houseSystem === "regio" && hor.points.fortune && typeof hor.day === "boolean", "horary chart with Regiomontanus houses and Part of Fortune");
console.log("Timing: solar return, transit windows with exact passes, aspect search, progressions, horary charts");

/* 5 — a full chart runs end to end */
const c = Sky.chart({ y: 1990, m: 5, d: 12, h: 14, min: 30, lat: 10.4806, lng: -66.9036, tz: "America/Caracas" });
ok(c.cusps.length === 12 && c.points.asc && c.aspects.length > 3, "chart() returns cusps, angles and aspects");
const u = Sky.chart({ y: 1990, m: 5, d: 12, timeKnown: false, lat: 10.4806, lng: -66.9036, tz: "America/Caracas" });
ok(!u.cusps && u.moonRange && !u.points.asc, "unknown birth time hides houses and gives the Moon's range");
const polar = Sky.chart({ y: 1990, m: 12, d: 21, h: 12, min: 0, lat: 69.65, lng: 18.96, tz: "Europe/Oslo" });
ok(polar.houseSystem === "porphyry" && polar.houseFallback, "polar latitude falls back from Placidus to Porphyry");

console.log((fails ? "FAILED " + fails : "ALL PASSED") + " — " + checks + " checks");
process.exit(fails ? 1 : 0);
