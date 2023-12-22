// NavList.js
import React from "react";

export default function PrimaryNavList({ navClass, navId, ulClass, liClass, navItems }) {
  return (
    <nav className={navClass} id={navId}>
      <ul className={ulClass}>
        {navItems.map((item, index) => (
          <li key={index} className={liClass}>
            <a href={item.href}>{item.navLabel}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
