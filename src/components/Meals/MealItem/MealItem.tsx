import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

export interface MealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem: React.FC<MealItemProps> = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price}`; // TODO this used to have .toFixed(2) attached to it, but that throws a ts error

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>

        {/* TODO: add a cook time, style to render as TIME | PRICE(withoutCents) */}
        {/* <div className={classes.time}>{time}</div> */}
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
