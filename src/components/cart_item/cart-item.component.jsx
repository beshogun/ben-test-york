import React, { useState, useContext, useEffect } from "react";
import CartContext from "../../context/cart/cartContext";

import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const cartContext = useContext(CartContext);
  const { cart, setCart, getTotal, setCurrent } = cartContext;
  const { image, price, name, serial, quantity } = item;
  console.log(cart)
  const [newItem, setNewItem] = useState({
    quantity: quantity,
    image: image,
    price: price,
    name: name,
    serial: serial,    
  });
//   useEffect(() => {
//     // eslint-disable-next-line
//   }, [item]);

  const onChange = (e) => {
    e.preventDefault();
    if (parseInt(e.target.value) === 0) {
      console.log("yes its 0");
    }
    // setCurrent({...newItem})
    // setContact({ ...contact, [e.target.name]: e.target.value })
    setCart({ ...item, quantity: e.target.value });
    // getTotal(cart.reduce((r, d) => r + d.price * d.quantity, 0))
    // setNewItem({ ...item, [e.target.name]: e.target.value });
    // console.log(item);

    // getTotal()
  };
  const increment = () => {

    setCart({ ...item, quantity: item.quantity + 1 });
    // setNewItem({ ...item, quantity: newItem.quantity + 1});
    // console.log(cart);

    // getTotal(...cart)
  };

  const decrement = () => {
    if (item.quantity === 0) {
      console.log("yes its 0");
    }
    // setNewItem({ ...newItem, quantity: newItem.quantity - 1 });
    setCart({ ...item, quantity: item.quantity - 1 });
    console.log(cart);

    // getTotal(cart.reduce((r, d) => r + d.price * d.quantity, 0))
    // getTotal(cart.reduce((r, d) => r + d.price * d.quantity, 0))
  };

  const deleteItem = () => {
    // setNewItem({ ...newItem, quantity: newItem.quantity - 1 });
    setCart({ ...item });
    // getTotal(cart.reduce((r, d) => r + d.price * d.quantity, 0))
  };

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
        <button className="remove" onClick={decrement} href="">
          <ion-icon name="remove-outline"></ion-icon>
        </button>

        <input
          onChange={onChange}
          value={quantity}
          name="quantity"
          className="text"
          size="4"
        ></input>
        <button className="add" href="" onClick={increment}>
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>
      <div className="price__box">${price}</div>
      <div className="button__box">
        <button onClick={deleteItem} className="button" href="">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
