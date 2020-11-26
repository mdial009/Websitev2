import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Experience from "./components/pages/Experience";
import Work from "./components/pages/Work";


function App() {
  return (
    <Router>
      <Navbar />
      {/* /* <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
  <Route path="/Contact" component={Contact} />  */}
      <About />
      <Experience />
      <Work />
      <Footer />
    </Router>
    
  );
}

export default App;
