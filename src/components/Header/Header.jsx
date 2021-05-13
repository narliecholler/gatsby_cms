import React from 'react'
import HeaderContainer from './style'
import MenuBar from '../Menu'
import { useStaticQuery, graphql } from 'gatsby'
import Logo from '../Logo'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      {
        allWpMenu(filter: {slug: {eq: "main-menu"}}) {
          edges {
            node {
              slug
              menuItems {
                nodes {
                  url
                  label
                  id
                }
              }
            }
          }
        }
      }
    `
  )

  const menuItemsObj = data.allWpMenu.edges[0].node.menuItems.nodes

  return (
    <HeaderContainer>
      <Logo
        text='Boticelli Duet'
        color='#862041'
        size='30px'
      />
      <MenuBar id="menu" items={menuItemsObj} />
    </HeaderContainer>
  )
}

export default Header