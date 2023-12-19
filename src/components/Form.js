import React from "react";

export default function Form() {
  return (
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
  );
}
