import React from "react";
import Cart from "./components/shopping_cart/cart.component";
// import "materialize-css/dist/css/materialize.min.css";
import "./App.styles.scss";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Cart />
      </div>
    </div>
  );
}

export default App;
