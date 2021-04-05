import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ImageBoxContainer, OverlayHeading } from './style'

const ImageBox = ({
  image,
  id,
}) => {

  return (
    <ImageBoxContainer>
      <span className="venuOverlay"></span>
      <OverlayHeading className="boxHeading" text='Weddings' heading='h3' />
      <GatsbyImage image={image} />
    </ImageBoxContainer>
  )
}

export default ImageBox