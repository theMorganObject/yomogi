'use client';

import { useState, useEffect } from 'react';
//@ts-ignoreignore
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { onDragEnd } from './kitchenUtil';

import KanbanColumn from './KanbanColumn';
import OrderCard from './OrderCard';
import classes from './OrdersKanban.module.css';

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

export type Column = {
  columnId: string;
  orders: Order[];
};

export default function OrdersKanban() {
  const [columns, setColumns] = useState<Column[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch('/api/orders', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders.');
        }

        const ordersData = await response.json();

        const extractedOrders = Object.keys(ordersData).map((key) => {
          const order = ordersData[key];
          return {
            id: key,
            ...order.orderData,
          };
        });

        const extractedColumns = [
          { columnId: 'k1', orders: extractedOrders },
          { columnId: 'k2', orders: [] },
          { columnId: 'k3', orders: [] },
        ];

        setColumns(extractedColumns);
      } catch (error) {
        console.error(error);
      }
    }

    fetchOrders();
  }, []);

  function getColumnTitle(columnId: string): string {
    switch (columnId) {
      case 'k1':
        return 'To Do';
      case 'k2':
        return 'Doing';
      case 'k3':
        return 'Done';
      default:
        return '';
    }
  }

  return (
    <div className={classes.container}>
      <DragDropContext
        onDragEnd={(result: object) => {
          onDragEnd(result, columns, setColumns);
        }}
      >
        {columns.map(({ columnId, orders }) => (
          <KanbanColumn
            title={getColumnTitle(columnId)}
            id={columnId}
            key={columnId}
          >
            {orders.map((order, index) => (
              <OrderCard
                key={order.id}
                id={order.id}
                index={index}
                totalAmount={order.totalAmount}
                totalTime={order.totalTime}
                items={order.items}
              />
            ))}
          </KanbanColumn>
        ))}
      </DragDropContext>
    </div>
  );
}
