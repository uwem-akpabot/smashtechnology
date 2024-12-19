import React, { useState } from "react";
import Header from '../__public/__layouts/Header';
import { Helmet } from 'react-helmet';

const ApplicationForm = () => {
  const [step, setStep] = useState(1); // State to track form steps

  // State to manage form fields
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    address: "",
  });

  // Update form field values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Move to the next step
  const nextStep = () => setStep(step + 1);

  // Move to the previous step
  const prevStep = () => setStep(step - 1);

  return (
    <>
    <Helmet>
      <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
    </Helmet>
    
    <Header />

    <div className="form-wrapper">
      {step === 1 && (
        <section className="application-form">
          <button className="back-btn">&larr;</button>
          <div className="form-header">
            <h1>Application Form</h1>
            <span className="dot"></span>
            <h2>Product Designer</h2>
          </div>
          <div className="form-container">
            <form>
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />

              <label>Middle Name*</label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Enter your middle name"
                required
              />

              <label>Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />

              <button type="button" className="next-btn" onClick={nextStep}>
                Next
              </button>
            </form>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="application-form">
          <button className="back-btn" onClick={prevStep}>
            &larr;
          </button>
          <div className="form-header">
            <h1>Application Form</h1>
            <span className="dot"></span>
            <h2>Product Designer</h2>
          </div>
          <div className="form-container">
            <form>
              <label>Date of Birth*</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />

              <label>Address*</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your residential address"
                required
              />

              <button type="submit" className="next-btn">
                Submit
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
    </>
  );
}
export default ApplicationForm;