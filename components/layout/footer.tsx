import Link from "next/link";
import { GraduationCap, Mail } from "lucide-react";
import { GitHubIcon } from "@/components/shared/icons";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container-page flex flex-col items-center gap-5 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> echo &quot;thanks for scrolling&quot;
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label.toLowerCase()}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href={site.social.scholar}
            target="_blank"
            rel="noreferrer"
            aria-label="Google Scholar"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GraduationCap className="size-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.fullName} · {site.location}
        </p>
      </div>
    </footer>
  );
}
