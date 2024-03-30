import {
  REMOVE_ITEMS,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
} from "./CartTypes.js";

const Storage = (cart) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cart.length > 0 ? cart : [])
  );
};
export const sumItems = (cart) => {
  Storage(cart);
  let itemCount = cart.reduce((total, product) => total + product.quantity, 0);
  let total = cart
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        ...sumItems(state.cart),
        cart: [...state.cart],
      };

    case REMOVE_ITEMS:
      return {
        ...state,
        ...sumItems(state.cart.filter((item) => item.id !== action.payload.id)),
        cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
      };

    case INCREASE:
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + 1,
        };
        return {
          ...state,
          ...sumItems(updatedCart),
          cart: updatedCart,
        };
      } else {
        return state;
      }

    case DECREASE:
      const itemIndexDecrease = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndexDecrease !== -1) {
        const updatedCart = [...state.cart];
        const currentItem = updatedCart[itemIndexDecrease];

        if (currentItem.quantity > 1) {
          updatedCart[itemIndexDecrease] = {
            ...currentItem,
            quantity: currentItem.quantity - 1,
          };

          return {
            ...state,
            ...sumItems(updatedCart),
            cart: updatedCart,
          };
        } else {
          return state;
        }
      } else {
        return state;
      }

    case CHECKOUT:
      return {
        cart: [],
        checkout: true,
        ...sumItems([]),
      };
    case CLEAR:
      return {
        cart: [],
        ...sumItems([]),
      };
    default:
      return state;
  }
};

export default CartReducer;
