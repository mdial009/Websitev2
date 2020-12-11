import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/sections/About";
import Footer from "./components/Footer";
import Experience from "./components/sections/Experience";
import Work from "./components/sections/Work";
import Archive from "./components/sections/Archive";

function App() {
  return (
    <Router>
      <Route exact path="" component={Navbar}></Route>
      <Route exact path="/" component={About}></Route>
      <Route exact path="/" component={Experience}></Route>
      <Route exact path="/" component={Work}></Route>
      <Route path="/Archive" component={Archive}></Route>
      <Route exact path="" component={Footer}></Route>
    </Router>
  );
}

export default App;
