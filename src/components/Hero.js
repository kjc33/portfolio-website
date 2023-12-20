import React from "react";

import DropDownArrow from "./DropDownArrow";
import Location from "./Location";

export default function Hero({ primaryH1, subHead, subHeadDescription }) {
  return (
    <section className="hero" id="top">
      <div className="inner-container max-width flex-column">
        <h1 className="outline-heading-large">{primaryH1}</h1>
        <div className="hero-subhead">
          <p className="white">{subHead}</p>
          <p className="light-font">{subHeadDescription}</p>
        </div>
        <DropDownArrow href="#about" />
        <Location location="Vancouver, WA" latitude="45.6280" longitude="122.6739" />
      </div>
    </section>
  );
}
