"use client";

import { ReactNode } from "react";
//@ts-ignoreignore
import { Droppable } from "react-beautiful-dnd";
import classes from "./KanbanColumn.module.css";

interface KanbanColumProps {
  title: string;
  children?: ReactNode;
  id: string;
}

function KanbanColumn({ title, children, id }: KanbanColumProps) {
  return (
    <Droppable droppableId={id} key={id}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={classes.container}
            style={{
              background: snapshot.isDraggingOver
                ? "var(--mysticgrape-2)"
                : "linear-gradient(to bottom right, var(--yomogi-0) 45%, var(--mysticgrape-0) 100%)",
              padding: 4,
              minWidth: 250,
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
