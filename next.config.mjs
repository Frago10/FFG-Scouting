/** @type {import('next').NextConfig} */

// When deployed to GitHub Pages project pages (username.github.io/repo-name),
// every URL must be prefixed with the repo name. The GH Actions workflow
// sets NEXT_PUBLIC_BASE_PATH=/repo-name automatically.
// For local dev, a User Pages site, or a custom domain → leave it unset.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  // Static export — produces an /out folder GH Pages can serve directly.
  output: "export",
  // GH Pages serves /foo/ as /foo/index.html, so emit trailing slashes.
  trailingSlash: true,
  // No server → no next/image optimizer.
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
