if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),o={module:{uri:n},exports:r,require:t};s[n]=Promise.all(c.map((e=>o[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.png",revision:"86aff7bc16c6c92e711ce65f07a62b09"},{url:"/404.svg",revision:"aba6aa0fe2954ace7cdfe4f732082594"},{url:"/_next/static/chunks/0c428ae2-a6184304b67584bf.js",revision:"a6184304b67584bf"},{url:"/_next/static/chunks/103-fff3ec642708d259.js",revision:"fff3ec642708d259"},{url:"/_next/static/chunks/1a48c3c1-a5942055ebc9c215.js",revision:"a5942055ebc9c215"},{url:"/_next/static/chunks/441-805971aa27cc852c.js",revision:"805971aa27cc852c"},{url:"/_next/static/chunks/556-fff16a1f7e11977e.js",revision:"fff16a1f7e11977e"},{url:"/_next/static/chunks/675-f87cf554dd6ce27f.js",revision:"f87cf554dd6ce27f"},{url:"/_next/static/chunks/777cf710-4c85adf6f6ababae.js",revision:"4c85adf6f6ababae"},{url:"/_next/static/chunks/808-55a678a26416b853.js",revision:"55a678a26416b853"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-1071bc3ff022142e.js",revision:"1071bc3ff022142e"},{url:"/_next/static/chunks/pages/404-a7cdfbb7f5445ffa.js",revision:"a7cdfbb7f5445ffa"},{url:"/_next/static/chunks/pages/_app-49c58f466842514f.js",revision:"49c58f466842514f"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/about-ffe172da56a3a2d6.js",revision:"ffe172da56a3a2d6"},{url:"/_next/static/chunks/pages/chat-bot-ask-anything-about-coffee-6c1a36e911181876.js",revision:"6c1a36e911181876"},{url:"/_next/static/chunks/pages/coffee-roaster-directory-b24560acfbc92077.js",revision:"b24560acfbc92077"},{url:"/_next/static/chunks/pages/coffee-roaster-directory/%5Bslug%5D-44dc8d0597c21b20.js",revision:"44dc8d0597c21b20"},{url:"/_next/static/chunks/pages/coffee-roaster-directory/famous-f3b31a8fa8d9ccdd.js",revision:"f3b31a8fa8d9ccdd"},{url:"/_next/static/chunks/pages/coffee-roaster-directory/famous/%5Bslug%5D-9498810f956e1a80.js",revision:"9498810f956e1a80"},{url:"/_next/static/chunks/pages/coffee-subscriptions-boxes-a470ad0cff6a0a4d.js",revision:"a470ad0cff6a0a4d"},{url:"/_next/static/chunks/pages/contact-us-33cc8dd39351773c.js",revision:"33cc8dd39351773c"},{url:"/_next/static/chunks/pages/fallback-6a229f52dad55dc6.js",revision:"6a229f52dad55dc6"},{url:"/_next/static/chunks/pages/index-1a4bb285fc97a276.js",revision:"1a4bb285fc97a276"},{url:"/_next/static/chunks/pages/privacy-62d6ee79492b70f2.js",revision:"62d6ee79492b70f2"},{url:"/_next/static/chunks/pages/random-coffee-recipe-generator-11343425db2051c3.js",revision:"11343425db2051c3"},{url:"/_next/static/chunks/pages/random-coffee-recipe-generator/%5Bslug%5D-36c019a33780460d.js",revision:"36c019a33780460d"},{url:"/_next/static/chunks/pages/terms-and-condition-3e12e8bdd7af142d.js",revision:"3e12e8bdd7af142d"},{url:"/_next/static/chunks/pages/virtual-cafe-with-ambience-sounds-43769099c0ceb2df.js",revision:"43769099c0ceb2df"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d7b038a63b619762.js",revision:"d7b038a63b619762"},{url:"/_next/static/css/0207cb3976f9b9ce.css",revision:"0207cb3976f9b9ce"},{url:"/_next/static/css/148812d4f2e7d3af.css",revision:"148812d4f2e7d3af"},{url:"/_next/static/css/6ceea00dae17a1fc.css",revision:"6ceea00dae17a1fc"},{url:"/_next/static/css/825a7459cf473e9a.css",revision:"825a7459cf473e9a"},{url:"/_next/static/css/bcdaffd7c0131fc4.css",revision:"bcdaffd7c0131fc4"},{url:"/_next/static/shpykqp_aC8yaFimQKijH/_buildManifest.js",revision:"944e80a7faff877b28ac2de005356194"},{url:"/_next/static/shpykqp_aC8yaFimQKijH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"81cb8b35ad87b47f08441119e5e5a898"},{url:"/android-chrome-512x512.png",revision:"05d40a2d18533235d161a69e6a44434f"},{url:"/apple-touch-icon.png",revision:"0f00933e62109cf51de133072140c518"},{url:"/assets/about/desktop/bg-quality.png",revision:"8429d0b264d36f3b390b30e6553441e1"},{url:"/assets/about/desktop/illustration-australia.svg",revision:"28e2e9b352455881f70c41fe1c31e65d"},{url:"/assets/about/desktop/illustration-canada.svg",revision:"b9cea6b047ccfac87faf739370aabe59"},{url:"/assets/about/desktop/illustration-uk.svg",revision:"a64c2f23a6956a94cda68e3d704321a3"},{url:"/assets/about/desktop/image-commitment.jpg",revision:"893dd4b58428b6f1b5caa8b96da4182b"},{url:"/assets/about/desktop/image-hero-whitecup.jpg",revision:"e53ed248fd8786c62d1108172687c5b1"},{url:"/assets/about/desktop/image-quality.jpg",revision:"5ca2023293c345036de4810b92f2d0f2"},{url:"/assets/about/mobile/bg-quality.png",revision:"28be9deb0c51622c0078d838bf2d9ec6"},{url:"/assets/about/mobile/image-commitment.jpg",revision:"afe54e9c0903d818716ae9771cd1a609"},{url:"/assets/about/mobile/image-hero-whitecup.jpg",revision:"826bc384fceeb5fc454e5f86a4b8475e"},{url:"/assets/about/mobile/image-quality.jpg",revision:"e80bc1a20ab60ddfcc56b44ccc4b0312"},{url:"/assets/about/tablet/bg-quality.png",revision:"cc4a2afc2a5dda1df075a33a07fe4ce4"},{url:"/assets/about/tablet/image-commitment.jpg",revision:"e591f9f0d853fdce141f1d069ff32a34"},{url:"/assets/about/tablet/image-hero-whitecup.jpg",revision:"4e0a32b12eb346113b0a75f5d8ad8f7f"},{url:"/assets/about/tablet/image-quality.jpg",revision:"91303784443a8d4cfb248a081034b3b8"},{url:"/assets/favicon-32x32.png",revision:"a07f423b8bbf4a50c2c449b96795fcb6"},{url:"/assets/home/desktop/icon-coffee-bean.svg",revision:"f976b698008d6e621fd92e38613b3a3a"},{url:"/assets/home/desktop/icon-gift.svg",revision:"98f711c112636ce70b20fd8b4bf9845b"},{url:"/assets/home/desktop/icon-truck.svg",revision:"b51fbfd19830f352e7f47d1af486a5d9"},{url:"/assets/home/desktop/image-danche.png",revision:"49dd10cc4782f958a4bbbbdea9545394"},{url:"/assets/home/desktop/image-gran-espresso.png",revision:"e3b86507b245f3f4dcec2c098b2a7df2"},{url:"/assets/home/desktop/image-hero-coffeepress.jpg",revision:"2dc8170b1cd9fa7af0d75f0d37e479aa"},{url:"/assets/home/desktop/image-piccollo.png",revision:"cb854eff9519813783033c6e8bf1cfe6"},{url:"/assets/home/desktop/image-planalto.png",revision:"bb6e184e1cc3b23a3db8ae7d075cf0d7"},{url:"/assets/home/mobile/image-hero-coffeepress.jpg",revision:"8acdc16a6c1377f46b6d577e96a8dcaf"},{url:"/assets/home/tablet/image-hero-coffeepress.jpg",revision:"2ff052b84788f502f7d96f86fabc10cb"},{url:"/assets/plan/desktop/bg-modal-top.png",revision:"23963672af0a4e5a03b90cecdca972b3"},{url:"/assets/plan/desktop/bg-order-summary.png",revision:"71a3f274b027a4b4857537e902c73809"},{url:"/assets/plan/desktop/bg-steps.png",revision:"7bee077ee06b25ae9b4a4ace11ef11ee"},{url:"/assets/plan/desktop/icon-arrow.svg",revision:"9d0ebf73ed067ca28d07cdc20a272a01"},{url:"/assets/plan/desktop/image-hero-blackcup.jpg",revision:"8f71eb2ea470cc7e689151e1f74dd11f"},{url:"/assets/plan/mobile/bg-order-summary.png",revision:"417d0611c9bd5555816cd6f201c67f0d"},{url:"/assets/plan/mobile/bg-steps.png",revision:"a1bef38fd218c5163690deaf0a4c6ce4"},{url:"/assets/plan/mobile/image-hero-blackcup.jpg",revision:"321d555e69a3774e1fcb21cc7438fdba"},{url:"/assets/plan/tablet/bg-steps.png",revision:"672dbcc7bbfa150fdb3934f55c1ffe0a"},{url:"/assets/plan/tablet/image-hero-blackcup.jpg",revision:"a0ee01607a2b277f577909c25c57de0f"},{url:"/assets/shared/desktop/icon-facebook.svg",revision:"0fc7bc50dfb77c61d05403dac7f1ee2f"},{url:"/assets/shared/desktop/icon-instagram.svg",revision:"d90cff0d97490d32506364ce5e9109bf"},{url:"/assets/shared/desktop/icon-twitter.svg",revision:"ad60cf453829c04da525d5a4e60fad55"},{url:"/assets/shared/desktop/logo.svg",revision:"6717fd6c342c61321e489abe8fb5ee7b"},{url:"/assets/shared/mobile/icon-close.svg",revision:"bea4402c5168a2d018fb9ed578ac23c4"},{url:"/assets/shared/mobile/icon-hamburger.svg",revision:"c864c55b224cea7273ae24ab8346871a"},{url:"/background.png",revision:"2bed6febec5358387b4a97a8b864f480"},{url:"/cafe.svg",revision:"210ed13dcaa59d9f13d0df762eecac6b"},{url:"/cafes/AirportHeathrowAir.mp3",revision:"7ec6a0975986345cbd7d46b97e1a7eaa"},{url:"/cafes/Athens Street Cafe Ambience - Loop 2.mp3",revision:"6f22e1d3d4900f4548e68b0b9c2bf04c"},{url:"/cafes/Busy Cafe Restaurant Ambiance.mp3",revision:"aed51aac7fa82cefd8a98d519d479c7a"},{url:"/cafes/CoffeeEspresso.mp3",revision:"7f4d5196054c97c3b0f9ee543277d395"},{url:"/chair-white.svg",revision:"ab08b71e5ee7178547adebf84015ea4e"},{url:"/coffeeshop.svg",revision:"9707f951f4c4fea099f86df3d145b92f"},{url:"/favicon-16x16.png",revision:"0cb78a2d5b634519dec04af031893c64"},{url:"/favicon-32x32.png",revision:"015f5e50401f7f17a60136cfa46ccbd7"},{url:"/favicon.ico",revision:"46eefb5faf4319c7159ba8ed41fe1492"},{url:"/home-office.svg",revision:"03b90db2cf194ede3f6a72a855f5e043"},{url:"/icon-192x192.png",revision:"fe5e1dd86c86e8d7fba26518e851a2c3"},{url:"/icon-256x256.png",revision:"6622f0ae2c11c2158cea144c444a7953"},{url:"/icon-384x384.png",revision:"1cc9fac2ef41c5ab0bcf655c3cf76dc7"},{url:"/icon-512x512.png",revision:"9a88aea3b26fb52153e60b394b7ec9b5"},{url:"/license.txt",revision:"031361134b972443be99b66bda0daa4b"},{url:"/logo.png",revision:"5e22282b3cdc1a51efdb1b09808b5432"},{url:"/manifest.json",revision:"38cd1c45427b87bc4e9d5332fe306262"},{url:"/music/Jazz Cafe 2.mp3",revision:"f4998c63a5992136f93cce0db272bd55"},{url:"/music/Jazz Cafe.mp3",revision:"00afdd6122fedb53302ed62bd4a57c75"},{url:"/music/Lounge Cafe.mp3",revision:"b1277667ed8a80c59f1710e2b7ecd715"},{url:"/robots.txt",revision:"90886a60e897dfd2eddc632f3a95beea"},{url:"/seo/Open Graph/about.png",revision:"f7578a8b94621148edf6191242786bcb"},{url:"/seo/Open Graph/coffee knowledge app.png",revision:"dcc97fddba77985a7882a99dc29ece64"},{url:"/seo/Open Graph/coffee roaster finder app.png",revision:"f16632f698d1b3e0344b44ac7fafd4b8"},{url:"/seo/Open Graph/coffee subscription list app.png",revision:"7c2d08fb37be7ba2cdb55d3f2e0f90dd"},{url:"/seo/Open Graph/home.png",revision:"1a5b5ab5d0270807321f35980a8e758f"},{url:"/seo/Open Graph/virtual cafe app.png",revision:"8e5df6444174f36dd476f7c9176b3b0c"},{url:"/seo/Twitter Card/about.png",revision:"8c11ba2d48c0c7b9a799ffae93071f82"},{url:"/seo/Twitter Card/coffee knowledge chat bot app.png",revision:"d423958ee951bc7e1346d9e2a28c82b3"},{url:"/seo/Twitter Card/coffee roaster finder app.png",revision:"26ebf2cd88262223c23575e2f3911fe6"},{url:"/seo/Twitter Card/coffee subscription boxes.png",revision:"7805ec4b0e3e149e6387becf36c54aec"},{url:"/seo/Twitter Card/home.png",revision:"6cbc043715f97c09641f872694cfe5a9"},{url:"/seo/Twitter Card/virtual cafe app.png",revision:"819faf2aba8158a8c1c240155a0d996e"},{url:"/seo/wdoc logo.png",revision:"795c92f38db48a74a2d7e31d06a23b26"},{url:"/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/sitemap.xml",revision:"538a864fcfc34795a4f9a2cc2fd3592c"},{url:"/soundEffects/Rain.mp3",revision:"08ae7880874de63a557ebcd97bb86b7f"},{url:"/soundEffects/Storm.wav",revision:"dcb064db2961a68b132f2e078d10daef"},{url:"/soundEffects/Thunder.mp3",revision:"2b7e12fe5455c470587efa78e41195f9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
