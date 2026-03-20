"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useData } from "@/components/providers/DataProvider";

export function Projects() {
  const { projects } = useData();
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

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
      {other.length > 0 && (
        <>
          <h3 className="text-center text-[var(--color-text-heading)] font-semibold text-xl mb-2">
            Other Noteworthy Projects
          </h3>
          <p className="text-center font-mono text-xs text-[var(--color-accent)] mb-10">
            view the archive
          </p>
          <div className="flex flex-col gap-1">
            {other.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
