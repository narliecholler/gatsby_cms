import React from 'react'
import { BtnContainer, Btn } from './style'

const Button = ({
  text,
  link,
  backgroundColor,
  textColor,
  id,
  align,
}) => {

  return (
    <BtnContainer id={id} align={align}>
      <Btn
        background={backgroundColor}
        color={textColor}
        to={link}
      >
        {text}
      </Btn>
    </BtnContainer>
  )
}

export default Button