import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { image, price, name, serial, quantity } }) => {
  return (
    <div className="item_container">
      <div className="img__box">
        <img className="image" src={image} alt="item pic" />
      </div>
      <div className="name__box">
        <div className="name__box-name">{name}</div>

        
        <div className="name__box-serial">#{serial}</div>
      </div>
      <div className="addremove__box">
      <a className="remove" href=""><ion-icon name="remove-outline"></ion-icon></a>
         
      
      <input className="text" size="4"></input>
     <a className="add" href="" onClick={() => console.log("hi")}>
     <ion-icon name="add-outline"></ion-icon>

     </a>
       </div>
      <div className="price__box">${price}</div>
      <div className="button__box">
      {/* <ion-icon name="close-outline"><button className="button"></button></ion-icon> */}
      <a className="button" href=""><ion-icon name="close-outline"></ion-icon></a>
      </div>
      
    </div>
    
  );
};

export default CartItem;
