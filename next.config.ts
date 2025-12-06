import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // 👈 el comodín es esencial
        destination: "https://meredith-aesthetic.com/api/:path*", // backend real
      },
    ];
  },
};


module.exports = nextConfig;

export default nextConfig;
