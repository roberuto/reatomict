import React from "react";
import classnames from "classnames";

import { Image } from "../../atoms/image/Image";
import { Divider } from "../../atoms/divider/Divider";
import { Typography } from "../../atoms/typography/Typography";

import styles from "./Card.module.css";

import { CardProps } from "./Card.types";

export const Card = ({
  children,
  src,
  title,
  titlePos,
  textPos,
}: CardProps) => {
  return (
    <div className={styles.card}>
      <Image src={src} />
      <div
        className={classnames({
          [styles.left]: textPos === "left",
        })}
      >
        <Divider type={titlePos} margin={24}>
          {title}
        </Divider>
        <Typography el="p">{children}</Typography>
      </div>
    </div>
  );
};
