import React from "react";

export default function SocialIcon({ iconParentClasses, href, ariaLabel, children }) {
  return (
    <div className={iconParentClasses}>
      <a href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
        {children}
      </a>
    </div>
  );
}