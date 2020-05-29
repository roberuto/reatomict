import { ReactNode } from "react";

import { Type } from "../../atoms/divider/Divider.types";

export type CardProps = {
  children: ReactNode;
  src: string;
  title: string;
  titlePos?: Type;
  textPos?: "left" | "right";
};
