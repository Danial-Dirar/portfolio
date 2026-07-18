/**
 * Prefix a public asset path with the deployment base path.
 *
 * On a GitHub *project* page the site lives under /<repo> (e.g. /portfolio).
 * `next/image` with `images.unoptimized` does NOT prepend the base path, and
 * raw <img>/<iframe>/<a> references never do — so absolute public paths like
 * "/founder/danial.jpg" would 404. Wrap every such path in `asset()`.
 *
 * NEXT_PUBLIC_BASE_PATH is injected at build time from next.config.ts and is
 * "" for a user site (no prefix needed).
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  // Leave external URLs, data URIs and relative paths untouched.
  if (!path || !path.startsWith("/")) return path;
  return `${BASE}${path}`;
}
