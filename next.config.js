/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.heraldm.com', 'img.hani.co.kr'],
  },
};

module.exports = nextConfig;
