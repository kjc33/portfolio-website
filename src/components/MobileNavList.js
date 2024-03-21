import React from "react";
import { HashLink } from "react-router-hash-link";

export default function MobileNavList({ navClass, navId, ulClass, liClass, navItems, onLinkClick }) {

  const handleLinkClick = () => {
    if (onLinkClick && typeof onLinkClick === "function") {
      onLinkClick();
    }
  };

  return (
    <nav className={`${navClass}`} id={navId}>
      <ul className={ulClass}>
        {navItems.map((item, index) => (
          <li key={index} className={liClass}>
            <HashLink smooth to={item.to} onClick={handleLinkClick}>
              {item.navLabel}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
