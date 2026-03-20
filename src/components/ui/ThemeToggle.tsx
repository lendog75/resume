"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { isDark, toggle, mounted } = useTheme();

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "w-9 h-9 flex items-center justify-center rounded-[var(--radius-button)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200",
        className
      )}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
