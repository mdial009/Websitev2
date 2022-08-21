import React from "react";
import "../../App.css";
import "./Work.css";
import PortflioWebsiteV1 from "../cards/Portfolio.js";
import PortflioWebsiteV3 from "../cards/PortfolioV3.js";
import GithubUsers from "../../components/cards/GithubUsers.js";
import StockWeb from "../../components/cards/StockWeb.js";
import VirtualAssistant from "../../components/cards/VirtualAssistant.js";
import AI from "../../components/cards/AI-Chat-Bot.js";
import ICM from "../../components/cards/ICM.js";
import { BrowserRouter as Link } from "react-router-dom";

export default function Work() {
  return (
    <>
      <div className="Work">
        <span className="Feature4">03. Some Things I’ve Built</span>
      </div>
      <div className="Features3">
        <span>Featured Projects</span>
      </div>
      <div className="Works">
        <PortflioWebsiteV3 />
        <div className="Spacediv"></div>
        <PortflioWebsiteV1 />
        <div className="Spacediv"></div>
        <GithubUsers />
        <div className="Spacediv"></div>
      </div>
      <div className="Features">
        <span>Other Noteworthy Projects</span>
      </div>
      <span className="Features2">
        {" "}
        <Link to="/Archive">View The Archive</Link>
      </span>

      <div className="Works">
        <StockWeb />
        <div className="Spacediv"></div>
        <VirtualAssistant />
        <div className="Spacediv"></div>
        <AI />
        <div className="Spacediv"></div>
        <ICM />
        <div className="Spacediv"></div>
      </div>
    </>
  );
}

/* https://mousdial4.github.io/ 

https://github.com/Mousdial4/Mousdial4.github.io*/