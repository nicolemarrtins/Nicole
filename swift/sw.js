/* Offline cache for the app shell: network first, cache when offline. Bump VERSION when the file list changes. */
const VERSION = "swiftish-v3";
const SHELL = [
  "./", "index.html", "manifest.webmanifest", "css/swift.css",
  "js/data/roadmap.js", "js/data/days.js", "js/data/games.js", "js/engine.js", "js/store.js", "js/lessons.js",
  "js/ui.js", "js/views.js", "js/day.js", "js/play.js", "js/app.js",
  "icons/icon.svg", "icons/icon-192.png", "icons/apple-touch-icon.png"
];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf("swiftish-") === 0 && k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname.indexOf("fonts.g") === 0) {
    e.respondWith(caches.open(VERSION).then(function (c) {
      return c.match(req).then(function (hit) {
        return hit || fetch(req).then(function (res) { c.put(req, res.clone()); return res; }).catch(function () { return hit; });
      });
    }));
    return;
  }
  if (url.origin !== location.origin || url.pathname.indexOf(new URL(self.registration.scope).pathname) !== 0) return;
  // App files: network first so every open gets the latest version; the cache is the offline fallback.
  e.respondWith(caches.open(VERSION).then(function (c) {
    return fetch(req, { cache: "no-cache" }).then(function (res) {
      if (res.ok) c.put(req, res.clone());
      return res;
    }).catch(function () {
      return c.match(req, { ignoreSearch: true }).then(function (hit) { return hit || c.match("index.html"); });
    });
  }));
});
