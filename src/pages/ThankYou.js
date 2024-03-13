import React from "react";
import PrimaryButton from "../components/PrimaryButton";

function ThankYou() {
  return (
    <section className="thank-you">
      <div className="inner-container flex-column small-gap large-text underline-link x-small-width">
        <h1>Thank You</h1>
        <p>Thank you for contacting me. Please allow 24-48 hours for a response. I look forward to connecting with you soon.</p>
        <PrimaryButton url="/" label="Homepage" />
      </div>
    </section>
  );
}

export default ThankYou;
