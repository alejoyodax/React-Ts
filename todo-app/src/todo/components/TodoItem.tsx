import { Todo } from "../interfaces/interfaces";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

interface props {
  todo: Todo;
}

export const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useContext(TodoContext);

  const handleDbClick = () => {
    console.log("Toggle ToDo ID:", todo.id);
    toggleTodo(todo.id);
  };

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={handleDbClick}
    >
      {todo.desc}
    </li>
  );
};
