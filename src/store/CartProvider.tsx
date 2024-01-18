import React, { useReducer, ReactNode } from 'react';
import CartContext, { CartItem } from './cart-context'; // Import the CartItem type if it's defined

interface CartState {
  items: CartItem[]; // Use the CartItem type for items
  totalTime: number;
  totalAmount: number;
}

interface CartAction {
  type: 'ADD' | 'REMOVE' | 'CLEAR';
  item?: CartItem;
  id?: string;
}

const defaultCartState: CartState = {
  items: [],
  totalTime: 0,
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: CartAction) => {
  if (action.type === 'ADD' && action.item) {
    const updatedTotalTime = state.totalTime + action.item.time;
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item!.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
        time: existingCartItem.time + action.item.time,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalTime: updatedTotalTime,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE' && action.id) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalTime = state.totalTime - existingItem.time;
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalTime: updatedTotalTime,
    };
  }
  if (action.type === 'CLEAR') {
    return {
      ...defaultCartState, // Reset the cart state to its initial state
    };
  }

  return defaultCartState;
};

const CartProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalTime: cartState.totalTime,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
