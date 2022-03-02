import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import globalThemeStyle from './globalThemeStyle'
import globalFontStyle from './globalFontStyle'

// @font-face {
//   src: url('/fonts/${FontName.POPPINS}/${FontWeightName.BLACK}.ttf') format('ttf'),
//   font-display: swap
// }

const GlobalStyle = createGlobalStyle`

  ${({ theme }) => globalThemeStyle(theme)}
    // Color 일괄 적용
  ${globalFontStyle()} // 폰트 일괄 적용
  ${reset}
  html, body {
    min-height: 100%;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    color: var(--point);
    word-break: keep-all;
    line-height: 2.56rem;
    font-family: var(--font_family_content);
  }

  * {
    box-sizing: border-box;
  }

  button, a {
    all: unset;
    font: inherit;
    cursor: pointer;
    color: var(--point);
  }

  input {
    outline: none;
    border: none;
    padding: 1rem 1rem 1rem 1.5rem;
  }

  ul, li {
    list-style: none;
  }
`

export default GlobalStyle