import React from "react";
import { HashLink } from "react-router-hash-link";

export default function DropDownArrow({ href }) {
 return (
    <div className="drop-down-arrow">
      <HashLink to={href} aria-label="Scroll down to featured work section">
        <div className="arrow-icon"></div>
      </HashLink>
    </div>
 );
}
