import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
div{
  font-family: 'Cardo', serif;

}
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Cardo', serif;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;
