"use client"
import React from 'react'
import { SiManageiq } from "react-icons/si";
import Image from 'next/image';
import { logo } from '../../../public/images';
import QmsCss from "./Qms.module.css"
import Fade from 'react-reveal/Fade';

const Qms = () => {
  return (
    <div className={QmsCss.mainContainer} id='qms'>
      <div className={QmsCss.container}>
        <Fade left duration={2000}>
            <div className={QmsCss.iconDiv}>
              <SiManageiq  className={QmsCss.icon} size={60}/>
              <span className={QmsCss.span}>
                <h4 className={QmsCss.spanHeader}>POLICY</h4>
              </span>
            </div>
          </Fade>
          <Fade right duration={2000}>
            <div className={QmsCss.circleSpin}>
              <div className={QmsCss.circleSpinContent}>
                <Image className={QmsCss.circleSpinImage} src={logo} width={100}/>
              </div>
            </div>
          </Fade>
        <div className={QmsCss.design}></div>
        <Fade up duration={2000}>
          <div className={QmsCss.text}>
            <h2 className={QmsCss.h2}>QUALITY POLICY</h2>
            <p className={QmsCss.p}>
            <span className={QmsCss.pSapn}>Archigrid Construction Limited,</span> we pride ourselves on being at the forefront of the industry, constantly adapting to the latest trends
            <br/>
            in building services and best available cost-effective technology to provide our clients with durable, functional, and high-quality deliverables
            <br/>
            that meets their expectation without compromising the ethical standards in all our professional obligations and safety requirement.
            <br/>
            <br/>
            We shall attain our quality objectives by:
            <br/>
            <br/>
            <span className={QmsCss.pSapn}>• USE OF quality materials and resources:</span> To ensure that only top-quality materials are used in construction projects and that these materials
            <br/>
            are sourced from trusted suppliers. Additionally, we shall invest in proper machinery and equipment to ensure the construction process is efficient
            <br/>
            and of high quality.
            <br/>
            <br/>
            <span className={QmsCss.pSapn}>• Engage Professional and skilled workers:</span> To prioritize hiring and training employees that meet necessary qualifications and expertise in
            <br/> 
            construction. To provide regular training and professional development programs to ensure that employees stay updated with the latest
            <br/>
            techniques and technologies in the industry.
            <br/>
            <br/>
            <span className={QmsCss.pSapn}>• Effective communication:</span> To establish and maintaining a clear communication between our internal and external customers so as to address
            <br/> 
            any concerns, provide feedback, and make necessary adjustments and ensure quality expectations are meet.
            <br/>
            <br/>
            <span className={QmsCss.pSapn}>• continuous improvement:</span> This includes regularly reviewing and evaluating our quality standards and processes and implementing necessary
            <br/> 
            changes to improve overall performance.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Qms
