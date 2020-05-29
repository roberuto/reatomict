import React, { useEffect, useState } from "react";
import { addons, types } from "@storybook/addons";
import { AddonPanel } from "@storybook/components";

import { ADDON_ID, PANEL_ID, UPDATE_EVENT_ID, INIT_EVENT_ID } from "./const";

import "./styles.css";

const ThemePanel = ({ channel }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    channel.on(INIT_EVENT_ID, (theme) => {
      setTheme(theme);
    });
  }, []);

  const emitUpdateEvent = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    channel.emit(UPDATE_EVENT_ID, newTheme);
  };

  return (
    <div className="theme-container">
      <button
        className={`theme-button theme-${theme}`}
        onClick={emitUpdateEvent}
      >
        {theme}
      </button>
    </div>
  );
};

addons.register(ADDON_ID, () => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <ThemePanel channel={addons.getChannel()} />
    </AddonPanel>
  );

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Theme",
    render,
  });
});
