import React from "react";
import { withKnobs, text, select, number } from "@storybook/addon-knobs";

import { Divider } from "./Divider";

export const Default = () => (
  <Divider
    type={select("type", ["left", "center", "right"], "left")}
    margin={number("margin", 0)}
  >
    {text("text", "Hello World")}
  </Divider>
);

export default {
  title: "Atoms/Divider",
  decorators: [withKnobs],
};
