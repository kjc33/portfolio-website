import React from "react";

import SiteLogo from "./SiteLogo";
import PrimaryNav from "./PrimaryNav";
import MobileNav from "./MobileNav";
import PrimaryButton from "./PrimaryButton";

import headshot from "../images/kyle-headshot-square.jpg";

export default function Header() {
  return (
    <header className="primary-header">
      <div className="header-inner">
        <SiteLogo headshot={headshot} siteName="Kyle Chin" alt="Kyle Chin Headshot" width="80" height="80" />
        <PrimaryNav />
        <MobileNav />
        <PrimaryButton url="#contact" label="Hire Me" />
      </div>
    </header>
  );
}
