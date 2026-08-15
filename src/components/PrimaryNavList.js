import React from "react";
import { HashLink } from "react-router-hash-link";

export default function PrimaryNavList({
  navClass,
  navId,
  ulClass,
  liClass,
  navItems,
  isMobile = false,
  mobileNavVisible = false,
  onLinkClick
}) {
  return (
    <nav
      className={navClass}
      id={navId}
      aria-label="Primary Navigation"
    >
      <ul className={ulClass}>
        {navItems.map((item) => (
          <li key={item.to} className={liClass}>
            <HashLink
              smooth
              to={item.to}
              onClick={onLinkClick}
              tabIndex={isMobile ? (mobileNavVisible ? 0 : -1) : 0}
            >
              {item.navLabel}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}