import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import { Navbar } from "ui/organisms/navbar/Navbar";
import { Footer } from "ui/organisms/footer/Footer";
import { Home } from "./home/Home";
import { About } from "./about/About";

import { useTheme } from "hooks/useTheme/useTheme";

import { AppTheme } from "context/theme/AppTheme.enum";
import { AppRoute } from "./AppRoute.enum";

import styles from "./App.module.css";

export const App = () => {
  const { theme, setTheme } = useTheme();
  const { pathname } = useLocation();

  const changeTheme = () => {
    setTheme(theme === AppTheme.light ? AppTheme.dark : AppTheme.light);
  };

  return (
    <div className={styles.container}>
      <Navbar theme={theme} onChange={changeTheme} />

      <Switch>
        <Route path={AppRoute.home} exact component={Home} />
        <Route path={AppRoute.about} component={About} />
        <Redirect to={AppRoute.home} />
      </Switch>

      <Footer
        hide={pathname === AppRoute.home}
        name="Reatomict"
        slogan="some fancy slogan :)"
      />
    </div>
  );
};
