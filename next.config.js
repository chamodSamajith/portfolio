/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export mode
  images: {
    unoptimized: true, // Disable image optimization
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio" : "", // Set asset prefix for production
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "", // Set base path for production
};

module.exports = nextConfig;
