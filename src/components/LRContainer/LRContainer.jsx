import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Heading from '../Heading'
import Button from '../Button'
import { theme } from '../../theme/theme'

import Container from './style'

const LRContainer = ({
  className,
}) => {

  const data = useStaticQuery(graphql`
    query {
      allWpPage(filter: {slug: {eq: "home"}}) {
        edges {
          node {
            LRContainer {
              heading
              text
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const LRHeading = data.allWpPage.edges[0].node.LRContainer.heading
  const LRText = data.allWpPage.edges[0].node.LRContainer.text
  const LRImage = data.allWpPage.edges[0].node.LRContainer.image.localFile.childImageSharp.gatsbyImageData

  return (
    <Container className={className}>
      <div className="LRContent">
        <Heading heading='h2' text={LRHeading} underline underlineColor={theme.color.secondary} />
        <p>{LRText}</p>
        <Button id="repBtn" link='/repertoire' text='view repertoire' backgroundColor={theme.color.secondary} textColor={theme.color.primary} />
      </div>
      <div className="LRImage">
        <GatsbyImage image={LRImage} />
      </div>
    </Container>
  )
}

export default LRContainer
