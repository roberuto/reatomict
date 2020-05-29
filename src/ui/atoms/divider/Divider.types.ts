import { ReactNode } from "react";

export type Type = "left" | "center" | "right";

export type DividerProps = {
  children?: ReactNode;
  margin?: number;
  type?: Type;
};
