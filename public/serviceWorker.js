// src/serviceWorker.js

const CACHE_NAME = "project-images-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    fetch("/projects.json")
      .then((response) => response.json())
      .then((projects) => {
        const imagesToCache = [];

        projects.forEach((project) => {
          if (project.images) {
            project.images.forEach((image) => {
              console.log(
                `/src/assets/${project.projectTitle.toLowerCase()}/${image}`,
              );
              imagesToCache.push(
                `/src/assets/${project.projectTitle.toLowerCase()}/${image}`,
              );
            });
          }
        });

        return caches.open(CACHE_NAME).then((cache) => {
          return cache.addAll(imagesToCache);
        });
      }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
