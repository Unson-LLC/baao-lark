/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.baao.or.jp',
      },
    ],
  },
};

module.exports = nextConfig;
