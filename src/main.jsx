import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./style/global";
import { QueryClientProvider } from "react-query";
import { client } from "./service/queryClient";
import { App } from "./app";
import { AuthProvider } from "./context/authContext";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={client}>
        <GlobalStyle />
        <App/>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

ServiceWorker.register();

