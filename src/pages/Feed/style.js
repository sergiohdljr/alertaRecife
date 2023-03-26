import styled from "styled-components";

export const FeedPageStyles = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #5b7083;
  display: flex;
  gap: 0.5rem;

  main {
    background-color: ${({ theme }) => theme.branco};
    width: 70%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    header {
      background-color: ${({ theme }) => theme.roxoEscuro};
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      form {
        width: 230px;
        height: 30px;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        background-color: #ebeef0;
        padding: 0rem 0.5rem 0rem 0.5rem;

        input {
          all: unset;
          flex-grow: 1;
          font-size: 0.8rem;
        }
      }
    }
  }

  .reportar-ocorrencia {
    display: flex;
    gap: 0.3rem;
    width: 100%;
    height: 118px;
    padding: 0.3rem;

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
      }

      .btns {
        display: flex;
        justify-content: space-between;

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
        }
      }
    }
  }

  @media screen and (max-width: 580px) {
    main {
      flex-grow: 1;
    }
  }
`;