import React from "react";
import { HashLink } from "react-router-hash-link";

import PrimaryNavList from "./PrimaryNavList";
import FooterLogo from "./FooterLogo";
import SocialIcon from "./SocialIcon";

import greenHexagon from "../images/hexagon-green.svg";

export default function Footer() {
  const navItems = [
    { to: "/#about", navLabel: "About" },
    { to: "/#skills", navLabel: "Skills" },
    { to: "/#work", navLabel: "Work" },
    { to: "/#contact", navLabel: "Hire Me" },
  ];

  const copyrightDate = new Date().getFullYear();

  return (
    <footer className="primary-footer">
      <div className="inner-container max-width flex flex-column large-gap">
        <div className="top-half full-width flex flex-row flex-wrap justify-space-between large-gap">
          <FooterLogo imgSrc={greenHexagon} alt="Green Hexagon" width="100" height="100" tagline="Developer. Designer. Strategist." />
          <div className="footer-navigation flex flex-row">
            <PrimaryNavList navClass="primary-footer-nav" ulClass="flex flex-row flex-wrap small-gap" navItems={navItems} />
          </div>
          <div className="social-icons full-width flex flex-row">
            <SocialIcon iconParentClasses="footer-social-icon github" href="https://github.com/kjc33" iconClassNames="fa-brands fa-github" />
            <SocialIcon iconParentClasses="footer-social-icon linkedin" href="https://www.linkedin.com/in/kylechin/" iconClassNames="fa-brands fa-linkedin-in" />
          </div>
        </div>
        <div className="bottom-half flex flex-column large-gap">
          <div className="accessibility-disclaimer underline-link">
            <p>
              I make every effort to ensure my portfolio is accessible to everyone. If you are having trouble using any part of my website, please do not hesitate to <HashLink smooth to="#contact">contact</HashLink> me, and I will do my best to address the issue. Thank you for your understanding.
            </p>
          </div>
          <div className="footer-signature">
            <p>
              &copy; {copyrightDate} Kyle Chin <span className="pipe">|</span> Website by me, duh.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
