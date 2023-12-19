import React from "react";

export default function PrimaryButton({ url, label }) {
  return (
    <div className="cta" id="ctaBtn">
      <a className="primary-cta-btn" id="primary-cta-btn" href={url}>
        {label}
      </a>
    </div>
  );
}
