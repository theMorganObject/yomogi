import React from 'react';

export interface CartItem {
  id: string;
  name: string;
  amount: number;
  time: number;
  price: number;
}

interface CartContextValue {
  items: CartItem[];
  totalAmount: number;
  totalTime: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = React.createContext<CartContextValue>({
  items: [],
  totalAmount: 0,
  totalTime: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
