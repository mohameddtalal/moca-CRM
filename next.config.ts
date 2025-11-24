import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {}, // silence Turbopack warning
};

export default nextConfig;
