const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})

const redirects = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = withPWA({
  // next.js config
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  redirects: async () => {
    return [
      {
        source: '/how-long-do-coffee-beans-last/',
        destination: '/',
        permanent: true,
      },
    ]
  }
})