import React from "react";

import NavList from "./NavList";

export default function PrimaryNav() {
  const navItems = [
    { href: "#about", navLabel: "About" },
    { href: "#skills", navLabel: "Skills" },
    { href: "#work", navLabel: "Work" },
  ];

  return <NavList navClass="site-nav" navId="siteNav" ulClass="primary-nav" liClass="nav-item" navItems={navItems} />;
}
