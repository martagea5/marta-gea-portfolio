import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/marta-gea-portfolio" : "",
  assetPrefix: isGithubPages ? "/marta-gea-portfolio/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
