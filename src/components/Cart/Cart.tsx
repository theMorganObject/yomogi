import { useState, useContext, useEffect } from "react";
import { FF__cookTime } from "../../../FeatureFlags";

import Modal, { ModalBackdrop, ModalOverlay } from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { POST } from "../../api/Orders";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSent, setOrderSent] = useState(false);
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

  const orderHandler = async () => {
    // Prevent double submissions
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const id = crypto.randomUUID();

      const orderData = {
        id,
        items: cartCtx.items,
        totalAmount: cartCtx.totalAmount,
        totalTime: cartCtx.totalTime,
      };

      const response = await POST(orderData);
      if (!response.ok) {
        // TODO implement error handling and test to make sure modal closes
        throw new Error("Order submission failed.");
      }
    } catch (error: any) {
      console.error(error.message);
    } finally {
      // setOrderSent(true);
      cartCtx.clearCart();
      setIsSubmitting(false);
      onClose();
    }
  };

  // TODO show user that order was sent
  // useEffect(() => {
  //   if (orderSent) {
  //     const timer = setTimeout(() => {
  //       setOrderSent(false), 5000;
  //     });
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [orderSent]);

  return (
    <Modal>
      <ModalBackdrop onClose={onClose} />
      <ModalOverlay>
        {hasItems ? (
          <div>
            <h2 className={classes.title}>Your Cart</h2>
            <ul className={classes.cartItems}>{cartItems}</ul>
            {FF__cookTime ? (
              <div className={classes.total}>
                <span>Total Time</span>
                <span className={classes.number}>{totalTime}</span>
              </div>
            ) : (
              ""
            )}
            <div className={classes.total}>
              <span>Total Amount</span>
              <span className={classes.number}>{totalAmount}</span>
            </div>
            {orderSent && (
              <div className={classes.orderSent}>Order received!</div>
            )}
            <div className={classes.actions}>
              <button className={classes.buttonAlt} onClick={onClose}>
                Close
              </button>
              <button
                className={classes.button}
                onClick={orderHandler}
                disabled={cartCtx.items.length === 0 || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Order"}
              </button>
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
