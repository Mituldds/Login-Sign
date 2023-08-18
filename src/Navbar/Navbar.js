import React from "react";
import { IoIosApps } from "react-icons/io";
import { Link } from "react-router-dom";
import Home from "./Home";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-light navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i>
              <IoIosApps />
            </i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar_link_container">
              <Link to="/home">Home</Link>
              <Link to="/accessorise">Accessorise</Link>
              <Link to="/Services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
