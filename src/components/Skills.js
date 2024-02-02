import React from "react";

import SkillList from "./SkillList";
import ArrowButton from "./ArrowButton";

export default function Skills({ primaryH2 }) {
  const column1Skills = [
    {
      text: (
        <>
          Certified in{" "}
          <a href="https://verify.w3schools.com/1OH49UNPGF" target="_blank" rel="noreferrer">
            React
          </a>
          {" "}and{" "}
          <a href="https://verify.w3schools.com/1O963J2W5L" target="_blank" rel="noreferrer">
            Front-end Development
          </a>
          {" "}{"("}
          <a href="https://verify.w3schools.com/1O5HIAQZ4E" target="_blank" rel="noreferrer">
            HTML
          </a>
          ,{" "}
          <a href="https://verify.w3schools.com/1O5JOA4BC6" target="_blank" rel="noreferrer">
            CSS
          </a>
          , and{" "}
          <a href="https://verify.w3schools.com/1O963ITIZN" target="_blank" rel="noreferrer">
            JavaScript
          </a>
          {")"}
        </>
      ),
    },
    { text: "Express, Node.js, and PostgreSQL" },
    { text: "WordPress and Visual Page Builders (Elementor and WP Bakery)" },
    { text: "Bash / Linux Terminal" },
  ];

  const column2Skills = [{ text: "Git / GitHub Version Control" }, { text: "FTP, cPanel, SMTP, and DNS" }, { text: "Photoshop, Illustrator, Sketch, and Figma" }, { text: "Google Analytics, Search Console, and Tag Manager" }];

  return (
    <section className="skills no-bottom-padding" id="skills">
      <div className="inner-container large-width flex-row flex-column-mobile justify-space-between large-gap">
        <div className="heading-with-cta">
          <h2 className="primary-h2 white">{primaryH2}</h2>
          <div className="arrow-btn">
            <ArrowButton href="./docs/kyle-chin-resume.pdf" download="kyle-chin-resume.pdf" buttonLabel="View Résumé" />
          </div>
        </div>
        <div className="skills-list flex-row large-gap">
          <div className="skills-column-1">
            <SkillList items={column1Skills} />
          </div>
          <div className="skills-column-2">
            <SkillList items={column2Skills} />
          </div>
        </div>
      </div>
    </section>
  );
}
