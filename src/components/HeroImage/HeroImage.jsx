import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HeroContainer from './style'
import { GatsbyImage } from 'gatsby-plugin-image'
import HeroBox from '../HeroBox'

const HeroImage = () => {

  const data = useStaticQuery(graphql`
    query HeroImageQuery {
      allWpPage(filter: {slug: {eq: "home"}}) {
        edges {
          node {
            HeroImage {
              heroimage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
            HeroBox {
              heading
              text
              text2
            }
          }
        }
      }
    }
  `)

  const image = data.allWpPage.edges[0].node.HeroImage.heroimage.localFile.childImageSharp.gatsbyImageData
  const heading = data.allWpPage.edges[0].node.HeroBox.heading
  const text = data.allWpPage.edges[0].node.HeroBox.text
  const secondText = data.allWpPage.edges[0].node.HeroBox.text2

  return (
    <HeroContainer>
      <div id='heroImg'>
        <GatsbyImage image={image} alt='hero image' />
      </div>
      <HeroBox heading={heading} text={text} secondText={secondText} />
    </HeroContainer>
  )
}


export default HeroImage