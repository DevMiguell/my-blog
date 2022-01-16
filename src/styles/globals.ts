import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.default};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6, p, a, i {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
