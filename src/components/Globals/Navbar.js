import { Link } from "gatsby"
import React, { Component } from "react"
import { SiCoffeescript } from "react-icons/si"
import { RiShoppingCartLine } from "react-icons/ri"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    navClasses: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        linkText: "home",
      },
      {
        id: 2,
        path: "/about",
        linkText: "about",
      },
      {
        id: 3,
        path: "/contact",
        linkText: "contact",
      },
    ],
  }

  handleClick = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          navClasses: "collapse navbar-collapse",
        })
      : this.setState({
          navbarOpen: true,
          navClasses: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <SiCoffeescript className="cart-icon" /> Coffee Point
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            onClick={this.handleClick}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className={this.state.navClasses}>
            <ul className="navbar-nav ml-sm-auto">
              {this.state.links.map(link => (
                <li className="nav-item" kay={link.id}>
                  <Link className="nav-link text-capitalize" to={link.path}>
                    {link.linkText}
                  </Link>
                </li>
              ))}
              <li className="nav-item ml-5">
                <Link className="nav-link">
                  <RiShoppingCartLine className="cart-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
