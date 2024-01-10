'use client';

import { useState, useEffect } from 'react';
import { GET } from '../../app/api/Orders';
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
        const data = await GET();

        const extractedOrders = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

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
