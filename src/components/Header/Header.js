import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import HeaderContainer from './style'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import Logo from '../Logo'
// import MenuItem from '../MenuItem'
// import GatsbyLogo from "../assets/svg/gatsby.inline.svg"

const Header = () => {
  const { allWpMenu } = useStaticQuery(graphql`
    {
      allWpMenu {
        nodes {
          menuItems {
            nodes {
              url
              label
            }
          }
          name
        }
      }
    }
  `)

  console.log('wpmenu', allWpMenu.nodes[0].menuItems.nodes)

  const removeLast = (arr) => arr.filter(item => item.label !== 'Book')

  const menuItems = removeLast(allWpMenu.nodes[0].menuItems.nodes)

  console.log('YY', menuItems)

  return !!allWpMenu && !!allWpMenu.nodes[0].menuItems && !!allWpMenu.nodes[0].menuItems.nodes ? (
    <HeaderContainer>
      <Logo />
      <Menu data={menuItems.reverse()} />
      <div className="bookSection">
        <MenuItem id='bookLink' url='/book-us' label="make booking" />
        <div className="socialSection">

        </div>
      </div>
    </HeaderContainer>
  ) : null
}

export default Header
