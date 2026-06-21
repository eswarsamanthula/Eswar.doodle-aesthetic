const CACHE = 'eswar-portfolio-v1';
const URLS = [
  '/',
  'index.html',
  'assets/transhumans/Astro.svg',
  'assets/transhumans/Runner.svg',
  'assets/transhumans/Coffee.svg',
  'assets/transhumans/Roboto.svg',
  'assets/transhumans/Puppy.svg',
  'assets/favicon.svg',
  'data/now.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
