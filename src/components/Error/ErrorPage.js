import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>AND SHOP - Error</title>
      </Helmet>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-text">
                <h2>Error</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item items">Error</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="erorr_wrapper">
                <h1>404</h1>{" "}
                <h3>
                  We are sorry, the page you've requested is not available!
                </h3>{" "}
                <form>
                  <div className="input-group">
                    <input type="text" className="form-control" />{" "}
                    <button>
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>{" "}
                <Link to="/" className="backtobtn">
                  Back To Home Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
