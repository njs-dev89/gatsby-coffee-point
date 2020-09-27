import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Globals/Info"

const AboutPage = ({ data }) => (
  <Layout>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <Info />
  </Layout>
)

export default AboutPage

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
