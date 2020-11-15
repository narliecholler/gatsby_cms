import React from 'react'
import Item from './style'
import PropTypes from 'prop-types'

const MenuItem = ({
  link,
  label,
  id,
}) => {
  console.log('link', link)
return (
  <Item to={link} id={id}>
    {label}
  </Item>
)}

MenuItem.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
}

export default MenuItem
