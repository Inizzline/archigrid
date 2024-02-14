"use client"
import React from 'react'
import { MdHealthAndSafety } from "react-icons/md";
import HseCss from "./Hse.module.css"
import Image from 'next/image';
import { logo } from '../../../public/images';
import Fade from 'react-reveal/Fade';

const Hse = () => {
  return (
    <div className={HseCss.mainContainer} id='hse'>
      <div className={HseCss.container}>
        <Fade left duration={2000}>
          <div className={HseCss.iconDiv}>
            <MdHealthAndSafety className={HseCss.icon} size={60}/>
            <span className={HseCss.span}>
              <h4 className={HseCss.spanHeader}>POLICY</h4>
            </span>
          </div>
        </Fade>
        <Fade right duration={2000}>
        <div className={HseCss.circleSpin}>
          <div className={HseCss.circleSpinContent}>
            <Image className={HseCss.circleSpinImage} src={logo} width={100}/>
          </div>
        </div>
        </Fade>
        <div className={HseCss.circle}></div>
        <Fade up duration={2000}>
          <div className={HseCss.text}>
            <h2 className={HseCss.h2}>HSE POLICY</h2>
            <p className={HseCss.p}>
              Archigrid Construction Limited safety policy is a comprehensive set of guidelines and procedures designed to protect workers,
              <br/>
              contractors, and the public from potential hazards and risks associated with construction activities.
              <br/>
              <br/>
              Our objective of a safety policy is to create a safe and healthy work environment, ensuring that all employees and visitors can 
              <br/>
              engage in construction activities without any harm to themselves or others.
              <br/>
              <br/>
              The policy includes measures to identify and assess hazards, implement controls and safety measures, provide training and education,
              <br/>
              establish communication channels, and enforce safety compliance throughout the organization.
              <br/>
              <br/>
              Firstly, our safety policy outlines the responsibilities and roles of all personnel involved in construction projects. This includes the management
              <br/>
              team, supervisors, contractors, and workers on site. The policy establishes a clear line of communication, where everyone is aware of
              <br/>
              their responsibilities, reporting procedures, and the resources available to ensure the implementation of safety measures.
              <br/>
              <br/>
              It emphasizes the importance of strict adherence to health and safety regulations and encourages open dialogue and feedback to continuously
              <br/>
              improve safety measures and address emerging concerns promptly.
              <br/>
              <br/>
              Secondly, the policy addresses the identification and management of potential hazards. The construction industry is inherently risky, with various
              <br/>
              hazards ranging from working at heights, operating heavy machinery, exposure to hazardous materials, and working in confined spaces, among others.
              <br/>
              <br/>
              Our safety policy helps in systematically identifying and assessing these risks, and implementing control measures to mitigate them.
              <br/>
              <br/>
              This policy also emphasizes the importance of providing necessary personal protective equipment (PPE) and establishing protocols for its proper usage.
            </p>
          </div>
        </Fade>
        {/* <div className={HseCss.iconSpinDiv}>
          <div className={HseCss.spinLogo}></div>
          <div className={HseCss.textSpinDiv}>
            <p className={HseCss.textSpin}>Health & Safety Policy - Archigrid Construction Ltd</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Hse
