import React from "react";

export default function Skills() {
  return (
    <section className="skills no-bottom-padding" id="skills">
      <div className="inner-container large-width flex-row flex-column-mobile justify-space-between large-gap">
        <div className="heading-with-cta">
          <h2 className="primary-h2 white">Skills</h2>
          <div className="arrow-btn">
            <a href="./docs/kyle-chin-resume.pdf" target="_blank" rel="noreferrer" className="arrow-btn-text">
              View Résumé
            </a>
          </div>
        </div>
        <div className="skills-list flex-row large-gap">
          <div className="skills-column-1">
            <ul className="custom-list underline-link">
              <li>
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
              </li>
              <li>WordPress and Visual Page Builders (Elementor and WP Bakery)</li>
              <li>Bash / Linux Terminal</li>
              <li>Git / GitHub Version Control</li>
            </ul>
          </div>
          <div className="skills-column-2">
            <ul className="custom-list underline-link">
              <li>FTP, cPanel, SMTP, and DNS</li>
              <li>Photoshop, Illustrator, Sketch, and Figma</li>
              <li>Google Analytics, Search Console, and Tag Manager</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
