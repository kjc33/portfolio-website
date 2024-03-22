import React from "react";
import { HashLink } from "react-router-hash-link";

export default function ArrowButton({ href, download, target, buttonLabel }) {
  // Check if the link is for download or internal navigation
  const isDownloadLink = download !== undefined;

  return (
    <div className="arrow-btn">
      {isDownloadLink ? (
        // For download links, use a standard <a> tag
        <a href={href} download={download} target={target} rel="noreferrer" className="arrow-btn-text">
          {buttonLabel}
        </a>
      ) : (
        // For internal links, use HashLink for smooth scrolling
        <HashLink smooth to={href} target={target} rel="noreferrer" className="arrow-btn-text">
          {buttonLabel}
        </HashLink>
      )}
    </div>
  );
}
