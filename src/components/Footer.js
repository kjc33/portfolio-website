import React from "react";

import NavList from "./NavList";

import greenHexagon from "../images/hexagon-green.svg";

export default function Footer() {
  const navItems = [
    { href: "#about", navLabel: "About" },
    { href: "#skills", navLabel: "Skills" },
    { href: "#work", navLabel: "Work" },
    { href: "#contact", navLabel: "Hire Me" },
  ];

  return (
    <footer className="primary-footer">
      <div className="inner-container max-width flex flex-column large-gap">
        <div className="top-half full-width flex flex-row flex-wrap justify-space-between large-gap">
          <div className="footer-logo flex flex-column">
            <figure>
              <a href="#top">
                <img src={greenHexagon} alt="Green Hexagon" width="100" height="100" />
              </a>
            </figure>
            <p className="footer-tagline">Developer. Designer. Strategist.</p>
          </div>
          <div className="footer-navigation flex flex-row">
            <NavList navClass="primary-footer-nav" ulClass="flex flex-row flex-wrap small-gap" navItems={navItems} />
          </div>
          <div className="social-icons full-width flex flex-row">
            <div className="footer-social-icon github">
              <a href="https://github.com/kjc33" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="footer-social-icon linkedin">
              <a href="https://www.linkedin.com/in/kylechin/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-half flex flex-column large-gap">
          <div className="accessibility-disclaimer underline-link">
            <p>
              I make every effort to ensure my portfolio is accessible to everyone. If you're having trouble using any part of my website, please don't hesitate to <a href="#contact">contact</a> me, and I will do my best to address the issue. Thank you for your understanding.
            </p>
          </div>
          <div className="footer-signature">
            <p>
              &copy; <span id="copyright-year"></span> Kyle John Chin <span className="pipe">|</span> Website by me, duh.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
