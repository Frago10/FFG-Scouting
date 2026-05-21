/**
 * Prefixes static asset paths with NEXT_PUBLIC_BASE_PATH.
 *
 * When the site is deployed to GitHub Pages project pages
 * (https://username.github.io/repo-name/), every absolute path
 * must include /repo-name as a prefix. The deploy workflow injects
 * NEXT_PUBLIC_BASE_PATH at build time; locally it is empty so paths
 * resolve to the dev server root.
 *
 * Use this for raw <img src>, background-image URLs, and anywhere
 * you reference a file inside /public.
 *
 * Example:
 *   <img src={asset("/images/hero.jpg")} />
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return path;
  return base + path;
}
