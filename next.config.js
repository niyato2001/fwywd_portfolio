const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  images: {
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
    domains: [],
  },
});
