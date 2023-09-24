export const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          console.log("todo.id);", todo.id);
          console.log("action.id);", action);
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
