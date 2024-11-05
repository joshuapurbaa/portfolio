'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1c0d6bd78af2cf2469b38cabb4b16e8c",
"version.json": "bd341ba74d38c530da636604a427deda",
"favicon.ico": "95801d969afb9529c43d9a980a19b597",
"index.html": "762840f8128c2be06a1e077e510cbd6b",
"/": "762840f8128c2be06a1e077e510cbd6b",
"main.dart.js": "35ff5c779360818dc2588030941333a6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/Icon-192.png": "e5372222a910a4c7c1ba585df9c84632",
"icons/Icon-maskable-192.png": "e5372222a910a4c7c1ba585df9c84632",
"icons/Icon-maskable-512.png": "1f022afb43babd042cebb2d484326973",
"icons/Icon-512.png": "1f022afb43babd042cebb2d484326973",
"manifest.json": "f872f6598abf120477f720cb0c83ce73",
"assets/AssetManifest.json": "f82c48353dd48523ced6e216786bdc58",
"assets/NOTICES": "f387a96f1562d4305910709616468769",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "d01a2876b94cc67937ecdc6945a23b3d",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7c9e2ce09cb3ce051d9962237d08dfce",
"assets/fonts/MaterialIcons-Regular.otf": "a642bb7033b0078c02d515ff8fdf5a88",
"assets/assets/screenshot/dana/2.png": "7d118de5e13f571cfa0204bd2c6e3a49",
"assets/assets/screenshot/dana/1.png": "d9553cfeae642222d5c52f5865354d31",
"assets/assets/screenshot/ebook/2.png": "10467a8ef316b941942178a85ea66ed4",
"assets/assets/screenshot/ebook/1.png": "e0a8c3d0cc208922b3d19410cc91dc25",
"assets/assets/screenshot/tempat_makan/8.png": "a87e84027322ff543f340447b41ec13d",
"assets/assets/screenshot/tempat_makan/4.png": "5893ba3a3981c9d7159883ba27373478",
"assets/assets/screenshot/tempat_makan/5.png": "a170a53046e4edfbfe70855aa2187643",
"assets/assets/screenshot/tempat_makan/7.png": "bf0fc8c7a4b46caab292a71c2f1b3929",
"assets/assets/screenshot/tempat_makan/6.png": "f5acd5ee549ead1a92412633e635f55e",
"assets/assets/screenshot/tempat_makan/2.png": "3c4c0598b5c485953e39a72f9fafa520",
"assets/assets/screenshot/tempat_makan/3.png": "01221da1e2d1da5fc067d02c4deadde3",
"assets/assets/screenshot/tempat_makan/1.png": "8e2b9c64534abd208b32bfd9483438e9",
"assets/assets/screenshot/udemy/2.png": "8753d524abc5ca3ddf6f10a60cbcddf4",
"assets/assets/screenshot/udemy/1.png": "be33af95c33732c4e54f4797982ea5f9",
"assets/assets/screenshot/food_app/2.png": "f40125d701532b1389e664aefef62bff",
"assets/assets/screenshot/food_app/1.png": "507a173cf6d9aaa478010119febd4264",
"assets/assets/screenshot/alterra/2.png": "06176b94ec664f3bdfe7956bff786d5a",
"assets/assets/screenshot/alterra/3.png": "ac3613889b2b53d01015b527c657153a",
"assets/assets/screenshot/alterra/1.png": "4d317e025188ece10398d5c96fe93166",
"assets/assets/screenshot/pln_click/8.png": "41cc12f73efde76c2a983ae3b34dac56",
"assets/assets/screenshot/pln_click/9.png": "a21fa4c23904761ff6a7788a1a01fcb6",
"assets/assets/screenshot/pln_click/10.png": "aa536afd14eaac7fedd16e2430d9be56",
"assets/assets/screenshot/pln_click/4.png": "965c2b0c8a23a07f4890d1f175b48e03",
"assets/assets/screenshot/pln_click/5.png": "1ca3d8f14fab534c57c852fb74177cb6",
"assets/assets/screenshot/pln_click/7.png": "5af71c553a63ad47ac1325e8573ed923",
"assets/assets/screenshot/pln_click/6.png": "495a8608a8180420bdd02685b84358ef",
"assets/assets/screenshot/pln_click/2.png": "de4811ce42647a42297743faf70e2c47",
"assets/assets/screenshot/pln_click/3.png": "0e8945ad15475fa7719964a73561737d",
"assets/assets/screenshot/pln_click/1.png": "db9991d59d6038a148190cd6479ccebf",
"assets/assets/screenshot/budget-intelli/8.png": "371242bc9cc4678835df4f29cc84da4d",
"assets/assets/screenshot/budget-intelli/9.png": "c1ff312d1a55f178221c708cbfa25c99",
"assets/assets/screenshot/budget-intelli/4.png": "6cdb746554d06cd64b587960cc064264",
"assets/assets/screenshot/budget-intelli/5.png": "f6a08768a4939791b6cefc6e81758c4c",
"assets/assets/screenshot/budget-intelli/7.png": "9d4ec671112a407c3e6a88ede3f16e13",
"assets/assets/screenshot/budget-intelli/6.png": "e6c201ca9c9054af805e0c9e026ab471",
"assets/assets/screenshot/budget-intelli/2.png": "a126f1426991f3969487cc9d654e115d",
"assets/assets/screenshot/budget-intelli/3.png": "bfa14486a29e47b6d8c627b7b47bf5a2",
"assets/assets/screenshot/budget-intelli/1.png": "f9d0876ddaef674ccde70ea4fd896758",
"assets/assets/screenshot/telkomsel/1.png": "c0f80b8a9d9ecbcd36c904375351860c",
"assets/assets/screenshot/pln/8.png": "209677ae438d49ffc8207e51b01f1eef",
"assets/assets/screenshot/pln/9.png": "83055bf663369a94853b9b0ec6cefdc3",
"assets/assets/screenshot/pln/12.png": "1453c52c99888a26b1075db1060f0b2b",
"assets/assets/screenshot/pln/13.png": "38238d753771d635be4a6a287ac3680f",
"assets/assets/screenshot/pln/11.png": "a7908ea6c0bd824add57a46b09981d10",
"assets/assets/screenshot/pln/10.png": "5f06c5ea51ff321126aea91075e8a84f",
"assets/assets/screenshot/pln/4.png": "05ad6d1e0c37f485fb157aac3ba3fb82",
"assets/assets/screenshot/pln/5.png": "4c44a0a5373703b6def2da25168a6eb7",
"assets/assets/screenshot/pln/7.png": "b01e93de6ac5e45bc4d5ee51ab05cd36",
"assets/assets/screenshot/pln/6.png": "7388a494879e0e79467f03e91dcb65e8",
"assets/assets/screenshot/pln/2.png": "8db8149eff44f057ad141af6fa924b60",
"assets/assets/screenshot/pln/3.png": "859a3a54be4076717e7c38a132b8bebd",
"assets/assets/screenshot/pln/1.png": "c81e973fd0014664f2ee95efc1324823",
"assets/assets/screenshot/saving/2.png": "fae6c8aae43d0bbfb823c35667d9eacf",
"assets/assets/screenshot/saving/3.png": "d2a7b297f52873fd8fbab0d840f8a9f9",
"assets/assets/screenshot/saving/1.png": "86b7ef6b26bc862566707cc925bd2e95",
"assets/assets/screenshot/colok_in/8.png": "1ed883f55aac741948fbb836ca9c125a",
"assets/assets/screenshot/colok_in/9.png": "bceff8e11dcc6a56776b2de3df8541ad",
"assets/assets/screenshot/colok_in/4.png": "b02e0fa06e7cffd5d04d273f5e3d8608",
"assets/assets/screenshot/colok_in/5.png": "8f9d968ac18c2048e53d28bfbde4b47c",
"assets/assets/screenshot/colok_in/7.png": "8b4e94b4d5635c10c45611ae13236591",
"assets/assets/screenshot/colok_in/6.png": "53c4b9cf44e59a7fd84ebe596d570187",
"assets/assets/screenshot/colok_in/2.png": "a61a376f30141db7642bf843b0ef1bac",
"assets/assets/screenshot/colok_in/3.png": "b14b7adbc37e2e4b827e2507ad91ae7d",
"assets/assets/screenshot/colok_in/1.png": "b271d591544462c7c3db3b11bee21378",
"assets/assets/screenshot/barista/4.png": "ae791976779afbe28604fff44f9d4b15",
"assets/assets/screenshot/barista/5.png": "117a6519dbc41f00f3a65db4fba3813a",
"assets/assets/screenshot/barista/6.png": "ce785a417ff2421239babd39c2ba8962",
"assets/assets/screenshot/barista/2.png": "ad9d72d679d29eafb409ec34370ba091",
"assets/assets/screenshot/barista/3.png": "9051a28574fd6aab8b30a46dea945f71",
"assets/assets/screenshot/barista/1.png": "f270da66e4a2ea2fd0ba7d3dc142038a",
"assets/assets/certificate_img/101.jpg": "943326daeffca4916ee7903ace4ca097",
"assets/assets/certificate_img/fexpert1.jpg": "75cf1dd241463dea6cfe8ae84fe6f8b9",
"assets/assets/certificate_img/backend/2.jpg": "146e816554a5cff17580b4059fe4f49d",
"assets/assets/certificate_img/backend/1.jpg": "85977e187e77a1f26a787bd155b58910",
"assets/assets/certificate_img/fexpert3.jpg": "ea543cee0729aa3a02436767ff26acad",
"assets/assets/certificate_img/fexpert2.jpg": "6571bf48a92b37836802fe8ef5e4ee0a",
"assets/assets/certificate_img/sd.jpg": "98429b18a3aed75afcb7a63f40ae3992",
"assets/assets/certificate_img/ps.jpg": "ee985d12dbe707e29b2ba3684cbcd603",
"assets/assets/certificate_img/mentor.jpeg": "47d3465f450a1706d8e2040cc9d56183",
"assets/assets/certificate_img/aws/2.jpg": "bbb438b48ae6a40dfc07715d7aebffb7",
"assets/assets/certificate_img/aws/3.jpg": "bef7895a1ada66f18f145d50840e9178",
"assets/assets/certificate_img/aws/1.jpg": "18d5a32660473096777aa049df42e50f",
"assets/assets/certificate_img/fpemula1.jpg": "f8491014ef295f33ac88afe2c2bd2aef",
"assets/assets/certificate_img/ffundamental1.jpg": "790695ce6c48eff69f861b1904d8bce1",
"assets/assets/certificate_img/javascript/2.jpg": "dd7b7e15c7a8c44f4d3542030b4b103f",
"assets/assets/certificate_img/javascript/3.jpg": "4d29faade342769d8575fd14b5d4b9e5",
"assets/assets/certificate_img/javascript/1.jpg": "ae6c1a4e6856fba6bfcd3acad9d2fa86",
"assets/assets/certificate_img/fpemula2.jpg": "84f9baaa72e3e5377f019869474bd8b6",
"assets/assets/certificate_img/ffundamental2.jpg": "a16e9adffd8fb61f82ff0dddabec7975",
"assets/assets/certificate_img/dart.jpg": "76e09695ce6d42a81e47759ef01389c8",
"assets/assets/certificate.png": "64de48763527514198532688cf7cce82",
"assets/assets/link.png": "3980689ae38fe249c0c0f0e7e98402cf",
"assets/assets/download1.png": "e1b095808da78863d4faacd57ac76204",
"assets/assets/download2.png": "846644aabafee041c278b3a6a8dba5f7",
"assets/assets/github.png": "600f182f52a1edbaa4f282b476e6ba96",
"assets/assets/photo.png": "54417ceafdff8012090d2ff618fcf29c",
"assets/assets/linkedin.png": "f8a12f47ec7c88eb0892d9037f46621b",
"assets/assets/app-store.png": "c40a06a58d2f5eada896bb5147d75926",
"assets/assets/wa.png": "901368827533a2c43ae572c69220a64f",
"assets/assets/google_play.png": "189a0fe53e4b59c41b787119a6c9aabf",
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
