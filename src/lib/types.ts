// ─── Meta ────────────────────────────────────────────────────────────────────

export interface Meta {
  siteTitle: string;
  description: string;
  url: string;
    resumePdf?: string;
    resumeWord?: string;
}

// ─── Personal ────────────────────────────────────────────────────────────────

export interface Social {
  github?: string;
  linkedin?: string;
  twitter?: string;
  [key: string]: string | undefined;
}

export interface Personal {
  name: string;
  tagline: string;
  subTagline: string;
  location: string;
  email: string;
  availableForWork: boolean;
  profileImage: string;
  bio: string[];
  social: Social;
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

// ─── About ───────────────────────────────────────────────────────────────────

export interface QuickFact {
  label: string;
  value: string;
}

export interface About {
  headline: string;
  body: string[];
  quickFacts: QuickFact[];
}

// ─── Projects ────────────────────────────────────────────────────────────────

export interface ProjectLinks {
  github: string | null;
  live: string | null;
}

export interface Project {
  id: string;
  title: string;
  company?: string;
  year?: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  links: ProjectLinks;
}

// ─── Skills ──────────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  level: number; // 0–100
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skills {
  categories: SkillCategory[];
}

// ─── Experience ──────────────────────────────────────────────────────────────

export interface ExperienceItem {
  id: string;
  type: "work";
  company: string;
  url?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  impact?: string;
  bullets: string[];
  tech: string[];
}

// ─── Education ───────────────────────────────────────────────────────────────

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period?: string;
  gpa?: string;
  highlights: string[];
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface Contact {
  headline: string;
  subtext: string;
  ctaLabel: string;
}

// ─── Config ──────────────────────────────────────────────────────────────────

export interface Config {
  hideExpDescriptions: boolean;
  hideExpBullets: boolean;
  hideImpact: boolean;
}

// ─── Root Data Shape ─────────────────────────────────────────────────────────

export interface ResumeData {
  config: Config;
  meta: Meta;
  personal: Personal;
  nav: NavItem[];
  about: About;
  projects: Project[];
  skills: Skills;
  experience: ExperienceItem[];
  education: EducationItem[];
  contact: Contact;
}

// ─── Theme ───────────────────────────────────────────────────────────────────

export interface ThemeColors {
  bg: string;
  bgSurface: string;
  bgCard: string;
  accent: string;
  accentMuted: string;
  textPrimary: string;
  textSecondary: string;
  textHeading: string;
  border: string;
  navBg: string;
}

export interface ThemeFonts {
  sans: string;
  mono: string;
}

export interface ThemeRadius {
  card: string;
  button: string;
}

export interface ThemeAnimation {
  skillBarDuration: string;
  entranceDuration: string;
  entranceDelay: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  lightColors: ThemeColors;
  fonts: ThemeFonts;
  radius: ThemeRadius;
  animation: ThemeAnimation;
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
