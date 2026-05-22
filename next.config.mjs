/** @type {import('next').NextConfig} */

// ─────────────────────────────────────────────────────────────
// GitHub Pages serving path
// ─────────────────────────────────────────────────────────────
// While the custom domain (ffg-scouting.com) DNS is not yet
// configured at the registrar, the site is served at the project
// pages URL:
//     https://frago10.github.io/FFG-Scouting/
//
// All absolute asset paths in the built HTML must therefore be
// prefixed with /FFG-Scouting so the browser resolves them under
// that subpath (otherwise CSS, JS and images 404).
//
// When DNS for ffg-scouting.com is finally pointing at GitHub
// (A records → 185.199.108.153 / 109.153 / 110.153 / 111.153),
// switch `basePath` to "" and put public/CNAME back. See README §3.
//
// Repo name is case-sensitive. The repo is "FFG-Scouting", so
// the project pages path is exactly "/FFG-Scouting".
// ─────────────────────────────────────────────────────────────

const basePath = "/FFG-Scouting";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath
};

export default nextConfig;
