import React, { useReducer } from "react";
import CartContext from "./cartContext";
import CartReducer from "./cartReducer";
import CartData from "../../cart-data";

import { SET_CART, GET_TOTAL, DELETE_CART_ITEM } from "../types";

const CartState = (props) => {
  const totalPrice = CartData.reduce((r, d) => r + d.price * d.quantity, 0);

  const initialState = {
    cart: CartData,
    total: totalPrice,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const setCart = (value) => {
    console.log(value);
    dispatch({
      type: SET_CART,
      payload: value,
    });
  };

  const getTotal = (value) => {
    console.log("in get total");
    console.log(value);
    dispatch({
      type: GET_TOTAL,
      payload: value,
    });
  };
  const deleteCartItem = (value) => {
    console.log(value);
    dispatch({
      type: DELETE_CART_ITEM,
      payload: value,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total: state.total,
        setCart,
        getTotal,
        deleteCartItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
