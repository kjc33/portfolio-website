import React from "react";

export default function Location({ location, latitude, longitude }) {
  return (
    <div className="location vertical flex-column">
      <p>
        {latitude}&deg; N, {longitude}&deg; W
      </p>
      <p>{location}</p>
    </div>
  );
}
