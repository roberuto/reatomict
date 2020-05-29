import React, { useState } from "react";

import { Input } from "./Input";

export const Default = () => {
  const [value, setValue] = useState("");

  return <Input value={value} onChange={setValue} />;
};

export default {
  title: "Atoms/Input",
};
