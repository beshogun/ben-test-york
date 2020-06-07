import React, { useContext, useEffect } from "react";
import CartContext from "../../context/cart/cartContext";

import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const cartContext = useContext(CartContext);
  const { cart, setCart, deleteCartItem } = cartContext;
  const { image, price, name, serial, quantity } = item;
  console.log(cart);

  useEffect(() => {
    if (quantity === 0) {
      deleteCartItem({ ...item });
    }
    // eslint-disable-next-line
  }, [item, quantity]);

  const onChange = (e) => {
    e.preventDefault();
    const reg = /^[0-9\b]+$/;
    if (e.target.value === "" || reg.test(e.target.value)) {
      if (parseInt(e.target.value) === 0) {
        deleteCartItem({ ...item });
      }
      setCart({ ...item, quantity: e.target.value });
    }
  };
  const increment = () => {
    setCart({ ...item, quantity: item.quantity + 1 });
  };

  const decrement = () => {
    if (quantity === 0) {
      deleteCartItem({ ...item });
    }
    setCart({ ...item, quantity: item.quantity - 1 });
  };

  const deleteItem = () => {
    deleteCartItem({ ...item });
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
