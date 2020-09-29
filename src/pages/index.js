import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Globals/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"
import Contact from "../components/Home/Contact"

const IndexPage = ({ data }) => (
  <Layout>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Coffee Point"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu: allContentfulCoffeeItem {
      nodes {
        id
        title
        price
        description {
          description
        }
        category
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`
