import React from "react";

import headshot from "../images/kyle-headshot-square.jpg";

export default function Header() {
  return (
    <header className="primary-header">
      <div className="header-inner">
        <a className="site-logo" href="./index.html">
          <div className="logo-inner">
            <div className="headshot">
              <figure>
                <img src={headshot} alt="Kyle Chin Headshot" width="80" height="80" />
              </figure>
            </div>
            <div className="site-name">
              <p>Kyle Chin</p>
            </div>
          </div>
        </a>
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
        <div className="cta" id="menuBtn">
          <a className="primary-nav-cta-btn" id="primary-nav-cta-btn" href="#contact">
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
