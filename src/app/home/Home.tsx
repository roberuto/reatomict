import React, { useState } from "react";

import { Headline } from "ui/molecules/headline/Headline";
import { Search } from "ui/molecules/search/Search";

import styles from "./Home.module.css";

const DEFAULT_TEXT = "Create your own UI components library";

export const Home = () => {
  const [text, setText] = useState(DEFAULT_TEXT);

  const handleClick = (text: string) => {
    setText(text || DEFAULT_TEXT);
  };

  return (
    <div className={styles.content}>
      <Headline heading="Atomic Design" subheading={text} />
      <Search onClick={handleClick} />
    </div>
  );
};
