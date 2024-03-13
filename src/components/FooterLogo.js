import React from "react";
import { HashLink } from "react-router-hash-link";

export default function FooterLogo({ imgSrc, alt, width, height, tagline }) {
  return (
    <div className="footer-logo flex flex-column">
      <figure>
        <HashLink to="#top">
          <img src={imgSrc} alt={alt} width={width} height={height} />
        </HashLink>
      </figure>
      <p className="footer-tagline">{tagline}</p>
    </div>
  );
}
