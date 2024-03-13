import React from "react";
import { HashLink } from "react-router-hash-link";

export default function About({ primaryH2, paragraph1, paragraph2, link, linkText }) {
  return (
    <section className="about no-bottom-padding" id="about">
      <div className="inner-container medium-width">
        <h2 className="primary-h2 white">{primaryH2}</h2>
        <div className="large-text underline-link">
          <p>{paragraph1}.</p>
          <p>
            {paragraph2}{" "}
            <HashLink smooth to={link}>
              {linkText}
            </HashLink>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
