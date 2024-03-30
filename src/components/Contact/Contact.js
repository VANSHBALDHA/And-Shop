import React, { useState } from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { Flip, Slide, ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    subjectError: "",
    messageError: "",
  });

  const handleChange = (e) => {
    setInquiry({ ...inquiry, [e.target.name]: e.target.value });
  };

  const userinquiry = {
    name: inquiry.name,
    email: inquiry.email,
    phone: inquiry.phone,
    subject: inquiry.subject,
    message: inquiry.message,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inquiry);

    if (
      !inquiry.name ||
      !inquiry.email ||
      !inquiry.phone ||
      !inquiry.subject ||
      !inquiry.message
    ) {
      setError({
        nameError: "Name is required",
        emailError: "Email is required",
        phoneError: "Phone is required",
        subjectError: "Subject is required",
        messageError: "Message is required",
      });
      toast.info("Please fill all fields", {
        position: toast.POSITION.TOP_CENTER,
        transition: Flip,
        autoClose: 500,
      });
    } else {
      axios
        .post("http://localhost:3078/inquiry", userinquiry)
        .then((res) => {
          toast.success("Inquiry sent successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 500,
          });
          setError({
            nameError: "",
            emailError: "",
            phoneError: "",
            subjectError: "",
            messageError: "",
          });
          setInquiry({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>AND SHOP - Contact</title>
      </Helmet>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-text">
                <h2>Contact us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item items">Contact</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="info">
                <h3>Contact Information</h3>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac
                  diam sit amet quam vehicula elementum sed sit amet dui. Proin
                  eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
                  nibh pulvinar a. Curabitur non nulla sit amet nisl tempus
                  convallis quis ac lectus. Vivamus magna justo, lacinia eget
                  consectetur sed, convallis at tellus. Cras ultricies ligula
                  sed magna dictum porta. Proin eget tortor risus. Curabitur
                  arcu erat, accumsan id imperdiet et, porttitor at sem.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="address">
                  <ul>
                    <li className="address-location">
                      <FontAwesomeIcon icon={faLocationDot} className="icon" />
                      <p>
                        32, Choto Mirzapur, Ahsan Ahmed Road Khulna 9100,
                        Bangladesh
                      </p>
                    </li>

                    <li className="address-location">
                      <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
                      <div className="contact">
                        <div className="contact_widget">
                          <a href="tel:2873077">+1 (111) 222-3434</a>
                          <a href="tel:2873077">+1 (121) 343-4554</a>
                        </div>
                      </div>
                    </li>
                    <li className="address-location">
                      <FontAwesomeIcon icon={faEnvelope} className="icon" />
                      <div className="contact">
                        <div className="contact_widget">
                          <a href="mailto:demo@gmail.com">demo@gmail.com</a>{" "}
                          <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="contact-form">
                  <h4 className="pb-4">Get In Touch</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            className="form-control"
                            value={inquiry.name}
                            onChange={(e) => handleChange(e)}
                          />
                          {inquiry.name ? "" : <span>{error.nameError}</span>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email*"
                            className="form-control"
                            value={inquiry.email}
                            onChange={(e) => handleChange(e)}
                          />
                          {inquiry.email ? "" : <span>{error.emailError}</span>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone*"
                            className="form-control"
                            value={inquiry.phone}
                            onChange={(e) => handleChange(e)}
                          />
                          {inquiry.phone ? "" : <span>{error.phoneError}</span>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject*"
                            className="form-control"
                            value={inquiry.subject}
                            onChange={(e) => handleChange(e)}
                          />
                          {inquiry.subject ? (
                            ""
                          ) : (
                            <span>{error.subjectError}</span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            type="text"
                            rows={6}
                            id="message"
                            name="message"
                            placeholder="Message*"
                            className="form-control"
                            value={inquiry.message}
                            onChange={(e) => handleChange(e)}
                          />
                          {inquiry.message ? (
                            ""
                          ) : (
                            <span>{error.messageError}</span>
                          )}
                        </div>
                      </div>
                      <div>
                        <button className="btn btn-outiline btn-sm shop-button">
                          submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="map pt-5 pb-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d14690.244577649062!2d72.5559743!3d23.00315995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m3!3m2!1d23.002705499999998!2d72.5498803!4m0!5e0!3m2!1sen!2sin!4v1695926675436!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="contact-map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
