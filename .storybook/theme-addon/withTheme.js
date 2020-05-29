import React, { useEffect } from "react";
import { addons } from "@storybook/addons";

import { UPDATE_EVENT_ID, INIT_EVENT_ID } from "./const";

const ThemeConsumer = ({ useTheme, channel, children }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    channel.on(UPDATE_EVENT_ID, (theme) => {
      setTheme(theme);
    });
    channel.emit(INIT_EVENT_ID, theme);
  }, []);

  return children;
};

export const withTheme = ({ ThemeProvider, useTheme }) => (storyFn) => {
  const channel = addons.getChannel();

  return (
    <ThemeProvider>
      <ThemeConsumer useTheme={useTheme} channel={channel}>
        {storyFn()}
      </ThemeConsumer>
    </ThemeProvider>
  );
};
