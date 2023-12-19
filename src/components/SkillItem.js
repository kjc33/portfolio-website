import React from "react";

export default function SkillItem({ item }) {
  return <li>{typeof item.text === "string" ? item.text : <>{item.text}</>}</li>;
}
