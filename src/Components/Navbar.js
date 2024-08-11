import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react"; 


const Navbar=(props)=> {
  const [isCollapsed,setisCollapsed]=useState(true)

  const toggleNavbar = () => {
   
   setisCollapsed(!isCollapsed)
  };

 
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-light" style={{fontFamily: 'Times New Roman',backgroundColor:"black"}}>
          <div className="container-fluid">
            <Link className="navbar-brand Headd" to="/">NewsMonkey</Link>
            <button
              className="navbar-toggler bg-white"
              type="button"
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse mx-5 mt-1 ${
                isCollapsed ? "" : "show"
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="./business" onClick={toggleNavbar} className="nav-link text-black">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./entertainment" onClick={toggleNavbar} className="nav-link text-black">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./health"  onClick={toggleNavbar}className="nav-link text-black">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./science" onClick={toggleNavbar} className="nav-link text-black">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./sports"  onClick={toggleNavbar}className="nav-link text-black">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./technology"  onClick={toggleNavbar}className="nav-link text-black">
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

export default Navbar;
