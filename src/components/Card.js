import React from "react";

export default function Card({ containerClasses, primaryH3, percentage, pagination }) {
  return (
    <div className={containerClasses}>
      <h3>{primaryH3}</h3>
      <p className="percentage">{percentage}</p>
      <p className="pagination">{pagination}</p>
    </div>
  );
}
