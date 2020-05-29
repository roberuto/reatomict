import React from "react";

import { Link } from "../../atoms/link/Link";
import { Icon } from "../../atoms/icon/Icon";

import styles from "./Brand.module.css";

import { BrandProps } from "./Brand.types";

export const Brand = ({ brand, component }: BrandProps) => {
  return (
    <div className={styles.brand}>
      <Link to={brand.name} component={component}>
        <Icon name="brand" />
      </Link>
    </div>
  );
};
