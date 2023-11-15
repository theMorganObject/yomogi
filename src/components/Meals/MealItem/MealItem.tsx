import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
import { FF__cookTime } from "../../../../FeatureFlags";

export interface MealItemProps {
  id: string;
  name: string;
  description: string;
  time: number;
  price: number;
}

const MealItem: React.FC<MealItemProps> = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price}`;

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      time: props.time,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.details}>
          {FF__cookTime ? (
            <>
              <div className={classes.time}>{props.time} min</div>
              <div>|</div>
            </>
          ) : (
            ""
          )}
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
