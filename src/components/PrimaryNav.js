import React from "react";

import PrimaryNavList from "./PrimaryNavList";

export default function PrimaryNav({ mobileNavVisible }) {
  const navItems = [
    { href: "www.kylejohnchin.com/#about", navLabel: "About" },
    { href: "www.kylejohnchin.com/#skills", navLabel: "Skills" },
    { href: "www.kylejohnchin.com/#work", navLabel: "Work" },
  ];

  return <PrimaryNavList navClass="site-nav" navId="siteNav" ulClass="primary-nav" liClass="nav-item" navItems={navItems} isMobile={false} />;
}
