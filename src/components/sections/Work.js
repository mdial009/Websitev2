import React from "react";
import "../../App.css";
import "./Work.css";
import IBMCard from "../../components/cards/IBMCard.js";
import MCCard from "../../components/cards/MCCard.js";
import ITSS from "../../components/cards/ITSS.js";
import Staples from "../../components/cards/StaplesCard.js";
import Speedway from "../../components/cards/SpeedwayCard.js";
import TA from "../../components/cards/TACard.js";
import GLCard from "../../components/cards/GLCard.js";
import OA from "../../components/cards/OACard.js";
import FSW from "../../components/cards/FSWCard.js";


export default function Work() {
  return (
    <>
      <div className="Work"><span>03. Some Things I’ve Built</span></div>
      <div className="Works">
        <IBMCard />
        <div className="Spacediv"></div>
        </div>  
    </>
  );
}