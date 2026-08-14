import React, { useState, useEffect } from "react";
import SiteLogo from "./SiteLogo";
import PrimaryNav from "./PrimaryNav";
import MobileNav from "./MobileNav";
import PrimaryButton from "./PrimaryButton";
import headshot from "../images/kyle-chin-headshot.webp";

export default function Header() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scrolledEnough, setScrolledEnough] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    let lastScrollPosition = window.pageYOffset;
    let ticking = false; // Prevent layout thrashing

    const updateScrollDir = () => {
      const currentScrollPos = window.pageYOffset;

      // Threshold check
      if (currentScrollPos > 200) {
        setScrolledEnough(true);
      } else if (currentScrollPos <= 0) {
        setScrolledEnough(false);
      }

      // Direction check
      if (currentScrollPos > lastScrollPosition) {
        setScrollDirection("scroll-down");
      } else {
        setScrollDirection("scroll-up");
      }

      lastScrollPosition = currentScrollPos > 0 ? currentScrollPos : 0;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking && !mobileMenuVisible) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    // Check on initial mount
    if (window.pageYOffset > 0) {
      setScrolledEnough(true);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuVisible]); // Removed scrolledEnough dependency to prevent listener teardown cycles

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prevVisible) => !prevVisible);
  };

  return (
    <header className={`primary-header ${scrolledEnough && !mobileMenuVisible ? scrollDirection : ""} ${mobileMenuVisible ? "mobile-nav-active" : ""}`}>
      <div className="header-inner">
        <SiteLogo headshot={headshot} siteName="Kyle Chin" alt="Kyle Chin Headshot" width="80" height="80" />
        <PrimaryNav />
        <MobileNav setMobileMenuVisible={setMobileMenuVisible} toggleMobileMenu={toggleMobileMenu} />
        <PrimaryButton url="/#contact" label="Hire Me" />
      </div>
    </header>
  );
}