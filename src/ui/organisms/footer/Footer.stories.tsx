import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Footer } from "./Footer";

export const Default = () => (
  <Footer
    name={text("name", "Reatomict")}
    slogan={text(
      "slogan",
      "some long fancy slogan just to make it to big for mobile view ;)"
    )}
  />
);

export default {
  title: "Organisms/Footer",
  decorators: [withKnobs],
};
