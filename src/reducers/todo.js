const Todo = (state = [], action) => {
  switch (action.type) {
    case "Create":
      state.push(action.payload);
      return [...state];

    case "Delete":
      state.splice(state.indexOf(action.payload), 1);
      return [...state];
    case "Mark":
      state[state.findIndex((e) => e.text === action.payload)].done = true;
      console.log(state);
      return [...state];

    default:
      return state;
  }
};
export default Todo;
