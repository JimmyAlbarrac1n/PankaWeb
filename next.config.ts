import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Production optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Enable gzip compression headers
  compress: true,

  // Optimize package imports (tree shaking)
  experimental: {
    optimizePackageImports: ['@radix-ui/react-accordion'],
  },
};

export default nextConfig;
