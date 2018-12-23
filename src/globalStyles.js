import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  ${reset};

  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #fff;
  }

  a {
    color: #000;
  }

  main {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
`;