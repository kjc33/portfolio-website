import React from "react";

import PrimaryNavList from "./PrimaryNavList";

export default function PrimaryNav() {
  const navItems = [
    { to: "/#about", navLabel: "About" },
    { to: "/#skills", navLabel: "Skills" },
    { to: "/#work", navLabel: "Work" },
  ];

  return <PrimaryNavList navClass="site-nav" navId="siteNav" ulClass="primary-nav" liClass="nav-item" navItems={navItems} isMobile={false} />;
}
