import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/Cart/CartContext";

const Checkout = () => {
  const { ClearCart } = useContext(CartContext);
  return (
    <>
      <div>
        <h4>Thank you for your purchase!</h4>
        <p>
          Your order has been placed and will be delivered to you within 24
          hours.
        </p>
        <Link to="/">
          <button onClick={ClearCart}>Continue Shopping</button>
        </Link>
      </div>
    </>
  );
};

export default Checkout;
