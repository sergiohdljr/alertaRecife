import { ThemeProvider } from "styled-components";
import { UseTema } from "./store";
import { RoutesApp } from "./router/routes";
import { ModalOcorrencia } from "./components/modal";

export const App = () => {
  const atualTema = UseTema((state) => state.tema);
  return (
    <ThemeProvider theme={atualTema}>
      <RoutesApp />
    </ThemeProvider>
  );
};
