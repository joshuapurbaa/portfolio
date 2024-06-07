'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "313a19755695f85680fa534c08213779",
"version.json": "bd341ba74d38c530da636604a427deda",
"favicon.ico": "95801d969afb9529c43d9a980a19b597",
"index.html": "f0374ab1e0ac852ed12b13b3bf74e88c",
"/": "f0374ab1e0ac852ed12b13b3bf74e88c",
"main.dart.js": "1e10775a6aec1900ee8808649d93161b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/Icon-192.png": "e5372222a910a4c7c1ba585df9c84632",
"icons/Icon-maskable-192.png": "e5372222a910a4c7c1ba585df9c84632",
"icons/Icon-maskable-512.png": "1f022afb43babd042cebb2d484326973",
"icons/Icon-512.png": "1f022afb43babd042cebb2d484326973",
"manifest.json": "f872f6598abf120477f720cb0c83ce73",
"assets/AssetManifest.json": "6c86f1f2321988fef7309faee87ef0b6",
"assets/NOTICES": "2857d30bff8ff222a8b2ba686c1a05cb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e6b103c020ce672564f0c95a6265df8d",
"assets/packages/home/assets/screenshot/dana/2.png": "b3699956856573a55e6529c635d8220b",
"assets/packages/home/assets/screenshot/dana/1.png": "d8b3a1a741c18af172c21231a4090d1b",
"assets/packages/home/assets/screenshot/ebook/2.png": "6a9ca69b9303d1f2c42e0d83907473c2",
"assets/packages/home/assets/screenshot/ebook/1.png": "1583651856ed5bfec9bb7a727601d128",
"assets/packages/home/assets/screenshot/tempat_makan/8.png": "d9e995b1776fe4ba1a78a4241322d38a",
"assets/packages/home/assets/screenshot/tempat_makan/4.png": "fba2f6048dcbaf1b9ac6e28c4e11c78c",
"assets/packages/home/assets/screenshot/tempat_makan/5.png": "18d050dcfba273e8d447a824844a4b5a",
"assets/packages/home/assets/screenshot/tempat_makan/7.png": "30e2082d1c3432888ab999e6bb825dd0",
"assets/packages/home/assets/screenshot/tempat_makan/6.png": "d8a8dd8e4374de95a383d2b2c22e2a99",
"assets/packages/home/assets/screenshot/tempat_makan/2.png": "756d6770de8e1f3c853f33acc1be4411",
"assets/packages/home/assets/screenshot/tempat_makan/3.png": "5775ec837d25d2f09343bd253f802785",
"assets/packages/home/assets/screenshot/tempat_makan/1.png": "084f6212207dbd7629e25919a44ae8e2",
"assets/packages/home/assets/screenshot/udemy/2.PNG": "6ed2501f9879e3708457bcd4bb3e201a",
"assets/packages/home/assets/screenshot/udemy/1.png": "493f808f35093cb6a64d4c6c4d20ada2",
"assets/packages/home/assets/screenshot/food_app/2.png": "be50988149ac9ed44cb325a153c68a08",
"assets/packages/home/assets/screenshot/food_app/1.png": "9f3d062324a4d529f68da2a19cd0c39b",
"assets/packages/home/assets/screenshot/alterra/2.png": "06176b94ec664f3bdfe7956bff786d5a",
"assets/packages/home/assets/screenshot/alterra/3.png": "ac3613889b2b53d01015b527c657153a",
"assets/packages/home/assets/screenshot/alterra/1.png": "4d317e025188ece10398d5c96fe93166",
"assets/packages/home/assets/screenshot/pln_click/8.png": "4565a7e9832288799ba76e343c0abbfe",
"assets/packages/home/assets/screenshot/pln_click/9.png": "49a0f10f0d77588ee1a273892895e259",
"assets/packages/home/assets/screenshot/pln_click/10.png": "062200d6a61e4eec5340feb359b8eb50",
"assets/packages/home/assets/screenshot/pln_click/4.png": "1d39cefe97fc589df2a647ce08ed0f94",
"assets/packages/home/assets/screenshot/pln_click/5.png": "d0a257594b2b9ca752dd69f0004f9cdc",
"assets/packages/home/assets/screenshot/pln_click/7.png": "407934828399029c635caf08e450b73d",
"assets/packages/home/assets/screenshot/pln_click/6.png": "0d644b34db7fc3291ea3bbd1c19429e7",
"assets/packages/home/assets/screenshot/pln_click/2.png": "66d521457fdba87c4ac0d80746f92640",
"assets/packages/home/assets/screenshot/pln_click/3.png": "32ccaa09cb41a8493bcfc5f0b31c24ea",
"assets/packages/home/assets/screenshot/pln_click/1.png": "e61d4649d55261e8de646bcaabe8c5f9",
"assets/packages/home/assets/screenshot/budget-intelli/8.png": "86ed9dd347d5d1e9d195823ba0968ee5",
"assets/packages/home/assets/screenshot/budget-intelli/9.png": "aa705987b76ffb5af7bcc5e5d1d8567a",
"assets/packages/home/assets/screenshot/budget-intelli/4.png": "87aa30181db2ce4c326691ec627db16f",
"assets/packages/home/assets/screenshot/budget-intelli/5.png": "6a6e44eec4f45a4aaca2359987cbe7b1",
"assets/packages/home/assets/screenshot/budget-intelli/7.png": "fd1946d913d8585f2708bd3b8d2ddfcc",
"assets/packages/home/assets/screenshot/budget-intelli/6.png": "f03eca97222ca0bc3bef0f9c05e0466f",
"assets/packages/home/assets/screenshot/budget-intelli/2.png": "fb81b206f44af0b37cef256e77ea469a",
"assets/packages/home/assets/screenshot/budget-intelli/3.png": "01ee5e087d33536be079512ce7d17241",
"assets/packages/home/assets/screenshot/budget-intelli/1.png": "a5c16aada9c9957f072495bc8f3e75c1",
"assets/packages/home/assets/screenshot/telkomsel/1.png": "c0f80b8a9d9ecbcd36c904375351860c",
"assets/packages/home/assets/screenshot/pln/8.png": "446a511dfc397ecf35d560fe440a5eaa",
"assets/packages/home/assets/screenshot/pln/9.png": "22883461e6272f59f88fda9e3991d418",
"assets/packages/home/assets/screenshot/pln/12.png": "a3ac1d0131794050d7f1065d1ee7686a",
"assets/packages/home/assets/screenshot/pln/13.png": "26f396162a7b940932d973efb6311afc",
"assets/packages/home/assets/screenshot/pln/11.png": "6099220ba0a85a50039d9a67ec072659",
"assets/packages/home/assets/screenshot/pln/10.png": "1c4b994094470ec7009ae73c7ef1e7ee",
"assets/packages/home/assets/screenshot/pln/4.png": "a419b199bcc675687bd87b8c7b264e37",
"assets/packages/home/assets/screenshot/pln/5.png": "7ee4cb5f41166fa27f65f488979a4884",
"assets/packages/home/assets/screenshot/pln/7.png": "8bf7127dab015ed28afece3b7e1a69bf",
"assets/packages/home/assets/screenshot/pln/6.png": "23bf901d4f049c8ea50eda00b8f97399",
"assets/packages/home/assets/screenshot/pln/2.png": "890988563afd168d8751a26dfe65751c",
"assets/packages/home/assets/screenshot/pln/3.png": "bc5dc796a7877fcbf4da0561f2fe675e",
"assets/packages/home/assets/screenshot/pln/1.png": "72b9e4cb600cdd074715164b7075b410",
"assets/packages/home/assets/screenshot/saving/2.png": "ef010e35420a0c28d4871d01f3ee8452",
"assets/packages/home/assets/screenshot/saving/3.png": "d921391e266f93064be63a1fb1d5949b",
"assets/packages/home/assets/screenshot/saving/1.png": "331551d2e13b0d6b4f1694fec67b35ca",
"assets/packages/home/assets/screenshot/colok_in/8.png": "e384f17542e549ddf85a625a8f4c7f8d",
"assets/packages/home/assets/screenshot/colok_in/9.png": "3659c204b42ab40cad00a2b481831692",
"assets/packages/home/assets/screenshot/colok_in/4.png": "4f6fbb1ffd49bec3e4d0673110b0dee3",
"assets/packages/home/assets/screenshot/colok_in/5.png": "377bb1e961fd74a0abaf64b07b155b3f",
"assets/packages/home/assets/screenshot/colok_in/7.png": "02972f06910bf8b260ad0f7eba1bcd47",
"assets/packages/home/assets/screenshot/colok_in/6.png": "45f60187c85e9c051f6e6f120437a5c7",
"assets/packages/home/assets/screenshot/colok_in/2.png": "711f29b351c7e1e98d62bc4da8eb6554",
"assets/packages/home/assets/screenshot/colok_in/3.png": "19d604186c6b3df853c173e9b80b4a51",
"assets/packages/home/assets/screenshot/colok_in/1.png": "482bba6c76c2fc37cb7d4ad855c45edb",
"assets/packages/home/assets/screenshot/barista/4.png": "feb88c817e53dea541686ab6d189dc78",
"assets/packages/home/assets/screenshot/barista/5.png": "05a609829025bd571fd13e15b28d5225",
"assets/packages/home/assets/screenshot/barista/6.png": "1a4aaec61ee8ccb3e8be7813b71dfd70",
"assets/packages/home/assets/screenshot/barista/2.png": "8218ecd438047550444818c95bba4f60",
"assets/packages/home/assets/screenshot/barista/3.png": "bc35e9d53c79c46719bd18b649597ac2",
"assets/packages/home/assets/screenshot/barista/1.png": "2543b277aa897615012e99d9a1602627",
"assets/packages/home/assets/certificate_img/101.jpg": "c7df854efd7df6f2a59c9073eb7f89de",
"assets/packages/home/assets/certificate_img/fexpert1.jpg": "bc4a12bfec15289f41c9dd7cd9ac4abf",
"assets/packages/home/assets/certificate_img/backend/2.jpg": "acc6b79f4af432cfe3189ae25672b913",
"assets/packages/home/assets/certificate_img/backend/1.jpg": "4d3df0e55d088099e17b5eceee7c029a",
"assets/packages/home/assets/certificate_img/fexpert3.jpg": "3bb8ab6e7c64b73ae5efe5b28ca13b2a",
"assets/packages/home/assets/certificate_img/fexpert2.jpg": "a639e4b7293dcef91338cd1bbae569b5",
"assets/packages/home/assets/certificate_img/sd.jpg": "cbd6001657bef47811567274cd6c9010",
"assets/packages/home/assets/certificate_img/ps.jpg": "c525da17aea4e6a0bbf61e2156100f88",
"assets/packages/home/assets/certificate_img/mentor.jpeg": "86273b56606eef0cc1b69139d9f7ebb7",
"assets/packages/home/assets/certificate_img/aws/2.jpg": "9e716f0bd09c46f2ff16fd8d0b79864e",
"assets/packages/home/assets/certificate_img/aws/3.jpg": "11c5c2591a9e132dd394879e88d07e8e",
"assets/packages/home/assets/certificate_img/aws/1.jpg": "257cd780a5027679ee0bc17437b51bc6",
"assets/packages/home/assets/certificate_img/fpemula1.jpg": "e545e2d1b616b35c1ffac50b32962311",
"assets/packages/home/assets/certificate_img/ffundamental1.jpg": "469223c1618e213d4f005519d0a1d5f4",
"assets/packages/home/assets/certificate_img/javascript/2.jpg": "17707c0f04013ce4baacf7d0cdfce0a0",
"assets/packages/home/assets/certificate_img/javascript/3.jpg": "7024c06a18eab7a22ad8df3dcae5b17f",
"assets/packages/home/assets/certificate_img/javascript/1.jpg": "8f2d71577f982d3f40978bef35650e62",
"assets/packages/home/assets/certificate_img/fpemula2.jpg": "f1de01fb7c604f4b4575a4be21fed989",
"assets/packages/home/assets/certificate_img/ffundamental2.jpg": "1c9d9fc011fc9c5e0cd4ffc001b0cf1d",
"assets/packages/home/assets/certificate_img/dart.jpg": "159d16598d18a7faff3b4b7b10dd1d39",
"assets/packages/home/assets/certificate.png": "64de48763527514198532688cf7cce82",
"assets/packages/home/assets/link.png": "3980689ae38fe249c0c0f0e7e98402cf",
"assets/packages/home/assets/download1.png": "e1b095808da78863d4faacd57ac76204",
"assets/packages/home/assets/download2.png": "846644aabafee041c278b3a6a8dba5f7",
"assets/packages/home/assets/github.png": "600f182f52a1edbaa4f282b476e6ba96",
"assets/packages/home/assets/photo.png": "54417ceafdff8012090d2ff618fcf29c",
"assets/packages/home/assets/linkedin.png": "f8a12f47ec7c88eb0892d9037f46621b",
"assets/packages/home/assets/app-store.png": "c40a06a58d2f5eada896bb5147d75926",
"assets/packages/home/assets/wa.png": "901368827533a2c43ae572c69220a64f",
"assets/packages/home/assets/google_play.png": "189a0fe53e4b59c41b787119a6c9aabf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a9f5d16ddab9eda03dd15d95b9ebf769",
"assets/fonts/MaterialIcons-Regular.otf": "a642bb7033b0078c02d515ff8fdf5a88",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
