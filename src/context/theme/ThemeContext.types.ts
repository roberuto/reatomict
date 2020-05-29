export type Theme = "light" | "dark";

export type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
