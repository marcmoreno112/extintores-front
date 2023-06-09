import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
}

body {
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1rem;
  background-color: white;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  margin: 0;
  text-align: center;
}

ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

textarea {
  font-family: inherit;
  border: none;
}

input {
  font-family: inherit;
  border: none;
}

button {
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: transparent;
  padding: 0;
  color: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

p {
  margin: 0
}

img {
  max-width: 100%
}

`;

export default GlobalStyle;
