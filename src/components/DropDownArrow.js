import React from "react";

export default function DropDownArrow({ href }) {
  return (
    <div className="drop-down-arrow">
      <a href={href}>
        <div className="arrow-icon"></div>
      </a>
    </div>
  );
}
