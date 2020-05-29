import { useContext } from "react";

import { ThemeContext } from "context/theme/ThemeContext";
import { ThemeContextProps } from "context/theme/ThemeContext.types";

export const useTheme = (): ThemeContextProps => {
  const themeContext = useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error(
      "ThemeContext is unavailable, make sure you are using ThemeContextController"
    );
  }

  return themeContext;
};
