import styled from "styled-components";

export const PerfilPageStyles = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.roxoClaro};
  display: flex;
  gap: 0.5rem;

  main {
    width: 85%;
    margin: 0 auto;
    height: fit-content;
    display: flex;
    gap: 0.5rem;

    .content {
      background-color: ${({ theme }) => theme.branco};
      width: 78%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0rem 1rem 0rem 1rem;
    }

    nav {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        all: unset;
        cursor: pointer;
      }

      h3 {
        font-weight: 400;
        font-size: 1.1rem;
        letter-spacing: 0.07em;
        color: ${({ theme }) => theme.preto};
      }
    }
    .hero {
      width: 100%;
      height: 190px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      figure {
        width: 150px;
        height: 150px;
        display: flex;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      button {
        width: 112px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        all: unser;
        border: 1px ${({ theme }) => theme.roxoEscuro} solid;
        border-radius: 2rem;
        background-color: transparent;
        color: ${({ theme }) => theme.roxoEscuro};
        cursor: pointer;
      }
    }
    .name-user-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      h1 {
        font-weight: 400;
        font-size: 1.1rem;
        letter-spacing: -0.012em;
        color: ${({ theme }) => theme.preto};
      }
      p {
        font-size: 0.8rem;
        color: #5b7083;
      }
    }
    .location-createdAt {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;

      div {
        display: flex;
        gap: 0.5rem;

        p {
          font-size: 0.8rem;
          color: #5b7083;
        }
      }
    }
    section {
      h3 {
        width: 110px;
        color: ${({ theme }) => theme.roxoEscuro};
        cursor: pointer;

        :hover {
          transition: 5ms all;
          border-bottom: 0.2px ${({ theme }) => theme.roxoEscuro} solid;
        }
      }
    }

    .posts {
      flex-grow: 1;
    }

    @media screen and (max-width: 580px) {
      padding: 0.3rem;
      flex-grow: 1;
      .content {
        width: 100%;
      }
      .hero {
        align-items: flex-start;
        justify-content: space-around;
        flex-direction: column;
        gap: 1rem;
        height: 170px;

        figure {
          width: 100px;
          height: 100px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;
