import { useState, useContext } from 'react';
import { FF__cookTime } from '../../../FeatureFlags';

import Modal, { ModalBackdrop, ModalOverlay } from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

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

interface OrderData {
  id: string;
  items: CartItem[];
  totalAmount: number;
  totalTime: number;
}

function sendEmail(data: OrderData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => {
      // TODO if res.ok, tell the user that the order was received
      // const response = res.json();
      // console.log('sendEmail response', res, response);
      // res.json();
    })
    // .then((response) => {
    //   alert(response.message);
    // })
    .catch((err) => {
      alert(err);
    });
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

  const submitOrder = async (orderData: OrderData) => {
    // console.log('submit order', orderData);
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Order submission failed.');
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error submitting order:', error);
      throw error; // Re-throw the error for further handling if necessary
    }
  };

  const orderHandler = async () => {
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

      // console.log('handle order', orderData);

      await submitOrder(orderData);
      await sendEmail(orderData);
      setOrderSent(true); // Assuming you want to update this state when order is sent
    } catch (error: any) {
      console.error(error.message);
    } finally {
      cartCtx.clearCart();
      setIsSubmitting(false);
      onClose();
    }
  };

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
              ''
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
                {isSubmitting ? 'Submitting...' : 'Order'}
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
