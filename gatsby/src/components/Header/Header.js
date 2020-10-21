import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import HeaderContainer from './style'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
// import MenuItem from '../MenuItem'
// import GatsbyLogo from "../assets/svg/gatsby.inline.svg"

const Header = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-menu"}) {
        name
        menuItems {
          nodes {
            label
            url
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  const filterLast = (arr) => arr.filter(obj => obj.label !== 'Book Us')

  const menuItems = filterLast(wpMenu.menuItems.nodes)

  return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
    <HeaderContainer>
      <Menu data={menuItems} />
      <div className="bookSection">
        <MenuItem id='bookLink' url='/book-us' label="make booking" />
        <div className="socialSection">

        </div>
      </div>
    </HeaderContainer>
  ) : null
}

export default Header
