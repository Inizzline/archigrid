"use client"
import AboutTextCss from "./AboutText.module.css"
import Fade from 'react-reveal/Fade';

const AboutText = () => {
  return (
    <Fade up duration={2000}>
      <div className={AboutTextCss.container}>
        <div className={AboutTextCss.innerContainer}>
          <h1 className={AboutTextCss.h1}>Who We Are</h1>
          <p className={AboutTextCss.p}>
            Archigrid Construction Limited is a premier building, heavy engineering, and maintenance specialist company in Nigeria. Founded in 2010, we offer engineering solutions in civil, heavy engineering, mechanical, electrical, and plumbing for projects and facilities maintenance services. Our head office is located in Lagos, with a branch office in Port Harcourt.
            <br/> 
            Our expertise in engineering services extends to design, development, construction, management, and other peripheral property-oriented services. We have a diverse range of skills and a strong commitment to client satisfaction, prompt service delivery, and an unwavering dedication to quality and safety.
          </p>
        </div>
      </div>
    </Fade>
  )
}

export default AboutText
