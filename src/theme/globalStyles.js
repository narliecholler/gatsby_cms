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
    overflow-x: hidden;
  }

  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${({ theme }) => theme.color.primary};

    h1, h2, h3, h4, h5, h6 {
      font-family: ${({ theme }) => theme.font.primary.family};
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-weight: 300;
      font-family: ${({ theme }) => theme.font.primary.family};
      color: ${({ theme }) => theme.color.black};
      line-height: 25px;
      font-size: 1rem;
    }

    #main {
      width: 80%;
      margin: auto!important;
    }




    // mobile styles 
    @media only screen and (max-width: 1024px) {
      p {
        font-size: 14px;
      }
    }
  }
`

export default GlobalStyle