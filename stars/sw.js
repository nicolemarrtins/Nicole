/* Cielo — offline-first cache for the app shell. Bump VERSION when files change. */
const VERSION = "cielo-v1";
const SHELL = [
  "./", "index.html", "manifest.webmanifest", "css/cielo.css",
  "js/vendor/astronomy.browser.min.js", "js/astro.js", "js/glyphs.js", "js/places-data.js", "js/places.js", "js/i18n.js",
  "js/texts-es.js", "js/texts-en.js", "js/reading.js", "js/wheel.js", "js/app.js",
  "icons/icon.svg", "icons/icon-192.png", "icons/apple-touch-icon.png"
];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf("cielo-") === 0 && k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.indexOf(new URL(self.registration.scope).pathname) !== 0) return; // place search and Claude go straight to the network
  e.respondWith(caches.open(VERSION).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (hit) {
      const net = fetch(req).then(function (res) { if (res.ok) c.put(req, res.clone()); return res; }).catch(function () { return hit || c.match("index.html"); });
      return hit || net;
    });
  }));
});
