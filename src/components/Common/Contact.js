"use client";

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
// import baseUrl from "../../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully sent.  We'll be in contact soon!",
    icon: "success",
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use Formspree endpoint
      const url = "https://formspree.io/f/xrbpylor";
      const { name, email, number, message } = contact;
      const payload = { name, email, number, message };

      console.log("Submitting form to Formspree");

      const response = await axios.post(url, payload);
      console.log("Form submission response:", response.data);

      // Formspree always returns success on valid submissions
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.error("Form submission error:", error);
      Swal.fire({
        title: "Error!",
        text: "There was a problem sending your message. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <section id="contact" className="contact-area ptb-80 bg-f6f6f6">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h4>Get in Touch</h4>
            <h2>
              Let&apos;s <span>Do</span> This
            </h2>
            <p>
              Want a free, no obligation quote? Have questions? Fill out the
              form below and we&apos;ll get back to you ASAP!
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418768.37970856207!2d-81.06681461663921!3d35.22708685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C+NC!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="392"
                loading="lazy"
              ></iframe>

              <div className="contact-info">
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i> We service the Greater
                    Charlotte, NC area!
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:addax@gmail.com">faratim@gmail.com</a>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="tel:124412-2445515">(219) 608-4505</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <h4>Let&apos;s Chat</h4>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="form-control"
                          value={contact.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          value={contact.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="number">Phone Number</label>
                        <input
                          type="text"
                          name="number"
                          placeholder="Phone number"
                          className="form-control"
                          value={contact.number}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          type="text"
                          name="message"
                          placeholder="Message"
                          className="form-control"
                          cols="30"
                          rows="4"
                          value={contact.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
