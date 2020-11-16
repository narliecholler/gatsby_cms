import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const Logo = ({ data }) => (
  <div>
    <Img fixed={data.file.childImageSharp.fixed} />
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "assets/images/logo.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`