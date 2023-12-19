import React from "react";

import ContactForm from "./Form";

export default function Contact({ primaryH2, description }) {
  return (
    <section className="contact" id="contact">
      <div className="inner-container flex-column flex-row-desktop x-large-gap">
        <div className="heading-and-description flex-column x-small-gap">
          <h2 className="primary-h2 white">{primaryH2}</h2>
          <div className="large-text underline-link">
            <p>{description}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
