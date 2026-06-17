const CACHE_VERSION = 'v2';
const STATIC_CACHE = `aseeb-static-${CACHE_VERSION}`;
const IMAGE_CACHE = `aseeb-images-${CACHE_VERSION}`;
const FONT_CACHE = `aseeb-fonts-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
];

// Install: pre-cache static shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  const VALID = [STATIC_CACHE, IMAGE_CACHE, FONT_CACHE];
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => !VALID.includes(k)).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

function isImage(url) {
  return /\.(jpe?g|png|gif|webp|svg|ico)(\?.*)?$/i.test(url);
}

function isFont(url) {
  return /\.(woff2?|ttf|otf|eot)(\?.*)?$/i.test(url) || url.includes('fonts.googleapis') || url.includes('fonts.gstatic');
}

function isStatic(url) {
  return /\.(js|css|json)(\?.*)?$/i.test(url);
}

// Cache-first for images & fonts, Network-first for everything else
self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith('http')) return;
  if (event.request.method !== 'GET') return;

  const url = event.request.url;

  // Images: Cache-first (fast loading + offline)
  if (isImage(url)) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) =>
        cache.match(event.request).then((cached) => {
          if (cached) return cached;
          return fetch(event.request).then((res) => {
            if (res.ok) cache.put(event.request, res.clone());
            return res;
          });
        })
      )
    );
    return;
  }

  // Fonts: Cache-first
  if (isFont(url)) {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) =>
        cache.match(event.request).then((cached) => {
          if (cached) return cached;
          return fetch(event.request).then((res) => {
            if (res.ok) cache.put(event.request, res.clone());
            return res;
          });
        })
      )
    );
    return;
  }

  // JS/CSS: Cache-first with background update (Stale-While-Revalidate)
  if (isStatic(url)) {
    event.respondWith(
      caches.open(STATIC_CACHE).then((cache) =>
        cache.match(event.request).then((cached) => {
          const fetchPromise = fetch(event.request).then((res) => {
            if (res.ok) cache.put(event.request, res.clone());
            return res;
          });
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // HTML & API: Network-first, fallback to cache
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put(event.request, clone));
        }
        return res;
      })
      .catch(() =>
        caches.match(event.request).then((cached) =>
          cached || caches.match('/')
        )
      )
  );
});
