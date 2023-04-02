import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { RoutesApp } from "./router/routes";
import { QueryClientProvider } from "react-query";
import { client } from "./service/queryClient";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client} >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RoutesApp />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
