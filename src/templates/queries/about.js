import { useStaticQuery, graphql } from 'gatsby'

const useAboutQuery = () => {
  const aboutData = useStaticQuery(graphql`
    query AboutQuery {
      allWpPage(filter: {slug: {eq: "about"}}) {
        edges {
          node {
            PersonTwo {
              heading
              text
              picture {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            Person {
              heading
              text
              picture {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return aboutData.allWpPage.edges[0].node
}

export default useAboutQuery