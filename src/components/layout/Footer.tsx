import { SocialIcon } from "@/components/ui/SocialIcon";
import type { Personal } from "@/lib/types";

export function Footer({ personal }: { personal: Personal }) {
  const socials = Object.entries(personal.social).filter(([, url]) => Boolean(url)) as [string, string][];

  return (
    <footer className="py-10 text-center">
      {/* Mobile social icons (desktop has them in sidebar) */}
      <div className="flex justify-center gap-5 mb-4 md:hidden">
        {socials.map(([platform, url]) => (
          <SocialIcon key={platform} platform={platform} url={url} />
        ))}
      </div>
      <a
        href={`mailto:${personal.email}`}
        className="font-mono text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
      >
        Designed &amp; Built by {personal.name}
      </a>
    </footer>
  );
}
