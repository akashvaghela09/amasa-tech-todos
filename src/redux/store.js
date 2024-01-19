import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app/appSlice";

// Redux Store Configuration
const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export { store };
