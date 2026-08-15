import React from "react";
import { HashLink } from "react-router-hash-link";

export default function MobileNavList({ 
  navClass, 
  navId, 
  ulClass, 
  liClass, 
  navItems, 
  onLinkClick,
  mobileNavVisible // Passed from MobileNav.js
}) {

  const handleLinkClick = () => {
    if (onLinkClick && typeof onLinkClick === "function") {
      onLinkClick();
    }
  };

  return (
    <nav 
      className={`${navClass}`} 
      id={navId}
      aria-label="Mobile Navigation"
      aria-hidden={!mobileNavVisible}
    >
      <ul className={ulClass}>
        {navItems.map((item, index) => (
          <li key={index} className={liClass}>
            <HashLink 
              smooth 
              to={item.to} 
              onClick={handleLinkClick}
              tabIndex={mobileNavVisible ? 0 : -1} // Prevents keyboard users from tabbing into hidden links
            >
              {item.navLabel}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}