import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Wrapper from './style'
import Heading from '../Heading'
import ImageBox from '../ImageBox'
import Button from '../Button'
import { theme } from '../../theme/theme'

const HireContainer = ({

}) => {

  const data = useStaticQuery(graphql`
    query HireContainerQuery {
        allWpPage(filter: { slug: { eq: "home" } }) {
          edges {
            node {
              TheVenues {
                venueone {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(layout: CONSTRAINED)
                    }
                  }
                }
                venuetwo {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(layout: CONSTRAINED)
                    }
                  }
                }
                venuethree {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(layout: CONSTRAINED)
                    }
                  }
                }
                heading
                text
              }
            }
          }
        }
     }
   `)

  const imgOne = data.allWpPage.edges[0].node.TheVenues.venueone.localFile.childImageSharp.gatsbyImageData
  const imgTwo = data.allWpPage.edges[0].node.TheVenues.venuetwo.localFile.childImageSharp.gatsbyImageData
  const imgThree = data.allWpPage.edges[0].node.TheVenues.venuethree.localFile.childImageSharp.gatsbyImageData
  // const imgFour = data.allWpPage.edges[0].node.TheVenues.venuefour.localFile.childImageSharp.gatsbyImageData
  const title = data.allWpPage.edges[0].node.TheVenues.heading
  const text = data.allWpPage.edges[0].node.TheVenues.text


  return (
    <Wrapper>
      <Heading align='center' heading='h2' text={title} underlineColor={theme.color.primary} />
      <p>{text}</p>
      <div className="venueImgs">
        <ImageBox image={imgOne} />
        <ImageBox image={imgTwo} />
        <ImageBox image={imgThree} />
      </div>
      <Button
        text='Book your venue'
        link='/contact'
        backgroundColor={theme.color.secondary}
        textColor={theme.color.primary}
        id='hireBtn'
        align='center'
      />
    </Wrapper>
  )
}

export default HireContainer