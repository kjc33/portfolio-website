import React from "react";

export default function SiteLogo({ siteName, headshot, alt, width, height }) {
  return (
    <a className="site-logo" href="/">
      <div className="logo-inner">
        <div className="headshot">
          <figure>
            <img src={headshot} alt={alt} width={width} height={height} />
          </figure>
        </div>
        <div className="site-name">
          <p>{siteName}</p>
        </div>
      </div>
    </a>
  );
}
