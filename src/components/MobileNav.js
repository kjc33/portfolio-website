import React, { useState } from "react";
import MobileNavList from "./MobileNavList";

export default function MobileNav({ setMobileMenuVisible }) {
  const navItems = [
    { to: "/#about", navLabel: "About" },
    { to: "/#skills", navLabel: "Skills" },
    { to: "/#work", navLabel: "Work" },
    { to: "/#contact", navLabel: "Hire Me" },
  ];

  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileNavVisible((prevVisible) => !prevVisible);
  };

  const closeMobileMenu = () => {
    setMobileNavVisible(false);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
    setMobileMenuVisible(false);
  };

  return (
    <div className="mobile-menu-wrapper">
      <div className="mobile-menu-burger" id="mobileMenuBurger" onClick={toggleMobileMenu}>
        <div className="top-bar"></div>
        <div className="middle-bar"></div>
        <div className="bottom-bar"></div>
      </div>
      {mobileNavVisible && (
        <div className="mobile-menu-nav-wrapper" id="mobileMenuNav">
          <MobileNavList navClass="mobile-menu-nav-items" navId="mobileMenuNavItems" ulClass="mobile-menu-nav-list-items" liClass="nav-item" navItems={navItems} active={mobileNavVisible} onLinkClick={handleLinkClick} />
          <div className="mobile-close-btn">
            <button aria-label="Mobile Menu Close Button" className="close-btn" id="closeBtn" onClick={closeMobileMenu}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
