import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import "./App.css";

export default class App extends Component {
  articlesPerPage = 10;
  apikey=process.env.REACT_APP_NEWS_API_KEY
  state = {
    progress: 0,
  };

  // Correctly defining the setProgress method
  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <div style={{ backgroundColor: " rgb(65,90,119)" }}>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress} apikey={this.apikey}
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
                  setProgress={this.setProgress} apikey={this.apikey}
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
                  setProgress={this.setProgress} apikey={this.apikey}
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
                  setProgress={this.setProgress} apikey={this.apikey}
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
                  setProgress={this.setProgress} apikey={this.apikey}
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
                  setProgress={this.setProgress} apikey={this.apikey}
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
                  setProgress={this.setProgress} apikey={this.apikey}
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
