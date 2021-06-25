import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ImageBoxContainer from './style'

const ImageBox = ({
  image,
}) => {
  const img = getImage(image.localFile)

  return (
    <ImageBoxContainer>
      <GatsbyImage image={img} alt='venue' />
    </ImageBoxContainer>
  )
}

export default ImageBox