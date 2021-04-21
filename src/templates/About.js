import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import PageHeading from '../components/PageHeading'
import Person from '../components/Person'

const About = () => {

  const data = useStaticQuery(graphql`
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

  const personOne = data.allWpPage.edges[0].node.Person
  const personeTwo = data.allWpPage.edges[0].node.PersonTwo
  const personOneImg = data.allWpPage.edges[0].node.Person.picture.localFile.childImageSharp.gatsbyImageData
  const personTwoImg = data.allWpPage.edges[0].node.PersonTwo.picture.localFile.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <PageHeading
        pageHeading='Who Are We?'
      />
      <Person data={personOne} image={personOneImg} />
      <Person data={personeTwo} image={personTwoImg} reverse />
    </Layout>
  )
}

export default About
