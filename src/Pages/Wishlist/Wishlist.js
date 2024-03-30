import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Index.css";
import { Helmet } from "react-helmet-async";
import WishlistContext from "../../WishlistContext/WishlistContext";
import WishlistItems from "./WishlistItems";

const Wishlist = ({ product, index }) => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <>
      <Helmet>
        <title>AND SHOP - Wishlist items </title>
      </Helmet>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-text">
                <h2>Wishlist</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item items">Wishlist</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="table_desc">
              <div className="table_page table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th className="product_thumb">Index No.</th>
                      <th className="product_thumb">Image</th>
                      <th className="product_name">Product Name</th>
                      <th className="product-price">Price</th>
                      <th className="product-price">Stock Status</th>
                      <th className="product_total">Remove</th>
                    </tr>
                  </thead>
                  {wishlist.map((product, index) => (
                    <WishlistItems
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
