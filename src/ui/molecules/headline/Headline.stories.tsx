import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Headline } from "./Headline";

export const Default = () => (
  <Headline
    heading={text("heading", "Hello World!")}
    subheading={text("subheading", "Time to hello world")}
  />
);

export default {
  title: "Molecules/Headline",
  decorators: [withKnobs],
};
