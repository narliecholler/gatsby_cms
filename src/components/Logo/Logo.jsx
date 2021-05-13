import React from 'react'
import LogoWrapper from './style'

const Logo = ({
  color,
  size,
  text,
}) => {
  return (
    <LogoWrapper color={color} size={size}>
      <p>{text}</p>
    </LogoWrapper>
  )
}

export default Logo