import React from "react";
import "./Index.css";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OrderTracking = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Helmet>
          <title>AND SHOP - Order-Tracking</title>
          <meta
            name="order-tracking"
            content="you can check your order using email id or order id..."
          />
          <link
            rel="icon"
            sizes="16*16"
            type="fa fa-pencil"
            href="fa fa-pencil"
          />
        </Helmet>
      </div>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-text">
                <h2>Order Tracking</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item items">Order Tracking</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="order-tracking">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="order_tracking_wrapper">
                <h4>Order Tracking</h4>{" "}
                <p>
                  To track your order please enter your Order ID in the box
                  below and press the "Track" button.
                </p>{" "}
                <form>
                  <div className="form-group">
                    <label htmlFor="order_id">Order ID</label>{" "}
                    <input
                      type="text"
                      id="order_id"
                      name="order_id"
                      placeholder="Found in your order Confirmation email"
                      className="form-control"
                    />{" "}
                  </div>{" "}
                  <div className="form-group">
                    <label htmlFor="email">Billing Email</label>{" "}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="form-control"
                    />{" "}
                  </div>{" "}
                  <div className="order_track_button">
                    <button className="theme-btn-one btn-black-overlay btn_md">
                      Track
                    </button>
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

export default OrderTracking;
