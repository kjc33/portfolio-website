import React from "react";
import { HashLink } from "react-router-hash-link";

export default function ArrowButton({ href = "", download, target, buttonLabel }) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const isStandardLink = download !== undefined || isExternal;

  return (
    <div className="arrow-btn">
      {isStandardLink ? (
        <a
          href={href}
          download={download}
          target={target}
          rel="noreferrer"
          className="arrow-btn-text"
        >
          {buttonLabel}
        </a>
      ) : (
        <HashLink
          smooth
          to={href}
          target={target}
          rel="noreferrer"
          className="arrow-btn-text"
        >
          {buttonLabel}
        </HashLink>
      )}
    </div>
  );
}