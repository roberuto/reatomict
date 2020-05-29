import React, { useState } from "react";

import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input/Input";

import styles from "./Search.module.css";

import { SearchProps } from "./Search.types";

export const Search = ({ onClick, loading, disabled }: SearchProps) => {
  const [value, setValue] = useState("");

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleClick = () => {
    onClick(value);
    setValue("");
  };

  return (
    <div className={styles.search}>
      <Input value={value} onChange={handleChange} />
      <Button loading={loading} disabled={disabled} onClick={handleClick}>
        Search
      </Button>
    </div>
  );
};
