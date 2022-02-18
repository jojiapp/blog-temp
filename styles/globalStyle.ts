import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`

  :root {
    --point: ${({ theme }) => theme.color.point};
    --gray: ${({ theme }) => theme.color.gray};
    --light_gray: ${({ theme }) => theme.color.lightGray};
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