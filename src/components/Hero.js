import React from "react";

import downArrow from "../images/arrow-white.svg";

export default function Hero({ primaryH1, subHead, subHeadDescription, location, latitude, longitude }) {
  return (
    <section className="hero" id="top">
      <div className="inner-container max-width flex-column">
        <h1 className="outline-heading-large">{primaryH1}</h1>
        <div className="hero-subhead">
          <p className="white">{subHead}</p>
          <p className="light-font">{subHeadDescription}</p>
        </div>
        <div className="drop-down-arrow">
          <a href="#about">
            <figure>
              <img className="arrow-icon" src={downArrow} alt="Drop Down Arrow" />
            </figure>
          </a>
        </div>
        <div className="location vertical flex-column">
          <p>{latitude}&deg; N, {longitude}&deg; W</p>
          <p>{location}</p>
        </div>
      </div>
    </section>
  );
}
