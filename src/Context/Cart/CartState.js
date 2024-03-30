import React, { useReducer } from "react";
import CartReducer from "./CartReducer";
import CartContext from "./CartContext";
import { sumItems } from "./CartReducer";

const Storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const CartState = ({ children }) => {
  const initialState = {
    cart: Storage,
    ...sumItems(Storage),
    checkout: false,
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  const addtoWishlist = (payload) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload });
  };

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };
  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };
  const removeitems = (payload) => {
    dispatch({ type: "REMOVE_ITEMS", payload });
  };
  const ClearCart = () => {
    dispatch({ type: "CLEAR" });
  };
  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };
  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cart: state.cart,
        addToCart,
        addtoWishlist,
        increase,
        decrease,
        removeitems,
        handleCheckout,
        ClearCart,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
