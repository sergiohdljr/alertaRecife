import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    transition: all 90ms ease-in-out;
}

a{
    text-decoration: none;
}

#root{
    width: 100vw;
    height: 100vh;
}
`;
