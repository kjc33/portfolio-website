import React from "react";
import { HashLink } from "react-router-hash-link";

export default function ArrowButton({ href, download, target, buttonLabel }) {
  return (
    <div className="arrow-btn">
      <HashLink smooth to={href} download={download} target={target} rel="noreferrer" className="arrow-btn-text">
        {buttonLabel}
      </HashLink>
    </div>
  );
}
