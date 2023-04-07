import { ThemeProvider } from "styled-components";
import { UseTema } from "./store";
import { RoutesApp } from "./router/routes";

export const App = () => {
  const atualTema = UseTema((state) => state.tema);
  return (
    <ThemeProvider theme={atualTema}>
      <RoutesApp />
    </ThemeProvider>
  );
};
