// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpackDevMiddleware: (config) => {
//     config.watchOptions.poll = 300;
//     return config;
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions.poll = 300;
    }
    return config; 
  },
};

module.exports = nextConfig;
