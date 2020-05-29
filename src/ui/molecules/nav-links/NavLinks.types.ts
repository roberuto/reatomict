import { ElementType } from "react";

export type Link = {
  name: string;
  to: string;
};

export type NavLinksProps = {
  component?: ElementType;
  links: Link[];
};
