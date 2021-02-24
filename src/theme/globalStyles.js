import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.font.primary.family};
    font-size: 16px;
    font-weight: 500;
    color: #000;
  }

body {
  line-height: 1.5;
  letter-spacing: 0;
  background-color: ${({ theme }) => theme.color.primary}; 
  #layout {
    width: 80%;
    margin: auto!important;
  }
}
`

export default GlobalStyle