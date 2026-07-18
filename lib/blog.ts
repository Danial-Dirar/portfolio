import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Post } from "./posts";

export type { Post, PostMeta } from "./posts";
export { formatDate } from "./posts";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseFile(fileName: string): Post {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "1970-01-01",
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? "",
    cover: data.cover,
    content,
  };
}

/** All posts, newest first. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(parseFile)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const post of getAllPosts()) for (const t of post.tags) tags.add(t);
  return [...tags].sort();
}
