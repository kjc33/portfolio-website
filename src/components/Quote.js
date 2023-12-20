import React from "react";

export default function Quote({ children, name, position, company }) {
  return (
    <div className="quote">
      <div className="inner-container max-width">
        <div className="quote-body flex-column large-gap">
          <p className="outline-text-large">
            {children}
          </p>
          <div className="quote-attribution light-font">
            <p>
              {name}, {position}, {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
