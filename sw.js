const CACHE_NAME = 'shm-gps-cam-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://res.cloudinary.com/ewu5hckc/image/upload/v1791730364/gcam.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
