import React from "react";
import greenBorderHexagon from "../images/hexagon-green-border.svg";
import whiteHexagon from "../images/hexagon-white.svg";
import blackHexagon from "../images/hexagon-black.svg";

export default function Statistics() {
  return (
    <div className="hexagon-divider no-bottom-padding">
      <div className="inner-container large-width flex-column flex-row-tablet large-gap">
        <div className="hexagon-statistic-bg hexagon-green">
          <figure>
            <img src={greenBorderHexagon} alt="Green Border Hexagon" />
            <p className="hexagon-statistic-description">
              <span className="statistic-number">150+</span> Websites Built
            </p>
          </figure>
        </div>
        <div className="hexagon-statistic-bg hexagon-white">
          <figure>
            <img src={whiteHexagon} alt="White Hexagon" />
            <p className="hexagon-statistic-description">
              <span className="statistic-number">10</span> Years of Experience
            </p>
          </figure>
        </div>
        <div className="hexagon-statistic-bg hexagon-black">
          <figure>
            <img src={blackHexagon} alt="Black Hexagon" />
            <p className="hexagon-statistic-description">
              <span className="statistic-number">6</span> Developer Certifications
            </p>
          </figure>
        </div>
      </div>
    </div>
  );
}
