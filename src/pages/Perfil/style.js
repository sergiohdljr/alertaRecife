import styled from "styled-components";

export const PerfilPageStyles = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.cores.background};
  display: flex;
  gap: 0.5rem;

  main {
    width: 85%;
    margin: 0 auto;
    height: auto;
    display: flex;
    gap: 0.3rem;

    .content {
      background-color: transparent;
      width: 82%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      .container {
        background-color: ${({ theme }) => theme.cores.app};
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        padding: 0rem 0.5rem 0rem 0.5rem;

        h2{
          color:${({theme})=>theme.cores.roxoEscuro};
        }
         
        nav {
          background-color: ${({ theme }) => theme.cores.app};
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          gap: 0.5rem;

          button {
            all: unset;
            cursor: pointer;
          }

          .user-ocorrencias-number {
            display: flex;
            flex-direction: column;

            h3 {
              font-weight: 400;
              font-size: 0.8rem;
              color: ${({ theme }) => theme.cores.texto};
            }
            p {
              font-size: 0.7rem;
              color: ${({ theme }) => theme.cores.textoSecundario};
              opacity: 85%;
            }
          }
        }
        .hero {
          background-color: ${({ theme }) => theme.cores.app};
          width: 100%;
          height: 150px;
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
            border: 1px ${({ theme }) => theme.cores.roxoEscuro} solid;
            border-radius: 2rem;
            background-color: transparent;
            color: ${({ theme }) => theme.cores.roxoEscuro};
            cursor: pointer;
          }
        }
        .name-user-info {
          background-color: ${({ theme }) => theme.branco};
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;

          h1 {
            font-weight: 400;
            font-size: 0.9rem;
            letter-spacing: -0.012em;
            color: ${({ theme }) => theme.cores.texto};
          }
          p {
            font-size: 0.8rem;
            color: ${({ theme }) => theme.cores.textoSecundario};
          }
        }
        .location-createdAt {
          background-color: ${({ theme }) => theme.branco};
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;

          div {
            display: flex;
            gap: 0.5rem;

            p {
              font-size: 0.8rem;
              color: ${({ theme }) => theme.cores.textoSecundario};
            }
          }
        }
      }
    }

    section {
      background-color: ${({theme})=> theme.cores.background};
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      h2 {
        font-size: 1.3rem;
        width: 130px;
        color: ${({ theme }) => theme.cores.roxoEscuro};
        cursor: pointer;

        :hover {
          transition: 5ms all;
          border-bottom: 0.2px ${({ theme }) => theme.cores.roxoEscuro} solid;
        }
      }
    }

    @media screen and (max-width: 580px) {
      flex-grow: 1;

      main {
        width: 100%;

        section {
          width: 100%;

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
    }
  }
`;
