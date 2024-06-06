import React from 'react';
import { ReactTyped } from "react-typed";

const Typed = ({ strings, typeSpeed = 50, backSpeed = 50, loop = true }) => {
  return (
    <ReactTyped
      strings={strings}
      typeSpeed={typeSpeed}
    />
  );
};

export default Typed;