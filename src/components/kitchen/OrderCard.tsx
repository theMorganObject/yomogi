// import Button from "../UI/Button";
import classes from "./OrderCard.module.css";

interface Item {
  amount: number;
  id: string;
  name: string;
  price: number;
  time: number;
}

interface OrderCardProps {
  items: Item[];
  totalAmount: number;
  totalTime: number;
  id: string;
  onStartOrder: () => void;
  btnText: string;
}

function OrderCard({
  totalAmount,
  totalTime,
  items,
  onStartOrder,
  btnText,
  id,
}: OrderCardProps) {
  return (
    <div key={id} className={classes.orderCard}>
      <div className={classes.title}>
        <h4>No.{totalAmount}</h4>
        <p>{totalTime} min</p>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={classes.item}>
            {`${item.amount} - ${item.name} `}
          </li>
        ))}
      </ul>
      <div className={classes.controls}>
        {/* TODO onClick add time */}
        <button className={classes.btn}>Add Time</button>
        <button className={classes.btn} onClick={onStartOrder}>
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
