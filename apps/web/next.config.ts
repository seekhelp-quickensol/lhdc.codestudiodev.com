import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "lhdc.corporateera.com",
        port: "3000",
        pathname: "/uploads/images/**",
      },
    ],
  },


};

export default nextConfig;