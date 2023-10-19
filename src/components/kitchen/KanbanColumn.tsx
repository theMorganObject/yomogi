import { ReactNode } from "react";
import classes from "./KanbanColumn.module.css";

interface KanbanColumProps {
  title: string;
  children?: ReactNode;
  id: string;
}

function KanbanColumn({ title, children }: KanbanColumProps) {
  return (
    <div className={classes.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default KanbanColumn;
