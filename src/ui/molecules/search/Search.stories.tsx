import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import { Search } from "./Search";

export const Default = () => (
  <Search
    onClick={action("onClick")}
    disabled={boolean("is disabled", false)}
    loading={boolean("is loading", false)}
  />
);

export default {
  title: "Molecules/Search",
  decorators: [withKnobs],
};
