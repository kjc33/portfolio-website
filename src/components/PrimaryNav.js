import React from "react";

export default function PrimaryNav() {
  return (
    <nav className="site-nav" id="siteNav">
      <ul className="primary-nav">
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#work">Work</a>
        </li>
      </ul>
    </nav>
  );
}
