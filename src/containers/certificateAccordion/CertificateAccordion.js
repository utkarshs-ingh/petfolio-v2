import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./CertificateAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { certifications } from '../../portfolio'


function CertificateAccordion(props) { 
  const theme = props.theme;
  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
            <Panel
              className="accord-panel"
              title="Certficates"
              key="Certficates"
            >
              {certifications.certifications.map((section) => {
                  return (
                    <ExperienceCard experience={section} theme={theme} />
                  );
              })}
            </Panel>
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default CertificateAccordion;
