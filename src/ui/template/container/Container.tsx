import React from "react";

import styles from "./Container.module.css";

import { ContainerProps } from "./Container.types";

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>{children}</div>
);
