import React from 'react'
import QualityCss from "./Quality.module.css"

const Quality = () => {
  return (
    <div className={QualityCss.container}>
      <h3 className={QualityCss.h3}>Quality</h3>
      <p className={QualityCss.p}>
        Itact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem more-or-less normal distribution of letters,
      </p>
    </div>
  )
}

export default Quality;
