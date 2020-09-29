import { StaticQuery, graphql } from "gatsby"
import React from "react"
import Title from "../Globals/Title"
import Product from "./Product"

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      nodes {
        id
        title
        price
        image {
          fluid {
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

function Products() {
  return (
    <div>
      <StaticQuery
        query={getProducts}
        render={data => {
          return (
            <section className="py-5">
              <div className="container">
                <Title title="our products" />
                <div className="row">
                  {data.products.nodes.map(product => {
                    return <Product key={product.id} product={product} />
                  })}
                </div>
              </div>
            </section>
          )
        }}
      />
    </div>
  )
}

export default Products
