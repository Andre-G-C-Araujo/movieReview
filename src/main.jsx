import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";

import { Home } from "./Pages/Home";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
