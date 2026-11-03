const CACHE = 'eswar-portfolio-v3';
const ASSETS = [
  './',
  'index.html',
  'now/',
  'now/index.html',
  'assets/favicon.svg',
  'assets/Eswar_Atomberg_Portfolio.pdf',
  'assets/transhumans/Astro.svg',
  'assets/transhumans/Runner.svg',
  'assets/transhumans/Coffee.svg',
  'assets/transhumans/Roboto.svg',
  'assets/transhumans/Puppy.svg',
  'assets/transhumans/Waiting.svg',
  'assets/transhumans/Mask.svg',
  'assets/transhumans/Looking Ahead.svg',
  'assets/transhumans/Pondering.svg',
  'assets/transhumans/Feliz.svg',
  'assets/transhumans/Jumping.svg',
  'assets/transhumans/Gamestation.svg',
  'data/now.json',
  'manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    Promise.all(
      ASSETS.map(url =>
        fetch(url).then(r => {
          if (!r.ok) console.warn('SW: failed to fetch ' + url, r.status);
          return r;
        }).then(r =>
          caches.open(CACHE).then(c => c.put(url, r))
        ).catch(() => console.warn('SW: skipping ' + url))
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => new Response('Offline', { status: 503 })))
  );
});
