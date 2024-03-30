import React, { useReducer } from "react";
import WishlistReducer from "./WishlistReducer";
import WishlistContext from "./WishlistContext";
import { wishlistquanity } from "./WishlistReducer";

const WishlistStorage = localStorage.getItem("WishlistItems")
  ? JSON.parse(localStorage.getItem("WishlistItems"))
  : [];

const Wishliststate = ({ children }) => {
  const initialState = {
    wishlist: WishlistStorage,
    ...wishlistquanity(WishlistStorage),
  };
  const [state, dispatch] = useReducer(WishlistReducer, initialState);
  const addtoWishlist = (payload) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload });
  };
  const removeitems = (payload) => {
    dispatch({ type: "REMOVE_ITEMS", payload });
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: state.wishlist,
        addtoWishlist,
        removeitems,
        ...state,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default Wishliststate;
