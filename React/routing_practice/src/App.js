import React from "react";
import Home from "./Components/Home";
import { Router } from "@reach/router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Home path="/:word" />
        <Home path="/:word/:font/:bground" />
      </Router>
    </div>
  );
}

export default App;

