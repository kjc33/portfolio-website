import React, { useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";

function ThankYou() {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="thank-you">
      <div className="inner-container flex-column small-gap x-small-width">
        <h1 className="primary-h1 white">Thank You</h1>
        <div className="underline-link">
          <p>Thank you for contacting me. Please allow 24-48 hours for a response. I look forward to connecting with you soon.</p>
        </div>
        <PrimaryButton url="/" label="Home" />
      </div>
    </section>
  );
}

export default ThankYou;
