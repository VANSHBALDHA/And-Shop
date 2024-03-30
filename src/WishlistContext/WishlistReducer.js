import React from "react";
import { ADD_TO_WISHLIST, REMOVE_ITEMS } from "./WishlistType";

const WishlistStorage = (wishlist) => {
  localStorage.setItem(
    "WishlistItems",
    JSON.stringify(wishlist.length > 0 ? wishlist : [])
  );
};
export const wishlistquanity = (wishlist) => {
  WishlistStorage(wishlist);
  let itemCount = wishlist.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return {
    itemCount,
  };
};

const WishlistReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      if (!state.wishlist.find((item) => item.id === action.payload.id)) {
        state.wishlist.push({
          ...action.payload,
          quantity: 1,
        });
      }
      console.log(action.payload);
      return {
        ...state,
        ...wishlistquanity(state.wishlist),
        wishlist: [...state.wishlist],
      };

    case REMOVE_ITEMS:
      return {
        ...state,
        ...wishlistquanity(state.wishlist.filter((item) => item.id !== action.payload.id)),
        wishlist: [
          ...state.wishlist.filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }

  return <div>WishlistReducer</div>;
};

export default WishlistReducer;
