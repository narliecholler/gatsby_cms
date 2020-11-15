import React from "react"
import GlobalStyle from './style'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="layout">
        <Header />
        <Footer />
      </div>
    </ThemeProvider>
  </>
)

export default Layout
