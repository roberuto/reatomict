import { Theme } from "context/theme/ThemeContext.types";

export type NavbarProps = {
  theme: Theme;
  onChange: (checked: boolean) => void;
};
