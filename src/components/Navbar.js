import React, { useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import logo from "../images/MadanyLogo5.png";
import { Link } from "react-scroll";
//import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <a
          className="navbar-logo"
          onClick={closeMobileMenu}
          href="https://madany-diallo.netlify.app/"
        >
          <img src={logo} alt="logo" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active " : "nav-menu"}>
          <li className="nav-item">
            <Link to="About" className="nav-links" onClick={closeMobileMenu}>
              <span>01. </span>About
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="Experience"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <span>02. </span>Experience{" "}
              {/*<i className="fas fa-caret-down" /> */}
            </Link>
            {/*dropdown && <Dropdown /> */}
          </li>
          <li className="nav-item">
            <Link to="Work" className="nav-links" onClick={closeMobileMenu}>
              <span>03. </span>Work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="footer-container"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <span>04. </span>Contact
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-links-mobile" onClick={closeMobileMenu}>
              Résumé
            </Link>
          </li>
        </ul>
        <Button>Résumé</Button>
      </nav>
    </>
  );
}

export default Navbar;
