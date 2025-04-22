import React from "react";
import "./mystyle.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary nav1">
        <div className="container-fluid">
          <p className="navt">DOCTOR MANAGEMENT</p>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="book">
                  Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/history">
                  History
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="login">
                  Login
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
