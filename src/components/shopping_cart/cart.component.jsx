import React from "react";
import CartItem from "../cart_item/cart-item.component";
import CartData from "../../cart-data";
import "./cart.styles.scss";

const Cart = () => {
  return (
    <div className="cart_container">
      <div className="title__box">Shopping Cart</div>
      <div className="cart__box">
      {CartData.length ? (
        CartData.map((cartItem) => (
          <CartItem key={cartItem.serial} item={cartItem} />
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
               ${"799.00"}
               </div>
           </div>
           
           </div>
       
    </div>
      </div>
      
    </div>
  );
};

export default Cart;
