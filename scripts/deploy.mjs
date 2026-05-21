#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * deploy.mjs — single-step build for GitHub Pages
 *
 *   npm run deploy
 *
 * What it does:
 *   1. Runs `next build`  (Next.js writes the static export into ./out)
 *   2. Removes the previous ./docs (if any)
 *   3. Renames ./out  →  ./docs
 *
 * GitHub Pages is configured to serve the site from /docs on the master
 * branch, so after this script finishes the only remaining step is:
 *   git add -A && git commit && git push
 *
 * The bundled CNAME (public/CNAME) and .nojekyll (public/.nojekyll) are
 * copied into ./out by Next.js automatically, so they end up inside ./docs.
 */

import { execSync } from "node:child_process";
import { rmSync, renameSync, existsSync } from "node:fs";

const c = {
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  dim: (s) => `\x1b[90m${s}\x1b[0m`
};

try {
  console.log(c.cyan("==> next build"));
  execSync("npx next build", { stdio: "inherit" });

  if (!existsSync("out")) {
    console.error(c.red("Build finished but ./out is missing. Aborting."));
    process.exit(1);
  }

  if (existsSync("docs")) {
    console.log(c.cyan("==> Cleaning previous ./docs"));
    rmSync("docs", { recursive: true, force: true });
  }

  console.log(c.cyan("==> Renaming ./out -> ./docs"));
  renameSync("out", "docs");

  console.log("");
  console.log(c.green("✓ Built to ./docs — ready to commit."));
  console.log(c.dim("  Next:  git add -A  &&  git commit -m 'deploy'  &&  git push"));
} catch (err) {
  console.error(c.red("Deploy failed:"), err.message || err);
  process.exit(1);
}
