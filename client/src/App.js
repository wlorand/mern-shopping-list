// import libs
import React, { Component } from "react";

// import assets
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import local components
import AppNavbar from "./components/AppNavbar"

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
      </div>
    );
  }
}

export default App;
