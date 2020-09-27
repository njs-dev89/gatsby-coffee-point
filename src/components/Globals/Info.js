import { Link } from "gatsby"
import React from "react"
import Title from "./Title"

function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam officia totam alias dicta earum modi sunt at
              voluptatibus. Sapiente sed dicta odio dolore deleniti iure
              officiis aperiam totam dolorem, rerum pariatur nobis sunt aliquid
              optio at facilis ipsa. Laboriosam eius fugit ratione eos ut
              delectus reiciendis quis est eligendi culpa.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                About page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
