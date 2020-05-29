import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./ui/assets/styles/theme.css";
import "./index.css";

import { ThemeContextController } from "context/theme/ThemeContextController";

import { App } from "./app/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextController>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextController>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();