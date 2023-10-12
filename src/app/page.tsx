"use client";

import Image from "next/image";
import { useState } from "react";

import Header from "../components/Layout/Header";
import Meals from "../components/Meals/Meals";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";

import classes from "./page.module.css";

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
      <main className={classes.container}>
        <Image
          src="/img/menu-bg.jpg"
          alt="Wormwood leaves"
          className={classes.backgroundImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <h1 className={classes.title}>YoMogi</h1>
        <p className={classes.subtitle}>Japanese-Fusion Gastropub</p>
        <Meals />
      </main>
    </CartProvider>
  );
}
