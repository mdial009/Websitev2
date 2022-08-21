import React from "react";
import "../../App.css";
import "./About.css";
import MePic2 from "../../images/MePic2.JPG";

export default function About() {
  return (
    <>
      <div className="About">
        <div className="About-Container">
          <h1 className="madany">Hi, my name is</h1>
          <div className="underline">
            <h2>Madany Diallo</h2>
          </div>
          <p>I'm a software engineer living in the Bronx.</p>
          <div className="box">
            <div class="card">
              <div class="imgBx">
                <img src={MePic2} alt={"Madany Diallo"}></img>
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
              <p>TypeScript</p>
              <p>HTML</p>
              <p>CSS/Scss</p>
              <p>Python</p>
              <p>SQL</p>
              <p>R</p>
            </div>
            <div className="Frameworks">
              Frameworks
              <p> React</p>
              <p>Node</p>
              <span> </span>
            </div>
            <div className="Tools">
              Tools
              <p>Bash</p>
              <p>Github</p>
              <p>Git</p>
              <p>MongoDB</p>
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
              Hi, I am Madany Diallo. I was born in Africa, in Conkary, Guinea.
              I moved to the Bronx in New York City when I was seven years old
              and have since lived in the Bronx. As a young teen, playing video
              games was always my favorite pastime. Overwatch and Warframe are
              two of my favorite video games, but I love a good, story-heavy
              game like The Witch 3: Wild Hunt, Horizon Zero Dawn, Detroit:
              Become Human, and the Kingdom Hearts Saga. This passion for video
              games is what sparked my love and passion for the tech industry
              and programming in general. With this, I decided to go to SUNY
              Plattsburgh and major in Computer Science with Math and Business
              as my minors. Four years later after all the long classwork and
              hard work, I graduated with a 3.3 GPA and my degree in Computer
              Science. Graduating from college was a milestone for me and my
              family is the first person to graduate college in my family. I am
              currently aspiring to be a Mobile/Web Developer. I use most of my
              free time to go on YouTube and learn new things in mobile or web
              development. My dream is to be able to develop something or
              anything to eventually help my community or the world be a better
              place, whether that be solo or as a team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
