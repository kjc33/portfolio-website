import React from "react";

export default function ArrowButton({ href, download, target, buttonLabel }) {
  return (
    <div className="arrow-btn">
      <a href={href} download={download} target={target} rel="noreferrer" className="arrow-btn-text">
        {buttonLabel}
      </a>
    </div>
  );
}
