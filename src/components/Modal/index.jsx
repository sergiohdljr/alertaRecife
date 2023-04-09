import { X } from "@phosphor-icons/react";
import { ReportarOcorrencia } from "../ReportarOcorrencia";
import { CloseButton, Modal, ModalContent } from "./style";
import { UseSetModal } from "../../store";

export const ModalOcorrencia = () => {
  const closeModal = UseSetModal((state) => state.closeModal);

  return (
    <Modal>
      <ModalContent>
        <CloseButton
          onClick={() => {
            closeModal();
          }}
        >
          <X size={16} />
        </CloseButton>
        <ReportarOcorrencia modal={true} />
      </ModalContent>
    </Modal>
  );
};
