import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    forceSwcTransforms: true,  // 强制使用 SWC 替代 lightningcss
  },
};

export default nextConfig;
