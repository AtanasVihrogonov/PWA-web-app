// create a cash name
const CACHE_NAME = 'version-1'
// create a variable that will be store index.js and the name of the file if there is no connection.
const urlsToCache = ['index.html', 'offline.html']

// const self = this

// write events for:
// Install SW
self.addEventListener('install', (event) => {
  // open the cache and we go add urlsToCache to the cache
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache')

      return cache.addAll(urlsToCache)
    })
  )
})

// Listen for requests
self.addEventListener('fetch', (event) => {
  // do something with the request after we listen for them.
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match('offline.html'))
    })
  )
})

// Activate the SW
self.addEventListener('activate', (event) => {
  // activate event listener
  const cacheWhitelist = []
  cacheWhitelist.push(CACHE_NAME)

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    )
  )
})
