import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(faEyeSlash);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    numberError: "",
    addressError: "",
  });

  const [passerror, setPassError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "username") {
      if (value.length >= 3) {
        setFormErrors({ ...formErrors, usernameError: "" });
      } else {
        setFormErrors({
          ...formErrors,
          usernameError: "Username must be at least 3 characters",
        });
      }
    } else if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailPattern.test(value)) {
        setFormErrors({ ...formErrors, emailError: "" });
      } else {
        setFormErrors({ ...formErrors, emailError: "Invalid email format" });
      }
    } else if (name === "password") {
      if (value.length >= 6) {
        setFormErrors({ ...formErrors, passwordError: "" });
      } else {
        setFormErrors({
          ...formErrors,
          passwordError: "Password must be at least 6 characters",
        });
      }
    } else if (name === "confirmPassword") {
      if (value === formData.password) {
        setFormErrors({ ...formErrors, confirmPasswordError: "" });
      } else {
        setFormErrors({
          ...formErrors,
          confirmPasswordError: "Passwords do not match",
        });
      }
    } else if (name === "number") {
      if (value.length >= 10) {
        setFormErrors({ ...formErrors, numberError: "" });
      } else {
        setFormErrors({
          ...formErrors,
          numberError: "Please enter valid phone number",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const minPasswordLength = 6;

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      formData.password !== formData.confirmPassword ||
      !formData.number ||
      !formData.address
    ) {
      setFormErrors({
        usernameError: "Name must be filled",
        emailError: "Email must be filled",
        passwordError: "Password must be filled",
        confirmPasswordError: "Confirm Password must be filled",
        numberError: "Number must be filled",
        addressError: "Address must be filled",
      });
      setPassError("Confirm Password Must be match");
    } else if (formData.username.length < 3) {
      setFormErrors({
        usernameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
        numberError: "",
        addressError: "",
      });
    } else if (formData.password.length < minPasswordLength) {
      setFormErrors({
        usernameError: "",
        emailError: "",
        passwordError: `Password must be at least ${minPasswordLength} characters`,
        confirmPasswordError: "",
        numberError: "",
        addressError: "",
      });
    } else {
      setFormErrors({
        usernameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
        numberError: "",
        addressError: "",
      });

      axios
        .post("http://localhost:3078/users", { user: formData })
        .then((response) => {
          toast.success("Signup Successfully..", {
            position: toast.POSITION.TOP_CENTER,
          });
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleShow = () => {
    if (type === "password") {
      setIcon(faEye);
      setType("text");
    } else {
      setIcon(faEyeSlash);
      setType("password");
    }
  };

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>AND SHOP - Signup</title>
      </Helmet>
      <div className="login-form py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
              <div className="account_form">
                <h3 className="text-center">Signup</h3>
                <form onSubmit={handleSubmit}>
                  <div className="default-form-box">
                    <label htmlFor="">
                      Username<span>*</span>
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Enter your username"
                      onChange={handleInputChange}
                      value={formData.username}
                    />
                    <div className="error">{formErrors.usernameError}</div>
                  </div>
                  <div className="default-form-box">
                    <label htmlFor="">
                      Email<span>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                    <div className="error">{formErrors.emailError}</div>
                  </div>
                  <div className="default-form-box">
                    <label htmlFor="password">
                      Password<span>*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type={type}
                        name="password"
                        className="form-control"
                        placeholder="Enter your password"
                        onChange={handleInputChange}
                        value={formData.password}
                      />
                    </div>

                    <div className="error">{formErrors.passwordError}</div>
                  </div>
                  <div className="default-form-box">
                    <label htmlFor="password">
                      Confirm Password<span>*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type={type}
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Enter your confirm password"
                        onChange={handleInputChange}
                        value={formData.confirmPassword}
                      />
                      <div onClick={handleShow}>
                        {type == "password" ? (
                          <FontAwesomeIcon
                            icon={faEye}
                            size="lg"
                            className="pass-show"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faEyeSlash}
                            size="lg"
                            className="pass-show"
                          />
                        )}
                      </div>
                    </div>

                    <div className="error">
                      {formErrors.confirmPasswordError}
                    </div>
                  </div>
                  <div className="default-form-box">
                    <label htmlFor="phone">
                      phone<span>*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type="number"
                        name="number"
                        className="form-control"
                        placeholder="Enter your number"
                        value={formData.number}
                        onChange={handleInputChange}
                      />
                      <div className="error">{formErrors.numberError}</div>
                    </div>
                  </div>
                  <div className="default-form-box">
                    <label htmlFor="address">
                      Address<span>*</span>
                    </label>
                    <div className="position-relative">
                      <textarea
                        name="address"
                        className="form-control"
                        placeholder="Enter your Address"
                        value={formData.address}
                        onChange={handleInputChange}
                      ></textarea>
                      <div className="error">{formErrors.addressError}</div>
                    </div>
                  </div>
                  <div className="login_submit">
                    <button className="theme-btn-one btn-black-overlay btn_md">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
