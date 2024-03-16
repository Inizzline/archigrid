"use client"
import React from 'react'
import Image from 'next/image'
import { recycle } from '../../../public/images'
import RecycleProgramCss from "./RecycleProgram.module.css"
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/navigation'

const RecycleProgram = () => {

  const router = useRouter();

  return (
    <div className={RecycleProgramCss.mainContainer} id='recycleProgram'>
      <div className={RecycleProgramCss.container}>
        <Fade left duration={2000}>
          <div className={RecycleProgramCss.imageDiv}>
            <Image className={RecycleProgramCss.img} src={recycle} height={500} width={500} alt='A picture'/>
          </div>
        </Fade>
        <Fade right duration={2000}>
          <div className={RecycleProgramCss.text}>
            <h2 className={RecycleProgramCss.h2}>Recycle Programs</h2>
            <p className={RecycleProgramCss.p}>
              We are committed to promoting sustainable waste management practices, and recycling plays a crucial role in achieving this goal. Our organization offers comprehensive recycling programs that cover a wide range of materials, including paper, plastic, glass, and metal. We help our clients reduce waste sent to landfills and contribute to a more sustainable future.
            </p>
          </div>
        </Fade>
      </div>
      <button className={RecycleProgramCss.btn} onClick={()=>router.push("/services#oilandgas")} >Back</button>
    </div>
  )
}

export default RecycleProgram;
