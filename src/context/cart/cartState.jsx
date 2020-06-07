import React, { useReducer } from "react";
import CartContext from "./cartContext";
import CartReducer from "./cartReducer";
import CartData from "../../cart-data";

import { SET_CART, SET_CURRENT, GET_TOTAL, ON_CHANGE } from "../types";

const CartState = (props) => {
const totalPrice = CartData.reduce((r, d) => r + d.price * d.quantity, 0);

  const initialState = {
    cart: CartData,
    current: null,
    total: totalPrice,
  };

  console.log(totalPrice);

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const setCart = (value) => {
    console.log(value);
    dispatch({
      type: SET_CART,
      payload: value,
    });
  };
  const setCurrent = async (item) => {
    dispatch({ type: SET_CURRENT, payload: item });
  };
  const getTotal = (value) => {
    console.log("in get total")
    console.log(value);
    dispatch({
      type: GET_TOTAL,
      payload: value,
    });
  };
    const onChange = async () => {
      dispatch({ type: ON_CHANGE, payload: state.cart });
    };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        current: state.current,
        total: state.total,
        setCart,
        getTotal,
        // setCurrent,
        // onChange,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
