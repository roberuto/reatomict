import { ReactNode, ElementType } from "react";

export type LinkProps = {
  children: ReactNode;
  component?: ElementType;
  rel?: string;
  target?: string;
  to: string;
};
