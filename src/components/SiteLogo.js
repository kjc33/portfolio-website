import React from "react";

export default function SiteLogo({ 
  siteName = "Kyle Chin", 
  headshot, 
  alt = "Kyle Chin headshot", 
  width = "500", 
  height = "500" 
}) {
  return (
    <a 
      className="site-logo" 
      href="/"
      aria-label="Kyle Chin - Home"
    >
      <div className="logo-inner">
        <div className="headshot">
          <figure>
            <img 
              src={headshot} 
              alt={alt} 
              width={width} 
              height={height}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
        <div className="site-name">
          <p>{siteName}</p>
        </div>
      </div>
    </a>
  );
}