/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add this to tell Next.js about your functions directory
  experimental: {
    cloudflareWorkers: true,
  },
};

export default nextConfig;
