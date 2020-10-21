import React from 'react'
import PropTypes from 'prop-types'
import MenuContainer from './style'
import MenuItem from '../MenuItem'

const Menu = ({
  data,
}) => {

  console.log('data', data)
  return (
    <MenuContainer>
      { data && data.map(({label, url}) => {
      return (
        <MenuItem link={url} label={label} />
        )})
      }
    </MenuContainer>
  )
}

Menu.propTypes = {
  item: PropTypes.object,
}

export default Menu