import React from "react";
// import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import ExperienceCard from '../../containers/experience_new/ExperienceCard'
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
// import ExperienceImg from "./ExperienceImg";

function Experience(props) {
  const theme = props.theme;
  return (
    <div className="experience-main" id="experience">
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
            {/* <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div> */}
          </div>
        </Fade>
      </div>
      <div className="exp-body-div">
      {experience.sections[0].experiences.map((cert) => {
          return <ExperienceCard sections={cert} theme={theme} />;
        })}
        </div>
    </div>
  );
}

export default Experience;
