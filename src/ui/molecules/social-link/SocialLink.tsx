import React from "react";

import { Icon } from "../../atoms/icon/Icon";
import { Link } from "../../atoms/link/Link";

import styles from "./SocialLink.module.css";

import { SocialLinkProps } from "./SocialLink.types";

export const SocialLink = ({ type }: SocialLinkProps) => {
  return (
    <span className={styles[type]}>
      <Link
        to={`https://www.${type}.com/`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon name={type} />
      </Link>
    </span>
  );
};
