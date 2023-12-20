import React from "react";

import downArrow from "../images/arrow-white.svg";

export default function DropDownArrow({ href }) {
  return (
    <div className="drop-down-arrow">
      <a href={href}>
        <figure>
          <img className="arrow-icon" src={downArrow} alt="Drop Down Arrow" />
        </figure>
      </a>
    </div>
  );
}
