import { TodoState, Todo } from "../interfaces/interfaces";

type TodoAction =
  | { type: "addTodo"; payload: Todo }
  | { type: "toggleTodo"; payload: { id: string } };

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "toggleTodo":
      return {
        ...state,
        // HACEMOS USO DEL ... PARA ASEGURARNOS DE COPIAR TODAS LAS PROPIEDADES PARA CREAR UN NUEVO OBJETO
        // ASÍ EVITAMOS EDITAR DIRECTAMENTE EL STATE (RECORDAR QUE EL STATE ES INMUTABLE)
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
