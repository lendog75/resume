"use client";

import { useEffect, useRef } from "react";
import type { Skill } from "@/lib/types";

export function SkillBar({ skill }: { skill: Skill }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.classList.add("animate");
          observer.unobserve(bar);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-[var(--color-text-primary)]">{skill.name}</span>
        <span className="text-xs font-mono text-[var(--color-accent)]">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="skill-bar-fill h-full bg-[var(--color-accent)] rounded-full"
          style={{ "--bar-width": `${skill.level}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
