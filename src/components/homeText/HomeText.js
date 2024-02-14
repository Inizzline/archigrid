"use client"
import HomeTextCss from "./HomeText.module.css"
import { FcEngineering } from "react-icons/fc";
import Fade from 'react-reveal/Fade';

const HomeText = () => {
 
  return (
    <div className={HomeTextCss.container}>
      <div className={HomeTextCss.h3Div}>
        <Fade left duration={2000}>
          <h3 className={HomeTextCss.h3}>About The Company</h3>
        </Fade>
      </div>
      <div className={HomeTextCss.empty}><FcEngineering className={HomeTextCss.emptyIcon}/></div>
      <div className={HomeTextCss.text}>
          <Fade right duration={2000}>
            <p className={HomeTextCss.p}>
              At Archigrid Construction Limited, we pride ourselves on being at the forefront of the industry, constantly adapting to the latest trends in building services and facility maintenance. We utilize the best available cost-effective technology to provide our clients with durable, functional, and high-quality deliverables. 
            <br/>
              We hold ourselves to the highest ethical standards in all our professional obligations. Our promise to our clients is to consistently deliver projects that meet the highest attainable standards.
            </p>
          </Fade>
      </div>
    </div>
  )
}

export default HomeText;
