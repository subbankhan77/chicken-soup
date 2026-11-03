/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the project root (a lockfile in a parent folder otherwise confuses Next.js).
  outputFileTracingRoot: import.meta.dirname,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
