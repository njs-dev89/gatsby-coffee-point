import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from "./Globals/Navbar"
import Footer from "./Globals/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
