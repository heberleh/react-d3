import React, { Component } from "react";
import Alphabet from "./components/Alphabet";


class App extends Component {
  render() {
    return (
      <div className="container">
        <svg width="100%" height="600">
          <Alphabet x={32} y={300} />
        </svg>
      </div>
    );
  }
}

export default App;