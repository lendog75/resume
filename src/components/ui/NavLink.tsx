"use client";

import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  index: number;
  isActive: boolean;
  onClick?: () => void;
  mobile?: boolean;
}

export function NavLink({ href, label, index, isActive, onClick, mobile }: NavLinkProps) {
  const num = String(index).padStart(2, "0");

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "group font-mono text-sm transition-colors duration-200",
        mobile
          ? "flex flex-col items-center gap-1 py-4 text-lg"
          : "flex items-center gap-1",
        isActive
          ? "text-[var(--color-accent)]"
          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-heading)]"
      )}
    >
      <span className="text-[var(--color-accent)] text-xs">{num}.</span>
      {label}
    </a>
  );
}
