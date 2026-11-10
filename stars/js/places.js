/* Cielo — place search: an offline list first, then (only if asked) Open‑Meteo's geocoder. */
(function () {
  var rows = null;
  var ALIAS = { "Europe/Kyiv": "Europe/Kiev", "America/Nuuk": "America/Godthab", "Asia/Kolkata": "Asia/Calcutta", "Asia/Yangon": "Asia/Rangoon",
    "Asia/Ho_Chi_Minh": "Asia/Saigon", "Asia/Kathmandu": "Asia/Katmandu", "Atlantic/Faroe": "Atlantic/Faeroe", "Pacific/Kanton": "Pacific/Enderbury", "America/Montreal": "America/Toronto" };
  function key(s) { return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(); }
  var dn = {};
  function country(cc, lang) {
    if (!cc) return "";
    try { dn[lang] = dn[lang] || new Intl.DisplayNames([lang], { type: "region" }); return dn[lang].of(cc) || cc; } catch (e) { return cc; }
  }
  function load() {
    if (rows) return rows;
    var tz = window.PLACE_TZ || [];
    rows = String(window.PLACE_DATA || "").split("\n").filter(Boolean).map(function (line, i) {
      var p = line.split("|");
      return { name: p[0], region: p[1], cc: p[2], lat: +p[3], lng: +p[4], tz: tz[+p[5]], k: key(p[0]), kr: key(p[1]), rank: i };
    });
    return rows;
  }
  function fixTz(tz) {
    if (window.Sky && Sky.validTz(tz)) return tz;
    if (ALIAS[tz] && Sky.validTz(ALIAS[tz])) return ALIAS[tz];
    return tz;
  }
  function search(q, lang, max) {
    var parts = String(q || "").split(","), name = key(parts[0]), rest = key(parts.slice(1).join(" "));
    if (name.length < 2) return [];
    var hits = [];
    load().forEach(function (r) {
      var s = r.k === name ? 0 : r.k.indexOf(name) === 0 ? 1 : (" " + r.k).indexOf(" " + name) >= 0 ? 2 : -1;
      if (s < 0) return;
      if (rest && !(r.kr.indexOf(rest) >= 0 || key(country(r.cc, lang)).indexOf(rest) >= 0 || key(r.cc) === rest)) return;
      hits.push({ s: s, r: r });
    });
    hits.sort(function (a, b) { return a.s - b.s || a.r.rank - b.r.rank; });
    return hits.slice(0, max || 8).map(function (h) {
      var r = h.r;
      return { name: r.name, region: r.region, cc: r.cc, country: country(r.cc, lang), lat: r.lat, lng: r.lng, tz: fixTz(r.tz) };
    });
  }
  function online(q, lang) {
    var name = String(q || "").split(",")[0].trim();
    var url = "https://geocoding-api.open-meteo.com/v1/search?count=10&format=json&language=" + encodeURIComponent(lang) + "&name=" + encodeURIComponent(name);
    return fetch(url, { credentials: "omit", referrerPolicy: "no-referrer" }).then(function (r) {
      if (!r.ok) throw new Error("http " + r.status);
      return r.json();
    }).then(function (j) {
      return (j.results || []).filter(function (x) { return x.timezone && isFinite(x.latitude) && isFinite(x.longitude); }).map(function (x) {
        return { name: x.name, region: x.admin1 || "", cc: x.country_code || "", country: x.country || country(x.country_code, lang), lat: +(+x.latitude).toFixed(4), lng: +(+x.longitude).toFixed(4), tz: fixTz(x.timezone) };
      });
    });
  }
  function zones() {
    var list = [];
    try { if (Intl.supportedValuesOf) list = Intl.supportedValuesOf("timeZone"); } catch (e) { list = []; }
    if (!list.length) list = (window.PLACE_TZ || []).slice().sort();
    return list;
  }
  function label(p, lang) {
    if (!p) return "";
    var c = p.country || country(p.cc, lang);
    return [p.name, p.region && p.region !== p.name ? p.region : "", c].filter(Boolean).join(", ");
  }
  window.Places = { search: search, online: online, zones: zones, label: label, country: country, fixTz: fixTz };
})();
