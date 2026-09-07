const CACHE = "jewels-cafe-v22";
const FILES = ["/manifest.webmanifest", "/icon-180.png", "/icon-192.png", "/icon-512.png", "/cust1.png", "/cust2.png", "/cust3.png", "/cust4.png", "/chef.png", "/kitchen.jpg", "/theme.mp3"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("message", e => {
  if (e.data === "SKIP_WAITING") self.skipWaiting();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const isPage = e.request.mode === "navigate" || url.pathname === "/" || url.pathname.endsWith("index.html") || url.pathname.endsWith("sw.js");
  if (isPage) {
    e.respondWith(fetch(e.request, {cache: "no-store"}).then(res => res).catch(() => caches.match("/index.html")));
    return;
  }
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(e.request))
  );
});
