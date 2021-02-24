import React from 'react'
import { MenuWrapper } from './style'
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive'
import MenuItem from './MenuItem'

const MenuBar = ({
  items,
  id,
}) => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px' })

  const renderMenuView = (query) => {
    if (query) {
      return (
        <Menu right>
          {items && (
            items.map(i => {
              return (
                <MenuItem
                  url={i.url === '/home/' ? '/' : i.url}
                  item={i.label}
                  key={i.id}
                />
              )
            })
          )}
        </Menu>
      )
    }
    else {
      return (
        items && (
          items.map(i => (
            <MenuItem
              url={i.url === '/home/' ? '/' : i.url}
              item={i.label}
              key={i.id}
            />
          ))
        )
      )
    }
  }

  return (
    <MenuWrapper id={id}>
      { isTablet ? renderMenuView(true) : renderMenuView()}
    </MenuWrapper>
  )
}

export default MenuBar