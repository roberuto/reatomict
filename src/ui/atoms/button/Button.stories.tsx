import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import { Button } from "./Button";

export const Default = () => (
  <Button
    onClick={action("onClick")}
    disabled={boolean("disabled", false)}
    loading={boolean("loading", false)}
  >
    Hello Button
  </Button>
);

export default {
  title: "Atoms/Button",
  decorators: [withKnobs],
};
