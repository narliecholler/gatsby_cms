import React from 'react'
import {
  Container,
  HeadingWrapper,
  Title,
  Underline,
} from './style'

const Heading = ({
  as,
  text,
  underline,
  underlineColor,
  align,
}) => (
  <Container>
    <HeadingWrapper align={align}>
      <Title as={as}>{text}</Title>
      {underline && <Underline color={underlineColor} />}
    </HeadingWrapper>
  </Container>
)

export default Heading