import React from "react";

import downArrow from "../images/arrow-white.svg";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="inner-container max-width flex-column">
        <h1 className="outline-heading-large">Frontend Developer</h1>
        <div className="hero-subhead">
          <p className="white">Open to Work</p>
          <p className="light-font">Available Now</p>
        </div>
        <div className="drop-down-arrow">
          <a href="#about">
            <figure>
              <img className="arrow-icon" src={downArrow} alt="Drop Down Arrow" />
            </figure>
          </a>
        </div>
        <div className="location vertical flex-column">
          <p>45.6280&deg; N, 122.6739&deg; W</p>
          <p>Vancouver, WA</p>
        </div>
      </div>
    </section>
  );
}
