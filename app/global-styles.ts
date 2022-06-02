import { createGlobalStyle } from 'styles/styled-components';

const fontSizeH1 = `
  font-size: 33px;
  color:#000853;
  text-align:center;
  margin:0;
  padding:50px 0 0 0;
`;
const fontSizeH2 = `
  font-size: 23px;
  color:#000853;
  text-align:center;
  padding:50px 0 0 0;
`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'ProximaNova', sans-serif;
  }

  body.fontLoaded {
    font-family: 'ProximaNova', sans-serif;sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  
  p,
  label {
    font-family: 'ProximaNova', sans-serif;
    line-height: 1.5em;
  }
  
  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  h1{
    ${fontSizeH1}
  }
  h2{
    ${fontSizeH2}
  }
  .button-group {
    display:flex;
    justify-content:center;
    margin: 10px 0 0 0;
    display: flex;
    flex-direction: row;
  }
`;

export default GlobalStyle;
