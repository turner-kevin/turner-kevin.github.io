'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2e0ee9b75e040e2325adc31e71a0dcfc",
".git/config": "a4a5020d79aaf0295958e9b54c51e622",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "cd5657e5745f747af4e2027ca1642eea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a6230bc8fa1523497f8562ea2c13d992",
".git/logs/refs/heads/master": "a6230bc8fa1523497f8562ea2c13d992",
".git/logs/refs/remotes/origin/master": "e2ed5a06979c8a82c3dfe901b81640b0",
".git/objects/02/62b81f8ec19cd0c613381d734acc96722a338d": "186b441de0aabef82e02aa319255b523",
".git/objects/03/9b79c589413a6ab8b197f5742f5e29995d6073": "ed3477bd3f77eee221e426fe29e822fb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/559022f629687a0e72eb9103d8e2902ba51666": "3d3ce94fb5d04956e0520a902eab6947",
".git/objects/07/9bfc386b46859b6df6bd40df1674a43f57fd98": "292b85a33c59fc79d5384c8f041e6b74",
".git/objects/07/e7f2880a16cace87b25c4ab89772791d1d0467": "468d14972258908f683755a6ae453b66",
".git/objects/0a/2162764264748b2be6ebdf93421b95cae7b59f": "6a79540629c03c618b8060e5846e3eb9",
".git/objects/0b/7053a235399a4ebc9a7de33051d19bcbb1e94f": "a837b75ee402c1e21da614ed78ada7b6",
".git/objects/0c/fc128fbed1fc13e2786cfb45f4dcb56f30b761": "6e210a836bf2659bc4951fbf9a82c7ab",
".git/objects/0e/f82d901740946d1e613ab73588fcf503e22bb4": "c171ffefc8d3f27ba75e812a9fe4ba95",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/13/dcb01abba68b437fa3d280dd0c13413a305254": "e282c707fc1dbd0595ef87d7aeb5c5d6",
".git/objects/15/0dab23beef52d9fffaa0fb0193725d1b0c0bcd": "ccbd991b3408f98b074be3051b76b1e8",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1d/43fbaddf5790cab19c631799048a9bc381d564": "6118c87e3b957a3a44d6d73b07f9f1a3",
".git/objects/1d/8e37c04d61b5e1dfc1b73b5a1413e5cd588604": "b04cb9e7ba1cc084a94dfe88042e1b85",
".git/objects/1e/358ab0d4d3d2da8db696d7f94cedb76285c5e1": "df2a0024e21fa8a723a5d94be1494ba4",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/8c4a77580440f9f786d3cf0e1d7dabbf7d457c": "8941a2c1337524cc85de56aa0247ff13",
".git/objects/26/c266a19bd91acbea6f3176609ff1ce17493709": "1217a585936a1b2f6dddce8125e66005",
".git/objects/28/c681e4d8fbb5ecc0c078c16d299010784573c8": "dfc57dc6116f447fae9a97ece3d9c10e",
".git/objects/29/3e06ddf4fb4154b9abb18c1ebd70ad68d4f3c6": "1d7e5f0887fdd1fd7cdb9701f1b65d07",
".git/objects/31/b584a7ad7359ddbd8e31e9dd667570d4da89b7": "fb9e1d3062edf5d816d3caf508f62844",
".git/objects/36/9ef53b9777c2dbd475db30688960dfc474e14a": "a5315415c334071eff2de7e26e51ce8a",
".git/objects/3a/03d78f1e1935906d90fbe5b7106b2ff88b395e": "0310ca1cde31aee2cfe8559604ee39da",
".git/objects/40/a614b91ef34d74bb3e68a41f31d1e1796b56c1": "0ad106cc218642b0275391fb2fae2b85",
".git/objects/42/fb6ad0269a3ac5ae496ba396e37b1ca12a202e": "ab71e5c46476cae9449c4ca77ed24d90",
".git/objects/43/658ded1c80b83c4b4aa050813082b816c5ce76": "6d64c4d25d94c0bdf7732ba3fd6e275d",
".git/objects/45/b7497107506185256645afc20ae5d848899085": "1e493829f7712264bd087643668484ab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/e6be8aef3b63ed0a6d528f6ba3ffc460d7277d": "e44b1743f99aa5bd1623c42660ca8105",
".git/objects/48/70820c8bdace84a2d1230b6b78f7f0330b29da": "0bed330ff81c28d4bfeb4226c072fc17",
".git/objects/4b/bb0466560ded44e73787cd9e7302ad9a6a5727": "03545ae928963ff66abbd3c9198a4381",
".git/objects/4c/32fef8a547e8d554a22d77fa0b09a755710dcf": "5426f57641c64f54f383467b2a62ec73",
".git/objects/4d/99bf055de6f2af7885f634064dc5f694ca979d": "3135a30d827c4e218c771b4e5aa18bc9",
".git/objects/51/7ab5bb1cd6354702c1ac48396674b803bd079e": "431bd8fa2cb7aadc831929104b815b9a",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/53/93deaf39b896c5f5edc53ee2bd6ab02b0a3983": "66535ffda466ea736070ff71de4022ee",
".git/objects/54/afdb417894bed99451c92b654d682563088d7c": "967be9400f62454eae8d2672f106fbe3",
".git/objects/55/ddfd0cac2a2f98e287a5ec82710f9cf00f82c3": "0e3c6f725adce764be5df010fa462bf3",
".git/objects/56/9980f3a77ddfa791892c350049efe1e635d93a": "a103cb23da6d8a76fc162c10cd9db2ca",
".git/objects/57/87bbbacd220f076555b946aff3b9c8929bdcb8": "c5dbf0837e8d5c59ab9e1a7be1744fdf",
".git/objects/59/afa31b88929b4f09819d67af5c04498d9211ae": "d391242961f997a4361cac02a00d8b6d",
".git/objects/5f/520eb6fd19dc47c75cceccd988c401c3627503": "c4994cf9242609108ab18d8c52fbc69f",
".git/objects/5f/8d24d1781551e6118c10f841377e6d0334fca6": "c0b0f0b4f357aa315b835bceea6d18a2",
".git/objects/5f/b32667b65c84bd5010cf21ab9d225fb72bf5b3": "048e171a3f49d67f20d9a9a84ed9910e",
".git/objects/61/8b70898a635387e6f20fe4c37798b2166a2f96": "b0ec0ca57b4de0df7664e204e5d6a238",
".git/objects/68/a0ed1ce74c854d88a570eae087ed56496c3f7a": "2051e13d64ad862054b7eac406c764ac",
".git/objects/6a/e0cceb8abae9b1d2e82b73eb1ff773ea041ecd": "e2d44db03626af74e4c58a2e706ab8d2",
".git/objects/6c/a46dda06d93095ae82abc89ff8efe67f0ce146": "33893350fc7a78b74861aae72dcafc43",
".git/objects/6d/b5ec76de3b641ae383bb48e99d1bda0683864f": "6974b6d796df31a366dac17084b2dc35",
".git/objects/70/06f46217f436a513452aa7ff6c8779960cf4c1": "f81700af0d80d7341b9dc89270df63a7",
".git/objects/72/e93227953440d43eb82d7f4e2b4923f7f9efd1": "4ca1f9d5ecca399c4e10fac578270f1b",
".git/objects/76/4c88227d9d7dcdf81ee4338d113edf77080424": "e3b66516d9306580c0ebea9279883ac4",
".git/objects/7b/524b9d014b78f167ae7f106e46923fe6dbaf44": "ffbecea8be80335eb5568a9da77bb4f3",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/85/129468d893b6ac018805191a86ebe18ec01299": "7b13ffc37c45a1043a2589417287455a",
".git/objects/87/33358ddfb252c521ec746f74fb797ef2fe30a9": "7211c88577934f5c2b4084f9fbe5fc55",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/497bc875742faec514f5c70c4d562717c701c9": "e3ad20a5275ff61bdab0caaca70f084b",
".git/objects/94/d90fecb106b092ef0eaad590c356ba91c5defa": "4b9e2282336d2a0a9656e3e39641b8d0",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/4d76aec61728735763639bacebce12ae938fc3": "9641b82758104cd209c0de77d8ad5df7",
".git/objects/96/c8749b35bc66d1096a04cc9ea348d045ce2108": "32bcaa3204a8babe08a31cb65dc9439e",
".git/objects/96/c9dae591b27f435427016d075f595cb1696a79": "91a907e6b3ff4744d1cabc865fd7a961",
".git/objects/97/2c94cb79ad7d64465f9e533a589611da7c9352": "012edf33fcf96217b5f7b40ad2fed191",
".git/objects/97/e198dff05233701dd545c8319568075b57d2c1": "c60368fb6fd7b9947716835ddf25164f",
".git/objects/98/4d133fb5fd01a836a08582a72287459b5ee438": "8fb6ed670192988a28c50d9f2218a7e9",
".git/objects/9a/eac6ca6aae59ba724bc665f1ba5a8c89206581": "571f1aa4799dce9b7b23a2ad536ca8e4",
".git/objects/9c/0cd70aea9a89120f77e0d356f25c9e96aaec93": "d012a82e7dda6caa6f228430b6c82c06",
".git/objects/9e/429e7661d88324d20b499d89f04270f4a3a0d6": "6c42a046cfc3be01ee91699195d02d00",
".git/objects/9f/905a114a601d5511a2dbb7f73bf6a8ce41750d": "9a641614fc805d360fea67835869e7bb",
".git/objects/a1/eb0a780aaa4de8c8549602815fa1738524dd10": "5c3dddeb6ea21ce3af97dea8e908b580",
".git/objects/a5/91275edaf2d234adfefd9b5dd99431119b73f7": "a762b725fea9070871bc65bcc23faa02",
".git/objects/a9/2d4980ada04ba854d93789e2f3d5d33bf3b708": "7b0cb82b3227ee51012e07d47b12e464",
".git/objects/b3/42ea04312d5fde1bf35abab47a9badbaeec971": "18caa5de41c1eab06ddd391d92ce001d",
".git/objects/b5/5f34c815052ff8ee9230e2c670ace5f7dae6ac": "1fc5dc331da1a72ba22d3c9197001986",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/e8486d55d19261bdd8354a7001b9043e9d57ac": "1600104b0b2278273e991ac2f17afe94",
".git/objects/c5/eb0669d5351ac0da914a4c4d297fcbc09b6218": "db14a3dcfb8aa470868f2249cdc223f4",
".git/objects/c6/9186820aba40e736ceb93c4f07ee3eef6dab5e": "0db28498ea8265d5ab9bc16891c64d95",
".git/objects/ca/e757dc74840408db669b58fc7001952a988483": "14c49e632560e904dc2441306595e802",
".git/objects/d6/c661ef5b8990d7512ad318ae97da1ea82a85da": "4df83740e5c2f41ab22866a6ec93da00",
".git/objects/da/aaafa95162bede095e32ecef8c32c06083ca92": "849d7bcf1a88f150705c228d290e8dbf",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/ea/93a040f37ac9be0b70c319cb6a1f7e7c1a8df2": "979b210191bf9c6963f87a62cbbd4a72",
".git/objects/ed/fdaf8e518f2e230cf0dabeec354db508fe4093": "4dae8077a2cf3ada635d4f96274393bd",
".git/objects/ee/47f26ab233b8e2b5164bec13aadafabaceba8a": "a5d479c929349a92a45be6591471e19d",
".git/objects/ee/b4d085a53462b26da6e1ac1d0170e593792fa3": "a62e0c8590f8d0f5ca8c2d970bf3e696",
".git/objects/ee/bc07edaea380b32c108391fb75aed23254cc93": "75f54336ddbdb15d63f66bf66fc40e3b",
".git/objects/fa/f5fa98f1bbd82dd5c306bdf445d7c5952fbb45": "2c3f86ed64e1bda22092c98ecf1baf49",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fe/2f3f09134407832e6bcbf93bf239de0e463004": "4347dee0f27318cc925aef64c2bc9603",
".git/objects/fe/7b2af5639e7f1c08a3848fba1aaa769821719c": "bdf4154be1ff2cb1711f9672a6ce372e",
".git/refs/heads/master": "858ef3f8483354231536e6108d82b145",
".git/refs/remotes/origin/master": "858ef3f8483354231536e6108d82b145",
"assets/AssetManifest.json": "d9ca0d865db5f1994d6e0b65ed802594",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/images/avatar.jpg": "90819921691944c3e030a94f91c11f40",
"assets/images/image.jpg": "916bbcb1de74dccc2a67c30a7bd273db",
"assets/images/image_1.jpg": "1413d2cba17fc9e8ccfe2d8f320841af",
"assets/images/image_2.jpg": "f12d228fcb6744253e26b0451690b768",
"assets/images/image_5.jpg": "e58667cadc4a179204171694dce5f070",
"assets/NOTICES": "abd9905f69560c2fd902aab4ea276df4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9a526509c1f052b908097ae0e08e3f42",
"/": "9a526509c1f052b908097ae0e08e3f42",
"main.dart.js": "3b9a95bcccd68c69bd014debe61536c5",
"manifest.json": "7507c5e9ef5fcafbb5d16b1291738aeb",
"README.md": "75b5c3618c39d80d6772f446d6fd4095"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
