import React from 'react'
import { Container, ContentWrapper, ImageWrapper } from './style'
import Heading from '../Heading'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from '../../theme/theme'

const Member = ({
  data,
  reverse,
}) => {
  const { heading, text, picture } = data
  const img = getImage(picture.localFile)

  return (
    <Container reverse={reverse}>
      <ContentWrapper>
        <Heading
          underline
          underlineColor={theme.color.secondary}
          as='h2'
          text={heading}
        />
        <p>{text}</p>
      </ContentWrapper>
      <ImageWrapper>
        <GatsbyImage image={img} alt='person image' />
      </ImageWrapper>
    </Container>
  )
}

export default Member

