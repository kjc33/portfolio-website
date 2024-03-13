import React from "react";
import { HashLink } from "react-router-hash-link";

export default function PrimaryNavList({ navClass, navId, ulClass, liClass, navItems }) {
  return (
    <nav className={navClass} id={navId}>
      <ul className={ulClass}>
        {navItems.map((item, index) => (
          <li key={index} className={liClass}>
            <HashLink smooth to={item.to}>
              {item.navLabel}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
