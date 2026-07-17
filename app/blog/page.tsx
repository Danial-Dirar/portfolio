import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PostCard } from "@/components/shared/post-card";
import { Reveal } from "@/components/motion/reveal";
import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on machine learning, generative AI, and building local AI for business.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const tags = getAllTags();
  const posts = getAllPosts().filter((p) => !tag || p.tags.includes(tag));

  return (
    <section className="relative pt-28 pb-20 md:pt-36">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade" />
      <div className="container-page max-w-3xl">
        <Reveal>
          <h1 className="font-mono text-2xl font-semibold tracking-tight md:text-3xl">
            <span className="text-primary">$ </span>cat blog.log
          </h1>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 text-muted-foreground">
            Notes on ML, generative AI, and local AI for business — with the
            occasional build log.
          </p>
        </Reveal>

        {tags.length > 0 && (
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link href="/blog">
                <Badge
                  variant={tag ? "outline" : "default"}
                  className="cursor-pointer font-mono text-[11px]"
                >
                  all
                </Badge>
              </Link>
              {tags.map((t) => (
                <Link key={t} href={`/blog?tag=${encodeURIComponent(t)}`}>
                  <Badge
                    variant={tag === t ? "default" : "outline"}
                    className="cursor-pointer font-mono text-[11px]"
                  >
                    #{t}
                  </Badge>
                </Link>
              ))}
            </div>
          </Reveal>
        )}

        <div className="mt-8 grid gap-4">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i, 5) * 0.05}>
              <PostCard post={post} />
            </Reveal>
          ))}
          {posts.length === 0 && (
            <p className="font-mono text-sm text-muted-foreground">
              — no posts{tag ? ` tagged #${tag}` : ""} yet —
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
