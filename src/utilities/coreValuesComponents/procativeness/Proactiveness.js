import React from 'react'
import ProactivenessCss from "./Proactiveness.module.css"

const Proactiveness = () => {
  return (
    <div className={ProactivenessCss.container}>
      <h3 className={ProactivenessCss.h3}>Proactiveness</h3>
      <p className={ProactivenessCss.p}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it hasn of letters,
      </p>
    </div>
  )
}

export default Proactiveness;
