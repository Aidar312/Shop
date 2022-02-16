import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
body {
  font-family: "Oxygen", sans-serif;
  padding: 20px 40px;
  

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

* {
  box-sizing: border-box;
}


`