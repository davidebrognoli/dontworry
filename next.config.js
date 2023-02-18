const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  assetPrefix: isProd ? '/dontworry/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
