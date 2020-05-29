import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { Typography } from "./Typography";

export const Default = () => (
  <Typography el={select("element", ["h1", "h2", "h3", "p"], "p")}>
    {text("text", "Hello World!")}
  </Typography>
);

export default {
  title: "Atoms/Typography",
  decorators: [withKnobs],
};
