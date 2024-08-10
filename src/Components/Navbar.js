import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
  }

  toggleNavbar = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark p-3" style={{fontFamily: 'Times New Roman'}}>
          <div className="container-fluid">
            <Link className="navbar-brand text-white Headd" to="/">NewsMonkey</Link>
            <button
              className="navbar-toggler bg-white"
              type="button"
              onClick={this.toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse mx-5 mt-1 ${
                this.state.isCollapsed ? "" : "show"
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="./business" onClick={this.toggleNavbar} className="nav-link text-white">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./entertainment" onClick={this.toggleNavbar} className="nav-link text-white">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./health"  onClick={this.toggleNavbar}className="nav-link text-white">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./science" onClick={this.toggleNavbar} className="nav-link text-white">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./sports"  onClick={this.toggleNavbar}className="nav-link text-white">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./technology"  onClick={this.toggleNavbar}className="nav-link text-white">
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
