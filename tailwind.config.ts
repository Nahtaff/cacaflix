import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-**',
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        netflix: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
};

export default nextConfig; 