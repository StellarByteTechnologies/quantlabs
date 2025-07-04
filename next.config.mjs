/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // ✅ disables Image Optimization API
  },
};

export default nextConfig;
