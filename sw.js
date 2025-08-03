self.addEventListener('install', e => {
  self.skipWaiting(); // don't wait
});

self.addEventListener('fetch', () => {
  // noop: just enough to satisfy pwa criteria
});
