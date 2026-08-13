import React from "react";
import { HashLink } from "react-router-hash-link";

import PrimaryNavList from "./PrimaryNavList";
import FooterLogo from "./FooterLogo";
import SocialIcon from "./SocialIcon";

import kcLogoMark from "../images/kc-logo-full.svg";

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
        <div className="footer-top full-width flex flex-row justify-space-between align-center xx-large-gap">
          <FooterLogo 
            imgSrc={kcLogoMark} 
            alt="Kyle Chin logo mark" 
            width="952" 
            height="165" 
          />
          <div className="footer-navigation flex flex-row">
            <PrimaryNavList 
              navClass="primary-footer-nav" 
              ulClass="flex flex-column flex-wrap xx-small-gap" 
              navItems={navItems} 
            />
          </div>
        </div>
        <div className="footer-middle full-width flex-column column-reverse justify-space-between align-top small-gap">
          <div className="accessibility-disclaimer underline-link">
            <p>
              I am dedicated to providing a website that is accessible to all users and aim to align with WCAG 2.1 Level AA standards. If you encounter any accessibility barriers or require content in an alternative format, please <HashLink smooth to="#contact">contact</HashLink> me, and I will work with you to provide a reasonable accommodation.
            </p>
          </div>
          <div className="social-icons flex flex-row medium-gap">
            <SocialIcon 
              iconParentClasses="footer-social-icon github" 
              href="https://github.com/kjc33" 
              iconClassNames="fa-brands fa-github" 
            />
            <SocialIcon 
              iconParentClasses="footer-social-icon linkedin" 
              href="https://www.linkedin.com/in/kylechin/" 
              iconClassNames="fa-brands fa-linkedin-in" 
            />
          </div>
        </div>
        <div className="footer-bottom full-width column-reverse justify-space-between align-top small-gap">
          <div className="footer-signature">
            <p>
              &copy; {copyrightDate} Kyle John Chin. All rights reserved. <span className="pipe">|</span> Website by me, duh.
            </p>
          </div>
          <p className="footer-tagline">
            Strategist. Designer. Developer.
          </p>
        </div>

      </div>
    </footer>
  );
}