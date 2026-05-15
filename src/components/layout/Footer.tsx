import type { Personal } from "@/lib/types";

export function Footer({ personal }: { personal: Personal }) {
  return (
    <footer className="py-10 text-center">
      <a
        href={`mailto:${personal.email}`}
        className="font-mono text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
      >
        Designed &amp; Built by {personal.name} (2026)
      </a>
    </footer>
  );
}
