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
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileNavVisible) {
      document.body.classList.remove("enable-scroll");
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
      document.body.classList.add("enable-scroll");
    }

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

  return isMobile ? (
    <div className="mobile-menu-wrapper">
      {/* Burger Button using your existing CSS bar divs */}
      <button
        type="button"
        className="mobile-menu-burger"
        id="mobileMenuBurger"
        onClick={toggleMobileMenu}
        aria-label={mobileNavVisible ? "Close menu" : "Open navigation menu"}
        aria-expanded={mobileNavVisible}
        aria-controls="mobileMenuNav"
      >
        <div className="top-bar"></div>
        <div className="middle-bar"></div>
        <div className="bottom-bar"></div>
      </button>

      {mobileNavVisible && (
        <div className="mobile-menu-nav-wrapper" id="mobileMenuNav">
          <MobileNavList 
            navClass="mobile-menu-nav-items" 
            navId="mobileMenuNavItems" 
            ulClass="mobile-menu-nav-list-items" 
            liClass="nav-item" 
            navItems={navItems} 
            onLinkClick={handleLinkClick} 
          />
          <div className="mobile-close-btn">
            <button 
              type="button"
              aria-label="Close navigation menu" 
              className="close-btn" 
              id="closeBtn" 
              onClick={closeMobileMenu}
            >
              <svg 
                width="385" 
                height="385" 
                viewBox="0 0 385 385" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
              <path d="M54.675 9.47499C42.175 -3.02501 21.875 -3.02501 9.375 9.47499C-3.125 21.975 -3.125 42.275 9.375 54.775L146.775 192.075L9.47499 329.475C-3.02501 341.975 -3.02501 362.275 9.47499 374.775C21.975 387.275 42.275 387.275 54.775 374.775L192.075 237.375L329.475 374.675C341.975 387.175 362.275 387.175 374.775 374.675C387.275 362.175 387.275 341.875 374.775 329.375L237.375 192.075L374.675 54.675C387.175 42.175 387.175 21.875 374.675 9.375C362.175 -3.125 341.875 -3.125 329.375 9.375L192.075 146.775L54.675 9.47499Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  ) : null;
}