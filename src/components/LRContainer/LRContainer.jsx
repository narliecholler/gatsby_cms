import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Heading from '../Heading'
import Button from '../Button'
import { theme } from '../../theme/theme'

import { Container, ContentWrapper, ImageWrapper } from './style'

const LRContainer = ({
  data,
}) => {
  const { lrheading, lrtext, lrimage } = data
  const image = getImage(lrimage.localFile)

  return (
    <Container>
      <ContentWrapper className="LRContent">
        <Heading as='h2' text={lrheading} underline underlineColor={theme.color.secondary} />
        <p>{lrtext}</p>
        <Button id="repBtn" link='/repertoire' text='view repertoire' backgroundColor={theme.color.secondary} textColor={theme.color.primary} />
      </ContentWrapper>
      <ImageWrapper className="LRImage">
        <GatsbyImage image={image} alt='LR image' />
      </ImageWrapper>
    </Container>
  )
}

export default LRContainer
