"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  href?: string;
  download?: boolean | string;
}

export function Button({
  variant = "outline",
  size = "md",
  className,
  children,
  href,
  download,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    outline:
      "border border-[var(--color-accent)] text-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent-muted)]",
    solid:
      "bg-[var(--color-accent)] text-[var(--color-bg)] hover:opacity-90",
    ghost:
      "text-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] border-transparent border",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 rounded-[var(--radius-button)]",
    md: "text-sm px-5 py-3 rounded-[var(--radius-button)]",
    lg: "text-base px-7 py-4 rounded-[var(--radius-button)]",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} download={download} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
