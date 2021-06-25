import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import HeroContainer from './style'
import HeroBox from '../HeroBox'

const HeroImage = ({
  data,
  image,
}) => {

  const { heroimage: { localFile } } = image
  const { heroheading, heroparaone, heroparatwo } = data

  const heroImage = getImage(localFile)

  return (
    <HeroContainer>
      <div id='heroImg'>
        <GatsbyImage image={heroImage} alt='hero image' />
      </div>
      <HeroBox heading={heroheading} text={heroparaone} secondText={heroparatwo} />
    </HeroContainer>
  )
}


export default HeroImage