import React from "react";
import classnames from "classnames";

import styles from "./Divider.module.css";

import { DividerProps } from "./Divider.types";

export const Divider = ({ children, type, margin }: DividerProps) => {
  const cssProps = { ...(margin && { "--margin": `${margin}px` }) };

  return (
    <div
      className={classnames(styles.divider, {
        [styles.left]: type === "left",
        [styles.right]: type === "right",
      })}
      style={cssProps}
    >
      {children && <div className={styles.dividerText}>{children}</div>}
    </div>
  );
};
