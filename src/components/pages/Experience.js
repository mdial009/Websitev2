import React from "react";
import "../../App.css";
import MePic2 from "../../images/MePic2.JPG";
import "./Experience.css";

export default function Experience() {
  return (
    <>
      <section className="hero-section">
        <div className="card-grid">
          <a className="cards" href="#">
            <div className="card__background">
              <img src={MePic2} alt={"Madany Diallo"}></img>
              <div className="card__content">
                <p className="card__category">sdds</p>
                <h3 class="card__heading">sdsddsssdsdszsdsddsszds</h3>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
