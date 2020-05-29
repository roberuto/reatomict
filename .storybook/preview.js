import { addDecorator } from "@storybook/react";

import { withTheme } from "./theme-addon";

import { ThemeContextController } from "../src/context/theme/ThemeContextController";
import { useTheme } from "../src/hooks/useTheme/useTheme";

import "../src/ui/assets/styles/theme.css";

addDecorator(
  withTheme({
    ThemeProvider: ThemeContextController,
    useTheme,
  })
);
