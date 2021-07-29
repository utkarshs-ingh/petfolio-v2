import React from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

function ExperienceCard(props) {
  const experience = props.sections;
  const theme = props.theme; 
  const styles = style({
    boxShadow: `0px 2px 5px ${experience.color}`,
    border: `1px solid ${experience.color}`,
    ":hover": {
      boxShadow: `0 5px 15px ${experience.color}`,
    },
    margin: "20px",
  });

  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="exp-card" {...styles}>
        <div className="content">
          <a
            href={experience.company_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay"></div>
            <div
              className="exp-header"
              style={{ backgroundColor: experience.color }}
            >
              <img
                className="logo_img"
                src={require(`../../assests/images/${experience.logo_path}`)}
                alt="jk"
              />
            </div>
          </a>
        </div>
        <div className="exp-body">
          <h2 className="exp-body-title" style={{ color: theme.text }}>
            {experience.title}
          </h2>
          <h3
            className="exp-body-subtitle"
            style={{ color: theme.secondaryText, textAlign: "center" }}
          >
            {experience.description[0]}
            <br></br>
            {experience.description[1]}
            <br></br>
            {experience.description[2]}
            <br></br><br></br>
            {experience.description[3]}
          </h3>
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
