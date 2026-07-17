"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { doiUrl, type ResearchPaper } from "@/lib/data/research";
import { cn } from "@/lib/utils";

export function PaperCard({ paper }: { paper: ResearchPaper }) {
  const [open, setOpen] = useState(false);
  const ongoing = paper.status === "ongoing";

  return (
    <article className="overflow-hidden rounded-xl border border-border/60 bg-card/60 transition-colors hover:border-primary/40">
      <div className="p-5 md:p-6">
        {/* status + venue line */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5",
              ongoing
                ? "bg-brand-2/15 text-brand-2"
                : "bg-primary/15 text-primary"
            )}
          >
            <FlaskConical className="size-3" />
            {ongoing ? "ongoing" : "published"}
          </span>
          <span>
            {paper.venue}
            {paper.volume ? ` · ${paper.volume}` : ""} · {paper.year}
          </span>
        </div>

        <h2 className="mt-3 font-heading text-lg font-semibold leading-snug tracking-tight md:text-xl">
          {paper.title}
        </h2>

        <p className="mt-2.5 text-sm text-muted-foreground">
          {paper.authors.map((a, i) => (
            <span key={a.name}>
              <span className={a.self ? "font-semibold text-foreground" : undefined}>
                {a.name}
              </span>
              {i < paper.authors.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>

        {/* result highlights */}
        {paper.highlights && (
          <div className="mt-5 grid grid-cols-3 gap-3 rounded-lg border border-border/50 bg-secondary/40 p-4">
            {paper.highlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className="font-heading text-lg font-bold text-primary md:text-xl">
                  {h.value}
                </div>
                <div className="mt-1 text-[11px] leading-tight text-muted-foreground">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* topics + toggle */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {paper.topics.map((t) => (
              <Badge key={t} variant="secondary" className="font-mono text-[11px]">
                {t}
              </Badge>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex shrink-0 items-center gap-1 font-mono text-[13px] text-muted-foreground transition-colors hover:text-primary"
          >
            {open ? "hide" : "read"} abstract
            <ChevronDown
              className={cn("size-3.5 transition-transform", open && "rotate-180")}
            />
          </button>
        </div>

        {/* expandable abstract */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden"
            >
              <p className="mt-4 border-t border-border/50 pt-4 text-sm leading-relaxed text-foreground/85">
                <span className="font-mono text-primary">abstract › </span>
                {paper.abstract}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {paper.doi && (
          <a
            href={doiUrl(paper.doi)}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline"
          >
            doi:{paper.doi}
            <ArrowUpRight className="size-3" />
          </a>
        )}
      </div>
    </article>
  );
}
