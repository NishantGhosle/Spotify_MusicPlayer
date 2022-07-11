import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 pt-3 ">
        <div className="container-fluid ">
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
              <NavLink to="/home" id="homeNavlink">
                Home
              </NavLink>
              <NavLink
                to="/addsong"
                className="btn btn-outline-success addsongNavlink"
              >
                <span>&#43;</span> Add Song
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
