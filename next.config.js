const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
  async redirects() {
    return [
      {
        source: '/how-long-do-coffee-beans-last/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/aeropress-vs-french-press-difference/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/difference-between-french-and-italian-roast/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/best-espresso-beans-reviews/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-to-make-a-spanish-latte/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-to-make-vietnamese-coffee/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/espresso-beans-vs-coffee-beans/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/what-everybody-ought-to-know-about-coffees-effect-on-the-body/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/7-wonders-of-coffee/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/best-espresso-machine-under-1000-reviews/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-to-make-americano-coffee/',
        destination: '/',
        permanent: true,
      },
    ]
  },
})

module.exports = withPWA({
  // next.js config
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  }
})