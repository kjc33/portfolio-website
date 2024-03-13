import React from "react";

import PrimaryNavList from "./PrimaryNavList";

export default function PrimaryNav({ mobileNavVisible }) {
  const navItems = [
    { href: "/#about", navLabel: "About" },
    { href: "/#skills", navLabel: "Skills" },
    { href: "/#work", navLabel: "Work" },
  ];

  return <PrimaryNavList navClass="site-nav" navId="siteNav" ulClass="primary-nav" liClass="nav-item" navItems={navItems} isMobile={false} />;
}
