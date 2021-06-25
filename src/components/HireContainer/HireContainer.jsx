import React from 'react'
import Heading from '../Heading'
import ImageBox from '../ImageBox'
import Button from '../Button'
import { theme } from '../../theme/theme'
import { Container, ImageWrapper } from './style'

const HireContainer = ({
  data,
}) => {
  const {
    venueone,
    venuetwo,
    venuethree,
    heading,
    text,
  } = data

  return (
    <Container>
      <Heading align='center' as='h2' text={heading} underline underlineColor={theme.color.secondary} />
      <p>{text}</p>
      <ImageWrapper>
        <ImageBox image={venueone} />
        <ImageBox image={venuetwo} />
        <ImageBox image={venuethree} />
      </ImageWrapper>
      <Button
        text='Book your venue'
        link='/contact'
        backgroundColor={theme.color.secondary}
        textColor={theme.color.primary}
        id='hireBtn'
        align='center'
      />
    </Container>
  )
}

export default HireContainer