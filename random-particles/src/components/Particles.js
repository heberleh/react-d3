import React from "react";
import Particle from "./Particle";

const Particles = ({ particles }) => (
  <g>
    {particles.map((particle) => (
      <Particle key={particle.id} {...particle} />
    ))}
  </g>
);

export default Particles;
