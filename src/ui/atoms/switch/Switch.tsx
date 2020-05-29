import React from "react";

import styles from "./Switch.module.css";

import { SwitchProps } from "./Switch.types";

export const Switch = ({ checked, onChange }: SwitchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    onChange(target.checked);
  };

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={handleChange}
      />
      <span className={styles.check}></span>
    </label>
  );
};
