import React from "react";

function HeroSection() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h1>Learn Anything</h1>
        <p>Learn anything from anywhere</p>
      </div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2019/11/04/10/15/book-4600757_960_720.jpg"
          className="object-fit-contain rounded-5"
          style={{height: "500px", width: "500px", borderRadius: "10px"}}
          alt="learn_image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
