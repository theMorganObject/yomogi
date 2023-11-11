import { FF__cookTime } from "../../../FeatureFlags";
import classes from "./CartItem.module.css";

export interface CartItemProps {
  name: string;
  amount: number;
  price: number;
  time: number;
  onRemove: () => void;
  onAdd: () => void;
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const price = `$${props.price}`;

  return (
    <li className={classes.cartItem}>
      <div>
        <h2>{props.name}</h2>
        {FF__cookTime ? (
          <span className={classes.time}>Ready in {props.time} minutes</span>
        ) : (
          ""
        )}
        <div className={classes.summary}>
          <span className={classes.amount}>x {props.amount}</span>
          <span className={classes.price}>{price}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
