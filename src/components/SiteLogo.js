import React from "react";

export default function SiteLogo({ siteName, headshot }) {
  return (
    <a className="site-logo" href="/">
      <div className="logo-inner">
        <div className="headshot">
          <figure>
            <img src={headshot} alt="Kyle Chin Headshot" width="80" height="80" />
          </figure>
        </div>
        <div className="site-name">
          <p>{siteName}</p>
        </div>
      </div>
    </a>
  );
}
