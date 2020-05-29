import React from "react";
import classnames from "classnames";

import { Icon } from "../icon/Icon";

import styles from "./Button.module.css";

import { ButtonProps } from "./Button.types";

export const Button = ({
  disabled,
  loading,
  onClick,
  children,
}: ButtonProps) => (
  <button
    className={classnames(styles.button, {
      [styles.disabled]: disabled && !loading,
      [styles.loading]: loading,
    })}
    onClick={onClick}
    disabled={disabled || loading}
  >
    <>
      {loading && <Icon name="spinner" />}
      <span>{children}</span>
    </>
  </button>
);
