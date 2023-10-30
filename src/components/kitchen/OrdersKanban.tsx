"use client";

import { useState, useEffect } from "react";
import Card from "../UI/Card";
import KanbanColumn from "./KanbanColumn";
import OrderCard from "./OrderCard";
import { GET, handleCompleteOrder } from "../../api/Orders";

import classes from "./OrdersKanban.module.css";

type Order = {
  items: {
    amount: number;
    id: string;
    name: string;
    price: number;
    time: number;
  }[];
  totalAmount: number;
  totalTime: number;
  id: string;
  column: string;
};

// interface Data {
//   [key: string]: {
//     items: {
//       amount: number;
//       id: string;
//       name: string;
//       price: number;
//       time: number;
//     }[];
//     totalAmount: number;
//     totalTime: number;
//     id: string;
//     column: string;
//   };
// }

export default function OrdersKanban() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [columns, setColumns] = useState<string[]>(["k1", "k2", "k3"]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await GET();

        const extractedOrders = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
          column: "k1",
        }));
        setOrders(extractedOrders);
      } catch (error) {
        console.error(error);
      }
    }

    fetchOrders();
  }, []);

  function getColumnTitle(columnId: string): string {
    switch (columnId) {
      case "k1":
        return "To Do";
      case "k2":
        return "Doing";
      case "k3":
        return "Done";
      default:
        return "";
    }
  }

  const handleStartOrder = (orderId: string) => {
    const orderToMove = orders.find((order) => order.id === orderId);

    if (orderToMove) {
      const currentColumnIndex = columns.indexOf(orderToMove.column);

      if (currentColumnIndex < columns.length - 1) {
        const nextColumn = columns[currentColumnIndex + 1];

        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === orderId ? { ...order, column: nextColumn } : order
          )
        );
      }

      if (currentColumnIndex === columns.length - 1) {
        handleCompleteOrder(orderId);
      }
    }
  };

  return (
    <div className={classes.container}>
      {columns.map((columnId) => (
        <Card key={columnId}>
          <KanbanColumn title={getColumnTitle(columnId)} id={columnId}>
            {orders
              .filter((order) => order.column === columnId)
              .map((order, index) => (
                <OrderCard
                  key={order.id}
                  id={order.id}
                  totalAmount={order.totalAmount}
                  totalTime={order.totalTime}
                  items={order.items}
                  onStartOrder={() => handleStartOrder(order.id)}
                  btnText={"Start"}
                />
              ))}
          </KanbanColumn>
        </Card>
      ))}
    </div>
  );
}
