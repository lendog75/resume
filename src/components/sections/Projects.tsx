"use client";

import { useState, useEffect, useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useData } from "@/components/providers/DataProvider";

export function Projects() {
  const { projects } = useData();
  const [showArchived, setShowArchived] = useState(false);
  const otherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showArchived || !otherRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    otherRef.current.querySelectorAll(".animate-on-view:not(.in-view)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showArchived]);

  const featured = projects.filter((p) => p.status === "Featured Project");
  const active = projects.filter((p) => p.status === "Active");
  const archived = projects.filter((p) => p.status === "Archived");
  const other = showArchived ? [...active, ...archived] : active;

  return (
    <section id="projects" className="py-12">
      <SectionHeading number="02" title="Some Things I've Built" />

      {/* Featured projects */}
      <div className="flex flex-col gap-6 mb-24">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} featured index={i} />
        ))}
      </div>

      {/* Other projects grid */}
      {(active.length > 0 || archived.length > 0) && (
        <>
          <h3 className="text-center text-[var(--color-text-heading)] font-semibold text-xl mb-2">
            Other Noteworthy Projects
          </h3>
          <div className="text-center font-mono text-xs text-[var(--color-accent)] mb-10">
            <button
              onClick={() => setShowArchived((v) => !v)}
              className="hover:underline cursor-pointer bg-transparent border-none p-0"
            >
              {showArchived ? "hide the archive" : "view the archive"}
            </button>
          </div>
          <div ref={otherRef} className="flex flex-col gap-1">
            {other.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
