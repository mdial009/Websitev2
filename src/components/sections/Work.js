import React from "react";
import "../../App.css";
import "./Work.css";
import PortfolioWebsite from "../cards/Portfolio.js";
import GithubUsers from "../../components/cards/GithubUsers.js";
import StockWeb from "../../components/cards/StockWeb.js";
import VirtualAssistant from "../../components/cards/VirtualAssistant.js";
import Speedway from "../../components/cards/SpeedwayCard.js";
import TA from "../../components/cards/TACard.js";
import GLCard from "../cards/StockWeb.js";
import OA from "../../components/cards/OACard.js";
import FSW from "../cards/GithubUsers.js";

export default function Work() {
  return (
    <>
      <div className="Work">
        <span>03. Some Things I’ve Built</span>
      </div>
      <div className="Features">
        <span>Featured Projects</span>
      </div>
      <div className="Works">
        <PortfolioWebsite />
        <div className="Spacediv"></div>
        <GithubUsers />
        <div className="Spacediv"></div>
      </div>
      <div className="Features">
        <span>Other Noteworthy Projects</span>
      </div>
      <div className="Works">
        <StockWeb />
        <div className="Spacediv"></div>
        <VirtualAssistant />
        <div className="Spacediv"></div>
      </div>
    </>
  );
}
