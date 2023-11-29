"use client";

import { ReactNode } from "react";
//@ts-ignoreignore
import { Droppable } from "react-beautiful-dnd";
import classes from "./KanbanColumn.module.css";

interface KanbanColumProps {
  title: string;
  // columnId: string;
  children?: ReactNode;
  id: string;
}

function KanbanColumn({ title, children, id }: KanbanColumProps) {
  // Add 'id' to the function parameters
  return (
    <Droppable droppableId={id} key={id}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={classes.container}
            style={{
              background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
              padding: 4,
              width: 250,
              minHeight: 500,
            }}
          >
            <h2>{title}</h2>
            {children}
          </div>
        );
      }}
    </Droppable>
  );
}

export default KanbanColumn;
