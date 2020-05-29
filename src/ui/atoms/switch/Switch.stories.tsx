import React, { useState } from "react";

import { Switch } from "./Switch";

export const Default = () => {
  const [checked, setChecked] = useState(false);

  return <Switch checked={checked} onChange={setChecked} />;
};

export default {
  title: "Atoms/Switch",
};
