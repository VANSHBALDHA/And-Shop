import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Flip, ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(faEyeSlash);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    login: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      setError({
        email: "Please Enter your email",
        password: "Please Enter your password",
      });
    } else {
      setError({
        email: "",
        password: "",
      });
      axios
        .get("http://localhost:3078/users")
        .then((res) => {
          const userData = res.data.find(
            (users) =>
              users.user?.email === user.email &&
              users.user?.password === user.password
          );
          if (userData) {
            toast.success("Successfully logged in", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 500,
              transition: Flip,
            });
            localStorage.setItem("UserID", userData.id);
            localStorage.setItem("Email", user.email);
            navigate("/");
          } else {
            setError({
              login: "Invalid Email or Password",
            });
            toast.info("Invalid username or password", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 500,
              transition: Flip,
            });
          }
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
        <title>AND SHOP - Login</title>
      </Helmet>
      <div className="login-form py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
              <div className="account_form">
                <h3 className="text-center">Login</h3>
                <form onSubmit={handleSubmit} className="position-relative">
                  <h6 style={{ color: "red" }} className="position-absolute">
                    {error.login}
                  </h6>
                  <div className="default-form-box pt-4">
                    <label htmlFor="email">
                      email <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="enter your email"
                      value={user.email}
                      onChange={(e) => handleChange(e)}
                      onKeyDown={handleChange}
                      autoComplete="off"
                      autoCorrect="off"
                    />
                    {user.email ? "" : <span>{error.email}</span>}
                  </div>
                  <div className="default-form-box">
                    <label htmlFor="password">
                      Password<span>*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type={type}
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="enter your password"
                        value={user.password}
                        onChange={(e) => handleChange(e)}
                        autoComplete="off"
                        autoCorrect="off"
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

                    {user.password ? "" : <span>{error.password}</span>}
                  </div>
                  <div className="login_submit">
                    <button className="theme-btn-one btn-black-overlay btn_md">
                      login
                    </button>
                  </div>
                  <div className="pt-4">
                    <Link to="/signup" className="text-decoration-none">
                      <span className="new-account">
                        Create Your Account? Click here
                      </span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
