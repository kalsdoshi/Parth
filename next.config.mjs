/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow Unsplash for any remaining placeholder images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Local images in /public are served directly — no optimization needed for local dev
    unoptimized: true,
  },
};

export default nextConfig;
