import BackgroundImage from "gatsby-background-image"
import React from "react"

function BackgroundSection({ img, styleClass, title, children }) {
  return (
    <BackgroundImage preserveStackingContext className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

export default BackgroundSection

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
