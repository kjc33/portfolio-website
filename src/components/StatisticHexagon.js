import React from "react";

export default function StatisticHexagon({ 
  hexagonContainerClasses, 
  imgSrc, 
  alt = "", 
  num, 
  description,
  width = "1536",
  height = "1332",
  loading = "lazy"
}) {
  return (
    <div className={hexagonContainerClasses}>
      <figure>
        <img 
          src={imgSrc} 
          alt={alt} 
          width={width}
          height={height}
          loading={loading}
          role={alt === "" ? "presentation" : undefined}
        />
        <div className="hexagon-statistic">
          <div className="statistic-number">{num}</div> 
          <div className="statistic-description">{description}</div>
        </div>
      </figure>
    </div>
  );
}