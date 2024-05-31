import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="sfsemibold relative">
      <div className="pt-4">
        <ReactTyped
          className="pl-6 text-8xl"
          strings={["宮川 直宜", "NAOKI MIYAGAWA", "CS STUDENT."]}
          typeSpeed={70}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;
// 宮川 直宜
