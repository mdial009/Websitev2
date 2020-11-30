import React from "react";
import "../../App.css";
import "./Experience.css";
import IBMCard from "../../components/cards/IBMCard.js";
import MCCard from "../../components/cards/MCCard.js";
import ITSS from "../../components/cards/ITSS.js";
import Staples from "../../components/cards/StaplesCard.js";
import Speedway from "../../components/cards/SpeedwayCard.js";
import TA from "../../components/cards/TACard.js";
import GLCard from "../../components/cards/GLCard.js";
import OA from "../../components/cards/OACard.js";
import FSW from "../../components/cards/FSWCard.js";

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
        <div className="Spacediv"></div>
        <TA />
        <div className="Spacediv"></div>
        <GLCard />
        <div className="Spacediv"></div>
        <OA />
        <div className="Spacediv"></div>
        <FSW />
      </div>
    </>
  );
}
