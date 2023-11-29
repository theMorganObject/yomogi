"use client";

import { FF__cookTime } from "../../../FeatureFlags";
//@ts-ignoreignore
import { Draggable } from "react-beautiful-dnd";
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
  index: number;
}

function OrderCard({
  totalAmount,
  totalTime,
  items,
  onStartOrder,
  btnText,
  id,
  index,
}: OrderCardProps) {
  console.log("id", id, index);
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={classes.orderCard}
            style={{
              backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
              color: "white",
              ...provided.draggableProps.style,
            }}
          >
            <div className={classes.title}>
              <h4>No.{totalAmount}</h4>
              {FF__cookTime ? <p>{totalTime} min</p> : ""}
            </div>
            <ul>
              {items.map((item, index) => (
                <li key={index} className={classes.item}>
                  {`${item.amount} - ${item.name} `}
                </li>
              ))}
            </ul>
            {/* <div className={classes.controls}>
              {FF__cookTime ? (
                <button className={classes.btn}>Add Time</button>
              ) : (
                ""
              )}
              <button className={classes.btn} onClick={onStartOrder}>
                {btnText}
              </button>
            </div> */}
          </div>
        );
      }}
    </Draggable>
  );
}

export default OrderCard;
