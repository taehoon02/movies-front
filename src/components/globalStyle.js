import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  ${reset};
  body {
    font-family: 'Source Sans Pro', sans-serif;80%;
    background-color: #ecf011;
  }

  a {
    color: inherit;
  }

  main {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
`;