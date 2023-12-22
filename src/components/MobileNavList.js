import React from "react";

export default function MobileNavList({ navClass, navId, ulClass, liClass, navItems, active }) {
  const mobileClass = active ? "active" : "inactive";

  return (
    <nav className={`${navClass} ${mobileClass}`} id={navId}>
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
