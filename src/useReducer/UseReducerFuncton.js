import { useReducer } from "react";

import { initialTodos } from "./Todos";
import { reducer } from "./ReducerFunction";

export const UseRducerFunction = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
            </label>
          </div>
        );
      })}
    </div>
  );
};
