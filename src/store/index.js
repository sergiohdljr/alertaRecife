import { create } from "zustand";
import { temaDark,temaLight  } from '../style'

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
