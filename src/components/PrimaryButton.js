import React from "react";
import { HashLink } from "react-router-hash-link";

export default function PrimaryButton({ url, label, onClick, className = "" }) {
  return (
    <div className={`cta ${className}`.trim()} id="ctaBtn">
      <HashLink
        className="primary-cta-btn"
        id="primary-cta-btn"
        smooth
        to={url}
        onClick={onClick}
      >
        {label}
      </HashLink>
    </div>
  );
}