"use client";

import { useCallback, useEffect, useState } from "react";
import { THEME_STORAGE_KEY } from "@/components/theme/theme-script";

type Theme = "dark" | "light";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/**
 * Minimal theme hook — reads/writes the `.dark` class on <html> directly.
 * No injected React script (the blocking script lives in the server layout),
 * so this works cleanly under React 19 / Next 16.
 * Multiple toggles stay in sync via a `themechange` window event.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(currentTheme());
    const sync = () => setTheme(currentTheme());
    window.addEventListener("themechange", sync);
    return () => window.removeEventListener("themechange", sync);
  }, []);

  const apply = useCallback((next: Theme) => {
    const isDark = next === "dark";
    const el = document.documentElement;
    el.classList.toggle("dark", isDark);
    el.style.colorScheme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event("themechange"));
    setTheme(next);
  }, []);

  const toggle = useCallback(() => {
    apply(currentTheme() === "dark" ? "light" : "dark");
  }, [apply]);

  return { theme, setTheme: apply, toggle, mounted };
}
