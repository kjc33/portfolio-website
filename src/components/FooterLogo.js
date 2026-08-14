import React from "react";
import { HashLink } from "react-router-hash-link";

export default function FooterLogo({ 
  imgSrc, 
  alt = "", 
  width = "953",
  height = "166", 
  loading = "lazy"
}) {
  return (
    <div className="footer-logo">
      <figure>
        <HashLink 
          to="#top" 
          className="inline-block"
          aria-label="Back to top of page"
        >
          <img 
            src={imgSrc} 
            alt={alt} 
            width={width} 
            height={height} 
            loading={loading}
          />
        </HashLink>
      </figure>
    </div>
  );
}