import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  articles = [];

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark p-3">
          <div className="container-fluid">
            <Link className="navbar-brand text-white">NewsMonkey</Link>
            <button
              className="navbar-toggler bg-white"
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/general"
                    className="nav-link active text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="./business" className="nav-link text-white">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./entertainment" className="nav-link text-white">
                    Entertainment
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="./health" className="nav-link text-white">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./science" className="nav-link text-white">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./sports" className="nav-link text-white">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./technology" className="nav-link text-white">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
