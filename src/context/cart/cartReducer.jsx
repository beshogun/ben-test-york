import { GET_TOTAL, DELETE_CART_ITEM, SET_CART } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: state.cart.map((cart) =>
          cart.serial === action.payload.serial ? action.payload : cart
        ),
      };
    case GET_TOTAL:
      return {
        ...state,
        total: state.cart.reduce((r, d) => r + d.price * d.quantity, 0),
      };

    case DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter(
          (cart) => cart.serial !== action.payload.serial
        ),
      };
    default:
      return state;
  }
};
