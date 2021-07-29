import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";

const ContactData = contactPageData.contactSection;


function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const style_img = style({
    width: "192px",
    height: "200px",
    borderRadius: "2%",
    border: `1px solid ${theme.accentColor}`,
    margin: "0 auto",
    "margin-top": "50px",
    boxShadow: `0px 0px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
    "@media (max-width: 768px)": {
      margin: "0 auto",
      marginBottom: "15px",
      width: "192px",
    },
  });

  return (
    <div className="contact-main" id="contact">
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-text-div">
              <div {...style_img}>
                <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                      src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                      alt=""
                    />
                </div>
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a {...styles} className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Contact;
