"use client";

import { useEffect, useState, useCallback } from "react";

const KEY = "theme";

function applyTheme(t: "dark" | "light") {
  if (t === "light") {
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.remove("light");
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(KEY) as "dark" | "light" | null;
    const resolved = stored ?? "dark";
    setThemeState(resolved);
    setMounted(true);
  }, []);

  const setTheme = useCallback((next: "dark" | "light") => {
    setThemeState(next);
    localStorage.setItem(KEY, next);
    applyTheme(next);
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return { theme, setTheme, resolvedTheme: theme, isDark: theme === "dark", toggle, mounted };
}
