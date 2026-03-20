"use client";

import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useData } from "@/components/providers/DataProvider";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/lib/types";

export function Experience() {
  const { experience, education, config } = useData();

  return (
    <section id="experience" className="py-12">
      <SectionHeading number="04" title="Where I've Worked" />

      <div className="space-y-1">
        {experience.map((item: ExperienceItem) => (
          <div
            key={item.id}
            className="group relative grid sm:grid-cols-8 gap-3 rounded-[var(--radius-card)] p-4 transition-all duration-200 hover:bg-[var(--color-bg-surface)] hover:shadow-lg cursor-default animate-on-view"
          >
            {/* Date */}
            <div className="sm:col-span-2 pt-0.5">
              <span className="font-mono text-xs text-[var(--color-text-secondary)] uppercase tracking-wide leading-6">
                {item.period}
              </span>
            </div>

            {/* Content */}
            <div className="sm:col-span-6">
              <h3 className="font-semibold text-[var(--color-text-heading)] group-hover:text-[var(--color-accent)] transition-colors duration-200 mb-1">
                {item.role}
                <span className="text-[var(--color-text-secondary)] font-normal">
                  {" · "}
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors duration-200"
                    >
                      {item.company}
                      <ExternalLink size={16} className="opacity-60" />
                    </a>
                  ) : item.company}
                </span>
              </h3>
              {!config.hideExpDescriptions && item.description && (
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                  {item.description}
                </p>
              )}
              {!config.hideImpact && item.impact && (
                <div className="mb-3 space-y-2">
                  {item.impact.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-[var(--color-text-primary)] leading-relaxed italic">
                      {para}
                    </p>
                  ))}
                </div>
              )}
              {!config.hideExpBullets && item.bullets.length > 0 && (
                <ul className="mb-3 space-y-1">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
                      <span className="text-[var(--color-accent)] mt-0.5">▹</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <li
                    key={t}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-mono",
                      "bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
                    )}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div className="mt-16">
          <h3 className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest mb-4">
            Education
          </h3>
          {education.map((item) => (
            <div
              key={item.id}
              className="group rounded-[var(--radius-card)] p-4 hover:bg-[var(--color-bg-surface)] transition-all duration-200 animate-on-view"
            >
              <div>
                <h4 className="font-semibold text-[var(--color-text-heading)] mb-0.5">
                  {item.degree}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                  {item.institution}
                </p>
                {item.highlights.map((h, i) => (
                  <p key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-0.5">▹</span>
                    {h}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
