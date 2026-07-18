import Image from "next/image";
import { ArrowUpRight, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GitHubIcon } from "@/components/shared/icons";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.liveUrl ?? project.repo;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card/60 transition-colors hover:border-primary/40">
      {/* Cover: real image, or a gradient fallback with the folder glyph */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border/50">
        {project.image ? (
          <Image
            src={asset(project.image.src)}
            alt={project.image.alt}
            fill
            sizes="(min-width: 768px) 400px, 100vw"
            placeholder="blur"
            blurDataURL={project.image.blur}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className={cn(
              "flex h-full items-center justify-center bg-gradient-to-br",
              project.accent
            )}
          >
            <Folder className="size-8 text-foreground/40" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-semibold tracking-tight">
            {href ? (
              <a href={href} target="_blank" rel="noreferrer" className="hover:text-primary">
                {/* stretch the whole card into the link */}
                <span className="absolute inset-0" aria-hidden />
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-[11px]">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          {project.repo && (
            <span className="inline-flex items-center gap-1.5">
              <GitHubIcon className="size-3.5" /> source
            </span>
          )}
          {project.liveUrl && (
            <span className="inline-flex items-center gap-1.5 text-primary">
              <ArrowUpRight className="size-3.5" /> live
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
