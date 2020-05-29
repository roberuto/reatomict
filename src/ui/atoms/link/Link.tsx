import React from "react";

import styles from "./Link.module.css";

import { LinkProps } from "./Link.types";

export const Link = ({ component, children, rel, target, to }: LinkProps) => {
  const Component = component || "a";

  return (
    <Component
      className={styles.link}
      {...(component ? { to } : { href: to })}
      rel={rel}
      target={target}
    >
      {children}
    </Component>
  );
};
