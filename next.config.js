const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})

const redirects = {
  async redirects() {
    return [
      {
        source:
          "/what-everybody-ought-to-know-about-coffees-effect-on-the-body/",
        destination: "/",
        permanent: true,
      },
    ]
  },
}

module.exports = withPWA({
  // next.js config
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }

    return config
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ]
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  redirects: async () => {
    return [
      {
        source:
          "/what-everybody-ought-to-know-about-coffees-effect-on-the-body",
        destination: "/",
        permanent: true,
      },
      {
        source: "/aeropress-vs-french-press-difference",
        destination: "/",
        permanent: true,
      },
      {
        source: "/difference-between-french-and-italian-roast",
        destination: "/",
        permanent: true,
      },
      {
        source: "/best-espresso-beans-reviews",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-to-make-a-spanish-latte",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-to-make-vietnamese-coffee",
        destination: "/",
        permanent: true,
      },
      {
        source: "/espresso-beans-vs-coffee-beans",
        destination: "/",
        permanent: true,
      },
      {
        source: "/7-wonders-of-coffee",
        destination: "/",
        permanent: true,
      },
      {
        source: "/best-espresso-machine-under-1000-reviews",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-to-make-americano-coffee",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-long-does-ground-coffee-last",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-long-do-roasted-coffee-beans-last",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-long-do-green-coffee-beans-last",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-long-does-coffee-last",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-to-pick-coffee-beans",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pros-and-cons-of-french-press",
        destination: "/",
        permanent: true,
      },
      {
        source: "/best-commercial-espresso-machine-reviews",
        destination: "/",
        permanent: true,
      },
      {
        source: "/best-latte-machine-reviews",
        destination: "/",
        permanent: true,
      },
      {
        source: "/best-stovetop-espresso-maker-reviews",
        destination: "/",
        permanent: true,
      },
      // {
      //   source: '/wp-content/uploads/2017/04/saaw.png?x56718',
      //   destination: '/',
      //   permanent: true,
      // },
    ]
  },
})
