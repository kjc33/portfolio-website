// NotFound.js
import React from "react";

const NotFound = () => {
  return (
    <section className="not-found-error">
      <div className="inner-container x-small-width">
        <h1>404 Not Found</h1>
        <p className="green-accent uppercase">Sorry! The page you requested cannot be found.</p>
        <p>If you typed the URL yourself, please make sure the spelling is correct. If you clicked on a link to get here, there may be a problem with the link. Try using your browser’s “Back” button.</p>
      </div>
    </section>
  );
};

export default NotFound;
