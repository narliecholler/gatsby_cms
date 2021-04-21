import React from 'react'
import { PersonContainer, TextCol, ImageCol } from './style'
import Heading from '../Heading'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

const Person = ({
  data,
  image,
  reverse,
}) => {

  console.log(data)

  const heading = data.heading
  const text = data.text

  return (
    <PersonContainer reverse={reverse}>
      <TextCol>
        <Heading
          heading='h2'
          text={heading}
        />
        <p>{text}</p>
      </TextCol>
      <ImageCol>
        <GatsbyImage image={image} />
      </ImageCol>
    </PersonContainer>
  )
}

export default Person