import { createGlobalStyle } from 'styled-components'
import theme from '../../theme'

console.log(theme)
const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${theme.fonts.primary};
    font-weight: 400;
    background-color: ${theme.colours.primary};
    color: ${theme.colours.tertiary};
    height: 100%;
  }

  .layout {
    width: 90%;
    margin: auto;

    @media only screen and (max-width: 1024px) {
      width: 85%
    }

    @media only screen and (max-width: 768px) {
      width: 90%
    }
  }
`

export default GlobalStyle

