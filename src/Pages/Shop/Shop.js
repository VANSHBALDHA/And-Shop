import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Store from "./Store";
const Shop = () => {
  return (
    <>
      <Helmet>
        <title>AND SHOP - Shop </title>
      </Helmet>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-text">
                <h2>Shop</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item items">Shop</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
