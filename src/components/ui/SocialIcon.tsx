import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, React.FC<{ size?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

interface SocialIconProps {
  platform: string;
  url: string;
  className?: string;
}

export function SocialIcon({ platform, url, className }: SocialIconProps) {
  const Icon = icons[platform.toLowerCase()] ?? ExternalLink;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform}
      className={cn(
        "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200 hover:-translate-y-0.5 inline-flex",
        className
      )}
    >
      <Icon size={20} />
    </a>
  );
}
