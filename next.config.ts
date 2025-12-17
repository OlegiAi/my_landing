import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Защита от clickjacking
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Защита от MIME-type sniffing
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block", // Защита от XSS
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Контроль referrer
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()", // Ограничение доступа к API браузера
          },
        ],
      },
    ];
  },
};

export default nextConfig;
