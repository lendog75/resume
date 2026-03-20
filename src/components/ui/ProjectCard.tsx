"use client";

import { Github, ExternalLink, Folder, Building2 } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index?: number;
  className?: string;
}

export function ProjectCard({ project, featured, index = 0, className }: ProjectCardProps) {
  if (featured) {
    const decorator = project.year ?? String(index + 1).padStart(2, "0");
    return (
      <div
        className={cn(
          "group relative rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-bg-card)] transition-all duration-300 animate-on-view",
          "hover:[box-shadow:0_0_40px_-8px_var(--color-accent)]",
          className
        )}
      >
        {/* Decorative background year */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-4 -bottom-6 text-[10rem] font-black leading-none text-[var(--color-accent)] opacity-5 select-none"
        >
          {decorator}
        </span>

        {/* Content */}
        <div className="relative p-8 flex flex-col gap-5">
          {/* Label + links row */}
          <div className="flex items-center justify-between">
            <p className="section-number text-xs">Featured Project</p>
            <div className="flex gap-4">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                  <Github size={18} />
                </a>
              )}
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live site"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Title + company */}
          <div>
            <h3 className="text-2xl font-semibold text-[var(--color-text-heading)] group-hover:text-[var(--color-accent)] transition-colors duration-200 leading-tight mb-1.5">
              {project.title}
            </h3>
            {project.company && (
              <p className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] font-mono">
                <Building2 size={12} />
                {project.company}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="font-mono text-xs text-[var(--color-accent)] bg-[var(--color-accent-muted)] px-2.5 py-1 rounded-full">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Non-featured card — horizontal layout
  return (
    <div
      className={cn(
        "group flex gap-4 rounded-[var(--radius-card)] p-4 transition-all duration-200 hover:bg-[var(--color-bg-surface)] hover:shadow-lg cursor-default animate-on-view",
        className
      )}
    >
      {/* Icon */}
      <div className="shrink-0 pt-1">
        <Folder className="text-[var(--color-accent)]" size={22} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-semibold text-[var(--color-text-heading)] group-hover:text-[var(--color-accent)] transition-colors text-sm">
            {project.title}
          </h3>
          <div className="flex gap-3 shrink-0">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Github size={15} />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
        {project.company && (
          <p className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)] font-mono mb-1.5">
            <Building2 size={11} />
            {project.company}
          </p>
        )}
        <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed mb-2">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="font-mono text-xs text-[var(--color-accent)] bg-[var(--color-accent-muted)] px-2 py-0.5 rounded-full">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
