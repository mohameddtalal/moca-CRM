import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbo: false   // ⛔ Disable Turbopack completely
  }
};

export default nextConfig;
