import React from 'react'
import HeaderContainer from './style'
import MenuBar from '../Menu'
import { useStaticQuery, graphql } from 'gatsby'

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
      <div id="logo">logo</div>
      <MenuBar id="menu" items={menuItemsObj} />
    </HeaderContainer>
  )
}

export default Header