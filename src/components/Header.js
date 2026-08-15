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

  // Close handler passed to child nav components
  const closeMobileMenu = useCallback(() => {
    setMobileMenuVisible(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuVisible((prev) => !prev);
  }, []);

  // Sync body scroll locking when mobile menu toggles
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

  // Scroll direction & sticky threshold tracking
  useEffect(() => {
    let lastScrollPosition = typeof window !== "undefined" ? window.pageYOffset : 0;
    let ticking = false;

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

    // Check initial scroll on mount safely
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
        <div className="header-brand">
          <SiteLogo
            headshot={headshot}
            siteName="Kyle Chin"
            alt="Kyle Chin Headshot"
            width="80"
            height="80"
          />
        </div>

        {/* Desktop Navigation */}
        <PrimaryNav />

        {/* Mobile Navigation */}
        <MobileNav
          isOpen={mobileMenuVisible}
          toggleMobileMenu={toggleMobileMenu}
          closeMobileMenu={closeMobileMenu}
        />

        <div className="header-actions">
          <PrimaryButton
            url="/#contact"
            label="Hire Me"
            onClick={closeMobileMenu}
          />
        </div>
      </div>
    </header>
  );
}