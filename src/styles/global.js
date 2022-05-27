import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body {
  background: linear-gradient(to left , slateblue,royalblue);
  font-family: "Poppins";
}

input,button,body {
  font-family: "Poppins";
}

#root {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
