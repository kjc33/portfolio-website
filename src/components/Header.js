import React, { useState, useEffect, useRef } from "react";
import SiteLogo from "./SiteLogo";
import PrimaryNav from "./PrimaryNav";
import MobileNav from "./MobileNav";
import PrimaryButton from "./PrimaryButton";
import headshot from "../images/kyle-chin-headshot.jpg";

export default function Header() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scrolledEnough, setScrolledEnough] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    let lastScrollPosition = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (!scrolledEnough && currentScrollPos > 200) {
        setScrolledEnough(true);
      }
      if (scrolledEnough) {
        if (currentScrollPos > lastScrollPosition) {
          setScrollDirection("scroll-down");
        } else {
          setScrollDirection("scroll-up");
        }
      }
      lastScrollPosition = currentScrollPos;
    };

    const checkInitialScroll = () => {
      if (window.pageYOffset > headerRef.current.clientHeight) {
        setScrolledEnough(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    checkInitialScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolledEnough]);

  return (
    <header ref={headerRef} className={`primary-header ${scrolledEnough ? scrollDirection : ""}`}>
      <div className={`header-inner ${isMobileMenuActive ? "menu-active" : ""}`}>
        <SiteLogo headshot={headshot} siteName="Kyle Chin" alt="Kyle Chin Headshot" width="80" height="80" />
        <PrimaryNav />
        <MobileNav setIsMobileMenuActive={setIsMobileMenuActive} />
        <PrimaryButton url="/#contact" label="Hire Me" />
      </div>
    </header>
  );
}
