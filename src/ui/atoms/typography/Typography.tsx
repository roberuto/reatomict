import React from "react";

import { TypographyProps } from "./Typography.types";

export const Typography = ({ el, children }: TypographyProps) => {
  const Component = el;

  return <Component>{children}</Component>;
};
