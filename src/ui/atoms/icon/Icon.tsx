import React from "react";
import classnames from "classnames";

import styles from "./Icon.module.css";

import { IconProps } from "./Icon.types";

export const Icon = ({ name }: IconProps) => {
  const Icon = require(`!@svgr/webpack!../../assets/icons/${name}.svg`).default;

  return (
    <i
      className={classnames(styles.icon, {
        [styles.iconSpin]: name === "spinner",
      })}
    >
      <Icon />
    </i>
  );
};
