import React, { Component } from "react";
import * as d3 from "d3";

import Ball from "./Ball";

class BouncingBall extends Component {
  state = {
    y: 5,
    vy: 0,
  };

  componentDidMount() {
    // start game loop
    this.timer = d3.timer(this.gameLoop);
  }

  componentWillUnmount() {
    // stop loop
    this.timer.stop();
  }

  gameLoop = () => {
    let { y, vy, lastFrame } = this.state;

    let frames = 1;

    if (lastFrame) {
      frames = (d3.now() - lastFrame) / (1000 / 60);
    }

    for (let i = 0; i < frames; i++) {
      if (y > this.props.max_h) {
        vy = -vy * 0.95;
      }

      y = y + vy;
      vy = vy + 0.1;
    }

    this.setState({
      y,
      vy,
      lastFrame: d3.now(),
    });
  };

  render() {
    // render Ball at position y
    return (
      <g>
        <Ball x={this.props.x} y={this.state.y} />
      </g>
    );
  }
}

export default BouncingBall;
