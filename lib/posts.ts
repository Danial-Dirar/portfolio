/**
 * Client-safe post types and helpers — no `node:fs`, so these can be imported
 * from Client Components and the static-exported bundle. Filesystem reading
 * lives in `lib/blog.ts` (server only).
 */

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  tags: string[];
  excerpt: string;
  /** Optional cover image, e.g. /blog/<slug>/cover.jpg */
  cover?: string;
};

export type Post = PostMeta & { content: string };

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
