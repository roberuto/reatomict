import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import Atomium from "../../assets/images/atomium.jpg";

import { Image } from "./Image";

export const Default = () => <Image src={Atomium} />;

export default {
  title: "Atoms/Image",
  decorators: [withKnobs],
};
