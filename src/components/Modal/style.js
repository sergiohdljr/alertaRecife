import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  padding: 0.3rem;
  width: 85%;
  max-width: 468px;
  height: 180px;
  background-color: ${({ theme }) => theme.cores.app};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.2s ease-out;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  display: flex;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  color: ${({theme})=>theme.cores.texto};

  :hover {
    opacity: 40%;
  }
`;
