import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  articlesPerPage=10;
  render() {
    return (
      <div style={{ backgroundColor: " rgb(65,90,119)" }}>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  articlesPerPage={this.articlesPerPage}

                  country={"IN"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  articlesPerPage={this.articlesPerPage}

                  country={"IN"}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  articlesPerPage={this.articlesPerPage}

                  country={"IN"}
                  category={"health"}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  articlesPerPage={this.articlesPerPage}

                  country={"IN"}
                  category={"entertainment"}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  articlesPerPage={this.articlesPerPage}

                  country={"IN"}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  articlesPerPage={this.articlesPerPage}

                  country={"IN"}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  articlesPerPage={this.articlesPerPage}

                  country={"IN"}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
