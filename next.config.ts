import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
    {
    protocol: 'https',
    hostname: 'picsum.photos',
    },
    ],
    unoptimized: false,
    domains: ['localhost'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    }
  }
};

export default nextConfig;
