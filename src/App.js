import React from "react";
import Cart from "./components/shopping_cart/cart.component";
// import "materialize-css/dist/css/materialize.min.css";
import "./App.styles.scss";
import CartState from "./context/cart/cartState";


function App() {
  return (
    <CartState>
    <div className="App">
      <div className="container">
        <Cart />
      </div>
    </div>
    </CartState>
  );
}

export default App;
