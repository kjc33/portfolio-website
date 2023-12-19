import React from "react";

import Card from "./Card";

export default function JobTitles() {
  return (
    <section className="job-titles">
      <div className="inner-container max-width flex-row flex-column-tablet large-gap">
        <Card containerClasses="job-card developer-card flex-column large-gap" primaryH3="Developer" percentage="70 Percent" pagination="// 01" />
        <Card containerClasses="job-card designer-card flex-column large-gap" primaryH3="Designer" percentage="20 Percent" pagination="// 02" />
        <Card containerClasses="job-card strategist-card flex-column large-gap" primaryH3="Strategist" percentage="10 Percent" pagination="// 03" />
      </div>
    </section>
  );
}
