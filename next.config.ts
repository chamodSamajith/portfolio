import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export mode
  images: {
    unoptimized: true, // Disable image optimization
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/{repo-name}" : "", // Set asset prefix for production
  basePath: process.env.NODE_ENV === "production" ? "/{repo-name}" : "", // Set base path for production
};

export default nextConfig;
