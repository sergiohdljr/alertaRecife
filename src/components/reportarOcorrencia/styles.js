import styled from "styled-components";

export const ReportarOcorrenciaStyle = styled.form`
  display: flex;
  gap: 0.3rem;
  width: 100%;
  height: ${props=>props.modal ? "100%" : "153px" };
  padding: 0.3rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.cores.app};

  figure {
    width: auto;
    height: 100%;
    display: flex;
    align-items: flex-start;

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
  .text-area-icons {
    flex-grow: 1;
    display: flex;
    gap: 0.4rem;
    flex-direction: column;

    textarea {
      all: unset;
      color: ${({ theme }) => theme.cores.texto};
      word-break: break-all;
    }

    .btns {
      height: fit-content;
      display: flex;
      justify-content: space-between;
      gap:0.3rem;
      flex-wrap: wrap;

      div {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
        justify-content: center;
        align-items: center;

        label {
          width: 80px;
          height: 30px;
          background-color: ${({ theme }) => theme.cores.roxoEscuro};
          border-radius: 2rem;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.9rem;
          cursor: pointer;
          opacity: 70%;
          
          :hover {
            opacity: 70%;
          }

          input[type="file"] {
            display: none;
          }
        }
        select {
          width: 80px;
          height: 30px;
          border: 2px ${({ theme }) => theme.cores.roxoEscuro} solid;
          background-color: transparent;
          color: ${({ theme }) => theme.cores.roxoEscuro};
          border-radius: 2rem;
          font-weight: 400;
          cursor: pointer;
        }
      }

      button {
        all: unset;
        cursor: pointer;
      }

      .alertar {
        width: 80px;
        height: 30px;
        background-color: ${({ theme }) => theme.cores.roxoEscuro};
        border-radius: 2rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;
        cursor: pointer;

        :hover {
          opacity: 70%;
        }
      }
    }
  }
`;

export const Erro = styled.p`
  color: red;
  font-size: 0.9rem;
`;
