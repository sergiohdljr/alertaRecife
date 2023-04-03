import styled from "styled-components";

export const ReportarOcorrenciaStyle = styled.form`
  display: flex;
  gap: 0.3rem;
  width: 100%;
  height: 118px;
  padding: 0.3rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.branco};

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
    flex-direction: column;

    textarea {
      all: unset;
      word-break: break-all;
    }

    .btns {
      height: fit-content;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

     

      div{
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
        justify-content: center;
        align-items: center;
        
        label {
        width: 80px;
        height: 30px;
        background-color: ${({ theme }) => theme.roxoEscuro};
        border-radius: 2rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;
        cursor: pointer;

        :hover{
            opacity:70%;
        }

        input[type="file"] {
          display: none;
        }
      }
        select{
        width: 80px;
        height: 30px;
        border: 2px  ${({ theme }) => theme.roxoEscuro} solid;
        background-color: transparent;
        color: ${({ theme }) => theme.roxoEscuro};
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
        background-color: ${({ theme }) => theme.roxoEscuro};
        border-radius: 2rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;
        cursor: pointer;

        :hover{
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
