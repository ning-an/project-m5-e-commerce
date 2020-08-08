import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
div{
    font-family: "Limelight", cursive;
}
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: "Limelight", cursive;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;
