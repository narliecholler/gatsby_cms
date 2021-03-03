import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
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
      <Footer />
    </ThemeProvider>
  </div>
)

export default Layout