import { useContext } from "react";

import Modal, { ModalBackdrop, ModalOverlay } from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

export interface CartProps {
  onClose: () => void;
}

interface CartItem {
  id: string;
  name: string;
  amount: number;
  time: number;
  price: number;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalTime = `${cartCtx.totalTime} min`;
  const totalAmount = `$${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: CartItem) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      time={item.time}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  return (
    <Modal>
      <ModalBackdrop onClose={onClose} />
      <ModalOverlay>
        {hasItems ? (
          <div>
            <ul className={classes.cartItems}>{cartItems}</ul>
            <div className={classes.total}>
              <span>Total Time</span>
              <span className={classes.number}>{totalTime}</span>
            </div>
            <div className={classes.total}>
              <span>Total Amount</span>
              <span className={classes.number}>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
              <button className={classes.buttonAlt} onClick={onClose}>
                Close
              </button>
              <button className={classes.button}>Order</button>
            </div>
          </div>
        ) : (
          <h2 className={classes.empty}>
            Your cart is empty. Please select your food.
          </h2>
        )}
      </ModalOverlay>
    </Modal>
  );
};

export default Cart;
