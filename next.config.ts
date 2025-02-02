// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images:{
//     domains: ["cdn.sanity.io"],
//   }
// };

// export default nextConfig;
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
};
