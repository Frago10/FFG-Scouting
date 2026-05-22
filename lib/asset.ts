/**
 * Prefix a static asset path with the GitHub Pages base path.
 *
 * Next.js automatically applies `basePath` (from next.config.mjs) to
 * its OWN URLs (CSS chunks, JS chunks, next/image, <Link>), but raw
 * <img src> and inline background-image URLs still need to be
 * prefixed manually. This helper does that.
 *
 * Keep BASE_PATH in sync with `basePath` in next.config.mjs.
 *
 * Example:
 *   <img src={asset("/images/foo.jpg")} />
 *   // → /FFG-Scouting/images/foo.jpg  when on project pages
 */

export const BASE_PATH = "/FFG-Scouting";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return BASE_PATH + path;
}
