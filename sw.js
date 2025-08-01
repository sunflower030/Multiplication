const CACHE_NAME = 'kakezan-challenge-v1';
const urlsToCache = [
  './',
  './index.html'
  // 必要であれば、CSSや他のJSファイル、ごほうび画像などもここに追加します。
  // './style.css',
  // './iine.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});