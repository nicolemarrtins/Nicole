/* Offline-first cache for the app shell. Bump VERSION when files change. */
const VERSION = "taw-v12";
const SHELL = [
  "./", "index.html", "manifest.webmanifest", "css/styles.css",
  "js/data/curriculum.js", "js/data/lessons-a.js", "js/data/lessons-b.js", "js/data/lessons-c.js", "js/data/lessons-d.js", "js/data/lessons-e.js", "js/data/lessons-f.js", "js/data/lessons-g.js", "js/data/lessons-h.js", "js/data/passport.js", "js/data/passport-b.js",
  "js/data/library.js", "js/data/extras.js", "js/data/track-brain.js", "js/data/track-voice-a.js", "js/data/track-voice-b.js", "js/data/extras-pro.js", "js/data/es-a.js", "js/data/es-b.js", "js/data/es-c.js", "js/data/es-d.js", "js/data/es-e.js", "js/data/es-f.js", "js/data/es-g.js", "js/data/es-h.js", "js/data/es-brain.js", "js/data/es-voice-a.js", "js/data/es-voice-b.js", "js/data/es-cards.js", "js/data/es-cards2.js", "js/data/lab-sim.js", "js/data/lab-drills.js", "js/store.js", "js/analysis.js", "js/ai.js",
  "js/lessons.js", "js/enhance.js", "js/lab.js", "js/player.js", "js/views.js", "js/app.js", "icons/icon.svg", "icons/icon-192.png", "icons/apple-touch-icon.png"
];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname === "api.anthropic.com") return; // never cache the mentor
  if (url.hostname.indexOf("fonts.g") === 0) {
    e.respondWith(caches.open(VERSION).then(function (c) {
      return c.match(req).then(function (hit) {
        return hit || fetch(req).then(function (res) { c.put(req, res.clone()); return res; }).catch(function () { return hit; });
      });
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  // app shell: cache first, refresh in background
  e.respondWith(caches.open(VERSION).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (hit) {
      const net = fetch(req).then(function (res) { if (res.ok) c.put(req, res.clone()); return res; }).catch(function () { return hit || c.match("index.html"); });
      return hit || net;
    });
  }));
});
