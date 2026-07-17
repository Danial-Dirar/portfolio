"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/shared/icons";
import { site } from "@/lib/site";

/**
 * The terminal script the hero "types". Commands are typed character by
 * character; outputs print instantly on the next tick (like a real shell).
 */
const SCRIPT: { cmd: string; out: string[] }[] = [
  { cmd: "whoami", out: [`${site.fullName} — ${site.role}`] },
  { cmd: "cat focus.txt", out: ["Machine Learning · Generative AI", "Local AI, tailored for business"] },
  { cmd: "./contact --now", out: [`→ ${site.email}`] },
];

const TYPE_MS = 55;
const PAUSE_AFTER_CMD = 350;
const PAUSE_AFTER_OUT = 650;

type Line = { kind: "cmd" | "out"; text: string; done?: boolean };

function useTerminalScript() {
  const [lines, setLines] = useState<Line[]>([]);
  const [finished, setFinished] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    let step = 0; // which script entry
    let char = 0; // typing position within the command

    const tick = () => {
      const entry = SCRIPT[step];
      if (!entry) {
        setFinished(true);
        return;
      }
      if (char <= entry.cmd.length) {
        const text = entry.cmd.slice(0, char);
        setLines((prev) => {
          const next = [...prev];
          if (next.length && next[next.length - 1].kind === "cmd" && !next[next.length - 1].done) {
            next[next.length - 1] = { kind: "cmd", text };
          } else {
            next.push({ kind: "cmd", text });
          }
          return next;
        });
        char += 1;
        timer.current = setTimeout(tick, char > entry.cmd.length ? PAUSE_AFTER_CMD : TYPE_MS);
      } else {
        // command finished — print output lines at once, move on
        setLines((prev) => {
          const next = [...prev];
          next[next.length - 1] = { ...next[next.length - 1], done: true };
          for (const out of entry.out) next.push({ kind: "out", text: out, done: true });
          return next;
        });
        step += 1;
        char = 0;
        timer.current = setTimeout(tick, PAUSE_AFTER_OUT);
      }
    };

    timer.current = setTimeout(tick, 500);
    return () => clearTimeout(timer.current);
  }, []);

  return { lines, finished };
}

/** Faint code fragments floating behind the hero. Pure decoration. */
const FLOATS = [
  { text: "model.fit(X_train, y_train)", top: "12%", left: "4%", delay: 0 },
  { text: "const answer = await rag.query(docs)", top: "26%", right: "3%", delay: 1.2 },
  { text: "torch.no_grad()", top: "64%", left: "2%", delay: 0.6 },
  { text: "ollama run llama3 --local", top: "76%", right: "6%", delay: 1.8 },
  { text: "df.groupby('well_id').resample('M')", top: "48%", right: "1%", delay: 2.4 },
] as const;

export function TerminalHero() {
  const { lines, finished } = useTerminalScript();

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade" />

      {/* floating code snippets */}
      {FLOATS.map((f) => (
        <motion.pre
          key={f.text}
          className="code-float hidden lg:block"
          style={{ top: f.top, left: "left" in f ? f.left : undefined, right: "right" in f ? f.right : undefined }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
          aria-hidden
        >
          {f.text}
        </motion.pre>
      ))}

      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-primary"
          >
            ~/portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 font-heading text-4xl font-bold tracking-tight text-balance md:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">{site.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground text-pretty"
          >
            I build machine-learning systems, generative-AI pipelines, and private
            local AI tailored for businesses — end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild className="rounded-full">
              <Link href="/projects">
                View projects
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href={site.social.github} target="_blank" rel="noreferrer">
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </div>

        {/* the terminal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <span className="terminal-dot bg-red-400/80" />
              <span className="terminal-dot bg-amber-400/80" />
              <span className="terminal-dot bg-emerald-400/80" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                {site.handle}@haifa: ~
              </span>
            </div>
            <div className="terminal-body min-h-52 text-left" aria-label="Animated terminal introduction">
              {lines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap">
                  {line.kind === "cmd" ? (
                    <>
                      <span className="text-primary">$ </span>
                      <span>{line.text}</span>
                      {!line.done && <span className="cursor-blink" aria-hidden />}
                    </>
                  ) : (
                    <span className="text-muted-foreground">{line.text}</span>
                  )}
                </div>
              ))}
              {finished && (
                <div>
                  <span className="text-primary">$ </span>
                  <span className="cursor-blink" aria-hidden />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
