import React from "react";
import ContactForm from "./Form";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="inner-container flex-column flex-row-desktop x-large-gap">
        <div className="heading-and-description flex-column x-small-gap">
          <h2 className="primary-h2 white">Let's Talk</h2>
          <div className="large-text underline-link">
            <p>I am open to contract work (strategy, design, development, or website maintenance) and full-time agency or studio employment.</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
