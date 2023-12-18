import React from "react";

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
        <div className="form-wrapper small-gap">
          <form action="thank-you.html" method="post" className="contact-form display-grid" id="contact-form">
            <input type="text" name="first-name" id="firstName" placeholder="First Name" required />
            <input type="text" name="last-name" id="lastName" placeholder="Last Name" required />
            <input type="email" name="email" id="email" placeholder="Email" required />
            <input type="tel" name="phone" id="phone" placeholder="Phone" />
            <input type="url" name="website" id="website" placeholder="Website" />
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Tell me about your website goals, budget, and anything other pertinent details."></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
}
