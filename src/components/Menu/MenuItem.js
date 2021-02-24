import React from 'react'
import { MenuLink } from './style'

const MenuItem = ({
  item,
  url,
}) => {
  return (
    <MenuLink
      to={url}
      activeClassName='active'
    >
      { item}
    </MenuLink>
  )
}

export default MenuItem