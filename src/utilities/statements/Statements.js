"use client"
import Cards from "@/components/cards/Cards"
import StatementCss from "./Statements.module.css"
import VisionAndMissionData from "../ourVis&MisData/Vision&MissionData"
import { useState } from "react"
import Fade from 'react-reveal/Fade';

const Statements = (i) => {

    const [isOpen, setIsOpen] = useState(false);
    const [ selected, setSelected ] = useState(false);
    const [ check, setCheck ] = useState(false);


    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const toggleTwo = () => {
        setSelected(!selected);
    }
    
  return (
    <div className={StatementCss.mainContainer}>
        <Fade left duration={2000}>
            <div className={StatementCss.container}>
                <h1 className={StatementCss.h1}>Our Vision</h1>
                <p className={isOpen ? `${StatementCss.show}` : `${StatementCss.p}`}>
                    Our vision is to be a leading construction company, renowned for delivering exceptional quality, innovation,
                    and value to our clients. We strive to be the preferred choice for construction projects, consistently exceeding expectations and setting new industry standards. Through our unwavering commitment to excellence, we aim to leave a lasting impact on the built environment, enhancing communities and transforming lives.
                </p>
                <button onClick={() => toggle()} className={StatementCss.btn}>{isOpen ? "Read Less" : "Read More"}</button>
            </div>
        </Fade>
        <Fade right duration={2000}>
            <div className={StatementCss.container}>
                <h1 className={StatementCss.h1}>Our Mission</h1>
                <p className={selected ? `${StatementCss.show}` : `${StatementCss.p}`}>
                    At AGRCIGRID CONSTRUCTION LIMITED, our mission is to provide unparalleled construction services, driven by a relentless pursuit of excellence.
                    We are dedicated to delivering projects on time, within budget, and to the highest standards of quality and safety. By fostering a culture of collaboration, integrity, and innovation, we aim to build long-term relationships with our clients, partners, and stakeholders.Our mission is to create sustainable and enduring structures that enhance the well-being of individuals and communities alike. By articulating a compelling vision and mission, we inspire our employees to strive for greatness and align their efforts towards a common purpose. These statements serve as a compass, guiding our decision-making processes and ensuring that we remain focused on our core values and objectives.
                </p>
                <button onClick={() => toggleTwo()} className={StatementCss.btn}>{selected ? "Read Less" : "Read More"}</button>
            </div>
        </Fade>
    </div>
    // <div className={StatementCss.mission}>
    //     <div>
    //         <h1 className={StatementCss.missionH1}>Our Statements</h1>
    //         <section className={StatementCss.missionSection}>
    //             {VisionAndMissionData.map((item, index) => {
    //                 return(
    //                     <Cards key={index} item={item}/>
    //                 )
    //             })}
    //         </section>
    //     </div>
    // </div>
  )
}

export default Statements
