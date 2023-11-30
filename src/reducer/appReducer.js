export function todosReducer(state, action) {
  if (action.type === "delete") {
    return state.filter((todo) => todo.id !== action.id);
  }
  if (action.type === "finish") {
    return state.map((todo) => {
      if (todo.id !== action.id) {
        return todo;
      }
      return {
        ...todo,
        done: true,
      };
    });
  }
  if (action.type === "add") {
    return [
      ...state,
      {
        name: action.newTodoName,
        done: false,
        id: Math.random(),
      },
    ];
  }
}
