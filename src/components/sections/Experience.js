import React from "react";
import "../../App.css";
import "./Experience.css";
import IBMCard from "../../components/cards/IBMCard.js";
import MCCard from "../../components/cards/MCCard.js";
import ITSS from "../../components/cards/ITSS.js";
import Staples from "../../components/cards/StaplesCard.js";
import Speedway from "../../components/cards/SpeedwayCard.js";


export default function Experience() {
  return (
    <>
      <div className="Experience">
        <span>02. </span>Experience
      </div>
      <div className="Works">
        <IBMCard />
        <div className="Spacediv"></div>
        <MCCard />
        <div className="Spacediv"></div>
        <ITSS />
         <div className="Spacediv"></div>
        <Staples />
          <div className="Spacediv"></div>
        <Speedway />
      </div>
    </>
  );
}

