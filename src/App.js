import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [cartIsVisible, setCartisVisible] = useState(false);

  const showCartHandler = () => {
    setCartisVisible(true);
  };

  const hideCartHander = () => {
    setCartisVisible(false);
  };

  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHander} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals></Meals>
      </main>
    </CartContextProvider>
  );
}

export default App;
