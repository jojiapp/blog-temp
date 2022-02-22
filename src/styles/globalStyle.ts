import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import globalColorStyle from './globalColorStyle'

const GlobalStyle = createGlobalStyle`

  :root {
    ${({ theme }) => globalColorStyle(theme)};
  }

  @font-face {
    font-family: 'Poppins-Regular';
    src: url('/fonts/poppins/Poppins-Regular.ttf') format('ttf'), url('/fonts/poppins/Poppins-Regular.ttf') format('truetype');
    font-display: swap;
  }
  

  ${reset}
  html, body {
    min-height: 100%;
    color: var(--point);
    word-break: keep-all;
    line-height: 2.6rem;
  }

  html {
    font-size: 10px !important;
  }

  body {
    font-size: 1.6rem !important;
    font-family: "Poppins-Regular", serif;
  }

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
`

export default GlobalStyle