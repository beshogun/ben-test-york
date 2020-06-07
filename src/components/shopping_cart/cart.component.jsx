import React, {useState, Fragment, useContext, useEffect } from "react";
import CartItem from "../cart_item/cart-item.component";
import CartData from "../../cart-data";
import CartContext from "../../context/cart/cartContext";

import "./cart.styles.scss";

const Cart = () => {
    const cartContext = useContext(CartContext);
    // console.log(cartContext)
    const { cart, total, getTotal } = cartContext;
    // const {totalCost, setTotalCost} = useState({
    //     total: total
    // })
   
    // cart.forEach(element => 
    //     newTotal += element.quantity * element.price
    //   );
    //   cart.forEach(item => console.log(item.price * item.quantity));

    useEffect(() => {
        let totalPrice = cart.reduce((r, d) => r + d.price * d.quantity, 0);
        console.log(totalPrice)
        console.log(total)
        if(totalPrice !== total){
            console.log(totalPrice)
            getTotal(totalPrice)
        }

        // eslint-disable-next-line
      }, [total,  cart]);
    
       
  return (
    <div className="cart_container">
      <div className="title__box">Shopping Cart</div>
      <div className="cart__box">
      {cart.length ? (
        cart.map((cartItem) => (
          <CartItem  key={cartItem.serial} item={cartItem} />
        ))
       
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
       <div className="cart__footer">
           <div className="icon__box">
           <ion-icon name="arrow-back-outline"></ion-icon>
           <a  href="" className="continue">
               continute shopping
           </a>
           <div className="total">
               <div className="total-title">
               Subtotal:
               </div>
               <div className="total-amount">
              
               ${total}
               </div>
           </div>
           
           </div>
       
    </div>
      </div>
      
    </div>
  );
};

export default Cart;
