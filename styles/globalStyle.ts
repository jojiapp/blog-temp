import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  :root {
    --point: ${({theme}) => theme.color.point};
    --gray: ${({theme}) => theme.color.gray};
    --light_gray: ${({theme}) => theme.color.lightGray};
  }

  html, body {
    font-size: 10px !important;
    height: 100%;
    color: var(--point);
    word-break: keep-all;
  }

  ${reset}
  * {
    box-sizing: border-box;
  }

  button, a {
    all: unset;
    cursor: pointer;
    color: var(--point);
  }

  input {
    outline: none;
    border: none;
    padding: 1rem 1rem 1rem 1.5rem;
  }
`;
export default GlobalStyle;