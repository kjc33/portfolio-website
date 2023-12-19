import React from "react";

export default function MobileNav() {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-burger" id="mobileMenuBurger">
        <div className="top-bar"></div>
        <div className="middle-bar"></div>
        <div className="bottom-bar"></div>
      </div>
      <div className="mobile-menu-nav" id="mobileMenuNav">
        <div className="mobile-menu-nav-items" id="mobileMenuNavItems">
          <ul className="mobile-menu-nav-list-items">
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#work">Work</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Hire Me</a>
            </li>
          </ul>
        </div>
        <div className="mobile-close-btn">
          <button aria-label="Mobile Menu Close Button" className="close-btn" id="closeBtn">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
