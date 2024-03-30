import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Card.css";
import { Helmet } from "react-helmet-async";
import CartEmpty from "../EmptyCart/CartEmpty";
import CartItems from "./CartItems";
import CartContext from "../../Context/Cart/CartContext";
import CartTotal from "./CartTotal";
import Checkout from "../Checkout/Checkout";
const Cart = () => {
  const { cart, checkout, ClearCart } = useContext(CartContext);

  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>AND SHOP - Cart</title>
      </Helmet>

      {checkout && (
        <>
          <Checkout />
        </>
      )}
      <div>
        {cart?.length === 0 ? (
          <>
            <h4>Cart is empty</h4>
          </>
        ) : (
          <>
            <div className="about-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="hero-text">
                      <h2>Cart</h2>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="breadcrumb-item items">Cart</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container pt-5">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="table_desc">
                    <div className="table_page table-responsive">
                      <table className="table m-0 ">
                        <thead>
                          <tr>
                            <th className="product_thumb">Index No.</th>{" "}
                            <th className="product_thumb">Image</th>{" "}
                            <th className="product_name">Product Name</th>{" "}
                            <th className="product-price">Price</th>{" "}
                            <th className="product_quantity">Quantity</th>{" "}
                            <th className="product_quantity">Total price</th>{" "}
                            <th className="product_total">Remove</th>{" "}
                          </tr>
                        </thead>{" "}
                        {cart.map((product, index) => (
                          <CartItems
                            key={product.id}
                            product={product}
                            index={index}
                            // className="position-absolute"
                          />
                        ))}
                      </table>
                    </div>
                  </div>{" "}
                  <div className="text-right">
                    <button
                      onClick={ClearCart}
                      className="theme-btn-one btn-overlay-dark btn_lg"
                    >
                      ClearCart
                    </button>
                  </div>
                </div>{" "}
              </div>
            </div>
          </>
        )}
      </div>
      <div>{cart.length > 0 && <CartTotal />}</div>
    </>
  );
};

export default Cart;
