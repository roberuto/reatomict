import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Atomium from "../../assets/images/atomium.jpg";

import { Card } from "./Card";

export const Default = () => (
  <Card
    src={Atomium}
    title={text("title", "atomic design")}
    titlePos={select("titlePos", ["left", "center", "right"], "center")}
    textPos={select("textPos", ["left", "right"], "right")}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor id,
    nisi dicta minima deserunt dolore in sunt esse est sequi culpa veniam saepe
    praesentium placeat, commodi officiis a odio?
  </Card>
);

export default {
  title: "Molecules/Card",
  decorators: [withKnobs],
};
