import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function ContactForm() {
  const navigate = useNavigate(); // Initialize useNavigate
  const API_URL = process.env.REACT_APP_API_URL;

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
        validate={(values) => {
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
          if (values.website && !/^(https?:\/\/)?(www\.)?[\w-]+(\.[\w-]+)+([/?].*)?$/.test(values.website)) {
            errors.website = "Invalid website URL";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm, setErrors }) => {
          fetch(`${API_URL}/api/contact-form`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          })
            .then((response) => {
              if (!response.ok) throw new Error("Network response was not ok");
              return response.json();
            })
            .then((data) => {
              console.log("Success:", data);
              setSubmitting(false);
              resetForm();
              navigate("/thank-you"); // Redirect on success
            })
            .catch((error) => {
              console.error("Error:", error);
              setSubmitting(false);
              setErrors({ submit: "There was an error submitting the form. Please try again later." });
            });
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="contact-form display-grid" id="contact-form">
            <div className={"field-wrapper first-name display-grid" + (touched.first_name && errors.first_name ? " error" : "")}>
              <label htmlFor="first_name">First Name</label>
              <Field type="text" name="first_name" id="first_name" placeholder="First Name" autoComplete="on" />
              <ErrorMessage name="first_name" component="div" className="error-message" />
            </div>
            <div className={"field-wrapper last-name display-grid" + (touched.last_name && errors.last_name ? " error" : "")}>
              <label htmlFor="last_name">Last Name</label>
              <Field type="text" name="last_name" id="last_name" placeholder="Last Name" autoComplete="on" />
              <ErrorMessage name="last_name" component="div" className="error-message" />
            </div>
            <div className={"field-wrapper email display-grid" + (touched.email && errors.email ? " error" : "")}>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" placeholder="Email" autoComplete="on" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className={"field-wrapper phone display-grid" + (touched.phone && errors.phone ? " error" : "")}>
              <label htmlFor="phone">Phone</label>
              <Field type="tel" name="phone" id="phone" placeholder="Phone" autoComplete="on" />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>
            <div className={"field-wrapper website display-grid" + (touched.website && errors.website ? " error" : "")}>
              <label htmlFor="website">Website</label>
              <Field type="text" name="website" id="website" placeholder="Website" autoComplete="on" />
              <ErrorMessage name="website" component="div" className="error-message" />
            </div>
            <div className={"field-wrapper message display-grid" + (touched.message && errors.message ? " error" : "")}>
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" id="message" placeholder="Message" cols="30" rows="10" autoComplete="on" />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>
            <div className="button-wrapper flex align-center">
              <button type="submit" disabled={isSubmitting} className={`submit-button ${isSubmitting ? "submitting" : ""}`}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {isSubmitting && <span className="spinner"></span>}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
