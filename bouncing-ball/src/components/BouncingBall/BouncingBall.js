import React, { Component } from "react";
import * as d3 from "d3";

import Ball from "./Ball";

class BouncingBall extends Component {
  constructor() {
    super();

    this.state = {
      y: 5,
      vy: 0,
    };
  }

  componentDidMount() {
    // start game loop
    this.timer = d3.timer(this.gameLoop);
  }

  componentWillUnmount() {
    // stop loop
    this.timer.stop();
  }

  gameLoop = () => {
    let { y, vy } = this.state;

    if (y > this.props.max_h) {
      vy = -vy * 0.87;
    }

    this.setState({
      y: y + vy,
      vy: vy + 0.3,
    });
  };

  render() {
    // render Ball at position y
    return (
      <g>
        <Ball x={10} y={this.state.y} />
      </g>
    );
  }
}

export default BouncingBall;
