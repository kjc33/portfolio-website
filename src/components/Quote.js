import React from "react";

export default function Quote() {
  return (
    <div className="quote">
      <div className="inner-container max-width">
        <div className="quote-body flex-column large-gap">
          <p className="outline-text-large">
            "Kyle is extremely organized, professional, and a master at his craft. From <span className="green-accent">frontend development</span> to design, Kyle is an asset to any team and a genuine pleasure to work with!"
          </p>
          <div className="quote-attribution light-font">
            <p>Steven Howsley, Marketing Analyst, REI</p>
          </div>
        </div>
      </div>
    </div>
  );
}
