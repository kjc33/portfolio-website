import React, { useState, useEffect, useCallback } from "react";
import SiteLogo from "./SiteLogo";
import PrimaryNav from "./PrimaryNav";
import MobileNav from "./MobileNav";
import PrimaryButton from "./PrimaryButton";
import headshot from "../images/kyle-chin-headshot.webp";

export default function Header() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scrolledEnough, setScrolledEnough] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuVisible(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    if (mobileMenuVisible) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [mobileMenuVisible]);

  useEffect(() => {
    let lastScrollPosition = typeof window !== "undefined" ? window.pageYOffset : 0;
    let ticking = false;

    const updateScrollDir = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 200) {
        setScrolledEnough(true);
      } else if (currentScrollPos <= 0) {
        setScrolledEnough(false);
      }

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

    if (typeof window !== "undefined" && window.pageYOffset > 0) {
      setScrolledEnough(true);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuVisible]);

  return (
    <header
      className={`primary-header ${
        scrolledEnough && !mobileMenuVisible ? scrollDirection : ""
      } ${mobileMenuVisible ? "mobile-nav-active" : ""}`}
    >
      <div className="header-inner">
        <h1>TESTING BREAKAGE</h1>
        <div className="header-brand">
          <SiteLogo
            headshot={headshot}
            siteName="Kyle Chin"
            alt="Kyle Chin Headshot"
            width="80"
            height="80"
          />
        </div>

        {/* Desktop Links */}
        <PrimaryNav />

        {/* Desktop CTA Button */}
        <div className="header-cta">
          <PrimaryButton
            url="/#contact"
            label="Hire Me"
            onClick={closeMobileMenu}
          />
        </div>

        {/* Mobile Navigation Toggle & Drawer */}
        <MobileNav
          isOpen={mobileMenuVisible}
          toggleMobileMenu={toggleMobileMenu}
          closeMobileMenu={closeMobileMenu}
        />
      </div>
    </header>
  );
}