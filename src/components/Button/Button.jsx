import React from 'react'
import { BtnContainer, Btn } from './style'

const Button = ({
  text,
  type,
  link,
  backgroundColor,
  textColor,
  id,
  align,
}) => {

  return (
    <BtnContainer id={id} align={align}>
      <Btn
        data-testid={id}
        background={backgroundColor}
        color={textColor}
        to={link}
        type={type}
      >
        {text}
      </Btn>
    </BtnContainer>
  )
}

export default Button