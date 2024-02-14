import React from 'react'
import Image from 'next/image'
import { elv } from '../../../public/images'
import ElvCss from "./Elv.module.css"

const Elv = () => {
  return (
    <div className={ElvCss.mainContainer} id='elv'>
      <div className={ElvCss.container}>
        <div className={ElvCss.content}>
            <div className={ElvCss.imgDiv}>
                <Image className={ElvCss.img} src={elv} height={500} width={500} alt="An electrical low voltage"/>
            </div>
            <div className={ElvCss.textBox}>
                <h3 className={ElvCss.h3}>ELV</h3>
                <p className={ElvCss.p}>
                    We specialize in providing a wide range of extra low voltage services, including fire alarm systems, data and voice solutions, central television, CCTV, access control, and public address systems that exceed client expectations while offering affordable options that fit within their budget.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Elv
