import React from "react";
import { Link } from "react-router-dom";

import { NavLinks } from "../../molecules/nav-links/NavLinks";
import { Brand } from "../../molecules/brand/Brand";
import { Switch } from "../../atoms/switch/Switch";

import { AppRoute } from "app/AppRoute.enum";
import { AppTheme } from "context/theme/AppTheme.enum";

import styles from "./Navbar.module.css";

import { NavbarProps } from "./Navbar.types";

export const Navbar = ({ theme, onChange }: NavbarProps) => {
  const brand = { to: AppRoute.home, name: "Home" };

  const links = [
    { to: AppRoute.home, name: "Home" },
    { to: AppRoute.about, name: "About" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Brand brand={brand} component={Link} />
        <NavLinks links={links} component={Link} />
      </div>
      <Switch checked={theme !== AppTheme.light} onChange={onChange} />
    </nav>
  );
};
