import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Experience from "./components/pages/Experience";

function App() {
  return (
    <Router>
      <Navbar />
      {/* /* <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
  <Route path="/Contact" component={Contact} />  */}
      <About />
      <Experience />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
