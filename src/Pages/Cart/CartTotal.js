import React, { useContext } from "react";
import "./CartTotal.css";
import CartContext from "../../Context/Cart/CartContext";

const CartTotal = () => {
  const { ClearCart, handleCheckout, itemCount, total } =
    useContext(CartContext);
  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="coupon_code left">
              <h3>Coupon</h3>
              <div className="coupon_inner">
                <p>Enter your coupon code if you have one.</p>
                <div>
                  <input
                    placeholder="Coupon code"
                    type="text"
                    className="form-control"
                  />
                  <button type="submit" className="theme-btn-one btn-outline-dark">
                    Apply coupon
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="coupon_code right"
            >
              <h3>Cart Total</h3>
              <div className="coupon_inner">
                <div className="cart_subtotal">
                  <p>Total Items:</p> <p className="cart_amount">{itemCount}</p>
                </div>
                <div className="cart_subtotal">
                  <p>Subtotal</p> <p className="cart_amount">{total}</p>
                </div>
                <div className="cart_subtotal border-bottom">
                  <p>Shipping Charges</p>
                  <p className="cart_amount">
                    <span>Flat Rate:</span> $255.00
                  </p>
                </div>

                <div className="cart_subtotal pt-3">
                  <p>Total</p> <p className="cart_amount">{total}</p>
                </div>
                <div className="checkout_btn pt-3">
                  <button
                    onClick={handleCheckout}
                    className="theme-btn-one btn-overlay-dark btn_lg"
                  >
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default CartTotal;
