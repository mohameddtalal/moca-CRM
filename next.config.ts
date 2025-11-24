import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Add this for static export
  reactCompiler: true,
  turbopack: {},
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;