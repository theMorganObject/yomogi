import { Column } from "./OrdersKanban";
//@ts-ignoreignore
export const onDragEnd = (result, columns: Column[], setColumns) => {
  if (!result.destination) return;
  const { source, destination, draggableId } = result;
  console.log("Draggable ID:", draggableId);
  console.log("Source:", source);
  console.log("Destination:", destination);

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns.find(
      ({ columnId }) => columnId === source.droppableId
    )!;
    const destColumn = columns.find(
      (col) => col.columnId === destination.droppableId
    )!;
    const sourceItems = [...sourceColumn.orders];
    const destItems = [...destColumn.orders];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    const newColumns = [...columns];

    const sourceColIndex = columns.findIndex(
      (col) => col.columnId === sourceColumn.columnId
    );
    newColumns[sourceColIndex] = {
      columnId: sourceColumn.columnId,
      orders: sourceItems,
    };
    const destColIndex = columns.findIndex(
      (col) => col.columnId === destColumn.columnId
    );
    newColumns[destColIndex] = {
      columnId: destColumn.columnId,
      orders: destItems,
    };
    console.log(columns, "col");
    console.log(newColumns, "newCol");
    setColumns(newColumns);
  } else {
    const column = columns.find(
      ({ columnId }) => columnId === source.droppableId
    )!;
    const copiedItems = [...column.orders];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);

    const newColumns = [...columns];

    const sourceColIndex = columns.findIndex(
      (col) => col.columnId === column.columnId
    );
    newColumns[sourceColIndex] = {
      columnId: column.columnId,
      orders: copiedItems,
    };

    setColumns(newColumns);
  }
};
