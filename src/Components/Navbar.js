import React from "react";
import { NavLink, Link } from "react-router-dom";
import avatar from '../Images/studentlogo.png'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container-fluid mx-lg-2">
          <Link className="navbar-brand" to="/">
            <span className="text-danger">Dextereous</span> Learning
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-lg-5 gap-2">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/team">
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/registration">
                  Registration
                </NavLink>
              </li>
              <div className="dropdown">
                <Link
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                >
                  <img
                    src={avatar}
                    className="rounded-circle my-2"
                    width="30"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" href="#">
                      My profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
