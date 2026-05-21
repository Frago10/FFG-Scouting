/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export → produces ./out (renamed to ./docs by scripts/deploy.mjs)
  output: "export",
  // GH Pages serves /foo/ as /foo/index.html — keep trailing slashes
  trailingSlash: true,
  // No server → no image optimizer
  images: { unoptimized: true }
};

export default nextConfig;
