import { useStaticQuery, graphql } from 'gatsby'

export const useHomeQuery = () => {
  const homeData = useStaticQuery(graphql`
    query home {
      allWpPage(filter: {slug: {eq: "home"}}) {
        edges {
          node {
            HeroImage {
              heroimage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                  }
                }
              }
            }
            HeroBox {
              heroheading
              heroparaone
              heroparatwo
            }
            LR {
              lrheading
              lrtext
              lrimage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                  }
                }
              }
            }
            TheVenues {
              heading
              text
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
            }
          }
        }
      }
    }
  `)
  return homeData.allWpPage.edges[0].node
}