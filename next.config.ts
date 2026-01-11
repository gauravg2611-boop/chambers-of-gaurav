import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true, // Required for static export
  },
  output: "export", // Enable static HTML export for GitHub Pages
  basePath: "/chambers-of-gaurav", // Must match your GitHub repo name
  trailingSlash: true, // Recommended for GitHub Pages
};

export default nextConfig;
