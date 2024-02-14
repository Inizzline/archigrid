import AboutHeaderCss from "./AboutHeader.module.css"

const AboutHeader = () => {
  return (
    <div>
        <div className={AboutHeaderCss.container}>
            <div className={AboutHeaderCss.text}>
                <h2 className={AboutHeaderCss.h2}>About Us</h2>
            </div>
            <div className={`${AboutHeaderCss.line} ${AboutHeaderCss.line1}`}>
                <div className={`${AboutHeaderCss.wave} ${AboutHeaderCss.wave1}`} style={{backgroundImage: "url(images/img/wave1.png)"}}></div>
            </div>
            <div className={`${AboutHeaderCss.line} ${AboutHeaderCss.line2}`}>
                <div className={`${AboutHeaderCss.wave} ${AboutHeaderCss.wave2}`} style={{backgroundImage: "url(images/img/wave2.png)"}}></div>
            </div>
            <div className={`${AboutHeaderCss.line} ${AboutHeaderCss.line3}`}>
                <div className={`${AboutHeaderCss.wave} ${AboutHeaderCss.wave3}`} style={{backgroundImage: "url(images/img/wave3.png)"}}></div>
            </div>
        </div>
    </div>
  )
}

export default AboutHeader
