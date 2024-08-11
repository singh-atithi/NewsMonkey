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
        <nav className="navbar navbar-expand-lg  bg-light" style={{fontFamily: 'Times New Roman',backgroundColor:"black"}}>
          <div className="container-fluid">
            <Link className="navbar-brand Headd" to="/">NewsMonkey</Link>
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
                  <Link to="./business" onClick={this.toggleNavbar} className="nav-link text-black">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./entertainment" onClick={this.toggleNavbar} className="nav-link text-black">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./health"  onClick={this.toggleNavbar}className="nav-link text-black">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./science" onClick={this.toggleNavbar} className="nav-link text-black">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./sports"  onClick={this.toggleNavbar}className="nav-link text-black">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./technology"  onClick={this.toggleNavbar}className="nav-link text-black">
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
