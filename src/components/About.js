import React from "react";

export default function About({ primaryH2, paragraph1, paragraph2, link, linkText }) {
  return (
    <section className="about no-bottom-padding" id="about">
      <div className="inner-container medium-width">
        <h2 className="primary-h2 white">{primaryH2}</h2>
        <div className="large-text underline-link">
          <p>
            {paragraph1}.
          </p>
          <p>
            {paragraph2} <a href={link}>{linkText}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
