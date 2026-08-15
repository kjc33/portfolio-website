import React, { useEffect, useCallback } from "react";
import MobileNavList from "./MobileNavList";

export default function MobileNav({
  isOpen,
  toggleMobileMenu,
  closeMobileMenu,
}) {
  const navItems = [
    { to: "/#about", navLabel: "About" },
    { to: "/#skills", navLabel: "Skills" },
    { to: "/#work", navLabel: "Work" },
    { to: "/#contact", navLabel: "Hire Me" },
  ];

  // Helper to remove active DOM focus before closing
  const handleClose = useCallback(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    closeMobileMenu();
  }, [closeMobileMenu]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  return (
    <div className="mobile-menu-wrapper">
      <button
        type="button"
        className="mobile-menu-burger"
        id="mobileMenuBurger"
        onClick={toggleMobileMenu}
        aria-label={isOpen ? "Close menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobileMenuNav"
      >
        <div className="top-bar"></div>
        <div className="middle-bar"></div>
        <div className="bottom-bar"></div>
      </button>

      <div
        className={`mobile-menu-nav-wrapper ${isOpen ? "is-open" : ""}`}
        id="mobileMenuNav"
        inert={!isOpen ? "" : undefined}
      >
        <MobileNavList
          navClass="mobile-menu-nav-items"
          navId="mobileMenuNavItems"
          ulClass="mobile-menu-nav-list-items"
          liClass="nav-item"
          navItems={navItems}
          onLinkClick={handleClose}
          mobileNavVisible={isOpen}
        />
        <div className="mobile-close-btn">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="close-btn"
            id="closeBtn"
            onClick={handleClose}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 385 385"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M54.675 9.47499C42.175 -3.02501 21.875 -3.02501 9.375 9.47499C-3.125 21.975 -3.125 42.275 9.375 54.775L146.775 192.075L9.47499 329.475C-3.02501 341.975 -3.02501 362.275 9.47499 374.775C21.975 387.275 42.275 387.275 54.775 374.775L192.075 237.375L329.475 374.675C341.975 387.175 362.275 387.175 374.775 374.675C387.275 362.175 387.275 341.875 374.775 329.375L237.375 192.075L374.675 54.675C387.175 42.175 387.175 21.875 374.675 9.375C362.175 -3.125 341.875 -3.125 329.375 9.375L192.075 146.775L54.675 9.47499Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}