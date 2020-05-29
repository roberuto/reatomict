import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./Navbar";

import { Theme } from "context/theme/ThemeContext.types";

export const Default = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <BrowserRouter>
      <Navbar
        theme={theme}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </BrowserRouter>
  );
};

export default {
  title: "Organisms/Navbar",
};
