import React from "react";

import { Link } from "../../atoms/link/Link";

import styles from "./NavLinks.module.css";

import { NavLinksProps } from "./NavLinks.types";

export const NavLinks = ({ links, component }: NavLinksProps) => (
  <ul className={styles.navLink}>
    {links.map((link) => (
      <li key={link.name}>
        <Link to={link.to} component={component}>
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
);
