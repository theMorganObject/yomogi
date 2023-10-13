import React from "react";

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
}

const CartContext = React.createContext<CartContextValue>({
  items: [],
  totalAmount: 0,
  totalTime: 0, // FIXME 0 is a placeholder value, re-assess when implementing logic.
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
