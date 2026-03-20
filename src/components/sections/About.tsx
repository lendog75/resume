"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useData } from "@/components/providers/DataProvider";

export function About() {
  const { about, personal, skills } = useData();

  // Flatten all skill names for the "languages I work with" list
  const techList = skills.categories
    .flatMap((c) => c.skills)
    .filter((s) => s.featured)
    .map((s) => s.name);

  return (
    <section id="about" className="py-16">
      <SectionHeading number="01" title={about.headline} />

      <div className="grid md:grid-cols-5 gap-12">
        {/* Text */}
        <div className="md:col-span-3 space-y-4 animate-on-view">
          {about.body.map((para, i) => (
            <p key={i} className="text-[var(--color-text-secondary)] leading-relaxed">
              {para}
            </p>
          ))}

          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
            {techList.map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-2 font-mono text-sm text-[var(--color-text-secondary)]"
              >
                <span className="text-[var(--color-accent)]">▹</span>
                {tech}
              </li>
            ))}
          </ul>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {about.quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-3"
              >
                <p className="font-mono text-xs text-[var(--color-text-secondary)] mb-0.5">
                  {fact.label}
                </p>
                <p className="text-sm font-medium text-[var(--color-text-heading)]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="md:col-span-2 flex justify-center md:justify-end animate-on-view">
          <div className="relative w-full h-72 md:w-72 md:h-72">
            {/* Accent border offset */}
            <div className="absolute inset-0 border-2 border-[var(--color-accent)] rounded-[var(--radius-card)] translate-x-3 translate-y-3" />
            <div className="relative w-full h-full rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-bg-card)]">
              <Image
                src={personal.profileImage}
                alt={personal.name}
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
