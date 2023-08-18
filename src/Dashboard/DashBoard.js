import React from "react";
import "./DashBoard.css";
import { IoIosApps } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <div>
        <div className="sidebar_btn">
          {/* <h4>
            <IoIosApps />
          </h4> */}
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="content">Hello</div>
      </div>
    </>
  );
};

export default DashBoard;
