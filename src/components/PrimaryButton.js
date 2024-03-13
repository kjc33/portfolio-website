import React from "react";
import { HashLink } from "react-router-hash-link";

export default function PrimaryButton({ url, label }) {
  return (
    <div className="cta" id="ctaBtn">
      <HashLink className="primary-cta-btn" id="primary-cta-btn" smooth to={url}>
        {label}
      </HashLink>
    </div>
  );
}
