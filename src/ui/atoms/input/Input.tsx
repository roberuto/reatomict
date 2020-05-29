import React from "react";

import styles from "./Input.module.css";

import { InputProps } from "./Input.types";

export const Input = ({ value, onChange }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    onChange(target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};
