export type Theme = "system" | "light" | "dark";
export type EffectiveTheme = "light" | "dark";
export type ThemeTypeProps = {
  mode: Theme;
  toggleMode: (mode: Theme) => void;
  effectiveTheme: EffectiveTheme;
};
