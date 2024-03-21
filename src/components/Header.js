import React, { useState, useEffect } from "react";

import SiteLogo from "./SiteLogo";
import PrimaryNav from "./PrimaryNav";
import MobileNav from "./MobileNav";
import PrimaryButton from "./PrimaryButton";

import headshot from "../images/kyle-chin-headshot.jpg";

export default function Header() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollPosition = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollPosition) {
        setScrollDirection("scroll-down");
      } else {
        setScrollDirection("scroll-up");
      }
      lastScrollPosition = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`primary-header ${scrollDirection}`}>
      <div className="header-inner">
        <SiteLogo headshot={headshot} siteName="Kyle Chin" alt="Kyle Chin Headshot" width="80" height="80" />
        <PrimaryNav />
        <MobileNav />
        <PrimaryButton url="/#contact" label="Hire Me" />
      </div>
    </header>
  );
}
