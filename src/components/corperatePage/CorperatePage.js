import React from 'react'
import CorperatePageCss from "./CorperatePage.module.css"

const CorperatePage = () => {
  return (
    <div className={CorperatePageCss.container}>
        <div className={CorperatePageCss.text}>
            <h2 className={CorperatePageCss.h2}>Corperate</h2>
        </div>
        <div className={`${CorperatePageCss.line} ${CorperatePageCss.line1}`}>
            <div className={`${CorperatePageCss.wave} ${CorperatePageCss.wave1}`} style={{backgroundImage: "url(images/img/wave1.png)"}}></div>
        </div>
        <div className={`${CorperatePageCss.line} ${CorperatePageCss.line2}`}>
            <div className={`${CorperatePageCss.wave} ${CorperatePageCss.wave2}`} style={{backgroundImage: "url(images/img/wave2.png)"}}></div>
        </div>
        <div className={`${CorperatePageCss.line} ${CorperatePageCss.line3}`}>
            <div className={`${CorperatePageCss.wave} ${CorperatePageCss.wave3}`} style={{backgroundImage: "url(images/img/wave3.png)"}}></div>
        </div>
    </div>
  )
}

export default CorperatePage;
