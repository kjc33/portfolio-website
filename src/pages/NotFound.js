import React, { useEffect } from "react";

const NotFound = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="not-found-error">
      <div className="inner-container flex-column small-gap x-small-width">
        <h1 className="primary-h1 white">404 Not Found</h1>
        <p className="green-accent uppercase">Sorry! The page you requested cannot be found.</p>
        <div className="underline-link">
          <p>If you typed the URL yourself, please make sure the spelling is correct. If you clicked on a link to get here, there may be a problem with the link. Try using your browser’s “Back” button.</p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
