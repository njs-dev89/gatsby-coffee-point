import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(item => item.category)
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.nodes,
      coffeeItems: props.items.nodes,
      categories: getCategories(props.items.nodes),
    }
  }

  handleItems = category => {
    console.log(category)
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { coffeeItems: tempItems }
      })
    } else {
      let items = tempItems.filter(item => item.category === category)
      this.setState(() => {
        return { coffeeItems: items }
      })
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of our menu" />
            <div className="row mb-3">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, idx) => (
                  <button
                    type="button"
                    key={idx}
                    className="btn btn-yellow m-3 text-capitalize"
                    onClick={() => this.handleItems(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="row">
              {this.state.coffeeItems.map(node => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                          <small>{node.title}</small>
                        </h6>
                        <h6 className="mb-0 text-yellow">
                          <small>${node.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                There are no items to display
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
