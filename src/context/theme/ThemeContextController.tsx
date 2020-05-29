import React, { useState, useEffect } from "react";

import { ThemeContext } from "./ThemeContext";

import { ThemeContextControllerProps } from "./ThemeContextController.types";
import { Theme } from "./ThemeContext.types";

export const ThemeContextController = ({
  children,
}: ThemeContextControllerProps) => {
  const initialTheme = () =>
    (localStorage.getItem("theme") as Theme) || "light";

  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
