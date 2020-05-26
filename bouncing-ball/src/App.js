import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BouncingBall from "./components/BouncingBall";

function App() {
  return (
    <div className="App">
      <svg width="800" height="600">
        <BouncingBall max_h={600} />
      </svg>
    </div>
  );
}

export default App;
