"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { NavLink } from "@/components/ui/NavLink";
import type { NavItem } from "@/lib/types";

interface MobileMenuProps {
  nav: NavItem[];
  activeId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ nav, activeId, isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 md:hidden"
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col bg-[var(--color-bg-surface)] border-l border-[var(--color-border)] transition-transform duration-300 md:hidden"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-2">
          {nav.map((item, i) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              index={i + 1}
              isActive={activeId === item.href.replace("#", "")}
              onClick={onClose}
              mobile
            />
          ))}
        </nav>
      </aside>
    </>
  );
}
