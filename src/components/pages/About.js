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
        </div>
      </div>
    </>
  );
}
