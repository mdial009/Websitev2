import React from "react";
import "../../App.css";
import "./About.css";
import MePic3 from "../../images/MePic3.jpeg";

export default function About() {
  return (
    <>
      <div className="About">
        <div className="About-Container">
          <h1 className="madany">Hi, my name is</h1>
          <div className="underline">
            <h2>Madany Diallo</h2>
          </div>
          <p>I'm a software engineer living in New York.</p>
          <div className="box">
            <div class="card">
              <div class="imgBx">
                <img src={MePic3} alt={"Madany Diallo"}></img>
              </div>
              <div className="details">
                <h2>Software Engineer</h2>
              </div>
            </div>
          </div>
          <div className="skills-sections">
            <h1 className="skills">Skills:</h1>
            <div className="languages">
              Languages
              <p>JavaScript </p>
              <p>PL/SQL</p>
              <p>TypeScript</p>
              <p>HTML</p>
              <p>CSS/Scss</p>
              <p>Python</p>
              <p>SQL</p>
              <p>R</p>
            </div>
            <div className="Frameworks">
              Frameworks
              <p>React</p>
              <p>Node</p>
              <p>APEX</p>
            </div>
            <div className="Tools">
              Tools
              <p>Bash</p>
              <p>Github</p>
              <p>Git</p>
              <p>MongoDB</p>
              <p>Jira</p>
              <p>Twilio</p>
            </div>
            <div className="Design">
              Design
              <p>Sketch</p>
              <p>Wireframing</p>
              <p>User Testing</p>
              <p>Figma</p>
            </div>
          </div>
          <div className="aboutme">
            <span className="background">01. Background</span>
            <p>
              Hi, I am Madany Diallo. I was born in Conkary, Guinea. I moved to
              the Bronx in New York City when I was seven years old and have
              since lived in the Bronx. Currenntly working as a Junior APEX
              Engineer for{" "}
              <a href="https://www.insum.ca/about-us/">Insum Solutions</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
