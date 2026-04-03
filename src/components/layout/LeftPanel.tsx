"use client";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useData } from "@/components/providers/DataProvider";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";

export function LeftPanel({ nav }: { nav: NavItem[] }) {
  const { personal, experience, meta } = useData();
  const sectionIds = nav.map((item) => item.href.replace("#", ""));
  const activeId = useScrollSpy(sectionIds, 0.3);

  const socials = Object.entries(personal.social).filter(
    ([, url]) => url && url !== "UNKNOWN"
  ) as [string, string][];

  const currentRole = experience[0]?.role ?? "Software Engineer";

  const resumeButtons = (
    <div className="flex flex-col gap-2 mt-8 w-fit">
      {!meta.resumePdf && !meta.resumeWord ? (
        <>
          <Button disabled variant="outline" size="sm" className="w-full text-xs px-3 py-1.5">
            Download Resume
          </Button>
          <p className="text-xs text-[var(--color-text-secondary)]">Coming soon</p>
        </>
      ) : (
        <>
          {meta.resumePdf && (
            <Button href={meta.resumePdf} download variant="outline" size="sm" className="w-full text-xs px-3 py-1.5">
              Download Resume as PDF
            </Button>
          )}
          {meta.resumeWord && (
            <Button href={meta.resumeWord} download variant="outline" size="sm" className="w-full text-xs px-3 py-1.5">
              Download Resume as Word
            </Button>
          )}
        </>
      )}
    </div>
  );

  const socialBar = (
    <div className="flex items-center gap-5">
      {socials.map(([platform, url]) => (
        <SocialIcon key={platform} platform={platform} url={url} />
      ))}
      <ThemeToggle />
    </div>
  );

  return (
    <aside className="flex flex-col h-full">
      {/* Name / role / tagline */}
      <div>
        <a href="#" className="block group">
          <h1 className="text-4xl font-bold text-[var(--color-text-heading)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
            {personal.name}
          </h1>
        </a>
        <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">
          {currentRole}
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
          {personal.subTagline}
        </p>

        {/* Mobile: socials then resume, both under subTagline */}
        <div className="md:hidden">
          <div className="mt-6">{socialBar}</div>
          {resumeButtons}
        </div>

        {/* Tablet / desktop: resume under subTagline only */}
        <div className="hidden md:block">
          {resumeButtons}
        </div>

        {/* Nav — desktop only */}
        <nav className="hidden lg:flex flex-col gap-0 mt-8" aria-label="Page sections">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "group/nav flex items-center gap-4 py-3 transition-all duration-200",
                  isActive
                    ? "text-[var(--color-text-heading)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-heading)]"
                )}
              >
                <span
                  className={cn(
                    "inline-block h-px bg-current transition-all duration-200",
                    isActive ? "w-16" : "w-8 group-hover/nav:w-16"
                  )}
                />
                <span className="text-xs font-mono uppercase tracking-widest">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Tablet / desktop: socials at bottom of panel */}
      <div className="hidden md:flex mt-auto pt-8">
        {socialBar}
      </div>
    </aside>
  );
}
