'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1ecdf414322d6b5b97bfcbee07aebf1b",
"assets/assets/certificate_img/dart.jpg": "159d16598d18a7faff3b4b7b10dd1d39",
"assets/assets/certificate_img/fexpert1.jpg": "bc4a12bfec15289f41c9dd7cd9ac4abf",
"assets/assets/certificate_img/fexpert2.jpg": "a639e4b7293dcef91338cd1bbae569b5",
"assets/assets/certificate_img/fexpert3.jpg": "3bb8ab6e7c64b73ae5efe5b28ca13b2a",
"assets/assets/certificate_img/ffundamental1.jpg": "469223c1618e213d4f005519d0a1d5f4",
"assets/assets/certificate_img/ffundamental2.jpg": "1c9d9fc011fc9c5e0cd4ffc001b0cf1d",
"assets/assets/certificate_img/fpemula1.jpg": "e545e2d1b616b35c1ffac50b32962311",
"assets/assets/certificate_img/fpemula2.jpg": "f1de01fb7c604f4b4575a4be21fed989",
"assets/assets/download.png": "846644aabafee041c278b3a6a8dba5f7",
"assets/assets/fonts/NunitoSans-Regular.ttf": "4dac705158fb1ca226d583b3829f82a0",
"assets/assets/fonts/NunitoSans-SemiBold.ttf": "2836528ad13278d88bcc509dc3f8102b",
"assets/assets/fonts/Raleway-Bold.ttf": "88079335418f389bfb2d86bc4f1ced64",
"assets/assets/fonts/Raleway-Medium.ttf": "b952c3c81ba34b54c66c748ea1e828a7",
"assets/assets/fonts/Raleway-Regular.ttf": "20d41940068e45b114d32b48d684ef39",
"assets/assets/fonts/RubikGlitch-Regular.ttf": "31084a1e50a2f7d4ac413234d0e674c1",
"assets/assets/github.png": "600f182f52a1edbaa4f282b476e6ba96",
"assets/assets/linkedin.png": "f8a12f47ec7c88eb0892d9037f46621b",
"assets/assets/photo.png": "54417ceafdff8012090d2ff618fcf29c",
"assets/assets/screenshot/alterra/1.png": "4d317e025188ece10398d5c96fe93166",
"assets/assets/screenshot/alterra/2.png": "06176b94ec664f3bdfe7956bff786d5a",
"assets/assets/screenshot/alterra/3.png": "ac3613889b2b53d01015b527c657153a",
"assets/assets/screenshot/dana/1.png": "d8b3a1a741c18af172c21231a4090d1b",
"assets/assets/screenshot/dana/2.png": "b3699956856573a55e6529c635d8220b",
"assets/assets/screenshot/ebook/1.png": "1583651856ed5bfec9bb7a727601d128",
"assets/assets/screenshot/ebook/2.png": "6a9ca69b9303d1f2c42e0d83907473c2",
"assets/assets/screenshot/food_app/1.png": "9f3d062324a4d529f68da2a19cd0c39b",
"assets/assets/screenshot/food_app/2.png": "be50988149ac9ed44cb325a153c68a08",
"assets/assets/screenshot/saving/1.png": "331551d2e13b0d6b4f1694fec67b35ca",
"assets/assets/screenshot/saving/2.png": "ef010e35420a0c28d4871d01f3ee8452",
"assets/assets/screenshot/saving/3.png": "d921391e266f93064be63a1fb1d5949b",
"assets/assets/screenshot/telkomsel/1.png": "c0f80b8a9d9ecbcd36c904375351860c",
"assets/assets/screenshot/tempat_makan/1.png": "084f6212207dbd7629e25919a44ae8e2",
"assets/assets/screenshot/tempat_makan/2.png": "756d6770de8e1f3c853f33acc1be4411",
"assets/assets/screenshot/tempat_makan/3.png": "5775ec837d25d2f09343bd253f802785",
"assets/assets/screenshot/tempat_makan/4.png": "fba2f6048dcbaf1b9ac6e28c4e11c78c",
"assets/assets/screenshot/tempat_makan/5.png": "18d050dcfba273e8d447a824844a4b5a",
"assets/assets/screenshot/tempat_makan/6.png": "d8a8dd8e4374de95a383d2b2c22e2a99",
"assets/assets/screenshot/tempat_makan/7.png": "30e2082d1c3432888ab999e6bb825dd0",
"assets/assets/screenshot/tempat_makan/8.png": "d9e995b1776fe4ba1a78a4241322d38a",
"assets/FontManifest.json": "d69193ac5933417e66a98efc0fcb605b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7033d8e30968cbfa56d98fe0a41b8760",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "316ab031482d4d65f471c448a0768974",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "be6151f0c3adfc77ebbbb31df8740184",
"/": "be6151f0c3adfc77ebbbb31df8740184",
"main.dart.js": "b9b9c8ed702db3c2496712c568acdf87",
"manifest.json": "b89e3d513542684d5881620d1fa07bff",
"version.json": "0288ba20bee478e177fa039cb69fb1e5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
