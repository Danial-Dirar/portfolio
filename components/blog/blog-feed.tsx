"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PostCard } from "@/components/shared/post-card";
import { Reveal } from "@/components/motion/reveal";
import type { PostMeta } from "@/lib/posts";

/**
 * Client-side tag filtering. Kept on the client (rather than reading
 * `searchParams` on the server) so the /blog page stays fully static and can
 * be exported for GitHub Pages.
 */
export function BlogFeed({ posts, tags }: { posts: PostMeta[]; tags: string[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const visible = posts.filter((p) => !activeTag || p.tags.includes(activeTag));

  return (
    <>
      {tags.length > 0 && (
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-2">
            <button type="button" onClick={() => setActiveTag(null)}>
              <Badge
                variant={activeTag ? "outline" : "default"}
                className="cursor-pointer font-mono text-[11px]"
              >
                all
              </Badge>
            </button>
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTag((cur) => (cur === t ? null : t))}
              >
                <Badge
                  variant={activeTag === t ? "default" : "outline"}
                  className="cursor-pointer font-mono text-[11px]"
                >
                  #{t}
                </Badge>
              </button>
            ))}
          </div>
        </Reveal>
      )}

      <div className="mt-8 grid gap-4">
        {visible.map((post, i) => (
          <Reveal key={post.slug} delay={Math.min(i, 5) * 0.05}>
            <PostCard post={post} />
          </Reveal>
        ))}
        {visible.length === 0 && (
          <p className="font-mono text-sm text-muted-foreground">
            — no posts{activeTag ? ` tagged #${activeTag}` : ""} yet —
          </p>
        )}
      </div>
    </>
  );
}
