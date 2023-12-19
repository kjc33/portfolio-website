import React from "react";

import NavList from "./NavList";

export default function MobileNav() {
  const navItems = [
    { href: "#about", navLabel: "About" },
    { href: "#skills", navLabel: "Skills" },
    { href: "#work", navLabel: "Work" },
    { href: "#contact", navLabel: "Hire Me" },
  ];

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-burger" id="mobileMenuBurger">
        <div className="top-bar"></div>
        <div className="middle-bar"></div>
        <div className="bottom-bar"></div>
      </div>
      <div className="mobile-menu-nav" id="mobileMenuNav">
        <NavList navClass="mobile-menu-nav-items" navId="mobileMenuNavItems" ulClass="mobile-menu-nav-list-items" liClass="nav-item" navItems={navItems} />
        {/* <nav className="mobile-menu-nav-items" id="mobileMenuNavItems">
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
        </nav> */}
        <div className="mobile-close-btn">
          <button aria-label="Mobile Menu Close Button" className="close-btn" id="closeBtn">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
