import LogoSliderData from "@/utilities/logoSliderData/LogoSliderData";
import LogoSliderCss from "./LogoSlider.module.css"

const LogoSlider = () => {
  return (
    <div className={LogoSliderCss.logos}>
      <div className={LogoSliderCss.logoSlider}>
        {LogoSliderData.map((item, index) => {
            return(
                <img key={index} className={LogoSliderCss.img} src={item.logo}/>
            )
        })}
      </div>
      <div className={LogoSliderCss.logoSlider}>
        {LogoSliderData.map((item, index) => {
            return(
                <img key={index} className={LogoSliderCss.img} src={item.logo}/>
            )
        })}
      </div>
    </div>
  )
}

export default LogoSlider;
