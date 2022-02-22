import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import globalColorStyle from './globalColorStyle'
import globalFontStyle, { FontFamily, FontName, FontWeightName } from './globalFontStyle'

const GlobalStyle = createGlobalStyle`

  ${({ theme }) => globalColorStyle(theme)} // Color 일괄 적용
  ${globalFontStyle(FontName.NOTOSANSKR)} // 폰트 일괄 적용
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
    font-family: ${FontFamily.of(FontName.NOTOSANSKR, FontWeightName.BLACK).getFontFamily()}, serif;
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