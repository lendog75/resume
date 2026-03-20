"use client";

import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { useData } from "@/components/providers/DataProvider";

export function ContactForm() {
  const { personal } = useData();

  const mailto = `mailto:${personal.email}?subject=Hey Lenny — Let's Connect`;

  return (
    <div className="flex flex-col gap-4 h-full">

      {/* Main CTA card */}
      <a
        href={mailto}
        className="group flex-1 flex flex-col justify-between rounded-[var(--radius-card)] border border-[var(--color-accent)] bg-[var(--color-bg-card)] p-8 hover:[box-shadow:0_0_40px_-8px_var(--color-accent)] transition-all duration-300"
      >
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest">
              Open to opportunities
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
          </div>
          <p className="text-2xl font-semibold text-[var(--color-text-heading)] leading-snug mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-200">
            Let&apos;s build something great together.
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Click to open an email — I&apos;ll get back to you quickly.
          </p>
        </div>
        <div className="flex items-center gap-2 mt-8 font-mono text-sm text-[var(--color-accent)]">
          <Mail size={15} />
          {personal.email}
        </div>
      </a>

      {/* Info strip */}
      <div className="rounded-[var(--radius-card)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] p-4 flex items-center gap-3">
        <MapPin size={15} className="text-[var(--color-accent)] shrink-0" />
        <div>
          <p className="font-mono text-xs text-[var(--color-text-secondary)]">Location</p>
          <p className="text-sm text-[var(--color-text-heading)]">{personal.location}</p>
        </div>
      </div>

      {/* Social row */}
      <div className="flex gap-3">
        {personal.social.linkedin && (
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-[var(--radius-card)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] p-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-200"
          >
            <Linkedin size={15} />
            <span className="font-mono text-xs">LinkedIn</span>
          </a>
        )}
        {personal.social.github && (
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-[var(--radius-card)] bg-[var(--color-bg-surface)] border border-[var(--color-border)] p-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-200"
          >
            <Github size={15} />
            <span className="font-mono text-xs">GitHub</span>
          </a>
        )}
      </div>

    </div>
  );
}
