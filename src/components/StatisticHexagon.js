import React from "react";

export default function StatisticHexagon({ hexagonContainerClasses, imgSrc, alt, num, description }) {
  return (
    <div className={hexagonContainerClasses}>
      <figure>
        <img src={imgSrc} alt={alt} />
        <p className="hexagon-statistic-description">
          <span className="statistic-number">{num}</span> {description}
        </p>
      </figure>
    </div>
  );
}
