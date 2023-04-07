import { create } from "zustand";
import { temaLight } from "../style/themes/lightTheme";
import { temaDark } from "../style/themes/darkTheme";

export const UseTema = create((set) => {
  theme: temaLight
  setTheme: () =>
    set((state) => ({
      theme: state.theme.tema === "claro" ? temaDark : temaLight,
    }));
});
