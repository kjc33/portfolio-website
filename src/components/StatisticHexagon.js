import React from "react";

export default function StatisticHexagon({ hexagonContainerClasses, imgSrc, alt, num, description }) {
  return (
    <div className={hexagonContainerClasses}>
      <figure>
        <img src={imgSrc} alt={alt} />
        <div className="hexagon-statistic">
          <div className="statistic-number">{num}</div> 
          <div className="statistic-description">{description}</div>
        </div>
      </figure>
    </div>
  );
}