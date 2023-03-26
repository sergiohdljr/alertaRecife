import styled from "styled-components";

export const PostStyle = styled.div`
  width: 100%;
  height: 369px;
  padding: 0.5rem;
  display: flex;
  background-color: ${({ theme }) => theme.branco};
  border-radius: 0.3rem;

  figure {
    width: 16%;
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
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .user-info {

      h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      }

      p{
        color: ${({theme})=>theme.azulClaro};
      }
    }

    p {
      text-align: justify;
    }

    iframe {
      width: 100%;
      flex-grow: 1;
      border: 0;
    }
  }
`;