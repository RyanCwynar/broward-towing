import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/broward-towing",
  assetPrefix: "/broward-towing/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
