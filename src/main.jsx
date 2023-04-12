import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./style/global";
import { QueryClientProvider } from "react-query";
import { client } from "./service/queryClient";
import { App } from "./app";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
        <GlobalStyle />
        <App/>
    </QueryClientProvider>
  </React.StrictMode>
);

ServiceWorker.register();

