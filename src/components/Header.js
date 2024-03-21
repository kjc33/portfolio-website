import React, { useState, useEffect } from "react";
import SiteLogo from "./SiteLogo";
import PrimaryNav from "./PrimaryNav";
import MobileNav from "./MobileNav";
import PrimaryButton from "./PrimaryButton";
import headshot from "../images/kyle-chin-headshot.jpg";

export default function Header() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scrolledEnough, setScrolledEnough] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    let lastScrollPosition = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (!scrolledEnough && currentScrollPos > 200) {
        setScrolledEnough(true);
      }
      if (scrolledEnough && !mobileMenuVisible) {
        if (currentScrollPos > lastScrollPosition) {
          setScrollDirection("scroll-down");
        } else {
          setScrollDirection("scroll-up");
        }
      }
      lastScrollPosition = currentScrollPos;
    };

    const checkInitialScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolledEnough(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    checkInitialScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolledEnough, mobileMenuVisible]);

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
