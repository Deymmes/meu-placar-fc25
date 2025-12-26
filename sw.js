const CACHE_NAME = 'fc26-cache-v1';

// Instalação do Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Responde às requisições (necessário para o PWA ser aceito)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
