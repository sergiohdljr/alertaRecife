import styled from "styled-components";

export const AsideStyle = styled.aside`
  width: 25%;
  height: 100vh;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({theme})=>theme.branco};

  a {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    height: 40px;
    width: 80%;
    color: ${({ theme }) => theme.preto};
  }

  div {
    .img-perfil {
      width: 39px;
      height: 39px;
      border-radius: 50%;
      border: 1px solid black;
      cursor: pointer;
    }
  }

  .h3-perfil {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  h3 {
    font-weight: 400;
    font-size: 0.8rem;
  }

  .button-div {
    width: 80%;
    display: flex;
    margin-top: 3rem;

    button {
      border: none;
      width: 190px;
      height: 40px;
      border-radius: 2rem;
      background-color: ${({ theme }) => theme.roxoEscuro};
      color: white;
      font-size: 1rem;
      cursor: pointer;

      :hover {
        opacity: 60%;
      }
    }

    .btn-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 580px) {
    width: 15%;

    padding-left: 0.2rem;
    .h3-perfil,
    h3,
    h5 {
      display: none;
    }

    div {
      width: 80%;
      display: flex;
      justify-content: center;

      .img-perfil {
        width: 24px;
        height: 24px;
      }
    }

    a {
      justify-content: center;
    }

    .button-div {
      align-items: center;
      justify-content: center;
      .btn-mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5px;
        width: 32px;
        height: 32px;
        display: block;
        border-radius: 50%;

        svg {
          border-radius: 50%;
        }
      }

      button {
        display: none;
      }
    }
  }
`;
