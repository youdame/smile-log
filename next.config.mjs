/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**/*",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // 모든 /api/v1/* 요청을 프록시
        destination: "http://3.34.74.208:8000/api/:path*", // 실제 API 경로
      },
    ];
  },
};

export default nextConfig;
