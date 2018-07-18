import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            className="nav-link font-weight-bold"
            to="/"
            style={{ color: "#fff" }}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link font-weight-bold"
            to="/"
            style={{ color: "#fff" }}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link font-weight-bold"
            to="/"
            style={{ color: "#fff" }}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link font-weight-bold"
            to="/"
            style={{ color: "#fff" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-md navbar-light mb-4 bg-lightblue">
        <div className="container">
          <Link
            className="navbar-brand font-weight-bold pr-3 pl-3"
            to="/"
            style={{ color: "#fff" }}
          >
            MS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">
            {authLinks}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
