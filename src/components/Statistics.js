import React from "react";

import Statistic from "./StatisticHexagon";

import greenBorderHexagon from "../images/hexagon-green-border.svg";
import whiteHexagon from "../images/hexagon-white.svg";
import blackHexagon from "../images/hexagon-black.svg";

export default function Statistics() {
  return (
    <div className="hexagon-divider no-bottom-padding">
      <div className="inner-container large-width flex-column flex-row-tablet large-gap">
        <Statistic hexagonContainerClasses="hexagon-statistic-bg hexagon-green" imgSrc={greenBorderHexagon} alt="Green Border Hexagon" num="150+" description="Websites Built" />
        <Statistic hexagonContainerClasses="hexagon-statistic-bg hexagon-white" imgSrc={whiteHexagon} alt="White Hexagon" num="11" description="Years of Experience" />
        <Statistic hexagonContainerClasses="hexagon-statistic-bg hexagon-black" imgSrc={blackHexagon} alt="Black Hexagon" num="5" description="Developer Certifications" />
      </div>
    </div>
  );
}
