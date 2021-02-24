import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../Header'
import { theme } from '../../theme/theme'
import GlobalStyle from '../../theme/globalStyles'

const Layout = ({
  children,
}) => (
  <div id='layout'>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  </div>
)

export default Layout