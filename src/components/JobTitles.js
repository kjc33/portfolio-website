import React from "react";

export default function JobTitles() {
  return (
    <section className="job-titles">
      <div className="inner-container max-width flex-row flex-column-tablet large-gap">
        <div className="job-card developer-card flex-column large-gap">
          <h3>Developer</h3>
          <p className="percentage">70 Percent</p>
          <p className="pagination">{"// 01"}</p>
        </div>
        <div className="job-card designer-card flex-column large-gap">
          <h3>Designer</h3>
          <p className="percentage">20 Percent</p>
          <p className="pagination">{"// 02"}</p>
        </div>
        <div className="job-card strategist-card flex-column large-gap">
          <h3>Strategist</h3>
          <p className="percentage">10 Percent</p>
          <p className="pagination">{"// 03"}</p>
        </div>
      </div>
    </section>
  );
}
