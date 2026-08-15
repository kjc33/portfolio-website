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
      <div className="overlay-logo">
        <div className="logo-inner">
          <div className="headshot">
            <figure>
              <img 
                src="/images/headshot.webp" 
                alt="Kyle John Chin" 
                width="40" 
                height="40" 
              />
            </figure>
          </div>
          <div className="site-name">
            <HashLink smooth to="/#top" className="site-logo" onClick={handleLinkClick}>
              <p className="pure-black">Kyle John Chin</p>
            </HashLink>
          </div>
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