import React from "react";
import "../../App.css";
import "./Experience.css";
import { Button } from "../Button";
import { makeStyles } from "@material-ui/core/styles";
import IBMCard from "/Users/madanydiallo/Desktop/Websitev2/websitev2/src/components/cards/IBMCard.js";
import MCCard from "/Users/madanydiallo/Desktop/Websitev2/websitev2/src/components/cards/MCCard.js";

export default function Experience() {
  return (
    <>
      <div className="Experience">
        <span>02. </span>Experience
      </div>
      <div className="Classwork">
        <IBMCard />
        <div className="Spacediv"></div>
        <MCCard />
      </div>
    </>
  );
}
