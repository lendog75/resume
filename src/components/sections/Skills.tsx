"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { useData } from "@/components/providers/DataProvider";

export function Skills() {
  const { skills } = useData();

  return (
    <section id="skills" className="py-12">
      <SectionHeading number="03" title="Skills &amp; Technologies" />

      <div className="grid sm:grid-cols-2 gap-10">
        {skills.categories.map((category) => (
          <div key={category.name} className="animate-on-view">
            <h3 className="font-mono text-[var(--color-accent)] text-sm mb-5">
              {category.name}
            </h3>
            {category.skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
