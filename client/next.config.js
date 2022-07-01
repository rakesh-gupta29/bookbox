/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["books.google.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
