import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['fonts.gstatic.com', 'fonts.googleapis.com', 'images.unsplash.com'],
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  experimental: {
    optimizeCss: false,
  }
};

export default nextConfig;
