import React from "react";

export default function SkillList({ items }) {
  return (
    <ul className="custom-list underline-link">
      {items.map((item, index) => (
        <li key={index}>{typeof item.text === "string" ? item.text : <>{item.text}</>}</li>
      ))}
    </ul>
  );
}
