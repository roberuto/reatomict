import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";

import { SocialLink } from "./SocialLink";

export const Default = () => (
  <SocialLink
    type={select("type", ["facebook", "youtube", "twitter"], "facebook")}
  />
);

export default {
  title: "Molecules/SocialLink",
  decorators: [withKnobs],
};
