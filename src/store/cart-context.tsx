import React from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  amount: number;
}

interface CartContextValue {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

const CartContext = React.createContext<CartContextValue>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
