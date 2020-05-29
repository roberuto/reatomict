import React from "react";

import { Divider } from "../../atoms/divider/Divider";
import { SocialLink } from "../../molecules/social-link/SocialLink";
import { Typography } from "../../atoms/typography/Typography";

import styles from "./Footer.module.css";

import { FooterProps } from "./Footer.types";

export const Footer = ({ hide, name, slogan }: FooterProps) => {
  if (hide) {
    return null;
  }

  return (
    <div className={styles.footer}>
      <div className={styles.appInfo}>
        <Typography el="p">
          <span className={styles.appName}>{name}</span>
          <span>{slogan}</span>
        </Typography>
      </div>
      <Divider margin={8} />
      <div className={styles.socialLinks}>
        <SocialLink type="facebook" />
        <SocialLink type="youtube" />
        <SocialLink type="twitter" />
      </div>
    </div>
  );
};
