"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/use-theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle, mounted } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      className={cn(
        "relative inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/40 text-foreground/80 transition-colors hover:text-foreground hover:bg-accent/50",
        className
      )}
    >
      {mounted ? (
        <>
          <Sun
            className={cn(
              "size-[1.05rem] transition-all duration-300",
              isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
            )}
          />
          <Moon
            className={cn(
              "absolute size-[1.05rem] transition-all duration-300",
              isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
            )}
          />
        </>
      ) : (
        <span className="size-[1.05rem]" />
      )}
    </button>
  );
}
