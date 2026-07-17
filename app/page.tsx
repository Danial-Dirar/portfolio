import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TerminalHero } from "@/components/home/terminal-hero";
import { ProjectCard } from "@/components/shared/project-card";
import { PostCard } from "@/components/shared/post-card";
import { Reveal } from "@/components/motion/reveal";
import { featuredProjects } from "@/lib/data/projects";
import { getAllPosts } from "@/lib/blog";

function SectionHeader({
  command,
  href,
  linkLabel,
}: {
  command: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 className="font-mono text-xl font-semibold tracking-tight md:text-2xl">
        <span className="text-primary">$ </span>
        {command}
      </h2>
      <Link
        href={href}
        className="inline-flex shrink-0 items-center gap-1 font-mono text-[13px] text-muted-foreground transition-colors hover:text-primary"
      >
        {linkLabel}
        <ArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}

export default function HomePage() {
  const projects = featuredProjects.slice(0, 4);
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <TerminalHero />

      {/* Featured projects */}
      <section className="py-14 md:py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeader command="ls projects/ --featured" href="/projects" linkLabel="all projects" />
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest posts */}
      {posts.length > 0 && (
        <section className="pb-20">
          <div className="container-page">
            <Reveal>
              <SectionHeader command="tail -n 3 blog.log" href="/blog" linkLabel="all posts" />
            </Reveal>
            <div className="mt-8 grid gap-4">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
