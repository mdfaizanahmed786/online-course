import React from "react";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <TypeAnimation
          sequence={[
          "Learn",
          300,
          "Anything!",
          300,

          "Learn Anything!",
          300,]}
          wrapper="h1"
          repeat={Infinity}
          speed={30}
        
        />
        <p>Learn anything from anywhere</p>
      </div>
      <div>
        <img
          src="https://cdn.dribbble.com/users/2918596/screenshots/11180346/media/264bdc749d9ac6abcd5eea637718f967.gif"
          className="object-fit-contain rounded-5"
          style={{ height: "500px", width: "500px", borderRadius: "70px" }}
          alt="learn_image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
