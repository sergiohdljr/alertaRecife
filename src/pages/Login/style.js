import styled from "styled-components";

export const LoginPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.roxoClaro};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 85%;
    max-width: 400px;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

      a {
        all: unset;
        background-color: ${(props) => props.theme.roxoEscuro};
        color: ${(props) => props.theme.branco};
        width: 70%;
        height: 54px;
        border-radius: 1rem;
        display: flex;
        font-size: 1rem;
        font-weight: 500;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;

        :hover {
          opacity: 70%;
        }

        :active{
          opacity: 70%;
        }
      }
    }
`;

export const InputField = styled.label`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    span {
      align-self: flex-start;
      color: ${(props) => props.theme.roxoEscuro};
    }
    input {
      all: unset;
      width: 100%;
      height: 54px;
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
`;
