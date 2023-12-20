import React from "react";

export default function SocialIcon({ iconParentClasses, href, iconClassNames }) {
  return (
    <div className={iconParentClasses}>
      <a href={href} target="_blank" rel="noreferrer">
        <i className={iconClassNames}></i>
      </a>
    </div>
  );
}
