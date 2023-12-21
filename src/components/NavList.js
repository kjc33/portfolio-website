import React from "react";

export default function NavList({ navClass, navId, ulClass, liClass, navItems, mobileNavVisible }) {
  return (
    <nav className={`${navClass} ${mobileNavVisible && "active"}`} id={navId}>
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
