import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "th.bing.com",
      "d2a7v7ze64lo1c.cloudfront.net",
    ],
  },
};

export default nextConfig;
