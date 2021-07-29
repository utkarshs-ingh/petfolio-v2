import React from "react";
import Educations from "../../containers/education/Educations";
import CertificateAccordion from "../../containers/certificateAccordion/CertificateAccordion";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main" id="education">
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Qualification and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I actively participate in hackathons and other tech-related
                activities. Below are some of my major courseworks and certifications.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        <CertificateAccordion theme={props.theme} />
      </div>
    </div>
  );
}

export default Education;
