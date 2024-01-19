import { createSlice } from "@reduxjs/toolkit";

// Initial State of the App
const initialState = {
  todoList: [],
};

// Create Slice (Reducers)
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = [...action.payload];
    },
  },
});

// Export Actions (Functions)
export const { setTodoList } = appSlice.actions;

// Export Reducer (State)
export default appSlice.reducer;
