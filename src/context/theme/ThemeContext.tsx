import { createContext } from "react";

import { ThemeContextProps } from "./ThemeContext.types";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);
