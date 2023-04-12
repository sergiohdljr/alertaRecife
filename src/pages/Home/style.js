import styled from "styled-components";

export const InputGoogle = styled.input`
  align-self: flex-start;
  margin-top: 3rem;
  z-index: 100;
  width: 250px;
  height: 35px;
`;

export const InputAutoComplete = styled.input`
 background-color: ${({theme})=>theme.cores.app};
          color: ${({theme})=>theme.cores.texto};
          z-index: 100;
          border-radius: 0.5rem;
          height: 40px;
          width: 200px;
          margin-top: 3.5rem;
          padding: 1rem;
`;

export const SuggestionsList = styled.div`
background-color: ${({theme})=>theme.cores.app};
width: 200px;
color: ${({theme})=>theme.cores.texto};
`;
