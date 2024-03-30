import React from "react";
import { Link } from "react-router-dom";
import cartemptyimage from "../../assets/Images/empty-cart.1b7e73f.png";
import "./Index.css";
import { Helmet } from "react-helmet-async";

const CartEmpty = () => {
  return (
    <>
      <Helmet>
        <title>AND SHOP - Your Cart Is Empty..</title>
      </Helmet>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-text">
                <h2>Empty Cart</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item items">Empty Cart</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-section">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-6">
              <div className="empaty_cart_area">
                <img src={cartemptyimage} className="w-100" />{" "}
                <h2>YOUR CART IS EMPTY</h2>{" "}
                <p>Sorry Mate... No Item Found Inside Your Cart!</p>{" "}
                <Link to="/" className="btn btn-outline-dark btn_md">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
