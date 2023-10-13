"use client";

import Image from "next/image";
import { useState } from "react";

import Header from "../components/Layout/Header";
import Meals from "../components/Meals/Meals";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";

import css from "./page.module.css";

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  const onOpenCart = () => {
    setShowCart(true);
  };

  const onCloseCart = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={onOpenCart} />
      {showCart && <Cart onClose={onCloseCart} />}
      <main className={css.container}>
        <Image
          src="/img/menu-bg.jpg"
          alt="Wormwood leaves"
          className={css.backgroundImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <h1 className={css.title}>YoMogi</h1>
        <p className={css.subtitle}>Japanese-Fusion Gastropub</p>
        <Meals />
      </main>
    </CartProvider>
  );
}
