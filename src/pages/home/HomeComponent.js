import React from "react";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Education from '../education/EducationComponent';
import Experience from '../experience/Experience'
import Projects from '../projects/Projects'
import Contact from '../contact/ContactComponent'
import Header from "../../components/header/Header"


function Home(props) {
  return ( 
    <div id="home">
      <Header theme={props.theme} setTheme={props.setTheme}/>
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Education theme={props.theme} />
      <Experience theme={props.theme} />
      <Projects theme={props.theme} />
      <Contact theme={props.theme} />
    </div>
  );
}

export default Home;
