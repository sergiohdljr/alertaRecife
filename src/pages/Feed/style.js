import styled from "styled-components";

export const FeedPageStyles = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom:1rem;
  background-color: ${({ theme }) => theme.cores.background};
  display: flex;
  gap: 0.5rem;

  main {
    background-color: transparent;
    width: 100vw;
    height: auto;
    margin: 0 auto;
    height: fit-content;
    display: flex;
    flex-direction:row;
    gap: 0.3rem;

    header {
      background-color: ${({ theme }) => theme.cores.roxoEscuro};
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: sticky;
      top:0;

      form {
        width: 230px;
        height: 30px;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        background-color: ${({theme})=>theme.cores.texto};
        padding: 0rem 0.5rem 0rem 0.5rem;

        input {
          all: unset;
          flex-grow: 1;
          font-size: 0.8rem;
        }
      }
    }

    section{
      width: 82%;
      /* flex-grow: 1; */
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }
  }

  @media screen and (max-width: 980px) {
    main {
      width: 100vw;
    }
  }
`;
