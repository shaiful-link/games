// =====================================================
// Service worker for the games site.
// It does two jobs:
//   1. Lets Android offer "Install app" for the menu page.
//   2. Keeps a copy of every page you have opened, so the games still open with no internet.
// It always asks the internet for the newest version first, and only uses
// the saved copy when there is no connection. So updates show up straight away.
// =====================================================

const CACHE = 'games-v1';        // change this name to throw away all saved copies

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const sameSite = new URL(req.url).origin === self.location.origin;
  // For our own files, ask the server to check for a newer version every time
  const fromNetwork = sameSite ? fetch(req.url, { cache: 'no-cache' }) : fetch(req);

  event.respondWith(
    fromNetwork
      .then((res) => {
        // Save a copy for offline use
        if (res.ok || res.type === 'opaque') {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))   // no internet: use the saved copy
  );
});
