import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link class="navbar-brand" to="/login">
            Login
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="/contact">
                  contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/es66">
                  ES6
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mui">
                  MUI
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hooks">
                  HOOKs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
