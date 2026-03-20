"use client";

import { Button } from "@/components/ui/Button";
import { useData } from "@/components/providers/DataProvider";

export function Hero() {
  const { personal, meta } = useData();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center section-container py-24"
    >
      <p
        className="font-mono text-[var(--color-accent)] text-sm mb-5 animate-fade-in-up"
        style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
      >
        Hi, my name is
      </p>
      <h1
        className="text-4xl sm:text-6xl md:text-7xl font-bold text-[var(--color-text-heading)] mb-3 animate-fade-in-up"
        style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
      >
        {personal.name}.
      </h1>
      <h2
        className="text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--color-text-secondary)] mb-8 animate-fade-in-up"
        style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
      >
        {personal.tagline}
      </h2>
      <p
        className="max-w-lg text-[var(--color-text-secondary)] text-lg leading-relaxed mb-12 animate-fade-in-up"
        style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
      >
        {personal.subTagline}
      </p>
      <div
        className="flex flex-wrap gap-4 animate-fade-in-up"
        style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
      >
        <Button href="#projects" variant="outline" size="lg">
          See my work
        </Button>
        {meta.resumePdf && (
          <Button href={meta.resumePdf} variant="ghost" size="lg">
            Resume (PDF)
          </Button>
        )}
        {meta.resumeWord && (
          <Button href={meta.resumeWord} variant="ghost" size="lg">
            Resume (Word)
          </Button>
        )}
      </div>

      {personal.availableForWork && (
        <div
          className="mt-8 flex items-center gap-2 animate-fade-in"
          style={{ animationDelay: "0.7s", opacity: 0, animationFillMode: "forwards" }}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span className="font-mono text-xs text-[var(--color-text-secondary)]">
            Available for work
          </span>
        </div>
      )}
    </section>
  );
}
