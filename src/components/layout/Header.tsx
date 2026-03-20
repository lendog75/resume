"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/ui/NavLink";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import type { NavItem } from "@/lib/types";

interface HeaderProps {
  nav: NavItem[];
  name: string;
}

export function Header({ nav, name }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = nav.map((item) => item.href.replace("#", ""));
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--color-nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled ? "0 1px 0 var(--color-border)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-[var(--color-accent)] text-lg font-bold tracking-wider hover:opacity-80 transition-opacity"
          >
            {name.split(" ")[0].toLowerCase()}
            <span className="text-[var(--color-text-secondary)]">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item, i) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                index={i + 1}
                isActive={activeId === item.href.replace("#", "")}
              />
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="w-9 h-9 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        nav={nav}
        activeId={activeId}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
