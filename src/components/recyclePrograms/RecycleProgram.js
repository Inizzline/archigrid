import React from 'react'
import Image from 'next/image'
import { recycle } from '../../../public/images'
import RecycleProgramCss from "./RecycleProgram.module.css"

const RecycleProgram = () => {
  return (
    <div className={RecycleProgramCss.mainContainer} id='recycleProgram'>
      <div className={RecycleProgramCss.container}>
        <div className={RecycleProgramCss.imageDiv}>
          <Image className={RecycleProgramCss.img} src={recycle} height={500} width={500} alt='A picture'/>
        </div>
        <div className={RecycleProgramCss.text}>
          <h2 className={RecycleProgramCss.h2}>Recycle Programs</h2>
          <p className={RecycleProgramCss.p}>
            We are committed to promoting sustainable waste management practices, and recycling plays a crucial role in achieving this goal. Our organization offers comprehensive recycling programs that cover a wide range of materials, including paper, plastic, glass, and metal. We help our clients reduce waste sent to landfills and contribute to a more sustainable future.
          </p>
        </div>
      </div>
      {/* <div className={RecycleProgramCss.btnDiv}>
        <button className={RecycleProgramCss.btn}>See More</button>
      </div> */}
    </div>
  )
}

export default RecycleProgram;
