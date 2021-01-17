import React from "react";
import Logo from "../logo.png";
// import Logo from "../matiLogo2.png"

// react fontawsome import

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from  "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-Portfolio-Logo" href="#">
          {" "}
          <img className="logo" src={Logo} alt="Mati" />
        </a>
       
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <FontAwesomeIcon icon={faBars} style={{color: "gray"}}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
