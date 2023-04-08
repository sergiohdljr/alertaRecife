import { X } from "@phosphor-icons/react";
import { ReportarOcorrencia } from "../ReportarOcorrencia";
import { CloseButton, Modal, ModalContent } from "./style";
import { UseSetModal, UseTema } from "../../store";
import { useTheme } from "styled-components";

export const ModalOcorrencia = () => {
  const closeModal = UseSetModal((state) => state.closeModal);
  const modalState = UseSetModal((state)=>state.modal)

  return (
    <Modal>
      <ModalContent>
        <CloseButton
          onClick={() => {
            closeModal();
            console.log(modalState)
          }}
        >
          <X size={16} />
        </CloseButton>
        <ReportarOcorrencia modal={true} />
      </ModalContent>
    </Modal>
  );
};
