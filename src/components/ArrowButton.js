import React from "react";

export default function ArrowButton({ href, download, buttonLabel }) {
  return (
    <div className="arrow-btn">
      <a href={href} download={download} target="_blank" rel="noreferrer" className="arrow-btn-text">
        {buttonLabel}
      </a>
    </div>
  );
}
