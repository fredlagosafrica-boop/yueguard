const CACHE_NAME = 'kyc-engine-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install: cache core assets
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for HTML (live update), cache-first for assets
self.addEventListener('fetch', evt => {
  const { request } = evt;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin requests
  if (request.method !== 'GET') return;

  // Network-first for navigation (always try to get fresh HTML)
  if (request.mode === 'navigate') {
    evt.respondWith(
      fetch(request)
        .then(res => { if (res.ok) { const c = caches.open(CACHE_NAME); c.then(cache => cache.put(request, res.clone())); } return res; })
        .catch(() => caches.match('./index.html') || caches.match(request))
    );
    return;
  }

  // Cache-first for static assets (icons, manifest, etc.)
  if (url.pathname.includes('/icons/') || url.pathname.endsWith('.json')) {
    evt.respondWith(
      caches.match(request).then(cached => cached || fetch(request).then(res => { if (res.ok) caches.open(CACHE_NAME).then(c => c.put(request, res.clone())); return res; }))
    );
    return;
  }

  // Default: stale-while-revalidate for everything else
  evt.respondWith(
    caches.match(request).then(cached => {
      const fetchPromise = fetch(request).then(res => { if (res.ok) caches.open(CACHE_NAME).then(c => c.put(request, res.clone())); return res; });
      return cached || fetchPromise;
    })
  );
});
