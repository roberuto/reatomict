import React from "react";

import { NavLinks } from "./NavLinks";

const links = [
  { to: "#", name: "Item 1" },
  { to: "#", name: "Item 2" },
  { to: "#", name: "Item 3" },
];

export const Default = () => <NavLinks links={links} />;

export default {
  title: "Molecules/NavLinks",
};
