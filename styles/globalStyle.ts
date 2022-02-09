import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  :root {
    --point_color: ${({theme}) => theme.color.point}
    --gray: ${({theme}) => theme.color.gray}
    --light_gray: ${({theme}) => theme.color.lightGray}
  }

  html, body {
    font-size: 10px !important;
    height: 100%;
  }

  ${reset}
  * {
    box-sizing: border-box;
  }

  button, a {
    all: unset;
    cursor: pointer;
  }
`;
export default GlobalStyle;