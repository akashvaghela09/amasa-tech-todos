import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = [...action.payload];
    },
  },
});

export const { setTodoList } = appSlice.actions;

export default appSlice.reducer;
