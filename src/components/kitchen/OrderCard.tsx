'use client';
import { FF__cookTime } from '../../../FeatureFlags';

//@ts-ignoreignore
import { Draggable } from 'react-beautiful-dnd';
import classes from './OrderCard.module.css';

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
  index: number;
}

function OrderCard({
  totalAmount,
  totalTime,
  items,
  id,
  index,
}: OrderCardProps) {
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
              maxWidth: '85%',
              backgroundColor: snapshot.isDragging
                ? 'var(--mysticgrape-11)'
                : 'var(--mysticgrape-0)',
              color: snapshot.isDragging
                ? 'var(--yomogi-0)'
                : 'var(--yomogi-11)',
              ...provided.draggableProps.style,
            }}
          >
            <div className={classes.title}>
              <h4>No.{totalAmount}</h4>
              {FF__cookTime ? <p>{totalTime} min</p> : ''}
            </div>
            <ul>
              {items.map((item, index) => (
                <li key={index} className={classes.item}>
                  {`${item.amount} - ${item.name} `}
                </li>
              ))}
            </ul>
            {FF__cookTime ? (
              <button className={classes.btn}>Add Time</button>
            ) : (
              ''
            )}
          </div>
        );
      }}
    </Draggable>
  );
}

export default OrderCard;
