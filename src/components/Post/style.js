import styled from "styled-components";

export const PostStyle = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.5rem;
  display: flex;
  background-color: ${({ theme }) => theme.cores.app};
  border-radius: 0.3rem;
  gap: 0.5rem;

  figure {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  .content {
    flex-grow: 1;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .user-info {
      display: flex;
      justify-content: space-between;
      .user {
        h3 {
          color: ${({ theme }) => theme.cores.texto};
          font-style: normal;
          font-weight: 400;
          font-size: 0.9rem;
          line-height: 20px;
        }

        p {
          color: ${({ theme }) => theme.cores.textoSecundario};
          font-size: 0.8rem;
        }
      }
      .tipoOcorrencia {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          color: red;
          font-size: 0.8rem;
        }
      }
    }

    article {
      width: 99%;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      p {
        word-break: break-all;
        color:${({ theme }) => theme.cores.texto};
      }
      .localizacao {
        opacity: 80%;
        color: ${({ theme }) => theme.cores.textoSecundario};
      }
    }
  }
`;
