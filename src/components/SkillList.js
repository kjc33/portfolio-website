import React from "react";

import SkillItem from "./SkillItem";

export default function SkillList({ items }) {
  return (
    <ul className="custom-list underline-link">
      {items.map((item, index) => (
        <SkillItem key={index} item={item} />
      ))}
    </ul>
  );
}
