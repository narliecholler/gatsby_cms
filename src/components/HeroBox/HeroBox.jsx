import React from 'react'
import HeroBoxContainer from './style'
import Heading from '../Heading'
import { theme } from '../../theme/theme'


const HeroBox = ({
  heading,
  text,
  secondText,
}) => {

  return (
    <HeroBoxContainer id='heroInfo'>
      <Heading underline heading='h1' text={heading} underlineColor={theme.color.white} />
      <p>{text}</p>
      <p>{secondText}</p>
    </HeroBoxContainer>
  )
}

export default HeroBox