import styled from "styled-components";

export const Cadastro = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.roxoClaro};

  img{
    height: 150px;
  }
  
  form {
    width: 90%;
    max-width: 600px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;
    label {
      width: 80%;
      display: flex;
      flex-direction: column;
      span {
        color: ${(props) => props.theme.roxoEscuro};
      }
      input {
        width: 100%;
        all: unset;
        height: 28px;
        background-color: ${(props) => props.theme.branco};
        border-radius: 1rem;
        padding: 0.5rem;
        border: 1px ${(props) => props.theme.roxoEscuro} solid;

        ::placeholder {
          color: ${(props) => props.theme.roxoEscuro};
          opacity: 70%;
          text-align: center;
        }
      }
    }
    .split--input {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      label {
        width: 45%;
        display: flex;
        flex-direction: column;

        input {
          width: 100%;
          all: unset;
          height: 28px;
          background-color: ${(props) => props.theme.branco};
          border-radius: 1rem;
          padding: 0.5rem;
          border: 1px ${(props) => props.theme.roxoEscuro} solid;

          ::placeholder {
            color: ${(props) => props.theme.roxoEscuro};
            opacity: 70%;
            text-align: center;
          }
        }
      }
    }
    .button--form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      button {
        all: unset;
        background-color: ${(props) => props.theme.roxoEscuro};
        color: ${(props) => props.theme.branco};
        width: 70%;
        height: 54px;
        border-radius: 1rem;
        display: flex;
        font-size: 1.2rem;
        font-weight: 500;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        :hover {
          opacity: 70%;
        }
      }
      h3 {
          cursor: pointer;
          color: ${(props) => props.theme.roxoEscuro};

          :hover {
            text-decoration: underline;
          }
        }
      }
    }
`;

