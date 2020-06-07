import {
  GET_TOTAL,
  DELETE_CART_ITEM,
  SET_CART,
  SET_CURRENT,
  ON_CHANGE,
} from "../types";

export default (state, action) => {
  console.log("in reducer");
//   console.log(state.cart);
//   console.log(action.payload.serial);
  switch (action.type) {
    // case ON_CHANGE:
    //     return {
    //         ...state,
    //         cart: state.cart.map((cart) =>
    //           cart.serial === action.payload.serial ? {...state.quantity} = parseInt(action.payload.quantity) : cart
    //         )
    //               };
    case SET_CART:
        {console.log(action.payload)}
      return {
        ...state,
        cart: state.cart.map((cart) =>
          cart.serial === action.payload.serial
            ?  action.payload
            :  cart
        ),
      };
      

    //   {...cart.quantity} = parseInt(action.payload.quantity)
    case GET_TOTAL:
        {console.log(state)}
        {console.log("in get total")}
      return {
        ...state,
        total: state.cart.reduce((r, d) => r + d.price * d.quantity, 0),
      };

    case DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter(
          (cart) => cart.serial === action.payload.serial
        ),
      };
    // case SET_CURRENT:
    //   return {
    //     ...state,
    //     current: action.payload,
    //   };

    default:
      return state;
  }
};
