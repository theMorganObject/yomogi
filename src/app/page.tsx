"use client";

import { useState } from "react";

import Header from "../components/Layout/Header";
import Meals from "../components/Meals/Meals";
import Cart, { CartProps } from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";

export default function Home() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} id="" item="" />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
