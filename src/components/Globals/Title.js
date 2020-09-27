import React from "react"

function Title({ title }) {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1 className="display-4 font-weight-bold text-capitalize">{title}</h1>
      </div>
    </div>
  )
}

export default Title
