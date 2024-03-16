"use client"
import React, { useState } from 'react'
import FaqCss from "./Faq.module.css"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Question_mark from "../Question_mark"
import FaqData from '@/utilities/faqData/FaqData';
import Fade from 'react-reveal/Fade';

const Faq = () => {

  const [ selected, setSelected ] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }
  return (
    <div className={FaqCss.container}>
      <div className={FaqCss.faqDiv}>
      <Fade left duration={3000}><hr className={FaqCss.hrTop}/></Fade>
        <Fade right duration={2000}><h1 className={FaqCss.h1}>FAQ</h1></Fade>
        <Fade right duration={3000}><hr className={FaqCss.hrBottom}/></Fade>
      </div>
      <div className={FaqCss.leftPart}>
        <Canvas>
          <Stage environment={"city"} intensity={0.6}>
            <Question_mark/>
          </Stage>
          <OrbitControls enableZoom={false} autoRotate/>
        </Canvas>
      </div>
      <div className={FaqCss.rightPart}>
        <div className={FaqCss.accordion}>
        <Fade right duration={2000}>
          {FaqData.map((item, i) => (
            <div className={FaqCss.item} key={i}>
              <div className={FaqCss.title} onClick={() => toggle(i)}>
                <h2 className={FaqCss.h2}>{item.Question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? `${FaqCss.content} ${FaqCss.show}` : `${FaqCss.content}`}>
                {item.Answer}
              </div>
            </div>
          ))}
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Faq;
