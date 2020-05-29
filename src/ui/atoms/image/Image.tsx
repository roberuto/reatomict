import React from "react";

import styles from "./Image.module.css";

import { ImageProps } from "./Image.types";

export const Image = ({ src }: ImageProps) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.image}
        style={{
          background: `url(${src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      />
    </div>
  );
};
