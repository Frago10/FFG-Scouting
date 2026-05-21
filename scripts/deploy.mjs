#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * deploy.mjs — single-step build for GitHub Pages (root deployment)
 *
 *   npm run deploy
 *
 * What it does:
 *   1. Runs `next build`  (Next.js writes the static export into ./out)
 *   2. Removes the previous build artifacts at the repo root
 *   3. Moves every file/folder inside ./out  →  repo root
 *   4. Deletes the now-empty ./out
 *
 * Why root and not /docs?
 *   GitHub Pages is configured as "Deploy from a branch → master / (root)"
 *   (matches the triarch project pattern). Built HTML/CSS/JS must live at
 *   the repo root so the absolute URLs in the HTML (/index.html,
 *   /_next/static/css/..., /images/...) resolve correctly.
 *
 * Source files (app/, components/, lib/, public/, scripts/, package.json,
 * etc.) coexist at the root and are simply ignored by GitHub Pages.
 *
 * After this script finishes:
 *   git add -A && git commit && git push
 */

import { execSync } from "node:child_process";
import {
  rmSync,
  existsSync,
  readdirSync,
  renameSync,
  statSync
} from "node:fs";
import { join } from "node:path";

const c = {
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  dim: (s) => `\x1b[90m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`
};

/**
 * Build artifacts that live at the repo root.
 * Listed explicitly so we never delete source folders by accident.
 * Any entry here is removed BEFORE moving the fresh build in.
 */
const ROOT_ARTIFACTS = [
  "index.html",
  "404.html",
  "index.txt",
  "404",
  "_next",
  "images",
  "CNAME",
  ".nojekyll"
];

function removePrevious() {
  for (const name of ROOT_ARTIFACTS) {
    if (existsSync(name)) {
      rmSync(name, { recursive: true, force: true });
    }
  }
}

function moveOutContents() {
  if (!existsSync("out")) {
    throw new Error("Build finished but ./out is missing.");
  }
  for (const entry of readdirSync("out")) {
    const src = join("out", entry);
    const dst = entry;
    if (existsSync(dst)) {
      rmSync(dst, { recursive: true, force: true });
    }
    renameSync(src, dst);
  }
  rmSync("out", { recursive: true, force: true });
}

try {
  console.log(c.cyan("==> next build"));
  execSync("npx next build", { stdio: "inherit" });

  console.log(c.cyan("==> Cleaning previous root build artifacts"));
  removePrevious();

  console.log(c.cyan("==> Moving ./out/* to repo root"));
  moveOutContents();

  console.log("");
  console.log(c.green("✓ Built to repo root — ready to commit."));
  console.log(
    c.dim(
      "  Next:  git add -A  &&  git commit -m 'deploy'  &&  git push origin master"
    )
  );
} catch (err) {
  console.error(c.red("Deploy failed:"), err.message || err);
  process.exit(1);
}
