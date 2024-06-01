import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "something something..",
    },
  ],
};

export const todoSlicer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: () => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { id: todo.id, text: action.payload.text }
          : todo
      );
    },
  },
});
export const { addTodo, removeTodo, updateTodo } = todoSlicer.actions;
export default todoSlicer.reducer;
