"use client"
import SolutionsProviderCss from "./SolutionProvider.module.css"
import Fade from 'react-reveal/Fade';

const coreValuesData = [
  "Integrity",
  "Quality",
  "Safety",
  "Innovation",
  "Proactiveness"
]

const SolutionProvider = () => {
  
  return (
    <div>
    <h1 className={SolutionsProviderCss.h1}>Our Core Values</h1>
      <div className={SolutionsProviderCss.mainContainer}>
        <Fade left duration={2000}>
          <div className={SolutionsProviderCss.container}>
            <h3 className={SolutionsProviderCss.h3}>Integrity</h3>
            <p className={SolutionsProviderCss.p}>
              Our Integrity encompasses honesty, transparency, and ethical behavior. It means conducting business with the utmost professionalism, adhering to legal and regulatory requirements, and treating clients, employees, and stakeholders with respect and fairness.
            </p>
          </div>
        </Fade>
        <Fade right duration={2000}>
          <div className={SolutionsProviderCss.container}>
            <h3 className={SolutionsProviderCss.h3}>Quality</h3>
            <p className={SolutionsProviderCss.p}>
              Our Quality encompasses the use of superior materials, adherence to industry standards, meticulous craftsmanship, and attention to detail.
            </p>
          </div>
        </Fade>
        <Fade left duration={2000}>
          <div className={SolutionsProviderCss.container}>
            <h3 className={SolutionsProviderCss.h3}>Safety</h3>
            <p className={SolutionsProviderCss.p}>
              Our safety prioritizes the well-being and security of all individuals involved in construction projects, including workers, clients, and the general public.
            </p>
          </div>
        </Fade>
        <Fade right duration={2000}>
          <div className={SolutionsProviderCss.container}>
            <h3 className={SolutionsProviderCss.h3}>Innovation</h3>
            <p className={SolutionsProviderCss.p}>
              Our innovation is embracing new technologies, materials, and methodologies that increased efficiency, productivity, and cost-effectiveness that meet the evolving needs of its clients and stay ahead of the competition.
            </p>
          </div>
        </Fade>
        <Fade up duration={2000}>
          <div className={SolutionsProviderCss.container}>
            <h3 className={SolutionsProviderCss.h3}>Proactiveness</h3>
            <p className={SolutionsProviderCss.p}>
              Anticipating potential issues and communicate and collaboration with clients, suppliers, and other stakeholders and taking preventive measures that mitigate risks, minimize delays, and maximize team satisfaction.
            </p>
          </div>
        </Fade>
      </div>
      </div>
  )
}

export default SolutionProvider
