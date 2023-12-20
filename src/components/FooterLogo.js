import React from "react";

export default function FooterLogo({ imgSrc, alt, width, height, tagline }) {
  return (
    <div className="footer-logo flex flex-column">
      <figure>
        <a href="#top">
          <img src={imgSrc} alt={alt} width={width} height={height} />
        </a>
      </figure>
      <p className="footer-tagline">{tagline}</p>
    </div>
  );
}
