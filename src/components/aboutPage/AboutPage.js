
import AboutCss from "./AboutPage.module.css";
import AboutText from "@/utilities/aboutText/AboutText";
import Statements from "@/utilities/statements/Statements";
import CompProfile from "../compProfile/CompProfile";

const AboutPage = () => {
  return (
    <div className={AboutCss.mainContainer}>
        <AboutText/>
        <Statements/>
        <CompProfile/>
    </div>
  )
}

export default AboutPage
