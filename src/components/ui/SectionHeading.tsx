import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeading({ number, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center gap-4 mb-12", className)}>
      <h2 className="flex items-baseline gap-2 text-2xl md:text-3xl font-semibold text-[var(--color-text-heading)] whitespace-nowrap">
        <span className="section-number">{number}.</span>
        {title}
      </h2>
      <div className="flex-1 h-px bg-[var(--color-border)]" />
    </div>
  );
}
