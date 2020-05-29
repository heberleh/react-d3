import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BouncingBall from "./components/BouncingBall";
import LeftRightBall from "./components/LeftRightBall";

function App() {
  return (
    <div className="App">
      <svg width="800" height="600">
        {[20, 40, 60, 80, 100, 120, 140].map((d) => (
          <BouncingBall key={d} max_h={600} x={d} />
        ))}
      </svg>

      <LeftRightBall />
    </div>
  );
}

export default App;
