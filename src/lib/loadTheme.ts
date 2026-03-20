import "server-only";
import type { ThemeConfig } from "./types";
import themeJson from "../../data/theme.json";

export async function loadTheme(): Promise<ThemeConfig> {
  return themeJson as ThemeConfig;
}

/** Converts theme.json into a <style> string with CSS custom properties */
export function buildThemeCss(theme: ThemeConfig): string {
  const { colors, lightColors, fonts, radius, animation } = theme;

  const darkVars = `
    --color-bg: ${colors.bg};
    --color-bg-surface: ${colors.bgSurface};
    --color-bg-card: ${colors.bgCard};
    --color-accent: ${colors.accent};
    --color-accent-muted: ${colors.accentMuted};
    --color-text-primary: ${colors.textPrimary};
    --color-text-secondary: ${colors.textSecondary};
    --color-text-heading: ${colors.textHeading};
    --color-border: ${colors.border};
    --color-nav-bg: ${colors.navBg};
    --font-sans: "${fonts.sans}", ui-sans-serif, system-ui, sans-serif;
    --font-mono: "${fonts.mono}", ui-monospace, monospace;
    --radius-card: ${radius.card};
    --radius-button: ${radius.button};
    --animation-skill-bar: ${animation.skillBarDuration};
    --animation-entrance: ${animation.entranceDuration};
    --animation-entrance-delay: ${animation.entranceDelay};
  `;

  const lightVars = `
    --color-bg: ${lightColors.bg};
    --color-bg-surface: ${lightColors.bgSurface};
    --color-bg-card: ${lightColors.bgCard};
    --color-accent: ${lightColors.accent};
    --color-accent-muted: ${lightColors.accentMuted};
    --color-text-primary: ${lightColors.textPrimary};
    --color-text-secondary: ${lightColors.textSecondary};
    --color-text-heading: ${lightColors.textHeading};
    --color-border: ${lightColors.border};
    --color-nav-bg: ${lightColors.navBg};
  `;

  return `
    :root { ${darkVars} }
    .light { ${lightVars} }
  `;
}
