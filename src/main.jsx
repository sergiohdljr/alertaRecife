import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { temaLight } from "./style/themes/lightTheme";
import { temaDark } from "./style/themes/darkTheme";
import { RoutesApp } from "./router/routes";
import { QueryClientProvider } from "react-query";
import { client } from "./service/queryClient";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={temaDark} >
        <GlobalStyle />
        <RoutesApp />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
