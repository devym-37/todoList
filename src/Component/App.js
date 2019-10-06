import React, { Component } from "react";
import Router from "./Router";
import Nav from "./Nav";
import "../style.css";

class App extends Component {
  render() {
    return (
      <div className="bounder">
        <Nav />
        <Router />
      </div>
    );
  }
}

export default App;
