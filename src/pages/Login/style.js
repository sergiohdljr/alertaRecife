import styled from "styled-components";

export const LoginPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.cores.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   
  img{
    aspect-ratio: 8/6;
  }
    a {
      all: unset;
      background-color: ${({ theme }) => theme.cores.roxoEscuro};
      color: ${({ theme }) => theme.cores.app};
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

      :active {
        opacity: 70%;
      }
    }
`;


