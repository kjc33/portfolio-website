import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [apiEndpoint, setApiEndpoint] = useState(null);

  useEffect(() => {
    fetch("/api/env")
      .then((response) => response.json())
      .then((data) => {
        const { CONTACT_FORM_ROUTES } = data;
        setApiEndpoint(CONTACT_FORM_ROUTES);
      })
      .catch((error) => {
        console.error("Error fetching environment variables:", error);
      });
  }, []); // Run only once when the component mounts

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    if (!apiEndpoint) {
      console.error("API endpoint not available");
      return;
    }
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Redirect to the "Thank You" page or handle success
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      })
      .finally(() => setSubmitting(false));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "First name is required";
    }
    if (!values.last_name) {
      errors.last_name = "Last name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (values.phone && !/^\(\d{3}\) \d{3}-\d{4}$/.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (values.website && !/^(https?:\/\/)?(www\.)?[\w-]+(\.[\w-]+)+([/?].*)?$/.test(values.website)) {
      errors.website = "Invalid website URL";
    }
    console.log("Validation errors:", errors);
    setValidationErrors(errors);
    return errors;
  };

  return (
    <div className="form-wrapper small-gap">
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          website: "",
          message: "",
        }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="contact-form display-grid" id="contact-form">
            <div className={"field-wrapper first-name display-grid" + (submitted && validationErrors.first_name ? " error" : "")}>
              <label htmlFor="first_name">First Name</label>
              <Field type="text" name="first_name" id="first_name" placeholder="First Name" autoComplete="on" />
              <ErrorMessage name="first_name" component="div" className="error-message" />
            </div>
            <div className={"field-wrapper last-name display-grid" + (submitted && validationErrors.last_name ? " error" : "")}>
              <label htmlFor="last_name">Last Name</label>
              <Field type="text" name="last_name" id="last_name" placeholder="Last Name" autoComplete="on" />
              <ErrorMessage name="last_name" component="div" className="error-message" />
            </div>
            <div className={"field-wrapper email display-grid" + (submitted && validationErrors.email ? " error" : "")}>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" placeholder="Email" autoComplete="on" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className={"field-wrapper phone display-grid" + (submitted && validationErrors.phone ? " error" : "")}>
              <label htmlFor="phone">Phone</label>
              <Field type="tel" name="phone" id="phone" placeholder="Phone" autoComplete="on" />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>
            <div className="field-wrapper website display-grid">
              <label htmlFor="website">Website</label>
              <Field type="url" name="website" id="website" placeholder="Website" />
              <ErrorMessage name="website" component="div" className="error-message" />
            </div>
            <div className="field-wrapper message display-grid">
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" id="message" cols="30" rows="10" placeholder="Tell me about your website goals, budget, and any other important project details." />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
