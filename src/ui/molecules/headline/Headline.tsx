import React from "react";

import { Typography } from "../../atoms/typography/Typography";

import styles from "./Headline.module.css";

import { HeadlineProps } from "./Headline.types";

export const Headline = ({ heading, subheading }: HeadlineProps) => (
  <div className={styles.headline}>
    <Typography el="h1">{heading}</Typography>
    <Typography el="h3">{subheading}</Typography>
  </div>
);
