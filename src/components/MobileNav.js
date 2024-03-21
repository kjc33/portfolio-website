import React, { useState, useEffect } from "react";
import MobileNavList from "./MobileNavList";

export default function MobileNav({ setMobileMenuVisible }) {
  const navItems = [
    { to: "/#about", navLabel: "About" },
    { to: "/#skills", navLabel: "Skills" },
    { to: "/#work", navLabel: "Work" },
    { to: "/#contact", navLabel: "Hire Me" },
  ];

  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Toggle the CSS class based on the mobile menu visibility
    if (mobileNavVisible) {
      document.body.classList.remove("enable-scroll");
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
      document.body.classList.add("enable-scroll");
    }

    // Cleanup function to reset the CSS class
    return () => {
      document.body.classList.remove("disable-scroll", "enable-scroll");
      document.body.classList.add("enable-scroll");
    };
  }, [mobileNavVisible]);

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

  // Only render the mobile menu wrapper if the screen is mobile-sized
  return isMobile ? (
    <div className="mobile-menu-wrapper">
      <div className="mobile-menu-burger" id="mobileMenuBurger" onClick={toggleMobileMenu}>
        <div className="top-bar"></div>
        <div className="middle-bar"></div>
        <div className="bottom-bar"></div>
      </div>
      {mobileNavVisible && (
        <div className="mobile-menu-nav-wrapper" id="mobileMenuNav">
          <MobileNavList navClass="mobile-menu-nav-items" navId="mobileMenuNavItems" ulClass="mobile-menu-nav-list-items" liClass="nav-item" navItems={navItems} onLinkClick={handleLinkClick} />
          <div className="mobile-close-btn">
            <button aria-label="Mobile Menu Close Button" className="close-btn" id="closeBtn" onClick={closeMobileMenu}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  ) : null;
}
