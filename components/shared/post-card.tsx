import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatDate, type PostMeta } from "@/lib/blog";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group relative flex gap-5 rounded-xl border border-border/60 bg-card/60 p-5 transition-colors hover:border-primary/40">
      {post.cover && (
        <div className="relative hidden w-36 shrink-0 overflow-hidden rounded-lg border border-border/50 sm:block">
          <Image
            src={post.cover}
            alt=""
            fill
            sizes="144px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      )}
      <div className="min-w-0">
        <p className="font-mono text-xs text-muted-foreground">{formatDate(post.date)}</p>
        <h3 className="mt-1.5 font-heading text-lg font-semibold tracking-tight">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary">
            <span className="absolute inset-0" aria-hidden />
            {post.title}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-mono text-[11px]">
              #{tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
