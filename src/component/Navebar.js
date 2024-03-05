import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

export default function Navebar() {
  return (
    <>
      <div className="logo">
        <b>ExpencTracker</b>
      </div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgb(75, 43, 106)" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "#f0f0f0" }}>
            Navbar
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "#f0f0f0" }}
                >
                  Dashbord
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Add"
                  className="nav-link"
                  style={{ color: "#f0f0f0" }}
                >
                  Expenses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/income"
                  className="nav-link"
                  style={{ color: "#f0f0f0" }}
                >
                  Income
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
