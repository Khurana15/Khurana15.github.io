import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes a plain folder of HTML/CSS/JS to out/.
  // No server, no Node process to keep running.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  // Tailwind v4 is compiled by the Turbopack loader (set up by create-next-app).
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
