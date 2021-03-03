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
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${({ theme }) => theme.color.primary};

    #layout {
      width: 80%;
      margin: auto!important;
    }
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: ${({ theme }) => theme.font.primary.family};
  }
`

export default GlobalStyle