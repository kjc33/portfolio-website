import React from "react";

import SkillList from "./SkillList";
import ArrowButton from "./ArrowButton";

export default function Skills() {
  const column1Skills = [
    {
      text: (
        <>
          Certified{" "}
          <a href="https://verify.w3schools.com/1O963J2W5L" target="_blank" rel="noreferrer">
            Frontend Developer
          </a>
          , including{" "}
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
        </>
      ),
    },
    { text: "WordPress and Visual Page Builders (Elementor and WP Bakery)" },
    { text: "Bash / Linux Terminal" },
    { text: "Git / GitHub Version Control" },
  ];

  const column2Skills = [{ text: "FTP, cPanel, SMTP, and DNS" }, { text: "Photoshop, Illustrator, Sketch, and Figma" }, { text: "Google Analytics, Search Console, and Tag Manager" }];

  return (
    <section className="skills no-bottom-padding" id="skills">
      <div className="inner-container large-width flex-row flex-column-mobile justify-space-between large-gap">
        <div className="heading-with-cta">
          <h2 className="primary-h2 white">Skills</h2>
          <div className="arrow-btn">
            <ArrowButton 
              href="./docs/kyle-chin-resume.pdf" 
              download="kyle-chin-resume.pdf"
              buttonLabel="View Résumé"
            />
            {/* <a href="./docs/kyle-chin-resume.pdf" download="kyle-chin-resume.pdf" target="_blank" rel="noreferrer" className="arrow-btn-text">
              View Résumé
            </a> */}
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
