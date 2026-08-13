import React from "react";
import { HashLink } from "react-router-hash-link";

export default function FooterLogo({ imgSrc, alt, width, height }) {
  return (
    <div className="footer-logo">
      <figure>
        <HashLink to="#top" className="inline-block">
          <img src={imgSrc} alt={alt} width={width} height={height} />
        </HashLink>
      </figure>
    </div>
  );
}