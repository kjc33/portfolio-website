import React from "react";
import { HashLink } from "react-router-hash-link";

export default function MobileNavList({ 
  navClass, 
  navId, 
  ulClass, 
  liClass, 
  navItems, 
  onLinkClick,
  mobileNavVisible 
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
      {/* Mobile Drawer Header / Brand Logo */}
      <div className="overlay-logo">
        <div className="logo-inner">
          <HashLink smooth to="/#top" className="site-logo" onClick={handleLinkClick}>
            <figure className="logo-mark-wrapper">
              <img 
                src="/images/kc-logo-mark-dark.svg" 
                alt="Kyle John Chin Logo Mark" 
                className="brand-logo"
                width="855"
                height="626"
              />
            </figure>
          </HashLink>
        </div>
      </div>

      <ul className={ulClass}>
        {navItems.map((item, index) => (
          <li key={index} className={liClass}>
            <HashLink 
              smooth 
              to={item.to} 
              onClick={handleLinkClick}
              tabIndex={mobileNavVisible ? 0 : -1}
            >
              {item.navLabel}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}