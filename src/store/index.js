import { create } from "zustand";
import { temaLight } from "../style/themes/lightTheme";
import { temaDark } from "../style/themes/darkTheme";

export const UseTema = create((set) => ({
  tema: temaLight,
  mudarTema: () =>
    set((state) => ({ tema: state.tema.tema === "claro" ? temaDark : temaLight })),
}));

export const UseSetModal = create((set) => ({
  modal: false,
  openModal: () =>
    set((state) => ({
      tema: (state.modal = true),
    })),
  closeModal: () =>
    set((state) => ({
      tema: (state.modal = false),
    })),
}));
