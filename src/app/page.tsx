'use client'; // used here because of page-wide cart context as well as local state management

import { useState } from 'react';

import Header from '../components/Layout/Header';
import Meals from '../components/Meals/Meals';
import Cart from '../components/Cart/Cart';
import CartProvider from '../store/CartProvider';

import Background from '@/components/UI/Background';
import menuBG from '../../public/img/menu-bg.jpg';

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
      <main className='relative z-1 p-8'>
        <Background image={menuBG} />
        <h1 className='text-center font-cinzelDecorative text-yomogi-11 text-4xl tracking-widest mt-20 mb-2 2xs:text-5xl xs:text-6xl'>
          YoMogi
        </h1>
        <p className='text-center font-cormorantGaramond italic text-base tracking-normal mb-3 2xs:text-lg xs:text-xl'>
          Japanese-Fusion Gastropub
        </p>
        <Meals />
      </main>
    </CartProvider>
  );
}
